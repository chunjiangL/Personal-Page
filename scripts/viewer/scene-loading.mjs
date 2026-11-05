/** Build-only, read-only adaptation of SketchGame's original scene loader. */
export function adaptSceneLoaderSource(source){
 const signature='export async function loadApartment(progress:(label:string)=>void){';
 const cityStart='  const building=createApartmentStreetScene();';
 const returnStart='  return {geometry,settings,building,streetProps,homeBounds,homePartIds,inherited:';
 if(source.split(signature).length!==2||source.split(cityStart).length!==2||source.split(returnStart).length!==2)throw Error('Original apartment loader structure changed');
 const begin=source.indexOf(cityStart),end=source.indexOf(returnStart,begin);
 if(end<=begin)throw Error('Original apartment shared tail changed');
 // Copy the exact authored factory/settings/material/geometry/shadow tail.
 // Full mode retains its entire original body unchanged after the early branch.
 const shared=source.slice(begin,end);
 const neighborhood=`\nasync function loadShowcaseNeighborhood(progress:(label:string)=>void){
  const root=new T.Group();root.name='asset_showcase_neighborhood';root.userData={asset_role:'asset',asset_id:'apartment_scene'};
  const homePartIds:string[]=[],homeBounds=new T.Box3();
  const record={resources:{}},bedroom={resources:{}};
${shared}  return {geometry,settings,building,streetProps,homeBounds,homePartIds,
    inherited:{},appearance:{},doorPartId:undefined,standingObstacles:[],
    placementReport:{status:'not-loaded',checks:[],solution:{parts:{}}},accessReport:[],connectionReport:[],
    bedroomReport:{status:'not-loaded',checks:[],scope:'Loaded on Bedroom selection.'},
    residenceSummary:{bedrooms:1,bathrooms:1,occupants:1,fixtureCount:0,bedroomAssets:[],loaded:false}};
}\n`;
 return "import {getSceneLoadMode} from '@showcase-static';\n"+source.replace(signature,signature+"\n  if(getSceneLoadMode()==='neighborhood')return loadShowcaseNeighborhood(progress);")+neighborhood;
}

