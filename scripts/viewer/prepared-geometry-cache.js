import * as T from 'three';
import {addLodBounds} from '@sketch/rendering/asset/sketch-lod';
import {unpackAsset} from './asset-transfer.mjs';
import {geometryCodecReady,decodeGeometryArray} from './geometry-codec.mjs';
import {NEAR_FOLIAGE_PART, NEAR_FOLIAGE_MATERIALS} from './foliage-treatment.mjs';
import {compactDevice,displayAttribute} from './device-budget.mjs';
import {mobileDisplayGeometry,indexMobileGeometry} from './mobile-geometry.mjs';

// The illustration pen uses metre-space positions and normals on the leaf
// masses. These two surfaces have no triangle seams or structure-edge ink.
function prepareLeafSurface(source) {
 const geometry = source.index ? source.toNonIndexed() : source.clone();
 const count = geometry.getAttribute('position').count;
 const attribute = (size, value) => new T.BufferAttribute(new Float32Array(count * size).fill(value), size);
 geometry.setAttribute('labStrokeUV', geometry.getAttribute('uv') ?? attribute(2, 0));
 geometry.setAttribute('labStrokeSeam', attribute(3, 1));
 geometry.setAttribute('labStructureDistance', attribute(3, 1));
 geometry.setAttribute('labStructureEdges', attribute(3, -1));
 geometry.userData.galleryLeafSurface = true;
 return addLodBounds(geometry);
}

