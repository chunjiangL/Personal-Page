import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {NEAR_FOLIAGE_PART,NEAR_FOLIAGE_MATERIALS,prepareNearFoliage,applyNearFoliageWeather} from '../scripts/viewer/foliage-treatment.mjs';
import {applyCornerLightBands,settleEveningShadows} from '../scripts/viewer/street-light-bands.mjs';

function fixture(){
 const root=new T.Group(),meshes=new Map();
 function mesh(partId,id,name){
  let part=root.children.find(node=>node.userData.part_id===partId);if(!part){part=new T.Group();part.userData.part_id=partId;root.add(part);}
  const geometry=new T.SphereGeometry(1,8,6),color=new Float32Array(geometry.attributes.position.count*3);for(let i=0;i<color.length;i++)color[i]=.2+(i%11)*.055;geometry.setAttribute('color',new T.BufferAttribute(color,3));
  const material=new T.MeshPhysicalMaterial({color:'#78aa62',roughness:.84,vertexColors:true});material.name=name;
  const node=new T.Mesh(geometry,material);node.userData.mesh_id=id;part.add(node);meshes.set(id,{id,partId,node});return node;
 }
 const crown=mesh(NEAR_FOLIAGE_PART,'near-crown',NEAR_FOLIAGE_MATERIALS.crown),detail=mesh(NEAR_FOLIAGE_PART,'near-detail',NEAR_FOLIAGE_MATERIALS.detail);
 const bark=mesh(NEAR_FOLIAGE_PART,'near-bark','mat_wood_apartment_street_life_tree_bark'),soil=mesh(NEAR_FOLIAGE_PART,'near-soil','mat_clay_apartment_street_life_tree_soil');
 const distant=mesh('street_life_trees_en','far-crown','mat_clay_apartment_street_life_distant_leaf'),reused=mesh('unrelated_asset','reused-name',NEAR_FOLIAGE_MATERIALS.crown);
 const settings={appearance:{defaults:{},materials:{untouched:{base:{roughness:.55}}},meshes:{},slots:{'near-crown':{'0':{pattern:{kind:'none'},sketch:{classic:{density:5,angle:17}},edges:{important:['original-edge']}}}},resources:{}},lighting:{ambient:.075},output:{exposure:1.02}};
 return {root,crown,detail,bark,soil,distant,reused,loaded:{geometry:{meshes},settings}};
}
const geometrySnapshot=node=>({geometry:node.geometry,position:node.geometry.attributes.position.array.slice(),color:node.geometry.attributes.color.array.slice(),index:node.geometry.index.array.slice()});

test('only near crown/detail slots change, preserving authored styles outside the targeted parameters',()=>{
 const f=fixture(),settings=f.loaded.settings,materials=structuredClone(settings.appearance.materials),lighting=structuredClone(settings.lighting),output=structuredClone(settings.output);
 assert.equal(prepareNearFoliage(f.loaded),2);assert.deepEqual(Object.keys(settings.appearance.slots).sort(),['near-crown','near-detail']);
 const crown=settings.appearance.slots['near-crown']['0'],detail=settings.appearance.slots['near-detail']['0'];
 assert.equal(crown.sketch.edgeOpacity,0,'Triangle crease strokes are suppressed');assert.equal(crown.sketch.outlines,true,'Organic outer silhouette stays available');assert.ok(crown.sketch.classic.silhouetteOpacity>0&&crown.sketch.classic.silhouetteOpacity<.25);
 assert.equal(detail.sketch.outlines,false);assert.equal(detail.edges.importance,'hidden');assert.equal(crown.sketch.classic.density,5);assert.equal(crown.sketch.classic.angle,17);assert.deepEqual(crown.edges.important,['original-edge']);assert.deepEqual(crown.pattern,{kind:'none'});
 assert.deepEqual(settings.appearance.materials,materials);assert.deepEqual(settings.lighting,lighting);assert.deepEqual(settings.output,output);
 const once=structuredClone(settings);prepareNearFoliage(f.loaded);assert.deepEqual(settings,once,'Initialization is idempotent');
 assert.equal(f.crown.material.color.getHexString(),'78aa62','Canonical source material is not rewritten');
});

