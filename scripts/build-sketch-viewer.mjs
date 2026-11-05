import {build} from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {adaptVehicleFleetSource} from './viewer/vehicle-fleet.mjs';
const root=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const adapter=path.resolve('scripts/viewer/static-assets.js');
const prepared=JSON.parse(await fs.readFile('assets/models/sketch-runtime/prepared-compact/manifest.json','utf8'));
for(const [file,expected]of Object.entries(prepared.algorithmSources)){
 const actual=createHash('sha256').update(await fs.readFile(path.join(root,file))).digest('hex');
 if(actual!==expected)throw Error('Original geometry algorithm changed. Regenerate the prepared cache: '+file);
}
const contours=JSON.parse(await fs.readFile('assets/models/sketch-runtime/contours/manifest.json','utf8'));
for(const [base,sources]of [[root,contours.algorithmSources],[process.cwd(),contours.runtimeSources]])for(const [file,expected]of Object.entries(sources)){
 if(createHash('sha256').update(await fs.readFile(path.join(base,file))).digest('hex')!==expected)throw Error('Original contour algorithm changed. Regenerate contour cache: '+file);
}
const payloadHash=async file=>JSON.stringify(createHash('sha256').update(await fs.readFile('assets/models/sketch-runtime/'+file)).digest('hex'));
const result=await build({
 define:{__SKETCH_ASSET_MANIFEST__:await payloadHash('manifest.json.gz'),__SKETCH_PREPARED_MANIFEST__:await payloadHash('prepared-compact/manifest.json.gz'),__SKETCH_CONTOUR_MANIFEST__:await payloadHash('contours/manifest.json.gz')},
 entryPoints:['scripts/viewer/sketch-viewer.js'],outfile:'assets/js/sketch-viewer.bundle.js',bundle:true,format:'esm',target:['es2022'],minify:true,legalComments:'eof',logLevel:'info',metafile:true,
 alias:{'@sketch':path.join(root,'src'),'@showcase-static':adapter},
 plugins:[{name:'static-original-runtime',setup(b){
  b.onLoad({filter:/assets[\\/]scenes[\\/]apartment-street-life\.ts$/},async args=>({contents:adaptVehicleFleetSource(await fs.readFile(args.path,'utf8')),loader:'ts'}));
  b.onLoad({filter:/rendering[\\/]asset[\\/]contours\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),needle='new T.EdgesGeometry(r.node.geometry,s.sketch.edgeAngle)';
   if(source.split(needle).length!==2)throw Error('Original contour construction changed');
   const arrays="const points=edges.getAttribute('position'),regular:number[]=[],important:number[]=[];",partition='for(let i=0;i<points.count;i+=2){';
   if(source.split(arrays).length!==2||source.split(partition).length!==2)throw Error('Original contour partition changed');
   const contents=source.replace(needle,'preparedEdges(r.node.geometry,s.sketch.edgeAngle)')
    .replace(arrays,"const points=edges.getAttribute('position'),unmarked=!this.edgeStyle.hidden.length&&!this.edgeStyle.important.length,regular:number[]=unmarked?Array.from((points as T.BufferAttribute).array):[],important:number[]=[];")
    .replace(partition,'if(!unmarked)'+partition);
   return {contents:"import {preparedEdges} from "+JSON.stringify(path.resolve('scripts/viewer/contour-cache.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onResolve({filter:/\?raw$/},args=>({path:path.resolve(args.resolveDir,args.path.slice(0,-4)),namespace:'raw-source'}));
  b.onLoad({filter:/.*/,namespace:'raw-source'},async args=>({contents:await fs.readFile(args.path,'utf8'),loader:'text'}));
  b.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:path.resolve('node_modules/three',args.path==='three'?'build/three.module.js':args.path.replace(/^three\/(?:addons|examples\/jsm)\//,'examples/jsm/'))}));
  b.onResolve({filter:/platform[\\/]asset-client$/},()=>({path:adapter}));
  b.onLoad({filter:/apps[\\/]apartment[\\/]load-scene\.ts$/},async args=>{
   let contents=await fs.readFile(args.path,'utf8'),count=0;
   contents=contents.replace(/fetch\('\/api\/lab\/assembly-model\?'\+new URLSearchParams\(\{key:(record|bedroom)\.assemblyKey\}\)\)/g,(_,name)=>{count++;return `fetch(assemblyURL(${name}.assemblyKey))`;});
   if(count!==2)throw Error('Original assembly transport changed: '+count);
   return{contents:"import {assemblyURL} from '@showcase-static';\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]geometry\.ts$/},async args=>{
   let contents=await fs.readFile(args.path,'utf8');
   contents=contents.replace('const summary=readContract(bytes);','').replace('new GLTFLoader().parseAsync','new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync').replace('id:summary.id','id:root.userData.asset_id||root.name');
   contents=contents.replace("const stage=new GeometryStage(root,id,undefined,true),total=","const displayCache=id==='apartment_scene'?getPreparedDisplayCache():undefined;if(displayCache)await displayCache.prepare(root);const stage=new GeometryStage(root,id,undefined,true),total=").replace('for(const _ of stage.prepare())','for(const _ of stage.prepare(displayCache))').replace('channel.port2.close();','channel.port2.close();displayCache?.dispose();');
   return{contents:"import {getPreparedDisplayCache} from '@showcase-static';\nimport {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]resident\.ts$/},async args=>{
   let contents=await fs.readFile(args.path,'utf8');
   contents=contents.replace(/new URL\('\.\.\/\.\.\/\.\.\/assets\/characters\/residents\/v0001\/(male|female)\.glb',import\.meta\.url\)\.href/g,(_,kind)=>JSON.stringify('characters/residents/v0001/'+kind+'.glb')).replace('loader.loadAsync(sources[kind])','loader.loadAsync(fileURL(sources[kind]))');
   return{contents:"import {fileURL} from '@showcase-static';\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]stage\.ts$/},async args=>({contents:(await fs.readFile(args.path,'utf8')).replace('this.freeCamera.update(dt);','this.onBeforeFrame?.(dt);this.freeCamera.update(dt);')
   .replace('this.core=new AssetRenderCore','progress("render-core construction");this.core=new AssetRenderCore')
   .replace('this.core.apply(loaded.settings);await this.core.surface.prepare(loaded.settings);','progress("initial material styling");this.core.apply(loaded.settings);progress("surface textures");await this.core.surface.prepare(loaded.settings);progress("final material styling");')
   .replace('this.atmosphere=new ApartmentAtmosphere','progress("atmosphere setup");this.atmosphere=new ApartmentAtmosphere'),loader:'ts'}));
 }}]
});
await fs.mkdir('artifacts',{recursive:true});
await fs.writeFile('artifacts/original-runtime-bundle.json',JSON.stringify(result.metafile));
