import {Color, MathUtils} from 'three';

export const noon = 12 * 60;
export function daylightAt(minutes = noon, weather = 'sunny') {
  const phase = weather === 'night' ? 0 : (minutes - noon) / 360;
  const height = Math.cos(phase * Math.PI / 2);
  const lowSun = 1 - MathUtils.smoothstep(height, .02, .68);
  const clear = weather === 'rain' ? .38 : weather === 'overcast' ? .58 : 1;
  return {height, turn: phase * 90, lowSun, warmth: lowSun * clear,
    beam: MathUtils.smoothstep(height, -.03, .36), dawn: phase < 0};
}

const dawnColors = {sun:'#ffc4ab', top:'#8e94b8', horizon:'#f0bdba', fog:'#d3b6c1', cloud:'#ffd7c8', shade:'#9295b1'};
const duskColors = {sun:'#ffaf70', top:'#868da9', horizon:'#f3af80', fog:'#ceaa99', cloud:'#ffd09b', shade:'#9990a1'};
export const twilightColors = daylight => daylight.dawn ? dawnColors : duskColors;

// Save the painted weather texture when the native sky changes (including
// resizes). Each solar adjustment starts from those pixels, retaining the rain
// deck and allowing the exact noon image to be restored without repainting it.
const skies = new WeakMap();
export function captureWeatherSky(atmosphere, fog) {
  const sky = skies.get(atmosphere) ?? {base: document.createElement('canvas')};
  const canvas = atmosphere.canvas;
  sky.base.width = canvas.width;
  sky.base.height = canvas.height;
  sky.base.getContext('2d').drawImage(canvas, 0, 0);
  sky.fog = fog;
  sky.last = null;
  sky.painted = false;
  skies.set(atmosphere, sky);
  applySkyTime(atmosphere, sky.minutes ?? noon);
}

export function applySkyTime(atmosphere, minutes) {
  const sky = skies.get(atmosphere);
  if (!sky || sky.last === minutes) return;
  const day = daylightAt(minutes, atmosphere.mode);
  const colors = twilightColors(day);
  const restoring = sky.painted;
  sky.painted = day.warmth > 0;
  sky.minutes = sky.last = minutes;
  const canvas = atmosphere.canvas;
  if (day.warmth || restoring) {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(sky.base, 0, 0);
    if (day.warmth) {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, colors.top);
      gradient.addColorStop(.66, colors.horizon);
      gradient.addColorStop(1, colors.horizon);
      ctx.save();
      ctx.globalAlpha = day.warmth * .94;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
    atmosphere.sky.needsUpdate = true;
  }
  atmosphere.galleryFog = new Color(sky.fog).lerp(new Color(colors.fog), day.warmth);
  const rain = atmosphere.mode === 'rain';
  const cloudSun = new Color(rain ? '#9bb8b9' : '#fffaf0').lerp(new Color(colors.cloud), day.warmth);
  const cloudShade = new Color(rain ? '#71969c' : '#b5c9d4').lerp(new Color(colors.shade), day.warmth);
  for (const cloud of atmosphere.clouds.root.children) {
    cloud.material.uniforms.uCloudSun.value.copy(cloudSun);
    cloud.material.uniforms.uCloudShade.value.copy(cloudShade);
  }
}
