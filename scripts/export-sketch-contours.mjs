/** Exact offline EdgesGeometry transport; original SketchGame stays read-only. */
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {gzipSync,gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {adaptVehicleFleetSource} from './viewer/vehicle-fleet.mjs';

const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),game=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const out=path.join(site,'assets/models/sketch-runtime'),folder=path.join(out,'contours');await fs.mkdir(folder,{recursive:true});
const hash=bytes=>createHash('sha256').update(bytes).digest('hex'),algorithmSources={},runtimeSources={};
// Repartition the already verified exact arrays without recomputing geometry.
if(process.argv.includes('--split-neighborhood')){await splitNeighborhoodContours();process.exit(0);}
for(const relative of ['src/rendering/asset/contours.ts','src/rendering/asset/appearance.ts','src/rendering/asset/settings.ts'])algorithmSources[relative]=hash(await fs.readFile(path.join(game,relative)));
for(const relative of ['node_modules/three/src/geometries/EdgesGeometry.js','node_modules/three/src/math/Triangle.js','node_modules/three/src/math/Vector3.js','node_modules/three/src/math/MathUtils.js','node_modules/three/src/core/BufferAttribute.js']){
 const bytes=await fs.readFile(path.join(site,relative));runtimeSources[relative]=hash(bytes);
 if(hash(await fs.readFile(path.join(game,relative)))!==runtimeSources[relative])throw Error('Showcase Three differs from original game: '+relative);
}
runtimeSources['scripts/viewer/vehicle-fleet.mjs']=hash(await fs.readFile(path.join(site,'scripts/viewer/vehicle-fleet.mjs')));
const manifest=JSON.parse(await fs.readFile(path.join(out,'manifest.json'),'utf8'));
const req=createRequire(path.join(process.env.SKETCH_EXPORT_DEPS||path.join(os.tmpdir(),'sketch-showcase-export-deps'),'package.json')),Canvas=req('@napi-rs/canvas');
globalThis.self=globalThis;globalThis.window=globalThis;globalThis.devicePixelRatio=1;
globalThis.createImageBitmap=async blob=>Canvas.loadImage(Buffer.from(await blob.arrayBuffer()));
globalThis.document={createElement(tag){if(tag!=='canvas')throw Error('Unexpected offline DOM element '+tag);return Canvas.createCanvas(1,1);}};
globalThis.__staticManifest=manifest;
const nativeFetch=globalThis.fetch;
globalThis.fetch=async function(url,options){const text=String(url);let relative;
 if(text.startsWith('/api/lab/assembly-model?')){const key=new URLSearchParams(text.split('?')[1]).get('key');relative=Object.values(manifest.assemblies).find(a=>a.record.assemblyKey===key)?.model;}
 if(text.startsWith('https://sketch-export.invalid/file?'))relative=manifest.files[new URL(text).searchParams.get('path')];
 if(text.startsWith('https://sketch-export.invalid/cache/'))relative=new URL(text).pathname.slice('/cache/'.length);
 if(relative)return new Response(await fs.readFile(path.join(out,relative)));return nativeFetch(url,options);
};
globalThis.__captureContourRoot=async root=>({root,meshes:new Map()});

