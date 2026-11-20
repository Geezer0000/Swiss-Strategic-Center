"""Bereitet die schlanken Geodaten für die Export-Version vor (einmalig bzw. wenn sich Grenzen/Zonen ändern).

Erzeugt in export/assets/:
  countries.json  – Ländergrenzen 1:110 Mio. (vereinfacht, 2 Nachkommastellen) + Namen/ISO-2 aller Länder
  zones.json      – Konfliktzonen und Ukraine-Snapshot aus data/zones.js, vereinfacht

Aufruf: python prepare_assets.py <ne_110m_admin_0_countries.geojson> <ne_50m_admin_0_countries.geojson>
"""
import json
import sys
from pathlib import Path

from shapely.geometry import mapping, shape

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
OUT = HERE / 'assets'
OUT.mkdir(exist_ok=True)


def rnd(geom, nd):
    def r(c):
        return [round(c[0], nd), round(c[1], nd)] if isinstance(c[0], (int, float)) else [r(x) for x in c]
    g = mapping(geom)
    return {'type': g['type'], 'coordinates': r(g['coordinates'])}


def slim(geom, tol, nd):
    g = shape(geom).buffer(0).simplify(tol, preserve_topology=True)
    return None if g.is_empty else rnd(g, nd)


ne110 = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
ne50 = json.loads(Path(sys.argv[2]).read_text(encoding='utf-8'))

names = {}
for f in ne50['features']:
    p = f['properties']
    a2 = p.get('ISO_A2_EH') or p.get('ISO_A2') or ''
    names[p['ADM0_A3']] = [p.get('NAME_DE') or p['NAME'], a2 if len(a2) == 2 and a2.isalpha() else '']
feats = []
for f in ne110['features']:
    a3 = f['properties']['ADM0_A3']
    if a3 == 'ATA':
        continue
    g = slim(f['geometry'], 0.04, 2)
    if g:
        feats.append({'type': 'Feature', 'properties': {'a3': a3}, 'geometry': g})
(OUT / 'countries.json').write_text(json.dumps({'type': 'FeatureCollection', 'features': feats, 'names': names},
                                               ensure_ascii=False, separators=(',', ':')), encoding='utf-8')

src = (ROOT / 'data' / 'zones.js').read_text(encoding='utf-8')
zones = json.loads(src.split('window.ZONES = ', 1)[1].strip().rstrip(';'))
zf = []
for f in zones['zones']['features']:
    g = slim(f['geometry'], 0.05, 2)
    if g:
        zf.append({'type': 'Feature', 'properties': f['properties'], 'geometry': g})
uf = []
for f in zones['ukraineSnapshot']['features']:
    g = slim(f['geometry'], 0.012, 3)
    if g:
        uf.append({'type': 'Feature', 'properties': f['properties'], 'geometry': g})
(OUT / 'zones.json').write_text(json.dumps({'generated': zones.get('generated'), 'zones': {'type': 'FeatureCollection', 'features': zf},
                                            'ukraine': {'type': 'FeatureCollection', 'features': uf}},
                                           ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
for p in OUT.iterdir():
    print(f'{p.name}: {p.stat().st_size // 1024} KB')
