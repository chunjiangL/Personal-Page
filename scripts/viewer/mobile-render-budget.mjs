import {compactDevice} from './device-budget.mjs';

// Cap fill rate on high-DPI phones. Sustained slow frames can reduce the
// outdoor buffer further; asymmetric windows prevent resolution oscillation.
export function createMobileRenderBudget(stage,{compact=compactDevice}={}) {
 const renderer=stage.renderer,ceiling=Math.min(1,renderer.getPixelRatio());
 let previous,elapsed=0,count=0,slow=0,fast=0,frameMS=0;
 if(compact)renderer.setPixelRatio(ceiling);
 function sample(time){
  const dt=previous===undefined?0:time-previous;previous=time;
  if(dt<=0||dt>250){elapsed=count=slow=fast=0;return;}
  elapsed+=dt;count++;
  if(elapsed<1000)return;
  frameMS=elapsed/count;elapsed=count=0;
  if(!compact||stage.seated){slow=fast=0;return;}
  slow=frameMS>38?slow+1:0;fast=frameMS<20?fast+1:0;
  const current=renderer.getPixelRatio();
  const next=slow>=2?Math.max(Math.min(.8,ceiling),current-.1):fast>=8?Math.min(ceiling,current+.1):current;
  if(next!==current){renderer.setPixelRatio(Number(next.toFixed(2)));stage.dirty=true;slow=fast=0;}
 }
 return {sample,snapshot:()=>({compact,pixelRatio:renderer.getPixelRatio(),frameMS:Math.round(frameMS*10)/10,fps:frameMS?Math.round(1000/frameMS):null})};
}