const built=await build({stdin:{contents:`export * as T from 'three';export {loadApartment} from '@sketch/apps/apartment/load-scene';export {resolveAppearance} from '@sketch/rendering/asset/appearance';export {geometryFingerprint} from ${JSON.stringify(path.join(site,'scripts/viewer/prepared-geometry-cache.js'))};export {contourKey,loadContourCache,preparedEdges,contourCacheStats} from ${JSON.stringify(path.join(site,'scripts/viewer/contour-cache.mjs'))};`,resolveDir:site,sourcefile:'export-original-contours.mjs'},bundle:true,write:false,platform:'node',format:'esm',target:'es2022',alias:{'@sketch':path.join(game,'src')},plugins:[{name:'offline-static-transport',setup(b){
 b.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:path.join(site,'node_modules/three',args.path==='three'?'build/three.module.js':args.path.replace(/^three\/(?:addons|examples\/jsm)\//,'examples/jsm/'))}));
 b.onResolve({filter:/platform[\\/]asset-client$/},()=>({path:'static-client',namespace:'offline'}));
 b.onLoad({filter:/.*/,namespace:'offline'},()=>({loader:'js',contents:`export const fileURL=path=>'https://sketch-export.invalid/file?path='+encodeURIComponent(path);export async function api(route,body){const m=globalThis.__staticManifest;if(route==='list')return{token:'static'};if(route==='preview-assembly')return structuredClone(m.assemblies[body.assembly.id].record);if(route.startsWith('spatial?')){const q=new URLSearchParams(route.slice(8));return structuredClone(m.spatial[q.get('id')+'@'+q.get('version')]);}throw Error(route);}`}));
 b.onLoad({filter:/rendering[\\/]asset[\\/]geometry\.ts$/},async args=>({loader:'ts',contents:"import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';\n"+(await fs.readFile(args.path,'utf8')).replace('const summary=readContract(bytes);','').replace('new GLTFLoader().parseAsync','new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync').replace('id:summary.id','id:root.userData.asset_id||root.name')}));
 b.onLoad({filter:/apps[\\/]apartment[\\/]load-scene\.ts$/},async args=>({loader:'ts',contents:(await fs.readFile(args.path,'utf8')).replace("GeometryStage.create(root,'apartment_scene',","globalThis.__captureContourRoot(root,'apartment_scene',")}));
 b.onLoad({filter:/assets[\\/]scenes[\\/]apartment-street-life\.ts$/},async args=>({loader:'ts',contents:adaptVehicleFleetSource(await fs.readFile(args.path,'utf8'))}));
}}]});
const temp=path.join(os.tmpdir(),'sketch-contour-export-'+process.pid+'.mjs');await fs.writeFile(temp,built.outputFiles[0].contents);
const {T,loadApartment,resolveAppearance,geometryFingerprint,contourKey,loadContourCache,preparedEdges,contourCacheStats}=await import(pathToFileURL(temp).href);
const started=performance.now(),loaded=await loadApartment(label=>console.log(label)),root=loaded.geometry.root;
const sceneBuildMS=Math.round(performance.now()-started),result={schema:'sketch.contours.v1',threeRevision:T.REVISION,algorithmSources,runtimeSources,entries:{},meshes:{},chunks:[]};
const sourceKeys=new WeakMap(),cachePositions=new Map(),nodeRecords=[],angleCounts={},timings=[];
let chunkParts=[],chunkBytes=0,chunkIndex=0,edgesMS=0,expandedVerificationMS=0,partitionMS=0,fastPartitionMS=0,partitionFreeMeshes=0,segments=0;
async function flush(){if(!chunkParts.length)return;const bytes=Buffer.concat(chunkParts),compressed=gzipSync(bytes,{level:9}),file='contours/chunk-'+String(chunkIndex).padStart(3,'0')+'.bin.gz';if(!gunzipSync(compressed).equals(bytes))throw Error('Contour gzip altered bytes');await fs.writeFile(path.join(out,file),compressed);result.chunks.push({file,bytes:compressed.length,inflatedBytes:bytes.length,sha256:hash(compressed)});chunkIndex++;chunkParts=[];chunkBytes=0;}
function bytes(array){return Buffer.from(array.buffer,array.byteOffset,array.byteLength);}
let count=0;const computeStarted=performance.now();
for(const part of root.children)for(const node of part.children){
 const geometry=node.geometry,id=node.userData.mesh_id,material=Array.isArray(node.material)?node.material[0]:node.material;
 const style=resolveAppearance(loaded.settings,id,0,material.name,loaded.inherited[material.name],loaded.appearance[id]?.['0']),angle=style.sketch.edgeAngle;
 let sourceKey=sourceKeys.get(geometry);if(!sourceKey){sourceKey=await geometryFingerprint(geometry);sourceKeys.set(geometry,sourceKey);}
 const key=contourKey(sourceKey,angle);result.meshes[id]=key;angleCounts[angle]=(angleCounts[angle]||0)+1;nodeRecords.push({geometry,sourceKey,angle,key,id});
 if(!result.entries[key]){
  const start=performance.now(),original=new T.EdgesGeometry(geometry,angle),elapsed=performance.now()-start;edgesMS+=elapsed;
  const verifyStarted=performance.now(),expanded=geometry.index?geometry.toNonIndexed():geometry.clone(),verified=new T.EdgesGeometry(expanded,angle);
  const positions=original.getAttribute('position').array,expandedPositions=verified.getAttribute('position').array;
  if(!bytes(positions).equals(bytes(expandedPositions)))throw Error('Indexed/expanded edge order mismatch: '+id);expandedVerificationMS+=performance.now()-verifyStarted;
  if(chunkBytes>12*1024*1024)await flush();const data=bytes(positions);result.entries[key]={chunk:'contours/chunk-'+String(chunkIndex).padStart(3,'0')+'.bin.gz',byteOffset:chunkBytes,length:positions.length,sourceKey,angle};chunkParts.push(Buffer.from(data));chunkBytes+=data.length;cachePositions.set(key,positions);segments+=positions.length/6;
  timings.push({id,vertices:geometry.attributes.position.count,segments:positions.length/6,milliseconds:Math.round(elapsed)});original.dispose();verified.dispose();expanded.dispose();
 }
 // Measure the existing string-key partition separately; this preserves the
 // original rule for marked edges and verifies the empty-overrides fast path.
 if(!node.isInstancedMesh){const positions=cachePositions.get(key),start=performance.now(),regular=[],important=[];
  for(let i=0;i<positions.length;i+=6){const a=[positions[i],positions[i+1],positions[i+2]],b=[positions[i+3],positions[i+4],positions[i+5]],edgeKey=[a.map(v=>v.toFixed(6)).join(','),b.map(v=>v.toFixed(6)).join(',')].sort().join(',');if(style.edges.hidden.includes(edgeKey))continue;(style.edges.important.includes(edgeKey)?important:regular).push(...a,...b);}
  partitionMS+=performance.now()-start;
  if(!style.edges.hidden.length&&!style.edges.important.length){const fastStarted=performance.now(),fast=Array.from(positions);fastPartitionMS+=performance.now()-fastStarted;if(!bytes(new Float32Array(regular)).equals(bytes(new Float32Array(fast))))throw Error('Empty edge-style partition differs');partitionFreeMeshes++;}
 }
 if(++count%200===0)console.log(count+' contour meshes, '+Object.keys(result.entries).length+' unique, '+((performance.now()-computeStarted)/1000).toFixed(1)+' seconds');
}
await flush();const manifestBytes=Buffer.from(JSON.stringify(result));await fs.writeFile(path.join(folder,'manifest.json'),manifestBytes);await fs.writeFile(path.join(folder,'manifest.json.gz'),gzipSync(manifestBytes,{level:9}));
const cacheStarted=performance.now(),cached=await loadContourCache('https://sketch-export.invalid/cache/'),cacheLoadMS=Math.round(performance.now()-cacheStarted);let restoreMS=0;
for(const record of nodeRecords){record.geometry.userData.showcaseSourceKey=record.sourceKey;const start=performance.now(),edges=preparedEdges(record.geometry,record.angle);restoreMS+=performance.now()-start;if(!bytes(edges.getAttribute('position').array).equals(bytes(cachePositions.get(record.key))))throw Error('Restored runtime edge bytes differ: '+record.id);edges.dispose();}
const report={status:'pass',sceneBuildMS,meshes:count,uniqueEntries:Object.keys(result.entries).length,angleCounts,segments,bytes:result.chunks.reduce((n,c)=>n+c.inflatedBytes,0),gzipBytes:result.chunks.reduce((n,c)=>n+c.bytes,0),edgesMS:Math.round(edgesMS),expandedVerificationMS:Math.round(expandedVerificationMS),partitionMS:Math.round(partitionMS),emptyOverrideMeshes:partitionFreeMeshes,fastPartitionMS:Math.round(fastPartitionMS),cacheLoadMS,restoreMS:Math.round(restoreMS),cache:contourCacheStats(),heavyMeshes:timings.sort((a,b)=>b.milliseconds-a.milliseconds).slice(0,15)};
await fs.writeFile(path.join(folder,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));cached.dispose();await fs.unlink(temp);
await splitNeighborhoodContours();

async function splitNeighborhoodContours(){
 const keyFile=path.join(site,'scripts/data/neighborhood-source-keys.json'),keyBytes=await fs.readFile(keyFile),keys=JSON.parse(keyBytes),source=JSON.parse(await fs.readFile(path.join(folder,'manifest.json'),'utf8'));
 if(keys.schema!=='sketch.neighborhood.source-keys.v1'||keys.verification?.status!=='pass')throw Error('A verified neighborhood source key map is required');
 if(source.schema!=='sketch.contours.v1')throw Error('Unexpected original contour manifest schema');
 const exteriorKeys=new Set(Object.values(keys.meshes)),chunks=new Map();
 for(const item of source.chunks){const compressed=await fs.readFile(path.join(out,item.file));if(hash(compressed)!==item.sha256)throw Error('Original contour chunk checksum mismatch: '+item.file);const raw=gunzipSync(compressed);if(raw.length!==item.inflatedBytes)throw Error('Original contour chunk length mismatch: '+item.file);chunks.set(item.file,raw);}
 for(const [id,key]of Object.entries(keys.meshes)){const entry=source.entries[source.meshes[id]];if(!entry||entry.sourceKey!==key)throw Error('Neighborhood mesh does not match full contour cache: '+id);}
 const entries={},generated=[],groups={neighborhood:[],home:[]};
 for(const [key,entry]of Object.entries(source.entries))groups[exteriorKeys.has(entry.sourceKey)?'neighborhood':'home'].push([key,entry]);
 for(const [group,rows]of Object.entries(groups)){
  let parts=[],pending=[],length=0,index=0;
  async function flush(){if(!pending.length)return;const raw=Buffer.concat(parts),compressed=gzipSync(raw,{level:9}),sha256=hash(compressed),file=`contours/${group}-${String(index++).padStart(3,'0')}-${sha256.slice(0,12)}.bin.gz`;if(!gunzipSync(compressed).equals(raw))throw Error('Contour repartition changed bytes');await fs.writeFile(path.join(out,file),compressed);for(const [key,entry]of pending)entries[key]={...entry,chunk:file};generated.push({file,bytes:compressed.length,inflatedBytes:raw.length,sha256});parts=[];pending=[];length=0;}
  for(const [key,entry]of rows){const original=chunks.get(entry.chunk);if(!original||entry.byteOffset%4||entry.length%6||entry.byteOffset+entry.length*4>original.length)throw Error('Invalid original contour entry: '+key);const raw=original.subarray(entry.byteOffset,entry.byteOffset+entry.length*4);if(length&&length+raw.length>12*1024*1024)await flush();pending.push([key,{...entry,byteOffset:length}]);parts.push(raw);length+=raw.length;}
  await flush();
 }
 // Independently read every new stream and compare every float byte in order.
 const restored=new Map();for(const item of generated)restored.set(item.file,gunzipSync(await fs.readFile(path.join(out,item.file))));
 for(const [key,entry]of Object.entries(entries)){const old=source.entries[key],before=chunks.get(old.chunk).subarray(old.byteOffset,old.byteOffset+old.length*4),after=restored.get(entry.chunk).subarray(entry.byteOffset,entry.byteOffset+entry.length*4);if(!before.equals(after))throw Error('Partitioned contour bytes differ: '+key);}
 const partition={schema:'sketch.contours.partition.v1',sourceKeyManifest:'scripts/data/neighborhood-source-keys.json',sourceKeyManifestSHA256:hash(keyBytes)},full={...source,entries,chunks:generated,partition:{...partition,mode:'full'}};
 const neighborhoodEntries=Object.fromEntries(Object.entries(entries).filter(([,entry])=>exteriorKeys.has(entry.sourceKey))),neighborhoodFiles=new Set(Object.values(neighborhoodEntries).map(entry=>entry.chunk));
 const neighborhood={...source,entries:neighborhoodEntries,meshes:Object.fromEntries(Object.keys(keys.meshes).map(id=>[id,source.meshes[id]])),chunks:generated.filter(item=>neighborhoodFiles.has(item.file)),partition:{...partition,mode:'neighborhood'}};
 for(const [name,manifest]of [['manifest',full],['full-manifest',full],['neighborhood-manifest',neighborhood]]){const json=Buffer.from(JSON.stringify(manifest));await fs.writeFile(path.join(folder,name+'.json'),json);await fs.writeFile(path.join(folder,name+'.json.gz'),gzipSync(json,{level:9}));}
 const retained=new Set(generated.map(item=>path.basename(item.file)));
 for(const name of await fs.readdir(folder))if(/^(?:chunk-\d+|(?:neighborhood|home)-\d+(?:-[a-f0-9]{12})?)\.bin\.gz$/.test(name)&&!retained.has(name))await fs.unlink(path.join(folder,name));
 const summary={status:'pass',entries:Object.keys(entries).length,neighborhoodEntries:Object.keys(neighborhoodEntries).length,neighborhoodMeshes:Object.keys(neighborhood.meshes).length,neighborhoodGzipBytes:neighborhood.chunks.reduce((n,c)=>n+c.bytes,0),homeGzipBytes:generated.filter(item=>!neighborhoodFiles.has(item.file)).reduce((n,c)=>n+c.bytes,0),fullGzipBytes:generated.reduce((n,c)=>n+c.bytes,0),exactBytesVerified:generated.reduce((n,c)=>n+c.inflatedBytes,0)};
 await fs.writeFile(path.join(folder,'partition-report.json'),JSON.stringify(summary,null,2));console.log(JSON.stringify(summary));
}
