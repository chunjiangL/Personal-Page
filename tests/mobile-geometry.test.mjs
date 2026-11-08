import test from 'node:test';
import assert from 'node:assert/strict';
import {BoxGeometry,BufferGeometry,Float32BufferAttribute} from 'three';
import {mobileDisplayGeometry,indexMobileGeometry} from '../scripts/viewer/mobile-geometry.mjs';

test('mobile display shares exact authored vertices and index without expanded chart buffers',()=>{
 const source=new BoxGeometry(),mobile=mobileDisplayGeometry(source,'fixture');
 assert.equal(mobile.index,source.index);
 for(const [name,attribute] of Object.entries(source.attributes))assert.equal(mobile.getAttribute(name),attribute);
 assert.deepEqual(mobile.groups,source.groups);assert.notEqual(mobile.groups,source.groups);
 assert.equal(mobile.userData.showcaseSourceKey,'fixture');
 for(const name of ['labStrokeSeam','labStructureDistance','labStructureEdges'])assert.equal(mobile.getAttribute(name).array.length,3);
 assert.deepEqual(Array.from(mobile.getAttribute('labStructureEdges').array),[-1,-1,-1]);
 assert.equal(source.hasAttribute('labStructureEdges'),false);
});

test('mobile display retains morph channels and draw ranges for curtains and desk inspection',()=>{
 const source=new BufferGeometry();source.setAttribute('position',new Float32BufferAttribute([0,0,0,1,0,0,0,1,0],3));
 source.morphAttributes.position=[source.attributes.position.clone()];source.morphTargetsRelative=true;source.setDrawRange(0,3);
 const mobile=mobileDisplayGeometry(source,'morph');
 assert.equal(mobile.morphAttributes,source.morphAttributes);assert.equal(mobile.morphTargetsRelative,true);
 assert.deepEqual(mobile.drawRange,{start:0,count:3});assert.equal(mobile.getAttribute('labStrokeUV').array.length,2);
});

test('exact indexing reconstructs every attribute bit and preserves UV/normal seams and triangle order',()=>{
 const source=new BoxGeometry(1,1,1,3,3,3).toNonIndexed();
 source.morphAttributes.position=[source.attributes.position.clone()];
 source.morphAttributes.position[0].setX(0,-0);
 const before=new Map(Object.entries(source.attributes).map(([name,a])=>[name,new Uint32Array(a.array.buffer.slice(0))]));
 const morphBefore=new Uint32Array(source.morphAttributes.position[0].array.buffer.slice(0));
 const groups=structuredClone(source.groups),count=source.attributes.position.count;
 assert.equal(indexMobileGeometry(source),true);assert.ok(source.attributes.position.count<count);
 for(const [name,bits] of before){const a=source.attributes[name],actual=new Uint32Array(a.array.buffer);for(let i=0;i<count;i++)for(let c=0;c<a.itemSize;c++)assert.equal(actual[source.index.getX(i)*a.itemSize+c],bits[i*a.itemSize+c]);}
 const morph=new Uint32Array(source.morphAttributes.position[0].array.buffer);for(let i=0;i<count;i++)for(let c=0;c<3;c++)assert.equal(morph[source.index.getX(i)*3+c],morphBefore[i*3+c]);
 assert.deepEqual(source.groups,groups);assert.equal(source.index.count,count);
});
