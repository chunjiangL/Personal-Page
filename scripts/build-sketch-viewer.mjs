import {build} from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {adaptVehicleFleetSource} from './viewer/vehicle-fleet.mjs';
import {adaptSceneLoaderSource} from './viewer/scene-loading.mjs';
import {buildStartupPacks} from './pack-sketch-startup.mjs';
import {adaptGroundSurfaceSource} from './viewer/ground-line-filter.mjs';
import {adaptPavementPaletteSource} from './viewer/pavement-palette.mjs';
import {adaptCloudSource} from './viewer/cloud-light.mjs';
const root=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const adapter=path.resolve('scripts/viewer/static-assets.js');
const prepared=JSON.parse(await fs.readFile('assets/models/sketch-runtime/prepared-compact/manifest.json','utf8'));
const sceneKeyBytes=await fs.readFile('scripts/data/neighborhood-source-keys.json'),sceneKeys=JSON.parse(sceneKeyBytes.toString());
if(createHash('sha256').update(sceneKeyBytes).digest('hex')!==prepared.sourceKeyManifestSHA256)throw Error('Regenerate the geometry scene partitions');
for(const [key,file]of Object.entries({loader:path.join(root,'src/apps/apartment/load-scene.ts'),adapter:'scripts/viewer/scene-loading.mjs',fleet:'scripts/viewer/vehicle-fleet.mjs'})){
 if(createHash('sha256').update(await fs.readFile(file)).digest('hex')!==sceneKeys.sourceHashes[key])throw Error('Regenerate the neighborhood source key audit: '+file);
}
for(const [file,expected]of Object.entries(prepared.algorithmSources)){
 const actual=createHash('sha256').update(await fs.readFile(path.join(root,file))).digest('hex');
 if(actual!==expected)throw Error('Original geometry algorithm changed. Regenerate the prepared cache: '+file);
}
const contours=JSON.parse(await fs.readFile('assets/models/sketch-runtime/contours/manifest.json','utf8'));
if(contours.partition.sourceKeyManifestSHA256!==prepared.sourceKeyManifestSHA256)throw Error('Geometry and contour scene partitions differ');
for(const [base,sources]of [[root,contours.algorithmSources],[process.cwd(),contours.runtimeSources]])for(const [file,expected]of Object.entries(sources)){
 if(createHash('sha256').update(await fs.readFile(path.join(base,file))).digest('hex')!==expected)throw Error('Original contour algorithm changed. Regenerate contour cache: '+file);
}
const payloadHash=async file=>JSON.stringify(createHash('sha256').update(await fs.readFile('assets/models/sketch-runtime/'+file)).digest('hex'));
const startupPacks=await buildStartupPacks();
const result=await build({
 define:{__SKETCH_STARTUP_PACKS__:JSON.stringify(startupPacks),__SKETCH_ASSET_MANIFEST__:await payloadHash('manifest.json.gz'),__SKETCH_PREPARED_MANIFEST__:await payloadHash('prepared-compact/manifest.json.gz'),__SKETCH_NEIGHBORHOOD_GEOMETRY__:await payloadHash('prepared-compact/neighborhood-manifest.json.gz'),__SKETCH_CONTOUR_MANIFEST__:await payloadHash('contours/manifest.json.gz'),__SKETCH_NEIGHBORHOOD_CONTOURS__:await payloadHash('contours/neighborhood-manifest.json.gz')},
 entryPoints:['scripts/viewer/sketch-viewer.js'],outfile:'assets/js/sketch-viewer.bundle.js',bundle:true,format:'esm',target:['chrome80','safari15'],minify:true,legalComments:'eof',logLevel:'info',metafile:true,
 alias:{'@sketch':path.join(root,'src'),'@showcase-static':adapter},
 plugins:[{name:'static-original-runtime',setup(b){
  b.onLoad({filter:/apps[\\/]apartment[\\/]street-props\.ts$/},async args=>{
   let contents=await fs.readFile(args.path,'utf8');
   const edits=[
    ['function update(camera:T.Camera){','const cutawayPlots=streetOrbitCutaways(placements);\n function update(camera:T.Camera,streetView=false,roomOrigin?:T.Vector3,height=1){'],
    ['camera.getWorldPosition(eye);let changed=false;', 'camera.getWorldPosition(eye);const cones=roomOrigin?windowCones(eye,roomOrigin,[BEDROOM_WINDOW,LIVING_WINDOW]):undefined;let changed=false;'],
    ['entry.update(frustum,eye)','entry.update(frustum,eye,streetView?cutawayPlots:undefined,cones,camera,height)'],
    ['function update(frustum:T.Frustum,eye:T.Vector3){','function update(frustum:T.Frustum,eye:T.Vector3,hiddenPlots?:ReadonlySet<string>,cones?:T.Vector3[][],camera?:T.Camera,height=1){'],
    ['spheres.forEach((sphere,i)=>{padded.copy(sphere);','spheres.forEach((sphere,i)=>{if(hiddenPlots?.has(placements[i].source))return;padded.copy(sphere);'],
    ['const next=visible.join(\',\');', `const counts=cones?orderWindowInstances(visible,spheres,eye,cones,camera,height):undefined;
      for(const mesh of part.children){
        mesh.userData.galleryWindowCount=counts?.full;
        mesh.userData.galleryMotionCount=counts?.fill;
        mesh.userData.galleryInkCount=counts?.ink;
      }
      const next=visible.join(',');`],
   ];
   for(const [original,adapted] of edits){
    if(contents.split(original).length!==2)throw Error('Original street instance visibility changed: '+original);
    contents=contents.replace(original,adapted);
   }
   return {contents:"import {streetOrbitCutaways} from "+JSON.stringify(path.resolve('scripts/viewer/street-orbit.mjs'))+";\nimport {windowCones,orderWindowInstances} from "+JSON.stringify(path.resolve('scripts/viewer/bedroom-window-visibility.mjs'))+";\nimport {BEDROOM_WINDOW,LIVING_WINDOW} from '@sketch/assets/scenes/bedroom-window';\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/assets[\\/]scenes[\\/]street-layout\.ts$/},async args=>({contents:adaptPavementPaletteSource(await fs.readFile(args.path,'utf8')),loader:'ts'}));
  b.onLoad({filter:/apps[\\/]apartment[\\/]ground-surface\.ts$/},async args=>({contents:adaptGroundSurfaceSource(await fs.readFile(args.path,'utf8')),loader:'ts'}));
  b.onLoad({filter:/apps[\\/]apartment[\\/](exterior-look|vehicle-look)\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8');
   const vehicle=args.path.endsWith('vehicle-look.ts'), cool=vehicle?'shade':'cool';
   const kind=vehicle?'vehicle':'street',walk='root.traverse(node=>{';
   if(source.split(walk).length!==2)throw Error('Original painted material traversal changed');
   let contents=source.replace(walk,"const galleryWash=captureWash(root,'"+kind+"',decoder,warm,"+cool+");\n "+walk);
   for(const [name,shared] of [[vehicle?'sun':'sunDirection','washDirection(root)'],['decoder','galleryWash.key'],['warm','galleryWash.warm'],[cool,'galleryWash.cool']]){
    const needle='value:'+name+'.clone()';
    if(contents.split(needle).length!==2)throw Error('Original light uniform changed: '+needle);
    contents=contents.replace(needle,'value:'+shared);
   }
   return {contents:"import {washDirection,captureWash} from "+JSON.stringify(path.resolve('scripts/viewer/gallery-light.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]weather\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8');
   const sky='ctx.globalAlpha=1;this.sky.needsUpdate=true;',fog='this.scene.fog.color.set(palettes[this.mode].fog)';
   if(source.split(sky).length!==2||source.split(fog).length!==2)throw Error('Original atmosphere palette changed');
   const contents=source.replace(sky,sky+'captureWeatherSky(this,p.fog);')
    .replace(fog,'this.scene.fog.color.set(this.galleryFog??palettes[this.mode].fog)');
   return {contents:"import {captureWeatherSky} from "+JSON.stringify(path.resolve('scripts/viewer/daylight.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]street-night\.ts$/},async args=>{
   let contents=await fs.readFile(args.path,'utf8');
   for(const [before,after] of [['uStreetNight>.5||uStreetDusk>.5','uStreetNight>.5||uStreetDusk>0.'],['totalEmissiveRadiance,.75);ink*=.76;','totalEmissiveRadiance,.75*uStreetDusk);ink*=mix(1.,.76,uStreetDusk);'],['labBaseColor*spill*.65','labBaseColor*spill*(.65*uStreetDusk)']]){
    if(contents.split(before).length!==2)throw Error('Original dusk lighting changed: '+before);
    contents=contents.replace(before,after);
   }
   return {contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]volume-clouds\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8');
   return {contents:adaptCloudSource(source,path.resolve('scripts/viewer/cloud-light.mjs')),loader:'ts'};
  });
  b.onLoad({filter:/assets[\\/]scenes[\\/]apartment-corner\.ts$/},async args=>{
   let source=await fs.readFile(args.path,'utf8');
   const sharedPaper='for(const m of [leaf,leafLight,curtain,teal,ochre,clay,slate,paper])m.side=T.DoubleSide;';
   const front='floor===2?cream:paper,height',round='floor===3?paper:cream';
   if(source.split(sharedPaper).length!==2||source.split(front).length!==2||source.split(round).length!==3)throw Error('Original upper facade materials changed');
   // The glazed shop displays and the awning stripes also use this paper.
   // Give the solid upper walls their own finish and shadow-casting side.
   source=source.replace(sharedPaper,sharedPaper+"\n const upperPlaster=paper.clone();upperPlaster.name='mat_clay_apartment_corner_upper_plaster';")
    .replace(front,'floor===2?cream:upperPlaster,height').replaceAll(round,'floor===3?upperPlaster:cream');
   return {contents:source,loader:'ts'};
  });
  b.onLoad({filter:/assets[\\/]scenes[\\/]apartment-street-life\.ts$/},async args=>{
   const source=adaptVehicleFleetSource(await fs.readFile(args.path,'utf8'));
   const entry='const crownPoint=(nx:number,ny:number,nz:number):V3=>{';
   const leafSamples='cols:number[]=[],count=820;';
   if(source.split(entry).length!==2||source.split(leafSamples).length!==2)throw Error('Original street crown sampler changed');
   const shapeModule=JSON.stringify(path.resolve('scripts/viewer/crown-shape.mjs'));
   const contents=source.replace(entry,entry+'\n   if(!distant)return galleryCrownPoint(nx,ny,nz,scale,i);')
    .replace(leafSamples,'cols:number[]=[],count=240;');
   return {contents:`import {crownPoint as galleryCrownPoint} from ${shapeModule};\n`+contents,loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]contours\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),needle='new T.EdgesGeometry(r.node.geometry,s.sketch.edgeAngle)';
   if(source.split(needle).length!==2)throw Error('Original contour construction changed');
   const arrays="const points=edges.getAttribute('position'),regular:number[]=[],important:number[]=[];",partition='for(let i=0;i<points.count;i+=2){';
   if(source.split(arrays).length!==2||source.split(partition).length!==2)throw Error('Original contour partition changed');
   const instanceLod='addLodBounds(edges,r.node.geometry,false);';
   const resolvedStyle='const resolved=this.resolver(id);';
   if(source.split(instanceLod).length!==2||source.split(resolvedStyle).length!==2)throw Error('Original contour resolution changed');
   const instanceCount='placement.geometry.instanceCount=mesh.count;';
   const hullOwner='hull.matrixAutoUpdate=false;';
   if(source.split(instanceCount).length!==2||source.split(hullOwner).length!==2)throw Error('Original instance contour bindings changed');
   const contents=source.replace(needle,'preparedEdges(r.node.geometry,s.sketch.edgeAngle)')
    .replace(hullOwner,hullOwner+'hull.galleryInkOwner=r.node.uuid;')
    .replace(instanceCount,instanceCount+'line.userData.galleryWindowCount=hull.userData.galleryWindowCount=mesh.userData.galleryWindowCount;line.userData.galleryMotionCount=hull.userData.galleryMotionCount=mesh.userData.galleryInkCount;')
    .replace(resolvedStyle,'const resolved=resolveStreetContour(this.resolver(id),record);')
    .replace(instanceLod,instanceLod+'applyInstanceContourLod(edges,r.node,this.contourComplexity.get(id)??0);')
    .replace(arrays,"const points=edges.getAttribute('position'),unmarked=!this.edgeStyle.hidden.length&&!this.edgeStyle.important.length,regular:number[]=unmarked?Array.from((points as T.BufferAttribute).array):[],important:number[]=[];")
    .replace(partition,'if(!unmarked)'+partition);
   return {contents:"import {resolveStreetContour} from "+JSON.stringify(path.resolve('scripts/viewer/street-contours.mjs'))+";\nimport {applyInstanceContourLod} from "+JSON.stringify(path.resolve('scripts/viewer/instance-contour-lod.mjs'))+";\nimport {preparedEdges} from "+JSON.stringify(path.resolve('scripts/viewer/contour-cache.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onResolve({filter:/\?raw$/},args=>({path:path.resolve(args.resolveDir,args.path.slice(0,-4)),namespace:'raw-source'}));
  b.onLoad({filter:/.*/,namespace:'raw-source'},async args=>({contents:await fs.readFile(args.path,'utf8'),loader:'text'}));
  b.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:path.resolve('node_modules/three',args.path==='three'?'build/three.module.js':args.path.replace(/^three\/(?:addons|examples\/jsm)\//,'examples/jsm/'))}));
  b.onResolve({filter:/platform[\\/]asset-client$/},()=>({path:adapter}));
  b.onLoad({filter:/apps[\\/]apartment[\\/]static-kitchen\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8');
   const piece='batch.pieces.push(piece);',finish='appearance[id]=batch.patch;';
   if(source.split(piece).length!==2||source.split(finish).length!==2)throw Error('Original bedroom batch layout changed');
   const contents=source.replace(piece,`if(prefix==='bedroom'&&isDeskMesh(node.userData.mesh_id)){
     (batch.deskSlices??=[]).push({id:node.userData.mesh_id,part:part.userData.part_id,start:batch.vertexCount??0,count:group.count});
   }
   batch.vertexCount=(batch.vertexCount??0)+group.count;${piece}`)
    .replace(finish,'if(batch.deskSlices)mesh.userData.deskSlices=batch.deskSlices;'+finish);
   return {contents:"import {isDeskMesh} from "+JSON.stringify(path.resolve('scripts/viewer/desk-inspection.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]load-scene\.ts$/},async args=>{
   let contents=adaptSceneLoaderSource(await fs.readFile(args.path,'utf8')),count=0;
   const roomData='homePartIds,inherited:';
   if(contents.split(roomData).length!==2)throw Error('Original home assembly return changed');
   contents=contents.replace(roomData,'homePartIds,galleryWalls:shell.walls,inherited:');
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
  b.onLoad({filter:/apps[\\/]apartment[\\/]window-glass\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),projection="camera.projectionMatrix.elements.join(',')";
   if(source.split(projection).length!==2)throw Error('Original reflection camera key changed');
   // Scene depth fitting changes near/far as traffic moves. Window UVs depend
   // only on the eye, orientation and lens, so the native timed refresh suffices.
   return {contents:source.replace(projection,"[camera.fov,camera.aspect,camera.zoom].join(',')"),loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]structure-field\.ts$/},async args=>{
   let source=await fs.readFile(args.path,'utf8');
   for(const [from,to] of [['private data:number[]=[];','private data=new FloatStore();'],['for(let i=0;i<prepared.data.length;i++)this.data.push(prepared.data[i]);','this.data.append(prepared.data);'],['data.set(this.data);','this.data.writeTo(data);'],['this.data=[];','this.data=new FloatStore();']]){
    if(source.split(from).length!==2)throw Error('Original structure atlas storage changed');source=source.replace(from,to);
   }
   return {contents:"import {FloatStore} from "+JSON.stringify(path.resolve('scripts/viewer/float-store.mjs'))+";\n"+source,loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]sketch-lod\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),start='function writeLodBounds(target:T.BufferGeometry,b:T.Sphere){';
   if(source.split(start).length!==2)throw Error('Original LOD bounds writer changed');
   return {contents:"import {compactDevice,constantAttribute} from "+JSON.stringify(path.resolve('scripts/viewer/device-budget.mjs'))+";\n"+source.replace(start,start+"if(compactDevice){target.setAttribute('labLodBounds',constantAttribute([b.center.x,b.center.y,b.center.z,b.radius*2],4));return target;}"),loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]rigid-batches\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),start='begin(){';
   if(source.split(start).length!==2)throw Error('Original rigid batch entry changed');
   return {contents:"import {compactDevice} from "+JSON.stringify(path.resolve('scripts/viewer/device-budget.mjs'))+";\n"+source.replace(start,start+'if(compactDevice)return ()=>{};'),loader:'ts'};
  });
  b.onLoad({filter:/rendering[\\/]asset[\\/]render-core\.ts$/},async args=>{
   const source=await fs.readFile(args.path,'utf8'),passes="if(active){const scale=";
   if(source.split(passes).length!==2)throw Error('Original transparency passes changed');
   const contents=source.replace(passes,"if(this.galleryBedroom&&!this.glass.needsRefinement&&!hasTransmissiveSurface(this.scene)){r.render(this.scene,camera);return;}\n  "+passes);
   return {contents:"import {hasTransmissiveSurface} from "+JSON.stringify(path.resolve('scripts/viewer/bedroom-window-visibility.mjs'))+";\n"+contents,loader:'ts'};
  });
  b.onLoad({filter:/apps[\\/]apartment[\\/]stage\.ts$/},async args=>{
   let source=await fs.readFile(args.path,'utf8');
   const renderer='new T.WebGLRenderer({antialias:true})';
   if(source.split(renderer).length!==2)throw Error('Original room renderer changed');
   source=source.replace(renderer,'new T.WebGLRenderer({antialias:true,alpha:true})');
   const residentStart="    progress('正在迎接小家的主人…');",residentEnd='this.scene.add(resident.root);';
   if(source.split(residentStart).length!==2||source.split(residentEnd).length!==2)throw Error('Original resident loading changed');
   source="import {getSceneLoadMode} from '@showcase-static';\nimport {prepareNearFoliage,applyNearFoliageWeather} from "+JSON.stringify(path.resolve('scripts/viewer/foliage-treatment.mjs'))+";\n"+source.replace(residentStart,"    if(getSceneLoadMode()==='full'){\n"+residentStart).replace(residentEnd,residentEnd+'\n    }');
   const sceneStart='this.loaded=loaded;this.scene.add(loaded.geometry.wrapper);',environmentEnd='this.updateLightingBounds();this.core.ground.visible=false;this.renderer.shadowMap.needsUpdate=true;this.dirty=true;';
   const initialFinish='applyVehicleReflections(loaded.geometry.wrapper,this.scene.environment,loaded.settings);this.core.ground.visible=false;';
   if(source.split(sceneStart).length!==2||source.split(environmentEnd).length!==2||source.split(initialFinish).length!==2)throw Error('Original scene treatment hooks changed');
   source="import {applyCornerLightBands,settleEveningShadows} from "+JSON.stringify(path.resolve('scripts/viewer/street-light-bands.mjs'))+";\n"+source;
   const streetShadowFit='private fitStreetShadows(){';
   if(source.split(streetShadowFit).length!==2)throw Error('Original street shadow fit changed');
   const shadowBounds=/if\(this\.presentation==='exterior'\)this\.fitStreetShadows\(\);\s*else if\(this\.seated\)fitExteriorShadows\(this\.core\.lighting\.group,this\.lightingBounds\.clone\(\)\.union\(this\.loaded\.building\.windowStreetBounds\),2048,true\);/;
   const nativeFit=source.match(shadowBounds)?.[0];
   if(!nativeFit)throw Error('Original shadow bounds changed');
   source=source.replace(shadowBounds,'this.onGalleryLightBounds?.();this.fitGalleryShadows();')
    .replace(streetShadowFit,'fitGalleryShadows(){if(!this.loaded||!this.core)return;\n'+nativeFit+'\n  }\n  '+streetShadowFit);
   source=source.replace(streetShadowFit,streetShadowFit+
    'this.fitNativeStreetShadows();if(this.core)settleEveningShadows(this.core.lighting.group,this.galleryLowSun?"sunset":this.weather);}\n  private fitNativeStreetShadows(){');
   const streetFinish='applyNearFoliageWeather(this.loaded.geometry.wrapper,this.weather);applyCornerLightBands(this.loaded.geometry.wrapper,this.weather,this.galleryPenBlend);';
   source="import {prepareBedroomInk} from "+JSON.stringify(path.resolve('scripts/viewer/bedroom-ink.mjs'))+";\n"+source;
   source=source.replace(sceneStart,sceneStart+'prepareNearFoliage(loaded);prepareBedroomInk(loaded);').replace(initialFinish,initialFinish+streetFinish).replace(environmentEnd,environmentEnd+streetFinish);
   const streetFrame='this.frameStreetCorner(animate);return;';
   if(source.split(streetFrame).length!==2)throw Error('Original street camera framing changed');
   source=source.replace(streetFrame,'this.frameStreetCorner(animate);if(!animate)this.onStreetFramed?.();return;');
   const streetInstances='this.loaded!.streetProps.update(this.camera)';
   if(source.split(streetInstances).length!==2)throw Error('Original street instance update changed');
   source=source.replace(streetInstances,"this.loaded!.streetProps.update(this.camera,this.presentation==='exterior',this.seated?this.homeOffset:undefined,this.host.clientHeight)");
   const nativeDraw='if(this.dirty||this.core.needsRefinement){';
   if(source.split(nativeDraw).length!==2)throw Error('Original apartment draw loop changed');
   source=source.replace(nativeDraw,nativeDraw+'const motionStart=performance.now();if(this.drawGalleryMotion?.()){this.renderCost.main=T.MathUtils.lerp(this.renderCost.main,performance.now()-motionStart,.1);this.dirty=false;this.renderedFrames++;this.onRender?.();return;}');
   return {contents:source.replace('this.freeCamera.update(dt);','this.onBeforeFrame?.(dt);this.freeCamera.update(dt);')
   .replace('this.core=new AssetRenderCore','progress("render-core construction");this.core=new AssetRenderCore')
   .replace('this.core.apply(loaded.settings);await this.core.surface.prepare(loaded.settings);','progress("initial material styling");this.core.apply(loaded.settings);progress("surface textures");await this.core.surface.prepare(loaded.settings);progress("final material styling");')
   .replace('this.atmosphere=new ApartmentAtmosphere','progress("atmosphere setup");this.atmosphere=new ApartmentAtmosphere'),loader:'ts'};
  });
 }}]
});
await fs.mkdir('artifacts',{recursive:true});
await fs.writeFile('artifacts/original-runtime-bundle.json',JSON.stringify(result.metafile));
