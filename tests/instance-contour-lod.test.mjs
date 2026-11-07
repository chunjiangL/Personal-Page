import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {applyInstanceContourLod} from '../scripts/viewer/instance-contour-lod.mjs';
import {resolveStreetContour} from '../scripts/viewer/street-contours.mjs';

function fixture(key='building_0'){
 const surface=new T.BoxGeometry(12,10,8),mesh=new T.InstancedMesh(surface,new T.MeshBasicMaterial(),2);
 mesh.userData.street_prop=key;
 const edges=new T.EdgesGeometry(surface),count=edges.getAttribute('position').count;
 const bounds=new T.BufferAttribute(new Float32Array(count*4),4);
 for(let i=0;i<count;i++)bounds.setXYZW(i,1,2,3,18);
 edges.setAttribute('labLodBounds',bounds);return {mesh,edges,bounds};
}
const fade=p=>{const t=Math.max(0,Math.min(1,(p*1.15-6)/64));return t*t*(3-2*t);};
test('dense repeated architecture fades unresolved creases, then recovers resolved detail',()=>{
 const {mesh,edges,bounds}=fixture(),surface=mesh.geometry.getAttribute('position').array.slice(),positions=edges.getAttribute('position').array.slice();
 applyInstanceContourLod(edges,mesh,262);
 const scale=bounds.getW(0)/18;
 assert.ok(fade(100*scale)<.1);assert.ok(fade(1100*scale)>.99);
 assert.deepEqual(edges.getAttribute('position').array,positions);assert.deepEqual(mesh.geometry.getAttribute('position').array,surface);
 assert.deepEqual([bounds.getX(0),bounds.getY(0),bounds.getZ(0)],[1,2,3]);
});
test('simple roof edges and unrelated props retain their authored LOD',()=>{
 for(const [key,ratio]of [['building_0',12],['bench',262]]){
  const {mesh,edges,bounds}=fixture(key);applyInstanceContourLod(edges,mesh,ratio);assert.equal(bounds.getW(0),18);
 }
});

test('a short window bevel fades before the jamb at the same distance',()=>{
 const {mesh}=fixture();
 mesh.material.name='mat_metal_apartment_neighbourhood_building_paint__building_0';
 const edges=new T.BufferGeometry();
 edges.setAttribute('position',new T.Float32BufferAttribute([0,0,0,.08,0,0, 0,0,0,0,1.8,0],3));
 const bounds=new T.Float32BufferAttribute([1,2,3,18,1,2,3,18,1,2,3,18,1,2,3,18],4);
 edges.setAttribute('labLodBounds',bounds);
 applyInstanceContourLod(edges,mesh,40);
 const bevel=bounds.getW(0),jamb=bounds.getW(2);
 assert.equal(bevel,bounds.getW(1));assert.equal(jamb,bounds.getW(3));
 assert.ok(fade(bevel*10)<.01 && fade(jamb*10)>.98);
 assert.ok(fade(bevel*24)>fade(bevel*10),'zoom brings the short segment back smoothly');
});

test('contour weights distinguish exterior roles and preserve shared bedroom frames and disabled lines',()=>{
 const style={sketch:{outlines:true,edgeOpacity:.65,classic:{angle:17,pressure:.3}},edges:{width:.7,importance:'normal',important:['authored']}};
 const before=structuredClone(style);
 const resolve=(name,part,look=style)=>resolveStreetContour(look,{partId:part,node:{userData:{},material:{name}}});
 const frame='mat_wood_apartment_window_painted_frame';
 const shop=resolve('mat_clay_apartment_corner_cream','building_corner_frontage_1');
 const frameLook=resolve(frame,'building_corner_frontage_2');
 const crown=resolve('mat_clay_apartment_street_life_leaf','street_life_trees');
 assert.ok(shop.sketch.classic.silhouetteWidth>frameLook.sketch.classic.silhouetteWidth);
 assert.equal(crown.sketch.edgeOpacity,0);assert.ok(crown.sketch.classic.silhouetteWidth>1);
 assert.equal(frameLook.sketch.classic.pressure,.3);assert.deepEqual(frameLook.edges.important,['authored']);
 assert.equal(resolve(frame,'bedroom_window'),style);assert.deepEqual(style,before);
 const hidden={...style,edges:{...style.edges,importance:'hidden'}};
 assert.equal(resolve(frame,'building_corner_frontage_2',hidden),hidden);
});
