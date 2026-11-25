"""Swiss Strategic Center – lokaler Lage-Updater (läuft ohne Claude-App).

Ablauf pro Lauf:
  1. Quellen holen: Wikipedia «Portal:Current events» (Tagesseiten, strukturiertes Wikitext) und
     Schweizer RSS-Feeds (SRF, NZZ).
  2. Neue Meldungen deterministisch einordnen (Konflikt, Ereignistyp, Länder) und Orte über die
     Wikipedia-Koordinaten der verlinkten Artikel bestimmen (Fallback: OpenStreetMap/Nominatim).
  3. Lokale KI (Ollama) übersetzt neue Meldungen ins Deutsche (Schweizer Rechtschreibung),
     erzeugt Kurztitel, Opferangaben und einen Ortsnamen.
  4. data/update.js neu schreiben (gleiches Schema wie die App, kumulativ, Einträge mit "via": "lokal").
  5. Export-Datei neu bauen und geänderte Updater-Dateien per git commit + git push auf GitHub hochladen.

Start: python ssc_updater.py            (normaler Lauf inkl. GitHub-Push)
       python ssc_updater.py --no-ai    (ohne KI, nur Rohdaten auf Englisch)
       python ssc_updater.py --no-push  (ohne git commit/push auf GitHub)
       python ssc_updater.py --rebuild  (nur update.js aus dem Zwischenspeicher neu aufbauen, ohne Abruf und ohne KI)
"""
import hashlib
import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
UPDATE_JS = ROOT / 'data' / 'update.js'
STATE = HERE / 'state.json'
LOG = HERE / 'updater.log'
LOCK = HERE / 'updater.lock'
CFG = json.loads((HERE / 'config.json').read_text(encoding='utf-8'))
COUNTRIES = json.loads((HERE / 'countries.json').read_text(encoding='utf-8'))
EN2ISO, ISO2DE = COUNTRIES['en2iso'], COUNTRIES['iso2de']
MARK = '\nwindow.SSC_UPDATE = '
if sys.stdout:  # Konsole unter Windows: Umlaute/Gedankenstriche sicher ausgeben
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

KEEP_CATS = {'Armed conflicts and attacks', 'Disasters and accidents', 'International relations', 'Politics and elections',
             'Law and crime', 'Health and environment', 'Business and economy'}
EVENT_CATS = {'Armed conflicts and attacks', 'Disasters and accidents', 'Health and environment', 'Politics and elections', 'Law and crime'}

# Konflikt-Zuordnung: (id, Stichworte in Themen/Links/Text, Länder-Fallback nur für Kategorie «Armed conflicts»)
CONFLICT_RULES = [
    ('ebola', ['ebola'], []),
    ('irn', ['2026 iran war', 'strait of hormuz', 'hormuz', 'islamic revolutionary guard corps', 'irgc'], ['IRN']),
    ('yem', ['houthi', 'yemeni civil war', 'yemen offensive', 'bab-el-mandeb', 'bab al-mandab', 'saudi airports'], ['YEM', 'SAU']),
    ('ukr', ['russo-ukrainian war', 'russian invasion of ukraine', 'war in ukraine', 'oleshky'], ['UKR']),
    ('blacksea', ['black sea', 'drone incursion', 'airspace violation', 'geran'], ['ROU', 'BGR', 'MDA', 'POL', 'LTU']),
    ('sdn', ['sudanese civil war', 'rapid support forces', 'darfur', 'kordofan'], ['SDN']),
    ('ssd', ['abyei', 'south sudan'], ['SDS']),
    ('gaza', ['gaza', 'west bank', 'hamas', 'israeli settler', 'israeli–palestinian'], ['PSX']),
    ('lbn', ['hezbollah', 'israel–lebanon', 'southern lebanon'], ['LBN']),
    ('syr', ['syrian civil war', 'aftermath of the syrian'], ['SYR']),
    ('mmr', ['myanmar civil war', 'arakan army', 'tatmadaw'], ['MMR']),
    ('drc', ['kivu', 'march 23 movement', 'm23', 'alliance fleuve congo'], ['COD']),
    ('lakechad', ['boko haram', 'iswap', 'islamic state – west africa', 'islamic state west africa'], []),
    ('sahel', ['mali war', 'jama\'at nusrat', 'jnim', 'sahel', 'islamic state – sahel', 'azawad'], ['MLI', 'BFA', 'NER']),
    ('nga', ['nigerian bandit', 'bandit conflict', 'herder'], ['NGA']),
    ('eth', ['tigray', 'tplf', 'fano', 'ethiopian civil conflict', 'ethiopian offensive', 'eritrean incursion'], ['ETH', 'ERI']),
    ('som', ['al-shabaab', 'somali civil war', 'piracy off the coast of somalia'], ['SOM']),
    ('afpak', ['afghanistan–pakistan', 'afghanistan-pakistan', 'durand line'], ['AFG']),
    ('pak', ['khyber pakhtunkhwa', 'balochistan', 'tehrik-i-taliban', 'baloch'], ['PAK']),
    ('kas', ['kashmir'], []),
    ('tha', ['cambodia–thailand', 'thailand–cambodia', 'cambodian–thai'], []),
    ('twn', ['taiwan strait', 'pratas'], ['TWN']),
    ('scs', ['south china sea', 'scarborough', 'second thomas shoal'], []),
    ('hti', ['haitian', 'haiti', 'gang suppression force', 'viv ansanm'], ['HTI']),
    ('mex', ['mexican drug war', 'sinaloa cartel', 'jalisco new generation', 'cartel'], ['MEX']),
    ('col', ['colombian conflict', 'national liberation army (colombia)', 'farc dissidents', 'eln'], ['COL']),
    ('ecu', ['ecuadorian conflict', 'los choneros', 'los lobos'], ['ECU']),
    ('moz', ['cabo delgado', 'islamic state – mozambique'], ['MOZ']),
    ('cmr', ['anglophone crisis', 'ambazonia'], ['CMR']),
    ('caf', ['central african republic civil war'], ['CAF']),
]
# Plausibilitätsprüfung: Kartenpunkte eines Konflikts müssen in diesen Ländern (oder auf See) liegen
CONFLICT_ISOS = {
    'ukr': {'UKR', 'RUS', 'BLR'}, 'irn': {'IRN', 'ISR', 'ARE', 'QAT', 'KWT', 'BHR', 'OMN', 'IRQ', 'JOR', 'SAU', 'SYR', 'LBN', 'CYP', 'TUR', 'AZE'},
    'yem': {'YEM', 'SAU', 'ERI', 'DJI'}, 'sdn': {'SDN', 'SDS', 'TCD'}, 'gaza': {'PSX', 'ISR'}, 'lbn': {'LBN', 'ISR'}, 'syr': {'SYR'},
    'mmr': {'MMR'}, 'drc': {'COD', 'RWA', 'BDI', 'UGA'}, 'ebola': {'COD', 'UGA', 'KEN', 'NGA', 'FRA', 'SDS', 'RWA', 'BDI', 'TZA', 'DEU', 'NLD'},
    'sahel': {'MLI', 'BFA', 'NER', 'BEN', 'TGO'}, 'lakechad': {'NGA', 'TCD', 'CMR', 'NER'}, 'nga': {'NGA'}, 'eth': {'ETH', 'ERI'},
    'som': {'SOM', 'SOL', 'KEN'}, 'ssd': {'SDS', 'SDN'}, 'pak': {'PAK'}, 'afpak': {'AFG', 'PAK'}, 'kas': {'IND', 'PAK'}, 'tha': {'THA', 'KHM'},
    'twn': {'TWN', 'CHN'}, 'scs': {'CHN', 'PHL', 'VNM', 'MYS'}, 'hti': {'HTI'}, 'mex': {'MEX'}, 'col': {'COL'}, 'ecu': {'ECU'},
    'moz': {'MOZ'}, 'cmr': {'CMR'}, 'caf': {'CAF'},
    'blacksea': {'ROU', 'BGR', 'POL', 'LTU', 'LVA', 'EST', 'FIN', 'DEU', 'MDA', 'UKR', 'DNK', 'NOR'},
}
CONFLICT_CATS = {'Armed conflicts and attacks', 'Politics and elections', 'International relations', 'Health and environment', 'Law and crime'}
_POLYS = None


