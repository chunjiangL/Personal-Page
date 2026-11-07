import {BackSide} from 'three';

// Use the sun and shadow-map values already computed by the exterior wash.
// Thresholds set the size of the middle tone and the highlight in each material.
export const lightBandGLSL = `
float galleryBand(float value, float threshold, float softness) {
  float width = softness + min(fwidth(value), .09);
  return smoothstep(threshold - width, threshold + width, value);
}
`;

const weatherStrength = { sunny: 1, sunset: 1, overcast: .30, rain: .16, night: 0 };
export const bandStrength = weather => weatherStrength[weather] ?? 1;

const cornerPaint = /^mat_clay_apartment_corner_(cream|peach|edge|stone|teal|ochre|terracotta|slate)$/;
const upperPlaster = 'mat_clay_apartment_corner_upper_plaster';
const neighbourhoodWall = /^mat_clay_apartment_neighbourhood_(?:cream|rose|sage_wall|blue_wall|limestone|building_(?:wall|stone|roof)__.+)$/;

// The shadow compare samples adjacent texels. At a low sun/moon angle the
// previous 2 mm depth bias classified lit faces as rows of alternating shadow.
// Measure in metres after the native shadow camera has been fitted.
export function settleEveningShadows(group, weather) {
  if (weather !== 'sunset' && weather !== 'night') return;
  group.traverse(light => {
    if (!light.isDirectionalLight || !light.castShadow) return;
    const shadow = light.shadow;
    const camera = shadow.camera;
    const texel = Math.max((camera.right - camera.left) / shadow.mapSize.x,
                           (camera.top - camera.bottom) / shadow.mapSize.y);
    const offset = Math.min(.038, texel * .55);
    shadow.bias = -Math.max(.002, offset) / (camera.far - camera.near);
    shadow.normalBias = Math.max(.006, Math.min(.04, texel * .61));
    shadow.needsUpdate = true;
  });
}

// A single direction and phase for all floors, curved returns, and instances.
// Native shadow visibility modulates the pen's opacity, never its coordinates.
const eveningWallPen = `
if (uGalleryEveningPen > 0.) {
  vec3 wallPoint = cameraPosition - transpose(mat3(viewMatrix)) * vViewPosition;
  float phase = dot(wallPoint, vec3(1., .65, -.90)) * 3.5;
  float footprint = max(fwidth(phase), .00001);
  float dist = abs(fract(phase + .5) - .5);
  float stroke = 1. - smoothstep(.035 - .5 * footprint, .035 + .5 * footprint, dist);
  float resolved = 1. - smoothstep(.22, .60, footprint);
  float shade = 1. - smoothstep(.04, .62, apartmentSun);
  ink = mix(ink, stroke * resolved * shade * uGalleryEveningPen, uGalleryPenBlend);
}
`;
const cornerFinish = `
{
  vec3 wallNormal = inverseTransformDirection(normal, viewMatrix);
  float facing = max(dot(wallNormal, uApartmentSunDirection), 0.);
  float visibility = clamp(apartmentIrradiance / max(facing, .015), 0., 1.);
  // A low evening sun can reach a wall at a shallower angle.
  float light = smoothstep(.015, mix(.92, .64, uApartmentSunset), facing) * visibility;
  float middle = galleryBand(light, .18, .06);
  float sunlit = galleryBand(light, .64, .07);
  vec3 shadowColor = uApartmentCool * vec3(.83, .87, 1.04);
  vec3 midColor = mix(uApartmentCool, uApartmentWarm, .42);
  vec3 sunColor = uApartmentWarm * vec3(1.09, 1.02, .94);
  vec3 wash = mix(mix(shadowColor, midColor, middle), sunColor, sunlit);
  apartmentWash = mix(apartmentWash, labBaseColor * wash, uGalleryBandStrength);
}
`;

// Install once per rendered material. A weather change updates the existing
// uniform objects even when the native renderer has already compiled the shader.
const uniformsByMaterial = new WeakMap();
export function setPaintedWash(material, treatment, values) {
  let uniforms = uniformsByMaterial.get(material);
  if (!uniforms) {
    uniforms = {};
    for (const [name, value] of Object.entries(values)) uniforms[name] = {value};
    uniformsByMaterial.set(material, uniforms);
    const nativeCompile = material.onBeforeCompile;
    const nativeKey = material.customProgramCacheKey;
    material.onBeforeCompile = function(shader, renderer) {
      nativeCompile.call(this, shader, renderer);
      const marker = 'labPaper=apartmentWash+';
      if (shader.fragmentShader.split(marker).length !== 2) throw Error('Painted lighting requires the native exterior wash');
      Object.assign(shader.uniforms, uniforms);
      const declarations = Object.keys(uniforms).map(name => 'uniform float ' + name + ';').join('\n');
      shader.fragmentShader = declarations + '\n' + lightBandGLSL + treatment.declarations +
        shader.fragmentShader.replace(marker, treatment.finish + marker);
    };
    material.customProgramCacheKey = function() { return nativeKey.call(this) + treatment.key; };
    material.needsUpdate = true;
  }
  for (const [name, value] of Object.entries(values)) uniforms[name].value = value;
}

const cornerTreatment = {key: '-gallery-corner-evening-pen-v2', declarations: '\n', finish: cornerFinish + eveningWallPen};
const wallTreatment = {key: '-gallery-exterior-evening-pen-v1', declarations: '\n', finish: eveningWallPen};
const paintedWalls = new WeakMap();
export function applyCornerLightBands(root, weather, twilight = 0) {
  let walls = paintedWalls.get(root);
  if (!walls) {
    walls = new Set();
    root.traverse(node => {
      if (!node.isMesh) return;
      for (const material of Array.isArray(node.material) ? node.material : [node.material]) {
        if (material?.isMeshStandardMaterial && (cornerPaint.test(material.name) || material.name === upperPlaster || neighbourhoodWall.test(material.name))) walls.add(material);
      }
    });
    paintedWalls.set(root, walls);
  }
  const strength = bandStrength(weather);
  const blend = weather === 'sunset' || weather === 'night' ? 1 : twilight;
  const pen = {uGalleryEveningPen: blend ? (weather === 'night' ? .10 : .16) : 0, uGalleryPenBlend:blend};
  for (const material of walls) {
    const upstairs = material.name === upperPlaster;
    if (upstairs) material.shadowSide = blend ? BackSide : null;
    if (upstairs || cornerPaint.test(material.name)) {
      setPaintedWash(material, cornerTreatment, {...pen, uGalleryBandStrength: strength * (upstairs ? blend : 1)});
    } else setPaintedWash(material, wallTreatment, pen);
  }
}
