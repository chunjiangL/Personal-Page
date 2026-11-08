import './browser-compat.mjs';
import * as T from 'three';
import {ApartmentStage} from '@sketch/apps/apartment/stage';
import {setDaylight} from '@sketch/apps/apartment/load-scene';
import {prepareAssets,releaseSceneSources} from './static-assets.js';
import {setDeskSeparation} from './desk-inspection.mjs';
import {createRoomDesk} from './desk-room-view.mjs';
import {createDeskCamera} from './desk-camera.mjs';
import {transferStats} from './asset-transfer.mjs';
import {contourCacheStats} from './contour-cache.mjs';
import {applyNightTraffic} from './night-traffic.mjs';
import {createFixedViewZoom,wheelZoomFactor,zoomLimits} from './fixed-view-zoom.mjs';
import {createViewOrbit,streetOpeningView,bedroomOpeningView} from './street-orbit.mjs';
import {applyGalleryLight} from './gallery-light.mjs';
import {applySkyTime, daylightAt, noon} from './daylight.mjs';
import {applyCornerLightBands} from './street-light-bands.mjs';
import {BedroomAtmosphere} from './bedroom-atmosphere.mjs';
import {limitBedroomDraws} from './bedroom-window-visibility.mjs';
import {createBedroomMotionView} from './bedroom-motion-view.mjs';
import {compactDevice} from './device-budget.mjs';
import {BEDROOM_WINDOW,LIVING_WINDOW} from '@sketch/assets/scenes/bedroom-window';