def country_at(lng, lat):
    """Land eines Punkts (Natural Earth 1:110 Mio.); None = offenes Meer oder Küstennähe."""
    global _POLYS
    if _POLYS is None:
        gj = json.loads((HERE / 'ne_110m_countries.geojson').read_text(encoding='utf-8'))
        _POLYS = [(f['properties']['A3'], f['geometry']['coordinates'] if f['geometry']['type'] == 'MultiPolygon'
                   else [f['geometry']['coordinates']]) for f in gj['features']]

    def inside(ring):
        hit, j = False, len(ring) - 1
        for i in range(len(ring)):
            (xi, yi), (xj, yj) = ring[i][:2], ring[j][:2]
            if (yi > lat) != (yj > lat) and lng < (xj - xi) * (lat - yi) / (yj - yi) + xi:
                hit = not hit
            j = i
        return hit
    for a3, polys in _POLYS:
        if any(inside(p[0]) for p in polys):
            return a3
    return None


def plausible(it):
    if not it.get('coords') or not it['c']:
        return False
    a3 = country_at(*it['coords'])
    allowed = CONFLICT_ISOS.get(it['c']) or set(it['isos'])
    return a3 in allowed if a3 else it['t'] in ('schiff', 'abfang', 'drohne', 'luft')

# Ereignistyp aus dem englischen Text (Reihenfolge = Priorität)
TYPE_RULES = [
    ('epidemie', r'\bebola|cholera|outbreak|epidemic|plague\b'),
    ('flughafen', r'airport|air base terminal'),
    ('abfang', r'intercept|shot down|shoots down|downed'),
    ('schiff', r'\b(ship|tanker|vessel|freighter|carrier|boat)s?\b.*\b(hit|struck|sank|sunk|sinks|attack|seiz|hijack|fire)'),
    ('drohne', r'\bdrones?\b'),
    ('luft', r'missile|airstrike|air strike|air raid|\bbomb|shelling|(?<!general )(?<!hunger )\bstrikes?\b|rocket|artillery'),
    ('gefecht', r'clash|captur|retake|recaptur|offensive|fighting|ambush|battle|seize|encircl|\braids?\b|incursion'),
    ('unruhen', r'protest|riot|demonstrat|unrest|general strike'),
    ('anschlag', r'gunmen|shooting|suicide|bombing|massacre|attack|stabbing|explosion|killed by'),
]
# Intensität der Basis-Konflikte (für die Gewichtung im Ticker)
INTENSITY = {'ukr': 5, 'irn': 5, 'yem': 5, 'sdn': 5, 'gaza': 4, 'mmr': 4, 'drc': 4, 'ebola': 4, 'sahel': 4, 'eth': 4, 'hti': 4,
             'lbn': 3, 'lakechad': 3, 'nga': 3, 'som': 3, 'ssd': 3, 'pak': 3, 'afpak': 3, 'mex': 3, 'col': 3, 'blacksea': 3,
             'syr': 2, 'kas': 2, 'twn': 2, 'scs': 2, 'ecu': 2, 'moz': 2, 'cmr': 2, 'caf': 2, 'tha': 1}