// Shared between the offline exporter and browser. All source attributes,
// index bytes and material groups participate in the SHA-256 identity.
export async function geometryFingerprint(geometry){
 const entries=Object.entries(geometry.attributes).sort(([a],[b])=>a.localeCompare(b));
 if(geometry.index)entries.push(['$index',geometry.index]);
 const arrays=entries.map(([,a])=>a.isInterleavedBufferAttribute?a.data.array:a.array);
 const header=new TextEncoder().encode(JSON.stringify({attributes:entries.map(([name,a],i)=>({name,type:arrays[i].constructor.name,itemSize:a.itemSize,normalized:a.normalized,count:a.count,stride:a.isInterleavedBufferAttribute?a.data.stride:undefined,offset:a.isInterleavedBufferAttribute?a.offset:undefined})),groups:geometry.groups,drawRange:geometry.drawRange}));
 const bytes=new Uint8Array(header.length+arrays.reduce((n,a)=>n+a.byteLength,0));bytes.set(header);let at=header.length;
 for(const array of arrays){bytes.set(new Uint8Array(array.buffer,array.byteOffset,array.byteLength),at);at+=array.byteLength;}
 return [...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(n=>n.toString(16).padStart(2,'0')).join('');
}

/** Exact display preparation cache; source meshes and authored materials survive. */
export async function loadPreparedDisplayCache(base,progress=()=>{},mode='full'){
 if(compactDevice){
  const keys=new WeakMap(),sources=new Map();
  const stats={hits:0,misses:0,sourceGeometries:0,entries:0,mobile:true};
  return {stats,async prepare(root,onProgress=()=>{}){
   const geometries=new Set(),deskRanges=new Set();root.traverse(node=>{if(node.isMesh){geometries.add(node.geometry);if(node.userData.deskSlices)deskRanges.add(node.geometry);}});
   let done=0;const deskKeys=new Set();
   // Hash one original buffer at a time, without downloading/decoding the
   // desktop display cache or holding four fingerprint copies simultaneously.
   for(const geometry of geometries){
    const key=await geometryFingerprint(geometry);keys.set(geometry,key);
    if(deskRanges.has(geometry)){deskKeys.add(key);sources.set(key,geometry);}
    else if(!deskKeys.has(key)){indexMobileGeometry(geometry);sources.set(key,geometry);}
    onProgress(++done,geometries.size);
   }
   stats.sourceGeometries=geometries.size;
  },key(node){return keys.get(node.geometry);},get(key){
   const source=sources.get(key);if(!source)return;stats.hits++;
   return {geometry:{clone:()=>addLodBounds(mobileDisplayGeometry(source,key))},field:{offset:0,data:new Float32Array(0)}};
  },put(){},dispose(){sources.clear();}};
 }
 const baseURL=new URL(base,globalThis.location?.href||import.meta.url);
 const compact=typeof __SKETCH_PREPARED_MANIFEST__!=='undefined';
 const neighborhood=compact&&mode==='neighborhood';
 const file=neighborhood?'prepared-compact/neighborhood-manifest.json.gz':compact?'prepared-compact/manifest.json.gz':'prepared/manifest.json.gz';
 const manifest=await(await unpackAsset(baseURL,file,neighborhood?__SKETCH_NEIGHBORHOOD_GEOMETRY__:compact?__SKETCH_PREPARED_MANIFEST__:undefined)).json();
 if(manifest.schema!=='sketch.prepared.geometry.v1')throw Error('Unsupported prepared geometry cache');
 await geometryCodecReady;
 const chunks=new Map(),queue=[...manifest.chunks];let done=0;
 async function worker(){while(queue.length){const item=queue.shift();const bytes=await(await unpackAsset(baseURL,item.file,item.sha256)).arrayBuffer();if(bytes.byteLength!==item.inflatedBytes)throw Error('Prepared geometry byte length differs: '+item.file);chunks.set(item.file,bytes);progress(++done,manifest.chunks.length);}}
 await Promise.all(Array.from({length:4},worker));
 const keys=new WeakMap(),sources=new Map(),views=new Map(),leafSurfaces=new WeakSet();
 const stats={hits:0,misses:0,leafSurfaces:0,sourceGeometries:0,entries:Object.keys(manifest.entries).length};
 function fields(key){
  if(views.has(key))return views.get(key);
  const entry=manifest.entries[key];if(!entry)return;
  const attributes={};
  for(const [name,a]of Object.entries(entry.attributes)){
   // The native shader now computes crease distance from StructureField. Its
   // legacy vLabStructure varying is never read; omit that dead mobile buffer.
   if(compactDevice&&name==='labStructureDistance')continue;
   attributes[name]={array:decodeGeometryArray(chunks.get(a.chunk||entry.chunk),a),itemSize:a.itemSize};
  }
  const value={attributes,field:{offset:0,data:decodeGeometryArray(chunks.get(entry.field.chunk||entry.chunk),entry.field)},userData:entry.userData};views.set(key,value);return value;
 }
 return {stats,manifest,
  async prepare(root,onProgress=()=>{}){
   const geometries=new Set();root.traverse(node=>{
    if(!node.isMesh)return;
    geometries.add(node.geometry);
    if(node.parent?.userData.part_id===NEAR_FOLIAGE_PART && Object.values(NEAR_FOLIAGE_MATERIALS).includes(node.material?.name))leafSurfaces.add(node.geometry);
   });
   const queue=[...geometries],missing=[];let prepared=0;
   async function worker(){while(queue.length){const geometry=queue.shift(),key=await geometryFingerprint(geometry);keys.set(geometry,key);sources.set(key,geometry);if(!manifest.entries[key]&&!leafSurfaces.has(geometry))missing.push(key);onProgress(++prepared,geometries.size);}}
   await Promise.all(Array.from({length:4},worker));stats.sourceGeometries=geometries.size;
   // A platform-dependent procedural mesh may differ by a float bit. Rebuild
   // that mesh through the original algorithm rather than reuse an inexact chart.
   if(missing.length){const ids=[];root.traverse(node=>{if(node.isMesh&&missing.includes(keys.get(node.geometry)))ids.push(node.userData.mesh_id||node.name);});stats.unmatched=ids;console.info('Preparing original uncached geometry:',ids.join(', '));}
  },
  key(node){const key=keys.get(node.geometry);if(key)sources.set(key,node.geometry);return key;},
  get(key){
   const source=sources.get(key);
   if(leafSurfaces.has(source)&&!manifest.entries[key]){
    stats.leafSurfaces++;
    return {geometry:{clone:()=>prepareLeafSurface(source)},field:{offset:0,data:[]}};
   }
   const value=fields(key);if(!value||!source){stats.misses++;return;}
   stats.hits++;
   // GeometryStage asks cached.geometry.clone(). Construct directly here so
   // there is no second copy of the large expanded position/normal buffers.
   return {geometry:{clone(){const geometry=source.index?source.toNonIndexed():source.clone();
    for(const [name,a]of Object.entries(value.attributes))geometry.setAttribute(name,displayAttribute(a.array,a.itemSize,name==='labStructureEdges'));
    geometry.userData={...geometry.userData,labStrokeCharts:value.userData.labStrokeCharts,showcaseSourceKey:key};return addLodBounds(geometry);
   }},field:value.field};
  },
  put(key,geometry){geometry.userData.showcaseSourceKey=key;},
  dispose(){chunks.clear();sources.clear();views.clear();}
 };
}
