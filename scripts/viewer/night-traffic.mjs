// A visibility overlay only: the original vehicle meshes, traffic poses and
// material/shader settings are untouched. State belongs to each live Stage.
const states=new WeakMap();

function suppress(part){
 const descriptor=Object.getOwnPropertyDescriptor(part,'visible');
 if(descriptor&&!descriptor.configurable)throw Error('Vehicle visibility must be configurable');
 const record={descriptor,authored:part.visible};
 Object.defineProperty(part,'visible',{
  configurable:true,enumerable:descriptor?.enumerable??true,
  get:()=>false,
  // setPresentation/focus may reset visibility while Night remains active.
  // Retain those writes for dawn instead of blindly showing every vehicle.
  set(value){record.authored=value;if(descriptor?.set)descriptor.set.call(part,value);},
 });
 return record;
}

function restore(part,record){
 const descriptor=record.descriptor;
 if(descriptor&&('get'in descriptor||'set'in descriptor))Object.defineProperty(part,'visible',descriptor);
 else Object.defineProperty(part,'visible',{...(descriptor||{configurable:true,enumerable:true,writable:true}),value:record.authored});
}

function invalidate(stage){
 stage.dirty=true;
 if(stage.renderer?.shadowMap)stage.renderer.shadowMap.needsUpdate=true;
 // Ink and glass accents live outside the part hierarchy. Synchronize before
 // the window/wet-reflection pass, which precedes AssetRenderCore.render.
 stage.core?.contours?.sync(stage.camera);
 if(stage.camera)stage.core?.glassIllustration?.sync(stage.camera);
}

/** Call after weather/focus and before the original per-frame traffic update.
 * Night applies in both Neighborhood and the Bedroom's actual window view.
 * Returns whether suppression is active; sunny/overcast/rain/sunset are normal.
 */
export function applyNightTraffic(stage){
 if(!stage)return false;
 let state=states.get(stage);
 if(stage.weather!=='night'){
  if(state){for(const [part,record]of state.parts)restore(part,record);stage.trafficPaused=state.pausedBefore;states.delete(stage);invalidate(stage);}
  return false;
 }
 const parts=stage.loaded?.geometry?.parts;if(!parts)return false;
 if(!state){state={parts:new Map(),pausedBefore:stage.trafficPaused,source:undefined,count:-1};states.set(stage,state);}
 let changed=false;
 if(state.source!==parts||state.count!==parts.size){
  const current=new Set();
  for(const part of parts.values())if(part.userData?.street_vehicle){current.add(part);if(!state.parts.has(part)){state.parts.set(part,suppress(part));changed=true;}}
  for(const [part,record]of state.parts)if(!current.has(part)){restore(part,record);state.parts.delete(part);changed=true;}
  state.source=parts;state.count=parts.size;
 }
 if(stage.trafficPaused!==true){stage.trafficPaused=true;stage.dirty=true;}
 if(changed)invalidate(stage);
 return true;
}
