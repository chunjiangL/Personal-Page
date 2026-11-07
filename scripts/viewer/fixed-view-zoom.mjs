export const zoomLimits={min:.8,max:2.5};
const clamp=value=>Math.max(zoomLimits.min,Math.min(zoomLimits.max,value));
export function zoomFov(baseFov,zoom){return 360/Math.PI*Math.atan(Math.tan(baseFov*Math.PI/360)/zoom);}
export function wheelZoomFactor(delta,mode,height){
 const pixels=delta*(mode===1?16:mode===2?height:1);
 return Math.exp(-Math.max(-240,Math.min(240,pixels))*.0015);
}

/** Lens-only zoom: the authored camera position and aim never move. */
export function createFixedViewZoom(camera,changed,{reduced=false,views=new Map()}={}){
 let scene,baseFov=camera.fov,value=1,target=1;
 const apply=()=>{camera.fov=zoomFov(baseFov,value);camera.updateProjectionMatrix();changed();};
 return {
  get value(){return value;},get target(){return target;},
  // Call after the authored camera has been framed (also on resize/fullscreen).
  capture(id,framingFov=camera.fov){scene=id;baseFov=framingFov;target=value=views.get(id)??1;apply();},
  set(next){if(!Number.isFinite(next))return;target=clamp(next);views.set(scene,target);if(reduced){value=target;apply();}},
  multiply(factor){this.set(target*factor);},
  update(dt){if(value===target)return false;value+=(target-value)*(1-Math.exp(-14*Math.max(0,Math.min(dt,.05))));if(Math.abs(value-target)<.0005)value=target;apply();return true;},
 };
}
