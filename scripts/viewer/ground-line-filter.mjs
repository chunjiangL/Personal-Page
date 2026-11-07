// Integrate the authored periodic joint over a pixel, rather than broadening
// its folded distance field. The latter changed thickness at every slab seam.
export const pavementFilterGLSL=`
float galleryJointIntegral(float x,float halfWidth){
 float cell=floor(x),f=x-cell;
 return cell*(2.*halfWidth)+min(f,halfWidth)+max(0.,f-(1.-halfWidth));
}
float galleryJointCoverage(float coordinate,float halfWidth,float footprint){
 float span=max(footprint,.00001);
 return clamp((galleryJointIntegral(coordinate+span*.5,halfWidth)-galleryJointIntegral(coordinate-span*.5,halfWidth))/span,0.,1.);
}
`;

const authoredJoints=`vec2 slabP=groundP/vec2(1.2,.8);slabP.x+=mod(floor(slabP.y),2.)*.5;
 vec2 slabEdge=min(fract(slabP),1.-fract(slabP))*vec2(1.2,.8);
 float jointDistance=min(slabEdge.x,slabEdge.y),jointAA=max(fwidth(jointDistance),.001);
 float joint=(1.-smoothstep(.008,.008+jointAA*.70,jointDistance))*step(.8,abs(vLabObjectNormal.y));
 apartmentWash*=.985+.03*apartmentGrainHash(floor(slabP));`;

const filteredJoints=`vec2 slabUV=groundP/vec2(1.2,.8);
 // Derivatives must precede floor/fract and the alternating row offset.
 vec2 slabPixel=max(fwidth(slabUV),vec2(.00001)),jointWidth=vec2(.008)/vec2(1.2,.8);
 vec2 slabDetail=1.-smoothstep(vec2(.12),vec2(.45),slabPixel);
 float rowOffset=mod(floor(slabUV.y),2.)*.5;
 float across=galleryJointCoverage(slabUV.x+rowOffset,jointWidth.x,slabPixel.x);
 float adjacent=galleryJointCoverage(slabUV.x+.5-rowOffset,jointWidth.x,slabPixel.x);
 float rowFraction=fract(slabUV.y);
 float adjacentWeight=clamp((slabPixel.y*.5-rowFraction)/slabPixel.y,0.,.5)+clamp((rowFraction+slabPixel.y*.5-1.)/slabPixel.y,0.,.5);
 across=mix(across,adjacent,adjacentWeight)*slabDetail.x*slabDetail.y;
 float along=galleryJointCoverage(slabUV.y,jointWidth.y,slabPixel.y)*slabDetail.y;
 float joint=(across+along-across*along)*step(.8,abs(vLabObjectNormal.y));
 vec2 slabP=slabUV+vec2(rowOffset,0.);
 apartmentWash*=.985+.03*mix(.5,apartmentGrainHash(floor(slabP)),slabDetail.x*slabDetail.y);`;

/** Read-only adapter for this pavement's sampling defect. All native ground
 * pigment, pen strokes, shadow response, material colors and weather survive. */
export function adaptGroundSurfaceSource(source){
 const normalized=source.replaceAll('\r\n','\n'),uniform='uniform sampler2D uApartmentGroundPaper;';
 const jointInk='apartmentWash=mix(apartmentWash,apartmentWash*vec3(.53,.52,.48),joint*.72);';
 if(normalized.split(authoredJoints).length!==2||normalized.split(uniform).length!==2||normalized.split(jointInk).length!==2)throw Error('Original pavement joint changed');
 return normalized.replace(uniform,uniform+'\n'+pavementFilterGLSL).replace(authoredJoints,filteredJoints)
  .replace(jointInk,jointInk.replace('joint*.72','joint*.46'));
}