PROMPT_VERSION = 2
# Feste Begriffe für die Übersetzung und deterministische Nachkorrektur typischer Modellfehler
GLOSSARY = {
    'West Bank': 'Westjordanland', 'Gaza Strip': 'Gazastreifen', 'Black Sea': 'Schwarzes Meer', 'Red Sea': 'Rotes Meer',
    'Strait of Hormuz': 'Strasse von Hormus', 'ceasefire': 'Waffenruhe', 'Houthis': 'Huthi', 'Yellow vests': 'Gelbwesten',
    'National Rally': 'Rassemblement National', 'Hostages Square': 'Platz der Geiseln', 'IRGC': 'Revolutionsgarden (IRGC)',
    'Rapid Support Forces': 'RSF-Miliz', 'first lady': 'First Lady', 'special envoy': 'Sondergesandter', 'drone': 'Drohne',
    'Federal Council': 'Bundesrat', 'State Department': 'US-Aussenministerium', 'European Commission': 'EU-Kommission',
}
POSTFIX = [
    (r'Israëli', 'Israeli'), (r'\bWestbank\b', 'Westjordanland'), (r'(?i)\bwest ?bank\b', 'Westjordanland'),
    (r'Schwarzen See', 'Schwarzen Meer'), (r'Schwarze See', 'Schwarze Meer'), (r'(?i)\bceasefire\b', 'Waffenruhe'),
    (r'(?i)\byellow vests\b', 'Gelbwesten'), (r'\bRiots?\b', 'Krawalle'), (r'(\d)\s+Toten\b', r'\1 Tote'),
    (r'\b1 getötet\b', '1 Toter'), (r'(\d)\s+getötet\b', r'\1 Tote'), (r'(\d)\s+verletzt\b', r'\1 Verletzte'),
    (r'US-Präsidentin Melania Trump', 'US-First-Lady Melania Trump'), (r'(?i)\bHostages ?Square\b', 'Platz der Geiseln'),
    (r'(\d)\.(\d{3})\b', r"\1'\2"), (r'ß', 'ss'), (r'\b1 Tot\b', '1 Toter'), (r'in der Schwarzen Meer', 'im Schwarzen Meer'),
    (r'Humanitärer Waffenruhe', 'Humanitäre Waffenruhe'), (r'einen humanitären Waffenruhe', 'eine humanitäre Waffenruhe'),
    (r'\bProtestierer\b', 'Demonstrierende'), (r'(?i)\bNational Rally\b', 'Rassemblement National'),
    (r'Linkskonservative', 'Linke'), (r'\bzumindest\b', 'mindestens'), (r'(?i)\byemenit', 'jemenit'), (r'\bYemen\b', 'Jemen'),
    (r'\bOleshky\b', 'Oleschky'), (r'\bKyiv\b', 'Kiew'),
]


def fix_de(s):
    for rx, rep in POSTFIX:
        s = re.sub(rx, rep, s or '')
    return s.strip()
GEO_PRIORITY = ['airport', 'railwaystation', 'landmark', 'building', 'edu', 'city', 'camp', 'isle', 'waterbody', 'mountain',
                'adm3rd', 'adm2nd', 'river', 'pass', 'glacier', 'forest', 'adm1st']
TAGS = ['Angriff', 'Front', 'Diplomatie', 'Humanitär', 'Maritim', 'Politik', 'Proteste', 'Epidemie', 'Katastrophe', 'Justiz', 'Wirtschaft']
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


def log(msg):
    line = f'{datetime.now():%Y-%m-%d %H:%M:%S}  {msg}'
    print(line, flush=True)
    with LOG.open('a', encoding='utf-8') as fh:
        fh.write(line + '\n')
    if LOG.stat().st_size > 2_000_000:  # Log klein halten
        LOG.write_text('\n'.join(LOG.read_text(encoding='utf-8').splitlines()[-4000:]) + '\n', encoding='utf-8')


def http(url, data=None, timeout=60, accept='application/json'):
    req = urllib.request.Request(url, data=data, headers={'User-Agent': CFG['user_agent'], 'Accept': accept,
                                                          **({'Content-Type': 'application/json'} if data else {})})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', errors='replace')


# ------------------------------------------------------------ Wikipedia-Tagesportale
def wiki_day(day):
    title = f'Portal:Current_events/{day.year}_{MONTHS[day.month - 1]}_{day.day}'
    try:
        return http(f'https://en.wikipedia.org/w/index.php?title={urllib.parse.quote(title)}&action=raw', accept='text/plain')
    except Exception as e:
        log(f'  Wikipedia {day:%d.%m.}: nicht verfügbar ({e})')
        return ''


def clean_wiki(s):
    s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    s = re.sub(r'\[https?://\S+(?:\s+[^\]]*)?\]', '', s)
    s = re.sub(r'\[\[(?:[^\]|]*\|)?([^\]]*)\]\]', r'\1', s)
    s = re.sub(r"'{2,}", '', s)
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).strip()


