// Run from the repository root: node scripts/build-atlas-geography.cjs
// Natural Earth / world-atlas licensing is retained in assets/vendor/NOTICE.md.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({});
for (const file of ['d3-array.min.js', 'd3-geo.min.js', 'topojson-client.min.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/vendor', file), 'utf8'), context);
}
const { d3, topojson } = context;
const topology = JSON.parse(fs.readFileSync(path.join(root, 'assets/vendor/land-50m.json'), 'utf8'));
const original = topojson.feature(topology, topology.objects.land).features[0].geometry;
const regionalTopology = JSON.parse(fs.readFileSync(path.join(root, 'scripts/data/land-10m.json'), 'utf8'));
const regionalLand = topojson.feature(regionalTopology, regionalTopology.objects.land).features[0].geometry;
// Quantization can reverse a few tiny 10m island rings. Normalize their winding
// before clipping; an inverted island would otherwise fill the whole inset.
for (const polygon of regionalLand.coordinates) {
    polygon.forEach((ring, index) => {
        const coversHemisphere = d3.geoArea({ type: 'Polygon', coordinates: [ring] }) > 2 * Math.PI;
        if (coversHemisphere !== (index > 0)) ring.reverse();
    });
}
assert(d3.geoArea(regionalLand) < 2 * Math.PI, 'Regional land must not contain inverted polygons');
const isHawaii = polygon => polygon[0].every(([lon, lat]) => lon > -161 && lon < -154 && lat > 18 && lat < 23);
const hawaii = { type: 'MultiPolygon', coordinates: original.coordinates.filter(isHawaii) };

function segmentDistanceSquared(point, a, b) {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const fraction = dx || dy ? Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / (dx * dx + dy * dy))) : 0;
    return (point[0] - a[0] - fraction * dx) ** 2 + (point[1] - a[1] - fraction * dy) ** 2;
}

// 0.08 degrees is below half a CSS pixel at the globe's displayed radius.
// Keep small polygons if simplification would collapse them; retain Hawaii exactly.
function simplifyRing(ring, tolerance = .08) {
    const keep = new Uint8Array(ring.length);
    keep[0] = keep[ring.length - 1] = 1;
    const stack = [[0, ring.length - 1]];
    while (stack.length) {
        const [start, end] = stack.pop();
        let furthest = -1, distance = tolerance * tolerance;
        for (let i = start + 1; i < end; i++) {
            const candidate = segmentDistanceSquared(ring[i], ring[start], ring[end]);
            if (candidate > distance) { distance = candidate; furthest = i; }
        }
        if (furthest !== -1) {
            keep[furthest] = 1;
            stack.push([start, furthest], [furthest, end]);
        }
    }
    const reduced = ring.filter((_, i) => keep[i]);
    if (reduced.length < 4) return ring;
    const originalArea = d3.geoArea({ type: 'Polygon', coordinates: [ring] });
    const reducedArea = d3.geoArea({ type: 'Polygon', coordinates: [reduced] });
    // A tiny concave ring can reverse when reduced to a triangle. Never invert land/ocean.
    if ((originalArea > 2 * Math.PI) !== (reducedArea > 2 * Math.PI)) return ring;
    return reduced;
}

const globe = { type: 'MultiPolygon', coordinates: original.coordinates.map(polygon =>
    isHawaii(polygon) ? polygon : polygon.map(ring => simplifyRing(ring))) };
const definitions = [
    { key: 'COLM 2026', title: 'San Francisco Bay Area', center: [-122.26, 37.76], scale: 7000 },
    { key: 'ECCV 2026', title: 'Southern Sweden', center: [12.97, 55.57], scale: 6500 },
    { key: 'ICLR 2026', title: 'Rio de Janeiro', center: [-43.25, -22.95], scale: 14000 },
    { key: 'ICCV 2025', title: 'Hawaiʻi', geometry: hawaii, labels: [
        ['Kauaʻi', [-159.5, 22.05], 0, -13],
        ['Maui', [-156.3, 20.8], 18, -12],
        ['Hawaiʻi', [-155.5, 19.5], 28, 23],
    ] },
];
const regions = {};
for (const definition of definitions) {
    const projection = definition.geometry
        ? d3.geoMercator().fitExtent([[18, 16], [342, 133]], definition.geometry)
        : d3.geoMercator().center(definition.center).scale(definition.scale).translate([180, 76]).clipExtent([[8, 8], [352, 133]]);
    const region = {
        title: definition.title,
        path: d3.geoPath(projection)(definition.geometry || regionalLand),
        center: projection.center(), scale: projection.scale(), translate: projection.translate(),
        labels: (definition.labels || []).map(([name, point, dx, dy]) => {
            const [x, y] = projection(point);
            return { name, x: x + dx, y: y + dy };
        }),
    };
    assert(region.path && !region.path.includes('NaN'), `Invalid regional map: ${definition.key}`);
    regions[definition.key] = region;
}

assert.equal(hawaii.coordinates.length, 7);
assert.equal(d3.geoContains(hawaii, [-157.8358919, 21.2896943]), true, 'Honolulu must remain on Oʻahu');
assert.deepEqual(globe.coordinates.filter(isHawaii), hawaii.coordinates, 'Keep the Hawaiian coastline intact');
assert(Math.abs(d3.geoArea(globe) - d3.geoArea(original)) < .01, 'Simplification must preserve the land area and winding');
const count = geometry => geometry.coordinates.flat().reduce((sum, ring) => sum + ring.length, 0);
const output = path.join(root, 'assets/data/atlas-geography.json');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify({ globe, regions }, (_, value) => typeof value === 'number' ? +value.toFixed(6) : value));
console.log(JSON.stringify({ originalVertices: count(original), globeVertices: count(globe), regions: Object.keys(regions).length, bytes: fs.statSync(output).size }));
