/**
 * Static transport snapshot for the ORIGINAL SketchGame apartment renderer.
 * This script reads the game checkout and writes only assets/models/sketch-runtime.
 * Run from SketchGame: node --import tsx <absolute path to this script>
 * Optional: SKETCH_GAME_ROOT, SKETCH_EXPORT_DEPS.
 * Geometry compression is byte-for-byte lossless, without glTF reserialization
 * through an authoring library, simplification, quantization, or hierarchy edits.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {createRequire} from 'node:module';
import {fileURLToPath,pathToFileURL} from 'node:url';

const gameRoot=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const siteRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(siteRoot,'assets/models/sketch-runtime');
const dependencyRoot=process.env.SKETCH_EXPORT_DEPS||path.join(os.tmpdir(),'sketch-showcase-export-deps');
const dependencyRequire=createRequire(path.join(dependencyRoot,'package.json'));
const moduleAt=relative=>import(pathToFileURL(path.join(gameRoot,relative)).href);
const {MeshoptEncoder,MeshoptDecoder}=await import(pathToFileURL(dependencyRequire.resolve('meshoptimizer')).href);
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
const {GLTFLoader}=await moduleAt('node_modules/three/examples/jsm/loaders/GLTFLoader.js');
const {MeshoptDecoder:RuntimeMeshoptDecoder}=await moduleAt('node_modules/three/examples/jsm/libs/meshopt_decoder.module.js');
const Canvas=dependencyRequire('@napi-rs/canvas');
globalThis.self=globalThis;
globalThis.createImageBitmap=async blob=>Canvas.loadImage(Buffer.from(await blob.arrayBuffer()));
const runtimeLoader=new GLTFLoader().setMeshoptDecoder(RuntimeMeshoptDecoder);
const {LabLibrary}=await moduleAt('server/lab/library.ts');
const {readSpatial}=await moduleAt('server/lab/spatial.ts');
const {spatialKey}=await moduleAt('src/assets/spatial/schema.ts');
const {kitchenAssets}=await moduleAt('src/apps/apartment/layout.ts');
const {bedroomAssembly}=await moduleAt('src/apps/apartment/bedroom-layout.ts');
const {STREET_PROP_SOURCES}=await moduleAt('src/assets/scenes/street-prop-layout.ts');
const library=new LabLibrary(gameRoot);
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const align4=n=>(n+3)&~3;
const reports=[];
const manifest={schema:'sketch.showcase.runtime.v1',assemblies:{},spatial:{},files:{},transport:{}};

function parseGLB(bytes){
  if(bytes.readUInt32LE(0)!==0x46546c67||bytes.readUInt32LE(4)!==2)throw Error('Expected glTF 2 GLB');
  let json,bin;
  for(let at=12;at<bytes.length;){const length=bytes.readUInt32LE(at),type=bytes.readUInt32LE(at+4),chunk=bytes.subarray(at+8,at+8+length);if(type===0x4e4f534a)json=JSON.parse(chunk.toString('utf8'));else if(type===0x004e4942)bin=chunk;at+=8+length;}
  if(!json||!bin||json.buffers.length!==1||json.buffers[0].uri)throw Error('Expected one embedded source buffer');
  return {json,bin};
}
function makeGLB(json,bin){
  const text=Buffer.from(JSON.stringify(json)),jsonLength=align4(text.length),binLength=align4(bin.length);
  const result=Buffer.alloc(12+8+jsonLength+8+binLength);
  result.writeUInt32LE(0x46546c67,0);result.writeUInt32LE(2,4);result.writeUInt32LE(result.length,8);
  result.writeUInt32LE(jsonLength,12);result.writeUInt32LE(0x4e4f534a,16);result.fill(32,20,20+jsonLength);text.copy(result,20);
  result.writeUInt32LE(binLength,20+jsonLength);result.writeUInt32LE(0x004e4942,24+jsonLength);bin.copy(result,28+jsonLength);
  return result;
}
const components={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4};
const dimensions={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16};
function compressExact(bytes){
  const {json,bin}=parseGLB(bytes),before=structuredClone(json),chunks=[];
  let storedLength=0,fallbackLength=0,compressedViews=0;
  const append=data=>{const offset=storedLength;chunks.push(Buffer.from(data));storedLength+=data.length;const padding=align4(storedLength)-storedLength;if(padding){chunks.push(Buffer.alloc(padding));storedLength+=padding;}return offset;};
  for(let index=0;index<(json.bufferViews?.length||0);index++){
    const view=json.bufferViews[index],source=bin.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength);
    const accessors=(json.accessors||[]).filter(a=>a.bufferView===index);
    const isIndex=view.target===34963;
    let stride=view.byteStride;
    if(!stride&&accessors.length===1)stride=components[accessors[0].componentType]*dimensions[accessors[0].type];
    const mode=isIndex?'INDICES':'ATTRIBUTES';
    const eligible=accessors.length>0&&stride&&source.length%stride===0&&(isIndex?[2,4].includes(stride):stride>=4&&stride<=256&&stride%4===0)&&!view.extensions;
    if(eligible){
      const count=source.length/stride,encoded=MeshoptEncoder.encodeGltfBuffer(source,count,stride,mode);
      const decoded=new Uint8Array(source.length);MeshoptDecoder.decodeGltfBuffer(decoded,count,stride,encoded,mode);
      if(!Buffer.from(decoded).equals(source))throw Error('Lossless verification failed for buffer view '+index);
      if(encoded.length<source.length){
        const byteOffset=append(encoded);
        view.buffer=1;view.byteOffset=fallbackLength;fallbackLength+=align4(source.length);
        view.extensions={EXT_meshopt_compression:{buffer:0,byteOffset,byteLength:encoded.length,byteStride:stride,count,mode}};
        compressedViews++;continue;
      }
    }
    view.buffer=0;view.byteOffset=append(source);
  }
  if(compressedViews){
    json.buffers=[{...json.buffers[0],byteLength:storedLength},{byteLength:fallbackLength,extensions:{EXT_meshopt_compression:{fallback:true}}}];
    json.extensionsUsed=[...new Set([...(json.extensionsUsed||[]),'EXT_meshopt_compression'])];
    json.extensionsRequired=[...new Set([...(json.extensionsRequired||[]),'EXT_meshopt_compression'])];
  }else return {bytes,compressedViews:0,json};
  // All accessor encodings, coordinates, nodes, names, materials, extras and
  // image references remain exactly as authored. Only byte storage changes.
  for(const key of ['accessors','nodes','meshes','materials','images','textures','samplers','skins','animations','scenes','scene'])if(JSON.stringify(before[key])!==JSON.stringify(json[key]))throw Error('Semantic metadata changed: '+key);
  return {bytes:makeGLB(json,Buffer.concat(chunks)),compressedViews,json};
}
async function writeModel(relative,source,{compress=true}={}){
  const result=compress?compressExact(source):{bytes:source,json:parseGLB(source).json,compressedViews:0};
  const target=path.join(out,relative);await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,result.bytes);
  const gzip=gzipSync(result.bytes,{level:9});await fs.writeFile(target+'.gz',gzip);
  manifest.transport[relative]={gzip:relative+'.gz',bytes:gzip.length};
  const gltf=await runtimeLoader.parseAsync(result.bytes.buffer.slice(result.bytes.byteOffset,result.bytes.byteOffset+result.bytes.byteLength),'');
  let parsedMeshes=0;gltf.scene.traverse(n=>{if(n.isMesh)parsedMeshes++;});
  const json=result.json;
  const report={file:relative,sourceBytes:source.length,bytes:result.bytes.length,gzipBytes:gzip.length,sha256:hash(result.bytes),sourceSha256:hash(source),lossless:true,compressedViews:result.compressedViews,validation:{originalRuntimeGLTFLoader:'pass',decodedTextures:true,parsedMeshes,animations:gltf.animations.length},nodes:json.nodes?.length||0,meshes:json.meshes?.length||0,materials:json.materials?.length||0,triangles:(json.meshes||[]).flatMap(m=>m.primitives).reduce((n,p)=>n+((p.mode??4)===4?(p.indices!==undefined?json.accessors[p.indices].count:json.accessors[p.attributes.POSITION].count)/3:0),0)};
  reports.push(report);console.log(relative+': '+(source.length/1e6).toFixed(2)+' → '+(result.bytes.length/1e6).toFixed(2)+' MB, verified lossless');return report;
}
async function checkpoint(){await fs.mkdir(out,{recursive:true});await fs.writeFile(path.join(out,'manifest.json'),JSON.stringify(manifest));}
const kitchenAssembly={schema:'chef.assembly.v1',id:'apartment_kitchen',children:kitchenAssets.map(a=>({id:a.id,name:a.id,asset:a.asset,version:a.version,placement:{type:'model'}}))};
for(const [short,assembly]of [['kitchen',kitchenAssembly],['bedroom',bedroomAssembly]]){
  console.log('Compiling original assembly '+assembly.id);
  const record=await library.preview({assembly});
  const model='assemblies/'+short+'.glb';
  await writeModel(model,library.resolvedModel(record.assemblyKey));
  manifest.assemblies[assembly.id]={record,model};await checkpoint();
}
for(const asset of kitchenAssets){const result=await readSpatial(library,asset.asset,asset.version);if(result.status!=='ready')throw Error('Missing spatial descriptor '+asset.asset+': '+result.reason);manifest.spatial[spatialKey(asset.asset,asset.version)]=result;}
await checkpoint();
for(const ref of Object.values(STREET_PROP_SOURCES)){
  const original=ref.id+'/versions/'+ref.version+'/model.glb';if(manifest.files[original])continue;
  const relative='files/'+original;await writeModel(relative,await fs.readFile(await library.file(original)));manifest.files[original]=relative;await checkpoint();
}
for(const kind of ['male','female']){
  const original='characters/residents/v0001/'+kind+'.glb',relative='files/'+original;
  // Resident's original independent GLTFLoader needs no decoder modification.
  await writeModel(relative,await fs.readFile(path.join(gameRoot,'assets',original)),{compress:false});manifest.files[original]=relative;
}
await checkpoint();
await fs.writeFile(path.join(out,'manifest.json.gz'),gzipSync(await fs.readFile(path.join(out,'manifest.json')),{level:9}));
const resources=Object.entries(manifest.assemblies).flatMap(([assembly,{record}])=>Object.entries(record.resources||{}).map(([id,r])=>({assembly,id,name:r.name,source:r.source,mime:r.data?.match(/^data:([^;]+)/)?.[1],bytes:r.data?.length||0})));
const report={schema:'sketch.showcase.runtime.report.v1',generatedAt:new Date().toISOString(),source:'SketchGame original pinned assets and LabLibrary preview assembly output',compression:'EXT_meshopt_compression with unfiltered ATTRIBUTES and exact INDICES sequence coding; every compressed buffer view decoded and byte-compared before writing; no transforms or quantization',totalSourceBytes:reports.reduce((s,r)=>s+r.sourceBytes,0),totalBytes:reports.reduce((s,r)=>s+r.bytes,0),totalGzipBytes:reports.reduce((s,r)=>s+r.gzipBytes,0),manifestBytes:(await fs.stat(path.join(out,'manifest.json'))).size,manifestGzipBytes:(await fs.stat(path.join(out,'manifest.json.gz'))).size,models:reports,resources,visibleTextAudit:{action:'Preserve original maps and pigments. Translate DOM/inspection labels in adapter only.',findings:['Source assembly child display names contain Chinese metadata; never expose those directly in English showcase UI.','Original apartment procedural factories contain no canvas/text geometry signage rendering. Street signage uses authored motifs.','Workstation resources include English keyboard legends and wood/cloth surfaces; no Chinese computer-screen image was found.']}};
await fs.writeFile(path.join(out,'export-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({models:reports.length,bytes:report.totalBytes,manifestBytes:report.manifestBytes,resources:resources.length}));