def parse_day(raw, day):
    items, cat, stack = [], None, {}
    for line in raw.splitlines():
        m = re.match(r"^'''(.+?)'''\s*$", line.strip()) or re.match(r'^;\s*(.+)$', line.strip())
        if m:
            cat, stack = clean_wiki(m.group(1)), {}
            continue
        m = re.match(r'^(\*+)\s*(.*)$', line)
        if not m or not cat:
            continue
        depth, body = len(m.group(1)), m.group(2)
        srcs = re.findall(r'\[(https?://\S+)', body)
        if not srcs:  # Themenzeile (z. B. «[[Gaza war]]»)
            stack[depth] = clean_wiki(body)
            for d in [d for d in stack if d > depth]:
                del stack[d]
            continue
        links = [l.split('|')[0].strip() for l in re.findall(r'\[\[([^\]]+)\]\]', body)]
        topics = [stack[d] for d in sorted(stack) if d < depth]
        text = clean_wiki(body)
        if len(text) < 25:
            continue
        iid = hashlib.sha1(f'{day:%Y-%m-%d}|{text}'.encode()).hexdigest()[:16]
        items.append({'id': iid, 'date': f'{day:%Y-%m-%d}', 'cat': cat, 'topics': topics, 'links': links, 'text': text, 'src': srcs[0]})
    return items


def enrich(it):
    """Konflikt, Ereignistyp und Länder deterministisch bestimmen."""
    hay = ' | '.join(it['topics'] + it['links'] + [it['text']]).lower()
    isos = []
    for name in it['links'] + it['topics']:
        iso = EN2ISO.get(name.lower())
        if iso and iso not in isos:
            isos.append(iso)
    if not isos:
        for name, iso in EN2ISO.items():
            if len(name) > 4 and re.search(r'\b' + re.escape(name) + r'\b', it['text'].lower()) and iso not in isos:
                isos.append(iso)
    it['isos'] = isos[:4]
    conflict = None
    for cid, kws, fb in (CONFLICT_RULES if it['cat'] in CONFLICT_CATS else []):
        if any(k in hay for k in kws):
            conflict = cid
            break
    if not conflict and it['cat'] == 'Armed conflicts and attacks':
        for cid, _, fb in CONFLICT_RULES:
            if fb and set(fb) & set(isos):
                conflict = cid
                break
    it['c'] = conflict
    t = None
    if it['cat'] in EVENT_CATS:
        for typ, rx in TYPE_RULES:
            if re.search(rx, it['text'], re.I):
                t = typ
                break
        if it['cat'] == 'Disasters and accidents' and t != 'epidemie':
            t = None  # Unfälle/Naturereignisse nicht als Konfliktpunkt
        if it['cat'] in ('Politics and elections', 'Law and crime'):
            # Politik/Justiz: nur Proteste und Gewalttaten als Kartenpunkt
            t = 'unruhen' if re.search(dict(TYPE_RULES)['unruhen'], it['text'], re.I) else \
                ('anschlag' if re.search(r'gunmen|shooting|suicide|bombing|massacre|stabbing', it['text'], re.I) else None)
    it['t'] = t
    return it


# ------------------------------------------------------------ Koordinaten
def wiki_coords(titles, cache):
    todo = [t for t in dict.fromkeys(titles) if t and t not in cache]
    for i in range(0, len(todo), 40):
        chunk = todo[i:i + 40]
        try:
            q = urllib.parse.urlencode({'action': 'query', 'prop': 'coordinates', 'coprop': 'type', 'titles': '|'.join(chunk),
                                        'redirects': 1, 'format': 'json', 'formatversion': 2})
            j = json.loads(http(f'https://en.wikipedia.org/w/api.php?{q}'))
            norm = {n['from']: n['to'] for n in j['query'].get('normalized', [])}
            redir = {r['from']: r['to'] for r in j['query'].get('redirects', [])}
            pages = {p['title']: p for p in j['query'].get('pages', [])}
            for t in chunk:
                key = redir.get(norm.get(t, t), norm.get(t, t))
                p = pages.get(key, {})
                co = (p.get('coordinates') or [None])[0]
                cache[t] = [round(co['lon'], 4), round(co['lat'], 4), co.get('type') or ''] if co else None
        except Exception as e:
            log(f'  Koordinatenabfrage fehlgeschlagen: {e}')
        time.sleep(0.5)


def pick_coords(it, cache):
    best, rank = None, 999
    for t in it['links']:
        c = cache.get(t)
        if not c or EN2ISO.get(t.lower()):  # Länder sind zu ungenau
            continue
        typ = (c[2] or '').split('(')[0]
        r = GEO_PRIORITY.index(typ) if typ in GEO_PRIORITY else 50
        if r < rank:
            best, rank = c[:2], r
    return best


def nominatim(place, iso, cache):
    key = f'{place}|{iso}'
    if key in cache:
        return cache[key]
    try:
        q = urllib.parse.urlencode({'q': place, 'format': 'json', 'limit': 1})
        j = json.loads(http(f'https://nominatim.openstreetmap.org/search?{q}'))
        cache[key] = [round(float(j[0]['lon']), 4), round(float(j[0]['lat']), 4)] if j else None
    except Exception:
        cache[key] = None
    time.sleep(1.1)  # Nutzungsrichtlinie: max. 1 Anfrage/Sekunde
    return cache[key]


# ------------------------------------------------------------ Systemschonung (Windows)
BELOW_NORMAL, IDLE = 0x4000, 0x40


def set_priority(pid=None, cls=IDLE):
    """Prozesspriorität senken (eigener Prozess oder fremde PID); stillschweigend, falls nicht möglich."""
    try:
        import ctypes
        k32 = ctypes.windll.kernel32
        h = k32.GetCurrentProcess() if pid is None else k32.OpenProcess(0x0200 | 0x0400, False, pid)
        if h:
            k32.SetPriorityClass(h, cls)
            if pid is not None:
                k32.CloseHandle(h)
    except Exception:
        pass


