import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

/** All encodings preserve the original Float32 bit patterns; no filters/quantization. */
export const geometryCodecReady=MeshoptDecoder.ready;

function integer(value,label){
 if(!Number.isSafeInteger(value)||value<0)throw Error('Invalid geometry '+label);
 return value;
}
function byteView(value){
 if(value instanceof ArrayBuffer)return new Uint8Array(value);
 if(ArrayBuffer.isView(value))return new Uint8Array(value.buffer,value.byteOffset,value.byteLength);
 throw Error('Geometry chunk must be a byte buffer');
}
function floats(bytes){
 if(bytes.byteLength%4)throw Error('Geometry Float32 byte length differs');
 if(bytes.byteOffset%4)return new Float32Array(bytes.slice().buffer);
 return new Float32Array(bytes.buffer,bytes.byteOffset,bytes.byteLength/4);
}

/** Decode one manifest view from an already gunzipped compact chunk. */
export function decodeGeometryArray(chunk,view){
 const bytes=byteView(chunk),length=integer(view.length,'length'),offset=integer(view.byteOffset,'byte offset');
 const encoding=view.encoding||'raw',encodedLength=integer(view.encodedLength??length*4,'encoded length');
 if(offset>bytes.byteLength||encodedLength>bytes.byteLength-offset)throw Error('Geometry view exceeds chunk');
 const source=bytes.subarray(offset,offset+encodedLength);
 if(encoding==='raw'){
  if(source.byteLength!==length*4)throw Error('Raw geometry byte length differs');
  return floats(source);
 }
 if(encoding==='dictionary'){
  const count=integer(view.dictionaryCount,'dictionary count'),size=view.indexBytes;
  if(![1,2,4].includes(size)||count<1||count>2**(size*8)||source.byteLength!==count*4+length*size)throw Error('Invalid geometry dictionary');
  const data=new DataView(source.buffer,source.byteOffset,source.byteLength),words=new Uint32Array(length),indexOffset=count*4;
  for(let i=0;i<length;i++){
   const at=indexOffset+i*size,index=size===1?data.getUint8(at):size===2?data.getUint16(at,true):data.getUint32(at,true);
   if(index>=count)throw Error('Geometry dictionary index out of bounds');
   words[i]=data.getUint32(index*4,true);
  }
  return new Float32Array(words.buffer);
 }
 const triangle=encoding==='triangle-raw'||encoding==='triangle-meshopt';
 if(!triangle&&encoding!=='meshopt')throw Error('Unsupported geometry encoding: '+encoding);
 if(triangle&&length%9)throw Error('Triangle geometry must have three repeated vec3 records');
 const decodedLength=triangle?length*4/3:length*4;
 let decoded;
 if(encoding==='triangle-raw'){
  if(source.byteLength!==decodedLength)throw Error('Triangle geometry byte length differs');
  decoded=source;
 }else{
  const stride=integer(view.byteStride,'byte stride');
  if(stride<4||stride>256||stride%4||decodedLength%stride)throw Error('Invalid meshopt geometry stride');
  decoded=new Uint8Array(decodedLength);
  MeshoptDecoder.decodeGltfBuffer(decoded,decodedLength/stride,stride,source,'ATTRIBUTES','NONE');
 }
 if(!triangle)return floats(decoded);
 const restored=new Uint8Array(length*4);
 for(let at=0,target=0;at<decoded.byteLength;at+=12,target+=36){
  const record=decoded.subarray(at,at+12);restored.set(record,target);restored.set(record,target+12);restored.set(record,target+24);
 }
 return new Float32Array(restored.buffer);
}
