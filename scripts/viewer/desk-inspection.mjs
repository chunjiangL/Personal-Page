import * as T from 'three';

export const DESK_OBJECTS=Object.freeze([
 {id:'monitor',label:'Monitor',prefix:'workstation_monitor_'},
 {id:'keyboard',label:'Keyboard',prefix:'workstation_keyboard_'},
 {id:'mouse',label:'Mouse',prefix:'workstation_mouse_'},
 {id:'lamp',label:'Desk lamp',prefix:'workstation_lamp_'},
 {id:'mini',label:'Mini computer',prefix:'workstation_mini_'},
]);

function resources(root){const geometries=new Set(),materials=new Set(),textures=new Set();root.traverse(node=>{if(!node.isMesh)return;geometries.add(node.geometry);for(const material of Array.isArray(node.material)?node.material:[node.material]){materials.add(material);for(const value of Object.values(material))if(value?.isTexture)textures.add(value);}});return{geometries,materials,textures};}

/** Consumes the original unbatched bedroom root returned by loadAssetRoot. */
export function createDeskObjects(rawBedroomRoot,homeOffset=new T.Vector3()){
 rawBedroomRoot.updateWorldMatrix(true,true);
 const root=new T.Group();root.name='desk_object_pick_proxies';
 const objects=DESK_OBJECTS.map(definition=>{
  const parts=rawBedroomRoot.children.filter(part=>String(part.userData.part_id).startsWith(definition.prefix));
  // attach() preserves every original room-space pose before applying the
  // seated room's world offset once, at the proxy root.
  for(const part of parts)root.attach(part);
  const pickMeshes=[];for(const part of parts)part.traverse(node=>{if(node.isMesh)pickMeshes.push(node);});
  return {...definition,parts,pickMeshes,proxyRoot:root};
 });
 root.position.copy(homeOffset);root.updateMatrixWorld(true);
 const owned=resources(root),remaining=resources(rawBedroomRoot);
 // The caller transfers this fresh parsed assembly in full. Release the bed,
 // wardrobe and other unselected assets now, retaining shared proxy resources.
 for(const category of ['geometries','materials','textures'])for(const item of remaining[category])if(!owned[category].has(item))item.dispose();
 rawBedroomRoot.clear();let disposed=false;
 return {root,objects,dispose(){if(disposed)return;disposed=true;root.removeFromParent();root.clear();
  for(const category of ['geometries','materials','textures']){for(const item of owned[category])item.dispose();owned[category].clear();}
  for(const object of objects){object.parts.length=0;object.pickMeshes.length=0;}
 }};
}

function cloneResources(root){
 const geometries=new Map(),materials=new Map(),textures=new Map();
 function texture(source){if(!textures.has(source)){const copy=source.clone();copy.source=new T.Source(source.source.data);copy.needsUpdate=true;textures.set(source,copy);}return textures.get(source);}
 function material(source){if(!materials.has(source)){const copy=source.clone();for(const [key,value]of Object.entries(source))if(value?.isTexture)copy[key]=texture(value);materials.set(source,copy);}return materials.get(source);}
 root.traverse(node=>{if(!node.isMesh)return;
  if(!geometries.has(node.geometry))geometries.set(node.geometry,node.geometry.clone());node.geometry=geometries.get(node.geometry);
  node.material=Array.isArray(node.material)?node.material.map(material):material(node.material);
  if(node.isInstancedMesh){node.instanceMatrix=node.instanceMatrix.clone();if(node.instanceColor)node.instanceColor=node.instanceColor.clone();}
 });
}

