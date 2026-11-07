import {MathUtils, Vector3} from 'three';

export class CloudSun {
  direction = new Vector3();
  azimuth = null;
  elevation = 0;

  aim(azimuth, elevation) {
    this.targetAzimuth = azimuth;
    this.targetElevation = elevation;
    if (this.azimuth === null) this.update(0, true);
  }

  update(dt, snap) {
    const turn = MathUtils.euclideanModulo(this.targetAzimuth - (this.azimuth ?? 0) + 180, 360) - 180;
    const rise = this.targetElevation - this.elevation;
    if (this.azimuth !== null && turn === 0 && rise === 0) return false;
    // The short ease also covers big jumps from clicks or coarse pointer events.
    const settle = snap || this.azimuth === null || Math.max(Math.abs(turn), Math.abs(rise)) < .01;
    const weight = -Math.expm1(-dt / .075);
    this.azimuth = settle ? this.targetAzimuth : this.azimuth + turn * weight;
    this.elevation = settle ? this.targetElevation : this.elevation + rise * weight;
    const az = MathUtils.degToRad(this.azimuth), el = MathUtils.degToRad(this.elevation);
    this.direction.set(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * Math.cos(el));
    return true;
  }
}

// The density occupies only part of its texture. Skip empty ray steps while
// keeping their original spacing and phase, so the pen stays on the same surface.
export function cloudDensityBounds(texture) {
  const {data, width, height, depth} = texture.image;
  const min = new Vector3(width, height, depth), max = new Vector3(-1, -1, -1);
  for (let z = 0, i = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++, i++) {
        if (data[i] === 0) continue;
        min.x = Math.min(min.x, x); max.x = Math.max(max.x, x);
        min.y = Math.min(min.y, y); max.y = Math.max(max.y, y);
        min.z = Math.min(min.z, z); max.z = Math.max(max.z, z);
      }
    }
  }
  // A trilinear sample can see a nonempty texel one centre away.
  const size = new Vector3(width, height, depth);
  return {uCloudMin:{value:min.addScalar(-.5).divide(size).addScalar(-.5)},
    uCloudMax:{value:max.addScalar(1.5).divide(size).addScalar(-.5)}};
}

// Use the same eight distances, step weights and extinction as the original
// transmittance bake. Empty space uses only the cheap view-ray density fetch.
const liveVolume = [
  'vec2 volume(vec3 p){',
  '  if(any(greaterThan(abs(p),vec3(.499))))return vec2(0.,1.);',
  '  vec3 uv=p+.5;',
  '  float density=textureLod(uCloudDensity,uv,0.).r;',
  '  if(density==0.) return vec2(0.,1.);',
  '  const float stepWidth[8]=float[8](.018,.024,.032,.044,.060,.082,.11,.15);',
  '  float opticalDepth=0., distanceToSample=.008;',
  '  for(int i=0;i<8;i++){',
  '    distanceToSample+=stepWidth[i];',
  '    opticalDepth+=stepWidth[i]*textureLod(uCloudDensity,uv+vCloudSunDirection*distanceToSample,0.).r;',
  '  }',
  '  return vec2(density,exp(-10.*opticalDepth));',
  '}',
].join('\n');

// Adapt just the sunlight path. The authored density, raymarch integration,
// pen phase, weather, and wind still come from the original cloud module.
export function adaptCloudSource(source, modulePath) {
  const edits = [
    [/function lightVolume\([\s\S]+?\n}\s*(?=const vertex=)/, ''],
    ['private volumes:T.Data3DTexture[]=[];', ''],
    ["private lightKey='';", ''],
    ['private readonly inverse=new T.Matrix4();', ''],
    ['private sun=new T.Vector3(-.38,.74,.55).normalize();', 'private gallerySun=new CloudSun();'],
    [/   const \{width,height,depth\}=density\.image;[\s\S]+?this\.volumes\.push\(volume\);/, ''],
    ['uCloudDensity:{value:volume}', '...cloudDensityBounds(density),uCloudDensity:{value:density},uCloudSunDirection:{value:this.gallerySun.direction}'],
    ['vCloudOrigin=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;',
      'vCloudSunDirection=normalize((inverse(modelMatrix)*vec4(uCloudSunDirection,0.)).xyz);\n vCloudOrigin=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;'],
    ['const vertex=`', 'const vertex=`\nuniform vec3 uCloudSunDirection;\nflat varying vec3 vCloudSunDirection;\n'],
    ['precision highp sampler3D;', 'precision highp sampler3D;\nflat varying vec3 vCloudSunDirection;\nuniform vec3 uCloudMin,uCloudMax;'],
    [/vec2 volume\(vec3 p\)\{[\s\S]+?\n}/, liveVolume],
    ['for(int i=0;i<96;i++){\n  if(float(i)>=uCloudSteps)break;', [
      'vec3 ar=(uCloudMin-vCloudOrigin)*inv,br=(uCloudMax-vCloudOrigin)*inv;',
      ' vec3 nearDensity=min(ar,br),farDensity=max(ar,br);',
      ' float enter=max(nearDensity.x,max(nearDensity.y,nearDensity.z));',
      ' float leave=min(farDensity.x,min(farDensity.y,farDensity.z));',
      ' if(leave<max(start,enter))discard;',
      ' int first=int(max(0.,ceil((enter-start)/stepSize-.5)));',
      ' int last=int(min(uCloudSteps-1.,floor((leave-start)/stepSize-.5)));',
      ' for(int i=first;i<=last;i++){',
    ].join('\n')],
    [" set(mode:'sunny'|'overcast'|'rain',evening:boolean){", [
      ' private galleryAzimuth=0;',
      ' private galleryHeight=1;',
      ' private galleryEvening=false;',
      ' setGallerySun(offset:number,height:number){',
      '  this.galleryAzimuth=offset;this.galleryHeight=height;',
      '  const pose=exteriorSunPose(this.galleryEvening);',
      '  this.gallerySun.aim(pose.azimuth+offset,pose.elevation*height);',
      ' }',
      " set(mode:'sunny'|'overcast'|'rain',evening:boolean){",
    ].join('\n')],
    [/  const pose=exteriorSunPose\(evening\),az=[^\n]+\n  this\.sun\.set\([^\n]+/,
      '  this.galleryEvening=evening;this.setGallerySun(this.galleryAzimuth,this.galleryHeight);'],
    ["this.lightKey='';", ''],
    ['if(reducedMotion||dt<=0)return false;', 'const turning=this.gallerySun.update(dt,reducedMotion);\n  if(reducedMotion||dt<=0)return turning;'],
    [/  this\.root\.updateMatrixWorld\(true\);\s*const lightKey=[\s\S]+?lightVolume\([\s\S]+?\n   }/,
      '  for(const cloud of this.clouds){'],
    ['  this.lightKey=lightKey;', ''],
    ['this.volumes.forEach(t=>t.dispose());', ''],
  ];
  source = source.replaceAll('\r\n', '\n');
  for (const [original, replacement] of edits) {
    if (source.split(original).length !== 2) throw Error('Original cloud lighting changed: ' + original);
    source = source.replace(original, replacement);
  }
  return 'import {CloudSun,cloudDensityBounds} from ' + JSON.stringify(modulePath) + ';\n' + source;
}