def pids_of(image):
    try:
        out = subprocess.run(['tasklist', '/FO', 'CSV', '/NH', '/FI', f'IMAGENAME eq {image}'], capture_output=True,
                             encoding='cp850', errors='replace', creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0)).stdout or ''
        return [int(l.split('","')[1]) for l in out.splitlines() if l.startswith('"') and image.lower() in l.lower()]
    except Exception:
        return []


def lower_ollama_priority():
    for image in ('llama-server.exe', 'ollama.exe'):
        for pid in pids_of(image):
            set_priority(pid, BELOW_NORMAL)


def pid_alive(pid):
    try:
        out = subprocess.run(['tasklist', '/FO', 'CSV', '/NH', '/FI', f'PID eq {pid}'], capture_output=True, encoding='cp850',
                             errors='replace', creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0)).stdout or ''
        return f'"{pid}"' in out and 'python' in out.lower()
    except Exception:
        return True  # im Zweifel als aktiv werten


def unload_model():
    """Modell sofort aus dem Grafikspeicher entfernen."""
    try:
        http(f'{CFG["ollama_url"]}/api/generate', data=json.dumps({'model': CFG['model'], 'keep_alive': 0}).encode(), timeout=30)
        log('  Modell entladen – Grafikspeicher freigegeben')
    except Exception:
        pass


# ------------------------------------------------------------ Lokale KI (Ollama)
def ensure_ollama():
    url = CFG['ollama_url']
    try:
        http(f'{url}/api/version', timeout=5)
    except Exception:
        exe = os.path.expandvars(CFG['ollama_exe'])
        log('  Ollama läuft nicht – starte «ollama serve»')
        subprocess.Popen([exe, 'serve'], creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0),
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(30):
            time.sleep(2)
            try:
                http(f'{url}/api/version', timeout=5)
                break
            except Exception:
                pass
        else:
            raise RuntimeError('Ollama-Server nicht erreichbar')
    tags = json.loads(http(f'{url}/api/tags'))
    if not any(m['name'].startswith(CFG['model']) for m in tags.get('models', [])):
        log(f'  Modell {CFG["model"]} fehlt – lade herunter (einmalig)')
        subprocess.run([os.path.expandvars(CFG['ollama_exe']), 'pull', CFG['model']], check=True,
                       creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0))


SCHEMA = {
    'type': 'object',
    'properties': {'items': {'type': 'array', 'items': {'type': 'object', 'properties': {
        'id': {'type': 'string'}, 'title_de': {'type': 'string'}, 'text_de': {'type': 'string'},
        'cas_de': {'type': 'string'}, 'place': {'type': 'string'}, 'tag': {'type': 'string', 'enum': TAGS}},
        'required': ['id', 'title_de', 'text_de', 'cas_de', 'place', 'tag']}}},
    'required': ['items'],
}
SYSTEM = ('Du bist Redaktor eines Schweizer Lagezentrums und übersetzt englische Kurzmeldungen in korrektes, '
          'sachliches Deutsch (Schweizer Rechtschreibung: immer «ss», nie «ß»). Regeln: nichts erfinden, nichts weglassen; '
          'Personen, Ämter und Titel exakt übernehmen (z. B. «first lady» bleibt First Lady, nicht Präsidentin); '
          'Zahlen exakt übernehmen; Ortsnamen in der üblichen deutschen Form (Kiew, Westjordanland, Strasse von Hormus); '
          'keine englischen Wörter stehen lassen, ausser Eigennamen. Feste Begriffe: '
          + '; '.join(f'{k} = {v}' for k, v in GLOSSARY.items()) + '. Antworte ausschliesslich im verlangten JSON-Format.')


def ai_translate(batch):
    payload = [{'id': it['id'], 'text': it['text'], 'thema': ' > '.join(it['topics'][-2:])} for it in batch]
    user = ('Für jede Meldung:\n'
            '- title_de: kurzer deutscher Titel, 3–8 Wörter, möglichst mit dem konkreten Ort (z. B. «Flughafen Riad getroffen»)\n'
            '- text_de: vollständige, sachliche deutsche Übersetzung in 1–2 Sätzen\n'
            '- cas_de: Opfer/Schaden kurz auf Deutsch (z. B. «13 Tote, 308 Verletzte»), sonst leer\n'
            '- place: der genaueste Ort (Stadt, Flughafen, Anlage) auf Englisch mit Land, z. B. «King Khalid International Airport, Saudi Arabia»; leer wenn keiner\n'
            f'- tag: eine Kategorie aus {", ".join(TAGS)}\n'
            'Gib die id unverändert zurück.\n\nMeldungen:\n' + json.dumps(payload, ensure_ascii=False))
    body = json.dumps({'model': CFG['model'], 'stream': False, 'format': SCHEMA, 'keep_alive': '60s',
                       'options': {'temperature': 0.05, 'num_ctx': 8192},
                       'messages': [{'role': 'system', 'content': SYSTEM}, {'role': 'user', 'content': user}]}).encode()
    res = json.loads(http(f'{CFG["ollama_url"]}/api/chat', data=body, timeout=1800))
    out = json.loads(res['message']['content']).get('items', [])
    return {o['id']: o for o in out if isinstance(o, dict) and o.get('id')}


def swiss_text(s):
    return (s or '').replace('ß', 'ss').strip()


