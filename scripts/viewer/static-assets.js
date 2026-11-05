import {loadPreparedDisplayCache} from './prepared-geometry-cache.js';
import {unpackAsset} from './asset-transfer.mjs';
import {loadContourCache} from './contour-cache.mjs';
const base=new URL('../models/sketch-runtime/',import.meta.url),version=new URL(import.meta.url).search;
let manifest,pending,preparedDisplayCache;
const urls=new Map();
const resolved=relative=>{const url=new URL(relative,base);url.search=version;return url.href;};
async function unpack(relative){
 const hash=relative==='manifest.json.gz'?__SKETCH_ASSET_MANIFEST__:Object.values(manifest.transport).find(e=>e.gzip===relative)?.sha256;
 return unpackAsset(base,relative,hash);
}
export function prepareAssets(progress=()=>{}){
 return pending??=(async()=>{
  manifest=await(await unpack('manifest.json.gz')).json();
  const cacheBase=new URL(base);cacheBase.search=version;
  const cachePromise=Promise.all([loadPreparedDisplayCache(cacheBase).then(cache=>{preparedDisplayCache=cache;}),loadContourCache(cacheBase)]);
  const queue=Object.entries(manifest.transport);let done=0;
  async function worker(){while(queue.length){const [file,entry]=queue.shift();const response=await unpack(entry.gzip);urls.set(file,URL.createObjectURL(await response.blob()));progress(++done,Object.keys(manifest.transport).length);}}
  await Promise.all([...Array.from({length:4},worker),cachePromise]);return manifest;
 })().catch(error=>{pending=undefined;throw error;});
}
export async function api(route,body){
 const data=await prepareAssets();
 if(route==='list')return{token:'static-showcase'};
 if(route.startsWith('spatial?')){const p=new URLSearchParams(route.slice(8));const value=data.spatial[`${p.get('id')}@${p.get('version')}`];if(!value)throw Error('Unknown spatial asset');return structuredClone(value);}
 if(route==='preview-assembly'){const value=data.assemblies[body.assembly.id];if(!value)throw Error('Unknown assembly');return structuredClone(value.record);}
 throw Error('Unsupported static asset request');
}
export function assemblyURL(key){const entry=Object.values(manifest.assemblies).find(value=>value.record.assemblyKey===key);if(!entry)throw Error('Unknown assembly key');return urls.get(entry.model)||resolved(entry.model);}
export function fileURL(file){const relative=manifest?.files[file];if(!relative)throw Error('Unknown asset: '+file);return urls.get(relative)||resolved(relative);}
export async function assemblyData(id){await prepareAssets();const entry=manifest.assemblies[id];return{record:entry.record,bytes:await(await fetch(assemblyURL(entry.record.assemblyKey))).arrayBuffer()};}
export function getPreparedDisplayCache(){return preparedDisplayCache;}
