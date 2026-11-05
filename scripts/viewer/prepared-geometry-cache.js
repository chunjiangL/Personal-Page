import * as T from 'three';
import {addLodBounds} from '@sketch/rendering/asset/sketch-lod';
import {unpackAsset} from './asset-transfer.mjs';
import {geometryCodecReady,decodeGeometryArray} from './geometry-codec.mjs';

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
 const keys=new WeakMap(),sources=new Map(),views=new Map();
 const stats={hits:0,misses:0,sourceGeometries:0,entries:Object.keys(manifest.entries).length};
 function fields(key){
  if(views.has(key))return views.get(key);
  const entry=manifest.entries[key];if(!entry)return;
  const attributes={};
  for(const [name,a]of Object.entries(entry.attributes))attributes[name]={array:decodeGeometryArray(chunks.get(a.chunk||entry.chunk),a),itemSize:a.itemSize};
  const value={attributes,field:{offset:0,data:decodeGeometryArray(chunks.get(entry.field.chunk||entry.chunk),entry.field)},userData:entry.userData};views.set(key,value);return value;
 }
 return {stats,manifest,
  async prepare(root,onProgress=()=>{}){
   const geometries=new Set();root.traverse(node=>{if(node.isMesh)geometries.add(node.geometry);});
   const queue=[...geometries],missing=[];let prepared=0;
   async function worker(){while(queue.length){const geometry=queue.shift(),key=await geometryFingerprint(geometry);keys.set(geometry,key);sources.set(key,geometry);if(!manifest.entries[key])missing.push(key);onProgress(++prepared,geometries.size);}}
   await Promise.all(Array.from({length:4},worker));stats.sourceGeometries=geometries.size;
   // A platform-dependent procedural mesh may differ by a float bit. Rebuild
   // that mesh through the original algorithm rather than reuse an inexact chart.
   if(missing.length){const ids=[];root.traverse(node=>{if(node.isMesh&&missing.includes(keys.get(node.geometry)))ids.push(node.userData.mesh_id||node.name);});stats.unmatched=ids;console.info('Preparing original uncached geometry:',ids.join(', '));}
  },
  key(node){const key=keys.get(node.geometry);if(key)sources.set(key,node.geometry);return key;},
  get(key){
   const value=fields(key),source=sources.get(key);if(!value||!source){stats.misses++;return;}
   stats.hits++;
   // GeometryStage asks cached.geometry.clone(). Construct directly here so
   // there is no second copy of the large expanded position/normal buffers.
   return {geometry:{clone(){const geometry=source.index?source.toNonIndexed():source.clone();
    for(const [name,a]of Object.entries(value.attributes))geometry.setAttribute(name,new T.BufferAttribute(name==='labStructureEdges'?a.array.slice():a.array,a.itemSize));
    geometry.userData={...geometry.userData,labStrokeCharts:value.userData.labStrokeCharts,showcaseSourceKey:key};return addLodBounds(geometry);
   }},field:value.field};
  },
  put(key,geometry){geometry.userData.showcaseSourceKey=key;},
  dispose(){chunks.clear();sources.clear();views.clear();}
 };
}