# ------------------------------------------------------------ Schweizer RSS
SWISS_TAGS = [('BUNDESRAT', r'bundesrat|parmelin|cassis|keller-sutter'), ('PARLAMENT', r'nationalrat|ständerat|parlament|session'),
              ('ABSTIMMUNG', r'abstimmung|initiative|referendum|volksabstimmung'), ('ARMEE', r'armee|vbs|f-35|luftwaffe|pfister|drohne'),
              ('EU', r'\beu\b|bilaterale|brüssel|europa'), ('WIRTSCHAFT', r'zoll|wirtschaft|snb|franken|seco|export|stellen'),
              ('ASYL', r'asyl|migration|flüchtling'), ('SICHERHEIT', r'polizei|anschlag|cyber|fedpol')]


def swiss_news():
    out = []
    for feed in CFG['swiss_feeds']:
        try:
            root = ET.fromstring(http(feed, accept='application/rss+xml'))
            for item in root.iter('item'):
                title, link = (item.findtext('title') or '').strip(), (item.findtext('link') or '').strip()
                if 'srf.ch' in feed and '/news/schweiz' not in link:
                    continue
                pub = item.findtext('pubDate') or ''
                try:
                    ts = datetime.strptime(pub[:25].strip(), '%a, %d %b %Y %H:%M:%S').timestamp()
                except ValueError:
                    ts = 0
                tag = next((t for t, rx in SWISS_TAGS if re.search(rx, title, re.I)), 'SCHWEIZ')
                text = swiss_text(re.sub(r'^[\s–—-]+', '', title).replace(' – ', ': ', 1))
                out.append((ts, {'tag': tag, 'text': text, 'src': link}))
        except Exception as e:
            log(f'  Feed {feed}: {e}')
    # Politisch relevante Meldungen (Bundesrat, Parlament, Armee, EU, Wirtschaft …) zuerst, dann übrige; jeweils neueste zuerst
    out.sort(key=lambda x: (x[1]['tag'] == 'SCHWEIZ', -x[0]))
    seen, res = [], []
    for _, n in out:
        norm = re.sub(r'\W+', ' ', n['text'].lower()).strip()
        if any(norm in s or s in norm for s in seen):
            continue
        seen.append(norm)
        res.append(n)
    return res[:10]


# ------------------------------------------------------------ update.js lesen/schreiben
def read_update():
    try:
        s = UPDATE_JS.read_text(encoding='utf-8')
        head, body = s.split(MARK, 1)
        return head, json.loads(body.strip().rstrip(';'))
    except Exception as e:
        log(f'  update.js nicht lesbar ({e}) – beginne neu')
        return ('// Swiss Strategic Center – laufendes Lage-Update (Schema: siehe App)', {})


