import {Box3, Scene, Sphere, Vector3} from 'three';
import {windowCones, seenThroughWindows, hasTransmissiveSurface} from './bedroom-window-visibility.mjs';
import {compactDevice} from './device-budget.mjs';

// Project the entire world-space bounds onto a solid wall panel. Cull only
// if every corner falls behind the panel and inside both of its edge pairs.
// The shell supplies a separate panel for each side of a real door or window.
export function behindPanel(box,eye,panel){
  const {axis,side,center,min,max}=panel;
  const offset=center-eye[axis],sign=Math.sign(offset),depth=Math.abs(offset);
  const near=((sign>0?box.min:box.max)[axis]-eye[axis])*sign;
  if(near<=depth+.02)return false;
  const far=((sign>0?box.max:box.min)[axis]-eye[axis])*sign;
  const t0=depth/far,t1=depth/near;
  for(const key of [side,'y']){
    const lo=box.min[key]-eye[key],hi=box.max[key]-eye[key];
    if(eye[key]+Math.min(lo*t0,lo*t1)<=min[key]+.02||eye[key]+Math.max(hi*t0,hi*t1)>=max[key]-.02)return false;
  }
  return true;
}

function solidPanels(walls,origin){
  return walls.filter(w=>/^(?:south_|north_|west_party_wall|east_party_wall|central_divider|bed_bath_partition|bedroom_front)/.test(w.id)).map(w=>{
    const axis=w.size[0]<w.size[2]?'x':'z',side=axis==='x'?'z':'x';
    const center=new Vector3(...w.center).add(origin),half=new Vector3(...w.size).multiplyScalar(.5);
    return {axis,side,center:center[axis],min:center.clone().sub(half),max:center.clone().add(half)};
  });
}

