/** Run with Node. Reads SketchGame; writes only the website's prepared cache. */
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {gzipSync,gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';

const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const game=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const out=path.join(site,'assets/models/sketch-runtime'),prepared=path.join(out,'prepared');
await fs.mkdir(prepared,{recursive:true});
const algorithmSources={};
for(const relative of ['src/rendering/asset/stroke-charts.ts','src/rendering/asset/revolution-chart.ts','src/rendering/asset/structure-field.ts'])algorithmSources[relative]=createHash('sha256').update(await fs.readFile(path.join(game,relative))).digest('hex');
async function repack(){
 const m=JSON.parse(await fs.readFile(path.join(prepared,'manifest.json'),'utf8'));
 if(m.storage==='split-immutable-transient'){console.log('Prepared geometry already repacked');return;}
 const next=structuredClone(m);next.chunks=[];next.storage='split-immutable-transient';
 const streams=Object.fromEntries(['stable','transient'].map(kind=>[kind,{kind,parts:[],bytes:0,index:0,total:0,gzip:0}]));
 const hash=bytes=>createHash('sha256').update(bytes).digest('hex'),expected=new Map();
 async function flush(s){if(!s.bytes)return;const bytes=Buffer.concat(s.parts),gzip=gzipSync(bytes,{level:9}),file='prepared/'+s.kind+'-'+String(s.index).padStart(3,'0')+'.bin.gz';
  if(!gunzipSync(gzip).equals(bytes))throw Error('Repacked gzip roundtrip failed');
  await fs.writeFile(path.join(out,file),gzip);next.chunks.push({file,bytes:gzip.length,inflatedBytes:bytes.length,transient:s.kind==='transient'});s.total+=bytes.length;s.gzip+=gzip.length;s.parts=[];s.bytes=0;s.index++;}
 async function append(kind,bytes){const s=streams[kind];if(s.bytes>24*1024*1024)await flush(s);const view={chunk:'prepared/'+kind+'-'+String(s.index).padStart(3,'0')+'.bin.gz',byteOffset:s.bytes,length:bytes.length/4};s.parts.push(Buffer.from(bytes));s.bytes+=bytes.length;return view;}
 for(const chunk of m.chunks){
  const bytes=gunzipSync(await fs.readFile(path.join(out,chunk.file)));
  for(const [key,entry]of Object.entries(m.entries).filter(([,e])=>e.chunk===chunk.file)){
   const updated=next.entries[key];delete updated.chunk;
   for(const [name,a]of Object.entries(entry.attributes)){const source=bytes.subarray(a.byteOffset,a.byteOffset+a.length*4);expected.set(key+':'+name,hash(source));updated.attributes[name]={...await append(name==='labStructureEdges'?'transient':'stable',source),itemSize:a.itemSize};}
   const f=entry.field,source=bytes.subarray(f.byteOffset,f.byteOffset+f.length*4);expected.set(key+':field',hash(source));updated.field=await append('transient',source);
  }
 }
 await flush(streams.stable);await flush(streams.transient);
 for(const chunk of next.chunks){const bytes=gunzipSync(await fs.readFile(path.join(out,chunk.file)));for(const [key,entry]of Object.entries(next.entries))for(const [name,a]of [...Object.entries(entry.attributes),['field',entry.field]])if(a.chunk===chunk.file&&hash(bytes.subarray(a.byteOffset,a.byteOffset+a.length*4))!==expected.get(key+':'+name))throw Error('Repack changed derived attribute '+key+':'+name);}
 const report={exactRepacked:true,immutableBytes:streams.stable.total,releasableBytes:streams.transient.total,gzipBytes:streams.stable.gzip+streams.transient.gzip,chunks:next.chunks.length};
 await fs.writeFile(path.join(prepared,'manifest.json'),JSON.stringify(next));await fs.writeFile(path.join(prepared,'manifest.json.gz'),gzipSync(Buffer.from(JSON.stringify(next)),{level:9}));await fs.writeFile(path.join(prepared,'repack-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 // Only obsolete generated mixed chunks, verified inside this exact directory.
 for(const chunk of m.chunks){const target=path.resolve(out,chunk.file);if(path.dirname(target)!==path.resolve(prepared)||!/^chunk-\d{3}\.bin\.gz$/.test(path.basename(target)))throw Error('Unexpected obsolete chunk path');await fs.unlink(target);}
}
if(process.argv.includes('--repack-only')){await repack();process.exit(0);}
const manifest=JSON.parse(await fs.readFile(path.join(out,'manifest.json'),'utf8'));
const req=createRequire(path.join(process.env.SKETCH_EXPORT_DEPS||path.join(os.tmpdir(),'sketch-showcase-export-deps'),'package.json'));
const Canvas=req('@napi-rs/canvas');
globalThis.self=globalThis;globalThis.window=globalThis;globalThis.devicePixelRatio=1;
globalThis.createImageBitmap=async blob=>Canvas.loadImage(Buffer.from(await blob.arrayBuffer()));
globalThis.document={createElement(tag){if(tag!=='canvas')throw Error('Unexpected offline DOM element '+tag);return Canvas.createCanvas(1,1);}};
globalThis.__staticManifest=manifest;
const nativeFetch=globalThis.fetch;
globalThis.fetch=async function(url,options){
 const text=String(url);let relative;
 if(text.startsWith('/api/lab/assembly-model?')){const key=new URLSearchParams(text.split('?')[1]).get('key');relative=Object.values(manifest.assemblies).find(a=>a.record.assemblyKey===key)?.model;}
 if(text.startsWith('https://sketch-export.invalid/file?'))relative=manifest.files[new URL(text).searchParams.get('path')];
 if(text.startsWith('https://sketch-export.invalid/cache/'))relative=new URL(text).pathname.slice('/cache/'.length);
 if(relative)return new Response(await fs.readFile(path.join(out,relative)));
 return nativeFetch(url,options);
};

// The source factory and geometry algorithms are bundled without editing them.
// Only the backend transport and top-level GeometryStage.create call are adapted.
const built=await build({stdin:{contents:`export {loadApartment} from '@sketch/apps/apartment/load-scene';export {GeometryStage} from '@sketch/rendering/asset/geometry';export {strokeCharts} from '@sketch/rendering/asset/stroke-charts';export {StructureField} from '@sketch/rendering/asset/structure-field';export {geometryFingerprint,loadPreparedDisplayCache} from ${JSON.stringify(path.join(site,'scripts/viewer/prepared-geometry-cache.js'))};`,resolveDir:site,sourcefile:'prepare-original-apartment.mjs'},bundle:true,write:false,platform:'node',format:'esm',target:'es2022',alias:{'@sketch':path.join(game,'src')},plugins:[{name:'offline-static-transport',setup(b){
 b.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:path.join(site,'node_modules/three',args.path==='three'?'build/three.module.js':args.path.replace(/^three\/(?:addons|examples\/jsm)\//,'examples/jsm/'))}));
 b.onResolve({filter:/platform[\\/]asset-client$/},()=>({path:'static-client',namespace:'offline'}));
 b.onLoad({filter:/.*/,namespace:'offline'},()=>({loader:'js',contents:`export const fileURL=path=>'https://sketch-export.invalid/file?path='+encodeURIComponent(path);export async function api(route,body){const m=globalThis.__staticManifest;if(route==='list')return{token:'static'};if(route==='preview-assembly')return structuredClone(m.assemblies[body.assembly.id].record);if(route.startsWith('spatial?')){const q=new URLSearchParams(route.slice(8));return structuredClone(m.spatial[q.get('id')+'@'+q.get('version')]);}throw Error(route);}`}));
 b.onLoad({filter:/rendering[\\/]asset[\\/]geometry\.ts$/},async args=>({loader:'ts',contents:"import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';\n"+(await fs.readFile(args.path,'utf8')).replace('const summary=readContract(bytes);','').replace('new GLTFLoader().parseAsync','new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync').replace('id:summary.id','id:root.userData.asset_id||root.name')}));
 b.onLoad({filter:/apps[\\/]apartment[\\/]load-scene\.ts$/},async args=>({loader:'ts',contents:(await fs.readFile(args.path,'utf8')).replace("GeometryStage.create(root,'apartment_scene',","globalThis.__exportPrepared(root,'apartment_scene',")}));
}}]});
const temp=path.join(os.tmpdir(),'sketch-offline-preparation-'+process.pid+'.mjs');await fs.writeFile(temp,built.outputFiles[0].contents);
const {loadApartment,GeometryStage,strokeCharts,StructureField,geometryFingerprint,loadPreparedDisplayCache}=await import(pathToFileURL(temp).href);
const result={schema:'sketch.prepared.geometry.v1',algorithmSources,entries:{},meshes:{},chunks:[]};
const timings=[];let chunks=[],chunkBytes=0,chunkIndex=0,totalBytes=0,totalGzip=0;
async function flush(){if(!chunkBytes)return;const data=Buffer.concat(chunks),gzip=gzipSync(data,{level:9}),file='prepared/chunk-'+String(chunkIndex).padStart(3,'0')+'.bin.gz';await fs.writeFile(path.join(out,file),gzip);result.chunks.push({file,bytes:gzip.length,inflatedBytes:data.length});totalBytes+=data.length;totalGzip+=gzip.length;chunks=[];chunkBytes=0;chunkIndex++;console.log('Wrote '+file+' '+(gzip.length/1e6).toFixed(2)+' MB gzip');}
function append(array){const bytes=Buffer.from(array.buffer,array.byteOffset,array.byteLength),view={byteOffset:chunkBytes,length:array.length};chunks.push(Buffer.from(bytes));chunkBytes+=bytes.length;return view;}
globalThis.__exportPrepared=async function(root,id,progress){
 if(process.argv.includes('--verify-only')){
  const start=performance.now(),cache=await loadPreparedDisplayCache('https://sketch-export.invalid/cache/'),loaded=performance.now();
  await cache.prepare(root);const hashed=performance.now(),stage=new GeometryStage(root,id,cache),finished=performance.now();
  if(cache.stats.misses)throw Error('Unexpected cache misses: '+cache.stats.misses);
  cache.dispose();
  const report={status:'pass',meshes:stage.meshes.size,parts:stage.parts.size,cache:cache.stats,cacheDisposed:true,cacheLoadMS:Math.round(loaded-start),fingerprintMS:Math.round(hashed-loaded),prepareMS:Math.round(finished-hashed),structureAtlas:[stage.structure.texture.image.width,stage.structure.texture.image.height],bounds:{min:stage.bounds.min.toArray(),max:stage.bounds.max.toArray()}};
  await fs.writeFile(path.join(prepared,'validation.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));return stage;
 }
 const items=[];for(const part of root.children)for(const node of part.children)items.push(node);
 console.log('Preparing original scene: '+items.length+' meshes');let count=0,distinct=0;const shared=new WeakMap(),start=performance.now();
 for(const node of items){
  const source=node.geometry;let key=shared.get(source);if(!key){key=await geometryFingerprint(source);shared.set(source,key);}
  result.meshes[node.userData.mesh_id]=key;
  if(!result.entries[key]){
   const t=performance.now(),display=strokeCharts(source),chartMS=performance.now()-t,fieldBuilder=new StructureField(),field=fieldBuilder.add(display),fieldMS=performance.now()-t-chartMS;
   if(chunkBytes>24*1024*1024)await flush();
   const attributes={};for(const name of ['labStrokeUV','labStrokeSeam','labStructureDistance','labStructureEdges']){const a=display.getAttribute(name);attributes[name]={...append(a.array),itemSize:a.itemSize};}
   const fieldView=append(field.data);
   result.entries[key]={chunk:'prepared/chunk-'+String(chunkIndex).padStart(3,'0')+'.bin.gz',attributes,field:fieldView,userData:display.userData,vertexCount:display.getAttribute('position').count};
   timings.push({mesh:node.userData.mesh_id,vertices:display.getAttribute('position').count,chartMS:Math.round(chartMS),fieldMS:Math.round(fieldMS)});distinct++;
   display.dispose();fieldBuilder.dispose();
   if(chartMS+fieldMS>2000)console.log('Heavy '+node.userData.mesh_id+' '+Math.round(chartMS+fieldMS)+' ms / '+timings.at(-1).vertices+' vertices');
  }
  if(++count%100===0)console.log(count+'/'+items.length+' meshes, '+distinct+' unique, '+((performance.now()-start)/1000).toFixed(1)+' seconds');
 }
 await flush();await fs.writeFile(path.join(prepared,'manifest.json'),JSON.stringify(result));await fs.writeFile(path.join(prepared,'manifest.json.gz'),gzipSync(Buffer.from(JSON.stringify(result)),{level:9}));
 const report={meshes:items.length,unique:distinct,sourceGeometryObjects:undefined,milliseconds:Math.round(performance.now()-start),bytes:totalBytes,gzipBytes:totalGzip,heavyMeshes:timings.sort((a,b)=>(b.chartMS+b.fieldMS)-(a.chartMS+a.fieldMS)).slice(0,40)};
 await fs.writeFile(path.join(prepared,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 return {root,meshes:new Map()};
};
await loadApartment(label=>console.log(label));
if(!process.argv.includes('--verify-only'))await repack();
await fs.unlink(temp);
