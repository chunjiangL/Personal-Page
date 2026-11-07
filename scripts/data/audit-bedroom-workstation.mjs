/** Read-only authored workstation audit; run from the website checkout. */
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import * as T from '../../node_modules/three/build/three.module.js';
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from '../../node_modules/three/examples/jsm/libs/meshopt_decoder.module.js';
const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..'),game='G:/Personal Projects/SketchGame';
const require=createRequire(path.join(os.tmpdir(),'sketch-showcase-export-deps/package.json')),Canvas=require('@napi-rs/canvas');
globalThis.self=globalThis;globalThis.createImageBitmap=async blob=>Canvas.loadImage(Buffer.from(await blob.arrayBuffer()));
const bytes=await fs.readFile(path.join(site,'assets/models/sketch-runtime/assemblies/bedroom.glb'));
const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
const root=gltf.scene.children[0];root.updateMatrixWorld(true);
const sources=JSON.parse(await fs.readFile(path.join(game,'assets/models/assemblies/workspaces/studio-connected-workstation/versions/v0007/assembly.json'),'utf8'));
const labels={desk:'Desk',monitor:'Monitor',keyboard:'Keyboard',chair:'Office chair',mini:'Mini computer',strip:'Power strip',leads:'Computer cables',mouse:'Mouse',mousepad:'Mouse pad',lamp:'Desk lamp',lamplead:'Lamp cable'};
const round=a=>a.map(n=>Math.round(n*1e6)/1e6);
const boxJSON=box=>({min:round(box.min.toArray()),max:round(box.max.toArray()),center:round(box.getCenter(new T.Vector3()).toArray()),size:round(box.getSize(new T.Vector3()).toArray())});
const objects=sources.children.map(source=>{
 const prefix='workstation_'+source.id+'_',parts=root.children.filter(n=>n.userData.part_id?.startsWith(prefix)),bounds=new T.Box3(),meshIds=new Set(),materialNames=new Set();
 for(const part of parts){bounds.union(new T.Box3().setFromObject(part,true));part.traverse(n=>{if(n.userData.mesh_id)meshIds.add(n.userData.mesh_id);if(n.isMesh)for(const material of Array.isArray(n.material)?n.material:[n.material])materialNames.add(material.name);});}
 return {id:source.id,label:labels[source.id],prefix,asset:source.asset,version:source.version,bounds:boxJSON(bounds),partIds:parts.map(p=>p.userData.part_id),meshIds:[...meshIds],materialNames:[...materialNames],parts:parts.map(p=>({id:p.userData.part_id,sourceId:p.userData.source_id,bounds:boxJSON(new T.Box3().setFromObject(p,true))}))};
});
const workstationBounds=new T.Box3();for(const item of objects)workstationBounds.union(new T.Box3(new T.Vector3(...item.bounds.min),new T.Vector3(...item.bounds.max)));
const offset=new T.Vector3(-2.05,1.55,1.58);
const candidates=[{id:'complete_desk_and_window',eye:[3.35,1.60,-.35],target:[1.95,1.05,2.50],fov:62},{id:'front_desk_and_window',eye:[2.75,1.50,-.35],target:[1.95,1.05,2.50],fov:62},{id:'original_desk',eye:[3.1,1.8,1.18],target:[1.8,.98,2.47],fov:52}];
const viewBounds=workstationBounds.clone().union(new T.Box3(new T.Vector3(1.49,.9,3.17),new T.Vector3(3.31,2.40,3.33)));
function projectedBounds(boxes,camera){const min=new T.Vector3(Infinity,Infinity,Infinity),max=min.clone().negate();for(const bounds of boxes)for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new T.Vector3(x,y,z).project(camera);min.min(p);max.max(p);}return {min:round(min.toArray()),max:round(max.toArray())};}
const partBoxes=objects.flatMap(o=>o.parts.map(p=>new T.Box3(new T.Vector3(...p.bounds.min),new T.Vector3(...p.bounds.max)))),windowBox=new T.Box3(new T.Vector3(1.49,.9,3.17),new T.Vector3(3.31,2.40,3.33));
for(const pose of candidates){pose.worldEye=round(new T.Vector3(...pose.eye).add(offset).toArray());pose.worldTarget=round(new T.Vector3(...pose.target).add(offset).toArray());pose.projected={};for(const aspect of [16/9,1.5,1]){const camera=new T.PerspectiveCamera(pose.fov,aspect,.02,1000);camera.position.fromArray(pose.eye);camera.lookAt(new T.Vector3(...pose.target));camera.updateMatrixWorld(true);pose.projected[aspect]={workstation:projectedBounds(partBoxes,camera),withWindow:projectedBounds([...partBoxes,windowBox],camera)};}}
const report={schema:'sketch.workstation.inspection.v1',assembly:'apartment_302_bedroom',linkedSource:'workstation',homeOffset:offset.toArray(),window:{center:[2.4,1.65,3.27],size:[1.7,1.4]},workstationBounds:boxJSON(workstationBounds),objects,cameras:candidates,selection:{broadPhase:'Intersect each object bounds translated by current homeOffset; nearest box is only a candidate.',narrowPhase:'Raycast the raw assembled parts in the nearest candidate objects, with proxyRoot translated by homeOffset and matrixWorld updated. Use recursive raycast: multi-primitive meshes may retain intermediate Groups. Find nearest ancestor part_id and match workstation_<object>_ prefix.',rendering:'Use the bedroom batch range for each component mesh and material slot. Room picking and exploded fills share the same prepared attributes and bounds. Partition the cached crease strokes by component and draw the selected group on the room renderer.',explode:'The detail copy gives each authored mesh its own inspection pivot, preserving the source part ID and assembled transform. Caps, stems, switches and plates keep their keyboard registration as they separate. Panels, hinge pins and sockets follow their assembly axes.'}};
await fs.writeFile(path.join(site,'scripts/data/bedroom-workstation.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({workstationBounds:report.workstationBounds,objects:objects.map(({id,bounds,partIds,meshIds})=>({id,parts:partIds.length,meshes:meshIds.length,bounds})),cameras:candidates},null,2));