const $=id=>document.getElementById(id),host=$('sketch-canvas'),viewer=$('sketch-viewer'),overlay=$('inspection-canvas');
const names={neighborhood:'Neighborhood',bedroom:'Bedroom'},homeOffset=new T.Vector3(-2.05,1.55,1.58);
let stage,current='neighborhood',desk,detail,busy=false,inView=true,backgroundPending=false,frame=0,startupMS,firstFrameMS,loadedMode,resizeObserver;
const sceneLoads={},zoomViews=new Map([['neighborhood',streetOpeningView.zoom]]);
const streetAngles={yaw:streetOpeningView.yaw,pitch:streetOpeningView.pitch};
const bedroomAngles={yaw:bedroomOpeningView.yaw,pitch:bedroomOpeningView.pitch};
const openingZoom=scene=>scene==='neighborhood'?streetOpeningView.zoom:1;
let fixedZoom,streetOrbit,bedroomOrbit,cancelGesture,bedroomAir,motionView;
const lightAdjustment={strength:100,offset:0,minutes:noon};
let lightFrame=0,refitLight=false;
function applySceneLight(){
 const root=stage.loaded.geometry.wrapper;
 const day=daylightAt(lightAdjustment.minutes,stage.weather);
 const direction=applyGalleryLight(root,stage.core.lighting.group,stage.loaded.settings,lightAdjustment,stage.weather,stage.seated);
 if(direction)bedroomAir?.update(lightAdjustment.minutes,lightAdjustment.strength,direction);
 stage.galleryLowSun=day.height<.50;
 stage.galleryPenBlend=day.lowSun;
 applyCornerLightBands(root,stage.weather,day.lowSun);
 if(stage.atmosphere){
  applySkyTime(stage.atmosphere,lightAdjustment.minutes);
  stage.atmosphere.clouds.setGallerySun(lightAdjustment.offset+day.turn,day.height);
 }
 if(stage.streetNight && stage.weather!=='night'){
  // Fade the authored lamp lenses and street pools as daylight falls.
  const glow=day.lowSun*(1-.72*day.beam);
  stage.streetNight.dusk.value=glow;
  for(const light of stage.streetNight.root.children)if(light.isSpotLight)light.intensity=12*glow;
 }
 if(direction&&stage.weather==='night')stage.atmosphere.nightSky.root.material.uniforms.uMoon.value.copy(direction);
}
function syncTimeControl(){
 const time=$('light-time'),night=$('weather-select').value==='night',minutes=time.valueAsNumber;
 const clock=String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0');
 $('light-time-value').textContent=night?'Night':clock;
 time.disabled=busy||!stage?.ready||night;
 time.setAttribute('aria-valuetext',night?'Night':clock);
}
function updateLightControls(event){
 const strength=$('light-strength').valueAsNumber,offset=$('light-azimuth').valueAsNumber,minutes=$('light-time').valueAsNumber;
 if(event&&!busy&&!detail)motionView?.sample();
 if(offset!==lightAdjustment.offset||minutes!==lightAdjustment.minutes)refitLight=true;
 lightAdjustment.strength=strength;lightAdjustment.offset=offset;lightAdjustment.minutes=minutes;
 syncTimeControl();
 const angle=(offset>0?'+':'')+offset+'°';
 $('light-strength-value').textContent=strength+'%';$('light-azimuth-value').textContent=angle;
 $('light-strength').setAttribute('aria-valuetext',strength+'% of preset intensity');
 $('light-azimuth').setAttribute('aria-valuetext',angle+' from preset direction');
 if(!stage?.ready||lightFrame)return;
 lightFrame=requestAnimationFrame(flushSceneLight);
}
function flushSceneLight(){
  if(!lightFrame){
   if(refitLight&&!motionView?.active&&stage?.ready){stage.fitGalleryShadows();stage.renderer.shadowMap.needsUpdate=true;stage.dirty=true;refitLight=false;}
   return;
  }
  cancelAnimationFrame(lightFrame);
  lightFrame=0;
  if(!stage?.ready)return;
  applySceneLight();
  if(refitLight&&!(compactDevice&&motionView?.active)){stage.fitGalleryShadows();stage.renderer.shadowMap.needsUpdate=true;refitLight=false;}
  stage.dirty=true;
  if(detail){applyDetailLight();backgroundPending=true;syncSuspension();}
  report();
}
const activeOrbit=()=>stage?.ready&&!busy&&!detail&&(current==='bedroom'?bedroomOrbit:streetOrbit);
function zoomControls(){
 const disabled=busy||!stage?.ready||!!detail;
 $('viewer-zoom-in').disabled=disabled||fixedZoom?.target>=zoomLimits.max;
 $('viewer-zoom-out').disabled=disabled||fixedZoom?.target<=zoomLimits.min;
 $('viewer-zoom-reset').disabled=disabled;
 $('viewer-zoom-reset').textContent=Math.round((fixedZoom?.target??openingZoom(current))*100)+'%';
}
function captureSceneZoom(){
 // The observer can run again after zoom was applied. Use the authored street
 // FOV so the 80% opening lens is applied exactly once.
 fixedZoom.capture(current,current==='neighborhood'?stage.viewFov:stage.camera.fov);
 zoomControls();
}
function changeZoom(factor){
 if(busy||!stage?.ready||detail)return;
 if(factor===null){motionView?.finish();fixedZoom.set(openingZoom(current));activeOrbit().reset();}
 else fixedZoom.multiply(factor);
 zoomControls();report();
}
const loadTimings={};let phaseAt=performance.now(),phase='download';
function loadPhase(next){if(phase==='ready')return;const now=performance.now();loadTimings[phase]=Math.round((loadTimings[phase]||0)+now-phaseAt);phase=next;phaseAt=now;}
const startupAt=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const diagnostic=new URLSearchParams(location.search).has('qa')?document.createElement('output'):null;
if(diagnostic){diagnostic.id='viewer-diagnostics';diagnostic.hidden=true;viewer.append(diagnostic);}
const status=text=>{$('viewer-status').textContent=text;};
const loading=(show,text)=>{$('viewer-loading').hidden=!show;if(text)$('viewer-loading').querySelector('p').textContent=text;};
const syncSuspension=()=>stage?.suspend(document.hidden||!inView||busy||!!detail&&!backgroundPending);
function setBusy(value){busy=value;if(value)cancelGesture?.();for(const button of viewer.querySelectorAll('[data-scene], [data-object], #weather-select, .viewer-light input, #explode-object, #clear-selection'))button.disabled=value||!stage?.ready;syncTimeControl();zoomControls();syncSuspension();}
function report(){
 if(!diagnostic||!stage?.ready)return;
 const key=stage.core.lighting.group.getObjectByName('window');
 if(key)diagnostic.dataset.light=JSON.stringify({...lightAdjustment,intensity:key.intensity,direction:key.position.clone().sub(key.target.position).normalize().toArray(),color:key.color.getHexString(),fog:stage.atmosphere.galleryFog?.getHexString()});
 diagnostic.dataset.camera=JSON.stringify({zoom:fixedZoom?.value,targetZoom:fixedZoom?.target,fov:stage.camera.fov,orbit:current==='neighborhood'?streetAngles:bedroomAngles,calls:stage.renderer.info.render.calls,triangles:stage.renderer.info.render.triangles});
 diagnostic.textContent=JSON.stringify({ready:true,startupMS,firstFrameMS,loadTimings,loadedMode,sceneLoads,transfer:transferStats,contours:contourCacheStats(),vehicles:stage.loaded.building.streetLife.vehicles.map(v=>v.id),visibleVehicles:[...new Set([...stage.loaded.geometry.parts.values()].filter(p=>p.userData.street_vehicle&&p.visible).map(p=>p.userData.street_vehicle))],trafficPaused:stage.trafficPaused,scene:current,weather:stage.weather,camera:stage.camera.position.toArray(),target:stage.viewTarget.toArray(),mode:'bounded-orbit',windowView:stage.seated,objects:desk?.objects.map(o=>o.id),selection:detail?.object.id,detailParts:detail?.geometry.parts.size,exploded:detail?.goal===1,blurred:viewer.classList.contains('is-inspecting'),frames:stage.renderedFrames,resources:performance.getEntriesByType('resource').filter(r=>r.name.includes('/sketch-runtime/')).map(r=>({file:r.name.split('/sketch-runtime/')[1],bytes:r.transferSize,ms:Math.round(r.duration)}))});
}
function bedroomPose(){
 // Inside 302, facing the real window. Both chair feet and the whole desk
 // remain inside the frame; only FOV changes for a narrower viewport.
 stage.tween=undefined;stage.viewFov=62;stage.camera.fov=62;
 stage.camera.position.set(3.35,1.60,-.35).add(homeOffset);
 stage.viewTarget.set(1.95,1.05,2.50).add(homeOffset);
 if(stage.camera.aspect<1)stage.camera.fov=T.MathUtils.radToDeg(2*Math.atan(Math.tan(T.MathUtils.degToRad(31))/stage.camera.aspect));
 stage.camera.updateProjectionMatrix();
 // Pivot near the desk chair. The shorter arc clears the partition behind
 // the eye even at maximum downward pitch, while keeping the opening aim.
 bedroomOrbit.capture(homeOffset.y,.60);
}
function sceneCopy(){
 const street=current==='neighborhood';
 const help=street?'Drag or use the arrow keys to orbit the street corner. Scroll to zoom. Click the percentage to reset the view.':'Drag or use the arrow keys to orbit the desk. Scroll to zoom. Click a desk object to explore its parts.';
 $('viewer-help').textContent=help;
 stage.renderer.domElement.setAttribute('aria-label',names[current]+'. '+help);
 const resetLabel='Reset view';
 $('viewer-zoom-reset').setAttribute('aria-label',resetLabel);$('viewer-zoom-reset').title=resetLabel+' (0)';
 $('desk-objects').hidden=current!=='bedroom'||!!detail;status(names[current]);
}
function chooseScene(id){
 if(!stage?.ready||busy)return;
 motionView?.finish();
 cancelGesture?.();
 stage.renderer.domElement.style.cursor='';
 const requestedMode=id==='bedroom'?'full':'neighborhood';
 if(compactDevice&&loadedMode!==requestedMode){
  // A new document releases the previous JS/WASM/GPU ownership together.
  // Only an explicit scene click navigates; startup/failures never retry.
  const url=new URL(location);url.searchParams.set('scene',id);url.searchParams.set('weather',$('weather-select').value);
  location.replace(url);return;
 }
 if(id==='bedroom'&&loadedMode==='neighborhood'){void start(id);return;}
 closeDetail();current=id==='bedroom'?'bedroom':'neighborhood';stage.setFreeCamera(false);
 if(current==='bedroom'){stage.focusBedroomDetail('seated',false);bedroomPose();ensureDesk();desk.captureNext=true;}
 else stage.focusBuilding('exterior','all',false);
 captureSceneZoom();
 applyNightTraffic(stage);document.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===current)));
 sceneCopy();const url=new URL(location);url.searchParams.set('scene',current);history.replaceState(null,'',url);syncSuspension();report();
}
function ensureDesk(){
 if(desk)return;
 desk=createRoomDesk(stage);desk.snapshot=document.createElement('canvas');
 desk.snapshot.className='desk-backdrop';desk.snapshot.setAttribute('aria-hidden','true');desk.settings={output:{}};setDaylight(desk.settings,false);
 $('desk-objects').replaceChildren(...desk.objects.map(object=>{
  const button=document.createElement('button');button.type='button';button.dataset.object=object.id;button.textContent=object.label;
  button.addEventListener('click',()=>inspect(object));return button;
 }));
 // Register studio shader variants on the existing GPU context as soon as
 // the room materials are ready. The room and the inspector share vertices.
 if(!compactDevice){
  for(const o of desk.objects)o.geometry.wrapper.visible=true;
  const camera=new T.PerspectiveCamera(38,1,.001,100);
  stage.renderer.compileAsync(desk.scene,camera).catch(error=>console.warn('Desk shader warmup',error));
  for(const o of desk.objects)o.geometry.wrapper.visible=false;
 }
}
function backdropKey(){
 return [stage.weather,lightAdjustment.minutes,lightAdjustment.strength,lightAdjustment.offset,
  stage.camera.fov,stage.camera.aspect,...stage.camera.position.toArray(),...stage.camera.quaternion.toArray()].join('|');
}
function captureBackdrop(key){
 const canvas=stage.renderer.domElement,w=Math.min(canvas.width,384),h=Math.max(1,Math.round(w*canvas.height/canvas.width));
 if(desk.snapshot.width!==w||desk.snapshot.height!==h){desk.snapshot.width=w;desk.snapshot.height=h;}
 desk.snapshot.getContext('2d').drawImage(canvas,0,0,w,h);desk.captureNext=false;desk.backdropKey=key;
}
function setDetailPose(amount){
 detail.amount=amount;setDeskSeparation(detail.geometry,amount);
 detail.guides?.update(amount);detail.orbit?.follow();detail.dirty=true;
 const percent=Math.round(amount*100);
 $('desk-separation').value=String(percent);$('desk-separation').setAttribute('aria-valuetext',percent+'% separated');
}
function setDetailGoal(goal,immediate=false){
 if(!detail||busy)return;
 detail.goal=goal;
 if(immediate||reduced)setDetailPose(goal);
 $('explode-object').textContent=goal>0?'Assemble':'Explode';
 $('explode-object').setAttribute('aria-pressed',String(goal===1));report();
}
function applyDetailLight(){
 applyGalleryLight(detail.geometry.wrapper,desk.rig,desk.settings,{...lightAdjustment,minutes:noon},'sunny');
 detail.dirty=true;
}
const roomClear=new T.Color();
function drawDetail(){
 const renderer=stage.renderer,shadow=renderer.shadowMap.needsUpdate,active=bedroomAir.uniforms.uRoomActive;
 const roomActive=active.value,alpha=renderer.getClearAlpha();renderer.getClearColor(roomClear);
 try{
  renderer.shadowMap.needsUpdate=false;active.value=0;renderer.setClearColor(0x000000,0);
  renderer.render(desk.scene,detail.camera);detail.dirty=false;
 }finally{active.value=roomActive;renderer.shadowMap.needsUpdate=shadow;renderer.setClearColor(roomClear,alpha);}
}
function inspect(object){
 if(busy||current!=='bedroom'||!desk)return;
 if(detail)closeDetail();cancelGesture?.();
 const canvas=stage.renderer.domElement,w=host.clientWidth,h=host.clientHeight;
 const camera=new T.PerspectiveCamera(38,w/h,.001,100);
 detail={object,geometry:object.geometry,guides:object.guides,camera,amount:reduced?1:0,goal:1,dirty:true,last:performance.now()};
 try{
  object.geometry.wrapper.visible=true;
  for(const {mesh,source} of desk.bindings)mesh.material=source.material;
  desk.scene.environment=stage.scene.environment;desk.resize(w,h);applyDetailLight();
  detail.orbit=createDeskCamera(camera,overlay,object.geometry,object.envelope,object.id,()=>{detail.dirty=true;},name=>{$('selected-part').textContent=name;});
  setDetailPose(detail.amount);
  host.append(desk.snapshot);overlay.append(canvas);
  canvas.tabIndex=-1;overlay.hidden=false;viewer.classList.add('is-inspecting');
  overlay.setAttribute('aria-label',object.label+' component view');
  $('desk-objects').hidden=true;$('selection-panel').hidden=false;$('selected-name').textContent=object.label;
  $('explode-object').textContent='Assemble';$('explode-object').setAttribute('aria-pressed','true');
  $('viewer-help').textContent='Drag or use the arrow keys to rotate. Scroll or pinch to zoom. Select a part to focus.';status(object.label);
  overlay.focus({preventScroll:true});zoomControls();report();
  // Present the first interactive pose in the click handler. A stationary
  // room already has its backdrop, so its expensive render loop can sleep.
  drawDetail();backgroundPending=desk.backdropKey!==backdropKey();stage.dirty=true;syncSuspension();
  const draw=time=>{
   if(!detail)return;frame=requestAnimationFrame(draw);const dt=Math.min(.05,(time-detail.last)/1000);detail.last=time;
   if(document.hidden||!inView)return;
   if(detail.amount!==detail.goal){const next=T.MathUtils.damp(detail.amount,detail.goal,8,dt);setDetailPose(Math.abs(next-detail.goal)<.002?detail.goal:next);}
   if(detail.dirty)drawDetail();
  };frame=requestAnimationFrame(draw);
 }catch(error){console.error(error);closeDetail();status('This object could not be opened. Please try again.');}
}
function closeDetail(){
 const focusObject=detail&&(overlay.contains(document.activeElement)||$('selection-panel').contains(document.activeElement))?detail.object.id:null;
 cancelAnimationFrame(frame);
 if(detail){
  detail.orbit?.dispose();detail.geometry.wrapper.visible=false;detail=undefined;
  host.append(stage.renderer.domElement);stage.renderer.domElement.tabIndex=0;
 }
 overlay.hidden=true;viewer.classList.remove('is-inspecting');$('selection-panel').hidden=true;backgroundPending=false;
 if(stage?.ready){sceneCopy();zoomControls();stage.dirty=true;syncSuspension();report();}
 if(focusObject&&current==='bedroom'&&!busy)viewer.querySelector(`[data-object="${focusObject}"]`)?.focus({preventScroll:true});
}
function pick(event){
 if(current!=='bedroom'||!desk||detail||busy)return;
 const rect=stage.renderer.domElement.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((event.clientX-rect.left)/rect.width*2-1,1-(event.clientY-rect.top)/rect.height*2),stage.camera);
 const hit=ray.intersectObjects(desk.objects.flatMap(o=>o.pickMeshes),false)[0];
 if(!hit)return;
 ray.far=hit.distance+.01;
 const visible=node=>{for(let p=node;p;p=p.parent)if(!p.visible)return false;return !node.userData.labGhost;};
 const homeMeshes=stage.loaded.homePartIds.flatMap(id=>stage.loaded.geometry.parts.get(id)?.children||[]);
 const occluder=ray.intersectObjects(homeMeshes.filter(visible),false)[0];
 if(occluder&&hit.distance>occluder.distance+.01)return;
 return desk.objects.find(o=>o.pickMeshes.includes(hit.object));
}
async function start(requested=new URLSearchParams(location.search).get('scene')){
 const desired=requested==='bedroom'?'bedroom':'neighborhood',mode=desired==='bedroom'?'full':'neighborhood',loadAt=performance.now(),weather=$('weather-select').value;
 if(busy)return;setBusy(true);
 try{
  loading(true,desired==='bedroom'?'Loading the bedroom':'Loading the neighborhood');$('viewer-error').hidden=true;
  closeDetail();desk?.snapshot.remove();
  resizeObserver?.disconnect();desk?.dispose();desk=undefined;motionView?.dispose();motionView=undefined;bedroomAir?.dispose();bedroomAir=undefined;stage?.dispose();
  if(compactDevice)stage?.renderer.forceContextLoss();
  stage=undefined;
  if(diagnostic)window.__lifeStage=undefined;
  await prepareAssets((done,total)=>{$('viewer-progress').max=total;$('viewer-progress').value=done;},mode);$('viewer-progress').removeAttribute('value');
  loadPhase('renderer');stage=new ApartmentStage(host);fixedZoom=createFixedViewZoom(stage.camera,()=>{stage.dirty=true;},{reduced,views:zoomViews});
  if(diagnostic)window.__lifeStage=stage;
  stage.onBeforeFrame=dt=>{stage.core.galleryBedroom=stage.seated;flushSceneLight();applyNightTraffic(stage);if(fixedZoom.update(dt))motionView?.sample();bedroomAir?.tick(dt);if(bedroomAir)bedroomAir.uniforms.uPixelRatio.value=stage.renderer.getPixelRatio();};
  stage.onGalleryLightBounds=applySceneLight;
  const viewChanged=()=>{stage.dirty=true;};
  streetOrbit=createViewOrbit(stage.camera,stage.viewTarget,streetAngles,viewChanged);
  bedroomOrbit=createViewOrbit(stage.camera,stage.viewTarget,bedroomAngles,viewChanged,bedroomOpeningView);
  stage.onStreetFramed=()=>streetOrbit.capture(stage.loaded.building.groundY);
  stage.renderer.domElement.setAttribute('aria-label',names[desired]+' scene');
  await stage.initialize(label=>{loadPhase(label.replace(/\d+%/,'geometry'));const percentage=label.match(/\d+%/);loading(true,percentage?'Preparing original materials · '+percentage[0]:'Preparing the '+desired);});loadPhase('first-render');
  releaseSceneSources();
  if(mode==='full'){
   bedroomAir=new BedroomAtmosphere(stage,reduced);limitBedroomDraws(stage);
   motionView=createBedroomMotionView(stage,[BEDROOM_WINDOW,LIVING_WINDOW]);
   stage.drawGalleryMotion=()=>!detail&&!busy&&motionView.draw(lightAdjustment.minutes);
  }
  loadedMode=mode;let lastReport=0,viewRendered=false;stage.onRender=()=>{if(!viewRendered){viewRendered=true;sceneLoads[desired]=Math.round(performance.now()-loadAt);loading(false);}if(!firstFrameMS){firstFrameMS=Math.round(performance.now()-startupAt);loadPhase('ready');}
   if(current==='bedroom'&&desk&&!motionView?.active){const key=backdropKey();if(desk.captureNext||backgroundPending||key!==desk.backdropKey)captureBackdrop(key);}
   if(!detail&&desk?.snapshot.parentNode)desk.snapshot.remove();
   if(backgroundPending){backgroundPending=false;if(detail)drawDetail();syncSuspension();}if(performance.now()-lastReport>500){report();lastReport=performance.now();}};
  const canvas=stage.renderer.domElement,pointers=new Set();let down,multi=false;
  canvas.addEventListener('wheel',event=>{if(busy||detail||!stage.ready)return;event.preventDefault();changeZoom(wheelZoomFactor(event.deltaY,event.deltaMode,canvas.clientHeight));},{passive:false});
  const arrowTurns={ArrowLeft:[1,0],ArrowRight:[-1,0],ArrowUp:[0,1],ArrowDown:[0,-1]};
  canvas.addEventListener('keydown',event=>{
   if(busy||detail||event.altKey||event.ctrlKey||event.metaKey)return;
   if(activeOrbit()&&Object.hasOwn(arrowTurns,event.key)){event.preventDefault();motionView?.sample();activeOrbit().turn(...arrowTurns[event.key]);return;}
   if(['+','=','-','_','0'].includes(event.key)){event.preventDefault();changeZoom(event.key==='0'?null:['+','='].includes(event.key)?1.2:1/1.2);}
  });
  cancelGesture=()=>{motionView?.finish();pointers.clear();down=undefined;multi=false;host.removeAttribute('data-dragging');};
  canvas.addEventListener('blur',cancelGesture);
  canvas.addEventListener('pointerdown',event=>{
   if(!pointers.size)multi=false;
   pointers.add(event.pointerId);multi||=pointers.size>1;
   if(multi){down=undefined;host.removeAttribute('data-dragging');return;}
   down={id:event.pointerId,x:event.clientX,y:event.clientY,lastX:event.clientX,lastY:event.clientY,button:event.button};
   if(activeOrbit()&&event.button===0){canvas.focus({preventScroll:true});}
  });
  canvas.addEventListener('pointerup',event=>{
   pointers.delete(event.pointerId);const origin=down;down=undefined;host.removeAttribute('data-dragging');
   if(origin?.dragged)motionView?.finish();
   if(current!=='bedroom'||!origin||origin.id!==event.pointerId||multi||origin.button!==0||origin.dragged||Math.hypot(event.clientX-origin.x,event.clientY-origin.y)>5)return;
   const object=pick(event);if(object)inspect(object);
  });
  for(const event of ['pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>{
   pointers.delete(e.pointerId);if(down?.id===e.pointerId){motionView?.finish();down=undefined;host.removeAttribute('data-dragging');}
  });
  let lastHover=0;
  canvas.addEventListener('pointermove',event=>{
   const orbit=activeOrbit();
   if(orbit&&down?.id===event.pointerId&&down.button===0&&!multi){
    if(!down.dragged&&Math.hypot(event.clientX-down.x,event.clientY-down.y)<5)return;
    down.dragged=true;host.setAttribute('data-dragging','');canvas.style.cursor='';motionView?.sample();
    orbit.drag(event.clientX-down.lastX,event.clientY-down.lastY,canvas.clientHeight);
    down.lastX=event.clientX;down.lastY=event.clientY;
   }else if(current==='bedroom'&&!down&&event.pointerType!=='touch'&&performance.now()-lastHover>100){
    lastHover=performance.now();canvas.style.cursor=pick(event)?'pointer':'';
   }
  });
  resizeObserver=new ResizeObserver(()=>{
   motionView?.finish();
   if(current==='bedroom')bedroomPose();
   captureSceneZoom();
   if(detail){desk.resize(host.clientWidth,host.clientHeight);detail.orbit.resize(host.clientWidth/host.clientHeight);backgroundPending=true;syncSuspension();}
  });resizeObserver.observe(host);
  setBusy(false);$('viewer-fullscreen').disabled=false;startupMS??=Math.round(performance.now()-startupAt);loading(true,'Rendering the '+desired);
  chooseScene(desired);if(weather!=='sunny')stage.setWeather(weather);applyNightTraffic(stage);report();
 }catch(error){console.error(error);setBusy(false);loading(false);$('viewer-error').hidden=false;status('Scene loading failed.');window.galleryDemo?.fail(error);if(diagnostic)diagnostic.textContent=JSON.stringify({error:error.message});}
}
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>chooseScene(button.dataset.scene)));
$('viewer-zoom-in').addEventListener('click',()=>changeZoom(1.2));
$('viewer-zoom-out').addEventListener('click',()=>changeZoom(1/1.2));
$('viewer-zoom-reset').addEventListener('click',()=>changeZoom(null));
for(const input of viewer.querySelectorAll('.viewer-light input')){
 input.addEventListener('input',updateLightControls);
 for(const event of ['pointerup','pointercancel','blur'])input.addEventListener(event,()=>motionView?.finish());
}
const timeSlider=$('light-time');
const linkedTime=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(new URL(location.href).searchParams.get('time')??'');
if(linkedTime){
 const minutes=Number(linkedTime[1])*60+Number(linkedTime[2]);
 if(minutes>=Number(timeSlider.min)&&minutes<=Number(timeSlider.max))timeSlider.value=String(minutes);
}
timeSlider.addEventListener('change',()=>{
 const url=new URL(location.href);
 if(timeSlider.valueAsNumber===noon)url.searchParams.delete('time');
 else url.searchParams.set('time',$('light-time-value').textContent);
 history.replaceState(null,'',url);
});
updateLightControls();
const linkedWeather=new URL(location.href).searchParams.get('weather');
if([...$('weather-select').options].some(option=>option.value===linkedWeather))$('weather-select').value=linkedWeather;
$('weather-select').addEventListener('change',()=>{if(busy||!stage?.ready)return;motionView?.finish();closeDetail();stage.setWeather($('weather-select').value);syncTimeControl();applyNightTraffic(stage);status(names[current]+' · '+$('weather-select').selectedOptions[0].text);report();});
$('explode-object').addEventListener('click',()=>setDetailGoal(detail?.goal>0?0:1));
$('desk-separation').addEventListener('input',event=>setDetailGoal(event.target.valueAsNumber/100,true));
$('reset-detail-view').addEventListener('click',()=>detail?.orbit.reset());
$('clear-selection').addEventListener('click',closeDetail);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&detail&&!busy)closeDetail();});
$('viewer-retry').addEventListener('click',()=>location.reload());
$('viewer-fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{status('Fullscreen is unavailable in this browser.');}});
document.addEventListener('fullscreenchange',()=>{const full=!!document.fullscreenElement;$('viewer-fullscreen').setAttribute('aria-label',full?'Exit fullscreen':'Enter fullscreen');$('viewer-fullscreen').querySelector('span').textContent=full?'Exit fullscreen':'Fullscreen';});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncSuspension();if(detail&&inView)detail.dirty=true;},{rootMargin:'120px'}).observe(host);
window.addEventListener('blur',()=>cancelGesture?.());
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelGesture?.();syncSuspension();if(detail&&!document.hidden)detail.dirty=true;});
window.addEventListener('pagehide',event=>{if(event.persisted)stage?.suspend(true);else{resizeObserver?.disconnect();closeDetail();desk?.dispose();motionView?.dispose();bedroomAir?.dispose();stage?.dispose();}});
window.addEventListener('pageshow',event=>{if(event.persisted){syncSuspension();if(detail)detail.dirty=true;}});
start();
