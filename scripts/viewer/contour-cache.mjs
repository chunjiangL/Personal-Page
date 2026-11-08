import * as T from 'three';
import {unpackAsset} from './asset-transfer.mjs';
import {compactDevice} from './device-budget.mjs';

let active=new Map(),statistics={hits:0,misses:0,entries:0,bytes:0};
export const contourKey=(sourceKey,angle=1)=>sourceKey+':'+String(angle);
export function contourCacheStats(){return {...statistics};}

/** Exact immutable Three.js edge endpoints, loaded before AssetRenderCore.apply. */
export async function loadContourCache(baseURL,progress=()=>{},mode='full'){
 const base=new URL(baseURL,globalThis.location?.href||import.meta.url);
 const unpack=(relative,hash)=>unpackAsset(base,relative,hash);
 const neighborhood=mode==='neighborhood',file=neighborhood?'contours/neighborhood-manifest.json.gz':'contours/manifest.json.gz';
 const hash=neighborhood?(typeof __SKETCH_NEIGHBORHOOD_CONTOURS__!=='undefined'?__SKETCH_NEIGHBORHOOD_CONTOURS__:undefined):(typeof __SKETCH_CONTOUR_MANIFEST__!=='undefined'?__SKETCH_CONTOUR_MANIFEST__:undefined);
 const manifest=await(await unpack(file,hash)).json();
 if(manifest.schema!=='sketch.contours.v1'||manifest.threeRevision!==T.REVISION)throw Error('Contour cache requires the matching original Three.js algorithm');
 const chunks=new Map(),queue=[...manifest.chunks];let done=0,bytes=0;
 async function worker(){while(queue.length){const item=queue.shift(),buffer=await(await unpack(item.file,item.sha256)).arrayBuffer();if(buffer.byteLength!==item.inflatedBytes)throw Error('Contour cache length mismatch: '+item.file);chunks.set(item.file,buffer);bytes+=buffer.byteLength;progress(++done,manifest.chunks.length);}}
 await Promise.all(Array.from({length:compactDevice?1:4},worker));
 const entries=new Map();for(const [key,entry]of Object.entries(manifest.entries)){
  const buffer=chunks.get(entry.chunk);if(!buffer||entry.byteOffset%4||entry.length%6||entry.byteOffset+entry.length*4>buffer.byteLength)throw Error('Invalid contour entry: '+key);
  entries.set(key,new Float32Array(buffer,entry.byteOffset,entry.length));
 }
 const stats={hits:0,misses:0,entries:entries.size,bytes};active=entries;statistics=stats;
 return {manifest,stats,dispose(){if(active===entries)active=new Map();entries.clear();chunks.clear();}};
}

/** Falls back to the exact original algorithm for edited or uncached geometry. */
export function preparedEdges(geometry,angle=1){
 if(geometry.userData.galleryLeafSurface){
  // ContourStage builds its silhouette hull from the live leaf geometry.
  // Its separate (transparent) triangle-crease pass needs no segments.
  const edges=new T.EdgesGeometry(null,angle);
  edges.setAttribute('position',new T.Float32BufferAttribute([],3));
  return edges;
 }
 const sourceKey=geometry?.userData?.showcaseSourceKey;
 const positions=sourceKey&&active.get(contourKey(sourceKey,angle));
 if(!positions){statistics.misses++;return new T.EdgesGeometry(geometry,angle);}
 statistics.hits++;
 const edges=new T.EdgesGeometry(null,angle);edges.parameters.geometry=geometry;
 // Float32BufferAttribute copies the immutable cached array, matching the
 // original class and allowing consumers to modify or dispose it independently.
 edges.setAttribute('position',new T.Float32BufferAttribute(positions,3));return edges;
}
