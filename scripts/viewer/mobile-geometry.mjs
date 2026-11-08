import {BufferAttribute,BufferGeometry} from 'three';
import {constantAttribute} from './device-budget.mjs';

// Exact indexing: compare every bit of every vertex/morph attribute. No
// tolerance, quantization, decimation, normal welding or UV seam removal.
export function indexMobileGeometry(geometry){
  if(geometry.index)return false;
  const attributes=Object.values(geometry.attributes),morphs=Object.values(geometry.morphAttributes).flat(),all=[...attributes,...morphs];
  const count=geometry.attributes.position.count;
  if(count<96||all.some(a=>a.isInterleavedBufferAttribute||a.count!==count||!a.array||a.array.BYTES_PER_ELEMENT>4))return false;
  const fields=all.map(a=>({a,words:a.array.BYTES_PER_ELEMENT===4?new Uint32Array(a.array.buffer,a.array.byteOffset,a.array.length):a.array,size:a.itemSize}));
  let capacity=1;while(capacity<count*2)capacity*=2;
  const table=new Uint32Array(capacity),remap=new Uint32Array(count),representatives=new Uint32Array(count);let unique=0;
  const equal=(x,y)=>fields.every(({words,size})=>{for(let j=0;j<size;j++)if(words[x*size+j]!==words[y*size+j])return false;return true;});
  for(let i=0;i<count;i++){
    let hash=2166136261;
    for(const {words,size} of fields)for(let j=0;j<size;j++)hash=Math.imul(hash^words[i*size+j],16777619);
    hash=Math.imul(hash^(hash>>>16),0x85ebca6b);hash=Math.imul(hash^(hash>>>13),0xc2b2ae35);hash^=hash>>>16;
    let slot=hash&(capacity-1);
    while(table[slot]&&!equal(i,table[slot]-1))slot=(slot+1)&(capacity-1);
    if(table[slot])remap[i]=remap[table[slot]-1];
    else{table[slot]=i+1;remap[i]=unique;representatives[unique++]=i;}
  }
  if(unique>count*.9)return false;
  const compact=a=>{
    const data=new a.array.constructor(unique*a.itemSize);
    // Copy raw bytes so signed zero and all Float32 payloads remain exact.
    const src=new Uint8Array(a.array.buffer,a.array.byteOffset,a.array.byteLength),dst=new Uint8Array(data.buffer),stride=a.itemSize*a.array.BYTES_PER_ELEMENT;
    for(let i=0;i<unique;i++)dst.set(src.subarray(representatives[i]*stride,(representatives[i]+1)*stride),i*stride);
    const result=new BufferAttribute(data,a.itemSize,a.normalized);result.name=a.name;result.gpuType=a.gpuType;result.setUsage(a.usage);return result;
  };
  for(const [name,a] of Object.entries(geometry.attributes))geometry.setAttribute(name,compact(a));
  for(const [name,list] of Object.entries(geometry.morphAttributes))geometry.morphAttributes[name]=list.map(compact);
  geometry.setIndex(new BufferAttribute(unique<=65535?new Uint16Array(remap):remap,1));
  return true;
}

// Mobile keeps the authored vertices/index, normals, UVs and material groups.
// The full desktop triangle charts/edge atlas are deliberately not allocated.
// Crease and silhouette geometry remains in the independent contour renderer.
export function mobileDisplayGeometry(source,key){
  const geometry=new BufferGeometry();
  for(const [name,attribute] of Object.entries(source.attributes))geometry.setAttribute(name,attribute);
  geometry.setIndex(source.index);
  geometry.morphAttributes=source.morphAttributes;
  geometry.morphTargetsRelative=source.morphTargetsRelative;
  geometry.groups=source.groups.map(group=>({...group}));
  geometry.setDrawRange(source.drawRange.start,source.drawRange.count);
  geometry.boundingBox=source.boundingBox?.clone()??null;
  geometry.boundingSphere=source.boundingSphere?.clone()??null;
  geometry.userData={...source.userData,showcaseSourceKey:key,galleryMobileGeometry:true};
  geometry.setAttribute('labStrokeUV',source.getAttribute('uv')??constantAttribute([0,0],2));
  geometry.setAttribute('labStrokeSeam',constantAttribute([1,1,1],3));
  geometry.setAttribute('labStructureDistance',constantAttribute([1,1,1],3));
  geometry.setAttribute('labStructureEdges',constantAttribute([-1,-1,-1],3));
  return geometry;
}
