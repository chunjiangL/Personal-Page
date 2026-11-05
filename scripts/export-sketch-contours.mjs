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
