/** Build-only adapter. The source game stays read-only and owns all rendering. */
export const SHOWCASE_VEHICLES=Object.freeze([
 {id:'street_life_bus',label:'Orange bus',kind:'bus',paint:'#df725a'},
 {id:'street_life_car_mustard',label:'Yellow car',kind:'hatchback',paint:'#ebbd47'},
 {id:'street_life_vehicle_pickup',label:'Green pickup',kind:'pickup',paint:'#739c88'},
]);
export const REMOVED_VEHICLE_IDS=Object.freeze([
 'street_life_car_teal',
 'street_life_vehicle_box_truck',
 'street_life_vehicle_electric_delivery',
 'street_life_vehicle_step_van',
]);

export function isRemovedVehicleMesh(id){
 return REMOVED_VEHICLE_IDS.some(vehicle=>id===vehicle||id.startsWith(vehicle+'_'));
}

/**
 * Apply to src/assets/scenes/apartment-street-life.ts in an esbuild onLoad hook.
 * Spec removal precedes procedural construction and the traffic simulation's
 * private vehicles array. No invisible cars, wheels, or collision agents remain.
 * Geometry, materials' names/parameters, weather, signals and motion code stay
 * authored; only the requested pickup body pigment changes to existing sage.
 */
export function adaptVehicleFleetSource(source){
 let result=source;
 function once(pattern,replacement,label){
  const matches=[...result.matchAll(pattern)];
  if(matches.length!==1)throw Error('Original vehicle source changed: expected one '+label+', found '+matches.length);
  result=result.replace(pattern,replacement);
 }
 once(/^[\t ]*\{id:'car_teal',kind:'sedan',[^\r\n]+\},\r?\n/gm,'','teal passenger specification');
 for(const kind of ['box_truck','electric_delivery','step_van'])once(new RegExp("^[\\t ]*\\{kind:'"+kind+"',[^\\r\\n]+\\},\\r?\\n",'gm'),'',kind+' specification');
 once(/material\('vehicle_pickup_clay','#c37458','metal',\.6\)/g,"material('vehicle_pickup_clay','#739c88','metal',.6)",'pickup body paint');
 // Fail closed if either retained authored template has moved or disappeared.
 if(!result.includes("vehicle('bus',-18,APARTMENT_BUS_STOP.lane,1,3.6)")||!result.includes("{id:'car_mustard',kind:'hatchback',start:30,lane:APARTMENT_BUS_STOP.lane,direction:1,paint:mustard,accent:graphite,speed:3.6}")||!result.includes("{kind:'pickup',start:-38,lane:APARTMENT_STREETS.returnLane,direction:-1,speed:3.8,paint:pickupPaint}"))throw Error('Retained original vehicle specifications changed');
 return result;
}
