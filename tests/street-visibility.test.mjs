import {test} from 'node:test';
import assert from 'node:assert/strict';
import {BoxGeometry,MeshBasicMaterial,InstancedMesh,Matrix4,PerspectiveCamera,OrthographicCamera,Frustum,Vector3,Sphere,Group,Scene,DirectionalLight} from 'three';
import {classifyInstances,installStreetVisibility} from '../scripts/viewer/street-visibility.mjs';
import {projectWallOccluders,sphereOccluded} from '../scripts/viewer/street-occlusion.mjs';
const frustum=c=>{c.updateMatrixWorld();return new Frustum().setFromProjectionMatrix(new Matrix4().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse));};
function fixture(){
 const mesh=new InstancedMesh(new BoxGeometry(1,1,1),new MeshBasicMaterial(),4);mesh.castShadow=true;
 [[0,0,-5],[9,0,-5],[40,0,-5],[0,0,5]].forEach((p,i)=>mesh.setMatrixAt(i,new Matrix4().makeTranslation(...p)));mesh.updateMatrixWorld();
 const camera=new PerspectiveCamera(50,1,.1,30),light=new OrthographicCamera(7,11,2,-2,.1,20);
 return {mesh,camera,light};
}
test('color and shadow frusta keep different poses; off-screen casters remain in the shadow prefix',()=>{
 const {mesh,camera,light}=fixture(),r=classifyInstances(mesh,frustum(camera),[frustum(light)]);
 assert.deepEqual(r.indices,[1,0]);assert.equal(r.shadowCount,1);assert.equal(r.hidden,2);
});
test('rotating the camera restores newly visible instances without changing source buffers',()=>{
 const {mesh,camera}=fixture(),original=mesh.instanceMatrix.array.slice();camera.rotation.y=Math.PI;
 assert.deepEqual(classifyInstances(mesh,frustum(camera),[]).indices,[3]);
 assert.deepEqual(mesh.instanceMatrix.array,original);assert.equal(mesh.count,4);
});
test('instances intersecting a view edge are retained and transformed bounds follow their parent',()=>{
 const {mesh,camera}=fixture();mesh.setMatrixAt(0,new Matrix4().makeTranslation(2.8,0,-5));
 assert.ok(classifyInstances(mesh,frustum(camera),[]).indices.includes(0));
 mesh.position.x=100;mesh.updateMatrixWorld();assert.equal(classifyInstances(mesh,frustum(camera),[]).indices.length,0);
});
test('occlusion requires the entire object behind an actual opaque triangle, leaving openings visible',()=>{
 const camera=new PerspectiveCamera(60,1,.1,100);camera.updateMatrixWorld();
 const wall={node:{visible:true,parent:{visible:true}},points:[new Vector3(-4,-4,-5),new Vector3(4,-4,-5),new Vector3(0,4,-5)]};
 const projected=projectWallOccluders([wall],camera);
 assert.equal(sphereOccluded(new Sphere(new Vector3(0,0,-10),.2),projected),true);
 assert.equal(sphereOccluded(new Sphere(new Vector3(0,0,-3),.2),projected),false);
 assert.equal(sphereOccluded(new Sphere(new Vector3(6,0,-10),.2),projected),false);
 assert.equal(sphereOccluded(new Sphere(new Vector3(0,0,-10),4),projected),false);
});
test('only fully fog-hidden color geometry retires; shadow casters are retained independently',()=>{
 const {mesh,camera,light}=fixture();camera.updateMatrixWorld();
 const r=classifyInstances(mesh,frustum(camera),[frustum(light)],undefined,{view:camera.matrixWorldInverse,far:2});
 assert.deepEqual(r.indices,[1]);assert.equal(r.shadowCount,1);
});
test('cached instance buffers recover across camera turns, native list refreshes and disposal',()=>{
 const previousLocation=globalThis.location,previousDocument=globalThis.document;
 globalThis.location={search:''};globalThis.document={getElementById:()=>null};
 try{
  const {mesh,camera}=fixture(),original=mesh.instanceMatrix.array.slice();mesh.userData.street_prop='building_0';
  const wrapper=new Group(),scene=new Scene();wrapper.add(mesh);scene.add(wrapper);scene.updateMatrixWorld();camera.updateMatrixWorld();
  let draws=0;
  const stage={scene,camera,renderer:{renderBufferDirect(){}},loaded:{geometry:{wrapper,meshes:new Map([['mesh',{partId:'street_authored_building_0',node:mesh}]])}},core:{render(){draws++;}},dispose(){}};
  installStreetVisibility(stage,{enabled:true});stage.onBeforeFrame=()=>{};stage.onBeforeFrame();
  stage.core.render(camera);assert.equal(mesh.count,1);const version=mesh.instanceMatrix.version;
  stage.core.render(camera);assert.equal(mesh.instanceMatrix.version,version);
  camera.rotation.y=Math.PI;camera.updateMatrixWorld();stage.core.render(camera);
  assert.equal(mesh.count,1);assert.equal(mesh.instanceMatrix.array[14],5);
  // The native frustum culler can repopulate/reorder its list on a later turn.
  mesh.instanceMatrix.array.set(original);mesh.count=4;mesh.instanceMatrix.needsUpdate=true;
  camera.rotation.y=0;camera.updateMatrixWorld();stage.core.render(camera);assert.equal(mesh.count,1);assert.equal(mesh.instanceMatrix.array[14],-5);
  stage.dispose();assert.equal(mesh.count,4);assert.deepEqual(mesh.instanceMatrix.array,original);assert.equal(draws,4);
 }finally{globalThis.location=previousLocation;globalThis.document=previousDocument;}
});