test('evening shadow offset tracks world texel size and excludes the lamp and daylight fits',()=>{
 const group=new T.Group(),key=new T.DirectionalLight(),lamp=new T.SpotLight();
 key.castShadow=lamp.castShadow=true;group.add(key,lamp);
 const sh=key.shadow,c=sh.camera;Object.assign(c,{left:-64,right:64,top:32,bottom:-32,near:1,far:201});
 sh.mapSize.set(2048,2048);sh.bias=-.00001;sh.normalBias=.006;
 const native=[sh.bias,sh.normalBias],lampBias=lamp.shadow.bias;
 settleEveningShadows(group,'sunny');assert.deepEqual([sh.bias,sh.normalBias],native);
 settleEveningShadows(group,'sunset');const wideDepth=-sh.bias*(c.far-c.near);
 assert.ok(wideDepth>.03&&wideDepth<.04);assert.ok(sh.normalBias>.03&&sh.normalBias<=.04);
 c.far=401;settleEveningShadows(group,'night');assert.equal(-sh.bias*(c.far-c.near),wideDepth);
 sh.mapSize.set(4096,4096);settleEveningShadows(group,'night');assert.equal(-sh.bias*(c.far-c.near),wideDepth/2);
 assert.equal(lamp.shadow.bias,lampBias);key.dispose();lamp.dispose();
});

test('both plaster floors and neighbouring masonry use the same evening pen, separate from shop paper',()=>{
 const root=new T.Group(),names=['cream','upper_plaster','shop-paper','street-wall'];
 const materials=names.map((id,i)=>{
  const m=new T.MeshStandardMaterial();m.name=i===2?'mat_clay_apartment_corner_paper':i===3?'mat_clay_apartment_neighbourhood_building_wall__building_1':'mat_clay_apartment_corner_'+id;
  m.onBeforeCompile=shader=>{shader.fragmentShader='labPaper=apartmentWash+totalEmissiveRadiance;';};
  root.add(new T.Mesh(new T.BoxGeometry(),m));return m;
 });
 const shopHook=materials[2].onBeforeCompile;
 applyCornerLightBands(root,'sunny');
 const shaders=[0,1,3].map(i=>{const shader={uniforms:{}};materials[i].onBeforeCompile(shader,{});return shader;});
 for(const [weather,active] of [['sunset',true],['night',true],['rain',false],['sunny',false]]){
  applyCornerLightBands(root,weather);
  const pens=shaders.map(s=>s.uniforms.uGalleryEveningPen.value);
  assert.equal(new Set(pens).size,1);assert.equal(pens[0]>0,active);
  assert.equal(materials[1].shadowSide,active?T.BackSide:null);assert.equal(materials[2].onBeforeCompile,shopHook);
 }
});

