var xR=Object.create;var Ix=Object.defineProperty;var yR=Object.getOwnPropertyDescriptor;var _R=Object.getOwnPropertyNames;var SR=Object.getPrototypeOf,bR=Object.prototype.hasOwnProperty;var G=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ER=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of _R(e))!bR.call(i,r)&&r!==t&&Ix(i,r,{get:()=>e[r],enumerable:!(n=yR(e,r))||n.enumerable});return i};var Nt=(i,e,t)=>(t=i!=null?xR(SR(i)):{},ER(e||!i||!i.__esModule?Ix(t,"default",{value:i,enumerable:!0}):t,i));var Yt=G((oG,Dx)=>{"use strict";var Od=typeof document=="object"&&document.all;Dx.exports=typeof Od>"u"&&Od!==void 0?function(i){return typeof i=="function"||i===Od}:function(i){return typeof i=="function"}});var Ct=G((lG,Lx)=>{"use strict";Lx.exports=function(i){try{return!!i()}catch{return!0}}});var _n=G((cG,Ux)=>{"use strict";var MR=Ct();Ux.exports=!MR(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var Bt=G((Nd,Fx)=>{"use strict";var go=function(i){return i&&i.Math===Math&&i};Fx.exports=go(typeof globalThis=="object"&&globalThis)||go(typeof window=="object"&&window)||go(typeof self=="object"&&self)||go(typeof global=="object"&&global)||go(typeof Nd=="object"&&Nd)||(function(){return this})()||Function("return this")()});var mn=G((uG,Ox)=>{"use strict";var wR=Yt();Ox.exports=function(i){return typeof i=="object"?i!==null:wR(i)}});var zd=G((hG,Bx)=>{"use strict";var TR=Bt(),Nx=mn(),Bd=TR.document,AR=Nx(Bd)&&Nx(Bd.createElement);Bx.exports=function(i){return AR?Bd.createElement(i):{}}});var kd=G((fG,zx)=>{"use strict";var RR=_n(),CR=Ct(),PR=zd();zx.exports=!RR&&!CR(function(){return Object.defineProperty(PR("div"),"a",{get:function(){return 7}}).a!==7})});var Hd=G((dG,kx)=>{"use strict";var IR=_n(),DR=Ct();kx.exports=IR&&DR(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Nn=G((pG,Hx)=>{"use strict";var LR=mn(),UR=String,FR=TypeError;Hx.exports=function(i){if(LR(i))return i;throw new FR(UR(i)+" is not an object")}});var vo=G((mG,Vx)=>{"use strict";var OR=Ct();Vx.exports=!OR(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")})});var Pn=G((gG,Gx)=>{"use strict";var NR=vo(),mc=Function.prototype.call;Gx.exports=NR?mc.bind(mc):function(){return mc.apply(mc,arguments)}});var Li=G((vG,qx)=>{"use strict";var Vd=Bt(),BR=Yt(),zR=function(i){return BR(i)?i:void 0};qx.exports=function(i,e){return arguments.length<2?zR(Vd[i]):Vd[i]&&Vd[i][e]}});var Dt=G((xG,Yx)=>{"use strict";var Wx=vo(),Xx=Function.prototype,Gd=Xx.call,kR=Wx&&Xx.bind.bind(Gd,Gd);Yx.exports=Wx?kR:function(i){return function(){return Gd.apply(i,arguments)}}});var xo=G((yG,jx)=>{"use strict";var HR=Dt();jx.exports=HR({}.isPrototypeOf)});var qd=G((_G,Kx)=>{"use strict";var VR=Bt(),Zx=VR.navigator,$x=Zx&&Zx.userAgent;Kx.exports=$x?String($x):""});var Xd=G((SG,iy)=>{"use strict";var ny=Bt(),Wd=qd(),Jx=ny.process,Qx=ny.Deno,ey=Jx&&Jx.versions||Qx&&Qx.version,ty=ey&&ey.v8,yi,gc;ty&&(yi=ty.split("."),gc=yi[0]>0&&yi[0]<4?1:+(yi[0]+yi[1]));!gc&&Wd&&(yi=Wd.match(/Edge\/(\d+)/),(!yi||yi[1]>=74)&&(yi=Wd.match(/Chrome\/(\d+)/),yi&&(gc=+yi[1])));iy.exports=gc});var Yd=G((bG,sy)=>{"use strict";var ry=Xd(),GR=Ct(),qR=Bt(),WR=qR.String;sy.exports=!!Object.getOwnPropertySymbols&&!GR(function(){var i=Symbol("symbol detection");return!WR(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&ry&&ry<41})});var jd=G((EG,ay)=>{"use strict";var XR=Yd();ay.exports=XR&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var vc=G((MG,oy)=>{"use strict";var YR=Li(),jR=Yt(),ZR=xo(),$R=jd(),KR=Object;oy.exports=$R?function(i){return typeof i=="symbol"}:function(i){var e=YR("Symbol");return jR(e)&&ZR(e.prototype,KR(i))}});var xc=G((wG,ly)=>{"use strict";var JR=String;ly.exports=function(i){try{return JR(i)}catch{return"Object"}}});var yo=G((TG,cy)=>{"use strict";var QR=Yt(),e2=xc(),t2=TypeError;cy.exports=function(i){if(QR(i))return i;throw new t2(e2(i)+" is not a function")}});var Zr=G((AG,uy)=>{"use strict";uy.exports=function(i){return i==null}});var Ys=G((RG,hy)=>{"use strict";var n2=yo(),i2=Zr();hy.exports=function(i,e){var t=i[e];return i2(t)?void 0:n2(t)}});var dy=G((CG,fy)=>{"use strict";var Zd=Pn(),$d=Yt(),Kd=mn(),r2=TypeError;fy.exports=function(i,e){var t,n;if(e==="string"&&$d(t=i.toString)&&!Kd(n=Zd(t,i))||$d(t=i.valueOf)&&!Kd(n=Zd(t,i))||e!=="string"&&$d(t=i.toString)&&!Kd(n=Zd(t,i)))return n;throw new r2("Can't convert object to primitive value")}});var Ki=G((PG,py)=>{"use strict";py.exports=!1});var yc=G((IG,gy)=>{"use strict";var my=Bt(),s2=Object.defineProperty;gy.exports=function(i,e){try{s2(my,i,{value:e,configurable:!0,writable:!0})}catch{my[i]=e}return e}});var _c=G((DG,yy)=>{"use strict";var a2=Ki(),o2=Bt(),l2=yc(),vy="__core-js_shared__",xy=yy.exports=o2[vy]||l2(vy,{});(xy.versions||(xy.versions=[])).push({version:"3.49.0",mode:a2?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Sc=G((LG,Sy)=>{"use strict";var _y=_c();Sy.exports=function(i,e){return _y[i]||(_y[i]=e||{})}});var $r=G((UG,by)=>{"use strict";var c2=Zr(),u2=TypeError;by.exports=function(i){if(c2(i))throw new u2("Can't call method on "+i);return i}});var js=G((FG,Ey)=>{"use strict";var h2=$r(),f2=Object;Ey.exports=function(i){return f2(h2(i))}});var Sn=G((OG,My)=>{"use strict";var d2=Dt(),p2=js(),m2=d2({}.hasOwnProperty);My.exports=Object.hasOwn||function(e,t){return m2(p2(e),t)}});var _o=G((NG,wy)=>{"use strict";var g2=Dt(),v2=0,x2=Math.random(),y2=g2(1.1.toString);wy.exports=function(i){return"Symbol("+(i===void 0?"":i)+")_"+y2(++v2+x2,36)}});var bn=G((BG,Ay)=>{"use strict";var _2=Bt(),S2=Sc(),Ty=Sn(),b2=_o(),E2=Yd(),M2=jd(),Zs=_2.Symbol,Jd=S2("wks"),w2=M2?Zs.for||Zs:Zs&&Zs.withoutSetter||b2;Ay.exports=function(i){return Ty(Jd,i)||(Jd[i]=E2&&Ty(Zs,i)?Zs[i]:w2("Symbol."+i)),Jd[i]}});var Iy=G((zG,Py)=>{"use strict";var T2=Pn(),Ry=mn(),Cy=vc(),A2=Ys(),R2=dy(),C2=bn(),P2=TypeError,I2=C2("toPrimitive");Py.exports=function(i,e){if(!Ry(i)||Cy(i))return i;var t=A2(i,I2),n;if(t){if(e===void 0&&(e="default"),n=T2(t,i,e),!Ry(n)||Cy(n))return n;throw new P2("Can't convert object to primitive value")}return e===void 0&&(e="number"),R2(i,e)}});var Qd=G((kG,Dy)=>{"use strict";var D2=Iy(),L2=vc();Dy.exports=function(i){var e=D2(i,"string");return L2(e)?e:e+""}});var jn=G(Uy=>{"use strict";var U2=_n(),F2=kd(),O2=Hd(),bc=Nn(),Ly=Qd(),N2=TypeError,ep=Object.defineProperty,B2=Object.getOwnPropertyDescriptor,tp="enumerable",np="configurable",ip="writable";Uy.f=U2?O2?function(e,t,n){if(bc(e),t=Ly(t),bc(n),typeof e=="function"&&t==="prototype"&&"value"in n&&ip in n&&!n[ip]){var r=B2(e,t);r&&r[ip]&&(e[t]=n.value,n={configurable:np in n?n[np]:r[np],enumerable:tp in n?n[tp]:r[tp],writable:!1})}return ep(e,t,n)}:ep:function(e,t,n){if(bc(e),t=Ly(t),bc(n),F2)try{return ep(e,t,n)}catch{}if("get"in n||"set"in n)throw new N2("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var ap=G((VG,Oy)=>{"use strict";var rp=_n(),z2=Sn(),Fy=Function.prototype,k2=rp&&Object.getOwnPropertyDescriptor,sp=z2(Fy,"name"),H2=sp&&(function(){}).name==="something",V2=sp&&(!rp||rp&&k2(Fy,"name").configurable);Oy.exports={EXISTS:sp,PROPER:H2,CONFIGURABLE:V2}});var lp=G((GG,Ny)=>{"use strict";var G2=Dt(),q2=Yt(),op=_c(),W2=G2(Function.toString);q2(op.inspectSource)||(op.inspectSource=function(i){return W2(i)});Ny.exports=op.inspectSource});var ky=G((qG,zy)=>{"use strict";var X2=Bt(),Y2=Yt(),By=X2.WeakMap;zy.exports=Y2(By)&&/native code/.test(String(By))});var Mr=G((WG,Hy)=>{"use strict";Hy.exports=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}}});var $s=G((XG,Vy)=>{"use strict";var j2=_n(),Z2=jn(),$2=Mr();Vy.exports=j2?function(i,e,t){return Z2.f(i,e,$2(1,t))}:function(i,e,t){return i[e]=t,i}});var Ec=G((YG,qy)=>{"use strict";var K2=Sc(),J2=_o(),Gy=K2("keys");qy.exports=function(i){return Gy[i]||(Gy[i]=J2(i))}});var So=G((jG,Wy)=>{"use strict";Wy.exports={}});var Ks=G((ZG,jy)=>{"use strict";var Q2=ky(),Yy=Bt(),eC=mn(),tC=$s(),cp=Sn(),up=_c(),nC=Ec(),iC=So(),Xy="Object already initialized",hp=Yy.TypeError,rC=Yy.WeakMap,Mc,bo,wc,sC=function(i){return wc(i)?bo(i):Mc(i,{})},aC=function(i){return function(e){var t;if(!eC(e)||(t=bo(e)).type!==i)throw new hp("Incompatible receiver, "+i+" required");return t}};Q2||up.state?(_i=up.state||(up.state=new rC),_i.get=_i.get,_i.has=_i.has,_i.set=_i.set,Mc=function(i,e){if(_i.has(i))throw new hp(Xy);return e.facade=i,_i.set(i,e),e},bo=function(i){return _i.get(i)||{}},wc=function(i){return _i.has(i)}):(Kr=nC("state"),iC[Kr]=!0,Mc=function(i,e){if(cp(i,Kr))throw new hp(Xy);return e.facade=i,tC(i,Kr,e),e},bo=function(i){return cp(i,Kr)?i[Kr]:{}},wc=function(i){return cp(i,Kr)});var _i,Kr;jy.exports={set:Mc,get:bo,has:wc,enforce:sC,getterFor:aC}});var pp=G(($G,Ky)=>{"use strict";var dp=Dt(),oC=Ct(),lC=Yt(),Tc=Sn(),fp=_n(),cC=ap().CONFIGURABLE,uC=lp(),$y=Ks(),hC=$y.enforce,fC=$y.get,Zy=String,Ac=Object.defineProperty,dC=dp("".slice),pC=dp("".replace),mC=dp([].join),gC=fp&&!oC(function(){return Ac(function(){},"length",{value:8}).length!==8}),vC=String(String).split("String"),xC=Ky.exports=function(i,e,t){dC(Zy(e),0,7)==="Symbol("&&(e="["+pC(Zy(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Tc(i,"name")||cC&&i.name!==e)&&(fp?Ac(i,"name",{value:e,configurable:!0}):i.name=e),gC&&t&&Tc(t,"arity")&&i.length!==t.arity&&Ac(i,"length",{value:t.arity});try{t&&Tc(t,"constructor")&&t.constructor?fp&&Ac(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=hC(i);return Tc(n,"source")||(n.source=mC(vC,typeof e=="string"?e:"")),i};Function.prototype.toString=xC(function(){return lC(this)&&fC(this).source||uC(this)},"toString")});var Ui=G((KG,Jy)=>{"use strict";var yC=Yt(),_C=jn(),SC=pp(),bC=yc();Jy.exports=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(yC(t)&&SC(t,s,n),n.global)r?i[e]=t:bC(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:_C.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i}});var Rc=G((JG,e_)=>{"use strict";var EC=bn(),MC=EC("toStringTag"),Qy={};Qy[MC]="z";e_.exports=String(Qy)==="[object z]"});var Ji=G((QG,n_)=>{"use strict";var t_=Dt(),wC=t_({}.toString),TC=t_("".slice);n_.exports=function(i){return TC(wC(i),8,-1)}});var Js=G((e6,i_)=>{"use strict";var AC=Rc(),RC=Yt(),Cc=Ji(),CC=bn(),PC=CC("toStringTag"),IC=Object,DC=Cc((function(){return arguments})())==="Arguments",LC=function(i,e){try{return i[e]}catch{}};i_.exports=AC?Cc:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=LC(e=IC(i),PC))=="string"?t:DC?Cc(e):(n=Cc(e))==="Object"&&RC(e.callee)?"Arguments":n}});var Qs=G((t6,r_)=>{"use strict";var UC=Js(),FC=String;r_.exports=function(i){if(UC(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return FC(i)}});var Pc=G((n6,s_)=>{"use strict";var OC=Qs();s_.exports=function(i,e){return i===void 0?arguments.length<2?"":e:OC(i)}});var mp=G((i6,o_)=>{"use strict";var NC=_n(),BC=Ct(),zC=Nn(),a_=Pc(),Ic=Error.prototype.toString,kC=BC(function(){if(NC){var i=Object.create(Object.defineProperty({},"name",{get:function(){return this===i}}));if(Ic.call(i)!=="true")return!0}return Ic.call({message:1,name:2})!=="2: 1"||Ic.call({})!=="Error"});o_.exports=kC?function(){var e=zC(this),t=a_(e.name,"Error"),n=a_(e.message);return t?n?t+": "+n:t:n}:Ic});var u_=G(()=>{"use strict";var HC=Ui(),l_=mp(),c_=Error.prototype;c_.toString!==l_&&HC(c_,"toString",l_)});var f_=G((a6,h_)=>{"use strict";var VC=Dt(),GC=Ct(),qC=Ji(),gp=Object,WC=VC("".split);h_.exports=GC(function(){return!gp("z").propertyIsEnumerable(0)})?function(i){return qC(i)==="String"?WC(i,""):gp(i)}:gp});var Jr=G((o6,d_)=>{"use strict";var XC=f_(),YC=$r();d_.exports=function(i){return XC(YC(i))}});var m_=G((l6,p_)=>{"use strict";var jC=Math.ceil,ZC=Math.floor;p_.exports=Math.trunc||function(e){var t=+e;return(t>0?ZC:jC)(t)}});var ea=G((c6,g_)=>{"use strict";var $C=m_();g_.exports=function(i){var e=+i;return e!==e||e===0?0:$C(e)}});var x_=G((u6,v_)=>{"use strict";var KC=ea(),JC=Math.max,QC=Math.min;v_.exports=function(i,e){var t=KC(i);return t<0?JC(t+e,0):QC(t,e)}});var vp=G((h6,y_)=>{"use strict";var e3=ea(),t3=Math.min;y_.exports=function(i){var e=e3(i);return e>0?t3(e,9007199254740991):0}});var Eo=G((f6,__)=>{"use strict";var n3=vp();__.exports=function(i){return n3(i.length)}});var E_=G((d6,b_)=>{"use strict";var i3=Jr(),r3=x_(),s3=Eo(),S_=function(i){return function(e,t,n){var r=i3(e),s=s3(r);if(s===0)return!i&&-1;var a=r3(n,s),o;if(i&&t!==t){for(;s>a;)if(o=r[a++],o!==o)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}};b_.exports={includes:S_(!0),indexOf:S_(!1)}});var yp=G((p6,w_)=>{"use strict";var a3=Dt(),xp=Sn(),o3=Jr(),l3=E_().indexOf,c3=So(),M_=a3([].push);w_.exports=function(i,e){var t=o3(i),n=0,r=[],s;for(s in t)!xp(c3,s)&&xp(t,s)&&M_(r,s);for(;e.length>n;)xp(t,s=e[n++])&&(~l3(r,s)||M_(r,s));return r}});var Dc=G((m6,T_)=>{"use strict";T_.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var _p=G((g6,A_)=>{"use strict";var u3=yp(),h3=Dc();A_.exports=Object.keys||function(e){return u3(e,h3)}});var C_=G(R_=>{"use strict";var f3=_n(),d3=Hd(),p3=jn(),m3=Nn(),g3=Jr(),v3=_p();R_.f=f3&&!d3?Object.defineProperties:function(e,t){m3(e);for(var n=g3(t),r=v3(t),s=r.length,a=0,o;s>a;)p3.f(e,o=r[a++],n[o]);return e}});var I_=G((x6,P_)=>{"use strict";var x3=Li();P_.exports=x3("document","documentElement")});var Qr=G((y6,B_)=>{"use strict";var y3=Nn(),_3=C_(),D_=Dc(),S3=So(),b3=I_(),E3=zd(),M3=Ec(),L_=">",U_="<",bp="prototype",Ep="script",O_=M3("IE_PROTO"),Sp=function(){},N_=function(i){return U_+Ep+L_+i+U_+"/"+Ep+L_},F_=function(i){i.write(N_("")),i.close();var e=i.parentWindow.Object;return i=null,e},w3=function(){var i=E3("iframe"),e="java"+Ep+":",t;return i.style.display="none",b3.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(N_("document.F=Object")),t.close(),t.F},Lc,Uc=function(){try{Lc=new ActiveXObject("htmlfile")}catch{}Uc=typeof document<"u"?document.domain&&Lc?F_(Lc):w3():F_(Lc);for(var i=D_.length;i--;)delete Uc[bp][D_[i]];return Uc()};S3[O_]=!0;B_.exports=Object.create||function(e,t){var n;return e!==null?(Sp[bp]=y3(e),n=new Sp,Sp[bp]=null,n[O_]=e):n=Uc(),t===void 0?n:_3.f(n,t)}});var Tp=G((_6,z_)=>{"use strict";var T3=bn(),A3=Qr(),R3=jn().f,Mp=T3("unscopables"),wp=Array.prototype;wp[Mp]===void 0&&R3(wp,Mp,{configurable:!0,value:A3(null)});z_.exports=function(i){wp[Mp][i]=!0}});var ta=G((S6,k_)=>{"use strict";k_.exports={}});var q_=G(G_=>{"use strict";var H_={}.propertyIsEnumerable,V_=Object.getOwnPropertyDescriptor,C3=V_&&!H_.call({1:2},1);G_.f=C3?function(e){var t=V_(this,e);return!!t&&t.enumerable}:H_});var Ap=G(X_=>{"use strict";var P3=_n(),I3=Pn(),D3=q_(),L3=Mr(),U3=Jr(),F3=Qd(),O3=Sn(),N3=kd(),W_=Object.getOwnPropertyDescriptor;X_.f=P3?W_:function(e,t){if(e=U3(e),t=F3(t),N3)try{return W_(e,t)}catch{}if(O3(e,t))return L3(!I3(D3.f,e,t),e[t])}});var Fc=G(Y_=>{"use strict";var B3=yp(),z3=Dc(),k3=z3.concat("length","prototype");Y_.f=Object.getOwnPropertyNames||function(e){return B3(e,k3)}});var Z_=G(j_=>{"use strict";j_.f=Object.getOwnPropertySymbols});var K_=G((T6,$_)=>{"use strict";var H3=Li(),V3=Dt(),G3=Fc(),q3=Z_(),W3=Nn(),X3=V3([].concat);$_.exports=H3("Reflect","ownKeys")||function(e){var t=G3.f(W3(e)),n=q3.f;return n?X3(t,n(e)):t}});var e1=G((A6,Q_)=>{"use strict";var J_=Sn(),Y3=K_(),j3=Ap(),Z3=jn();Q_.exports=function(i,e,t){for(var n=Y3(e),r=Z3.f,s=j3.f,a=0;a<n.length;a++){var o=n[a];!J_(i,o)&&!(t&&J_(t,o))&&r(i,o,s(e,o))}}});var Rp=G((R6,t1)=>{"use strict";var $3=Ct(),K3=Yt(),J3=/#|\.prototype\./,Mo=function(i,e){var t=eP[Q3(i)];return t===nP?!0:t===tP?!1:K3(e)?$3(e):!!e},Q3=Mo.normalize=function(i){return String(i).replace(J3,".").toLowerCase()},eP=Mo.data={},tP=Mo.NATIVE="N",nP=Mo.POLYFILL="P";t1.exports=Mo});var li=G((C6,n1)=>{"use strict";var Oc=Bt(),iP=Ap().f,rP=$s(),sP=Ui(),aP=yc(),oP=e1(),lP=Rp();n1.exports=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,o,l,c,u;if(n?a=Oc:r?a=Oc[t]||aP(t,{}):a=Oc[t]&&Oc[t].prototype,a)for(o in e){if(c=e[o],i.dontCallGetSet?(u=iP(a,o),l=u&&u.value):l=a[o],s=lP(n?o:t+(r?".":"#")+o,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;oP(c,l)}(i.sham||l&&l.sham)&&rP(c,"sham",!0),sP(a,o,c,i)}}});var r1=G((P6,i1)=>{"use strict";var cP=Ct();i1.exports=!cP(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype})});var Pp=G((I6,a1)=>{"use strict";var uP=Sn(),hP=Yt(),fP=js(),dP=Ec(),pP=r1(),s1=dP("IE_PROTO"),Cp=Object,mP=Cp.prototype;a1.exports=pP?Cp.getPrototypeOf:function(i){var e=fP(i);if(uP(e,s1))return e[s1];var t=e.constructor;return hP(t)&&e instanceof t?t.prototype:e instanceof Cp?mP:null}});var Up=G((D6,c1)=>{"use strict";var gP=Ct(),vP=Yt(),xP=mn(),yP=Qr(),o1=Pp(),_P=Ui(),SP=bn(),bP=Ki(),Lp=SP("iterator"),l1=!1,Qi,Ip,Dp;[].keys&&(Dp=[].keys(),"next"in Dp?(Ip=o1(o1(Dp)),Ip!==Object.prototype&&(Qi=Ip)):l1=!0);var EP=!xP(Qi)||gP(function(){var i={};return Qi[Lp].call(i)!==i});EP?Qi={}:bP&&(Qi=yP(Qi));vP(Qi[Lp])||_P(Qi,Lp,function(){return this});c1.exports={IteratorPrototype:Qi,BUGGY_SAFARI_ITERATORS:l1}});var wo=G((L6,h1)=>{"use strict";var MP=jn().f,wP=Sn(),TP=bn(),u1=TP("toStringTag");h1.exports=function(i,e,t){i&&!t&&(i=i.prototype),i&&!wP(i,u1)&&MP(i,u1,{configurable:!0,value:e})}});var d1=G((U6,f1)=>{"use strict";var AP=Up().IteratorPrototype,RP=Qr(),CP=Mr(),PP=wo(),IP=ta(),DP=function(){return this};f1.exports=function(i,e,t,n){var r=e+" Iterator";return i.prototype=RP(AP,{next:CP(+!n,t)}),PP(i,r,!1,!0),IP[r]=DP,i}});var m1=G((F6,p1)=>{"use strict";var LP=Dt(),UP=yo();p1.exports=function(i,e,t){try{return LP(UP(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}}});var v1=G((O6,g1)=>{"use strict";var FP=mn();g1.exports=function(i){return FP(i)||i===null}});var y1=G((N6,x1)=>{"use strict";var OP=v1(),NP=String,BP=TypeError;x1.exports=function(i){if(OP(i))return i;throw new BP("Can't set "+NP(i)+" as a prototype")}});var Fp=G((B6,_1)=>{"use strict";var zP=m1(),kP=mn(),HP=$r(),VP=y1();_1.exports=Object.setPrototypeOf||("__proto__"in{}?(function(){var i=!1,e={},t;try{t=zP(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return HP(r),VP(s),kP(r)&&(i?t(r,s):r.__proto__=s),r}})():void 0)});var Np=G((z6,P1)=>{"use strict";var GP=li(),qP=Pn(),Nc=Ki(),R1=ap(),WP=Yt(),XP=d1(),S1=Pp(),b1=Fp(),YP=wo(),jP=$s(),Op=Ui(),ZP=bn(),E1=ta(),C1=Up(),$P=R1.PROPER,KP=R1.CONFIGURABLE,M1=C1.IteratorPrototype,Bc=C1.BUGGY_SAFARI_ITERATORS,To=ZP("iterator"),w1="keys",Ao="values",T1="entries",A1=function(){return this};P1.exports=function(i,e,t,n,r,s,a){XP(t,e,n);var o=function(p){if(p===r&&f)return f;if(!Bc&&p&&p in u)return u[p];switch(p){case w1:return function(){return new t(this,p)};case Ao:return function(){return new t(this,p)};case T1:return function(){return new t(this,p)}}return function(){return new t(this)}},l=e+" Iterator",c=!1,u=i.prototype,h=u[To]||u["@@iterator"]||r&&u[r],f=!Bc&&h||o(r),d=e==="Array"&&u.entries||h,m,v,g;if(d&&(m=S1(d.call(new i)),m!==Object.prototype&&m.next&&(!Nc&&S1(m)!==M1&&(b1?b1(m,M1):WP(m[To])||Op(m,To,A1)),YP(m,l,!0,!0),Nc&&(E1[l]=A1))),$P&&r===Ao&&h&&h.name!==Ao&&(!Nc&&KP?jP(u,"name",Ao):(c=!0,f=function(){return qP(h,this)})),r)if(v={values:o(Ao),keys:s?f:o(w1),entries:o(T1)},a)for(g in v)(Bc||c||!(g in u))&&Op(u,g,v[g]);else GP({target:e,proto:!0,forced:Bc||c},v);return(!Nc||a)&&u[To]!==f&&Op(u,To,f,{name:r}),E1[e]=f,v}});var Bp=G((k6,I1)=>{"use strict";I1.exports=function(i,e){return{value:i,done:e}}});var N1=G((H6,O1)=>{"use strict";var JP=Jr(),zp=Tp(),D1=ta(),U1=Ks(),QP=jn().f,eI=Np(),zc=Bp(),tI=Ki(),nI=_n(),F1="Array Iterator",iI=U1.set,rI=U1.getterFor(F1);O1.exports=eI(Array,"Array",function(i,e){iI(this,{type:F1,target:JP(i),index:0,kind:e})},function(){var i=rI(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=null,zc(void 0,!0);switch(i.kind){case"keys":return zc(t,!1);case"values":return zc(e[t],!1)}return zc([t,e[t]],!1)},"values");var L1=D1.Arguments=D1.Array;zp("keys");zp("values");zp("entries");if(!tI&&nI&&L1.name!=="values")try{QP(L1,"name",{value:"values"})}catch{}});var z1=G(()=>{"use strict";var sI=li(),aI=js(),B1=_p(),oI=Ct(),lI=oI(function(){B1(1)});sI({target:"Object",stat:!0,forced:lI},{keys:function(e){return B1(aI(e))}})});var H1=G((q6,k1)=>{"use strict";var cI=Rc(),uI=Js();k1.exports=cI?{}.toString:function(){return"[object "+uI(this)+"]"}});var V1=G(()=>{"use strict";var hI=Rc(),fI=Ui(),dI=H1();hI||fI(Object.prototype,"toString",dI,{unsafe:!0})});var q1=G((Y6,G1)=>{"use strict";var pI=Dt();G1.exports=pI([].slice)});var j1=G((j6,Y1)=>{"use strict";var mI=Ji(),gI=Jr(),W1=Fc().f,vI=q1(),X1=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],xI=function(i){try{return W1(i)}catch{return vI(X1)}};Y1.exports.f=function(e){return X1&&mI(e)==="Window"?xI(e):W1(gI(e))}});var $1=G((Z6,Z1)=>{"use strict";var yI=Ct();Z1.exports=yI(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}})});var Q1=G(($6,J1)=>{"use strict";var _I=Ct(),SI=mn(),bI=Ji(),K1=$1(),kc=Object.isExtensible,EI=_I(function(){kc(1)});J1.exports=EI||K1?function(e){return!SI(e)||K1&&bI(e)==="ArrayBuffer"?!1:kc?kc(e):!0}:kc});var tS=G((K6,eS)=>{"use strict";var MI=Ct();eS.exports=!MI(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Gp=G((J6,rS)=>{"use strict";var wI=li(),TI=Dt(),AI=So(),RI=mn(),kp=Sn(),CI=jn().f,nS=Fc(),PI=j1(),Hp=Q1(),II=_o(),DI=tS(),iS=!1,er=II("meta"),LI=0,Vp=function(i){CI(i,er,{value:{objectID:"O"+LI++,weakData:{}}})},UI=function(i,e){if(!RI(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!kp(i,er)){if(!Hp(i))return"F";if(!e)return"E";Vp(i)}return i[er].objectID},FI=function(i,e){if(!kp(i,er)){if(!Hp(i))return!0;if(!e)return!1;Vp(i)}return i[er].weakData},OI=function(i){return DI&&iS&&Hp(i)&&!kp(i,er)&&Vp(i),i},NI=function(){BI.enable=function(){},iS=!0;var i=nS.f,e=TI([].splice),t={};t[er]=1,i(t).length&&(nS.f=function(n){for(var r=i(n),s=0,a=r.length;s<a;s++)if(r[s]===er){e(r,s,1);break}return r},wI({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:PI.f}))},BI=rS.exports={enable:NI,fastKey:UI,getWeakData:FI,onFreeze:OI};AI[er]=!0});var aS=G((Q6,sS)=>{"use strict";var zI=Ji(),kI=Dt();sS.exports=function(i){if(zI(i)==="Function")return kI(i)}});var qp=G((e8,lS)=>{"use strict";var oS=aS(),HI=yo(),VI=vo(),GI=oS(oS.bind);lS.exports=function(i,e){return HI(i),e===void 0?i:VI?GI(i,e):function(){return i.apply(e,arguments)}}});var uS=G((t8,cS)=>{"use strict";var qI=bn(),WI=ta(),XI=qI("iterator"),YI=Array.prototype;cS.exports=function(i){return i!==void 0&&(WI.Array===i||YI[XI]===i)}});var Wp=G((n8,fS)=>{"use strict";var jI=Js(),hS=Ys(),ZI=Zr(),$I=ta(),KI=bn(),JI=KI("iterator");fS.exports=function(i){if(!ZI(i))return hS(i,JI)||hS(i,"@@iterator")||$I[jI(i)]}});var pS=G((i8,dS)=>{"use strict";var QI=Pn(),eD=yo(),tD=Nn(),nD=xc(),iD=Wp(),rD=TypeError;dS.exports=function(i,e){var t=arguments.length<2?iD(i):e;if(eD(t))return tD(QI(t,i));throw new rD(nD(i)+" is not iterable")}});var vS=G((r8,gS)=>{"use strict";var sD=Pn(),mS=Nn(),aD=Ys();gS.exports=function(i,e,t){var n,r;mS(i);try{if(n=aD(i,"return"),!n){if(e==="throw")throw t;return t}n=sD(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return mS(n),t}});var Vc=G((s8,SS)=>{"use strict";var oD=qp(),lD=Pn(),cD=Nn(),uD=xc(),hD=uS(),fD=Eo(),xS=xo(),dD=pS(),pD=Wp(),yS=vS(),mD=TypeError,Hc=function(i,e){this.stopped=i,this.result=e},_S=Hc.prototype;SS.exports=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),o=!!(t&&t.INTERRUPTED),l=oD(e,n),c,u,h,f,d,m,v,g=function(x){var _=c;return c=void 0,_&&yS(_,"normal"),new Hc(!0,x)},p=function(x){return r?(cD(x),o?l(x[0],x[1],g):l(x[0],x[1])):o?l(x,g):l(x)};if(s)c=i.iterator;else if(a)c=i;else{if(u=pD(i),!u)throw new mD(uD(i)+" is not iterable");if(hD(u)){for(h=0,f=fD(i);f>h;h++)if(d=p(i[h]),d&&xS(_S,d))return d;return new Hc(!1)}c=dD(i,u)}for(m=s?i.next:c.next;!(v=lD(m,c)).done;){var y=v.value;try{d=p(y)}catch(x){if(c)yS(c,"throw",x);else throw x}if(typeof d=="object"&&d&&xS(_S,d))return d}return new Hc(!1)}});var Ro=G((a8,bS)=>{"use strict";var gD=xo(),vD=TypeError;bS.exports=function(i,e){if(gD(e,i))return i;throw new vD("Incorrect invocation")}});var AS=G((o8,TS)=>{"use strict";var xD=bn(),MS=xD("iterator"),wS=!1;try{ES=0,Xp={next:function(){return{done:!!ES++}},return:function(){wS=!0}},Xp[MS]=function(){return this},Array.from(Xp,function(){throw 2})}catch{}var ES,Xp;TS.exports=function(i,e){try{if(!e&&!wS)return!1}catch{return!1}var t=!1;try{var n={};n[MS]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t}});var Yp=G((l8,CS)=>{"use strict";var yD=Yt(),_D=mn(),RS=Fp();CS.exports=function(i,e,t){var n,r;return RS&&yD(n=e.constructor)&&n!==t&&_D(r=n.prototype)&&r!==t.prototype&&RS(i,r),i}});var $p=G((c8,IS)=>{"use strict";var SD=li(),bD=Bt(),ED=Dt(),PS=Rp(),MD=Ui(),wD=Gp(),TD=Vc(),AD=Ro(),RD=Yt(),CD=Zr(),jp=mn(),Zp=Ct(),PD=AS(),ID=wo(),DD=Yp();IS.exports=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",a=bD[i],o=a&&a.prototype,l=a,c={},u=function(p){var y=ED(o[p]);MD(o,p,p==="add"?function(_){return y(this,_===0?0:_),this}:p==="delete"?function(x){return r&&!jp(x)?!1:y(this,x===0?0:x)}:p==="get"?function(_){return r&&!jp(_)?void 0:y(this,_===0?0:_)}:p==="has"?function(_){return r&&!jp(_)?!1:y(this,_===0?0:_)}:function(_,T){return y(this,_===0?0:_,T),this})},h=PS(i,!RD(a)||!(r||o.forEach&&!Zp(function(){new a().entries().next()})));if(h)l=t.getConstructor(e,i,n,s),wD.enable();else if(PS(i,!0)){var f=new l,d=f[s](r?{}:-0,1)!==f,m=Zp(function(){f.has(1)}),v=PD(function(p){new a(p)}),g=!r&&Zp(function(){for(var p=new a,y=5;y--;)p[s](y,y);return!p.has(-0)});v||(l=e(function(p,y){AD(p,o);var x=DD(new a,p,l);return CD(y)||TD(y,x[s],{that:x,AS_ENTRIES:n}),x}),l.prototype=o,o.constructor=l),(m||g)&&(u("delete"),u("has"),n&&u("get")),(g||d)&&u(s),r&&o.clear&&delete o.clear}return c[i]=l,SD({global:!0,constructor:!0,forced:l!==a},c),ID(l,i),r||t.setStrong(l,i,n),l}});var Gc=G((u8,LS)=>{"use strict";var DS=pp(),LD=jn();LS.exports=function(i,e,t){return t.get&&DS(t.get,e,{getter:!0}),t.set&&DS(t.set,e,{setter:!0}),LD.f(i,e,t)}});var FS=G((h8,US)=>{"use strict";var UD=Ui();US.exports=function(i,e,t){for(var n in e)UD(i,n,e[n],t);return i}});var BS=G((f8,NS)=>{"use strict";var FD=Li(),OD=Gc(),ND=bn(),BD=_n(),OS=ND("species");NS.exports=function(i){var e=FD(i);BD&&e&&!e[OS]&&OD(e,OS,{configurable:!0,get:function(){return this}})}});var Jp=G((d8,qS)=>{"use strict";var zS=Qr(),zD=Gc(),kS=FS(),kD=qp(),HD=Ro(),VD=Zr(),GD=Vc(),qD=Np(),qc=Bp(),WD=BS(),Co=_n(),HS=Gp().fastKey,GS=Ks(),VS=GS.set,Kp=GS.getterFor;qS.exports={getConstructor:function(i,e,t,n){var r=i(function(c,u){HD(c,s),VS(c,{type:e,index:zS(null),first:null,last:null,size:0}),Co||(c.size=0),VD(u)||GD(u,c[n],{that:c,AS_ENTRIES:t})}),s=r.prototype,a=Kp(e),o=function(c,u,h){var f=a(c),d=l(c,u),m,v;return d?d.value=h:(f.last=d={index:v=HS(u,!0),key:u,value:h,previous:m=f.last,next:null,removed:!1},f.first||(f.first=d),m&&(m.next=d),Co?f.size++:c.size++,v!=="F"&&(f.index[v]=d)),c},l=function(c,u){var h=a(c),f=HS(u),d;if(f!=="F")return h.index[f];for(d=h.first;d;d=d.next)if(d.key===u)return d};return kS(s,{clear:function(){for(var u=this,h=a(u),f=h.first;f;)f.removed=!0,f.previous&&(f.previous=f.previous.next=null),f=f.next;h.first=h.last=null,h.index=zS(null),Co?h.size=0:u.size=0},delete:function(c){var u=this,h=a(u),f=l(u,c);if(f){var d=f.next,m=f.previous;delete h.index[f.index],f.removed=!0,m&&(m.next=d),d&&(d.previous=m),h.first===f&&(h.first=d),h.last===f&&(h.last=m),Co?h.size--:u.size--}return!!f},forEach:function(u){for(var h=a(this),f=kD(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:h.first;)for(f(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!l(this,u)}}),kS(s,t?{get:function(u){var h=l(this,u);return h&&h.value},set:function(u,h){return o(this,u===0?0:u,h)}}:{add:function(u){return o(this,u=u===0?0:u,u)}}),Co&&zD(s,"size",{configurable:!0,get:function(){return a(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=Kp(e),s=Kp(n);qD(i,e,function(a,o){VS(this,{type:n,target:a,state:r(a),kind:o,last:null})},function(){for(var a=s(this),o=a.kind,l=a.last;l&&l.removed;)l=l.previous;return!a.target||!(a.last=l=l?l.next:a.state.first)?(a.target=null,qc(void 0,!0)):qc(o==="keys"?l.key:o==="values"?l.value:[l.key,l.value],!1)},t?"entries":"values",!t,!0),WD(e)}}});var WS=G(()=>{"use strict";var XD=$p(),YD=Jp();XD("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},YD)});var XS=G(()=>{"use strict";WS()});var YS=G(()=>{"use strict";var jD=$p(),ZD=Jp();jD("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},ZD)});var jS=G(()=>{"use strict";YS()});var Qp=G((b8,ZS)=>{"use strict";var Po=Bt(),$D=qd(),KD=Ji(),Wc=function(i){return $D.slice(0,i.length)===i};ZS.exports=(function(){return Wc("Bun/")?"BUN":Wc("Cloudflare-Workers")?"CLOUDFLARE":Wc("Deno/")?"DENO":Wc("Node.js/")?"NODE":Po.Bun&&typeof Bun.version=="string"?"BUN":Po.Deno&&typeof Deno.version=="object"?"DENO":KD(Po.process)==="process"?"NODE":Po.window&&Po.document?"BROWSER":"REST"})()});var KS=G((E8,$S)=>{"use strict";var JD=Qp();$S.exports=JD==="NODE"});var em=G((M8,JS)=>{"use strict";var QD=Bt(),eL=KS();JS.exports=function(i){if(eL){try{return QD.process.getBuiltinModule(i)}catch{}try{return Function('return require("'+i+'")')()}catch{}}}});var tm=G((w8,QS)=>{"use strict";QS.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}});var nm=G((T8,nb)=>{"use strict";var tL=Dt(),eb=Error,nL=tL("".replace),iL=(function(i){return String(new eb(i).stack)})("zxcasd"),tb=/\n\s*at [^:]*:[^\n]*/,rL=tb.test(iL);nb.exports=function(i,e){if(rL&&typeof i=="string"&&!eb.prepareStackTrace)for(;e--;)i=nL(i,tb,"");return i}});var db=G(()=>{"use strict";var sL=li(),jc=Li(),aL=em(),lm=Ct(),oL=Qr(),cm=Mr(),Zc=jn().f,lL=Ui(),Xc=Gc(),Yc=Sn(),cL=Ro(),uL=Nn(),sb=mp(),ib=Pc(),na=tm(),hL=nm(),ab=Ks(),um=_n(),ob=Ki(),ia="DOMException",om="DATA_CLONE_ERR",Kc=jc("Error"),tr=jc(ia)||(function(){try{var i=jc("MessageChannel")||aL("worker_threads").MessageChannel;new i().port1.postMessage(new WeakMap)}catch(e){if(e.name===om&&e.code===25)return e.constructor}})(),fL=tr&&tr.prototype,lb=Kc.prototype,dL=ab.set,pL=ab.getterFor(ia),mL="stack"in new Kc(ia),cb=function(i){return Yc(na,i)&&na[i].m?na[i].c:0},hm=function(){cL(this,Do);var e=arguments.length,t=ib(e<1?void 0:arguments[0]),n=ib(e<2?void 0:arguments[1],"Error"),r=cb(n);if(dL(this,{type:ia,name:n,message:t,code:r}),um||(this.name=n,this.message=t,this.code=r),mL){var s=new Kc(t);s.name=ia,Zc(this,"stack",cm(1,hL(s.stack,1)))}},Do=hm.prototype=oL(lb),ub=function(i){return{enumerable:!0,configurable:!0,get:i}},im=function(i){return ub(function(){return pL(this)[i]})};um&&(Xc(Do,"code",im("code")),Xc(Do,"message",im("message")),Xc(Do,"name",im("name")));Zc(Do,"constructor",cm(1,hm));var Jc=lm(function(){return!(new tr instanceof Kc)}),hb=Jc||lm(function(){return lb.toString!==sb||String(new tr(1,2))!=="2: 1"}),fb=Jc||lm(function(){return new tr(1,"DataCloneError").code!==25}),gL=Jc||tr[om]!==25||fL[om]!==25,rb=ob?hb||fb||gL:Jc;sL({global:!0,constructor:!0,forced:rb},{DOMException:rb?hm:tr});var Lo=jc(ia),$c=Lo.prototype;hb&&(ob||tr===Lo)&&lL($c,"toString",sb);fb&&um&&tr===Lo&&Xc($c,"code",ub(function(){return cb(uL(this).name)}));for(rm in na)Yc(na,rm)&&(sm=na[rm],Io=sm.s,am=cm(6,sm.c),Yc(Lo,Io)||Zc(Lo,Io,am),Yc($c,Io)||Zc($c,Io,am));var sm,Io,am,rm});var _b=G(()=>{"use strict";var vL=li(),xL=Bt(),ym=Li(),vm=Mr(),xm=jn().f,pb=Sn(),yL=Ro(),_L=Yp(),mb=Pc(),fm=tm(),SL=nm(),bL=_n(),xb=Ki(),Fo="DOMException",yb=ym("Error"),Oo=ym(Fo),_m=function(){yL(this,EL);var e=arguments.length,t=mb(e<1?void 0:arguments[0]),n=mb(e<2?void 0:arguments[1],"Error"),r=new Oo(t,n),s=new yb(t);return s.name=Fo,xm(r,"stack",vm(1,SL(s.stack,1))),_L(r,this,_m),r},EL=_m.prototype=Oo.prototype,ML="stack"in new yb(Fo),wL="stack"in new Oo(1,2),dm=Oo&&bL&&Object.getOwnPropertyDescriptor(xL,Fo),TL=!!dm&&!(dm.writable&&dm.configurable),gb=ML&&!TL&&!wL;vL({global:!0,constructor:!0,forced:xb||gb},{DOMException:gb?_m:Oo});var Uo=ym(Fo),vb=Uo.prototype;if(vb.constructor!==Uo){xb||xm(vb,"constructor",vm(1,Uo));for(pm in fm)pb(fm,pm)&&(mm=fm[pm],gm=mm.s,pb(Uo,gm)||xm(Uo,gm,vm(6,mm.c)))}var mm,gm,pm});var bb=G(()=>{"use strict";var AL=Li(),RL=wo(),Sb="DOMException";RL(AL(Sb),Sb)});var Rb=G((L8,Ab)=>{"use strict";var CL=Dt(),PL=Ct(),Eb=Yt(),IL=Js(),DL=Li(),LL=lp(),Mb=function(){},wb=DL("Reflect","construct"),Sm=/^\s*(?:class|function)\b/,UL=CL(Sm.exec),FL=!Sm.test(Mb),No=function(e){if(!Eb(e))return!1;try{return wb(Mb,[],e),!0}catch{return!1}},Tb=function(e){if(!Eb(e))return!1;switch(IL(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return FL||!!UL(Sm,LL(e))}catch{return!0}};Tb.sham=!0;Ab.exports=!wb||PL(function(){var i;return No(No.call)||!No(Object)||!No(function(){i=!0})||i})?Tb:No});var Pb=G((U8,Cb)=>{"use strict";var OL=_n(),NL=jn(),BL=Mr();Cb.exports=function(i,e,t){OL?NL.f(i,e,BL(0,t)):i[e]=t}});var Db=G((F8,Ib)=>{"use strict";var zL=TypeError;Ib.exports=function(i,e){if(i<e)throw new zL("Not enough arguments");return i}});var Fb=G((O8,Ub)=>{"use strict";var kL=Bt(),HL=Ct(),Lb=kL.RegExp,VL=!HL(function(){var i=!0;try{Lb(".","d")}catch{i=!1}var e={},t="",n=i?"dgimsy":"gimsy",r=function(l,c){Object.defineProperty(e,l,{get:function(){return t+=c,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};i&&(s.hasIndices="d");for(var a in s)r(a,s[a]);var o=Object.getOwnPropertyDescriptor(Lb.prototype,"flags").get.call(e);return o!==n||t!==n});Ub.exports={correct:VL}});var bm=G((N8,Ob)=>{"use strict";var GL=Nn();Ob.exports=function(){var i=GL(this),e="";return i.hasIndices&&(e+="d"),i.global&&(e+="g"),i.ignoreCase&&(e+="i"),i.multiline&&(e+="m"),i.dotAll&&(e+="s"),i.unicode&&(e+="u"),i.unicodeSets&&(e+="v"),i.sticky&&(e+="y"),e}});var Qc=G((B8,Bb)=>{"use strict";var qL=Pn(),WL=Sn(),XL=xo(),Nb=Fb(),YL=bm(),jL=RegExp.prototype;Bb.exports=Nb.correct?function(i){return i.flags}:function(i){return!Nb.correct&&XL(jL,i)&&!WL(i,"flags")?qL(YL,i):i.flags}});var kb=G((z8,zb)=>{"use strict";var eu=Dt(),Bo=Map.prototype;zb.exports={Map,set:eu(Bo.set),get:eu(Bo.get),has:eu(Bo.has),remove:eu(Bo.delete),proto:Bo}});var Mm=G((k8,Hb)=>{"use strict";var Em=Dt(),tu=Set.prototype;Hb.exports={Set,add:Em(tu.add),has:Em(tu.has),remove:Em(tu.delete),proto:tu}});var Gb=G((H8,Vb)=>{"use strict";var ZL=Pn();Vb.exports=function(i,e,t){for(var n=t?i:i.iterator,r=i.next,s,a;!(s=ZL(r,n)).done;)if(a=e(s.value),a!==void 0)return a}});var Zb=G((V8,jb)=>{"use strict";var qb=Dt(),$L=Gb(),Wb=Mm(),KL=Wb.Set,Xb=Wb.proto,JL=qb(Xb.forEach),Yb=qb(Xb.keys),QL=Yb(new KL).next;jb.exports=function(i,e,t){return t?$L({iterator:Yb(i),next:QL},e):JL(i,e)}});var Am=G((G8,Kb)=>{"use strict";var eU=Bt(),tU=Ct(),wm=Xd(),Tm=Qp(),$b=eU.structuredClone;Kb.exports=!!$b&&!tU(function(){if(Tm==="DENO"&&wm>92||Tm==="NODE"&&wm>94||Tm==="BROWSER"&&wm>97)return!1;var i=new ArrayBuffer(8),e=$b(i,{transfer:[i]});return i.byteLength!==0||e.byteLength!==8})});var tE=G((q8,eE)=>{"use strict";var Im=Bt(),nU=em(),iU=Am(),rU=Im.structuredClone,Jb=Im.ArrayBuffer,nu=Im.MessageChannel,Pm=!1,Rm,Qb,iu,Cm;if(iU)Pm=function(i){rU(i,{transfer:[i]})};else if(Jb)try{nu||(Rm=nU("worker_threads"),Rm&&(nu=Rm.MessageChannel)),nu&&(Qb=new nu,iu=new Jb(2),Cm=function(i){Qb.port1.postMessage(null,[i])},iu.byteLength===2&&(Cm(iu),iu.byteLength===0&&(Pm=Cm)))}catch{}eE.exports=Pm});var iE=G((W8,nE)=>{"use strict";var sU=Ct(),aU=Mr();nE.exports=!sU(function(){var i=new Error("a");return"stack"in i?(Object.defineProperty(i,"stack",aU(1,7)),i.stack!==7):!0})});var pE=G(()=>{"use strict";var oU=Ki(),lU=li(),vn=Bt(),ko=Li(),Vo=Dt(),Nm=Ct(),cU=_o(),ra=Yt(),uU=Rb(),hU=Zr(),lu=mn(),fU=vc(),dU=Vc(),aE=Nn(),au=Js(),pU=Sn(),mU=Pb(),Dm=$s(),ru=Eo(),gU=Db(),vU=Qc(),cu=kb(),Bm=Mm(),xU=Zb(),rE=tE(),yU=iE(),zm=Am(),zo=vn.Object,_U=vn.Array,oE=vn.Date,lE=vn.Error,SU=vn.TypeError,bU=vn.PerformanceMark,ts=ko("DOMException"),Fm=cu.Map,km=cu.has,cE=cu.get,ou=cu.set,uE=Bm.Set,hE=Bm.add,EU=Bm.has,MU=ko("Object","keys"),wU=Vo([].push),TU=Vo((!0).valueOf),AU=Vo(1.1.valueOf),RU=Vo("".valueOf),CU=Vo(oE.prototype.getTime),Om=cU("structuredClone"),Ho="DataCloneError",su="Transferring",fE=function(i){return!Nm(function(){var e=new vn.Set([7]),t=i(e),n=i(zo(7));return t===e||!t.has(7)||!lu(n)||+n!=7})&&i},sE=function(i,e){return!Nm(function(){var t=new e,n=i({a:t,b:t});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===t.stack)})},PU=function(i){return!Nm(function(){var e=i(new vn.AggregateError([1],Om,{cause:3}));return e.name!=="AggregateError"||e.errors[0]!==1||e.message!==Om||e.cause!==3})},es=vn.structuredClone,IU=oU||!sE(es,lE)||!sE(es,ts)||!PU(es),DU=!es&&fE(function(i){return new bU(Om,{detail:i}).detail}),wr=fE(es)||DU,Lm=function(i){throw new ts("Uncloneable type: "+i,Ho)},Bn=function(i,e){throw new ts((e||"Cloning")+" of "+i+" cannot be properly polyfilled in this engine",Ho)},Um=function(i,e){return wr||Bn(e),wr(i)},LU=function(){var i;try{i=new vn.DataTransfer}catch{try{i=new vn.ClipboardEvent("").clipboardData}catch{}}return i&&i.items&&i.files?i:null},dE=function(i,e,t){if(km(e,i))return cE(e,i);var n=t||au(i),r,s,a,o,l,c;if(n==="SharedArrayBuffer")wr?r=wr(i):r=i;else{var u=vn.DataView;!u&&!ra(i.slice)&&Bn("ArrayBuffer");try{if(ra(i.slice)&&!i.resizable)r=i.slice(0);else for(s=i.byteLength,a=("maxByteLength"in i)?{maxByteLength:i.maxByteLength}:void 0,r=new ArrayBuffer(s,a),o=new u(i),l=new u(r),c=0;c<s;c++)l.setUint8(c,o.getUint8(c))}catch{throw new ts("ArrayBuffer is detached",Ho)}}return ou(e,i,r),r},UU=function(i,e,t,n,r){var s=vn[e];return lu(s)||Bn(e),new s(dE(i.buffer,r),t,n)},gn=function(i,e){if(fU(i)&&Lm("Symbol"),!lu(i))return i;if(e){if(km(e,i))return cE(e,i)}else e=new Fm;var t=au(i),n,r,s,a,o,l,c,u;switch(t){case"Array":s=_U(ru(i));break;case"Object":s={};break;case"Map":s=new Fm;break;case"Set":s=new uE;break;case"RegExp":s=new RegExp(i.source,vU(i));break;case"Error":switch(r=i.name,r){case"AggregateError":s=new(ko(r))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":s=new(ko(r));break;case"CompileError":case"LinkError":case"RuntimeError":s=new(ko("WebAssembly",r));break;default:s=new lE}break;case"DOMException":s=new ts(i.message,i.name);break;case"ArrayBuffer":case"SharedArrayBuffer":s=dE(i,e,t);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":l=t==="DataView"?i.byteLength:i.length,s=UU(i,t,i.byteOffset,l,e);break;case"DOMQuad":try{s=new DOMQuad(gn(i.p1,e),gn(i.p2,e),gn(i.p3,e),gn(i.p4,e))}catch{s=Um(i,t)}break;case"File":if(wr)try{s=wr(i),au(s)!==t&&(s=void 0)}catch{}if(!s)try{s=new File([i],i.name,i)}catch{}s||Bn(t);break;case"FileList":if(a=LU(),a){for(o=0,l=ru(i);o<l;o++)a.items.add(gn(i[o],e));s=a.files}else s=Um(i,t);break;case"ImageData":try{s=new ImageData(gn(i.data,e),i.width,i.height,{colorSpace:i.colorSpace})}catch{s=Um(i,t)}break;default:if(wr)s=wr(i);else switch(t){case"BigInt":s=zo(i.valueOf());break;case"Boolean":s=zo(TU(i));break;case"Number":s=zo(AU(i));break;case"String":s=zo(RU(i));break;case"Date":s=new oE(CU(i));break;case"Blob":try{s=i.slice(0,i.size,i.type)}catch{Bn(t)}break;case"DOMPoint":case"DOMPointReadOnly":n=vn[t];try{s=n.fromPoint?n.fromPoint(i):new n(i.x,i.y,i.z,i.w)}catch{Bn(t)}break;case"DOMRect":case"DOMRectReadOnly":n=vn[t];try{s=n.fromRect?n.fromRect(i):new n(i.x,i.y,i.width,i.height)}catch{Bn(t)}break;case"DOMMatrix":case"DOMMatrixReadOnly":n=vn[t];try{s=n.fromMatrix?n.fromMatrix(i):new n(i)}catch{Bn(t)}break;case"AudioData":case"VideoFrame":ra(i.clone)||Bn(t);try{s=i.clone()}catch{Lm(t)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":Bn(t);default:Lm(t)}}switch(ou(e,i,s),t){case"Array":case"Object":for(c=MU(i),o=0,l=ru(c);o<l;o++)u=c[o],mU(s,u,gn(i[u],e));break;case"Map":i.forEach(function(h,f){ou(s,gn(f,e),gn(h,e))});break;case"Set":i.forEach(function(h){hE(s,gn(h,e))});break;case"Error":Dm(s,"message",gn(i.message,e)),pU(i,"cause")&&Dm(s,"cause",gn(i.cause,e)),r==="AggregateError"?s.errors=gn(i.errors,e):r==="SuppressedError"&&(s.error=gn(i.error,e),s.suppressed=gn(i.suppressed,e));case"DOMException":yU&&Dm(s,"stack",gn(i.stack,e))}return s},FU=function(i,e){if(!lu(i))throw new SU("Transfer option cannot be converted to a sequence");var t=[];dU(i,function(f){wU(t,aE(f))});for(var n=0,r=ru(t),s=new uE,a,o,l,c,u,h;n<r;){if(a=t[n++],o=au(a),c=void 0,o==="ArrayBuffer"?EU(s,a):km(e,a))throw new ts("Duplicate transferable",Ho);if(o==="ArrayBuffer"){hE(s,a);continue}if(zm)c=es(a,{transfer:[a]});else switch(o){case"ImageBitmap":l=vn.OffscreenCanvas,uU(l)||Bn(o,su);try{u=new l(a.width,a.height),h=u.getContext("bitmaprenderer"),h.transferFromImageBitmap(a),c=u.transferToImageBitmap()}catch{}break;case"AudioData":case"VideoFrame":(!ra(a.clone)||!ra(a.close))&&Bn(o,su);try{c=a.clone(),a.close()}catch{}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":Bn(o,su)}if(c===void 0)throw new ts("This object cannot be transferred: "+o,Ho);ou(e,a,c)}return s},OU=function(i){xU(i,function(e){zm?es(e,{transfer:[e]}):ra(e.transfer)?e.transfer():rE?rE(e):Bn("ArrayBuffer",su)})};lU({global:!0,enumerable:!0,sham:!zm,forced:IU},{structuredClone:function(e){var t=gU(arguments.length,1)>1&&!hU(arguments[1])?aE(arguments[1]):void 0,n=t?t.transfer:void 0,r,s;n!==void 0&&(r=new Fm,s=FU(n,r));var a=gn(e,r);return s&&OU(s),a}})});var Hm=G((j8,mE)=>{"use strict";var NU=Bt();mE.exports=NU});var vE=G((Z8,gE)=>{"use strict";u_();N1();z1();V1();XS();jS();db();_b();bb();pE();var BU=Hm();gE.exports=BU.structuredClone});var yE=G(($8,xE)=>{"use strict";var zU=vE();xE.exports=zU});var _E=G(()=>{"use strict";var kU=li(),HU=js(),VU=Eo(),GU=ea(),qU=Tp();kU({target:"Array",proto:!0},{at:function(e){var t=HU(this),n=VU(t),r=GU(e),s=r>=0?r:n+r;return s<0||s>=n?void 0:t[s]}});qU("at")});var Vm=G((Q8,SE)=>{"use strict";var WU=Bt(),XU=Dt();SE.exports=function(i,e){return XU(WU[i].prototype[e])}});var EE=G((eq,bE)=>{"use strict";_E();var YU=Vm();bE.exports=YU("Array","at")});var wE=G((tq,ME)=>{"use strict";var jU=EE();ME.exports=jU});var AE=G((nq,TE)=>{"use strict";var ZU=wE();TE.exports=ZU});var RE=G(()=>{"use strict";var $U=li(),KU=Sn();$U({target:"Object",stat:!0},{hasOwn:KU})});var PE=G((sq,CE)=>{"use strict";RE();var JU=Hm();CE.exports=JU.Object.hasOwn});var DE=G((aq,IE)=>{"use strict";var QU=PE();IE.exports=QU});var UE=G((oq,LE)=>{"use strict";var eF=DE();LE.exports=eF});var OE=G((lq,FE)=>{"use strict";var Gm=Ct(),tF=Bt(),qm=tF.RegExp,Wm=Gm(function(){var i=qm("a","y");return i.lastIndex=2,i.exec("abcd")!==null}),nF=Wm||Gm(function(){return!qm("a","y").sticky}),iF=Wm||Gm(function(){var i=qm("^r","gy");return i.lastIndex=2,i.exec("str")!==null});FE.exports={BROKEN_CARET:iF,MISSED_STICKY:nF,UNSUPPORTED_Y:Wm}});var BE=G((cq,NE)=>{"use strict";var rF=Ct(),sF=Bt(),aF=sF.RegExp;NE.exports=rF(function(){var i=aF(".","s");return!(i.dotAll&&i.test(`
`)&&i.flags==="s")})});var kE=G((uq,zE)=>{"use strict";var oF=Ct(),lF=Bt(),cF=lF.RegExp;zE.exports=oF(function(){var i=cF("(?<a>b)","g");return i.exec("b").groups.a!=="b"||"b".replace(i,"$<a>c")!=="bc"})});var fu=G((hq,qE)=>{"use strict";var sa=Pn(),hu=Dt(),uF=Qs(),hF=bm(),fF=OE(),dF=Sc(),pF=Qr(),mF=Ks().get,gF=BE(),vF=kE(),xF=dF("native-string-replace",String.prototype.replace),uu=RegExp.prototype.exec,Xm=uu,yF=hu("".charAt),_F=hu("".indexOf),SF=hu("".replace),HE=hu("".slice),Ym=(function(){var i=/a/,e=/b*/g;return sa(uu,i,"a"),sa(uu,e,"a"),i.lastIndex!==0||e.lastIndex!==0})(),GE=fF.BROKEN_CARET,jm=/()??/.exec("")[1]!==void 0,bF=Ym||jm||GE||gF||vF,VE=function(i,e){for(var t=i.groups=pF(null),n=0;n<e.length;n++){var r=e[n];t[r[0]]=i[r[1]]}};bF&&(Xm=function(e){var t=this,n=mF(t),r=uF(e),s=n.raw,a,o,l;if(s)return s.lastIndex=t.lastIndex,a=sa(Xm,s,r),t.lastIndex=s.lastIndex,a&&n.groups&&VE(a,n.groups),a;var c=n.groups,u=GE&&t.sticky,h=sa(hF,t),f=t.source,d=0,m=r;if(u){h=SF(h,"y",""),_F(h,"g")===-1&&(h+="g"),m=HE(r,t.lastIndex);var v=t.lastIndex>0&&yF(r,t.lastIndex-1);t.lastIndex>0&&(!t.multiline||t.multiline&&v!==`
`&&v!=="\r"&&v!=="\u2028"&&v!=="\u2029")&&(f="(?: (?:"+f+"))",m=" "+m,d++),o=new RegExp("^(?:"+f+")",h)}jm&&(o=new RegExp("^"+f+"$(?!\\s)",h)),Ym&&(l=t.lastIndex);var g=sa(uu,u?o:t,m);return u?g?(g.input=r,g[0]=HE(g[0],d),g.index=t.lastIndex,t.lastIndex+=g[0].length):t.lastIndex=0:Ym&&g&&(t.lastIndex=t.global?g.index+g[0].length:l),jm&&g&&g.length>1&&sa(xF,g[0],o,function(){for(var p=1;p<arguments.length-2;p++)arguments[p]===void 0&&(g[p]=void 0)}),g&&c&&VE(g,c),g});qE.exports=Xm});var Zm=G(()=>{"use strict";var EF=li(),WE=fu();EF({target:"RegExp",proto:!0,forced:/./.exec!==WE},{exec:WE})});var $E=G((pq,ZE)=>{"use strict";var MF=vo(),jE=Function.prototype,XE=jE.apply,YE=jE.call;ZE.exports=typeof Reflect=="object"&&Reflect.apply||(MF?YE.bind(XE):function(){return YE.apply(XE,arguments)})});var nM=G((mq,tM)=>{"use strict";Zm();var KE=Pn(),JE=Ui(),wF=fu(),QE=Ct(),eM=bn(),TF=$s(),AF=eM("species"),$m=RegExp.prototype;tM.exports=function(i,e,t,n){var r=eM(i),s=!QE(function(){var c={};return c[r]=function(){return 7},""[i](c)!==7}),a=s&&!QE(function(){var c=!1,u=/a/;if(i==="split"){var h={};h[AF]=function(){return u},u={constructor:h,flags:""},u[r]=/./[r]}return u.exec=function(){return c=!0,null},u[r](""),!c});if(!s||!a||t){var o=/./[r],l=e(r,""[i],function(c,u,h,f,d){var m=u.exec;return m===wF||m===$m.exec?s&&!d?{done:!0,value:KE(o,u,h,f)}:{done:!0,value:KE(c,h,u,f)}:{done:!1}});JE(String.prototype,i,l[0]),JE($m,r,l[1])}n&&TF($m[r],"sham",!0)}});var aM=G((gq,sM)=>{"use strict";var Km=Dt(),RF=ea(),CF=Qs(),PF=$r(),IF=Km("".charAt),iM=Km("".charCodeAt),DF=Km("".slice),rM=function(i){return function(e,t){var n=CF(PF(e)),r=RF(t),s=n.length,a,o;return r<0||r>=s?i?"":void 0:(a=iM(n,r),a<55296||a>56319||r+1===s||(o=iM(n,r+1))<56320||o>57343?i?IF(n,r):a:i?DF(n,r,r+2):(a-55296<<10)+(o-56320)+65536)}};sM.exports={codeAt:rM(!1),charAt:rM(!0)}});var lM=G((vq,oM)=>{"use strict";var LF=aM().charAt;oM.exports=function(i,e,t){return e+(t&&LF(i,e).length||1)}});var tg=G((xq,cM)=>{"use strict";var eg=Dt(),UF=js(),FF=Math.floor,Jm=eg("".charAt),OF=eg("".replace),Qm=eg("".slice),NF=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,BF=/\$([$&'`]|\d{1,2})/g;cM.exports=function(i,e,t,n,r,s){var a=t+i.length,o=n.length,l=BF;return r!==void 0&&(r=UF(r),l=NF),OF(s,l,function(c,u){var h;switch(Jm(u,0)){case"$":return"$";case"&":return i;case"`":return Qm(e,0,t);case"'":return Qm(e,a);case"<":h=r[Qm(u,1,-1)];break;default:var f=+u;if(f===0)return c;if(f>o){var d=FF(f/10);return d===0?c:d<=o?n[d-1]===void 0?Jm(u,1):n[d-1]+Jm(u,1):c}h=n[f-1]}return h===void 0?"":h})}});var fM=G((yq,hM)=>{"use strict";var uM=Pn(),zF=Nn(),kF=Yt(),HF=Ji(),VF=fu(),GF=TypeError;hM.exports=function(i,e){var t=i.exec;if(kF(t)){var n=uM(t,i,e);return n!==null&&zF(n),n}if(HF(i)==="RegExp")return uM(VF,i,e);throw new GF("RegExp#exec called on incompatible receiver")}});var gM=G(()=>{"use strict";var qF=$E(),dM=Pn(),du=Dt(),WF=nM(),XF=Ct(),YF=Nn(),jF=Yt(),ZF=mn(),$F=ea(),KF=vp(),ns=Qs(),JF=$r(),QF=lM(),eO=Ys(),tO=tg(),nO=Qc(),iO=fM(),rO=bn(),ig=rO("replace"),sO=Math.max,aO=Math.min,oO=du([].concat),ng=du([].push),aa=du("".indexOf),pM=du("".slice),lO=function(i){return i===void 0?i:String(i)},cO=(function(){return"a".replace(/./,"$0")==="$0"})(),mM=(function(){return/./[ig]?/./[ig]("a","$0")==="":!1})(),uO=!XF(function(){var i=/./;return i.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(i,"$<a>")!=="7"});WF("replace",function(i,e,t){var n=mM?"$":"$0";return[function(s,a){var o=JF(this),l=ZF(s)?eO(s,ig):void 0;return l?dM(l,s,o,a):dM(e,ns(o),s,a)},function(r,s){var a=YF(this),o=ns(r),l=jF(s);l||(s=ns(s));var c=ns(nO(a));if(typeof s=="string"&&!~aa(s,n)&&!~aa(s,"$<")&&!~aa(c,"y")){var u=t(e,a,o,s);if(u.done)return u.value}var h=!!~aa(c,"g"),f;h&&(f=!!~aa(c,"u")||!!~aa(c,"v"),a.lastIndex=0);for(var d=[],m;m=iO(a,o),!(m===null||(ng(d,m),!h));){var v=ns(m[0]);v===""&&(a.lastIndex=QF(o,KF(a.lastIndex),f))}for(var g="",p=0,y=0;y<d.length;y++){m=d[y];for(var x=ns(m[0]),_=sO(aO($F(m.index),o.length),0),T=[],M,A=1;A<m.length;A++)ng(T,lO(m[A]));var C=m.groups;if(l){var S=oO([x],T,_,o);C!==void 0&&ng(S,C),M=ns(qF(s,void 0,S))}else M=tO(x,o,_,T,C,s);_>=p&&(g+=pM(o,p,_)+M,p=_+x.length)}return g+pM(o,p)}]},!uO||!cO||mM)});var xM=G((bq,vM)=>{"use strict";var hO=mn(),fO=Ji(),dO=bn(),pO=dO("match");vM.exports=function(i){var e;return hO(i)&&((e=i[pO])!==void 0?!!e:fO(i)==="RegExp")}});var SM=G(()=>{"use strict";var mO=li(),gO=Pn(),sg=Dt(),yM=$r(),vO=Yt(),xO=mn(),yO=xM(),oa=Qs(),_O=Ys(),SO=Qc(),bO=tg(),EO=bn(),MO=Ki(),wO=EO("replace"),TO=TypeError,rg=sg("".indexOf),AO=sg("".replace),_M=sg("".slice),RO=Math.max;mO({target:"String",proto:!0},{replaceAll:function(e,t){var n=yM(this),r,s,a,o,l,c,u,h,f,d,m=0,v="";if(xO(e)){if(r=yO(e),r&&(s=oa(yM(SO(e))),!~rg(s,"g")))throw new TO("`.replaceAll` does not allow non-global regexes");if(a=_O(e,wO),a)return gO(a,e,n,t);if(MO&&r)return AO(oa(n),e,t)}for(o=oa(n),l=oa(e),c=vO(t),c||(t=oa(t)),u=l.length,h=RO(1,u),f=rg(o,l);f!==-1;)d=c?oa(t(l,f,o)):bO(l,o,f,[],void 0,t),v+=_M(o,m,f)+d,m=f+u,f=f+h>o.length?-1:rg(o,l,f+h);return m<o.length&&(v+=_M(o,m)),v}})});var EM=G((wq,bM)=>{"use strict";Zm();gM();SM();var CO=Vm();bM.exports=CO("String","replaceAll")});var wM=G((Tq,MM)=>{"use strict";var PO=EM();MM.exports=PO});var AM=G((Aq,TM)=>{"use strict";var IO=wM();TM.exports=IO});var $t=G(b=>{"use strict";var DO={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},LO={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rT=0,$g=1,sT=2,UO=3,FO=0,Rv=1,aT=2,Ni=3,pr=0,Fn=1,zi=2,ur=0,Es=1,Kg=2,Jg=3,Qg=4,oT=5,Lr=100,lT=101,cT=102,uT=103,hT=104,fT=200,dT=201,pT=202,mT=203,ah=204,oh=205,gT=206,vT=207,xT=208,yT=209,_T=210,ST=211,bT=212,ET=213,MT=214,lh=0,ch=1,uh=2,ws=3,hh=4,fh=5,dh=6,ph=7,Jl=0,wT=1,TT=2,hr=0,AT=1,RT=2,CT=3,PT=4,IT=5,DT=6,LT=7,e0="attached",UT="detached",id=300,mr=301,Fr=302,fl=303,dl=304,Qa=306,pl=1e3,ui=1001,ml=1002,xn=1003,Cv=1004,OO=1004,Ca=1005,NO=1005,sn=1006,rl=1007,BO=1007,Hi=1008,zO=1008,Ti=1009,Pv=1010,Iv=1011,Fa=1012,rd=1013,gr=1014,Vn=1015,eo=1016,sd=1017,ad=1018,Oa=1020,Dv=35902,Lv=35899,Uv=1021,Fv=1022,Un=1023,Na=1026,Ba=1027,od=1028,Ql=1029,Ov=1030,ld=1031,kO=1032,cd=1033,sl=33776,al=33777,ol=33778,ll=33779,mh=35840,gh=35841,vh=35842,xh=35843,yh=36196,_h=37492,Sh=37496,bh=37808,Eh=37809,Mh=37810,wh=37811,Th=37812,Ah=37813,Rh=37814,Ch=37815,Ph=37816,Ih=37817,Dh=37818,Lh=37819,Uh=37820,Fh=37821,Oh=36492,Nh=36494,Bh=36495,zh=36283,kh=36284,Hh=36285,Vh=36286,FT=2200,OT=2201,NT=2202,gl=2300,Gh=2301,sh=2302,_s=2400,Ss=2401,vl=2402,ud=2500,Nv=2501,HO=0,VO=1,GO=2,BT=3200,zT=3201,qO=3202,WO=3203,kr=0,kT=1,lr="",Hn="srgb",Ts="srgb-linear",xl="linear",Tt="srgb",XO=0,vs=7680,YO=7681,jO=7682,ZO=7683,$O=34055,KO=34056,JO=5386,QO=512,eN=513,tN=514,nN=515,iN=516,rN=517,sN=518,t0=519,HT=512,VT=513,GT=514,Bv=515,qT=516,WT=517,XT=518,YT=519,yl=35044,aN=35048,oN=35040,lN=35045,cN=35049,uN=35041,hN=35046,fN=35050,dN=35042,pN="100",n0="300 es",Kn=2e3,za=2001,mN={COMPUTE:"compute",RENDER:"render"},gN={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},vN={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],RM=1234567,Ms=Math.PI/180,ka=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function zv(i,e){return(i%e+e)%e}function xN(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function yN(i,e,t){return i!==e?(t-i)/(e-i):0}function cl(i,e,t){return(1-t)*i+t*e}function _N(i,e,t,n){return cl(i,e,1-Math.exp(-t*n))}function SN(i,e=1){return e-Math.abs(zv(i,e*2)-e)}function bN(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function EN(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function MN(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wN(i,e){return i+Math.random()*(e-i)}function TN(i){return i*(.5-Math.random())}function AN(i){i!==void 0&&(RM=i);let e=RM+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RN(i){return i*Ms}function CN(i){return i*ka}function PN(i){return(i&i-1)===0&&i!==0}function IN(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function DN(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function LN(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var UN={DEG2RAD:Ms,RAD2DEG:ka,generateUUID:Jn,clamp:Ye,euclideanModulo:zv,mapLinear:xN,inverseLerp:yN,lerp:cl,damp:_N,pingpong:SN,smoothstep:bN,smootherstep:EN,randInt:MN,randFloat:wN,randFloatSpread:TN,seededRandom:AN,degToRad:RN,radToDeg:CN,isPowerOfTwo:PN,ceilPowerOfTwo:IN,floorPowerOfTwo:DN,setQuaternionFromProperEuler:LN,normalize:st,denormalize:Ln},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==m){let g=1-o,p=l*f+c*d+u*m+h*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),M=Math.atan2(T,p*y);g=Math.sin(g*M)/T,o=Math.sin(o*M)/T}let _=o*y;if(l=l*g+f*_,c=c*g+d*_,u=u*g+m*_,h=h*g+v*_,g===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(CM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(CM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ag.copy(this).projectOnVector(e),this.sub(ag)}reflect(e){return this.sub(ag.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ag=new D,CM=new Tn,it=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=r[0],g=r[3],p=r[6],y=r[1],x=r[4],_=r[7],T=r[2],M=r[5],A=r[8];return s[0]=a*v+o*y+l*T,s[3]=a*g+o*x+l*M,s[6]=a*p+o*_+l*A,s[1]=c*v+u*y+h*T,s[4]=c*g+u*x+h*M,s[7]=c*p+u*_+h*A,s[2]=f*v+d*y+m*T,s[5]=f*g+d*x+m*M,s[8]=f*p+d*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(og.makeScale(e,t)),this}rotate(e){return this.premultiply(og.makeRotation(-e)),this}translate(e,t){return this.premultiply(og.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},og=new it;function jT(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var FN={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Pa(i,e){return new FN[i](e)}function _l(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ZT(){let i=_l("canvas");return i.style.display="block",i}var PM={};function Sl(i){i in PM||(PM[i]=!0,console.warn(i))}function ON(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var IM=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),DM=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NN(){let i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=Da(r.r),r.g=Da(r.g),r.b=Da(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?xl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:e,whitePoint:n,transfer:xl,toXYZ:IM,fromXYZ:DM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:IM,fromXYZ:DM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),i}var mt=NN();function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var la,qh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=_l("canvas")),la.width=e.width,la.height=e.height;let r=la.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_l("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},BN=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BN++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lg(r[a].image)):s.push(lg(r[a]))}else s=lg(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function lg(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zN=0,cg=new D,tn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,r=ui,s=sn,a=Hi,o=Un,l=Ti,c=i.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zN++}),this.uuid=Jn(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cg).x}get height(){return this.source.getSize(cg).y}get depth(){return this.source.getSize(cg).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=id;tn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(d+1)/2,T=(p+1)/2,M=(u+f)/4,A=(h+v)/4,C=(m+g)/4;return x>_&&x>T?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=M/n,s=A/n):_>T?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=M/r,s=C/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=C/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new tn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},i0=class extends di{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ha(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Va=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},r0=class extends di{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Va(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},hn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pu.copy(n.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),mu.subVectors(this.max,Go),ca.subVectors(e.a,Go),ua.subVectors(e.b,Go),ha.subVectors(e.c,Go),Tr.subVectors(ua,ca),Ar.subVectors(ha,ua),is.subVectors(ca,ha);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-is.z,is.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,is.z,0,-is.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-is.y,is.x,0];return!ug(t,ca,ua,ha,mu)||(t=[1,0,0,0,1,0,0,0,1],!ug(t,ca,ua,ha,mu))?!1:(gu.crossVectors(Tr,Ar),t=[gu.x,gu.y,gu.z],ug(t,ca,ua,ha,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,pu=new hn,ca=new D,ua=new D,ha=new D,Tr=new D,Ar=new D,is=new D,Go=new D,mu=new D,gu=new D,rs=new D;function ug(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rs.fromArray(i,s);let o=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kN=new hn,qo=new D,hg=new D,an=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kN.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(hg)),this.expandByPoint(qo.copy(e.center).sub(hg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ir=new D,fg=new D,vu=new D,Rr=new D,dg=new D,xu=new D,pg=new D,Or=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fg.copy(e).add(t).multiplyScalar(.5),vu.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(fg);let s=e.distanceTo(t)*.5,a=-this.direction.dot(vu),o=Rr.dot(this.direction),l=-Rr.dot(vu),c=Rr.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fg).addScaledVector(vu,f),d}intersectSphere(e,t){ir.subVectors(e.center,this.origin);let n=ir.dot(this.direction),r=ir.dot(ir)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,s){dg.subVectors(t,e),xu.subVectors(n,e),pg.crossVectors(dg,xu);let a=this.direction.dot(pg),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rr.subVectors(this.origin,e);let l=o*this.direction.dot(xu.crossVectors(Rr,xu));if(l<0)return null;let c=o*this.direction.dot(dg.cross(Rr));if(c<0||l+c>a)return null;let u=-o*Rr.dot(pg);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,m,v,g)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),a=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HN,e,VN)}lookAt(e,t,n){let r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Cr.crossVectors(n,Zn),Cr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Cr.crossVectors(n,Zn)),Cr.normalize(),yu.crossVectors(Zn,Cr),r[0]=Cr.x,r[4]=yu.x,r[8]=Zn.x,r[1]=Cr.y,r[5]=yu.y,r[9]=Zn.y,r[2]=Cr.z,r[6]=yu.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],_=n[11],T=n[15],M=r[0],A=r[4],C=r[8],S=r[12],E=r[1],P=r[5],O=r[9],k=r[13],W=r[2],X=r[6],N=r[10],L=r[14],F=r[3],z=r[7],Y=r[11],te=r[15];return s[0]=a*M+o*E+l*W+c*F,s[4]=a*A+o*P+l*X+c*z,s[8]=a*C+o*O+l*N+c*Y,s[12]=a*S+o*k+l*L+c*te,s[1]=u*M+h*E+f*W+d*F,s[5]=u*A+h*P+f*X+d*z,s[9]=u*C+h*O+f*N+d*Y,s[13]=u*S+h*k+f*L+d*te,s[2]=m*M+v*E+g*W+p*F,s[6]=m*A+v*P+g*X+p*z,s[10]=m*C+v*O+g*N+p*Y,s[14]=m*S+v*k+g*L+p*te,s[3]=y*M+x*E+_*W+T*F,s[7]=y*A+x*P+_*X+T*z,s[11]=y*C+x*O+_*N+T*Y,s[15]=y*S+x*k+_*L+T*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+v*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=h*g*c-v*f*c+v*l*d-o*g*d-h*l*p+o*f*p,x=m*f*c-u*g*c-m*l*d+a*g*d+u*l*p-a*f*p,_=u*v*c-m*h*c+m*o*d-a*v*d-u*o*p+a*h*p,T=m*h*l-u*v*l-m*o*f+a*v*f+u*o*g-a*h*g,M=t*y+n*x+r*_+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/M;return e[0]=y*A,e[1]=(v*f*s-h*g*s-v*r*d+n*g*d+h*r*p-n*f*p)*A,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*p+n*l*p)*A,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*A,e[4]=x*A,e[5]=(u*g*s-m*f*s+m*r*d-t*g*d-u*r*p+t*f*p)*A,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*A,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*A,e[8]=_*A,e[9]=(m*h*s-u*v*s-m*n*d+t*v*d+u*n*p-t*h*p)*A,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*A,e[12]=T*A,e[13]=(u*v*r-m*h*r+m*n*f-t*v*f-u*n*g+t*h*g)*A,e[14]=(m*o*r-a*v*r-m*n*l+t*v*l+a*n*g-t*o*g)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,v=a*u,g=a*h,p=o*h,y=l*c,x=l*u,_=l*h,T=n.x,M=n.y,A=n.z;return r[0]=(1-(v+p))*T,r[1]=(d+_)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(d-_)*M,r[5]=(1-(f+p))*M,r[6]=(g+y)*M,r[7]=0,r[8]=(m+x)*A,r[9]=(g-y)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=fa.set(r[0],r[1],r[2]).length(),a=fa.set(r[4],r[5],r[6]).length(),o=fa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bi.copy(this);let c=1/s,u=1/a,h=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Kn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Kn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===za)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Kn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Kn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===za)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fa=new D,bi=new Ke,HN=new D(0,0,0),VN=new D(1,1,1),Cr=new D,yu=new D,Zn=new D,LM=new Ke,UM=new Tn,Qn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return LM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(LM,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return UM.setFromEuler(this),this.setFromQuaternion(UM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},GN=0,FM=new D,da=new Tn,rr=new Ke,_u=new D,Wo=new D,qN=new D,WN=new Tn,OM=new D(1,0,0),NM=new D(0,1,0),BM=new D(0,0,1),zM={type:"added"},XN={type:"removed"},pa={type:"childadded",child:null},mg={type:"childremoved",child:null},_t=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GN++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Qn,n=new Tn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new it}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(OM,e)}rotateY(e){return this.rotateOnAxis(NM,e)}rotateZ(e){return this.rotateOnAxis(BM,e)}translateOnAxis(e,t){return FM.copy(e).applyQuaternion(this.quaternion),this.position.add(FM.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(OM,e)}translateY(e){return this.translateOnAxis(NM,e)}translateZ(e){return this.translateOnAxis(BM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_u.copy(e):_u.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Wo,_u,this.up):rr.lookAt(_u,Wo,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),da.setFromRotationMatrix(rr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zM),pa.child=e,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XN),mg.child=e,this.dispatchEvent(mg),mg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zM),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,qN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,WN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};_t.DEFAULT_UP=new D(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=new D,sr=new D,gg=new D,ar=new D,ma=new D,ga=new D,kM=new D,vg=new D,xg=new D,yg=new D,_g=new gt,Sg=new gt,bg=new gt,ki=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ei.subVectors(e,t),r.cross(Ei);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ei.subVectors(r,t),sr.subVectors(n,t),gg.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(sr),l=Ei.dot(gg),c=sr.dot(sr),u=sr.dot(gg),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(a,ar.y),l.addScaledVector(o,ar.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return _g.setScalar(0),Sg.setScalar(0),bg.setScalar(0),_g.fromBufferAttribute(e,t),Sg.fromBufferAttribute(e,n),bg.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_g,s.x),a.addScaledVector(Sg,s.y),a.addScaledVector(bg,s.z),a}static isFrontFacing(e,t,n,r){return Ei.subVectors(n,t),sr.subVectors(e,t),Ei.cross(sr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ei.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ma.subVectors(r,n),ga.subVectors(s,n),vg.subVectors(e,n);let l=ma.dot(vg),c=ga.dot(vg);if(l<=0&&c<=0)return t.copy(n);xg.subVectors(e,r);let u=ma.dot(xg),h=ga.dot(xg);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ma,a);yg.subVectors(e,s);let d=ma.dot(yg),m=ga.dot(yg);if(m>=0&&d<=m)return t.copy(s);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ga,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return kM.subVectors(s,r),o=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(kM,o);let p=1/(g+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(ma,a).addScaledVector(ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$T={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Eg(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=zv(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Eg(a,s,e+1/3),this.g=Eg(a,s,e),this.b=Eg(a,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){let n=$T[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return mt.workingToColorSpace(Mn.copy(this),e),Math.round(Ye(Mn.r*255,0,255))*65536+Math.round(Ye(Mn.g*255,0,255))*256+Math.round(Ye(Mn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,s=Mn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Hn){mt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Su);let n=cl(Pr.h,Su.h,t),r=cl(Pr.s,Su.s,t),s=cl(Pr.l,Su.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Ae;Ae.NAMES=$T;var YN=0,fn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YN++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Es,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ah&&(n.blendSrc=this.blendSrc),this.blendDst!==oh&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qi=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cr=jN();function jN(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function kn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ye(i,-65504,65504),cr.floatView[0]=i;let e=cr.uint32View[0],t=e>>23&511;return cr.baseTable[t]+((e&8388607)>>cr.shiftTable[t])}function tl(i){let e=i>>10;return cr.uint32View[0]=cr.mantissaTable[cr.offsetTable[e]+(i&1023)]+cr.exponentTable[e],cr.floatView[0]}var s0=class{static toHalfFloat(e){return kn(e)}static fromHalfFloat(e){return tl(e)}},en=new D,bu=new se,ZN=0,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZN++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}},a0=class extends Mt{constructor(e,t,n){super(new Int8Array(e),t,n)}},o0=class extends Mt{constructor(e,t,n){super(new Uint8Array(e),t,n)}},l0=class extends Mt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},c0=class extends Mt{constructor(e,t,n){super(new Int16Array(e),t,n)}},El=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},u0=class extends Mt{constructor(e,t,n){super(new Int32Array(e),t,n)}},Ml=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},h0=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=tl(this.array[e*this.itemSize]);return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=kn(t),this}getY(e){let t=tl(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=kn(t),this}getZ(e){let t=tl(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=kn(t),this}getW(e){let t=tl(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=kn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=kn(t),this.array[e+1]=kn(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=kn(t),this.array[e+1]=kn(n),this.array[e+2]=kn(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=kn(t),this.array[e+1]=kn(n),this.array[e+2]=kn(r),this.array[e+3]=kn(s),this}},Ie=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$N=0,ci=new Ke,Mg=new _t,va=new D,$n=new hn,Xo=new hn,un=new D,at=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$N++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jT(e)?Ml:El)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Mg.lookAt(e),Mg.updateMatrix(),this.applyMatrix4(Mg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(va).negate(),this.translate(va.x,va.y,va.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xo.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors($n.min,Xo.min),$n.expandByPoint(un),un.addVectors($n.max,Xo.max),$n.expandByPoint(un)):($n.expandByPoint(Xo.min),$n.expandByPoint(Xo.max))}$n.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)un.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(un));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&(va.fromBufferAttribute(e,c),un.add(va)),r=Math.max(r,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;let c=new D,u=new D,h=new D,f=new se,d=new se,m=new se,v=new D,g=new D;function p(C,S,E){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),o[C].add(v),o[S].add(v),o[E].add(v),l[C].add(g),l[S].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){let E=y[C],P=E.start,O=E.count;for(let k=P,W=P+O;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let x=new D,_=new D,T=new D,M=new D;function A(C){T.fromBufferAttribute(r,C),M.copy(T);let S=o[C];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(M,S);let P=_.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=y.length;C<S;++C){let E=y[C],P=E.start,O=E.count;for(let k=P,W=P+O;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},HM=new Ke,ss=new Or,Eu=new an,VM=new D,Mu=new D,wu=new D,Tu=new D,wg=new D,Au=new D,GM=new D,Ru=new D,Zt=class extends _t{constructor(e=new at,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Au.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(wg.fromBufferAttribute(h,e),a?Au.addScaledVector(wg,u):Au.addScaledVector(wg.sub(t),u))}t.add(Au)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eu.copy(n.boundingSphere),Eu.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(Eu.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Eu,VM)===null||ss.origin.distanceToSquared(VM)>(e.far-e.near)**2))&&(HM.copy(s).invert(),ss.copy(e.ray).applyMatrix4(HM),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){let M=o.getX(_),A=o.getX(_+1),C=o.getX(_+2);r=Cu(this,p,e,n,c,u,h,M,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);r=Cu(this,a,e,n,c,u,h,y,x,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){let M=_,A=_+1,C=_+2;r=Cu(this,p,e,n,c,u,h,M,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=g,x=g+1,_=g+2;r=Cu(this,a,e,n,c,u,h,y,x,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function KN(i,e,t,n,r,s,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===pr,o),l===null)return null;Ru.copy(o),Ru.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ru);return c<t.near||c>t.far?null:{distance:c,point:Ru.clone(),object:i}}function Cu(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Mu),i.getVertexPosition(l,wu),i.getVertexPosition(c,Tu);let u=KN(i,e,t,n,Mu,wu,Tu,GM);if(u){let h=new D;ki.getBarycoord(GM,Mu,wu,Tu,h),r&&(u.uv=ki.getInterpolatedAttribute(r,o,l,c,h,new se)),s&&(u.uv1=ki.getInterpolatedAttribute(s,o,l,c,h,new se)),a&&(u.normal=ki.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};ki.getNormal(Mu,wu,Tu,f.normal),u.face=f,u.barycoord=h}return u}var As=class i extends at{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function m(v,g,p,y,x,_,T,M,A,C,S){let E=_/A,P=T/C,O=_/2,k=T/2,W=M/2,X=A+1,N=C+1,L=0,F=0,z=new D;for(let Y=0;Y<N;Y++){let te=Y*P-k;for(let le=0;le<X;le++){let Re=le*E-O;z[v]=Re*y,z[g]=te*x,z[p]=W,c.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[p]=M>0?1:-1,u.push(z.x,z.y,z.z),h.push(le/A),h.push(1-Y/C),L+=1}}for(let Y=0;Y<C;Y++)for(let te=0;te<A;te++){let le=f+te+X*Y,Re=f+te+X*(Y+1),Ve=f+(te+1)+X*(Y+1),pe=f+(te+1)+X*Y;l.push(le,Re,pe),l.push(Re,Ve,pe),F+=6}o.addGroup(d,F,S),d+=F,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dn(i){let e={};for(let t=0;t<i.length;t++){let n=qa(i[t]);for(let r in n)e[r]=n[r]}return e}function JN(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function KT(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var JT={clone:qa,merge:Dn},QN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eB=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QN,this.fragmentShader=eB,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=JN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wa=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ir=new D,qM=new se,WM=new se,rn=class extends Wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,qM,WM),t.subVectors(WM,qM)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xa=-90,ya=1,Wh=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(xa,ya,e,t);r.layers=this.layers,this.add(r);let s=new rn(xa,ya,e,t);s.layers=this.layers,this.add(s);let a=new rn(xa,ya,e,t);a.layers=this.layers,this.add(a);let o=new rn(xa,ya,e,t);o.layers=this.layers,this.add(o);let l=new rn(xa,ya,e,t);l.layers=this.layers,this.add(l);let c=new rn(xa,ya,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Rs=class extends tn{constructor(e=[],t=mr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xh=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new As(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:ur});s.uniforms.tEquirect.value=t;let a=new Zt(r,s),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=sn),new Wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ur=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},tB={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tB)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yh=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},jh=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zh=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yl,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new D,Cs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wl=class extends fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_a,Yo=new D,Sa=new D,ba=new D,Ea=new se,jo=new se,QT=new Ke,Pu=new D,Zo=new D,Iu=new D,XM=new se,Tg=new se,YM=new se,$h=class extends _t{constructor(e=new wl){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xa(t,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new Cs(n,3,0,!1)),_a.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=_a,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sa.setFromMatrixScale(this.matrixWorld),QT.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sa.multiplyScalar(-ba.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Du(Pu.set(-.5,-.5,0),ba,a,Sa,r,s),Du(Zo.set(.5,-.5,0),ba,a,Sa,r,s),Du(Iu.set(.5,.5,0),ba,a,Sa,r,s),XM.set(0,0),Tg.set(1,0),YM.set(1,1);let o=e.ray.intersectTriangle(Pu,Zo,Iu,!1,Yo);if(o===null&&(Du(Zo.set(-.5,.5,0),ba,a,Sa,r,s),Tg.set(0,1),o=e.ray.intersectTriangle(Pu,Iu,Zo,!1,Yo),o===null))return;let l=e.ray.origin.distanceTo(Yo);l<e.near||l>e.far||t.push({distance:l,point:Yo.clone(),uv:ki.getInterpolation(Yo,Pu,Zo,Iu,XM,Tg,YM,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Du(i,e,t,n,r,s){Ea.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(jo.x=s*Ea.x-r*Ea.y,jo.y=r*Ea.x+s*Ea.y):jo.copy(Ea),i.copy(e),i.x+=jo.x,i.y+=jo.y,i.applyMatrix4(QT)}var Lu=new D,jM=new D,Kh=class extends _t{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,r=t.length;n<r;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Lu.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(Lu);this.getObjectForDistance(r).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Lu.setFromMatrixPosition(e.matrixWorld),jM.setFromMatrixPosition(this.matrixWorld);let n=Lu.distanceTo(jM)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let r=0,s=n.length;r<s;r++){let a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},ZM=new D,$M=new gt,KM=new gt,nB=new D,JM=new Ke,Uu=new D,Ag=new an,QM=new Ke,Rg=new Or,Jh=class extends Zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=e0,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uu),this.boundingBox.expandByPoint(Uu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uu),this.boundingSphere.expandByPoint(Uu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ag.copy(this.boundingSphere),Ag.applyMatrix4(r),e.ray.intersectsSphere(Ag)!==!1&&(QM.copy(r).invert(),Rg.copy(e.ray).applyMatrix4(QM),!(this.boundingBox!==null&&Rg.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rg)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===e0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===UT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;$M.fromBufferAttribute(r.attributes.skinIndex,e),KM.fromBufferAttribute(r.attributes.skinWeight,e),ZM.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=KM.getComponent(s);if(a!==0){let o=$M.getComponent(s);JM.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nB.copy(ZM).applyMatrix4(JM),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Tl=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},hi=class extends tn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=xn,u=xn,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ew=new Ke,iB=new Ke,Qh=class i{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:iB;ew.multiplyMatrices(o,t[s]),ew.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hi(t,e,e,Un,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Tl),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Nr=class extends Mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ma=new Ke,tw=new Ke,Fu=[],nw=new hn,rB=new Ke,$o=new Zt,Ko=new an,ef=class extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rB)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),nw.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(nw)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),Ko.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ma),tw.multiplyMatrices(n,Ma),$o.matrixWorld=tw,$o.raycast(e,Fu);for(let a=0,o=Fu.length;a<o;a++){let l=Fu[a];l.instanceId=s,l.object=this,t.push(l)}Fu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(r*this.count),r,this.count,od,Vn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cg=new D,sB=new D,aB=new it,Bi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Cg.subVectors(n,t).cross(sB.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cg),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||aB.getNormalMatrix(e),r=this.coplanarPoint(Cg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new an,oB=new se(.5,.5),Ou=new D,Br=class{constructor(e=new Bi,t=new Bi,n=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],y=s[12],x=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-a,d-u,p-m,T-y).normalize(),r[1].setComponents(c+a,d+u,p+m,T+y).normalize(),r[2].setComponents(c+o,d+h,p+v,T+x).normalize(),r[3].setComponents(c-o,d-h,p-v,T-x).normalize(),n)r[4].setComponents(l,f,g,_).normalize(),r[5].setComponents(c-l,d-f,p-g,T-_).normalize();else if(r[4].setComponents(c-l,d-f,p-g,T-_).normalize(),t===Kn)r[5].setComponents(c+l,d+f,p+g,T+_).normalize();else if(t===za)r[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=oB.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ou.x=r.normal.x>0?e.max.x:e.min.x,Ou.y=r.normal.y>0?e.max.y:e.min.y,Ou.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=new Ke,Oi=new Br,tf=class i{constructor(){this.coordinateSystem=Kn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Oi.setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth),Oi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Oi.setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth),Oi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Oi.setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth),Oi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Oi.setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth),Oi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Oi.setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth),Oi.containsPoint(e))return!0}return!1}clone(){return new i}};function Pg(i,e){return i-e}function lB(i,e){return i.z-e.z}function cB(i,e){return e.z-i.z}var f0=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},zn=new Ke,uB=new Ae(1,1,1),iw=new Br,hB=new tf,Nu=new hn,os=new an,Jo=new D,rw=new D,fB=new D,Ig=new f0,wn=new Zt,Bu=[];function dB(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ls(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var nf=class extends Zt{constructor(e,t,n=t*2,r){super(new at,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new hi(t,e,e,Un,Vn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new hi(t,e,e,Ql,gr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new hi(t,e,e,Un,Vn);n.colorSpace=mt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),h=new Mt(u,l,c);t.setAttribute(s,h)}if(e.getIndex()!==null){let s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Mt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingBoxAt(s,Nu).applyMatrix4(zn),e.union(Nu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingSphereAt(s,os).applyMatrix4(zn),e.union(os)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Pg),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));let s=this._matricesTexture;zn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;let a=this._colorsTexture;return a&&(uB.toArray(a.image.data,r*4),a.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?a.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Pg),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(r&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let u in n.attributes){let h=t.getAttribute(u),f=n.getAttribute(u);dB(h,f,l);let d=h.itemSize;for(let m=h.count,v=c;m<v;m++){let g=l+m;for(let p=0;p<d;p++)f.setComponent(g,p,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(r){let u=o.indexStart,h=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)s.setX(u+f,l+a.getX(f));for(let f=a.count,d=h;f<d;f++)s.setX(u+f,l);s.needsUpdate=!0,s.addUpdateRange(u,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].active&&n[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,r=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),s=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=r[a],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){let{indexStart:u,vertexStart:h,reservedIndexCount:f}=c,d=s.index,m=d.array,v=e-h;for(let g=u;g<u+f;g++)m[g]=m[g]+v;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:u,reservedVertexCount:h}=c,f=s.attributes;for(let d in f){let m=f[d],{array:v,itemSize:g}=m;v.copyWithin(e*g,u*g,(u+h)*g),m.addUpdateRange(e*g,h*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let s=new hn,a=n.index,o=n.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let u=l;a&&(u=a.getX(u)),s.expandByPoint(Jo.fromBufferAttribute(o,u))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let s=new an;this.getBoundingBoxAt(e,Nu),Nu.getCenter(s.center);let a=n.index,o=n.attributes.position,l=0;for(let c=r.start,u=r.start+r.count;c<u;c++){let h=c;a&&(h=a.getX(h)),Jo.fromBufferAttribute(o,h),l=Math.max(l,s.center.distanceToSquared(Jo))}s.radius=Math.sqrt(l),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Pg);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),s=new Int32Array(e);ls(this._multiDrawCounts,r),ls(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ls(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ls(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ls(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new at,this._initializeGeometry(s));let a=this.geometry;s.index&&ls(s.index.array,a.index.array);for(let o in s.attributes)ls(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,a=this.geometry;wn.material=this.material,wn.geometry.index=a.index,wn.geometry.attributes=a.attributes,wn.geometry.boundingBox===null&&(wn.geometry.boundingBox=new hn),wn.geometry.boundingSphere===null&&(wn.geometry.boundingSphere=new an);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,u=r[c];wn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,wn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,wn.geometry.boundingBox),this.getBoundingSphereAt(c,wn.geometry.boundingSphere),wn.raycast(e,Bu);for(let h=0,f=Bu.length;h<f;h++){let d=Bu[h];d.object=this,d.batchId=o,t.push(d)}Bu.length=0}wn.material=null,wn.geometry.index=null,wn.geometry.attributes={},wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data,v=n.isArrayCamera?hB:iw;f&&!n.isArrayCamera&&(zn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),iw.setFromProjectionMatrix(zn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){zn.copy(this.matrixWorld).invert(),Jo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(zn),rw.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(zn);for(let x=0,_=l.length;x<_;x++)if(l[x].visible&&l[x].active){let T=l[x].geometryIndex;this.getMatrixAt(x,zn),this.getBoundingSphereAt(T,os).applyMatrix4(zn);let M=!1;if(f&&(M=!v.intersectsSphere(os,n)),!M){let A=h[T],C=fB.subVectors(os.center,Jo).dot(rw);Ig.push(A.start,A.count,C,x)}}let p=Ig.list,y=this.customSort;y===null?p.sort(s.transparent?cB:lB):y.call(this,p,n);for(let x=0,_=p.length;x<_;x++){let T=p[x];c[g]=T.start*o,u[g]=T.count,m[g]=T.index,g++}Ig.reset()}else for(let p=0,y=l.length;p<y;p++)if(l[p].visible&&l[p].active){let x=l[p].geometryIndex,_=!1;if(f&&(this.getMatrixAt(p,zn),this.getBoundingSphereAt(x,os).applyMatrix4(zn),_=!v.intersectsSphere(os,n)),!_){let T=h[x];c[g]=T.start*o,u[g]=T.count,m[g]=p,g++}}d.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}},yn=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rf=new D,sf=new D,sw=new Ke,Qo=new Or,zu=new an,Dg=new D,aw=new D,Wi=class extends _t{constructor(e=new at,t=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)rf.fromBufferAttribute(t,r-1),sf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=rf.distanceTo(sf);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zu.copy(n.boundingSphere),zu.applyMatrix4(r),zu.radius+=s,e.ray.intersectsSphere(zu)===!1)return;sw.copy(r).invert(),Qo.copy(e.ray).applyMatrix4(sw);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=u.getX(v),y=u.getX(v+1),x=ku(this,e,Qo,l,p,y,v);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(d),p=ku(this,e,Qo,l,v,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=ku(this,e,Qo,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=ku(this,e,Qo,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ku(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(rf.fromBufferAttribute(o,r),sf.fromBufferAttribute(o,s),t.distanceSqToSegment(rf,sf,Dg,aw)>n)return;Dg.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dg);if(!(c<e.near||c>e.far))return{distance:c,point:aw.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ow=new D,lw=new D,pi=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ow.fromBufferAttribute(t,r),lw.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ow.distanceTo(lw);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},af=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Al=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cw=new Ke,d0=new Or,Hu=new an,Vu=new D,of=class extends _t{constructor(e=new at,t=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(r),Hu.radius+=s,e.ray.intersectsSphere(Hu)===!1)return;cw.copy(r).invert(),d0.copy(e.ray).applyMatrix4(cw);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,v=d;m<v;m++){let g=c.getX(m);Vu.fromBufferAttribute(h,g),uw(Vu,g,l,r,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,v=d;m<v;m++)Vu.fromBufferAttribute(h,m),uw(Vu,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function uw(i,e,t,n,r,s,a){let o=d0.distanceSqToPoint(i);if(o<t){let l=new D;d0.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var lf=class extends tn{constructor(e,t,n,r,s=sn,a=sn,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}},p0=class extends lf{constructor(e,t,n,r,s,a,o,l){super({},e,t,n,r,s,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},m0=class extends tn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=xn,this.minFilter=xn,this.generateMipmaps=!1,this.needsUpdate=!0}},Ya=class extends tn{constructor(e,t,n,r,s,a,o,l,c,u,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},g0=class extends Ya{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=ui,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},v0=class extends Ya{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,mr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},x0=class extends tn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rl=class extends tn{constructor(e,t,n=gr,r,s,a,o=xn,l=xn,c,u=Na,h=1){if(u!==Na&&u!==Ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cl=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cf=class i extends at{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,m=n*2+s,v=r+1,g=new D,p=new D;for(let y=0;y<=m;y++){let x=0,_=0,T=0,M=0;if(y<=n){let S=y/n,E=S*Math.PI/2;_=-u-e*Math.cos(E),T=e*Math.sin(E),M=-e*Math.cos(E),x=S*h}else if(y<=n+s){let S=(y-n)/s;_=-u+S*t,T=e,M=0,x=h+S*f}else{let S=(y-n-s)/n,E=S*Math.PI/2;_=u+e*Math.sin(E),T=e*Math.cos(E),M=e*Math.sin(E),x=h+f+S*h}let A=Math.max(0,Math.min(1,x/d)),C=0;y===0?C=.5/r:y===m&&(C=-.5/r);for(let S=0;S<=r;S++){let E=S/r,P=E*Math.PI*2,O=Math.sin(P),k=Math.cos(P);p.x=-T*k,p.y=_,p.z=T*O,o.push(p.x,p.y,p.z),g.set(-T*k,M,T*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(E+C,A)}if(y>0){let S=(y-1)*v;for(let E=0;E<r;E++){let P=S+E,O=S+E+1,k=y*v+E,W=y*v+E+1;a.push(P,O,k),a.push(O,W,k)}}}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},uf=class i extends at{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new D,u=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pl=class i extends at{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],d=[],m=0,v=[],g=n/2,p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function y(){let _=new D,T=new D,M=0,A=(t-e)/n;for(let C=0;C<=s;C++){let S=[],E=C/s,P=E*(t-e)+e;for(let O=0;O<=r;O++){let k=O/r,W=k*l+o,X=Math.sin(W),N=Math.cos(W);T.x=P*X,T.y=-E*n+g,T.z=P*N,h.push(T.x,T.y,T.z),_.set(X,A,N).normalize(),f.push(_.x,_.y,_.z),d.push(k,1-E),S.push(m++)}v.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){let E=v[S][C],P=v[S+1][C],O=v[S+1][C+1],k=v[S][C+1];(e>0||S!==0)&&(u.push(E,P,k),M+=3),(t>0||S!==s-1)&&(u.push(P,O,k),M+=3)}c.addGroup(p,M,0),p+=M}function x(_){let T=m,M=new se,A=new D,C=0,S=_===!0?e:t,E=_===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),m++;let P=m;for(let O=0;O<=r;O++){let W=O/r*l+o,X=Math.cos(W),N=Math.sin(W);A.x=S*N,A.y=g*E,A.z=S*X,h.push(A.x,A.y,A.z),f.push(0,E,0),M.x=X*.5+.5,M.y=N*.5*E+.5,d.push(M.x,M.y),m++}for(let O=0;O<r;O++){let k=T+O,W=P+O;_===!0?u.push(W,W+1,k):u.push(W+1,W,k),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Il=class i extends Pl{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class i extends at{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new D,_=new D,T=new D;for(let M=0;M<t.length;M+=3)d(t[M+0],x),d(t[M+1],_),d(t[M+2],T),l(x,_,T,y)}function l(y,x,_,T){let M=T+1,A=[];for(let C=0;C<=M;C++){A[C]=[];let S=y.clone().lerp(_,C/M),E=x.clone().lerp(_,C/M),P=M-C;for(let O=0;O<=P;O++)O===0&&C===M?A[C][O]=S:A[C][O]=S.clone().lerp(E,O/P)}for(let C=0;C<M;C++)for(let S=0;S<2*(M-C)-1;S++){let E=Math.floor(S/2);S%2===0?(f(A[C][E+1]),f(A[C+1][E]),f(A[C][E])):(f(A[C][E+1]),f(A[C+1][E+1]),f(A[C+1][E]))}}function c(y){let x=new D;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){let y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let _=g(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(_,1-T)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],T=a[y+4],M=Math.max(x,_,T),A=Math.min(x,_,T);M>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){let y=new D,x=new D,_=new D,T=new D,M=new se,A=new se,C=new se;for(let S=0,E=0;S<s.length;S+=9,E+=6){y.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),M.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),C.set(a[E+4],a[E+5]),T.copy(y).add(x).add(_).divideScalar(3);let P=g(T);v(M,E+0,y,P),v(A,E+2,x,P),v(C,E+4,_,P)}}function v(y,x,_,T){T<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},hf=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Gu=new D,qu=new D,Lg=new D,Wu=new ki,ff=class extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ms*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:p}=Wu;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Wu.getNormal(Lg),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let x=(y+1)%3,_=h[y],T=h[x],M=Wu[u[y]],A=Wu[u[x]],C=`${_}_${T}`,S=`${T}_${_}`;S in f&&f[S]?(Lg.dot(f[S].normal)<=s&&(d.push(M.x,M.y,M.z),d.push(A.x,A.y,A.z)),f[S]=null):C in f||(f[C]={index0:c[y],index1:c[x],normal:Lg.clone()})}}for(let m in f)if(f[m]){let{index0:v,index1:g}=f[m];Gu.fromBufferAttribute(o,v),qu.fromBufferAttribute(o,g),d.push(Gu.x,Gu.y,Gu.z),d.push(qu.x,qu.y,qu.z)}this.setAttribute("position",new Ie(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new se:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],a=[],o=new D,l=new Ke;for(let d=0;d<=e;d++){let m=d/e;r[d]=this.getTangentAt(m,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ye(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ye(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ja=class extends ti{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},df=class extends ja{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kv(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return i+e*s+t*a+n*o}}}var Xu=new D,Ug=new kv,Fg=new kv,Og=new kv,pf=class extends ti{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Xu.subVectors(r[0],r[1]).add(r[0]),c=Xu);let h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Xu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ug.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,v,g),Fg.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,v,g),Og.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Ug.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Fg.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Og.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ug.calc(l),Fg.calc(l),Og.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hw(i,e,t,n,r){let s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function pB(i,e){let t=1-i;return t*t*e}function mB(i,e){return 2*(1-i)*i*e}function gB(i,e){return i*i*e}function ul(i,e,t,n){return pB(i,e)+mB(i,t)+gB(i,n)}function vB(i,e){let t=1-i;return t*t*t*e}function xB(i,e){let t=1-i;return 3*t*t*i*e}function yB(i,e){return 3*(1-i)*i*i*e}function _B(i,e){return i*i*i*e}function hl(i,e,t,n,r){return vB(i,e)+xB(i,t)+yB(i,n)+_B(i,r)}var Dl=class extends ti{constructor(e=new se,t=new se,n=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new se){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hl(e,r.x,s.x,a.x,o.x),hl(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mf=class extends ti{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hl(e,r.x,s.x,a.x,o.x),hl(e,r.y,s.y,a.y,o.y),hl(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ll=class extends ti{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gf=class extends ti{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends ti{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ul(e,r.x,s.x,a.x),ul(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fl=class extends ti{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ul(e,r.x,s.x,a.x),ul(e,r.y,s.y,a.y),ul(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(hw(o,l.x,c.x,u.x,h.x),hw(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new se().fromArray(r))}return this}},vf=Object.freeze({__proto__:null,ArcCurve:df,CatmullRomCurve3:pf,CubicBezierCurve:Dl,CubicBezierCurve3:mf,EllipseCurve:ja,LineCurve:Ll,LineCurve3:gf,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Fl,SplineCurve:Ol}),xf=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new vf[r.type]().fromJSON(r))}return this}},Za=class extends xf{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ll(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ul(this.currentPoint.clone(),new se(e,t),new se(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Dl(this.currentPoint.clone(),new se(e,t),new se(n,r),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new ja(e,t,n,r,s,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},dr=class extends Za{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Za().fromJSON(r))}return this}};function SB(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=eA(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=TB(i,e,s,t)),i.length>80*t){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){let d=i[f],m=i[f+1];d<o&&(o=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Nl(s,a,t,o,l,c,0),a}function eA(i,e,t,n,r){let s;if(r===NB(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=fw(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=fw(a/n|0,i[a],i[a+1],s);return s&&$a(s,s.next)&&(zl(s),s=s.next),s}function Ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($a(t,t.next)||Gt(t.prev,t,t.next)===0)){if(zl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nl(i,e,t,n,r,s,a){if(!i)return;!a&&s&&IB(i,n,r,s);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?EB(i,n,r,s):bB(i)){e.push(l.i,i.i,c.i),zl(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=MB(Ps(i),e),Nl(i,e,t,n,r,s,2)):a===2&&wB(i,e,t,n,r,s):Nl(Ps(i),e,t,n,r,s,1);break}}}function bB(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),h=Math.min(o,l,c),f=Math.max(r,s,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&nl(r,o,s,l,a,c,m.x,m.y)&&Gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function EB(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Gt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,d=Math.min(o,l,c),m=Math.min(u,h,f),v=Math.max(o,l,c),g=Math.max(u,h,f),p=y0(d,m,e,t,n),y=y0(v,g,e,t,n),x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&nl(o,u,l,h,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&nl(o,u,l,h,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&nl(o,u,l,h,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&nl(o,u,l,h,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function MB(i,e){let t=i;do{let n=t.prev,r=t.next.next;!$a(n,r)&&nA(n,t,t.next,r)&&Bl(n,r)&&Bl(r,n)&&(e.push(n.i,t.i,r.i),zl(t),zl(t.next),t=i=r),t=t.next}while(t!==i);return Ps(t)}function wB(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&UB(a,o)){let l=iA(a,o);a=Ps(a,a.next),l=Ps(l,l.next),Nl(a,e,t,n,r,s,0),Nl(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function TB(i,e,t,n){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=eA(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(LB(c))}r.sort(AB);for(let s=0;s<r.length;s++)t=RB(r[s],t);return t}function AB(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function RB(i,e){let t=CB(i,e);if(!t)return e;let n=iA(t,i);return Ps(n,n.next),Ps(t,t.next)}function CB(i,e){let t=e,n=i.x,r=i.y,s=-1/0,a;if($a(i,t))return t;do{if($a(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&tA(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);Bl(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&PB(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function PB(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function IB(i,e,t,n){let r=i;do r.z===0&&(r.z=y0(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,DB(r)}function DB(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function y0(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function LB(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tA(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function nl(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&tA(i,e,t,n,r,s,a,o)}function UB(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!FB(i,e)&&(Bl(i,e)&&Bl(e,i)&&OB(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||$a(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $a(i,e){return i.x===e.x&&i.y===e.y}function nA(i,e,t,n){let r=ju(Gt(i,e,t)),s=ju(Gt(i,e,n)),a=ju(Gt(t,n,i)),o=ju(Gt(t,n,e));return!!(r!==s&&a!==o||r===0&&Yu(i,t,e)||s===0&&Yu(i,n,e)||a===0&&Yu(t,i,n)||o===0&&Yu(t,e,n))}function Yu(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ju(i){return i>0?1:i<0?-1:0}function FB(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nA(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bl(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function OB(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function iA(i,e){let t=_0(i.i,i.x,i.y),n=_0(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function fw(i,e,t,n){let r=_0(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _0(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function NB(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}var S0=class{static triangulate(e,t,n=2){return SB(e,t,n)}},wi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];dw(e),pw(n,e);let a=e.length;t.forEach(dw);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,pw(n,t[l]);let o=S0.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function dw(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pw(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var yf=class i extends at{constructor(e=new dr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:BB,x,_=!1,T,M,A,C;p&&(x=p.getSpacedPoints(u),_=!0,f=!1,T=p.computeFrenetFrames(u,!1),M=new D,A=new D,C=new D),f||(g=0,d=0,m=0,v=0);let S=o.extractPoints(c),E=S.shape,P=S.holes;if(!wi.isClockWise(E)){E=E.reverse();for(let ae=0,ie=P.length;ae<ie;ae++){let Q=P[ae];wi.isClockWise(Q)&&(P[ae]=Q.reverse())}}function k(ae){let Q=10000000000000001e-36,ee=ae[0];for(let ge=1;ge<=ae.length;ge++){let ce=ge%ae.length,ve=ae[ce],tt=ve.x-ee.x,Qe=ve.y-ee.y,I=tt*tt+Qe*Qe,w=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(ee.x),Math.abs(ee.y)),q=Q*w*w;if(I<=q){ae.splice(ce,1),ge--;continue}ee=ve}}k(E),P.forEach(k);let W=P.length,X=E;for(let ae=0;ae<W;ae++){let ie=P[ae];E=E.concat(ie)}function N(ae,ie,Q){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ie,Q)}let L=E.length;function F(ae,ie,Q){let ee,ge,ce,ve=ae.x-ie.x,tt=ae.y-ie.y,Qe=Q.x-ae.x,I=Q.y-ae.y,w=ve*ve+tt*tt,q=ve*I-tt*Qe;if(Math.abs(q)>Number.EPSILON){let K=Math.sqrt(w),oe=Math.sqrt(Qe*Qe+I*I),J=ie.x-tt/K,ze=ie.y+ve/K,me=Q.x-I/oe,Oe=Q.y+Qe/oe,Ne=((me-J)*I-(Oe-ze)*Qe)/(ve*I-tt*Qe);ee=J+ve*Ne-ae.x,ge=ze+tt*Ne-ae.y;let ue=ee*ee+ge*ge;if(ue<=2)return new se(ee,ge);ce=Math.sqrt(ue/2)}else{let K=!1;ve>Number.EPSILON?Qe>Number.EPSILON&&(K=!0):ve<-Number.EPSILON?Qe<-Number.EPSILON&&(K=!0):Math.sign(tt)===Math.sign(I)&&(K=!0),K?(ee=-tt,ge=ve,ce=Math.sqrt(w)):(ee=ve,ge=tt,ce=Math.sqrt(w/2))}return new se(ee/ce,ge/ce)}let z=[];for(let ae=0,ie=X.length,Q=ie-1,ee=ae+1;ae<ie;ae++,Q++,ee++)Q===ie&&(Q=0),ee===ie&&(ee=0),z[ae]=F(X[ae],X[Q],X[ee]);let Y=[],te,le=z.concat();for(let ae=0,ie=W;ae<ie;ae++){let Q=P[ae];te=[];for(let ee=0,ge=Q.length,ce=ge-1,ve=ee+1;ee<ge;ee++,ce++,ve++)ce===ge&&(ce=0),ve===ge&&(ve=0),te[ee]=F(Q[ee],Q[ce],Q[ve]);Y.push(te),le=le.concat(te)}let Re;if(g===0)Re=wi.triangulateShape(X,P);else{let ae=[],ie=[];for(let Q=0;Q<g;Q++){let ee=Q/g,ge=d*Math.cos(ee*Math.PI/2),ce=m*Math.sin(ee*Math.PI/2)+v;for(let ve=0,tt=X.length;ve<tt;ve++){let Qe=N(X[ve],z[ve],ce);Pe(Qe.x,Qe.y,-ge),ee===0&&ae.push(Qe)}for(let ve=0,tt=W;ve<tt;ve++){let Qe=P[ve];te=Y[ve];let I=[];for(let w=0,q=Qe.length;w<q;w++){let K=N(Qe[w],te[w],ce);Pe(K.x,K.y,-ge),ee===0&&I.push(K)}ee===0&&ie.push(I)}}Re=wi.triangulateShape(ae,ie)}let Ve=Re.length,pe=m+v;for(let ae=0;ae<L;ae++){let ie=f?N(E[ae],le[ae],pe):E[ae];_?(A.copy(T.normals[0]).multiplyScalar(ie.x),M.copy(T.binormals[0]).multiplyScalar(ie.y),C.copy(x[0]).add(A).add(M),Pe(C.x,C.y,C.z)):Pe(ie.x,ie.y,0)}for(let ae=1;ae<=u;ae++)for(let ie=0;ie<L;ie++){let Q=f?N(E[ie],le[ie],pe):E[ie];_?(A.copy(T.normals[ae]).multiplyScalar(Q.x),M.copy(T.binormals[ae]).multiplyScalar(Q.y),C.copy(x[ae]).add(A).add(M),Pe(C.x,C.y,C.z)):Pe(Q.x,Q.y,h/u*ae)}for(let ae=g-1;ae>=0;ae--){let ie=ae/g,Q=d*Math.cos(ie*Math.PI/2),ee=m*Math.sin(ie*Math.PI/2)+v;for(let ge=0,ce=X.length;ge<ce;ge++){let ve=N(X[ge],z[ge],ee);Pe(ve.x,ve.y,h+Q)}for(let ge=0,ce=P.length;ge<ce;ge++){let ve=P[ge];te=Y[ge];for(let tt=0,Qe=ve.length;tt<Qe;tt++){let I=N(ve[tt],te[tt],ee);_?Pe(I.x,I.y+x[u-1].y,x[u-1].x+Q):Pe(I.x,I.y,h+Q)}}}Z(),ne();function Z(){let ae=r.length/3;if(f){let ie=0,Q=L*ie;for(let ee=0;ee<Ve;ee++){let ge=Re[ee];Se(ge[2]+Q,ge[1]+Q,ge[0]+Q)}ie=u+g*2,Q=L*ie;for(let ee=0;ee<Ve;ee++){let ge=Re[ee];Se(ge[0]+Q,ge[1]+Q,ge[2]+Q)}}else{for(let ie=0;ie<Ve;ie++){let Q=Re[ie];Se(Q[2],Q[1],Q[0])}for(let ie=0;ie<Ve;ie++){let Q=Re[ie];Se(Q[0]+L*u,Q[1]+L*u,Q[2]+L*u)}}n.addGroup(ae,r.length/3-ae,0)}function ne(){let ae=r.length/3,ie=0;_e(X,ie),ie+=X.length;for(let Q=0,ee=P.length;Q<ee;Q++){let ge=P[Q];_e(ge,ie),ie+=ge.length}n.addGroup(ae,r.length/3-ae,1)}function _e(ae,ie){let Q=ae.length;for(;--Q>=0;){let ee=Q,ge=Q-1;ge<0&&(ge=ae.length-1);for(let ce=0,ve=u+g*2;ce<ve;ce++){let tt=L*ce,Qe=L*(ce+1),I=ie+ee+tt,w=ie+ge+tt,q=ie+ge+Qe,K=ie+ee+Qe;ct(I,w,q,K)}}}function Pe(ae,ie,Q){l.push(ae),l.push(ie),l.push(Q)}function Se(ae,ie,Q){yt(ae),yt(ie),yt(Q);let ee=r.length/3,ge=y.generateTopUV(n,r,ee-3,ee-2,ee-1);U(ge[0]),U(ge[1]),U(ge[2])}function ct(ae,ie,Q,ee){yt(ae),yt(ie),yt(ee),yt(ie),yt(Q),yt(ee);let ge=r.length/3,ce=y.generateSideWallUV(n,r,ge-6,ge-3,ge-2,ge-1);U(ce[0]),U(ce[1]),U(ce[3]),U(ce[1]),U(ce[2]),U(ce[3])}function yt(ae){r.push(l[ae*3+0]),r.push(l[ae*3+1]),r.push(l[ae*3+2])}function U(ae){s.push(ae.x),s.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zB(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vf[r.type]().fromJSON(r)),new i(n,e.options)}},BB={generateTopUV:function(i,e,t,n,r){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new se(s,a),new se(o,l),new se(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-h),new se(f,1-m),new se(v,1-p)]:[new se(o,1-l),new se(u,1-h),new se(d,1-m),new se(g,1-p)]}};function zB(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _f=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Sf=class i extends at{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ye(r,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],u=1/t,h=new D,f=new se,d=new D,m=new D,v=new D,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=t;y++){let x=n+y*u*r,_=Math.sin(x),T=Math.cos(x);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*_,h.y=e[M].y,h.z=e[M].x*T,a.push(h.x,h.y,h.z),f.x=y/t,f.y=M/(e.length-1),o.push(f.x,f.y);let A=l[3*M+0]*_,C=l[3*M+1],S=l[3*M+0]*T;c.push(A,C,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let _=x+y*e.length,T=_,M=_+e.length,A=_+e.length+1,C=_+1;s.push(T,M,C),s.push(A,C,M)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},kl=class i extends zr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ka=class i extends at{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let y=p*f-a;for(let x=0;x<c;x++){let _=x*h-s;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,_=y+c*(p+1),T=y+1+c*(p+1),M=y+1+c*p;d.push(x,_,M),d.push(_,T,M)}this.setIndex(d),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},bf=class i extends at{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/r,d=new D,m=new se;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){let p=s+g/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let v=0;v<r;v++){let g=v*(n+1);for(let p=0;p<n;p++){let y=p+g,x=y,_=y+n+1,T=y+n+2,M=y+1;o.push(x,_,M),o.push(_,T,M)}}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ef=class i extends at{constructor(e=new dr([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2));function c(u){let h=r.length/3,f=u.extractPoints(t),d=f.shape,m=f.holes;wi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];wi.isClockWise(y)===!0&&(m[g]=y.reverse())}let v=wi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){let y=d[g];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){let y=v[g],x=y[0]+h,_=y[1]+h,T=y[2]+h;n.push(x,_,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return kB(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}};function kB(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Hl=class i extends at{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let M=T/t;h.x=-e*Math.cos(r+M*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+M*s)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(M+_,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=u[p][y+1],_=u[p][y],T=u[p+1][y],M=u[p+1][y+1];(p!==0||a>0)&&d.push(x,_,M),(p!==n-1||l<Math.PI)&&d.push(_,T,M)}this.setIndex(d),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Mf=class i extends zr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},wf=class i extends at{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){let v=m/r*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){let v=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,y=(r+1)*d+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Tf=class i extends at{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],u=[],h=new D,f=new D,d=new D,m=new D,v=new D,g=new D,p=new D;for(let x=0;x<=n;++x){let _=x/n*s*Math.PI*2;y(_,s,a,e,d),y(_+.01,s,a,e,m),g.subVectors(m,d),p.addVectors(m,d),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let T=0;T<=r;++T){let M=T/r*Math.PI*2,A=-t*Math.cos(M),C=t*Math.sin(M);h.x=d.x+(A*p.x+C*v.x),h.y=d.y+(A*p.y+C*v.y),h.z=d.z+(A*p.z+C*v.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(x/n),u.push(T/r)}}for(let x=1;x<=n;x++)for(let _=1;_<=r;_++){let T=(r+1)*(x-1)+(_-1),M=(r+1)*x+(_-1),A=(r+1)*x+_,C=(r+1)*(x-1)+_;o.push(T,M,C),o.push(M,A,C)}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2));function y(x,_,T,M,A){let C=Math.cos(x),S=Math.sin(x),E=T/_*x,P=Math.cos(E);A.x=M*(2+P)*.5*C,A.y=M*(2+P)*S*.5,A.z=M*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Af=class i extends at{constructor(e=new Fl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new se,u=new D,h=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function v(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),y(),p()}function g(x){u=e.getPointAt(x/t,u);let _=a.normals[x],T=a.binormals[x];for(let M=0;M<=r;M++){let A=M/r*Math.PI*2,C=Math.sin(A),S=-Math.cos(A);l.x=S*_.x+C*T.x,l.y=S*_.y+C*T.y,l.z=S*_.z+C*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=r;_++){let T=(r+1)*(x-1)+(_-1),M=(r+1)*x+(_-1),A=(r+1)*x+_,C=(r+1)*(x-1)+_;m.push(T,M,C),m.push(M,A,C)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=r;_++)c.x=x/t,c.y=_/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new vf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Rf=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new D,s=new D;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let m=f,v=f+d;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),y=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,y),mw(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),mw(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mw(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var gw=Object.freeze({__proto__:null,BoxGeometry:As,CapsuleGeometry:cf,CircleGeometry:uf,ConeGeometry:Il,CylinderGeometry:Pl,DodecahedronGeometry:hf,EdgesGeometry:ff,ExtrudeGeometry:yf,IcosahedronGeometry:_f,LatheGeometry:Sf,OctahedronGeometry:kl,PlaneGeometry:Ka,PolyhedronGeometry:zr,RingGeometry:bf,ShapeGeometry:Ef,SphereGeometry:Hl,TetrahedronGeometry:Mf,TorusGeometry:wf,TorusKnotGeometry:Tf,TubeGeometry:Af,WireframeGeometry:Rf}),Cf=class extends fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Pf=class extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vl=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},If=class extends Vl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Df=class extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lf=class extends fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uf=class extends fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ff=class extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gl=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Of=class extends fn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nf=class extends yn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sA(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function b0(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Hv(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function HB(i,e,t,n,r=30){let s=i.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){let m=c.times[d]*r;if(!(m<t||m>=n)){h.push(c.times[d]);for(let v=0;v<u;++v)f.push(c.values[d*u+v])}}h.length!==0&&(c.times=bs(h,c.times.constructor),c.values=bs(f,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function VB(i,e=0,t=i,n=30){n<=0&&(n=30);let r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0,d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);let m=o.times.length-1,v;if(s<=o.times[0]){let p=u,y=h-u;v=o.values.slice(p,y)}else if(s>=o.times[m]){let p=m*h+u,y=p+h-u;v=o.values.slice(p,y)}else{let p=o.createInterpolant(),y=u,x=h-u;p.evaluate(s),v=p.resultBuffer.slice(y,x)}l==="quaternion"&&new Tn().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let p=0;p<g;++p){let y=p*d+f;if(l==="quaternion")Tn.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{let x=d-f*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return i.blendMode=Nv,i}var E0=class{static convertArray(e,t){return bs(e,t)}static isTypedArray(e){return rA(e)}static getKeyframeOrder(e){return sA(e)}static sortedArray(e,t,n){return b0(e,t,n)}static flattenJSON(e,t,n,r){Hv(e,t,n,r)}static subclip(e,t,n,r,s=30){return HB(e,t,n,r,s)}static makeClipAdditive(e,t=0,n=e,r=30){return VB(e,t,n,r)}},Is=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bf=class extends Is{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ss:s=e,o=2*t-n;break;case vl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ss:a=e,l=2*n-t;break;case vl:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let T=0;T!==o;++T)s[T]=p*a[u+T]+y*a[c+T]+x*a[l+T]+_*a[h+T];return s}},Wl=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}},zf=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case Gh:t=this.InterpolantFactoryMethodLinear;break;case sh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return Gh;case this.InterpolantFactoryMethodSmooth:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&rA(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Gh;var vr=class extends Gn{constructor(e,t,n){super(e,t,n)}};vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=gl;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Xl.prototype.ValueTypeName="color";var Ds=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Ds.prototype.ValueTypeName="number";var kf=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)Tn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ls=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends Gn{constructor(e,t,n){super(e,t,n)}};xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=gl;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Us.prototype.ValueTypeName="vector";var Fs=class{constructor(e="",t=-1,n=[],r=ud){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qB(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=sA(l);l=b0(l,1,u),c=b0(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,m,v){if(d.length!==0){let g=[],p=[];Hv(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(let v in d){let g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){let x=f[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}r.push(new Ds(".morphTargetInfluence["+v+"]",g,p))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(Us,d+".position",f,"pos",r),n(Ls,d+".quaternion",f,"rot",r),n(Us,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function GB(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return Xl;case"quaternion":return Ls;case"bool":case"boolean":return vr;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qB(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GB(i.type);if(i.times===void 0){let t=[],n=[];Hv(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},aA=new Yl,An=class{constructor(e){this.manager=e!==void 0?e:aA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};An.DEFAULT_MATERIAL_NAME="__DEFAULT";var or={},M0=class extends Error{constructor(e,t){super(e),this.response=t}},Ai=class extends An{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Gi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:n,onError:r});return}or[e]=[],or[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=or[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,v=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let M=0,A=u.length;M<A;M++){let C=u[M];C.onProgress&&C.onProgress(T)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new M0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Gi.add(`file:${e}`,c);let u=or[e];delete or[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=or[e];if(u===void 0)throw this.manager.itemError(e),c;delete or[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},w0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new Ai(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){let t=[];for(let n=0;n<e.length;n++){let r=Fs.parse(e[n]);t.push(r)}return t}},T0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=[],o=new Ya,l=new Ai(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(f){let d=s.parse(f,!0);a[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=sn),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else l.load(e,function(h){let f=s.parse(h,!0);if(f.isCubemap){let d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)a[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+v]),a[m].format=f.format,a[m].width=f.width,a[m].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=sn),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}},wa=new WeakMap,Os=class extends An{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Gi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=wa.get(a);h===void 0&&(h=[],wa.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=_l("img");function l(){u(),t&&t(this);let h=wa.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}wa.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Gi.remove(`image:${e}`);let f=wa.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}wa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}},A0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=new Rs;s.colorSpace=Hn;let a=new Os(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}},R0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new hi,o=new Ai(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ui,a.wrapT=c.wrapT!==void 0?c.wrapT:ui,a.magFilter=c.magFilter!==void 0?c.magFilter:sn,a.minFilter=c.minFilter!==void 0?c.minFilter:sn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Hi),c.mipmapCount===1&&(a.minFilter=sn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}},C0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=new tn,a=new Os(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Xi=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hf=class extends Xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ng=new Ke,vw=new D,xw=new D,jl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vw.setFromMatrixPosition(e.matrixWorld),t.position.copy(vw),xw.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xw),t.updateMatrixWorld(),Ng.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ng,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ng)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},P0=class extends jl{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ka*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vf=class extends Xi{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new P0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yw=new Ke,el=new D,Bg=new D,I0=class extends jl{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),n.position.copy(el),Bg.copy(n.position),Bg.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bg),n.updateMatrixWorld(),r.makeTranslation(-el.x,-el.y,-el.z),yw.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yw,n.coordinateSystem,n.reversedDepth)}},Gf=class extends Xi{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new I0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ja=class extends Wa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},D0=class extends jl{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qf=class extends Xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wf=class extends Xi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Xf=class extends Xi{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Yf=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}},jf=class extends Xi{constructor(e=new Yf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Zf=class i extends An{constructor(e){super(e),this.textures={}}load(e,t,n,r){let s=this,a=new Ai(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){let t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new Ae().setHex(a.value);break;case"v2":r.uniforms[s].value=new se().fromArray(a.value);break;case"v3":r.uniforms[s].value=new D().fromArray(a.value);break;case"v4":r.uniforms[s].value=new gt().fromArray(a.value);break;case"m3":r.uniforms[s].value=new it().fromArray(a.value);break;case"m4":r.uniforms[s].value=new Ke().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new se().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return i.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:Cf,SpriteMaterial:wl,RawShaderMaterial:Pf,ShaderMaterial:ei,PointsMaterial:Al,MeshPhysicalMaterial:If,MeshStandardMaterial:Vl,MeshPhongMaterial:Df,MeshToonMaterial:Lf,MeshNormalMaterial:Uf,MeshLambertMaterial:Ff,MeshDepthMaterial:Gl,MeshDistanceMaterial:ql,MeshBasicMaterial:qi,MeshMatcapMaterial:Of,LineDashedMaterial:Nf,LineBasicMaterial:yn,Material:fn};return new t[e]}},Zl=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},$f=class extends at{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Kf=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new Ai(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){let t={},n={};function r(d,m){if(t[m]!==void 0)return t[m];let g=d.interleavedBuffers[m],p=s(d,g.buffer),y=Pa(g.type,p),x=new Xa(y,g.stride);return x.uuid=g.uuid,t[m]=x,x}function s(d,m){if(n[m]!==void 0)return n[m];let g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let a=e.isInstancedBufferGeometry?new $f:new at,o=e.data.index;if(o!==void 0){let d=Pa(o.type,o.array);a.setIndex(new Mt(d,1))}let l=e.data.attributes;for(let d in l){let m=l[d],v;if(m.isInterleavedBufferAttribute){let g=r(e.data,m.data);v=new Cs(g,m.itemSize,m.offset,m.normalized)}else{let g=Pa(m.type,m.array),p=m.isInstancedBufferAttribute?Nr:Mt;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(d,v)}let c=e.data.morphAttributes;if(c)for(let d in c){let m=c[d],v=[];for(let g=0,p=m.length;g<p;g++){let y=m[g],x;if(y.isInterleavedBufferAttribute){let _=r(e.data,y.data);x=new Cs(_,y.itemSize,y.offset,y.normalized)}else{let _=Pa(y.type,y.array);x=new Mt(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){let v=h[d];a.addGroup(v.start,v.count,v.materialIndex)}let f=e.data.boundingSphere;return f!==void 0&&(a.boundingSphere=new an().fromJSON(f)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},L0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=this.path===""?Zl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Ai(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){let n=this,r=this.path===""?Zl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let s=new Ai(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(let f in a)if(a[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){let t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){let s=new dr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){let n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=new Qh().fromJSON(e[s],r);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let r=new Kf;for(let s=0,a=e.length;s<a;s++){let o,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in gw?o=gw[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},r={};if(e!==void 0){let s=new Zf;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let r=e[n],s=Fs.parse(r);t[s.uuid]=s}return t}parseImages(e,t){let n=this,r={},s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Pa(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Yl(t);s=new Os(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let h=e[c],f=h.url;if(Array.isArray(f)){let d=[];for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new hi(p.data,p.width,p.height)))}r[h.uuid]=new Vi(d)}else{let d=o(h.url);r[h.uuid]=new Vi(d)}}}return r}async parseImagesAsync(e){let t=this,n={},r;async function s(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return a.data?{data:Pa(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new Os(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=await s(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new hi(m.data,m.width,m.height)))}n[l.uuid]=new Vi(u)}else{let u=await s(l.url);n[l.uuid]=new Vi(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}let r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,u;Array.isArray(c)?(u=new Rs,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new hi:u=new tn,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,WB)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],_w),u.wrapT=n(o.wrap[1],_w)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Sw)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Sw)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,n,r,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){let d=[];for(let m=0,v=f.length;m<v;m++){let g=f[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return r[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),r[f]}let u,h;switch(e.type){case"Scene":a=new Zh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ae(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new jh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Yh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new rn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ja(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Wf(e.color,e.intensity);break;case"DirectionalLight":a=new qf(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Gf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Xf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Vf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Hf(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new jf().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new Jh(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new Zt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);let f=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new ef(u,h,f),a.instanceMatrix=new Nr(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new Nr(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new nf(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(v=>{let g=null,p=null;return v.boundingBox!==void 0&&(g=new hn().fromJSON(v.boundingBox)),v.boundingSphere!==void 0&&(p=new an().fromJSON(v.boundingSphere)),{...v,boundingBox:g,boundingSphere:p}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new an().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new hn().fromJSON(e.boundingBox));break;case"LOD":a=new Kh;break;case"Line":a=new Wi(o(e.geometry),l(e.material));break;case"LineLoop":a=new af(o(e.geometry),l(e.material));break;case"LineSegments":a=new pi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new of(o(e.geometry),l(e.material));break;case"Sprite":a=new $h(l(e.material));break;case"Group":a=new Ur;break;case"Bone":a=new Tl;break;default:a=new _t}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,r,s))}if(e.animations!==void 0){let f=e.animations;for(let d=0;d<f.length;d++){let m=f[d];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let f=e.levels;for(let d=0;d<f.length;d++){let m=f[d],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new _t}})}},WB={UVMapping:id,CubeReflectionMapping:mr,CubeRefractionMapping:Fr,EquirectangularReflectionMapping:fl,EquirectangularRefractionMapping:dl,CubeUVReflectionMapping:Qa},_w={RepeatWrapping:pl,ClampToEdgeWrapping:ui,MirroredRepeatWrapping:ml},Sw={NearestFilter:xn,NearestMipmapNearestFilter:Cv,NearestMipmapLinearFilter:Ca,LinearFilter:sn,LinearMipmapNearestFilter:rl,LinearMipmapLinearFilter:Hi},zg=new WeakMap,U0=class extends An{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Gi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(zg.has(a)===!0)r&&r(zg.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),zg.set(l,c),Gi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Gi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zu,$l=class{static getContext(){return Zu===void 0&&(Zu=new(window.AudioContext||window.webkitAudioContext)),Zu}static setContext(e){Zu=e}},F0=class extends An{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new Ai(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0);$l.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},n,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}},bw=new Ke,Ew=new Ke,cs=new Ke,O0=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new rn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new rn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,cs.copy(e.projectionMatrix);let r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(Ms*t.fov*.5)/t.zoom,o,l;Ew.elements[12]=-r,bw.elements[12]=r,o=-a*t.aspect+s,l=a*t.aspect+s,cs.elements[0]=2*t.near/(l-o),cs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(cs),o=-a*t.aspect-s,l=a*t.aspect-s,cs.elements[0]=2*t.near/(l-o),cs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(cs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ew),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(bw)}},Jf=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qf=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},us=new D,kg=new Tn,XB=new D,hs=new D,fs=new D,N0=class extends _t{constructor(){super(),this.type="AudioListener",this.context=$l.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Qf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(us,kg,XB),hs.set(0,0,-1).applyQuaternion(kg),fs.set(0,1,0).applyQuaternion(kg),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.forwardX.linearRampToValueAtTime(hs.x,n),t.forwardY.linearRampToValueAtTime(hs.y,n),t.forwardZ.linearRampToValueAtTime(hs.z,n),t.upX.linearRampToValueAtTime(fs.x,n),t.upY.linearRampToValueAtTime(fs.y,n),t.upZ.linearRampToValueAtTime(fs.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(hs.x,hs.y,hs.z,fs.x,fs.y,fs.z)}},ed=class extends _t{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},ds=new D,Mw=new Tn,YB=new D,ps=new D,B0=class extends ed{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ds,Mw,YB),ps.set(0,0,1).applyQuaternion(Mw);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ds.x,n),t.positionY.linearRampToValueAtTime(ds.y,n),t.positionZ.linearRampToValueAtTime(ds.z,n),t.orientationX.linearRampToValueAtTime(ps.x,n),t.orientationY.linearRampToValueAtTime(ps.y,n),t.orientationZ.linearRampToValueAtTime(ps.z,n)}else t.setPosition(ds.x,ds.y,ds.z),t.setOrientation(ps.x,ps.y,ps.z)}},z0=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},td=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Tn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Tn.multiplyQuaternionsFlat(e,a,e,t,e,n),Tn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Vv="\\[\\]\\.:\\/",jB=new RegExp("["+Vv+"]","g"),Gv="[^"+Vv+"]",ZB="[^"+Vv.replace("\\.","")+"]",$B=/((?:WC+[\/:])*)/.source.replace("WC",Gv),KB=/(WCOD+)?/.source.replace("WCOD",ZB),JB=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gv),QB=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gv),ez=new RegExp("^"+$B+KB+JB+QB+"$"),tz=["material","materials","bones","map"],k0=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jB,"")}static parseTrackName(e){let t=ez.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);tz.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=k0;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H0=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length,o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let f=arguments[u],d=f.uuid,m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(f);for(let v=0,g=a;v!==g;++v)s[v].push(new At(f,n[v],r[v]))}else if(m<c){o=e[m];let v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[d]=v,e[v]=f;for(let p=0,y=a;p!==y;++p){let x=s[p],_=x[v],T=x[m];x[m]=_,T===void 0&&(T=new At(f,n[p],r[p])),x[v]=T}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[c]=h,e[h]=l;for(let d=0,m=r;d!==m;++d){let v=n[d],g=v[h],p=v[u];v[u]=g,v[h]=p}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){let f=--s,d=e[f],m=--a,v=e[m];t[d.uuid]=h,e[h]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let g=0,p=r;g!==p;++g){let y=n[g],x=y[f],_=y[m];y[h]=x,y[f]=_,y.pop()}}else{let f=--a,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let m=0,v=r;m!==v;++m){let g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],s=this._bindings;if(r!==void 0)return s[r];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);r=s.length,n[e]=r,a.push(e),o.push(t),s.push(h);for(let f=u,d=l.length;f!==d;++f){let m=l[f];h[f]=new At(m,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let r=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),r[n]=r[o],r.pop()}}},nd=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==a;++c){let u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=OT,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nv:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case ud:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===NT;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===FT){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Ss,r.endingEnd=Ss):(e?r.endingStart=this.zeroSlopeAtStart?Ss:_s:r.endingStart=vl,t?r.endingEnd=this.zeroSlopeAtEnd?Ss:_s:r.endingEnd=vl)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},nz=new Float32Array(1),V0=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let f=r[h],d=f.name,m=u[d];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;m=new td(At.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Wl(new Float32Array(2),new Float32Array(2),1,nz),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?Fs.findByName(r,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ud),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new nd(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?Fs.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},G0=class extends bl{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Va(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},q0=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},iz=0,W0=class extends fi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:iz++}),this.name="",this.usage=yl,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){let s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}},X0=class extends Xa{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Y0=class{constructor(e,t,n,r,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ww=new Ke,j0=class{constructor(e,t,n=0,r=1/0){this.ray=new Or(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ww.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ww),this}intersectObject(e,t=!0,n=[]){return Z0(e,this,n,t),n.sort(Tw),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Z0(e[r],this,n,t);return n.sort(Tw),n}};function Tw(i,e){return i.distance-e.distance}function Z0(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Z0(s[a],e,t,!0)}}var $0=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rz.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function rz(){this._document.hidden===!1&&this.reset()}var K0=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},J0=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Q0=class i{constructor(e,t,n,r){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}},Aw=new se,ev=class{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Aw.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Aw).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rw=new D,$u=new D,Ta=new D,Aa=new D,Hg=new D,sz=new D,az=new D,tv=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rw.subVectors(e,this.start),$u.subVectors(this.end,this.start);let n=$u.dot($u),s=$u.dot(Rw)/n;return t&&(s=Ye(s,0,1)),s}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=sz,n=az){let r=10000000000000001e-32,s,a,o=this.start,l=e.start,c=this.end,u=e.end;Ta.subVectors(c,o),Aa.subVectors(u,l),Hg.subVectors(o,l);let h=Ta.dot(Ta),f=Aa.dot(Aa),d=Aa.dot(Hg);if(h<=r&&f<=r)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(h<=r)s=0,a=d/f,a=Ye(a,0,1);else{let m=Ta.dot(Hg);if(f<=r)a=0,s=Ye(-m/h,0,1);else{let v=Ta.dot(Aa),g=h*f-v*v;g!==0?s=Ye((v*d-m*f)/g,0,1):s=0,a=(v*s+d)/f,a<0?(a=0,s=Ye(-m/h,0,1)):a>1&&(a=1,s=Ye((v-m)/h,0,1))}}return t.copy(o).add(Ta.multiplyScalar(s)),n.copy(l).add(Aa.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Cw=new D,nv=class extends _t{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new at,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ie(r,3));let s=new yn({fog:!1,toneMapped:!1});this.cone=new pi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Cw.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Cw),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Dr=new D,Ku=new Ke,Vg=new Ke,iv=class extends pi{constructor(e){let t=oA(e),n=new at,r=[],s=[];for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Ie(r,3)),n.setAttribute("color",new Ie(s,3));let a=new yn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new Ae(255),l=new Ae(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute("position");Vg.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){let o=t[s];o.parent&&o.parent.isBone&&(Ku.multiplyMatrices(Vg,o.matrixWorld),Dr.setFromMatrixPosition(Ku),r.setXYZ(a,Dr.x,Dr.y,Dr.z),Ku.multiplyMatrices(Vg,o.parent.matrixWorld),Dr.setFromMatrixPosition(Ku),r.setXYZ(a+1,Dr.x,Dr.y,Dr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let r=this.geometry.getAttribute("color");for(let s=0;s<r.count;s+=2)r.setXYZ(s,e.r,e.g,e.b),r.setXYZ(s+1,t.r,t.g,t.b);return r.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function oA(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...oA(i.children[t]));return e}var rv=class extends Zt{constructor(e,t,n){let r=new Hl(t,4,2),s=new qi({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},oz=new D,Pw=new Ae,Iw=new Ae,sv=class extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let r=new kl(t);r.rotateY(Math.PI*.5),this.material=new qi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new Mt(a,3)),this.add(new Zt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Pw.copy(this.light.color),Iw.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){let s=n<r/2?Pw:Iw;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(oz.setFromMatrixPosition(this.light.matrixWorld).negate())}},av=class extends pi{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ae(n),r=new Ae(r);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let v=f===s?n:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}let u=new at;u.setAttribute("position",new Ie(l,3)),u.setAttribute("color",new Ie(c,3));let h=new yn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},ov=class extends pi{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new Ae(s),a=new Ae(a);let o=[],l=[];if(t>1)for(let h=0;h<t;h++){let f=h/t*(Math.PI*2),d=Math.sin(f)*e,m=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,m);let v=h&1?s:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){let f=h&1?s:a,d=e-e/n*h;for(let m=0;m<r;m++){let v=m/r*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d;o.push(g,0,p),l.push(f.r,f.g,f.b),v=(m+1)/r*(Math.PI*2),g=Math.sin(v)*d,p=Math.cos(v)*d,o.push(g,0,p),l.push(f.r,f.g,f.b)}}let c=new at;c.setAttribute("position",new Ie(o,3)),c.setAttribute("color",new Ie(l,3));let u=new yn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Dw=new D,Ju=new D,Lw=new D,lv=class extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new at;r.setAttribute("position",new Ie([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new yn({fog:!1,toneMapped:!1});this.lightPlane=new Wi(r,s),this.add(this.lightPlane),r=new at,r.setAttribute("position",new Ie([0,0,0,0,0,1],3)),this.targetLine=new Wi(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Dw.setFromMatrixPosition(this.light.matrixWorld),Ju.setFromMatrixPosition(this.light.target.matrixWorld),Lw.subVectors(Ju,Dw),this.lightPlane.lookAt(Ju),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ju),this.targetLine.scale.z=Lw.length()}},Qu=new D,jt=new Wa,cv=class extends pi{constructor(e){let t=new at,n=new yn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){r.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(r.length/3-1)}t.setAttribute("position",new Ie(r,3)),t.setAttribute("color",new Ie(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Ae(16755200),u=new Ae(16711680),h=new Ae(43775),f=new Ae(16777215),d=new Ae(3355443);this.setColors(c,u,h,f,d)}setColors(e,t,n,r,s){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,r=1,s,a;if(jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===Kn)s=-1,a=1;else if(this.camera.coordinateSystem===za)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Qt("c",t,e,jt,0,0,s),Qt("t",t,e,jt,0,0,a),Qt("n1",t,e,jt,-n,-r,s),Qt("n2",t,e,jt,n,-r,s),Qt("n3",t,e,jt,-n,r,s),Qt("n4",t,e,jt,n,r,s),Qt("f1",t,e,jt,-n,-r,a),Qt("f2",t,e,jt,n,-r,a),Qt("f3",t,e,jt,-n,r,a),Qt("f4",t,e,jt,n,r,a),Qt("u1",t,e,jt,n*.7,r*1.1,s),Qt("u2",t,e,jt,-n*.7,r*1.1,s),Qt("u3",t,e,jt,0,r*2,s),Qt("cf1",t,e,jt,-n,0,a),Qt("cf2",t,e,jt,n,0,a),Qt("cf3",t,e,jt,0,-r,a),Qt("cf4",t,e,jt,0,r,a),Qt("cn1",t,e,jt,-n,0,s),Qt("cn2",t,e,jt,n,0,s),Qt("cn3",t,e,jt,0,-r,s),Qt("cn4",t,e,jt,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Qt(i,e,t,n,r,s,a){Qu.set(r,s,a).unproject(n);let o=e[i];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Qu.x,Qu.y,Qu.z)}}var eh=new hn,uv=class extends pi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),s=new at;s.setIndex(new Mt(n,1)),s.setAttribute("position",new Mt(r,3)),super(s,new yn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&eh.setFromObject(this.object),eh.isEmpty())return;let e=eh.min,t=eh.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},hv=class extends pi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new at;s.setIndex(new Mt(n,1)),s.setAttribute("position",new Ie(r,3)),super(s,new yn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},fv=class extends Wi{constructor(e,t=1,n=16776960){let r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new at;a.setAttribute("position",new Ie(s,3)),a.computeBoundingSphere(),super(a,new yn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new at;l.setAttribute("position",new Ie(o,3)),l.computeBoundingSphere(),this.add(new Zt(l,new qi({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Uw=new D,th,Gg,dv=class extends _t{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",th===void 0&&(th=new at,th.setAttribute("position",new Ie([0,0,0,0,1,0],3)),Gg=new Il(.5,1,5,1),Gg.translate(0,-.5,0)),this.position.copy(t),this.line=new Wi(th,new yn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Zt(Gg,new qi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Uw.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Uw,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},pv=class extends pi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new at;r.setAttribute("position",new Ie(t,3)),r.setAttribute("color",new Ie(n,3));let s=new yn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){let r=new Ae,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},mv=class{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let y=[];for(let x=0,_=p.length;x<_;x++){let T=p[x],M=new dr;M.curves=T.curves,y.push(M)}return y}function n(p,y){let x=y.length,_=!1;for(let T=x-1,M=0;M<x;T=M++){let A=y[T],C=y[M],S=C.x-A.x,E=C.y-A.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(A=y[M],S=-S,C=y[T],E=-E),p.y<A.y||p.y>C.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{let P=E*(p.x-A.x)-S*(p.y-A.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(p.y!==A.y)continue;if(C.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=C.x)return!0}}return _}let r=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l,c=[];if(s.length===1)return o=s[0],l=new dr,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;let h=[],f=[],d=[],m=0,v;f[m]=void 0,d[m]=[];for(let p=0,y=s.length;p<y;p++)o=s[p],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&f[m]&&m++,f[m]={s:new dr,p:v},f[m].s.curves=o.curves,u&&m++,d[m]=[]):d[m].push({h:o,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,y=0;for(let x=0,_=f.length;x<_;x++)h[x]=[];for(let x=0,_=f.length;x<_;x++){let T=d[x];for(let M=0;M<T.length;M++){let A=T[M],C=!0;for(let S=0;S<f.length;S++)n(A.p,f[S].p)&&(x!==S&&y++,C?(C=!1,h[S].push(A)):p=!0);C&&h[x].push(A)}}y>0&&p===!1&&(d=h)}let g;for(let p=0,y=f.length;p<y;p++){l=f[p].s,c.push(l),g=d[p];for(let x=0,_=g.length;x<_;x++)l.holes.push(g[x].h)}return c}},gv=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function lz(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function cz(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function uz(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function vv(i,e,t,n){let r=hz(n);switch(t){case Uv:return i*e;case od:return i*e/r.components*r.byteLength;case Ql:return i*e/r.components*r.byteLength;case Ov:return i*e*2/r.components*r.byteLength;case ld:return i*e*2/r.components*r.byteLength;case Fv:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case cd:return i*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(i,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(i,8)*Math.max(e,8)/2;case yh:case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oh:case Nh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zh:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hh:case Vh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hz(i){switch(i){case Ti:case Pv:return{byteLength:1,components:1};case Fa:case Iv:case eo:return{byteLength:2,components:1};case sd:case ad:return{byteLength:2,components:4};case gr:case rd:case Vn:return{byteLength:4,components:1};case Dv:case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var xv=class{static contain(e,t){return lz(e,t)}static cover(e,t){return cz(e,t)}static fill(e){return uz(e)}static getByteLength(e,t,n,r){return vv(e,t,n,r)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function lA(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fz(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let v=h[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var dz=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pz=`#ifdef USE_ALPHAHASH
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
#endif`,mz=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gz=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vz=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xz=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yz=`#ifdef USE_AOMAP
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
#endif`,_z=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sz=`#ifdef USE_BATCHING
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
#endif`,bz=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ez=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mz=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wz=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tz=`#ifdef USE_IRIDESCENCE
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
#endif`,Az=`#ifdef USE_BUMPMAP
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
#endif`,Rz=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iz=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dz=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fz=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Oz=`#define PI 3.141592653589793
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
} // validated`,Nz=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bz=`vec3 transformedNormal = objectNormal;
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
#endif`,zz=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kz=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hz=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vz=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gz="gl_FragColor = linearToOutputTexel( gl_FragColor );",qz=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wz=`#ifdef USE_ENVMAP
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
#endif`,Xz=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yz=`#ifdef USE_ENVMAP
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
#endif`,jz=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zz=`#ifdef USE_ENVMAP
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
#endif`,$z=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kz=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jz=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qz=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e5=`#ifdef USE_GRADIENTMAP
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
}`,t5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r5=`uniform bool receiveShadow;
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
#endif`,s5=`#ifdef USE_ENVMAP
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
#endif`,a5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u5=`PhysicalMaterial material;
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
#endif`,h5=`struct PhysicalMaterial {
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
}`,f5=`
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
#endif`,d5=`#if defined( RE_IndirectDiffuse )
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
#endif`,p5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b5=`#if defined( USE_POINTS_UV )
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
#endif`,E5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R5=`#ifdef USE_MORPHTARGETS
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
#endif`,C5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F5=`#ifdef USE_NORMALMAP
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
#endif`,O5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K5=`float getShadowMask() {
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
}`,J5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q5=`#ifdef USE_SKINNING
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
#endif`,e4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t4=`#ifdef USE_SKINNING
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
#endif`,n4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a4=`#ifdef USE_TRANSMISSION
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
#endif`,o4=`#ifdef USE_TRANSMISSION
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
#endif`,l4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d4=`uniform sampler2D t2D;
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
}`,p4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x4=`#include <common>
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
}`,y4=`#if DEPTH_PACKING == 3200
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
}`,_4=`#define DISTANCE
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
}`,S4=`#define DISTANCE
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
}`,b4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M4=`uniform float scale;
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
}`,w4=`uniform vec3 diffuse;
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
}`,T4=`#include <common>
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
}`,A4=`uniform vec3 diffuse;
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
}`,R4=`#define LAMBERT
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
}`,C4=`#define LAMBERT
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
}`,P4=`#define MATCAP
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
}`,I4=`#define MATCAP
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
}`,D4=`#define NORMAL
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
}`,L4=`#define NORMAL
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
}`,U4=`#define PHONG
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
}`,F4=`#define PHONG
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
}`,O4=`#define STANDARD
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
}`,N4=`#define STANDARD
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
}`,B4=`#define TOON
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
}`,z4=`#define TOON
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
}`,k4=`uniform float size;
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
}`,H4=`uniform vec3 diffuse;
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
}`,V4=`#include <common>
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
}`,G4=`uniform vec3 color;
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
}`,q4=`uniform float rotation;
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
}`,W4=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:dz,alphahash_pars_fragment:pz,alphamap_fragment:mz,alphamap_pars_fragment:gz,alphatest_fragment:vz,alphatest_pars_fragment:xz,aomap_fragment:yz,aomap_pars_fragment:_z,batching_pars_vertex:Sz,batching_vertex:bz,begin_vertex:Ez,beginnormal_vertex:Mz,bsdfs:wz,iridescence_fragment:Tz,bumpmap_pars_fragment:Az,clipping_planes_fragment:Rz,clipping_planes_pars_fragment:Cz,clipping_planes_pars_vertex:Pz,clipping_planes_vertex:Iz,color_fragment:Dz,color_pars_fragment:Lz,color_pars_vertex:Uz,color_vertex:Fz,common:Oz,cube_uv_reflection_fragment:Nz,defaultnormal_vertex:Bz,displacementmap_pars_vertex:zz,displacementmap_vertex:kz,emissivemap_fragment:Hz,emissivemap_pars_fragment:Vz,colorspace_fragment:Gz,colorspace_pars_fragment:qz,envmap_fragment:Wz,envmap_common_pars_fragment:Xz,envmap_pars_fragment:Yz,envmap_pars_vertex:jz,envmap_physical_pars_fragment:s5,envmap_vertex:Zz,fog_vertex:$z,fog_pars_vertex:Kz,fog_fragment:Jz,fog_pars_fragment:Qz,gradientmap_pars_fragment:e5,lightmap_pars_fragment:t5,lights_lambert_fragment:n5,lights_lambert_pars_fragment:i5,lights_pars_begin:r5,lights_toon_fragment:a5,lights_toon_pars_fragment:o5,lights_phong_fragment:l5,lights_phong_pars_fragment:c5,lights_physical_fragment:u5,lights_physical_pars_fragment:h5,lights_fragment_begin:f5,lights_fragment_maps:d5,lights_fragment_end:p5,logdepthbuf_fragment:m5,logdepthbuf_pars_fragment:g5,logdepthbuf_pars_vertex:v5,logdepthbuf_vertex:x5,map_fragment:y5,map_pars_fragment:_5,map_particle_fragment:S5,map_particle_pars_fragment:b5,metalnessmap_fragment:E5,metalnessmap_pars_fragment:M5,morphinstance_vertex:w5,morphcolor_vertex:T5,morphnormal_vertex:A5,morphtarget_pars_vertex:R5,morphtarget_vertex:C5,normal_fragment_begin:P5,normal_fragment_maps:I5,normal_pars_fragment:D5,normal_pars_vertex:L5,normal_vertex:U5,normalmap_pars_fragment:F5,clearcoat_normal_fragment_begin:O5,clearcoat_normal_fragment_maps:N5,clearcoat_pars_fragment:B5,iridescence_pars_fragment:z5,opaque_fragment:k5,packing:H5,premultiplied_alpha_fragment:V5,project_vertex:G5,dithering_fragment:q5,dithering_pars_fragment:W5,roughnessmap_fragment:X5,roughnessmap_pars_fragment:Y5,shadowmap_pars_fragment:j5,shadowmap_pars_vertex:Z5,shadowmap_vertex:$5,shadowmask_pars_fragment:K5,skinbase_vertex:J5,skinning_pars_vertex:Q5,skinning_vertex:e4,skinnormal_vertex:t4,specularmap_fragment:n4,specularmap_pars_fragment:i4,tonemapping_fragment:r4,tonemapping_pars_fragment:s4,transmission_fragment:a4,transmission_pars_fragment:o4,uv_pars_fragment:l4,uv_pars_vertex:c4,uv_vertex:u4,worldpos_vertex:h4,background_vert:f4,background_frag:d4,backgroundCube_vert:p4,backgroundCube_frag:m4,cube_vert:g4,cube_frag:v4,depth_vert:x4,depth_frag:y4,distanceRGBA_vert:_4,distanceRGBA_frag:S4,equirect_vert:b4,equirect_frag:E4,linedashed_vert:M4,linedashed_frag:w4,meshbasic_vert:T4,meshbasic_frag:A4,meshlambert_vert:R4,meshlambert_frag:C4,meshmatcap_vert:P4,meshmatcap_frag:I4,meshnormal_vert:D4,meshnormal_frag:L4,meshphong_vert:U4,meshphong_frag:F4,meshphysical_vert:O4,meshphysical_frag:N4,meshtoon_vert:B4,meshtoon_frag:z4,points_vert:k4,points_frag:H4,shadow_vert:V4,shadow_frag:G4,sprite_vert:q4,sprite_frag:W4},ye={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Dn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Dn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Dn([ye.points,ye.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Dn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Dn([ye.common,ye.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Dn([ye.sprite,ye.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Dn([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Dn([ye.lights,ye.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var nh={r:0,b:0,g:0},ms=new Qn,X4=new Ke;function Y4(i,e,t,n,r,s,a){let o=new Ae(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1,T=m(x);T===null?p(o,l):T&&T.isColor&&(p(T,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){let T=m(_);T&&(T.isCubeTexture||T.mapping===Qa)?(u===void 0&&(u=new Zt(new As(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:qa(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ms.copy(_.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X4.makeRotationFromEuler(ms)),u.material.toneMapped=mt.getTransfer(T.colorSpace)!==Tt,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Zt(new Ka(2,2),new ei({name:"BackgroundMaterial",uniforms:qa(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=mt.getTransfer(T.colorSpace)!==Tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(nh,KT(i)),n.buffers.color.setClear(nh.r,nh.g,nh.b,_,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:g,dispose:y}}function j4(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(E,P,O,k,W){let X=!1,N=h(k,O,P);s!==N&&(s=N,c(s.object)),X=d(E,k,O,W),X&&m(E,k,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(E,P,O,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,P,O){let k=O.wireframe===!0,W=n[E.id];W===void 0&&(W={},n[E.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let N=X[k];return N===void 0&&(N=f(l()),X[k]=N),N}function f(E){let P=[],O=[],k=[];for(let W=0;W<t;W++)P[W]=0,O[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:E,attributes:{},index:null}}function d(E,P,O,k){let W=s.attributes,X=P.attributes,N=0,L=O.getAttributes();for(let F in L)if(L[F].location>=0){let Y=W[F],te=X[F];if(te===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),Y===void 0||Y.attribute!==te||te&&Y.data!==te.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function m(E,P,O,k){let W={},X=P.attributes,N=0,L=O.getAttributes();for(let F in L)if(L[F].location>=0){let Y=X[F];Y===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor));let te={};te.attribute=Y,Y&&Y.data&&(te.data=Y.data),W[F]=te,N++}s.attributes=W,s.attributesNum=N,s.index=k}function v(){let E=s.newAttributes;for(let P=0,O=E.length;P<O;P++)E[P]=0}function g(E){p(E,0)}function p(E,P){let O=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;O[E]=1,k[E]===0&&(i.enableVertexAttribArray(E),k[E]=1),W[E]!==P&&(i.vertexAttribDivisor(E,P),W[E]=P)}function y(){let E=s.newAttributes,P=s.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==E[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function x(E,P,O,k,W,X,N){N===!0?i.vertexAttribIPointer(E,P,O,W,X):i.vertexAttribPointer(E,P,O,k,W,X)}function _(E,P,O,k){v();let W=k.attributes,X=O.getAttributes(),N=P.defaultAttributeValues;for(let L in X){let F=X[L];if(F.location>=0){let z=W[L];if(z===void 0&&(L==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),L==="instanceColor"&&E.instanceColor&&(z=E.instanceColor)),z!==void 0){let Y=z.normalized,te=z.itemSize,le=e.get(z);if(le===void 0)continue;let Re=le.buffer,Ve=le.type,pe=le.bytesPerElement,Z=Ve===i.INT||Ve===i.UNSIGNED_INT||z.gpuType===rd;if(z.isInterleavedBufferAttribute){let ne=z.data,_e=ne.stride,Pe=z.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<F.locationSize;Se++)p(F.location+Se,ne.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<F.locationSize;Se++)g(F.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Se=0;Se<F.locationSize;Se++)x(F.location+Se,te/F.locationSize,Ve,Y,_e*pe,(Pe+te/F.locationSize*Se)*pe,Z)}else{if(z.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)p(F.location+ne,z.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ne=0;ne<F.locationSize;ne++)g(F.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ne=0;ne<F.locationSize;ne++)x(F.location+ne,te/F.locationSize,Ve,Y,te*pe,te/F.locationSize*ne*pe,Z)}}else if(N!==void 0){let Y=N[L];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}y()}function T(){C();for(let E in n){let P=n[E];for(let O in P){let k=P[O];for(let W in k)u(k[W].object),delete k[W];delete P[O]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let O in P){let k=P[O];for(let W in k)u(k[W].object),delete k[W];delete P[O]}delete n[E.id]}function A(E){for(let P in n){let O=n[P];if(O[E.id]===void 0)continue;let k=O[E.id];for(let W in k)u(k[W].object),delete k[W];delete O[E.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Z4(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $4(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:M}}function K4(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Bi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let y=s?0:n,x=y*4,_=p.clippingState||null;l.value=_,_=u(m,f,x,d);for(let T=0;T!==x;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function J4(i){let e=new WeakMap;function t(a,o){return o===fl?a.mapping=mr:o===dl&&(a.mapping=Fr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fl||o===dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ia=4,Fw=[.125,.215,.35,.446,.526,.582],ys=20,qg=new Ja,Ow=new Ae,Wg=null,Xg=0,Yg=0,jg=!1,xs=(1+Math.sqrt(5))/2,Ra=1/xs,Nw=[new D(-xs,Ra,0),new D(xs,Ra,0),new D(-Ra,0,xs),new D(Ra,0,xs),new D(0,xs,-Ra),new D(0,xs,Ra),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Q4=new D,Kl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Q4}=s;Wg=this._renderer.getRenderTarget(),Xg=this._renderer.getActiveCubeFace(),Yg=this._renderer.getActiveMipmapLevel(),jg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wg,Xg,Yg),this._renderer.xr.enabled=jg,e.scissorTest=!1,ih(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wg=this._renderer.getRenderTarget(),Xg=this._renderer.getActiveCubeFace(),Yg=this._renderer.getActiveMipmapLevel(),jg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:eo,format:Un,colorSpace:Ts,depthBuffer:!1},r=Bw(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bw(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ek(s)),this._blurMaterial=tk(s,e,t)}return r}_compileMaterial(e){let t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,qg)}_sceneToCubeUV(e,t,n,r,s){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ow),h.toneMapping=hr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let v=new qi({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Zt(new As,v),p=!1,y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(Ow),p=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));let T=this._cubeSize;ih(r,_*T,x>2?T:0,T,T),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===mr||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zw());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ih(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qg)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nw[(r-s-1)%Nw.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Zt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ys-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):ys;g>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);let p=[],y=0;for(let A=0;A<ys;++A){let C=A/v,S=Math.exp(-C*C/2);p.push(S),A===0?y+=S:A<g&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let _=this._sizeLods[r],T=3*_*(r>x-Ia?r-x+Ia:0),M=4*(this._cubeSize-_);ih(t,T,M,3*_,2*_),l.setRenderTarget(t),l.render(h,qg)}};function ek(i){let e=[],t=[],n=[],r=i,s=i-Ia+1+Fw.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ia?l=Fw[a-i+Ia-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),x=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let M=0;M<d;M++){let A=M%3*2/3-1,C=M>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(S,v*m*M),x.set(f,g*m*M);let E=[M,M,M,M,M,M];_.set(E,p*m*M)}let T=new at;T.setAttribute("position",new Mt(y,v)),T.setAttribute("uv",new Mt(x,g)),T.setAttribute("faceIndex",new Mt(_,p)),e.push(T),r>Ia&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bw(i,e,t){let n=new di(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ih(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tk(i,e,t){let n=new Float32Array(ys),r=new D(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qv(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function zw(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qv(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function kw(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function qv(){return`

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
	`}function nk(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fl||l===dl,u=l===mr||l===Fr;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Kl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Kl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ik(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Sl("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rk(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){let T=y[x+0],M=y[x+1],A=y[x+2];f.push(T,M,M,A,A,T)}}else if(m!==void 0){let y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let T=x+0,M=x+1,A=x+2;f.push(T,M,M,A,A,T)}}else return;let g=new(jT(f)?Ml:El)(f,1);g.version=v;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sk(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*v[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ak(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ok(i,e,t){let n=new WeakMap,r=new gt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*T*4*h),A=new Ha(M,_,T,h);A.type=Vn,A.needsUpdate=!0;let C=x*4;for(let E=0;E<h;E++){let P=g[E],O=p[E],k=y[E],W=_*T*4*E;for(let X=0;X<P.count;X++){let N=X*C;d===!0&&(r.fromBufferAttribute(P,X),M[W+N+0]=r.x,M[W+N+1]=r.y,M[W+N+2]=r.z,M[W+N+3]=0),m===!0&&(r.fromBufferAttribute(O,X),M[W+N+4]=r.x,M[W+N+5]=r.y,M[W+N+6]=r.z,M[W+N+7]=0),v===!0&&(r.fromBufferAttribute(k,X),M[W+N+8]=r.x,M[W+N+9]=r.y,M[W+N+10]=r.z,M[W+N+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new se(_,T)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function lk(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var cA=new tn,Hw=new Rl(1,1),uA=new Ha,hA=new Va,fA=new Rs,Vw=[],Gw=[],qw=new Float32Array(16),Ww=new Float32Array(9),Xw=new Float32Array(4);function to(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Vw[r];if(s===void 0&&(s=new Float32Array(r),Vw[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hd(i,e){let t=Gw[e];t===void 0&&(t=new Int32Array(e),Gw[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ck(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function hk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function fk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function dk(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Xw.set(n),i.uniformMatrix2fv(this.addr,!1,Xw),ln(t,n)}}function pk(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Ww.set(n),i.uniformMatrix3fv(this.addr,!1,Ww),ln(t,n)}}function mk(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;qw.set(n),i.uniformMatrix4fv(this.addr,!1,qw),ln(t,n)}}function gk(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function xk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function yk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function _k(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function bk(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Ek(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Mk(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hw.compareFunction=Bv,s=Hw):s=cA,t.setTexture2D(e||s,r)}function wk(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hA,r)}function Tk(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fA,r)}function Ak(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uA,r)}function Rk(i){switch(i){case 5126:return ck;case 35664:return uk;case 35665:return hk;case 35666:return fk;case 35674:return dk;case 35675:return pk;case 35676:return mk;case 5124:case 35670:return gk;case 35667:case 35671:return vk;case 35668:case 35672:return xk;case 35669:case 35673:return yk;case 5125:return _k;case 36294:return Sk;case 36295:return bk;case 36296:return Ek;case 35678:case 36198:case 36298:case 36306:case 35682:return Mk;case 35679:case 36299:case 36307:return wk;case 35680:case 36300:case 36308:case 36293:return Tk;case 36289:case 36303:case 36311:case 36292:return Ak}}function Ck(i,e){i.uniform1fv(this.addr,e)}function Pk(i,e){let t=to(e,this.size,2);i.uniform2fv(this.addr,t)}function Ik(i,e){let t=to(e,this.size,3);i.uniform3fv(this.addr,t)}function Dk(i,e){let t=to(e,this.size,4);i.uniform4fv(this.addr,t)}function Lk(i,e){let t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uk(i,e){let t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fk(i,e){let t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ok(i,e){i.uniform1iv(this.addr,e)}function Nk(i,e){i.uniform2iv(this.addr,e)}function Bk(i,e){i.uniform3iv(this.addr,e)}function zk(i,e){i.uniform4iv(this.addr,e)}function kk(i,e){i.uniform1uiv(this.addr,e)}function Hk(i,e){i.uniform2uiv(this.addr,e)}function Vk(i,e){i.uniform3uiv(this.addr,e)}function Gk(i,e){i.uniform4uiv(this.addr,e)}function qk(i,e,t){let n=this.cache,r=e.length,s=hd(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||cA,s[a])}function Wk(i,e,t){let n=this.cache,r=e.length,s=hd(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hA,s[a])}function Xk(i,e,t){let n=this.cache,r=e.length,s=hd(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fA,s[a])}function Yk(i,e,t){let n=this.cache,r=e.length,s=hd(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||uA,s[a])}function jk(i){switch(i){case 5126:return Ck;case 35664:return Pk;case 35665:return Ik;case 35666:return Dk;case 35674:return Lk;case 35675:return Uk;case 35676:return Fk;case 5124:case 35670:return Ok;case 35667:case 35671:return Nk;case 35668:case 35672:return Bk;case 35669:case 35673:return zk;case 5125:return kk;case 36294:return Hk;case 36295:return Vk;case 36296:return Gk;case 35678:case 36198:case 36298:case 36306:case 35682:return qk;case 35679:case 36299:case 36307:return Wk;case 35680:case 36300:case 36308:case 36293:return Xk;case 36289:case 36303:case 36311:case 36292:return Yk}}var yv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rk(t.type)}},_v=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jk(t.type)}},Sv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Zg=/(\w+)(\])?(\[|\.)?/g;function Yw(i,e){i.seq.push(e),i.map[e.id]=e}function Zk(i,e,t){let n=i.name,r=n.length;for(Zg.lastIndex=0;;){let s=Zg.exec(n),a=Zg.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yw(t,c===void 0?new yv(o,i,e):new _v(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Sv(o),Yw(t,h)),t=h}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Zk(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function jw(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $k=37297,Kk=0;function Jk(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zw=new it;function Qk(i){mt._getMatrix(Zw,mt.workingColorSpace,i);let e=`mat3( ${Zw.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case xl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $w(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jk(i.getShaderSource(e),o)}else return s}function eH(i,e){let t=Qk(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tH(i,e){let t;switch(e){case AT:t="Linear";break;case RT:t="Reinhard";break;case CT:t="Cineon";break;case PT:t="ACESFilmic";break;case DT:t="AgX";break;case LT:t="Neutral";break;case IT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rh=new D;function nH(){mt.getLuminanceCoefficients(rh);let i=rh.x.toFixed(4),e=rh.y.toFixed(4),t=rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iH(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function rH(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sH(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function il(i){return i!==""}function Kw(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jw(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aH=/^[ \t]*#include +<([\w\d./]+)>/gm;function bv(i){return i.replace(aH,lH)}var oH=new Map;function lH(i,e){let t=ht[e];if(t===void 0){let n=oH.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bv(t)}var cH=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qw(i){return i.replace(cH,uH)}function uH(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eT(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hH(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function fH(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case Fr:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dH(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fr&&(e="ENVMAP_MODE_REFRACTION"),e}function pH(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case wT:e="ENVMAP_BLENDING_MIX";break;case TT:e="ENVMAP_BLENDING_ADD";break}return e}function mH(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gH(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=hH(t),c=fH(t),u=dH(t),h=pH(t),f=mH(t),d=iH(t),m=rH(s),v=r.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(il).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(il).join(`
`),p.length>0&&(p+=`
`)):(g=[eT(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),p=[eT(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?ht.tonemapping_pars_fragment:"",t.toneMapping!==hr?tH("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,eH("linearToOutputTexel",t.outputColorSpace),nH(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),a=bv(a),a=Kw(a,t),a=Jw(a,t),o=bv(o),o=Kw(o,t),o=Jw(o,t),a=Qw(a),o=Qw(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+g+a,_=y+p+o,T=jw(r,r.VERTEX_SHADER,x),M=jw(r,r.FRAGMENT_SHADER,_);r.attachShader(v,T),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(M)||"",X=O.trim(),N=k.trim(),L=W.trim(),F=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,T,M);else{let Y=$w(r,T,"vertex"),te=$w(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+Y+`
`+te)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||L==="")&&(z=!1);z&&(P.diagnostics={runnable:F,programLog:X,vertexShader:{log:N,prefix:g},fragmentShader:{log:L,prefix:p}})}r.deleteShader(T),r.deleteShader(M),C=new Ua(r,v),S=sH(r,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,$k)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kk++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}var vH=0,Ev=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mv(e),t.set(e,n)),n}},Mv=class{constructor(e){this.id=vH++,this.code=e,this.usedTimes=0}};function xH(i,e,t,n,r,s,a){let o=new Ga,l=new Ev,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,P,O,k){let W=O.fog,X=k.geometry,N=S.isMeshStandardMaterial?O.environment:null,L=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),F=L&&L.mapping===Qa?L.image.height:null,z=m[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=Y!==void 0?Y.length:0,le=0;X.morphAttributes.position!==void 0&&(le=1),X.morphAttributes.normal!==void 0&&(le=2),X.morphAttributes.color!==void 0&&(le=3);let Re,Ve,pe,Z;if(z){let Et=Mi[z];Re=Et.vertexShader,Ve=Et.fragmentShader}else Re=S.vertexShader,Ve=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);let ne=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Se=k.isBatchedMesh===!0,ct=!!S.map,yt=!!S.matcap,U=!!L,ae=!!S.aoMap,ie=!!S.lightMap,Q=!!S.bumpMap,ee=!!S.normalMap,ge=!!S.displacementMap,ce=!!S.emissiveMap,ve=!!S.metalnessMap,tt=!!S.roughnessMap,Qe=S.anisotropy>0,I=S.clearcoat>0,w=S.dispersion>0,q=S.iridescence>0,K=S.sheen>0,oe=S.transmission>0,J=Qe&&!!S.anisotropyMap,ze=I&&!!S.clearcoatMap,me=I&&!!S.clearcoatNormalMap,Oe=I&&!!S.clearcoatRoughnessMap,Ne=q&&!!S.iridescenceMap,ue=q&&!!S.iridescenceThicknessMap,Te=K&&!!S.sheenColorMap,je=K&&!!S.sheenRoughnessMap,He=!!S.specularMap,be=!!S.specularColorMap,ut=!!S.specularIntensityMap,B=oe&&!!S.transmissionMap,de=oe&&!!S.thicknessMap,xe=!!S.gradientMap,Le=!!S.alphaMap,he=S.alphaTest>0,re=!!S.alphaHash,Be=!!S.extensions,nt=hr;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Lt={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:Re,fragmentShader:Ve,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Se,batchingColor:Se&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ts,alphaToCoverage:!!S.alphaToCoverage,map:ct,matcap:yt,envMap:U,envMapMode:U&&L.mapping,envMapCubeUVHeight:F,aoMap:ae,lightMap:ie,bumpMap:Q,normalMap:ee,displacementMap:f&&ge,emissiveMap:ce,normalMapObjectSpace:ee&&S.normalMapType===kT,normalMapTangentSpace:ee&&S.normalMapType===kr,metalnessMap:ve,roughnessMap:tt,anisotropy:Qe,anisotropyMap:J,clearcoat:I,clearcoatMap:ze,clearcoatNormalMap:me,clearcoatRoughnessMap:Oe,dispersion:w,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:ue,sheen:K,sheenColorMap:Te,sheenRoughnessMap:je,specularMap:He,specularColorMap:be,specularIntensityMap:ut,transmission:oe,transmissionMap:B,thicknessMap:de,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:he,alphaHash:re,combine:S.combine,mapUv:ct&&v(S.map.channel),aoMapUv:ae&&v(S.aoMap.channel),lightMapUv:ie&&v(S.lightMap.channel),bumpMapUv:Q&&v(S.bumpMap.channel),normalMapUv:ee&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:ve&&v(S.metalnessMap.channel),roughnessMapUv:tt&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:ze&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&v(S.sheenRoughnessMap.channel),specularMapUv:He&&v(S.specularMap.channel),specularColorMapUv:be&&v(S.specularColorMap.channel),specularIntensityMapUv:ut&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:Le&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ee||Qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ct||Le),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:ct&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let E=m[S.type],P;if(E){let O=Mi[E];P=JT.clone(O.uniforms)}else P=S.uniforms;return P}function T(S,E){let P;for(let O=0,k=u.length;O<k;O++){let W=u[O];if(W.cacheKey===E){P=W,++P.usedTimes;break}}return P===void 0&&(P=new gH(i,E,S,s),u.push(P)),P}function M(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:C}}function yH(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function _H(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nT(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,f,d,m,v,g){let p=a(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,m,v,g){let p=a(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||_H),n.length>1&&n.sort(f||tT),r.length>1&&r.sort(f||tT)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function SH(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new nT,i.set(n,[a])):r>=s.length?(a=new nT,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bH(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ae};break;case"SpotLight":t={position:new D,direction:new D,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function EH(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var MH=0;function wH(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TH(i){let e=new bH,t=EH(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new Ke,a=new Ke;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,T=0,M=0,A=0;c.sort(wH);for(let S=0,E=c.length;S<E;S++){let P=c[S],O=P.color,k=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*k,h+=O.g*k,f+=O.b*k;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],k);A++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let L=P.shadow,F=t.get(P);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=N,d++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(k),N.distance=W,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[v]=N;let L=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,L.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[v]=L.matrix,P.castShadow){let F=t.get(P);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=X,_++}v++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(O).multiplyScalar(k),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=N,g++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let L=P.shadow,F=t.get(P);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,F.shadowCameraNear=L.camera.near,F.shadowCameraFar=L.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=N,m++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(k),N.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=N,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,C.directionalLength=d,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=A,n.version=MH++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0,g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let x=c[p];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(x.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function iT(i){let e=new TH(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function AH(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new iT(i),e.set(r,[o])):s>=a.length?(o=new iT(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var RH=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CH=`uniform sampler2D shadow_pass;
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
}`;function PH(i,e,t){let n=new Br,r=new se,s=new se,a=new gt,o=new Gl({depthPacking:zT}),l=new ql,c={},u=t.maxTextureSize,h={[pr]:Fn,[Fn]:pr,[zi]:zi},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:RH,fragmentShader:CH}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let p=this.type;this.render=function(M,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ur),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=p!==Ni&&this.type===Ni,W=p===Ni&&this.type!==Ni;for(let X=0,N=M.length;X<N;X++){let L=M[X],F=L.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let z=F.getFrameExtents();if(r.multiply(z),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,F.mapSize.y=s.y)),F.map===null||k===!0||W===!0){let te=this.type!==Ni?{minFilter:xn,magFilter:xn}:{};F.map!==null&&F.map.dispose(),F.map=new di(r.x,r.y,te),F.map.texture.name=L.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let Y=F.getViewportCount();for(let te=0;te<Y;te++){let le=F.getViewport(te);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),O.viewport(a),F.updateMatrices(L,te),n=F.getFrustum(),_(A,C,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===Ni&&y(F,C),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,P)};function y(M,A){let C=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new di(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,C,d,v,null)}function x(M,A,C,S){let E=null,P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=E.uuid,k=A.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let X=W[k];X===void 0&&(X=E.clone(),W[k]=X,A.addEventListener("dispose",T)),E=X}if(E.visible=A.visible,E.wireframe=A.wireframe,S===Ni?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=C}return E}function _(M,A,C,S,E){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Ni)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);let k=e.update(M),W=M.material;if(Array.isArray(W)){let X=k.groups;for(let N=0,L=X.length;N<L;N++){let F=X[N],z=W[F.materialIndex];if(z&&z.visible){let Y=x(M,z,S,E);M.onBeforeShadow(i,M,A,C,k,Y,F),i.renderBufferDirect(C,null,k,Y,M,F),M.onAfterShadow(i,M,A,C,k,Y,F)}}}else if(W.visible){let X=x(M,W,S,E);M.onBeforeShadow(i,M,A,C,k,X,null),i.renderBufferDirect(C,null,k,X,M,null),M.onAfterShadow(i,M,A,C,k,X,null)}}let O=M.children;for(let k=0,W=O.length;k<W;k++)_(O[k],A,C,S,E)}function T(M){M.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var IH={[lh]:ch,[uh]:dh,[hh]:ph,[ws]:fh,[ch]:lh,[dh]:uh,[ph]:hh,[fh]:ws};function DH(i,e){function t(){let B=!1,de=new gt,xe=null,Le=new gt(0,0,0,0);return{setMask:function(he){xe!==he&&!B&&(i.colorMask(he,he,he,he),xe=he)},setLocked:function(he){B=he},setClear:function(he,re,Be,nt,Lt){Lt===!0&&(he*=nt,re*=nt,Be*=nt),de.set(he,re,Be,nt),Le.equals(de)===!1&&(i.clearColor(he,re,Be,nt),Le.copy(de))},reset:function(){B=!1,xe=null,Le.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,xe=null,Le=null,he=null;return{setReversed:function(re){if(de!==re){let Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),de=re;let nt=he;he=null,this.setClear(nt)}},getReversed:function(){return de},setTest:function(re){re?ne(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!B&&(i.depthMask(re),xe=re)},setFunc:function(re){if(de&&(re=IH[re]),Le!==re){switch(re){case lh:i.depthFunc(i.NEVER);break;case ch:i.depthFunc(i.ALWAYS);break;case uh:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case fh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=re}},setLocked:function(re){B=re},setClear:function(re){he!==re&&(de&&(re=1-re),i.clearDepth(re),he=re)},reset:function(){B=!1,xe=null,Le=null,he=null,de=!1}}}function r(){let B=!1,de=null,xe=null,Le=null,he=null,re=null,Be=null,nt=null,Lt=null;return{setTest:function(Et){B||(Et?ne(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Et){de!==Et&&!B&&(i.stencilMask(Et),de=Et)},setFunc:function(Et,$i,Di){(xe!==Et||Le!==$i||he!==Di)&&(i.stencilFunc(Et,$i,Di),xe=Et,Le=$i,he=Di)},setOp:function(Et,$i,Di){(re!==Et||Be!==$i||nt!==Di)&&(i.stencilOp(Et,$i,Di),re=Et,Be=$i,nt=Di)},setLocked:function(Et){B=Et},setClear:function(Et){Lt!==Et&&(i.clearStencil(Et),Lt=Et)},reset:function(){B=!1,de=null,xe=null,Le=null,he=null,re=null,Be=null,nt=null,Lt=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,T=null,M=null,A=new Ae(0,0,0),C=0,S=!1,E=null,P=null,O=null,k=null,W=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,L=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=L>=1):F.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=L>=2);let z=null,Y={},te=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Re=new gt().fromArray(te),Ve=new gt().fromArray(le);function pe(B,de,xe,Le){let he=new Uint8Array(4),re=i.createTexture();i.bindTexture(B,re),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<xe;Be++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(de+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return re}let Z={};Z[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ws),Q(!1),ee($g),ne(i.CULL_FACE),ae(ur);function ne(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function _e(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Pe(B,de){return h[B]!==de?(i.bindFramebuffer(B,de),h[B]=de,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(B,de){let xe=d,Le=!1;if(B){xe=f.get(de),xe===void 0&&(xe=[],f.set(de,xe));let he=B.textures;if(xe.length!==he.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Be=he.length;re<Be;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=he.length,Le=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Le=!0);Le&&i.drawBuffers(xe)}function ct(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let yt={[Lr]:i.FUNC_ADD,[lT]:i.FUNC_SUBTRACT,[cT]:i.FUNC_REVERSE_SUBTRACT};yt[uT]=i.MIN,yt[hT]=i.MAX;let U={[fT]:i.ZERO,[dT]:i.ONE,[pT]:i.SRC_COLOR,[ah]:i.SRC_ALPHA,[_T]:i.SRC_ALPHA_SATURATE,[xT]:i.DST_COLOR,[gT]:i.DST_ALPHA,[mT]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[yT]:i.ONE_MINUS_DST_COLOR,[vT]:i.ONE_MINUS_DST_ALPHA,[ST]:i.CONSTANT_COLOR,[bT]:i.ONE_MINUS_CONSTANT_COLOR,[ET]:i.CONSTANT_ALPHA,[MT]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(B,de,xe,Le,he,re,Be,nt,Lt,Et){if(B===ur){v===!0&&(_e(i.BLEND),v=!1);return}if(v===!1&&(ne(i.BLEND),v=!0),B!==oT){if(B!==g||Et!==S){if((p!==Lr||_!==Lr)&&(i.blendEquation(i.FUNC_ADD),p=Lr,_=Lr),Et)switch(B){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kg:i.blendFunc(i.ONE,i.ONE);break;case Jg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,x=null,T=null,M=null,A.set(0,0,0),C=0,g=B,S=Et}return}he=he||de,re=re||xe,Be=Be||Le,(de!==p||he!==_)&&(i.blendEquationSeparate(yt[de],yt[he]),p=de,_=he),(xe!==y||Le!==x||re!==T||Be!==M)&&(i.blendFuncSeparate(U[xe],U[Le],U[re],U[Be]),y=xe,x=Le,T=re,M=Be),(nt.equals(A)===!1||Lt!==C)&&(i.blendColor(nt.r,nt.g,nt.b,Lt),A.copy(nt),C=Lt),g=B,S=!1}function ie(B,de){B.side===zi?_e(i.CULL_FACE):ne(i.CULL_FACE);let xe=B.side===Fn;de&&(xe=!xe),Q(xe),B.blending===Es&&B.transparent===!1?ae(ur):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);let Le=B.stencilWrite;o.setTest(Le),Le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ce(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function ee(B){B!==rT?(ne(i.CULL_FACE),B!==P&&(B===$g?i.cullFace(i.BACK):B===sT?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),P=B}function ge(B){B!==O&&(N&&i.lineWidth(B),O=B)}function ce(B,de,xe){B?(ne(i.POLYGON_OFFSET_FILL),(k!==de||W!==xe)&&(i.polygonOffset(de,xe),k=de,W=xe)):_e(i.POLYGON_OFFSET_FILL)}function ve(B){B?ne(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function tt(B){B===void 0&&(B=i.TEXTURE0+X-1),z!==B&&(i.activeTexture(B),z=B)}function Qe(B,de,xe){xe===void 0&&(z===null?xe=i.TEXTURE0+X-1:xe=z);let Le=Y[xe];Le===void 0&&(Le={type:void 0,texture:void 0},Y[xe]=Le),(Le.type!==B||Le.texture!==de)&&(z!==xe&&(i.activeTexture(xe),z=xe),i.bindTexture(B,de||Z[B]),Le.type=B,Le.texture=de)}function I(){let B=Y[z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(B){Re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Re.copy(B))}function je(B){Ve.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ve.copy(B))}function He(B,de){let xe=c.get(de);xe===void 0&&(xe=new WeakMap,c.set(de,xe));let Le=xe.get(B);Le===void 0&&(Le=i.getUniformBlockIndex(de,B.name),xe.set(B,Le))}function be(B,de){let Le=c.get(de).get(B);l.get(de)!==Le&&(i.uniformBlockBinding(de,Le,B.__bindingPointIndex),l.set(de,Le))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,Y={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,T=null,M=null,A=new Ae(0,0,0),C=0,S=!1,E=null,P=null,O=null,k=null,W=null,Re.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:_e,bindFramebuffer:Pe,drawBuffers:Se,useProgram:ct,setBlending:ae,setMaterial:ie,setFlipSided:Q,setCullFace:ee,setLineWidth:ge,setPolygonOffset:ce,setScissorTest:ve,activeTexture:tt,bindTexture:Qe,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:Ne,texImage3D:ue,updateUBOMapping:He,uniformBlockBinding:be,texStorage2D:me,texStorage3D:Oe,texSubImage2D:K,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:ze,scissor:Te,viewport:je,reset:ut}}function LH(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return d?new OffscreenCanvas(I,w):_l("canvas")}function v(I,w,q){let K=1,oe=Qe(I);if((oe.width>q||oe.height>q)&&(K=q/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let J=Math.floor(K*oe.width),ze=Math.floor(K*oe.height);h===void 0&&(h=m(J,ze));let me=w?m(J,ze):h;return me.width=J,me.height=ze,me.getContext("2d").drawImage(I,0,0,J,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+ze+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,w,q,K,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=w;if(w===i.RED&&(q===i.FLOAT&&(J=i.R32F),q===i.HALF_FLOAT&&(J=i.R16F),q===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.R8UI),q===i.UNSIGNED_SHORT&&(J=i.R16UI),q===i.UNSIGNED_INT&&(J=i.R32UI),q===i.BYTE&&(J=i.R8I),q===i.SHORT&&(J=i.R16I),q===i.INT&&(J=i.R32I)),w===i.RG&&(q===i.FLOAT&&(J=i.RG32F),q===i.HALF_FLOAT&&(J=i.RG16F),q===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RG8UI),q===i.UNSIGNED_SHORT&&(J=i.RG16UI),q===i.UNSIGNED_INT&&(J=i.RG32UI),q===i.BYTE&&(J=i.RG8I),q===i.SHORT&&(J=i.RG16I),q===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGB8UI),q===i.UNSIGNED_SHORT&&(J=i.RGB16UI),q===i.UNSIGNED_INT&&(J=i.RGB32UI),q===i.BYTE&&(J=i.RGB8I),q===i.SHORT&&(J=i.RGB16I),q===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),q===i.UNSIGNED_INT&&(J=i.RGBA32UI),q===i.BYTE&&(J=i.RGBA8I),q===i.SHORT&&(J=i.RGBA16I),q===i.INT&&(J=i.RGBA32I)),w===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),w===i.RGBA){let ze=oe?xl:mt.getTransfer(K);q===i.FLOAT&&(J=i.RGBA32F),q===i.HALF_FLOAT&&(J=i.RGBA16F),q===i.UNSIGNED_BYTE&&(J=ze===Tt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(I,w){let q;return I?w===null||w===gr||w===Oa?q=i.DEPTH24_STENCIL8:w===Vn?q=i.DEPTH32F_STENCIL8:w===Fa&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gr||w===Oa?q=i.DEPTH_COMPONENT24:w===Vn?q=i.DEPTH_COMPONENT32F:w===Fa&&(q=i.DEPTH_COMPONENT16),q}function T(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==xn&&I.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function M(I){let w=I.target;w.removeEventListener("dispose",M),C(w),w.isVideoTexture&&u.delete(w)}function A(I){let w=I.target;w.removeEventListener("dispose",A),E(w)}function C(I){let w=n.get(I);if(w.__webglInit===void 0)return;let q=I.source,K=f.get(q);if(K){let oe=K[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(I),Object.keys(K).length===0&&f.delete(q)}n.remove(I)}function S(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let q=I.source,K=f.get(q);delete K[w.__cacheKey],a.memory.textures--}function E(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let oe=0;oe<w.__webglFramebuffer[K].length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[K][oe]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=I.textures;for(let K=0,oe=q.length;K<oe;K++){let J=n.get(q[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(q[K])}n.remove(I)}let P=0;function O(){P=0}function k(){let I=P;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function W(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){let q=n.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,I,w);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function N(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Z(q,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function L(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Z(q,I,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function F(I,w){let q=n.get(I);if(I.version>0&&q.__version!==I.version){ne(q,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}let z={[pl]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},Y={[xn]:i.NEAREST,[Cv]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},te={[HT]:i.NEVER,[YT]:i.ALWAYS,[VT]:i.LESS,[Bv]:i.LEQUAL,[GT]:i.EQUAL,[XT]:i.GEQUAL,[qT]:i.GREATER,[WT]:i.NOTEQUAL};function le(I,w){if(w.type===Vn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===rl||w.magFilter===Ca||w.magFilter===Hi||w.minFilter===sn||w.minFilter===rl||w.minFilter===Ca||w.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,z[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,z[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,z[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Y[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==Ca&&w.minFilter!==Hi||w.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Re(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",M));let K=w.source,oe=f.get(K);oe===void 0&&(oe={},f.set(K,oe));let J=W(w);if(J!==I.__cacheKey){oe[J]===void 0&&(oe[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),oe[J].usedTimes++;let ze=oe[I.__cacheKey];ze!==void 0&&(oe[I.__cacheKey].usedTimes--,ze.usedTimes===0&&S(w)),I.__cacheKey=J,I.__webglTexture=oe[J].texture}return q}function Ve(I,w,q){return Math.floor(Math.floor(I/q)/w)}function pe(I,w,q,K){let J=I.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,q,K,w.data);else{J.sort((ue,Te)=>ue.start-Te.start);let ze=0;for(let ue=1;ue<J.length;ue++){let Te=J[ze],je=J[ue],He=Te.start+Te.count,be=Ve(je.start,w.width,4),ut=Ve(Te.start,w.width,4);je.start<=He+1&&be===ut&&Ve(je.start+je.count-1,w.width,4)===be?Te.count=Math.max(Te.count,je.start+je.count-Te.start):(++ze,J[ze]=je)}J.length=ze+1;let me=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ue=0,Te=J.length;ue<Te;ue++){let je=J[ue],He=Math.floor(je.start/4),be=Math.ceil(je.count/4),ut=He%w.width,B=Math.floor(He/w.width),de=be,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,ut,B,de,xe,q,K,w.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function Z(I,w,q){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);let oe=Re(I,w),J=w.source;t.bindTexture(K,I.__webglTexture,i.TEXTURE0+q);let ze=n.get(J);if(J.version!==ze.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let me=mt.getPrimaries(mt.workingColorSpace),Oe=w.colorSpace===lr?null:mt.getPrimaries(w.colorSpace),Ne=w.colorSpace===lr||me===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ue=v(w.image,!1,r.maxTextureSize);ue=tt(w,ue);let Te=s.convert(w.format,w.colorSpace),je=s.convert(w.type),He=x(w.internalFormat,Te,je,w.colorSpace,w.isVideoTexture);le(K,w);let be,ut=w.mipmaps,B=w.isVideoTexture!==!0,de=ze.__version===void 0||oe===!0,xe=J.dataReady,Le=T(w,ue);if(w.isDepthTexture)He=_(w.format===Ba,w.type),de&&(B?t.texStorage2D(i.TEXTURE_2D,1,He,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,He,ue.width,ue.height,0,Te,je,null));else if(w.isDataTexture)if(ut.length>0){B&&de&&t.texStorage2D(i.TEXTURE_2D,Le,He,ut[0].width,ut[0].height);for(let he=0,re=ut.length;he<re;he++)be=ut[he],B?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,Te,je,be.data):t.texImage2D(i.TEXTURE_2D,he,He,be.width,be.height,0,Te,je,be.data);w.generateMipmaps=!1}else B?(de&&t.texStorage2D(i.TEXTURE_2D,Le,He,ue.width,ue.height),xe&&pe(w,ue,Te,je)):t.texImage2D(i.TEXTURE_2D,0,He,ue.width,ue.height,0,Te,je,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,He,ut[0].width,ut[0].height,ue.depth);for(let he=0,re=ut.length;he<re;he++)if(be=ut[he],w.format!==Un)if(Te!==null)if(B){if(xe)if(w.layerUpdates.size>0){let Be=vv(be.width,be.height,w.format,w.type);for(let nt of w.layerUpdates){let Lt=be.data.subarray(nt*Be/be.data.BYTES_PER_ELEMENT,(nt+1)*Be/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,nt,be.width,be.height,1,Te,Lt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,ue.depth,Te,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,He,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,ue.depth,Te,je,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,He,be.width,be.height,ue.depth,0,Te,je,be.data)}else{B&&de&&t.texStorage2D(i.TEXTURE_2D,Le,He,ut[0].width,ut[0].height);for(let he=0,re=ut.length;he<re;he++)be=ut[he],w.format!==Un?Te!==null?B?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,He,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,Te,je,be.data):t.texImage2D(i.TEXTURE_2D,he,He,be.width,be.height,0,Te,je,be.data)}else if(w.isDataArrayTexture)if(B){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,He,ue.width,ue.height,ue.depth),xe)if(w.layerUpdates.size>0){let he=vv(ue.width,ue.height,w.format,w.type);for(let re of w.layerUpdates){let Be=ue.data.subarray(re*he/ue.data.BYTES_PER_ELEMENT,(re+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Te,je,Be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,je,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ue.width,ue.height,ue.depth,0,Te,je,ue.data);else if(w.isData3DTexture)B?(de&&t.texStorage3D(i.TEXTURE_3D,Le,He,ue.width,ue.height,ue.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,je,ue.data)):t.texImage3D(i.TEXTURE_3D,0,He,ue.width,ue.height,ue.depth,0,Te,je,ue.data);else if(w.isFramebufferTexture){if(de)if(B)t.texStorage2D(i.TEXTURE_2D,Le,He,ue.width,ue.height);else{let he=ue.width,re=ue.height;for(let Be=0;Be<Le;Be++)t.texImage2D(i.TEXTURE_2D,Be,He,he,re,0,Te,je,null),he>>=1,re>>=1}}else if(ut.length>0){if(B&&de){let he=Qe(ut[0]);t.texStorage2D(i.TEXTURE_2D,Le,He,he.width,he.height)}for(let he=0,re=ut.length;he<re;he++)be=ut[he],B?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Te,je,be):t.texImage2D(i.TEXTURE_2D,he,He,Te,je,be);w.generateMipmaps=!1}else if(B){if(de){let he=Qe(ue);t.texStorage2D(i.TEXTURE_2D,Le,He,he.width,he.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,je,ue)}else t.texImage2D(i.TEXTURE_2D,0,He,Te,je,ue);g(w)&&p(K),ze.__version=J.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ne(I,w,q){if(w.image.length!==6)return;let K=Re(I,w),oe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let J=n.get(oe);if(oe.version!==J.__version||K===!0){t.activeTexture(i.TEXTURE0+q);let ze=mt.getPrimaries(mt.workingColorSpace),me=w.colorSpace===lr?null:mt.getPrimaries(w.colorSpace),Oe=w.colorSpace===lr||ze===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ne=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let re=0;re<6;re++)!Ne&&!ue?Te[re]=v(w.image[re],!0,r.maxCubemapSize):Te[re]=ue?w.image[re].image:w.image[re],Te[re]=tt(w,Te[re]);let je=Te[0],He=s.convert(w.format,w.colorSpace),be=s.convert(w.type),ut=x(w.internalFormat,He,be,w.colorSpace),B=w.isVideoTexture!==!0,de=J.__version===void 0||K===!0,xe=oe.dataReady,Le=T(w,je);le(i.TEXTURE_CUBE_MAP,w);let he;if(Ne){B&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ut,je.width,je.height);for(let re=0;re<6;re++){he=Te[re].mipmaps;for(let Be=0;Be<he.length;Be++){let nt=he[Be];w.format!==Un?He!==null?B?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,nt.width,nt.height,He,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ut,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,nt.width,nt.height,He,be,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ut,nt.width,nt.height,0,He,be,nt.data)}}}else{if(he=w.mipmaps,B&&de){he.length>0&&Le++;let re=Qe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ut,re.width,re.height)}for(let re=0;re<6;re++)if(ue){B?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Te[re].width,Te[re].height,He,be,Te[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ut,Te[re].width,Te[re].height,0,He,be,Te[re].data);for(let Be=0;Be<he.length;Be++){let Lt=he[Be].image[re].image;B?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Lt.width,Lt.height,He,be,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ut,Lt.width,Lt.height,0,He,be,Lt.data)}}else{B?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,He,be,Te[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ut,He,be,Te[re]);for(let Be=0;Be<he.length;Be++){let nt=he[Be];B?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,He,be,nt.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ut,He,be,nt.image[re])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),J.__version=oe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function _e(I,w,q,K,oe,J){let ze=s.convert(q.format,q.colorSpace),me=s.convert(q.type),Oe=x(q.internalFormat,ze,me,q.colorSpace),Ne=n.get(w),ue=n.get(q);if(ue.__renderTarget=w,!Ne.__hasExternalTextures){let Te=Math.max(1,w.width>>J),je=Math.max(1,w.height>>J);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Oe,Te,je,w.depth,0,ze,me,null):t.texImage2D(oe,J,Oe,Te,je,0,ze,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ce(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,oe,ue.__webglTexture,0,ge(w)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,oe,ue.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(I,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let K=w.depthTexture,oe=K&&K.isDepthTexture?K.type:null,J=_(w.stencilBuffer,oe),ze=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=ge(w);ce(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,J,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,I)}else{let K=w.textures;for(let oe=0;oe<K.length;oe++){let J=K[oe],ze=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Oe=x(J.internalFormat,ze,me,J.colorSpace),Ne=ge(w);q&&ce(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Oe,w.width,w.height):ce(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let oe=K.__webglTexture,J=ge(w);if(w.depthTexture.format===Na)ce(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(w.depthTexture.format===Ba)ce(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ct(I){let w=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=K}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let K=I.texture.mipmaps;K&&K.length>0?Se(w.__webglFramebuffer[0],I):Se(w.__webglFramebuffer,I)}else if(q){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),Pe(w.__webglDepthbuffer[K],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,J)}}else{let K=I.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Pe(w.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(I,w,q){let K=n.get(I);w!==void 0&&_e(K.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ct(I)}function U(I){let w=I.texture,q=n.get(I),K=n.get(w);I.addEventListener("dispose",A);let oe=I.textures,J=I.isWebGLCubeRenderTarget===!0,ze=oe.length>1;if(ze||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,a.memory.textures++),J){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)q.__webglFramebuffer[me][Oe]=i.createFramebuffer()}else q.__webglFramebuffer[me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)q.__webglFramebuffer[me]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ze)for(let me=0,Oe=oe.length;me<Oe;me++){let Ne=n.get(oe[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ce(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){let Oe=oe[me];q.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[me]);let Ne=s.convert(Oe.format,Oe.colorSpace),ue=s.convert(Oe.type),Te=x(Oe.internalFormat,Ne,ue,Oe.colorSpace,I.isXRRenderTarget===!0),je=ge(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Te,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,q.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),le(i.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)_e(q.__webglFramebuffer[me][Oe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe);else _e(q.__webglFramebuffer[me],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let me=0,Oe=oe.length;me<Oe;me++){let Ne=oe[me],ue=n.get(Ne),Te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ue.__webglTexture),le(Te,Ne),_e(q.__webglFramebuffer,I,Ne,i.COLOR_ATTACHMENT0+me,Te,0),g(Ne)&&p(Te)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),le(me,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)_e(q.__webglFramebuffer[Oe],I,w,i.COLOR_ATTACHMENT0,me,Oe);else _e(q.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,me,0);g(w)&&p(me),t.unbindTexture()}I.depthBuffer&&ct(I)}function ae(I){let w=I.textures;for(let q=0,K=w.length;q<K;q++){let oe=w[q];if(g(oe)){let J=y(I),ze=n.get(oe).__webglTexture;t.bindTexture(J,ze),p(J),t.unbindTexture()}}}let ie=[],Q=[];function ee(I){if(I.samples>0){if(ce(I)===!1){let w=I.textures,q=I.width,K=I.height,oe=i.COLOR_BUFFER_BIT,J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(I),me=w.length>1;if(me)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);let Oe=I.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let ue=n.get(w[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,oe,i.NEAREST),l===!0&&(ie.length=0,Q.length=0,ie.push(i.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ie.push(J),Q.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let ue=n.get(w[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ge(I){return Math.min(r.maxSamples,I.samples)}function ce(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(I){let w=a.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function tt(I,w){let q=I.colorSpace,K=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Ts&&q!==lr&&(mt.getTransfer(q)===Tt?(K!==Un||oe!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=L,this.setTextureCube=F,this.rebindTextures=yt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ce}function dA(i,e){function t(n,r=lr){let s,a=mt.getTransfer(r);if(n===Ti)return i.UNSIGNED_BYTE;if(n===sd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pv)return i.BYTE;if(n===Iv)return i.SHORT;if(n===Fa)return i.UNSIGNED_SHORT;if(n===rd)return i.INT;if(n===gr)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===eo)return i.HALF_FLOAT;if(n===Uv)return i.ALPHA;if(n===Fv)return i.RGB;if(n===Un)return i.RGBA;if(n===Na)return i.DEPTH_COMPONENT;if(n===Ba)return i.DEPTH_STENCIL;if(n===od)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===Ov)return i.RG;if(n===ld)return i.RG_INTEGER;if(n===cd)return i.RGBA_INTEGER;if(n===sl||n===al||n===ol||n===ll)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mh||n===gh||n===vh||n===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===_h||n===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yh||n===_h)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bh||n===Eh||n===Mh||n===wh||n===Th||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Dh||n===Lh||n===Uh||n===Fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ch)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===Nh||n===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Oh)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===kh||n===Hh||n===Vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var UH=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FH=`
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

}`,wv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ei({vertexShader:UH,fragmentShader:FH,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tv=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,v=typeof XRWebGLBinding<"u",g=new wv,p={},y=t.getContextAttributes(),x=null,_=null,T=[],M=[],A=new se,C=null,S=new rn;S.viewport=new gt;let E=new rn;E.viewport=new gt;let P=[S,E],O=new Jf,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=T[Z];return ne===void 0&&(ne=new La,T[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=T[Z];return ne===void 0&&(ne=new La,T[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=T[Z];return ne===void 0&&(ne=new La,T[Z]=ne),ne.getHandSpace()};function X(Z){let ne=M.indexOf(Z.inputSource);if(ne===-1)return;let _e=T[ne];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",L);for(let Z=0;Z<T.length;Z++){let ne=M[Z];ne!==null&&(M[Z]=null,T[Z].disconnect(ne))}k=null,W=null,g.reset();for(let Z in p)delete p[Z];e.setRenderTarget(x),d=null,f=null,h=null,r=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",N),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?Ba:Na,Pe=y.stencil?Oa:gr);let ct={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new di(f.textureWidth,f.textureHeight,{format:Un,type:Ti,depthTexture:new Rl(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new di(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(Z){for(let ne=0;ne<Z.removed.length;ne++){let _e=Z.removed[ne],Pe=M.indexOf(_e);Pe>=0&&(M[Pe]=null,T[Pe].disconnect(_e))}for(let ne=0;ne<Z.added.length;ne++){let _e=Z.added[ne],Pe=M.indexOf(_e);if(Pe===-1){for(let ct=0;ct<T.length;ct++)if(ct>=M.length){M.push(_e),Pe=ct;break}else if(M[ct]===null){M[ct]=_e,Pe=ct;break}if(Pe===-1)break}let Se=T[Pe];Se&&Se.connect(_e)}}let F=new D,z=new D;function Y(Z,ne,_e){F.setFromMatrixPosition(ne.matrixWorld),z.setFromMatrixPosition(_e.matrixWorld);let Pe=F.distanceTo(z),Se=ne.projectionMatrix.elements,ct=_e.projectionMatrix.elements,yt=Se[14]/(Se[10]-1),U=Se[14]/(Se[10]+1),ae=(Se[9]+1)/Se[5],ie=(Se[9]-1)/Se[5],Q=(Se[8]-1)/Se[0],ee=(ct[8]+1)/ct[0],ge=yt*Q,ce=yt*ee,ve=Pe/(-Q+ee),tt=ve*-Q;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(tt),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Qe=yt+ve,I=U+ve,w=ge-tt,q=ce+(Pe-tt),K=ae*U/I*Qe,oe=ie*U/I*Qe;Z.projectionMatrix.makePerspective(w,q,K,oe,Qe,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,_e=Z.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),O.near=E.near=S.near=ne,O.far=E.far=S.far=_e,(k!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,W=O.far),O.layers.mask=Z.layers.mask|6,S.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;let Pe=Z.parent,Se=O.cameras;te(O,Pe);for(let ct=0;ct<Se.length;ct++)te(Se[ct],Pe);Se.length===2?Y(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),le(Z,O,Pe)};function le(Z,ne,_e){_e===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ka*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Re=null;function Ve(Z,ne){if(u=ne.getViewerPose(c||a),m=ne,u!==null){let _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Pe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let U=0;U<_e.length;U++){let ae=_e[U],ie=null;if(d!==null)ie=d.getViewport(ae);else{let ee=h.getViewSubImage(f,ae);ie=ee.viewport,U===0&&(e.setRenderTargetTextures(_,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(_))}let Q=P[U];Q===void 0&&(Q=new rn,Q.layers.enable(U),Q.viewport=new gt,P[U]=Q),Q.matrix.fromArray(ae.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ae.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ie.x,ie.y,ie.width,ie.height),U===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Q)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let U=h.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&g.init(U,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let U=0;U<_e.length;U++){let ae=_e[U].camera;if(ae){let ie=p[ae];ie||(ie=new Cl,p[ae]=ie);let Q=h.getCameraImage(ae);ie.sourceTexture=Q}}}}for(let _e=0;_e<T.length;_e++){let Pe=M[_e],Se=T[_e];Pe!==null&&Se!==void 0&&Se.update(Pe,ne,c||a)}Re&&Re(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let pe=new lA;pe.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){Re=Z},this.dispose=function(){}}},gs=new Qn,OH=new Ke;function NH(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,KT(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,gs.copy(_),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.envMapRotation.value.setFromMatrix4(OH.makeRotationFromEuler(gs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function BH(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(m(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",g));let T=x.program;n.updateUBOMapping(y,T);let M=e.render.frame;s[y.id]!==M&&(f(y),s[y.id]=M)}function u(y){let x=h();y.__bindingPointIndex=x;let _=i.createBuffer(),T=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=r[y.id],_=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,A=_.length;M<A;M++){let C=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,E=C.length;S<E;S++){let P=C[S];if(d(P,M,S,T)===!0){let O=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],W=0;for(let X=0;X<k.length;X++){let N=k[X],L=v(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,O+W,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,_,T){let M=y.value,A=x+"_"+_;if(T[A]===void 0)return typeof M=="number"||typeof M=="boolean"?T[A]=M:T[A]=M.clone(),!0;{let C=T[A];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[A]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function m(y){let x=y.uniforms,_=0,T=16;for(let A=0,C=x.length;A<C;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,P=S.length;E<P;E++){let O=S[E],k=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=k.length;W<X;W++){let N=k[W],L=v(N),F=_%T,z=F%L.boundary,Y=F+z;_+=z,Y!==0&&T-Y<L.storage&&(_+=T-Y),O.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=L.storage}}}let M=_%T;return M>0&&(_+=T-M),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Av=class{constructor(e={}){let{canvas:t=ZT(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=Hn;let M=0,A=0,C=null,S=-1,E=null,P=new gt,O=new gt,k=null,W=new Ae(0),X=0,N=t.width,L=t.height,F=1,z=null,Y=null,te=new gt(0,0,N,L),le=new gt(0,0,N,L),Re=!1,Ve=new Br,pe=!1,Z=!1,ne=new Ke,_e=new D,Pe=new gt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function yt(){return C===null?F:1}let U=n;function ae(R,H){return t.getContext(R,H)}try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){let H="webgl2";if(U=ae(H,R),U===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Q,ee,ge,ce,ve,tt,Qe,I,w,q,K,oe,J,ze,me,Oe,Ne,ue,Te,je,He,be,ut;function B(){ie=new ik(U),ie.init(),He=new dA(U,ie),Q=new $4(U,ie,e,He),ee=new DH(U,ie),Q.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),ge=new ak(U),ce=new yH,ve=new LH(U,ie,ee,ce,Q,He,ge),tt=new J4(_),Qe=new nk(_),I=new fz(U),be=new j4(U,I),w=new rk(U,I,ge,be),q=new lk(U,w,I,ge),ue=new ok(U,Q,ve),me=new K4(ce),K=new xH(_,tt,Qe,ie,Q,be,me),oe=new NH(_,ce),J=new SH,ze=new AH(ie),Ne=new Y4(_,tt,Qe,ee,q,d,l),Oe=new PH(_,q,Q),ut=new BH(U,ge,Q,ee),Te=new Z4(U,ie,ge),je=new sk(U,ie,ge),ge.programs=K.programs,_.capabilities=Q,_.extensions=ie,_.properties=ce,_.renderLists=J,_.shadowMap=Oe,_.state=ee,_.info=ge}B();let de=new Tv(_,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(N,L,!1))},this.getSize=function(R){return R.set(N,L)},this.setSize=function(R,H,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,L=H,t.width=Math.floor(R*F),t.height=Math.floor(H*F),j===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(N*F,L*F).floor()},this.setDrawingBufferSize=function(R,H,j){N=R,L=H,F=j,t.width=Math.floor(R*j),t.height=Math.floor(H*j),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,H,j,$){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,H,j,$),ee.viewport(P.copy(te).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,H,j,$){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,H,j,$),ee.scissor(O.copy(le).multiplyScalar(F).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){ee.setScissorTest(Re=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,j=!0){let $=0;if(R){let V=!1;if(C!==null){let fe=C.texture.format;V=fe===cd||fe===ld||fe===Ql}if(V){let fe=C.texture.type,Me=fe===Ti||fe===gr||fe===Fa||fe===Oa||fe===sd||fe===ad,Fe=Ne.getClearColor(),De=Ne.getClearAlpha(),Xe=Fe.r,$e=Fe.g,Ge=Fe.b;Me?(m[0]=Xe,m[1]=$e,m[2]=Ge,m[3]=De,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Xe,v[1]=$e,v[2]=Ge,v[3]=De,U.clearBufferiv(U.COLOR,0,v))}else $|=U.COLOR_BUFFER_BIT}H&&($|=U.DEPTH_BUFFER_BIT),j&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),J.dispose(),ze.dispose(),ce.dispose(),tt.dispose(),Qe.dispose(),q.dispose(),be.dispose(),ut.dispose(),K.dispose(),de.dispose(),de.removeEventListener("sessionstart",Di),de.removeEventListener("sessionend",wx),Yr.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=ge.autoReset,H=Oe.enabled,j=Oe.autoUpdate,$=Oe.needsUpdate,V=Oe.type;B(),ge.autoReset=R,Oe.enabled=H,Oe.autoUpdate=j,Oe.needsUpdate=$,Oe.type=V}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function re(R){let H=R.target;H.removeEventListener("dispose",re),Be(H)}function Be(R){nt(R),ce.remove(R)}function nt(R){let H=ce.get(R).programs;H!==void 0&&(H.forEach(function(j){K.releaseProgram(j)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,j,$,V,fe){H===null&&(H=Se);let Me=V.isMesh&&V.matrixWorld.determinant()<0,Fe=fR(R,H,j,$,V);ee.setMaterial($,Me);let De=j.index,Xe=1;if($.wireframe===!0){if(De=w.getWireframeAttribute(j),De===void 0)return;Xe=2}let $e=j.drawRange,Ge=j.attributes.position,pt=$e.start*Xe,Rt=($e.start+$e.count)*Xe;fe!==null&&(pt=Math.max(pt,fe.start*Xe),Rt=Math.min(Rt,(fe.start+fe.count)*Xe)),De!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,De.count)):Ge!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,Ge.count));let Xt=Rt-pt;if(Xt<0||Xt===1/0)return;be.setup(V,$,Fe,j,De);let Ot,It=Te;if(De!==null&&(Ot=I.get(De),It=je,It.setIndex(Ot)),V.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*yt()),It.setMode(U.LINES)):It.setMode(U.TRIANGLES);else if(V.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),ee.setLineWidth(qe*yt()),V.isLineSegments?It.setMode(U.LINES):V.isLineLoop?It.setMode(U.LINE_LOOP):It.setMode(U.LINE_STRIP)}else V.isPoints?It.setMode(U.POINTS):V.isSprite&&It.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))It.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let qe=V._multiDrawStarts,Ht=V._multiDrawCounts,xt=V._multiDrawCount,Xn=De?I.get(De).bytesPerElement:1,Xs=ce.get($).currentProgram.getUniforms();for(let Yn=0;Yn<xt;Yn++)Xs.setValue(U,"_gl_DrawID",Yn),It.render(qe[Yn]/Xn,Ht[Yn])}else if(V.isInstancedMesh)It.renderInstances(pt,Xt,V.count);else if(j.isInstancedBufferGeometry){let qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,qe);It.renderInstances(pt,Xt,Ht)}else It.render(pt,Xt)};function Lt(R,H,j){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,pc(R,H,j),R.side=pr,R.needsUpdate=!0,pc(R,H,j),R.side=zi):pc(R,H,j)}this.compile=function(R,H,j=null){j===null&&(j=R),p=ze.get(j),p.init(H),x.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==j&&R.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let Fe=fe[Me];Lt(Fe,j,V),$.add(Fe)}else Lt(fe,j,V),$.add(fe)}),p=x.pop(),$},this.compileAsync=function(R,H,j=null){let $=this.compile(R,H,j);return new Promise(V=>{function fe(){if($.forEach(function(Me){ce.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){V(R);return}setTimeout(fe,10)}ie.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Et=null;function $i(R){Et&&Et(R)}function Di(){Yr.stop()}function wx(){Yr.start()}let Yr=new lA;Yr.setAnimationLoop($i),typeof self<"u"&&Yr.setContext(self),this.setAnimationLoop=function(R){Et=R,de.setAnimationLoop(R),R===null?Yr.stop():Yr.start()},de.addEventListener("sessionstart",Di),de.addEventListener("sessionend",wx),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,C),p=ze.get(R,x.length),p.init(H),x.push(p),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ve.setFromProjectionMatrix(ne,Kn,H.reversedDepth),Z=this.localClippingEnabled,pe=me.init(this.clippingPlanes,Z),g=J.get(R,y.length),g.init(),y.push(g),de.enabled===!0&&de.isPresenting===!0){let fe=_.xr.getDepthSensingMesh();fe!==null&&Ud(fe,H,-1/0,_.sortObjects)}Ud(R,H,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(z,Y),ct=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ct&&Ne.addToRenderList(g,R),this.info.render.frame++,pe===!0&&me.beginShadows();let j=p.state.shadowsArray;Oe.render(j,R,H),pe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){let fe=H.cameras;if(V.length>0)for(let Me=0,Fe=fe.length;Me<Fe;Me++){let De=fe[Me];Ax($,V,R,De)}ct&&Ne.render(R);for(let Me=0,Fe=fe.length;Me<Fe;Me++){let De=fe[Me];Tx(g,R,De,De.viewport)}}else V.length>0&&Ax($,V,R,H),ct&&Ne.render(R),Tx(g,R,H);C!==null&&A===0&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,H),be.resetDefaultState(),S=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],pe===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ud(R,H,j,$){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ve.intersectsSprite(R)){$&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);let Me=q.update(R),Fe=R.material;Fe.visible&&g.push(R,Me,Fe,j,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ve.intersectsObject(R))){let Me=q.update(R),Fe=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Fe)){let De=Me.groups;for(let Xe=0,$e=De.length;Xe<$e;Xe++){let Ge=De[Xe],pt=Fe[Ge.materialIndex];pt&&pt.visible&&g.push(R,Me,pt,j,Pe.z,Ge)}}else Fe.visible&&g.push(R,Me,Fe,j,Pe.z,null)}}let fe=R.children;for(let Me=0,Fe=fe.length;Me<Fe;Me++)Ud(fe[Me],H,j,$)}function Tx(R,H,j,$){let V=R.opaque,fe=R.transmissive,Me=R.transparent;p.setupLightsView(j),pe===!0&&me.setGlobalState(_.clippingPlanes,j),$&&ee.viewport(P.copy($)),V.length>0&&dc(V,H,j),fe.length>0&&dc(fe,H,j),Me.length>0&&dc(Me,H,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ax(R,H,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new di(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?eo:Ti,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let fe=p.state.transmissionRenderTarget[$.id],Me=$.viewport||P;fe.setSize(Me.z*_.transmissionResolutionScale,Me.w*_.transmissionResolutionScale);let Fe=_.getRenderTarget(),De=_.getActiveCubeFace(),Xe=_.getActiveMipmapLevel();_.setRenderTarget(fe),_.getClearColor(W),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),ct&&Ne.render(j);let $e=_.toneMapping;_.toneMapping=hr;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),pe===!0&&me.setGlobalState(_.clippingPlanes,$),dc(R,j,$),ve.updateMultisampleRenderTarget(fe),ve.updateRenderTargetMipmap(fe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Rt=0,Xt=H.length;Rt<Xt;Rt++){let Ot=H[Rt],It=Ot.object,qe=Ot.geometry,Ht=Ot.material,xt=Ot.group;if(Ht.side===zi&&It.layers.test($.layers)){let Xn=Ht.side;Ht.side=Fn,Ht.needsUpdate=!0,Rx(It,j,$,qe,Ht,xt),Ht.side=Xn,Ht.needsUpdate=!0,pt=!0}}pt===!0&&(ve.updateMultisampleRenderTarget(fe),ve.updateRenderTargetMipmap(fe))}_.setRenderTarget(Fe,De,Xe),_.setClearColor(W,X),Ge!==void 0&&($.viewport=Ge),_.toneMapping=$e}function dc(R,H,j){let $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,fe=R.length;V<fe;V++){let Me=R[V],Fe=Me.object,De=Me.geometry,Xe=Me.group,$e=Me.material;$e.allowOverride===!0&&$!==null&&($e=$),Fe.layers.test(j.layers)&&Rx(Fe,H,j,De,$e,Xe)}}function Rx(R,H,j,$,V,fe){R.onBeforeRender(_,H,j,$,V,fe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(_,H,j,$,R,fe),V.transparent===!0&&V.side===zi&&V.forceSinglePass===!1?(V.side=Fn,V.needsUpdate=!0,_.renderBufferDirect(j,H,$,V,R,fe),V.side=pr,V.needsUpdate=!0,_.renderBufferDirect(j,H,$,V,R,fe),V.side=zi):_.renderBufferDirect(j,H,$,V,R,fe),R.onAfterRender(_,H,j,$,V,fe)}function pc(R,H,j){H.isScene!==!0&&(H=Se);let $=ce.get(R),V=p.state.lights,fe=p.state.shadowsArray,Me=V.state.version,Fe=K.getParameters(R,V.state,fe,H,j),De=K.getProgramCacheKey(Fe),Xe=$.programs;$.environment=R.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(R.isMeshStandardMaterial?Qe:tt).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",re),Xe=new Map,$.programs=Xe);let $e=Xe.get(De);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Me)return Px(R,Fe),$e}else Fe.uniforms=K.getUniforms(R),R.onBeforeCompile(Fe,_),$e=K.acquireProgram(Fe,De),Xe.set(De,$e),$.uniforms=Fe.uniforms;let Ge=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=me.uniform),Px(R,Fe),$.needsLights=pR(R),$.lightsStateVersion=Me,$.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function Cx(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Ua.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Px(R,H){let j=ce.get(R);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function fR(R,H,j,$,V){H.isScene!==!0&&(H=Se),ve.resetTextureUnits();let fe=H.fog,Me=$.isMeshStandardMaterial?H.environment:null,Fe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ts,De=($.isMeshStandardMaterial?Qe:tt).get($.envMap||Me),Xe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!j.morphAttributes.position,pt=!!j.morphAttributes.normal,Rt=!!j.morphAttributes.color,Xt=hr;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Xt=_.toneMapping);let Ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,It=Ot!==void 0?Ot.length:0,qe=ce.get($),Ht=p.state.lights;if(pe===!0&&(Z===!0||R!==E)){let Cn=R===E&&$.id===S;me.setState($,R,Cn)}let xt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Fe||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==De||$.fog===!0&&qe.fog!==fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==me.numPlanes||qe.numIntersection!==me.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==$e||qe.morphTargets!==Ge||qe.morphNormals!==pt||qe.morphColors!==Rt||qe.toneMapping!==Xt||qe.morphTargetsCount!==It)&&(xt=!0):(xt=!0,qe.__version=$.version);let Xn=qe.currentProgram;xt===!0&&(Xn=pc($,H,V));let Xs=!1,Yn=!1,mo=!1,Vt=Xn.getUniforms(),ai=qe.uniforms;if(ee.useProgram(Xn.program)&&(Xs=!0,Yn=!0,mo=!0),$.id!==S&&(S=$.id,Yn=!0),Xs||E!==R){ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Vt.setValue(U,"projectionMatrix",R.projectionMatrix),Vt.setValue(U,"viewMatrix",R.matrixWorldInverse);let On=Vt.map.cameraPosition;On!==void 0&&On.setValue(U,_e.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&Vt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Vt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Yn=!0,mo=!0)}if(V.isSkinnedMesh){Vt.setOptional(U,V,"bindMatrix"),Vt.setOptional(U,V,"bindMatrixInverse");let Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Vt.setValue(U,"boneTexture",Cn.boneTexture,ve))}V.isBatchedMesh&&(Vt.setOptional(U,V,"batchingTexture"),Vt.setValue(U,"batchingTexture",V._matricesTexture,ve),Vt.setOptional(U,V,"batchingIdTexture"),Vt.setValue(U,"batchingIdTexture",V._indirectTexture,ve),Vt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Vt.setValue(U,"batchingColorTexture",V._colorsTexture,ve));let oi=j.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&ue.update(V,j,Xn),(Yn||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Vt.setValue(U,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ai.envMap.value=De,ai.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ai.envMapIntensity.value=H.environmentIntensity),Yn&&(Vt.setValue(U,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&dR(ai,mo),fe&&$.fog===!0&&oe.refreshFogUniforms(ai,fe),oe.refreshMaterialUniforms(ai,$,F,L,p.state.transmissionRenderTarget[R.id]),Ua.upload(U,Cx(qe),ai,ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ua.upload(U,Cx(qe),ai,ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Vt.setValue(U,"center",V.center),Vt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Vt.setValue(U,"normalMatrix",V.normalMatrix),Vt.setValue(U,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Cn=$.uniformsGroups;for(let On=0,Fd=Cn.length;On<Fd;On++){let jr=Cn[On];ut.update(jr,Xn),ut.bind(jr,Xn)}}return Xn}function dR(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function pR(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,H,j){let $=ce.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=H,ce.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let j=ce.get(R);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let mR=U.createFramebuffer();this.setRenderTarget=function(R,H=0,j=0){C=R,M=H,A=j;let $=!0,V=null,fe=!1,Me=!1;if(R){let De=ce.get(R);if(De.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(De.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(De.__hasExternalTextures)ve.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ge=R.depthTexture;if(De.__boundDepthTexture!==Ge){if(Ge!==null&&ce.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);let $e=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[H])?V=$e[H][j]:V=$e[H],fe=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?V=ce.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[j]:V=$e,P.copy(R.viewport),O.copy(R.scissor),k=R.scissorTest}else P.copy(te).multiplyScalar(F).floor(),O.copy(le).multiplyScalar(F).floor(),k=Re;if(j!==0&&(V=mR),ee.bindFramebuffer(U.FRAMEBUFFER,V)&&$&&ee.drawBuffers(R,V),ee.viewport(P),ee.scissor(O),ee.setScissorTest(k),fe){let De=ce.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,j)}else if(Me){let De=H;for(let Xe=0;Xe<R.textures.length;Xe++){let $e=ce.get(R.textures[Xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xe,$e.__webglTexture,j,De)}}else if(R!==null&&j!==0){let De=ce.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(R,H,j,$,V,fe,Me,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(De=De[Me]),De){ee.bindFramebuffer(U.FRAMEBUFFER,De);try{let Xe=R.textures[Fe],$e=Xe.format,Ge=Xe.type;if(!Q.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-$&&j>=0&&j<=R.height-V&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Fe),U.readPixels(H,j,$,V,He.convert($e),He.convert(Ge),fe))}finally{let Xe=C!==null?ce.get(C).__webglFramebuffer:null;ee.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,H,j,$,V,fe,Me,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(De=De[Me]),De)if(H>=0&&H<=R.width-$&&j>=0&&j<=R.height-V){ee.bindFramebuffer(U.FRAMEBUFFER,De);let Xe=R.textures[Fe],$e=Xe.format,Ge=Xe.type;if(!Q.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Fe),U.readPixels(H,j,$,V,He.convert($e),He.convert(Ge),0);let Rt=C!==null?ce.get(C).__webglFramebuffer:null;ee.bindFramebuffer(U.FRAMEBUFFER,Rt);let Xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ON(U,Xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(pt),U.deleteSync(Xt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,j=0){let $=Math.pow(2,-j),V=Math.floor(R.image.width*$),fe=Math.floor(R.image.height*$),Me=H!==null?H.x:0,Fe=H!==null?H.y:0;ve.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Me,Fe,V,fe),ee.unbindTexture()};let gR=U.createFramebuffer(),vR=U.createFramebuffer();this.copyTextureToTexture=function(R,H,j=null,$=null,V=0,fe=null){fe===null&&(V!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let Me,Fe,De,Xe,$e,Ge,pt,Rt,Xt,Ot=R.isCompressedTexture?R.mipmaps[fe]:R.image;if(j!==null)Me=j.max.x-j.min.x,Fe=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,Xe=j.min.x,$e=j.min.y,Ge=j.isBox3?j.min.z:0;else{let oi=Math.pow(2,-V);Me=Math.floor(Ot.width*oi),Fe=Math.floor(Ot.height*oi),R.isDataArrayTexture?De=Ot.depth:R.isData3DTexture?De=Math.floor(Ot.depth*oi):De=1,Xe=0,$e=0,Ge=0}$!==null?(pt=$.x,Rt=$.y,Xt=$.z):(pt=0,Rt=0,Xt=0);let It=He.convert(H.format),qe=He.convert(H.type),Ht;H.isData3DTexture?(ve.setTexture3D(H,0),Ht=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ve.setTexture2DArray(H,0),Ht=U.TEXTURE_2D_ARRAY):(ve.setTexture2D(H,0),Ht=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);let xt=U.getParameter(U.UNPACK_ROW_LENGTH),Xn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xs=U.getParameter(U.UNPACK_SKIP_PIXELS),Yn=U.getParameter(U.UNPACK_SKIP_ROWS),mo=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);let Vt=R.isDataArrayTexture||R.isData3DTexture,ai=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let oi=ce.get(R),Cn=ce.get(H),On=ce.get(oi.__renderTarget),Fd=ce.get(Cn.__renderTarget);ee.bindFramebuffer(U.READ_FRAMEBUFFER,On.__webglFramebuffer),ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fd.__webglFramebuffer);for(let jr=0;jr<De;jr++)Vt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,V,Ge+jr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.get(H).__webglTexture,fe,Xt+jr)),U.blitFramebuffer(Xe,$e,Me,Fe,pt,Rt,Me,Fe,U.DEPTH_BUFFER_BIT,U.NEAREST);ee.bindFramebuffer(U.READ_FRAMEBUFFER,null),ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||ce.has(R)){let oi=ce.get(R),Cn=ce.get(H);ee.bindFramebuffer(U.READ_FRAMEBUFFER,gR),ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,vR);for(let On=0;On<De;On++)Vt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,oi.__webglTexture,V,Ge+On):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,oi.__webglTexture,V),ai?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Cn.__webglTexture,fe,Xt+On):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Cn.__webglTexture,fe),V!==0?U.blitFramebuffer(Xe,$e,Me,Fe,pt,Rt,Me,Fe,U.COLOR_BUFFER_BIT,U.NEAREST):ai?U.copyTexSubImage3D(Ht,fe,pt,Rt,Xt+On,Xe,$e,Me,Fe):U.copyTexSubImage2D(Ht,fe,pt,Rt,Xe,$e,Me,Fe);ee.bindFramebuffer(U.READ_FRAMEBUFFER,null),ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ai?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ht,fe,pt,Rt,Xt,Me,Fe,De,It,qe,Ot.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ht,fe,pt,Rt,Xt,Me,Fe,De,It,Ot.data):U.texSubImage3D(Ht,fe,pt,Rt,Xt,Me,Fe,De,It,qe,Ot):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,pt,Rt,Me,Fe,It,qe,Ot.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,pt,Rt,Ot.width,Ot.height,It,Ot.data):U.texSubImage2D(U.TEXTURE_2D,fe,pt,Rt,Me,Fe,It,qe,Ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xs),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mo),fe===0&&H.generateMipmaps&&U.generateMipmap(Ht),ee.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),ee.unbindTexture()},this.resetState=function(){M=0,A=0,C=null,ee.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};b.ACESFilmicToneMapping=PT;b.AddEquation=Lr;b.AddOperation=TT;b.AdditiveAnimationBlendMode=Nv;b.AdditiveBlending=Kg;b.AgXToneMapping=DT;b.AlphaFormat=Uv;b.AlwaysCompare=YT;b.AlwaysDepth=ch;b.AlwaysStencilFunc=t0;b.AmbientLight=Wf;b.AnimationAction=nd;b.AnimationClip=Fs;b.AnimationLoader=w0;b.AnimationMixer=V0;b.AnimationObjectGroup=H0;b.AnimationUtils=E0;b.ArcCurve=df;b.ArrayCamera=Jf;b.ArrowHelper=dv;b.AttachedBindMode=e0;b.Audio=ed;b.AudioAnalyser=z0;b.AudioContext=$l;b.AudioListener=N0;b.AudioLoader=F0;b.AxesHelper=pv;b.BackSide=Fn;b.BasicDepthPacking=BT;b.BasicShadowMap=FO;b.BatchedMesh=nf;b.Bone=Tl;b.BooleanKeyframeTrack=vr;b.Box2=ev;b.Box3=hn;b.Box3Helper=hv;b.BoxGeometry=As;b.BoxHelper=uv;b.BufferAttribute=Mt;b.BufferGeometry=at;b.BufferGeometryLoader=Kf;b.ByteType=Pv;b.Cache=Gi;b.Camera=Wa;b.CameraHelper=cv;b.CanvasTexture=x0;b.CapsuleGeometry=cf;b.CatmullRomCurve3=pf;b.CineonToneMapping=CT;b.CircleGeometry=uf;b.ClampToEdgeWrapping=ui;b.Clock=Qf;b.Color=Ae;b.ColorKeyframeTrack=Xl;b.ColorManagement=mt;b.CompressedArrayTexture=g0;b.CompressedCubeTexture=v0;b.CompressedTexture=Ya;b.CompressedTextureLoader=T0;b.ConeGeometry=Il;b.ConstantAlphaFactor=ET;b.ConstantColorFactor=ST;b.Controls=gv;b.CubeCamera=Wh;b.CubeReflectionMapping=mr;b.CubeRefractionMapping=Fr;b.CubeTexture=Rs;b.CubeTextureLoader=A0;b.CubeUVReflectionMapping=Qa;b.CubicBezierCurve=Dl;b.CubicBezierCurve3=mf;b.CubicInterpolant=Bf;b.CullFaceBack=$g;b.CullFaceFront=sT;b.CullFaceFrontBack=UO;b.CullFaceNone=rT;b.Curve=ti;b.CurvePath=xf;b.CustomBlending=oT;b.CustomToneMapping=IT;b.CylinderGeometry=Pl;b.Cylindrical=J0;b.Data3DTexture=Va;b.DataArrayTexture=Ha;b.DataTexture=hi;b.DataTextureLoader=R0;b.DataUtils=s0;b.DecrementStencilOp=ZO;b.DecrementWrapStencilOp=KO;b.DefaultLoadingManager=aA;b.DepthFormat=Na;b.DepthStencilFormat=Ba;b.DepthTexture=Rl;b.DetachedBindMode=UT;b.DirectionalLight=qf;b.DirectionalLightHelper=lv;b.DiscreteInterpolant=zf;b.DodecahedronGeometry=hf;b.DoubleSide=zi;b.DstAlphaFactor=gT;b.DstColorFactor=xT;b.DynamicCopyUsage=fN;b.DynamicDrawUsage=aN;b.DynamicReadUsage=cN;b.EdgesGeometry=ff;b.EllipseCurve=ja;b.EqualCompare=GT;b.EqualDepth=hh;b.EqualStencilFunc=tN;b.EquirectangularReflectionMapping=fl;b.EquirectangularRefractionMapping=dl;b.Euler=Qn;b.EventDispatcher=fi;b.ExternalTexture=Cl;b.ExtrudeGeometry=yf;b.FileLoader=Ai;b.Float16BufferAttribute=h0;b.Float32BufferAttribute=Ie;b.FloatType=Vn;b.Fog=jh;b.FogExp2=Yh;b.FramebufferTexture=m0;b.FrontSide=pr;b.Frustum=Br;b.FrustumArray=tf;b.GLBufferAttribute=Y0;b.GLSL1=pN;b.GLSL3=n0;b.GreaterCompare=qT;b.GreaterDepth=dh;b.GreaterEqualCompare=XT;b.GreaterEqualDepth=fh;b.GreaterEqualStencilFunc=sN;b.GreaterStencilFunc=iN;b.GridHelper=av;b.Group=Ur;b.HalfFloatType=eo;b.HemisphereLight=Hf;b.HemisphereLightHelper=sv;b.IcosahedronGeometry=_f;b.ImageBitmapLoader=U0;b.ImageLoader=Os;b.ImageUtils=qh;b.IncrementStencilOp=jO;b.IncrementWrapStencilOp=$O;b.InstancedBufferAttribute=Nr;b.InstancedBufferGeometry=$f;b.InstancedInterleavedBuffer=X0;b.InstancedMesh=ef;b.Int16BufferAttribute=c0;b.Int32BufferAttribute=u0;b.Int8BufferAttribute=a0;b.IntType=rd;b.InterleavedBuffer=Xa;b.InterleavedBufferAttribute=Cs;b.Interpolant=Is;b.InterpolateDiscrete=gl;b.InterpolateLinear=Gh;b.InterpolateSmooth=sh;b.InterpolationSamplingMode=vN;b.InterpolationSamplingType=gN;b.InvertStencilOp=JO;b.KeepStencilOp=vs;b.KeyframeTrack=Gn;b.LOD=Kh;b.LatheGeometry=Sf;b.Layers=Ga;b.LessCompare=VT;b.LessDepth=uh;b.LessEqualCompare=Bv;b.LessEqualDepth=ws;b.LessEqualStencilFunc=nN;b.LessStencilFunc=eN;b.Light=Xi;b.LightProbe=jf;b.Line=Wi;b.Line3=tv;b.LineBasicMaterial=yn;b.LineCurve=Ll;b.LineCurve3=gf;b.LineDashedMaterial=Nf;b.LineLoop=af;b.LineSegments=pi;b.LinearFilter=sn;b.LinearInterpolant=Wl;b.LinearMipMapLinearFilter=zO;b.LinearMipMapNearestFilter=BO;b.LinearMipmapLinearFilter=Hi;b.LinearMipmapNearestFilter=rl;b.LinearSRGBColorSpace=Ts;b.LinearToneMapping=AT;b.LinearTransfer=xl;b.Loader=An;b.LoaderUtils=Zl;b.LoadingManager=Yl;b.LoopOnce=FT;b.LoopPingPong=NT;b.LoopRepeat=OT;b.MOUSE=DO;b.Material=fn;b.MaterialLoader=Zf;b.MathUtils=UN;b.Matrix2=Q0;b.Matrix3=it;b.Matrix4=Ke;b.MaxEquation=hT;b.Mesh=Zt;b.MeshBasicMaterial=qi;b.MeshDepthMaterial=Gl;b.MeshDistanceMaterial=ql;b.MeshLambertMaterial=Ff;b.MeshMatcapMaterial=Of;b.MeshNormalMaterial=Uf;b.MeshPhongMaterial=Df;b.MeshPhysicalMaterial=If;b.MeshStandardMaterial=Vl;b.MeshToonMaterial=Lf;b.MinEquation=uT;b.MirroredRepeatWrapping=ml;b.MixOperation=wT;b.MultiplyBlending=Qg;b.MultiplyOperation=Jl;b.NearestFilter=xn;b.NearestMipMapLinearFilter=NO;b.NearestMipMapNearestFilter=OO;b.NearestMipmapLinearFilter=Ca;b.NearestMipmapNearestFilter=Cv;b.NeutralToneMapping=LT;b.NeverCompare=HT;b.NeverDepth=lh;b.NeverStencilFunc=QO;b.NoBlending=ur;b.NoColorSpace=lr;b.NoToneMapping=hr;b.NormalAnimationBlendMode=ud;b.NormalBlending=Es;b.NotEqualCompare=WT;b.NotEqualDepth=ph;b.NotEqualStencilFunc=rN;b.NumberKeyframeTrack=Ds;b.Object3D=_t;b.ObjectLoader=L0;b.ObjectSpaceNormalMap=kT;b.OctahedronGeometry=kl;b.OneFactor=dT;b.OneMinusConstantAlphaFactor=MT;b.OneMinusConstantColorFactor=bT;b.OneMinusDstAlphaFactor=vT;b.OneMinusDstColorFactor=yT;b.OneMinusSrcAlphaFactor=oh;b.OneMinusSrcColorFactor=mT;b.OrthographicCamera=Ja;b.PCFShadowMap=Rv;b.PCFSoftShadowMap=aT;b.PMREMGenerator=Kl;b.Path=Za;b.PerspectiveCamera=rn;b.Plane=Bi;b.PlaneGeometry=Ka;b.PlaneHelper=fv;b.PointLight=Gf;b.PointLightHelper=rv;b.Points=of;b.PointsMaterial=Al;b.PolarGridHelper=ov;b.PolyhedronGeometry=zr;b.PositionalAudio=B0;b.PropertyBinding=At;b.PropertyMixer=td;b.QuadraticBezierCurve=Ul;b.QuadraticBezierCurve3=Fl;b.Quaternion=Tn;b.QuaternionKeyframeTrack=Ls;b.QuaternionLinearInterpolant=kf;b.RED_GREEN_RGTC2_Format=Hh;b.RED_RGTC1_Format=zh;b.REVISION="180";b.RGBADepthPacking=zT;b.RGBAFormat=Un;b.RGBAIntegerFormat=cd;b.RGBA_ASTC_10x10_Format=Lh;b.RGBA_ASTC_10x5_Format=Ph;b.RGBA_ASTC_10x6_Format=Ih;b.RGBA_ASTC_10x8_Format=Dh;b.RGBA_ASTC_12x10_Format=Uh;b.RGBA_ASTC_12x12_Format=Fh;b.RGBA_ASTC_4x4_Format=bh;b.RGBA_ASTC_5x4_Format=Eh;b.RGBA_ASTC_5x5_Format=Mh;b.RGBA_ASTC_6x5_Format=wh;b.RGBA_ASTC_6x6_Format=Th;b.RGBA_ASTC_8x5_Format=Ah;b.RGBA_ASTC_8x6_Format=Rh;b.RGBA_ASTC_8x8_Format=Ch;b.RGBA_BPTC_Format=Oh;b.RGBA_ETC2_EAC_Format=Sh;b.RGBA_PVRTC_2BPPV1_Format=xh;b.RGBA_PVRTC_4BPPV1_Format=vh;b.RGBA_S3TC_DXT1_Format=al;b.RGBA_S3TC_DXT3_Format=ol;b.RGBA_S3TC_DXT5_Format=ll;b.RGBDepthPacking=qO;b.RGBFormat=Fv;b.RGBIntegerFormat=kO;b.RGB_BPTC_SIGNED_Format=Nh;b.RGB_BPTC_UNSIGNED_Format=Bh;b.RGB_ETC1_Format=yh;b.RGB_ETC2_Format=_h;b.RGB_PVRTC_2BPPV1_Format=gh;b.RGB_PVRTC_4BPPV1_Format=mh;b.RGB_S3TC_DXT1_Format=sl;b.RGDepthPacking=WO;b.RGFormat=Ov;b.RGIntegerFormat=ld;b.RawShaderMaterial=Pf;b.Ray=Or;b.Raycaster=j0;b.RectAreaLight=Xf;b.RedFormat=od;b.RedIntegerFormat=Ql;b.ReinhardToneMapping=RT;b.RenderTarget=bl;b.RenderTarget3D=G0;b.RepeatWrapping=pl;b.ReplaceStencilOp=YO;b.ReverseSubtractEquation=cT;b.RingGeometry=bf;b.SIGNED_RED_GREEN_RGTC2_Format=Vh;b.SIGNED_RED_RGTC1_Format=kh;b.SRGBColorSpace=Hn;b.SRGBTransfer=Tt;b.Scene=Zh;b.ShaderChunk=ht;b.ShaderLib=Mi;b.ShaderMaterial=ei;b.ShadowMaterial=Cf;b.Shape=dr;b.ShapeGeometry=Ef;b.ShapePath=mv;b.ShapeUtils=wi;b.ShortType=Iv;b.Skeleton=Qh;b.SkeletonHelper=iv;b.SkinnedMesh=Jh;b.Source=Vi;b.Sphere=an;b.SphereGeometry=Hl;b.Spherical=K0;b.SphericalHarmonics3=Yf;b.SplineCurve=Ol;b.SpotLight=Vf;b.SpotLightHelper=nv;b.Sprite=$h;b.SpriteMaterial=wl;b.SrcAlphaFactor=ah;b.SrcAlphaSaturateFactor=_T;b.SrcColorFactor=pT;b.StaticCopyUsage=hN;b.StaticDrawUsage=yl;b.StaticReadUsage=lN;b.StereoCamera=O0;b.StreamCopyUsage=dN;b.StreamDrawUsage=oN;b.StreamReadUsage=uN;b.StringKeyframeTrack=xr;b.SubtractEquation=lT;b.SubtractiveBlending=Jg;b.TOUCH=LO;b.TangentSpaceNormalMap=kr;b.TetrahedronGeometry=Mf;b.Texture=tn;b.TextureLoader=C0;b.TextureUtils=xv;b.Timer=$0;b.TimestampQuery=mN;b.TorusGeometry=wf;b.TorusKnotGeometry=Tf;b.Triangle=ki;b.TriangleFanDrawMode=GO;b.TriangleStripDrawMode=VO;b.TrianglesDrawMode=HO;b.TubeGeometry=Af;b.UVMapping=id;b.Uint16BufferAttribute=El;b.Uint32BufferAttribute=Ml;b.Uint8BufferAttribute=o0;b.Uint8ClampedBufferAttribute=l0;b.Uniform=q0;b.UniformsGroup=W0;b.UniformsLib=ye;b.UniformsUtils=JT;b.UnsignedByteType=Ti;b.UnsignedInt101111Type=Lv;b.UnsignedInt248Type=Oa;b.UnsignedInt5999Type=Dv;b.UnsignedIntType=gr;b.UnsignedShort4444Type=sd;b.UnsignedShort5551Type=ad;b.UnsignedShortType=Fa;b.VSMShadowMap=Ni;b.Vector2=se;b.Vector3=D;b.Vector4=gt;b.VectorKeyframeTrack=Us;b.VideoFrameTexture=p0;b.VideoTexture=lf;b.WebGL3DRenderTarget=r0;b.WebGLArrayRenderTarget=i0;b.WebGLCoordinateSystem=Kn;b.WebGLCubeRenderTarget=Xh;b.WebGLRenderTarget=di;b.WebGLRenderer=Av;b.WebGLUtils=dA;b.WebGPUCoordinateSystem=za;b.WebXRController=La;b.WireframeGeometry=Rf;b.WrapAroundEnding=vl;b.ZeroCurvatureEnding=_s;b.ZeroFactor=fT;b.ZeroSlopeEnding=Ss;b.ZeroStencilOp=XO;b.createCanvasElement=ZT});var Rq=Nt(yE(),1),Cq=Nt(AE(),1),Pq=Nt(UE(),1),Iq=Nt(AM(),1);typeof AbortSignal<"u"&&!AbortSignal.prototype.throwIfAborted&&Object.defineProperty(AbortSignal.prototype,"throwIfAborted",{configurable:!0,writable:!0,value(){if(this.aborted)throw this.reason||new DOMException("The operation was aborted.","AbortError")}});var ke=Nt($t());var We=Nt($t()),pA={type:"change"},Xv={type:"start"},gA={type:"end"},fd=new We.Ray,mA=new We.Plane,zH=Math.cos(70*We.MathUtils.DEG2RAD),cn=new We.Vector3,qn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wv=1e-6,dd=class extends We.Controls{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new We.Vector3,this.cursor=new We.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:We.MOUSE.ROTATE,MIDDLE:We.MOUSE.DOLLY,RIGHT:We.MOUSE.PAN},this.touches={ONE:We.TOUCH.ROTATE,TWO:We.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new We.Vector3,this._lastQuaternion=new We.Quaternion,this._lastTargetPosition=new We.Vector3,this._quat=new We.Quaternion().setFromUnitVectors(e.up,new We.Vector3(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new We.Spherical,this._sphericalDelta=new We.Spherical,this._scale=1,this._panOffset=new We.Vector3,this._rotateStart=new We.Vector2,this._rotateEnd=new We.Vector2,this._rotateDelta=new We.Vector2,this._panStart=new We.Vector2,this._panEnd=new We.Vector2,this._panDelta=new We.Vector2,this._dollyStart=new We.Vector2,this._dollyEnd=new We.Vector2,this._dollyDelta=new We.Vector2,this._dollyDirection=new We.Vector3,this._mouse=new We.Vector2,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HH.bind(this),this._onPointerDown=kH.bind(this),this._onPointerUp=VH.bind(this),this._onContextMenu=ZH.bind(this),this._onMouseWheel=WH.bind(this),this._onKeyDown=XH.bind(this),this._onTouchStart=YH.bind(this),this._onTouchMove=jH.bind(this),this._onMouseDown=GH.bind(this),this._onMouseMove=qH.bind(this),this._interceptControlDown=$H.bind(this),this._interceptControlUp=KH.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pA),this.update(),this.state=Pt.NONE}update(e=null){let t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qn:n>Math.PI&&(n-=qn),r<-Math.PI?r+=qn:r>Math.PI&&(r-=qn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new We.Vector3(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new We.Vector3(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fd.origin.copy(this.object.position),fd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fd.direction))<zH?this.object.lookAt(this.target):(mA.setFromNormalAndCoplanarPoint(this.object.up,this.target),fd.intersectPlane(mA,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Wv||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wv||this._lastTargetPosition.distanceToSquared(this.target)>Wv?(this.dispatchEvent(pA),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;cn.copy(r).sub(this.target);let s=cn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We.Vector2,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kH(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function HH(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function VH(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gA),this.state=Pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GH(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case We.MOUSE.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pt.DOLLY;break;case We.MOUSE.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}break;case We.MOUSE.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Xv)}function qH(i){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function WH(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(i.preventDefault(),this.dispatchEvent(Xv),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gA))}function XH(i){this.enabled!==!1&&this._handleKeyDown(i)}function YH(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case We.TOUCH.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Pt.TOUCH_ROTATE;break;case We.TOUCH.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case We.TOUCH.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pt.TOUCH_DOLLY_PAN;break;case We.TOUCH.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Xv)}function jH(i){switch(this._trackPointer(i),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pt.NONE}}function ZH(i){this.enabled!==!1&&i.preventDefault()}function $H(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KH(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ni=Uint8Array,no=Uint16Array,JH=Int32Array,vA=new ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xA=new ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),QH=new ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yA=function(i,e){for(var t=new no(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new JH(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},_A=yA(vA,2),SA=_A.b,eV=_A.r;SA[28]=258,eV[258]=28;var bA=yA(xA,0),tV=bA.b,Uq=bA.r,Zv=new no(32768);for(St=0;St<32768;++St)yr=(St&43690)>>1|(St&21845)<<1,yr=(yr&52428)>>2|(yr&13107)<<2,yr=(yr&61680)>>4|(yr&3855)<<4,Zv[St]=((yr&65280)>>8|(yr&255)<<8)>>1;var yr,St,ec=(function(i,e,t){for(var n=i.length,r=0,s=new no(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new no(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new no(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Zv[h]>>l]=c}else for(o=new no(n),r=0;r<n;++r)i[r]&&(o[r]=Zv[a[i[r]-1]++]>>15-i[r]);return o}),tc=new ni(288);for(St=0;St<144;++St)tc[St]=8;var St;for(St=144;St<256;++St)tc[St]=9;var St;for(St=256;St<280;++St)tc[St]=7;var St;for(St=280;St<288;++St)tc[St]=8;var St,EA=new ni(32);for(St=0;St<32;++St)EA[St]=5;var St;var nV=ec(tc,9,1);var iV=ec(EA,5,1),Yv=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ri=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},jv=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},rV=function(i){return(i+7)/8|0},sV=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ni(i.subarray(e,t))};var aV=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ci=function(i,e,t){var n=new Error(e||aV[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ci),!t)throw n;return n},oV=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ni(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ni(r*3));var c=function(ct){var yt=t.length;if(ct>yt){var U=new ni(Math.max(yt*2,ct));U.set(t),t=U}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,m=e.d,v=e.m,g=e.n,p=r*8;do{if(!d){u=Ri(i,h,1);var y=Ri(i,h+1,3);if(h+=3,y)if(y==1)d=nV,m=iV,v=9,g=5;else if(y==2){var M=Ri(i,h,31)+257,A=Ri(i,h+10,15)+4,C=M+Ri(i,h+5,31)+1;h+=14;for(var S=new ni(C),E=new ni(19),P=0;P<A;++P)E[QH[P]]=Ri(i,h+P*3,7);h+=A*3;for(var O=Yv(E),k=(1<<O)-1,W=ec(E,O,1),P=0;P<C;){var X=W[Ri(i,h,k)];h+=X&15;var x=X>>4;if(x<16)S[P++]=x;else{var N=0,L=0;for(x==16?(L=3+Ri(i,h,3),h+=2,N=S[P-1]):x==17?(L=3+Ri(i,h,7),h+=3):x==18&&(L=11+Ri(i,h,127),h+=7);L--;)S[P++]=N}}var F=S.subarray(0,M),z=S.subarray(M);v=Yv(F),g=Yv(z),d=ec(F,v,1),m=ec(z,g,1)}else Ci(1);else{var x=rV(h)+4,_=i[x-4]|i[x-3]<<8,T=x+_;if(T>r){l&&Ci(0);break}o&&c(f+_),t.set(i.subarray(x,T),f),e.b=f+=_,e.p=h=T*8,e.f=u;continue}if(h>p){l&&Ci(0);break}}o&&c(f+131072);for(var Y=(1<<v)-1,te=(1<<g)-1,le=h;;le=h){var N=d[jv(i,h)&Y],Re=N>>4;if(h+=N&15,h>p){l&&Ci(0);break}if(N||Ci(2),Re<256)t[f++]=Re;else if(Re==256){le=h,d=null;break}else{var Ve=Re-254;if(Re>264){var P=Re-257,pe=vA[P];Ve=Ri(i,h,(1<<pe)-1)+SA[P],h+=pe}var Z=m[jv(i,h)&te],ne=Z>>4;Z||Ci(3),h+=Z&15;var z=tV[ne];if(ne>3){var pe=xA[ne];z+=jv(i,h)&(1<<pe)-1,h+=pe}if(h>p){l&&Ci(0);break}o&&c(f+131072);var _e=f+Ve;if(f<z){var Pe=s-z,Se=Math.min(z,_e);for(Pe+f<0&&Ci(3);f<Se;++f)t[f]=n[Pe+f]}for(;f<_e;++f)t[f]=t[f-z]}}e.l=d,e.p=le,e.b=f,e.f=u,d&&(u=1,e.m=v,e.d=m,e.n=g)}while(!u);return f!=t.length&&a?sV(t,0,f):t.subarray(0,f)};var lV=new ni(0);var cV=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Ci(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},uV=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function MA(i,e){var t=cV(i);return t+8>i.length&&Ci(6,"invalid gzip data"),oV(i.subarray(t,-8),{i:2},e&&e.out||new ni(uV(i)),e&&e.dictionary)}var hV=typeof TextDecoder<"u"&&new TextDecoder,fV=0;try{hV.decode(lV,{stream:!0}),fV=1}catch{}async function wA(i){var n;let e=i instanceof Response?i:new Response(i),t;if(typeof DecompressionStream=="function")try{t=new DecompressionStream("gzip")}catch{}return t&&((n=e.body)!=null&&n.pipeThrough)?new Response(e.body.pipeThrough(t)):new Response(MA(new Uint8Array(await e.arrayBuffer())))}var et=Nt($t());var Pi=Nt($t()),dV={jade:{low:"#c9d3c4",high:"#7fa596",ink:"#1d3330",ridge:"#f6f1df"},fire:{low:"#3a1210",high:"#c2402a",ink:"#1c0b06",ridge:"#ffd27a"},thunder:{low:"#d8cdea",high:"#7c62ab",ink:"#241a38",ridge:"#ffffff"}},TA="#eee9db",io={region:"auto",ink:.8,lineWidth:2,ridge:1,detail:.7,wash:.5,mist:1500};var pV=`
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
`,mV=`
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
`;function AA(){let i=e=>["jade","fire","thunder"].map(t=>new Pi.Color(dV[t][e]));return new Pi.ShaderMaterial({vertexShader:pV,fragmentShader:mV,clipping:!0,uniforms:{uOrigin:{value:new Pi.Vector3},uRadius:{value:4e3},uLowH:{value:0},uHighH:{value:600},uFlatUp:{value:0},uRegionMode:{value:-1},uInk:{value:io.ink},uLineWidth:{value:io.lineWidth},uRidge:{value:io.ridge},uDetail:{value:io.detail},uWash:{value:io.wash},uMist:{value:io.mist},uSun:{value:new Pi.Vector3(0,1,0)},uPaper:{value:new Pi.Color(TA)},uLight:{value:new Pi.Color(1,1,1)},uMistColor:{value:new Pi.Color(TA)},uCut:{value:new Pi.Color("#5a5550")},uLow:{value:i("low")},uHigh:{value:i("high")},uInkColor:{value:i("ink")},uRidgeColor:{value:i("ridge")}}})}function RA(i){let e=new Uint8Array(i),t=new ArrayBuffer(e.length),n=new DataView(i),r=new DataView(t),s=new Uint8Array(t),a=0;for(;a<e.length;){let o=n.getUint32(a,!0),l=n.getUint32(a+4,!0),c=a+8+19*o+2*l;if(!o||o>65535||!l||l%3||c>e.length)throw Error("Invalid gallery mesh");s.set(e.subarray(a,a+8),a),a+=8;for(let h=0;h<3;h++){let f=a+h*4*o,d=0;for(let m=0;m<o;m++){let v=f+m,g=e[v]|e[v+o]<<8|e[v+2*o]<<16|e[v+3*o]<<24;d=d+g|0,r.setInt32(a+12*m+4*h,d,!0)}}a+=12*o;for(let h of[3,4]){for(let f=0;f<h;f++)for(let d=0;d<o;d++)s[a+d*h+f]=e[a+f*o+d];a+=h*o}let u=0;for(let h=0;h<l;h++)u=u+e[a+h]+(e[a+l+h]<<8)&65535,r.setUint16(a+2*h,u,!0);a=c}return t}var CA=`
vec4 samplePlanetAtlas(sampler2D atlas, vec2 uv) {
  vec2 dx=dFdx(uv),dy=dFdy(uv);
  dx.x-=floor(dx.x+.5);dy.x-=floor(dy.x+.5);
  return textureGrad(atlas,uv,dx,dy);
}
`;var $v=Nt($t());function Hr(i){return i.appearance??(i.appearance={reveal:{value:0},glass:{value:0},water:{value:+!!i.waterVisible},lightPositions:{value:Array.from({length:6},()=>new $v.Vector3(0,0,1e4))},lightColors:{value:Array.from({length:6},()=>new $v.Vector3)}})}function Kv(i){let e=Hr(i);return{uPlanetReveal:e.reveal,uShowWater:e.water,uShardPositions:e.lightPositions,uShardColors:e.lightColors}}var PA=`
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
`;var Ns=Nt($t());function Bs(i,e,t,n=.3,r="native"){let s=new Ns.Mesh(i,e);if(s.userData.isTerrain=!0,s.userData.meshSource=r,r!=="native")return s;e.polygonOffset=!!t.meshVisible,e.polygonOffsetFactor=1,e.polygonOffsetUnits=1;let a=e.userData.meshOverlay;a||(a=new Ns.ShaderMaterial({wireframe:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uGridPixels:{value:1},uOrbitModel:e.uniforms.uOrbitModel,uNativeTiles:e.uniforms.uNativeTiles,uTileMask:e.uniforms.uTileMask,uOverview:e.uniforms.uOverview,uDetailPoint:e.uniforms.uDetailPoint,uShowWater:e.uniforms.uShowWater},vertexShader:"varying float vDepth,vFacing;varying vec3 vLocal;void main(){vLocal=position;vec4 view=modelViewMatrix*vec4(position,1.);vDepth=-view.z;vFacing=dot(normalize(normalMatrix*normal),normalize(-view.xyz));gl_Position=projectionMatrix*view;}",fragmentShader:`varying float vDepth,vFacing;varying vec3 vLocal;uniform float uGridPixels,uOrbitModel,uNativeTiles,uOverview,uShowWater;uniform vec3 uDetailPoint;uniform highp sampler3D uTileMask;
        void main(){
          if(uShowWater>.5&&length(vLocal)<399.98)discard;
          if(uOrbitModel>.5||uNativeTiles>.5){float nativeCell=texture(uTileMask,(floor(vLocal/38.4)+16.5)/32.).r;if((uOrbitModel>.5&&nativeCell>.5)||(uNativeTiles>.5&&nativeCell<.5))discard;}
          if(uOverview>1.5&&distance(vLocal,uDetailPoint)<157.)discard;
          float projectedCell=uGridPixels/max(1.,vDepth)*sqrt(abs(vFacing));
          float alpha=.65*smoothstep(1.5,4.5,projectedCell);
          if(alpha<.002)discard;gl_FragColor=vec4(.055,.09,.10,alpha);
        }`,stencilWrite:e.stencilWrite,stencilWriteMask:0,stencilRef:e.stencilRef,stencilFunc:e.stencilFunc}),a.onBeforeRender=(l,c,u)=>{a.uniforms.uGridPixels.value=innerHeight/(2*Math.tan(Ns.MathUtils.degToRad(u.fov/2)))*n},e.userData.meshOverlay=a,e.addEventListener("dispose",()=>a.dispose()));let o=new Ns.Mesh(i,a);return o.userData.isMeshOverlay=!0,o.userData.meshSource=r,o.userData.cellSize=n,o.visible=!!t.meshVisible,o.renderOrder=3,s.add(o),s}var IA,pd=(IA=document.querySelector('meta[name="worlds-data-base"]'))==null?void 0:IA.content.trim(),gV=pd?new URL("space/",pd.endsWith("/")?pd:pd+"/"):new URL("./",location.href);function ro(i){return new URL(i,gV)}var Jv=400,md=128,Qv=64,vV=(md+1)*(Qv+1);async function _r(i,e){let t=await fetch(ro(i),{signal:e});if(!t.ok)throw Error("Could not load "+i);return(await wA(t)).arrayBuffer()}function gd(i,e,t){if(i.byteLength!==e*t*4)throw Error("Incomplete material atlas.");let n=new et.DataTexture(i,e,t);return n.wrapS=et.RepeatWrapping,n.magFilter=et.LinearFilter,n.minFilter=et.LinearMipmapLinearFilter,n.generateMipmaps=!0,n.needsUpdate=!0,n}function nc(i,e,t){let n=AA(),r=n.uniforms;return r.uRadius.value=Jv,r.uOrigin.value.fromArray(i.data.orientation).multiplyScalar(Jv),r.uGallerySnowShift={value:24*i.data.warmth},r.uOverview={value:Number(t)},r.uLocalEye={value:new et.Vector3},r.uDetailPoint={value:new et.Vector3},r.uMineralMap={value:e},r.uPackedLook={value:0},r.uOrbitModel={value:0},r.uNativeTiles={value:0},r.uTileMask={value:null},Object.assign(r,Kv(i)),n.stencilWrite=!0,n.stencilRef=1,n.stencilFunc=t?et.NotEqualStencilFunc:et.AlwaysStencilFunc,n.stencilZPass=t?et.KeepStencilOp:et.ReplaceStencilOp,t&&(n.stencilWriteMask=0),n.onBeforeRender=(s,a,o)=>{r.uLocalEye.value.copy(o.position),i.group.worldToLocal(r.uLocalEye.value),r.uLineWidth.value=(t?.95:2)*s.getPixelRatio()},n}async function DA(i){let e=await _r("./worlds/"+i.data.id+".gz"),t=new Int16Array(e,0,vV);i.heightAt=g=>{let p=(Math.atan2(g.z,g.x)/(2*Math.PI)+.5)*md,y=(Math.asin(et.MathUtils.clamp(g.y,-1,1))/Math.PI+.5)*Qv,x=Math.floor(p)%md,_=Math.min(Qv-1,Math.floor(y)),T=(M,A)=>t[M*(md+1)+A]/128;return et.MathUtils.lerp(et.MathUtils.lerp(T(_,x),T(_,x+1),p-Math.floor(p)),et.MathUtils.lerp(T(_+1,x),T(_+1,x+1),p-Math.floor(p)),y-_)};let[n,r]=await Promise.all([_r("./overview/"+i.data.id+".gz"),_r("../gallery/"+i.data.id+"/full/mineral.rgba.gz")]),s=new DataView(n);if(s.getUint32(0,!0)!==1448040269)throw Error("Invalid overview mesh");let a=s.getUint32(4,!0),o=s.getUint32(8,!0),l=16,c=(g,p)=>{let y=p*g.BYTES_PER_ELEMENT,x=l%g.BYTES_PER_ELEMENT?new g(n.slice(l,l+y)):new g(n,l,p);return l+=y,x},u=new et.BufferGeometry;u.setAttribute("position",new et.BufferAttribute(c(Float32Array,a*3),3)),u.setAttribute("normal",new et.BufferAttribute(c(Int8Array,a*3),3,!0)),u.setAttribute("look",new et.BufferAttribute(c(Uint8Array,a*4),4,!0)),u.setIndex(new et.BufferAttribute(c(Uint32Array,o),1)),u.computeBoundingSphere();let h=gd(new Uint8Array(r),768,384),f=nc(i,h,!0);f.uniforms.uPackedLook.value=1;let d=new et.Group,m=Bs(u,f,i,3,"overview"),v=xd(i,h,96,48);d.add(m,v),i.group.add(d),i.shell=d,i.overviewInk=f,i.atlas=h,i.overviewInfo={triangles:o/3,error:s.getFloat32(12,!0),source:"derived native display mesh"}}async function vd(i,e){if(!i.info){let t=ro("../gallery/"+i.data.id+"/full/"),n=await fetch(new URL("scene.json",t),{signal:e});if(!n.ok)throw Error("Terrain manifest unavailable");let r=await n.json();if(r.settings.planet.seed!==i.data.seed||r.cellSize!==.3)throw Error("Unexpected terrain manifest");i.info={base:t,scene:r}}return i.info}async function LA(i,e,t){let{base:n,scene:r}=await vd(i,t),[s,a,o]=await Promise.all([_r(new URL(r.native[e].file,n),t),_r(new URL("mineral.rgba.gz",n),t),_r("./context/"+i.data.id+"-"+e+".gz",t)]);t.throwIfAborted();let l=gd(new Uint8Array(a),768,384),c=new et.Group,u=nc(i,l,!1);c.renderOrder=-2;let h,f,d=0,m=0,v=0,g=[],p="native",y=(M,A)=>{let C=A*M.BYTES_PER_ELEMENT,S=d%M.BYTES_PER_ELEMENT?new M(h.slice(d,d+C)):new M(h,d,A);return d+=C,S};function x(){if(!m)return;let M=new Float32Array(m*3),A=new Int8Array(m*3),C=new Float32Array(m*4),S=new Uint32Array(v),E=0,P=0;for(let{p:k,n:W,l:X,ix:N}of g){M.set(k,3*E),A.set(W,3*E);for(let L=0;L<X.length;L++)C[E*4+L]=L%4===3?(X[L]/255-.5)*8:X[L]/255;for(let L of N)S[P++]=E+L;E+=k.length/3}let O=new et.BufferGeometry;O.setAttribute("position",new et.BufferAttribute(M,3)),O.setAttribute("normal",new et.BufferAttribute(A,3,!0)),O.setAttribute("look",new et.BufferAttribute(C,4)),O.setIndex(new et.BufferAttribute(S,1)),O.computeBoundingSphere(),c.add(Bs(O,u,i,.3,p)),m=0,v=0,g=[]}function _(M){for(h=M,f=new DataView(h),d=0;d<h.byteLength;){let A=f.getUint32(d,!0),C=f.getUint32(d+4,!0);d+=8,m+A>14e4&&x(),g.push({p:y(Float32Array,A*3),n:y(Int8Array,A*3),l:y(Uint8Array,A*4),ix:y(Uint16Array,C)}),m+=A,v+=C}x()}_(RA(s)),p="display",_(o);let T=xd(i,l);return c.add(T),{group:c,dispose(){c.removeFromParent();for(let M of c.children)M.isMesh&&M.geometry.dispose();T.material.dispose(),u.dispose(),l.dispose()}}}function xd(i,e,t=192,n=96){let r=new et.Mesh(new et.SphereGeometry(Jv,t,n),new et.ShaderMaterial({uniforms:{chart:{value:e},...Kv(i)},vertexShader:"varying vec3 local; void main(){local=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 local;uniform sampler2D chart;${CA}${PA}
    void main(){vec3 dir=normalize(local);vec2 uv=vec2(atan(dir.z,dir.x)*.159154943+.5,asin(clamp(dir.y,-1.,1.))*.318309886+.5);
      vec4 data=samplePlanetAtlas(chart,uv);float depth=max(0.,40.-90.*data.b);
      float mixAmount=smoothstep(.1,.95,smoothstep(.5,16.,depth)*.67+smoothstep(0.,54.,100.*data.a)*.46);
      gl_FragColor=vec4(planetTone(mix(vec3(.188,.503,.417),vec3(.016,.093,.169),mixAmount),local,dir),1.);
      #include <colorspace_fragment>
    }`}));return r.userData.isWater=!0,r.visible=!!i.waterVisible,r}var vt=Nt($t());var yd=class{constructor(e){this.free=Array.from({length:e},()=>new Worker(new URL("./mesh-worker.js",location.href),{type:"module"})),this.all=[...this.free],this.waiting=[],this.active=new Map,this.closed=!1}get(e){return this.closed?Promise.reject(new DOMException("Cancelled","AbortError")):new Promise((t,n)=>{this.waiting.push({job:e,resolve:t,reject:n}),this.pump()})}pump(){for(;this.free.length&&this.waiting.length;){let e=this.free.pop(),t=this.waiting.shift();this.active.set(e,t);let n=(r,s)=>{this.active.delete(e),this.free.push(e),s?t.reject(s):t.resolve(r),this.pump()};e.onmessage=r=>n(r.data.meshes,r.data.error?Error(r.data.error):null),e.onerror=r=>n(null,Error(r.message)),e.postMessage(t.job)}}dispose(){this.closed=!0;let e=new DOMException("Cancelled","AbortError");for(let t of[...this.waiting,...this.active.values()])t.reject(e);this.waiting=[],this.active.clear();for(let t of this.all)t.terminate()}};function UA(i){let e=new vt.BufferGeometry;return e.setAttribute("position",new vt.BufferAttribute(i.p,3)),e.setAttribute("normal",new vt.BufferAttribute(i.n,3,!0)),e.setAttribute("look",new vt.BufferAttribute(i.l,4,!0)),e.setIndex(new vt.BufferAttribute(i.ix,1)),e.computeBoundingSphere(),e}var zs=32;function xV(i,e,t){return i+16+(e+16)*zs+(t+16)*zs*zs}function FA(i,e,t){return _r(new URL("mineral.rgba.gz",e),t).then(n=>gd(new Uint8Array(n),768,384))}async function yV(i,e){if(i.preciseHeights)return;let t=new Int16Array(await _r("./tiles/"+i.data.id+"/height.gz",e));if(t.length!==768*384)throw Error("Incomplete height map");i.heightAt=n=>{let r=(Math.atan2(n.z,n.x)/(2*Math.PI)+.5)*768-.5,s=vt.MathUtils.clamp((Math.asin(vt.MathUtils.clamp(n.y,-1,1))/Math.PI+.5)*384-.5,0,383),a=Math.floor(r),o=Math.floor(s),l=Math.min(383,o+1),c=(a+768)%768,u=(c+1)%768;return Math.max(0,vt.MathUtils.lerp(vt.MathUtils.lerp(t[o*768+c],t[o*768+u],r-a),vt.MathUtils.lerp(t[l*768+c],t[l*768+u],r-a),s-o)/128)},i.preciseHeights=!0}function OA(i,e,t,n=async()=>!0){let r=new AbortController,s=new yd(2),a=new vt.Group;a.renderOrder=-1,a.visible=!1;let o=null,l=null,c=null,u=!1,h=!1,f=0,d=!1,m=null,v=0,g=!1,p=[];function y(A){g=A,A||p.splice(0).forEach(C=>C())}let x=new Uint8Array(zs**3),_=new vt.Data3DTexture(x,zs,zs,zs);_.format=vt.RedFormat,_.needsUpdate=!0,i.group.add(a);async function T(){let{base:A,scene:C}=await vd(i,r.signal);await yV(i,r.signal),c=await FA(i,A,r.signal),r.signal.throwIfAborted(),o=nc(i,c,!1),o.uniforms.uPackedLook.value=1,o.uniforms.uOrbitModel.value=1,o.uniforms.uTileMask.value=_,o.stencilFunc=vt.NotEqualStencilFunc,o.stencilWriteMask=0,o.stencilZPass=vt.KeepStencilOp;let S=[...C.groups];v=S.length;let E=0,P=async()=>{for(;E<S.length&&!h&&(g&&await new Promise(W=>p.push(W)),!(h||E>=S.length));){let O=S[E++],k=await s.get({url:new URL(O.file,A).href,packed:!0,segments:O.segments});r.signal.throwIfAborted();for(let W of k)a.add(Bs(UA(W),o,i,.3,"display"));f++,t("loading",f,S.length),e(),await new Promise(requestAnimationFrame)}};await Promise.all([P(),P()]),r.signal.throwIfAborted(),l=xd(i,c),a.add(l),t("preparing",f,S.length),m=n(a,()=>!h),await m,r.signal.throwIfAborted(),u=!0,M(),t("ready",f,S.length),e()}T().catch(A=>{h||t("error",f,0,A)});function M(){a.visible=u&&d&&!h,i.shell.visible=!a.visible}return{world:i,group:a,mask:_,get priming(){return m},get ready(){return u},get detailActive(){return d},diagnostics(){return{ready:u,requested:d,displayVisible:a.visible&&a.children.length>0,shellVisible:i.shell.visible,pages:f,totalPages:v,waitingForNative:g}},setNativePriority:y,setDetail(A){d=A,M()},setTile(A,C){let[S,E,P]=A.split("_").map(Number);x[xV(S,E,P)]=C?255:0,_.needsUpdate=!0},dispose(A=!0){h=!0,y(!1),r.abort(),s.dispose(),a.removeFromParent();for(let C of a.children)C.geometry.dispose();l==null||l.material.dispose(),o==null||o.dispose(),c==null||c.dispose(),_.dispose(),A&&(i.shell.visible=!0)}}}function NA(i,e,t,n,r=async()=>!0){let s=new vt.Group;s.renderOrder=-2;let a=new yd(3),o=new AbortController,l=new Map,c=new Set,u=new Set,h=new Set,f=null,d=null,m=null,v=!1,g=null,p=null,y=[],x=null,_=null,T=null,M=110,A=new vt.Frustum,C=new vt.Sphere,S=new Set;i.group.add(s);function E(L){let F=l.get(L);if(F){e==null||e.setTile(L,!1);for(let z of F.solid.children)z.geometry.dispose();F.solid.removeFromParent(),l.delete(L)}}let P=()=>y.length>0&&y.every(L=>l.has(L));function O(){if(!P())return;for(let F of l.keys())S.has(F)||E(F);let L=[...l.keys()].filter(F=>!u.has(F));for(let F of L){if(l.size<=128)break;E(F)}}function k(){v||n(P()?"ready":y.some(L=>h.has(L))?"error":"loading",l.size,y.length)}function W(){if(!(v||!d))for(;c.size<3;){let L=y.find(F=>!c.has(F)&&!l.has(F)&&!h.has(F));if(!L)break;c.add(L),a.get({url:ro("./tiles/"+i.data.id+"/"+L+".gz").href,packed:!1}).then(async F=>{if(v||!u.has(L))return;let z=new vt.Group;z.renderOrder=-2;for(let Y of F){let te=UA(Y);z.add(Bs(te,d,i))}if(await r(z,()=>!v&&u.has(L)),v||!u.has(L)){for(let Y of z.children)Y.geometry.dispose();return}s.add(z),l.set(L,{solid:z}),e==null||e.setTile(L,!0),O(),t()}).catch(()=>{!v&&u.has(L)&&h.add(L)}).finally(()=>{c.delete(L),k(),W()})}}function X(L,F=!1,z=null){if(z&&(x=z),p=L.clone(),!f||!d||v||!F&&g&&g.distanceTo(L)<8&&(!x||(_==null?void 0:_.distanceTo(x.eye))<8&&(T==null?void 0:T.dot(x.direction))>.998&&Math.abs(M-x.range)<2))return;g=L.clone(),_=x==null?void 0:x.eye.clone(),T=x==null?void 0:x.direction.clone(),M=(x==null?void 0:x.range)||110,x&&A.setFromProjectionMatrix(x.vp);let Y=f.span,te=[];S.clear();for(let le of f.cells){let Re=le.box.distanceToPoint((x==null?void 0:x.eye)||L);C.center.copy(le.center),C.radius=Y*1.2,Re<=M+Y*2&&(!x||A.intersectsSphere(C))&&S.add(le.key),C.radius=Y,Re<=M&&(!x||A.intersectsSphere(C))&&te.push({key:le.key,distance:Re+le.center.distanceTo(L)*.12})}y=te.sort((le,Re)=>le.distance-Re.distance).slice(0,96).map(le=>le.key),u.clear();for(let le of y)u.add(le);O(),h.clear(),k(),W()}async function N(){let{base:L}=await vd(i,o.signal),[F,z]=await Promise.all([FA(i,L,o.signal),fetch(ro("./tiles/"+i.data.id+"/index.json"),{signal:o.signal}).then(Y=>{if(!Y.ok)throw Error("Tile index unavailable");return Y.json()})]);if(v){F.dispose();return}if(m=F,z.seed!==i.data.seed||z.cellSize!==.3)throw Error("Wrong tile index");f={span:z.span,cells:z.tiles.map(Y=>{let te=new vt.Vector3(...Y.split("_").map(Number)).multiplyScalar(z.span),le=te.clone().addScalar(z.span);return{key:Y,box:new vt.Box3(te,le),center:te.clone().addScalar(z.span*.5)}})},d=nc(i,m,!1),d.uniforms.uPackedLook.value=1,d.uniforms.uNativeTiles.value=1,d.uniforms.uTileMask.value=e.mask,p&&X(p,!0)}return N().catch(()=>{v||n("error",0,0)}),{group:s,update:X,diagnostics(){return{cellSize:.3,ready:P(),resident:l.size,loaded:y.filter(L=>l.has(L)).length,wanted:y.length,pending:c.size,range:M,triangles:[...l.values()].reduce((L,F)=>L+F.solid.children.reduce((z,Y)=>z+Y.geometry.index.count/3,0),0)}},dispose(){v=!0,o.abort(),a.dispose();for(let L of l.keys())E(L);s.removeFromParent(),d==null||d.dispose(),m==null||m.dispose()}}}var bt=Nt($t());var rt=Nt($t());var BA=Math.sqrt(3),zA=Math.sqrt(5),nW=.5*(BA-1),iW=(3-BA)/6,rW=1/3,sW=1/6,aW=(zA-1)/4,oW=(5-zA)/20;function ks(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var mi=Nt($t(),1);var Sr=Nt($t());var SV=new Sr.OrthographicCamera(-1,1,1,-1,0,1),ex=class extends Sr.BufferGeometry{constructor(){super(),this.setAttribute("position",new Sr.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sr.Float32BufferAttribute([0,2,0,0,2,0],2))}},bV=new ex,so=class{constructor(e){this._mesh=new Sr.Mesh(bV,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SV)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _d=Nt($t(),1);var ii=Nt($t()),EV=[{alt:-14,zenith:"#030616",horizon:"#0c1a44",haze:"#12245a",sun:"#6f86d0",ramp:["#050a24","#0d1a46","#1f3c88","#4a6ab8","#8fa8e0"],under:0},{alt:-4,zenith:"#140f52",horizon:"#ff5c8a",haze:"#8a3c8e",sun:"#ff6a9a",ramp:["#1a1248","#46287c","#e23c8c","#ff8ab4","#ffd0dc"],under:.7},{alt:1,zenith:"#1f3a6e",horizon:"#ff7418",haze:"#c4604a",sun:"#ff6a1c",ramp:["#241f3c","#5a3466","#ff3a16","#ff8a1c","#ffd448"],under:1},{alt:8,zenith:"#2457b8",horizon:"#ffbc5c",haze:"#f0b070",sun:"#ffb040",ramp:["#33479a","#6c64b4","#ff8c3c","#ffd070","#fff0b8"],under:.35},{alt:30,zenith:"#0c3aa8",horizon:"#6cc8f6",haze:"#8cd2f4",sun:"#fffbf0",ramp:["#1f4cb4","#3c7ee6","#6cc4ff","#e4f4ff","#ffffff"],under:0}];function ao(i,e){let t=EV,n=0;for(;n<t.length-2&&i>t[n+1].alt;)n++;let r=t[n],s=t[n+1],a=ii.MathUtils.smoothstep(i,r.alt,s.alt),o=e??{zenith:new ii.Color,horizon:new ii.Color,haze:new ii.Color,sun:new ii.Color,ramp:r.ramp.map(()=>new ii.Color),under:0},l=(c,u,h)=>c.setStyle(u,ii.NoColorSpace).lerp(new ii.Color().setStyle(h,ii.NoColorSpace),a);l(o.zenith,r.zenith,s.zenith),l(o.horizon,r.horizon,s.horizon),l(o.haze,r.haze,s.haze),l(o.sun,r.sun,s.sun);for(let c=0;c<r.ramp.length;c++)l(o.ramp[c],r.ramp[c],s.ramp[c]);return o.under=ii.MathUtils.lerp(r.under,s.under,a),o}function ic(i=ao(30)){return{uZenith:{value:i.zenith},uHorizon:{value:i.horizon},uHaze:{value:i.haze},uSunCol:{value:i.sun},uRamp:{value:i.ramp},uUnder:{value:i.under}}}var kA=`
  vec2 cubeAtlas(vec3 d, float n) {
    vec3 a = abs(d);
    float f; vec2 uv;
    if (a.x >= a.y && a.x >= a.z) { f = d.x > 0.0 ? 0.0 : 1.0; uv = d.x > 0.0 ? vec2(-d.z, d.y) / a.x : vec2(d.z, d.y) / a.x; }
    else if (a.y >= a.z) { f = d.y > 0.0 ? 2.0 : 3.0; uv = d.y > 0.0 ? vec2(d.x, -d.z) / a.y : vec2(d.x, d.z) / a.y; }
    else { f = d.z > 0.0 ? 4.0 : 5.0; uv = d.z > 0.0 ? vec2(d.x, d.y) / a.z : vec2(-d.x, d.y) / a.z; }
    uv = clamp(uv * 0.5 + 0.5, 0.5 / n, 1.0 - 0.5 / n);
    return vec2((f + uv.x) / 6.0, uv.y);
  }
`;var MV=220,wV=1500,tx=`
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
`,MW=`
  precision highp float; precision highp sampler3D;
  in vec2 vUv;
  out vec4 outColor;
  uniform sampler2D tColor, tDepth, uA, uB;
  uniform sampler3D uNoise;
  uniform mat4 uInvVP;
  uniform vec3 uCam, uSun, uUp, uOffset;
  uniform float uR, uN, uBlend, uTime;
  ${kA}
  ${tx}
  const float BASE = ${MV.toFixed(1)}, TOP = ${wV.toFixed(1)};
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
`;var TV={bands:[[7e3,7700,.25],[7700,9200,1],[9500,10600,.75],[11150,11300,.6]],tilt:24,speed:30,count:7e4};function AV(i,e,t,n,r,s){let a=c=>(c[0]-e)*n+(c[1]-t)*r,o=Math.sign(a(s))||1,l=[];for(let c=0;c<i.length;c++){let u=i[c],h=i[(c+1)%i.length],f=a(u)*o,d=a(h)*o;if(f>=0&&l.push(u),f*d<0){let m=f/(f-d);l.push([u[0]+(h[0]-u[0])*m,u[1]+(h[1]-u[1])*m])}}return l.length>=3?l:i}function rc(i){let e=i(),t;if(e<.55){let a=.6+i()*.4,o=.6+i()*.4,l=(i()-.5)*.3;t=[[-a,-o],[a+l,-o],[a,o],[-a+l,o]];let c=e<.12?0:1+Math.floor(i()*3);for(let u=0;u<c;u++){let h=i()*Math.PI*2;t=AV(t,(i()-.5)*a*1.2,(i()-.5)*o*1.2,Math.cos(h),Math.sin(h),[(i()-.5)*.4*a,(i()-.5)*.4*o])}}else if(e<.85){let a=i()<.6?3:4,o=i()*Math.PI*2;t=Array.from({length:a},()=>i()).sort().map(c=>o+c*Math.PI*2).map((c,u)=>{let h=u===0?1:.35+i()*.5;return[Math.cos(c)*h,Math.sin(c)*h]})}else{let a=.08+i()*.12;t=[[-1,(i()-.5)*a],[.6+i()*.4,-a],[.3+i()*.5,a]]}let n=0,r=0;for(let a of t)n+=a[0],r+=a[1];n/=t.length,r/=t.length;let s=0;for(let a of t)a[0]-=n,a[1]-=r,s=Math.max(s,Math.hypot(a[0],a[1]));return t.slice(0,dn).map(a=>[a[0]/s,a[1]/s])}var dn=8,HA=`
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
`,VA=`
  uniform vec3 uSun, uUp;
  uniform float uR;
  uniform sampler2D tDepth, tFront;
  uniform mat4 uInvVP;
  uniform vec2 uRes;
  ${tx}
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
`,RV=`
  in float aCorner;                  // 0 = the piece's centre, 1 \u2026 8 its corners
  in vec4 iOrbit;                    // orbit radius, starting angle, height above the ring's plane, seed
  in vec4 iSpin;                     // tumbling axis, rate (rad/s)
  in vec4 iSize;                     // size (m), starting tumble angle, how close to the band's core (0 \u2026 1), -
  in vec4 iC0, iC1, iC2, iC3;        // the 8 corners (x, y) in the piece's own plane
  uniform mat3 uRingFrame;           // the ring's plane: columns = in-plane x, in-plane y, normal
  uniform float uR;
  uniform vec3 uSun;
  out vec3 vW, vN, vT; out vec2 vL; out float vEdge, vSeed, vLit;
  ${HA}

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
`,bd=`
  precision highp float;
  in vec3 vW, vN, vT; in vec2 vL; in float vEdge, vSeed, vLit;
  out vec4 outColor;
  ${VA}
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
`,CV=`
  uniform mat3 uRingFrame;
  out vec3 vW, vP;
  void main() {
    vP = position;
    vW = uRingFrame * position;
    gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
  }
`,PV=i=>`
  precision highp float;
  in vec3 vW, vP;
  out vec4 outColor;
  uniform mat3 uRingFrame;
  uniform vec3 uBands[${i}];
  ${VA}
  ${HA}
  void main() {
    vec3 V = vW - cameraPosition;
    float dist = length(V);
    V /= dist;
    // Which band (if any) this is in, how full it is, and how near the band's middle.
    float r = length(vP.xy), fill = 0.0, core = 0.0;
    for (int i = 0; i < ${i}; i++) {
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
`,Sd=class{mesh;uniforms;frame;constructor(e,t,n=TV){let r=ks(11),s=n.count,a=n.bands.map(([M,A,C])=>(A*A-M*M)*C),o=a.reduce((M,A)=>M+A,0),l=new Float32Array(s*4),c=new Float32Array(s*4),u=new Float32Array(s*4),h=[0,1,2,3].map(()=>new Float32Array(s*4));for(let M=0;M<s;M++){let A=r()*o,C=0;for(;C<a.length-1&&A>a[C];)A-=a[C++];let[S,E]=n.bands[C],P=Math.sqrt(S*S+r()*(E*E-S*S)),O=1-Math.abs((P-S)/(E-S)*2-1),k=rt.MathUtils.smoothstep(O,.1,.8),W=40+110*k;l.set([P,r()*Math.PI*2,(r()+r()+r()-1.5)*W,r()],M*4);let X=new rt.Vector3(r()-.5,r()-.5,r()-.5).normalize();c.set([X.x,X.y,X.z,(.008+.05*r()**2)*(r()<.5?1:-1)],M*4),u.set([6+r()**2.4*(30+160*k),r()*Math.PI*2,k,0],M*4);let N=rc(r);for(let L=0;L<dn;L++){let F=N[Math.min(L,N.length-1)];h[L>>1][M*4+(L&1)*2]=F[0],h[L>>1][M*4+(L&1)*2+1]=F[1]}}let f=new rt.InstancedBufferGeometry;f.setAttribute("position",new rt.Float32BufferAttribute(new Float32Array((dn+1)*3),3)),f.setAttribute("aCorner",new rt.Float32BufferAttribute(Array.from({length:dn+1},(M,A)=>A),1));let d=[];for(let M=0;M<dn;M++)d.push(0,1+M,1+(M+1)%dn);f.setIndex(d),f.setAttribute("iOrbit",new rt.InstancedBufferAttribute(l,4)),f.setAttribute("iSpin",new rt.InstancedBufferAttribute(c,4)),f.setAttribute("iSize",new rt.InstancedBufferAttribute(u,4)),h.forEach((M,A)=>f.setAttribute(`iC${A}`,new rt.InstancedBufferAttribute(M,4))),f.instanceCount=s;let m=rt.MathUtils.degToRad(n.tilt),v=new rt.Matrix3().set(1,0,0,0,Math.sin(m),Math.cos(m),0,Math.cos(m),-Math.sin(m));this.frame=v;let g=n.bands[0][0];this.uniforms={...t,uRingFrame:{value:v},uTime:{value:0},uOmega0:{value:n.speed/g},uR0:{value:g},uR:{value:e},uBands:{value:n.bands.map(M=>new rt.Vector3(...M))}};let p=new rt.ShaderMaterial({glslVersion:rt.GLSL3,transparent:!0,depthWrite:!1,depthTest:!1,side:rt.DoubleSide,blending:rt.CustomBlending,blendSrc:rt.OneFactor,blendDst:rt.OneMinusSrcAlphaFactor,uniforms:this.uniforms,vertexShader:RV,fragmentShader:bd}),y=new rt.Mesh(f,p);y.frustumCulled=!1;let x=Math.min(...n.bands.map(M=>M[0])),_=Math.max(...n.bands.map(M=>M[1])),T=new rt.Mesh(new rt.RingGeometry(x-100,_+100,720,24),new rt.ShaderMaterial({glslVersion:rt.GLSL3,transparent:!0,depthWrite:!1,depthTest:!1,side:rt.DoubleSide,blending:rt.CustomBlending,blendSrc:rt.OneFactor,blendDst:rt.OneMinusSrcAlphaFactor,uniforms:this.uniforms,vertexShader:CV,fragmentShader:PV(n.bands.length)}));T.frustumCulled=!1,T.renderOrder=-1,this.mesh=new rt.Group().add(T,y)}advance(e){this.uniforms.uTime.value+=e}};var we=Nt($t());var IV={side:448,magTilt:24},GA=63e5,nx=8500,Vr=7,DV=[[.74,.06,.12],[1,.17,.5],[1.4,.12,.3],[1.74,.012,.08]],oo=`
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
  float shell(vec3 d) { return ${nx.toFixed(1)} * sqrt(uMag * field(d) / uGrav); }
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
  uniform vec4 uStorms[${Vr}];      // latitude and starting longitude round the spin axis, size (w), spin (+ left, - right, and how strong)
  uniform float uStormDrift[${Vr}];  // how fast each drifts round (rad/s)
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
    for (int i = 0; i < ${Vr}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      float inside = exp(-(1.0 - dot(d, c)) / (w * 2.0));
      if (inside > best) { best = inside; spin = sp; }
    }
    return best * step(0.01, uSwirl);
  }
  float swirls(vec3 d) {
    float psi = 0.0;
    for (int i = 0; i < ${Vr}; i++) {
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
    vec3 q = rotAbout(d, uSpinAxis, -spinAt(d, r) * uSpin * sqrt(uGrav * ${GA.toFixed(1)} / r) / r * t);
    for (int i = 0; i < ${Vr}; i++) {
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
    vec3 v = spinAt(d, r) * cross(uSpinAxis, d) * sqrt(uGrav * ${GA.toFixed(1)} / r);
    float e = 0.003;
    vec3 g = (t1 * (swirls(normalize(d + t1 * e)) - swirls(normalize(d - t1 * e))) + t2 * (swirls(normalize(d + t2 * e)) - swirls(normalize(d - t2 * e)))) / (2.0 * e);
    // Eye walls: each storm draws glass onto a ring at its edge and pushes it out of its middle, leaving a clear eye.
    // Inside a storm the jets die away and the storm's own wind takes over.
    vec3 wall = vec3(0.0);
    float calm = 1.0;
    for (int i = 0; i < ${Vr}; i++) {
      vec3 c; float w, sp;
      storm(i, c, w, sp);
      float th = acos(clamp(dot(d, c), -1.0, 1.0)), ring = sqrt(2.0 * w);
      vec3 out_ = normalize(d - c * dot(d, c) + 1e-6);
      wall -= out_ * clamp((th - ring) / ring, -1.0, 1.0) * 14.0 * exp(-pow(th / (2.2 * ring), 2.0)) * abs(sp);
      calm *= 1.0 - min(1.0, uSwirl) * exp(-pow(th / (1.6 * ring), 4.0));
    }
    return (v * calm + cross(d, g)) * uSpin + wall * uSwirl;
  }
`,LV=`
  precision highp float;
  uniform sampler2D tPos;
  uniform float uDt, uStep, uStir, uLayers, uVents, uLife;
  in vec2 vUv;
  out vec4 outColor;
  ${oo}
  vec3 rnd3(float seed, float k) { return vec3(hash(vec3(seed * 91.7, k, 1.3)), hash(vec3(seed * 53.1, k, 7.9)), hash(vec3(seed * 17.3, k, 4.2))); }
  /** Vent e: where the magnet lets glass out into the sky, somewhere on the shell. */
  vec3 ventAt(float e) {
    // Half the vents are on the storms' edges (the first four on the big one), feeding their eyes.
    if (e < floor(uVents * 0.5)) {
      vec3 c; float w, sp;
      storm(e < 4.0 ? 0 : int(mod(e, ${Vr}.0)), c, w, sp);
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
`,UV=`
  precision highp float;
  uniform sampler2D tSeed;
  in vec2 vUv;
  out vec4 outColor;
  ${oo}
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
    outColor = vec4(d * ${nx.toFixed(1)}, seed);
  }
`,Ed=(()=>{let i=["in vec3 vW, vN, vT; in vec2 vL; in float vEdge, vSeed, vLit;","    a *= show;"];if(!i.every(e=>bd.includes(e)))throw new Error("GLASS_FRAGMENT changed: update pieceFragment");return bd.replace(i[0],`${i[0]}
  in vec3 vTint; in float vTintA;
  uniform float uIris;`).replace(i[1],`    // Tinted (keeping the glass's light and shade), and a little more solid, so the colour reads.
    float lum = dot(c, vec3(0.3, 0.55, 0.15));
    c = mix(c, vTint * (0.35 + 0.9 * lum), vTintA);
    a = mix(a, max(a, 0.55), vTintA);
    // Iridescence, like a soap film: colours that shift with the angle and across the piece.
    vec3 film = mix(vec3(1.0), 0.5 + 0.5 * cos(6.2832 * (vec3(0.0, 0.33, 0.67) + 1.7 * cosv + fract(vSeed * 3.1) * 0.5 + vL.x * 0.12)), 0.5);   // pastel: pearl, pink, sky blue
    c = mix(c, c * 0.55 + film * (0.35 + 0.5 * lum), uIris * 0.65);
    // Light coming through, with the sun behind.
    c += uSunCol * pow(max(dot(V, uSun), 0.0), 8.0) * 0.5 * vLit * uIris;
${i[1]}`)})(),FV=`
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
  ${oo}
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
`,OV=`
  uniform sampler2D tPos;
  uniform int uSide;
  uniform float uR, uProj, uSheet;
  uniform vec3 uSun;
  out float vA, vLit, vForward;
  ${oo}
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
`,NV=`
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
`,BV=`
  uniform sampler2D tPos;
  uniform int uSide;
  uniform float uR;
  uniform vec3 uSun;
  out float vFlash;
  ${oo}
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
`,zV=`
  precision highp float;
  uniform vec3 uSunCol;
  in float vFlash;
  out vec4 outColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0, a = vFlash * max(0.0, 1.0 - d);
    if (a <= 0.01) discard;
    outColor = vec4(mix(uSunCol, vec3(1.0), 0.5) * a * 1.5, a);
  }
`,kV=`
  in vec2 aQuad;                     // along (-1 \u2026 1), across (-1 \u2026 1)
  uniform sampler2D tPos, tPrev;
  uniform int uSide;
  uniform float uR, uDt, uVents, uLife, uStrokeLen, uStrokeWide;
  uniform vec3 uSun;
  out vec2 vQ;
  out float vA, vLit, vForward;
  out vec3 vCol;
  ${oo}
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
`,HV=`
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
`,sc=class{constructor(e,t,n,r=IV){this.renderer=e;this.params=r;let s=r.side,a=s*s,o=ks(5),l=we.MathUtils.degToRad(r.magTilt);this.frame=new we.Matrix3().set(1,0,0,0,Math.sin(l),Math.cos(l),0,Math.cos(l),-Math.sin(l));let c=new we.Vector3(0,Math.cos(l),-Math.sin(l)),u=c.clone();this.spinAxis=u;let h=ks(9),[f,d]=this.axisFrame(),m=new we.Vector3(Math.cos(.35),Math.sin(.35),0);this.storms=Array.from({length:Vr},(P,O)=>{let k=O===0?Math.asin(m.dot(u)):(h()-.5)*1.6,W=O===0?Math.atan2(m.dot(d),m.dot(f)):h()*Math.PI*2,X=h();return{lat:k,lon:W,w:O===0?.03:.004+.022*X*X,spin:(O===0||h()>.35?1:-1)*(.7+.6*h()),drift:O===0?1e-5:(.5+h())*12e-5}});let v=new Float32Array(a*4),g=new Float32Array(a*4),p=new Float32Array(a*4),y=[0,1,2,3].map(()=>new Float32Array(a*4));for(let P=0;P<a;P++){let O=new we.Vector3(o()-.5,o()-.5,o()-.5).normalize().multiplyScalar(nx);v.set([O.x,O.y,O.z,o()],P*4),g.set([3+o()**3*75,o()*Math.PI*2,o(),0],P*4);let k=new we.Vector3(o()-.5,o()-.5,o()-.5).normalize();p.set([k.x,k.y,k.z,(.008+.05*o()**2)*(o()<.5?1:-1)],P*4);let W=rc(o);for(let X=0;X<dn;X++){let N=W[Math.min(X,W.length-1)];y[X>>1][P*4+(X&1)*2]=N[0],y[X>>1][P*4+(X&1)*2+1]=N[1]}}this.start=new we.DataTexture(v,s,s,we.RGBAFormat,we.FloatType),this.start.needsUpdate=!0;let x=()=>new we.WebGLRenderTarget(s,s,{type:we.FloatType,minFilter:we.NearestFilter,magFilter:we.NearestFilter,depthBuffer:!1});this.targets=[x(),x()],this.simU={tPos:{value:null},uDt:{value:2},uStep:{value:0},uStir:{value:0},uLayers:{value:1},uGrav:{value:1},uMag:{value:1},uShape:{value:0},uFlat:{value:1},uBelts:{value:0},uSpin:{value:1},uBias:{value:0},uSwirl:{value:1},uChaos:{value:0},uCover:{value:1},uVents:{value:0},uLife:{value:900},uTime:{value:0},uKinds:{value:DV.map(([P,O,k])=>new we.Vector4(P,O,k,0))},uMagAxis:{value:c},uCrossAxis:{value:new we.Vector3(1,0,0)},uSpinAxis:{value:u},uStorms:{value:this.storms.map(P=>new we.Vector4(P.lat,P.lon,P.w,P.spin))},uStormDrift:{value:this.storms.map(P=>P.drift)}},this.quad=new so(new we.ShaderMaterial({glslVersion:we.GLSL3,uniforms:this.simU,fragmentShader:LV,vertexShader:"out vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"})),this.uniforms={...n,tPos:{value:this.targets[0].texture},tPrev:{value:this.targets[0].texture},uSide:{value:s},uTime:{value:0},uR:{value:t},uProj:{value:600},uSheet:{value:120},uSheetA:{value:1}},this.reset();let _=new we.InstancedBufferGeometry;_.setAttribute("position",new we.Float32BufferAttribute(new Float32Array((dn+1)*3),3)),_.setAttribute("aCorner",new we.Float32BufferAttribute(Array.from({length:dn+1},(P,O)=>O),1));let T=[];for(let P=0;P<dn;P++)T.push(0,1+P,1+(P+1)%dn);_.setIndex(T),_.setAttribute("iSpin",new we.InstancedBufferAttribute(p,4)),_.setAttribute("iSize",new we.InstancedBufferAttribute(g,4)),y.forEach((P,O)=>_.setAttribute(`iC${O}`,new we.InstancedBufferAttribute(P,4))),_.instanceCount=a;let M={transparent:!0,depthWrite:!1,depthTest:!0,blending:we.CustomBlending,blendSrc:we.OneFactor,blendDst:we.OneMinusSrcAlphaFactor},A=new we.Mesh(_,new we.ShaderMaterial({glslVersion:we.GLSL3,...M,side:we.DoubleSide,uniforms:{...this.simU,...this.uniforms,uColourBy:this.colourBy,uBlades:this.look.blades,uGiants:this.look.giants,uIris:this.look.iris},vertexShader:FV,fragmentShader:Ed}));A.frustumCulled=!1;let C=new we.BufferGeometry;C.setAttribute("position",new we.Float32BufferAttribute(new Float32Array(a*3),3));let S=(P,O,k)=>{let W=new we.Points(C,new we.ShaderMaterial({glslVersion:we.GLSL3,...M,uniforms:{...this.simU,...this.uniforms},vertexShader:P,fragmentShader:O}));return W.frustumCulled=!1,W.renderOrder=k,W},E=new we.InstancedBufferGeometry;E.setAttribute("position",new we.Float32BufferAttribute(new Float32Array(12),3)),E.setAttribute("aQuad",new we.Float32BufferAttribute([-1,-1,1,-1,-1,1,1,1],2)),E.setIndex([0,1,2,2,1,3]),E.instanceCount=a,this.strokes=new we.Mesh(E,new we.ShaderMaterial({glslVersion:we.GLSL3,...M,side:we.DoubleSide,vertexShader:kV,fragmentShader:HV,uniforms:{...this.simU,...this.uniforms,uStrokeLen:{value:480},uStrokeWide:{value:9},uStrokeAlpha:{value:.17}}})),this.strokes.frustumCulled=!1,this.pieces=A,this.mesh=new we.Group().add(S(OV,NV,-1),A,this.strokes,S(BV,zV,1))}renderer;params;mesh;colourBy={value:0};look={blades:{value:0},giants:{value:.003},iris:{value:0}};pieces;strokes;uniforms;frame;settings={grav:1,mag:1,flat:1,belts:0,layers:1,cover:1,shape:0,spin:1,bias:.6,swirl:0,chaos:0,stir:2,blades:0,iris:0,vents:0,life:900,strokes:0};static PRESETS={ring:{grav:1,mag:1,flat:1,belts:0,layers:1,cover:1,blades:0,iris:0,vents:0,strokes:0,shape:0,spin:1,bias:.6,swirl:0,chaos:0,stir:1},jupiter:{grav:1,mag:1,flat:0,belts:1.4,layers:0,cover:1,blades:0,iris:0,vents:0,strokes:0,shape:0,spin:1,bias:0,swirl:1,chaos:.3,stir:1},sky:{grav:1,mag:.64,flat:0,belts:0,layers:.35,cover:1,shape:0,spin:1,bias:.3,swirl:1,chaos:.3,stir:1,blades:1,iris:1,vents:22,life:800,strokes:1}};targets;quad;simU;start;steps=0;spinAxis;storms;setView(e,t){this.uniforms.uProj.value=e/(2*Math.tan(we.MathUtils.degToRad(t)/2))}reset(){let e=this.simU,t=this.settings;e.uBelts.value=t.belts,e.uFlat.value=t.flat;let n=new so(new we.ShaderMaterial({glslVersion:we.GLSL3,uniforms:{...this.simU,tSeed:{value:this.start}},fragmentShader:UV,vertexShader:"out vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"})),r=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.targets[0]),n.render(this.renderer),this.renderer.setRenderTarget(r),n.material.dispose(),n.dispose(),this.steps=0,this.uniforms.tPos.value=this.targets[0].texture}step(e,t=2){let n=this.simU,r=this.settings,s=this.renderer.getRenderTarget();n.uDt.value=t,n.uStir.value=r.stir,n.uLayers.value=r.layers,n.uGrav.value=r.grav,n.uMag.value=r.mag,n.uShape.value=r.shape,n.uFlat.value=r.flat,n.uBelts.value=r.belts,n.uSpin.value=r.spin,n.uBias.value=r.bias,n.uSwirl.value=r.swirl,n.uChaos.value=r.chaos,n.uCover.value=r.cover,n.uVents.value=r.vents,n.uLife.value=r.life,this.look.blades.value=r.blades,this.look.iris.value=r.iris,this.strokes.visible=r.strokes>.5,this.pieces.visible=!this.strokes.visible,this.uniforms.uSheetA.value=this.strokes.visible?.3:1;for(let a=0;a<e;a++){let o=this.steps&1;n.uStep.value=this.steps%1e5,n.tPos.value=this.targets[o].texture,this.renderer.setRenderTarget(this.targets[1-o]),this.quad.render(this.renderer),this.steps++,this.uniforms.tPrev.value=this.targets[o].texture,this.uniforms.tPos.value=this.targets[1-o].texture,this.uniforms.uTime.value+=t,n.uTime.value=this.uniforms.uTime.value}this.renderer.setRenderTarget(s)}read(){let e=this.params.side,t=new Float32Array(e*e*4);return this.renderer.readRenderTargetPixels(this.targets[this.steps&1],0,0,e,e,t),t}axisFrame(){let e=new we.Vector3().crossVectors(this.spinAxis,new we.Vector3(.31,.87,.39)).normalize();return[e,new we.Vector3().crossVectors(this.spinAxis,e)]}stormCentre(e){let t=this.storms[e],[n,r]=this.axisFrame(),s=t.lon-t.drift*this.time;return n.multiplyScalar(Math.cos(t.lat)*Math.cos(s)).addScaledVector(r,Math.cos(t.lat)*Math.sin(s)).addScaledVector(this.spinAxis,Math.sin(t.lat))}get time(){return this.uniforms.uTime.value}};var Ee=Nt($t());var Ze=Nt($t());var ac="watershed";function qA(i,e,t,n){let r=780139,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/4294967296,a=()=>Math.sqrt(-2*Math.log(Math.max(1e-4,s())))*Math.cos(s()*Math.PI*2),o=(L=0,F=0,z=0)=>new Ze.Vector3(L,F,z),l=new Ze.Quaternion().setFromUnitVectors(o(0,0,1),t),c=(L,F,z)=>{let Y=Math.imul(L,374761393)+Math.imul(F,668265263)+Math.imul(z,2147483647);return Y=Math.imul(Y^Y>>>13,1274126177),((Y^Y>>>16)>>>0)/4294967296};function u(L){let F=Math.floor(L.x),z=Math.floor(L.y),Y=Math.floor(L.z),te=Z=>Z*Z*(3-2*Z),le=te(L.x-F),Re=te(L.y-z),Ve=te(L.z-Y),pe=Ze.MathUtils.lerp;return pe(pe(pe(c(F,z,Y),c(F+1,z,Y),le),pe(c(F,z+1,Y),c(F+1,z+1,Y),le),Re),pe(pe(c(F,z,Y+1),c(F+1,z,Y+1),le),pe(c(F,z+1,Y+1),c(F+1,z+1,Y+1),le),Re),Ve)}let h=L=>.55*u(L.clone().multiplyScalar(1/840))+.3*u(L.clone().multiplyScalar(1/290))+.15*u(L.clone().multiplyScalar(1/105)),f=[],d=[],m=[],v=[],g=(L,F,z,Y,te=0,le=12)=>{f.push(...L.clone().multiplyScalar(le).toArray()),d.push(...F),m.push(z*le,Y,s()),v.push(te)};for(let L=0;L<6500;L++){let F=o(a()*1040,a()*890,a()*610).applyQuaternion(l),z=h(F),Y=F.length()/1800,te=new Ze.Color(.77,.66,.52).lerp(new Ze.Color(.49,.33,.4),Math.min(1,Y)).toArray();g(F,te,220+s()*300,.045*Math.pow(Math.max(0,(z-.18)/.82),1.4))}for(let L=0;L<900;L++)g(o(a()*430,a()*370,a()*300).applyQuaternion(l),[.9,.8,.62],220+s()*190,.045);for(let L=0;L<2;L++){let F=e[L];for(let z=0;z<8500;z++){let Y=s(),te=F.getPointAt(Y).multiplyScalar(1/12),le=F.getTangentAt(Y),Re=new Ze.Vector3().crossVectors(le,t).normalize(),Ve=.5+.5*Math.sin(Y*10+L*1.6),pe=360+360*Ve;te.addScaledVector(Re,a()*pe).addScaledVector(t,a()*(380+200*Ve));let Z=h(te),ne=new Ze.Color(.48,.32,.41).lerp(new Ze.Color(.25,.46,.51),Ze.MathUtils.smoothstep(Y,.18,.9));ne.lerp(new Ze.Color(.72,.69,.6),Math.max(0,(Z-.5)*.9)),g(te,ne.toArray(),220+s()*350,.038*Ze.MathUtils.smoothstep(Z,.2,.72))}for(let z=0;z<3e3;z++){let Y=s(),te=F.getPointAt(Y).multiplyScalar(1/12),le=F.getTangentAt(Y),Re=new Ze.Vector3().crossVectors(le,t).normalize(),Ve=z%3-1;te.addScaledVector(Re,240*Math.sin(Y*18+L+Ve)+Ve*250+a()*110).addScaledVector(t,a()*300),g(te,[.018,.023,.031],120+s()*200,.12*Ze.MathUtils.smoothstep(h(te),.25,.72))}}for(let L=0;L<1700;L++){let F=s()*Math.PI*2,z=650+s()*1150,Y=o(Math.cos(F)*z,Math.sin(F)*z,a()*490).applyQuaternion(l);g(Y,[.023,.019,.027],120+s()*180,.09*Ze.MathUtils.smoothstep(h(Y),.3,.7))}for(let L=0;L<14500;L++){let F;if(s()<.35)F=o(a()*1300,a()*1100,a()*800).applyQuaternion(l);else{let le=s()<.5?0:1,Re=s(),Ve=e[le],pe=Ve.getTangentAt(Re),Z=new Ze.Vector3().crossVectors(pe,t).normalize();F=Ve.getPointAt(Re).multiplyScalar(1/12).addScaledVector(Z,a()*620).addScaledVector(t,a()*550)}let z=s(),Y=z>.995?32+s()*26:z>.96?12+s()*14:2+s()*8,te=s()<.45?[.62,.78,.87]:[.87,.78,.64];g(F,te,Y,z>.96?.7:.18+s()*.35,1)}for(let L=2;L<e.length;L++){let F=e[L],z=n.uRoute.value[L],Y=new Ze.Color(.48,.32,.41).lerp(new Ze.Color(.25,.46,.51),Ze.MathUtils.smoothstep(z.z,.18,.9));for(let te=0;te<1800;te++){let le=s(),Re=F.getPointAt(le),Ve=F.getTangentAt(le),pe=new Ze.Vector3().crossVectors(Ve,t).normalize();Re.addScaledVector(pe,a()*125).addScaledVector(t,a()*105);let Z=.2+.8*Ze.MathUtils.smoothstep(.5+.5*Math.sin(le*15+L*1.7),.15,.85),ne=Ze.MathUtils.smoothstep(le,0,.08)*(1-Ze.MathUtils.smoothstep(le,.92,1));g(Re,Y.toArray(),160+s()*180,.035*Z*ne,0,1)}}let p=new Float32Array(f),y=f.length/3,x=Uint32Array.from({length:y},(L,F)=>F),_=new Float32Array(y),T=1024,M=new Uint32Array(T),A=new Uint32Array(T),C=new Uint16Array(y),S=new Ze.BufferGeometry;S.setAttribute("position",new Ze.BufferAttribute(p,3)),S.setAttribute("aColor",new Ze.Float32BufferAttribute(d,3)),S.setAttribute("aShape",new Ze.Float32BufferAttribute(m,3)),S.setAttribute("aKind",new Ze.Float32BufferAttribute(v,1)),S.setIndex(new Ze.BufferAttribute(x,1).setUsage(Ze.DynamicDrawUsage));let E={value:1e3},P=new Ze.ShaderMaterial({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ze.CustomBlending,blendSrc:Ze.OneFactor,blendDst:Ze.OneMinusSrcAlphaFactor,uniforms:{uProj:E,uTime:n.uTime,uPlanets:n.uPlanets},vertexShader:`attribute vec3 aColor,aShape;attribute float aKind;uniform float uProj,uTime;uniform vec3 uPlanets[10];varying vec3 vColor;varying float vAlpha,vKind;void main(){
      vec3 base=position/${12 .toFixed(1)};
      vec3 at=position;if(aKind<.5)at+=vec3(sin(base.y*.001+uTime*.035),cos(base.x*.0013+uTime*.027),sin(base.z*.0012+uTime*.032))*${288 .toFixed(1)};
      vec4 p=modelViewMatrix*vec4(at,1.);vColor=aColor;vKind=aKind;vAlpha=aShape.y*smoothstep(250.,1100.,length(at-cameraPosition));
      for(int j=0;j<10;j++)vAlpha*=smoothstep(570.,900.,distance(at,uPlanets[j]));
      gl_Position=projectionMatrix*p;gl_PointSize=clamp(aShape.x*uProj/max(1.,-p.z),aKind>.5?.8:1.,aKind>.5?18.:76.);}`,fragmentShader:`varying vec3 vColor;varying float vAlpha,vKind;void main(){vec2 p=(gl_PointCoord-.5)*2.;float r=length(p);if(r>1.)discard;
      float a=(vKind>.5?exp(-r*r*18.)+.15*exp(-r*r*3.):exp(-r*r*4.5)*(1.-smoothstep(.7,1.,r)))*vAlpha;
      gl_FragColor=vec4(vColor*a,a*(vKind>.5?.08:1.));}`}),O=new Ze.Points(S,P);O.renderOrder=-2,O.frustumCulled=!1,i.add(O);let k=o(1/0),W=new Ze.Quaternion,X=-100,N=0;return{count:y,get sorts(){return N},update(L,F){E.value=L;let z=n.uTime.value;if(F.position.distanceToSquared(k)<400&&F.quaternion.angleTo(W)<.006&&z-X<.8)return;F.updateMatrixWorld(!0);let Y=F.matrixWorldInverse.elements,te=1/0,le=-1/0;for(let pe=0;pe<y;pe++){let Z=p[pe*3],ne=p[pe*3+1],_e=p[pe*3+2];v[pe]<.5&&(Z+=Math.sin(p[pe*3+1]/12*.001+z*.035)*24*12,ne+=Math.cos(p[pe*3]/12*.0013+z*.027)*24*12,_e+=Math.sin(p[pe*3+2]/12*.0012+z*.032)*24*12);let Pe=Y[2]*Z+Y[6]*ne+Y[10]*_e+Y[14];_[pe]=Pe,te=Math.min(te,Pe),le=Math.max(le,Pe)}M.fill(0);let Re=(T-1)/Math.max(1,le-te);for(let pe=0;pe<y;pe++){let Z=Math.min(T-1,Math.max(0,Math.floor((_[pe]-te)*Re)));C[pe]=Z,M[Z]++}let Ve=0;for(let pe=0;pe<T;pe++)A[pe]=Ve,Ve+=M[pe];for(let pe=0;pe<y;pe++)x[A[C[pe]]++]=pe;S.index.needsUpdate=!0,k.copy(F.position),W.copy(F.quaternion),X=z,N++}}}var ix=[[.24,.86,1],[.4,.52,1],[.77,.38,1],[1,.3,.57],[1,.66,.22],[.3,1,.67]];function rx(i){return ix[Math.min(5,Math.floor(i*7.13%1*6))]}var Md=`
  vec3 fragmentColor(float seed){
    float k=floor(fract(seed*7.13)*6.);
    if(k<.5)return vec3(.24,.86,1.);
    if(k<1.5)return vec3(.40,.52,1.);
    if(k<2.5)return vec3(.77,.38,1.);
    if(k<3.5)return vec3(1.,.30,.57);
    if(k<4.5)return vec3(1.,.66,.22);
    return vec3(.30,1.,.67);
  }
`;function sx(i){function e(a,o){if(i.split(a).length!==2)throw Error("Native glass shader changed: "+a);i=i.replace(a,o)}e("return c + uSunCol * pow(cs, 6.0) * 0.3;","return texture(uDemoEnvironment, normalize(uDemoEnvRotation * r)).rgb * 1.4 + uSunCol * pow(cs, 60.0) * .18;"),e("vec2 dLx = dFdx(vL), dLy = dFdy(vL);",`vec2 dLx = dFdx(vL), dLy = dFdy(vL);
    vec2 dEdge = vec2(dFdx(vEdge), dFdy(vEdge));`),e("if (dot(n, V) > 0.0) n = -n;",`float determinant=dLx.x*dLy.y-dLx.y*dLy.x;
    if(abs(determinant)>1e-10){
      vec2 gradient=vec2(dEdge.x*dLy.y-dEdge.y*dLx.y,dEdge.y*dLx.x-dEdge.x*dLy.x)/determinant;
      vec3 edgeNormal=t*gradient.x+b*gradient.y;
      n=normalize(n+normalize(edgeNormal+vec3(1e-8))*(1.-smoothstep(.015,.13,vEdge))*.55);
    }
    if (dot(n, V) > 0.0) n = -n;`);let t="outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);";if(i.split(t).length!==2)throw Error("Native glass emission output changed");let n=i.indexOf("    float mirror ="),r=i.indexOf(t)+t.length;if(n<0)throw Error("Native glass reflection changed");return i=i.slice(0,n)+`
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
    outColor = vec4(glassColor * a, a);`+i.slice(r),`uniform samplerCube uDemoEnvironment; uniform mat3 uDemoEnvRotation;
`+Md+i}function ax(i,e){i.traverse(t=>{var a,o;let n=t.material;if(!((a=n==null?void 0:n.fragmentShader)!=null&&a.includes("float fwE = fwidth(vEdge);")))return;if(n.fragmentShader.split("outColor = vec4(grade(clamp(c, 0.0, 1.0)) * a, a);").length!==2)throw Error("Native glass output changed");n.fragmentShader=`uniform float uDemoGlassPresence;
`+sx(n.fragmentShader).replace("outColor = vec4(glassColor * a, a);","outColor = vec4(glassColor * a, a) * uDemoGlassPresence;"),n.uniforms.uDemoGlassPresence=e,n.needsUpdate=!0;let s=(o=t.geometry)==null?void 0:o.getAttribute("iSize");if(s){for(let l=0;l<s.count;l++)s.setX(l,Math.min(55,24+s.getX(l)*.85));s.needsUpdate=!0}n.vertexShader=n.vertexShader.replace("iSize.x * dense(ang, r, iSize.z)","iSize.x * sqrt(dense(ang, r, iSize.z))")})}var Wn=Nt($t());function WA(i,e,t,n,r,s){let a=Wn.MathUtils.smoothstep,o=new Wn.Vector3,l=new Wn.Vector3,c=new Wn.Vector3,u=new Wn.Vector3;function h(v,g,p){let y=Math.max(0,Math.min(1,v))*511,x=Math.floor(y),_=(g*512+x)*4,T=(g*512+Math.min(511,x+1))*4;return p.set(Wn.MathUtils.lerp(n[_],n[T],y-x),Wn.MathUtils.lerp(n[_+1],n[T+1],y-x),Wn.MathUtils.lerp(n[_+2],n[T+2],y-x))}function f(v,g,p){let y=v*4,x=e.paths,_=e.seeds,T=x[y+1],M=r[T],A=T>1.5,C=(x[y]+g*M.x*(.92+.16*_[y]))%1;h(C,T*2+1,l).normalize(),c.crossVectors(l,s).normalize(),u.crossVectors(c,l).normalize();let S=.65*Math.sin(C*8+T*1.4)+.25*Math.sin(C*17);c.applyAxisAngle(l,S),u.applyAxisAngle(l,S);let E=Math.floor(_[y+1]*3)-1,P=.5+.5*Math.sin(C*12+T*2),O=A?1:12,k=(A?220:260+700*P*P)*O,W=E*(A?75:170+210*Math.sin(C*9+E))*O;h(C,T*2,p).addScaledVector(c,x[y+2]*k+W).addScaledVector(u,(x[y+3]*(A?85:90+160*P)+E*(A?30:95))*O);let X=a(C,0,.035)*(1-a(C,.955,1));A&&(X*=.25+.75*a(.5+.5*Math.sin(C*15+T*1.7),.15,.85));for(let N=0;N<i.length;N++)X*=a(p.distanceTo(i[N].group.position),N===M.w?530:680,N===M.w?650:1100);return X}let d=[];for(let v=0;v<t.length/2;v++)if(t[v*2]>2){let g=new Wn.Vector3;f(v,0,g)>.15&&d.push({index:v,position:g})}let m=i.map(v=>{let g=v.group.position,p=d.map(x=>({...x,distance:x.position.distanceTo(g),direction:x.position.clone().sub(g).normalize()})).sort((x,_)=>x.distance-_.distance),y=[];for(let x of ix){let _=p.filter(T=>rx(e.seeds[T.index*4])===x);y.push(_.find(T=>y.every(M=>M.direction.dot(T.direction)<.8))||_[0])}return{world:v,lights:y.map(x=>({index:x.index,power:.6*(1+Math.min(80,x.distance*x.distance/1e6)),color:rx(e.seeds[x.index*4]),position:new Wn.Vector3})),inverse:new Wn.Matrix4}});return{update(v){for(let g of m){let p=Hr(g.world);g.inverse.copy(g.world.group.matrixWorld).invert(),g.lights.forEach((y,x)=>{let _=f(y.index,v,o);y.position.copy(o),y.fade=_,p.lightPositions.value[x].copy(o).applyMatrix4(g.inverse),p.lightColors.value[x].fromArray(y.color).multiplyScalar(y.power*_)})}},diagnostics(){return m.map(v=>({world:v.world.data.id,sources:v.lights.map((g,p)=>({index:g.index,position:g.position.toArray(),local:Hr(v.world).lightPositions.value[p].toArray(),color:g.color,power:g.power,fade:g.fade}))}))}}}var oc=(i=0,e=0,t=0)=>new Ee.Vector3(i,e,t),YA=new Ee.Quaternion().setFromEuler(new Ee.Euler(.32,-.16,-.3)),cx={watershed:[1400,0,350,-400],meander:[2400,0,-350,450],shoals:[3200,0,450,-380],skerries:[4200,0,-400,350],rampart:[5200,0,-250,-200],headlands:[1400,1,-400,-400],norvale:[2500,1,350,400],saltmere:[3300,1,-350,-380],ochre:[4200,1,450,350],fell:[5100,1,-350,-250]};function Vs(i,e,t=0){let n=.72+1.68*Math.log(i/1e3)+e*Math.PI;return oc(i*Math.cos(n),i*Math.sin(n)*.86,300*Math.sin(n*2)+120*Math.sin(n*3)+t).applyQuaternion(YA).multiplyScalar(12)}function wd(){return oc(0,0,1).applyQuaternion(YA)}function ux(i){let[e,t,n,r]=cx[i],s=Vs(e+2,t).sub(Vs(e-2,t)).normalize();return Vs(e,t,n).addScaledVector(new Ee.Vector3().crossVectors(s,wd()).normalize(),r*12)}function lc(i){let[e,t]=cx[i],n=ux(i),r=Vs(e,t),s=Vs(e+2,t).sub(Vs(e-2,t)).normalize(),a=new Ee.Vector3().crossVectors(r.clone().sub(n),s).normalize(),o=r.sub(n).projectOnPlane(a).normalize(),l=new Ee.Vector3().crossVectors(a,o).normalize();return{normal:a,u:o,v:l}}var ox=.0065,Hs=512,lx=5,VV=["watershed","norvale","saltmere"],XA=`
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
`;function jA(i,e){let t=219031,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,r=()=>(n()+n()+n()-1.5)*.72,s=[0,1].map(N=>new Ee.CatmullRomCurve3(Array.from({length:100},(L,F)=>Vs(780+F/99*5350,N))));s.forEach(N=>{N.arcLengthDivisions=1500,N.updateArcLengths()});let a=[],o=[new Ee.Vector4(ox,0,0,-1),new Ee.Vector4(ox,1,0,-1)];for(let N of VV){let L=i.find(Q=>Q.data.id===N),F=cx[N][1],z=s[F],Y=L.group.position,te=0,le=1/0;for(let Q=0;Q<=512;Q++){let ee=z.getPointAt(Q/512).distanceToSquared(Y);ee<le&&(le=ee,te=Q/512)}let{normal:Re,u:Ve,v:pe}=lc(N),Z=Math.max(.015,te-.15),ne=Math.min(.985,te+.15),_e=z.getPointAt(Z),Pe=z.getPointAt(ne),Se=[];for(let Q=0;Q<=96;Q++){let ee=Q/96,ge=-.7+ee*(Math.PI*2+1.4),ce=790+140*Math.pow(Math.abs(ee*2-1),3);Se.push(Y.clone().addScaledVector(Ve,Math.cos(ge)*ce).addScaledVector(pe,Math.sin(ge)*ce))}let ct=Se[1].clone().sub(Se[0]).normalize(),yt=Se.at(-1).clone().sub(Se.at(-2)).normalize(),U=new Ee.CubicBezierCurve3(_e,_e.clone().addScaledVector(z.getTangentAt(Z),500),Se[0].clone().addScaledVector(ct,-500),Se[0]),ae=new Ee.CubicBezierCurve3(Se.at(-1),Se.at(-1).clone().addScaledVector(yt,500),Pe.clone().addScaledVector(z.getTangentAt(ne),-500),Pe),ie=new Ee.CatmullRomCurve3([...U.getPoints(32).slice(0,-1),...Se,...ae.getPoints(32).slice(1)]);ie.arcLengthDivisions=2e3,ie.updateArcLengths(),s.push(ie),o.push(new Ee.Vector4(90/ie.getLength(),F,te,i.indexOf(L))),a.push({world:N,arm:F,startQ:Z,endQ:ne,normal:Re.toArray(),entry:_e.toArray(),exit:Pe.toArray(),length:ie.getLength(),speed:90})}let l=new Float32Array(Hs*lx*2*4),c=[],u=new Ee.Box3;for(let N=0;N<lx;N++)for(let L=0;L<Hs;L++){let F=s[N].getPointAt(L/(Hs-1)),z=s[N].getTangentAt(L/(Hs-1));l.set([...F.toArray(),1],(N*2*Hs+L)*4),l.set([...z.toArray(),1],((N*2+1)*Hs+L)*4),L%5===0&&(N<2&&c.push(F),u.expandByPoint(F))}let h=new Ee.DataTexture(l,Hs,lx*2,Ee.RGBAFormat,Ee.FloatType);h.needsUpdate=!0;let f=new Ee.DataTexture(new Float32Array([1,0,0,1e9]),1,1,Ee.RGBAFormat,Ee.FloatType);f.needsUpdate=!0;let d={...ic(ao(25)),uSun:{value:oc(-.5,.8,1).normalize()},uUp:{value:oc(0,1,0)},uR:{value:0},uSpace:{value:1},uDip:{value:0},uIris:{value:.03},uDemoEnvironment:{value:e.userData.nebulaEnvironment},uDemoEnvRotation:{value:new Ee.Matrix3},tDepth:{value:f},tFront:{value:f},uRes:{value:new Ee.Vector2(1,1)},uInvVP:{value:new Ee.Matrix4},uTime:{value:0},uProjection:{value:1},uDpr:{value:1},uPath:{value:h},uRoute:{value:o},uAxis:{value:wd()},uPlanets:{value:i.map(N=>N.group.position)}};function m(N){let L=[],F=[];for(let z=0;z<N;z++){let Y=n()<.35?2+Math.floor(n()*3):n()<.56?0:1;L.push(n(),Y,r(),r()),F.push(n(),n(),n(),n())}return{paths:L,seeds:F}}let v=2e4,g=m(v),p=[],y=Array.from({length:4},()=>[]);for(let N=0;N<v;N++){let L=n(),F=L<.06?3.5+n()**2*2:L<.7?1.5+n()*2:.6+n()*1.4;p.push(F,L<.06?.55+n()*.35:.25+n()*.35);let z=rc(n);for(let Y=0;Y<dn;Y++)y[Y>>1].push(...z[Math.min(Y,z.length-1)])}let x=new Ee.InstancedBufferGeometry;x.setAttribute("position",new Ee.Float32BufferAttribute(new Float32Array((dn+1)*3),3)),x.setAttribute("aCorner",new Ee.Float32BufferAttribute(Array.from({length:dn+1},(N,L)=>L),1));let _=[];for(let N=0;N<dn;N++)_.push(0,1+N,1+(N+1)%dn);x.setIndex(_),x.instanceCount=v;for(let[N,L,F]of[["iPath",g.paths,4],["iSeed",g.seeds,4],["iSize",p,2]])x.setAttribute(N,new Ee.InstancedBufferAttribute(new Float32Array(L),F));y.forEach((N,L)=>x.setAttribute("iC"+L,new Ee.InstancedBufferAttribute(new Float32Array(N),4)));let T=`
    in float aCorner;in vec4 iPath,iSeed,iC0,iC1,iC2,iC3;in vec2 iSize;
    uniform vec3 uSun;
    out vec3 vW,vN,vT;out vec2 vL;out float vEdge,vSeed,vLit,vFlowFade;out vec3 vTint;out float vTintA;
    ${XA}
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
    }`;if(Ed.split("a *= show;").length!==2)throw Error("Native glass fragment changed");let M=`in float vFlowFade;
`+sx(Ed).replace("a *= show;","a *= show * vFlowFade * .72;"),A=new Ee.ShaderMaterial({glslVersion:Ee.GLSL3,uniforms:d,vertexShader:T,fragmentShader:M,transparent:!0,side:Ee.DoubleSide,depthTest:!0,depthWrite:!1,blending:Ee.CustomBlending,blendSrc:Ee.OneFactor,blendDst:Ee.OneMinusSrcAlphaFactor}),C=new Ee.Mesh(x,A);C.frustumCulled=!1,e.add(C);let S=new Ee.BufferGeometry;S.setAttribute("position",new Ee.Float32BufferAttribute(new Float32Array(v*3),3));for(let[N,L,F]of[["iPath",g.paths,4],["iSeed",g.seeds,4],["iSize",p,2]])S.setAttribute(N,new Ee.Float32BufferAttribute(L,F));let E=new Ee.ShaderMaterial({uniforms:d,glslVersion:Ee.GLSL3,transparent:!0,depthTest:!0,depthWrite:!1,blending:Ee.CustomBlending,blendSrc:Ee.OneFactor,blendDst:Ee.OneMinusSrcAlphaFactor,vertexShader:`in vec4 iPath,iSeed;in vec2 iSize;uniform float uDpr;out vec3 vColor;out float vAlpha;${XA}${Md}
      void main(){vec3 c,T,N;float fade,q;flowing(iPath,iSeed,c,T,N,fade,q);vec4 p=viewMatrix*vec4(c,1.);
        float pixels=2.*iSize.x*uProjection/max(1.,-p.z),lod=smoothstep(.9,4.5,pixels);
        vColor=fragmentColor(iSeed.x);vAlpha=fade*(.025*(1.-lod)+.18*smoothstep(.7,3.,pixels));
        gl_Position=projectionMatrix*p;gl_PointSize=clamp(max(100.,iSize.x*5.)*uProjection/max(1.,-p.z),2.,38.)*uDpr;}`,fragmentShader:`in vec3 vColor;in float vAlpha;out vec4 outColor;void main(){vec2 p=2.*gl_PointCoord-1.;float r=dot(p,p);if(r>1.||vAlpha<.0001)discard;
      float a=exp(-r*4.5)*(1.-smoothstep(.6,1.,r))*vAlpha;outColor=vec4(vColor*a,a);}`}),P=new Ee.Points(S,E);P.frustumCulled=!1,P.renderOrder=-1,e.add(P);let O=qA(e,s,wd(),d),k=WA(i,g,p,l,o,wd()),W=new Ee.Vector2,X=c.map(N=>c.reduce((L,F)=>L+Math.exp(-N.distanceToSquared(F)/(9e5*12**2)),0));return{bounds:u,count:v,dustCount:v,volumeCount:O.count,samples:c,links:a,lighting:k,get time(){return d.uTime.value},get sorts(){return O.sorts},update(N,L,F){d.uTime.value+=F,k.update(d.uTime.value),N.getDrawingBufferSize(W);let z=W.y/(2*Math.tan(Ee.MathUtils.degToRad(L.fov/2)));d.uDpr.value=N.getPixelRatio(),d.uProjection.value=z/N.getPixelRatio(),O.update(z,L)},probes(N){return[.18,.33,.52,.69,.84].map((L,F)=>{let z=(L+d.uTime.value*ox)%1;return s[F%2].getPointAt(z).project(N).toArray()})},skyAnchor(N){let L=0,F=-1/0;for(let te=0;te<c.length;te++){let le=c[te].distanceTo(N.group.position);if(le<950)continue;let Re=X[te]/(le+800);Re>F&&(F=Re,L=te)}let z=c[L].clone().sub(N.group.position).normalize(),Y=new Ee.Vector3().crossVectors(z,oc(0,1,0)).normalize();return z.applyAxisAngle(Y,.65).applyQuaternion(N.group.quaternion.clone().invert())},sight(N,L,F){let z=null,Y=-1/0;for(let te=0;te<c.length;te++){let le=c[te].clone().sub(N),Re=le.length();le.normalize();let Ve=le.dot(L);if(Ve<.12)continue;let pe=le.dot(F)*.18-Math.abs(Ve-.3)+X[te]*.04-Re/4e4;pe>Y&&(Y=pe,z=le)}return z?N.clone().addScaledVector(z,100):null}}}var kt=Nt($t());function hx(i,e){let t=new kt.SphereGeometry(10,32,24),n="varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",r=new kt.ShaderMaterial({side:kt.BackSide,depthWrite:!1,vertexShader:n,fragmentShader:`varying vec3 vDir;
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
    }`}),s=new kt.Scene,a=new kt.Mesh(t,r);s.add(a);let o=new kt.WebGLCubeRenderTarget(512,{generateMipmaps:!0,minFilter:kt.LinearMipmapLinearFilter,magFilter:kt.LinearFilter}),l=new kt.CubeCamera(.1,20,o),c=i.getRenderTarget();l.update(i,s),i.setRenderTarget(c),t.dispose(),r.dispose(),s.clear(),e.userData.nebulaEnvironment=o.texture;let u=new kt.Mesh(new kt.SphereGeometry(1e6,40,24),new kt.ShaderMaterial({side:kt.BackSide,depthWrite:!1,depthTest:!1,uniforms:{uSky:{value:o.texture}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position.z=gl_Position.w;}",fragmentShader:"varying vec3 vDir;uniform samplerCube uSky;void main(){gl_FragColor=vec4(textureCube(uSky,normalize(vDir)).rgb,1.);}"}));u.renderOrder=-100,u.frustumCulled=!1;let h=new kt.Group;h.renderOrder=-1e3,h.add(u),e.add(h)}var Td=.1,fx=4e3,dx=1/30,ZA=1.8,lo={watershed:{pattern:"Broken broad arcs",ring:4200,tilt:28,turn:.25,mood:25,narrow:!0,linked:!0,bands:[[6300,6900,.45],[7200,8100,.28]]},shoals:{pattern:"Latitude ribbons",sky:96,motionRate:10,preset:"jupiter",tilt:38,turn:.4,mood:28,cover:.85,field:{belts:1.8,flat:0,shape:.15,swirl:.7}},ochre:{pattern:"Separated twin rings",ring:3800,tilt:64,turn:-.5,mood:18,narrow:!0,bands:[[5800,6100,.8],[8700,9e3,.65]]},norvale:{pattern:"Fine single ring",ring:3200,tilt:17,turn:.9,mood:25,narrow:!0,linked:!0,bands:[[6900,7140,.8]]},meander:{pattern:"Twisting belt",sky:96,motionRate:8,tilt:67,turn:1.1,mood:20,cover:.68,field:{flat:.65,belts:.3,shape:.8,swirl:1.6,spin:.8}},rampart:{pattern:"Crossed orbits",ring:1800,tilt:22,turn:1.6,mood:15,narrow:!0,bands:[[6500,6900,.65]],layers:[22,108]},skerries:{pattern:"Scattered fragment clusters",sky:96,motionRate:10,tilt:15,turn:2.3,mood:30,cover:.44,field:{flat:0,shape:.2,layers:.6,swirl:1.8,vents:10}},saltmere:{pattern:"Concentric fine bands",ring:4400,tilt:41,turn:-.4,mood:25,narrow:!0,linked:!0,bands:[[6e3,6160,.5],[6750,6900,.75],[7530,7710,.65],[8450,8600,.5]]},headlands:{pattern:"Polar fan",ring:1300,tilt:72,turn:2.8,mood:24,narrow:!0,bands:[[6900,7500,.5]],layers:[72,104,136]},fell:{pattern:"Spherical halo",sky:96,motionRate:7,tilt:0,turn:.8,mood:30,cover:1,field:{flat:0,belts:0,shape:0,swirl:.35,chaos:.1,layers:0,vents:0}}},Gs=(i=0,e=0,t=0)=>new bt.Vector3(i,e,t);function $A(i,e){let t=[],n=new bt.Vector2,r=new bt.Quaternion,s=new bt.Frustum,a=new bt.Matrix4,o=new bt.DataTexture(new Float32Array([1,0,0,1e9]),1,1,bt.RGBAFormat,bt.FloatType);o.needsUpdate=!0;let l=0,c=!1;async function u(v,g){for(let p of v){let y=lo[p.data.id],x=new bt.Scene,_=new bt.PerspectiveCamera,T=p.group.quaternion.clone().multiply(new bt.Quaternion().setFromAxisAngle(Gs(0,1,0),y.turn));if(y.linked){let E=bt.MathUtils.degToRad(y.tilt);T.setFromUnitVectors(Gs(0,Math.cos(E),-Math.sin(E)),lc(p.data.id).normal)}let M=ao(y.mood),A=Gs(.65,.65,1).normalize(),C={...ic(M),uSun:{value:A},uUp:{value:Gs(0,1,0)},uDip:{value:0},uSpace:{value:1},uDemoEnvironment:{value:e.userData.nebulaEnvironment},uDemoEnvRotation:{value:new bt.Matrix3().setFromMatrix4(new bt.Matrix4().makeRotationFromQuaternion(T))},tDepth:{value:o},tFront:{value:o},uInvVP:{value:new bt.Matrix4},uRes:{value:new bt.Vector2(1,1)}},S={world:p,scene:x,camera:_,orientation:T,shared:C,presence:{value:.03},extent:y.ring?1160:880};if(t.push(S),y.ring&&(S.rings=(y.layers||[y.tilt]).map((E,P)=>{let O=new Sd(fx,C,{count:Math.round(y.ring*ZA),tilt:E,speed:1e3+P*190,bands:y.bands}),k=O.mesh.children[0];return k.visible=!1,ax(O.mesh,S.presence),O.mesh.traverse(W=>{W.material&&(W.material.depthTest=!0)}),O.advance(p.data.seed%260+P*37),x.add(O.mesh),O}),S.ring=S.rings[0]),y.sky){S.sim=new sc(i,fx,C,{side:y.sky,magTilt:y.tilt}),Object.assign(S.sim.settings,sc.PRESETS[y.preset||"sky"],{cover:y.cover,vents:14,life:500,spin:.7,strokes:0,blades:0,mag:.66,iris:.12},y.field),S.sim.look.giants.value=0,ax(S.sim.mesh,S.presence),S.sim.uniforms.uSheet.value=110,S.sim.reset(),x.add(S.sim.mesh);for(let E=0;E<12;E++)S.sim.step(30,2),S.sim.uniforms.uSheetA.value=.055,await new Promise(P=>setTimeout(P,0));S.sim.settings.stir=0,S.stepClock=0}if(S.sights=[],S.ring)for(let E=0;E<96;E++){let P=E/96*Math.PI*2;S.sights.push(Gs(Math.cos(P)*8100,Math.sin(P)*8100,0).applyMatrix3(S.ring.frame))}else if(S.sim){let E=S.sim.read();for(let P=0;P<E.length;P+=244)S.sights.push(Gs(E[P],E[P+1],E[P+2]))}await i.compileAsync(x,_),g(),await new Promise(E=>setTimeout(E,0))}}function h(v,g){let p=v.camera;r.copy(v.orientation).invert(),p.position.copy(g.position).sub(v.world.group.position).applyQuaternion(r).multiplyScalar(1/Td),p.quaternion.copy(r).multiply(g.quaternion),p.fov=g.fov,p.aspect=g.aspect,p.near=g.near/Td,p.far=g.far/Td,p.zoom=g.zoom,p.updateProjectionMatrix(),p.updateMatrixWorld(!0);let y=v.shared;return y.uUp.value.copy(p.position).normalize(),y.uDip.value=-Math.sqrt(Math.max(0,1-(fx/p.position.length())**2)),y.uSpace.value=1,y.uInvVP.value.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse).invert(),p}function f(v,g,p,y){if(!t.length)return;let x=y&&!c?Math.min(p,.1):0;l+=x,i.getDrawingBufferSize(n),a.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),s.setFromProjectionMatrix(a);let _=t.filter(M=>M.world.angularDiameter>16&&s.intersectsSphere(new bt.Sphere(M.world.group.position,M.extent)));_.sort((M,A)=>A.world.group.position.distanceToSquared(v.position)-M.world.group.position.distanceToSquared(v.position));let T=i.autoClear;i.autoClear=!1;for(let M of _){let A=h(M,v);M.presence.value=.78*bt.MathUtils.smoothstep(M.world.angularDiameter,16,200);for(let C of M.rings||[])C.advance(x);if(M.sim){if(g===M.world&&x>0){M.stepClock=Math.min(.1,M.stepClock+x);let C=Math.min(3,Math.floor((M.stepClock+1e-7)/dx));C&&(M.sim.step(C,dx*(lo[M.world.data.id].motionRate||8)),M.stepClock=Math.max(0,M.stepClock-C*dx),M.sim.uniforms.uSheetA.value=.055)}M.sim.setView(n.y,A.fov)}i.render(M.scene,A)}i.autoClear=T}function d(v,g,p,y){let x=t.find(M=>M.world===v),_=null,T=-1/0;for(let M of(x==null?void 0:x.sights)||[]){let C=M.clone().multiplyScalar(Td).applyQuaternion(x.orientation).add(v.group.position).sub(g).normalize(),S=C.dot(p);if(S<.22)continue;let E=C.dot(y)*.55-Math.abs(S-.48);E>T&&(T=E,_=C)}return g.clone().addScaledVector(_||p,100)}function m(v){let g=t.find(x=>x.world.data.id===v);if(!(g!=null&&g.sim))return[];let p=g.sim.read(),y=[];for(let x=0;x<p.length;x+=212){let _=Gs(p[x],p[x+1],p[x+2]).project(g.camera);y.push(_.toArray())}return y}return{prepare:u,draw:f,profiles:lo,sight:d,probes:m,diagnostics(){return t.map(v=>{var g,p,y,x;return{world:v.world.data.id,pattern:lo[v.world.data.id].pattern,rings:((g=v.rings)==null?void 0:g.length)||0,giants:((p=v.sim)==null?void 0:p.look.giants.value)||0,blades:((y=v.sim)==null?void 0:y.settings.blades)||0,panes:0,motionRate:lo[v.world.data.id].motionRate||1,particles:v.sim?v.sim.params.side**2:(lo[v.world.data.id].ring||0)*ZA*(((x=v.rings)==null?void 0:x.length)||0)}})},setPaused(v){c=v},get time(){return l},get count(){return t.length}}}var Kt=Nt($t());function KA(i,e){let t=[],n=[],r=[];for(let u of i){t.push(...u.group.position.toArray());let h=u.data.id===ac;n.push(...h?[1,.95,.82]:u.data.warmth>.2?[.88,.82,.72]:[.74,.84,.9]),r.push(h?1:u.data.id==="norvale"?.8:u.data.id==="meander"?.7:.4)}let s=new Kt.BufferGeometry;s.setAttribute("position",new Kt.Float32BufferAttribute(t,3)),s.setAttribute("aColor",new Kt.Float32BufferAttribute(n,3)),s.setAttribute("aStrength",new Kt.Float32BufferAttribute(r,1));let a={uProj:{value:1},uDpr:{value:1}},o=new Kt.ShaderMaterial({uniforms:a,transparent:!0,depthTest:!0,depthWrite:!1,blending:Kt.CustomBlending,blendSrc:Kt.OneFactor,blendDst:Kt.OneMinusSrcAlphaFactor,vertexShader:`attribute vec3 aColor;attribute float aStrength;uniform float uProj,uDpr;varying vec3 vColor;varying float vAlpha;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);float pixels=800.*uProj/max(1.,-p.z);
        vColor=aColor;vAlpha=aStrength*(1.-smoothstep(10.,28.,pixels));
        p.z+=min(550.,max(0.,-p.z*.2));gl_Position=projectionMatrix*p;gl_PointSize=(18.+aStrength*6.)*uDpr;}`,fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){vec2 p=2.*gl_PointCoord-1.;float r=dot(p,p);if(r>1.||vAlpha<.001)discard;
      float a=(exp(-r*35.)+.16*exp(-r*9.))*(1.-smoothstep(.7,1.,r))*vAlpha;gl_FragColor=vec4(vColor*a,a*.65);}`}),l=new Kt.Points(s,o);l.frustumCulled=!1,l.renderOrder=3,e.add(l);let c=new Kt.Vector3;return{update(u,h,f){let d=h/(2*Math.tan(Kt.MathUtils.degToRad(u.fov/2)));a.uProj.value=d,a.uDpr.value=f;for(let m of i){c.copy(m.group.position).applyMatrix4(u.matrixWorldInverse),m.screenDiameter=c.z<0?800*d/-c.z:0;let v=u.position.distanceTo(m.group.position);m.angularDiameter=800*d/Math.max(1,v),m.frameCoverage=800*d/Math.sqrt(Math.max(1,v*v-400*400))/Math.min(h,h*u.aspect);let g=Hr(m);g.reveal.value=Kt.MathUtils.smoothstep(m.frameCoverage,.75,1.12),g.glass.value=Kt.MathUtils.smoothstep(m.angularDiameter,16,200),m.group.visible=v<1600||(m.group.visible?m.screenDiameter>10:m.screenDiameter>12)}}}}var Gr=Nt($t());async function px(i,e,t,n){let r=new Gr.Scene,s=new Gr.PerspectiveCamera(40,1,1,5e3),a=[];if(s.position.set(0,0,1800),s.lookAt(0,0,0),s.updateMatrixWorld(!0),e.traverse(l=>{if(l.isMesh&&(!l.userData.isMeshOverlay||l.visible)){let c=new Gr.Mesh(l.geometry,l.material);c.frustumCulled=!1,r.add(c),a.push(c)}}),await i.compileAsync(r,s,t),!n())return!1;let o=new Gr.WebGLRenderTarget(32,32,{stencilBuffer:!0});for(let l of a)l.visible=!1;try{for(let l=0;l<a.length;l+=4){if(await new Promise(requestAnimationFrame),!n())return!1;for(let u=l;u<Math.min(l+4,a.length);u++)a[u].visible=!0;let c=i.getRenderTarget();try{i.setRenderTarget(o),i.render(r,s)}finally{i.setRenderTarget(c)}for(let u=l;u<Math.min(l+4,a.length);u++)a[u].visible=!1}return!0}finally{o.dispose(),r.clear()}}var wt=Nt($t());function JA(i){let t=new Float32Array(10800),n=new Float32Array(3600*2),r=89711,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/4294967296;for(let d=0;d<n.length;d++)n[d]=s();let a=new wt.InstancedBufferGeometry;a.setAttribute("position",new wt.Float32BufferAttribute([-1,0,0,1,0,0,-1,1,0,1,1,0],3)),a.setIndex([0,1,2,2,1,3]),a.setAttribute("aPoint",new wt.InstancedBufferAttribute(t,3)),a.setAttribute("aSeed",new wt.InstancedBufferAttribute(n,2)),a.instanceCount=3600;let o={uPreviousVP:{value:new wt.Matrix4},uViewport:{value:new wt.Vector2(1280,820)},uExposure:{value:1},uStrength:{value:0}},l=new wt.ShaderMaterial({uniforms:o,transparent:!0,depthWrite:!1,depthTest:!0,blending:wt.CustomBlending,blendSrc:wt.OneFactor,blendDst:wt.OneFactor,vertexShader:`attribute vec3 aPoint;attribute vec2 aSeed;uniform mat4 uPreviousVP;uniform vec2 uViewport;uniform float uExposure,uStrength;
      varying vec2 vUv;varying vec3 vColor;varying float vAlpha;
      void main(){vec4 view=viewMatrix*vec4(aPoint,1.),clip=projectionMatrix*view,old=uPreviousVP*vec4(aPoint,1.);
        vec2 head=clip.xy/max(.01,clip.w),prior=old.xy/max(.01,old.w),motion=(head-prior)*uViewport*.5;
        float speed=length(motion),extent=clamp(speed*uExposure,1.4,mix(35.,120.,uStrength));
        vec2 along=speed>.0001?motion/speed:vec2(0.,1.),across=vec2(-along.y,along.x);
        vec2 offset=across*position.x*(.65+.65*aSeed.x)-along*position.y*extent;
        clip.xy+=2.*offset/uViewport*clip.w;gl_Position=clip;
        vUv=position.xy;vColor=mix(vec3(.45,.69,.8),vec3(.93,.87,.73),aSeed.y);
        vAlpha=uStrength*(.17+.56*aSeed.x)*smoothstep(80.,600.,-view.z)*(1.-smoothstep(14000.,42000.,-view.z));
        if(view.z> -1.||old.w<1.){gl_Position=vec4(2.,2.,2.,1.);vAlpha=0.;}}`,fragmentShader:"varying vec2 vUv;varying vec3 vColor;varying float vAlpha;void main(){float a=exp(-vUv.x*vUv.x*3.5)*pow(1.-vUv.y,1.5)*vAlpha;if(a<.001)discard;gl_FragColor=vec4(vColor*a,a);}"}),c=new wt.Mesh(a,l);c.frustumCulled=!1,c.visible=!1,c.renderOrder=4,i.add(c);let u=new wt.Matrix4,h=new wt.Vector3,f=0;return{get strength(){return o.uStrength.value},get speed(){return f},begin(d,m){let v=d.position.clone(),g=m.clone().sub(v),p=g.length();g.normalize();let y=new wt.Vector3().crossVectors(g,d.up).normalize(),x=new wt.Vector3().crossVectors(y,g).normalize();for(let _=0;_<3600;_++){let T=s(),M=s()*Math.PI*2,A=(500+Math.pow(s(),.55)*8500)*(.45+.55*(1-T));v.clone().addScaledVector(g,250+T*Math.max(100,p-1550)).addScaledVector(y,Math.cos(M)*A).addScaledVector(x,Math.sin(M)*A).toArray(t,_*3)}a.attributes.aPoint.needsUpdate=!0,u.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),h.copy(d.position),f=0},update(d,m,v,g){if(!(v!=null&&v.cinematic)){c.visible=!1,o.uStrength.value=0;return}if(!g)return;let p=h.distanceTo(d.position)/Math.max(.001,m);f=wt.MathUtils.lerp(f,p,1-Math.exp(-m*9));let y=v.progress,x=wt.MathUtils.smoothstep(y,.025,.14)*(1-wt.MathUtils.smoothstep(y,.72,.88));o.uStrength.value=.85*x*wt.MathUtils.smoothstep(f,1400,22e3),c.visible=o.uStrength.value>.002,o.uPreviousVP.value.copy(u),o.uViewport.value.set(innerWidth,innerHeight),o.uExposure.value=.065/Math.max(.008,m),u.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),h.copy(d.position)}}}var gi=document.querySelector("#sky"),ji=document.querySelector("#status"),GV=document.querySelector("#nav"),br=document.querySelector("#tip"),qV=document.querySelector("#hint"),nR=document.querySelector("#wire"),iR=document.querySelector("#water"),Zi=!0,ri=!1,nn=new ke.WebGLRenderer({canvas:gi,antialias:!0,stencil:!0,alpha:!1,powerPreference:"high-performance"});nn.outputColorSpace=ke.SRGBColorSpace;var si=new ke.Scene;si.background=new ke.Color("#12202e");var qr=$A(nn,si);hx(nn,si);var qs=JA(si);nn.info.autoReset=!1;var Ce=new ke.PerspectiveCamera(34,1,1,2e6),Rn=400,Ii=(i=0,e=0,t=0)=>new ke.Vector3(i,e,t),WV=Ii(0,0,1),Jt=[],hc=new ke.Raycaster,Wt=Ii(),Ut,lt="space",Ue=null,zt=null,Je=null,cc=null,uc=null,dt=null,XV=null,xx=0,rR=1,ot=null,Yi=null,Xr="",mx=0,uo=null,Ad="",Cd="",Sx=0,YV=matchMedia("(prefers-reduced-motion: reduce)").matches,vi=!0,fc=0,Pd=0,ft=null,Rd=null,Ft=null,Er="none",co=new ke.Quaternion,jV=Ii(0,1,0),yx=new URLSearchParams(location.search).has("diagnostics");yx&&(window.__fragmentMotionProbes=i=>qr.probes(i));function pn(){xx||(xx=requestAnimationFrame($V))}function ZV(i){if(i)for(let e of Jt){if(dt&&e===Ue&&!dt.cinematic)continue;let t=e.spinRate*i;if(e.spinAngle+=t,co.setFromAxisAngle(e.spinAxis,t),e.group.quaternion.premultiply(co).normalize(),e.group.updateMatrixWorld(!0),e===Ue&&lt==="place"){let n=e.group.position;Ce.position.sub(n).applyQuaternion(co).add(n),Wt.sub(n).applyQuaternion(co).add(n),Ce.up.applyQuaternion(co),Ce.quaternion.premultiply(co).normalize(),Ce.updateMatrixWorld(!0),Ut&&(Ut.target.copy(Wt),Ut._quat.setFromUnitVectors(Ce.up,jV),Ut._quatInverse.copy(Ut._quat).invert())}}}function $V(i){var r;xx=0;let e=performance.now(),t=fc?Math.min((i-fc)/1e3,.1):0;if(fc=i,ZV(vi&&!document.hidden?t:0),(Ft==null?void 0:Ft.phase)==="hold"&&vi&&!document.hidden&&(Ft.elapsed+=t,Ft.elapsed>=1.6&&(Ft.warmed||Ft.elapsed>12)&&(Ft.phase="flight",Er="flight",document.documentElement.dataset.intro=Er,Wr(Ft.world,{cinematic:!0,opening:!0}))),dt&&KV(i,t),zt==="surface"&&Je&&!dt){let s=Ue.group.worldToLocal(Wt.clone()).normalize(),a=s.clone().multiplyScalar(Rn+Ue.heightAt(s)),o=Ue.group.localToWorld(a.clone()),l=o.clone().sub(Wt);Ut&&l.lengthSq()>.001&&(Wt.copy(o),Ut.target.copy(o),Ce.position.add(l)),(!Yi||a.distanceTo(Yi)>10)&&(Yi=a.clone(),xi())}if(zt==="sky"&&Je&&!dt){let s=Ue.group.worldToLocal(Ce.position.clone()).normalize();Yi=s.clone().multiplyScalar(Rn+Ue.heightAt(s))}if(lt==="place"&&(Ue!=null&&Ue.heightAt)){let s=Ue.group.worldToLocal(Ce.position.clone()),a=s.length(),o=Rn+Ue.heightAt(s.normalize())+4;a<o&&(Ce.position.copy(Ue.group.localToWorld(s.multiplyScalar(o))),Ce.lookAt(Wt))}Ce.updateMatrixWorld(!0),Rd==null||Rd.update(Ce,innerHeight,nn.getPixelRatio()),ot&&ot.setDetail(!!Ue&&(!Zi||lt==="place"||Ue.angularDiameter>(ot.detailActive?180:260))),uR(),lR(),Ld();let n={native:0,overview:0,display:0};if(ri){let s=innerHeight/(2*Math.tan(ke.MathUtils.degToRad(Ce.fov/2)));for(let a of Jt){let o=a.group.worldToLocal(Ce.position.clone());a.group.traverse(l=>{if(!l.userData.isMeshOverlay)return;let c=l.geometry.boundingSphere,u=c?Math.max(1,o.distanceTo(c.center)-c.radius):1;l.visible=!(lt==="place"&&l.material.uniforms.uOrbitModel.value>.5)&&l.userData.cellSize*s/u>.65})}if(yx)for(let a of Jt)a.group.traverseVisible(o=>{o.userData.isMeshOverlay&&n[o.userData.meshSource]++})}if(qs.update(Ce,t,dt,vi&&!document.hidden),ft==null||ft.update(nn,Ce,vi&&!document.hidden?t:0),nn.info.reset(),nn.render(si,Ce),qr.draw(Ce,Ue,t,vi&&!document.hidden),yx&&(window.__spaceDiagnostics={mode:lt,world:Ue==null?void 0:Ue.data.id,place:zt,calls:nn.info.render.calls,triangles:nn.info.render.triangles,points:nn.info.render.points,geometries:nn.info.memory.geometries,textures:nn.info.memory.textures,programs:nn.info.programs.length,dpr:nn.getPixelRatio(),glassWorlds:qr.count,glassTime:qr.time,fragmentPatterns:qr.diagnostics(),camera:Ce.position.toArray(),up:Ce.up.toArray(),target:Wt.toArray(),intro:Er,introElapsed:(Ft==null?void 0:Ft.elapsed)||0,flightProgress:(dt==null?void 0:dt.progress)||0,water:Zi,mesh:ri,meshLayers:n,nativeCellPixels:Sx,trail:qs.strength,travelSpeed:qs.speed,fullDetail:(ot==null?void 0:ot.detailActive)||!1,lod:ot==null?void 0:ot.diagnostics(),native:(r=Je==null?void 0:Je.diagnostics)==null?void 0:r.call(Je),postPasses:0,cpuMs:performance.now()-e},window.__spaceDiagnostics.nebula={fragments:(ft==null?void 0:ft.count)||0,dust:(ft==null?void 0:ft.dustCount)||0,volume:(ft==null?void 0:ft.volumeCount)||0,sorts:(ft==null?void 0:ft.sorts)||0,time:(ft==null?void 0:ft.time)||0,probes:(ft==null?void 0:ft.probes(Ce))||[],links:(ft==null?void 0:ft.links)||[],lighting:ft==null?void 0:ft.lighting.diagnostics()},window.__spaceDiagnostics.planets=Jt.map(s=>{var a,o;return{id:s.data.id,position:s.group.position.toArray(),screen:s.group.position.clone().project(Ce).toArray(),diameter:s.screenDiameter,coverage:s.frameCoverage,reveal:(a=s.appearance)==null?void 0:a.reveal.value,glassReveal:(o=s.appearance)==null?void 0:o.glass.value,bodyVisible:s.group.visible,quaternion:s.group.quaternion.toArray(),spinAngle:s.spinAngle,spinRate:s.spinRate,spinAxis:s.spinAxis.toArray(),overview:s.overviewInfo}}),Ue&&(window.__spaceDiagnostics.localCamera=Ue.group.worldToLocal(Ce.position.clone()).toArray()),window.__THREE_GAME_DIAGNOSTICS__={renderer:window.__spaceDiagnostics},(Ft==null?void 0:Ft.phase)==="flight")){let s=window.__arrivalFrames??(window.__arrivalFrames=[]);s.length<2400&&s.push({time:i,wall:e,dt:t,cpu:window.__spaceDiagnostics.cpuMs,progress:(dt==null?void 0:dt.progress)||1,trail:qs.strength})}dt&&!document.hidden?pn():vi&&!document.hidden&&(clearTimeout(Pd),Pd=setTimeout(pn,Math.max(0,25-(performance.now()-e))))}function sR(){let i=innerWidth,e=innerHeight;nn.setPixelRatio(Math.min(devicePixelRatio,1.75,Math.sqrt(3e6/(i*e)))),nn.setSize(i,e,!1),Ce.aspect=i/e,Ce.updateProjectionMatrix();let t=_x();if(rR=t.position.length(),lt==="space"&&!dt&&(Ce.position.copy(t.position),Ce.up.copy(t.up),Wt.copy(t.target),Ce.lookAt(Wt),bx()),dt!=null&&dt.cinematic){let n=dt.ms-dt.elapsed,r=Ue?aR(Ue):_x(),s=dt.center.clone();ho(r,s,{cinematic:!0,ms:Math.max(1200,n)}),qs.begin(Ce,Ue?r.target:r.position)}pn()}function _x(){let i=Ce.aspect<.86,e=i?Ii(1,0,0):Ii(0,1,0),t=Math.tan(ke.MathUtils.degToRad(Ce.fov/2)),n=3e3;for(let s of Jt){let a=s.group.position,o=i?a.y:a.x,l=i?a.x:a.y,c=Rn*1.42;n=Math.max(n,a.z+(Math.abs(o)+c)/(t*Ce.aspect),a.z+(Math.abs(l)+c)/t)}let r=[];for(let s of(ft==null?void 0:ft.samples)||[]){let a=i?s.y:s.x,o=i?s.x:s.y;r.push(Math.max(s.z+(Math.abs(a)+400*12)/(t*Ce.aspect),s.z+(Math.abs(o)+400*12)/t))}return r.sort((s,a)=>s-a),r.length&&(n=Math.max(n,r[Math.floor(r.length*.95)])),{position:Ii(0,0,n*1.06),target:Ii(),up:e}}function bx(){Ut==null||Ut.dispose(),Ut=new dd(Ce,gi),Ut.target.copy(Wt),Ut.enablePan=zt==="surface",Ut.enableDamping=!1,Ut.rotateSpeed=lt==="place"?.48:.65,Ut.zoomSpeed=.88,Ut.minDistance=lt==="space"?8:lt==="world"?Rn+20:8,Ut.maxDistance=lt==="space"?rR*2.5:lt==="world"?Math.max(Rn*14,Ce.position.distanceTo(Wt)*1.01):200,Ut.maxPolarAngle=lt==="place"&&zt!=="sky"?Math.PI*.44:Math.PI-.004,Ut.addEventListener("change",()=>{Wt.copy(Ut.target),pn(),QV()}),Ut.update()}function QA(i,e,t){let n=new ke.Quaternion().setFromUnitVectors(i,e);return i.clone().applyQuaternion(new ke.Quaternion().slerp(n,t)).normalize()}function ho(i,e,{cinematic:t=!1,ms:n=t?9e3:YV?1:850}={}){Ut==null||Ut.dispose(),Ut=null;let r=Ce.position.clone().sub(e),s=i.position.clone().sub(e);dt={from:r.normalize(),to:s.clone().normalize(),fromR:Ce.position.distanceTo(e),toR:s.length(),fromTarget:Wt.clone(),dest:i,up:Ce.up.clone(),center:e.clone(),start:performance.now(),ms:n,cinematic:t,elapsed:0,progress:0},pn()}function KV(i,e){let t=dt;t.cinematic&&!document.hidden&&(t.elapsed+=e*1e3);let n=Math.max(0,Math.min(1,(t.cinematic?t.elapsed:i-t.start)/t.ms)),r=t.cinematic?n*n*n*(n*(n*6-15)+10):n*n*(3-2*n);t.progress=n;let s=Math.exp(ke.MathUtils.lerp(Math.log(t.fromR),Math.log(t.toR),r));Ce.position.copy(QA(t.from,t.to,r)).multiplyScalar(s).add(t.center);let a=Math.min(1,n/.28),o=t.cinematic?a*a*a*(a*(a*6-15)+10):r;Wt.lerpVectors(t.fromTarget,t.dest.target,o),Ce.up.copy(QA(t.up,t.dest.up,r)),Ce.lookAt(Wt),n>=1&&(Ce.position.copy(t.dest.position),Wt.copy(t.dest.target),Ce.up.copy(t.dest.up),Ce.lookAt(Wt),dt=null,Ex(),bx(),t.cinematic&&Ft&&(Ft=null,Er="complete",document.documentElement.dataset.intro=Er),xi())}function eR(){let i=Jt.find(e=>e.data.id===ac)||Jt[0];Ft={phase:"hold",elapsed:0,world:i,warmed:!1},Er="hold",document.documentElement.dataset.intro=Er,po(i),xi()}function Ws(){return!Ft&&!(dt!=null&&dt.cinematic)?!1:(Ft&&(Ft=null,Er="cancelled",document.documentElement.dataset.intro=Er),dt!=null&&dt.cinematic&&(dt=null,Ex(),lt="space",Ue=null,zt=null),po(null),xi(),bx(),pn(),!0)}function Ex(){cc&&(cc.world.overviewInk.uniforms.uOverview.value=1,cc.patch.dispose(),cc=null)}function fo(i=!1){ot==null||ot.setNativePriority(!1),Cd="",Ex(),uc==null||uc.abort(),uc=null,Yi=null,Xr="",i&&Je?cc={world:Ue,patch:Je}:Ue&&(Ue.overviewInk.uniforms.uOverview.value=1,Je==null||Je.dispose()),Je=null,ji.textContent=""}function xi(){br.hidden=!0,qV.hidden=!0,GV.hidden=!!Ft,iR.setAttribute("aria-pressed",String(Zi)),nR.setAttribute("aria-pressed",String(ri)),document.documentElement.dataset.mode=lt,document.documentElement.dataset.world=(Ue==null?void 0:Ue.data.id)||"",document.documentElement.dataset.place=zt||"",document.documentElement.dataset.patch=zt==="surface"||zt==="sky"?Xr:Je?"ready":"";let i=new URL(location.href);if(Ue?i.searchParams.set("planet",Ue.data.id):i.searchParams.delete("planet"),zt?i.searchParams.set("view",zt):i.searchParams.delete("view"),zt==="surface"&&Yi){let e=Yi.clone().normalize();i.searchParams.set("lat",ke.MathUtils.radToDeg(Math.asin(e.y)).toFixed(4)),i.searchParams.set("lon",ke.MathUtils.radToDeg(Math.atan2(e.z,e.x)).toFixed(4))}else i.searchParams.delete("lat"),i.searchParams.delete("lon");history.replaceState(null,"",i)}function Dd(){lt==="space"&&(XV={position:Ce.position.clone(),target:Wt.clone(),up:Ce.up.clone(),aspect:Ce.aspect})}function Wr(i,{cinematic:e=i!==Ue,opening:t=!1}={}){t||Ws(),Dd(),fo(!0),lt="world",Ue=i,zt=null,xi(),po(i),ho(aR(i),i.group.position,{cinematic:e}),e&&qs.begin(Ce,i.group.position)}function aR(i){let e=i.group.position,t=Ce.position.clone().sub(e).normalize(),n=new ke.Vector3(0,1,0);Math.abs(t.dot(n))>.95&&n.set(0,0,1);let r=qr.profiles[i.data.id],s=r!=null&&r.ring?r.narrow?1.65:1.95:r!=null&&r.sky?1.5:1.35,a=Rn*Math.max(3.85,3.3/Ce.aspect)*s;return{position:e.clone().addScaledVector(t,a),target:e.clone(),up:n}}function gx(){let i=Ue,e=Ws();if(lt==="space"&&!e)return;let t=i?i.group.position.clone():Wt.clone();fo(!0),po(null),lt="space",Ue=null,zt=null;let n=_x();xi(),ho(n,t,{cinematic:!0}),qs.begin(Ce,n.position)}function oR(i,e){let t=i.data.landmarks[e],n=new ke.Vector3(...t.dir),r=Ii(n.z,0,-n.x).normalize(),s=n.clone().cross(r).normalize(),a=ke.MathUtils.degToRad(t.heading),o=ke.MathUtils.degToRad(t.tilt),l=s.multiplyScalar(-Math.cos(a)).addScaledVector(r,-Math.sin(a)),c=n.clone().multiplyScalar(Rn+t.ground),u=c.clone().addScaledVector(l,t.size*Math.sin(o)).addScaledVector(n,t.size*Math.cos(o)),h=c.clone().addScaledVector(n,e==="ridge"?16:4);return{dir:n,ground:c,eye:u,aim:h}}function JV(i,e,t){let n=Jt.find(g=>g.data.id===i),r=Jt.find(g=>g.data.id===t),{dir:s,eye:a,aim:o}=oR(n,e),l=o.clone().sub(a).normalize(),c=l.clone().cross(s).normalize(),u=c.clone().cross(l).normalize(),h=l.clone().addScaledVector(c,.23).addScaledVector(u,.16).normalize(),f=r.group.position.clone().sub(n.group.position),d=a.dot(h),m=-d+Math.sqrt(d*d+f.lengthSq()-a.lengthSq()),v=a.clone().addScaledVector(h,m).normalize().applyQuaternion(n.group.quaternion);n.group.quaternion.premultiply(new ke.Quaternion().setFromUnitVectors(v,f.normalize()))}function po(i){if(ot&&ot.world===i)return;let e=ot;ot=null,e&&(e.setDetail(!1),e.priming?e.priming.finally(()=>e.dispose(!1)):e.dispose(!1)),document.documentElement.dataset.orbit=i?"loading":"",Ad=i?"Loading orbit\u2026":"",i&&lt==="world"&&(ji.textContent=Ad),i&&(ot=OA(i,pn,(t,n,r,s)=>{(ot==null?void 0:ot.world)===i&&(document.documentElement.dataset.orbit=t,t==="error"&&console.error(s),t==="ready"&&(Ft==null?void 0:Ft.world)===i&&(Ft.warmed=!0,pn()),Ad=t==="loading"?"Loading orbit \xB7 "+n+"/"+r:t==="preparing"?"Preparing terrain\u2026":t==="error"?"Orbit could not load. Select the planet again to retry.":"",Ld(),pn())},(t,n)=>px(nn,t,si,()=>n()&&(ot==null?void 0:ot.world)===i)))}function Mx(i){if(Je!=null&&Je.update)return;Xr="loading",Cd="Loading native terrain\u2026";let e=NA(i,ot,pn,(t,n,r)=>{Ue!==i||Je!==e||(Xr=t,document.documentElement.dataset.nativeTiles=String(n),Cd=t==="ready"?"":t==="error"?"Terrain could not load. Click the surface to retry.":"Loading native terrain \xB7 "+n+"/"+r,(t==="ready"||t==="error")&&(ot==null||ot.setNativePriority(!1)),(zt==="surface"||zt==="sky")&&(document.documentElement.dataset.patch=t),Ld(),pn())},(t,n)=>px(nn,t,si,n));Je=e}function Ld(){var e;if(!Ue||!(lt==="world"||zt==="surface"||zt==="sky"))return;let i=lt==="world"?Ad:Cd;if(!Zi&&!(ot!=null&&ot.ready)&&(i="Loading lake-bed terrain\u2026"),ri){let t=(e=Je==null?void 0:Je.diagnostics)==null?void 0:e.call(Je);Xr==="error"&&(Je!=null&&Je.update)?i="Mesh could not load. Click the surface to retry.":Je!=null&&Je.update&&!(t!=null&&t.ready)?i=t!=null&&t.wanted?"Loading 0.3 m mesh \xB7 "+t.loaded+"/"+t.wanted:"Loading 0.3 m mesh\u2026":i=!(t!=null&&t.resident)||Sx<1.5?"Zoom in to inspect the 0.3 m mesh":""}ji.textContent!==i&&(ji.textContent=i)}function lR(i=!1){if(!Ue||!ot||dt!=null&&dt.cinematic||!(lt==="world"||zt==="surface"||zt==="sky")){ot==null||ot.setNativePriority(!1);return}let e=Ue,t=e.group.worldToLocal(Ce.position.clone()),n=t.clone().normalize(),r=n.clone().multiplyScalar(Rn+e.heightAt(n)),s=innerHeight/(2*Math.tan(ke.MathUtils.degToRad(Ce.fov/2))),a=ke.MathUtils.clamp(s*.45,220,480),o=t.length()-r.length();Sx=s*.3/Math.max(1,o);let l=ri&&o<a+360,c=l?Math.max(a,o+76.8):a;if(lt==="world"){if(l||o<a+60)Mx(e);else if(o>a+140&&(Je!=null&&Je.update)){fo();return}}if(!(Je!=null&&Je.update)){ot.setNativePriority(!1);return}let u=e.group.worldToLocal(Wt.clone()).sub(t).normalize(),h=new ke.Matrix4().multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse).multiply(e.group.matrixWorld);ot.setNativePriority(ri&&Xr!=="ready"&&Xr!=="error"),Je.update(lt==="world"?r:Yi||r,i,{eye:t,direction:u,range:c,vp:h})}function cR(i,e,t){let n=gi.getBoundingClientRect();hc.setFromCamera(new ke.Vector2((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),Ce);let r=hc.ray.clone().applyMatrix4(i.group.matrixWorld.clone().invert()),s=new ke.Vector3,a=Rn+135,o=-r.origin.dot(r.direction),l=a*a-r.origin.lengthSq()+o*o;if(l<0)return null;let c=Math.max(0,o-Math.sqrt(l)),u=o+Math.sqrt(l);if(u<c)return null;let h=d=>(r.at(d,s),s.length()-Rn-i.heightAt(s.normalize())),f=c;for(let d=c;d<=u+6;d+=6){if(h(Math.min(d,u))<=0){d=Math.min(d,u);for(let m=0;m<9;m++){let v=(f+d)/2;h(v)>0?f=v:d=v}return r.at(d,s).normalize()}f=d}return null}function QV(){if(dt||mx||!Ue)return;let i=Ue,e=lt;mx=requestAnimationFrame(()=>{if(mx=0,!(dt||i!==Ue||e!==lt))if(lt==="world"){let t=i.group.worldToLocal(Ce.position.clone());if(t.length()-Rn-i.heightAt(t.normalize())<125){let r=uo&&cR(i,uo.x,uo.y);Id(i,r||t)}}else lt==="place"&&Ce.position.distanceTo(Wt)>187&&Wr(i)})}function Id(i,e){if(!e)return;Dd();let t=Ue===i&&zt==="surface",n=Ue===i&&lt==="world"&&(Je==null?void 0:Je.update);t||(n||fo(),lt="place",Ue=i,zt="surface",po(i));let r=e.clone().multiplyScalar(Rn+i.heightAt(e));Yi=r.clone();let s=e.clone().applyQuaternion(i.group.quaternion),a=i.group.localToWorld(r.clone()),o=Ce.position.clone().sub(a);o.addScaledVector(s,-o.dot(s)),o.lengthSq()<.01&&(o=Ce.up.clone().projectOnPlane(s),o.lengthSq()<.01&&(o=Ii(1,0,0).projectOnPlane(s))),o.normalize(),t||Mx(i),Je.update(r,!0),xi(),ho({position:a.clone().addScaledVector(s,45).addScaledVector(o,62),target:a,up:s},i.group.position)}async function eG(i,e){if(Ws(),e==="sky"&&ft){tG(i);return}let t=e==="sky"?"ridge":e;if(!i.data.landmarks[t])return;Dd(),fo(),Ue=i,lt="place",zt=e;let n=new AbortController;uc=n,ji.textContent="Loading "+e+"\u2026",xi();let{dir:r,ground:s,eye:a,aim:o}=oR(i,t),l=f=>f.applyQuaternion(i.group.quaternion).add(i.group.position),c=r.clone().applyQuaternion(i.group.quaternion),u=l(a),h=l(o);if(e==="sky"){let f=h.clone().sub(u).normalize();u=l(s.clone()).addScaledVector(c,16),h=(ft==null?void 0:ft.sight(u,c,f))||qr.sight(i,u,c,f)}ho({position:u,target:h,up:c},i.group.position);try{let f=await LA(i,t,n.signal);if(n.signal.aborted){f.dispose();return}Je=f,i.group.add(Je.group),i.overviewInk.uniforms.uOverview.value=2,i.overviewInk.uniforms.uDetailPoint.value.copy(s),ji.textContent="",xi(),pn()}catch{n.signal.aborted||(ji.textContent="Terrain could not load. Select the landmark to retry.")}}function tG(i){Dd(),fo(),Ue=i,lt="place",zt="sky",Xr="loading",po(i);let e=ft.skyAnchor(i),t=e.clone().multiplyScalar(Rn+i.heightAt(e));Yi=t.clone();let n=e.clone().applyQuaternion(i.group.quaternion),r=i.group.localToWorld(t.clone()).addScaledVector(n,16),s=Ce.position.clone().sub(r).normalize(),a=ft.sight(r,n,s)||r.clone().addScaledVector(n,100);Mx(i),Je.update(t,!0),xi(),ho({position:r,target:a,up:n},i.group.position)}function nG(){let i=21733,e=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296,t=[],n=[];for(let s=0;s<4200;s++){let a=e()*2-1,o=e()*Math.PI*2,l=Math.sqrt(1-a*a),c=(54e3+1e4*e())*12;t.push(l*Math.cos(o)*c,a*c,l*Math.sin(o)*c);let u=.16+e()**3*.49;n.push(u*.82,u*.93,u)}let r=new ke.BufferGeometry;r.setAttribute("position",new ke.Float32BufferAttribute(t,3)),r.setAttribute("color",new ke.Float32BufferAttribute(n,3)),si.add(new ke.Points(r,new ke.PointsMaterial({size:1.4,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1,transparent:!0,opacity:.74})))}function vx(i,e,t=!1){let n=gi.getBoundingClientRect();hc.setFromCamera(new ke.Vector2((i-n.left)/n.width*2-1,1-(e-n.top)/n.height*2),Ce);let r=null,s=1/0;for(let a of Jt){let o=hc.ray.intersectSphere(new ke.Sphere(a.group.position,Rn*1.035),Ii());if(o){let l=o.distanceTo(Ce.position);l<s&&(r=a,s=l)}}if(!r&&lt==="space")for(let a of Jt){let o=a.group.position.clone().project(Ce);if(o.z<-1||o.z>1)continue;let l=(o.x+1)*n.width/2+n.left-i,c=(1-o.y)*n.height/2+n.top-e,u=a.group.position.distanceTo(Ce.position);Math.hypot(l,c)<12&&u<s&&(r=a,s=u)}if(t&&lt==="place"&&r&&r!==Ue&&Je){let a=hc.intersectObjects(Je.group.children,zt==="surface")[0];if(a&&a.distance<s)return null}return r}var tR="";function uR(i=!1){let e=[Zi,Ue==null?void 0:Ue.data.id,ot==null?void 0:ot.ready].join(":");if(!(!i&&e===tR)){tR=e;for(let t of Jt){let n=Zi||t!==Ue||!(ot!=null&&ot.ready);t.waterVisible=n,Hr(t).water.value=Number(n),t.group.traverse(r=>{r.userData.isWater&&(r.visible=n)})}}}function iG(){document.querySelector("#all").onclick=gx;function i(){for(let s of Jt)s.meshVisible=ri,s.group.traverse(a=>{a.userData.isMeshOverlay&&(a.visible=ri),a.userData.isTerrain&&(a.material.polygonOffset=ri&&!!a.material.userData.meshOverlay)});uR(!0),xi(),pn()}iR.onclick=()=>{Zi=!Zi,i()},nR.onclick=()=>{if(ri=!ri,i(),ri&&(lt==="world"||lt==="space")){Ws();let s=Ue||Jt.find(o=>o.data.id===ac)||Jt[0],a=s.group.worldToLocal(Ce.position.clone()).normalize();if(Zi&&s.heightAt(a)<2){let o=Object.values(s.data.landmarks).filter(l=>l.dir&&l.ground>2).sort((l,c)=>new ke.Vector3(...c.dir).dot(a)-new ke.Vector3(...l.dir).dot(a));o.length&&(a=new ke.Vector3(...o[0].dir))}Id(s,a)}lR(!0),Ld()};let e=null,t=!1,n=new Set;gi.addEventListener("pointerdown",()=>Ws(),{capture:!0}),gi.addEventListener("pointerdown",s=>{uo=null,n.add(s.pointerId),n.size>1&&(t=!0),e={x:s.clientX,y:s.clientY},br.hidden=!0}),gi.addEventListener("pointermove",s=>{if(s.buttons||s.pointerType==="touch"||dt){br.hidden=!0;return}let a=vx(s.clientX,s.clientY);gi.style.cursor=a&&a!==Ue?"pointer":"grab",br.hidden=!a||a===Ue,br.hidden||(br.textContent=a.data.name,br.style.left=Math.min(innerWidth-105,s.clientX+13)+"px",br.style.top=Math.max(4,s.clientY-26)+"px")}),gi.addEventListener("pointerleave",()=>{br.hidden=!0});function r(s,a){if(n.delete(s.pointerId),!a&&!t&&e&&Math.hypot(s.clientX-e.x,s.clientY-e.y)<5){let o=vx(s.clientX,s.clientY,!0);o&&o!==Ue?Wr(o):Ue&&(lt==="world"||lt==="place")&&Id(Ue,cR(Ue,s.clientX,s.clientY))}n.size||(e=null,t=!1)}gi.addEventListener("pointerup",s=>r(s,!1)),gi.addEventListener("pointercancel",s=>r(s,!0)),gi.addEventListener("wheel",s=>{if(Ws()){uo={x:s.clientX,y:s.clientY};return}if(!dt){if(uo={x:s.clientX,y:s.clientY},lt==="space"&&s.deltaY<0){let o=vx(s.clientX,s.clientY);o&&(s.preventDefault(),s.stopImmediatePropagation(),Wr(o))}lt==="place"&&s.deltaY>0&&Ce.position.distanceTo(Wt)>165?(s.preventDefault(),s.stopImmediatePropagation(),Wr(Ue)):lt==="world"&&s.deltaY>0&&Ce.position.distanceTo(Wt)>Rn*13&&(s.preventDefault(),s.stopImmediatePropagation(),gx())}},{passive:!1,capture:!0}),addEventListener("keydown",s=>{if(s.key==="Escape"){if(Ws())return;lt==="place"?Wr(Ue):gx()}})}async function rG(){let i=await fetch("./worlds.json");if(!i.ok)throw Error("Worlds are unavailable.");let e=await i.json();nG();for(let t of e){let n=new ke.Group;n.position.copy(ux(t.id)),n.quaternion.setFromUnitVectors(new ke.Vector3(...t.orientation).normalize(),WV),si.add(n);let r={data:t,group:n,waterVisible:Zi,meshVisible:ri,spinAngle:0,spinRate:ke.MathUtils.degToRad(1.1+Jt.length%5*.17),spinAxis:lc(t.id).normal};Jt.push(r);let s=document.createElement("button");s.textContent=t.name,s.onclick=()=>Wr(r),document.querySelector("#list").append(s)}JV("fell","ridge","shoals"),ft=jA(Jt,si),Rd=KA(Jt,si),sR(),await Promise.all(Jt.map(DA)),si.updateMatrixWorld(!0),pn(),await nn.compileAsync(si,Ce),ji.textContent="Gathering glass\u2026",await qr.prepare(Jt,pn),iG(),ji.textContent="",document.documentElement.dataset.ready="true",sG(),pn()}function sG(){var n;if(((n=performance.getEntriesByType("navigation")[0])==null?void 0:n.type)==="reload"){let r=new URL(location.href);for(let s of["planet","view","lat","lon","intro"])r.searchParams.delete(s);history.replaceState(null,"",r),eR();return}let i=new URLSearchParams(location.search),e=Jt.find(r=>r.data.id===i.get("planet")),t=i.get("view");if(e)if(t==="surface"&&i.has("lat")&&i.has("lon")&&Number.isFinite(+i.get("lat"))&&Number.isFinite(+i.get("lon"))){let r=ke.MathUtils.degToRad(ke.MathUtils.clamp(+i.get("lat"),-90,90)),s=ke.MathUtils.degToRad(+i.get("lon"));Id(e,Ii(Math.cos(r)*Math.cos(s),Math.sin(r),Math.cos(r)*Math.sin(s)))}else t&&(t==="sky"||e.data.landmarks[t])?eG(e,t):Wr(e,{cinematic:!1});else i.get("intro")==="0"?xi():eR()}addEventListener("resize",sR);function hR(){let i=document.querySelector("#motion");i.setAttribute("aria-pressed",String(vi)),i.setAttribute("aria-label",vi?"Pause motion":"Play motion"),i.title=vi?"Pause motion":"Play motion",document.documentElement.dataset.motion=vi?"running":"paused"}hR();document.querySelector("#motion").onclick=()=>{vi=!vi,hR(),clearTimeout(Pd),fc=0,pn()};document.addEventListener("visibilitychange",()=>{clearTimeout(Pd),fc=0,document.hidden||pn()});rG().catch(i=>{var e;console.error(i),ji.textContent="Space could not load. Refresh to retry.",(e=window.galleryDemo)==null||e.fail(i)});
/*! Bundled license information:

three/build/three.cjs:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
