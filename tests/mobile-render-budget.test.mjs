import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createMobileRenderBudget} from '../scripts/viewer/mobile-render-budget.mjs';

function fixture(compact=true){
 let ratio=1.5,time=0;
 const stage={renderer:{getPixelRatio:()=>ratio,setPixelRatio:v=>{ratio=v;}}};
 const budget=createMobileRenderBudget(stage,{compact});budget.sample(time);
 return {stage,budget,advance:(dt,seconds)=>{for(let i=0;i<seconds*1000/dt;i++)budget.sample(time+=dt);}};
}
test('phone fill rate adapts only to sustained slow frames and recovers without oscillation',()=>{
 const {stage,budget,advance}=fixture();assert.equal(budget.snapshot().pixelRatio,1);
 advance(50,1);assert.equal(budget.snapshot().pixelRatio,1);
 advance(50,5);assert.equal(budget.snapshot().pixelRatio,.8);
 advance(16,3);assert.equal(budget.snapshot().pixelRatio,.8);
 advance(16,16);assert.equal(budget.snapshot().pixelRatio,1);
 assert.equal(stage.dirty,true);
});
test('background gaps and scene loading do not trigger a quality downgrade',()=>{
 const {budget,advance}=fixture();advance(1000,20);advance(16,2);
 assert.equal(budget.snapshot().pixelRatio,1);
});
test('desktop remains untouched and Bedroom retains control of its gesture budget',()=>{
 const desktop=fixture(false);desktop.advance(50,6);assert.equal(desktop.budget.snapshot().pixelRatio,1.5);
 const phone=fixture();phone.stage.seated=true;phone.advance(50,6);assert.equal(phone.budget.snapshot().pixelRatio,1);
});
