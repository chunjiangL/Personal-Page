"""Build the GPU coastline mask: python scripts/build-atlas-mask.py (requires Pillow)."""
import json
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
width, height = 8192, 4096
# Let D3 clip rings at the antimeridian before rasterization. Drawing raw
# longitude pairs would produce horizontal bands across the entire texture.
rings = json.loads(subprocess.check_output(['node', '-e', r"""
const fs = require('node:fs'), vm = require('node:vm');
const context = vm.createContext({});
for (const file of ['d3-array.min.js', 'd3-geo.min.js', 'topojson-client.min.js'])
    vm.runInContext(fs.readFileSync('assets/vendor/' + file, 'utf8'), context);
const { d3, topojson } = context;
const topology = JSON.parse(fs.readFileSync('assets/vendor/land-50m.json', 'utf8'));
const geometry = topojson.feature(topology, topology.objects.land);
const rings = [];
const target = {
    moveTo(x, y) { rings.push([[x, y]]); },
    lineTo(x, y) { rings[rings.length - 1].push([x, y]); },
    closePath() {}
};
const projection = d3.geoEquirectangular().translate([4096, 2048]).scale(8192 / (2 * Math.PI)).precision(.1);
d3.geoPath(projection, target)(geometry);
process.stdout.write(JSON.stringify(rings));
"""], cwd=root))

def signed_area(ring):
    return sum(a[0] * b[1] - b[0] * a[1] for a, b in zip(ring, ring[1:] + ring[:1])) / 2

# D3 produces clockwise exterior rings and counterclockwise holes in screen space.
# Paint from large to small so lake islands retain their coastline.
rings.sort(key=lambda ring: abs(signed_area(ring)), reverse=True)
exterior_sign = 1 if signed_area(rings[0]) > 0 else -1
image = Image.new('L', (width, height))
draw = ImageDraw.Draw(image)
for ring in rings:
    draw.polygon(ring, fill=255 if signed_area(ring) * exterior_sign > 0 else 0)
image = image.resize((4096, 2048), Image.Resampling.LANCZOS)
output = root / 'assets/data/atlas-land-mask.png'
output.parent.mkdir(parents=True, exist_ok=True)
image.save(output, optimize=True)
honolulu = (int((-157.8358919 + 180) / 360 * 4096), int((90 - 21.2896943) / 180 * 2048))
assert image.getpixel(honolulu) > 0, 'The Honolulu coastline must survive rasterization'
for lon, lat in [(-35, 65), (0, 70), (-170, 0), (0, -40)]:
    point = (int((lon + 180) / 360 * 4096), int((90 - lat) / 180 * 2048))
    assert image.getpixel(point) < 10, 'No antimeridian artifacts may cross the ocean'
print(json.dumps({'mask': str(output), 'bytes': output.stat().st_size, 'honoluluCoverage': image.getpixel(honolulu)}))
