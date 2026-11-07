/** Dense, material-merged buildings need a feature scale, not a whole-building
 * scale, for crease-line LOD. Reuse the native edge shader's smooth pixel fade;
 * leave its code, the surface geometry, and silhouette budget unchanged. */
export function applyInstanceContourLod(edges,source,lengthRatio){
 if(!source.isInstancedMesh||!source.userData.street_prop?.startsWith('building_'))return;
 const bounds=edges.getAttribute('labLodBounds');
 if(!bounds||!Number.isFinite(lengthRatio)||lengthRatio<=0)return;
 // Allow two CSS pixels between the paired edges of narrow window/trim parts.
 // Map this density threshold to the native edge fade's 70px endpoint.
 const scale=Math.min(1,70/Math.max(70,4*lengthRatio));
 const points=edges.getAttribute('position');
 const trim=/_building_(?:paint|iron|hardware|glass|litglass|shopglass)__/.test(source.material?.name||'');
 for(let i=0;i<bounds.count;i+=2){
  let diameter=bounds.getW(i)*scale;
  // Window frames repeat many short segments. Filter by the length of this
  // pair as well: a subpixel bevel can retire while its longer jamb remains.
  if(trim && points){
   const length=Math.hypot(points.getX(i+1)-points.getX(i),points.getY(i+1)-points.getY(i),points.getZ(i+1)-points.getZ(i));
   diameter=Math.min(diameter,8*length);
  }
  bounds.setW(i,diameter);
  bounds.setW(i+1,diameter);
 }
 bounds.needsUpdate=true;
}