const offsets={
 monitor:{base:[0,-.04,.04],display:[.04,.16,-.05],stand:[-.44,.02,.04]},
 keyboard:{lower_case:[0,-.04,0],switch_plate:[0,0,0],upper_case:[0,.04,0],keys:[0,.10,0]},
 mouse:{battery_cover:[0,-.03,0],chassis:[0,0,0],left_button:[.025,.045,.018],right_button:[-.025,.045,.018],palm_shell:[0,.06,-.025],power_slider:[-.04,-.015,-.01],scroll_wheel:[0,.10,.015]},
 lamp:{base:[0,-.025,.02],lamp_head:[.085,.12,-.07],lower_arm:[-.045,.025,.045],switch:[.04,.035,-.03],swivel:[0,.015,.045],upper_arm:[.04,.075,0]},
 mini:{base_cover:[0,-.025,0],chassis:[0,.035,0],power_button:[.045,0,-.015]},
};

/** Small authored component separation, checked against actual component boxes. */
function assignExplodeOffsets(root,object){
 root.updateMatrixWorld(true);const whole=new T.Box3().setFromObject(root,true),gap=Math.max(.002,whole.getSize(new T.Vector3()).length()*.025),placed=[];
 for(const part of root.children){
  const suffix=String(part.userData.part_id).slice(object.prefix.length),offset=new T.Vector3(...(offsets[object.id]?.[suffix]||[0,0,0]));
  const box=new T.Box3().setFromObject(part,true).translate(offset);
  const blocked=moved=>placed.some(previous=>previous.clone().expandByScalar(gap/2).intersectsBox(moved.clone().expandByScalar(gap/2)));
  if(blocked(box)){
   const candidates=[];for(const axis of ['x','y','z'])for(const previous of placed)for(const distance of [previous.max[axis]-box.min[axis]+gap+.00001,previous.min[axis]-box.max[axis]-gap-.00001]){const delta=new T.Vector3();delta[axis]=distance;candidates.push(delta);}
   candidates.sort((a,b)=>a.lengthSq()-b.lengthSq());const delta=candidates.find(value=>!blocked(box.clone().translate(value)));if(delta){offset.add(delta);box.translate(delta);}
  }
  part.userData.explode_offset=offset.toArray();placed.push(box);
 }
}

/** Independent detail ownership, preserving the original render-core IDs/maps. */
export function makeDetailRoot(object){
 const root=new T.Group();root.name='desk_detail_'+object.id;root.userData={asset_role:'asset',asset_id:'desk_detail_'+object.id};
 for(const source of object.parts){const part=source.clone(true);root.add(part);}
 cloneResources(root);
 if(object.id==='keyboard'){
  const initialGeometries=resources(root).geometries;
  const keys=root.children.filter(part=>String(part.userData.part_id).startsWith('workstation_keyboard_key_'));
  const layer=new T.Group();layer.name='part_workstation_keyboard_keys';layer.userData={asset_role:'part',part_id:'workstation_keyboard_keys',linked_source:'workstation',source_id:'keyboard_keys',source_part_ids:keys.map(part=>part.userData.part_id)};
  root.updateMatrixWorld(true);
  for(const part of keys){
   const meshes=[];part.traverse(node=>{if(node.isMesh)meshes.push(node);});
   for(const mesh of meshes){const matrix=mesh.matrixWorld.clone();
    if(mesh.isInstancedMesh){const instance=new T.Matrix4();for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,instance);mesh.setMatrixAt(i,matrix.clone().multiply(instance));}mesh.instanceMatrix.needsUpdate=true;mesh.boundingBox=null;mesh.boundingSphere=null;}
    else{mesh.geometry=mesh.geometry.clone();mesh.geometry.applyMatrix4(matrix);}
    layer.add(mesh);mesh.position.set(0,0,0);mesh.quaternion.identity();mesh.scale.set(1,1,1);mesh.updateMatrix();
   }
   root.remove(part);
  }
  root.add(layer);
  const retainedGeometries=resources(root).geometries;
  for(const geometry of initialGeometries)if(!retainedGeometries.has(geometry))geometry.dispose();
 }
 assignExplodeOffsets(root,object);root.updateMatrixWorld(true);return root;
}
