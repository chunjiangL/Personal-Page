// Each leaf mass encloses the crown origin. A ray therefore reaches one
// continuous outer surface even where two masses meet.
const leafMasses = [
  [-0.57, 0.27, -0.09, 0.75],
  [0.34, 0.56, -0.22, 0.77],
  [0.66, -0.14, 0.12, 0.75],
  [-0.16, -0.25, 0.53, 0.74],
  [-0.12, -0.33, -0.43, 0.70],
].map(([x, y, z, radius]) => ({x, y, z, inside: radius * radius - x * x - y * y - z * z}));

export function crownPoint(x, y, z, scale, treeIndex) {
  let distance = 0;
  for (const mass of leafMasses) {
    const along = x * mass.x + y * mass.y + z * mass.z;
    const reach = along + Math.sqrt(along * along + mass.inside);
    distance = Math.max(distance, reach);
  }
  // A quiet ripple breaks long arcs without breaking up the large silhouette.
  const ripple = 1 + 0.021 * Math.sin(9 * x + treeIndex) * Math.cos(8 * z - 4 * y);
  const radius = scale * distance * ripple;
  return [1.51 * radius * x, 1.46 * radius * y, 1.42 * radius * z];
}
