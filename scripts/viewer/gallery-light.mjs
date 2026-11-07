import {Color, MathUtils, Vector3} from 'three';
import {daylightAt, twilightColors} from './daylight.mjs';

// The street, trees and vehicles read the same world direction as the shadow
// camera. Keep one vector per scene so that dragging updates compiled materials.
const washDirections = new WeakMap();
export function washDirection(root) {
  if (!washDirections.has(root)) washDirections.set(root, new Vector3());
  return washDirections.get(root);
}

const paintByRoot = new WeakMap();
export function captureWash(root, kind, key, warm, cool) {
  if (!paintByRoot.has(root)) paintByRoot.set(root, {});
  const paints = paintByRoot.get(root);
  const paint = paints[kind] ??= {key:new Vector3(), warm:new Vector3(), cool:new Vector3(),
    baseKey:new Vector3(), baseWarm:new Vector3(), baseCool:new Vector3()};
  paint.baseKey.copy(key); paint.baseWarm.copy(warm); paint.baseCool.copy(cool);
  return paint;
}

function updatePaint(root, key, fillSpec, day, presetIntensity) {
  const paints = paintByRoot.get(root);
  if (!paints) return;
  const fill = new Color(fillSpec.color);
  const f = new Vector3(fill.r, fill.g, fill.b), k = new Vector3(key.r, key.g, key.b);
  // Recover key irradiance from the native two-color light probe. Normalize
  // to the authored intensity so changing the strength still changes the ink.
  const decoder = k.clone().addScaledVector(f, -k.dot(f) / Math.max(f.lengthSq(), 1e-6));
  if (decoder.lengthSq() > 1e-6) decoder.multiplyScalar(Math.PI / (decoder.dot(k) * Math.max(presetIntensity,.01)));
  else decoder.set(.2126,.7152,.0722).multiplyScalar(Math.PI / Math.max(presetIntensity,.01));
  const warm = day.dawn ? new Vector3(1.48,1.00,.82) : new Vector3(1.65,.87,.49);
  const cool = day.dawn ? new Vector3(.44,.49,.66) : new Vector3(.48,.44,.53);
  for (const paint of Object.values(paints)) {
    paint.key.copy(day.warmth ? decoder : paint.baseKey);
    paint.warm.copy(paint.baseWarm).lerp(warm, day.warmth);
    paint.cool.copy(paint.baseCool).lerp(cool, day.warmth).multiplyScalar(1 - .23 * day.lowSun * (1 - day.beam));
  }
}

export function applyGalleryLight(root, group, settings, adjustment, weather = 'sunny', bedroomWindow = false) {
  const preset = settings.lighting.lights.find(spec => spec.id === 'window' && spec.type === 'directional');
  const light = group.getObjectByName('window');
  if (!preset || !light?.isDirectionalLight) return;

  // Read the authored weather values on every application. Offsets must not
  // accumulate when the stage reframes, resizes or changes weather.
  const day = daylightAt(adjustment.minutes, weather);
  // The bedroom's daylight enters from opposite ends of its south-facing
  // window. Keep its authored noon direction and the manual azimuth offset.
  const phase = day.turn / 90;
  const turn = bedroomWindow ? 94 * MathUtils.smoothstep(phase,0,.98)
    - 26 * MathUtils.smoothstep(-phase,0,.92) : day.turn;
  const azimuth = MathUtils.degToRad(preset.azimuth + turn + adjustment.offset);
  const height = bedroomWindow ? Math.sign(day.height) * Math.abs(day.height) ** .77 : day.height;
  const elevation = MathUtils.degToRad(preset.elevation * height);
  const direction = washDirection(root).set(Math.cos(azimuth) * Math.cos(elevation),
    Math.sin(elevation), Math.sin(azimuth) * Math.cos(elevation));
  const distance = light.position.distanceTo(light.target.position);
  light.position.copy(light.target.position).addScaledVector(direction, distance);
  light.intensity = preset.enabled ? preset.intensity * day.beam * adjustment.strength / 100 : 0;
  light.color.set(preset.color ?? '#ffffff').lerp(new Color(twilightColors(day).sun), day.warmth);
  const fillSpec = settings.lighting.lights.find(spec => spec.type === 'directional' && spec.id !== preset.id);
  if (fillSpec) {
    const fill = group.getObjectByName(fillSpec.id);
    if (fill) fill.intensity = fillSpec.enabled ? fillSpec.intensity * (1 - .30 * day.lowSun) : 0;
    updatePaint(root, light.color, fillSpec, day, preset.intensity);
  }
  light.updateMatrixWorld(true);
  return direction;
}
