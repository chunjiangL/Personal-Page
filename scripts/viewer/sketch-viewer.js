import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {ApartmentStage} from '@sketch/apps/apartment/stage';
import {kitchenAssets} from '@sketch/apps/apartment/layout';
import {GeometryStage,loadAssetRoot} from '@sketch/rendering/asset/geometry';
import {AssetRenderCore} from '@sketch/rendering/asset/render-core';
import {prepareAssets,assemblyData,fileURL} from './static-assets.js';
import {framedCamera} from './scene-math.mjs';

const $=id=>document.getElementById(id),host=$('sketch-canvas'),viewer=$('sketch-viewer');
const labels={neighborhood:'Neighborhood',kitchen:'Kitchen',bedroom:'Bedroom',fridge:'Refrigerator',hood:'Range hood',board:'Cutting board',workstation:'Workstation',wardrobe:'Wardrobe',bed:'Bed',sink:'Sink',hob:'Gas hob',sink_cabinet:'Sink cabinet',prep_cabinet:'Prep cabinet',hob_cabinet:'Hob cabinet',building_0:'Gabled townhouse',building_1:'Terrace house',building_2:'Angled-roof townhouse',building_3:'Brick townhouse',building_4:'Stepped gable',building_5:'Courtyard house',building_6:'Narrow townhouse',sign_cafe:'Cafe sign',awning_2600:'Shop awning',menu:'Sidewalk menu',court_market_row:'Market Row',court_garden_court:'Garden Court',court_reading_lane:'Reading Lane',court_workshop_yard:'Workshop Yard'};
const english=id=>labels[id]||id.replace(/^(scene_|bedroom_|street_authored_|home_)/g,'').replace(/[_-]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
let stage,orbit,current='neighborhood',selection,objects=[],detail,busy=false,frame=0,inView=true,startupMS;
const startupAt=performance.now();
const syncSuspension=()=>stage?.suspend(document.hidden||!inView||!!detail||busy);
function inspectBusy(value){busy=value;for(const element of viewer.querySelectorAll('[data-scene], #camera-mode, #reset-view, #weather-select, #object-select, #focus-object, #explode-object, #clear-selection'))element.disabled=value;if(!value)$('explode-object').disabled=detail?detail.geometry.parts.size<2:!selection?.source&&!selection?.part?.userData.library_source;}
const status=text=>{$('viewer-status').textContent=text;};
const loading=(show,text)=>{$('viewer-loading').hidden=!show;if(text)$('viewer-loading').querySelector('p').textContent=text;};
const diagnostic=new URLSearchParams(location.search).has('qa')?document.createElement('output'):null;
if(diagnostic){diagnostic.id='viewer-diagnostics';diagnostic.hidden=true;viewer.append(diagnostic);}
function report(){if(!diagnostic||!stage?.ready)return;const s=stage.snapshot();diagnostic.textContent=JSON.stringify({ready:true,startupMS,scene:current,weather:stage.weather,camera:s.camera,target:s.target,mode:s.cameraMode,parts:stage.loaded.geometry.parts.size,meshes:s.meshes,buildings:s.building.count,streetProps:s.streetPropInstances,trafficPaused:s.traffic.paused,selection:selection?.label,detail:!!detail,exploded:detail?.exploded,detailParts:detail?.geometry.parts.size,frames:s.performance.frames,cpuMS:s.performance.cpuMS,calls:s.calls,triangles:s.triangles});}
function cameraUI(){const free=stage.freeCameraEnabled;$('camera-mode').setAttribute('aria-pressed',String(free));$('camera-mode').textContent=free?'Orbit camera':'Free camera';$('touch-flight').hidden=!free;$('viewer-help').textContent=free?'Drag to look · WASD to move · Q / E to rise and descend · Shift to move faster':'Drag to orbit · Scroll to zoom · Right-drag to pan · Click an object to inspect';orbit.enabled=!free&&!detail;report();}
function listObjects(){
 objects=[];
 for(const [id,part] of stage.loaded.geometry.parts){
  if(current==='neighborhood')continue;
  const inRoom=current==='kitchen'?kitchenAssets.some(a=>id==='scene_'+a.id):part.userData.residence_zone===current;
  if(!inRoom||!part.userData.linked_source||!part.visible)continue;
  objects.push({id,label:english(part.userData.linked_source),part,source:part.userData.linked_source,assembly:current==='kitchen'?'apartment_kitchen':'apartment_302_bedroom'});
 }
 if(current==='neighborhood')for(const fixture of stage.loaded.streetProps.inspections){
  const part=stage.loaded.geometry.parts.get('street_authored_'+fixture.key);
  objects.push({id:fixture.key,label:english(fixture.key),fixture,part});
 }
 $('object-select').replaceChildren(new Option('Choose an object',''),...objects.map(o=>new Option(o.label,o.id)));
}
function clearSelection(){closeDetail();selection=undefined;$('selection-panel').hidden=true;$('object-select').value='';status(labels[current]);report();}
function chooseScene(id,animate=true){
 if(!stage?.ready||busy)return;clearSelection();stage.setFreeCamera(false);current=id;
 if(id==='neighborhood')stage.focusBuilding('exterior','all',animate);else stage.focus(id,animate);stage.setCameraSpeed(id==='neighborhood'?12:2);
 document.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===id)));
 $('traffic-toggle').disabled=id!=='neighborhood';listObjects();cameraUI();status(labels[id]);
 const url=new URL(location);url.searchParams.set('scene',id);history.replaceState(null,'',url);report();
}
function focusSelected(){
 if(!selection)return;stage.setFreeCamera(false);cameraUI();
 if(detail){fitDetail();return;}
 if(selection.instanceBounds){const box=selection.instanceBounds;stage.frameBounds(box,box.getCenter(new T.Vector3()),stage.camera.position.clone().sub(stage.viewTarget).normalize(),true);}
 else if(selection.fixture)stage.focusStreetProp(selection.fixture.key,true);
 else{const box=new T.Box3().setFromObject(selection.part);const direction=stage.camera.position.clone().sub(stage.viewTarget).normalize();stage.frameBounds(box,box.getCenter(new T.Vector3()),direction,true);}
 report();
}
function selectObject(object){if(!object||busy)return;closeDetail();selection=object;$('selection-panel').hidden=false;$('selected-name').textContent=object.label;$('object-select').value=object.id;$('explode-object').disabled=!object.source&&!object.part?.userData.library_source;$('explode-object').textContent='Explode';$('explode-object').setAttribute('aria-pressed','false');focusSelected();status(object.label);}
function fitDetail(){if(!detail)return;const box=new T.Box3().setFromObject(detail.geometry.root);const pose=framedCamera(box,new T.Vector3(1,.6,1.25),38,detail.camera.aspect,1.15);detail.camera.position.copy(pose.position);detail.controls.target.copy(pose.target);detail.controls.update();detail.dirty=true;}
async function inspect(){
 if(!selection||busy)return;
 if(detail){detail.exploded=!detail.exploded;detail.geometry.layout(detail.exploded?'exploded':'assembled',1);detail.settings.inspection.layout=detail.exploded?'exploded':'assembled';detail.core.apply(detail.settings);fitDetail();$('explode-object').textContent=detail.exploded?'Assemble':'Explode';$('explode-object').setAttribute('aria-pressed',String(detail.exploded));report();return;}
 inspectBusy(true);loading(true,'Opening '+selection.label);stage.setFreeCamera(false);cameraUI();syncSuspension();orbit.enabled=false;
 let partialGeometry,partialCore;
 try{
  let bytes,record={sketchByMaterial:{},appearanceByMesh:{},resources:{}};
  if(selection.assembly)({bytes,record}=await assemblyData(selection.assembly));
  else{const source=selection.part.userData.library_source;bytes=await(await fetch(fileURL(source.id+'/versions/'+source.version+'/model.glb'))).arrayBuffer();}
  const {root,id:assetId}=await loadAssetRoot(bytes);
  if(selection.source)for(const part of [...root.children]){if(part.userData.linked_source!==selection.source)root.remove(part);else if(part.userData.source_id)part.userData.part_id=part.userData.source_id;}
  const geometry=await GeometryStage.create(root,({fridge:'nori_fridge',wok:'sketch_wok'})[selection.source]||assetId),scene=new T.Scene();partialGeometry=geometry;scene.add(geometry.wrapper);
  const settings=structuredClone(stage.loaded.settings);settings.inspection.layout='assembled';settings.appearance.resources={...settings.appearance.resources,...record.resources};
  const core=new AssetRenderCore(stage.renderer,scene,geometry,record.sketchByMaterial,record.appearanceByMesh);partialCore=core;core.apply(settings);await core.surface.prepare(settings);core.apply(settings);
  const camera=new T.PerspectiveCamera(38,host.clientWidth/host.clientHeight,.001,1000),controls=new OrbitControls(camera,stage.renderer.domElement);controls.enableDamping=false;
  detail={geometry,scene,settings,core,camera,controls,exploded:true,dirty:true};controls.addEventListener('change',()=>{detail&&(detail.dirty=true);});
  detail.exploded=geometry.parts.size>1;const layout=detail.exploded?'exploded':'assembled';geometry.layout(layout,1);settings.inspection.layout=layout;core.apply(settings);fitDetail();$('explode-object').disabled=!detail.exploded;$('explode-object').textContent=detail.exploded?'Assemble':'Explode';$('explode-object').setAttribute('aria-pressed',String(detail.exploded));status(selection.label+' · component view');
  const draw=()=>{if(!detail)return;frame=requestAnimationFrame(draw);if(document.hidden||!inView)return;if(detail.dirty||detail.core.needsRefinement){detail.core.render(camera,host.clientWidth,host.clientHeight);detail.dirty=false;}};draw();
 }catch(error){console.error(error);if(!detail){partialCore?.dispose();partialGeometry?.dispose();}status('This object could not be opened. Please try again.');closeDetail();}
 finally{inspectBusy(false);loading(false);syncSuspension();report();}
}
function closeDetail(){
 cancelAnimationFrame(frame);if(detail){detail.controls.dispose();detail.core.dispose();detail.geometry.dispose();detail=undefined;stage.core.apply(stage.loaded.settings);stage.core.ground.visible=false;stage.refreshEnvironment();}
 if(stage?.ready){syncSuspension();orbit.enabled=!stage.freeCameraEnabled;stage.dirty=true;}
 $('explode-object').textContent='Explode';$('explode-object').setAttribute('aria-pressed','false');
}
async function start(){
 try{
  loading(true,'Loading the neighborhood');$('viewer-error').hidden=true;
  await prepareAssets((done,total)=>{$('viewer-progress').max=total;$('viewer-progress').value=done;});
  $('viewer-progress').removeAttribute('value');stage=new ApartmentStage(host);stage.renderer.domElement.setAttribute('aria-label','Interactive Sketch Game. Drag to orbit; enable free camera to explore.');
  await stage.initialize(label=>{const percent=label.match(/\d+%/);loading(true,percent?'Preparing original materials · '+percent[0]:'Preparing the neighborhood and rooms');});
  orbit=new OrbitControls(stage.camera,stage.renderer.domElement);orbit.target=stage.viewTarget;orbit.enableDamping=false;orbit.minDistance=.15;orbit.maxDistance=160;
  orbit.addEventListener('start',()=>{stage.tween=undefined;});orbit.addEventListener('change',()=>{stage.dirty=true;});
  stage.onBeforeFrame=()=>{if(!stage.tween&&orbit.enabled)orbit.update();};stage.onCameraMode=cameraUI;
  let lastReport=0;stage.onRender=()=>{if(performance.now()-lastReport>500){report();lastReport=performance.now();}};
  let down,multi=false;const pointers=new Set(),canvas=stage.renderer.domElement;
  canvas.addEventListener('pointerdown',e=>{if(!pointers.size)multi=false;pointers.add(e.pointerId);if(pointers.size>1)multi=true;down={x:e.clientX,y:e.clientY,button:e.button};});
  for(const event of ['pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>{pointers.delete(e.pointerId);down=undefined;});
  canvas.addEventListener('pointerup',e=>{
   pointers.delete(e.pointerId);const origin=down;down=undefined;
   if(!origin||multi||origin.button!==0||Math.hypot(e.clientX-origin.x,e.clientY-origin.y)>5||stage.freeCameraEnabled||detail||busy)return;
   const rect=canvas.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2),stage.camera);
   const visible=node=>{for(let p=node;p;p=p.parent)if(!p.visible)return false;return true;};
   const hit=ray.intersectObjects([...stage.loaded.geometry.meshes.values()].map(m=>m.node).filter(node=>visible(node)&&!node.userData.labGhost),false)[0];if(!hit)return;
   const object=objects.find(o=>o.part&&(o.part===hit.object.parent||o.part===hit.object));if(object){
    if(hit.object.isInstancedMesh&&hit.instanceId!==undefined){const box=new T.Box3(),matrix=new T.Matrix4();for(const mesh of object.part.children){mesh.getMatrixAt(hit.instanceId,matrix);mesh.geometry.computeBoundingBox();box.union(mesh.geometry.boundingBox.clone().applyMatrix4(matrix).applyMatrix4(mesh.matrixWorld));}selectObject({...object,instanceBounds:box});}
    else selectObject(object);
   }
  });
  new ResizeObserver(()=>{if(detail){detail.camera.aspect=host.clientWidth/host.clientHeight;detail.camera.updateProjectionMatrix();detail.dirty=true;}}).observe(host);
  for(const id of ['camera-mode','reset-view','viewer-fullscreen','weather-select','traffic-toggle','object-select'])$(id).disabled=false;
  $('traffic-toggle').setAttribute('aria-pressed',String(stage.trafficPaused));$('traffic-toggle').textContent=stage.trafficPaused?'Resume traffic':'Pause traffic';
  startupMS=Math.round(performance.now()-startupAt);loading(false);const requested=new URLSearchParams(location.search).get('scene');chooseScene(['kitchen','bedroom'].includes(requested)?requested:'neighborhood',false);syncSuspension();
 }catch(error){console.error(error);loading(false);$('viewer-error').hidden=false;status('Scene loading failed.');if(diagnostic)diagnostic.textContent=JSON.stringify({error:error.message,stack:error.stack});}
}
document.querySelectorAll('[data-scene]').forEach(b=>b.addEventListener('click',()=>chooseScene(b.dataset.scene)));
$('camera-mode').addEventListener('click',()=>{if(busy)return;closeDetail();stage.setFreeCamera(!stage.freeCameraEnabled);});
$('reset-view').addEventListener('click',()=>chooseScene(current));
$('weather-select').addEventListener('change',()=>{if(busy)return;closeDetail();stage.setWeather($('weather-select').value);status(labels[current]+' · '+$('weather-select').selectedOptions[0].text);report();});
$('traffic-toggle').addEventListener('click',()=>{stage.setTrafficPaused(!stage.trafficPaused);$('traffic-toggle').textContent=stage.trafficPaused?'Resume traffic':'Pause traffic';$('traffic-toggle').setAttribute('aria-pressed',String(stage.trafficPaused));report();});
$('object-select').addEventListener('change',()=>{if(!$('object-select').value)clearSelection();else selectObject(objects.find(o=>o.id===$('object-select').value));});
$('focus-object').addEventListener('click',focusSelected);$('explode-object').addEventListener('click',inspect);$('clear-selection').addEventListener('click',()=>chooseScene(current));
$('viewer-retry').addEventListener('click',()=>location.reload());
$('viewer-fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{status('Fullscreen is unavailable in this browser.');}});
document.addEventListener('fullscreenchange',()=>{$('viewer-fullscreen').setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen');});
const touchKeys={forward:'KeyW',back:'KeyS',left:'KeyA',right:'KeyD',up:'KeyE',down:'KeyQ'};
document.querySelectorAll('[data-move]').forEach(b=>{b.addEventListener('pointerdown',e=>{if(!stage?.freeCameraEnabled)return;e.preventDefault();b.setPointerCapture(e.pointerId);stage.freeCamera.keys.add(touchKeys[b.dataset.move]);});for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>stage?.freeCamera.keys.delete(touchKeys[b.dataset.move]));});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncSuspension();if(detail&&inView)detail.dirty=true;},{rootMargin:'120px'}).observe(host);
document.addEventListener('visibilitychange',()=>{syncSuspension();if(detail&&!document.hidden)detail.dirty=true;});
window.addEventListener('pagehide',event=>{if(event.persisted)stage?.suspend(true);else{closeDetail();stage?.dispose();}});
window.addEventListener('pageshow',event=>{if(event.persisted){syncSuspension();if(detail)detail.dirty=true;}});
start();
