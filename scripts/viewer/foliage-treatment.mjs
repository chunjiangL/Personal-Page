/** Local reflectance/pen settings for the authored foreground tree batch. */
export const NEAR_FOLIAGE_PART='street_life_trees';
export const NEAR_FOLIAGE_MATERIALS=Object.freeze({
 crown:'mat_clay_apartment_street_life_leaf',
 detail:'mat_clay_apartment_street_life_foliage_detail',
});

// Vertex colors already contain the leaf-cluster palette. A second saturated
// green multiplier crushed their shadow values, especially under night wash.
// These matte reflectances leave the native light/shadow/weather shaders intact.
const reflectance=Object.freeze({
 sunny:{crown:'#a7bc92',detail:'#a3b88f',roughness:.94},
 overcast:{crown:'#b4c5a1',detail:'#afc09c',roughness:.96},
 rain:{crown:'#b5c5a4',detail:'#afbf9e',roughness:.91},
 sunset:{crown:'#b6c29a',detail:'#b0bc95',roughness:.94},
 night:{crown:'#ced6bd',detail:'#c6cfb6',roughness:.96},
});
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
   // Ordinary uniforms only: no emission, shader replacement, geometry edits,
   // or weather-dependent program variants are introduced.
  }
 });
 return seen.size;
}
