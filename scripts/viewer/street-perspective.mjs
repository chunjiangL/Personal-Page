import {Vector3, Matrix4, MathUtils} from 'three';

// Start in the clear lane opposite the bus stop, genuinely orthographic and
// square to the shop facade. Rise before retreating over the opposite roofs.
const front={x:-12,z:10.5,y:3,width:43,distance:10,perspective:0,horizon:-.06,elevation:0,yaw:0};
export const streetShots=[
 [0,front], [.45,front],
 [1.0,{...front,width:57,distance:11,elevation:60,perspective:.22}],
 [1.85,{...front,width:69,distance:43,elevation:48,perspective:1}],
 [3.45,{...front,x:2,z:0,width:65,distance:48,elevation:28,perspective:1,yaw:45}],
 [3.95,{...front,x:2,z:0,width:54,distance:49,elevation:12,perspective:1,yaw:46}],
];
export const streetDuration=4.8;
// Overlap the handoff with the descent instead of easing to a stop twice.
const handoffAt=3.7;
const parameters=['x','z','y','width','distance','perspective','horizon','elevation','yaw'];
const logarithmic=new Set(['width']);
const smooth=t=>t*t*t*(t*(t*6-15)+10);

// Monotone cubic curves preserve continuous velocity without parameter
// overshoot on the narrow-lens hold / fast reveal boundaries.
function curve(points,key,time){
 const values=points.map(p=>logarithmic.has(key)?Math.log(p[1][key]):p[1][key]);
 const spans=points.slice(1).map((p,i)=>p[0]-points[i][0]);
 const slopes=spans.map((h,i)=>(values[i+1]-values[i])/h);
 const tangents=values.map((_,i)=>i===0||i===values.length-1||slopes[i-1]*slopes[i]<=0?0:(slopes[i-1]+slopes[i])/2);
 for(let i=0;i<slopes.length;i++){
  if(slopes[i]===0){tangents[i]=tangents[i+1]=0;continue;}
  const a=tangents[i]/slopes[i],b=tangents[i+1]/slopes[i],length=Math.hypot(a,b);
  if(length>3){tangents[i]=3*a*slopes[i]/length;tangents[i+1]=3*b*slopes[i]/length;}
 }
 let i=0;while(i<points.length-2&&time>points[i+1][0])i++;
 const t=MathUtils.clamp((time-points[i][0])/spans[i],0,1),t2=t*t,t3=t2*t;
 const value=(2*t3-3*t2+1)*values[i]+(t3-2*t2+t)*spans[i]*tangents[i]+(-2*t3+3*t2)*values[i+1]+(t3-t2)*spans[i]*tangents[i+1];
 return logarithmic.has(key)?Math.exp(value):value;
}
export function streetShotAt(time){return Object.fromEntries(parameters.map(key=>[key,curve(streetShots,key,time)]));}

export function streetCameraPose(shot,aspect){
 const yaw=MathUtils.degToRad(shot.yaw);
 const width=shot.width*Math.max(.64,aspect/(16/9));
 const distance=shot.distance,lift=Math.tan(MathUtils.degToRad(shot.elevation));
 const position=new Vector3(shot.x+Math.sin(yaw)*distance,shot.y+distance*lift,shot.z+Math.cos(yaw)*distance);
 return {position,target:position.clone().add(new Vector3(-Math.sin(yaw),0,-Math.cos(yaw))),
  fov:MathUtils.radToDeg(2*Math.atan(width/(2*distance*aspect))),
  shift:shot.horizon+2*distance*lift/(width/aspect),distance,width,perspective:shot.perspective};
}

// Generalized projection: w=1 at the focus plane throughout the transition.
// p=0 is an exact orthographic elevation; p=1 is standard perspective. Mapping
// both near and far to the correct clip planes avoids depth pops during morph.
export function applyStreetProjection(camera,pose){
 const p=pose.perspective,a=1-p,b=p/pose.distance,n=camera.near,f=camera.far;
 const A=(2*a+b*(f+n))/(f-n),B=-a-b*n-A*n;
 camera.projectionMatrix.set(
  2/pose.width,0,0,0,
  0,2*camera.aspect/pose.width,-pose.shift*b,pose.shift*a,
  0,0,-A,B,
  0,0,-b,a,
 );
 camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
}

