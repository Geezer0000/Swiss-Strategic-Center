"""Baut die Export-Version «Swiss-Strategic-Center-Mobil.html»: eine einzige Datei für Handy und PC.

Alle Daten (Länderdossiers, Konflikte, Ereignisse, Schweiz, laufendes Update, vereinfachte Geodaten) werden
gzip-komprimiert und base64-codiert in die Seite eingebettet. Die Seite entpackt sie im Browser.
Wird nach jedem Lauf des Updaters automatisch aufgerufen; manuell: python build_export.py
"""
import base64
import gzip
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
DATA = ROOT / 'data'
OUT = ROOT / 'Swiss-Strategic-Center-Mobil.html'
DATA_FILES = ['conflicts.js', 'swiss.js', 'countries-europe.js', 'countries-mena.js', 'countries-africa.js',
              'countries-asia.js', 'countries-americas.js', 'update.js']


def strip_comments(js):
    # Nur ganze Kommentarzeilen entfernen (Inhalte von Zeichenketten bleiben unangetastet)
    return '\n'.join(l for l in js.splitlines() if not l.lstrip().startswith('//'))


def build():
    parts = [
        'window.GEO=' + (HERE / 'assets' / 'countries.json').read_text(encoding='utf-8') + ';',
        'window.ZL=' + (HERE / 'assets' / 'zones.json').read_text(encoding='utf-8') + ';',
    ]
    parts += [strip_comments((DATA / f).read_text(encoding='utf-8')) for f in DATA_FILES]
    payload = base64.b64encode(gzip.compress('\n'.join(parts).encode('utf-8'), compresslevel=9)).decode('ascii')
    html = (HERE / 'template.html').read_text(encoding='utf-8')
    html = html.replace('/*__PAYLOAD__*/', payload)
    html = re.sub(r'\n\s*\n', '\n', html)
    tmp = OUT.with_suffix('.tmp')
    tmp.write_text(html, encoding='utf-8')
    tmp.replace(OUT)
    return OUT.stat().st_size


if __name__ == '__main__':
    size = build()
    print(f'{OUT.name}: {size / 1024:.0f} KB')