def write_update(head, data):
    tmp = UPDATE_JS.with_suffix('.tmp')
    tmp.write_text(head + MARK + json.dumps(data, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
    json.loads(tmp.read_text(encoding='utf-8').split(MARK, 1)[1].strip().rstrip(';'))  # Validierung
    os.replace(tmp, UPDATE_JS)


def fmt_d(d):
    return f'{int(d[8:10])}.{int(d[5:7])}.'


def is_unrest(it):
    if it.get('c') == 'unrest':
        return True
    topics = [str(t).lower() for t in it.get('topics', [])]
    return any('unrest' in t or ('protest' in t and 'europa' in t) for t in topics)


def base_events():
    """Kuratierte Ereignisse aus data/conflicts.js (Ort + Datum), um Doppelpunkte zu vermeiden."""
    try:
        src = (ROOT / 'data' / 'conflicts.js').read_text(encoding='utf-8')
        return [(d, float(x), float(y)) for d, x, y in re.findall(r"E\('\w+', '\w+', '([\d-]+)', ([-\d.]+), ([-\d.]+),", src)]
    except Exception:
        return []


def near_existing(ev, known):
    d0 = ev['d']
    for d, x, y in known:
        if abs(x - ev['coords'][0]) < 0.35 and abs(y - ev['coords'][1]) < 0.35 and len(d) == 10 and \
                abs((datetime.fromisoformat(d) - datetime.fromisoformat(d0)).days) <= 1:
            return True
    return False


def build(data, items, state):
    now = datetime.now().astimezone()
    today = datetime.now(timezone.utc).date()
    keep_days = CFG.get('keep_days', 21)
    event_keep_days = CFG.get('event_keep_days', 14)
    event_cutoff = f'{today - timedelta(days=event_keep_days):%Y-%m-%d}'
    update_cutoff = f'{today - timedelta(days=keep_days):%Y-%m-%d}'

    data['updated'] = now.isoformat(timespec='seconds')
    data.setdefault('conflicts', [])
    data.setdefault('events', [])
    data.setdefault('countries', {})
    data.setdefault('swiss', {})
    data.setdefault('chImpact', {})

    # Veraltete Einträge und unrest komplett bereinigen
    data['conflicts'] = [c for c in data['conflicts'] if c.get('id') != 'unrest']
    data['events'] = [e for e in data['events'] if not is_unrest(e) and e.get('d', '') >= event_cutoff and e.get('via') != 'lokal']
    for c in data['conflicts']:
        c['updates'] = [u for u in c.get('updates', []) if u.get('via') != 'lokal' and u.get('date', '') >= update_cutoff]

    # Nur Items berücksichtigen, die innerhalb des Behalte-Zeitraums liegen und nicht veraltet sind
    items = [it for it in items if not is_unrest(it) and it.get('date', '') >= update_cutoff]
    items = sorted(items, key=lambda x: x['date'], reverse=True)
    for it in items:  # Nachkorrektur auch für bereits zwischengespeicherte Übersetzungen
        it['title_de'], it['text_de'], it['cas_de'] = fix_de(it.get('title_de')), fix_de(it.get('text_de')), fix_de(it.get('cas_de'))
    known = base_events() + [(e['d'], e['coords'][0], e['coords'][1]) for e in data['events']]
    per_conf, local_now = {}, {}
    for it in items:
        title, text = it.get('title_de') or it['text'][:80], it.get('text_de') or it['text']
        if it['c']:
            per_conf.setdefault(it['c'], [])
            if len(per_conf[it['c']]) < 12 and it['date'] >= update_cutoff:
                per_conf[it['c']].append({'date': it['date'], 'tag': it.get('tag') or 'Lage', 'text': text, 'src': it['src'], 'via': 'lokal'})
            ev = {'c': it['c'], 't': it['t'], 'd': it['date'], 'coords': it['coords'], 'title': title,
                  'txt': text, 'cas': it.get('cas_de') or '', 'src': it['src'], 'via': 'lokal'}
            # Taktische Kartenpunkte verfallen nach event_keep_days (14 Tagen)
            if it['t'] and it['date'] >= event_cutoff and plausible(it) and not near_existing(ev, known):
                data['events'].append(ev)
                known.append((ev['d'], ev['coords'][0], ev['coords'][1]))
        for iso in it['isos'][:2]:
            if it['date'] >= update_cutoff:
                lst = local_now.setdefault(iso, [])
                if len(lst) < 4:
                    lst.append(f'{fmt_d(it["date"])}: {text}')
    for cid, ups in per_conf.items():
        c = next((x for x in data['conflicts'] if x.get('id') == cid), None)
        if not c:
            c = {'id': cid, 'updates': []}
            data['conflicts'].append(c)
        c['updates'] = sorted(ups + [u for u in c.get('updates', []) if u.get('date', '') >= update_cutoff], key=lambda u: u.get('date', ''), reverse=True)[:16]
    # Veraltete leere Konflikte ohne frische Meldungen entfernen
    data['conflicts'] = [c for c in data['conflicts'] if c.get('updates') and len(c['updates']) > 0]
    data['events'].sort(key=lambda e: e.get('d', ''), reverse=True)
    data['countries'] = {iso: {'now': lst[:6]} for iso, lst in local_now.items()}
    state['country_now_local'] = local_now
    # Ticker: letzte 3 Tage, gewichtet nach Konfliktintensität, höchstens 2 Meldungen pro Konflikt/Land
    recent = [i for i in items if i['date'] >= f'{datetime.now().date() - timedelta(days=3):%Y-%m-%d}' and i.get('title_de')]
    recent.sort(key=lambda i: i['date'], reverse=True)  # stabil: innerhalb gleicher Gewichtung neueste zuerst
    recent.sort(key=lambda i: -(INTENSITY.get(i['c'], 0) + (2 if i['cat'] == 'Armed conflicts and attacks' else 0)))
    ticker, per_key = [], {}
    for it in recent:
        key = it['c'] or (it['isos'][0] if it['isos'] else 'welt')
        if per_key.get(key, 0) >= 2 or len(ticker) >= 14:
            continue
        per_key[key] = per_key.get(key, 0) + 1
        tag = (ISO2DE.get(it['isos'][0], '') if it['isos'] else '').upper() or 'WELT'
        ticker.append({'tag': tag[:14], 'c': it['c'], 'text': it['title_de']})
    if ticker:
        data['news'] = ticker
    sw = swiss_news()
    if sw:
        data['swiss']['news'] = sw
    data['swiss']['stand'] = f'{now:%d.%m.%Y}'


# ------------------------------------------------------------ GitHub-Sync
GIT_TRACKED_FILES = ['data/update.js', 'Swiss-Strategic-Center-Mobil.html', 'updater/state.json']


def run_git(args, timeout=60):
    env = {**os.environ, 'GIT_TERMINAL_PROMPT': '0'}
    return subprocess.run(
        ['git', *args],
        cwd=str(ROOT),
        env=env,
        capture_output=True,
        text=True,
        encoding='utf-8',
        errors='replace',
        timeout=timeout,
        creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0),
    )


def git_sync():
    if not (ROOT / '.git').exists():
        log('  GitHub-Sync übersprungen (kein Git-Repository)')
        return
    branch = CFG.get('git_branch', 'main')
    try:
        files = [f for f in GIT_TRACKED_FILES if (ROOT / f).exists()]
        if not files:
            return
        st = run_git(['status', '--porcelain', '--', *files])
        if st.returncode != 0:
            log(f'  GitHub-Sync: git status fehlgeschlagen ({st.stderr.strip()})')
            return
        if not st.stdout.strip():
            log('  GitHub-Sync: keine Änderungen zum Hochladen')
            return
        add = run_git(['add', '--', *files])
        if add.returncode != 0:
            log(f'  GitHub-Sync: git add fehlgeschlagen ({add.stderr.strip()})')
            return
        if run_git(['diff', '--cached', '--quiet']).returncode == 0:
            log('  GitHub-Sync: keine gestagten Änderungen')
            return
        stamp = datetime.now().strftime('%Y-%m-%d %H:%M')
        cm = run_git(['commit', '-m', f'Lage-Update {stamp}'])
        if cm.returncode != 0:
            log(f'  GitHub-Sync: git commit fehlgeschlagen ({cm.stderr.strip() or cm.stdout.strip()})')
            return
        pull = run_git(['pull', '--rebase', '--autostash', 'origin', branch], timeout=90)
        if pull.returncode != 0:
            run_git(['rebase', '--abort'])
            log(f'  GitHub-Sync: git pull --rebase fehlgeschlagen ({pull.stderr.strip() or pull.stdout.strip()})')
            return
        push = run_git(['push', 'origin', branch], timeout=90)
        if push.returncode != 0:
            log(f'  GitHub-Sync: git push fehlgeschlagen ({push.stderr.strip() or push.stdout.strip()})')
            return
        log(f'  GitHub-Sync: Stand auf origin/{branch} gepusht ({stamp})')
    except FileNotFoundError:
        log('  GitHub-Sync übersprungen (git ist nicht im PATH installiert)')
    except Exception as e:
        log(f'  GitHub-Sync fehlgeschlagen: {e!r}')


# ------------------------------------------------------------ Hauptablauf
def main():
    no_ai = '--no-ai' in sys.argv
    no_push = '--no-push' in sys.argv
    if LOCK.exists():
        try:
            other = int(LOCK.read_text().strip())
        except ValueError:
            other = 0
        if other and pid_alive(other) and time.time() - LOCK.stat().st_mtime < 3 * 3600:
            log('Anderer Lauf aktiv – abgebrochen')
            return
    LOCK.write_text(str(os.getpid()))
    set_priority()  # eigener Prozess: niedrigste Priorität
    used_ai = False
    try:
        log('=== Lage-Update gestartet ===')
        state = json.loads(STATE.read_text(encoding='utf-8')) if STATE.exists() else {}
        cache_items, coords, nomi = state.setdefault('items', {}), state.setdefault('coords', {}), state.setdefault('nominatim', {})
        today = datetime.now(timezone.utc).date()
        fresh = []
        for k in range(0 if '--rebuild' in sys.argv else CFG['days_back'] + 1):
            day = today - timedelta(days=k)
            parsed = [i for i in parse_day(wiki_day(day), day) if i['cat'] in KEEP_CATS]
            new = [enrich(i) for i in parsed if i['id'] not in cache_items]
            log(f'  Wikipedia {day:%d.%m.}: {len(parsed)} Meldungen, {len(new)} neu')
            fresh += new
        # Meldungen der letzten 7 Tage, die mit einer älteren Prompt-Version übersetzt wurden, verbessert neu übersetzen
        if not no_ai and '--rebuild' not in sys.argv:
            week = f'{today - timedelta(days=7):%Y-%m-%d}'
            fresh += [v for v in cache_items.values() if v.get('pv') != PROMPT_VERSION and v['date'] >= week]
        fresh = fresh[:CFG['max_new_items_per_run']]
        wiki_coords([l for it in fresh for l in it['links']], coords)
        for it in fresh:
            it['coords'] = pick_coords(it, coords)
        if fresh and not no_ai:
            ensure_ollama()
            used_ai = True
            bs = CFG['batch_size']
            for i in range(0, len(fresh), bs):
                batch = fresh[i:i + bs]
                t0 = time.time()
                try:
                    res = ai_translate(batch)
                except Exception as e:
                    log(f'  KI-Batch fehlgeschlagen ({e}) – englischer Originaltext bleibt')
                    res = {}
                for it in batch:
                    r = res.get(it['id'], {})
                    it['title_de'], it['text_de'] = swiss_text(r.get('title_de')), swiss_text(r.get('text_de'))
                    it['cas_de'], it['tag'] = swiss_text(r.get('cas_de')), r.get('tag') or ''
                    if it['t'] and not it['coords'] and r.get('place'):
                        it['coords'] = nominatim(r['place'], it['isos'][0] if it['isos'] else '', nomi)
                    if r:  # nur Erfolgreiches zwischenspeichern; Fehlgeschlagenes wird beim nächsten Lauf erneut versucht
                        it['pv'] = PROMPT_VERSION
                        cache_items[it['id']] = it
                lower_ollama_priority()
                # Zwischenstand sichern: bricht Windows den Lauf ab (Benutzer wieder aktiv), geht nichts verloren
                STATE.write_text(json.dumps(state, ensure_ascii=False), encoding='utf-8')
                log(f'  KI: {min(i + bs, len(fresh))}/{len(fresh)} übersetzt ({time.time() - t0:.0f} s)')
        else:
            for it in fresh:
                cache_items.setdefault(it['id'], it)
        cutoff = f'{today - timedelta(days=CFG.get("keep_days", 14)):%Y-%m-%d}'
        for k in [k for k, v in list(cache_items.items()) if v.get('date', '') < cutoff or is_unrest(v)]:
            del cache_items[k]
        for v in cache_items.values():  # Einordnungsregeln können sich ändern: Zwischenspeicher neu einordnen (ohne KI)
            enrich(v)
            v['coords'] = pick_coords(v, coords) or v.get('coords')
        head, data = read_update()
        build(data, list(cache_items.values()), state)
        write_update(head, data)
        STATE.write_text(json.dumps(state, ensure_ascii=False), encoding='utf-8')
        try:  # Export-Version für Handy/PC (eine Datei) mit dem neuen Stand neu erzeugen
            sys.path.insert(0, str(ROOT / 'export'))
            import build_export
            log(f'  Export aktualisiert: {build_export.OUT.name} ({build_export.build() // 1024} KB)')
        except Exception as e:
            log(f'  Export fehlgeschlagen: {e!r}')
        if CFG.get('git_auto_push', True) and not no_push:
            git_sync()
        n_ev = sum(1 for e in data['events'] if e.get('via') == 'lokal')
        log(f'=== Fertig: {len(fresh)} neue Meldungen, {n_ev} lokale Kartenpunkte, {len(data.get("news", []))} Ticker, '
            f'{len(data["swiss"].get("news", []))} CH-News ===')
    except Exception as e:
        log(f'FEHLER: {e!r}')
        raise
    finally:
        if used_ai:
            unload_model()
        LOCK.unlink(missing_ok=True)


if __name__ == '__main__':
    main()