export function createStreetPerspective(stage,{onChange=()=>{},freezeAt}={}){
 const eye=new Vector3(),aim=new Vector3();
 let saved,elapsed=0,running=false,progress=1,lastTime,extraDistance=0,projectionPose;
 const originalProjection=stage.camera.updateProjectionMatrix;
 stage.camera.updateProjectionMatrix=function(){
  originalProjection.call(this);
  if(running&&projectionPose&&projectionPose.perspective<1)applyStreetProjection(this,projectionPose);
 };
 const originalPrepare=stage.atmosphere.prepare;
 const cloudRoot=stage.atmosphere.root?.getObjectByName('apartment_volumetric_ink_clouds');
 const cloudScale=cloudRoot?.scale.clone(),cloudPosition=cloudRoot?.position.clone(),cloudMaterials=[];
 // Native density and pen shading are retained; only ray construction gains
 // support for the orthographic-to-perspective projection used by this shot.
 cloudRoot?.traverse(mesh=>{
  if(!mesh.isMesh||!mesh.material?.vertexShader?.includes('vCloudOrigin'))return;
  const original=mesh.material,material=original.clone();
  // Share the existing volume textures: a new camera shader must not double
  // cloud GPU memory on phones or detach from native lighting texture updates.
  for(const [name,uniform] of Object.entries(original.uniforms))if(uniform.value?.isTexture)material.uniforms[name].value=uniform.value;
  material.uniforms.uGalleryPerspective={value:1};material.uniforms.uGalleryDistance={value:10};
  material.uniforms.uGalleryNear={value:.02};material.uniforms.uGalleryForward={value:new Vector3()};
  material.uniforms.uGalleryInverseModel={value:new Matrix4()};
  material.vertexShader='varying vec3 vGalleryWorldPoint;\n'+material.vertexShader.replace('void main(){','void main(){vGalleryWorldPoint=(modelMatrix*vec4(position,1.)).xyz;');
  material.fragmentShader=`varying vec3 vGalleryWorldPoint;
uniform float uGalleryPerspective,uGalleryDistance,uGalleryNear;
uniform vec3 uGalleryForward;
uniform mat4 uGalleryInverseModel;
`+material.fragmentShader.replace('vec3 rd=normalize(vCloudDirection),inv=1./rd;',`vec3 galleryOrigin=vCloudOrigin,galleryDirection=vCloudDirection;
 if(uGalleryPerspective<.999999){
  float a=1.-uGalleryPerspective,b=uGalleryPerspective/uGalleryDistance;
  vec3 delta=vGalleryWorldPoint-cameraPosition;
  float depth=dot(delta,uGalleryForward);
  vec3 origin=cameraPosition+uGalleryForward*uGalleryNear+(delta-uGalleryForward*depth)*(a+b*uGalleryNear)/max(.00001,a+b*depth);
  galleryOrigin=(uGalleryInverseModel*vec4(origin,1.)).xyz;
  galleryDirection=(uGalleryInverseModel*vec4(vGalleryWorldPoint,1.)).xyz-galleryOrigin;
 }
 vec3 rd=normalize(galleryDirection),inv=1./rd;`).replaceAll('-vCloudOrigin)','-galleryOrigin)').replace('vec3 p=vCloudOrigin+rd*','vec3 p=galleryOrigin+rd*');
  mesh.material=material;cloudMaterials.push({mesh,original,material});
 });
 stage.atmosphere.prepare=function(...args){
  const amount=running?projectionPose?.perspective??1:1;
  if(cloudRoot){
   cloudRoot.scale.copy(cloudScale).multiplyScalar(MathUtils.lerp(.6,1,amount));
   cloudRoot.position.copy(cloudPosition);cloudRoot.position.y-=2*(1-amount);
   cloudRoot.updateMatrixWorld(true);
  }
  const result=originalPrepare.apply(this,args);
  for(const {mesh,material} of cloudMaterials){
   const u=material.uniforms;u.uGalleryPerspective.value=amount;u.uGalleryDistance.value=projectionPose?.distance??10;
   u.uGalleryNear.value=stage.camera.near;stage.camera.getWorldDirection(u.uGalleryForward.value);
   u.uGalleryInverseModel.value.copy(mesh.matrixWorld).invert();
  }
  if(running&&this.scene?.fog?.isFog){this.scene.fog.near+=extraDistance;this.scene.fog.far+=extraDistance;}
  return result;
 };
 function apply(time){
  progress=MathUtils.clamp(time/streetDuration,0,1);
  const camera=stage.camera,pose=streetCameraPose(streetShotAt(time),camera.aspect);
  projectionPose=pose;
  const handoff=smooth(MathUtils.clamp((time-handoffAt)/(streetDuration-handoffAt),0,1));
  camera.position.copy(pose.position).lerp(eye,handoff);
  const finalForward=aim.clone().sub(eye).normalize();
  const forward=pose.target.clone().sub(pose.position).lerp(finalForward,handoff).normalize();
  stage.viewTarget.copy(camera.position).add(forward);
  camera.fov=MathUtils.lerp(pose.fov,saved.fov,handoff);
  // View offset survives the native renderer's automatic depth fitting.
  const shift=pose.shift*(1-handoff);
  camera.setViewOffset(camera.aspect*1000,1000,0,shift*500,camera.aspect*1000,1000);
  camera.near=saved.near;camera.far=Math.max(saved.far,pose.distance+800);
  extraDistance=Math.max(0,pose.distance-50)*(1-handoff);
  camera.lookAt(stage.viewTarget);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);stage.dirty=true;
  if(saved.trafficPaused!==undefined)stage.trafficPaused=saved.trafficPaused||time<1.85;
  onChange({running,progress,fov:camera.fov});
 }
 function restore(){
  running=false;progress=1;
  if(saved.trafficPaused!==undefined)stage.trafficPaused=saved.trafficPaused;
  const camera=stage.camera;
  camera.position.copy(eye);stage.viewTarget.copy(aim);
  camera.fov=saved.fov;camera.near=saved.near;camera.far=saved.far;
  camera.clearViewOffset();if(saved.view?.enabled){const v=saved.view;camera.setViewOffset(v.fullWidth,v.fullHeight,v.offsetX,v.offsetY,v.width,v.height);}
  camera.lookAt(aim);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);stage.dirty=true;
  onChange({running,progress,fov:camera.fov});
 }
 return {
  get active(){return running;},get progress(){return progress;},
  start(){
   if(running)restore();
   const c=stage.camera;eye.copy(c.position);aim.copy(stage.viewTarget);
   saved={fov:c.fov,near:c.near,far:c.far,view:c.view?{...c.view}:null,trafficPaused:stage.trafficPaused};
   const life=stage.loaded?.building?.streetLife;
   if(life?.snapshot&&life?.update){
    for(let i=0;i<600;i++){
     const bus=life.snapshot().vehicles.find(v=>v.id==='street_life_bus');
     if(!bus||bus.dwell>0)break;
     life.update(.5);
    }
   }
   stage.tween=undefined;elapsed=0;lastTime=undefined;running=true;apply(freezeAt??0);
  },
  pauseClock(){lastTime=undefined;},
  update(dt,time){
   if(!running)return false;
   if(freezeAt!==undefined){apply(freezeAt);return true;}
   elapsed+=Math.max(0,time!==undefined&&lastTime!==undefined?(time-lastTime)/1000:dt);lastTime=time;
   if(elapsed>=streetDuration)restore();else apply(elapsed);
   return true;
  },
  finish(){if(running)restore();},
  dispose(){
   this.finish();stage.atmosphere.prepare=originalPrepare;stage.camera.updateProjectionMatrix=originalProjection;
   if(cloudRoot){cloudRoot.scale.copy(cloudScale);cloudRoot.position.copy(cloudPosition);}
   for(const {mesh,original,material} of cloudMaterials){mesh.material=original;material.dispose();}
  },
 };
}
