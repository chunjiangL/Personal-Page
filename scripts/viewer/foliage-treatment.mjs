import {bandStrength, setPaintedWash} from './street-light-bands.mjs';

/** Local reflectance/pen settings for the authored foreground tree batch. */
export const NEAR_FOLIAGE_PART='street_life_trees';
export const NEAR_FOLIAGE_MATERIALS=Object.freeze({
 crown:'mat_clay_apartment_street_life_leaf',
 detail:'mat_clay_apartment_street_life_foliage_detail',
});

// Vertex colors already contain the leaf-cluster palette. A second saturated
// green multiplier crushed their shadow values, especially under night wash.
// Slightly lighter folded leaves reveal the existing leaf geometry; the crown
// remains the deeper, matte layer underneath. No extra geometry is needed.
const reflectance=Object.freeze({
 sunny:{crown:'#a5b991',detail:'#b8c99f',roughness:.94,hatch:.23},
 overcast:{crown:'#b0c19f',detail:'#bfccad',roughness:.96,hatch:.10},
 rain:{crown:'#b1c1a1',detail:'#bdcbae',roughness:.91,hatch:.08},
 sunset:{crown:'#b3bf98',detail:'#c2cba6',roughness:.94,hatch:.25},
 night:{crown:'#cbd3bb',detail:'#d3dbc4',roughness:.96,hatch:.035},
});

// Use the original surface-attached, antialiased pen and native sun/shadow
// probe. These accents are confined to the light transition / shaded rim, not
// triangle edges. Broad pigment variation breaks up the smooth canopy gently.
const foliageDeclarations=`
float galleryLeafCluster(vec3 p){
 vec3 cell=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 vec4 n=vec4(dot(cell,vec3(127.1,311.7,74.7)))+vec4(0.,127.1,311.7,438.8);
 vec4 lower=fract(sin(n)*43758.5453),upper=fract(sin(n+74.7)*43758.5453);
 vec4 layers=mix(lower,upper,f.z);
 float value=mix(mix(layers.x,layers.y,f.x),mix(layers.z,layers.w,f.x),f.y);
 return mix(value,.5,smoothstep(.35,1.2,max(length(dFdx(p)),length(dFdy(p)))));
}
float galleryLeafDab(vec2 p){
 vec2 cell=floor(p),f=fract(p);
 vec3 seed=fract(sin(vec3(dot(cell,vec2(127.1,311.7)))+vec3(0.,19.19,47.77))*43758.5453);
 vec2 q=f-(vec2(.28)+seed.xy*.44);
 float angle=seed.z*6.28318,c=cos(angle),s=sin(angle);
 q=mat2(c,-s,s,c)*q;
 float oval=length(q*vec2(1.4,3.4)),aa=max(fwidth(oval),.025);
 float dab=1.-smoothstep(.30-aa*.5,.30+aa*.5,oval);
 float resolved=1.-smoothstep(.30,.75,max(length(dFdx(p)),length(dFdy(p))));
 return dab*smoothstep(.38,.68,seed.z)*resolved;
}
`;
const foliageFinish=`
 {
 float foliageCluster=galleryLeafCluster(vLabPosition*3.2);
 vec3 foliageAxes=pow(abs(normalize(vLabObjectNormal)),vec3(5.));
 foliageAxes/=max(dot(foliageAxes,vec3(1.)),.00001);
 vec3 foliageLeafP=vLabPosition*6.5;
 float foliageLeaves=dot(foliageAxes,vec3(galleryLeafDab(foliageLeafP.zy),galleryLeafDab(foliageLeafP.xz),galleryLeafDab(foliageLeafP.xy)));
 vec3 foliageWorldNormal=inverseTransformDirection(normal,viewMatrix);
 float foliageFacing=dot(foliageWorldNormal,uApartmentSunDirection);
 // Sky-facing lobes keep a readable middle value even in the building's
 // shadow. Only a lobe reached by the native sun can take the warm highlight.
 float foliageSky=clamp(.40+.39*foliageWorldNormal.y+.21*foliageFacing,0.,1.);
 float foliageLight=mix(.58*foliageSky,.42+.58*max(foliageFacing,0.),apartmentSun);
 float middle=galleryBand(foliageLight,.30,.032);
 float sunTip=galleryBand(foliageLight,.74,.045)*smoothstep(.16,.55,apartmentSun);
 vec3 shadowColor=uApartmentCool*vec3(.72,.87,1.10);
 vec3 midColor=mix(uApartmentCool,uApartmentWarm,.21)*vec3(.96,1.12,.91);
 vec3 tipColor=uApartmentWarm*vec3(1.45,1.32,.78);
 vec3 groupedColor=mix(mix(shadowColor,midColor,middle),tipColor,sunTip);
 apartmentWash=mix(apartmentWash,labBaseColor*groupedColor,uGalleryBandStrength);
 apartmentWash*=.96+.08*foliageCluster;
 apartmentWash*=1.+foliageLeaves*(.02+.21*sunTip);
 float foliageTurn=1.-smoothstep(.022,.09,abs(foliageLight-.30));
 float foliageRim=1.-smoothstep(.16,.62,abs(dot(normal,normalize(vViewPosition))));
 float foliageShadow=1.-smoothstep(.10,.62,apartmentIrradiance);
 float foliageBand=max(foliageTurn*.85,foliageRim*foliageShadow*.70);
 float foliagePen=labClassicCoverage()*foliageBand*uGalleryFoliageHatch*(.55+.45*foliageCluster);
 ink=1.-(1.-ink)*(1.-foliagePen);
 }
 `;

