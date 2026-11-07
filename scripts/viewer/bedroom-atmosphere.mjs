import * as T from 'three';
import {BEDROOM_WINDOW as pane} from '@sketch/assets/scenes/bedroom-window';
import {bedroomSurface} from './bedroom-ink.mjs';
import {daylightAt, twilightColors} from './daylight.mjs';
import {BedroomCasterMaps} from './bedroom-contact.mjs';

const curtainZ = 3.066;

function curtainOpening(minutes, weather) {
  if (weather === 'night') return 0;
  return T.MathUtils.smoothstep(minutes, 330, 437) * (1 - T.MathUtils.smoothstep(minutes, 1005, 1110));
}

// The two exported poses triangulate some pleats differently. Deform the
// gathered cloth on its own topology so shared edges stay watertight.
function curtainPanels(geometry) {
  const open = geometry.parts.get('scene_bedroom_curtains_open');
  const closed = geometry.parts.get('scene_bedroom_curtains_closed');
  const panels = [];
  for (const mesh of open.children) {
    const name = mesh.material.name;
    if (bedroomSurface(open.userData.part_id, name) !== 'fabric') continue;
    const other = closed.children.find(node => node.material.name === name.replace('_open_', '_closed_'));
    if (!other) throw Error('Missing extended pose for '+name);
    const a=mesh.geometry, b=other.geometry;
    a.computeBoundingBox();b.computeBoundingBox();
    const depthScale=(b.boundingBox.max.z-b.boundingBox.min.z)/(a.boundingBox.max.z-a.boundingBox.min.z);
    const ring=name.endsWith('curtain_ring_sage');
    const xScale=.975/.280;
    const pos=a.attributes.position, normal=a.attributes.normal;
    const extended=new Float32Array(pos.count*3), normals=new Float32Array(pos.count*3);
    const n=new T.Vector3();
    for(let i=0; i<pos.count; i++){
      const x=pos.getX(i),side=Math.sign(x-pane.x),anchor=pane.x+side*.98;
      const inside=(anchor-x)*side;
      let reach=inside*xScale;
      if(ring){
        // Nine rings per panel. Move each rigid ring without stretching it.
        const ringIndex=T.MathUtils.clamp(Math.round(inside/(.280/8)),0,8);
        reach=inside+ringIndex*(.975-.280)/8-(ringIndex===8?.010:0);
      }
      extended[i*3]=anchor-side*reach;
      extended[i*3+1]=pos.getY(i);
      extended[i*3+2]=ring?pos.getZ(i):curtainZ+(pos.getZ(i)-curtainZ)*depthScale;
      n.fromBufferAttribute(normal,i);
      if(!ring){n.x/=xScale;n.z/=depthScale;n.normalize();}
      n.toArray(normals,i*3);
    }
    a.morphAttributes.position=[new T.BufferAttribute(extended,3)];
    a.morphAttributes.normal=[new T.BufferAttribute(normals,3)];
    mesh.updateMorphTargets();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.computeBoundingSphere();
    panels.push(mesh);
  }
  return panels;
}

const roomUniforms = `
uniform vec3 uRoomOrigin, uWindowSun, uBeamColor, uRoomFillTint, uPane;
uniform float uCurtainGap, uBeam, uWindowPower, uRoomDay, uRoomActive;
`;
// Intersect the two clear panes and the curtain opening in window space.
// A narrow penumbra keeps the mullion legible on the receiving surface.
const aperture = `
float windowLight(vec3 p) {
  float travel=uPane.z-p.z;
  vec2 slope=uWindowSun.xy/max(.045,uWindowSun.z);
  vec2 glass=p.xy+slope*travel-uPane.xy;
  float cloth=p.x+slope.x*(${curtainZ}-p.z)-uPane.x;
  vec2 edge=vec2(.776,.626)-abs(glass);
  float clearance=min(min(edge.x,edge.y),min(uCurtainGap-abs(cloth),abs(glass.x)-.028));
  float nib=.002*sin(37.*glass.x+13.*glass.y)*sin(53.*glass.y);
  float width=.009+.009*max(0.,travel);
  float room=step(.79,p.x)*step(p.x,4.08)*step(-.62,p.z)*smoothstep(0.,.07,travel);
  return room*smoothstep(-width,width,clearance+nib);
}
`;