// During a gesture the room uses its last prepared materials, rigid batches
// and ink meshes. Keep the original objects and their world transforms so
// moving the camera still produces real parallax, including through the panes.
export function createBedroomMotionView(stage, windows, {compact=compactDevice}={}) {
  const scene=new Scene();
  scene.matrixWorldAutoUpdate=false;
  scene.userData.galleryMotion=true;
  const {renderer, core}=stage;
  const sources=new Map(),exterior=new Set(),exteriorInkOwners=new Set();
  for(const {partId,node} of stage.loaded.geometry.meshes.values()){
    if(/^(street_|building_)/.test(partId))exteriorInkOwners.add(node.uuid);
    if(node.isInstancedMesh||node.morphTargetInfluences?.length||stage.loaded.geometry.parts.get(partId)?.userData.street_vehicle)continue;
    sources.set(node.uuid,node);
    if(/^(street_|building_)/.test(partId))exterior.add(node);
  }
  const movingParts=[...stage.loaded.geometry.parts.values()].filter(p=>p.userData.street_vehicle);
  const eye=new Vector3(Infinity,Infinity,Infinity);
  let entries, filtered, panels, timer, active=false, lastFullTime, lastRefresh=0, lastCount=0, displayRatio;

  function capture() {
    const list=[], bounds=new Map();
    const restore=core.batches.begin();
    try{
      stage.scene.updateMatrixWorld(true);
      stage.scene.traverseVisible(node=>{
        if(!(node.isLight||node.isMesh||node.isLine||node.isPoints||node.isSprite))return;
        // Through the small phone window, exterior crease/hull passes cost
        // millions of vertices. Keep all outdoor surfaces and room ink while
        // moving; the normal renderer restores every exterior stroke at rest.
        if(compact&&exteriorInkOwners.has(node.galleryInkOwner??node.userData.labInkOwner))return;
        const source=sources.get(node.galleryInkOwner??node.userData.labInkOwner??node.uuid);
        let shape;
        if(source){
          shape=bounds.get(source);
          if(!shape){
            const g=source.geometry;
            if(!g.boundingBox)g.computeBoundingBox();
            const box=new Box3().copy(g.boundingBox).applyMatrix4(source.matrixWorld).expandByScalar(.04);
            shape={box,sphere:exterior.has(source)?box.getBoundingSphere(new Sphere()):null};
            bounds.set(source,shape);
          }
        }
        list.push({node,shape});
      });
      // These can become visible partway through a sunrise/sunset drag.
      for(const name of ['bedroom_window_scattering','bedroom_window_dust']){
        const node=stage.scene.getObjectByName(name);
        if(node&&!node.visible)list.push({node});
      }
    } finally {restore();}
    return list;
  }

  function finish() {
    clearTimeout(timer);
    if(!active)return;
    active=false;entries=filtered=undefined;scene.children.length=0;
    if(displayRatio!==undefined){renderer.setPixelRatio(displayRatio);displayRatio=undefined;}
    renderer.shadowMap.needsUpdate=true;
    stage.windowGlass.lastCapture=-100;
    stage.dirty=true;
  }
  return {
    get active(){return active;},
    sample(){
      if(!stage.seated)return;
      if(!active){
        active=true;lastFullTime=undefined;lastRefresh=performance.now();lastCount=stage.renderedFrames;
        if(compact){displayRatio=renderer.getPixelRatio();renderer.setPixelRatio(Math.min(1,displayRatio));}
      }
      clearTimeout(timer);timer=setTimeout(finish,compact?350:200);
    },
    finish,
    draw(minutes){
      if(!active||!stage.seated||!stage.renderedFrames)return false;
      // During touch gestures use Three's single transmission capture. The
      // settled frame still uses the original layered-glass renderer.
      if(!compact&&!entries&&hasTransmissiveSurface(stage.scene))return false;
      // Refit the whole exterior occasionally during sustained sun changes.
      // An orbit at the same time of day can share its original shadow map.
      const now=performance.now();
      if(!compact&&lastFullTime!==undefined&&Math.abs(minutes-lastFullTime)>=25&&now-lastRefresh>550&&stage.renderedFrames-lastCount>=8){
        lastRefresh=now;lastCount=stage.renderedFrames;lastFullTime=minutes;
        stage.windowGlass.lastCapture=-100;renderer.shadowMap.needsUpdate=true;entries=filtered=undefined;
        return false;
      }
      if(lastFullTime===undefined)lastFullTime=minutes;
      entries??=capture();
      const camera=stage.camera;
      stage.atmosphere.prepare(true,camera,stage.evening,stage.loaded.geometry.wrapper);
      stage.atmosphere.root.updateMatrixWorld();
      stage.resident?.root.updateMatrixWorld();
      for(const part of movingParts)part.updateMatrixWorld();
      core.lighting.group.updateMatrixWorld();
      core.contours.sync(camera);
      core.contours.group.updateMatrixWorld();
      scene.background=stage.scene.background;scene.environment=stage.scene.environment;
      scene.environmentIntensity=stage.scene.environmentIntensity;scene.fog=stage.scene.fog;
      if(!filtered||!eye.equals(camera.position)){
        eye.copy(camera.position);
        panels??=solidPanels(stage.loaded.galleryWalls??[],stage.homeOffset);
        const cones=windowCones(eye,stage.homeOffset,windows),visible=new Map();
        filtered=entries.filter(({shape})=>{
          if(!shape)return true;
          if(!visible.has(shape))visible.set(shape,(!shape.sphere||seenThroughWindows(shape.sphere,eye,cones))&&!panels.some(p=>behindPanel(shape.box,eye,p)));
          return visible.get(shape);
        });
      }
      scene.children.length=0;
      for(const {node} of filtered)if(node.visible&&node.userData.galleryMotionCount!==0)scene.children.push(node);
      const dirty=renderer.shadowMap.needsUpdate, transmission=renderer.transmissionResolutionScale;
      try{
        renderer.shadowMap.needsUpdate=false;
        if(compact){
          renderer.transmissionResolutionScale=.5;
          core.sketch.setViewport(stage.host.clientWidth,stage.host.clientHeight,renderer.getPixelRatio());
          core.shadowInk.setPixelRatio(renderer.getPixelRatio());
        }
        renderer.render(scene,camera);
      } finally {renderer.shadowMap.needsUpdate=dirty;renderer.transmissionResolutionScale=transmission;}
      return true;
    },
    dispose:finish,
  };
}