const crownTreatment={key:'-gallery-foliage-light-bands-v3',declarations:foliageDeclarations,finish:foliageFinish};
const kindOf=material=>Object.keys(NEAR_FOLIAGE_MATERIALS).find(kind=>material?.name===NEAR_FOLIAGE_MATERIALS[kind]);
function inNearTree(node){for(let part=node.parent;part;part=part.parent)if(part.userData?.part_id===NEAR_FOLIAGE_PART)return true;return false;}
function slots(node){return (Array.isArray(node.material)?node.material:[node.material]).map((material,slot)=>({material,slot,kind:kindOf(material)})).filter(entry=>entry.kind);}
function mergePatch(previous,patch){
 const result=structuredClone(previous||{});
 for(const group of ['base','edges'])if(patch[group])result[group]={...result[group],...patch[group]};
 if(patch.sketch){const old=result.sketch||{};result.sketch={...old,...patch.sketch};for(const group of ['classic','inkShading'])if(patch.sketch[group])result.sketch[group]={...old[group],...patch.sketch[group]};}
 return result;
}

/** Call once with loaded, before AssetRenderCore construction / first apply. */
export function prepareNearFoliage(loaded){
 const appearance=loaded.settings.appearance??={defaults:{},materials:{},meshes:{},slots:{},resources:{}};appearance.slots??={};
 let count=0;
 for(const [id,record]of loaded.geometry.meshes){
  const node=record.node;if(!inNearTree(node))continue;
  for(const {slot,kind}of slots(node)){
   const crown=kind==='crown',patch={
    base:{color:reflectance.sunny[kind],roughness:reflectance.sunny.roughness,metalness:0,clearcoat:0},
    sketch:{strength:crown?.025:0,edgeOpacity:0,outlines:crown,
     classic:{ink:'#273d2d',pressure:crown?.045:0,width:.40,baseShade:.06,materialMix:1,silhouetteWidth:crown?.52:0,silhouetteOpacity:crown?.18:0},
     inkShading:{mode:'mixed',lightStrength:crown?.04:0,structureStrength:crown?.02:0,castStrength:crown?.06:0}},
    edges:{width:.4,importance:crown?'subtle':'hidden'},
   };
   // A mesh slot keeps this treatment off distant trees, bark, soil, and any
   // unrelated asset that happens to reuse a material's authored name.
   const row=appearance.slots[id]??={};row[String(slot)]=mergePatch(row[String(slot)],patch);count++;
  }
 }
 return count;
}

/** Call after the original environment refresh has applied its wash/night pass. */
export function applyNearFoliageWeather(root,weather='sunny'){
 const look=reflectance[weather]||reflectance.sunny,seen=new Set();
 root.traverse(node=>{
  if(!node.isMesh||!inNearTree(node))return;
  for(const {material,kind}of slots(node)){
   if(seen.has(material)||!material.isMeshStandardMaterial)continue;seen.add(material);
   material.color.set(look[kind]);material.roughness=look.roughness;
   if(kind==='crown')setPaintedWash(material,crownTreatment,{uGalleryFoliageHatch:look.hatch,uGalleryBandStrength:bandStrength(weather)});
   // Weather only changes uniforms; native wash, shadows and pen LOD remain
   // upstream in the shader chain. Nothing emits light or adds a render pass.
  }
 });
 return seen.size;
}