test('weather preserves native shader chain and cached geometry; only the crown adds a stable accent pass',()=>{
 const f=fixture(),nodes=[f.crown,f.detail,f.bark,f.soil,f.distant,f.reused],snapshots=nodes.map(geometrySnapshot),untouched=nodes.slice(2).map(node=>node.material.color.clone());
 let compilations=0;
 const compile=shader=>{compilations++;shader.uniforms.nativeWeather={value:1};shader.fragmentShader='// original lighting and pen\nlabPaper=apartmentWash+totalEmissiveRadiance;';},cacheKey=()=> 'original-native-weather';for(const node of nodes){node.material.onBeforeCompile=compile;node.material.customProgramCacheKey=cacheKey;}
 const versions=nodes.map(node=>node.material.version),vertexColors=nodes.map(node=>node.material.vertexColors),nativeNight=f.crown.material.color.clone();
 let crownCompile,shader,lastHatch;
 for(const weather of ['sunny','rain','overcast','sunset','night']){
  assert.equal(applyNearFoliageWeather(f.root,weather),2);
  for(let i=0;i<nodes.length;i++){
   const node=nodes[i],before=snapshots[i];assert.equal(node.geometry,before.geometry);assert.deepEqual(node.geometry.attributes.position.array,before.position);assert.deepEqual(node.geometry.attributes.color.array,before.color);assert.deepEqual(node.geometry.index.array,before.index);
   if(i===0){
    crownCompile??=node.material.onBeforeCompile;assert.equal(node.material.onBeforeCompile,crownCompile,'Weather does not stack shader hooks');
    assert.ok(node.material.customProgramCacheKey().startsWith(cacheKey()+'-gallery-foliage-'));assert.equal(node.material.version,versions[i]+1,'Only the first installation recompiles');
   }else{assert.equal(node.material.onBeforeCompile,compile);assert.equal(node.material.customProgramCacheKey,cacheKey);assert.equal(node.material.version,versions[i]);}
   assert.equal(node.material.vertexColors,vertexColors[i]);assert.equal(node.material.emissive.getHex(),0);
  }
  if(!shader){shader={uniforms:{},fragmentShader:''};crownCompile.call(f.crown.material,shader,{});}
  assert.ok(shader.uniforms.uGalleryFoliageHatch.value>0&&shader.uniforms.uGalleryFoliageHatch.value<=.25);lastHatch=shader.uniforms.uGalleryFoliageHatch.value;
  nodes.slice(2).forEach((node,i)=>assert.ok(node.material.color.equals(untouched[i])));
 }
 assert.equal(compilations,1);assert.equal(shader.uniforms.nativeWeather.value,1);assert.ok(shader.fragmentShader.includes('// original lighting and pen'));assert.ok(shader.fragmentShader.includes('labPaper=apartmentWash+totalEmissiveRadiance;'));assert.ok(shader.fragmentShader.includes('labClassicCoverage()'));assert.ok(shader.fragmentShader.includes('uApartmentSunDirection'));assert.ok(lastHatch<.05,'Night accent stays restrained');
 assert.ok(f.crown.material.color.r>nativeNight.r*2&&f.crown.material.color.b>nativeNight.b*2,'Night reflectance recovers the tinted vertex-color channels');
 assert.ok(f.crown.material.color.g>f.crown.material.color.r&&f.crown.material.color.r>f.crown.material.color.b,'Reflected palette remains a muted natural green');
 applyNearFoliageWeather(f.root,'sunny');const sunny=f.crown.material.color.clone();applyNearFoliageWeather(f.root,'night');applyNearFoliageWeather(f.root,'sunny');assert.ok(f.crown.material.color.equals(sunny),'Weather changes do not accumulate tint');
});

test('material arrays target the matching foliage slot and leave neighboring slots intact',()=>{
 const f=fixture(),stone=new T.MeshStandardMaterial({color:'#777777'});stone.name='stone';f.crown.material=[stone,f.crown.material];
 prepareNearFoliage(f.loaded);assert.ok(f.loaded.settings.appearance.slots['near-crown']['1']);assert.equal(f.loaded.settings.appearance.slots['near-crown']['0'].base,undefined);
 applyNearFoliageWeather(f.root,'night');assert.equal(stone.color.getHexString(),'777777');
});

test('painted corner lighting follows weather on the compiled material and leaves glass and interiors alone',()=>{
 const root=new T.Group();
 const materials=['mat_clay_apartment_corner_cream','mat_glass_apartment_corner_glass','mat_clay_apartment_corner_interior'].map(name=>{
  const material=new T.MeshStandardMaterial();
  material.name=name;
  return material;
 });
 root.add(new T.Mesh(new T.BoxGeometry(),materials),new T.Mesh(new T.BoxGeometry(),materials[0]));
 const [wall,glass,interior]=materials;
 const nativeCompile=glass.onBeforeCompile;
 wall.onBeforeCompile=shader=>{shader.fragmentShader='labPaper=apartmentWash+totalEmissiveRadiance;';};
 applyCornerLightBands(root,'sunny');
 const shader={uniforms:{}};
 wall.onBeforeCompile(shader,{});
 const strength=shader.uniforms.uGalleryBandStrength;
 const version=wall.version;
 assert.equal(strength.value,1);
 for(const weather of ['rain','night','sunset']){
  applyCornerLightBands(root,weather);
  if(weather==='rain')assert.ok(strength.value>0&&strength.value<.5);
  if(weather==='night')assert.equal(strength.value,0);
  if(weather==='sunset')assert.equal(strength.value,1);
  assert.equal(wall.version,version);
  assert.equal(glass.onBeforeCompile,nativeCompile);
  assert.equal(interior.onBeforeCompile,nativeCompile);
 }
});