// A camera ray intersects the same two light volumes that paint the room.
// Integrate only up to the visible fragment, so foreground furniture cuts the
// air naturally. All intersections are in the room's metre coordinates.
const airGLSL = `
void cutInterval(inout vec2 t, float origin, float velocity, float lo, float hi){
  if(abs(velocity)<.00001){
    if(origin<lo||origin>hi)t.y=t.x;
  }else{
    vec2 ends=(vec2(lo,hi)-origin)/velocity;
    t=vec2(max(t.x,min(ends.x,ends.y)),min(t.y,max(ends.x,ends.y)));
  }
}
float panePath(vec2 t,float g,float dg,float lo,float hi){
  if(hi<=lo)return 0.;
  cutInterval(t,g,dg,lo,hi);
  return max(0.,t.y-t.x);
}
float airCoverage(vec3 p){
  if(uBeam<=.001)return 0.;
  vec3 eye=cameraPosition-uRoomOrigin;
  vec3 ray=p-eye;
  float distanceToSurface=length(ray);
  ray/=max(distanceToSurface,.0001);
  vec2 t=vec2(0.,distanceToSurface);
  cutInterval(t,eye.x,ray.x,.86,4.);
  cutInterval(t,eye.y,ray.y,.02,2.65);
  cutInterval(t,eye.z,ray.z,-.59,${curtainZ});
  if(t.y<=t.x)return 0.;
  vec2 slope=uWindowSun.xy/max(.045,uWindowSun.z);
  vec2 g=eye.xy+slope*(uPane.z-eye.z)-uPane.xy;
  vec2 dg=ray.xy-slope*ray.z;
  cutInterval(t,g.y,dg.y,-.626,.626);
  float shift=slope.x*(uPane.z-${curtainZ});
  float lo=max(-.776,shift-uCurtainGap),hi=min(.776,shift+uCurtainGap);
  float path=panePath(t,g.x,dg.x,lo,min(-.028,hi))+panePath(t,g.x,dg.x,max(.028,lo),hi);
  return clamp(uBeam,0.,1.)*(.032*smoothstep(.0,.34,path)
    +.068*smoothstep(.25,1.02,path)+.095*smoothstep(1.12,2.45,path));
}
`;