/** Node audit/export helper. Does not run GeometryStage's expensive preparation. */
export async function createSceneAuditLoader(options={}){
 const fs=await import('node:fs/promises'),path=await import('node:path'),os=await import('node:os'),{fileURLToPath,pathToFileURL}=await import('node:url'),{createRequire}=await import('node:module'),{build}=await import('esbuild');
 const site=options.siteRoot||fileURLToPath(new URL('../../',import.meta.url)),game=options.gameRoot||process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame',assets=path.join(site,'assets/models/sketch-runtime');
 const manifest=JSON.parse(await fs.readFile(path.join(assets,'manifest.json'),'utf8'));
 const req=createRequire(path.join(process.env.SKETCH_EXPORT_DEPS||path.join(os.tmpdir(),'sketch-showcase-export-deps'),'package.json')),Canvas=req('@napi-rs/canvas');
 const previous={fetch:globalThis.fetch,self:globalThis.self,window:globalThis.window,devicePixelRatio:globalThis.devicePixelRatio,document:globalThis.document,createImageBitmap:globalThis.createImageBitmap},requests=[];
 globalThis.self=globalThis;globalThis.window=globalThis;globalThis.devicePixelRatio=1;
 globalThis.createImageBitmap=async blob=>Canvas.loadImage(Buffer.from(await blob.arrayBuffer()));
 globalThis.document={createElement(tag){if(tag!=='canvas')throw Error('Unexpected offline DOM element '+tag);return Canvas.createCanvas(1,1);}};
 globalThis.__sceneAuditManifest=manifest;globalThis.__sceneAuditRequests=requests;
 globalThis.fetch=async(url,init)=>{const text=String(url);let relative;
  if(text.startsWith('/api/lab/assembly-model?')){const key=new URLSearchParams(text.split('?')[1]).get('key');relative=Object.values(manifest.assemblies).find(a=>a.record.assemblyKey===key)?.model;}
  if(text.startsWith('https://scene-audit.invalid/file?'))relative=manifest.files[new URL(text).searchParams.get('path')];
  if(relative){requests.push({type:'file',path:relative});return new Response(await fs.readFile(path.join(assets,relative)));}return previous.fetch(url,init);
 };
 const {adaptVehicleFleetSource}=await import('./vehicle-fleet.mjs');
 const built=await build({stdin:{contents:`export * as T from 'three';export {loadApartment} from '@sketch/apps/apartment/load-scene';export {resolveAppearance} from '@sketch/rendering/asset/appearance';export {geometryFingerprint} from ${JSON.stringify(path.join(site,'scripts/viewer/prepared-geometry-cache.js'))};`,resolveDir:site,sourcefile:'audit-showcase-scene.mjs'},bundle:true,write:false,platform:'node',format:'esm',target:'es2022',alias:{'@sketch':path.join(game,'src')},plugins:[{name:'scene-audit',setup(b){
  b.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:path.join(site,'node_modules/three',args.path==='three'?'build/three.module.js':args.path.replace(/^three\/(?:addons|examples\/jsm)\//,'examples/jsm/'))}));
  b.onResolve({filter:/platform[\\/]asset-client$|^@showcase-static$/},()=>({path:'static-client',namespace:'audit'}));
  b.onLoad({filter:/.*/,namespace:'audit'},()=>({loader:'js',contents:`export const getSceneLoadMode=()=>globalThis.__sceneAuditMode;export const fileURL=path=>'https://scene-audit.invalid/file?path='+encodeURIComponent(path);export async function api(route,body){globalThis.__sceneAuditRequests.push({type:'api',route});const m=globalThis.__sceneAuditManifest;if(route==='list')return{token:'static'};if(route==='preview-assembly')return structuredClone(m.assemblies[body.assembly.id].record);if(route.startsWith('spatial?')){const q=new URLSearchParams(route.slice(8));return structuredClone(m.spatial[q.get('id')+'@'+q.get('version')]);}throw Error(route);}`}));
  b.onLoad({filter:/rendering[\\/]asset[\\/]geometry\.ts$/},async args=>({loader:'ts',contents:"import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';\n"+(await fs.readFile(args.path,'utf8')).replace('const summary=readContract(bytes);','').replace('new GLTFLoader().parseAsync','new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync').replace('id:summary.id','id:root.userData.asset_id||root.name')}));
  b.onLoad({filter:/apps[\\/]apartment[\\/]load-scene\.ts$/},async args=>({loader:'ts',contents:adaptSceneLoaderSource(await fs.readFile(args.path,'utf8')).replaceAll("GeometryStage.create(root,'apartment_scene',","globalThis.__sceneAuditCapture(root,'apartment_scene',")}));
  b.onLoad({filter:/assets[\\/]scenes[\\/]apartment-street-life\.ts$/},async args=>({loader:'ts',contents:adaptVehicleFleetSource(await fs.readFile(args.path,'utf8'))}));
 }}]});
 const temporary=path.join(os.tmpdir(),'sketch-scene-audit-'+process.pid+'.mjs');await fs.writeFile(temporary,built.outputFiles[0].contents);const runtime=await import(pathToFileURL(temporary).href);
 globalThis.__sceneAuditCapture=async root=>{const meshes=new Map();for(const part of root.children)for(const node of part.children)meshes.set(node.userData.mesh_id,{id:node.userData.mesh_id,partId:part.userData.part_id,node});return{root,meshes};};
 return {...runtime,async load(mode='full'){requests.length=0;globalThis.__sceneAuditMode=mode;const loaded=await runtime.loadApartment(options.progress||(()=>{}));return{loaded,requests:[...requests]};},async dispose(){Object.assign(globalThis,previous);for(const key of ['__sceneAuditManifest','__sceneAuditRequests','__sceneAuditMode','__sceneAuditCapture'])delete globalThis[key];await fs.unlink(temporary);}};
}
