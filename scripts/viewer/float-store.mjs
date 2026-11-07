// Retain prepared Float32 blocks directly instead of boxing millions of floats
// into a JS number array before copying them into the GPU atlas.
export class FloatStore {
  parts=[]; tail=new Float32Array(65536); used=0; length=0;
  flush(){if(this.used){this.parts.push(this.tail.slice(0,this.used));this.used=0;}}
  push(...values){for(const value of values){if(this.used===this.tail.length)this.flush();this.tail[this.used++]=value;this.length++;}}
  append(values){this.flush();this.parts.push(values);this.length+=values.length;}
  writeTo(target){let offset=0;for(const part of this.parts){target.set(part,offset);offset+=part.length;}target.set(this.tail.subarray(0,this.used),offset);}
  slice(start=0){const result=new Float32Array(this.length-start);let offset=0,out=0;for(const part of [...this.parts,this.tail.subarray(0,this.used)]){const from=Math.max(0,start-offset);if(from<part.length){result.set(part.subarray(from),out);out+=part.length-from;}offset+=part.length;}return result;}
}
