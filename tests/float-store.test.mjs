import test from 'node:test';
import assert from 'node:assert/strict';
import {FloatStore} from '../scripts/viewer/float-store.mjs';

test('mixed generated and prepared atlas segments retain exact Float32 order across pages',()=>{
 const store=new FloatStore(),expected=[];
 for(let i=0;i<9000;i++){const segment=[i/3,-i/7,0,-0,1,2,3,4];store.push(...segment);expected.push(...segment);}
 const prepared=new Float32Array([-.1,-0,0,1e-15,123.5,4,5,6]);store.append(prepared);expected.push(...prepared);
 store.push(7,8);expected.push(7,8);
 const data=new Float32Array(store.length);store.writeTo(data);
 assert.deepEqual(new Uint8Array(data.buffer),new Uint8Array(new Float32Array(expected).buffer));
 assert.deepEqual(store.slice(65530),data.slice(65530));
 assert.deepEqual(prepared,new Float32Array([-.1,-0,0,1e-15,123.5,4,5,6]));
});
