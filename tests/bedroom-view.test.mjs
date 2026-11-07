import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3, Group, Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshStandardMaterial, Sphere, Vector3} from 'three';
import {windowCones, seenThroughWindows, orderWindowInstances, limitBedroomDraws} from '../scripts/viewer/bedroom-window-visibility.mjs';
import {behindPanel, createBedroomMotionView} from '../scripts/viewer/bedroom-motion-view.mjs';

test('both window openings retain silhouettes grazing the sill or jamb',()=>{
  const eye=new Vector3(), pane={x:0,z:2,width:2,bottom:-1,top:1};
  const cones=windowCones(eye,new Vector3(),[pane,{...pane,x:-3}]);
  const seen=(x,y,z,r=.01)=>seenThroughWindows(new Sphere(new Vector3(x,y,z),r),eye,cones);
  assert.ok(seen(0,0,6)&&seen(-9,0,6));
  assert.ok(seen(3.3,0,6,.3)&&seen(0,-3.3,6,.3));
  assert.ok(!seen(5,0,6)&&!seen(0,-5,6)&&!seen(0,0,-6));
});

test('the color pass trims instance counts for the room only and restores them even on draw errors',()=>{
  const camera={}, geometry={instanceCount:9}, counts=[];
  const stage={seated:true,camera,renderer:{renderBufferDirect(cam,scene,g,m,o){
    counts.push(o.isInstancedMesh?o.count:g.instanceCount);
    if(m==='fail')throw Error('draw');
  }}};
  limitBedroomDraws(stage);
  const obj={isInstancedMesh:true,count:9,userData:{galleryWindowCount:2}};
  const draw=(cam,material)=>stage.renderer.renderBufferDirect(cam,{},geometry,material,obj);
  draw(camera);draw({});assert.equal(obj.count,9);
  obj.isInstancedMesh=false;assert.throws(()=>draw(camera,'fail'));assert.equal(geometry.instanceCount,9);
  stage.seated=false;draw(camera);assert.deepEqual(counts,[2,9,2,9]);
});

test('only whole bounds behind painted wall panels are culled, including when viewed from the other side',()=>{
  const panel={axis:'z',side:'x',center:2,min:new Vector3(-1,-1,2),max:new Vector3(1,1,2)};
  const box=(x,z)=>new Box3(new Vector3(x-.1,-.1,z-.1),new Vector3(x+.1,.1,z+.1));
  assert.equal(behindPanel(box(0,4),new Vector3(),panel),true);
  assert.equal(behindPanel(box(2,4),new Vector3(),panel),false);
  assert.equal(behindPanel(box(0,1.5),new Vector3(),panel),false);
  assert.equal(behindPanel(box(0,0),new Vector3(0,0,4),panel),true);
});

test('the outdoor motion LOD retains every placement for settled and shadow draws',()=>{
  const camera=new PerspectiveCamera(60,1,.01,300);camera.lookAt(0,0,1);camera.updateMatrixWorld();
  const sphere=(x,z,r)=>new Sphere(new Vector3(x,0,z),r);
  const shapes=[sphere(0,20,.03),sphere(0,20,1),sphere(0,20,.14),sphere(20,20,1)];
  const windows=windowCones(camera.position,new Vector3(),[{x:0,z:2,width:1,bottom:-1,top:1}]);
  const indices=[3,0,2,1],counts=orderWindowInstances(indices,shapes,camera.position,windows,camera,500);
  assert.deepEqual(indices,[1,2,0,3]);assert.deepEqual(counts,{ink:1,fill:2,full:3});
});

test('camera and sun gestures share prepared native draws and restore the full scene on release',()=>{
  const scene=new Scene(),room=new Group(),chair=new Mesh(new BoxGeometry(),new MeshStandardMaterial());
  scene.add(room);room.add(chair);
  const stage={scene,seated:true,camera:new PerspectiveCamera(),homeOffset:new Vector3(),renderedFrames:6,
    renderer:{shadowMap:{needsUpdate:true},render(view,camera){
      assert.notEqual(view,scene);assert.ok(view.children.includes(chair));assert.equal(camera,stage.camera);
      assert.equal(chair.parent,room);assert.equal(this.shadowMap.needsUpdate,false);
    },renderLists:{get:()=>({init(){}})}},windowGlass:{lastCapture:2},
    core:{lighting:{group:new Group()},contours:{group:new Group(),sync(){}},batches:{begin:()=>()=>{}}},
    loaded:{geometry:{meshes:new Map(),parts:new Map()}},atmosphere:{root:new Group(),prepare(){}}};
  const motion=createBedroomMotionView(stage,[]);
  try{
    assert.equal(motion.draw(840),false);motion.sample();assert.equal(motion.draw(840),true);
    assert.equal(stage.renderer.shadowMap.needsUpdate,true);
    motion.finish();assert.equal(motion.draw(845),false);
    assert.ok(stage.dirty);assert.equal(stage.windowGlass.lastCapture,-100);
  } finally {motion.dispose();chair.geometry.dispose();chair.material.dispose();}
});
