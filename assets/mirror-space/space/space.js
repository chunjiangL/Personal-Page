var nv=Object.create;var Sp=Object.defineProperty;var iv=Object.getOwnPropertyDescriptor;var sv=Object.getOwnPropertyNames;var rv=Object.getPrototypeOf,ov=Object.prototype.hasOwnProperty;var av=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var lv=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of sv(e))!ov.call(s,i)&&i!==t&&Sp(s,i,{get:()=>e[i],enumerable:!(n=iv(e,i))||n.enumerable});return s};var Ht=(s,e,t)=>(t=s!=null?nv(rv(s)):{},lv(e||!s||!s.__esModule?Sp(t,"default",{value:s,enumerable:!0}):t,s));var Bt=av(M=>{"use strict";var cv={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hv={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qm=0,Gu=1,e0=2,uv=3,dv=0,Sf=1,t0=2,di=3,Oi=0,yn=1,pi=2,Di=0,Ns=1,Wu=2,Xu=3,qu=4,n0=5,es=100,i0=101,s0=102,r0=103,o0=104,a0=200,l0=201,c0=202,h0=203,Rl=204,Cl=205,u0=206,d0=207,f0=208,p0=209,m0=210,g0=211,v0=212,_0=213,x0=214,Pl=0,Il=1,Ll=2,Bs=3,Dl=4,Ul=5,Fl=6,Nl=7,Sa=0,y0=1,M0=2,Ui=0,S0=1,b0=2,E0=3,w0=4,T0=5,A0=6,R0=7,Yu="attached",C0="detached",Eh=300,Bi=301,ns=302,No=303,Oo=304,jr=306,Bo=1e3,qn=1001,zo=1002,on=1003,bf=1004,fv=1004,Tr=1005,pv=1005,Zt=1006,Ro=1007,mv=1007,gi=1008,gv=1008,ri=1009,Ef=1010,wf=1011,Lr=1012,wh=1013,zi=1014,Tn=1015,Kr=1016,Th=1017,Ah=1018,Dr=1020,Tf=35902,Af=35899,Rf=1021,Cf=1022,xn=1023,Ur=1026,Fr=1027,Rh=1028,ba=1029,Pf=1030,Ch=1031,vv=1032,Ph=1033,Co=33776,Po=33777,Io=33778,Lo=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,$l=37813,jl=37814,Kl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,cc=36285,hc=36286,P0=2200,I0=2201,L0=2202,ko=2300,uc=2301,Al=2302,Ds=2400,Us=2401,Ho=2402,Ih=2500,If=2501,_v=0,xv=1,yv=2,D0=3200,U0=3201,Mv=3202,Sv=3203,as=0,F0=1,Ii="",wn="srgb",zs="srgb-linear",Vo="linear",xt="srgb",bv=0,Ps=7680,Ev=7681,wv=7682,Tv=7683,Av=34055,Rv=34056,Cv=5386,Pv=512,Iv=513,Lv=514,Dv=515,Uv=516,Fv=517,Nv=518,Zu=519,N0=512,O0=513,B0=514,Lf=515,z0=516,k0=517,H0=518,V0=519,Go=35044,Ov=35048,Bv=35040,zv=35045,kv=35049,Hv=35041,Vv=35046,Gv=35050,Wv=35042,Xv="100",$u="300 es",Nn=2e3,Nr=2001,qv={COMPUTE:"compute",RENDER:"render"},Yv={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Zv={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bp=1234567,Os=Math.PI/180,Or=180/Math.PI;function On(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Df(s,e){return(s%e+e)%e}function $v(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jv(s,e,t){return s!==e?(t-s)/(e-s):0}function Do(s,e,t){return(1-t)*s+t*e}function Kv(s,e,t,n){return Do(s,e,1-Math.exp(-t*n))}function Jv(s,e=1){return e-Math.abs(Df(s,e*2)-e)}function Qv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function e_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function t_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function n_(s,e){return s+Math.random()*(e-s)}function i_(s){return s*(.5-Math.random())}function s_(s){s!==void 0&&(bp=s);let e=bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r_(s){return s*Os}function o_(s){return s*Or}function a_(s){return(s&s-1)===0&&s!==0}function l_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function c_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function h_(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var u_={DEG2RAD:Os,RAD2DEG:Or,generateUUID:On,clamp:qe,euclideanModulo:Df,mapLinear:$v,inverseLerp:jv,lerp:Do,damp:Kv,pingpong:Jv,smoothstep:Qv,smootherstep:e_,randInt:t_,randFloat:n_,randFloatSpread:i_,seededRandom:s_,degToRad:r_,radToDeg:o_,isPowerOfTwo:a_,ceilPowerOfTwo:l_,floorPowerOfTwo:c_,setQuaternionFromProperEuler:h_,normalize:it,denormalize:_n},se=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),E=Math.atan2(T,p*x);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let y=a*x;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+v*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ep.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qh=new L,Ep=new un,tt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],_=i[4],y=i[7],T=i[2],E=i[5],R=i[8];return r[0]=o*v+a*x+l*T,r[3]=o*g+a*_+l*E,r[6]=o*p+a*y+l*R,r[1]=c*v+h*x+u*T,r[4]=c*g+h*_+u*E,r[7]=c*p+h*y+u*R,r[2]=d*v+f*x+m*T,r[5]=d*g+f*_+m*E,r[8]=d*p+f*y+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eu.makeScale(e,t)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eu=new tt;function G0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var d_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ar(s,e){return new d_[s](e)}function Wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W0(){let s=Wo("canvas");return s.style.display="block",s}var wp={};function Xo(s){s in wp||(wp[s]=!0,console.warn(s))}function f_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Tp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){let s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zs]:{primaries:e,whitePoint:n,transfer:Vo,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}var ht=p_();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rr,dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Wo("canvas")),rr.width=e.width,rr.height=e.height;let i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m_=0,vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tu(i[o].image)):r.push(tu(i[o]))}else r=tu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var g_=0,nu=new L,Xt=class s extends Zn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=qn,i=qn,r=Zt,o=gi,a=xn,l=ri,c=s.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=On(),this.name="",this.source=new vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Eh;Xt.DEFAULT_ANISOTROPY=1;var ut=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+d)/4,R=(u+v)/4,C=(m+g)/4;return _>y&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=R/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=C/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Xt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new vi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Br=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ju=class extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Br(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},zr=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ku=class extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new zr(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},en=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Oa.subVectors(this.max,fo),or.subVectors(e.a,fo),ar.subVectors(e.b,fo),lr.subVectors(e.c,fo),Yi.subVectors(ar,or),Zi.subVectors(lr,ar),gs.subVectors(or,lr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!iu(t,or,ar,lr,Oa)||(t=[1,0,0,0,1,0,0,0,1],!iu(t,or,ar,lr,Oa))?!1:(Ba.crossVectors(Yi,Zi),t=[Ba.x,Ba.y,Ba.z],iu(t,or,ar,lr,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,Na=new en,or=new L,ar=new L,lr=new L,Yi=new L,Zi=new L,gs=new L,fo=new L,Oa=new L,Ba=new L,vs=new L;function iu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vs.fromArray(s,r);let a=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var v_=new en,po=new L,su=new L,$t=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):v_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);let t=po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(po,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(su)),this.expandByPoint(po.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new L,ru=new L,za=new L,$i=new L,ou=new L,ka=new L,au=new L,is=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ru.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=$i.dot(this.direction),l=-$i.dot(za),c=$i.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ru).addScaledVector(za,d),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,r){ou.subVectors(t,e),ka.subVectors(n,e),au.crossVectors(ou,ka);let o=this.direction.dot(au),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(ka.crossVectors($i,ka));if(l<0)return null;let c=a*this.direction.dot(ou.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(au);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,x_)}lookAt(e,t,n){let i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ji.crossVectors(n,Un),ji.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ji.crossVectors(n,Un)),ji.normalize(),Ha.crossVectors(Un,ji),i[0]=ji.x,i[4]=Ha.x,i[8]=Un.x,i[1]=ji.y,i[5]=Ha.y,i[9]=Un.y,i[2]=ji.z,i[6]=Ha.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],_=n[7],y=n[11],T=n[15],E=i[0],R=i[4],C=i[8],S=i[12],b=i[1],P=i[5],N=i[9],H=i[13],W=i[2],X=i[6],O=i[10],F=i[14],U=i[3],V=i[7],q=i[11],ee=i[15];return r[0]=o*E+a*b+l*W+c*U,r[4]=o*R+a*P+l*X+c*V,r[8]=o*C+a*N+l*O+c*q,r[12]=o*S+a*H+l*F+c*ee,r[1]=h*E+u*b+d*W+f*U,r[5]=h*R+u*P+d*X+f*V,r[9]=h*C+u*N+d*O+f*q,r[13]=h*S+u*H+d*F+f*ee,r[2]=m*E+v*b+g*W+p*U,r[6]=m*R+v*P+g*X+p*V,r[10]=m*C+v*N+g*O+p*q,r[14]=m*S+v*H+g*F+p*ee,r[3]=x*E+_*b+y*W+T*U,r[7]=x*R+_*P+y*X+T*V,r[11]=x*C+_*N+y*O+T*q,r[15]=x*S+_*H+y*F+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=u*g*c-v*d*c+v*l*f-a*g*f-u*l*p+a*d*p,_=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*v*c-m*u*c+m*a*f-o*v*f-h*a*p+o*u*p,T=m*u*l-h*v*l-m*a*d+o*v*d+h*a*g-o*u*g,E=t*x+n*_+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=x*R,e[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=_*R,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=y*R,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*p-t*u*p)*R,e[10]=(o*v*r-m*a*r+m*n*c-t*v*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=T*R,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*g+t*u*g)*R,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*g-t*a*g)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,x=l*c,_=l*h,y=l*u,T=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*T,i[1]=(f+y)*T,i[2]=(m-_)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+_)*R,i[9]=(g-x)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=cr.set(i[0],i[1],i[2]).length(),o=cr.set(i[4],i[5],i[6]).length(),a=cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);let c=1/r,h=1/o,u=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Nn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Nr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Nn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Nr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new L,ti=new je,__=new L(0,0,0),x_=new L(1,1,1),ji=new L,Ha=new L,Un=new L,Rp=new je,Cp=new un,Bn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y_=0,Pp=new L,hr=new un,Ai=new je,Va=new L,mo=new L,M_=new L,S_=new un,Ip=new L(1,0,0),Lp=new L(0,1,0),Dp=new L(0,0,1),Up={type:"added"},b_={type:"removed"},ur={type:"childadded",child:null},lu={type:"childremoved",child:null},pt=class s extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Bn,n=new un,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new tt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(mo,Va,this.up):Ai.lookAt(Va,mo,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Ai),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Up),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b_),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Up),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,M_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,S_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};pt.DEFAULT_UP=new L(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new L,Ri=new L,cu=new L,Ci=new L,dr=new L,fr=new L,Fp=new L,hu=new L,uu=new L,du=new L,fu=new ut,pu=new ut,mu=new ut,mi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ni.subVectors(i,t),Ri.subVectors(n,t),cu.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ri),l=ni.dot(cu),c=Ri.dot(Ri),h=Ri.dot(cu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return fu.setScalar(0),pu.setScalar(0),mu.setScalar(0),fu.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fu,r.x),o.addScaledVector(pu,r.y),o.addScaledVector(mu,r.z),o}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Ri.subVectors(e,t),ni.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ni.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;dr.subVectors(i,n),fr.subVectors(r,n),hu.subVectors(e,n);let l=dr.dot(hu),c=fr.dot(hu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,i);let h=dr.dot(uu),u=fr.dot(uu);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(dr,o);du.subVectors(e,r);let f=dr.dot(du),m=fr.dot(du);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(fr,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Fp.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Fp,a);let p=1/(g+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function gu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Df(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){let n=X0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return ht.workingToColorSpace(cn.copy(this),e),Math.round(qe(cn.r*255,0,255))*65536+Math.round(qe(cn.g*255,0,255))*256+Math.round(qe(cn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(cn.copy(this),t);let n=cn.r,i=cn.g,r=cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=wn){ht.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,i=cn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Ga);let n=Do(Ki.h,Ga.h,t),i=Do(Ki.s,Ga.s,t),r=Do(Ki.l,Ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Te;Te.NAMES=X0;var E_=0,tn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ns,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xi=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Li=w_();function w_(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function En(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=qe(s,-65504,65504),Li.floatView[0]=s;let e=Li.uint32View[0],t=e>>23&511;return Li.baseTable[t]+((e&8388607)>>Li.shiftTable[t])}function wo(s){let e=s>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[e]+(s&1023)]+Li.exponentTable[e],Li.floatView[0]}var Ju=class{static toHalfFloat(e){return En(e)}static fromHalfFloat(e){return wo(e)}},Wt=new L,Wa=new se,T_=0,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}},Qu=class extends vt{constructor(e,t,n){super(new Int8Array(e),t,n)}},ed=class extends vt{constructor(e,t,n){super(new Uint8Array(e),t,n)}},td=class extends vt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},nd=class extends vt{constructor(e,t,n){super(new Int16Array(e),t,n)}},Yo=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},id=class extends vt{constructor(e,t,n){super(new Int32Array(e),t,n)}},Zo=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},sd=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=wo(this.array[e*this.itemSize]);return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=En(t),this}getY(e){let t=wo(this.array[e*this.itemSize+1]);return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=En(t),this}getZ(e){let t=wo(this.array[e*this.itemSize+2]);return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=En(t),this}getW(e){let t=wo(this.array[e*this.itemSize+3]);return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=En(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this.array[e+2]=En(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this.array[e+2]=En(i),this.array[e+3]=En(r),this}},Re=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},A_=0,Xn=new je,vu=new pt,pr=new L,Fn=new en,go=new en,Qt=new L,st=class s extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Zo:Yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Fn.min,go.min),Fn.expandByPoint(Qt),Qt.addVectors(Fn.max,go.max),Fn.expandByPoint(Qt)):(Fn.expandByPoint(go.min),Fn.expandByPoint(go.max))}Fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Qt.add(pr)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let c=new L,h=new L,u=new L,d=new se,f=new se,m=new se,v=new L,g=new L;function p(C,S,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(v),a[S].add(v),a[b].add(v),l[C].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,S=x.length;C<S;++C){let b=x[C],P=b.start,N=b.count;for(let H=P,W=P+N;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new L,y=new L,T=new L,E=new L;function R(C){T.fromBufferAttribute(i,C),E.copy(T);let S=a[C];_.copy(S),_.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=x.length;C<S;++C){let b=x[C],P=b.start,N=b.count;for(let H=P,W=P+N;H<W;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Np=new je,_s=new is,Xa=new $t,Op=new L,qa=new L,Ya=new L,Za=new L,_u=new L,$a=new L,Bp=new L,ja=new L,Ot=class extends pt{constructor(e=new st,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_u.fromBufferAttribute(u,e),o?$a.addScaledVector(_u,h):$a.addScaledVector(_u.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Xa.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Xa,Op)===null||_s.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Np.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Np),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,T=_;y<T;y+=3){let E=a.getX(y),R=a.getX(y+1),C=a.getX(y+2);i=Ka(this,p,e,n,c,h,u,E,R,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=Ka(this,o,e,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,T=_;y<T;y+=3){let E=y,R=y+1,C=y+2;i=Ka(this,p,e,n,c,h,u,E,R,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=g,_=g+1,y=g+2;i=Ka(this,o,e,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function R_(s,e,t,n,i,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Oi,a),l===null)return null;ja.copy(a),ja.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:s}}function Ka(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,qa),s.getVertexPosition(l,Ya),s.getVertexPosition(c,Za);let h=R_(s,e,t,n,qa,Ya,Za,Bp);if(h){let u=new L;mi.getBarycoord(Bp,qa,Ya,Za,u),i&&(h.uv=mi.getInterpolatedAttribute(i,a,l,c,u,new se)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new se)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};mi.getNormal(qa,Ya,Za,d.normal),h.face=d,h.barycoord=u}return h}var ks=class s extends st{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function m(v,g,p,x,_,y,T,E,R,C,S){let b=y/R,P=T/C,N=y/2,H=T/2,W=E/2,X=R+1,O=C+1,F=0,U=0,V=new L;for(let q=0;q<O;q++){let ee=q*P-H;for(let le=0;le<X;le++){let Le=le*b-N;V[v]=Le*x,V[g]=ee*_,V[p]=W,c.push(V.x,V.y,V.z),V[v]=0,V[g]=0,V[p]=E>0?1:-1,h.push(V.x,V.y,V.z),u.push(le/R),u.push(1-q/C),F+=1}}for(let q=0;q<C;q++)for(let ee=0;ee<R;ee++){let le=d+ee+X*q,Le=d+ee+X*(q+1),We=d+(ee+1)+X*(q+1),ve=d+(ee+1)+X*q;l.push(le,Le,ve),l.push(Le,We,ve),U+=6}a.addGroup(f,U,S),f+=U,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(s){let e={};for(let t=0;t<s.length;t++){let n=Hr(s[t]);for(let i in n)e[i]=n[i]}return e}function C_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function q0(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Y0={clone:Hr,merge:vn},P_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vr=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new L,zp=new se,kp=new se,Yt=class extends Vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,zp,kp),t.subVectors(kp,zp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,fc=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(mr,gr,e,t);i.layers=this.layers,this.add(i);let r=new Yt(mr,gr,e,t);r.layers=this.layers,this.add(r);let o=new Yt(mr,gr,e,t);o.layers=this.layers,this.add(o);let a=new Yt(mr,gr,e,t);a.layers=this.layers,this.add(a);let l=new Yt(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new Yt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hs=class extends Xt{constructor(e=[],t=Bi,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ks(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Di});r.uniforms.tEquirect.value=t;let o=new Ot(i,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Zt),new fc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ts=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},L_={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mc=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},gc=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vc=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new L,Vs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$o=class extends tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,vo=new L,_r=new L,xr=new L,yr=new se,_o=new se,Z0=new je,Ja=new L,xo=new L,Qa=new L,Hp=new se,xu=new se,Vp=new se,_c=class extends pt{constructor(e=new $o){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Vs(n,3,0,!1)),vr.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Z0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-xr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;el(Ja.set(-.5,-.5,0),xr,o,_r,i,r),el(xo.set(.5,-.5,0),xr,o,_r,i,r),el(Qa.set(.5,.5,0),xr,o,_r,i,r),Hp.set(0,0),xu.set(1,0),Vp.set(1,1);let a=e.ray.intersectTriangle(Ja,xo,Qa,!1,vo);if(a===null&&(el(xo.set(-.5,.5,0),xr,o,_r,i,r),xu.set(0,1),a=e.ray.intersectTriangle(Ja,Qa,xo,!1,vo),a===null))return;let l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||t.push({distance:l,point:vo.clone(),uv:mi.getInterpolation(vo,Ja,xo,Qa,Hp,xu,Vp,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function el(s,e,t,n,i,r){yr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(_o.x=r*yr.x-i*yr.y,_o.y=i*yr.x+r*yr.y):_o.copy(yr),s.copy(e),s.x+=_o.x,s.y+=_o.y,s.applyMatrix4(Z0)}var tl=new L,Gp=new L,xc=class extends pt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){tl.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(tl);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){tl.setFromMatrixPosition(e.matrixWorld),Gp.setFromMatrixPosition(this.matrixWorld);let n=tl.distanceTo(Gp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Wp=new L,Xp=new ut,qp=new ut,D_=new L,Yp=new je,nl=new L,yu=new $t,Zp=new je,Mu=new is,yc=class extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingBox.expandByPoint(nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingSphere.expandByPoint(nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(i),e.ray.intersectsSphere(yu)!==!1&&(Zp.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(Zp),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===C0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Xp.fromBufferAttribute(i.attributes.skinIndex,e),qp.fromBufferAttribute(i.attributes.skinWeight,e),Wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=qp.getComponent(r);if(o!==0){let a=Xp.getComponent(r);Yp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(D_.copy(Wp).applyMatrix4(Yp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},jo=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yn=class extends Xt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=on,h=on,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$p=new je,U_=new je,Mc=class s{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:U_;$p.multiplyMatrices(a,t[r]),$p.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yn(t,e,e,xn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new jo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ss=class extends vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new je,jp=new je,il=[],Kp=new en,F_=new je,yo=new Ot,Mo=new $t,Sc=class extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,F_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Kp.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Kp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Mo.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),jp.multiplyMatrices(n,Mr),yo.matrixWorld=jp,yo.raycast(e,il);for(let o=0,a=il.length;o<a;o++){let l=il[o];l.instanceId=r,l.object=this,t.push(l)}il.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(i*this.count),i,this.count,Rh,Tn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Su=new L,N_=new L,O_=new tt,fi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Su.subVectors(n,t).cross(N_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Su),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||O_.getNormalMatrix(e),i=this.coplanarPoint(Su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new $t,B_=new se(.5,.5),sl=new L,rs=class{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,o=new fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],x=r[12],_=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,p-m,T-x).normalize(),i[1].setComponents(c+o,f+h,p+m,T+x).normalize(),i[2].setComponents(c+a,f+u,p+v,T+_).normalize(),i[3].setComponents(c-a,f-u,p-v,T-_).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,p-g,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-g,T-y).normalize(),t===Nn)i[5].setComponents(c+l,f+d,p+g,T+y).normalize();else if(t===Nr)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=B_.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(sl.x=i.normal.x>0?e.max.x:e.min.x,sl.y=i.normal.y>0?e.max.y:e.min.y,sl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hi=new je,ui=new rs,bc=class s{constructor(){this.coordinateSystem=Nn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(hi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ui.setFromProjectionMatrix(hi,i.coordinateSystem,i.reversedDepth),ui.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(hi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ui.setFromProjectionMatrix(hi,i.coordinateSystem,i.reversedDepth),ui.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(hi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ui.setFromProjectionMatrix(hi,i.coordinateSystem,i.reversedDepth),ui.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(hi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ui.setFromProjectionMatrix(hi,i.coordinateSystem,i.reversedDepth),ui.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(hi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ui.setFromProjectionMatrix(hi,i.coordinateSystem,i.reversedDepth),ui.containsPoint(e))return!0}return!1}clone(){return new s}};function bu(s,e){return s-e}function z_(s,e){return s.z-e.z}function k_(s,e){return e.z-s.z}var rd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},bn=new je,H_=new Te(1,1,1),Jp=new rs,V_=new bc,rl=new en,ys=new $t,So=new L,Qp=new L,G_=new L,Eu=new rd,hn=new Ot,ol=[];function W_(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ms(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var Ec=class extends Ot{constructor(e,t,n=t*2,i){super(new st,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Yn(t,e,e,xn,Tn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Yn(t,e,e,ba,zi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Yn(t,e,e,xn,Tn);n.colorSpace=ht.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new vt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new vt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,bn),this.getBoundingBoxAt(r,rl).applyMatrix4(bn),e.union(rl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,bn),this.getBoundingSphereAt(r,ys).applyMatrix4(bn),e.union(ys)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(bu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;bn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(H_.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(bu),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);W_(u,d,l);let f=u.itemSize;for(let m=u.count,v=c;m<v;m++){let g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,m=f.array,v=e-u;for(let g=h;g<h+d;g++)m[g]=m[g]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let m=d[f],{array:v,itemSize:g}=m;v.copyWithin(e*g,h*g,(h+u)*g),m.addUpdateRange(e*g,u*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new en,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(So.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new $t;this.getBoundingBoxAt(e,rl),rl.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),So.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(So))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(bu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ms(this._multiDrawCounts,i),Ms(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ms(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ms(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ms(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new st,this._initializeGeometry(r));let o=this.geometry;r.index&&Ms(r.index.array,o.index.array);for(let a in r.attributes)Ms(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;hn.material=this.material,hn.geometry.index=o.index,hn.geometry.attributes=o.attributes,hn.geometry.boundingBox===null&&(hn.geometry.boundingBox=new en),hn.geometry.boundingSphere===null&&(hn.geometry.boundingSphere=new $t);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];hn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,hn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,hn.geometry.boundingBox),this.getBoundingSphereAt(c,hn.geometry.boundingSphere),hn.raycast(e,ol);for(let u=0,d=ol.length;u<d;u++){let f=ol[u];f.object=this,f.batchId=a,t.push(f)}ol.length=0}hn.material=null,hn.geometry.index=null,hn.geometry.attributes={},hn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,v=n.isArrayCamera?V_:Jp;d&&!n.isArrayCamera&&(bn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Jp.setFromProjectionMatrix(bn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){bn.copy(this.matrixWorld).invert(),So.setFromMatrixPosition(n.matrixWorld).applyMatrix4(bn),Qp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(bn);for(let _=0,y=l.length;_<y;_++)if(l[_].visible&&l[_].active){let T=l[_].geometryIndex;this.getMatrixAt(_,bn),this.getBoundingSphereAt(T,ys).applyMatrix4(bn);let E=!1;if(d&&(E=!v.intersectsSphere(ys,n)),!E){let R=u[T],C=G_.subVectors(ys.center,So).dot(Qp);Eu.push(R.start,R.count,C,_)}}let p=Eu.list,x=this.customSort;x===null?p.sort(r.transparent?k_:z_):x.call(this,p,n);for(let _=0,y=p.length;_<y;_++){let T=p[_];c[g]=T.start*a,h[g]=T.count,m[g]=T.index,g++}Eu.reset()}else for(let p=0,x=l.length;p<x;p++)if(l[p].visible&&l[p].active){let _=l[p].geometryIndex,y=!1;if(d&&(this.getMatrixAt(p,bn),this.getBoundingSphereAt(_,ys).applyMatrix4(bn),y=!v.intersectsSphere(ys,n)),!y){let T=u[_];c[g]=T.start*a,h[g]=T.count,m[g]=p,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}},an=class extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wc=new L,Tc=new L,em=new je,bo=new is,al=new $t,wu=new L,tm=new L,yi=class extends pt{constructor(e=new st,t=new an){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)wc.fromBufferAttribute(t,i-1),Tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wc.distanceTo(Tc);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(i),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;em.copy(i).invert(),bo.copy(e.ray).applyMatrix4(em);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),x=h.getX(v+1),_=ll(this,e,bo,l,p,x,v);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=ll(this,e,bo,l,v,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=ll(this,e,bo,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=ll(this,e,bo,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ll(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(wc.fromBufferAttribute(a,i),Tc.fromBufferAttribute(a,r),t.distanceSqToSegment(wc,Tc,wu,tm)>n)return;wu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(wu);if(!(c<e.near||c>e.far))return{distance:c,point:tm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var nm=new L,im=new L,jn=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nm.fromBufferAttribute(t,i),im.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nm.distanceTo(im);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ac=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ko=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sm=new je,od=new is,cl=new $t,hl=new L,Rc=class extends pt{constructor(e=new st,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;sm.copy(i).invert(),od.copy(e.ray).applyMatrix4(sm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let g=c.getX(m);hl.fromBufferAttribute(u,g),rm(hl,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)hl.fromBufferAttribute(u,m),rm(hl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rm(s,e,t,n,i,r,o){let a=od.distanceSqToPoint(s);if(a<t){let l=new L;od.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cc=class extends Xt{constructor(e,t,n,i,r=Zt,o=Zt,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}},ad=class extends Cc{constructor(e,t,n,i,r,o,a,l){super({},e,t,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},ld=class extends Xt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=on,this.minFilter=on,this.generateMipmaps=!1,this.needsUpdate=!0}},Wr=class extends Xt{constructor(e,t,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},cd=class extends Wr{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=qn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hd=class extends Wr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Bi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},ud=class extends Xt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jo=class extends Xt{constructor(e,t,n=zi,i,r,o,a=on,l=on,c,h=Ur,u=1){if(h!==Ur&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qo=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pc=class s extends st{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=i+1,g=new L,p=new L;for(let x=0;x<=m;x++){let _=0,y=0,T=0,E=0;if(x<=n){let S=x/n,b=S*Math.PI/2;y=-h-e*Math.cos(b),T=e*Math.sin(b),E=-e*Math.cos(b),_=S*u}else if(x<=n+r){let S=(x-n)/r;y=-h+S*t,T=e,E=0,_=u+S*d}else{let S=(x-n-r)/n,b=S*Math.PI/2;y=h+e*Math.sin(b),T=e*Math.cos(b),E=e*Math.sin(b),_=u+d+S*u}let R=Math.max(0,Math.min(1,_/f)),C=0;x===0?C=.5/i:x===m&&(C=-.5/i);for(let S=0;S<=i;S++){let b=S/i,P=b*Math.PI*2,N=Math.sin(P),H=Math.cos(P);p.x=-T*H,p.y=y,p.z=T*N,a.push(p.x,p.y,p.z),g.set(-T*H,E,T*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+C,R)}if(x>0){let S=(x-1)*v;for(let b=0;b<i;b++){let P=S+b,N=S+b+1,H=x*v+b,W=x*v+b+1;o.push(P,N,H),o.push(N,W,H)}}}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ic=class s extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ea=class s extends st{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function x(){let y=new L,T=new L,E=0,R=(t-e)/n;for(let C=0;C<=r;C++){let S=[],b=C/r,P=b*(t-e)+e;for(let N=0;N<=i;N++){let H=N/i,W=H*l+a,X=Math.sin(W),O=Math.cos(W);T.x=P*X,T.y=-b*n+g,T.z=P*O,u.push(T.x,T.y,T.z),y.set(X,R,O).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-b),S.push(m++)}v.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){let b=v[S][C],P=v[S+1][C],N=v[S+1][C+1],H=v[S][C+1];(e>0||S!==0)&&(h.push(b,P,H),E+=3),(t>0||S!==r-1)&&(h.push(P,N,H),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){let T=m,E=new se,R=new L,C=0,S=y===!0?e:t,b=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let P=m;for(let N=0;N<=i;N++){let W=N/i*l+a,X=Math.cos(W),O=Math.sin(W);R.x=S*O,R.y=g*b,R.z=S*X,u.push(R.x,R.y,R.z),d.push(0,b,0),E.x=X*.5+.5,E.y=O*.5*b+.5,f.push(E.x,E.y),m++}for(let N=0;N<i;N++){let H=T+N,W=P+N;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class s extends ea{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},os=class s extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new L,y=new L,T=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],y),f(t[E+2],T),l(_,y,T,x)}function l(x,_,y,T){let E=T+1,R=[];for(let C=0;C<=E;C++){R[C]=[];let S=x.clone().lerp(y,C/E),b=_.clone().lerp(y,C/E),P=E-C;for(let N=0;N<=P;N++)N===0&&C===E?R[C][N]=S:R[C][N]=S.clone().lerp(b,N/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let b=Math.floor(S/2);S%2===0?(d(R[C][b+1]),d(R[C+1][b]),d(R[C][b])):(d(R[C][b+1]),d(R[C+1][b+1]),d(R[C+1][b]))}}function c(x){let _=new L;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let x=new L;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let y=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(y,1-T)}m(),u()}function u(){for(let x=0;x<o.length;x+=6){let _=o[x+0],y=o[x+2],T=o[x+4],E=Math.max(_,y,T),R=Math.min(_,y,T);E>.9&&R<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let x=new L,_=new L,y=new L,T=new L,E=new se,R=new se,C=new se;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),T.copy(x).add(_).add(y).divideScalar(3);let P=g(T);v(E,b+0,x,P),v(R,b+2,_,P),v(C,b+4,y,P)}}function v(x,_,y,T){T<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Lc=class s extends os{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ul=new L,dl=new L,Tu=new L,fl=new mi,Dc=class extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:p}=fl;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),fl.getNormal(Tu),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let _=(x+1)%3,y=u[x],T=u[_],E=fl[h[x]],R=fl[h[_]],C=`${y}_${T}`,S=`${T}_${y}`;S in d&&d[S]?(Tu.dot(d[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[S]=null):C in d||(d[C]={index0:c[x],index1:c[_],normal:Tu.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];ul.fromBufferAttribute(a,v),dl.fromBufferAttribute(a,g),f.push(ul.x,ul.y,ul.z),f.push(dl.x,dl.y,dl.z)}this.setAttribute("position",new Re(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new se:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],o=[],a=new L,l=new je;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends kn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uc=class extends Xr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var pl=new L,Au=new Uf,Ru=new Uf,Cu=new Uf,Fc=class extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(pl.subVectors(i[0],i[1]).add(i[0]),c=pl);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(pl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=pl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Au.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),Ru.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),Cu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ru.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Au.calc(l),Ru.calc(l),Cu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function om(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function X_(s,e){let t=1-s;return t*t*e}function q_(s,e){return 2*(1-s)*s*e}function Y_(s,e){return s*s*e}function Uo(s,e,t,n){return X_(s,e)+q_(s,t)+Y_(s,n)}function Z_(s,e){let t=1-s;return t*t*t*e}function $_(s,e){let t=1-s;return 3*t*t*s*e}function j_(s,e){return 3*(1-s)*s*s*e}function K_(s,e){return s*s*s*e}function Fo(s,e,t,n,i){return Z_(s,e)+$_(s,t)+j_(s,n)+K_(s,i)}var na=class extends kn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,i.x,r.x,o.x,a.x),Fo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends kn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,i.x,r.x,o.x,a.x),Fo(e,i.y,r.y,o.y,a.y),Fo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends kn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends kn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends kn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,i.x,r.x,o.x),Uo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends kn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,i.x,r.x,o.x),Uo(e,i.y,r.y,o.y),Uo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(om(a,l.x,c.x,h.x,u.x),om(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Bc=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Fc,CubicBezierCurve:na,CubicBezierCurve3:Nc,EllipseCurve:Xr,LineCurve:ia,LineCurve3:Oc,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ra,SplineCurve:oa}),zc=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Bc[i.type]().fromJSON(i))}return this}},qr=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new sa(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new na(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Xr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ni=class extends qr{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new qr().fromJSON(i))}return this}};function J_(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=$0(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ix(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return aa(r,o,t,a,l,c,0),o}function $0(s,e,t,n,i){let r;if(i===px(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=am(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=am(o/n|0,s[o],s[o+1],r);return r&&Yr(r,r.next)&&(ca(r),r=r.next),r}function Gs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Yr(t,t.next)||It(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function aa(s,e,t,n,i,r,o){if(!s)return;!o&&r&&lx(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?ex(s,n,i,r):Q_(s)){e.push(l.i,s.i,c.i),ca(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=tx(Gs(s),e),aa(s,e,t,n,i,r,2)):o===2&&nx(s,e,t,n,i,r):aa(Gs(s),e,t,n,i,r,1);break}}}function Q_(s){let e=s.prev,t=s,n=s.next;if(It(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&To(i,a,r,l,o,c,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ex(s,e,t,n){let i=s.prev,r=s,o=s.next;if(It(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),v=Math.max(a,l,c),g=Math.max(h,u,d),p=dd(f,m,e,t,n),x=dd(v,g,e,t,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&To(a,h,l,u,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&To(a,h,l,u,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&To(a,h,l,u,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&To(a,h,l,u,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Yr(n,i)&&K0(n,t,t.next,i)&&la(n,i)&&la(i,n)&&(e.push(n.i,t.i,i.i),ca(t),ca(t.next),t=s=i),t=t.next}while(t!==s);return Gs(t)}function nx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ux(o,a)){let l=J0(o,a);o=Gs(o,o.next),l=Gs(l,l.next),aa(o,e,t,n,i,r,0),aa(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ix(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=$0(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(hx(c))}i.sort(sx);for(let r=0;r<i.length;r++)t=rx(i[r],t);return t}function sx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function rx(s,e){let t=ox(s,e);if(!t)return e;let n=J0(t,s);return Gs(n,n.next),Gs(t,t.next)}function ox(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Yr(s,t))return t;do{if(Yr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&j0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);la(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ax(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ax(s,e){return It(s.prev,s,e.prev)<0&&It(e.next,s,s.next)<0}function lx(s,e,t,n){let i=s;do i.z===0&&(i.z=dd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cx(i)}function cx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function dd(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function j0(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function To(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&j0(s,e,t,n,i,r,o,a)}function ux(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dx(s,e)&&(la(s,e)&&la(e,s)&&fx(s,e)&&(It(s.prev,s,e.prev)||It(s,e.prev,e))||Yr(s,e)&&It(s.prev,s,s.next)>0&&It(e.prev,e,e.next)>0)}function It(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yr(s,e){return s.x===e.x&&s.y===e.y}function K0(s,e,t,n){let i=gl(It(s,e,t)),r=gl(It(s,e,n)),o=gl(It(t,n,s)),a=gl(It(t,n,e));return!!(i!==r&&o!==a||i===0&&ml(s,t,e)||r===0&&ml(s,n,e)||o===0&&ml(t,s,n)||a===0&&ml(t,e,n))}function ml(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function gl(s){return s>0?1:s<0?-1:0}function dx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&K0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function la(s,e){return It(s.prev,s,s.next)<0?It(s,e,s.next)>=0&&It(s,s.prev,e)>=0:It(s,e,s.prev)<0||It(s,s.next,e)<0}function fx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function J0(s,e){let t=fd(s.i,s.x,s.y),n=fd(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function am(s,e,t,n){let i=fd(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ca(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function px(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var pd=class{static triangulate(e,t,n=2){return J_(e,t,n)}},si=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];lm(e),cm(n,e);let o=e.length;t.forEach(lm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,cm(n,t[l]);let a=pd.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var kc=class s extends st{constructor(e=new Ni([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:mx,_,y=!1,T,E,R,C;p&&(_=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),E=new L,R=new L,C=new L),d||(g=0,f=0,m=0,v=0);let S=a.extractPoints(c),b=S.shape,P=S.holes;if(!si.isClockWise(b)){b=b.reverse();for(let re=0,te=P.length;re<te;re++){let J=P[re];si.isClockWise(J)&&(P[re]=J.reverse())}}function H(re){let J=10000000000000001e-36,Q=re[0];for(let pe=1;pe<=re.length;pe++){let ae=pe%re.length,me=re[ae],Qe=me.x-Q.x,Ke=me.y-Q.y,I=Qe*Qe+Ke*Ke,w=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(Q.x),Math.abs(Q.y)),G=J*w*w;if(I<=G){re.splice(ae,1),pe--;continue}Q=me}}H(b),P.forEach(H);let W=P.length,X=b;for(let re=0;re<W;re++){let te=P[re];b=b.concat(te)}function O(re,te,J){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(te,J)}let F=b.length;function U(re,te,J){let Q,pe,ae,me=re.x-te.x,Qe=re.y-te.y,Ke=J.x-re.x,I=J.y-re.y,w=me*me+Qe*Qe,G=me*I-Qe*Ke;if(Math.abs(G)>Number.EPSILON){let j=Math.sqrt(w),oe=Math.sqrt(Ke*Ke+I*I),K=te.x-Qe/j,Oe=te.y+me/j,fe=J.x-I/oe,Ue=J.y+Ke/oe,Fe=((fe-K)*I-(Ue-Oe)*Ke)/(me*I-Qe*Ke);Q=K+me*Fe-re.x,pe=Oe+Qe*Fe-re.y;let ce=Q*Q+pe*pe;if(ce<=2)return new se(Q,pe);ae=Math.sqrt(ce/2)}else{let j=!1;me>Number.EPSILON?Ke>Number.EPSILON&&(j=!0):me<-Number.EPSILON?Ke<-Number.EPSILON&&(j=!0):Math.sign(Qe)===Math.sign(I)&&(j=!0),j?(Q=-Qe,pe=me,ae=Math.sqrt(w)):(Q=me,pe=Qe,ae=Math.sqrt(w/2))}return new se(Q/ae,pe/ae)}let V=[];for(let re=0,te=X.length,J=te-1,Q=re+1;re<te;re++,J++,Q++)J===te&&(J=0),Q===te&&(Q=0),V[re]=U(X[re],X[J],X[Q]);let q=[],ee,le=V.concat();for(let re=0,te=W;re<te;re++){let J=P[re];ee=[];for(let Q=0,pe=J.length,ae=pe-1,me=Q+1;Q<pe;Q++,ae++,me++)ae===pe&&(ae=0),me===pe&&(me=0),ee[Q]=U(J[Q],J[ae],J[me]);q.push(ee),le=le.concat(ee)}let Le;if(g===0)Le=si.triangulateShape(X,P);else{let re=[],te=[];for(let J=0;J<g;J++){let Q=J/g,pe=f*Math.cos(Q*Math.PI/2),ae=m*Math.sin(Q*Math.PI/2)+v;for(let me=0,Qe=X.length;me<Qe;me++){let Ke=O(X[me],V[me],ae);Pe(Ke.x,Ke.y,-pe),Q===0&&re.push(Ke)}for(let me=0,Qe=W;me<Qe;me++){let Ke=P[me];ee=q[me];let I=[];for(let w=0,G=Ke.length;w<G;w++){let j=O(Ke[w],ee[w],ae);Pe(j.x,j.y,-pe),Q===0&&I.push(j)}Q===0&&te.push(I)}}Le=si.triangulateShape(re,te)}let We=Le.length,ve=m+v;for(let re=0;re<F;re++){let te=d?O(b[re],le[re],ve):b[re];y?(R.copy(T.normals[0]).multiplyScalar(te.x),E.copy(T.binormals[0]).multiplyScalar(te.y),C.copy(_[0]).add(R).add(E),Pe(C.x,C.y,C.z)):Pe(te.x,te.y,0)}for(let re=1;re<=h;re++)for(let te=0;te<F;te++){let J=d?O(b[te],le[te],ve):b[te];y?(R.copy(T.normals[re]).multiplyScalar(J.x),E.copy(T.binormals[re]).multiplyScalar(J.y),C.copy(_[re]).add(R).add(E),Pe(C.x,C.y,C.z)):Pe(J.x,J.y,u/h*re)}for(let re=g-1;re>=0;re--){let te=re/g,J=f*Math.cos(te*Math.PI/2),Q=m*Math.sin(te*Math.PI/2)+v;for(let pe=0,ae=X.length;pe<ae;pe++){let me=O(X[pe],V[pe],Q);Pe(me.x,me.y,u+J)}for(let pe=0,ae=P.length;pe<ae;pe++){let me=P[pe];ee=q[pe];for(let Qe=0,Ke=me.length;Qe<Ke;Qe++){let I=O(me[Qe],ee[Qe],Q);y?Pe(I.x,I.y+_[h-1].y,_[h-1].x+J):Pe(I.x,I.y,u+J)}}}$(),ne();function $(){let re=i.length/3;if(d){let te=0,J=F*te;for(let Q=0;Q<We;Q++){let pe=Le[Q];Ee(pe[2]+J,pe[1]+J,pe[0]+J)}te=h+g*2,J=F*te;for(let Q=0;Q<We;Q++){let pe=Le[Q];Ee(pe[0]+J,pe[1]+J,pe[2]+J)}}else{for(let te=0;te<We;te++){let J=Le[te];Ee(J[2],J[1],J[0])}for(let te=0;te<We;te++){let J=Le[te];Ee(J[0]+F*h,J[1]+F*h,J[2]+F*h)}}n.addGroup(re,i.length/3-re,0)}function ne(){let re=i.length/3,te=0;be(X,te),te+=X.length;for(let J=0,Q=P.length;J<Q;J++){let pe=P[J];be(pe,te),te+=pe.length}n.addGroup(re,i.length/3-re,1)}function be(re,te){let J=re.length;for(;--J>=0;){let Q=J,pe=J-1;pe<0&&(pe=re.length-1);for(let ae=0,me=h+g*2;ae<me;ae++){let Qe=F*ae,Ke=F*(ae+1),I=te+Q+Qe,w=te+pe+Qe,G=te+pe+Ke,j=te+Q+Ke;lt(I,w,G,j)}}}function Pe(re,te,J){l.push(re),l.push(te),l.push(J)}function Ee(re,te,J){Mt(re),Mt(te),Mt(J);let Q=i.length/3,pe=x.generateTopUV(n,i,Q-3,Q-2,Q-1);D(pe[0]),D(pe[1]),D(pe[2])}function lt(re,te,J,Q){Mt(re),Mt(te),Mt(Q),Mt(te),Mt(J),Mt(Q);let pe=i.length/3,ae=x.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);D(ae[0]),D(ae[1]),D(ae[3]),D(ae[1]),D(ae[2]),D(ae[3])}function Mt(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function D(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bc[i.type]().fromJSON(i)),new s(n,e.options)}},mx={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(d,1-m),new se(v,1-p)]:[new se(a,1-l),new se(h,1-u),new se(f,1-m),new se(g,1-p)]}};function gx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Hc=class s extends os{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Vc=class s extends st{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,d=new se,f=new L,m=new L,v=new L,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){let _=n+x*h*i,y=Math.sin(_),T=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);let R=l[3*E+0]*y,C=l[3*E+1],S=l[3*E+0]*T;c.push(R,C,S)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let y=_+x*e.length,T=y,E=y+e.length,R=y+e.length+1,C=y+1;r.push(T,E,C),r.push(R,C,E)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ha=class s extends os{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Zr=class s extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let x=p*d-o;for(let _=0;_<c;_++){let y=_*u-r;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,y=x+c*(p+1),T=x+1+c*(p+1),E=x+1+c*p;f.push(_,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Gc=class s extends st{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new L,m=new se;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let x=p+g,_=x,y=x+n+1,T=x+n+2,E=x+1;a.push(_,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wc=class s extends st{constructor(e=new Ni([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];si.isClockWise(x)===!0&&(m[g]=x.reverse())}let v=si.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){let x=v[g],_=x[0]+u,y=x[1]+u,T=x[2]+u;n.push(_,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vx(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function vx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var ua=class s extends st{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let x=[],_=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+y,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let _=h[p][x+1],y=h[p][x],T=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Xc=class s extends os{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},qc=class s extends st{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let v=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;o.push(v,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Yc=class s extends st{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new L,d=new L,f=new L,m=new L,v=new L,g=new L,p=new L;for(let _=0;_<=n;++_){let y=_/n*r*Math.PI*2;x(y,r,o,e,f),x(y+.01,r,o,e,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,R=-t*Math.cos(E),C=t*Math.sin(E);u.x=f.x+(R*p.x+C*v.x),u.y=f.y+(R*p.y+C*v.y),u.z=f.z+(R*p.z+C*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(T/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){let T=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),R=(i+1)*_+y,C=(i+1)*(_-1)+y;a.push(T,E,C),a.push(E,R,C)}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2));function x(_,y,T,E,R){let C=Math.cos(_),S=Math.sin(_),b=T/y*_,P=Math.cos(b);R.x=E*(2+P)*.5*C,R.y=E*(2+P)*S*.5,R.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Zc=class s extends st{constructor(e=new ra(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new se,h=new L,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),x(),p()}function g(_){h=e.getPointAt(_/t,h);let y=o.normals[_],T=o.binormals[_];for(let E=0;E<=i;E++){let R=E/i*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);l.x=S*y.x+C*T.x,l.y=S*y.y+C*T.y,l.z=S*y.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){let T=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),R=(i+1)*_+y,C=(i+1)*(_-1)+y;m.push(T,E,C),m.push(E,R,C)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)c.x=_/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},$c=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new L,r=new L;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,v=d+f;m<v;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),x=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,x),hm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),hm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function hm(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var um=Object.freeze({__proto__:null,BoxGeometry:ks,CapsuleGeometry:Pc,CircleGeometry:Ic,ConeGeometry:ta,CylinderGeometry:ea,DodecahedronGeometry:Lc,EdgesGeometry:Dc,ExtrudeGeometry:kc,IcosahedronGeometry:Hc,LatheGeometry:Vc,OctahedronGeometry:ha,PlaneGeometry:Zr,PolyhedronGeometry:os,RingGeometry:Gc,ShapeGeometry:Wc,SphereGeometry:ua,TetrahedronGeometry:Xc,TorusGeometry:qc,TorusKnotGeometry:Yc,TubeGeometry:Zc,WireframeGeometry:$c}),jc=class extends tn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Kc=class extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},da=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jc=class extends da{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Qc=class extends tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},eh=class extends tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},th=class extends tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},nh=class extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fa=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pa=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ih=class extends tn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},sh=class extends an{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Fs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Q0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function md(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ff(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function _x(s,e,t,n,i=30){let r=s.clone();r.name=e;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Fs(u,c.times.constructor),c.values=Fs(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function xx(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,v;if(r<=a.times[0]){let p=h,x=u-h;v=a.values.slice(p,x)}else if(r>=a.times[m]){let p=m*u+h,x=p+u-h;v=a.values.slice(p,x)}else{let p=a.createInterpolant(),x=h,_=u-h;p.evaluate(r),v=p.resultBuffer.slice(x,_)}l==="quaternion"&&new un().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let p=0;p<g;++p){let x=p*f+d;if(l==="quaternion")un.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{let _=f-d*2;for(let y=0;y<_;++y)c.values[x+y]-=v[y]}}}return s.blendMode=If,s}var gd=class{static convertArray(e,t){return Fs(e,t)}static isTypedArray(e){return Q0(e)}static getKeyframeOrder(e){return eg(e)}static sortedArray(e,t,n){return md(e,t,n)}static flattenJSON(e,t,n,i){Ff(e,t,n,i)}static subclip(e,t,n,i,r=30){return _x(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return xx(e,t,n,i)}},Ws=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends Ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Us:r=e,a=2*t-n;break;case Ho:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Us:o=e,l=2*n-t;break;case Ho:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+x*o[c+T]+_*o[l+T]+y*o[u+T];return r}},ma=class extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},oh=class extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case uc:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Q0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=uc;var ki=class extends An{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ko;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};ga.prototype.ValueTypeName="color";var Xs=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};Xs.prototype.ValueTypeName="number";var ah=class extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},qs=class extends An{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends An{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ko;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};Ys.prototype.ValueTypeName="vector";var Zs=class{constructor(e="",t=-1,n=[],i=Ih){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=eg(l);l=md(l,1,h),c=md(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,v){if(f.length!==0){let g=[],p=[];Ff(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let _=d[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Xs(".morphTargetInfluence["+v+"]",g,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Ys,f+".position",d,"pos",i),n(qs,f+".quaternion",d,"rot",i),n(Ys,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function yx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return ga;case"quaternion":return qs;case"bool":case"boolean":return ki;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yx(s.type);if(s.times===void 0){let t=[],n=[];Ff(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},va=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},tg=new va,dn=class{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},vd=class extends Error{constructor(e,t){super(e),this.response=t}},oi=class extends dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:i});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{v+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,R=h.length;E<R;E++){let C=h[E];C.onProgress&&C.onProgress(T)}p.enqueue(y),x()}},_=>{p.error(_)})}}});return new Response(g)}else throw new vd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_i.add(`file:${e}`,c);let h=Pi[e];delete Pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},_d=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new oi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Zs.parse(e[n]);t.push(i)}return t}},xd=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=[],a=new Wr,l=new oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){let f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Zt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Zt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}},Sr=new WeakMap,$s=class extends dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Sr.get(o);u===void 0&&(u=[],Sr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Wo("img");function l(){h(),t&&t(this);let u=Sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),_i.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},yd=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=new Hs;r.colorSpace=wn;let o=new $s(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}},Md=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Yn,a=new oi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:qn,o.wrapT=c.wrapT!==void 0?c.wrapT:qn,o.magFilter=c.magFilter!==void 0?c.magFilter:Zt,o.minFilter=c.minFilter!==void 0?c.minFilter:Zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=gi),c.mipmapCount===1&&(o.minFilter=Zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}},Sd=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=new Xt,o=new $s(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Mi=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lh=class extends Mi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pu=new je,dm=new L,fm=new L,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(dm),fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fm),t.updateMatrixWorld(),Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bd=class extends _a{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ch=class extends Mi{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pm=new je,Eo=new L,Iu=new L,Ed=class extends _a{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eo),Iu.copy(n.position),Iu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Iu),n.updateMatrixWorld(),i.makeTranslation(-Eo.x,-Eo.y,-Eo.z),pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm,n.coordinateSystem,n.reversedDepth)}},hh=class extends Mi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ed}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$r=class extends Vr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wd=class extends _a{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uh=class extends Mi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new wd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dh=class extends Mi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},fh=class extends Mi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},ph=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},mh=class extends Mi{constructor(e=new ph,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},gh=class s extends dn{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,o=new oi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Te().setHex(o.value);break;case"v2":i.uniforms[r].value=new se().fromArray(o.value);break;case"v3":i.uniforms[r].value=new L().fromArray(o.value);break;case"v4":i.uniforms[r].value=new ut().fromArray(o.value);break;case"m3":i.uniforms[r].value=new tt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new je().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new se().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return s.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:jc,SpriteMaterial:$o,RawShaderMaterial:Kc,ShaderMaterial:zn,PointsMaterial:Ko,MeshPhysicalMaterial:Jc,MeshStandardMaterial:da,MeshPhongMaterial:Qc,MeshToonMaterial:eh,MeshNormalMaterial:th,MeshLambertMaterial:nh,MeshDepthMaterial:fa,MeshDistanceMaterial:pa,MeshBasicMaterial:xi,MeshMatcapMaterial:ih,LineDashedMaterial:sh,LineBasicMaterial:an,Material:tn};return new t[e]}},xa=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},vh=class extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},_h=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new oi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),x=Ar(g.type,p),_=new Gr(x,g.stride);return _.uuid=g.uuid,t[m]=_,_}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=e.isInstancedBufferGeometry?new vh:new st,a=e.data.index;if(a!==void 0){let f=Ar(a.type,a.array);o.setIndex(new vt(f,1))}let l=e.data.attributes;for(let f in l){let m=l[f],v;if(m.isInterleavedBufferAttribute){let g=i(e.data,m.data);v=new Vs(g,m.itemSize,m.offset,m.normalized)}else{let g=Ar(m.type,m.array),p=m.isInstancedBufferAttribute?ss:vt;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),o.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let m=c[f],v=[];for(let g=0,p=m.length;g<p;g++){let x=m[g],_;if(x.isInterleavedBufferAttribute){let y=i(e.data,x.data);_=new Vs(y,x.itemSize,x.offset,x.normalized)}else{let y=Ar(x.type,x.array);_=new vt(y,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),v.push(_)}o.morphAttributes[f]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let v=u[f];o.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new $t().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},Td=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=this.path===""?xa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?xa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new oi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Ni().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=new Mc().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new _h;for(let r=0,o=e.length;r<o;r++){let a,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in um?a=um[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new gh;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Zs.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Ar(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new va(t);r=new $s(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Yn(p.data,p.width,p.height)))}i[u.uuid]=new vi(f)}else{let f=a(u.url);i[u.uuid]=new vi(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Ar(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new $s(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Yn(m.data,m.width,m.height)))}n[l.uuid]=new vi(h)}else{let h=await r(l.url);n[l.uuid]=new vi(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,h;Array.isArray(c)?(h=new Hs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Yn:h=new Xt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Sx)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],mm),h.wrapT=n(a.wrap[1],mm)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,gm)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,gm)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":o=new vc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Te(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new gc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new mc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Yt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new $r(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new dh(e.color,e.intensity);break;case"DirectionalLight":o=new uh(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new hh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new fh(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new ch(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new lh(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new mh().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),o=new yc(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),o=new Ot(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);let d=e.count,f=e.instanceMatrix,m=e.instanceColor;o=new Sc(h,u,d),o.instanceMatrix=new ss(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new ss(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=l(e.material),o=new Ec(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(v=>{let g=null,p=null;return v.boundingBox!==void 0&&(g=new en().fromJSON(v.boundingBox)),v.boundingSphere!==void 0&&(p=new $t().fromJSON(v.boundingSphere)),{...v,boundingBox:g,boundingSphere:p}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new $t().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new en().fromJSON(e.boundingBox));break;case"LOD":o=new xc;break;case"Line":o=new yi(a(e.geometry),l(e.material));break;case"LineLoop":o=new Ac(a(e.geometry),l(e.material));break;case"LineSegments":o=new jn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Rc(a(e.geometry),l(e.material));break;case"Sprite":o=new _c(l(e.material));break;case"Group":o=new ts;break;case"Bone":o=new jo;break;default:o=new pt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let m=d[f];o.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let m=d[f],v=o.getObjectByProperty("uuid",m.object);v!==void 0&&o.addLevel(v,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new pt}})}},Sx={UVMapping:Eh,CubeReflectionMapping:Bi,CubeRefractionMapping:ns,EquirectangularReflectionMapping:No,EquirectangularRefractionMapping:Oo,CubeUVReflectionMapping:jr},mm={RepeatWrapping:Bo,ClampToEdgeWrapping:qn,MirroredRepeatWrapping:zo},gm={NearestFilter:on,NearestMipmapNearestFilter:bf,NearestMipmapLinearFilter:Tr,LinearFilter:Zt,LinearMipmapNearestFilter:Ro,LinearMipmapLinearFilter:gi},Lu=new WeakMap,Ad=class extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Lu.has(o)===!0)i&&i(Lu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Lu.set(l,c),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},vl,ya=class{static getContext(){return vl===void 0&&(vl=new(window.AudioContext||window.webkitAudioContext)),vl}static setContext(e){vl=e}},Rd=class extends dn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new oi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);ya.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(e)}}},vm=new je,_m=new je,Ss=new je,Cd=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Yt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Yt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ss.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(Os*t.fov*.5)/t.zoom,a,l;_m.elements[12]=-i,vm.elements[12]=i,a=-o*t.aspect+r,l=o*t.aspect+r,Ss.elements[0]=2*t.near/(l-a),Ss.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Ss),a=-o*t.aspect-r,l=o*t.aspect-r,Ss.elements[0]=2*t.near/(l-a),Ss.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Ss)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_m),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(vm)}},xh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},yh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},bs=new L,Du=new un,bx=new L,Es=new L,ws=new L,Pd=class extends pt{constructor(){super(),this.type="AudioListener",this.context=ya.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new yh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(bs,Du,bx),Es.set(0,0,-1).applyQuaternion(Du),ws.set(0,1,0).applyQuaternion(Du),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(bs.x,n),t.positionY.linearRampToValueAtTime(bs.y,n),t.positionZ.linearRampToValueAtTime(bs.z,n),t.forwardX.linearRampToValueAtTime(Es.x,n),t.forwardY.linearRampToValueAtTime(Es.y,n),t.forwardZ.linearRampToValueAtTime(Es.z,n),t.upX.linearRampToValueAtTime(ws.x,n),t.upY.linearRampToValueAtTime(ws.y,n),t.upZ.linearRampToValueAtTime(ws.z,n)}else t.setPosition(bs.x,bs.y,bs.z),t.setOrientation(Es.x,Es.y,Es.z,ws.x,ws.y,ws.z)}},Mh=class extends pt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Ts=new L,xm=new un,Ex=new L,As=new L,Id=class extends Mh{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ts,xm,Ex),As.set(0,0,1).applyQuaternion(xm);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ts.x,n),t.positionY.linearRampToValueAtTime(Ts.y,n),t.positionZ.linearRampToValueAtTime(Ts.z,n),t.orientationX.linearRampToValueAtTime(As.x,n),t.orientationY.linearRampToValueAtTime(As.y,n),t.orientationZ.linearRampToValueAtTime(As.z,n)}else t.setPosition(Ts.x,Ts.y,Ts.z),t.setOrientation(As.x,As.y,As.z)}},Ld=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Sh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;un.multiplyQuaternionsFlat(e,o,e,t,e,n),un.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Nf="\\[\\]\\.:\\/",wx=new RegExp("["+Nf+"]","g"),Of="[^"+Nf+"]",Tx="[^"+Nf.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",Of),Rx=/(WCOD+)?/.source.replace("WCOD",Tx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Of),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Of),Ix=new RegExp("^"+Ax+Rx+Cx+Px+"$"),Lx=["material","materials","bones","map"],Dd=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Dd;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ud=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=On(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let v=0,g=o;v!==g;++v)r[v].push(new yt(d,n[v],i[v]))}else if(m<c){a=e[m];let v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[f]=v,e[v]=d;for(let p=0,x=o;p!==x;++p){let _=r[p],y=_[v],T=_[m];_[m]=y,T===void 0&&(T=new yt(d,n[p],i[p])),_[v]=T}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=i;f!==m;++f){let v=n[f],g=v[u],p=v[h];v[h]=g,v[u]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,f=e[d],m=--o,v=e[m];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,p=i;g!==p;++g){let x=n[g],_=x[d],y=x[m];x[u]=_,x[d]=y,x.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,v=i;m!==v;++m){let g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new yt(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},bh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ds,endingEnd:Ds};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=I0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case If:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ih:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===L0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===P0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Us,i.endingEnd=Us):(e?i.endingStart=this.zeroSlopeAtStart?Us:Ds:i.endingStart=Ho,t?i.endingEnd=this.zeroSlopeAtEnd?Us:Ds:i.endingEnd=Ho)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Dx=new Float32Array(1),Fd=class extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new Sh(yt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ma(new Float32Array(2),new Float32Array(2),1,Dx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Zs.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ih),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new bh(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Zs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Nd=class extends qo{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new zr(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Od=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Ux=0,Bd=class extends Zn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ux++}),this.name="",this.usage=Go,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},zd=class extends Gr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},kd=class{constructor(e,t,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ym=new je,Hd=class{constructor(e,t,n=0,i=1/0){this.ray=new is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ym),this}intersectObject(e,t=!0,n=[]){return Vd(e,this,n,t),n.sort(Mm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Vd(e[i],this,n,t);return n.sort(Mm),n}};function Mm(s,e){return s.distance-e.distance}function Vd(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Vd(r[o],e,t,!0)}}var Gd=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fx(){this._document.hidden===!1&&this.reset()}var Wd=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Xd=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},qd=class s{constructor(e,t,n,i){s.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}},Sm=new se,Yd=class{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bm=new L,_l=new L,br=new L,Er=new L,Uu=new L,Nx=new L,Ox=new L,Zd=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bm.subVectors(e,this.start),_l.subVectors(this.end,this.start);let n=_l.dot(_l),r=_l.dot(bm)/n;return t&&(r=qe(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Nx,n=Ox){let i=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;br.subVectors(c,a),Er.subVectors(h,l),Uu.subVectors(a,l);let u=br.dot(br),d=Er.dot(Er),f=Er.dot(Uu);if(u<=i&&d<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=i)r=0,o=f/d,o=qe(o,0,1);else{let m=br.dot(Uu);if(d<=i)o=0,r=qe(-m/u,0,1);else{let v=br.dot(Er),g=u*d-v*v;g!==0?r=qe((v*f-m*d)/g,0,1):r=0,o=(v*r+f)/d,o<0?(o=0,r=qe(-m/u,0,1)):o>1&&(o=1,r=qe((v-m)/u,0,1))}}return t.copy(a).add(br.multiplyScalar(r)),n.copy(l).add(Er.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Em=new L,$d=class extends pt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new st,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Re(i,3));let r=new an({fog:!1,toneMapped:!1});this.cone=new jn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Em.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Em),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Qi=new L,xl=new je,Fu=new je,jd=class extends jn{constructor(e){let t=ng(e),n=new st,i=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Re(i,3)),n.setAttribute("color",new Re(r,3));let o=new an({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let a=new Te(255),l=new Te(65280);this.setColors(a,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Fu.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(xl.multiplyMatrices(Fu,a.matrixWorld),Qi.setFromMatrixPosition(xl),i.setXYZ(o,Qi.x,Qi.y,Qi.z),xl.multiplyMatrices(Fu,a.parent.matrixWorld),Qi.setFromMatrixPosition(xl),i.setXYZ(o+1,Qi.x,Qi.y,Qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function ng(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...ng(s.children[t]));return e}var Kd=class extends Ot{constructor(e,t,n){let i=new ua(t,4,2),r=new xi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Bx=new L,wm=new Te,Tm=new Te,Jd=class extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new ha(t);i.rotateY(Math.PI*.5),this.material=new xi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new vt(o,3)),this.add(new Ot(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");wm.copy(this.light.color),Tm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?wm:Tm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Bx.setFromMatrixPosition(this.light.matrixWorld).negate())}},Qd=class extends jn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Te(n),i=new Te(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let h=new st;h.setAttribute("position",new Re(l,3)),h.setAttribute("color",new Re(c,3));let u=new an({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},ef=class extends jn{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Te(r),o=new Te(o);let a=[],l=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,m);let v=u&1?r:o;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){let d=u&1?r:o,f=e-e/n*u;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;a.push(g,0,p),l.push(d.r,d.g,d.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,a.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new st;c.setAttribute("position",new Re(a,3)),c.setAttribute("color",new Re(l,3));let h=new an({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Am=new L,yl=new L,Rm=new L,tf=class extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new st;i.setAttribute("position",new Re([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new an({fog:!1,toneMapped:!1});this.lightPlane=new yi(i,r),this.add(this.lightPlane),i=new st,i.setAttribute("position",new Re([0,0,0,0,0,1],3)),this.targetLine=new yi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Am.setFromMatrixPosition(this.light.matrixWorld),yl.setFromMatrixPosition(this.light.target.matrixWorld),Rm.subVectors(yl,Am),this.lightPlane.lookAt(yl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(yl),this.targetLine.scale.z=Rm.length()}},Ml=new L,Nt=new Vr,nf=class extends jn{constructor(e){let t=new st,n=new an({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,v){l(m),l(v)}function l(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new Re(i,3)),t.setAttribute("color",new Re(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new Te(16755200),h=new Te(16711680),u=new Te(43775),d=new Te(16777215),f=new Te(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,i=1,r,o;if(Nt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Nn)r=-1,o=1;else if(this.camera.coordinateSystem===Nr)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Vt("c",t,e,Nt,0,0,r),Vt("t",t,e,Nt,0,0,o),Vt("n1",t,e,Nt,-n,-i,r),Vt("n2",t,e,Nt,n,-i,r),Vt("n3",t,e,Nt,-n,i,r),Vt("n4",t,e,Nt,n,i,r),Vt("f1",t,e,Nt,-n,-i,o),Vt("f2",t,e,Nt,n,-i,o),Vt("f3",t,e,Nt,-n,i,o),Vt("f4",t,e,Nt,n,i,o),Vt("u1",t,e,Nt,n*.7,i*1.1,r),Vt("u2",t,e,Nt,-n*.7,i*1.1,r),Vt("u3",t,e,Nt,0,i*2,r),Vt("cf1",t,e,Nt,-n,0,o),Vt("cf2",t,e,Nt,n,0,o),Vt("cf3",t,e,Nt,0,-i,o),Vt("cf4",t,e,Nt,0,i,o),Vt("cn1",t,e,Nt,-n,0,r),Vt("cn2",t,e,Nt,n,0,r),Vt("cn3",t,e,Nt,0,-i,r),Vt("cn4",t,e,Nt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Vt(s,e,t,n,i,r,o){Ml.set(i,r,o).unproject(n);let a=e[s];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Ml.x,Ml.y,Ml.z)}}var Sl=new en,sf=class extends jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new st;r.setIndex(new vt(n,1)),r.setAttribute("position",new vt(i,3)),super(r,new an({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Sl.setFromObject(this.object),Sl.isEmpty())return;let e=Sl.min,t=Sl.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},rf=class extends jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new st;r.setIndex(new vt(n,1)),r.setAttribute("position",new Re(i,3)),super(r,new an({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},of=class extends yi{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new st;o.setAttribute("position",new Re(r,3)),o.computeBoundingSphere(),super(o,new an({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new st;l.setAttribute("position",new Re(a,3)),l.computeBoundingSphere(),this.add(new Ot(l,new xi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Cm=new L,bl,Nu,af=class extends pt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",bl===void 0&&(bl=new st,bl.setAttribute("position",new Re([0,0,0,0,1,0],3)),Nu=new ta(.5,1,5,1),Nu.translate(0,-.5,0)),this.position.copy(t),this.line=new yi(bl,new an({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ot(Nu,new xi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Cm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Cm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},lf=class extends jn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new st;i.setAttribute("position",new Re(t,3)),i.setAttribute("color",new Re(n,3));let r=new an({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},cf=class{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new qr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let x=[];for(let _=0,y=p.length;_<y;_++){let T=p[_],E=new Ni;E.curves=T.curves,x.push(E)}return x}function n(p,x){let _=x.length,y=!1;for(let T=_-1,E=0;E<_;T=E++){let R=x[T],C=x[E],S=C.x-R.x,b=C.y-R.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(R=x[E],S=-S,C=x[T],b=-b),p.y<R.y||p.y>C.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let P=b*(p.x-R.x)-S*(p.y-R.y);if(P===0)return!0;if(P<0)continue;y=!y}}else{if(p.y!==R.y)continue;if(C.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=C.x)return!0}}return y}let i=si.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Ni,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)a=r[p],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!h&&d[m]&&m++,d[m]={s:new Ni,p:v},d[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:v[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,x=0;for(let _=0,y=d.length;_<y;_++)u[_]=[];for(let _=0,y=d.length;_<y;_++){let T=f[_];for(let E=0;E<T.length;E++){let R=T[E],C=!0;for(let S=0;S<d.length;S++)n(R.p,d[S].p)&&(_!==S&&x++,C?(C=!1,u[S].push(R)):p=!0);C&&u[_].push(R)}}x>0&&p===!1&&(f=u)}let g;for(let p=0,x=d.length;p<x;p++){l=d[p].s,c.push(l),g=f[p];for(let _=0,y=g.length;_<y;_++)l.holes.push(g[_].h)}return c}},hf=class extends Zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zx(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function kx(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Hx(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function uf(s,e,t,n){let i=Vx(n);switch(t){case Rf:return s*e;case Rh:return s*e/i.components*i.byteLength;case ba:return s*e/i.components*i.byteLength;case Pf:return s*e*2/i.components*i.byteLength;case Ch:return s*e*2/i.components*i.byteLength;case Cf:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case Ph:return s*e*4/i.components*i.byteLength;case Co:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Io:case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:case kl:return Math.max(s,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(s,8)*Math.max(e,8)/2;case Hl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ac:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vx(s){switch(s){case ri:case Ef:return{byteLength:1,components:1};case Lr:case wf:case Kr:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case zi:case wh:case Tn:return{byteLength:4,components:1};case Tf:case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var df=class{static contain(e,t){return zx(e,t)}static cover(e,t){return kx(e,t)}static fill(e){return Hx(e)}static getByteLength(e,t,n,i){return uf(e,t,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ig(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gx(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Zx,alphatest_pars_fragment:$x,aomap_fragment:jx,aomap_pars_fragment:Kx,batching_pars_vertex:Jx,batching_vertex:Qx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:sy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:hy,color_pars_vertex:uy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:vy,emissivemap_fragment:_y,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:My,envmap_fragment:Sy,envmap_common_pars_fragment:by,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Ny,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Fy,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:ky,lights_physical_fragment:Hy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:$y,map_fragment:jy,map_pars_fragment:Ky,map_particle_fragment:Jy,map_particle_pars_fragment:Qy,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:sM,morphtarget_pars_vertex:rM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:hM,normal_vertex:uM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:_M,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:MM,dithering_pars_fragment:SM,roughnessmap_fragment:bM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:TM,shadowmap_vertex:AM,shadowmask_pars_fragment:RM,skinbase_vertex:CM,skinning_pars_vertex:PM,skinning_vertex:IM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:NM,transmission_fragment:OM,transmission_pars_fragment:BM,uv_pars_fragment:zM,uv_pars_vertex:kM,uv_vertex:HM,worldpos_vertex:VM,background_vert:GM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:qM,cube_vert:YM,cube_frag:ZM,depth_vert:$M,depth_frag:jM,distanceRGBA_vert:KM,distanceRGBA_frag:JM,equirect_vert:QM,equirect_frag:eS,linedashed_vert:tS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:sS,meshlambert_vert:rS,meshlambert_frag:oS,meshmatcap_vert:aS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:hS,meshphong_vert:uS,meshphong_frag:dS,meshphysical_vert:fS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:vS,points_frag:_S,shadow_vert:xS,shadow_frag:yS,sprite_vert:MS,sprite_frag:SS},_e={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ii={basic:{uniforms:vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:vn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:vn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Te(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:vn([_e.points,_e.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:vn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:vn([_e.common,_e.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:vn([_e.sprite,_e.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:vn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:vn([_e.lights,_e.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ii.physical={uniforms:vn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var El={r:0,b:0,g:0},Rs=new Bn,bS=new je;function ES(s,e,t,n,i,r,o){let a=new Te(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1,T=m(_);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,y){let T=m(y);T&&(T.isCubeTexture||T.mapping===jr)?(h===void 0&&(h=new Ot(new ks(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Hr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rs.copy(y.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bS.makeRotationFromEuler(Rs)),h.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ot(new Zr(2,2),new zn({name:"BackgroundMaterial",uniforms:Hr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(El,q0(s)),n.buffers.color.setClear(El.r,El.g,El.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:g,dispose:x}}function wS(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(b,P,N,H,W){let X=!1,O=u(H,N,P);r!==O&&(r=O,c(r.object)),X=f(b,H,N,W),X&&m(b,H,N,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(b,P,N,H),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,N){let H=N.wireframe===!0,W=n[b.id];W===void 0&&(W={},n[b.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let O=X[H];return O===void 0&&(O=d(l()),X[H]=O),O}function d(b){let P=[],N=[],H=[];for(let W=0;W<t;W++)P[W]=0,N[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,P,N,H){let W=r.attributes,X=P.attributes,O=0,F=N.getAttributes();for(let U in F)if(F[U].location>=0){let q=W[U],ee=X[U];if(ee===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function m(b,P,N,H){let W={},X=P.attributes,O=0,F=N.getAttributes();for(let U in F)if(F[U].location>=0){let q=X[U];q===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));let ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),W[U]=ee,O++}r.attributes=W,r.attributesNum=O,r.index=H}function v(){let b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){let N=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;N[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),W[b]!==P&&(s.vertexAttribDivisor(b,P),W[b]=P)}function x(){let b=r.newAttributes,P=r.enabledAttributes;for(let N=0,H=P.length;N<H;N++)P[N]!==b[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function _(b,P,N,H,W,X,O){O===!0?s.vertexAttribIPointer(b,P,N,W,X):s.vertexAttribPointer(b,P,N,H,W,X)}function y(b,P,N,H){v();let W=H.attributes,X=N.getAttributes(),O=P.defaultAttributeValues;for(let F in X){let U=X[F];if(U.location>=0){let V=W[F];if(V===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){let q=V.normalized,ee=V.itemSize,le=e.get(V);if(le===void 0)continue;let Le=le.buffer,We=le.type,ve=le.bytesPerElement,$=We===s.INT||We===s.UNSIGNED_INT||V.gpuType===wh;if(V.isInterleavedBufferAttribute){let ne=V.data,be=ne.stride,Pe=V.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<U.locationSize;Ee++)p(U.location+Ee,ne.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<U.locationSize;Ee++)g(U.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ee=0;Ee<U.locationSize;Ee++)_(U.location+Ee,ee/U.locationSize,We,q,be*ve,(Pe+ee/U.locationSize*Ee)*ve,$)}else{if(V.isInstancedBufferAttribute){for(let ne=0;ne<U.locationSize;ne++)p(U.location+ne,V.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ne=0;ne<U.locationSize;ne++)g(U.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ne=0;ne<U.locationSize;ne++)_(U.location+ne,ee/U.locationSize,We,q,ee*ve,ee/U.locationSize*ne*ve,$)}}else if(O!==void 0){let q=O[F];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(U.location,q);break;case 3:s.vertexAttrib3fv(U.location,q);break;case 4:s.vertexAttrib4fv(U.location,q);break;default:s.vertexAttrib1fv(U.location,q)}}}}x()}function T(){C();for(let b in n){let P=n[b];for(let N in P){let H=P[N];for(let W in H)h(H[W].object),delete H[W];delete P[N]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let N in P){let H=P[N];for(let W in H)h(H[W].object),delete H[W];delete P[N]}delete n[b.id]}function R(b){for(let P in n){let N=n[P];if(N[b.id]===void 0)continue;let H=N[b.id];for(let W in H)h(H[W].object),delete H[W];delete N[b.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function TS(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==xn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!C)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function RS(s){let e=this,t=null,n=0,i=!1,r=!1,o=new fi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,_=x*4,y=p.clippingState||null;l.value=y,y=h(m,d,_,f);for(let T=0;T!==_;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function CS(s){let e=new WeakMap;function t(o,a){return a===No?o.mapping=Bi:a===Oo&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===No||a===Oo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pc(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Rr=4,Pm=[.125,.215,.35,.446,.526,.582],Ls=20,Ou=new $r,Im=new Te,Bu=null,zu=0,ku=0,Hu=!1,Is=(1+Math.sqrt(5))/2,wr=1/Is,Lm=[new L(-Is,wr,0),new L(Is,wr,0),new L(-wr,0,Is),new L(wr,0,Is),new L(0,Is,-wr),new L(0,Is,wr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],PS=new L,Ma=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=PS}=r;Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,zu,ku),this._renderer.xr.enabled=Hu,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Kr,format:xn,colorSpace:zs,depthBuffer:!1},i=Dm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(r)),this._blurMaterial=LS(r,e,t)}return i}_compileMaterial(e){let t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Ou)}_sceneToCubeUV(e,t,n,i,r){let l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Im),u.toneMapping=Ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let v=new xi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Ot(new ks,v),p=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(Im),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let T=this._cubeSize;wl(i,y*T,_>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Bi||e.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ou)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lm[(i-r-1)%Lm.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Ls;g>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);let p=[],x=0;for(let R=0;R<Ls;++R){let C=R/v,S=Math.exp(-C*C/2);p.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let y=this._sizeLods[i],T=3*y*(i>_-Rr?i-_+Rr:0),E=4*(this._cubeSize-y);wl(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Ou)}};function IS(s){let e=[],t=[],n=[],i=s,r=s-Rr+1+Pm.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Rr?l=Pm[o-s+Rr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,C=E>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];x.set(S,v*m*E),_.set(d,g*m*E);let b=[E,E,E,E,E,E];y.set(b,p*m*E)}let T=new st;T.setAttribute("position",new vt(x,v)),T.setAttribute("uv",new vt(_,g)),T.setAttribute("faceIndex",new vt(y,p)),e.push(T),i>Rr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dm(s,e,t){let n=new $n(s,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function LS(s,e,t){let n=new Float32Array(Ls),i=new L(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Um(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fm(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===No||l===Oo,h=l===Bi||l===ns;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ma(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ma(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function US(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function FS(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){let T=x[_+0],E=x[_+1],R=x[_+2];d.push(T,E,E,R,R,T)}}else if(m!==void 0){let x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let T=_+0,E=_+1,R=_+2;d.push(T,E,E,R,R,T)}}else return;let g=new(G0(d)?Zo:Yo)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function NS(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*v[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function OS(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BS(s,e,t){let n=new WeakMap,i=new ut;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),R=new Br(E,y,T,u);R.type=Tn,R.needsUpdate=!0;let C=_*4;for(let b=0;b<u;b++){let P=g[b],N=p[b],H=x[b],W=y*T*4*b;for(let X=0;X<P.count;X++){let O=X*C;f===!0&&(i.fromBufferAttribute(P,X),E[W+O+0]=i.x,E[W+O+1]=i.y,E[W+O+2]=i.z,E[W+O+3]=0),m===!0&&(i.fromBufferAttribute(N,X),E[W+O+4]=i.x,E[W+O+5]=i.y,E[W+O+6]=i.z,E[W+O+7]=0),v===!0&&(i.fromBufferAttribute(H,X),E[W+O+8]=i.x,E[W+O+9]=i.y,E[W+O+10]=i.z,E[W+O+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new se(y,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zS(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sg=new Xt,Nm=new Jo(1,1),rg=new Br,og=new zr,ag=new Hs,Om=[],Bm=[],zm=new Float32Array(16),km=new Float32Array(9),Hm=new Float32Array(4);function Jr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Om[i];if(r===void 0&&(r=new Float32Array(i),Om[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Lh(s,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kS(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function VS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function GS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function WS(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Hm.set(n),s.uniformMatrix2fv(this.addr,!1,Hm),Kt(t,n)}}function XS(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;km.set(n),s.uniformMatrix3fv(this.addr,!1,km),Kt(t,n)}}function qS(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;zm.set(n),s.uniformMatrix4fv(this.addr,!1,zm),Kt(t,n)}}function YS(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function $S(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function jS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function KS(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function QS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function e1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function t1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nm.compareFunction=Lf,r=Nm):r=sg,t.setTexture2D(e||r,i)}function n1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||og,i)}function i1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ag,i)}function s1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rg,i)}function r1(s){switch(s){case 5126:return kS;case 35664:return HS;case 35665:return VS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return $S;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return JS;case 36295:return QS;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(s,e){s.uniform1fv(this.addr,e)}function a1(s,e){let t=Jr(e,this.size,2);s.uniform2fv(this.addr,t)}function l1(s,e){let t=Jr(e,this.size,3);s.uniform3fv(this.addr,t)}function c1(s,e){let t=Jr(e,this.size,4);s.uniform4fv(this.addr,t)}function h1(s,e){let t=Jr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function u1(s,e){let t=Jr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d1(s,e){let t=Jr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f1(s,e){s.uniform1iv(this.addr,e)}function p1(s,e){s.uniform2iv(this.addr,e)}function m1(s,e){s.uniform3iv(this.addr,e)}function g1(s,e){s.uniform4iv(this.addr,e)}function v1(s,e){s.uniform1uiv(this.addr,e)}function _1(s,e){s.uniform2uiv(this.addr,e)}function x1(s,e){s.uniform3uiv(this.addr,e)}function y1(s,e){s.uniform4uiv(this.addr,e)}function M1(s,e,t){let n=this.cache,i=e.length,r=Lh(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||sg,r[o])}function S1(s,e,t){let n=this.cache,i=e.length,r=Lh(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||og,r[o])}function b1(s,e,t){let n=this.cache,i=e.length,r=Lh(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ag,r[o])}function E1(s,e,t){let n=this.cache,i=e.length,r=Lh(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rg,r[o])}function w1(s){switch(s){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return h1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return E1}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}},pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w1(t.type)}},mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Vu=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function T1(s,e,t){let n=s.name,i=n.length;for(Vu.lastIndex=0;;){let r=Vu.exec(n),o=Vu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vm(t,c===void 0?new ff(a,s,e):new pf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new mf(a),Vm(t,u)),t=u}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);T1(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Gm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var A1=37297,R1=0;function C1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wm=new tt;function P1(s){ht._getMatrix(Wm,ht.workingColorSpace,s);let e=`mat3( ${Wm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case Vo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+C1(s.getShaderSource(e),a)}else return r}function I1(s,e){let t=P1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L1(s,e){let t;switch(e){case S0:t="Linear";break;case b0:t="Reinhard";break;case E0:t="Cineon";break;case w0:t="ACESFilmic";break;case A0:t="AgX";break;case R0:t="Neutral";break;case T0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tl=new L;function D1(){ht.getLuminanceCoefficients(Tl);let s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function F1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ao(s){return s!==""}function qm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(s){return s.replace(O1,z1)}var B1=new Map;function z1(s,e){let t=ot[e];if(t===void 0){let n=B1.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gf(t)}var k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(s){return s.replace(k1,H1)}function H1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case ns:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function X1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case y0:e="ENVMAP_BLENDING_MIX";break;case M0:e="ENVMAP_BLENDING_ADD";break}return e}function q1(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y1(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=V1(t),c=G1(t),h=W1(t),u=X1(t),d=q1(t),f=U1(t),m=F1(r),v=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ao).join(`
`),p.length>0&&(p+=`
`)):(g=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),p=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ui?L1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),D1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),o=gf(o),o=qm(o,t),o=Ym(o,t),a=gf(a),a=qm(a,t),a=Ym(a,t),o=Zm(o),a=Zm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+g+o,y=x+p+a,T=Gm(i,i.VERTEX_SHADER,_),E=Gm(i,i.FRAGMENT_SHADER,y);i.attachShader(v,T),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(v)||"",H=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(E)||"",X=N.trim(),O=H.trim(),F=W.trim(),U=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,E);else{let q=Xm(i,T,"vertex"),ee=Xm(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+q+`
`+ee)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||F==="")&&(V=!1);V&&(P.diagnostics={runnable:U,programLog:X,vertexShader:{log:O,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(T),i.deleteShader(E),C=new Ir(i,v),S=N1(i,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,A1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var Z1=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _f(e),t.set(e,n)),n}},_f=class{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}};function $1(s,e,t,n,i,r,o){let a=new kr,l=new vf,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,N,H){let W=N.fog,X=H.geometry,O=S.isMeshStandardMaterial?N.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),U=F&&F.mapping===jr?F.image.height:null,V=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=q!==void 0?q.length:0,le=0;X.morphAttributes.position!==void 0&&(le=1),X.morphAttributes.normal!==void 0&&(le=2),X.morphAttributes.color!==void 0&&(le=3);let Le,We,ve,$;if(V){let gt=ii[V];Le=gt.vertexShader,We=gt.fragmentShader}else Le=S.vertexShader,We=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);let ne=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Pe=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,lt=!!S.map,Mt=!!S.matcap,D=!!F,re=!!S.aoMap,te=!!S.lightMap,J=!!S.bumpMap,Q=!!S.normalMap,pe=!!S.displacementMap,ae=!!S.emissiveMap,me=!!S.metalnessMap,Qe=!!S.roughnessMap,Ke=S.anisotropy>0,I=S.clearcoat>0,w=S.dispersion>0,G=S.iridescence>0,j=S.sheen>0,oe=S.transmission>0,K=Ke&&!!S.anisotropyMap,Oe=I&&!!S.clearcoatMap,fe=I&&!!S.clearcoatNormalMap,Ue=I&&!!S.clearcoatRoughnessMap,Fe=G&&!!S.iridescenceMap,ce=G&&!!S.iridescenceThicknessMap,we=j&&!!S.sheenColorMap,Ye=j&&!!S.sheenRoughnessMap,Be=!!S.specularMap,xe=!!S.specularColorMap,rt=!!S.specularIntensityMap,B=oe&&!!S.transmissionMap,de=oe&&!!S.thicknessMap,ge=!!S.gradientMap,Ie=!!S.alphaMap,he=S.alphaTest>0,ie=!!S.alphaHash,Ne=!!S.extensions,et=Ui;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(et=s.toneMapping);let wt={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:We,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:zs,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:Mt,envMap:D,envMapMode:D&&F.mapping,envMapCubeUVHeight:U,aoMap:re,lightMap:te,bumpMap:J,normalMap:Q,displacementMap:d&&pe,emissiveMap:ae,normalMapObjectSpace:Q&&S.normalMapType===F0,normalMapTangentSpace:Q&&S.normalMapType===as,metalnessMap:me,roughnessMap:Qe,anisotropy:Ke,anisotropyMap:K,clearcoat:I,clearcoatMap:Oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ue,dispersion:w,iridescence:G,iridescenceMap:Fe,iridescenceThicknessMap:ce,sheen:j,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:xe,specularIntensityMap:rt,transmission:oe,transmissionMap:B,thicknessMap:de,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Ns&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:he,alphaHash:ie,combine:S.combine,mapUv:lt&&v(S.map.channel),aoMapUv:re&&v(S.aoMap.channel),lightMapUv:te&&v(S.lightMap.channel),bumpMapUv:J&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:pe&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:me&&v(S.metalnessMap.channel),roughnessMapUv:Qe&&v(S.roughnessMap.channel),anisotropyMapUv:K&&v(S.anisotropyMap.channel),clearcoatMapUv:Oe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&v(S.sheenRoughnessMap.channel),specularMapUv:Be&&v(S.specularMap.channel),specularColorMapUv:xe&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:Ie&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Q||Ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(lt||Ie),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(b,S),_(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=m[S.type],P;if(b){let N=ii[b];P=Y0.clone(N.uniforms)}else P=S.uniforms;return P}function T(S,b){let P;for(let N=0,H=h.length;N<H;N++){let W=h[N];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Y1(s,b,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function j1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function K1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Km(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,v,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||K1),n.length>1&&n.sort(d||jm),i.length>1&&i.sort(d||jm)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function J1(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Km,s.set(n,[o])):i>=r.length?(o=new Km,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Q1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function eb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var tb=0;function nb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ib(s){let e=new Q1,t=eb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new je,o=new je;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,_=0,y=0,T=0,E=0,R=0;c.sort(nb);for(let S=0,b=c.length;S<b;S++){let P=c[S],N=P.color,H=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*H,u+=N.g*H,d+=N.b*H;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],H);R++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,U=t.get(P);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=O,f++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(N).multiplyScalar(H),O.distance=W,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[v]=O;let F=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=F.matrix,P.castShadow){let U=t.get(P);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=X,y++}v++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(N).multiplyScalar(H),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=O,g++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let F=P.shadow,U=t.get(P);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=O,m++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(H),O.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=O,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=f,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=R,n.version=tb++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Jm(s){let e=new ib(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Jm(s),e.set(i,[a])):r>=o.length?(a=new Jm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(s,e,t){let n=new rs,i=new se,r=new se,o=new ut,a=new fa({depthPacking:U0}),l=new pa,c={},h=t.maxTextureSize,u={[Oi]:yn,[yn]:Oi,[pi]:pi},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:rb,fragmentShader:ob}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new st;m.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let p=this.type;this.render=function(E,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==di&&this.type===di,W=p===di&&this.type!==di;for(let X=0,O=E.length;X<O;X++){let F=E[X],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();if(i.multiply(V),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||H===!0||W===!0){let ee=this.type!==di?{minFilter:on,magFilter:on}:{};U.map!==null&&U.map.dispose(),U.map=new $n(i.x,i.y,ee),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();let q=U.getViewportCount();for(let ee=0;ee<q;ee++){let le=U.getViewport(ee);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),N.viewport(o),U.updateMatrices(F,ee),n=U.getFrustum(),y(R,C,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===di&&x(U,C),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,b,P)};function x(E,R){let C=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $n(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,C,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,C,f,v,null)}function _(E,R,C,S){let b=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=b.uuid,H=R.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let X=W[H];X===void 0&&(X=b.clone(),W[H]=X,R.addEventListener("dispose",T)),b=X}if(b.visible=R.visible,b.wireframe=R.wireframe,S===di?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=s.properties.get(b);N.light=C}return b}function y(E,R,C,S,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let H=e.update(E),W=E.material;if(Array.isArray(W)){let X=H.groups;for(let O=0,F=X.length;O<F;O++){let U=X[O],V=W[U.materialIndex];if(V&&V.visible){let q=_(E,V,S,b);E.onBeforeShadow(s,E,R,C,H,q,U),s.renderBufferDirect(C,null,H,q,E,U),E.onAfterShadow(s,E,R,C,H,q,U)}}}else if(W.visible){let X=_(E,W,S,b);E.onBeforeShadow(s,E,R,C,H,X,null),s.renderBufferDirect(C,null,H,X,E,null),E.onAfterShadow(s,E,R,C,H,X,null)}}let N=E.children;for(let H=0,W=N.length;H<W;H++)y(N[H],R,C,S,b)}function T(E){E.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var lb={[Pl]:Il,[Ll]:Fl,[Dl]:Nl,[Bs]:Ul,[Il]:Pl,[Fl]:Ll,[Nl]:Dl,[Ul]:Bs};function cb(s,e){function t(){let B=!1,de=new ut,ge=null,Ie=new ut(0,0,0,0);return{setMask:function(he){ge!==he&&!B&&(s.colorMask(he,he,he,he),ge=he)},setLocked:function(he){B=he},setClear:function(he,ie,Ne,et,wt){wt===!0&&(he*=et,ie*=et,Ne*=et),de.set(he,ie,Ne,et),Ie.equals(de)===!1&&(s.clearColor(he,ie,Ne,et),Ie.copy(de))},reset:function(){B=!1,ge=null,Ie.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,ge=null,Ie=null,he=null;return{setReversed:function(ie){if(de!==ie){let Ne=e.get("EXT_clip_control");ie?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let et=he;he=null,this.setClear(et)}},getReversed:function(){return de},setTest:function(ie){ie?ne(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(ie){ge!==ie&&!B&&(s.depthMask(ie),ge=ie)},setFunc:function(ie){if(de&&(ie=lb[ie]),Ie!==ie){switch(ie){case Pl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Ll:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Dl:s.depthFunc(s.EQUAL);break;case Ul:s.depthFunc(s.GEQUAL);break;case Fl:s.depthFunc(s.GREATER);break;case Nl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ie}},setLocked:function(ie){B=ie},setClear:function(ie){he!==ie&&(de&&(ie=1-ie),s.clearDepth(ie),he=ie)},reset:function(){B=!1,ge=null,Ie=null,he=null,de=!1}}}function i(){let B=!1,de=null,ge=null,Ie=null,he=null,ie=null,Ne=null,et=null,wt=null;return{setTest:function(gt){B||(gt?ne(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(gt){de!==gt&&!B&&(s.stencilMask(gt),de=gt)},setFunc:function(gt,Ei,ci){(ge!==gt||Ie!==Ei||he!==ci)&&(s.stencilFunc(gt,Ei,ci),ge=gt,Ie=Ei,he=ci)},setOp:function(gt,Ei,ci){(ie!==gt||Ne!==Ei||et!==ci)&&(s.stencilOp(gt,Ei,ci),ie=gt,Ne=Ei,et=ci)},setLocked:function(gt){B=gt},setClear:function(gt){wt!==gt&&(s.clearStencil(gt),wt=gt)},reset:function(){B=!1,de=null,ge=null,Ie=null,he=null,ie=null,Ne=null,et=null,wt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,T=null,E=null,R=new Te(0,0,0),C=0,S=!1,b=null,P=null,N=null,H=null,W=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,F=0,U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=F>=2);let V=null,q={},ee=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Le=new ut().fromArray(ee),We=new ut().fromArray(le);function ve(B,de,ge,Ie){let he=new Uint8Array(4),ie=s.createTexture();s.bindTexture(B,ie),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<ge;Ne++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(de+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return ie}let $={};$[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(Bs),J(!1),Q(Gu),ne(s.CULL_FACE),re(Di);function ne(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function be(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Pe(B,de){return u[B]!==de?(s.bindFramebuffer(B,de),u[B]=de,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Ee(B,de){let ge=f,Ie=!1;if(B){ge=d.get(de),ge===void 0&&(ge=[],d.set(de,ge));let he=B.textures;if(ge.length!==he.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Ne=he.length;ie<Ne;ie++)ge[ie]=s.COLOR_ATTACHMENT0+ie;ge.length=he.length,Ie=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ge)}function lt(B){return m!==B?(s.useProgram(B),m=B,!0):!1}let Mt={[es]:s.FUNC_ADD,[i0]:s.FUNC_SUBTRACT,[s0]:s.FUNC_REVERSE_SUBTRACT};Mt[r0]=s.MIN,Mt[o0]=s.MAX;let D={[a0]:s.ZERO,[l0]:s.ONE,[c0]:s.SRC_COLOR,[Rl]:s.SRC_ALPHA,[m0]:s.SRC_ALPHA_SATURATE,[f0]:s.DST_COLOR,[u0]:s.DST_ALPHA,[h0]:s.ONE_MINUS_SRC_COLOR,[Cl]:s.ONE_MINUS_SRC_ALPHA,[p0]:s.ONE_MINUS_DST_COLOR,[d0]:s.ONE_MINUS_DST_ALPHA,[g0]:s.CONSTANT_COLOR,[v0]:s.ONE_MINUS_CONSTANT_COLOR,[_0]:s.CONSTANT_ALPHA,[x0]:s.ONE_MINUS_CONSTANT_ALPHA};function re(B,de,ge,Ie,he,ie,Ne,et,wt,gt){if(B===Di){v===!0&&(be(s.BLEND),v=!1);return}if(v===!1&&(ne(s.BLEND),v=!0),B!==n0){if(B!==g||gt!==S){if((p!==es||y!==es)&&(s.blendEquation(s.FUNC_ADD),p=es,y=es),gt)switch(B){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFunc(s.ONE,s.ONE);break;case Xu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,_=null,T=null,E=null,R.set(0,0,0),C=0,g=B,S=gt}return}he=he||de,ie=ie||ge,Ne=Ne||Ie,(de!==p||he!==y)&&(s.blendEquationSeparate(Mt[de],Mt[he]),p=de,y=he),(ge!==x||Ie!==_||ie!==T||Ne!==E)&&(s.blendFuncSeparate(D[ge],D[Ie],D[ie],D[Ne]),x=ge,_=Ie,T=ie,E=Ne),(et.equals(R)===!1||wt!==C)&&(s.blendColor(et.r,et.g,et.b,wt),R.copy(et),C=wt),g=B,S=!1}function te(B,de){B.side===pi?be(s.CULL_FACE):ne(s.CULL_FACE);let ge=B.side===yn;de&&(ge=!ge),J(ge),B.blending===Ns&&B.transparent===!1?re(Di):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ie=B.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){b!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),b=B)}function Q(B){B!==Qm?(ne(s.CULL_FACE),B!==P&&(B===Gu?s.cullFace(s.BACK):B===e0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),P=B}function pe(B){B!==N&&(O&&s.lineWidth(B),N=B)}function ae(B,de,ge){B?(ne(s.POLYGON_OFFSET_FILL),(H!==de||W!==ge)&&(s.polygonOffset(de,ge),H=de,W=ge)):be(s.POLYGON_OFFSET_FILL)}function me(B){B?ne(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Qe(B){B===void 0&&(B=s.TEXTURE0+X-1),V!==B&&(s.activeTexture(B),V=B)}function Ke(B,de,ge){ge===void 0&&(V===null?ge=s.TEXTURE0+X-1:ge=V);let Ie=q[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},q[ge]=Ie),(Ie.type!==B||Ie.texture!==de)&&(V!==ge&&(s.activeTexture(ge),V=ge),s.bindTexture(B,de||$[B]),Ie.type=B,Ie.texture=de)}function I(){let B=q[V];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(B){Le.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Le.copy(B))}function Ye(B){We.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),We.copy(B))}function Be(B,de){let ge=c.get(de);ge===void 0&&(ge=new WeakMap,c.set(de,ge));let Ie=ge.get(B);Ie===void 0&&(Ie=s.getUniformBlockIndex(de,B.name),ge.set(B,Ie))}function xe(B,de){let Ie=c.get(de).get(B);l.get(de)!==Ie&&(s.uniformBlockBinding(de,Ie,B.__bindingPointIndex),l.set(de,Ie))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,q={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,T=null,E=null,R=new Te(0,0,0),C=0,S=!1,b=null,P=null,N=null,H=null,W=null,Le.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:lt,setBlending:re,setMaterial:te,setFlipSided:J,setCullFace:Q,setLineWidth:pe,setPolygonOffset:ae,setScissorTest:me,activeTexture:Qe,bindTexture:Ke,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Fe,texImage3D:ce,updateUBOMapping:Be,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Ue,texSubImage2D:j,texSubImage3D:oe,compressedTexSubImage2D:K,compressedTexSubImage3D:Oe,scissor:we,viewport:Ye,reset:rt}}function hb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return f?new OffscreenCanvas(I,w):Wo("canvas")}function v(I,w,G){let j=1,oe=Ke(I);if((oe.width>G||oe.height>G)&&(j=G/Math.max(oe.width,oe.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(j*oe.width),Oe=Math.floor(j*oe.height);u===void 0&&(u=m(K,Oe));let fe=w?m(K,Oe):u;return fe.width=K,fe.height=Oe,fe.getContext("2d").drawImage(I,0,0,K,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+K+"x"+Oe+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,w,G,j,oe=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=w;if(w===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),w===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),w===s.RGBA){let Oe=oe?Vo:ht.getTransfer(j);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Oe===xt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(I,w){let G;return I?w===null||w===zi||w===Dr?G=s.DEPTH24_STENCIL8:w===Tn?G=s.DEPTH32F_STENCIL8:w===Lr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===Dr?G=s.DEPTH_COMPONENT24:w===Tn?G=s.DEPTH_COMPONENT32F:w===Lr&&(G=s.DEPTH_COMPONENT16),G}function T(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){let w=I.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function R(I){let w=I.target;w.removeEventListener("dispose",R),b(w)}function C(I){let w=n.get(I);if(w.__webglInit===void 0)return;let G=I.source,j=d.get(G);if(j){let oe=j[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(I),Object.keys(j).length===0&&d.delete(G)}n.remove(I)}function S(I){let w=n.get(I);s.deleteTexture(w.__webglTexture);let G=I.source,j=d.get(G);delete j[w.__cacheKey],o.memory.textures--}function b(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let oe=0;oe<w.__webglFramebuffer[j].length;oe++)s.deleteFramebuffer(w.__webglFramebuffer[j][oe]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=I.textures;for(let j=0,oe=G.length;j<oe;j++){let K=n.get(G[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(I)}let P=0;function N(){P=0}function H(){let I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function W(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){let G=n.get(I);if(I.isVideoTexture&&me(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,I,w);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function O(I,w){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){$(G,I,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function F(I,w){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){$(G,I,w);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function U(I,w){let G=n.get(I);if(I.version>0&&G.__version!==I.version){ne(G,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let V={[Bo]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[zo]:s.MIRRORED_REPEAT},q={[on]:s.NEAREST,[bf]:s.NEAREST_MIPMAP_NEAREST,[Tr]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[Ro]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},ee={[N0]:s.NEVER,[V0]:s.ALWAYS,[O0]:s.LESS,[Lf]:s.LEQUAL,[B0]:s.EQUAL,[H0]:s.GEQUAL,[z0]:s.GREATER,[k0]:s.NOTEQUAL};function le(I,w){if(w.type===Tn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zt||w.magFilter===Ro||w.magFilter===Tr||w.magFilter===gi||w.minFilter===Zt||w.minFilter===Ro||w.minFilter===Tr||w.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,V[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,V[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,V[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,q[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==Tr&&w.minFilter!==gi||w.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Le(I,w){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));let j=w.source,oe=d.get(j);oe===void 0&&(oe={},d.set(j,oe));let K=W(w);if(K!==I.__cacheKey){oe[K]===void 0&&(oe[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),oe[K].usedTimes++;let Oe=oe[I.__cacheKey];Oe!==void 0&&(oe[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(w)),I.__cacheKey=K,I.__webglTexture=oe[K].texture}return G}function We(I,w,G){return Math.floor(Math.floor(I/G)/w)}function ve(I,w,G,j){let K=I.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,j,w.data);else{K.sort((ce,we)=>ce.start-we.start);let Oe=0;for(let ce=1;ce<K.length;ce++){let we=K[Oe],Ye=K[ce],Be=we.start+we.count,xe=We(Ye.start,w.width,4),rt=We(we.start,w.width,4);Ye.start<=Be+1&&xe===rt&&We(Ye.start+Ye.count-1,w.width,4)===xe?we.count=Math.max(we.count,Ye.start+Ye.count-we.start):(++Oe,K[Oe]=Ye)}K.length=Oe+1;let fe=s.getParameter(s.UNPACK_ROW_LENGTH),Ue=s.getParameter(s.UNPACK_SKIP_PIXELS),Fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ce=0,we=K.length;ce<we;ce++){let Ye=K[ce],Be=Math.floor(Ye.start/4),xe=Math.ceil(Ye.count/4),rt=Be%w.width,B=Math.floor(Be/w.width),de=xe,ge=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,rt,B,de,ge,G,j,w.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function $(I,w,G){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);let oe=Le(I,w),K=w.source;t.bindTexture(j,I.__webglTexture,s.TEXTURE0+G);let Oe=n.get(K);if(K.version!==Oe.__version||oe===!0){t.activeTexture(s.TEXTURE0+G);let fe=ht.getPrimaries(ht.workingColorSpace),Ue=w.colorSpace===Ii?null:ht.getPrimaries(w.colorSpace),Fe=w.colorSpace===Ii||fe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ce=v(w.image,!1,i.maxTextureSize);ce=Qe(w,ce);let we=r.convert(w.format,w.colorSpace),Ye=r.convert(w.type),Be=_(w.internalFormat,we,Ye,w.colorSpace,w.isVideoTexture);le(j,w);let xe,rt=w.mipmaps,B=w.isVideoTexture!==!0,de=Oe.__version===void 0||oe===!0,ge=K.dataReady,Ie=T(w,ce);if(w.isDepthTexture)Be=y(w.format===Fr,w.type),de&&(B?t.texStorage2D(s.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Be,ce.width,ce.height,0,we,Ye,null));else if(w.isDataTexture)if(rt.length>0){B&&de&&t.texStorage2D(s.TEXTURE_2D,Ie,Be,rt[0].width,rt[0].height);for(let he=0,ie=rt.length;he<ie;he++)xe=rt[he],B?ge&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,we,Ye,xe.data):t.texImage2D(s.TEXTURE_2D,he,Be,xe.width,xe.height,0,we,Ye,xe.data);w.generateMipmaps=!1}else B?(de&&t.texStorage2D(s.TEXTURE_2D,Ie,Be,ce.width,ce.height),ge&&ve(w,ce,we,Ye)):t.texImage2D(s.TEXTURE_2D,0,Be,ce.width,ce.height,0,we,Ye,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,rt[0].width,rt[0].height,ce.depth);for(let he=0,ie=rt.length;he<ie;he++)if(xe=rt[he],w.format!==xn)if(we!==null)if(B){if(ge)if(w.layerUpdates.size>0){let Ne=uf(xe.width,xe.height,w.format,w.type);for(let et of w.layerUpdates){let wt=xe.data.subarray(et*Ne/xe.data.BYTES_PER_ELEMENT,(et+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,et,xe.width,xe.height,1,we,wt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ce.depth,we,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Be,xe.width,xe.height,ce.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ce.depth,we,Ye,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Be,xe.width,xe.height,ce.depth,0,we,Ye,xe.data)}else{B&&de&&t.texStorage2D(s.TEXTURE_2D,Ie,Be,rt[0].width,rt[0].height);for(let he=0,ie=rt.length;he<ie;he++)xe=rt[he],w.format!==xn?we!==null?B?ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,we,Ye,xe.data):t.texImage2D(s.TEXTURE_2D,he,Be,xe.width,xe.height,0,we,Ye,xe.data)}else if(w.isDataArrayTexture)if(B){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,ce.width,ce.height,ce.depth),ge)if(w.layerUpdates.size>0){let he=uf(ce.width,ce.height,w.format,w.type);for(let ie of w.layerUpdates){let Ne=ce.data.subarray(ie*he/ce.data.BYTES_PER_ELEMENT,(ie+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,we,Ye,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,we,Ye,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,we,Ye,ce.data);else if(w.isData3DTexture)B?(de&&t.texStorage3D(s.TEXTURE_3D,Ie,Be,ce.width,ce.height,ce.depth),ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,we,Ye,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,we,Ye,ce.data);else if(w.isFramebufferTexture){if(de)if(B)t.texStorage2D(s.TEXTURE_2D,Ie,Be,ce.width,ce.height);else{let he=ce.width,ie=ce.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,Be,he,ie,0,we,Ye,null),he>>=1,ie>>=1}}else if(rt.length>0){if(B&&de){let he=Ke(rt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Be,he.width,he.height)}for(let he=0,ie=rt.length;he<ie;he++)xe=rt[he],B?ge&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,we,Ye,xe):t.texImage2D(s.TEXTURE_2D,he,Be,we,Ye,xe);w.generateMipmaps=!1}else if(B){if(de){let he=Ke(ce);t.texStorage2D(s.TEXTURE_2D,Ie,Be,he.width,he.height)}ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ye,ce)}else t.texImage2D(s.TEXTURE_2D,0,Be,we,Ye,ce);g(w)&&p(j),Oe.__version=K.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ne(I,w,G){if(w.image.length!==6)return;let j=Le(I,w),oe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+G);let K=n.get(oe);if(oe.version!==K.__version||j===!0){t.activeTexture(s.TEXTURE0+G);let Oe=ht.getPrimaries(ht.workingColorSpace),fe=w.colorSpace===Ii?null:ht.getPrimaries(w.colorSpace),Ue=w.colorSpace===Ii||Oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,we=[];for(let ie=0;ie<6;ie++)!Fe&&!ce?we[ie]=v(w.image[ie],!0,i.maxCubemapSize):we[ie]=ce?w.image[ie].image:w.image[ie],we[ie]=Qe(w,we[ie]);let Ye=we[0],Be=r.convert(w.format,w.colorSpace),xe=r.convert(w.type),rt=_(w.internalFormat,Be,xe,w.colorSpace),B=w.isVideoTexture!==!0,de=K.__version===void 0||j===!0,ge=oe.dataReady,Ie=T(w,Ye);le(s.TEXTURE_CUBE_MAP,w);let he;if(Fe){B&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,rt,Ye.width,Ye.height);for(let ie=0;ie<6;ie++){he=we[ie].mipmaps;for(let Ne=0;Ne<he.length;Ne++){let et=he[Ne];w.format!==xn?Be!==null?B?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,et.width,et.height,Be,et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,rt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,et.width,et.height,Be,xe,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,rt,et.width,et.height,0,Be,xe,et.data)}}}else{if(he=w.mipmaps,B&&de){he.length>0&&Ie++;let ie=Ke(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,rt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we[ie].width,we[ie].height,Be,xe,we[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,rt,we[ie].width,we[ie].height,0,Be,xe,we[ie].data);for(let Ne=0;Ne<he.length;Ne++){let wt=he[Ne].image[ie].image;B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,wt.width,wt.height,Be,xe,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,rt,wt.width,wt.height,0,Be,xe,wt.data)}}else{B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,xe,we[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,rt,Be,xe,we[ie]);for(let Ne=0;Ne<he.length;Ne++){let et=he[Ne];B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Be,xe,et.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,rt,Be,xe,et.image[ie])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),K.__version=oe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function be(I,w,G,j,oe,K){let Oe=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),Ue=_(G.internalFormat,Oe,fe,G.colorSpace),Fe=n.get(w),ce=n.get(G);if(ce.__renderTarget=w,!Fe.__hasExternalTextures){let we=Math.max(1,w.width>>K),Ye=Math.max(1,w.height>>K);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,K,Ue,we,Ye,w.depth,0,Oe,fe,null):t.texImage2D(oe,K,Ue,we,Ye,0,Oe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ae(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,oe,ce.__webglTexture,0,pe(w)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,oe,ce.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(I,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){let j=w.depthTexture,oe=j&&j.isDepthTexture?j.type:null,K=y(w.stencilBuffer,oe),Oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=pe(w);ae(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,K,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,I)}else{let j=w.textures;for(let oe=0;oe<j.length;oe++){let K=j[oe],Oe=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),Ue=_(K.internalFormat,Oe,fe,K.colorSpace),Fe=pe(w);G&&ae(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ue,w.width,w.height):ae(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,Ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let oe=j.__webglTexture,K=pe(w);if(w.depthTexture.format===Ur)ae(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(w.depthTexture.format===Fr)ae(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function lt(I){let w=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",oe)};j.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=j}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let j=I.texture.mipmaps;j&&j.length>0?Ee(w.__webglFramebuffer[0],I):Ee(w.__webglFramebuffer,I)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),Pe(w.__webglDepthbuffer[j],I,!1);else{let oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,K)}}else{let j=I.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Pe(w.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(I,w,G){let j=n.get(I);w!==void 0&&be(j.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&lt(I)}function D(I){let w=I.texture,G=n.get(I),j=n.get(w);I.addEventListener("dispose",R);let oe=I.textures,K=I.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)G.__webglFramebuffer[fe][Ue]=s.createFramebuffer()}else G.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[fe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let fe=0,Ue=oe.length;fe<Ue;fe++){let Fe=n.get(oe[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ae(I)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){let Ue=oe[fe];G.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);let Fe=r.convert(Ue.format,Ue.colorSpace),ce=r.convert(Ue.type),we=_(Ue.internalFormat,Fe,ce,Ue.colorSpace,I.isXRRenderTarget===!0),Ye=pe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,we,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),le(s.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)be(G.__webglFramebuffer[fe][Ue],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue);else be(G.__webglFramebuffer[fe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let fe=0,Ue=oe.length;fe<Ue;fe++){let Fe=oe[fe],ce=n.get(Fe),we=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ce.__webglTexture),le(we,Fe),be(G.__webglFramebuffer,I,Fe,s.COLOR_ATTACHMENT0+fe,we,0),g(Fe)&&p(we)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),le(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)be(G.__webglFramebuffer[Ue],I,w,s.COLOR_ATTACHMENT0,fe,Ue);else be(G.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,fe,0);g(w)&&p(fe),t.unbindTexture()}I.depthBuffer&&lt(I)}function re(I){let w=I.textures;for(let G=0,j=w.length;G<j;G++){let oe=w[G];if(g(oe)){let K=x(I),Oe=n.get(oe).__webglTexture;t.bindTexture(K,Oe),p(K),t.unbindTexture()}}}let te=[],J=[];function Q(I){if(I.samples>0){if(ae(I)===!1){let w=I.textures,G=I.width,j=I.height,oe=s.COLOR_BUFFER_BIT,K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=n.get(I),fe=w.length>1;if(fe)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let Ue=I.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let ce=n.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ce,0)}s.blitFramebuffer(0,0,G,j,0,0,G,j,oe,s.NEAREST),l===!0&&(te.length=0,J.length=0,te.push(s.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(te.push(K),J.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let ce=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pe(I){return Math.min(i.maxSamples,I.samples)}function ae(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function me(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Qe(I,w){let G=I.colorSpace,j=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==zs&&G!==Ii&&(ht.getTransfer(G)===xt?(j!==xn||oe!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=Mt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ae}function lg(s,e){function t(n,i=Ii){let r,o=ht.getTransfer(i);if(n===ri)return s.UNSIGNED_BYTE;if(n===Th)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ef)return s.BYTE;if(n===wf)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===wh)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Kr)return s.HALF_FLOAT;if(n===Rf)return s.ALPHA;if(n===Cf)return s.RGB;if(n===xn)return s.RGBA;if(n===Ur)return s.DEPTH_COMPONENT;if(n===Fr)return s.DEPTH_STENCIL;if(n===Rh)return s.RED;if(n===ba)return s.RED_INTEGER;if(n===Pf)return s.RG;if(n===Ch)return s.RG_INTEGER;if(n===Ph)return s.RGBA_INTEGER;if(n===Co||n===Po||n===Io||n===Lo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===jl||n===Kl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zn({vertexShader:ub,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends Zn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new xf,p={},x=t.getContextAttributes(),_=null,y=null,T=[],E=[],R=new se,C=null,S=new Yt;S.viewport=new ut;let b=new Yt;b.viewport=new ut;let P=[S,b],N=new xh,H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=T[$];return ne===void 0&&(ne=new Pr,T[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=T[$];return ne===void 0&&(ne=new Pr,T[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=T[$];return ne===void 0&&(ne=new Pr,T[$]=ne),ne.getHandSpace()};function X($){let ne=E.indexOf($.inputSource);if(ne===-1)return;let be=T[ne];be!==void 0&&(be.update($.inputSource,$.frame,c||o),be.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",F);for(let $=0;$<T.length;$++){let ne=E[$];ne!==null&&(E[$]=null,T[$].disconnect(ne))}H=null,W=null,g.reset();for(let $ in p)delete p[$];e.setRenderTarget(_),f=null,d=null,u=null,i=null,y=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",O),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?Fr:Ur,Pe=x.stencil?Dr:zi);let lt={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(lt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $n(d.textureWidth,d.textureHeight,{format:xn,type:ri,depthTexture:new Jo(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $n(f.framebufferWidth,f.framebufferHeight,{format:xn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F($){for(let ne=0;ne<$.removed.length;ne++){let be=$.removed[ne],Pe=E.indexOf(be);Pe>=0&&(E[Pe]=null,T[Pe].disconnect(be))}for(let ne=0;ne<$.added.length;ne++){let be=$.added[ne],Pe=E.indexOf(be);if(Pe===-1){for(let lt=0;lt<T.length;lt++)if(lt>=E.length){E.push(be),Pe=lt;break}else if(E[lt]===null){E[lt]=be,Pe=lt;break}if(Pe===-1)break}let Ee=T[Pe];Ee&&Ee.connect(be)}}let U=new L,V=new L;function q($,ne,be){U.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(be.matrixWorld);let Pe=U.distanceTo(V),Ee=ne.projectionMatrix.elements,lt=be.projectionMatrix.elements,Mt=Ee[14]/(Ee[10]-1),D=Ee[14]/(Ee[10]+1),re=(Ee[9]+1)/Ee[5],te=(Ee[9]-1)/Ee[5],J=(Ee[8]-1)/Ee[0],Q=(lt[8]+1)/lt[0],pe=Mt*J,ae=Mt*Q,me=Pe/(-J+Q),Qe=me*-J;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ke=Mt+me,I=D+me,w=pe-Qe,G=ae+(Pe-Qe),j=re*D/I*Ke,oe=te*D/I*Ke;$.projectionMatrix.makePerspective(w,G,j,oe,Ke,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ne=$.near,be=$.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(be=g.depthFar)),N.near=b.near=S.near=ne,N.far=b.far=S.far=be,(H!==N.near||W!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,W=N.far),N.layers.mask=$.layers.mask|6,S.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let Pe=$.parent,Ee=N.cameras;ee(N,Pe);for(let lt=0;lt<Ee.length;lt++)ee(Ee[lt],Pe);Ee.length===2?q(N,S,b):N.projectionMatrix.copy(S.projectionMatrix),le($,N,Pe)};function le($,ne,be){be===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Or*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function($){return p[$]};let Le=null;function We($,ne){if(h=ne.getViewerPose(c||o),m=ne,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;be.length!==N.cameras.length&&(N.cameras.length=0,Pe=!0);for(let D=0;D<be.length;D++){let re=be[D],te=null;if(f!==null)te=f.getViewport(re);else{let Q=u.getViewSubImage(d,re);te=Q.viewport,D===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let J=P[D];J===void 0&&(J=new Yt,J.layers.enable(D),J.viewport=new ut,P[D]=J),J.matrix.fromArray(re.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(re.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),D===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pe===!0&&N.cameras.push(J)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let D=u.getDepthInformation(be[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<be.length;D++){let re=be[D].camera;if(re){let te=p[re];te||(te=new Qo,p[re]=te);let J=u.getCameraImage(re);te.sourceTexture=J}}}}for(let be=0;be<T.length;be++){let Pe=E[be],Ee=T[be];Pe!==null&&Ee!==void 0&&Ee.update(Pe,ne,c||o)}Le&&Le($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let ve=new ig;ve.setAnimationLoop(We),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}},Cs=new Bn,fb=new je;function pb(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,q0(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,Cs.copy(y),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(Cs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mb(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));let T=_.program;n.updateUBOMapping(x,T);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let _=u();x.__bindingPointIndex=_;let y=s.createBuffer(),T=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=i[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,R=y.length;E<R;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,b=C.length;S<b;S++){let P=C[S];if(f(P,E,S,T)===!0){let N=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],W=0;for(let X=0;X<H.length;X++){let O=H[X],F=v(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,N+W,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,y,T){let E=x.value,R=_+"_"+y;if(T[R]===void 0)return typeof E=="number"||typeof E=="boolean"?T[R]=E:T[R]=E.clone(),!0;{let C=T[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(x){let _=x.uniforms,y=0,T=16;for(let R=0,C=_.length;R<C;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,P=S.length;b<P;b++){let N=S[b],H=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=H.length;W<X;W++){let O=H[W],F=v(O),U=y%T,V=U%F.boundary,q=U+V;y+=V,q!==0&&T-q<F.storage&&(y+=T-q),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}let E=y%T;return E>0&&(y+=T-E),x.__size=y,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Mf=class{constructor(e={}){let{canvas:t=W0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=wn;let E=0,R=0,C=null,S=-1,b=null,P=new ut,N=new ut,H=null,W=new Te(0),X=0,O=t.width,F=t.height,U=1,V=null,q=null,ee=new ut(0,0,O,F),le=new ut(0,0,O,F),Le=!1,We=new rs,ve=!1,$=!1,ne=new je,be=new L,Pe=new ut,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Mt(){return C===null?U:1}let D=n;function re(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){let z="webgl2";if(D=re(z,A),D===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,J,Q,pe,ae,me,Qe,Ke,I,w,G,j,oe,K,Oe,fe,Ue,Fe,ce,we,Ye,Be,xe,rt;function B(){te=new US(D),te.init(),Be=new lg(D,te),J=new AS(D,te,e,Be),Q=new cb(D,te),J.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),pe=new OS(D),ae=new j1,me=new hb(D,te,Q,ae,J,Be,pe),Qe=new CS(y),Ke=new DS(y),I=new Gx(D),xe=new wS(D,I),w=new FS(D,I,pe,xe),G=new zS(D,w,I,pe),ce=new BS(D,J,me),fe=new RS(ae),j=new $1(y,Qe,Ke,te,J,xe,fe),oe=new pb(y,ae),K=new J1,Oe=new sb(te),Fe=new ES(y,Qe,Ke,Q,G,f,l),Ue=new ab(y,G,J),rt=new mb(D,pe,J,Q),we=new TS(D,te,pe),Ye=new NS(D,te,pe),pe.programs=j.programs,y.capabilities=J,y.extensions=te,y.properties=ae,y.renderLists=K,y.shadowMap=Ue,y.state=Q,y.info=pe}B();let de=new yf(y,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(O,F,!1))},this.getSize=function(A){return A.set(O,F)},this.setSize=function(A,z,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,F=z,t.width=Math.floor(A*U),t.height=Math.floor(z*U),Y===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(O*U,F*U).floor()},this.setDrawingBufferSize=function(A,z,Y){O=A,F=z,U=Y,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,z,Y,Z){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,z,Y,Z),Q.viewport(P.copy(ee).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,z,Y,Z){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,z,Y,Z),Q.scissor(N.copy(le).multiplyScalar(U).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){Q.setScissorTest(Le=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Y=!0){let Z=0;if(A){let k=!1;if(C!==null){let ue=C.texture.format;k=ue===Ph||ue===Ch||ue===ba}if(k){let ue=C.texture.type,Me=ue===ri||ue===zi||ue===Lr||ue===Dr||ue===Th||ue===Ah,De=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Xe=De.r,$e=De.g,ke=De.b;Me?(m[0]=Xe,m[1]=$e,m[2]=ke,m[3]=Ce,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Xe,v[1]=$e,v[2]=ke,v[3]=Ce,D.clearBufferiv(D.COLOR,0,v))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),K.dispose(),Oe.dispose(),ae.dispose(),Qe.dispose(),Ke.dispose(),G.dispose(),xe.dispose(),rt.dispose(),j.dispose(),de.dispose(),de.removeEventListener("sessionstart",ci),de.removeEventListener("sessionend",gp),ps.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=pe.autoReset,z=Ue.enabled,Y=Ue.autoUpdate,Z=Ue.needsUpdate,k=Ue.type;B(),pe.autoReset=A,Ue.enabled=z,Ue.autoUpdate=Y,Ue.needsUpdate=Z,Ue.type=k}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){let z=A.target;z.removeEventListener("dispose",ie),Ne(z)}function Ne(A){et(A),ae.remove(A)}function et(A){let z=ae.get(A).programs;z!==void 0&&(z.forEach(function(Y){j.releaseProgram(Y)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,Z,k,ue){z===null&&(z=Ee);let Me=k.isMesh&&k.matrixWorld.determinant()<0,De=jg(A,z,Y,Z,k);Q.setMaterial(Z,Me);let Ce=Y.index,Xe=1;if(Z.wireframe===!0){if(Ce=w.getWireframeAttribute(Y),Ce===void 0)return;Xe=2}let $e=Y.drawRange,ke=Y.attributes.position,ct=$e.start*Xe,St=($e.start+$e.count)*Xe;ue!==null&&(ct=Math.max(ct,ue.start*Xe),St=Math.min(St,(ue.start+ue.count)*Xe)),Ce!==null?(ct=Math.max(ct,0),St=Math.min(St,Ce.count)):ke!=null&&(ct=Math.max(ct,0),St=Math.min(St,ke.count));let Ft=St-ct;if(Ft<0||Ft===1/0)return;xe.setup(k,Z,De,Y,Ce);let At,Et=we;if(Ce!==null&&(At=I.get(Ce),Et=Ye,Et.setIndex(At)),k.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*Mt()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(k.isLine){let Ve=Z.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*Mt()),k.isLineSegments?Et.setMode(D.LINES):k.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else k.isPoints?Et.setMode(D.POINTS):k.isSprite&&Et.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ve=k._multiDrawStarts,Ct=k._multiDrawCounts,ft=k._multiDrawCount,Ln=Ce?I.get(Ce).bytesPerElement:1,sr=ae.get(Z).currentProgram.getUniforms();for(let Dn=0;Dn<ft;Dn++)sr.setValue(D,"_gl_DrawID",Dn),Et.render(Ve[Dn]/Ln,Ct[Dn])}else if(k.isInstancedMesh)Et.renderInstances(ct,Ft,k.count);else if(Y.isInstancedBufferGeometry){let Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,Ve);Et.renderInstances(ct,Ft,Ct)}else Et.render(ct,Ft)};function wt(A,z,Y){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,Fa(A,z,Y),A.side=Oi,A.needsUpdate=!0,Fa(A,z,Y),A.side=pi):Fa(A,z,Y)}this.compile=function(A,z,Y=null){Y===null&&(Y=A),p=Oe.get(Y),p.init(z),_.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==Y&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Z=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ue=k.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let De=ue[Me];wt(De,Y,k),Z.add(De)}else wt(ue,Y,k),Z.add(ue)}),p=_.pop(),Z},this.compileAsync=function(A,z,Y=null){let Z=this.compile(A,z,Y);return new Promise(k=>{function ue(){if(Z.forEach(function(Me){ae.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){k(A);return}setTimeout(ue,10)}te.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let gt=null;function Ei(A){gt&&gt(A)}function ci(){ps.stop()}function gp(){ps.start()}let ps=new ig;ps.setAnimationLoop(Ei),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(A){gt=A,de.setAnimationLoop(A),A===null?ps.stop():ps.start()},de.addEventListener("sessionstart",ci),de.addEventListener("sessionend",gp),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,C),p=Oe.get(A,_.length),p.init(z),_.push(p),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),We.setFromProjectionMatrix(ne,Nn,z.reversedDepth),$=this.localClippingEnabled,ve=fe.init(this.clippingPlanes,$),g=K.get(A,x.length),g.init(),x.push(g),de.enabled===!0&&de.isPresenting===!0){let ue=y.xr.getDepthSensingMesh();ue!==null&&Kh(ue,z,-1/0,y.sortObjects)}Kh(A,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,q),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Fe.addToRenderList(g,A),this.info.render.frame++,ve===!0&&fe.beginShadows();let Y=p.state.shadowsArray;Ue.render(Y,A,z),ve===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,k=g.transmissive;if(p.setupLights(),z.isArrayCamera){let ue=z.cameras;if(k.length>0)for(let Me=0,De=ue.length;Me<De;Me++){let Ce=ue[Me];_p(Z,k,A,Ce)}lt&&Fe.render(A);for(let Me=0,De=ue.length;Me<De;Me++){let Ce=ue[Me];vp(g,A,Ce,Ce.viewport)}}else k.length>0&&_p(Z,k,A,z),lt&&Fe.render(A),vp(g,A,z);C!==null&&R===0&&(me.updateMultisampleRenderTarget(C),me.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,z),xe.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],ve===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Kh(A,z,Y,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||We.intersectsSprite(A)){Z&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);let Me=G.update(A),De=A.material;De.visible&&g.push(A,Me,De,Y,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||We.intersectsObject(A))){let Me=G.update(A),De=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(De)){let Ce=Me.groups;for(let Xe=0,$e=Ce.length;Xe<$e;Xe++){let ke=Ce[Xe],ct=De[ke.materialIndex];ct&&ct.visible&&g.push(A,Me,ct,Y,Pe.z,ke)}}else De.visible&&g.push(A,Me,De,Y,Pe.z,null)}}let ue=A.children;for(let Me=0,De=ue.length;Me<De;Me++)Kh(ue[Me],z,Y,Z)}function vp(A,z,Y,Z){let k=A.opaque,ue=A.transmissive,Me=A.transparent;p.setupLightsView(Y),ve===!0&&fe.setGlobalState(y.clippingPlanes,Y),Z&&Q.viewport(P.copy(Z)),k.length>0&&Ua(k,z,Y),ue.length>0&&Ua(ue,z,Y),Me.length>0&&Ua(Me,z,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function _p(A,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new $n(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Kr:ri,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let ue=p.state.transmissionRenderTarget[Z.id],Me=Z.viewport||P;ue.setSize(Me.z*y.transmissionResolutionScale,Me.w*y.transmissionResolutionScale);let De=y.getRenderTarget(),Ce=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(W),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),lt&&Fe.render(Y);let $e=y.toneMapping;y.toneMapping=Ui;let ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ve===!0&&fe.setGlobalState(y.clippingPlanes,Z),Ua(A,Y,Z),me.updateMultisampleRenderTarget(ue),me.updateRenderTargetMipmap(ue),te.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let St=0,Ft=z.length;St<Ft;St++){let At=z[St],Et=At.object,Ve=At.geometry,Ct=At.material,ft=At.group;if(Ct.side===pi&&Et.layers.test(Z.layers)){let Ln=Ct.side;Ct.side=yn,Ct.needsUpdate=!0,xp(Et,Y,Z,Ve,Ct,ft),Ct.side=Ln,Ct.needsUpdate=!0,ct=!0}}ct===!0&&(me.updateMultisampleRenderTarget(ue),me.updateRenderTargetMipmap(ue))}y.setRenderTarget(De,Ce,Xe),y.setClearColor(W,X),ke!==void 0&&(Z.viewport=ke),y.toneMapping=$e}function Ua(A,z,Y){let Z=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ue=A.length;k<ue;k++){let Me=A[k],De=Me.object,Ce=Me.geometry,Xe=Me.group,$e=Me.material;$e.allowOverride===!0&&Z!==null&&($e=Z),De.layers.test(Y.layers)&&xp(De,z,Y,Ce,$e,Xe)}}function xp(A,z,Y,Z,k,ue){A.onBeforeRender(y,z,Y,Z,k,ue),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(y,z,Y,Z,A,ue),k.transparent===!0&&k.side===pi&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,k,A,ue),k.side=Oi,k.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,k,A,ue),k.side=pi):y.renderBufferDirect(Y,z,Z,k,A,ue),A.onAfterRender(y,z,Y,Z,k,ue)}function Fa(A,z,Y){z.isScene!==!0&&(z=Ee);let Z=ae.get(A),k=p.state.lights,ue=p.state.shadowsArray,Me=k.state.version,De=j.getParameters(A,k.state,ue,z,Y),Ce=j.getProgramCacheKey(De),Xe=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?Ke:Qe).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ie),Xe=new Map,Z.programs=Xe);let $e=Xe.get(Ce);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Me)return Mp(A,De),$e}else De.uniforms=j.getUniforms(A),A.onBeforeCompile(De,y),$e=j.acquireProgram(De,Ce),Xe.set(Ce,$e),Z.uniforms=De.uniforms;let ke=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Mp(A,De),Z.needsLights=Jg(A),Z.lightsStateVersion=Me,Z.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function yp(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ir.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Mp(A,z){let Y=ae.get(A);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function jg(A,z,Y,Z,k){z.isScene!==!0&&(z=Ee),me.resetTextureUnits();let ue=z.fog,Me=Z.isMeshStandardMaterial?z.environment:null,De=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zs,Ce=(Z.isMeshStandardMaterial?Ke:Qe).get(Z.envMap||Me),Xe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,Ft=Ui;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=y.toneMapping);let At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=At!==void 0?At.length:0,Ve=ae.get(Z),Ct=p.state.lights;if(ve===!0&&($===!0||A!==b)){let mn=A===b&&Z.id===S;fe.setState(Z,A,mn)}let ft=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ct.state.version||Ve.outputColorSpace!==De||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Ce||Z.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==$e||Ve.morphTargets!==ke||Ve.morphNormals!==ct||Ve.morphColors!==St||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==Et)&&(ft=!0):(ft=!0,Ve.__version=Z.version);let Ln=Ve.currentProgram;ft===!0&&(Ln=Fa(Z,z,k));let sr=!1,Dn=!1,uo=!1,Pt=Ln.getUniforms(),Gn=Ve.uniforms;if(Q.useProgram(Ln.program)&&(sr=!0,Dn=!0,uo=!0),Z.id!==S&&(S=Z.id,Dn=!0),sr||b!==A){Q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(D,"projectionMatrix",A.projectionMatrix),Pt.setValue(D,"viewMatrix",A.matrixWorldInverse);let Sn=Pt.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,be.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Dn=!0,uo=!0)}if(k.isSkinnedMesh){Pt.setOptional(D,k,"bindMatrix"),Pt.setOptional(D,k,"bindMatrixInverse");let mn=k.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(D,"boneTexture",mn.boneTexture,me))}k.isBatchedMesh&&(Pt.setOptional(D,k,"batchingTexture"),Pt.setValue(D,"batchingTexture",k._matricesTexture,me),Pt.setOptional(D,k,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",k._indirectTexture,me),Pt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",k._colorsTexture,me));let Wn=Y.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ce.update(k,Y,Ln),(Dn||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Pt.setValue(D,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Gn.envMap.value=Ce,Gn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(Gn.envMapIntensity.value=z.environmentIntensity),Dn&&(Pt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&Kg(Gn,uo),ue&&Z.fog===!0&&oe.refreshFogUniforms(Gn,ue),oe.refreshMaterialUniforms(Gn,Z,U,F,p.state.transmissionRenderTarget[A.id]),Ir.upload(D,yp(Ve),Gn,me)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ir.upload(D,yp(Ve),Gn,me),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(D,"center",k.center),Pt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Pt.setValue(D,"normalMatrix",k.normalMatrix),Pt.setValue(D,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let mn=Z.uniformsGroups;for(let Sn=0,Jh=mn.length;Sn<Jh;Sn++){let ms=mn[Sn];rt.update(ms,Ln),rt.bind(ms,Ln)}}return Ln}function Kg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Jg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,Y){let Z=ae.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=z,ae.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Y=ae.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};let Qg=D.createFramebuffer();this.setRenderTarget=function(A,z=0,Y=0){C=A,E=z,R=Y;let Z=!0,k=null,ue=!1,Me=!1;if(A){let Ce=ae.get(A);if(Ce.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Ce.__hasExternalTextures)me.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ke=A.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&ae.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}let Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);let $e=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[z])?k=$e[z][Y]:k=$e[z],ue=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?k=ae.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[Y]:k=$e,P.copy(A.viewport),N.copy(A.scissor),H=A.scissorTest}else P.copy(ee).multiplyScalar(U).floor(),N.copy(le).multiplyScalar(U).floor(),H=Le;if(Y!==0&&(k=Qg),Q.bindFramebuffer(D.FRAMEBUFFER,k)&&Z&&Q.drawBuffers(A,k),Q.viewport(P),Q.scissor(N),Q.setScissorTest(H),ue){let Ce=ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,Y)}else if(Me){let Ce=z;for(let Xe=0;Xe<A.textures.length;Xe++){let $e=ae.get(A.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,$e.__webglTexture,Y,Ce)}}else if(A!==null&&Y!==0){let Ce=ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(A,z,Y,Z,k,ue,Me,De=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){Q.bindFramebuffer(D.FRAMEBUFFER,Ce);try{let Xe=A.textures[De],$e=Xe.format,ke=Xe.type;if(!J.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-k&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),D.readPixels(z,Y,Z,k,Be.convert($e),Be.convert(ke),ue))}finally{let Xe=C!==null?ae.get(C).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,z,Y,Z,k,ue,Me,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-k){Q.bindFramebuffer(D.FRAMEBUFFER,Ce);let Xe=A.textures[De],$e=Xe.format,ke=Xe.type;if(!J.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),D.readPixels(z,Y,Z,k,Be.convert($e),Be.convert(ke),0);let St=C!==null?ae.get(C).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,St);let Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await f_(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(ct),D.deleteSync(Ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Y=0){let Z=Math.pow(2,-Y),k=Math.floor(A.image.width*Z),ue=Math.floor(A.image.height*Z),Me=z!==null?z.x:0,De=z!==null?z.y:0;me.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Me,De,k,ue),Q.unbindTexture()};let ev=D.createFramebuffer(),tv=D.createFramebuffer();this.copyTextureToTexture=function(A,z,Y=null,Z=null,k=0,ue=null){ue===null&&(k!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=k,k=0):ue=0);let Me,De,Ce,Xe,$e,ke,ct,St,Ft,At=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(Y!==null)Me=Y.max.x-Y.min.x,De=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Xe=Y.min.x,$e=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{let Wn=Math.pow(2,-k);Me=Math.floor(At.width*Wn),De=Math.floor(At.height*Wn),A.isDataArrayTexture?Ce=At.depth:A.isData3DTexture?Ce=Math.floor(At.depth*Wn):Ce=1,Xe=0,$e=0,ke=0}Z!==null?(ct=Z.x,St=Z.y,Ft=Z.z):(ct=0,St=0,Ft=0);let Et=Be.convert(z.format),Ve=Be.convert(z.type),Ct;z.isData3DTexture?(me.setTexture3D(z,0),Ct=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(me.setTexture2DArray(z,0),Ct=D.TEXTURE_2D_ARRAY):(me.setTexture2D(z,0),Ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let ft=D.getParameter(D.UNPACK_ROW_LENGTH),Ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sr=D.getParameter(D.UNPACK_SKIP_PIXELS),Dn=D.getParameter(D.UNPACK_SKIP_ROWS),uo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,$e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);let Pt=A.isDataArrayTexture||A.isData3DTexture,Gn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Wn=ae.get(A),mn=ae.get(z),Sn=ae.get(Wn.__renderTarget),Jh=ae.get(mn.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jh.__webglFramebuffer);for(let ms=0;ms<Ce;ms++)Pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,k,ke+ms),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,ue,Ft+ms)),D.blitFramebuffer(Xe,$e,Me,De,ct,St,Me,De,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||ae.has(A)){let Wn=ae.get(A),mn=ae.get(z);Q.bindFramebuffer(D.READ_FRAMEBUFFER,ev),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,tv);for(let Sn=0;Sn<Ce;Sn++)Pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wn.__webglTexture,k,ke+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wn.__webglTexture,k),Gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mn.__webglTexture,ue,Ft+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mn.__webglTexture,ue),k!==0?D.blitFramebuffer(Xe,$e,Me,De,ct,St,Me,De,D.COLOR_BUFFER_BIT,D.NEAREST):Gn?D.copyTexSubImage3D(Ct,ue,ct,St,Ft+Sn,Xe,$e,Me,De):D.copyTexSubImage2D(Ct,ue,ct,St,Xe,$e,Me,De);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ct,ue,ct,St,Ft,Me,De,Ce,Et,Ve,At.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,ue,ct,St,Ft,Me,De,Ce,Et,At.data):D.texSubImage3D(Ct,ue,ct,St,Ft,Me,De,Ce,Et,Ve,At):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,ct,St,Me,De,Et,Ve,At.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,ct,St,At.width,At.height,Et,At.data):D.texSubImage2D(D.TEXTURE_2D,ue,ct,St,Me,De,Et,Ve,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,uo),ue===0&&z.generateMipmaps&&D.generateMipmap(Ct),Q.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,Q.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};M.ACESFilmicToneMapping=w0;M.AddEquation=es;M.AddOperation=M0;M.AdditiveAnimationBlendMode=If;M.AdditiveBlending=Wu;M.AgXToneMapping=A0;M.AlphaFormat=Rf;M.AlwaysCompare=V0;M.AlwaysDepth=Il;M.AlwaysStencilFunc=Zu;M.AmbientLight=dh;M.AnimationAction=bh;M.AnimationClip=Zs;M.AnimationLoader=_d;M.AnimationMixer=Fd;M.AnimationObjectGroup=Ud;M.AnimationUtils=gd;M.ArcCurve=Uc;M.ArrayCamera=xh;M.ArrowHelper=af;M.AttachedBindMode=Yu;M.Audio=Mh;M.AudioAnalyser=Ld;M.AudioContext=ya;M.AudioListener=Pd;M.AudioLoader=Rd;M.AxesHelper=lf;M.BackSide=yn;M.BasicDepthPacking=D0;M.BasicShadowMap=dv;M.BatchedMesh=Ec;M.Bone=jo;M.BooleanKeyframeTrack=ki;M.Box2=Yd;M.Box3=en;M.Box3Helper=rf;M.BoxGeometry=ks;M.BoxHelper=sf;M.BufferAttribute=vt;M.BufferGeometry=st;M.BufferGeometryLoader=_h;M.ByteType=Ef;M.Cache=_i;M.Camera=Vr;M.CameraHelper=nf;M.CanvasTexture=ud;M.CapsuleGeometry=Pc;M.CatmullRomCurve3=Fc;M.CineonToneMapping=E0;M.CircleGeometry=Ic;M.ClampToEdgeWrapping=qn;M.Clock=yh;M.Color=Te;M.ColorKeyframeTrack=ga;M.ColorManagement=ht;M.CompressedArrayTexture=cd;M.CompressedCubeTexture=hd;M.CompressedTexture=Wr;M.CompressedTextureLoader=xd;M.ConeGeometry=ta;M.ConstantAlphaFactor=_0;M.ConstantColorFactor=g0;M.Controls=hf;M.CubeCamera=fc;M.CubeReflectionMapping=Bi;M.CubeRefractionMapping=ns;M.CubeTexture=Hs;M.CubeTextureLoader=yd;M.CubeUVReflectionMapping=jr;M.CubicBezierCurve=na;M.CubicBezierCurve3=Nc;M.CubicInterpolant=rh;M.CullFaceBack=Gu;M.CullFaceFront=e0;M.CullFaceFrontBack=uv;M.CullFaceNone=Qm;M.Curve=kn;M.CurvePath=zc;M.CustomBlending=n0;M.CustomToneMapping=T0;M.CylinderGeometry=ea;M.Cylindrical=Xd;M.Data3DTexture=zr;M.DataArrayTexture=Br;M.DataTexture=Yn;M.DataTextureLoader=Md;M.DataUtils=Ju;M.DecrementStencilOp=Tv;M.DecrementWrapStencilOp=Rv;M.DefaultLoadingManager=tg;M.DepthFormat=Ur;M.DepthStencilFormat=Fr;M.DepthTexture=Jo;M.DetachedBindMode=C0;M.DirectionalLight=uh;M.DirectionalLightHelper=tf;M.DiscreteInterpolant=oh;M.DodecahedronGeometry=Lc;M.DoubleSide=pi;M.DstAlphaFactor=u0;M.DstColorFactor=f0;M.DynamicCopyUsage=Gv;M.DynamicDrawUsage=Ov;M.DynamicReadUsage=kv;M.EdgesGeometry=Dc;M.EllipseCurve=Xr;M.EqualCompare=B0;M.EqualDepth=Dl;M.EqualStencilFunc=Lv;M.EquirectangularReflectionMapping=No;M.EquirectangularRefractionMapping=Oo;M.Euler=Bn;M.EventDispatcher=Zn;M.ExternalTexture=Qo;M.ExtrudeGeometry=kc;M.FileLoader=oi;M.Float16BufferAttribute=sd;M.Float32BufferAttribute=Re;M.FloatType=Tn;M.Fog=gc;M.FogExp2=mc;M.FramebufferTexture=ld;M.FrontSide=Oi;M.Frustum=rs;M.FrustumArray=bc;M.GLBufferAttribute=kd;M.GLSL1=Xv;M.GLSL3=$u;M.GreaterCompare=z0;M.GreaterDepth=Fl;M.GreaterEqualCompare=H0;M.GreaterEqualDepth=Ul;M.GreaterEqualStencilFunc=Nv;M.GreaterStencilFunc=Uv;M.GridHelper=Qd;M.Group=ts;M.HalfFloatType=Kr;M.HemisphereLight=lh;M.HemisphereLightHelper=Jd;M.IcosahedronGeometry=Hc;M.ImageBitmapLoader=Ad;M.ImageLoader=$s;M.ImageUtils=dc;M.IncrementStencilOp=wv;M.IncrementWrapStencilOp=Av;M.InstancedBufferAttribute=ss;M.InstancedBufferGeometry=vh;M.InstancedInterleavedBuffer=zd;M.InstancedMesh=Sc;M.Int16BufferAttribute=nd;M.Int32BufferAttribute=id;M.Int8BufferAttribute=Qu;M.IntType=wh;M.InterleavedBuffer=Gr;M.InterleavedBufferAttribute=Vs;M.Interpolant=Ws;M.InterpolateDiscrete=ko;M.InterpolateLinear=uc;M.InterpolateSmooth=Al;M.InterpolationSamplingMode=Zv;M.InterpolationSamplingType=Yv;M.InvertStencilOp=Cv;M.KeepStencilOp=Ps;M.KeyframeTrack=An;M.LOD=xc;M.LatheGeometry=Vc;M.Layers=kr;M.LessCompare=O0;M.LessDepth=Ll;M.LessEqualCompare=Lf;M.LessEqualDepth=Bs;M.LessEqualStencilFunc=Dv;M.LessStencilFunc=Iv;M.Light=Mi;M.LightProbe=mh;M.Line=yi;M.Line3=Zd;M.LineBasicMaterial=an;M.LineCurve=ia;M.LineCurve3=Oc;M.LineDashedMaterial=sh;M.LineLoop=Ac;M.LineSegments=jn;M.LinearFilter=Zt;M.LinearInterpolant=ma;M.LinearMipMapLinearFilter=gv;M.LinearMipMapNearestFilter=mv;M.LinearMipmapLinearFilter=gi;M.LinearMipmapNearestFilter=Ro;M.LinearSRGBColorSpace=zs;M.LinearToneMapping=S0;M.LinearTransfer=Vo;M.Loader=dn;M.LoaderUtils=xa;M.LoadingManager=va;M.LoopOnce=P0;M.LoopPingPong=L0;M.LoopRepeat=I0;M.MOUSE=cv;M.Material=tn;M.MaterialLoader=gh;M.MathUtils=u_;M.Matrix2=qd;M.Matrix3=tt;M.Matrix4=je;M.MaxEquation=o0;M.Mesh=Ot;M.MeshBasicMaterial=xi;M.MeshDepthMaterial=fa;M.MeshDistanceMaterial=pa;M.MeshLambertMaterial=nh;M.MeshMatcapMaterial=ih;M.MeshNormalMaterial=th;M.MeshPhongMaterial=Qc;M.MeshPhysicalMaterial=Jc;M.MeshStandardMaterial=da;M.MeshToonMaterial=eh;M.MinEquation=r0;M.MirroredRepeatWrapping=zo;M.MixOperation=y0;M.MultiplyBlending=qu;M.MultiplyOperation=Sa;M.NearestFilter=on;M.NearestMipMapLinearFilter=pv;M.NearestMipMapNearestFilter=fv;M.NearestMipmapLinearFilter=Tr;M.NearestMipmapNearestFilter=bf;M.NeutralToneMapping=R0;M.NeverCompare=N0;M.NeverDepth=Pl;M.NeverStencilFunc=Pv;M.NoBlending=Di;M.NoColorSpace=Ii;M.NoToneMapping=Ui;M.NormalAnimationBlendMode=Ih;M.NormalBlending=Ns;M.NotEqualCompare=k0;M.NotEqualDepth=Nl;M.NotEqualStencilFunc=Fv;M.NumberKeyframeTrack=Xs;M.Object3D=pt;M.ObjectLoader=Td;M.ObjectSpaceNormalMap=F0;M.OctahedronGeometry=ha;M.OneFactor=l0;M.OneMinusConstantAlphaFactor=x0;M.OneMinusConstantColorFactor=v0;M.OneMinusDstAlphaFactor=d0;M.OneMinusDstColorFactor=p0;M.OneMinusSrcAlphaFactor=Cl;M.OneMinusSrcColorFactor=h0;M.OrthographicCamera=$r;M.PCFShadowMap=Sf;M.PCFSoftShadowMap=t0;M.PMREMGenerator=Ma;M.Path=qr;M.PerspectiveCamera=Yt;M.Plane=fi;M.PlaneGeometry=Zr;M.PlaneHelper=of;M.PointLight=hh;M.PointLightHelper=Kd;M.Points=Rc;M.PointsMaterial=Ko;M.PolarGridHelper=ef;M.PolyhedronGeometry=os;M.PositionalAudio=Id;M.PropertyBinding=yt;M.PropertyMixer=Sh;M.QuadraticBezierCurve=sa;M.QuadraticBezierCurve3=ra;M.Quaternion=un;M.QuaternionKeyframeTrack=qs;M.QuaternionLinearInterpolant=ah;M.RED_GREEN_RGTC2_Format=cc;M.RED_RGTC1_Format=ac;M.REVISION="180";M.RGBADepthPacking=U0;M.RGBAFormat=xn;M.RGBAIntegerFormat=Ph;M.RGBA_ASTC_10x10_Format=tc;M.RGBA_ASTC_10x5_Format=Jl;M.RGBA_ASTC_10x6_Format=Ql;M.RGBA_ASTC_10x8_Format=ec;M.RGBA_ASTC_12x10_Format=nc;M.RGBA_ASTC_12x12_Format=ic;M.RGBA_ASTC_4x4_Format=Wl;M.RGBA_ASTC_5x4_Format=Xl;M.RGBA_ASTC_5x5_Format=ql;M.RGBA_ASTC_6x5_Format=Yl;M.RGBA_ASTC_6x6_Format=Zl;M.RGBA_ASTC_8x5_Format=$l;M.RGBA_ASTC_8x6_Format=jl;M.RGBA_ASTC_8x8_Format=Kl;M.RGBA_BPTC_Format=sc;M.RGBA_ETC2_EAC_Format=Gl;M.RGBA_PVRTC_2BPPV1_Format=kl;M.RGBA_PVRTC_4BPPV1_Format=zl;M.RGBA_S3TC_DXT1_Format=Po;M.RGBA_S3TC_DXT3_Format=Io;M.RGBA_S3TC_DXT5_Format=Lo;M.RGBDepthPacking=Mv;M.RGBFormat=Cf;M.RGBIntegerFormat=vv;M.RGB_BPTC_SIGNED_Format=rc;M.RGB_BPTC_UNSIGNED_Format=oc;M.RGB_ETC1_Format=Hl;M.RGB_ETC2_Format=Vl;M.RGB_PVRTC_2BPPV1_Format=Bl;M.RGB_PVRTC_4BPPV1_Format=Ol;M.RGB_S3TC_DXT1_Format=Co;M.RGDepthPacking=Sv;M.RGFormat=Pf;M.RGIntegerFormat=Ch;M.RawShaderMaterial=Kc;M.Ray=is;M.Raycaster=Hd;M.RectAreaLight=fh;M.RedFormat=Rh;M.RedIntegerFormat=ba;M.ReinhardToneMapping=b0;M.RenderTarget=qo;M.RenderTarget3D=Nd;M.RepeatWrapping=Bo;M.ReplaceStencilOp=Ev;M.ReverseSubtractEquation=s0;M.RingGeometry=Gc;M.SIGNED_RED_GREEN_RGTC2_Format=hc;M.SIGNED_RED_RGTC1_Format=lc;M.SRGBColorSpace=wn;M.SRGBTransfer=xt;M.Scene=vc;M.ShaderChunk=ot;M.ShaderLib=ii;M.ShaderMaterial=zn;M.ShadowMaterial=jc;M.Shape=Ni;M.ShapeGeometry=Wc;M.ShapePath=cf;M.ShapeUtils=si;M.ShortType=wf;M.Skeleton=Mc;M.SkeletonHelper=jd;M.SkinnedMesh=yc;M.Source=vi;M.Sphere=$t;M.SphereGeometry=ua;M.Spherical=Wd;M.SphericalHarmonics3=ph;M.SplineCurve=oa;M.SpotLight=ch;M.SpotLightHelper=$d;M.Sprite=_c;M.SpriteMaterial=$o;M.SrcAlphaFactor=Rl;M.SrcAlphaSaturateFactor=m0;M.SrcColorFactor=c0;M.StaticCopyUsage=Vv;M.StaticDrawUsage=Go;M.StaticReadUsage=zv;M.StereoCamera=Cd;M.StreamCopyUsage=Wv;M.StreamDrawUsage=Bv;M.StreamReadUsage=Hv;M.StringKeyframeTrack=Hi;M.SubtractEquation=i0;M.SubtractiveBlending=Xu;M.TOUCH=hv;M.TangentSpaceNormalMap=as;M.TetrahedronGeometry=Xc;M.Texture=Xt;M.TextureLoader=Sd;M.TextureUtils=df;M.Timer=Gd;M.TimestampQuery=qv;M.TorusGeometry=qc;M.TorusKnotGeometry=Yc;M.Triangle=mi;M.TriangleFanDrawMode=yv;M.TriangleStripDrawMode=xv;M.TrianglesDrawMode=_v;M.TubeGeometry=Zc;M.UVMapping=Eh;M.Uint16BufferAttribute=Yo;M.Uint32BufferAttribute=Zo;M.Uint8BufferAttribute=ed;M.Uint8ClampedBufferAttribute=td;M.Uniform=Od;M.UniformsGroup=Bd;M.UniformsLib=_e;M.UniformsUtils=Y0;M.UnsignedByteType=ri;M.UnsignedInt101111Type=Af;M.UnsignedInt248Type=Dr;M.UnsignedInt5999Type=Tf;M.UnsignedIntType=zi;M.UnsignedShort4444Type=Th;M.UnsignedShort5551Type=Ah;M.UnsignedShortType=Lr;M.VSMShadowMap=di;M.Vector2=se;M.Vector3=L;M.Vector4=ut;M.VectorKeyframeTrack=Ys;M.VideoFrameTexture=ad;M.VideoTexture=Cc;M.WebGL3DRenderTarget=Ku;M.WebGLArrayRenderTarget=ju;M.WebGLCoordinateSystem=Nn;M.WebGLCubeRenderTarget=pc;M.WebGLRenderTarget=$n;M.WebGLRenderer=Mf;M.WebGLUtils=lg;M.WebGPUCoordinateSystem=Nr;M.WebXRController=Pr;M.WireframeGeometry=$c;M.WrapAroundEnding=Ho;M.ZeroCurvatureEnding=Ds;M.ZeroFactor=a0;M.ZeroSlopeEnding=Us;M.ZeroStencilOp=bv;M.createCanvasElement=W0});var ze=Ht(Bt());var Ge=Ht(Bt()),cg={type:"change"},kf={type:"start"},ug={type:"end"},Dh=new Ge.Ray,hg=new Ge.Plane,gb=Math.cos(70*Ge.MathUtils.DEG2RAD),Jt=new Ge.Vector3,Rn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zf=1e-6,Uh=class extends Ge.Controls{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new Ge.Vector3,this.cursor=new Ge.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ge.MOUSE.ROTATE,MIDDLE:Ge.MOUSE.DOLLY,RIGHT:Ge.MOUSE.PAN},this.touches={ONE:Ge.TOUCH.ROTATE,TWO:Ge.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Ge.Vector3,this._lastQuaternion=new Ge.Quaternion,this._lastTargetPosition=new Ge.Vector3,this._quat=new Ge.Quaternion().setFromUnitVectors(e.up,new Ge.Vector3(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ge.Spherical,this._sphericalDelta=new Ge.Spherical,this._scale=1,this._panOffset=new Ge.Vector3,this._rotateStart=new Ge.Vector2,this._rotateEnd=new Ge.Vector2,this._rotateDelta=new Ge.Vector2,this._panStart=new Ge.Vector2,this._panEnd=new Ge.Vector2,this._panDelta=new Ge.Vector2,this._dollyStart=new Ge.Vector2,this._dollyEnd=new Ge.Vector2,this._dollyDelta=new Ge.Vector2,this._dollyDirection=new Ge.Vector3,this._mouse=new Ge.Vector2,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_b.bind(this),this._onPointerDown=vb.bind(this),this._onPointerUp=xb.bind(this),this._onContextMenu=Tb.bind(this),this._onMouseWheel=Sb.bind(this),this._onKeyDown=bb.bind(this),this._onTouchStart=Eb.bind(this),this._onTouchMove=wb.bind(this),this._onMouseDown=yb.bind(this),this._onMouseMove=Mb.bind(this),this._interceptControlDown=Ab.bind(this),this._interceptControlUp=Rb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cg),this.update(),this.state=bt.NONE}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new Ge.Vector3(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Ge.Vector3(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dh.origin.copy(this.object.position),Dh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dh.direction))<gb?this.object.lookAt(this.target):(hg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dh.intersectPlane(hg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zf||this._lastTargetPosition.distanceToSquared(this.target)>zf?(this.dispatchEvent(cg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Jt.copy(i).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge.Vector2,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function vb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function _b(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ug),this.state=bt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ge.MOUSE.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Ge.MOUSE.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Ge.MOUSE.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(kf)}function Mb(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Sb(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(kf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ug))}function bb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Eb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ge.TOUCH.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Ge.TOUCH.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ge.TOUCH.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Ge.TOUCH.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(kf)}function wb(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function Tb(s){this.enabled!==!1&&s.preventDefault()}function Ab(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Je=Ht(Bt());var ai=Ht(Bt()),Cb={jade:{low:"#c9d3c4",high:"#7fa596",ink:"#1d3330",ridge:"#f6f1df"},fire:{low:"#3a1210",high:"#c2402a",ink:"#1c0b06",ridge:"#ffd27a"},thunder:{low:"#d8cdea",high:"#7c62ab",ink:"#241a38",ridge:"#ffffff"}},dg="#eee9db",Qr={region:"auto",ink:.8,lineWidth:2,ridge:1,detail:.7,wash:.5,mist:1500};var Pb=`
  attribute vec4 look;uniform float uPackedLook;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec4 vLook;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = position;
    vNormal = normal;
    vLook = look; if(uPackedLook>.5)vLook.w=(look.w-.5)*8.;
    vec4 mvPosition = viewMatrix * world;
    gl_Position = projectionMatrix * mvPosition;
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
  }
`,Ib=`
  uniform vec3 uOrigin, uLocalEye, uDetailPoint; uniform float uGallerySnowShift, uOverview, uOrbitModel, uNativeTiles; uniform highp sampler3D uTileMask;
  uniform float uRadius, uLowH, uHighH, uFlatUp;
  uniform float uRegionMode, uInk, uLineWidth, uRidge, uDetail, uWash, uMist;
  uniform vec3 uSun, uPaper, uCut, uLight, uMistColor;
  uniform vec3 uLow[3], uHigh[3], uInkColor[3], uRidgeColor[3];
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec4 vLook;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>


vec4 samplePlanetAtlas(sampler2D atlas, vec2 uv) {
  vec2 dx=dFdx(uv),dy=dFdy(uv);
  dx.x-=floor(dx.x+.5);dy.x-=floor(dy.x+.5);
  return textureGrad(atlas,uv,dx,dy);
}
uniform sampler2D uMineralMap;
vec4 materialReading(vec3 d) {
  vec2 uv=vec2(atan(d.z,d.x)*0.159154943091895+0.5,asin(clamp(d.y,-1.0,1.0))*0.318309886183791+0.5);
  return samplePlanetAtlas(uMineralMap,uv);
}


  uniform float uPlanetReveal,uShowWater;
  uniform vec3 uShardPositions[6],uShardColors[6];
  vec3 planetTone(vec3 color,vec3 p,vec3 normal){
    float value=dot(color,vec3(.2126,.7152,.0722));
    // Nebula fill keeps the body readable even as nearby fragment clusters move.
    // Close views still resolve to the original pigments through uPlanetReveal.
    vec3 night=mix(vec3(value),color,.94)*vec3(.93,.98,1.04)*.36;
    vec3 light=vec3(0.),n=normalize(mix(normalize(p),normalize(normal),.3));
    for(int i=0;i<6;i++){
      vec3 toLight=uShardPositions[i]-p;float d2=dot(toLight,toLight);
      // Broad fragment clusters provide wrap lighting plus a little diffuse spill.
      float facing=.12+.88*smoothstep(-.5,.8,dot(n,toLight*inversesqrt(max(1.,d2))));
      light+=uShardColors[i]*facing*500000./(500000.+d2);
    }
    return mix(night,color,uPlanetReveal)+color*light*mix(.72,.08,uPlanetReveal);
  }

  float hash3(vec3 i) {
    i = mod(i, 1024.0);
    return fract(sin(dot(i, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  }
  float vnoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 7.17; a *= 0.5; }
    return v;
  }
  // Brush marks of size s (metres): streaks along "up" on steep faces, dots on flat ground.
  float strokes(vec3 q, float s) {
    float n = vnoise(q / s) * 0.65 + vnoise(q / s * 2.1 + 3.3) * 0.35;
    // Crisp edges about one pixel wide, like a brush mark rather than a blur.
    float aa = max(fwidth(n), 1e-4);
    return smoothstep(0.68 - aa, 0.68 + aa, n);
  }

  void main() {
    #include <clipping_planes_fragment>
    #include <logdepthbuf_fragment>
    if(uShowWater>.5 && length(vWorld)<uRadius-.02) discard;
    if(uOrbitModel>.5 || uNativeTiles>.5){float nativeCell=texture(uTileMask,(floor(vWorld/38.4)+16.5)/32.).r; if((uOrbitModel>.5 && nativeCell>.5)||(uNativeTiles>.5 && nativeCell<.5)) discard;}
    if (!gl_FrontFacing) { gl_FragColor = vec4(planetTone(uCut,vWorld,vNormal), 1.0); return; }

    vec3 N = normalize(vNormal);
    vec3 V = normalize(uLocalEye - vWorld);
    float dist = length(uLocalEye - vWorld);
    vec3 up = uFlatUp > 0.5 ? vec3(0.0, 1.0, 0.0) : normalize(vWorld);
    vec3 rel = vWorld - uOrigin;
    float height = uFlatUp > 0.5 ? vWorld.y : length(vWorld) - uRadius;
    float h01 = clamp((height - uLowH) / max(1.0, uHighH - uLowH), 0.0, 1.0);

    // Region weights.
    vec3 w;
    if (uRegionMode < -0.5) {
      float fire = vLook.x, thunder = vLook.y * (1.0 - vLook.x);
      w = vec3(1.0 - fire - thunder, fire, thunder);
    } else {
      w = vec3(uRegionMode < 0.5 ? 1.0 : 0.0, abs(uRegionMode - 1.0) < 0.5 ? 1.0 : 0.0, uRegionMode > 1.5 ? 1.0 : 0.0);
    }
    vec3 low = w.x * uLow[0] + w.y * uLow[1] + w.z * uLow[2];
    vec3 high = w.x * uHigh[0] + w.y * uHigh[1] + w.z * uHigh[2];
    vec3 inkCol = w.x * uInkColor[0] + w.y * uInkColor[1] + w.z * uInkColor[2];
    vec3 ridgeCol = w.x * uRidgeColor[0] + w.y * uRidgeColor[1] + w.z * uRidgeColor[2];

    // Pigment and wash. q squashes "up" so patterns stretch into vertical streaks on cliffs.
    vec3 q = rel - up * dot(rel, up) * 0.8;
    // Original field-based terrain pigment, in linear light. Macro masks only;
// surface normals, radial elevation and the native ink marks stay full-resolution.
vec4 terrain = materialReading(up);
float cut = 32.0 * terrain.r, alpine=terrain.g;
float face = clamp(dot(N,up),0.0,1.0);
vec3 pigmentPoint = vWorld - up * height * 0.72;
float region=vnoise(vWorld/73.0+vec3(8.6,21.1,4.8));
float drag=vnoise(pigmentPoint/15.0+vec3(0.7,1.9,3.1));
float cutLeaf=smoothstep(0.8,9.5,cut);
float wet=1.0-vLook.x;
float sheltered=(1.0-smoothstep(4.0,13.0,height+4.0*(region-.5)))
                * smoothstep(0.38,0.81,region+0.17*wet);
float rockFace=1.0-smoothstep(0.42,0.92,face);
// Height is measured above sea level; the normal is measured against the local
// radius. The same exposure rule follows a slope anywhere on the sphere.
float rise = smoothstep(6.000000, 23.000000, height + 2.0 * (region - 0.5));
float steepness = 1.0 - smoothstep(0.669131, 0.970296, face);
float weathering = 0.53 * rise + 0.74 * steepness + 0.12 * rise * steepness;
float exposure = smoothstep(0.12, 0.90, weathering);
exposure *= 1.0 - 0.50 * cutLeaf * (1.0 - steepness);
// Iron-bearing bands are visible where their rock is exposed.
float beltPhase = dot(up, vec3(2.6, 1.3, 6.1)) - 1.2 + 1.8 * (region - 0.5);
float ironBelt = smoothstep(0.53, 0.87, 0.5 + 0.5 * sin(beltPhase));
float red = ironBelt * clamp(rockFace + 0.33 * vLook.x, 0.0, 1.0);
// Split covered ground between grasses and dry loess; incised valleys hold moisture.
float dryness = 0.50 * vLook.x + 0.55 * region + 0.20 * drag;
float soil = smoothstep(0.380000, 0.620000, dryness)
           * (1.0 - 0.92 * cutLeaf) * (1.0 - 0.40 * sheltered);
float layerArg=height*.64+4.0*region+drag*.80;
float strata=smoothstep(0.54,0.92,sin(layerArg))*(1.0-smoothstep(.4,2.0,fwidth(layerArg)));
float outcrop=smoothstep(.41,.85,rockFace)*mix(.30,.85,drag);
vec3 loess=mix(vec3(0.428690,0.191202,0.052861),vec3(0.708376,0.439657,0.138432),0.30+0.65*region);
vec3 limestone = mix(vec3(0.174647,0.201556,0.215861), vec3(0.371238,0.386429,0.366253), 0.25 + 0.48 * region + 0.20 * drag);
limestone = mix(limestone, vec3(0.558340,0.558340,0.491021), strata * outcrop * 0.33);
vec3 leaves=mix(vec3(0.030713,0.124772,0.066626),vec3(0.194618,0.371238,0.119538),0.19+0.58*drag);
vec3 redbed=mix(vec3(0.287441,0.068478,0.040915),vec3(0.552011,0.184475,0.090842),0.24+0.58*region);
redbed=mix(redbed,vec3(0.760525,0.386429,0.191202),strata*outcrop*.48);
float lineHeight=mix(34.000000,18.000000,alpine)-3.0*abs(up.y)+4.6*(region-.5)+2.6*(drag-.5);
float snowLift=height-lineHeight-uGallerySnowShift-8.0*(1.0-face);
float snow=smoothstep(-1.6,2.3,snowLift)*smoothstep(0.40,0.75,face);
float alpineRock=smoothstep(-7.0,-1.0,snowLift)*alpine;
vec3 cover = mix(leaves, loess, soil);
vec3 exposedBed = mix(limestone, redbed, red);
exposedBed = mix(exposedBed, vec3(0.158961,0.184475,0.194618), alpineRock * (1.0 - red * 0.64) * 0.76);
vec3 col = mix(cover, exposedBed, exposure);
vec3 snowPigment=mix(vec3(0.564712,0.693872,0.760525),vec3(1.000000,0.973445,0.904661),clamp(0.49+0.40*dot(N,uSun)+0.12*drag,0.0,1.0));
col=mix(col,snowPigment,snow);

// The existing terrain masks select materials. Only soften the edge between two fills.
vec4 weights = vec4(soil, exposure, red, snow);
vec4 edge = max(fwidth(weights), vec4(0.0001)) * 0.5;
vec4 coverage = smoothstep(vec4(0.5) - edge, vec4(0.5) + edge, weights);
vec3 groundFill = mix(vec3(0.194618,0.371238,0.119538), vec3(0.708376,0.439657,0.138432), coverage.x);
vec3 rockFill = mix(vec3(0.371238,0.386429,0.366253), vec3(0.552011,0.184475,0.090842), coverage.z);
vec3 flatFill = mix(mix(groundFill, rockFill, coverage.y), vec3(1.000000,0.973445,0.904661), coverage.w);

    // Wash: paler patches that keep the pigment's hue (half way to paper at most).
    float wash = fbm(q / 45.0);
    col = mix(col, mix(col, uPaper, 0.55), smoothstep(0.45, 0.65, wash) * uWash);

    // Strokes that keep about the same size on screen: marks ~3% of the distance.
    // Dark marks (ink) and light marks (dry brush, paper showing through).
    float L = log2(max(dist * 0.0, 1.8));
    float l0 = floor(L), f = L - l0;
    float s0 = exp2(l0);
    float dark = mix(strokes(q, s0), strokes(q, s0 * 2.0), f);
    float light = mix(strokes(q + 17.0, s0), strokes(q + 17.0, s0 * 2.0), f);
    col = mix(col, inkCol, dark * 0.5 * uDetail);
    col = mix(col, uPaper, light * 0.3 * uDetail);

    // Soft light and shade.
    float lambert = max(dot(N, uSun), 0.0);
    col *= 0.86 + 0.18 * lambert;
    col *= mix(0.55, 1.0, smoothstep(0.15, 0.9, vLook.z));

    // Shadow side: ragged streaks of ink where the face turns from the sun
    // (tied to the light, not the view, so ground seen at a low angle stays clean).
    float streak = fbm(q / max(dist * 0.0, 9.0) + 5.0);
    float away = 1.0 - (dot(N, uSun) * 0.5 + 0.5);
    float shadowInk = smoothstep(0.48, 0.72, away + (streak - 0.5) * 0.19);
    col = mix(col, inkCol, shadowInk * 0.39 * uInk);

    // Ridges catch light; creases hold ink (broken up a little by the wash noise).
    // Lit edges: only a thin band where a convex, sunlit face turns away from the viewer.
    float nvRim = abs(dot(N, V));
    float ridge = smoothstep(0.3, 1.2, vLook.w) * lambert * pow(1.0 - nvRim, 3.0);
    col = mix(col, ridgeCol, clamp(ridge * uRidge * 1.5, 0.0, 1.0));
    float crease = smoothstep(0.8, 2.0, -vLook.w) * smoothstep(0.3, 0.6, fbm(q / 6.0 + 11.0));
    col = mix(col, inkCol, crease * 0.8 * uInk);

    // Silhouette lines: N\xB7V reaches 0 at a silhouette; divided by its change
    // per pixel it is the distance to the silhouette in pixels.
    float nv = abs(dot(N, V));
    float px = nv / max(fwidth(nv), 1e-5);
    float width = uLineWidth * (0.8 + 0.4 * vnoise(q / max(dist * 0.05, 0.05)));
    float line = 1.0 - smoothstep(width * 0.6, width, px);
    col = mix(col, inkCol, line);

    // Time of day: the light's colour and strength (white at noon).
    col *= uLight;
    // Distance fades into the mist (paper, or the horizon's colour under a sky).
    col = mix(col, uMistColor, 1.0 - exp(-dist / uMist));
    col = mix(flatFill, inkCol, line);
  // The overview now contains actual reduced terrain plus a separate ocean.
  // Reuse the native land pigment, without the old height-shell ocean overlay.
  if(uOverview>1.5 && distance(vWorld,uDetailPoint)<157.) discard;
    gl_FragColor = vec4(planetTone(col,vWorld,vNormal), 1.0);
    #include <colorspace_fragment>
  }
`;function fg(){let s=e=>["jade","fire","thunder"].map(t=>new ai.Color(Cb[t][e]));return new ai.ShaderMaterial({vertexShader:Pb,fragmentShader:Ib,clipping:!0,uniforms:{uOrigin:{value:new ai.Vector3},uRadius:{value:4e3},uLowH:{value:0},uHighH:{value:600},uFlatUp:{value:0},uRegionMode:{value:-1},uInk:{value:Qr.ink},uLineWidth:{value:Qr.lineWidth},uRidge:{value:Qr.ridge},uDetail:{value:Qr.detail},uWash:{value:Qr.wash},uMist:{value:Qr.mist},uSun:{value:new ai.Vector3(0,1,0)},uPaper:{value:new ai.Color(dg)},uLight:{value:new ai.Color(1,1,1)},uMistColor:{value:new ai.Color(dg)},uCut:{value:new ai.Color("#5a5550")},uLow:{value:s("low")},uHigh:{value:s("high")},uInkColor:{value:s("ink")},uRidgeColor:{value:s("ridge")}}})}function pg(s){let e=new Uint8Array(s),t=new ArrayBuffer(e.length),n=new DataView(s),i=new DataView(t),r=new Uint8Array(t),o=0;for(;o<e.length;){let a=n.getUint32(o,!0),l=n.getUint32(o+4,!0),c=o+8+19*a+2*l;if(!a||a>65535||!l||l%3||c>e.length)throw Error("Invalid gallery mesh");r.set(e.subarray(o,o+8),o),o+=8;for(let u=0;u<3;u++){let d=o+u*4*a,f=0;for(let m=0;m<a;m++){let v=d+m,g=e[v]|e[v+a]<<8|e[v+2*a]<<16|e[v+3*a]<<24;f=f+g|0,i.setInt32(o+12*m+4*u,f,!0)}}o+=12*a;for(let u of[3,4]){for(let d=0;d<u;d++)for(let f=0;f<a;f++)r[o+f*u+d]=e[o+d*a+f];o+=u*a}let h=0;for(let u=0;u<l;u++)h=h+e[o+u]+(e[o+l+u]<<8)&65535,i.setUint16(o+2*u,h,!0);o=c}return t}var mg=`
vec4 samplePlanetAtlas(sampler2D atlas, vec2 uv) {
  vec2 dx=dFdx(uv),dy=dFdy(uv);
  dx.x-=floor(dx.x+.5);dy.x-=floor(dy.x+.5);
  return textureGrad(atlas,uv,dx,dy);
}
`;var Hf=Ht(Bt());function ls(s){return s.appearance??={reveal:{value:0},glass:{value:0},water:{value:+!!s.waterVisible},lightPositions:{value:Array.from({length:6},()=>new Hf.Vector3(0,0,1e4))},lightColors:{value:Array.from({length:6},()=>new Hf.Vector3)}}}function Vf(s){let e=ls(s);return{uPlanetReveal:e.reveal,uShowWater:e.water,uShardPositions:e.lightPositions,uShardColors:e.lightColors}}var gg=`
  uniform float uPlanetReveal,uShowWater;
  uniform vec3 uShardPositions[6],uShardColors[6];
  vec3 planetTone(vec3 color,vec3 p,vec3 normal){
    float value=dot(color,vec3(.2126,.7152,.0722));
    // Nebula fill keeps the body readable even as nearby fragment clusters move.
    // Close views still resolve to the original pigments through uPlanetReveal.
    vec3 night=mix(vec3(value),color,.94)*vec3(.93,.98,1.04)*.36;
    vec3 light=vec3(0.),n=normalize(mix(normalize(p),normalize(normal),.3));
    for(int i=0;i<6;i++){
      vec3 toLight=uShardPositions[i]-p;float d2=dot(toLight,toLight);
      // Broad fragment clusters provide wrap lighting plus a little diffuse spill.
      float facing=.12+.88*smoothstep(-.5,.8,dot(n,toLight*inversesqrt(max(1.,d2))));
      light+=uShardColors[i]*facing*500000./(500000.+d2);
    }
    return mix(night,color,uPlanetReveal)+color*light*mix(.72,.08,uPlanetReveal);
  }
`;var js=Ht(Bt());function Ks(s,e,t,n=.3){e.polygonOffset=!!t.meshVisible,e.polygonOffsetFactor=1,e.polygonOffsetUnits=1;let i=e.userData.meshOverlay;i||(i=new js.ShaderMaterial({wireframe:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uGridPixels:{value:1},uOrbitModel:e.uniforms.uOrbitModel,uNativeTiles:e.uniforms.uNativeTiles,uTileMask:e.uniforms.uTileMask,uOverview:e.uniforms.uOverview,uDetailPoint:e.uniforms.uDetailPoint,uShowWater:e.uniforms.uShowWater},vertexShader:"varying float vDepth,vFacing;varying vec3 vLocal;void main(){vLocal=position;vec4 view=modelViewMatrix*vec4(position,1.);vDepth=-view.z;vFacing=dot(normalize(normalMatrix*normal),normalize(-view.xyz));gl_Position=projectionMatrix*view;}",fragmentShader:`varying float vDepth,vFacing;varying vec3 vLocal;uniform float uGridPixels,uOrbitModel,uNativeTiles,uOverview,uShowWater;uniform vec3 uDetailPoint;uniform highp sampler3D uTileMask;
        void main(){
          if(uShowWater>.5&&length(vLocal)<399.98)discard;
          if(uOrbitModel>.5||uNativeTiles>.5){float nativeCell=texture(uTileMask,(floor(vLocal/38.4)+16.5)/32.).r;if((uOrbitModel>.5&&nativeCell>.5)||(uNativeTiles>.5&&nativeCell<.5))discard;}
          if(uOverview>1.5&&distance(vLocal,uDetailPoint)<157.)discard;
          float projectedCell=uGridPixels/max(1.,vDepth)*sqrt(abs(vFacing));
          float alpha=.65*smoothstep(1.5,4.5,projectedCell);
          if(alpha<.002)discard;gl_FragColor=vec4(.055,.09,.10,alpha);
        }`,stencilWrite:e.stencilWrite,stencilWriteMask:0,stencilRef:e.stencilRef,stencilFunc:e.stencilFunc}),i.onBeforeRender=(a,l,c)=>{i.uniforms.uGridPixels.value=innerHeight/(2*Math.tan(js.MathUtils.degToRad(c.fov/2)))*n},e.userData.meshOverlay=i,e.addEventListener("dispose",()=>i.dispose()));let r=new js.Mesh(s,e),o=new js.Mesh(s,i);return r.userData.isTerrain=!0,o.userData.isMeshOverlay=!0,o.userData.cellSize=n,o.visible=!!t.meshVisible,o.renderOrder=3,r.add(o),r}var Fh=document.querySelector('meta[name="worlds-data-base"]')?.content.trim(),Lb=Fh?new URL("space/",Fh.endsWith("/")?Fh:Fh+"/"):new URL("./",location.href);function eo(s){return new URL(s,Lb)}var Gf=400,Nh=128,Wf=64,Db=(Nh+1)*(Wf+1);async function Vi(s,e){let t=await fetch(eo(s),{signal:e});if(!t.ok)throw Error("Could not load "+s);return new Response(t.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}function Oh(s,e,t){if(s.byteLength!==e*t*4)throw Error("Incomplete material atlas.");let n=new Je.DataTexture(s,e,t);return n.wrapS=Je.RepeatWrapping,n.magFilter=Je.LinearFilter,n.minFilter=Je.LinearMipmapLinearFilter,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Ea(s,e,t){let n=fg(),i=n.uniforms;return i.uRadius.value=Gf,i.uOrigin.value.fromArray(s.data.orientation).multiplyScalar(Gf),i.uGallerySnowShift={value:24*s.data.warmth},i.uOverview={value:Number(t)},i.uLocalEye={value:new Je.Vector3},i.uDetailPoint={value:new Je.Vector3},i.uMineralMap={value:e},i.uPackedLook={value:0},i.uOrbitModel={value:0},i.uNativeTiles={value:0},i.uTileMask={value:null},Object.assign(i,Vf(s)),n.stencilWrite=!0,n.stencilRef=1,n.stencilFunc=t?Je.NotEqualStencilFunc:Je.AlwaysStencilFunc,n.stencilZPass=t?Je.KeepStencilOp:Je.ReplaceStencilOp,t&&(n.stencilWriteMask=0),n.onBeforeRender=(r,o,a)=>{i.uLocalEye.value.copy(a.position),s.group.worldToLocal(i.uLocalEye.value),i.uLineWidth.value=(t?.95:2)*r.getPixelRatio()},n}async function vg(s){let e=await Vi("./worlds/"+s.data.id+".gz"),t=new Int16Array(e,0,Db);s.heightAt=g=>{let p=(Math.atan2(g.z,g.x)/(2*Math.PI)+.5)*Nh,x=(Math.asin(Je.MathUtils.clamp(g.y,-1,1))/Math.PI+.5)*Wf,_=Math.floor(p)%Nh,y=Math.min(Wf-1,Math.floor(x)),T=(E,R)=>t[E*(Nh+1)+R]/128;return Je.MathUtils.lerp(Je.MathUtils.lerp(T(y,_),T(y,_+1),p-Math.floor(p)),Je.MathUtils.lerp(T(y+1,_),T(y+1,_+1),p-Math.floor(p)),x-y)};let[n,i]=await Promise.all([Vi("./overview/"+s.data.id+".gz"),Vi("../gallery/"+s.data.id+"/full/mineral.rgba.gz")]),r=new DataView(n);if(r.getUint32(0,!0)!==1448040269)throw Error("Invalid overview mesh");let o=r.getUint32(4,!0),a=r.getUint32(8,!0),l=16,c=(g,p)=>{let x=p*g.BYTES_PER_ELEMENT,_=l%g.BYTES_PER_ELEMENT?new g(n.slice(l,l+x)):new g(n,l,p);return l+=x,_},h=new Je.BufferGeometry;h.setAttribute("position",new Je.BufferAttribute(c(Float32Array,o*3),3)),h.setAttribute("normal",new Je.BufferAttribute(c(Int8Array,o*3),3,!0)),h.setAttribute("look",new Je.BufferAttribute(c(Uint8Array,o*4),4,!0)),h.setIndex(new Je.BufferAttribute(c(Uint32Array,a),1)),h.computeBoundingSphere();let u=Oh(new Uint8Array(i),768,384),d=Ea(s,u,!0);d.uniforms.uPackedLook.value=1;let f=new Je.Group,m=Ks(h,d,s,3),v=zh(s,u,96,48);f.add(m,v),s.group.add(f),s.shell=f,s.overviewInk=d,s.atlas=u,s.overviewInfo={triangles:a/3,error:r.getFloat32(12,!0),source:"derived native display mesh"}}async function Bh(s,e){if(!s.info){let t=eo("../gallery/"+s.data.id+"/full/"),n=await fetch(new URL("scene.json",t),{signal:e});if(!n.ok)throw Error("Terrain manifest unavailable");let i=await n.json();if(i.settings.planet.seed!==s.data.seed||i.cellSize!==.3)throw Error("Unexpected terrain manifest");s.info={base:t,scene:i}}return s.info}async function _g(s,e,t){let{base:n,scene:i}=await Bh(s,t),[r,o,a]=await Promise.all([Vi(new URL(i.native[e].file,n),t),Vi(new URL("mineral.rgba.gz",n),t),Vi("./context/"+s.data.id+"-"+e+".gz",t)]);t.throwIfAborted();let l=Oh(new Uint8Array(o),768,384),c=new Je.Group,h=Ea(s,l,!1);c.renderOrder=-2;let u,d,f=0,m=0,v=0,g=[],p=(T,E)=>{let R=E*T.BYTES_PER_ELEMENT,C=f%T.BYTES_PER_ELEMENT?new T(u.slice(f,f+R)):new T(u,f,E);return f+=R,C};function x(){if(!m)return;let T=new Float32Array(m*3),E=new Int8Array(m*3),R=new Float32Array(m*4),C=new Uint32Array(v),S=0,b=0;for(let{p:N,n:H,l:W,ix:X}of g){T.set(N,3*S),E.set(H,3*S);for(let O=0;O<W.length;O++)R[S*4+O]=O%4===3?(W[O]/255-.5)*8:W[O]/255;for(let O of X)C[b++]=S+O;S+=N.length/3}let P=new Je.BufferGeometry;P.setAttribute("position",new Je.BufferAttribute(T,3)),P.setAttribute("normal",new Je.BufferAttribute(E,3,!0)),P.setAttribute("look",new Je.BufferAttribute(R,4)),P.setIndex(new Je.BufferAttribute(C,1)),P.computeBoundingSphere(),c.add(Ks(P,h,s)),m=0,v=0,g=[]}function _(T){for(u=T,d=new DataView(u),f=0;f<u.byteLength;){let E=d.getUint32(f,!0),R=d.getUint32(f+4,!0);f+=8,m+E>14e4&&x(),g.push({p:p(Float32Array,E*3),n:p(Int8Array,E*3),l:p(Uint8Array,E*4),ix:p(Uint16Array,R)}),m+=E,v+=R}x()}_(pg(r)),_(a);let y=zh(s,l);return c.add(y),{group:c,dispose(){c.removeFromParent();for(let T of c.children)T.isMesh&&T.geometry.dispose();y.material.dispose(),h.dispose(),l.dispose()}}}function zh(s,e,t=192,n=96){let i=new Je.Mesh(new Je.SphereGeometry(Gf,t,n),new Je.ShaderMaterial({uniforms:{chart:{value:e},...Vf(s)},vertexShader:"varying vec3 local; void main(){local=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 local;uniform sampler2D chart;${mg}${gg}
    void main(){vec3 dir=normalize(local);vec2 uv=vec2(atan(dir.z,dir.x)*.159154943+.5,asin(clamp(dir.y,-1.,1.))*.318309886+.5);
      vec4 data=samplePlanetAtlas(chart,uv);float depth=max(0.,40.-90.*data.b);
      float mixAmount=smoothstep(.1,.95,smoothstep(.5,16.,depth)*.67+smoothstep(0.,54.,100.*data.a)*.46);
      gl_FragColor=vec4(planetTone(mix(vec3(.188,.503,.417),vec3(.016,.093,.169),mixAmount),local,dir),1.);
      #include <colorspace_fragment>
    }`}));return i.userData.isWater=!0,i.visible=!!s.waterVisible,i}var dt=Ht(Bt());var kh=class{constructor(e){this.free=Array.from({length:e},()=>new Worker(new URL("./mesh-worker.js",location.href),{type:"module"})),this.all=[...this.free],this.waiting=[],this.active=new Map,this.closed=!1}get(e){return this.closed?Promise.reject(new DOMException("Cancelled","AbortError")):new Promise((t,n)=>{this.waiting.push({job:e,resolve:t,reject:n}),this.pump()})}pump(){for(;this.free.length&&this.waiting.length;){let e=this.free.pop(),t=this.waiting.shift();this.active.set(e,t);let n=(i,r)=>{this.active.delete(e),this.free.push(e),r?t.reject(r):t.resolve(i),this.pump()};e.onmessage=i=>n(i.data.meshes,i.data.error?Error(i.data.error):null),e.onerror=i=>n(null,Error(i.message)),e.postMessage(t.job)}}dispose(){this.closed=!0;let e=new DOMException("Cancelled","AbortError");for(let t of[...this.waiting,...this.active.values()])t.reject(e);this.waiting=[],this.active.clear();for(let t of this.all)t.terminate()}};function xg(s){let e=new dt.BufferGeometry;return e.setAttribute("position",new dt.BufferAttribute(s.p,3)),e.setAttribute("normal",new dt.BufferAttribute(s.n,3,!0)),e.setAttribute("look",new dt.BufferAttribute(s.l,4,!0)),e.setIndex(new dt.BufferAttribute(s.ix,1)),e.computeBoundingSphere(),e}var Js=32;function Ub(s,e,t){return s+16+(e+16)*Js+(t+16)*Js*Js}function yg(s,e,t){return Vi(new URL("mineral.rgba.gz",e),t).then(n=>Oh(new Uint8Array(n),768,384))}async function Fb(s,e){if(s.preciseHeights)return;let t=new Int16Array(await Vi("./tiles/"+s.data.id+"/height.gz",e));if(t.length!==768*384)throw Error("Incomplete height map");s.heightAt=n=>{let i=(Math.atan2(n.z,n.x)/(2*Math.PI)+.5)*768-.5,r=dt.MathUtils.clamp((Math.asin(dt.MathUtils.clamp(n.y,-1,1))/Math.PI+.5)*384-.5,0,383),o=Math.floor(i),a=Math.floor(r),l=Math.min(383,a+1),c=(o+768)%768,h=(c+1)%768;return Math.max(0,dt.MathUtils.lerp(dt.MathUtils.lerp(t[a*768+c],t[a*768+h],i-o),dt.MathUtils.lerp(t[l*768+c],t[l*768+h],i-o),r-a)/128)},s.preciseHeights=!0}function Mg(s,e,t,n=async()=>!0){let i=new AbortController,r=new kh(2),o=new dt.Group;o.renderOrder=-1,o.visible=!1;let a=null,l=null,c=null,h=!1,u=!1,d=0,f=!1,m=null,v=new Uint8Array(Js**3),g=new dt.Data3DTexture(v,Js,Js,Js);g.format=dt.RedFormat,g.needsUpdate=!0,s.group.add(o);async function p(){let{base:_,scene:y}=await Bh(s,i.signal);await Fb(s,i.signal),c=await yg(s,_,i.signal),i.signal.throwIfAborted(),a=Ea(s,c,!1),a.uniforms.uPackedLook.value=1,a.uniforms.uOrbitModel.value=1,a.uniforms.uTileMask.value=g,a.stencilFunc=dt.NotEqualStencilFunc,a.stencilWriteMask=0,a.stencilZPass=dt.KeepStencilOp;let T=[...y.groups],E=0,R=async()=>{for(;E<T.length&&!u;){let C=T[E++],S=await r.get({url:new URL(C.file,_).href,packed:!0,segments:C.segments});i.signal.throwIfAborted();for(let b of S)o.add(Ks(xg(b),a,s));d++,t("loading",d,T.length),e(),await new Promise(requestAnimationFrame)}};await Promise.all([R(),R()]),i.signal.throwIfAborted(),l=zh(s,c),o.add(l),t("preparing",d,T.length),m=n(o,()=>!u),await m,i.signal.throwIfAborted(),h=!0,x(),t("ready",d,T.length),e()}p().catch(_=>{u||t("error",d,0,_)});function x(){o.visible=h&&f&&!u,s.shell.visible=!o.visible}return{world:s,group:o,mask:g,get priming(){return m},get ready(){return h},get detailActive(){return f},diagnostics(){return{ready:h,requested:f,displayVisible:o.visible&&o.children.length>0,shellVisible:s.shell.visible,pages:d}},setDetail(_){f=_,x()},setTile(_,y){let[T,E,R]=_.split("_").map(Number);v[Ub(T,E,R)]=y?255:0,g.needsUpdate=!0},dispose(_=!0){u=!0,i.abort(),r.dispose(),o.removeFromParent();for(let y of o.children)y.geometry.dispose();l?.material.dispose(),a?.dispose(),c?.dispose(),g.dispose(),_&&(s.shell.visible=!0)}}}function Sg(s,e,t,n,i=async()=>!0){let r=new dt.Group;r.renderOrder=-2;let o=new kh(3),a=new AbortController,l=new Map,c=new Set,h=new Set,u=new Set,d=null,f=null,m=null,v=!1,g=null,p=null,x=[],_=null,y=null,T=null,E=110,R=new dt.Frustum,C=new dt.Sphere,S=new Set;s.group.add(r);function b(F){let U=l.get(F);if(U){e?.setTile(F,!1);for(let V of U.solid.children)V.geometry.dispose();U.solid.removeFromParent(),l.delete(F)}}let P=()=>x.length>0&&x.every(F=>l.has(F));function N(){if(!P())return;for(let U of l.keys())S.has(U)||b(U);let F=[...l.keys()].filter(U=>!h.has(U));for(let U of F){if(l.size<=128)break;b(U)}}function H(){v||n(P()?"ready":x.some(F=>u.has(F))?"error":"loading",l.size,x.length)}function W(){if(!(v||!f))for(;c.size<3;){let F=x.find(U=>!c.has(U)&&!l.has(U)&&!u.has(U));if(!F)break;c.add(F),o.get({url:eo("./tiles/"+s.data.id+"/"+F+".gz").href,packed:!1}).then(async U=>{if(v||!h.has(F))return;let V=new dt.Group;V.renderOrder=-2;for(let q of U){let ee=xg(q);V.add(Ks(ee,f,s))}if(await i(V,()=>!v&&h.has(F)),v||!h.has(F)){for(let q of V.children)q.geometry.dispose();return}r.add(V),l.set(F,{solid:V}),e?.setTile(F,!0),N(),t()}).catch(()=>{!v&&h.has(F)&&u.add(F)}).finally(()=>{c.delete(F),H(),W()})}}function X(F,U=!1,V=null){if(V&&(_=V),p=F.clone(),!d||!f||v||!U&&g&&g.distanceTo(F)<8&&(!_||y?.distanceTo(_.eye)<8&&T?.dot(_.direction)>.998&&Math.abs(E-_.range)<2))return;g=F.clone(),y=_?.eye.clone(),T=_?.direction.clone(),E=_?.range||110,_&&R.setFromProjectionMatrix(_.vp);let q=d.span,ee=[];S.clear();for(let le of d.cells){let Le=le.box.distanceToPoint(_?.eye||F);C.center.copy(le.center),C.radius=q*1.2,Le<=E+q*2&&(!_||R.intersectsSphere(C))&&S.add(le.key),C.radius=q,Le<=E&&(!_||R.intersectsSphere(C))&&ee.push({key:le.key,distance:Le+le.center.distanceTo(F)*.12})}x=ee.sort((le,Le)=>le.distance-Le.distance).slice(0,96).map(le=>le.key),h.clear();for(let le of x)h.add(le);N(),u.clear(),H(),W()}async function O(){let{base:F}=await Bh(s,a.signal),[U,V]=await Promise.all([yg(s,F,a.signal),fetch(eo("./tiles/"+s.data.id+"/index.json"),{signal:a.signal}).then(q=>{if(!q.ok)throw Error("Tile index unavailable");return q.json()})]);if(v){U.dispose();return}if(m=U,V.seed!==s.data.seed||V.cellSize!==.3)throw Error("Wrong tile index");d={span:V.span,cells:V.tiles.map(q=>{let ee=new dt.Vector3(...q.split("_").map(Number)).multiplyScalar(V.span),le=ee.clone().addScalar(V.span);return{key:q,box:new dt.Box3(ee,le),center:ee.clone().addScalar(V.span*.5)}})},f=Ea(s,m,!1),f.uniforms.uPackedLook.value=1,f.uniforms.uNativeTiles.value=1,f.uniforms.uTileMask.value=e.mask,p&&X(p,!0)}return O().catch(()=>{v||n("error",0,0)}),{group:r,update:X,diagnostics(){return{cellSize:.3,ready:P(),resident:l.size,wanted:x.length,pending:c.size,range:E,triangles:[...l.values()].reduce((F,U)=>F+U.solid.children.reduce((V,q)=>V+q.geometry.index.count/3,0),0)}},dispose(){v=!0,a.abort(),o.dispose();for(let F of l.keys())b(F);r.removeFromParent(),f?.dispose(),m?.dispose()}}}var mt=Ht(Bt());var nt=Ht(Bt());var bg=Math.sqrt(3),Eg=Math.sqrt(5),GE=.5*(bg-1),WE=(3-bg)/6,XE=1/3,qE=1/6,YE=(Eg-1)/4,ZE=(5-Eg)/20;function Qs(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Kn=Ht(Bt(),1);var Gi=Ht(Bt());var Ob=new Gi.OrthographicCamera(-1,1,1,-1,0,1),Xf=class extends Gi.BufferGeometry{constructor(){super(),this.setAttribute("position",new Gi.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gi.Float32BufferAttribute([0,2,0,0,2,0],2))}},Bb=new Xf,to=class{constructor(e){this._mesh=new Gi.Mesh(Bb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ob)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hh=Ht(Bt(),1);var Hn=Ht(Bt()),zb=[{alt:-14,zenith:"#030616",horizon:"#0c1a44",haze:"#12245a",sun:"#6f86d0",ramp:["#050a24","#0d1a46","#1f3c88","#4a6ab8","#8fa8e0"],under:0},{alt:-4,zenith:"#140f52",horizon:"#ff5c8a",haze:"#8a3c8e",sun:"#ff6a9a",ramp:["#1a1248","#46287c","#e23c8c","#ff8ab4","#ffd0dc"],under:.7},{alt:1,zenith:"#1f3a6e",horizon:"#ff7418",haze:"#c4604a",sun:"#ff6a1c",ramp:["#241f3c","#5a3466","#ff3a16","#ff8a1c","#ffd448"],under:1},{alt:8,zenith:"#2457b8",horizon:"#ffbc5c",haze:"#f0b070",sun:"#ffb040",ramp:["#33479a","#6c64b4","#ff8c3c","#ffd070","#fff0b8"],under:.35},{alt:30,zenith:"#0c3aa8",horizon:"#6cc8f6",haze:"#8cd2f4",sun:"#fffbf0",ramp:["#1f4cb4","#3c7ee6","#6cc4ff","#e4f4ff","#ffffff"],under:0}];function no(s,e){let t=zb,n=0;for(;n<t.length-2&&s>t[n+1].alt;)n++;let i=t[n],r=t[n+1],o=Hn.MathUtils.smoothstep(s,i.alt,r.alt),a=e??{zenith:new Hn.Color,horizon:new Hn.Color,haze:new Hn.Color,sun:new Hn.Color,ramp:i.ramp.map(()=>new Hn.Color),under:0},l=(c,h,u)=>c.setStyle(h,Hn.NoColorSpace).lerp(new Hn.Color().setStyle(u,Hn.NoColorSpace),o);l(a.zenith,i.zenith,r.zenith),l(a.horizon,i.horizon,r.horizon),l(a.haze,i.haze,r.haze),l(a.sun,i.sun,r.sun);for(let c=0;c<i.ramp.length;c++)l(a.ramp[c],i.ramp[c],r.ramp[c]);return a.under=Hn.MathUtils.lerp(i.under,r.under,o),a}function wa(s=no(30)){return{uZenith:{value:s.zenith},uHorizon:{value:s.horizon},uHaze:{value:s.haze},uSunCol:{value:s.sun},uRamp:{value:s.ramp},uUnder:{value:s.under}}}var wg=`
  vec2 cubeAtlas(vec3 d, float n) {
    vec3 a = abs(d);
    float f; vec2 uv;
    if (a.x >= a.y && a.x >= a.z) { f = d.x > 0.0 ? 0.0 : 1.0; uv = d.x > 0.0 ? vec2(-d.z, d.y) / a.x : vec2(d.z, d.y) / a.x; }
    else if (a.y >= a.z) { f = d.y > 0.0 ? 2.0 : 3.0; uv = d.y > 0.0 ? vec2(d.x, -d.z) / a.y : vec2(d.x, d.z) / a.y; }
    else { f = d.z > 0.0 ? 4.0 : 5.0; uv = d.z > 0.0 ? vec2(d.x, d.y) / a.z : vec2(-d.x, d.y) / a.z; }
    uv = clamp(uv * 0.5 + 0.5, 0.5 / n, 1.0 - 0.5 / n);
    return vec2((f + uv.x) / 6.0, uv.y);
  }
`;var kb=220,Hb=1500,qf=`
  uniform vec3 uZenith, uHorizon, uHaze, uSunCol, uRamp[5];
  uniform float uUnder;
  // How far below level the horizon is, as dot(direction, up): on a small planet it's far down once you're high up.
  uniform float uDip;
  // 0 in the air \u2026 1 out in space: the sky turns to night blue (keeping a glow along the planet's rim) and the haze thins.
  uniform float uSpace;
  vec3 sky(vec3 d) {
    float t = clamp((dot(d, uUp) - uDip) / (1.0 - uDip), 0.0, 1.0);
    vec3 c = mix(uHorizon, uZenith, pow(smoothstep(0.0, 0.6, t), 0.6));
    // Out in space: night blue, with a thin glow along the planet's edge (measured as an angle off its rim).
    float rim = acos(clamp(-dot(d, uUp), -1.0, 1.0)) - acos(clamp(-uDip, -1.0, 1.0));
    c = mix(c, vec3(0.01, 0.015, 0.045), uSpace * smoothstep(0.0, 0.06, rim));
    // The horizon glows toward the sun (most at dawn and dusk).
    float cs = max(dot(d, uSun), 0.0);
    c = mix(c, uSunCol, pow(cs, 3.0) * (1.0 - t) * 0.35);
    // A big soft glow round the sun, a tighter one, and the disc.
    return c + uSunCol * (pow(cs, 6.0) * 0.22 + pow(cs, 60.0) * 0.4 + pow(cs, 1500.0) * 2.0) * smoothstep(-0.1, 0.0, dot(uSun, uUp) - uDip);
  }
  /** Far things fade toward the haze colour: a coloured glow, warmer toward the sun, never grey. */
  vec3 haze(vec3 c, vec3 d, float dist) {
    float cs = max(dot(d, uSun), 0.0);
    vec3 h = mix(uHaze, uSunCol, pow(cs, 4.0) * 0.45);
    return mix(c, h, (1.0 - exp(-dist / 4500.0)) * 0.7 * (1.0 - 0.85 * uSpace));
  }
  /** A colour along the mood's ramp, k = 0 (deepest shadow) to 1 (fully lit); the saturated band is narrow, at about 0.5. */
  vec3 ramp(float k) {
    return k < 0.3 ? mix(uRamp[0], uRamp[1], k / 0.3)
         : k < 0.5 ? mix(uRamp[1], uRamp[2], (k - 0.3) / 0.2)
         : k < 0.68 ? mix(uRamp[2], uRamp[3], (k - 0.5) / 0.18)
         : mix(uRamp[3], uRamp[4], (k - 0.68) / 0.32);
  }
  /** The final grade, like a film's: a little more colour and contrast. */
  vec3 grade(vec3 c) {
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = max(mix(vec3(l), c, 1.18), 0.0);
    return mix(c, c * c * (3.0 - 2.0 * c), 0.25);
  }
`,uw=`
  precision highp float; precision highp sampler3D;
  in vec2 vUv;
  out vec4 outColor;
  uniform sampler2D tColor, tDepth, uA, uB;
  uniform sampler3D uNoise;
  uniform mat4 uInvVP;
  uniform vec3 uCam, uSun, uUp, uOffset;
  uniform float uR, uN, uBlend, uTime;
  ${wg}
  ${qf}
  const float BASE = ${kb.toFixed(1)}, TOP = ${Hb.toFixed(1)};
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  /** Weather here: R = cloud (0.5 = just forming), G = how tall it towers, B = how much cloud is round about. */
  vec3 weather(vec3 n) {
    vec2 uv = cubeAtlas(n, uN);
    return mix(texture(uA, uv).rgb, texture(uB, uv).rgb, uBlend);
  }

  /**
   * How much cloud at p. Clouds are built from 3D lumps (round, inverted-Worley
   * puffs), not a height map, so they get several turrets, bulges and
   * overhangs. Where there's lots of cloud the lumps merge into big heaps with
   * flatter bases; where there's little, only the strongest lumps survive, as
   * separate round puffs with sky between them. Bases sit at different heights.
   * Coarse = big shapes only, as a raw value (> 0 inside): for light and lump normals.
   */
  float density(vec3 p, bool fine) {
    float r = length(p), alt = r - uR, none = fine ? 0.0 : -0.3;
    if (alt < BASE - 30.0 || alt > TOP) return none;
    // Read the weather a little off to the side (a noisy warp), so cloud edges don't follow the map's grid.
    vec3 q = p - uOffset;
    vec4 warp = texture(uNoise, q / 520.0 + 0.19);
    vec3 w = weather(normalize(p + (warp.rgb - 0.5) * 220.0));
    if (w.x < 0.42) return none;
    float cov = smoothstep(0.44, 0.92, w.x);                    // how much cloud here
    float heap = smoothstep(0.15, 0.55, w.z) * cov;             // part of a big mass (vs. a lone puff)
    // Base height varies from place to place; lone puffs float a little higher than big heaps.
    float base = BASE + texture(uNoise, q / 3400.0 + 0.53).g * 280.0 + 60.0 * (1.0 - heap);
    // Tall where a big mass towers; even a lone puff gets enough room to be round.
    float top = base + 150.0 + (TOP - BASE - 450.0) * w.y * heap;
    float h = (alt - base) / (top - base);
    if (h < -0.05 || h > 1.15) return none;
    // Envelope: rounded underneath for puffs, flatter for heaps; narrowing toward the top.
    float env = smoothstep(0.0, mix(0.45, 0.12, heap), h) * (1.0 - smoothstep(0.45, 1.0, h));
    // The lumps: bigger in big masses, rising slowly (they boil upward).
    vec3 lq = q - uUp * uTime * 0.0005 * 300.0;
    float lumps = texture(uNoise, lq / mix(260.0, 620.0, heap)).r;
    float s = env * (0.45 + 0.6 * cov) + (lumps - 0.6) * 1.1 - (1.0 - cov) * 0.35;
    s -= (1.0 - smoothstep(base, base + 18.0, alt)) * heap * 0.5;    // big heaps get flatter (not flat) bases
    if (!fine) return s;
    float small = texture(uNoise, lq / 240.0 + 0.37).g;
    s += (small - 0.55) * 0.35;
    float brush = texture(uNoise, q / 160.0 + 0.71).g;                              // dry-brush edges
    return smoothstep(0.0, 0.09, s - (brush - 0.5) * 0.1);
  }

  /** Where a ray is inside the sphere of radius r: (enter, leave), or leave < enter. */
  vec2 sphere(vec3 o, vec3 d, float r) {
    float b = dot(o, d), c = dot(o, o) - r * r, k = b * b - c;
    if (k < 0.0) return vec2(1.0, -1.0);
    k = sqrt(k);
    return vec2(-b - k, -b + k);
  }

  void main() {
    vec2 ndc = vUv * 2.0 - 1.0;
    vec4 far = uInvVP * vec4(ndc, 1.0, 1.0);
    vec3 d = normalize(far.xyz / far.w - uCam);
    float depth = texture(tDepth, vUv).r, tScene = 1e9;
    vec3 col;
    float front = 6e4;   // how far to the cloud's front (where it's half opaque): things drawn over the clouds use it
    if (depth < 1.0) {
      vec4 pw = uInvVP * vec4(ndc, depth * 2.0 - 1.0, 1.0);
      tScene = length(pw.xyz / pw.w - uCam);
      col = texture(tColor, vUv).rgb;
    } else col = sky(d);

    // The part of the ray inside the cloud shell (and in front of the ground).
    vec2 outer = sphere(uCam, d, uR + TOP), inner = sphere(uCam, d, uR + BASE - 30.0);
    float camAlt = length(uCam) - uR;
    float t0 = max(outer.x, 0.0), t1 = min(outer.y, tScene);
    if (camAlt < BASE - 30.0) t0 = max(t0, inner.y);
    else if (inner.x > 0.0 && inner.y > inner.x) t1 = min(t1, inner.x);
    t1 = min(t1, t0 + 12000.0);
    if (t1 > t0) {
      float t = t0 + hash(gl_FragCoord.xy) * 4.0, T = 1.0;
      vec3 acc = vec3(0.0);
      for (int i = 0; i < 260 && t < t1 && T > 0.02; i++) {
        vec3 p = uCam + d * t;
        float dens = density(p, true), dt = max(8.0, (t - t0) * 0.012 + 8.0);
        if (dens > 0.001) {
          vec3 up = normalize(p);
          // Light reaching here through the cloud toward the sun.
          float od = 0.0;
          for (int j = 1; j <= 5; j++) od += smoothstep(0.0, 0.08, density(p + uSun * float(j * j) * 22.0, false)) * float(2 * j - 1) * 22.0;
          float through = exp(-od * 0.004);
          // Each lump's own surface: its normal (from the shape), whether it faces the sun or the sky, and the crevices between lumps.
          float s0 = density(p, false), e = 18.0;
          vec3 g = vec3(density(p + vec3(e, 0, 0), false), density(p + vec3(0, e, 0), false), density(p + vec3(0, 0, e), false)) - s0;
          vec3 n = -g / max(length(g), 1e-4);
          float faceSun = dot(n, uSun) * 0.5 + 0.5, faceSky = dot(n, up) * 0.5 + 0.5;
          float crevice = smoothstep(0.0, 0.35, density(p + n * 40.0, false));
          float L = through * mix(0.45, 1.0, faceSun) * (1.0 - 0.45 * crevice);
          // A low sun lights undersides from below (fire clouds): they face down and the sun is near the horizon.
          L = max(L, uUnder * max(0.0, -dot(n, up) * 0.7 + 0.3) * through);
          // Colour by light, in painted steps along the mood's ramp: deep shadow \u2192 shade \u2192 saturated band \u2192 lit \u2192 top.
          float k = mix(L, floor(L * 5.0 + 0.5) / 5.0, 0.45);
          vec3 c = ramp(k);
          c = mix(c, uSunCol, smoothstep(0.8, 1.0, L) * 0.35);
          // Shadowed parts facing the open sky pick up its light; undersides stay deep.
          c += uZenith * 0.25 * faceSky * (1.0 - k);
          // Backlight: thin edges glow when you look toward the sun (silver linings).
          float toSun = max(dot(d, uSun), 0.0), thin = 1.0 - smoothstep(0.05, 0.5, s0);
          c += uSunCol * (pow(toSun, 8.0) * 1.4 + pow(toSun, 2.0) * 0.25) * thin * exp(-od * 0.0015);
          // The planet's own shadow: at this height the sun sets later than on the ground (high clouds stay lit after sunset).
          float dipHere = -sqrt(max(0.0, 1.0 - pow(uR / length(p), 2.0)));
          float sunVis = smoothstep(dipHere - 0.04, dipHere + 0.02, dot(up, uSun));
          c = mix(uRamp[0] * 0.8, c, sunVis);
          c = mix(c, haze(c, d, t), 0.6);
          // Dense cores are opaque; thin edges let the sky through.
          float core = smoothstep(0.0, 0.45, s0);
          dens *= mix(0.25, 1.0, core);
          float a = 1.0 - exp(-dens * dt * 0.06);
          acc += T * a * c;
          T *= 1.0 - a;
          if (T < 0.5 && front > 5e4) front = t;
        }
        t += dens > 0.001 ? dt * 0.6 : dt * 1.5;
      }
      col = col * T + acc;
    }
    outColor = vec4(grade(clamp(col, 0.0, 1.0)), front);
  }
`;var Vb={bands:[[7e3,7700,.25],[7700,9200,1],[9500,10600,.75],[11150,11300,.6]],tilt:24,speed:30,count:7e4};function Gb(s,e,t,n,i,r){let o=c=>(c[0]-e)*n+(c[1]-t)*i,a=Math.sign(o(r))||1,l=[];for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],d=o(h)*a,f=o(u)*a;if(d>=0&&l.push(h),d*f<0){let m=d/(d-f);l.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m])}}return l.length>=3?l:s}function Ta(s){let e=s(),t;if(e<.55){let o=.6+s()*.4,a=.6+s()*.4,l=(s()-.5)*.3;t=[[-o,-a],[o+l,-a],[o,a],[-o+l,a]];let c=e<.12?0:1+Math.floor(s()*3);for(let h=0;h<c;h++){let u=s()*Math.PI*2;t=Gb(t,(s()-.5)*o*1.2,(s()-.5)*a*1.2,Math.cos(u),Math.sin(u),[(s()-.5)*.4*o,(s()-.5)*.4*a])}}else if(e<.85){let o=s()<.6?3:4,a=s()*Math.PI*2;t=Array.from({length:o},()=>s()).sort().map(c=>a+c*Math.PI*2).map((c,h)=>{let u=h===0?1:.35+s()*.5;return[Math.cos(c)*u,Math.sin(c)*u]})}else{let o=.08+s()*.12;t=[[-1,(s()-.5)*o],[.6+s()*.4,-o],[.3+s()*.5,o]]}let n=0,i=0;for(let o of t)n+=o[0],i+=o[1];n/=t.length,i/=t.length;let r=0;for(let o of t)o[0]-=n,o[1]-=i,r=Math.max(r,Math.hypot(o[0],o[1]));return t.slice(0,nn).map(o=>[o[0]/r,o[1]/r])}var nn=8,Tg=`
  uniform float uTime, uOmega0, uR0;
  float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z) * 2.0 - 1.0;
  }
  /** Orbital rate at radius r (Kepler: inner pieces go round faster). */
  float omega(float r) { return uOmega0 * pow(uR0 / r, 1.5); }
  /** How full the ring is at angle ang (where the glass is now) and radius r; core = how near a band's middle (0 \u2026 1). */
  float dense(float ang, float r, float core) {
    float pa = ang - omega(r) * uTime * 0.25;
    // Knots are drawn out along the orbit (long streaks, a few hundred metres across), as shear would.
    vec3 q = vec3(cos(pa), sin(pa), 0.0) * 3.5 + vec3(0.0, 0.0, r / 160.0);
    float knot = vnoise(q + vec3(0.0, 0.0, uTime * 0.004)) + 0.5 * vnoise(q * vec3(2.3, 2.3, 1.7) + 11.0);
    float stretch = vnoise(vec3(cos(pa), sin(pa), uTime * 0.0015) * 2.2 + 5.0);
    // Thin ringlets across the band.
    float ringlet = 0.5 + 0.5 * vnoise(vec3(r / 45.0, 3.1, 0.0));
    return smoothstep(-0.15, 0.25, knot + stretch * 0.6 + 0.35 * core - 0.1) * mix(0.35, 1.0, ringlet);
  }
`,Ag=`
  uniform vec3 uSun, uUp;
  uniform float uR;
  uniform sampler2D tDepth, tFront;
  uniform mat4 uInvVP;
  uniform vec2 uRes;
  ${qf}
  /** What glass at o mirrors along r: the planet (lit on its day side), or the sky round it. */
  vec3 world(vec3 o, vec3 r) {
    float b = dot(o, r), cc = dot(o, o) - uR * uR, h = b * b - cc;
    if (h > 0.0 && -b - sqrt(h) > 0.0) {
      vec3 hit = normalize(o + r * (-b - sqrt(h)));
      float day = smoothstep(-0.1, 0.25, dot(hit, uSun));
      vec3 land = mix(uZenith * vec3(0.5, 0.75, 0.9), vec3(0.16, 0.36, 0.26), 0.4);
      return mix(land * 0.12, land * (uSunCol * 0.6 + uZenith * 0.4), day);
    }
    vec3 up = normalize(o);
    float el = dot(r, up);
    vec3 c = mix(uHorizon, uZenith, pow(smoothstep(-0.1, 0.6, el), 0.6));
    c = mix(c, vec3(0.01, 0.015, 0.045), uSpace * smoothstep(0.0, 0.3, el));
    float cs = max(dot(r, uSun), 0.0);
    return c + uSunCol * pow(cs, 6.0) * 0.3;
  }
  /** 0 when hidden behind the ground; otherwise how much shows through the clouds in front. */
  float shows(float dist) {
    vec2 suv = gl_FragCoord.xy / uRes;
    float depth = texture(tDepth, suv).r;
    if (depth < 1.0) {
      vec4 pw = uInvVP * vec4(suv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
      if (dist > length(pw.xyz / pw.w - cameraPosition)) return 0.0;
    }
    float front = texture(tFront, suv).a;
    return mix(1.0, 0.08, smoothstep(front - 150.0, front + 150.0, dist));
  }
  /** 1 in sunlight, 0 in the planet's shadow (behind the planet, within its radius of the line toward the sun). */
  float sunlit(vec3 c) {
    float along = dot(c, uSun);
    return along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
  }
`,Wb=`
  in float aCorner;                  // 0 = the piece's centre, 1 \u2026 8 its corners
  in vec4 iOrbit;                    // orbit radius, starting angle, height above the ring's plane, seed
  in vec4 iSpin;                     // tumbling axis, rate (rad/s)
  in vec4 iSize;                     // size (m), starting tumble angle, how close to the band's core (0 \u2026 1), -
  in vec4 iC0, iC1, iC2, iC3;        // the 8 corners (x, y) in the piece's own plane
  uniform mat3 uRingFrame;           // the ring's plane: columns = in-plane x, in-plane y, normal
  uniform float uR;
  uniform vec3 uSun;
  out vec3 vW, vN, vT; out vec2 vL; out float vEdge, vSeed, vLit;
  ${Tg}

  /** Rotate v about unit axis k by angle a. */
  vec3 rot(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }

  void main() {
    float r = iOrbit.x, seed = iOrbit.w;
    float ang = iOrbit.y + omega(r) * uTime;
    // Bobbing a little above and below the plane, and in and out.
    float bob = iOrbit.z + sin(ang * 3.0 + seed * 40.0) * 25.0;
    float rr = r + sin(ang * 2.0 + seed * 23.0) * 30.0;
    vec3 c = uRingFrame * vec3(cos(ang) * rr, sin(ang) * rr, bob);

    // A piece in a thin part of the ring shrinks away.
    float size = iSize.x * dense(ang, r, iSize.z);

    // Tumbling: a basis turned about the piece's own axis.
    vec3 axis = iSpin.xyz;
    float a = iSize.y + iSpin.w * uTime;
    vec3 u = rot(normalize(cross(axis, vec3(0.31, 0.87, 0.39))), axis, a);
    vec3 n = rot(normalize(cross(axis, u + vec3(0.2, -0.4, 0.1))), axis, a * 0.7);
    u = normalize(u - n * dot(u, n));
    vec3 v = cross(n, u);

    int k = int(aCorner + 0.5);
    vec2 cs[9] = vec2[9](vec2(0.0), iC0.xy, iC0.zw, iC1.xy, iC1.zw, iC2.xy, iC2.zw, iC3.xy, iC3.zw);
    vec2 p = cs[k];
    vW = c + (u * p.x + v * p.y) * size;
    vN = n; vT = u; vL = p; vEdge = k == 0 ? 1.0 : 0.0; vSeed = seed;
    // In the planet's shadow? (behind the planet, within its radius of the line toward the sun)
    float along = dot(c, uSun);
    vLit = along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
    gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
  }
`,Gh=`
  precision highp float;
  in vec3 vW, vN, vT; in vec2 vL; in float vEdge, vSeed, vLit;
  out vec4 outColor;
  ${Ag}
  void main() {
    vec3 V = vW - cameraPosition;
    float dist = length(V);
    V /= dist;
    // Hidden behind the ground, or partly behind clouds in front.
    float show = shows(dist);
    if (show <= 0.0) discard;
    float fwE = fwidth(vEdge);
    vec2 dLx = dFdx(vL), dLy = dFdy(vL);   // taken here, outside the branches, where derivatives are reliable
    // A slight warp, different per pane: the mirrored world sweeps across it.
    vec3 t = normalize(vT), b = cross(normalize(vN), t);
    float w = mix(0.08, 0.3, fract(vSeed * 3.7));
    vec3 n = normalize(vN + (t * vL.x * vL.y + b * (vL.y * vL.y - 0.5 * vL.x)) * w);
    // Cracks: a few lines from one impact point, in most panes. Each side of a main crack is tilted a little, so the mirrored world breaks there.
    float crack = 0.0;
    if (fract(vSeed * 5.13) < 0.7) {
      vec2 at = (vec2(fract(vSeed * 31.7), fract(vSeed * 47.3)) - 0.5) * 0.8;
      int lines = 2 + int(fract(vSeed * 19.9) * 4.0);
      for (int i = 0; i < 5; i++) {
        if (i >= lines) break;
        float a = fract(vSeed * (11.3 + float(i) * 7.7)) * 6.2832;
        vec2 dir = vec2(cos(a), sin(a)), nrm = vec2(-dir.y, dir.x);
        float g = dot(vL - at, nrm), along = dot(vL - at, dir);
        float px = abs(g) / max(abs(dot(dLx, nrm)) + abs(dot(dLy, nrm)), 1e-5);
        // A crack runs out from the impact point, one way or both, and fades toward its end.
        float reach = 0.5 + fract(vSeed * (5.1 + float(i))) * 1.2;
        float on = (i == 0 ? 1.0 : step(0.0, along)) * (1.0 - smoothstep(reach * 0.6, reach, abs(along)));
        crack = max(crack, (1.0 - smoothstep(0.5, 1.6, px)) * on);
        if (i < 2) n = normalize(n + (t * nrm.x + b * nrm.y) * sign(g) * 0.12 * on);
      }
    }
    if (dot(n, V) > 0.0) n = -n;
    float cosv = max(-dot(V, n), 0.0);
    vec3 r = reflect(V, n);
    // Glass mirrors more at a glancing angle; some pieces are more mirror-like than others.
    float F = 0.04 + 0.96 * pow(1.0 - cosv, 5.0);
    float mirror = mix(0.15, 0.85, fract(vSeed * 7.31));
    float refl = clamp(mix(F, 1.0, mirror * 0.7), 0.0, 1.0);
    vec3 c = world(vW, r);
    // A faint frosted body that catches the sun, so the ring reads even where the glass mirrors dark space.
    vec3 frost = mix(uRamp[3], uSunCol, 0.5) * (0.35 + 0.4 * fract(vSeed * 2.9)) * vLit;
    c = mix(c, frost, 0.3 * (1.0 - F));
    // The sun's glint and a softer sheen round it (none in the planet's shadow).
    float rs = max(dot(r, uSun), 0.0);
    c += uSunCol * (pow(rs, 400.0) * 6.0 + pow(rs, 40.0) * 0.5) * vLit;
    // The rim, about 1.5 px wide: bright where it faces the light, faint otherwise, fading with distance.
    float px = vEdge / max(fwE, 1e-5);
    float rim = (1.0 - smoothstep(0.5, 1.5, px)) * mix(0.35, 1.0, fract(vSeed * 13.1)) * (1.0 - 0.7 * smoothstep(3000.0, 15000.0, dist));
    vec3 rimCol = (mix(uRamp[4], vec3(0.85, 1.0, 1.0), 0.4) * (0.6 + 0.5 * (1.0 - cosv)) + uSunCol * pow(max(dot(V, uSun), 0.0), 6.0)) * mix(0.25, 1.0, vLit);
    c = mix(c, rimCol, rim);
    float near = 1.0 - smoothstep(2000.0, 8000.0, dist);
    c = mix(c, rimCol * 1.2, crack * near);
    float a = max(max(refl * 0.92 + 0.06 + 0.25 * vLit, rim * 0.9), crack * 0.9 * near);
    c = mix(c, haze(c, V, dist), 0.25);
    a *= show;
    outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);
  }
`,Xb=`
  uniform mat3 uRingFrame;
  out vec3 vW, vP;
  void main() {
    vP = position;
    vW = uRingFrame * position;
    gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
  }
`,qb=s=>`
  precision highp float;
  in vec3 vW, vP;
  out vec4 outColor;
  uniform mat3 uRingFrame;
  uniform vec3 uBands[${s}];
  ${Ag}
  ${Tg}
  void main() {
    vec3 V = vW - cameraPosition;
    float dist = length(V);
    V /= dist;
    // Which band (if any) this is in, how full it is, and how near the band's middle.
    float r = length(vP.xy), fill = 0.0, core = 0.0;
    for (int i = 0; i < ${s}; i++) {
      vec3 b = uBands[i];
      float inside = smoothstep(b.x - 60.0, b.x + 60.0, r) * (1.0 - smoothstep(b.y - 60.0, b.y + 60.0, r));
      fill = max(fill, inside * b.z);
      core = max(core, inside * (1.0 - abs((r - b.x) / (b.y - b.x) * 2.0 - 1.0)));
    }
    float a = 0.6 * fill * sqrt(dense(atan(vP.y, vP.x), r, smoothstep(0.1, 0.8, core))) * smoothstep(1500.0, 7000.0, dist);
    if (a < 0.002) discard;
    float show = shows(dist);
    if (show <= 0.0) discard;
    // Frosted glass catching the sun, with a little of what it mirrors.
    vec3 n = uRingFrame[2];
    if (dot(n, V) > 0.0) n = -n;
    float lit = sunlit(vW);
    vec3 c = mix(world(vW, reflect(V, n)), mix(uRamp[3], uSunCol, 0.5), 0.7) * mix(0.12, 1.0, lit);
    a *= show * (0.6 + 0.4 * lit);
    outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);
  }
`,Vh=class{mesh;uniforms;frame;constructor(e,t,n=Vb){let i=Qs(11),r=n.count,o=n.bands.map(([E,R,C])=>(R*R-E*E)*C),a=o.reduce((E,R)=>E+R,0),l=new Float32Array(r*4),c=new Float32Array(r*4),h=new Float32Array(r*4),u=[0,1,2,3].map(()=>new Float32Array(r*4));for(let E=0;E<r;E++){let R=i()*a,C=0;for(;C<o.length-1&&R>o[C];)R-=o[C++];let[S,b]=n.bands[C],P=Math.sqrt(S*S+i()*(b*b-S*S)),N=1-Math.abs((P-S)/(b-S)*2-1),H=nt.MathUtils.smoothstep(N,.1,.8),W=40+110*H;l.set([P,i()*Math.PI*2,(i()+i()+i()-1.5)*W,i()],E*4);let X=new nt.Vector3(i()-.5,i()-.5,i()-.5).normalize();c.set([X.x,X.y,X.z,(.008+.05*i()**2)*(i()<.5?1:-1)],E*4),h.set([6+i()**2.4*(30+160*H),i()*Math.PI*2,H,0],E*4);let O=Ta(i);for(let F=0;F<nn;F++){let U=O[Math.min(F,O.length-1)];u[F>>1][E*4+(F&1)*2]=U[0],u[F>>1][E*4+(F&1)*2+1]=U[1]}}let d=new nt.InstancedBufferGeometry;d.setAttribute("position",new nt.Float32BufferAttribute(new Float32Array((nn+1)*3),3)),d.setAttribute("aCorner",new nt.Float32BufferAttribute(Array.from({length:nn+1},(E,R)=>R),1));let f=[];for(let E=0;E<nn;E++)f.push(0,1+E,1+(E+1)%nn);d.setIndex(f),d.setAttribute("iOrbit",new nt.InstancedBufferAttribute(l,4)),d.setAttribute("iSpin",new nt.InstancedBufferAttribute(c,4)),d.setAttribute("iSize",new nt.InstancedBufferAttribute(h,4)),u.forEach((E,R)=>d.setAttribute(`iC${R}`,new nt.InstancedBufferAttribute(E,4))),d.instanceCount=r;let m=nt.MathUtils.degToRad(n.tilt),v=new nt.Matrix3().set(1,0,0,0,Math.sin(m),Math.cos(m),0,Math.cos(m),-Math.sin(m));this.frame=v;let g=n.bands[0][0];this.uniforms={...t,uRingFrame:{value:v},uTime:{value:0},uOmega0:{value:n.speed/g},uR0:{value:g},uR:{value:e},uBands:{value:n.bands.map(E=>new nt.Vector3(...E))}};let p=new nt.ShaderMaterial({glslVersion:nt.GLSL3,transparent:!0,depthWrite:!1,depthTest:!1,side:nt.DoubleSide,blending:nt.CustomBlending,blendSrc:nt.OneFactor,blendDst:nt.OneMinusSrcAlphaFactor,uniforms:this.uniforms,vertexShader:Wb,fragmentShader:Gh}),x=new nt.Mesh(d,p);x.frustumCulled=!1;let _=Math.min(...n.bands.map(E=>E[0])),y=Math.max(...n.bands.map(E=>E[1])),T=new nt.Mesh(new nt.RingGeometry(_-100,y+100,720,24),new nt.ShaderMaterial({glslVersion:nt.GLSL3,transparent:!0,depthWrite:!1,depthTest:!1,side:nt.DoubleSide,blending:nt.CustomBlending,blendSrc:nt.OneFactor,blendDst:nt.OneMinusSrcAlphaFactor,uniforms:this.uniforms,vertexShader:Xb,fragmentShader:qb(n.bands.length)}));T.frustumCulled=!1,T.renderOrder=-1,this.mesh=new nt.Group().add(T,x)}advance(e){this.uniforms.uTime.value+=e}};var Se=Ht(Bt());var Yb={side:448,magTilt:24},Rg=63e5,Yf=8500,cs=7,Zb=[[.74,.06,.12],[1,.17,.5],[1.4,.12,.3],[1.74,.012,.08]],io=`
  uniform float uGrav, uMag, uShape, uFlat, uBelts, uSpin, uBias, uSwirl, uChaos, uTime, uCover;
  uniform vec3 uMagAxis, uCrossAxis, uSpinAxis;
  uniform vec4 uKinds[4];   // each kind of glass: how hard the magnet pushes it (its middle and its spread), how much of the glass is of this kind, -
  float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z) * 2.0 - 1.0;
  }
  float noise1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(vec3(i, 1.7, 3.1)), hash(vec3(i + 1.0, 1.7, 3.1)), f) * 2.0 - 1.0; }
  /**
   * The magnet's strength in direction d, relative to its equator: funnelled toward the equator (up to 2\xD7 over its poles)
   * as much as uFlat says, bent by the second magnet.
   */
  float field(vec3 d) {
    float c = dot(d, uMagAxis), q = dot(d, uCrossAxis);
    float f = 1.0 + uFlat * (sqrt(1.0 + 3.0 * c * c) - 1.0);
    return f * max(0.2, 1.0 + uShape * (1.5 * q * q - 0.5));
  }
  /** The magnet's ripples by latitude: how much glass it gathers there (0 \u2026 1), more where the ripple is weaker. */
  float beltAtLat(float lat) {
    float ripple = noise1(lat * 9.0 + 2.0) + 0.5 * noise1(lat * 19.0 + 7.0);
    return clamp(0.5 - 0.6 * uBelts * ripple, 0.04, 1.0);
  }
  float beltAt(vec3 d) { return beltAtLat(asin(clamp(dot(d, uMagAxis), -1.0, 1.0))); }
  /**
   * A piece's home latitude: spread evenly over the sphere, squeezed toward the magnet's equator by its reach
   * (uFlat: 0 = anywhere, 1 = a thin ring), and more often in the belts.
   */
  float homeLatitude(float seed) {
    float reach = mix(1.0, 0.006, pow(uFlat, 0.6)), lat = 0.0;
    for (int k = 0; k < 12; k++) {
      float fk = float(k);
      lat = asin(hash(vec3(seed * 13.7, fk, 3.3)) * 2.0 - 1.0) * reach;
      if (hash(vec3(seed * 29.3, fk, 2.2)) < beltAtLat(lat)) break;
    }
    return lat;
  }
  /** Which kind of glass a fragment is (0 \u2026 3). */
  int kindOf(float seed) {
    float pick = hash(vec3(seed * 3.1, 9.0, 1.0));
    for (int i = 0; i < 4; i++) {
      if (pick < uKinds[i].z) return i;
      pick -= uKinds[i].z;
    }
    return 3;
  }
  /** Where the magnet's push balances gravity's pull, in direction d (the push falls off faster than the pull). */
  float shell(vec3 d) { return ${Yf.toFixed(1)} * sqrt(uMag * field(d) / uGrav); }
  /** The spin axis's own frame: x, y across it. */
  vec3 axisX() { return normalize(cross(uSpinAxis, vec3(0.31, 0.87, 0.39))); }
  /**
   * Spin at distance r, direction d: + left, - right, in jets by latitude and lanes by distance, mostly one way (bias),
   * and stronger or weaker along the way round (so the flow speeds up and slows down there).
   */
  float spinAt(vec3 d, float r) {
    float lat = asin(clamp(dot(d, uSpinAxis), -1.0, 1.0));
    float lane = tanh(3.0 * (noise1(r / 160.0 + 3.0) * 0.7 + noise1(r / 600.0 + 8.0) * 0.6 + noise1(lat * 8.0 + 5.0) * 0.9 + uBias));
    vec3 x = axisX(), y = cross(uSpinAxis, x);
    float a = atan(dot(d, y), dot(d, x));
    float along = 1.0 + mix(0.1, 0.45, uFlat) * (noise1(a * 2.5 + r / 900.0 + uTime * 2e-4) * 0.7 + noise1(a * 7.0 - r / 400.0 + 20.0) * 0.4) - mix(0.0, 0.45, uFlat);
    return lane * along;
  }
  /**
   * The storms and small swirls, as a stream function: the glass flows along its contours, so it is stirred round
   * without bunching up. Storms are spin centres of either sign that drift round with time; swirls are noise (spin chaos).
   */
  uniform vec4 uStorms[${cs}];      // latitude and starting longitude round the spin axis, size (w), spin (+ left, - right, and how strong)
  uniform float uStormDrift[${cs}];  // how fast each drifts round (rad/s)
  /** Storm i now: its centre (it drifts round with time), its size (w), and its spin. */
  void storm(int i, out vec3 c, out float w, out float spin) {
    vec3 x = axisX(), y = cross(uSpinAxis, x);
    vec4 st = uStorms[i];
    float lon = st.y - uStormDrift[i] * uTime;
    c = cos(st.x) * (cos(lon) * x + sin(lon) * y) + sin(st.x) * uSpinAxis;
    w = st.z;
    spin = st.w;
  }
  /** How much d is inside a storm (0 \u2026 1), and that storm's spin. */
  float stormAt(vec3 d, out float spin) {
    float best = 0.0;
    spin = 0.0;
    for (int i = 0; i < ${cs}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      float inside = exp(-(1.0 - dot(d, c)) / (w * 2.0));
      if (inside > best) { best = inside; spin = sp; }
    }
    return best * step(0.01, uSwirl);
  }
  float swirls(vec3 d) {
    float psi = 0.0;
    for (int i = 0; i < ${cs}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      psi += sp * 40.0 * sqrt(w) * exp(-(1.0 - dot(d, c)) / w) * uSwirl;
    }
    vec3 q = d * 6.0 + vec3(0.0, 0.0, uTime * 4e-5);
    psi += uChaos * 2.5 * (vnoise(q) + 0.5 * vnoise(q * 2.3 + 11.0));
    return psi;
  }
  vec3 rotAbout(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
  /** The patch pattern t seconds after it was laid down: carried round by spin's jets (each latitude at its own speed, so patches shear into streaks) and swirled by the storms. */
  float patchPattern(vec3 d, float t, float seed) {
    float r = shell(d);
    vec3 q = rotAbout(d, uSpinAxis, -spinAt(d, r) * uSpin * sqrt(uGrav * ${Rg.toFixed(1)} / r) / r * t);
    for (int i = 0; i < ${cs}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      q = rotAbout(q, c, -sp * uSwirl * 4.0 * exp(-(1.0 - dot(q, c)) / (w * 3.0)) * min(t / 600.0, 1.0));
    }
    // Streams: the pattern is drawn out along the jets (long round the spin axis, narrow across it).
    vec3 x = axisX(), y = cross(uSpinAxis, x);
    float lat = asin(clamp(dot(q, uSpinAxis), -1.0, 1.0)), lon = atan(dot(q, y), dot(q, x));
    vec3 g = vec3(cos(lon) * 1.1, sin(lon) * 1.1, lat * 5.5) + seed;
    vec3 warp = vec3(vnoise(g * 1.7 + 4.0), vnoise(g * 1.7 + 9.0), vnoise(g * 1.7 + 13.0)) * uChaos * 0.9;
    return vnoise(g + warp) * 0.6 + vnoise(g * 2.3 + warp * 2.0 + 7.0) * 0.3 + vnoise(g * 5.1 + 11.0) * 0.15;
  }
  /**
   * How much glass the magnet has gathered at d (0 \u2026 1): patches like clouds, with clear sky between, covering about uCover
   * of the sky (1 = everywhere). The pattern drifts with the flow; it is laid down afresh every so often and blended across,
   * so the jets' shear never draws it out into endless thin stripes.
   */
  float patchAt(vec3 d) {
    if (uCover > 0.995) return 1.0;
    float P = 2400.0, a = fract(uTime / P), b = fract(uTime / P + 0.5);
    float na = patchPattern(d, a * P, floor(uTime / P) * 7.13), nb = patchPattern(d, b * P, floor(uTime / P + 0.5) * 7.13 + 3.7);
    float n = mix(na, nb, abs(1.0 - 2.0 * a));
    float edge = mix(0.45, -0.45, uCover);
    return smoothstep(edge - 0.06, edge + 0.12, n);
  }
  /** How the glass flows at d (direction of travel \xD7 speed, m/s). t1, t2: directions across the shell at d. */
  vec3 flowAt(vec3 d, float r, vec3 t1, vec3 t2) {
    vec3 v = spinAt(d, r) * cross(uSpinAxis, d) * sqrt(uGrav * ${Rg.toFixed(1)} / r);
    float e = 0.003;
    vec3 g = (t1 * (swirls(normalize(d + t1 * e)) - swirls(normalize(d - t1 * e))) + t2 * (swirls(normalize(d + t2 * e)) - swirls(normalize(d - t2 * e)))) / (2.0 * e);
    // Eye walls: each storm draws glass onto a ring at its edge and pushes it out of its middle, leaving a clear eye.
    // Inside a storm the jets die away and the storm's own wind takes over.
    vec3 wall = vec3(0.0);
    float calm = 1.0;
    for (int i = 0; i < ${cs}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      float th = acos(clamp(dot(d, c), -1.0, 1.0)), ring = sqrt(2.0 * w);
      vec3 out_ = normalize(d - c * dot(d, c) + 1e-6);
      wall -= out_ * clamp((th - ring) / ring, -1.0, 1.0) * 14.0 * exp(-pow(th / (2.2 * ring), 2.0)) * abs(sp);
      calm *= 1.0 - min(1.0, uSwirl) * exp(-pow(th / (1.6 * ring), 4.0));
    }
    return (v * calm + cross(d, g)) * uSpin + wall * uSwirl;
  }
`,$b=`
  precision highp float;
  uniform sampler2D tPos;
  uniform float uDt, uStep, uStir, uLayers, uVents, uLife;
  in vec2 vUv;
  out vec4 outColor;
  ${io}
  vec3 rnd3(float seed, float k) { return vec3(hash(vec3(seed * 91.7, k, 1.3)), hash(vec3(seed * 53.1, k, 7.9)), hash(vec3(seed * 17.3, k, 4.2))); }
  /** Vent e: where the magnet lets glass out into the sky, somewhere on the shell. */
  vec3 ventAt(float e) {
    // Half the vents are on the storms' edges (the first four on the big one), feeding their eyes.
    if (e < floor(uVents * 0.5)) {
      vec3 c; float w, sp;
      storm(e < 4.0 ? 0 : int(mod(e, ${cs}.0)), c, w, sp);
      vec3 side = normalize(cross(c, vec3(hash(vec3(e, 1.0, 1.0)) - 0.5, hash(vec3(e, 2.0, 2.0)) - 0.5, hash(vec3(e, 3.0, 3.0)) - 0.5)) + 1e-5);
      float a = sqrt(2.0 * w) * 1.7;
      return normalize(c * cos(a) + side * sin(a));
    }
    vec3 x = axisX(), y = cross(uSpinAxis, x);
    float lat = asin(hash(vec3(e, 4.1, 8.3)) * 2.0 - 1.0) * 0.9, lon = hash(vec3(e, 7.7, 2.9)) * 6.2832;
    return cos(lat) * (cos(lon) * x + sin(lon) * y) + sin(lat) * uSpinAxis;
  }
  void main() {
    vec4 P = texture(tPos, vUv);
    float seed = P.w;
    vec3 d = normalize(P.xyz);
    // This fragment's kind of glass, and how hard the magnet pushes it: harder = it balances farther out.
    // Spread evenly across the kind's range, so each band has a sharp edge.
    float spread = hash(vec3(seed * 5.7, 4.0, 2.0)) * 2.0 - 1.0;
    vec4 kind = uKinds[kindOf(seed)];
    float push = kind.x + kind.y * spread;
    // Layers: how different the kinds are (0 = all alike: one shell, a little thick).
    push = mix(1.0 + 0.08 * spread, push, uLayers);
    float r = shell(d) * sqrt(push);
    float h = (hash(vec3(seed * 7.3, 2.0, 5.0)) - 0.5) * 2.0;
    // Vents: each piece comes out of one of the magnet's vents and is carried off by spin for its life, then comes out
    // again; so each vent draws a long river of glass across the sky, bending with the jets and curling round storms.
    if (uVents > 0.5) {
      float life = uLife * (0.6 + 0.8 * hash(vec3(seed * 2.3, 5.0, 9.0)));
      if (mod(uTime + hash(vec3(seed * 6.1, 1.0, 4.0)) * life, life) < uDt) {
        vec3 src = ventAt(floor(hash(vec3(seed * 3.7, 2.0, 6.0)) * uVents));
        vec3 j = (rnd3(seed, uStep + 0.7) - 0.5) * 0.03;
        d = normalize(src + j - src * dot(j, src));
        outColor = vec4(d * (shell(d) * sqrt(push) + 120.0 * h), seed);
        return;
      }
    }
    // Flow along the shell, and sliding down it into its valleys (toward weaker field), and a little jostling.
    vec3 t1 = normalize(cross(d, abs(d.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0))), t2 = cross(d, t1);
    vec3 v = flowAt(d, r, t1, t2);
    // The magnet holds each piece near its own home latitude (from the magnet's equator): anywhere for a sphere,
    // within a few degrees for a ring, and more often in the belts. It is drawn back there when the flow carries it off.
    float c = dot(d, uMagAxis), lat = asin(clamp(c, -1.0, 1.0));
    float home = homeLatitude(seed);
    if (uVents < 0.5) v -= normalize(uMagAxis - d * c + 1e-6) * clamp((lat - home) * r * 0.003, -40.0, 40.0) * uGrav;
    vec3 jostle = (rnd3(seed, uStep) - 0.5) * uStir * sqrt(uDt);
    d = normalize(d + (v * uDt + jostle) / r);
    // Each fragment rides a little above or below the shell (its own height in the band).
    outColor = vec4(d * (shell(d) * sqrt(push) + mix(200.0, 25.0, uFlat) * h), seed);
  }
`,jb=`
  precision highp float;
  uniform sampler2D tSeed;
  in vec2 vUv;
  out vec4 outColor;
  ${io}
  void main() {
    float seed = texture(tSeed, vUv).w;
    vec3 d = vec3(0.0, 1.0, 0.0);
    for (int k = 0; k < 16; k++) {
      float fk = float(k);
      // A random direction: three summed randoms per axis, near enough a normal spread to be even over the sphere.
      vec3 g = vec3(0.0);
      for (int j = 0; j < 3; j++) g += vec3(hash(vec3(seed * 91.7, fk, float(j) + 0.3)), hash(vec3(seed * 53.1, fk, float(j) + 5.1)), hash(vec3(seed * 17.3, fk, float(j) + 8.7))) - 0.5;
      d = normalize(g + 1e-5);
      if (hash(vec3(seed * 29.3, fk, 2.2)) < beltAt(d)) break;
    }
    outColor = vec4(d * ${Yf.toFixed(1)}, seed);
  }
`,Wh=(()=>{let s=["in vec3 vW, vN, vT; in vec2 vL; in float vEdge, vSeed, vLit;","    a *= show;"];if(!s.every(e=>Gh.includes(e)))throw new Error("GLASS_FRAGMENT changed: update pieceFragment");return Gh.replace(s[0],`${s[0]}
  in vec3 vTint; in float vTintA;
  uniform float uIris;`).replace(s[1],`    // Tinted (keeping the glass's light and shade), and a little more solid, so the colour reads.
    float lum = dot(c, vec3(0.3, 0.55, 0.15));
    c = mix(c, vTint * (0.35 + 0.9 * lum), vTintA);
    a = mix(a, max(a, 0.55), vTintA);
    // Iridescence, like a soap film: colours that shift with the angle and across the piece.
    vec3 film = mix(vec3(1.0), 0.5 + 0.5 * cos(6.2832 * (vec3(0.0, 0.33, 0.67) + 1.7 * cosv + fract(vSeed * 3.1) * 0.5 + vL.x * 0.12)), 0.5);   // pastel: pearl, pink, sky blue
    c = mix(c, c * 0.55 + film * (0.35 + 0.5 * lum), uIris * 0.65);
    // Light coming through, with the sun behind.
    c += uSunCol * pow(max(dot(V, uSun), 0.0), 8.0) * 0.5 * vLit * uIris;
${s[1]}`)})(),Kb=`
  in float aCorner;
  in vec4 iSpin;                     // tumbling axis, rate (rad/s)
  in vec4 iSize;                     // size (m), starting tumble angle, seed, -
  in vec4 iC0, iC1, iC2, iC3;
  uniform sampler2D tPos, tPrev;
  uniform int uSide;
  uniform float uR, uColourBy, uBlades, uGiants, uDt;
  uniform vec3 uSun;
  out vec3 vW, vN, vT; out vec2 vL; out float vEdge, vSeed, vLit;
  out vec3 vTint; out float vTintA;
  ${io}
  /**
   * What colour shows what the piece is part of (uColourBy: 0 = none, 1 = storms and belts, 2 = its spin, 3 = its kind of glass).
   * The tint's strength goes in vTintA.
   */
  void tint(vec3 c, float seed) {
    float r = length(c);
    vec3 d = c / r;
    vTint = vec3(1.0); vTintA = 0.0;
    if (uColourBy > 0.5 && uColourBy < 1.5) {
      float sp, inside = stormAt(d, sp);
      vec3 band = mix(vec3(0.97, 0.92, 0.80), vec3(0.78, 0.45, 0.22), smoothstep(0.35, 0.65, beltAt(d)));
      vTint = mix(band, sp > 0.0 ? vec3(1.0, 0.22, 0.1) : vec3(0.5, 0.3, 1.0), smoothstep(0.2, 0.55, inside));
      vTintA = 0.85;
    } else if (uColourBy > 1.5 && uColourBy < 2.5) {
      float s = spinAt(d, r);
      vTint = s > 0.0 ? vec3(1.0, 0.5, 0.18) : vec3(0.2, 0.55, 1.0);
      vTintA = 0.9 * min(1.0, abs(s) * 1.6);
    } else if (uColourBy > 2.5) {
      int k = kindOf(seed);
      vTint = k == 0 ? vec3(0.4, 1.0, 0.55) : k == 1 ? vec3(0.35, 0.75, 1.0) : k == 2 ? vec3(1.0, 0.75, 0.3) : vec3(1.0, 0.4, 0.8);
      vTintA = 0.85;
    }
  }
  vec3 rot(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
  void main() {
    vec4 P = texelFetch(tPos, ivec2(gl_InstanceID % uSide, gl_InstanceID / uSide), 0);
    vec3 c = P.xyz;
    tint(c, P.w);
    vec3 axis = iSpin.xyz;
    float a = iSize.y + iSpin.w * uTime;
    vec3 u = rot(normalize(cross(axis, vec3(0.31, 0.87, 0.39))), axis, a);
    vec3 n = rot(normalize(cross(axis, u + vec3(0.2, -0.4, 0.1))), axis, a * 0.7);
    u = normalize(u - n * dot(u, n));
    vec3 v = cross(n, u);
    float sx = iSize.x, sy = iSize.x;
    if (uBlades > 0.5) {
      // A blade: its long side along the way it flows, its face turning slowly about that line.
      vec3 up = normalize(c), vel = (c - texelFetch(tPrev, ivec2(gl_InstanceID % uSide, gl_InstanceID / uSide), 0).xyz) / uDt;
      vec3 f = vel - up * dot(vel, up);
      float speed = length(f);
      f = speed > 0.01 ? f / speed : normalize(cross(uSpinAxis, up) + 1e-4);
      n = rot(up, f, iSize.y + iSpin.w * uTime);
      u = f;
      v = cross(n, f);
      // Most are shards, drawn out by the flow; a few are giants, hundreds of metres to a few kilometres long and thin.
      float g = fract(P.w * 71.3);
      if (g < uGiants) {
        float h = g / uGiants;
        sx = mix(500.0, 2000.0, h * h);
        sy = sx * mix(0.07, 0.22, fract(P.w * 17.9));
      } else {
        sx = iSize.x * (1.0 + 3.0 * clamp(speed / 40.0, 0.0, 1.0));
        sy = iSize.x * 0.5;
      }
    }
    int k = int(aCorner + 0.5);
    vec2 cs[9] = vec2[9](vec2(0.0), iC0.xy, iC0.zw, iC1.xy, iC1.zw, iC2.xy, iC2.zw, iC3.xy, iC3.zw);
    vec2 p = cs[k];
    vW = c + (u * p.x * sx + v * p.y * sy) * patchAt(normalize(c));
    vN = n; vT = u; vL = p; vEdge = k == 0 ? 1.0 : 0.0; vSeed = iSize.z;
    float along = dot(c, uSun);
    vLit = along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
    gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
  }
`,Jb=`
  uniform sampler2D tPos;
  uniform int uSide;
  uniform float uR, uProj, uSheet;
  uniform vec3 uSun;
  out float vA, vLit, vForward;
  ${io}
  void main() {
    vec4 P = texelFetch(tPos, ivec2(gl_VertexID % uSide, gl_VertexID / uSide), 0);
    vec3 c = P.xyz;
    vec4 view = viewMatrix * vec4(c, 1.0);
    float dist = max(-view.z, 1.0), rad = uSheet * (0.7 + 0.6 * fract(P.w * 5.3));
    gl_Position = projectionMatrix * view;
    float px = 2.0 * rad * uProj / dist;
    gl_PointSize = clamp(px, 1.0, 48.0);
    // Fainter where the patch had to be drawn smaller than it is (close by), and faded right next to the camera.
    vA = smoothstep(500.0, 1500.0, dist) * min(1.0, gl_PointSize / px * 1.5 + 0.2) * patchAt(normalize(c));
    vForward = pow(max(dot(normalize(c - cameraPosition), uSun), 0.0), 6.0);
    float along = dot(c, uSun);
    vLit = along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
  }
`,Qb=`
  precision highp float;
  uniform vec3 uRamp[5], uSunCol, uZenith;
  uniform float uSheetA;
  in float vA, vLit, vForward;
  out vec4 outColor;
  void main() {
    vec2 q = gl_PointCoord - 0.5;
    float a = vA * exp(-dot(q, q) * 14.0) * 0.1 * uSheetA;
    if (a <= 0.0015) discard;
    vec3 frost = mix(uRamp[3], vec3(0.88, 0.96, 1.0), 0.55);
    vec3 c = frost * (uSunCol * (0.55 + 2.2 * vForward) * vLit + uZenith * 0.25);
    outColor = vec4(c * a, a * mix(0.4, 1.0, vLit));
  }
`,eE=`
  uniform sampler2D tPos;
  uniform int uSide;
  uniform float uR;
  uniform vec3 uSun;
  out float vFlash;
  ${io}
  void main() {
    vec4 P = texelFetch(tPos, ivec2(gl_VertexID % uSide, gl_VertexID / uSide), 0);
    vec3 c = P.xyz;
    vec4 view = viewMatrix * vec4(c, 1.0);
    gl_Position = projectionMatrix * view;
    float phase = fract(P.w * 91.7 + uTime * (0.002 + 0.006 * fract(P.w * 13.1)));
    float flash = pow(max(0.0, 1.0 - abs(phase - 0.5) * 60.0), 2.0);
    float along = dot(c, uSun), lit = along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
    float facing = 0.25 + 0.75 * pow(max(dot(normalize(c - cameraPosition), uSun), 0.0), 2.0);
    vFlash = flash * lit * facing * smoothstep(800.0, 2500.0, -view.z) * patchAt(normalize(c));
    gl_PointSize = vFlash > 0.01 ? 3.0 : 0.0;
  }
`,tE=`
  precision highp float;
  uniform vec3 uSunCol;
  in float vFlash;
  out vec4 outColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0, a = vFlash * max(0.0, 1.0 - d);
    if (a <= 0.01) discard;
    outColor = vec4(mix(uSunCol, vec3(1.0), 0.5) * a * 1.5, a);
  }
`,nE=`
  in vec2 aQuad;                     // along (-1 \u2026 1), across (-1 \u2026 1)
  uniform sampler2D tPos, tPrev;
  uniform int uSide;
  uniform float uR, uDt, uVents, uLife, uStrokeLen, uStrokeWide;
  uniform vec3 uSun;
  out vec2 vQ;
  out float vA, vLit, vForward;
  out vec3 vCol;
  ${io}
  void main() {
    ivec2 ij = ivec2(gl_InstanceID % uSide, gl_InstanceID / uSide);
    vec4 P = texelFetch(tPos, ij, 0);
    vec3 c = P.xyz, prev = texelFetch(tPrev, ij, 0).xyz;
    float seed = P.w;
    vec3 up = normalize(c), vel = (c - prev) / uDt;
    vec3 f = vel - up * dot(vel, up);
    float speed = length(c - prev) > 300.0 ? 0.0 : length(f);   // (a jump back to its vent is not a flow)
    f = speed > 0.01 ? f / speed : normalize(cross(uSpinAxis, up) + 1e-4);
    float h1 = fract(seed * 31.7), h2 = fract(seed * 57.3);
    float len = uStrokeLen * (0.35 + 1.3 * h1 * h1) * (0.4 + 0.6 * clamp(speed / 30.0, 0.0, 1.0));
    float wide = uStrokeWide * (0.5 + h2);
    vec3 side = normalize(cross(f, normalize(cameraPosition - c)) + 1e-5);
    vec3 w = c + f * aQuad.x * len + side * aQuad.y * wide;
    // How far along its river the glass is (0 at the vent \u2026 1 at its end): it fades in and out there, and its colour runs along it.
    float age = 0.5, hue = fract(seed * 3.3);
    if (uVents > 0.5) {
      float life = uLife * (0.6 + 0.8 * hash(vec3(seed * 2.3, 5.0, 9.0)));
      age = mod(uTime + hash(vec3(seed * 6.1, 1.0, 4.0)) * life, life) / life;
      hue = age * 0.9 + hash(vec3(floor(hash(vec3(seed * 3.7, 2.0, 6.0)) * uVents), 3.0, 3.0)) * 0.6;
    }
    vA = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(0.7, 1.0, age)) * smoothstep(250.0, 900.0, distance(c, cameraPosition)) * patchAt(up);
    vCol = mix(vec3(1.0), 0.5 + 0.5 * cos(6.2832 * (vec3(0.0, 0.33, 0.67) + hue)), 0.42);   // pastel: pearl, pink, sky blue
    vForward = pow(max(dot(normalize(c - cameraPosition), uSun), 0.0), 6.0);
    float along = dot(c, uSun);
    vLit = along > 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.03, length(c - uSun * along));
    vQ = aQuad;
    gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
  }
`,iE=`
  precision highp float;
  uniform vec3 uSunCol, uZenith;
  uniform float uStrokeAlpha;
  in vec2 vQ;
  in float vA, vLit, vForward;
  in vec3 vCol;
  out vec4 outColor;
  void main() {
    float t = abs(vQ.x);
    // Widest a third of the way along, drawn to fine points at both ends; soft across.
    float width = pow(max(0.0, 1.0 - t), 0.8) * smoothstep(0.0, 0.25, 1.0 - t + 0.05);
    // Across: a faint halo round a sharp, bright core line (glass catching the light).
    float y = abs(vQ.y) / max(width, 0.02);
    float halo = exp(-y * y * 4.0), core = exp(-y * y * 60.0);
    float along = 1.0 - t * t;
    float a = vA * along * (halo * 0.5 + core) * uStrokeAlpha;
    if (a < 0.002) discard;
    vec3 c = vCol * (uSunCol * (0.6 + 1.6 * vForward) * vLit + uZenith * 0.25 + 0.06) * (0.8 + 0.7 * core);
    outColor = vec4(c * a, a);
  }
`,Aa=class{constructor(e,t,n,i=Yb){this.renderer=e;this.params=i;let r=i.side,o=r*r,a=Qs(5),l=Se.MathUtils.degToRad(i.magTilt);this.frame=new Se.Matrix3().set(1,0,0,0,Math.sin(l),Math.cos(l),0,Math.cos(l),-Math.sin(l));let c=new Se.Vector3(0,Math.cos(l),-Math.sin(l)),h=c.clone();this.spinAxis=h;let u=Qs(9),[d,f]=this.axisFrame(),m=new Se.Vector3(Math.cos(.35),Math.sin(.35),0);this.storms=Array.from({length:cs},(P,N)=>{let H=N===0?Math.asin(m.dot(h)):(u()-.5)*1.6,W=N===0?Math.atan2(m.dot(f),m.dot(d)):u()*Math.PI*2,X=u();return{lat:H,lon:W,w:N===0?.03:.004+.022*X*X,spin:(N===0||u()>.35?1:-1)*(.7+.6*u()),drift:N===0?1e-5:(.5+u())*12e-5}});let v=new Float32Array(o*4),g=new Float32Array(o*4),p=new Float32Array(o*4),x=[0,1,2,3].map(()=>new Float32Array(o*4));for(let P=0;P<o;P++){let N=new Se.Vector3(a()-.5,a()-.5,a()-.5).normalize().multiplyScalar(Yf);v.set([N.x,N.y,N.z,a()],P*4),g.set([3+a()**3*75,a()*Math.PI*2,a(),0],P*4);let H=new Se.Vector3(a()-.5,a()-.5,a()-.5).normalize();p.set([H.x,H.y,H.z,(.008+.05*a()**2)*(a()<.5?1:-1)],P*4);let W=Ta(a);for(let X=0;X<nn;X++){let O=W[Math.min(X,W.length-1)];x[X>>1][P*4+(X&1)*2]=O[0],x[X>>1][P*4+(X&1)*2+1]=O[1]}}this.start=new Se.DataTexture(v,r,r,Se.RGBAFormat,Se.FloatType),this.start.needsUpdate=!0;let _=()=>new Se.WebGLRenderTarget(r,r,{type:Se.FloatType,minFilter:Se.NearestFilter,magFilter:Se.NearestFilter,depthBuffer:!1});this.targets=[_(),_()],this.simU={tPos:{value:null},uDt:{value:2},uStep:{value:0},uStir:{value:0},uLayers:{value:1},uGrav:{value:1},uMag:{value:1},uShape:{value:0},uFlat:{value:1},uBelts:{value:0},uSpin:{value:1},uBias:{value:0},uSwirl:{value:1},uChaos:{value:0},uCover:{value:1},uVents:{value:0},uLife:{value:900},uTime:{value:0},uKinds:{value:Zb.map(([P,N,H])=>new Se.Vector4(P,N,H,0))},uMagAxis:{value:c},uCrossAxis:{value:new Se.Vector3(1,0,0)},uSpinAxis:{value:h},uStorms:{value:this.storms.map(P=>new Se.Vector4(P.lat,P.lon,P.w,P.spin))},uStormDrift:{value:this.storms.map(P=>P.drift)}},this.quad=new to(new Se.ShaderMaterial({glslVersion:Se.GLSL3,uniforms:this.simU,fragmentShader:$b,vertexShader:"out vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"})),this.uniforms={...n,tPos:{value:this.targets[0].texture},tPrev:{value:this.targets[0].texture},uSide:{value:r},uTime:{value:0},uR:{value:t},uProj:{value:600},uSheet:{value:120},uSheetA:{value:1}},this.reset();let y=new Se.InstancedBufferGeometry;y.setAttribute("position",new Se.Float32BufferAttribute(new Float32Array((nn+1)*3),3)),y.setAttribute("aCorner",new Se.Float32BufferAttribute(Array.from({length:nn+1},(P,N)=>N),1));let T=[];for(let P=0;P<nn;P++)T.push(0,1+P,1+(P+1)%nn);y.setIndex(T),y.setAttribute("iSpin",new Se.InstancedBufferAttribute(p,4)),y.setAttribute("iSize",new Se.InstancedBufferAttribute(g,4)),x.forEach((P,N)=>y.setAttribute(`iC${N}`,new Se.InstancedBufferAttribute(P,4))),y.instanceCount=o;let E={transparent:!0,depthWrite:!1,depthTest:!0,blending:Se.CustomBlending,blendSrc:Se.OneFactor,blendDst:Se.OneMinusSrcAlphaFactor},R=new Se.Mesh(y,new Se.ShaderMaterial({glslVersion:Se.GLSL3,...E,side:Se.DoubleSide,uniforms:{...this.simU,...this.uniforms,uColourBy:this.colourBy,uBlades:this.look.blades,uGiants:this.look.giants,uIris:this.look.iris},vertexShader:Kb,fragmentShader:Wh}));R.frustumCulled=!1;let C=new Se.BufferGeometry;C.setAttribute("position",new Se.Float32BufferAttribute(new Float32Array(o*3),3));let S=(P,N,H)=>{let W=new Se.Points(C,new Se.ShaderMaterial({glslVersion:Se.GLSL3,...E,uniforms:{...this.simU,...this.uniforms},vertexShader:P,fragmentShader:N}));return W.frustumCulled=!1,W.renderOrder=H,W},b=new Se.InstancedBufferGeometry;b.setAttribute("position",new Se.Float32BufferAttribute(new Float32Array(12),3)),b.setAttribute("aQuad",new Se.Float32BufferAttribute([-1,-1,1,-1,-1,1,1,1],2)),b.setIndex([0,1,2,2,1,3]),b.instanceCount=o,this.strokes=new Se.Mesh(b,new Se.ShaderMaterial({glslVersion:Se.GLSL3,...E,side:Se.DoubleSide,vertexShader:nE,fragmentShader:iE,uniforms:{...this.simU,...this.uniforms,uStrokeLen:{value:480},uStrokeWide:{value:9},uStrokeAlpha:{value:.17}}})),this.strokes.frustumCulled=!1,this.pieces=R,this.mesh=new Se.Group().add(S(Jb,Qb,-1),R,this.strokes,S(eE,tE,1))}renderer;params;mesh;colourBy={value:0};look={blades:{value:0},giants:{value:.003},iris:{value:0}};pieces;strokes;uniforms;frame;settings={grav:1,mag:1,flat:1,belts:0,layers:1,cover:1,shape:0,spin:1,bias:.6,swirl:0,chaos:0,stir:2,blades:0,iris:0,vents:0,life:900,strokes:0};static PRESETS={ring:{grav:1,mag:1,flat:1,belts:0,layers:1,cover:1,blades:0,iris:0,vents:0,strokes:0,shape:0,spin:1,bias:.6,swirl:0,chaos:0,stir:1},jupiter:{grav:1,mag:1,flat:0,belts:1.4,layers:0,cover:1,blades:0,iris:0,vents:0,strokes:0,shape:0,spin:1,bias:0,swirl:1,chaos:.3,stir:1},sky:{grav:1,mag:.64,flat:0,belts:0,layers:.35,cover:1,shape:0,spin:1,bias:.3,swirl:1,chaos:.3,stir:1,blades:1,iris:1,vents:22,life:800,strokes:1}};targets;quad;simU;start;steps=0;spinAxis;storms;setView(e,t){this.uniforms.uProj.value=e/(2*Math.tan(Se.MathUtils.degToRad(t)/2))}reset(){let e=this.simU,t=this.settings;e.uBelts.value=t.belts,e.uFlat.value=t.flat;let n=new to(new Se.ShaderMaterial({glslVersion:Se.GLSL3,uniforms:{...this.simU,tSeed:{value:this.start}},fragmentShader:jb,vertexShader:"out vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"})),i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.targets[0]),n.render(this.renderer),this.renderer.setRenderTarget(i),n.material.dispose(),n.dispose(),this.steps=0,this.uniforms.tPos.value=this.targets[0].texture}step(e,t=2){let n=this.simU,i=this.settings,r=this.renderer.getRenderTarget();n.uDt.value=t,n.uStir.value=i.stir,n.uLayers.value=i.layers,n.uGrav.value=i.grav,n.uMag.value=i.mag,n.uShape.value=i.shape,n.uFlat.value=i.flat,n.uBelts.value=i.belts,n.uSpin.value=i.spin,n.uBias.value=i.bias,n.uSwirl.value=i.swirl,n.uChaos.value=i.chaos,n.uCover.value=i.cover,n.uVents.value=i.vents,n.uLife.value=i.life,this.look.blades.value=i.blades,this.look.iris.value=i.iris,this.strokes.visible=i.strokes>.5,this.pieces.visible=!this.strokes.visible,this.uniforms.uSheetA.value=this.strokes.visible?.3:1;for(let o=0;o<e;o++){let a=this.steps&1;n.uStep.value=this.steps%1e5,n.tPos.value=this.targets[a].texture,this.renderer.setRenderTarget(this.targets[1-a]),this.quad.render(this.renderer),this.steps++,this.uniforms.tPrev.value=this.targets[a].texture,this.uniforms.tPos.value=this.targets[1-a].texture,this.uniforms.uTime.value+=t,n.uTime.value=this.uniforms.uTime.value}this.renderer.setRenderTarget(r)}read(){let e=this.params.side,t=new Float32Array(e*e*4);return this.renderer.readRenderTargetPixels(this.targets[this.steps&1],0,0,e,e,t),t}axisFrame(){let e=new Se.Vector3().crossVectors(this.spinAxis,new Se.Vector3(.31,.87,.39)).normalize();return[e,new Se.Vector3().crossVectors(this.spinAxis,e)]}stormCentre(e){let t=this.storms[e],[n,i]=this.axisFrame(),r=t.lon-t.drift*this.time;return n.multiplyScalar(Math.cos(t.lat)*Math.cos(r)).addScaledVector(i,Math.cos(t.lat)*Math.sin(r)).addScaledVector(this.spinAxis,Math.sin(t.lat))}get time(){return this.uniforms.uTime.value}};var ye=Ht(Bt());var Ze=Ht(Bt());var Xh="watershed";function Cg(s,e,t,n){let i=780139,r=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296,o=()=>Math.sqrt(-2*Math.log(Math.max(1e-4,r())))*Math.cos(r()*Math.PI*2),a=(F=0,U=0,V=0)=>new Ze.Vector3(F,U,V),l=new Ze.Quaternion().setFromUnitVectors(a(0,0,1),t),c=(F,U,V)=>{let q=Math.imul(F,374761393)+Math.imul(U,668265263)+Math.imul(V,2147483647);return q=Math.imul(q^q>>>13,1274126177),((q^q>>>16)>>>0)/4294967296};function h(F){let U=Math.floor(F.x),V=Math.floor(F.y),q=Math.floor(F.z),ee=$=>$*$*(3-2*$),le=ee(F.x-U),Le=ee(F.y-V),We=ee(F.z-q),ve=Ze.MathUtils.lerp;return ve(ve(ve(c(U,V,q),c(U+1,V,q),le),ve(c(U,V+1,q),c(U+1,V+1,q),le),Le),ve(ve(c(U,V,q+1),c(U+1,V,q+1),le),ve(c(U,V+1,q+1),c(U+1,V+1,q+1),le),Le),We)}let u=F=>.55*h(F.clone().multiplyScalar(1/840))+.3*h(F.clone().multiplyScalar(1/290))+.15*h(F.clone().multiplyScalar(1/105)),d=[],f=[],m=[],v=[],g=(F,U,V,q,ee=0,le=12)=>{d.push(...F.clone().multiplyScalar(le).toArray()),f.push(...U),m.push(V*le,q,r()),v.push(ee)};for(let F=0;F<6500;F++){let U=a(o()*1040,o()*890,o()*610).applyQuaternion(l),V=u(U),q=U.length()/1800,ee=new Ze.Color(.77,.66,.52).lerp(new Ze.Color(.49,.33,.4),Math.min(1,q)).toArray();g(U,ee,220+r()*300,.045*Math.pow(Math.max(0,(V-.18)/.82),1.4))}for(let F=0;F<900;F++)g(a(o()*430,o()*370,o()*300).applyQuaternion(l),[.9,.8,.62],220+r()*190,.045);for(let F=0;F<2;F++){let U=e[F];for(let V=0;V<8500;V++){let q=r(),ee=U.getPointAt(q).multiplyScalar(1/12),le=U.getTangentAt(q),Le=new Ze.Vector3().crossVectors(le,t).normalize(),We=.5+.5*Math.sin(q*10+F*1.6),ve=360+360*We;ee.addScaledVector(Le,o()*ve).addScaledVector(t,o()*(380+200*We));let $=u(ee),ne=new Ze.Color(.48,.32,.41).lerp(new Ze.Color(.25,.46,.51),Ze.MathUtils.smoothstep(q,.18,.9));ne.lerp(new Ze.Color(.72,.69,.6),Math.max(0,($-.5)*.9)),g(ee,ne.toArray(),220+r()*350,.038*Ze.MathUtils.smoothstep($,.2,.72))}for(let V=0;V<3e3;V++){let q=r(),ee=U.getPointAt(q).multiplyScalar(1/12),le=U.getTangentAt(q),Le=new Ze.Vector3().crossVectors(le,t).normalize(),We=V%3-1;ee.addScaledVector(Le,240*Math.sin(q*18+F+We)+We*250+o()*110).addScaledVector(t,o()*300),g(ee,[.018,.023,.031],120+r()*200,.12*Ze.MathUtils.smoothstep(u(ee),.25,.72))}}for(let F=0;F<1700;F++){let U=r()*Math.PI*2,V=650+r()*1150,q=a(Math.cos(U)*V,Math.sin(U)*V,o()*490).applyQuaternion(l);g(q,[.023,.019,.027],120+r()*180,.09*Ze.MathUtils.smoothstep(u(q),.3,.7))}for(let F=0;F<14500;F++){let U;if(r()<.35)U=a(o()*1300,o()*1100,o()*800).applyQuaternion(l);else{let le=r()<.5?0:1,Le=r(),We=e[le],ve=We.getTangentAt(Le),$=new Ze.Vector3().crossVectors(ve,t).normalize();U=We.getPointAt(Le).multiplyScalar(1/12).addScaledVector($,o()*620).addScaledVector(t,o()*550)}let V=r(),q=V>.995?32+r()*26:V>.96?12+r()*14:2+r()*8,ee=r()<.45?[.62,.78,.87]:[.87,.78,.64];g(U,ee,q,V>.96?.7:.18+r()*.35,1)}for(let F=2;F<e.length;F++){let U=e[F],V=n.uRoute.value[F],q=new Ze.Color(.48,.32,.41).lerp(new Ze.Color(.25,.46,.51),Ze.MathUtils.smoothstep(V.z,.18,.9));for(let ee=0;ee<1800;ee++){let le=r(),Le=U.getPointAt(le),We=U.getTangentAt(le),ve=new Ze.Vector3().crossVectors(We,t).normalize();Le.addScaledVector(ve,o()*125).addScaledVector(t,o()*105);let $=.2+.8*Ze.MathUtils.smoothstep(.5+.5*Math.sin(le*15+F*1.7),.15,.85),ne=Ze.MathUtils.smoothstep(le,0,.08)*(1-Ze.MathUtils.smoothstep(le,.92,1));g(Le,q.toArray(),160+r()*180,.035*$*ne,0,1)}}let p=new Float32Array(d),x=d.length/3,_=Uint32Array.from({length:x},(F,U)=>U),y=new Float32Array(x),T=1024,E=new Uint32Array(T),R=new Uint32Array(T),C=new Uint16Array(x),S=new Ze.BufferGeometry;S.setAttribute("position",new Ze.BufferAttribute(p,3)),S.setAttribute("aColor",new Ze.Float32BufferAttribute(f,3)),S.setAttribute("aShape",new Ze.Float32BufferAttribute(m,3)),S.setAttribute("aKind",new Ze.Float32BufferAttribute(v,1)),S.setIndex(new Ze.BufferAttribute(_,1).setUsage(Ze.DynamicDrawUsage));let b={value:1e3},P=new Ze.ShaderMaterial({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ze.CustomBlending,blendSrc:Ze.OneFactor,blendDst:Ze.OneMinusSrcAlphaFactor,uniforms:{uProj:b,uTime:n.uTime,uPlanets:n.uPlanets},vertexShader:`attribute vec3 aColor,aShape;attribute float aKind;uniform float uProj,uTime;uniform vec3 uPlanets[10];varying vec3 vColor;varying float vAlpha,vKind;void main(){
      vec3 base=position/${12 .toFixed(1)};
      vec3 at=position;if(aKind<.5)at+=vec3(sin(base.y*.001+uTime*.035),cos(base.x*.0013+uTime*.027),sin(base.z*.0012+uTime*.032))*${288 .toFixed(1)};
      vec4 p=modelViewMatrix*vec4(at,1.);vColor=aColor;vKind=aKind;vAlpha=aShape.y*smoothstep(250.,1100.,length(at-cameraPosition));
      for(int j=0;j<10;j++)vAlpha*=smoothstep(570.,900.,distance(at,uPlanets[j]));
      gl_Position=projectionMatrix*p;gl_PointSize=clamp(aShape.x*uProj/max(1.,-p.z),aKind>.5?.8:1.,aKind>.5?18.:76.);}`,fragmentShader:`varying vec3 vColor;varying float vAlpha,vKind;void main(){vec2 p=(gl_PointCoord-.5)*2.;float r=length(p);if(r>1.)discard;
      float a=(vKind>.5?exp(-r*r*18.)+.15*exp(-r*r*3.):exp(-r*r*4.5)*(1.-smoothstep(.7,1.,r)))*vAlpha;
      gl_FragColor=vec4(vColor*a,a*(vKind>.5?.08:1.));}`}),N=new Ze.Points(S,P);N.renderOrder=-2,N.frustumCulled=!1,s.add(N);let H=a(1/0),W=new Ze.Quaternion,X=-100,O=0;return{count:x,get sorts(){return O},update(F,U){b.value=F;let V=n.uTime.value;if(U.position.distanceToSquared(H)<400&&U.quaternion.angleTo(W)<.006&&V-X<.8)return;U.updateMatrixWorld(!0);let q=U.matrixWorldInverse.elements,ee=1/0,le=-1/0;for(let ve=0;ve<x;ve++){let $=p[ve*3],ne=p[ve*3+1],be=p[ve*3+2];v[ve]<.5&&($+=Math.sin(p[ve*3+1]/12*.001+V*.035)*24*12,ne+=Math.cos(p[ve*3]/12*.0013+V*.027)*24*12,be+=Math.sin(p[ve*3+2]/12*.0012+V*.032)*24*12);let Pe=q[2]*$+q[6]*ne+q[10]*be+q[14];y[ve]=Pe,ee=Math.min(ee,Pe),le=Math.max(le,Pe)}E.fill(0);let Le=(T-1)/Math.max(1,le-ee);for(let ve=0;ve<x;ve++){let $=Math.min(T-1,Math.max(0,Math.floor((y[ve]-ee)*Le)));C[ve]=$,E[$]++}let We=0;for(let ve=0;ve<T;ve++)R[ve]=We,We+=E[ve];for(let ve=0;ve<x;ve++)_[R[C[ve]]++]=ve;S.index.needsUpdate=!0,H.copy(U.position),W.copy(U.quaternion),X=V,O++}}}var Zf=[[.24,.86,1],[.4,.52,1],[.77,.38,1],[1,.3,.57],[1,.66,.22],[.3,1,.67]];function $f(s){return Zf[Math.min(5,Math.floor(s*7.13%1*6))]}var qh=`
  vec3 fragmentColor(float seed){
    float k=floor(fract(seed*7.13)*6.);
    if(k<.5)return vec3(.24,.86,1.);
    if(k<1.5)return vec3(.40,.52,1.);
    if(k<2.5)return vec3(.77,.38,1.);
    if(k<3.5)return vec3(1.,.30,.57);
    if(k<4.5)return vec3(1.,.66,.22);
    return vec3(.30,1.,.67);
  }
`;function jf(s){function e(o,a){if(s.split(o).length!==2)throw Error("Native glass shader changed: "+o);s=s.replace(o,a)}e("return c + uSunCol * pow(cs, 6.0) * 0.3;","return texture(uDemoEnvironment, normalize(uDemoEnvRotation * r)).rgb * 1.4 + uSunCol * pow(cs, 60.0) * .18;"),e("vec2 dLx = dFdx(vL), dLy = dFdy(vL);",`vec2 dLx = dFdx(vL), dLy = dFdy(vL);
    vec2 dEdge = vec2(dFdx(vEdge), dFdy(vEdge));`),e("if (dot(n, V) > 0.0) n = -n;",`float determinant=dLx.x*dLy.y-dLx.y*dLy.x;
    if(abs(determinant)>1e-10){
      vec2 gradient=vec2(dEdge.x*dLy.y-dEdge.y*dLx.y,dEdge.y*dLx.x-dEdge.x*dLy.x)/determinant;
      vec3 edgeNormal=t*gradient.x+b*gradient.y;
      n=normalize(n+normalize(edgeNormal+vec3(1e-8))*(1.-smoothstep(.015,.13,vEdge))*.55);
    }
    if (dot(n, V) > 0.0) n = -n;`);let t="outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);";if(s.split(t).length!==2)throw Error("Native glass emission output changed");let n=s.indexOf("    float mirror ="),i=s.indexOf(t)+t.length;if(n<0)throw Error("Native glass reflection changed");return s=s.slice(0,n)+`
    float mirror=fract(vSeed*7.31),near=1.-smoothstep(2000.,8000.,dist);
    float pixels=1./max(fwE,1e-5),detail=smoothstep(1.2,6.,pixels);
    float rim=1.-smoothstep(.3,1.2,vEdge/max(fwE,1e-5));
    float bevel=1.-smoothstep(.015,.13,vEdge);
    vec3 tint=fragmentColor(vSeed),reflected=world(vW,r);
    float rs=max(dot(r,uSun),0.);
    float glint=pow(rs,180.)*1.8+pow(rs,24.)*.22;
    vec3 body=reflected*mix(vec3(.96),tint,.4)*(.8+.8*F)+tint*.09;
    float edgeLight=.35+.65*abs(dot(normalize(t*.65+b*.35),uSun));
    vec3 edge=mix(tint,vec3(1.),.5)*(.3+.9*edgeLight);
    vec3 glassColor=mix(body,edge,clamp(bevel*.65+rim*.35,0.,1.));
    glassColor+=uSunCol*glint*mix(.35,1.,vLit);
    glassColor=mix(glassColor,tint*.7+reflected*.3,crack*near*.15);
    // Subpixel pieces remain luminous motes; resolved pieces become clear glass.
    glassColor=mix(tint*(1.65+glint*.25),glassColor,detail);
    float a=clamp(.16+.48*F+.12*mirror+.4*rim+.15*crack*near,.12,.82);
    a=mix(.55,a,detail);
    a *= show;
    outColor = vec4(glassColor * a, a);`+s.slice(i),`uniform samplerCube uDemoEnvironment; uniform mat3 uDemoEnvRotation;
`+qh+s}function Kf(s,e){s.traverse(t=>{let n=t.material;if(!n?.fragmentShader?.includes("float fwE = fwidth(vEdge);"))return;if(n.fragmentShader.split("outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);").length!==2)throw Error("Native glass output changed");n.fragmentShader=`uniform float uDemoGlassPresence;
`+jf(n.fragmentShader).replace("outColor = vec4(glassColor * a, a);","outColor = vec4(glassColor * a, a) * uDemoGlassPresence;"),n.uniforms.uDemoGlassPresence=e,n.needsUpdate=!0;let r=t.geometry?.getAttribute("iSize");if(r){for(let o=0;o<r.count;o++)r.setX(o,Math.min(55,24+r.getX(o)*.85));r.needsUpdate=!0}n.vertexShader=n.vertexShader.replace("iSize.x * dense(ang, r, iSize.z)","iSize.x * sqrt(dense(ang, r, iSize.z))")})}var Cn=Ht(Bt());function Pg(s,e,t,n,i,r){let o=Cn.MathUtils.smoothstep,a=new Cn.Vector3,l=new Cn.Vector3,c=new Cn.Vector3,h=new Cn.Vector3;function u(v,g,p){let x=Math.max(0,Math.min(1,v))*511,_=Math.floor(x),y=(g*512+_)*4,T=(g*512+Math.min(511,_+1))*4;return p.set(Cn.MathUtils.lerp(n[y],n[T],x-_),Cn.MathUtils.lerp(n[y+1],n[T+1],x-_),Cn.MathUtils.lerp(n[y+2],n[T+2],x-_))}function d(v,g,p){let x=v*4,_=e.paths,y=e.seeds,T=_[x+1],E=i[T],R=T>1.5,C=(_[x]+g*E.x*(.92+.16*y[x]))%1;u(C,T*2+1,l).normalize(),c.crossVectors(l,r).normalize(),h.crossVectors(c,l).normalize();let S=.65*Math.sin(C*8+T*1.4)+.25*Math.sin(C*17);c.applyAxisAngle(l,S),h.applyAxisAngle(l,S);let b=Math.floor(y[x+1]*3)-1,P=.5+.5*Math.sin(C*12+T*2),N=R?1:12,H=(R?220:260+700*P*P)*N,W=b*(R?75:170+210*Math.sin(C*9+b))*N;u(C,T*2,p).addScaledVector(c,_[x+2]*H+W).addScaledVector(h,(_[x+3]*(R?85:90+160*P)+b*(R?30:95))*N);let X=o(C,0,.035)*(1-o(C,.955,1));R&&(X*=.25+.75*o(.5+.5*Math.sin(C*15+T*1.7),.15,.85));for(let O=0;O<s.length;O++)X*=o(p.distanceTo(s[O].group.position),O===E.w?530:680,O===E.w?650:1100);return X}let f=[];for(let v=0;v<t.length/2;v++)if(t[v*2]>2){let g=new Cn.Vector3;d(v,0,g)>.15&&f.push({index:v,position:g})}let m=s.map(v=>{let g=v.group.position,p=f.map(_=>({..._,distance:_.position.distanceTo(g),direction:_.position.clone().sub(g).normalize()})).sort((_,y)=>_.distance-y.distance),x=[];for(let _ of Zf){let y=p.filter(T=>$f(e.seeds[T.index*4])===_);x.push(y.find(T=>x.every(E=>E.direction.dot(T.direction)<.8))||y[0])}return{world:v,lights:x.map(_=>({index:_.index,power:.6*(1+Math.min(80,_.distance*_.distance/1e6)),color:$f(e.seeds[_.index*4]),position:new Cn.Vector3})),inverse:new Cn.Matrix4}});return{update(v){for(let g of m){let p=ls(g.world);g.inverse.copy(g.world.group.matrixWorld).invert(),g.lights.forEach((x,_)=>{let y=d(x.index,v,a);x.position.copy(a),x.fade=y,p.lightPositions.value[_].copy(a).applyMatrix4(g.inverse),p.lightColors.value[_].fromArray(x.color).multiplyScalar(x.power*y)})}},diagnostics(){return m.map(v=>({world:v.world.data.id,sources:v.lights.map((g,p)=>({index:g.index,position:g.position.toArray(),local:ls(v.world).lightPositions.value[p].toArray(),color:g.color,power:g.power,fade:g.fade}))}))}}}var Ra=(s=0,e=0,t=0)=>new ye.Vector3(s,e,t),Lg=new ye.Quaternion().setFromEuler(new ye.Euler(.32,-.16,-.3)),ep={watershed:[1400,0,350,-400],meander:[2400,0,-350,450],shoals:[3200,0,450,-380],skerries:[4200,0,-400,350],rampart:[5200,0,-250,-200],headlands:[1400,1,-400,-400],norvale:[2500,1,350,400],saltmere:[3300,1,-350,-380],ochre:[4200,1,450,350],fell:[5100,1,-350,-250]};function tr(s,e,t=0){let n=.72+1.68*Math.log(s/1e3)+e*Math.PI;return Ra(s*Math.cos(n),s*Math.sin(n)*.86,300*Math.sin(n*2)+120*Math.sin(n*3)+t).applyQuaternion(Lg).multiplyScalar(12)}function Yh(){return Ra(0,0,1).applyQuaternion(Lg)}function tp(s){let[e,t,n,i]=ep[s],r=tr(e+2,t).sub(tr(e-2,t)).normalize();return tr(e,t,n).addScaledVector(new ye.Vector3().crossVectors(r,Yh()).normalize(),i*12)}function Ca(s){let[e,t]=ep[s],n=tp(s),i=tr(e,t),r=tr(e+2,t).sub(tr(e-2,t)).normalize(),o=new ye.Vector3().crossVectors(i.clone().sub(n),r).normalize(),a=i.sub(n).projectOnPlane(o).normalize(),l=new ye.Vector3().crossVectors(o,a).normalize();return{normal:o,u:a,v:l}}var Jf=.0065,er=512,Qf=5,sE=["watershed","norvale","saltmere"],Ig=`
  uniform sampler2D uPath;
  uniform float uTime;
  uniform float uProjection;
  uniform vec3 uAxis,uPlanets[10];
  uniform vec4 uRoute[5];
  vec3 pathAt(float q,float row){
    float x=clamp(q,0.,1.)*511.,i=floor(x);
    return mix(texture(uPath,vec2((i+.5)/512.,(row+.5)/10.)).xyz,texture(uPath,vec2((min(i+1.,511.)+.5)/512.,(row+.5)/10.)).xyz,fract(x));
  }
  vec3 turn(vec3 v,vec3 a,float t){return v*cos(t)+cross(a,v)*sin(t)+a*dot(a,v)*(1.-cos(t));}
  void flowing(vec4 path,vec4 seed,out vec3 c,out vec3 T,out vec3 N,out float fade,out float q){
    vec4 route=uRoute[int(path.y+.5)];bool orbit=path.y>1.5;
    q=fract(path.x+uTime*route.x*(.92+.16*seed.x));
    T=normalize(pathAt(q,path.y*2.+1.));
    vec3 side=normalize(cross(T,uAxis));N=normalize(cross(side,T));
    float curl=.65*sin(q*8.+path.y*1.4)+.25*sin(q*17.);
    side=turn(side,T,curl);N=turn(N,T,curl);
    float lane=floor(seed.y*3.)-1.;
    float knot=.5+.5*sin(q*12.+path.y*2.);
    float scale=orbit?1.:${12 .toFixed(1)};
    float width=(orbit?220.:260.+700.*pow(knot,2.))*scale;
    float split=lane*(orbit?75.:170.+210.*sin(q*9.+lane))*scale;
    c=pathAt(q,path.y*2.)+side*(path.z*width+split)+N*((path.w*(orbit?85.:90.+160.*knot)+lane*(orbit?30.:95.))*scale);
    fade=smoothstep(0.,.035,q)*(1.-smoothstep(.955,1.,q));
    if(orbit)fade*=.25+.75*smoothstep(.15,.85,.5+.5*sin(q*15.+path.y*1.7));
    for(int j=0;j<10;j++)fade*=float(j)==route.w?smoothstep(530.,650.,distance(c,uPlanets[j])):smoothstep(680.,1100.,distance(c,uPlanets[j]));
    fade*=smoothstep(600.,1800.,distance(c,cameraPosition));
  }
  vec3 cloudColor(float q,float path,float lane){
    vec4 route=uRoute[int(path+.5)];float arm=route.y;if(path>1.5)q=route.z+(q-.5)*.22;
    vec3 pearl=vec3(.72,.69,.60),ice=vec3(.25,.46,.51),rose=vec3(.48,.32,.41);
    vec3 col=mix(rose,ice,smoothstep(.15,.9,q));
    return mix(col,pearl,.12+.17*sin(q*11.+lane*3.+arm));
  }
`;function Dg(s,e){let t=219031,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,i=()=>(n()+n()+n()-1.5)*.72,r=[0,1].map(O=>new ye.CatmullRomCurve3(Array.from({length:100},(F,U)=>tr(780+U/99*5350,O))));r.forEach(O=>{O.arcLengthDivisions=1500,O.updateArcLengths()});let o=[],a=[new ye.Vector4(Jf,0,0,-1),new ye.Vector4(Jf,1,0,-1)];for(let O of sE){let F=s.find(J=>J.data.id===O),U=ep[O][1],V=r[U],q=F.group.position,ee=0,le=1/0;for(let J=0;J<=512;J++){let Q=V.getPointAt(J/512).distanceToSquared(q);Q<le&&(le=Q,ee=J/512)}let{normal:Le,u:We,v:ve}=Ca(O),$=Math.max(.015,ee-.15),ne=Math.min(.985,ee+.15),be=V.getPointAt($),Pe=V.getPointAt(ne),Ee=[];for(let J=0;J<=96;J++){let Q=J/96,pe=-.7+Q*(Math.PI*2+1.4),ae=790+140*Math.pow(Math.abs(Q*2-1),3);Ee.push(q.clone().addScaledVector(We,Math.cos(pe)*ae).addScaledVector(ve,Math.sin(pe)*ae))}let lt=Ee[1].clone().sub(Ee[0]).normalize(),Mt=Ee.at(-1).clone().sub(Ee.at(-2)).normalize(),D=new ye.CubicBezierCurve3(be,be.clone().addScaledVector(V.getTangentAt($),500),Ee[0].clone().addScaledVector(lt,-500),Ee[0]),re=new ye.CubicBezierCurve3(Ee.at(-1),Ee.at(-1).clone().addScaledVector(Mt,500),Pe.clone().addScaledVector(V.getTangentAt(ne),-500),Pe),te=new ye.CatmullRomCurve3([...D.getPoints(32).slice(0,-1),...Ee,...re.getPoints(32).slice(1)]);te.arcLengthDivisions=2e3,te.updateArcLengths(),r.push(te),a.push(new ye.Vector4(90/te.getLength(),U,ee,s.indexOf(F))),o.push({world:O,arm:U,startQ:$,endQ:ne,normal:Le.toArray(),entry:be.toArray(),exit:Pe.toArray(),length:te.getLength(),speed:90})}let l=new Float32Array(er*Qf*2*4),c=[],h=new ye.Box3;for(let O=0;O<Qf;O++)for(let F=0;F<er;F++){let U=r[O].getPointAt(F/(er-1)),V=r[O].getTangentAt(F/(er-1));l.set([...U.toArray(),1],(O*2*er+F)*4),l.set([...V.toArray(),1],((O*2+1)*er+F)*4),F%5===0&&(O<2&&c.push(U),h.expandByPoint(U))}let u=new ye.DataTexture(l,er,Qf*2,ye.RGBAFormat,ye.FloatType);u.needsUpdate=!0;let d=new ye.DataTexture(new Float32Array([1,0,0,1e9]),1,1,ye.RGBAFormat,ye.FloatType);d.needsUpdate=!0;let f={...wa(no(25)),uSun:{value:Ra(-.5,.8,1).normalize()},uUp:{value:Ra(0,1,0)},uR:{value:0},uSpace:{value:1},uDip:{value:0},uIris:{value:.03},uDemoEnvironment:{value:e.userData.nebulaEnvironment},uDemoEnvRotation:{value:new ye.Matrix3},tDepth:{value:d},tFront:{value:d},uRes:{value:new ye.Vector2(1,1)},uInvVP:{value:new ye.Matrix4},uTime:{value:0},uProjection:{value:1},uDpr:{value:1},uPath:{value:u},uRoute:{value:a},uAxis:{value:Yh()},uPlanets:{value:s.map(O=>O.group.position)}};function m(O){let F=[],U=[];for(let V=0;V<O;V++){let q=n()<.35?2+Math.floor(n()*3):n()<.56?0:1;F.push(n(),q,i(),i()),U.push(n(),n(),n(),n())}return{paths:F,seeds:U}}let v=2e4,g=m(v),p=[],x=Array.from({length:4},()=>[]);for(let O=0;O<v;O++){let F=n(),U=F<.06?3.5+n()**2*2:F<.7?1.5+n()*2:.6+n()*1.4;p.push(U,F<.06?.55+n()*.35:.25+n()*.35);let V=Ta(n);for(let q=0;q<nn;q++)x[q>>1].push(...V[Math.min(q,V.length-1)])}let _=new ye.InstancedBufferGeometry;_.setAttribute("position",new ye.Float32BufferAttribute(new Float32Array((nn+1)*3),3)),_.setAttribute("aCorner",new ye.Float32BufferAttribute(Array.from({length:nn+1},(O,F)=>F),1));let y=[];for(let O=0;O<nn;O++)y.push(0,1+O,1+(O+1)%nn);_.setIndex(y),_.instanceCount=v;for(let[O,F,U]of[["iPath",g.paths,4],["iSeed",g.seeds,4],["iSize",p,2]])_.setAttribute(O,new ye.InstancedBufferAttribute(new Float32Array(F),U));x.forEach((O,F)=>_.setAttribute("iC"+F,new ye.InstancedBufferAttribute(new Float32Array(O),4)));let T=`
    in float aCorner;in vec4 iPath,iSeed,iC0,iC1,iC2,iC3;in vec2 iSize;
    uniform vec3 uSun;
    out vec3 vW,vN,vT;out vec2 vL;out float vEdge,vSeed,vLit,vFlowFade;out vec3 vTint;out float vTintA;
    ${Ig}
    void main(){
      vec3 c,T,N;float fade,q;flowing(iPath,iSeed,c,T,N,fade,q);
      N=turn(N,T,(iSeed.z-.5)*.65+.11*sin(uTime*.22+iSeed.w*6.2832));
      vec3 side=normalize(cross(N,T));
      int k=int(aCorner+.5);vec2 cs[9]=vec2[9](vec2(0.),iC0.xy,iC0.zw,iC1.xy,iC1.zw,iC2.xy,iC2.zw,iC3.xy,iC3.zw);vec2 p=cs[k];
      vW=c+(T*p.x+side*p.y*iSize.y)*iSize.x;vN=N;vT=T;vL=p;vEdge=k==0?1.:0.;vSeed=iSeed.x;
      float pixels=2.*iSize.x*uProjection/max(1.,-(viewMatrix*vec4(c,1.)).z);
      vTint=cloudColor(q,iPath.y,iSeed.y);vTintA=.85;vLit=.78+.22*abs(dot(N,uSun));vFlowFade=fade*.5*smoothstep(.9,4.5,pixels);
      gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);
      if(vFlowFade<.001)gl_Position=vec4(2.,2.,2.,1.);
    }`;if(Wh.split("a *= show;").length!==2)throw Error("Native glass fragment changed");let E=`in float vFlowFade;
`+jf(Wh).replace("a *= show;","a *= show * vFlowFade * .72;"),R=new ye.ShaderMaterial({glslVersion:ye.GLSL3,uniforms:f,vertexShader:T,fragmentShader:E,transparent:!0,side:ye.DoubleSide,depthTest:!0,depthWrite:!1,blending:ye.CustomBlending,blendSrc:ye.OneFactor,blendDst:ye.OneMinusSrcAlphaFactor}),C=new ye.Mesh(_,R);C.frustumCulled=!1,e.add(C);let S=new ye.BufferGeometry;S.setAttribute("position",new ye.Float32BufferAttribute(new Float32Array(v*3),3));for(let[O,F,U]of[["iPath",g.paths,4],["iSeed",g.seeds,4],["iSize",p,2]])S.setAttribute(O,new ye.Float32BufferAttribute(F,U));let b=new ye.ShaderMaterial({uniforms:f,glslVersion:ye.GLSL3,transparent:!0,depthTest:!0,depthWrite:!1,blending:ye.CustomBlending,blendSrc:ye.OneFactor,blendDst:ye.OneMinusSrcAlphaFactor,vertexShader:`in vec4 iPath,iSeed;in vec2 iSize;uniform float uDpr;out vec3 vColor;out float vAlpha;${Ig}${qh}
      void main(){vec3 c,T,N;float fade,q;flowing(iPath,iSeed,c,T,N,fade,q);vec4 p=viewMatrix*vec4(c,1.);
        float pixels=2.*iSize.x*uProjection/max(1.,-p.z),lod=smoothstep(.9,4.5,pixels);
        vColor=fragmentColor(iSeed.x);vAlpha=fade*(.025*(1.-lod)+.18*smoothstep(.7,3.,pixels));
        gl_Position=projectionMatrix*p;gl_PointSize=clamp(max(100.,iSize.x*5.)*uProjection/max(1.,-p.z),2.,38.)*uDpr;}`,fragmentShader:`in vec3 vColor;in float vAlpha;out vec4 outColor;void main(){vec2 p=2.*gl_PointCoord-1.;float r=dot(p,p);if(r>1.||vAlpha<.0001)discard;
      float a=exp(-r*4.5)*(1.-smoothstep(.6,1.,r))*vAlpha;outColor=vec4(vColor*a,a);}`}),P=new ye.Points(S,b);P.frustumCulled=!1,P.renderOrder=-1,e.add(P);let N=Cg(e,r,Yh(),f),H=Pg(s,g,p,l,a,Yh()),W=new ye.Vector2,X=c.map(O=>c.reduce((F,U)=>F+Math.exp(-O.distanceToSquared(U)/(9e5*12**2)),0));return{bounds:h,count:v,dustCount:v,volumeCount:N.count,samples:c,links:o,lighting:H,get time(){return f.uTime.value},get sorts(){return N.sorts},update(O,F,U){f.uTime.value+=U,H.update(f.uTime.value),O.getDrawingBufferSize(W);let V=W.y/(2*Math.tan(ye.MathUtils.degToRad(F.fov/2)));f.uDpr.value=O.getPixelRatio(),f.uProjection.value=V/O.getPixelRatio(),N.update(V,F)},probes(O){return[.18,.33,.52,.69,.84].map((F,U)=>{let V=(F+f.uTime.value*Jf)%1;return r[U%2].getPointAt(V).project(O).toArray()})},skyAnchor(O){let F=0,U=-1/0;for(let ee=0;ee<c.length;ee++){let le=c[ee].distanceTo(O.group.position);if(le<950)continue;let Le=X[ee]/(le+800);Le>U&&(U=Le,F=ee)}let V=c[F].clone().sub(O.group.position).normalize(),q=new ye.Vector3().crossVectors(V,Ra(0,1,0)).normalize();return V.applyAxisAngle(q,.65).applyQuaternion(O.group.quaternion.clone().invert())},sight(O,F,U){let V=null,q=-1/0;for(let ee=0;ee<c.length;ee++){let le=c[ee].clone().sub(O),Le=le.length();le.normalize();let We=le.dot(F);if(We<.12)continue;let ve=le.dot(U)*.18-Math.abs(We-.3)+X[ee]*.04-Le/4e4;ve>q&&(q=ve,V=le)}return V?O.clone().addScaledVector(V,100):null}}}var Rt=Ht(Bt());function np(s,e){let t=new Rt.SphereGeometry(10,32,24),n="varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",i=new Rt.ShaderMaterial({side:Rt.BackSide,depthWrite:!1,vertexShader:n,fragmentShader:`varying vec3 vDir;
    float hash(vec3 p){p=fract(p*.3183099+vec3(.17,.31,.43));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
    float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    float fbm(vec3 p){float s=0.,a=.54;for(int i=0;i<5;i++){s+=a*noise(p);p=mat3(.00,.80,.60,-.80,.36,-.48,-.60,-.48,.64)*p*2.03+vec3(9.3,3.1,6.7);a*=.48;}return s;}
    void main(){
      vec3 d=normalize(vDir),p=d*3.2+vec3(7.3,11.4,2.1);
      vec3 warp=vec3(fbm(p+1.7),fbm(p+18.2),fbm(p-7.1));
      float field=fbm(p+warp*2.8),filaments=fbm(p*3.7+warp*4.2);
      float belt=pow(max(0.,1.-abs(dot(d,normalize(vec3(.45,.82,-.32)))+.24*(warp.x-.5))),2.);
      float cloud=smoothstep(.24,.68,field)*(.48+.52*belt);
      float hue=smoothstep(.28,.68,fbm(p*.57+14.));
      vec3 gas=mix(vec3(.12,.28,.43),vec3(.43,.19,.33),hue);
      float pearl=smoothstep(.52,.73,filaments)*smoothstep(.46,.65,field);
      gas=mix(gas,vec3(.66,.55,.43),pearl*.72);
      float lanes=smoothstep(.42,.69,fbm(p*2.1+warp*4.));
      vec3 color=vec3(.024,.035,.065)+gas*cloud*1.25;
      color*=1.-lanes*cloud*.70;
      color+=vec3(.12,.15,.20)*pow(cloud,3.)*.25;
      gl_FragColor=vec4(color,1.);
    }`}),r=new Rt.Scene,o=new Rt.Mesh(t,i);r.add(o);let a=new Rt.WebGLCubeRenderTarget(512,{generateMipmaps:!0,minFilter:Rt.LinearMipmapLinearFilter,magFilter:Rt.LinearFilter}),l=new Rt.CubeCamera(.1,20,a),c=s.getRenderTarget();l.update(s,r),s.setRenderTarget(c),t.dispose(),i.dispose(),r.clear(),e.userData.nebulaEnvironment=a.texture;let h=new Rt.Mesh(new Rt.SphereGeometry(1e6,40,24),new Rt.ShaderMaterial({side:Rt.BackSide,depthWrite:!1,depthTest:!1,uniforms:{uSky:{value:a.texture}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position.z=gl_Position.w;}",fragmentShader:"varying vec3 vDir;uniform samplerCube uSky;void main(){gl_FragColor=vec4(textureCube(uSky,normalize(vDir)).rgb,1.);}"}));h.renderOrder=-100,h.frustumCulled=!1;let u=new Rt.Group;u.renderOrder=-1e3,u.add(h),e.add(u)}var Zh=.1,ip=4e3,sp=1/30,Ug=1.8,so={watershed:{pattern:"Broken broad arcs",ring:4200,tilt:28,turn:.25,mood:25,narrow:!0,linked:!0,bands:[[6300,6900,.45],[7200,8100,.28]]},shoals:{pattern:"Latitude ribbons",sky:96,motionRate:10,preset:"jupiter",tilt:38,turn:.4,mood:28,cover:.85,field:{belts:1.8,flat:0,shape:.15,swirl:.7}},ochre:{pattern:"Separated twin rings",ring:3800,tilt:64,turn:-.5,mood:18,narrow:!0,bands:[[5800,6100,.8],[8700,9e3,.65]]},norvale:{pattern:"Fine single ring",ring:3200,tilt:17,turn:.9,mood:25,narrow:!0,linked:!0,bands:[[6900,7140,.8]]},meander:{pattern:"Twisting belt",sky:96,motionRate:8,tilt:67,turn:1.1,mood:20,cover:.68,field:{flat:.65,belts:.3,shape:.8,swirl:1.6,spin:.8}},rampart:{pattern:"Crossed orbits",ring:1800,tilt:22,turn:1.6,mood:15,narrow:!0,bands:[[6500,6900,.65]],layers:[22,108]},skerries:{pattern:"Scattered fragment clusters",sky:96,motionRate:10,tilt:15,turn:2.3,mood:30,cover:.44,field:{flat:0,shape:.2,layers:.6,swirl:1.8,vents:10}},saltmere:{pattern:"Concentric fine bands",ring:4400,tilt:41,turn:-.4,mood:25,narrow:!0,linked:!0,bands:[[6e3,6160,.5],[6750,6900,.75],[7530,7710,.65],[8450,8600,.5]]},headlands:{pattern:"Polar fan",ring:1300,tilt:72,turn:2.8,mood:24,narrow:!0,bands:[[6900,7500,.5]],layers:[72,104,136]},fell:{pattern:"Spherical halo",sky:96,motionRate:7,tilt:0,turn:.8,mood:30,cover:1,field:{flat:0,belts:0,shape:0,swirl:.35,chaos:.1,layers:0,vents:0}}},nr=(s=0,e=0,t=0)=>new mt.Vector3(s,e,t);function Fg(s,e){let t=[],n=new mt.Vector2,i=new mt.Quaternion,r=new mt.Frustum,o=new mt.Matrix4,a=new mt.DataTexture(new Float32Array([1,0,0,1e9]),1,1,mt.RGBAFormat,mt.FloatType);a.needsUpdate=!0;let l=0,c=!1;async function h(v,g){for(let p of v){let x=so[p.data.id],_=new mt.Scene,y=new mt.PerspectiveCamera,T=p.group.quaternion.clone().multiply(new mt.Quaternion().setFromAxisAngle(nr(0,1,0),x.turn));if(x.linked){let b=mt.MathUtils.degToRad(x.tilt);T.setFromUnitVectors(nr(0,Math.cos(b),-Math.sin(b)),Ca(p.data.id).normal)}let E=no(x.mood),R=nr(.65,.65,1).normalize(),C={...wa(E),uSun:{value:R},uUp:{value:nr(0,1,0)},uDip:{value:0},uSpace:{value:1},uDemoEnvironment:{value:e.userData.nebulaEnvironment},uDemoEnvRotation:{value:new mt.Matrix3().setFromMatrix4(new mt.Matrix4().makeRotationFromQuaternion(T))},tDepth:{value:a},tFront:{value:a},uInvVP:{value:new mt.Matrix4},uRes:{value:new mt.Vector2(1,1)}},S={world:p,scene:_,camera:y,orientation:T,shared:C,presence:{value:.03},extent:x.ring?1160:880};if(t.push(S),x.ring&&(S.rings=(x.layers||[x.tilt]).map((b,P)=>{let N=new Vh(ip,C,{count:Math.round(x.ring*Ug),tilt:b,speed:1e3+P*190,bands:x.bands}),H=N.mesh.children[0];return H.visible=!1,Kf(N.mesh,S.presence),N.mesh.traverse(W=>{W.material&&(W.material.depthTest=!0)}),N.advance(p.data.seed%260+P*37),_.add(N.mesh),N}),S.ring=S.rings[0]),x.sky){S.sim=new Aa(s,ip,C,{side:x.sky,magTilt:x.tilt}),Object.assign(S.sim.settings,Aa.PRESETS[x.preset||"sky"],{cover:x.cover,vents:14,life:500,spin:.7,strokes:0,blades:0,mag:.66,iris:.12},x.field),S.sim.look.giants.value=0,Kf(S.sim.mesh,S.presence),S.sim.uniforms.uSheet.value=110,S.sim.reset(),_.add(S.sim.mesh);for(let b=0;b<12;b++)S.sim.step(30,2),S.sim.uniforms.uSheetA.value=.055,await new Promise(P=>setTimeout(P,0));S.sim.settings.stir=0,S.stepClock=0}if(S.sights=[],S.ring)for(let b=0;b<96;b++){let P=b/96*Math.PI*2;S.sights.push(nr(Math.cos(P)*8100,Math.sin(P)*8100,0).applyMatrix3(S.ring.frame))}else if(S.sim){let b=S.sim.read();for(let P=0;P<b.length;P+=244)S.sights.push(nr(b[P],b[P+1],b[P+2]))}await s.compileAsync(_,y),g(),await new Promise(b=>setTimeout(b,0))}}function u(v,g){let p=v.camera;i.copy(v.orientation).invert(),p.position.copy(g.position).sub(v.world.group.position).applyQuaternion(i).multiplyScalar(1/Zh),p.quaternion.copy(i).multiply(g.quaternion),p.fov=g.fov,p.aspect=g.aspect,p.near=g.near/Zh,p.far=g.far/Zh,p.zoom=g.zoom,p.updateProjectionMatrix(),p.updateMatrixWorld(!0);let x=v.shared;return x.uUp.value.copy(p.position).normalize(),x.uDip.value=-Math.sqrt(Math.max(0,1-(ip/p.position.length())**2)),x.uSpace.value=1,x.uInvVP.value.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse).invert(),p}function d(v,g,p,x){if(!t.length)return;let _=x&&!c?Math.min(p,.1):0;l+=_,s.getDrawingBufferSize(n),o.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),r.setFromProjectionMatrix(o);let y=t.filter(E=>E.world.angularDiameter>16&&r.intersectsSphere(new mt.Sphere(E.world.group.position,E.extent)));y.sort((E,R)=>R.world.group.position.distanceToSquared(v.position)-E.world.group.position.distanceToSquared(v.position));let T=s.autoClear;s.autoClear=!1;for(let E of y){let R=u(E,v);E.presence.value=.78*mt.MathUtils.smoothstep(E.world.angularDiameter,16,200);for(let C of E.rings||[])C.advance(_);if(E.sim){if(g===E.world&&_>0){E.stepClock=Math.min(.1,E.stepClock+_);let C=Math.min(3,Math.floor((E.stepClock+1e-7)/sp));C&&(E.sim.step(C,sp*(so[E.world.data.id].motionRate||8)),E.stepClock=Math.max(0,E.stepClock-C*sp),E.sim.uniforms.uSheetA.value=.055)}E.sim.setView(n.y,R.fov)}s.render(E.scene,R)}s.autoClear=T}function f(v,g,p,x){let _=t.find(E=>E.world===v),y=null,T=-1/0;for(let E of _?.sights||[]){let C=E.clone().multiplyScalar(Zh).applyQuaternion(_.orientation).add(v.group.position).sub(g).normalize(),S=C.dot(p);if(S<.22)continue;let b=C.dot(x)*.55-Math.abs(S-.48);b>T&&(T=b,y=C)}return g.clone().addScaledVector(y||p,100)}function m(v){let g=t.find(_=>_.world.data.id===v);if(!g?.sim)return[];let p=g.sim.read(),x=[];for(let _=0;_<p.length;_+=212){let y=nr(p[_],p[_+1],p[_+2]).project(g.camera);x.push(y.toArray())}return x}return{prepare:h,draw:d,profiles:so,sight:f,probes:m,diagnostics(){return t.map(v=>({world:v.world.data.id,pattern:so[v.world.data.id].pattern,rings:v.rings?.length||0,giants:v.sim?.look.giants.value||0,blades:v.sim?.settings.blades||0,panes:0,motionRate:so[v.world.data.id].motionRate||1,particles:v.sim?v.sim.params.side**2:(so[v.world.data.id].ring||0)*Ug*(v.rings?.length||0)}))},setPaused(v){c=v},get time(){return l},get count(){return t.length}}}var zt=Ht(Bt());function Ng(s,e){let t=[],n=[],i=[];for(let h of s){t.push(...h.group.position.toArray());let u=h.data.id===Xh;n.push(...u?[1,.95,.82]:h.data.warmth>.2?[.88,.82,.72]:[.74,.84,.9]),i.push(u?1:h.data.id==="norvale"?.8:h.data.id==="meander"?.7:.4)}let r=new zt.BufferGeometry;r.setAttribute("position",new zt.Float32BufferAttribute(t,3)),r.setAttribute("aColor",new zt.Float32BufferAttribute(n,3)),r.setAttribute("aStrength",new zt.Float32BufferAttribute(i,1));let o={uProj:{value:1},uDpr:{value:1}},a=new zt.ShaderMaterial({uniforms:o,transparent:!0,depthTest:!0,depthWrite:!1,blending:zt.CustomBlending,blendSrc:zt.OneFactor,blendDst:zt.OneMinusSrcAlphaFactor,vertexShader:`attribute vec3 aColor;attribute float aStrength;uniform float uProj,uDpr;varying vec3 vColor;varying float vAlpha;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);float pixels=800.*uProj/max(1.,-p.z);
        vColor=aColor;vAlpha=aStrength*(1.-smoothstep(10.,28.,pixels));
        p.z+=min(550.,max(0.,-p.z*.2));gl_Position=projectionMatrix*p;gl_PointSize=(18.+aStrength*6.)*uDpr;}`,fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){vec2 p=2.*gl_PointCoord-1.;float r=dot(p,p);if(r>1.||vAlpha<.001)discard;
      float a=(exp(-r*35.)+.16*exp(-r*9.))*(1.-smoothstep(.7,1.,r))*vAlpha;gl_FragColor=vec4(vColor*a,a*.65);}`}),l=new zt.Points(r,a);l.frustumCulled=!1,l.renderOrder=3,e.add(l);let c=new zt.Vector3;return{update(h,u,d){let f=u/(2*Math.tan(zt.MathUtils.degToRad(h.fov/2)));o.uProj.value=f,o.uDpr.value=d;for(let m of s){c.copy(m.group.position).applyMatrix4(h.matrixWorldInverse),m.screenDiameter=c.z<0?800*f/-c.z:0;let v=h.position.distanceTo(m.group.position);m.angularDiameter=800*f/Math.max(1,v),m.frameCoverage=800*f/Math.sqrt(Math.max(1,v*v-400*400))/Math.min(u,u*h.aspect);let g=ls(m);g.reveal.value=zt.MathUtils.smoothstep(m.frameCoverage,.75,1.12),g.glass.value=zt.MathUtils.smoothstep(m.angularDiameter,16,200),m.group.visible=v<1600||(m.group.visible?m.screenDiameter>10:m.screenDiameter>12)}}}}var hs=Ht(Bt());async function rp(s,e,t,n){let i=new hs.Scene,r=new hs.PerspectiveCamera(40,1,1,5e3),o=[];if(r.position.set(0,0,1800),r.lookAt(0,0,0),r.updateMatrixWorld(!0),e.traverse(l=>{if(l.isMesh&&(!l.userData.isMeshOverlay||l.visible)){let c=new hs.Mesh(l.geometry,l.material);c.frustumCulled=!1,i.add(c),o.push(c)}}),await s.compileAsync(i,r,t),!n())return!1;let a=new hs.WebGLRenderTarget(32,32,{stencilBuffer:!0});for(let l of o)l.visible=!1;try{for(let l=0;l<o.length;l+=4){if(await new Promise(requestAnimationFrame),!n())return!1;for(let h=l;h<Math.min(l+4,o.length);h++)o[h].visible=!0;let c=s.getRenderTarget();try{s.setRenderTarget(a),s.render(i,r)}finally{s.setRenderTarget(c)}for(let h=l;h<Math.min(l+4,o.length);h++)o[h].visible=!1}return!0}finally{a.dispose(),i.clear()}}var _t=Ht(Bt());function Og(s){let t=new Float32Array(10800),n=new Float32Array(3600*2),i=89711,r=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<n.length;f++)n[f]=r();let o=new _t.InstancedBufferGeometry;o.setAttribute("position",new _t.Float32BufferAttribute([-1,0,0,1,0,0,-1,1,0,1,1,0],3)),o.setIndex([0,1,2,2,1,3]),o.setAttribute("aPoint",new _t.InstancedBufferAttribute(t,3)),o.setAttribute("aSeed",new _t.InstancedBufferAttribute(n,2)),o.instanceCount=3600;let a={uPreviousVP:{value:new _t.Matrix4},uViewport:{value:new _t.Vector2(1280,820)},uExposure:{value:1},uStrength:{value:0}},l=new _t.ShaderMaterial({uniforms:a,transparent:!0,depthWrite:!1,depthTest:!0,blending:_t.CustomBlending,blendSrc:_t.OneFactor,blendDst:_t.OneFactor,vertexShader:`attribute vec3 aPoint;attribute vec2 aSeed;uniform mat4 uPreviousVP;uniform vec2 uViewport;uniform float uExposure,uStrength;
      varying vec2 vUv;varying vec3 vColor;varying float vAlpha;
      void main(){vec4 view=viewMatrix*vec4(aPoint,1.),clip=projectionMatrix*view,old=uPreviousVP*vec4(aPoint,1.);
        vec2 head=clip.xy/max(.01,clip.w),prior=old.xy/max(.01,old.w),motion=(head-prior)*uViewport*.5;
        float speed=length(motion),extent=clamp(speed*uExposure,1.4,mix(35.,120.,uStrength));
        vec2 along=speed>.0001?motion/speed:vec2(0.,1.),across=vec2(-along.y,along.x);
        vec2 offset=across*position.x*(.65+.65*aSeed.x)-along*position.y*extent;
        clip.xy+=2.*offset/uViewport*clip.w;gl_Position=clip;
        vUv=position.xy;vColor=mix(vec3(.45,.69,.8),vec3(.93,.87,.73),aSeed.y);
        vAlpha=uStrength*(.17+.56*aSeed.x)*smoothstep(80.,600.,-view.z)*(1.-smoothstep(14000.,42000.,-view.z));
        if(view.z> -1.||old.w<1.){gl_Position=vec4(2.,2.,2.,1.);vAlpha=0.;}}`,fragmentShader:"varying vec2 vUv;varying vec3 vColor;varying float vAlpha;void main(){float a=exp(-vUv.x*vUv.x*3.5)*pow(1.-vUv.y,1.5)*vAlpha;if(a<.001)discard;gl_FragColor=vec4(vColor*a,a);}"}),c=new _t.Mesh(o,l);c.frustumCulled=!1,c.visible=!1,c.renderOrder=4,s.add(c);let h=new _t.Matrix4,u=new _t.Vector3,d=0;return{get strength(){return a.uStrength.value},get speed(){return d},begin(f,m){let v=f.position.clone(),g=m.clone().sub(v),p=g.length();g.normalize();let x=new _t.Vector3().crossVectors(g,f.up).normalize(),_=new _t.Vector3().crossVectors(x,g).normalize();for(let y=0;y<3600;y++){let T=r(),E=r()*Math.PI*2,R=(500+Math.pow(r(),.55)*8500)*(.45+.55*(1-T));v.clone().addScaledVector(g,250+T*Math.max(100,p-1550)).addScaledVector(x,Math.cos(E)*R).addScaledVector(_,Math.sin(E)*R).toArray(t,y*3)}o.attributes.aPoint.needsUpdate=!0,h.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),u.copy(f.position),d=0},update(f,m,v,g){if(!v?.cinematic){c.visible=!1,a.uStrength.value=0;return}if(!g)return;let p=u.distanceTo(f.position)/Math.max(.001,m);d=_t.MathUtils.lerp(d,p,1-Math.exp(-m*9));let x=v.progress,_=_t.MathUtils.smoothstep(x,.025,.14)*(1-_t.MathUtils.smoothstep(x,.72,.88));a.uStrength.value=.85*_*_t.MathUtils.smoothstep(d,1400,22e3),c.visible=a.uStrength.value>.002,a.uPreviousVP.value.copy(h),a.uViewport.value.set(innerWidth,innerHeight),a.uExposure.value=.065/Math.max(.008,m),h.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),u.copy(f.position)}}}var Jn=document.querySelector("#sky"),bi=document.querySelector("#status"),rE=document.querySelector("#nav"),Wi=document.querySelector("#tip"),oE=document.querySelector("#hint"),kg=document.querySelector("#wire"),Hg=document.querySelector("#water"),us=!0,Xi=!1,qt=new ze.WebGLRenderer({canvas:Jn,antialias:!0,stencil:!0,alpha:!1,powerPreference:"high-performance"});qt.outputColorSpace=ze.SRGBColorSpace;var Vn=new ze.Scene;Vn.background=new ze.Color("#12202e");var ds=Fg(qt,Vn);np(qt,Vn);var ir=Og(Vn);qt.info.autoReset=!1;var Ae=new ze.PerspectiveCamera(34,1,1,2e6),fn=400,li=(s=0,e=0,t=0)=>new ze.Vector3(s,e,t),aE=li(0,0,1),rn=[],Ia=new ze.Raycaster,Ut=li(),kt,at="space",He=null,Dt=null,Gt=null,Pa=null,cp=null,Tt=null,lE=null,hp=0,Vg=1,Pn=null,Si=null,Da="",op=0,oo=null,cE=matchMedia("(prefers-reduced-motion: reduce)").matches,In=!0,La=0,$h=0,Mn=null,Gg=null,sn=null,qi="none",ro=new ze.Quaternion,hE=li(0,1,0),Wg=new URLSearchParams(location.search).has("diagnostics");Wg&&(window.__fragmentMotionProbes=s=>ds.probes(s));function pn(){hp||(hp=requestAnimationFrame(dE))}function uE(s){if(s)for(let e of rn){if(Tt&&e===He&&!Tt.cinematic)continue;let t=e.spinRate*s;if(e.spinAngle+=t,ro.setFromAxisAngle(e.spinAxis,t),e.group.quaternion.premultiply(ro).normalize(),e.group.updateMatrixWorld(!0),e===He&&at==="place"){let n=e.group.position;Ae.position.sub(n).applyQuaternion(ro).add(n),Ut.sub(n).applyQuaternion(ro).add(n),Ae.up.applyQuaternion(ro),Ae.quaternion.premultiply(ro).normalize(),Ae.updateMatrixWorld(!0),kt&&(kt.target.copy(Ut),kt._quat.setFromUnitVectors(Ae.up,hE),kt._quatInverse.copy(kt._quat).invert())}}}function dE(s){hp=0;let e=performance.now(),t=La?Math.min((s-La)/1e3,.1):0;if(La=s,uE(In&&!document.hidden?t:0),sn?.phase==="hold"&&In&&!document.hidden&&(sn.elapsed+=t,sn.elapsed>=1.6&&(sn.warmed||sn.elapsed>12)&&(sn.phase="flight",qi="flight",document.documentElement.dataset.intro=qi,fs(sn.world,{cinematic:!0,opening:!0}))),Tt&&fE(s,t),Dt==="surface"&&Gt&&!Tt){let n=He.group.worldToLocal(Ut.clone()).normalize(),i=n.clone().multiplyScalar(fn+He.heightAt(n)),r=He.group.localToWorld(i.clone()),o=r.clone().sub(Ut);kt&&o.lengthSq()>.001&&(Ut.copy(r),kt.target.copy(r),Ae.position.add(o)),(!Si||i.distanceTo(Si)>10)&&(Si=i.clone(),Qn())}if(Dt==="sky"&&Gt&&!Tt){let n=He.group.worldToLocal(Ae.position.clone()).normalize();Si=n.clone().multiplyScalar(fn+He.heightAt(n))}if(at==="place"&&He?.heightAt){let n=He.group.worldToLocal(Ae.position.clone()),i=n.length(),r=fn+He.heightAt(n.normalize())+4;i<r&&(Ae.position.copy(He.group.localToWorld(n.multiplyScalar(r))),Ae.lookAt(Ut))}if(Ae.updateMatrixWorld(!0),Gg?.update(Ae,innerHeight,qt.getPixelRatio()),Pn&&Pn.setDetail(!!He&&(at==="place"||He.angularDiameter>(Pn.detailActive?180:260))),mE(),Xi){let n=innerHeight/(2*Math.tan(ze.MathUtils.degToRad(Ae.fov/2)));for(let i of rn){let r=i.group.worldToLocal(Ae.position.clone());i.group.traverse(o=>{if(!o.userData.isMeshOverlay)return;let a=o.geometry.boundingSphere,l=a?Math.max(1,r.distanceTo(a.center)-a.radius):1;o.visible=!(at==="place"&&o.material.uniforms.uOrbitModel.value>.5)&&o.userData.cellSize*n/l>.65})}}if(ir.update(Ae,t,Tt,In&&!document.hidden),Mn?.update(qt,Ae,In&&!document.hidden?t:0),qt.info.reset(),qt.render(Vn,Ae),ds.draw(Ae,He,t,In&&!document.hidden),Wg&&(window.__spaceDiagnostics={mode:at,world:He?.data.id,place:Dt,calls:qt.info.render.calls,triangles:qt.info.render.triangles,points:qt.info.render.points,geometries:qt.info.memory.geometries,textures:qt.info.memory.textures,programs:qt.info.programs.length,dpr:qt.getPixelRatio(),glassWorlds:ds.count,glassTime:ds.time,fragmentPatterns:ds.diagnostics(),camera:Ae.position.toArray(),up:Ae.up.toArray(),target:Ut.toArray(),intro:qi,introElapsed:sn?.elapsed||0,flightProgress:Tt?.progress||0,water:us,mesh:Xi,trail:ir.strength,travelSpeed:ir.speed,fullDetail:Pn?.detailActive||!1,lod:Pn?.diagnostics(),native:Gt?.diagnostics?.(),postPasses:0,cpuMs:performance.now()-e},window.__spaceDiagnostics.nebula={fragments:Mn?.count||0,dust:Mn?.dustCount||0,volume:Mn?.volumeCount||0,sorts:Mn?.sorts||0,time:Mn?.time||0,probes:Mn?.probes(Ae)||[],links:Mn?.links||[],lighting:Mn?.lighting.diagnostics()},window.__spaceDiagnostics.planets=rn.map(n=>({id:n.data.id,position:n.group.position.toArray(),screen:n.group.position.clone().project(Ae).toArray(),diameter:n.screenDiameter,coverage:n.frameCoverage,reveal:n.appearance?.reveal.value,glassReveal:n.appearance?.glass.value,bodyVisible:n.group.visible,quaternion:n.group.quaternion.toArray(),spinAngle:n.spinAngle,spinRate:n.spinRate,spinAxis:n.spinAxis.toArray(),overview:n.overviewInfo})),He&&(window.__spaceDiagnostics.localCamera=He.group.worldToLocal(Ae.position.clone()).toArray()),window.__THREE_GAME_DIAGNOSTICS__={renderer:window.__spaceDiagnostics},sn?.phase==="flight")){let n=window.__arrivalFrames??=[];n.length<2400&&n.push({time:s,wall:e,dt:t,cpu:window.__spaceDiagnostics.cpuMs,progress:Tt?.progress||1,trail:ir.strength})}Tt&&(!Tt.cinematic||In&&!document.hidden)?pn():In&&!document.hidden&&(clearTimeout($h),$h=setTimeout(pn,Math.max(0,25-(performance.now()-e))))}function Xg(){let s=innerWidth,e=innerHeight;qt.setPixelRatio(Math.min(devicePixelRatio,1.75,Math.sqrt(3e6/(s*e)))),qt.setSize(s,e,!1),Ae.aspect=s/e,Ae.updateProjectionMatrix();let t=up();if(Vg=t.position.length(),at==="space"&&!Tt&&(Ae.position.copy(t.position),Ae.up.copy(t.up),Ut.copy(t.target),Ae.lookAt(Ut),dp()),Tt?.cinematic){let n=Tt.ms-Tt.elapsed,i=He?qg(He):up(),r=Tt.center.clone();lo(i,r,{cinematic:!0,ms:Math.max(1200,n)}),ir.begin(Ae,He?i.target:i.position)}pn()}function up(){let s=Ae.aspect<.86,e=s?li(1,0,0):li(0,1,0),t=Math.tan(ze.MathUtils.degToRad(Ae.fov/2)),n=3e3;for(let r of rn){let o=r.group.position,a=s?o.y:o.x,l=s?o.x:o.y,c=fn*1.42;n=Math.max(n,o.z+(Math.abs(a)+c)/(t*Ae.aspect),o.z+(Math.abs(l)+c)/t)}let i=[];for(let r of Mn?.samples||[]){let o=s?r.y:r.x,a=s?r.x:r.y;i.push(Math.max(r.z+(Math.abs(o)+400*12)/(t*Ae.aspect),r.z+(Math.abs(a)+400*12)/t))}return i.sort((r,o)=>r-o),i.length&&(n=Math.max(n,i[Math.floor(i.length*.95)])),{position:li(0,0,n*1.06),target:li(),up:e}}function dp(){kt?.dispose(),kt=new Uh(Ae,Jn),kt.target.copy(Ut),kt.enablePan=Dt==="surface",kt.enableDamping=!1,kt.rotateSpeed=at==="place"?.48:.65,kt.zoomSpeed=.88,kt.minDistance=at==="space"?8:at==="world"?fn+20:8,kt.maxDistance=at==="space"?Vg*2.5:at==="world"?Math.max(fn*14,Ae.position.distanceTo(Ut)*1.01):200,kt.maxPolarAngle=at==="place"&&Dt!=="sky"?Math.PI*.44:Math.PI-.004,kt.addEventListener("change",()=>{Ut.copy(kt.target),pn(),gE()}),kt.update()}function Bg(s,e,t){let n=new ze.Quaternion().setFromUnitVectors(s,e);return s.clone().applyQuaternion(new ze.Quaternion().slerp(n,t)).normalize()}function lo(s,e,{cinematic:t=!1,ms:n=t?9e3:cE?1:850}={}){kt?.dispose(),kt=null;let i=Ae.position.clone().sub(e),r=s.position.clone().sub(e);Tt={from:i.normalize(),to:r.clone().normalize(),fromR:Ae.position.distanceTo(e),toR:r.length(),fromTarget:Ut.clone(),dest:s,up:Ae.up.clone(),center:e.clone(),start:performance.now(),ms:n,cinematic:t,elapsed:0,progress:0},pn()}function fE(s,e){let t=Tt;t.cinematic&&In&&!document.hidden&&(t.elapsed+=e*1e3);let n=Math.max(0,Math.min(1,(t.cinematic?t.elapsed:s-t.start)/t.ms)),i=t.cinematic?n*n*n*(n*(n*6-15)+10):n*n*(3-2*n);t.progress=n;let r=Math.exp(ze.MathUtils.lerp(Math.log(t.fromR),Math.log(t.toR),i));Ae.position.copy(Bg(t.from,t.to,i)).multiplyScalar(r).add(t.center);let o=Math.min(1,n/.28),a=t.cinematic?o*o*o*(o*(o*6-15)+10):i;Ut.lerpVectors(t.fromTarget,t.dest.target,a),Ae.up.copy(Bg(t.up,t.dest.up,i)),Ae.lookAt(Ut),n>=1&&(Ae.position.copy(t.dest.position),Ut.copy(t.dest.target),Ae.up.copy(t.dest.up),Ae.lookAt(Ut),Tt=null,fp(),dp(),t.cinematic&&sn&&(sn=null,qi="complete",document.documentElement.dataset.intro=qi),Qn())}function zg(){let s=rn.find(e=>e.data.id===Xh)||rn[0];sn={phase:"hold",elapsed:0,world:s,warmed:!1},qi="hold",document.documentElement.dataset.intro=qi,ho(s),Qn()}function ao(){return!sn&&!Tt?.cinematic?!1:(sn&&(sn=null,qi="cancelled",document.documentElement.dataset.intro=qi),Tt?.cinematic&&(Tt=null,fp(),at="space",He=null,Dt=null),ho(null),Qn(),dp(),pn(),!0)}function fp(){Pa&&(Pa.world.overviewInk.uniforms.uOverview.value=1,Pa.patch.dispose(),Pa=null)}function co(s=!1){fp(),cp?.abort(),cp=null,Si=null,Da="",s&&Gt?Pa={world:He,patch:Gt}:He&&(He.overviewInk.uniforms.uOverview.value=1,Gt?.dispose()),Gt=null,bi.textContent=""}function Qn(){Wi.hidden=!0,oE.hidden=!0,rE.hidden=!!sn,Hg.setAttribute("aria-pressed",String(us)),kg.setAttribute("aria-pressed",String(Xi)),document.documentElement.dataset.mode=at,document.documentElement.dataset.world=He?.data.id||"",document.documentElement.dataset.place=Dt||"",document.documentElement.dataset.patch=Dt==="surface"||Dt==="sky"?Da:Gt?"ready":"";let s=new URL(location.href);if(He?s.searchParams.set("planet",He.data.id):s.searchParams.delete("planet"),Dt?s.searchParams.set("view",Dt):s.searchParams.delete("view"),Dt==="surface"&&Si){let e=Si.clone().normalize();s.searchParams.set("lat",ze.MathUtils.radToDeg(Math.asin(e.y)).toFixed(4)),s.searchParams.set("lon",ze.MathUtils.radToDeg(Math.atan2(e.z,e.x)).toFixed(4))}else s.searchParams.delete("lat"),s.searchParams.delete("lon");history.replaceState(null,"",s)}function jh(){at==="space"&&(lE={position:Ae.position.clone(),target:Ut.clone(),up:Ae.up.clone(),aspect:Ae.aspect})}function fs(s,{cinematic:e=s!==He,opening:t=!1}={}){t||ao(),jh(),co(!0),at="world",He=s,Dt=null,Qn(),ho(s),lo(qg(s),s.group.position,{cinematic:e}),e&&ir.begin(Ae,s.group.position)}function qg(s){let e=s.group.position,t=Ae.position.clone().sub(e).normalize(),n=new ze.Vector3(0,1,0);Math.abs(t.dot(n))>.95&&n.set(0,0,1);let i=ds.profiles[s.data.id],r=i?.ring?i.narrow?1.65:1.95:i?.sky?1.5:1.35,o=fn*Math.max(3.85,3.3/Ae.aspect)*r;return{position:e.clone().addScaledVector(t,o),target:e.clone(),up:n}}function ap(){let s=He,e=ao();if(at==="space"&&!e)return;let t=s?s.group.position.clone():Ut.clone();co(!0),ho(null),at="space",He=null,Dt=null;let n=up();Qn(),lo(n,t,{cinematic:!0}),ir.begin(Ae,n.position)}function Yg(s,e){let t=s.data.landmarks[e],n=new ze.Vector3(...t.dir),i=li(n.z,0,-n.x).normalize(),r=n.clone().cross(i).normalize(),o=ze.MathUtils.degToRad(t.heading),a=ze.MathUtils.degToRad(t.tilt),l=r.multiplyScalar(-Math.cos(o)).addScaledVector(i,-Math.sin(o)),c=n.clone().multiplyScalar(fn+t.ground),h=c.clone().addScaledVector(l,t.size*Math.sin(a)).addScaledVector(n,t.size*Math.cos(a)),u=c.clone().addScaledVector(n,e==="ridge"?16:4);return{dir:n,ground:c,eye:h,aim:u}}function pE(s,e,t){let n=rn.find(g=>g.data.id===s),i=rn.find(g=>g.data.id===t),{dir:r,eye:o,aim:a}=Yg(n,e),l=a.clone().sub(o).normalize(),c=l.clone().cross(r).normalize(),h=c.clone().cross(l).normalize(),u=l.clone().addScaledVector(c,.23).addScaledVector(h,.16).normalize(),d=i.group.position.clone().sub(n.group.position),f=o.dot(u),m=-f+Math.sqrt(f*f+d.lengthSq()-o.lengthSq()),v=o.clone().addScaledVector(u,m).normalize().applyQuaternion(n.group.quaternion);n.group.quaternion.premultiply(new ze.Quaternion().setFromUnitVectors(v,d.normalize()))}function ho(s){if(Pn&&Pn.world===s)return;let e=Pn;Pn=null,e&&(e.setDetail(!1),e.priming?e.priming.finally(()=>e.dispose(!1)):e.dispose(!1)),document.documentElement.dataset.orbit=s?"loading":"",s&&at==="world"&&(bi.textContent="Loading orbit\u2026"),s&&(Pn=Mg(s,pn,(t,n,i,r)=>{Pn?.world===s&&(document.documentElement.dataset.orbit=t,t==="error"&&console.error(r),t==="ready"&&sn?.world===s&&(sn.warmed=!0,pn()),at==="world"&&He===s&&(bi.textContent=t==="loading"?"Loading orbit \xB7 "+n+"/"+i:t==="preparing"?"Preparing terrain\u2026":t==="error"?"Orbit could not load. Select the planet again to retry.":""))},(t,n)=>rp(qt,t,Vn,()=>n()&&Pn?.world===s)))}function pp(s){if(Gt?.update)return;Da="loading";let e=Sg(s,Pn,pn,(t,n,i)=>{He!==s||Gt!==e||(Da=t,document.documentElement.dataset.nativeTiles=String(n),(Dt==="surface"||Dt==="sky")&&(document.documentElement.dataset.patch=t,bi.textContent=t==="ready"?"":t==="error"?"Terrain could not load. Click the surface to retry.":"Loading native terrain \xB7 "+n+"/"+i))},(t,n)=>rp(qt,t,Vn,n));Gt=e}function mE(){if(!He||!Pn||Tt?.cinematic||!(at==="world"||Dt==="surface"||Dt==="sky"))return;let s=He,e=s.group.worldToLocal(Ae.position.clone()),t=e.clone().normalize(),n=t.clone().multiplyScalar(fn+s.heightAt(t)),i=innerHeight/(2*Math.tan(ze.MathUtils.degToRad(Ae.fov/2))),r=ze.MathUtils.clamp(i*.45,220,480),o=e.length()-n.length();if(at==="world"){if(o<r+60)pp(s);else if(o>r+140&&Gt?.update){co();return}}if(!Gt?.update)return;let a=s.group.worldToLocal(Ut.clone()).sub(e).normalize(),l=new ze.Matrix4().multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse).multiply(s.group.matrixWorld);Gt.update(at==="world"?n:Si||n,!1,{eye:e,direction:a,range:r,vp:l})}function Zg(s,e,t){let n=Jn.getBoundingClientRect();Ia.setFromCamera(new ze.Vector2((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),Ae);let i=Ia.ray.clone().applyMatrix4(s.group.matrixWorld.clone().invert()),r=new ze.Vector3,o=fn+135,a=-i.origin.dot(i.direction),l=o*o-i.origin.lengthSq()+a*a;if(l<0)return null;let c=Math.max(0,a-Math.sqrt(l)),h=a+Math.sqrt(l);if(h<c)return null;let u=f=>(i.at(f,r),r.length()-fn-s.heightAt(r.normalize())),d=c;for(let f=c;f<=h+6;f+=6){if(u(Math.min(f,h))<=0){f=Math.min(f,h);for(let m=0;m<9;m++){let v=(d+f)/2;u(v)>0?d=v:f=v}return i.at(f,r).normalize()}d=f}return null}function gE(){if(Tt||op||!He)return;let s=He,e=at;op=requestAnimationFrame(()=>{if(op=0,!(Tt||s!==He||e!==at))if(at==="world"){let t=s.group.worldToLocal(Ae.position.clone());if(t.length()-fn-s.heightAt(t.normalize())<125){let i=oo&&Zg(s,oo.x,oo.y);mp(s,i||t)}}else at==="place"&&Ae.position.distanceTo(Ut)>187&&fs(s)})}function mp(s,e){if(!e)return;jh();let t=He===s&&Dt==="surface",n=He===s&&at==="world"&&Gt?.update;t||(n||co(),at="place",He=s,Dt="surface",ho(s));let i=e.clone().multiplyScalar(fn+s.heightAt(e));Si=i.clone();let r=e.clone().applyQuaternion(s.group.quaternion),o=s.group.localToWorld(i.clone()),a=Ae.position.clone().sub(o);a.addScaledVector(r,-a.dot(r)),a.lengthSq()<.01&&(a=Ae.up.clone().projectOnPlane(r),a.lengthSq()<.01&&(a=li(1,0,0).projectOnPlane(r))),a.normalize(),t||pp(s),Gt.update(i,!0),Qn(),lo({position:o.clone().addScaledVector(r,45).addScaledVector(a,62),target:o,up:r},s.group.position)}async function vE(s,e){if(ao(),e==="sky"&&Mn){_E(s);return}let t=e==="sky"?"ridge":e;if(!s.data.landmarks[t])return;jh(),co(),He=s,at="place",Dt=e;let n=new AbortController;cp=n,bi.textContent="Loading "+e+"\u2026",Qn();let{dir:i,ground:r,eye:o,aim:a}=Yg(s,t),l=d=>d.applyQuaternion(s.group.quaternion).add(s.group.position),c=i.clone().applyQuaternion(s.group.quaternion),h=l(o),u=l(a);if(e==="sky"){let d=u.clone().sub(h).normalize();h=l(r.clone()).addScaledVector(c,16),u=Mn?.sight(h,c,d)||ds.sight(s,h,c,d)}lo({position:h,target:u,up:c},s.group.position);try{let d=await _g(s,t,n.signal);if(n.signal.aborted){d.dispose();return}Gt=d,s.group.add(Gt.group),s.overviewInk.uniforms.uOverview.value=2,s.overviewInk.uniforms.uDetailPoint.value.copy(r),bi.textContent="",Qn(),pn()}catch{n.signal.aborted||(bi.textContent="Terrain could not load. Select the landmark to retry.")}}function _E(s){jh(),co(),He=s,at="place",Dt="sky",Da="loading",ho(s);let e=Mn.skyAnchor(s),t=e.clone().multiplyScalar(fn+s.heightAt(e));Si=t.clone();let n=e.clone().applyQuaternion(s.group.quaternion),i=s.group.localToWorld(t.clone()).addScaledVector(n,16),r=Ae.position.clone().sub(i).normalize(),o=Mn.sight(i,n,r)||i.clone().addScaledVector(n,100);pp(s),Gt.update(t,!0),Qn(),lo({position:i,target:o,up:n},s.group.position)}function xE(){let s=21733,e=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296,t=[],n=[];for(let r=0;r<4200;r++){let o=e()*2-1,a=e()*Math.PI*2,l=Math.sqrt(1-o*o),c=(54e3+1e4*e())*12;t.push(l*Math.cos(a)*c,o*c,l*Math.sin(a)*c);let h=.16+e()**3*.49;n.push(h*.82,h*.93,h)}let i=new ze.BufferGeometry;i.setAttribute("position",new ze.Float32BufferAttribute(t,3)),i.setAttribute("color",new ze.Float32BufferAttribute(n,3)),Vn.add(new ze.Points(i,new ze.PointsMaterial({size:1.4,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1,transparent:!0,opacity:.74})))}function lp(s,e,t=!1){let n=Jn.getBoundingClientRect();Ia.setFromCamera(new ze.Vector2((s-n.left)/n.width*2-1,1-(e-n.top)/n.height*2),Ae);let i=null,r=1/0;for(let o of rn){let a=Ia.ray.intersectSphere(new ze.Sphere(o.group.position,fn*1.035),li());if(a){let l=a.distanceTo(Ae.position);l<r&&(i=o,r=l)}}if(!i&&at==="space")for(let o of rn){let a=o.group.position.clone().project(Ae);if(a.z<-1||a.z>1)continue;let l=(a.x+1)*n.width/2+n.left-s,c=(1-a.y)*n.height/2+n.top-e,h=o.group.position.distanceTo(Ae.position);Math.hypot(l,c)<12&&h<r&&(i=o,r=h)}if(t&&at==="place"&&i&&i!==He&&Gt){let o=Ia.intersectObjects(Gt.group.children,Dt==="surface")[0];if(o&&o.distance<r)return null}return i}function yE(){document.querySelector("#all").onclick=ap;function s(){for(let r of rn)r.waterVisible=us,r.meshVisible=Xi,ls(r).water.value=Number(us),r.group.traverse(o=>{o.userData.isWater&&(o.visible=us),o.userData.isMeshOverlay&&(o.visible=Xi),o.userData.isTerrain&&(o.material.polygonOffset=Xi)});Qn(),pn()}Hg.onclick=()=>{us=!us,s()},kg.onclick=()=>{Xi=!Xi,s()};let e=null,t=!1,n=new Set;Jn.addEventListener("pointerdown",()=>ao(),{capture:!0}),Jn.addEventListener("pointerdown",r=>{oo=null,n.add(r.pointerId),n.size>1&&(t=!0),e={x:r.clientX,y:r.clientY},Wi.hidden=!0}),Jn.addEventListener("pointermove",r=>{if(r.buttons||r.pointerType==="touch"||Tt){Wi.hidden=!0;return}let o=lp(r.clientX,r.clientY);Jn.style.cursor=o&&o!==He?"pointer":"grab",Wi.hidden=!o||o===He,Wi.hidden||(Wi.textContent=o.data.name,Wi.style.left=Math.min(innerWidth-105,r.clientX+13)+"px",Wi.style.top=Math.max(4,r.clientY-26)+"px")}),Jn.addEventListener("pointerleave",()=>{Wi.hidden=!0});function i(r,o){if(n.delete(r.pointerId),!o&&!t&&e&&Math.hypot(r.clientX-e.x,r.clientY-e.y)<5){let a=lp(r.clientX,r.clientY,!0);a&&a!==He?fs(a):He&&(at==="world"||at==="place")&&mp(He,Zg(He,r.clientX,r.clientY))}n.size||(e=null,t=!1)}Jn.addEventListener("pointerup",r=>i(r,!1)),Jn.addEventListener("pointercancel",r=>i(r,!0)),Jn.addEventListener("wheel",r=>{if(ao()){oo={x:r.clientX,y:r.clientY};return}if(!Tt){if(oo={x:r.clientX,y:r.clientY},at==="space"&&r.deltaY<0){let a=lp(r.clientX,r.clientY);a&&(r.preventDefault(),r.stopImmediatePropagation(),fs(a))}at==="place"&&r.deltaY>0&&Ae.position.distanceTo(Ut)>165?(r.preventDefault(),r.stopImmediatePropagation(),fs(He)):at==="world"&&r.deltaY>0&&Ae.position.distanceTo(Ut)>fn*13&&(r.preventDefault(),r.stopImmediatePropagation(),ap())}},{passive:!1,capture:!0}),addEventListener("keydown",r=>{if(r.key==="Escape"){if(ao())return;at==="place"?fs(He):ap()}})}async function ME(){let s=await fetch("./worlds.json");if(!s.ok)throw Error("Worlds are unavailable.");let e=await s.json();xE();for(let t of e){let n=new ze.Group;n.position.copy(tp(t.id)),n.quaternion.setFromUnitVectors(new ze.Vector3(...t.orientation).normalize(),aE),Vn.add(n);let i={data:t,group:n,waterVisible:us,meshVisible:Xi,spinAngle:0,spinRate:ze.MathUtils.degToRad(1.1+rn.length%5*.17),spinAxis:Ca(t.id).normal};rn.push(i);let r=document.createElement("button");r.textContent=t.name,r.onclick=()=>fs(i),document.querySelector("#list").append(r)}pE("fell","ridge","shoals"),Mn=Dg(rn,Vn),Gg=Ng(rn,Vn),Xg(),await Promise.all(rn.map(vg)),Vn.updateMatrixWorld(!0),pn(),await qt.compileAsync(Vn,Ae),bi.textContent="Gathering glass\u2026",await ds.prepare(rn,pn),yE(),bi.textContent="",document.documentElement.dataset.ready="true",SE(),pn()}function SE(){if(performance.getEntriesByType("navigation")[0]?.type==="reload"){let n=new URL(location.href);for(let i of["planet","view","lat","lon","intro"])n.searchParams.delete(i);history.replaceState(null,"",n),zg();return}let s=new URLSearchParams(location.search),e=rn.find(n=>n.data.id===s.get("planet")),t=s.get("view");if(e)if(t==="surface"&&s.has("lat")&&s.has("lon")&&Number.isFinite(+s.get("lat"))&&Number.isFinite(+s.get("lon"))){let n=ze.MathUtils.degToRad(ze.MathUtils.clamp(+s.get("lat"),-90,90)),i=ze.MathUtils.degToRad(+s.get("lon"));mp(e,li(Math.cos(n)*Math.cos(i),Math.sin(n),Math.cos(n)*Math.sin(i)))}else t&&(t==="sky"||e.data.landmarks[t])?vE(e,t):fs(e,{cinematic:!1});else s.get("intro")==="0"?Qn():zg()}addEventListener("resize",Xg);function $g(){let s=document.querySelector("#motion");s.setAttribute("aria-pressed",String(In)),s.setAttribute("aria-label",In?"Pause motion":"Play motion"),s.title=In?"Pause motion":"Play motion",document.documentElement.dataset.motion=In?"running":"paused"}$g();document.querySelector("#motion").onclick=()=>{In=!In,$g(),clearTimeout($h),La=0,pn()};document.addEventListener("visibilitychange",()=>{clearTimeout($h),La=0,document.hidden||pn()});ME().catch(s=>{console.error(s),bi.textContent="Space could not load. Refresh to retry."});
/*! Bundled license information:

three/build/three.cjs:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
