import {Vector3} from 'three/src/math/Vector3.js';
import {Matrix4} from 'three/src/math/Matrix4.js';

// Use actual opaque wall triangles, never a solid bounding box across doors
// and windows. Only triangles large enough to hide a detail become occluders.
export function collectWallOccluders(records){
 const triangles=[],a=new Vector3(),b=new Vector3(),c=new Vector3(),ab=new Vector3(),ac=new Vector3();
 for(const {partId,node}of records){
  const m=node.material;
  if(node.isInstancedMesh||!/^building_corner_/.test(partId)||Array.isArray(m)||m.transparent||m.transmission>0||m.alphaTest>0||m.alphaMap||m.opacity<1||!/(cream|peach|plaster|terracotta|ochre|teal|slate|roof|wall)/.test(m.name))continue;
  const g=node.geometry,p=g.attributes.position,index=g.index,count=index?.count??p.count;
  node.updateWorldMatrix(true,false);
  for(let i=0;i<count;i+=3){
   a.fromBufferAttribute(p,index?index.getX(i):i).applyMatrix4(node.matrixWorld);
   b.fromBufferAttribute(p,index?index.getX(i+1):i+1).applyMatrix4(node.matrixWorld);
   c.fromBufferAttribute(p,index?index.getX(i+2):i+2).applyMatrix4(node.matrixWorld);
   if(ab.subVectors(b,a).cross(ac.subVectors(c,a)).lengthSq()<16)continue;
   triangles.push({node,side:m.side,mirrored:node.matrixWorld.determinant()<0,points:[a.clone(),b.clone(),c.clone()]});
  }
 }
 return triangles;
}
function project(point,matrix){
 const e=matrix.elements,w=e[3]*point.x+e[7]*point.y+e[11]*point.z+e[15];
 if(w<=.00001)return null;
 const p=point.clone().applyMatrix4(matrix);return p.z>=-1&&p.z<=1?p:null;
}
export function projectWallOccluders(triangles,camera){
 const matrix=new Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse),result=[];
 for(const t of triangles){
  if(!t.node.visible||!t.node.parent?.visible)continue;
  const p=t.points.map(v=>project(v,matrix));if(p.some(v=>!v))continue;
  const area=(p[1].x-p[0].x)*(p[2].y-p[0].y)-(p[1].y-p[0].y)*(p[2].x-p[0].x);
  const facing=area*(t.mirrored?-1:1);
  if(t.side===0&&facing<=0||t.side===1&&facing>=0)continue;
  if(Math.abs(area)<.002)continue;
  result.push({p,area,z:Math.max(...p.map(v=>v.z))});
 }
 return {matrix,triangles:result.sort((a,b)=>Math.abs(b.area)-Math.abs(a.area)).slice(0,160)};
}
export function sphereOccluded(sphere,occlusion){
 if(!occlusion?.triangles.length)return false;
 let x0=Infinity,y0=Infinity,z0=Infinity,x1=-Infinity,y1=-Infinity;
 const p=new Vector3(),r=sphere.radius;
 for(const x of [-r,r])for(const y of [-r,r])for(const z of [-r,r]){
  const q=project(p.set(sphere.center.x+x,sphere.center.y+y,sphere.center.z+z),occlusion.matrix);
  if(!q)return false;x0=Math.min(x0,q.x);x1=Math.max(x1,q.x);y0=Math.min(y0,q.y);y1=Math.max(y1,q.y);z0=Math.min(z0,q.z);
 }
 return occlusion.triangles.some(t=>{
  if(z0<=t.z+1e-5)return false;
  for(let i=0;i<3;i++){
   const a=t.p[i],b=t.p[(i+1)%3],sign=Math.sign(t.area);
   for(const x of [x0,x1])for(const y of [y0,y1])if(sign*((b.x-a.x)*(y-a.y)-(b.y-a.y)*(x-a.x))<.00002)return false;
  }
  return true;
 });
}