function makeWindowAir(uniforms) {
  // Room materials integrate air up to their own depth. In the open window
  // this plane supplies the crossing distance for the sky and street beyond.
  const material=new T.ShaderMaterial({
    uniforms,transparent:true,opacity:.98,depthWrite:false,side:T.DoubleSide,forceSinglePass:true,
    vertexShader:`varying vec3 vRoomPoint;
      uniform vec3 uRoomOrigin;
      void main(){
        vRoomPoint=(modelMatrix*vec4(position,1.)).xyz-uRoomOrigin;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }`,
    fragmentShader:roomUniforms+airGLSL+`
      varying vec3 vRoomPoint;
      void main(){
        float opacity=airCoverage(vRoomPoint);
        if(opacity<.001)discard;
        gl_FragColor=vec4(mix(uBeamColor,vec3(1.),.16),opacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const window=new T.Mesh(new T.PlaneGeometry(1.552,1.252),material);
  window.name='bedroom_window_scattering';
  window.position.copy(uniforms.uPane.value).add(uniforms.uRoomOrigin.value);window.position.z-=.020;
  window.renderOrder=22;window.visible=false;window.raycast=()=>{};
  return window;
}

function makeDust(uniforms) {
  const count=760, positions=new Float32Array(count*3), seeds=new Float32Array(count);
  let state=941;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  for(let i=0;i<count;i++){
    positions.set([.89+random()*3.07,.10+random()*2.46,curtainZ-random()*3.35],i*3);
    seeds[i]=random();
  }
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.BufferAttribute(positions,3));
  geometry.setAttribute('dustSeed',new T.BufferAttribute(seeds,1));
  const material=new T.ShaderMaterial({
    uniforms, transparent:true, opacity:.95, depthWrite:false,
    vertexShader:roomUniforms+aperture+`
      attribute float dustSeed;
      uniform float uAirClock,uPixelRatio;
      varying float vDust;
      void main(){
        vec3 p=position+.034*sin(uAirClock*vec3(.24,.17,.13)+dustSeed*vec3(81.,129.,59.));
        vec4 eye=modelViewMatrix*vec4(p,1.);
        gl_Position=projectionMatrix*eye;
        gl_PointSize=uPixelRatio*clamp((3.2+dustSeed*2.0)/max(.1,-eye.z),1.,2.6);
        vDust=uBeam*windowLight(p)*(.17+.46*dustSeed*dustSeed);
      }`,
    fragmentShader:`uniform vec3 uBeamColor;varying float vDust;
      void main(){
        vec2 mark=abs(gl_PointCoord-.5);
        float alpha=vDust*(1.-smoothstep(.12,.58,mark.x*.85+mark.y*1.40));
        if(alpha<.008)discard;
        gl_FragColor=vec4(mix(uBeamColor,vec3(1.),.33),alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const dust=new T.Points(geometry,material);
  dust.name='bedroom_window_dust';dust.position.copy(uniforms.uRoomOrigin.value);
  dust.renderOrder=23;dust.visible=false;dust.raycast=()=>{};
  return dust;
}

const inkFunctions = `
float cel(float x,float threshold) {
  float w=clamp(fwidth(x),.012,.055);
  return smoothstep(threshold-w,threshold+w,x);
}
float pencil(vec3 p, vec3 axis) {
  float q=dot(p,axis)+.021*sin(p.y*17.+p.x*4.);
  float aa=max(.001,fwidth(q));
  float d=abs(fract(q+.5)-.5);
  float nib=min(.049,.65*aa);
  float stroke=1.-smoothstep(nib-aa*.5,nib+aa*.5,d);
  float segment=dot(p,vec3(1.7,-1.25,1.8))+.39*sin(floor(q+.5)*1.72);
  return stroke*smoothstep(.05,.22,fract(segment))*(1.-smoothstep(.76,.94,fract(segment)))
       *(1.-smoothstep(.26,.65,aa));
}
`;
const paintFunctions = `
uniform sampler2D uRoomSunDepth;
uniform mat4 uRoomSunMatrix;
float sunDepth(vec3 p,float facing){
  vec3 q=(uRoomSunMatrix*vec4(p,1.)).xyz*.5+.5;
  if(any(lessThan(q,vec3(0.)))||any(greaterThan(q,vec3(1.))))return 1.;
  float depth=q.z-.0008-.0008*(1.-clamp(facing,0.,1.));
  vec2 px=1./vec2(textureSize(uRoomSunDepth,0));
  float lit=step(depth,texture(uRoomSunDepth,q.xy).r)*2.;
  lit+=step(depth,texture(uRoomSunDepth,q.xy+px*vec2(-1.4,-.6)).r);
  lit+=step(depth,texture(uRoomSunDepth,q.xy+px*vec2(.6,-1.4)).r);
  lit+=step(depth,texture(uRoomSunDepth,q.xy+px*vec2(1.4,.6)).r);
  lit+=step(depth,texture(uRoomSunDepth,q.xy+px*vec2(-.6,1.4)).r);
  return lit/6.;
}
vec3 pigment(vec3 srgb){return pow(max(srgb,vec3(0.)),vec3(2.2));}
float paperHash(vec2 a){return fract(sin(dot(a,vec2(127.1,311.7)))*43758.5453);}
float washNoise(vec2 uv){
  vec2 tile=floor(uv),f=fract(uv);f=f*f*(3.-2.*f);
  return mix(mix(paperHash(tile),paperHash(tile+vec2(1.,0.)),f.x),
             mix(paperHash(tile+vec2(0.,1.)),paperHash(tile+1.),f.x),f.y);
}
float windowBounce(vec3 p,vec3 n){
  // A finite window supplies sky fill even where the sun is in shadow.
  vec3 v=vec3(uPane.xy,uPane.z)-p;
  float d2=max(dot(v,v),.02);
  return clamp(max(0.,dot(n,v))*(max(.04,v.z)+.24)*2.2/pow(d2+.62,1.65),0.,1.);
}
float floorContact(vec3 p){
  vec2 uv=(p.xz-vec2(.70,-.70))/vec2(3.40,4.);
  if(any(lessThan(uv,vec2(0.)))||any(greaterThan(uv,vec2(1.))))return 0.;
  return clamp(.64*textureLod(uFloorContact,uv,1.).r
    +.32*textureLod(uFloorContact,uv,3.).g+.29*textureLod(uFloorContact,uv,4.).b,0.,.9);
}
vec3 oakWash(vec2 uv,float board,float shade){
  // Long fibres with a slower cathedral curve. Filter marks under one pixel.
  float bend=.72*sin(uv.y*2.4+board)+.23*sin(uv.y*8.2+board*2.);
  float phase=uv.x*95.+bend+2.*washNoise(vec2(uv.x*8.,uv.y*1.2));
  float fw=max(.002,fwidth(phase));
  float fibre=(1.-smoothstep(.045-fw*.5,.045+fw*.5,abs(fract(phase)-.5)))
              *(1.-smoothstep(.20,.53,fw))*(.25+.75*washNoise(uv*vec2(12.,2.3)));
  float broad=washNoise(uv*vec2(24.,1.6));
  vec3 shaded=pigment(vec3(.51,.38,.30)), open=pigment(vec3(.78,.59,.40));
  return mix(shaded,open,shade)*(.86+.18*broad+.10*board)*(1.-.13*fibre);
}
`;

const plasterFinish = `
  // Leave plaster free of pen strokes. Subtle paper variation stays attached
  // to the plane. Sky fill and reflected wood color describe its depth.
  vec2 plane=abs(n.y)>.80?p.xz:(abs(n.x)>.70?p.zy:p.xy);
  float across=min(abs(p.x-.86),abs(p.x-4.0));
  float lengthwise=min(abs(p.z-3.20),abs(p.z+.60));
  float end=abs(n.x)>.70?lengthwise:across;
  if(abs(n.y)>.80)end=min(across,lengthwise);
  float joint=min(end,min(p.y+abs(n.y),abs(p.y-2.65)+abs(n.y)));
  float corner=.68*exp(-22.*max(joint,0.))+.32*exp(-5.5*max(joint,0.));
  float sky=windowBounce(p,n);
  float nearWindow=exp(-.38*length(vec3(uPane.xy,uPane.z)-p));
  float woodBounce=max(0.,1.-p.y/2.7);
  float tone=clamp(.17+.46*sky+.26*nearWindow+.12*woodBounce-.115*corner+.06*n.y,0.,1.);
  vec3 shade=pigment(vec3(.52,.53,.58)),paper=pigment(vec3(.90,.845,.74));
  labPaper=mix(shade,paper,smoothstep(.02,.74,tone));
  labPaper*=.979+.030*washNoise(plane*3.2)+.013*washNoise(plane*17.);
  ink=0.;
`;
const sofaFinish = `
  float up=smoothstep(-.55,.90,n.y);
  float light=smoothstep(.025,.72,irradiance);
  float roundness=.55*up+.45*light;
  vec3 tone=mix(vec3(.51,.59,.58),vec3(.76,.83,.75),cel(roundness,.33));
  labPaper=labBaseColor*mix(tone,vec3(1.03,1.,.92),cel(roundness,.72));
  ink=.23*pencil(p,vec3(8.2,13.2,-6.4))*(1.-cel(roundness,.30));
`;
// A welt belongs on the seat cushion's side lip. Use the sofa's authored
// local coordinates and filter the narrow seam at the doorway's viewing distance.
const seatWelt = `
  float d=vLabPosition.y-.504;
  float aa=max(fwidth(d),.001);
  float line=1.-smoothstep(.002-aa*.5,.002+aa*.5,abs(d));
  float lip=smoothstep(.18,.65,1.-abs(vLabObjectNormal.y))*step(vLabPosition.y,.54);
  ink=max(ink,line*lip*.34);
`;
const floorFinish = `
  float ao=floorContact(p);
  vec2 plank=vec2(floor((p.x+4.)/.25),floor((p.z+3.2)/1.30+.5*mod(floor((p.x+4.)/.25),2.)));
  float board=paperHash(plank);
  float fill=clamp(.40+.62*windowBounce(p,n)+.20*smoothstep(.05,.8,irradiance)-.38*ao,0.,1.);
  labPaper=oakWash(p.xz,board,fill)*mix(vec3(1.),vec3(.49,.53,.63),ao);
  ink=ink*.18;
`;
const deskFinish = `
  float top=smoothstep(.40,.82,n.y);
  labPaper=oakWash(p.zx,.76,.38+.52*top)*mix(vec3(.68,.74,.77),vec3(1.04,1.02,.97),top);
  ink*=.32;
`;
const chairFinish = `
  float t=clamp(.30+.37*n.y+.35*windowBounce(p,n)+.22*smoothstep(.04,.80,irradiance),0.,1.);
  labPaper=mix(pigment(vec3(.20,.27,.30)),pigment(vec3(.34,.43,.44)),cel(t,.43));
  labPaper=mix(labPaper,pigment(vec3(.51,.60,.57)),.64*cel(t,.70));
  ink*=.35;
`;
const seatFinish = `
  float t=clamp(.37+.35*n.y+.46*windowBounce(p,n),0.,1.);
  labPaper=mix(pigment(vec3(.31,.41,.43)),pigment(vec3(.52,.61,.57)),cel(t,.48));
  ink*=.21;
`;
const wardrobeFinish = `
  vec2 boardUV=vec2(abs(n.x)>.7?p.z:p.x,p.y);
  labPaper=oakWash(boardUV,.45,.34+.55*windowBounce(p,n));
  ink*=.20;
`;
const clothFinish = `
  // The curtain normal map contains individual threads. Use the cloth's
  // geometric normal for broad fold tones, so the weave cannot flip bands.
  vec3 foldNormal=n;
  #ifndef FLAT_SHADED
    foldNormal=inverseTransformDirection(normalize(vNormal),viewMatrix);
  #endif
  float pleat=.5+.5*dot(foldNormal,normalize(vec3(-.58,.33,-.80)));
  vec3 band=mix(pigment(vec3(.27,.38,.43)),pigment(vec3(.43,.56,.57)),smoothstep(.18,.48,pleat));
  labPaper=mix(band,pigment(vec3(.62,.71,.66)),smoothstep(.75,.83,pleat));
  labPaper*=.87+.13*smoothstep(.24,2.2,p.y);
  ink=.13*pencil(p,vec3(7.9,12.1,-4.1))*(1.-cel(pleat,.30));
`;

function installRoomPaint(material,kind,uniforms) {
  const originalCompile=material.onBeforeCompile, originalKey=material.customProgramCacheKey;
  const paper={wall:plasterFinish,sofa:sofaFinish,fabric:clothFinish,floor:floorFinish,desk:deskFinish,
    chair:chairFinish,seat:seatFinish,weave:chairFinish,wardrobe:wardrobeFinish}[kind];
  const welt=kind==='sofa'&&material.name.endsWith('_linen');
  material.onBeforeCompile=function(shader,renderer){
    originalCompile.call(this,shader,renderer);
    Object.assign(shader.uniforms,uniforms);
    let source=shader.fragmentShader;
    if(paper){
      const marker='outgoingLight=mix(labPaper,';
      if(!source.includes(marker))throw Error('Bedroom finish requires the native sketch surface');
      source=source.replace(marker,`
        if(uRoomActive>.5) {
          vec3 p=cameraPosition-transpose(mat3(viewMatrix))*vViewPosition-uRoomOrigin;
          vec3 n=inverseTransformDirection(normal,viewMatrix);
          float irradiance=dot(labDirectIrradiance,vec3(.2126,.7152,.0722));
          ${paper}
          ${welt?seatWelt:''}
          vec3 pigmentInLight=labPaper;
          labPaper*=uRoomDay*uRoomFillTint;
          float spot=windowLight(p)*smoothstep(.012,.18,dot(n,uWindowSun));
          if(uWindowPower>.001 && p.x>=.79 && p.x<=4.08 && p.z>=-.62 && p.z<=3.28 && dot(n,uWindowSun)>.01) {
            float visibility=sunDepth(p,dot(n,uWindowSun));
            float fillShadow=(1.-visibility)*clamp(uWindowPower,0.,1.)*.15;
            labPaper*=mix(vec3(1.),vec3(.46,.51,.65),fillShadow);
            float weight=clamp(spot*uWindowPower,0.,1.)*smoothstep(.04,.96,visibility);
            // Preserve the local pigment: a sunlit plank is still wood, and
            // a dark chair crossing the patch never turns the color of plaster.
            labPaper=mix(labPaper,pigmentInLight*(vec3(.89)+1.32*uBeamColor)+uBeamColor*.14,weight);
            ink*=1.-weight*.89;
          }
        }
        ${marker}`);
    }
    const output='#include <tonemapping_fragment>';
    if(!source.includes(output))throw Error('Bedroom air requires a surface color output');
    source=source.replace(output,`
      if(uRoomActive>.5) {
        ${paper?'':'gl_FragColor.rgb*=mix(vec3(1.),uRoomDay*uRoomFillTint,.66);'}
      }
      if(uRoomActive>.5 && uBeam>.001){
        vec3 receiver=cameraPosition-transpose(mat3(viewMatrix))*vViewPosition-uRoomOrigin;
        gl_FragColor.rgb=mix(gl_FragColor.rgb,mix(uBeamColor,vec3(1.),.16),airCoverage(receiver));
      }
      ${output}`);
    shader.fragmentShader=roomUniforms+airGLSL+(paper?'uniform sampler2D uFloorContact;\n'+aperture+inkFunctions+paintFunctions:'')+source;
  };
  material.customProgramCacheKey=function(){return originalKey.call(this)+'-bedroom-wash-'+(paper?kind:'air')+(welt?'-welt':'');};
  material.needsUpdate=true;
}

export class BedroomAtmosphere {
  constructor(stage, reducedMotion) {
    this.stage=stage;
    this.reducedMotion=reducedMotion;
    this.panels=curtainPanels(stage.loaded.geometry);
    const offset=stage.loaded.building.homePlacement.offset;
    const origin=new T.Vector3(...offset);
    this.casters=new BedroomCasterMaps(stage,origin);
    this.uniforms={
      uRoomOrigin:{value:origin},uPane:{value:new T.Vector3(pane.x,(pane.bottom+pane.top)/2,pane.z)},
      uWindowSun:{value:new T.Vector3()},uBeamColor:{value:new T.Color()},uRoomFillTint:{value:new T.Color(1,1,1)},uBeam:{value:0},
      uWindowPower:{value:0},uCurtainGap:{value:.70},uRoomDay:{value:1},uRoomActive:{value:0},
      uFloorContact:{value:this.casters.contact.texture},uRoomSunDepth:{value:this.casters.sun.depthTexture},
      uRoomSunMatrix:{value:this.casters.sunMatrix},
      uAirClock:{value:0},uPixelRatio:{value:stage.renderer.getPixelRatio()},
    };
    this.shaft=makeWindowAir(this.uniforms);
    this.dust=makeDust(this.uniforms);
    stage.scene.add(this.shaft,this.dust);
    const seen=new Set();
    for(const {partId,node} of stage.loaded.geometry.meshes.values()) {
      if(!/^(scene_bedroom_|residence_|home_sofa)/.test(partId))continue;
      for(const material of Array.isArray(node.material)?node.material:[node.material]) {
        const kind=bedroomSurface(partId,material.name);
        if(seen.has(material)||!material.isMeshStandardMaterial||material.transparent||material.transmission>0)continue;
        seen.add(material);
        installRoomPaint(material,kind==='fabric'&&!material.name.endsWith('blackout_dusty_blue')?undefined:kind,this.uniforms);
      }
    }
  }

  update(minutes, strength, direction) {
    const stage=this.stage, u=this.uniforms;
    u.uRoomActive.value=Number(stage.seated);
    if(!stage.seated){
      this.shaft.visible=this.dust.visible=false;
      this.open=undefined;
      for(const mesh of this.panels)mesh.morphTargetInfluences[0]=0;
      return;
    }
    this.targetOpen=curtainOpening(minutes,stage.weather);
    const day=daylightAt(minutes,stage.weather);
    u.uWindowSun.value.copy(direction);
    const weather=stage.weather==='night'?0:stage.weather==='rain'?.13:stage.weather==='overcast'?.32:1;
    u.uWindowPower.value=T.MathUtils.smoothstep(day.height,0,.16)*T.MathUtils.smoothstep(direction.z,.04,.34)
      *weather*strength/100;
    if(u.uWindowPower.value>.001)this.casters.setSun(direction);
    this.beamStrength=day.lowSun*u.uWindowPower.value;
    u.uBeamColor.value.set('#ffe5aa').lerp(new T.Color(twilightColors(day).sun),day.lowSun*.86);
    u.uRoomFillTint.value.setRGB(1.-.26*day.lowSun,1.-.23*day.lowSun,1.-.035*day.lowSun);
    u.uRoomDay.value=stage.weather==='night'?.58:1-.38*day.lowSun;
    this.setOpening(this.reducedMotion?this.targetOpen:(this.open??this.targetOpen));
    // Reflections also depend on the daylight and curtain, even with a fixed camera.
    if(this.reducedMotion)stage.windowGlass.lastCapture=-100;
  }

  setOpening(open){
    this.open=open;
    for(const mesh of this.panels)mesh.morphTargetInfluences[0]=1-open;
    this.uniforms.uCurtainGap.value=T.MathUtils.lerp(.005,.70,open);
    this.uniforms.uBeam.value=this.beamStrength*T.MathUtils.smoothstep(open,0,.30);
    this.shaft.visible=this.dust.visible=this.uniforms.uBeam.value>.001;
  }

  tick(dt){
    if(!this.stage.seated||this.open===undefined)return;
    if(this.open!==this.targetOpen){
      const step=T.MathUtils.damp(this.open,this.targetOpen,9,dt);
      this.setOpening(Math.abs(step-this.targetOpen)<.001?this.targetOpen:step);
      this.stage.renderer.shadowMap.needsUpdate=true;
      if(this.open===this.targetOpen)this.stage.windowGlass.lastCapture=-100;
      this.stage.dirty=true;
    }
    if(this.dust.visible&&!this.reducedMotion){
      this.uniforms.uAirClock.value+=dt;
      this.stage.dirty=true;
    }
  }

  dispose(){
    this.casters.dispose();
    for(const object of [this.shaft,this.dust]){
      object.removeFromParent();
      object.geometry.dispose();
      object.material.dispose();
    }
  }
}
