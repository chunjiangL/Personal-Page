// Widths are in display pixels. The hull traces the outside of a form; the
// crease pen also traces individual sills, bevels and joints inside that form.
const lines = {
  crown:      { hull: 1.18, opacity: .50, crease: 0,   pen: .40 },
  skyline:    { hull: 1.40, opacity: .78, crease: .57, pen: .83 },
  shop:       { hull: 1.35, opacity: .78, crease: .38, pen: .76 },
  wall:       { hull: 1.13, opacity: .66, crease: .32, pen: .65 },
  trim:       { hull: .49,  opacity: .31, crease: .23, pen: .43 },
  streetWall: { hull: .72,  opacity: .44, crease: .28, pen: .49 },
  streetTrim: { hull: .36,  opacity: .19, crease: .16, pen: .36 },
};

const cornerMass = /^mat_clay_apartment_corner_(?:cream|peach|upper_plaster|terracotta|ochre|teal|slate)$/;
const cornerTrim = /(?:_apartment_window_painted_frame|_apartment_corner_(?:edge|sage|iron|stone))$/;
const streetMass = /^mat_clay_apartment_neighbourhood_(?:cream|rose|sage_wall|blue_wall|roof|building_(?:roof|wall)__.+)$/;
const streetTrim = /_apartment_neighbourhood_(?:limestone|sage|iron|downpipe|window_dark|window_glass|building_(?:paint|stone|hardware|iron|glass|litglass|shopglass)__.+)$/;

function streetPen(record) {
  const material = Array.isArray(record.node.material) ? record.node.material[0] : record.node.material;
  const name = material.name;
  if (record.partId === 'street_life_trees' && name === 'mat_clay_apartment_street_life_leaf') return lines.crown;
  if (/^building_corner_(?:frontage_[123]|roof|entry_portal)$/.test(record.partId)) {
    // The projecting roof cap and the shop doorway share paint with the small
    // sills. Assign their weight by architectural part as well as material.
    if (record.partId === 'building_corner_roof') return lines.skyline;
    if (record.partId === 'building_corner_entry_portal' && /_corner_(?:edge|sage|cream)$/.test(name)) return lines.shop;
    if (cornerTrim.test(name)) return lines.trim;
    if (cornerMass.test(name)) return record.partId === 'building_corner_frontage_1' ? lines.shop : lines.wall;
  }
  if (record.partId === 'street_neighbourhood_frontage' || record.node.userData.street_prop?.startsWith('building_')) {
    if (streetTrim.test(name)) return lines.streetTrim;
    if (streetMass.test(name)) return lines.streetWall;
  }
}

// Only the contour renderer receives these overrides. Surface ink, weather,
// window transmission and the authored mesh/slot appearance keep their values.
export function resolveStreetContour(style, record) {
  const pen = streetPen(record);
  if (!pen || !style.sketch.outlines || style.edges.importance === 'hidden') return style;
  return {
    sketch: {
      ...style.sketch,
      edgeOpacity: pen.crease,
      outlineWidth: pen.hull,
      classic: {...style.sketch.classic, silhouetteWidth: pen.hull, silhouetteOpacity: pen.opacity},
    },
    edges: {...style.edges, width: pen.pen},
  };
}
