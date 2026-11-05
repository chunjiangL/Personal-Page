import * as T from 'three';
import {ApartmentStage} from '@sketch/apps/apartment/stage';
import {GeometryStage,loadAssetRoot} from '@sketch/rendering/asset/geometry';
import {AssetRenderCore} from '@sketch/rendering/asset/render-core';
import {setDaylight} from '@sketch/apps/apartment/load-scene';
import {prepareAssets,assemblyData} from './static-assets.js';
import {createDeskObjects,makeDetailRoot} from './desk-inspection.mjs';
import {framedCamera} from './scene-math.mjs';
import {transferStats} from './asset-transfer.mjs';
import {contourCacheStats} from './contour-cache.mjs';
import {applyNightTraffic} from './night-traffic.mjs';

const $=id=>document.getElementById(id),host=$('sketch-canvas'),viewer=$('sketch-viewer'),overlay=$('inspection-canvas');
const names={neighborhood:'Neighborhood',bedroom:'Bedroom'},homeOffset=new T.Vector3(-2.05,1.55,1.58);
let stage,current='neighborhood',desk,bedroomRecord,deskPromise,detail,detailRenderer,busy=false,inView=true,backgroundPending=false,frame=0,startupMS,firstFrameMS,loadedMode,resizeObserver;
const sceneLoads={};
const loadTimings={};let phaseAt=performance.now(),phase='download';
function loadPhase(next){if(phase==='ready')return;const now=performance.now();loadTimings[phase]=Math.round((loadTimings[phase]||0)+now-phaseAt);phase=next;phaseAt=now;}
const startupAt=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const diagnostic=new URLSearchParams(location.search).has('qa')?document.createElement('output'):null;
if(diagnostic){diagnostic.id='viewer-diagnostics';diagnostic.hidden=true;viewer.append(diagnostic);}
const status=text=>{$('viewer-status').textContent=text;};
const loading=(show,text)=>{$('viewer-loading').hidden=!show;if(text)$('viewer-loading').querySelector('p').textContent=text;};
const syncSuspension=()=>stage?.suspend(document.hidden||!inView||busy||!!detail&&!backgroundPending);
function setBusy(value){busy=value;for(const button of viewer.querySelectorAll('[data-scene], [data-object], #weather-select, #explode-object, #clear-selection'))button.disabled=value||!stage?.ready;syncSuspension();}
function report(){
 if(!diagnostic||!stage?.ready)return;
 diagnostic.textContent=JSON.stringify({ready:true,startupMS,firstFrameMS,loadTimings,loadedMode,sceneLoads,transfer:transferStats,contours:contourCacheStats(),vehicles:stage.loaded.building.streetLife.vehicles.map(v=>v.id),visibleVehicles:[...new Set([...stage.loaded.geometry.parts.values()].filter(p=>p.userData.street_vehicle&&p.visible).map(p=>p.userData.street_vehicle))],trafficPaused:stage.trafficPaused,scene:current,weather:stage.weather,camera:stage.camera.position.toArray(),target:stage.viewTarget.toArray(),mode:'fixed',windowView:stage.seated,objects:desk?.objects.map(o=>o.id),selection:detail?.object.id,detailParts:detail?.geometry.parts.size,exploded:detail?.goal===1,blurred:viewer.classList.contains('is-inspecting'),frames:stage.renderedFrames,resources:performance.getEntriesByType('resource').filter(r=>r.name.includes('/sketch-runtime/')).map(r=>({file:r.name.split('/sketch-runtime/')[1],bytes:r.transferSize,ms:Math.round(r.duration)}))});
}
function bedroomPose(){
 // Inside 302, facing the real window. Both chair feet and the whole desk
 // remain inside the frame; only FOV changes for a narrower viewport.
 stage.tween=undefined;stage.viewFov=62;stage.camera.fov=62;
 stage.camera.position.set(3.35,1.60,-.35).add(homeOffset);
 stage.viewTarget.set(1.95,1.05,2.50).add(homeOffset);
 if(stage.camera.aspect<1)stage.camera.fov=T.MathUtils.radToDeg(2*Math.atan(Math.tan(T.MathUtils.degToRad(31))/stage.camera.aspect));
 stage.camera.updateProjectionMatrix();stage.camera.lookAt(stage.viewTarget);stage.camera.updateMatrixWorld(true);stage.dirty=true;
}
function sceneCopy(){
 $('viewer-help').textContent=current==='bedroom'?'Click an object on the desk to explore its parts.':'Change the weather to see the neighborhood in a different light.';
 $('desk-objects').hidden=current!=='bedroom'||!!detail;status(names[current]);
}
function chooseScene(id){
 if(!stage?.ready||busy)return;
 if(id==='bedroom'&&loadedMode==='neighborhood'){void start('bedroom');return;}
 closeDetail();current=id==='bedroom'?'bedroom':'neighborhood';stage.setFreeCamera(false);
 if(current==='bedroom'){stage.focusBedroomDetail('seated',false);bedroomPose();ensureDesk().catch(error=>{console.error(error);status('The desk objects could not be loaded.');});}
 else stage.focusBuilding('exterior','all',false);
 applyNightTraffic(stage);document.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===current)));
 sceneCopy();const url=new URL(location);url.searchParams.set('scene',current);history.replaceState(null,'',url);syncSuspension();report();
}
async function ensureDesk(){
 return deskPromise??=(async()=>{
  const {bytes,record}=await assemblyData('apartment_302_bedroom');bedroomRecord=record;
  const {root}=await loadAssetRoot(bytes);desk=createDeskObjects(root,homeOffset);
  $('desk-objects').replaceChildren(...desk.objects.map(object=>{const button=document.createElement('button');button.type='button';button.dataset.object=object.id;button.textContent=object.label;button.addEventListener('click',()=>inspect(object));return button;}));report();return desk;
 })().catch(error=>{deskPromise=undefined;throw error;});
}
function fitDetail(){
 if(!detail)return;
 const {geometry,camera}=detail,amount=detail.amount;
 if(!detail.bounds){geometry.layout('assembled',0);detail.bounds=new T.Box3().setFromObject(geometry.root);geometry.layout('exploded',1);detail.bounds.union(new T.Box3().setFromObject(geometry.root));}
 const pose=framedCamera(detail.bounds,new T.Vector3(.8,.48,-1.35),38,camera.aspect,1.12);
 camera.position.copy(pose.position);camera.lookAt(pose.target);camera.updateMatrixWorld(true);geometry.layout('exploded',amount);detail.dirty=true;
}
function applyDetail(){detail.core.apply(detail.settings);detail.scene.background=null;detail.core.ground.visible=false;detailRenderer.setClearColor(0x000000,0);detail.dirty=true;}
async function inspect(object){
 if(busy||current!=='bedroom')return;closeDetail();setBusy(true);loading(true,'Opening '+object.label);
 let geometry,core;
 try{
  const root=makeDetailRoot(object);geometry=await GeometryStage.create(root,'desk_'+object.id);
  detailRenderer??=new T.WebGLRenderer({alpha:true,antialias:true});detailRenderer.setPixelRatio(Math.min(devicePixelRatio,1.5));detailRenderer.setSize(host.clientWidth,host.clientHeight);
  if(!detailRenderer.domElement.parentNode)overlay.append(detailRenderer.domElement);
  detailRenderer.domElement.setAttribute('aria-label',object.label+' component view');
  const scene=new T.Scene();scene.add(geometry.wrapper);
  const settings=structuredClone(stage.loaded.settings);setDaylight(settings,stage.weather==='night'||stage.weather==='sunset');settings.inspection.layout='exploded';settings.appearance.resources={...settings.appearance.resources,...bedroomRecord.resources};
  core=new AssetRenderCore(detailRenderer,scene,geometry,bedroomRecord.sketchByMaterial,bedroomRecord.appearanceByMesh);core.apply(settings);await core.surface.prepare(settings);detailRenderer.setSize(host.clientWidth,host.clientHeight);
  const camera=new T.PerspectiveCamera(38,host.clientWidth/host.clientHeight,.001,1000);
  detail={object,geometry,scene,settings,core,camera,amount:reduced?1:0,goal:1,dirty:true,last:performance.now()};applyDetail();fitDetail();
  overlay.hidden=false;viewer.classList.add('is-inspecting');$('desk-objects').hidden=true;$('selection-panel').hidden=false;$('selected-name').textContent=object.label;
  // CSS blur changes the canvas compositing surface. Paint the room once after
  // that transition before freezing it behind the transparent detail renderer.
  backgroundPending=true;stage.dirty=true;
  $('explode-object').textContent='Assemble';$('explode-object').setAttribute('aria-pressed','true');$('viewer-help').textContent='A closer look at the modeled parts.';status(object.label);
  const draw=time=>{
   if(!detail)return;frame=requestAnimationFrame(draw);const dt=Math.min(.05,(time-detail.last)/1000);detail.last=time;
   if(document.hidden||!inView)return;
   if(Math.abs(detail.amount-detail.goal)>.002){detail.amount=reduced?detail.goal:T.MathUtils.damp(detail.amount,detail.goal,8,dt);if(Math.abs(detail.amount-detail.goal)<.002)detail.amount=detail.goal;geometry.layout('exploded',detail.amount);detail.dirty=true;}
   if(detail.dirty||core.needsRefinement){core.render(camera,host.clientWidth,host.clientHeight);detail.dirty=false;}
  };frame=requestAnimationFrame(draw);
 }catch(error){console.error(error);if(!detail){core?.dispose();geometry?.dispose();}closeDetail();status('This object could not be opened. Please try again.');}
 finally{setBusy(false);loading(false);report();}
}
function closeDetail(){
 cancelAnimationFrame(frame);if(detail){detail.core.dispose();detail.geometry.dispose();detail=undefined;}
 overlay.hidden=true;viewer.classList.remove('is-inspecting');$('selection-panel').hidden=true;backgroundPending=false;
 if(stage?.ready){sceneCopy();stage.dirty=true;syncSuspension();report();}
}
function pick(event){
 if(current!=='bedroom'||!desk||detail||busy)return;
 const rect=stage.renderer.domElement.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((event.clientX-rect.left)/rect.width*2-1,1-(event.clientY-rect.top)/rect.height*2),stage.camera);
 const visible=node=>{for(let p=node;p;p=p.parent)if(!p.visible)return false;return !node.userData.labGhost;};
 const homeMeshes=stage.loaded.homePartIds.flatMap(id=>stage.loaded.geometry.parts.get(id)?.children||[]);
 const occluder=ray.intersectObjects(homeMeshes.filter(visible),false)[0];
 const hits=ray.intersectObjects(desk.objects.flatMap(o=>o.pickMeshes),false),hit=hits[0];
 if(!hit||occluder&&hit.distance>occluder.distance+.01)return;
 return desk.objects.find(o=>o.pickMeshes.includes(hit.object));
}
async function start(requested=new URLSearchParams(location.search).get('scene')){
 const desired=requested==='bedroom'?'bedroom':'neighborhood',mode=desired==='bedroom'?'full':'neighborhood',loadAt=performance.now(),weather=$('weather-select').value;
 if(busy)return;setBusy(true);
 try{
  loading(true,desired==='bedroom'?'Loading the bedroom':'Loading the neighborhood');$('viewer-error').hidden=true;
  await prepareAssets((done,total)=>{$('viewer-progress').max=total;$('viewer-progress').value=done;},mode);$('viewer-progress').removeAttribute('value');
  resizeObserver?.disconnect();stage?.dispose();
  loadPhase('renderer');stage=new ApartmentStage(host);stage.onBeforeFrame=()=>applyNightTraffic(stage);stage.renderer.domElement.setAttribute('aria-label','Fixed view of Sketch Game. In Bedroom, click a desk object to explore its parts.');
  await stage.initialize(label=>{loadPhase(label.replace(/\d+%/,'geometry'));const percentage=label.match(/\d+%/);loading(true,percentage?'Preparing original materials · '+percentage[0]:'Preparing the '+desired);});loadPhase('first-render');
  loadedMode=mode;let lastReport=0,viewRendered=false;stage.onRender=()=>{if(!viewRendered){viewRendered=true;sceneLoads[desired]=Math.round(performance.now()-loadAt);loading(false);}if(!firstFrameMS){firstFrameMS=Math.round(performance.now()-startupAt);loadPhase('ready');}if(backgroundPending){backgroundPending=false;syncSuspension();}if(performance.now()-lastReport>500){report();lastReport=performance.now();}};
  const canvas=stage.renderer.domElement,pointers=new Set();let down,multi=false;
  canvas.addEventListener('pointerdown',event=>{if(!pointers.size)multi=false;pointers.add(event.pointerId);multi||=pointers.size>1;down={x:event.clientX,y:event.clientY,button:event.button};});
  canvas.addEventListener('pointerup',event=>{pointers.delete(event.pointerId);const origin=down;down=undefined;if(!origin||multi||origin.button!==0||Math.hypot(event.clientX-origin.x,event.clientY-origin.y)>5)return;const object=pick(event);if(object)inspect(object);});
  for(const event of ['pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>{pointers.delete(e.pointerId);down=undefined;});
  let lastHover=0;canvas.addEventListener('pointermove',event=>{if(!down&&event.pointerType!=='touch'&&performance.now()-lastHover>100){lastHover=performance.now();canvas.style.cursor=pick(event)?'pointer':'default';}});
  resizeObserver=new ResizeObserver(()=>{
   if(current==='bedroom')bedroomPose();
   if(detail){detailRenderer.setSize(host.clientWidth,host.clientHeight);detail.camera.aspect=host.clientWidth/host.clientHeight;detail.camera.updateProjectionMatrix();fitDetail();backgroundPending=true;syncSuspension();}
  });resizeObserver.observe(host);
  setBusy(false);$('viewer-fullscreen').disabled=false;startupMS??=Math.round(performance.now()-startupAt);loading(true,'Rendering the '+desired);
  chooseScene(desired);if(weather!=='sunny')stage.setWeather(weather);applyNightTraffic(stage);report();
 }catch(error){console.error(error);setBusy(false);loading(false);$('viewer-error').hidden=false;status('Scene loading failed.');if(diagnostic)diagnostic.textContent=JSON.stringify({error:error.message});}
}
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>chooseScene(button.dataset.scene)));
$('weather-select').addEventListener('change',()=>{if(busy||!stage?.ready)return;closeDetail();stage.setWeather($('weather-select').value);applyNightTraffic(stage);status(names[current]+' · '+$('weather-select').selectedOptions[0].text);report();});
$('explode-object').addEventListener('click',()=>{if(!detail||busy)return;detail.goal=1-detail.goal;detail.settings.inspection.layout=detail.goal?'exploded':'assembled';applyDetail();fitDetail();$('explode-object').textContent=detail.goal?'Assemble':'Explode';$('explode-object').setAttribute('aria-pressed',String(!!detail.goal));report();});
$('clear-selection').addEventListener('click',closeDetail);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&detail&&!busy)closeDetail();});
$('viewer-retry').addEventListener('click',()=>location.reload());
$('viewer-fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{status('Fullscreen is unavailable in this browser.');}});
document.addEventListener('fullscreenchange',()=>{const full=!!document.fullscreenElement;$('viewer-fullscreen').setAttribute('aria-label',full?'Exit fullscreen':'Enter fullscreen');$('viewer-fullscreen').querySelector('span').textContent=full?'Exit fullscreen':'Fullscreen';});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncSuspension();if(detail&&inView)detail.dirty=true;},{rootMargin:'120px'}).observe(host);
document.addEventListener('visibilitychange',()=>{syncSuspension();if(detail&&!document.hidden)detail.dirty=true;});
window.addEventListener('pagehide',event=>{if(event.persisted)stage?.suspend(true);else{resizeObserver?.disconnect();closeDetail();desk?.dispose();stage?.dispose();detailRenderer?.dispose();}});
window.addEventListener('pageshow',event=>{if(event.persisted){syncSuspension();if(detail)detail.dirty=true;}});
start();
