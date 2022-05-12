function Zo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const mv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",yv=Zo(mv),vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=Zo(vv);function Pd(t){return!!t||t===""}function ci(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?Iv(s):ci(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(xe(t))return t}}const _v=/;(?![^(]*\))/g,Ev=/:(.+)/;function Iv(t){const e={};return t.split(_v).forEach(n=>{if(n){const s=n.split(Ev);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function li(t){let e="";if(De(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=li(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Tv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!De(e)&&(t.class=li(e)),n&&(t.style=ci(n)),t}function bv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=En(t[s],e[s]);return n}function En(t,e){if(t===e)return!0;let n=mh(t),s=mh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=K(t),s=K(e),n||s)return n&&s?bv(t,e):!1;if(n=xe(t),s=xe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!En(t[o],e[o]))return!1}}return String(t)===String(e)}function ea(t,e){return t.findIndex(n=>En(n,e))}const Sv=t=>De(t)?t:t==null?"":K(t)||xe(t)&&(t.toString===xd||!te(t.toString))?JSON.stringify(t,Od,2):String(t),Od=(t,e)=>e&&e.__v_isRef?Od(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!K(e)&&!Md(e)?String(e):e,me={},As=[],kt=()=>{},Cv=()=>!1,Av=/^on[^a-z]/,ui=t=>Av.test(t),_l=t=>t.startsWith("onUpdate:"),Oe=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rv=Object.prototype.hasOwnProperty,de=(t,e)=>Rv.call(t,e),K=Array.isArray,Rs=t=>ta(t)==="[object Map]",cs=t=>ta(t)==="[object Set]",mh=t=>t instanceof Date,te=t=>typeof t=="function",De=t=>typeof t=="string",Il=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Tl=t=>xe(t)&&te(t.then)&&te(t.catch),xd=Object.prototype.toString,ta=t=>xd.call(t),kv=t=>ta(t).slice(8,-1),Md=t=>ta(t)==="[object Object]",bl=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tr=Zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nv=/-(\w)/g,mt=na(t=>t.replace(Nv,(e,n)=>n?n.toUpperCase():"")),Dv=/\B([A-Z])/g,Mt=na(t=>t.replace(Dv,"-$1").toLowerCase()),hi=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),br=na(t=>t?`on${hi(t)}`:""),$r=(t,e)=>!Object.is(t,e),ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},In=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yh;const Pv=()=>yh||(yh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Tt;class Sl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Tt&&(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Tt=this,e()}finally{Tt=this.parent}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Cl(t){return new Sl(t)}function Ld(t,e=Tt){e&&e.active&&e.effects.push(t)}function Ov(){return Tt}function xv(t){Tt&&Tt.cleanups.push(t)}const Al=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ud=t=>(t.w&Tn)>0,Fd=t=>(t.n&Tn)>0,Mv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tn},Lv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ud(r)&&!Fd(r)?r.delete(t):e[n++]=r,r.w&=~Tn,r.n&=~Tn}e.length=n}},Ec=new WeakMap;let mr=0,Tn=1;const Ic=30;let xt;const qn=Symbol(""),Tc=Symbol("");class fi{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,s)}run(){if(!this.active)return this.fn();let e=xt,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,mn=!0,Tn=1<<++mr,mr<=Ic?Mv(this):vh(this),this.fn()}finally{mr<=Ic&&Lv(this),Tn=1<<--mr,xt=this.parent,mn=n,this.parent=void 0}}stop(){this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Uv(t,e){t.effect&&(t=t.effect.fn);const n=new fi(t);e&&(Oe(n,e),e.scope&&Ld(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Fv(t){t.effect.stop()}let mn=!0;const Vd=[];function ls(){Vd.push(mn),mn=!1}function us(){const t=Vd.pop();mn=t===void 0?!0:t}function yt(t,e,n){if(mn&&xt){let s=Ec.get(t);s||Ec.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Al()),$d(r)}}function $d(t,e){let n=!1;mr<=Ic?Fd(t)||(t.n|=Tn,n=!Ud(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function Zt(t,e,n,s,r,i){const o=Ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?bl(n)&&a.push(o.get("length")):(a.push(o.get(qn)),Rs(t)&&a.push(o.get(Tc)));break;case"delete":K(t)||(a.push(o.get(qn)),Rs(t)&&a.push(o.get(Tc)));break;case"set":Rs(t)&&a.push(o.get(qn));break}if(a.length===1)a[0]&&bc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);bc(Al(c))}}function bc(t,e){for(const n of K(t)?t:[...t])(n!==xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Vv=Zo("__proto__,__v_isRef,__isVue"),Bd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Il)),$v=sa(),Bv=sa(!1,!0),jv=sa(!0),Hv=sa(!0,!0),wh=qv();function qv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)yt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const s=ue(this)[e].apply(this,n);return us(),s}}),t}function sa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Gd:zd:e?Wd:Kd).get(s))return s;const o=K(s);if(!t&&o&&de(wh,r))return Reflect.get(wh,r,i);const a=Reflect.get(s,r,i);return(Il(r)?Bd.has(r):Vv(r))||(t||yt(s,"get",r),e)?a:Ne(a)?!o||!bl(r)?a.value:a:xe(a)?t?kl(a):hs(a):a}}const Kv=jd(),Wv=jd(!0);function jd(t=!1){return function(n,s,r,i){let o=n[s];if(Us(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&!Us(r)&&(Nl(r)||(r=ue(r),o=ue(o)),!K(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=K(n)&&bl(s)?Number(s)<n.length:de(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?$r(r,o)&&Zt(n,"set",s,r):Zt(n,"add",s,r)),c}}function zv(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Zt(t,"delete",e,void 0),s}function Gv(t,e){const n=Reflect.has(t,e);return(!Il(e)||!Bd.has(e))&&yt(t,"has",e),n}function Yv(t){return yt(t,"iterate",K(t)?"length":qn),Reflect.ownKeys(t)}const Hd={get:$v,set:Kv,deleteProperty:zv,has:Gv,ownKeys:Yv},qd={get:jv,set(t,e){return!0},deleteProperty(t,e){return!0}},Xv=Oe({},Hd,{get:Bv,set:Wv}),Jv=Oe({},qd,{get:Hv}),Rl=t=>t,ra=t=>Reflect.getPrototypeOf(t);function Wi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);e!==i&&!n&&yt(r,"get",e),!n&&yt(r,"get",i);const{has:o}=ra(r),a=s?Rl:n?Pl:Br;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return t!==r&&!e&&yt(s,"has",t),!e&&yt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Gi(t,e=!1){return t=t.__v_raw,!e&&yt(ue(t),"iterate",qn),Reflect.get(t,"size",t)}function _h(t){t=ue(t);const e=ue(this);return ra(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Eh(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=ra(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?$r(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Ih(t){const e=ue(this),{has:n,get:s}=ra(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Zt(e,"delete",t,void 0),i}function Th(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Yi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?Rl:t?Pl:Br;return!t&&yt(a,"iterate",qn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Xi(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=Rs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Rl:e?Pl:Br;return!e&&yt(i,"iterate",c?Tc:qn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function Qv(){const t={get(i){return Wi(this,i)},get size(){return Gi(this)},has:zi,add:_h,set:Eh,delete:Ih,clear:Th,forEach:Yi(!1,!1)},e={get(i){return Wi(this,i,!1,!0)},get size(){return Gi(this)},has:zi,add:_h,set:Eh,delete:Ih,clear:Th,forEach:Yi(!1,!0)},n={get(i){return Wi(this,i,!0)},get size(){return Gi(this,!0)},has(i){return zi.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Yi(!0,!1)},s={get(i){return Wi(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return zi.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Xi(i,!1,!1),n[i]=Xi(i,!0,!1),e[i]=Xi(i,!1,!0),s[i]=Xi(i,!0,!0)}),[t,n,e,s]}const[Zv,ew,tw,nw]=Qv();function ia(t,e){const n=e?t?nw:tw:t?ew:Zv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(de(n,r)&&r in s?n:s,r,i)}const sw={get:ia(!1,!1)},rw={get:ia(!1,!0)},iw={get:ia(!0,!1)},ow={get:ia(!0,!0)},Kd=new WeakMap,Wd=new WeakMap,zd=new WeakMap,Gd=new WeakMap;function aw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cw(t){return t.__v_skip||!Object.isExtensible(t)?0:aw(kv(t))}function hs(t){return Us(t)?t:oa(t,!1,Hd,sw,Kd)}function Yd(t){return oa(t,!1,Xv,rw,Wd)}function kl(t){return oa(t,!0,qd,iw,zd)}function lw(t){return oa(t,!0,Jv,ow,Gd)}function oa(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=cw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Jt(t){return Us(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function Nl(t){return!!(t&&t.__v_isShallow)}function Dl(t){return Jt(t)||Us(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Xn(t){return wo(t,"__v_skip",!0),t}const Br=t=>xe(t)?hs(t):t,Pl=t=>xe(t)?kl(t):t;function Ol(t){mn&&xt&&(t=ue(t),$d(t.dep||(t.dep=Al())))}function aa(t,e){t=ue(t),t.dep&&bc(t.dep)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Kn(t){return Jd(t,!1)}function Xd(t){return Jd(t,!0)}function Jd(t,e){return Ne(t)?t:new uw(t,e)}class uw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Br(e)}get value(){return Ol(this),this._value}set value(e){e=this.__v_isShallow?e:ue(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Br(e),aa(this))}}function hw(t){aa(t)}function Ns(t){return Ne(t)?t.value:t}const fw={get:(t,e,n)=>Ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function xl(t){return Jt(t)?t:new Proxy(t,fw)}class dw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>Ol(this),()=>aa(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function pw(t){return new dw(t)}function Qd(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=Zd(t,n);return e}class gw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Zd(t,e,n){const s=t[e];return Ne(s)?s:new gw(t,e,n)}class mw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fi(e,()=>{this._dirty||(this._dirty=!0,aa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return Ol(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yw(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=kt):(s=t.get,r=t.set),new mw(s,r,i||!r,n)}Promise.resolve();const Sr=[];function ep(t,...e){ls();const n=Sr.length?Sr[Sr.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=vw();if(s)Lt(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${qp(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...ww(r)),console.warn(...i)}us()}function vw(){let t=Sr[Sr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function ww(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],..._w(n))}),e}function _w({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${qp(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...Ew(t.props),i]:[r+i]}function Ew(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...tp(s,t[s]))}),n.length>3&&e.push(" ..."),e}function tp(t,e,n){return De(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ne(e)?(e=tp(t,ue(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):te(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ue(e),n?e:[`${t}=`,e])}function Lt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){fs(i,e,n)}return r}function pt(t,e,n,s){if(te(t)){const i=Lt(t,e,n,s);return i&&Tl(i)&&i.catch(o=>{fs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(pt(t[i],e,n,s));return r}function fs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Lt(c,null,10,[t,o,a]);return}}Iw(t,n,r,s)}function Iw(t,e,n,s=!0){console.error(t)}let _o=!1,Sc=!1;const ft=[];let Wt=0;const Cr=[];let yr=null,Es=0;const Ar=[];let ln=null,Is=0;const np=Promise.resolve();let Ml=null,Cc=null;function di(t){const e=Ml||np;return t?e.then(this?t.bind(this):t):e}function Tw(t){let e=Wt+1,n=ft.length;for(;e<n;){const s=e+n>>>1;jr(ft[s])<t?e=s+1:n=s}return e}function Ll(t){(!ft.length||!ft.includes(t,_o&&t.allowRecurse?Wt+1:Wt))&&t!==Cc&&(t.id==null?ft.push(t):ft.splice(Tw(t.id),0,t),sp())}function sp(){!_o&&!Sc&&(Sc=!0,Ml=np.then(ip))}function bw(t){const e=ft.indexOf(t);e>Wt&&ft.splice(e,1)}function rp(t,e,n,s){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),sp()}function Sw(t){rp(t,yr,Cr,Es)}function Ul(t){rp(t,ln,Ar,Is)}function Fl(t,e=null){if(Cr.length){for(Cc=e,yr=[...new Set(Cr)],Cr.length=0,Es=0;Es<yr.length;Es++)yr[Es]();yr=null,Es=0,Cc=null,Fl(t,e)}}function Eo(t){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,s)=>jr(n)-jr(s)),Is=0;Is<ln.length;Is++)ln[Is]();ln=null,Is=0}}const jr=t=>t.id==null?1/0:t.id;function ip(t){Sc=!1,_o=!0,Fl(t),ft.sort((n,s)=>jr(n)-jr(s));const e=kt;try{for(Wt=0;Wt<ft.length;Wt++){const n=ft[Wt];n&&n.active!==!1&&Lt(n,null,14)}}finally{Wt=0,ft.length=0,Eo(),_o=!1,Ml=null,(ft.length||Cr.length||Ar.length)&&ip(t)}}let Ts,Ji=[];function op(t,e){var n,s;Ts=t,Ts?(Ts.enabled=!0,Ji.forEach(({event:r,args:i})=>Ts.emit(r,...i)),Ji=[]):typeof window!="undefined"&&window.HTMLElement&&!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0?void 0:s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{op(i,e)}),setTimeout(()=>{Ts||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ji=[])},3e3)):Ji=[]}function Cw(t,e,...n){const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||me;f?r=n.map(p=>p.trim()):h&&(r=n.map(In))}let a,c=s[a=br(e)]||s[a=br(mt(e))];!c&&i&&(c=s[a=br(Mt(e))]),c&&pt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(l,t,6,r)}}function ap(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=ap(l,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Oe(o,i),s.set(t,o),o)}function Vl(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Mt(e))||de(t,e))}let dt=null,ca=null;function Hr(t){const e=dt;return dt=t,ca=t&&t.type.__scopeId||null,e}function Aw(t){ca=t}function Rw(){ca=null}const kw=t=>$l;function $l(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Dc(-1);const i=Hr(e),o=t(...r);return Hr(i),s._d&&Dc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function co(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:b}=t;let v,w;const y=Hr(t);try{if(n.shapeFlag&4){const T=r||s;v=ht(u.call(T,T,h,i,p,f,g)),w=c}else{const T=e;v=ht(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),w=e.props?c:Dw(c)}}catch(T){Nr.length=0,fs(T,t,1),v=Ce(ot)}let E=v;if(w&&b!==!1){const T=Object.keys(w),{shapeFlag:P}=E;T.length&&P&7&&(o&&T.some(_l)&&(w=Pw(w,o)),E=Sn(E,w))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,Hr(y),v}function Nw(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(bn(s)){if(s.type!==ot||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Dw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},Pw=(t,e)=>{const n={};for(const s in t)(!_l(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ow(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Vl(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bh(s,o,l):!0:!!o;return!1}function bh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Vl(n,i))return!0}return!1}function Bl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xw=t=>t.__isSuspense,Mw={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?Uw(e,n,s,r,i,o,a,c,l):Fw(t,e,n,s,r,o,a,c,l)},hydrate:Vw,create:jl,normalize:$w},Lw=Mw;function qr(t,e){const n=t.props&&t.props[e];te(n)&&n()}function Uw(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=jl(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(qr(t,"onPending"),qr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Ds(f,t.ssFallback)):f.resolve()}function Fw(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:b,isInFallback:v,isHydrating:w}=h;if(b)h.pendingBranch=f,Ot(f,b)?(c(b,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():v&&(c(g,p,n,s,r,null,i,o,a),Ds(h,p))):(h.pendingId++,w?(h.isHydrating=!1,h.activeBranch=b):l(b,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),v?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,p,n,s,r,null,i,o,a),Ds(h,p))):g&&Ot(f,g)?(c(g,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&Ot(f,g))c(g,f,n,s,r,h,i,o,a),Ds(h,f);else if(qr(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:E}=h;y>0?setTimeout(()=>{h.pendingId===E&&h.fallback(p)},y):y===0&&h.fallback(p)}}function jl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:g,o:{parentNode:b,remove:v}}=l,w=In(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:T,activeBranch:P,pendingBranch:R,pendingId:I,effects:V,parentComponent:$,container:W}=y;if(y.isHydrating)y.isHydrating=!1;else if(!E){const Z=P&&R.transition&&R.transition.mode==="out-in";Z&&(P.transition.afterLeave=()=>{I===y.pendingId&&f(R,W,re,0)});let{anchor:re}=y;P&&(re=g(P),p(P,$,y,!0)),Z||f(R,W,re,0)}Ds(y,R),y.pendingBranch=null,y.isInFallback=!1;let Q=y.parent,D=!1;for(;Q;){if(Q.pendingBranch){Q.effects.push(...V),D=!0;break}Q=Q.parent}D||Ul(V),y.effects=[],qr(T,"onResolve")},fallback(E){if(!y.pendingBranch)return;const{vnode:T,activeBranch:P,parentComponent:R,container:I,isSVG:V}=y;qr(T,"onFallback");const $=g(P),W=()=>{!y.isInFallback||(h(null,E,I,$,R,null,V,a,c),Ds(y,E))},Q=E.transition&&E.transition.mode==="out-in";Q&&(P.transition.afterLeave=W),y.isInFallback=!0,p(P,R,null,!0),Q||W()},move(E,T,P){y.activeBranch&&f(y.activeBranch,E,T,P),y.container=E},next(){return y.activeBranch&&g(y.activeBranch)},registerDep(E,T){const P=!!y.pendingBranch;P&&y.deps++;const R=E.vnode.el;E.asyncDep.catch(I=>{fs(I,E,0)}).then(I=>{if(E.isUnmounted||y.isUnmounted||y.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:V}=E;xc(E,I,!1),R&&(V.el=R);const $=!R&&E.subTree.el;T(E,V,b(R||E.subTree.el),R?null:g(E.subTree),y,o,c),$&&v($),Bl(E,V.el),P&&--y.deps===0&&y.resolve()})},unmount(E,T){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,E,T),y.pendingBranch&&p(y.pendingBranch,n,E,T)}};return y}function Vw(t,e,n,s,r,i,o,a,c){const l=e.suspense=jl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function $w(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Sh(s?n.default:n),t.ssFallback=s?Sh(n.fallback):Ce(ot)}function Sh(t){let e;if(te(t)){const n=$s&&t._c;n&&(t._d=!1,da()),t=t(),n&&(t._d=!0,e=Ut,Op())}return K(t)&&(t=Nw(t)),t=ht(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function cp(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Ul(t)}function Ds(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Bl(s,r))}function Rr(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function gt(t,e,n=!1){const s=Fe||dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}function Bw(t,e){return pi(t,null,e)}function lp(t,e){return pi(t,null,{flush:"post"})}function jw(t,e){return pi(t,null,{flush:"sync"})}const Ch={};function Wn(t,e,n){return pi(t,e,n)}function pi(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=me){const a=Fe;let c,l=!1,u=!1;if(Ne(t)?(c=()=>t.value,l=Nl(t)):Jt(t)?(c=()=>t,s=!0):K(t)?(u=!0,l=t.some(Jt),c=()=>t.map(w=>{if(Ne(w))return w.value;if(Jt(w))return $n(w);if(te(w))return Lt(w,a,2)})):te(t)?e?c=()=>Lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),pt(t,a,3,[f])}:c=kt,e&&s){const w=c;c=()=>$n(w())}let h,f=w=>{h=v.onStop=()=>{Lt(w,a,4)}};if(Bs)return f=kt,e?n&&pt(e,a,3,[c(),u?[]:void 0,f]):c(),kt;let p=u?[]:Ch;const g=()=>{if(!!v.active)if(e){const w=v.run();(s||l||(u?w.some((y,E)=>$r(y,p[E])):$r(w,p)))&&(h&&h(),pt(e,a,3,[w,p===Ch?void 0:p,f]),p=w)}else v.run()};g.allowRecurse=!!e;let b;r==="sync"?b=g:r==="post"?b=()=>qe(g,a&&a.suspense):b=()=>{!a||a.isMounted?Sw(g):g()};const v=new fi(c,b);return e?n?g():p=v.run():r==="post"?qe(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&El(a.scope.effects,v)}}function Hw(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?up(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=Fe;Cn(this);const a=pi(r,i.bind(s),n);return o?Cn(o):yn(),a}function up(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $n(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))$n(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(cs(t)||Rs(t))t.forEach(n=>{$n(n,e)});else if(Md(t))for(const n in t)$n(t[n],e);return t}function Hl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{t.isMounted=!0}),fa(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],qw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=Bt(),s=Hl();let r;return()=>{const i=e.default&&la(e.default(),!0);if(!i||!i.length)return;const o=ue(t),{mode:a}=o,c=i[0];if(s.isLeaving)return Wa(c);const l=Ah(c);if(!l)return Wa(c);const u=Fs(l,o,s,n);Jn(l,u);const h=n.subTree,f=h&&Ah(h);let p=!1;const{getTransitionKey:g}=l.type;if(g){const b=g();r===void 0?r=b:b!==r&&(r=b,p=!0)}if(f&&f.type!==ot&&(!Ot(l,f)||p)){const b=Fs(f,o,s,n);if(Jn(f,b),a==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},Wa(c);a==="in-out"&&l.type!==ot&&(b.delayLeave=(v,w,y)=>{const E=hp(s,f);E[String(f.key)]=f,v._leaveCb=()=>{w(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return c}}},ql=qw;function hp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fs(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:b,onAppear:v,onAfterAppear:w,onAppearCancelled:y}=e,E=String(t.key),T=hp(n,t),P=(I,V)=>{I&&pt(I,s,9,V)},R={mode:i,persisted:o,beforeEnter(I){let V=a;if(!n.isMounted)if(r)V=b||a;else return;I._leaveCb&&I._leaveCb(!0);const $=T[E];$&&Ot(t,$)&&$.el._leaveCb&&$.el._leaveCb(),P(V,[I])},enter(I){let V=c,$=l,W=u;if(!n.isMounted)if(r)V=v||c,$=w||l,W=y||u;else return;let Q=!1;const D=I._enterCb=Z=>{Q||(Q=!0,Z?P(W,[I]):P($,[I]),R.delayedLeave&&R.delayedLeave(),I._enterCb=void 0)};V?(V(I,D),V.length<=1&&D()):D()},leave(I,V){const $=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return V();P(h,[I]);let W=!1;const Q=I._leaveCb=D=>{W||(W=!0,V(),D?P(g,[I]):P(p,[I]),I._leaveCb=void 0,T[$]===t&&delete T[$])};T[$]=t,f?(f(I,Q),f.length<=1&&Q()):Q()},clone(I){return Fs(I,e,n,s)}};return R}function Wa(t){if(mi(t))return t=Sn(t),t.children=null,t}function Ah(t){return mi(t)?t.children?t.children[0]:void 0:t}function Jn(t,e){t.shapeFlag&6&&t.component?Jn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function la(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===We?(i.patchFlag&128&&s++,n=n.concat(la(i.children,e))):(e||i.type!==ot)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function gi(t){return te(t)?{setup:t,name:t.name}:t}const Kr=t=>!!t.type.__asyncLoader;function Kw(t){te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let p;return c||(p=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((b,v)=>{a(g,()=>b(h()),()=>v(g),u+1)});throw g}).then(g=>p!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return gi({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const p=Fe;if(l)return()=>za(l,p);const g=y=>{c=null,fs(y,p,13,!s)};if(o&&p.suspense||Bs)return f().then(y=>()=>za(y,p)).catch(y=>(g(y),()=>s?Ce(s,{error:y}):null));const b=Kn(!1),v=Kn(),w=Kn(!!r);return r&&setTimeout(()=>{w.value=!1},r),i!=null&&setTimeout(()=>{if(!b.value&&!v.value){const y=new Error(`Async component timed out after ${i}ms.`);g(y),v.value=y}},i),f().then(()=>{b.value=!0,p.parent&&mi(p.parent.vnode)&&Ll(p.parent.update)}).catch(y=>{g(y),v.value=y}),()=>{if(b.value&&l)return za(l,p);if(v.value&&s)return Ce(s,{error:v.value});if(n&&!w.value)return Ce(n)}}})}function za(t,{vnode:{ref:e,props:n,children:s}}){const r=Ce(t,n,s);return r.ref=e,r}const mi=t=>t.type.__isKeepAlive,Ww={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Bt(),s=n.ctx;if(!s.renderer)return e.default;const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(y,E,T,P,R)=>{const I=y.component;l(y,E,T,0,a),c(I.vnode,y,E,T,I,a,P,y.slotScopeIds,R),qe(()=>{I.isDeactivated=!1,I.a&&ks(I.a);const V=y.props&&y.props.onVnodeMounted;V&&at(V,I.parent,y)},a)},s.deactivate=y=>{const E=y.component;l(y,f,null,1,a),qe(()=>{E.da&&ks(E.da);const T=y.props&&y.props.onVnodeUnmounted;T&&at(T,E.parent,y),E.isDeactivated=!0},a)};function p(y){Ga(y),u(y,n,a,!0)}function g(y){r.forEach((E,T)=>{const P=Co(E.type);P&&(!y||!y(P))&&b(T)})}function b(y){const E=r.get(y);!o||E.type!==o.type?p(E):o&&Ga(o),r.delete(y),i.delete(y)}Wn(()=>[t.include,t.exclude],([y,E])=>{y&&g(T=>vr(y,T)),E&&g(T=>!vr(E,T))},{flush:"post",deep:!0});let v=null;const w=()=>{v!=null&&r.set(v,Ya(n.subTree))};return yi(w),ha(w),fa(()=>{r.forEach(y=>{const{subTree:E,suspense:T}=n,P=Ya(E);if(y.type===P.type){Ga(P);const R=P.component.da;R&&qe(R,T);return}p(y)})}),()=>{if(v=null,!e.default)return null;const y=e.default(),E=y[0];if(y.length>1)return o=null,y;if(!bn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let T=Ya(E);const P=T.type,R=Co(Kr(T)?T.type.__asyncResolved||{}:P),{include:I,exclude:V,max:$}=t;if(I&&(!R||!vr(I,R))||V&&R&&vr(V,R))return o=T,E;const W=T.key==null?P:T.key,Q=r.get(W);return T.el&&(T=Sn(T),E.shapeFlag&128&&(E.ssContent=T)),v=W,Q?(T.el=Q.el,T.component=Q.component,T.transition&&Jn(T,T.transition),T.shapeFlag|=512,i.delete(W),i.add(W)):(i.add(W),$&&i.size>parseInt($,10)&&b(i.values().next().value)),T.shapeFlag|=256,o=T,E}}},zw=Ww;function vr(t,e){return K(t)?t.some(n=>vr(n,e)):De(t)?t.split(",").includes(e):t.test?t.test(e):!1}function fp(t,e){pp(t,"a",e)}function dp(t,e){pp(t,"da",e)}function pp(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)mi(r.parent.vnode)&&Gw(s,e,n,r),r=r.parent}}function Gw(t,e,n,s){const r=ua(e,t,s,!0);vi(()=>{El(s[e],r)},n)}function Ga(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function Ya(t){return t.shapeFlag&128?t.ssContent:t}function ua(t,e,n=Fe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Cn(n);const a=pt(e,n,t,o);return yn(),us(),a});return s?r.unshift(i):r.push(i),i}}const nn=t=>(e,n=Fe)=>(!Bs||t==="sp")&&ua(t,e,n),gp=nn("bm"),yi=nn("m"),mp=nn("bu"),ha=nn("u"),fa=nn("bum"),vi=nn("um"),yp=nn("sp"),vp=nn("rtg"),wp=nn("rtc");function _p(t,e=Fe){ua("ec",t,e)}let Ac=!0;function Yw(t){const e=Ip(t),n=t.proxy,s=t.ctx;Ac=!1,e.beforeCreate&&Rh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:b,deactivated:v,beforeDestroy:w,beforeUnmount:y,destroyed:E,unmounted:T,render:P,renderTracked:R,renderTriggered:I,errorCaptured:V,serverPrefetch:$,expose:W,inheritAttrs:Q,components:D,directives:Z,filters:re}=e;if(l&&Xw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ye=o[Ee];te(ye)&&(s[Ee]=ye.bind(n))}if(r){const Ee=r.call(n,n);xe(Ee)&&(t.data=hs(Ee))}if(Ac=!0,i)for(const Ee in i){const ye=i[Ee],_t=te(ye)?ye.bind(n,n):te(ye.get)?ye.get.bind(n,n):kt,ms=!te(ye)&&te(ye.set)?ye.set.bind(n):kt,Ht=bt({get:_t,set:ms});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Nt=>Ht.value=Nt})}if(a)for(const Ee in a)Ep(a[Ee],s,n,Ee);if(c){const Ee=te(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(ye=>{Rr(ye,Ee[ye])})}u&&Rh(u,t,"c");function Pe(Ee,ye){K(ye)?ye.forEach(_t=>Ee(_t.bind(n))):ye&&Ee(ye.bind(n))}if(Pe(gp,h),Pe(yi,f),Pe(mp,p),Pe(ha,g),Pe(fp,b),Pe(dp,v),Pe(_p,V),Pe(wp,R),Pe(vp,I),Pe(fa,y),Pe(vi,T),Pe(yp,$),K(W))if(W.length){const Ee=t.exposed||(t.exposed={});W.forEach(ye=>{Object.defineProperty(Ee,ye,{get:()=>n[ye],set:_t=>n[ye]=_t})})}else t.exposed||(t.exposed={});P&&t.render===kt&&(t.render=P),Q!=null&&(t.inheritAttrs=Q),D&&(t.components=D),Z&&(t.directives=Z)}function Xw(t,e,n=kt,s=!1){K(t)&&(t=Rc(t));for(const r in t){const i=t[r];let o;xe(i)?"default"in i?o=gt(i.from||r,i.default,!0):o=gt(i.from||r):o=gt(i),Ne(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Rh(t,e,n){pt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ep(t,e,n,s){const r=s.includes(".")?up(n,s):()=>n[s];if(De(t)){const i=e[t];te(i)&&Wn(r,i)}else if(te(t))Wn(r,t.bind(n));else if(xe(t))if(K(t))t.forEach(i=>Ep(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Wn(r,i,t)}}function Ip(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),i.set(e,c),c}function Io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Io(t,i,n,!0),r&&r.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jw={data:kh,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Ln,directives:Ln,watch:Zw,provide:kh,inject:Qw};function kh(t,e){return e?t?function(){return Oe(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Qw(t,e){return Ln(Rc(t),Rc(e))}function Rc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function Zw(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function e_(t,e,n,s=!1){const r={},i={};wo(i,pa,1),t.propsDefaults=Object.create(null),Tp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Yd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function t_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const p=e[f];if(c)if(de(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const g=mt(f);r[g]=kc(c,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Tp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Mt(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=kc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!de(e,h)&&!0)&&(delete i[h],l=!0)}l&&Zt(t,"set","$attrs")}function Tp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tr(c))continue;const l=e[c];let u;r&&de(r,u=mt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Vl(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=kc(r,c,h,l[h],t,!de(l,h))}}return o}function kc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Cn(r),s=l[n]=c.call(null,e),yn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Mt(n))&&(s=!0))}return s}function bp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,p]=bp(h,e,!0);Oe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,As),As;if(K(i))for(let u=0;u<i.length;u++){const h=mt(i[u]);Nh(h)&&(o[h]=me)}else if(i)for(const u in i){const h=mt(u);if(Nh(h)){const f=i[u],p=o[h]=K(f)||te(f)?{type:f}:f;if(p){const g=Oh(Boolean,p.type),b=Oh(String,p.type);p[0]=g>-1,p[1]=b<0||g<b,(g>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Nh(t){return t[0]!=="$"}function Dh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ph(t,e){return Dh(t)===Dh(e)}function Oh(t,e){return K(e)?e.findIndex(n=>Ph(n,t)):te(e)&&Ph(e,t)?0:-1}const Sp=t=>t[0]==="_"||t==="$stable",Kl=t=>K(t)?t.map(ht):[ht(t)],n_=(t,e,n)=>{const s=$l((...r)=>Kl(e(...r)),n);return s._c=!1,s},Cp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Sp(r))continue;const i=t[r];if(te(i))e[r]=n_(r,i,s);else if(i!=null){const o=Kl(i);e[r]=()=>o}}},Ap=(t,e)=>{const n=Kl(e);t.slots.default=()=>n},s_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),wo(e,"_",n)):Cp(e,t.slots={})}else t.slots={},e&&Ap(t,e);wo(t.slots,pa,1)},r_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Oe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Cp(e,r)),o=e}else e&&(Ap(t,e),o={default:1});if(i)for(const a in r)!Sp(a)&&!(a in o)&&delete r[a]};function i_(t,e){const n=dt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=me]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Pt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ls(),pt(c,n,8,[t.el,a,t,e]),us())}}function Rp(){return{app:null,config:{isNativeTag:Cv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o_=0;function a_(t,e){return function(s,r=null){r!=null&&!xe(r)&&(r=null);const i=Rp(),o=new Set;let a=!1;const c=i.app={_uid:o_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Gp,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ce(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Zl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function To(t,e,n,s,r=!1){if(K(t)){t.forEach((f,p)=>To(f,e&&(K(e)?e[p]:e),n,s,r));return}if(Kr(s)&&!r)return;const i=s.shapeFlag&4?Zl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),te(c))Lt(c,a,12,[o,u]);else{const f=De(c),p=Ne(c);if(f||p){const g=()=>{if(t.f){const b=f?u[c]:c.value;r?K(b)&&El(b,i):K(b)?b.includes(i)||b.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):Ne(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,qe(g,n)):g()}}}let rn=!1;const Qi=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Xa=t=>t.nodeType===8;function c_(t){const{mt:e,p:n,o:{patchProp:s,nextSibling:r,parentNode:i,remove:o,insert:a,createComment:c}}=t,l=(v,w)=>{if(!w.hasChildNodes()){n(null,v,w),Eo();return}rn=!1,u(w.firstChild,v,null,null,null),Eo(),rn&&console.error("Hydration completed but contains mismatches.")},u=(v,w,y,E,T,P=!1)=>{const R=Xa(v)&&v.data==="[",I=()=>g(v,w,y,E,T,R),{type:V,ref:$,shapeFlag:W}=w,Q=v.nodeType;w.el=v;let D=null;switch(V){case Vs:Q!==3?D=I():(v.data!==w.children&&(rn=!0,v.data=w.children),D=r(v));break;case ot:Q!==8||R?D=I():D=r(v);break;case zn:if(Q!==1)D=I();else{D=v;const Z=!w.children.length;for(let re=0;re<w.staticCount;re++)Z&&(w.children+=D.outerHTML),re===w.staticCount-1&&(w.anchor=D),D=r(D);return D}break;case We:R?D=p(v,w,y,E,T,P):D=I();break;default:if(W&1)Q!==1||w.type.toLowerCase()!==v.tagName.toLowerCase()?D=I():D=h(v,w,y,E,T,P);else if(W&6){w.slotScopeIds=T;const Z=i(v);if(e(w,Z,null,y,E,Qi(Z),P),D=R?b(v):r(v),Kr(w)){let re;R?(re=Ce(We),re.anchor=D?D.previousSibling:Z.lastChild):re=v.nodeType===3?Jl(""):Ce("div"),re.el=v,w.component.subTree=re}}else W&64?Q!==8?D=I():D=w.type.hydrate(v,w,y,E,T,P,t,f):W&128&&(D=w.type.hydrate(v,w,y,E,Qi(i(v)),T,P,t,u))}return $!=null&&To($,null,E,w),D},h=(v,w,y,E,T,P)=>{P=P||!!w.dynamicChildren;const{type:R,props:I,patchFlag:V,shapeFlag:$,dirs:W}=w,Q=R==="input"&&W||R==="option";if(Q||V!==-1){if(W&&Pt(w,null,y,"created"),I)if(Q||!P||V&48)for(const Z in I)(Q&&Z.endsWith("value")||ui(Z)&&!Tr(Z))&&s(v,Z,null,I[Z],!1,void 0,y);else I.onClick&&s(v,"onClick",null,I.onClick,!1,void 0,y);let D;if((D=I&&I.onVnodeBeforeMount)&&at(D,y,w),W&&Pt(w,null,y,"beforeMount"),((D=I&&I.onVnodeMounted)||W)&&cp(()=>{D&&at(D,y,w),W&&Pt(w,null,y,"mounted")},E),$&16&&!(I&&(I.innerHTML||I.textContent))){let Z=f(v.firstChild,w,v,y,E,T,P);for(;Z;){rn=!0;const re=Z;Z=Z.nextSibling,o(re)}}else $&8&&v.textContent!==w.children&&(rn=!0,v.textContent=w.children)}return v.nextSibling},f=(v,w,y,E,T,P,R)=>{R=R||!!w.dynamicChildren;const I=w.children,V=I.length;for(let $=0;$<V;$++){const W=R?I[$]:I[$]=ht(I[$]);if(v)v=u(v,W,E,T,P,R);else{if(W.type===Vs&&!W.children)continue;rn=!0,n(null,W,y,null,E,T,Qi(y),P)}}return v},p=(v,w,y,E,T,P)=>{const{slotScopeIds:R}=w;R&&(T=T?T.concat(R):R);const I=i(v),V=f(r(v),w,I,y,E,T,P);return V&&Xa(V)&&V.data==="]"?r(w.anchor=V):(rn=!0,a(w.anchor=c("]"),I,V),V)},g=(v,w,y,E,T,P)=>{if(rn=!0,w.el=null,P){const V=b(v);for(;;){const $=r(v);if($&&$!==V)o($);else break}}const R=r(v),I=i(v);return o(v),n(null,w,I,R,y,E,Qi(I),T),R},b=v=>{let w=0;for(;v;)if(v=r(v),v&&Xa(v)&&(v.data==="["&&w++,v.data==="]")){if(w===0)return r(v);w--}return v};return[l,u]}const qe=cp;function kp(t){return Dp(t)}function Np(t){return Dp(t,c_)}function Dp(t,e){const n=Pv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=kt,cloneNode:g,insertStaticContent:b}=t,v=(d,m,_,k=null,C=null,x=null,F=!1,O=null,L=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ot(d,m)&&(k=G(d),Et(d,C,x,!0),d=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:N,ref:X,shapeFlag:j}=m;switch(N){case Vs:w(d,m,_,k);break;case ot:y(d,m,_,k);break;case zn:d==null&&E(m,_,k,F);break;case We:Z(d,m,_,k,C,x,F,O,L);break;default:j&1?R(d,m,_,k,C,x,F,O,L):j&6?re(d,m,_,k,C,x,F,O,L):(j&64||j&128)&&N.process(d,m,_,k,C,x,F,O,L,Ie)}X!=null&&C&&To(X,d&&d.ref,x,m||d,!m)},w=(d,m,_,k)=>{if(d==null)s(m.el=a(m.children),_,k);else{const C=m.el=d.el;m.children!==d.children&&l(C,m.children)}},y=(d,m,_,k)=>{d==null?s(m.el=c(m.children||""),_,k):m.el=d.el},E=(d,m,_,k)=>{[d.el,d.anchor]=b(d.children,m,_,k,d.el,d.anchor)},T=({el:d,anchor:m},_,k)=>{let C;for(;d&&d!==m;)C=f(d),s(d,_,k),d=C;s(m,_,k)},P=({el:d,anchor:m})=>{let _;for(;d&&d!==m;)_=f(d),r(d),d=_;r(m)},R=(d,m,_,k,C,x,F,O,L)=>{F=F||m.type==="svg",d==null?I(m,_,k,C,x,F,O,L):W(d,m,C,x,F,O,L)},I=(d,m,_,k,C,x,F,O)=>{let L,N;const{type:X,props:j,shapeFlag:J,transition:se,patchFlag:fe,dirs:Re}=d;if(d.el&&g!==void 0&&fe===-1)L=d.el=g(d.el);else{if(L=d.el=o(d.type,x,j&&j.is,j),J&8?u(L,d.children):J&16&&$(d.children,L,null,k,C,x&&X!=="foreignObject",F,O),Re&&Pt(d,null,k,"created"),j){for(const be in j)be!=="value"&&!Tr(be)&&i(L,be,null,j[be],x,d.children,k,C,U);"value"in j&&i(L,"value",null,j.value),(N=j.onVnodeBeforeMount)&&at(N,k,d)}V(L,d,d.scopeId,F,k)}Re&&Pt(d,null,k,"beforeMount");const we=(!C||C&&!C.pendingBranch)&&se&&!se.persisted;we&&se.beforeEnter(L),s(L,m,_),((N=j&&j.onVnodeMounted)||we||Re)&&qe(()=>{N&&at(N,k,d),we&&se.enter(L),Re&&Pt(d,null,k,"mounted")},C)},V=(d,m,_,k,C)=>{if(_&&p(d,_),k)for(let x=0;x<k.length;x++)p(d,k[x]);if(C){let x=C.subTree;if(m===x){const F=C.vnode;V(d,F,F.scopeId,F.slotScopeIds,C.parent)}}},$=(d,m,_,k,C,x,F,O,L=0)=>{for(let N=L;N<d.length;N++){const X=d[N]=O?un(d[N]):ht(d[N]);v(null,X,m,_,k,C,x,F,O)}},W=(d,m,_,k,C,x,F)=>{const O=m.el=d.el;let{patchFlag:L,dynamicChildren:N,dirs:X}=m;L|=d.patchFlag&16;const j=d.props||me,J=m.props||me;let se;_&&On(_,!1),(se=J.onVnodeBeforeUpdate)&&at(se,_,m,d),X&&Pt(m,d,_,"beforeUpdate"),_&&On(_,!0);const fe=C&&m.type!=="foreignObject";if(N?Q(d.dynamicChildren,N,O,_,k,fe,x):F||_t(d,m,O,null,_,k,fe,x,!1),L>0){if(L&16)D(O,m,j,J,_,k,C);else if(L&2&&j.class!==J.class&&i(O,"class",null,J.class,C),L&4&&i(O,"style",j.style,J.style,C),L&8){const Re=m.dynamicProps;for(let we=0;we<Re.length;we++){const be=Re[we],At=j[be],ys=J[be];(ys!==At||be==="value")&&i(O,be,At,ys,C,d.children,_,k,U)}}L&1&&d.children!==m.children&&u(O,m.children)}else!F&&N==null&&D(O,m,j,J,_,k,C);((se=J.onVnodeUpdated)||X)&&qe(()=>{se&&at(se,_,m,d),X&&Pt(m,d,_,"updated")},k)},Q=(d,m,_,k,C,x,F)=>{for(let O=0;O<m.length;O++){const L=d[O],N=m[O],X=L.el&&(L.type===We||!Ot(L,N)||L.shapeFlag&70)?h(L.el):_;v(L,N,X,null,k,C,x,F,!0)}},D=(d,m,_,k,C,x,F)=>{if(_!==k){for(const O in k){if(Tr(O))continue;const L=k[O],N=_[O];L!==N&&O!=="value"&&i(d,O,N,L,F,m.children,C,x,U)}if(_!==me)for(const O in _)!Tr(O)&&!(O in k)&&i(d,O,_[O],null,F,m.children,C,x,U);"value"in k&&i(d,"value",_.value,k.value)}},Z=(d,m,_,k,C,x,F,O,L)=>{const N=m.el=d?d.el:a(""),X=m.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:J,slotScopeIds:se}=m;se&&(O=O?O.concat(se):se),d==null?(s(N,_,k),s(X,_,k),$(m.children,_,X,C,x,F,O,L)):j>0&&j&64&&J&&d.dynamicChildren?(Q(d.dynamicChildren,J,_,C,x,F,O),(m.key!=null||C&&m===C.subTree)&&Wl(d,m,!0)):_t(d,m,_,X,C,x,F,O,L)},re=(d,m,_,k,C,x,F,O,L)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?C.ctx.activate(m,_,k,F,L):jt(m,_,k,C,x,F,L):Pe(d,m,L)},jt=(d,m,_,k,C,x,F)=>{const O=d.component=Vp(d,k,C);if(mi(d)&&(O.ctx.renderer=Ie),Bp(O),O.asyncDep){if(C&&C.registerDep(O,Ee),!d.el){const L=O.subTree=Ce(ot);y(null,L,m,_)}return}Ee(O,d,m,_,C,x,F)},Pe=(d,m,_)=>{const k=m.component=d.component;if(Ow(d,m,_))if(k.asyncDep&&!k.asyncResolved){ye(k,m,_);return}else k.next=m,bw(k.update),k.update();else m.component=d.component,m.el=d.el,k.vnode=m},Ee=(d,m,_,k,C,x,F)=>{const O=()=>{if(d.isMounted){let{next:X,bu:j,u:J,parent:se,vnode:fe}=d,Re=X,we;On(d,!1),X?(X.el=fe.el,ye(d,X,F)):X=fe,j&&ks(j),(we=X.props&&X.props.onVnodeBeforeUpdate)&&at(we,se,X,fe),On(d,!0);const be=co(d),At=d.subTree;d.subTree=be,v(At,be,h(At.el),G(At),d,C,x),X.el=be.el,Re===null&&Bl(d,be.el),J&&qe(J,C),(we=X.props&&X.props.onVnodeUpdated)&&qe(()=>at(we,se,X,fe),C)}else{let X;const{el:j,props:J}=m,{bm:se,m:fe,parent:Re}=d,we=Kr(m);if(On(d,!1),se&&ks(se),!we&&(X=J&&J.onVnodeBeforeMount)&&at(X,Re,m),On(d,!0),j&&ae){const be=()=>{d.subTree=co(d),ae(j,d.subTree,d,C,null)};we?m.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=co(d);v(null,be,_,k,d,C,x),m.el=be.el}if(fe&&qe(fe,C),!we&&(X=J&&J.onVnodeMounted)){const be=m;qe(()=>at(X,Re,be),C)}m.shapeFlag&256&&d.a&&qe(d.a,C),d.isMounted=!0,m=_=k=null}},L=d.effect=new fi(O,()=>Ll(d.update),d.scope),N=d.update=L.run.bind(L);N.id=d.uid,On(d,!0),N()},ye=(d,m,_)=>{m.component=d;const k=d.vnode.props;d.vnode=m,d.next=null,t_(d,m.props,k,_),r_(d,m.children,_),ls(),Fl(void 0,d.update),us()},_t=(d,m,_,k,C,x,F,O,L=!1)=>{const N=d&&d.children,X=d?d.shapeFlag:0,j=m.children,{patchFlag:J,shapeFlag:se}=m;if(J>0){if(J&128){Ht(N,j,_,k,C,x,F,O,L);return}else if(J&256){ms(N,j,_,k,C,x,F,O,L);return}}se&8?(X&16&&U(N,C,x),j!==N&&u(_,j)):X&16?se&16?Ht(N,j,_,k,C,x,F,O,L):U(N,C,x,!0):(X&8&&u(_,""),se&16&&$(j,_,k,C,x,F,O,L))},ms=(d,m,_,k,C,x,F,O,L)=>{d=d||As,m=m||As;const N=d.length,X=m.length,j=Math.min(N,X);let J;for(J=0;J<j;J++){const se=m[J]=L?un(m[J]):ht(m[J]);v(d[J],se,_,null,C,x,F,O,L)}N>X?U(d,C,x,!0,!1,j):$(m,_,k,C,x,F,O,L,j)},Ht=(d,m,_,k,C,x,F,O,L)=>{let N=0;const X=m.length;let j=d.length-1,J=X-1;for(;N<=j&&N<=J;){const se=d[N],fe=m[N]=L?un(m[N]):ht(m[N]);if(Ot(se,fe))v(se,fe,_,null,C,x,F,O,L);else break;N++}for(;N<=j&&N<=J;){const se=d[j],fe=m[J]=L?un(m[J]):ht(m[J]);if(Ot(se,fe))v(se,fe,_,null,C,x,F,O,L);else break;j--,J--}if(N>j){if(N<=J){const se=J+1,fe=se<X?m[se].el:k;for(;N<=J;)v(null,m[N]=L?un(m[N]):ht(m[N]),_,fe,C,x,F,O,L),N++}}else if(N>J)for(;N<=j;)Et(d[N],C,x,!0),N++;else{const se=N,fe=N,Re=new Map;for(N=fe;N<=J;N++){const ut=m[N]=L?un(m[N]):ht(m[N]);ut.key!=null&&Re.set(ut.key,N)}let we,be=0;const At=J-fe+1;let ys=!1,dh=0;const hr=new Array(At);for(N=0;N<At;N++)hr[N]=0;for(N=se;N<=j;N++){const ut=d[N];if(be>=At){Et(ut,C,x,!0);continue}let Dt;if(ut.key!=null)Dt=Re.get(ut.key);else for(we=fe;we<=J;we++)if(hr[we-fe]===0&&Ot(ut,m[we])){Dt=we;break}Dt===void 0?Et(ut,C,x,!0):(hr[Dt-fe]=N+1,Dt>=dh?dh=Dt:ys=!0,v(ut,m[Dt],_,null,C,x,F,O,L),be++)}const ph=ys?l_(hr):As;for(we=ph.length-1,N=At-1;N>=0;N--){const ut=fe+N,Dt=m[ut],gh=ut+1<X?m[ut+1].el:k;hr[N]===0?v(null,Dt,_,gh,C,x,F,O,L):ys&&(we<0||N!==ph[we]?Nt(Dt,_,gh,2):we--)}}},Nt=(d,m,_,k,C=null)=>{const{el:x,type:F,transition:O,children:L,shapeFlag:N}=d;if(N&6){Nt(d.component.subTree,m,_,k);return}if(N&128){d.suspense.move(m,_,k);return}if(N&64){F.move(d,m,_,Ie);return}if(F===We){s(x,m,_);for(let j=0;j<L.length;j++)Nt(L[j],m,_,k);s(d.anchor,m,_);return}if(F===zn){T(d,m,_);return}if(k!==2&&N&1&&O)if(k===0)O.beforeEnter(x),s(x,m,_),qe(()=>O.enter(x),C);else{const{leave:j,delayLeave:J,afterLeave:se}=O,fe=()=>s(x,m,_),Re=()=>{j(x,()=>{fe(),se&&se()})};J?J(x,fe,Re):Re()}else s(x,m,_)},Et=(d,m,_,k=!1,C=!1)=>{const{type:x,props:F,ref:O,children:L,dynamicChildren:N,shapeFlag:X,patchFlag:j,dirs:J}=d;if(O!=null&&To(O,null,_,d,!0),X&256){m.ctx.deactivate(d);return}const se=X&1&&J,fe=!Kr(d);let Re;if(fe&&(Re=F&&F.onVnodeBeforeUnmount)&&at(Re,m,d),X&6)q(d.component,_,k);else{if(X&128){d.suspense.unmount(_,k);return}se&&Pt(d,null,m,"beforeUnmount"),X&64?d.type.remove(d,m,_,C,Ie,k):N&&(x!==We||j>0&&j&64)?U(N,m,_,!1,!0):(x===We&&j&384||!C&&X&16)&&U(L,m,_),k&&Ka(d)}(fe&&(Re=F&&F.onVnodeUnmounted)||se)&&qe(()=>{Re&&at(Re,m,d),se&&Pt(d,null,m,"unmounted")},_)},Ka=d=>{const{type:m,el:_,anchor:k,transition:C}=d;if(m===We){S(_,k);return}if(m===zn){P(d);return}const x=()=>{r(_),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(d.shapeFlag&1&&C&&!C.persisted){const{leave:F,delayLeave:O}=C,L=()=>F(_,x);O?O(d.el,x,L):L()}else x()},S=(d,m)=>{let _;for(;d!==m;)_=f(d),r(d),d=_;r(m)},q=(d,m,_)=>{const{bum:k,scope:C,update:x,subTree:F,um:O}=d;k&&ks(k),C.stop(),x&&(x.active=!1,Et(F,d,m,_)),O&&qe(O,m),qe(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(d,m,_,k=!1,C=!1,x=0)=>{for(let F=x;F<d.length;F++)Et(d[F],m,_,k,C)},G=d=>d.shapeFlag&6?G(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ve=(d,m,_)=>{d==null?m._vnode&&Et(m._vnode,null,null,!0):v(m._vnode||null,d,m,null,null,null,_),Eo(),m._vnode=d},Ie={p:v,um:Et,m:Nt,r:Ka,mt:jt,mc:$,pc:_t,pbc:Q,n:G,o:t};let le,ae;return e&&([le,ae]=e(Ie)),{render:ve,hydrate:le,createApp:a_(ve,le)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wl(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=un(r[i]),a.el=o.el),n||Wl(o,a))}}function l_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const u_=t=>t.__isTeleport,kr=t=>t&&(t.disabled||t.disabled===""),xh=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Nc=(t,e)=>{const n=t&&t.to;return De(n)?e?e(n):null:n},h_={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:p,querySelector:g,createText:b,createComment:v}}=l,w=kr(e.props);let{shapeFlag:y,children:E,dynamicChildren:T}=e;if(t==null){const P=e.el=b(""),R=e.anchor=b("");p(P,n,s),p(R,n,s);const I=e.target=Nc(e.props,g),V=e.targetAnchor=b("");I&&(p(V,I),o=o||xh(I));const $=(W,Q)=>{y&16&&u(E,W,Q,r,i,o,a,c)};w?$(n,R):I&&$(I,V)}else{e.el=t.el;const P=e.anchor=t.anchor,R=e.target=t.target,I=e.targetAnchor=t.targetAnchor,V=kr(t.props),$=V?n:R,W=V?P:I;if(o=o||xh(R),T?(f(t.dynamicChildren,T,$,r,i,o,a),Wl(t,e,!0)):c||h(t,e,$,W,r,i,o,a,!1),w)V||Zi(e,n,P,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Q=e.target=Nc(e.props,g);Q&&Zi(e,Q,null,l,0)}else V&&Zi(e,R,I,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!kr(f))&&(i(l),a&16))for(let p=0;p<c.length;p++){const g=c[p];r(g,e,n,!0,!!g.dynamicChildren)}},move:Zi,hydrate:f_};function Zi(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||kr(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function f_(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Nc(e.props,c);if(u){const h=u._lpa||u.firstChild;e.shapeFlag&16&&(kr(e.props)?(e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=l(h,e,u,n,s,r,i)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const d_=h_,zl="components",p_="directives";function g_(t,e){return Gl(zl,t,!0,e)||t}const Pp=Symbol();function m_(t){return De(t)?Gl(zl,t,!1)||t:t||Pp}function y_(t){return Gl(p_,t)}function Gl(t,e,n=!0,s=!1){const r=dt||Fe;if(r){const i=r.type;if(t===zl){const a=Co(i);if(a&&(a===e||a===mt(e)||a===hi(mt(e))))return i}const o=Mh(r[t]||i[t],e)||Mh(r.appContext[t],e);return!o&&s?i:o}}function Mh(t,e){return t&&(t[e]||t[mt(e)]||t[hi(mt(e))])}const We=Symbol(void 0),Vs=Symbol(void 0),ot=Symbol(void 0),zn=Symbol(void 0),Nr=[];let Ut=null;function da(t=!1){Nr.push(Ut=t?null:[])}function Op(){Nr.pop(),Ut=Nr[Nr.length-1]||null}let $s=1;function Dc(t){$s+=t}function xp(t){return t.dynamicChildren=$s>0?Ut||As:null,Op(),$s>0&&Ut&&Ut.push(t),t}function v_(t,e,n,s,r,i){return xp(Xl(t,e,n,s,r,i,!0))}function Yl(t,e,n,s,r){return xp(Ce(t,e,n,s,r,!0))}function bn(t){return t?t.__v_isVNode===!0:!1}function Ot(t,e){return t.type===e.type&&t.key===e.key}function w_(t){}const pa="__vInternal",Mp=({key:t})=>t!=null?t:null,lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ne(t)||te(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function Xl(t,e=null,n=null,s=0,r=null,i=t===We?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mp(e),ref:e&&lo(e),scopeId:ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ql(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),$s>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const Ce=__;function __(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Pp)&&(t=ot),bn(t)){const a=Sn(t,e,!0);return n&&Ql(a,n),a}if(L_(t)&&(t=t.__vccOpts),e){e=Lp(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=li(a)),xe(c)&&(Dl(c)&&!K(c)&&(c=Oe({},c)),e.style=ci(c))}const o=De(t)?1:xw(t)?128:u_(t)?64:xe(t)?4:te(t)?2:0;return Xl(t,e,n,s,r,o,i,!0)}function Lp(t){return t?Dl(t)||pa in t?Oe({},t):t:null}function Sn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Up(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mp(a),ref:e&&e.ref?n&&r?K(r)?r.concat(lo(e)):[r,lo(e)]:lo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor}}function Jl(t=" ",e=0){return Ce(Vs,null,t,e)}function E_(t,e){const n=Ce(zn,null,t);return n.staticCount=e,n}function I_(t="",e=!1){return e?(da(),Yl(ot,null,t)):Ce(ot,null,t)}function ht(t){return t==null||typeof t=="boolean"?Ce(ot):K(t)?Ce(We,null,t.slice()):typeof t=="object"?un(t):Ce(Vs,null,String(t))}function un(t){return t.el===null||t.memo?t:Sn(t)}function Ql(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ql(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(pa in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Jl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Up(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=li([e.class,s.class]));else if(r==="style")e.style=ci([e.style,s.style]);else if(ui(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function at(t,e,n,s=null){pt(t,e,7,[n,s])}function T_(t,e,n,s){let r;const i=n&&n[s];if(K(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function b_(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(K(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.fn)}return t}function S_(t,e,n={},s,r){if(dt.isCE)return Ce("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),da();const o=i&&Fp(i(n)),a=Yl(We,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Fp(t){return t.some(e=>bn(e)?!(e.type===ot||e.type===We&&!Fp(e.children)):!0)?t:null}function C_(t){const e={};for(const n in t)e[br(n)]=t[n];return e}const Pc=t=>t?$p(t)?Zl(t)||t.proxy:Pc(t.parent):null,bo=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pc(t.parent),$root:t=>Pc(t.root),$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>()=>Ll(t.update),$nextTick:t=>di.bind(t.proxy),$watch:t=>Hw.bind(t)}),Oc={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==me&&de(s,e))return o[e]=1,s[e];if(r!==me&&de(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==me&&de(n,e))return o[e]=4,n[e];Ac&&(o[e]=0)}}const u=bo[e];let h,f;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==me&&de(r,e)?(r[e]=n,!0):s!==me&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&de(t,o)||e!==me&&de(e,o)||(a=i[0])&&de(a,o)||de(s,o)||de(bo,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},A_=Oe({},Oc,{get(t,e){if(e!==Symbol.unscopables)return Oc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!yv(e)}}),R_=Rp();let k_=0;function Vp(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||R_,i={uid:k_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bp(s,r),emitsOptions:ap(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cw.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const Bt=()=>Fe||dt,Cn=t=>{Fe=t,t.scope.on()},yn=()=>{Fe&&Fe.scope.off(),Fe=null};function $p(t){return t.vnode.shapeFlag&4}let Bs=!1;function Bp(t,e=!1){Bs=e;const{props:n,children:s}=t.vnode,r=$p(t);e_(t,n,r,e),s_(t,s);const i=r?N_(t,e):void 0;return Bs=!1,i}function N_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xn(new Proxy(t.ctx,Oc));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Hp(t):null;Cn(t),ls();const i=Lt(s,t,0,[t.props,r]);if(us(),yn(),Tl(i)){if(i.then(yn,yn),e)return i.then(o=>{xc(t,o,e)}).catch(o=>{fs(o,t,0)});t.asyncDep=i}else xc(t,i,e)}else jp(t,e)}function xc(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=xl(e)),jp(t,n)}let So,Mc;function D_(t){So=t,Mc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,A_))}}const P_=()=>!So;function jp(t,e,n){const s=t.type;if(!t.render){if(!e&&So&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);s.render=So(r,l)}}t.render=s.render||kt,Mc&&Mc(t)}Cn(t),ls(),Yw(t),us(),yn()}function O_(t){return new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}})}function Hp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=O_(t))},slots:t.slots,emit:t.emit,expose:e}}function Zl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xl(Xn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bo)return bo[n](t)}}))}const x_=/(?:^|[-_])(\w)/g,M_=t=>t.replace(x_,e=>e.toUpperCase()).replace(/[-_]/g,"");function Co(t){return te(t)&&t.displayName||t.name}function qp(t,e,n=!1){let s=Co(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?M_(s):n?"App":"Anonymous"}function L_(t){return te(t)&&"__vccOpts"in t}const bt=(t,e)=>yw(t,e,Bs);function U_(){return null}function F_(){return null}function V_(t){}function $_(t,e){return null}function B_(){return Kp().slots}function j_(){return Kp().attrs}function Kp(){const t=Bt();return t.setupContext||(t.setupContext=Hp(t))}function H_(t,e){const n=K(t)?t.reduce((s,r)=>(s[r]={},s),{}):t;for(const s in e){const r=n[s];r?K(r)||te(r)?n[s]={type:r,default:e[s]}:r.default=e[s]:r===null&&(n[s]={default:e[s]})}return n}function q_(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function K_(t){const e=Bt();let n=t();return yn(),Tl(n)&&(n=n.catch(s=>{throw Cn(e),s})),[n,()=>Cn(e)]}function ga(t,e,n){const s=arguments.length;return s===2?xe(e)&&!K(e)?bn(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bn(n)&&(n=[n]),Ce(t,e,n))}const Wp=Symbol(""),W_=()=>{{const t=gt(Wp);return t||ep("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function z_(){}function G_(t,e,n,s){const r=n[s];if(r&&zp(r,t))return r;const i=e();return i.memo=t.slice(),n[s]=i}function zp(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==e[s])return!1;return $s>0&&Ut&&Ut.push(t),!0}const Gp="3.2.31",Y_={createComponentInstance:Vp,setupComponent:Bp,renderComponentRoot:co,setCurrentRenderingInstance:Hr,isVNode:bn,normalizeVNode:ht},X_=Y_,J_=null,Q_=null,Z_="http://www.w3.org/2000/svg",Vn=typeof document!="undefined"?document:null,Lh=Vn&&Vn.createElement("template"),eE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Vn.createElementNS(Z_,t):Vn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Lh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Lh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nE(t,e,n){const s=t.style,r=De(n);if(n&&!r){for(const i in n)Lc(s,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&Lc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Uh=/\s*!important$/;function Lc(t,e,n){if(K(n))n.forEach(s=>Lc(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=sE(t,e);Uh.test(n)?t.setProperty(Mt(s),n.replace(Uh,""),"important"):t[s]=n}}const Fh=["Webkit","Moz","ms"],Ja={};function sE(t,e){const n=Ja[e];if(n)return n;let s=mt(e);if(s!=="filter"&&s in t)return Ja[e]=s;s=hi(s);for(let r=0;r<Fh.length;r++){const i=Fh[r]+s;if(i in t)return Ja[e]=i}return e}const Vh="http://www.w3.org/1999/xlink";function rE(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vh,e.slice(6,e.length)):t.setAttributeNS(Vh,e,n);else{const i=wv(e);n==null||i&&!Pd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function iE(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Pd(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Ao=Date.now,Yp=!1;if(typeof window!="undefined"){Ao()>document.createEvent("Event").timeStamp&&(Ao=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Yp=!!(t&&Number(t[1])<=53)}let Uc=0;const oE=Promise.resolve(),aE=()=>{Uc=0},cE=()=>Uc||(oE.then(aE),Uc=Ao());function zt(t,e,n,s){t.addEventListener(e,n,s)}function lE(t,e,n,s){t.removeEventListener(e,n,s)}function uE(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hE(e);if(s){const l=i[e]=fE(s,r);zt(t,a,l,c)}else o&&(lE(t,a,o,c),i[e]=void 0)}}const $h=/(?:Once|Passive|Capture)$/;function hE(t){let e;if($h.test(t)){e={};let n;for(;n=t.match($h);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Mt(t.slice(2)),e]}function fE(t,e){const n=s=>{const r=s.timeStamp||Ao();(Yp||r>=n.attached-1)&&pt(dE(s,n.value),e,5,[s])};return n.value=t,n.attached=cE(),n}function dE(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Bh=/^on[a-z]/,pE=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?tE(t,s,r):e==="style"?nE(t,n,s):ui(e)?_l(e)||uE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gE(t,e,s,r))?iE(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rE(t,e,s,r))};function gE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bh.test(e)&&De(n)?!1:e in t}function Xp(t,e){const n=gi(t);class s extends ma{constructor(i){super(n,i,e)}}return s.def=n,s}const mE=t=>Xp(t,lg),yE=typeof HTMLElement!="undefined"?HTMLElement:class{};class ma extends yE{constructor(e,n={},s){super();this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,di(()=>{this._connected||(Vc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:r,styles:i}=s,o=!K(r),a=r?o?Object.keys(r):r:[];let c;if(o)for(const l in this._props){const u=r[l];(u===Number||u&&u.type===Number)&&(this._props[l]=In(this._props[l]),(c||(c=Object.create(null)))[l]=!0)}this._numberProps=c;for(const l of Object.keys(this))l[0]!=="_"&&this._setProp(l,this[l],!0,!1);for(const l of a.map(mt))Object.defineProperty(this,l,{get(){return this._getProp(l)},set(u){this._setProp(l,u)}});this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=In(n)),this._setProp(mt(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Mt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Mt(e),n+""):n||this.removeAttribute(Mt(e))))}_update(){Vc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ce(this._def,Oe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(r,...i)=>{this.dispatchEvent(new CustomEvent(r,{detail:i}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof ma){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function vE(t="$style"){{const e=Bt();if(!e)return me;const n=e.type.__cssModules;if(!n)return me;const s=n[t];return s||me}}function wE(t){const e=Bt();if(!e)return;const n=()=>Fc(e.subTree,t(e.proxy));lp(n),yi(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),vi(()=>s.disconnect())})}function Fc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Fc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)jh(t.el,e);else if(t.type===We)t.children.forEach(n=>Fc(n,e));else if(t.type===zn){let{el:n,anchor:s}=t;for(;n&&(jh(n,e),n!==s);)n=n.nextSibling}}function jh(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const on="transition",fr="animation",eu=(t,{slots:e})=>ga(ql,Qp(t),e);eu.displayName="Transition";const Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_E=eu.props=Oe({},ql.props,Jp),xn=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hh=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function Qp(t){const e={};for(const D in t)D in Jp||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=EE(r),b=g&&g[0],v=g&&g[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:E,onLeave:T,onLeaveCancelled:P,onBeforeAppear:R=w,onAppear:I=y,onAppearCancelled:V=E}=e,$=(D,Z,re)=>{Un(D,Z?u:a),Un(D,Z?l:o),re&&re()},W=(D,Z)=>{Un(D,p),Un(D,f),Z&&Z()},Q=D=>(Z,re)=>{const jt=D?I:y,Pe=()=>$(Z,D,re);xn(jt,[Z,Pe]),qh(()=>{Un(Z,D?c:i),qt(Z,D?u:a),Hh(jt)||Kh(Z,s,b,Pe)})};return Oe(e,{onBeforeEnter(D){xn(w,[D]),qt(D,i),qt(D,o)},onBeforeAppear(D){xn(R,[D]),qt(D,c),qt(D,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(D,Z){const re=()=>W(D,Z);qt(D,h),eg(),qt(D,f),qh(()=>{Un(D,h),qt(D,p),Hh(T)||Kh(D,s,v,re)}),xn(T,[D,re])},onEnterCancelled(D){$(D,!1),xn(E,[D])},onAppearCancelled(D){$(D,!0),xn(V,[D])},onLeaveCancelled(D){W(D),xn(P,[D])}})}function EE(t){if(t==null)return null;if(xe(t))return[Qa(t.enter),Qa(t.leave)];{const e=Qa(t);return[e,e]}}function Qa(t){return In(t)}function qt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function qh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let IE=0;function Kh(t,e,n,s){const r=t._endId=++IE,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Zp(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Zp(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(on+"Delay"),i=s(on+"Duration"),o=Wh(r,i),a=s(fr+"Delay"),c=s(fr+"Duration"),l=Wh(a,c);let u=null,h=0,f=0;e===on?o>0&&(u=on,h=o,f=i.length):e===fr?l>0&&(u=fr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?on:fr:null,f=u?u===on?i.length:c.length:0);const p=u===on&&/\b(transform|all)(,|$)/.test(n[on+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function Wh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>zh(n)+zh(t[s])))}function zh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function eg(){return document.body.offsetHeight}const tg=new WeakMap,ng=new WeakMap,TE={name:"TransitionGroup",props:Oe({},_E,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Bt(),s=Hl();let r,i;return ha(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!RE(r[0].el,n.vnode.el,o))return;r.forEach(SE),r.forEach(CE);const a=r.filter(AE);eg(),a.forEach(c=>{const l=c.el,u=l.style;qt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Un(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ue(t),a=Qp(o);let c=o.tag||We;r=i,i=e.default?la(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Jn(u,Fs(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Jn(u,Fs(u,a,s,n)),tg.set(u,u.el.getBoundingClientRect())}return Ce(c,null,i)}}},bE=TE;function SE(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function CE(t){ng.set(t,t.el.getBoundingClientRect())}function AE(t){const e=tg.get(t),n=ng.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function RE(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Zp(s);return r.removeChild(s),i}const An=t=>{const e=t.props["onUpdate:modelValue"];return K(e)?n=>ks(e,n):e};function kE(t){t.target.composing=!0}function Gh(t){const e=t.target;e.composing&&(e.composing=!1,NE(e,"input"))}function NE(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Ro={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=An(r);const i=s||r.props&&r.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=In(a)),t._assign(a)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",kE),zt(t,"compositionend",Gh),zt(t,"change",Gh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=An(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&In(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},tu={deep:!0,created(t,e,n){t._assign=An(n),zt(t,"change",()=>{const s=t._modelValue,r=js(t),i=t.checked,o=t._assign;if(K(s)){const a=ea(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(cs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(rg(t,i))})},mounted:Yh,beforeUpdate(t,e,n){t._assign=An(n),Yh(t,e,n)}};function Yh(t,{value:e,oldValue:n},s){t._modelValue=e,K(e)?t.checked=ea(e,s.props.value)>-1:cs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=En(e,rg(t,!0)))}const nu={created(t,{value:e},n){t.checked=En(e,n.props.value),t._assign=An(n),zt(t,"change",()=>{t._assign(js(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=An(s),e!==n&&(t.checked=En(e,s.props.value))}},sg={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=cs(e);zt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?In(js(o)):js(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=An(s)},mounted(t,{value:e}){Xh(t,e)},beforeUpdate(t,e,n){t._assign=An(n)},updated(t,{value:e}){Xh(t,e)}};function Xh(t,e){const n=t.multiple;if(!(n&&!K(e)&&!cs(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=js(i);if(n)K(e)?i.selected=ea(e,o)>-1:i.selected=e.has(o);else if(En(js(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function js(t){return"_value"in t?t._value:t.value}function rg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const DE={created(t,e,n){eo(t,e,n,null,"created")},mounted(t,e,n){eo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){eo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){eo(t,e,n,s,"updated")}};function eo(t,e,n,s,r){let i;switch(t.tagName){case"SELECT":i=sg;break;case"TEXTAREA":i=Ro;break;default:switch(n.props&&n.props.type){case"checkbox":i=tu;break;case"radio":i=nu;break;default:i=Ro}}const o=i[r];o&&o(t,e,n,s)}function PE(){Ro.getSSRProps=({value:t})=>({value:t}),nu.getSSRProps=({value:t},e)=>{if(e.props&&En(e.props.value,t))return{checked:!0}},tu.getSSRProps=({value:t},e)=>{if(K(t)){if(e.props&&ea(t,e.props.value)>-1)return{checked:!0}}else if(cs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const OE=["ctrl","shift","alt","meta"],xE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OE.some(n=>t[`${n}Key`]&&!e.includes(n))},ME=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=xE[e[r]];if(i&&i(n,e))return}return t(n,...s)},LE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},UE=(t,e)=>n=>{if(!("key"in n))return;const s=Mt(n.key);if(e.some(r=>r===s||LE[r]===s))return t(n)},ig={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):dr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),dr(t,!0),s.enter(t)):s.leave(t,()=>{dr(t,!1)}):dr(t,e))},beforeUnmount(t,{value:e}){dr(t,e)}};function dr(t,e){t.style.display=e?t._vod:"none"}function FE(){ig.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const og=Oe({patchProp:pE},eE);let Dr,Jh=!1;function ag(){return Dr||(Dr=kp(og))}function cg(){return Dr=Jh?Dr:Np(og),Jh=!0,Dr}const Vc=(...t)=>{ag().render(...t)},lg=(...t)=>{cg().hydrate(...t)},VE=(...t)=>{const e=ag().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ug(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},$E=(...t)=>{const e=cg().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ug(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function ug(t){return De(t)?document.querySelector(t):t}let Qh=!1;const BE=()=>{Qh||(Qh=!0,PE(),FE())},jE=()=>{};var pk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",compile:jE,EffectScope:Sl,ReactiveEffect:fi,customRef:pw,effect:Uv,effectScope:Cl,getCurrentScope:Ov,isProxy:Dl,isReactive:Jt,isReadonly:Us,isRef:Ne,isShallow:Nl,markRaw:Xn,onScopeDispose:xv,proxyRefs:xl,reactive:hs,readonly:kl,ref:Kn,shallowReactive:Yd,shallowReadonly:lw,shallowRef:Xd,stop:Fv,toRaw:ue,toRef:Zd,toRefs:Qd,triggerRef:hw,unref:Ns,camelize:mt,capitalize:hi,normalizeClass:li,normalizeProps:Tv,normalizeStyle:ci,toDisplayString:Sv,toHandlerKey:br,BaseTransition:ql,Comment:ot,Fragment:We,KeepAlive:zw,Static:zn,Suspense:Lw,Teleport:d_,Text:Vs,callWithAsyncErrorHandling:pt,callWithErrorHandling:Lt,cloneVNode:Sn,compatUtils:Q_,computed:bt,createBlock:Yl,createCommentVNode:I_,createElementBlock:v_,createElementVNode:Xl,createHydrationRenderer:Np,createPropsRestProxy:q_,createRenderer:kp,createSlots:b_,createStaticVNode:E_,createTextVNode:Jl,createVNode:Ce,defineAsyncComponent:Kw,defineComponent:gi,defineEmits:F_,defineExpose:V_,defineProps:U_,get devtools(){return Ts},getCurrentInstance:Bt,getTransitionRawChildren:la,guardReactiveProps:Lp,h:ga,handleError:fs,initCustomFormatter:z_,inject:gt,isMemoSame:zp,isRuntimeOnly:P_,isVNode:bn,mergeDefaults:H_,mergeProps:Up,nextTick:di,onActivated:fp,onBeforeMount:gp,onBeforeUnmount:fa,onBeforeUpdate:mp,onDeactivated:dp,onErrorCaptured:_p,onMounted:yi,onRenderTracked:wp,onRenderTriggered:vp,onServerPrefetch:yp,onUnmounted:vi,onUpdated:ha,openBlock:da,popScopeId:Rw,provide:Rr,pushScopeId:Aw,queuePostFlushCb:Ul,registerRuntimeCompiler:D_,renderList:T_,renderSlot:S_,resolveComponent:g_,resolveDirective:y_,resolveDynamicComponent:m_,resolveFilter:J_,resolveTransitionHooks:Fs,setBlockTracking:Dc,setDevtoolsHook:op,setTransitionHooks:Jn,ssrContextKey:Wp,ssrUtils:X_,toHandlers:C_,transformVNodeArgs:w_,useAttrs:j_,useSSRContext:W_,useSlots:B_,useTransitionState:Hl,version:Gp,warn:ep,watch:Wn,watchEffect:Bw,watchPostEffect:lp,watchSyncEffect:jw,withAsyncContext:K_,withCtx:$l,withDefaults:$_,withDirectives:i_,withMemo:G_,withScopeId:kw,Transition:eu,TransitionGroup:bE,VueElement:ma,createApp:VE,createSSRApp:$E,defineCustomElement:Xp,defineSSRCustomElement:mE,hydrate:lg,initDirectivesForSSR:BE,render:Vc,useCssModule:vE,useCssVars:wE,vModelCheckbox:tu,vModelDynamic:DE,vModelRadio:nu,vModelSelect:sg,vModelText:Ro,vShow:ig,withKeys:UE,withModifiers:ME});/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const hg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",tr=t=>hg?Symbol(t):"_vr_"+t,HE=tr("rvlm"),Zh=tr("rvd"),ya=tr("r"),su=tr("rl"),$c=tr("rvl"),bs=typeof window!="undefined";function qE(t){return t.__esModule||hg&&t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Za(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Pr=()=>{},KE=/\/$/,WE=t=>t.replace(KE,"");function ec(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=XE(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function zE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GE(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!YE(t[n],e[n]))return!1;return!0}function YE(t,e){return Array.isArray(t)?tf(t,e):Array.isArray(e)?tf(e,t):t===e}function tf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function XE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Or||(Or={}));function JE(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),WE(t)}const QE=/^[^#]+#/;function ZE(t,e){return t.replace(QE,"#")+e}function e0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const va=()=>({left:window.pageXOffset,top:window.pageYOffset});function t0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=e0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nf(t,e){return(history.state?history.state.position-e:-1)+t}const Bc=new Map;function n0(t,e){Bc.set(t,e)}function s0(t){const e=Bc.get(t);return Bc.delete(t),e}let r0=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ef(c,"")}return ef(n,t)+s+r}function i0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=dg(t,location),g=n.value,b=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}v=b?f.position-b.position:0}else s(p);r.forEach(w=>{w(n.value,g,{delta:v,type:Wr.pop,direction:v?v>0?Or.forward:Or.back:Or.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:va()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function sf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?va():null}}function o0(t){const{history:e,location:n}=window,s={value:dg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:r0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=_e({},e.state,sf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=_e({},r.value,e.state,{forward:c,scroll:va()});i(u.current,u,!0);const h=_e({},sf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function gk(t){t=JE(t);const e=o0(t),n=i0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=_e({location:"",base:t,go:s,createHref:ZE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function a0(t){return typeof t=="string"||t&&typeof t=="object"}function pg(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gg=tr("nf");var rf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rf||(rf={}));function qs(t,e){return _e(new Error,{type:t,[gg]:!0},e)}function Mn(t,e){return t instanceof Error&&gg in t&&(e==null||!!(t.type&e))}const of="[^/]+?",c0={sensitive:!1,strict:!1,start:!0,end:!0},l0=/[.+*?^${}()[\]/\\]/g;function u0(t,e){const n=_e({},c0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(l0,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:b,optional:v,regexp:w}=f;i.push({name:g,repeatable:b,optional:v});const y=w||of;if(y!==of){p+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+T.message)}}let E=b?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=v&&l.length<2?`(?:/${E})`:"/"+E),v&&(E+="?"),r+=E,p+=20,v&&(p+=-8),b&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=i[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:b,optional:v}=p,w=g in l?l[g]:"";if(Array.isArray(w)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Array.isArray(w)?w.join("/"):w;if(!y)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function h0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function f0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=h0(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const d0={type:0,value:""},p0=/[a-zA-Z0-9_]/;function g0(t){if(!t)return[[]];if(t==="/")return[[d0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:p0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function m0(t,e,n){const s=u0(g0(t.path),n),r=_e(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function y0(t,e){const n=[],s=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,g=w0(u);g.aliasOf=f&&f.record;const b=cf(e,u),v=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)v.push(_e({},g,{components:f?f.record.components:g.components,path:T,aliasOf:f?f.record:g}))}let w,y;for(const E of v){const{path:T}=E;if(h&&T[0]!=="/"){const P=h.record.path,R=P[P.length-1]==="/"?"":"/";E.path=h.record.path+(T&&R+T)}if(w=m0(E,h,b),f?f.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),p&&u.name&&!af(w)&&o(u.name)),"children"in g){const P=g.children;for(let R=0;R<P.length;R++)i(P[R],w,f&&f.children[R])}f=f||w,c(w)}return y?()=>{o(y)}:Pr}function o(u){if(pg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&f0(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!af(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},g,b;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw qs(1,{location:u});b=f.record.name,p=_e(v0(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(y=>y.re.test(g)),f&&(p=f.parse(g),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw qs(1,{location:u,currentLocation:h});b=f.record.name,p=_e({},h.params,u.params),g=f.stringify(p)}const v=[];let w=f;for(;w;)v.unshift(w.record),w=w.parent;return{name:b,path:g,params:p,matched:v,meta:E0(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function v0(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function w0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function _0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function E0(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function cf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const mg=/#/g,I0=/&/g,T0=/\//g,b0=/=/g,S0=/\?/g,yg=/\+/g,C0=/%5B/g,A0=/%5D/g,vg=/%5E/g,R0=/%60/g,wg=/%7B/g,k0=/%7C/g,_g=/%7D/g,N0=/%20/g;function ru(t){return encodeURI(""+t).replace(k0,"|").replace(C0,"[").replace(A0,"]")}function D0(t){return ru(t).replace(wg,"{").replace(_g,"}").replace(vg,"^")}function jc(t){return ru(t).replace(yg,"%2B").replace(N0,"+").replace(mg,"%23").replace(I0,"%26").replace(R0,"`").replace(wg,"{").replace(_g,"}").replace(vg,"^")}function P0(t){return jc(t).replace(b0,"%3D")}function O0(t){return ru(t).replace(mg,"%23").replace(S0,"%3F")}function x0(t){return t==null?"":O0(t).replace(T0,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function M0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yg," "),o=i.indexOf("="),a=ko(o<0?i:i.slice(0,o)),c=o<0?null:ko(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function lf(t){let e="";for(let n in t){const s=t[n];if(n=P0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&jc(i)):[s&&jc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function L0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function pr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(qs(4,{from:n,to:e})):h instanceof Error?a(h):a0(h)?a(qs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function tc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(U0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(hn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=qE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hn(f,n,s,i,o)()}))}}return r}function U0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uf(t){const e=gt(ya),n=gt(su),s=bt(()=>e.resolve(Ns(t.to))),r=bt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hs.bind(null,u));if(f>-1)return f;const p=hf(c[l-2]);return l>1&&hf(u)===p&&h[h.length-1].path!==p?h.findIndex(Hs.bind(null,c[l-2])):f}),i=bt(()=>r.value>-1&&B0(n.params,s.value.params)),o=bt(()=>r.value>-1&&r.value===n.matched.length-1&&fg(n.params,s.value.params));function a(c={}){return $0(c)?e[Ns(t.replace)?"replace":"push"](Ns(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:bt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const F0=gi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uf,setup(t,{slots:e}){const n=hs(uf(t)),{options:s}=gt(ya),r=bt(()=>({[ff(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ga("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),V0=F0;function $0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function B0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t!=null?t:e!=null?e:n,j0=gi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=gt($c),r=bt(()=>t.route||s.value),i=gt(Zh,0),o=bt(()=>r.value.matched[i]);Rr(Zh,i+1),Rr(HE,o),Rr($c,r);const a=Kn();return Wn(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Hs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return df(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=ga(u,_e({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return df(n.default,{Component:b,route:c})||b}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const H0=j0;function mk(t){const e=y0(t.routes,t),n=t.parseQuery||M0,s=t.stringifyQuery||lf,r=t.history,i=pr(),o=pr(),a=pr(),c=Xd(an);let l=an;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Za.bind(null,S=>""+S),h=Za.bind(null,x0),f=Za.bind(null,ko);function p(S,q){let U,G;return pg(S)?(U=e.getRecordMatcher(S),G=q):G=S,e.addRoute(G,U)}function g(S){const q=e.getRecordMatcher(S);q&&e.removeRoute(q)}function b(){return e.getRoutes().map(S=>S.record)}function v(S){return!!e.getRecordMatcher(S)}function w(S,q){if(q=_e({},q||c.value),typeof S=="string"){const ae=ec(n,S,q.path),d=e.resolve({path:ae.path},q),m=r.createHref(ae.fullPath);return _e(ae,d,{params:f(d.params),hash:ko(ae.hash),redirectedFrom:void 0,href:m})}let U;if("path"in S)U=_e({},S,{path:ec(n,S.path,q.path).path});else{const ae=_e({},S.params);for(const d in ae)ae[d]==null&&delete ae[d];U=_e({},S,{params:h(S.params)}),q.params=h(q.params)}const G=e.resolve(U,q),ve=S.hash||"";G.params=u(f(G.params));const Ie=zE(s,_e({},S,{hash:D0(ve),path:G.path})),le=r.createHref(Ie);return _e({fullPath:Ie,hash:ve,query:s===lf?L0(S.query):S.query||{}},G,{redirectedFrom:void 0,href:le})}function y(S){return typeof S=="string"?ec(n,S,c.value.path):_e({},S)}function E(S,q){if(l!==S)return qs(8,{from:q,to:S})}function T(S){return I(S)}function P(S){return T(_e(y(S),{replace:!0}))}function R(S){const q=S.matched[S.matched.length-1];if(q&&q.redirect){const{redirect:U}=q;let G=typeof U=="function"?U(S):U;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=y(G):{path:G},G.params={}),_e({query:S.query,hash:S.hash,params:S.params},G)}}function I(S,q){const U=l=w(S),G=c.value,ve=S.state,Ie=S.force,le=S.replace===!0,ae=R(U);if(ae)return I(_e(y(ae),{state:ve,force:Ie,replace:le}),q||U);const d=U;d.redirectedFrom=q;let m;return!Ie&&GE(s,G,U)&&(m=qs(16,{to:d,from:G}),ms(G,G,!0,!1)),(m?Promise.resolve(m):$(d,G)).catch(_=>Mn(_)?_:Ee(_,d,G)).then(_=>{if(_){if(Mn(_,2))return I(_e(y(_.to),{state:ve,force:Ie,replace:le}),q||d)}else _=Q(d,G,!0,le,ve);return W(d,G,_),_})}function V(S,q){const U=E(S,q);return U?Promise.reject(U):Promise.resolve()}function $(S,q){let U;const[G,ve,Ie]=q0(S,q);U=tc(G.reverse(),"beforeRouteLeave",S,q);for(const ae of G)ae.leaveGuards.forEach(d=>{U.push(hn(d,S,q))});const le=V.bind(null,S,q);return U.push(le),vs(U).then(()=>{U=[];for(const ae of i.list())U.push(hn(ae,S,q));return U.push(le),vs(U)}).then(()=>{U=tc(ve,"beforeRouteUpdate",S,q);for(const ae of ve)ae.updateGuards.forEach(d=>{U.push(hn(d,S,q))});return U.push(le),vs(U)}).then(()=>{U=[];for(const ae of S.matched)if(ae.beforeEnter&&!q.matched.includes(ae))if(Array.isArray(ae.beforeEnter))for(const d of ae.beforeEnter)U.push(hn(d,S,q));else U.push(hn(ae.beforeEnter,S,q));return U.push(le),vs(U)}).then(()=>(S.matched.forEach(ae=>ae.enterCallbacks={}),U=tc(Ie,"beforeRouteEnter",S,q),U.push(le),vs(U))).then(()=>{U=[];for(const ae of o.list())U.push(hn(ae,S,q));return U.push(le),vs(U)}).catch(ae=>Mn(ae,8)?ae:Promise.reject(ae))}function W(S,q,U){for(const G of a.list())G(S,q,U)}function Q(S,q,U,G,ve){const Ie=E(S,q);if(Ie)return Ie;const le=q===an,ae=bs?history.state:{};U&&(G||le?r.replace(S.fullPath,_e({scroll:le&&ae&&ae.scroll},ve)):r.push(S.fullPath,ve)),c.value=S,ms(S,q,U,le),_t()}let D;function Z(){D=r.listen((S,q,U)=>{const G=w(S),ve=R(G);if(ve){I(_e(ve,{replace:!0}),G).catch(Pr);return}l=G;const Ie=c.value;bs&&n0(nf(Ie.fullPath,U.delta),va()),$(G,Ie).catch(le=>Mn(le,12)?le:Mn(le,2)?(I(le.to,G).then(ae=>{Mn(ae,20)&&!U.delta&&U.type===Wr.pop&&r.go(-1,!1)}).catch(Pr),Promise.reject()):(U.delta&&r.go(-U.delta,!1),Ee(le,G,Ie))).then(le=>{le=le||Q(G,Ie,!1),le&&(U.delta?r.go(-U.delta,!1):U.type===Wr.pop&&Mn(le,20)&&r.go(-1,!1)),W(G,Ie,le)}).catch(Pr)})}let re=pr(),jt=pr(),Pe;function Ee(S,q,U){_t(S);const G=jt.list();return G.length?G.forEach(ve=>ve(S,q,U)):console.error(S),Promise.reject(S)}function ye(){return Pe&&c.value!==an?Promise.resolve():new Promise((S,q)=>{re.add([S,q])})}function _t(S){Pe||(Pe=!0,Z(),re.list().forEach(([q,U])=>S?U(S):q()),re.reset())}function ms(S,q,U,G){const{scrollBehavior:ve}=t;if(!bs||!ve)return Promise.resolve();const Ie=!U&&s0(nf(S.fullPath,0))||(G||!U)&&history.state&&history.state.scroll||null;return di().then(()=>ve(S,q,Ie)).then(le=>le&&t0(le)).catch(le=>Ee(le,S,q))}const Ht=S=>r.go(S);let Nt;const Et=new Set;return{currentRoute:c,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:b,resolve:w,options:t,push:T,replace:P,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:jt.add,isReady:ye,install(S){const q=this;S.component("RouterLink",V0),S.component("RouterView",H0),S.config.globalProperties.$router=q,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ns(c)}),bs&&!Nt&&c.value===an&&(Nt=!0,T(r.location).catch(ve=>{}));const U={};for(const ve in an)U[ve]=bt(()=>c.value[ve]);S.provide(ya,q),S.provide(su,hs(U)),S.provide($c,c);const G=S.unmount;Et.add(S),S.unmount=function(){Et.delete(S),Et.size<1&&(l=an,D&&D(),c.value=an,Nt=!1,Pe=!1),G()}}}}function vs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function q0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hs(l,c))||r.push(c))}return[n,s,r]}function yk(){return gt(ya)}function vk(){return gt(su)}var K0=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Eg;const wa=t=>Eg=t,Ig=Symbol();function Hc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xr||(xr={}));function wk(){const t=Cl(!0),e=t.run(()=>Kn({}));let n=[],s=[];const r=Xn({install(i){wa(r),r._a=i,i.provide(Ig,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!K0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Tg=()=>{};function pf(t,e,n,s=Tg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Bt()&&vi(r),r}function ws(t,...e){t.slice().forEach(n=>{n(...e)})}function qc(t,e){for(const n in e){const s=e[n],r=t[n];Hc(r)&&Hc(s)&&!Ne(s)&&!Jt(s)?t[n]=qc(r,s):t[n]=s}return t}const W0=Symbol();function z0(t){return!Hc(t)||!t.hasOwnProperty(W0)}const{assign:Kt}=Object;function G0(t){return!!(Ne(t)&&t.effect)}function Y0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Qd(n.state.value[t]);return Kt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Xn(bt(()=>{wa(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=bg(t,l,e,n),c.$reset=function(){const h=r?r():{};this.$patch(f=>{Kt(f,h)})},c}function bg(t,e,n={},s,r){let i;const o=n.state,a=Kt({actions:{}},n),c={deep:!0};let l,u,h=Xn([]),f=Xn([]),p;const g=s.state.value[t];!o&&!g&&(s.state.value[t]={}),Kn({});function b(R){let I;l=u=!1,typeof R=="function"?(R(s.state.value[t]),I={type:xr.patchFunction,storeId:t,events:p}):(qc(s.state.value[t],R),I={type:xr.patchObject,payload:R,storeId:t,events:p}),di().then(()=>{l=!0}),u=!0,ws(h,I,s.state.value[t])}const v=Tg;function w(){i.stop(),h=[],f=[],s._s.delete(t)}function y(R,I){return function(){wa(s);const V=Array.from(arguments),$=[],W=[];function Q(re){$.push(re)}function D(re){W.push(re)}ws(f,{args:V,name:R,store:T,after:Q,onError:D});let Z;try{Z=I.apply(this&&this.$id===t?this:T,V)}catch(re){throw ws(W,re),re}return Z instanceof Promise?Z.then(re=>(ws($,re),re)).catch(re=>(ws(W,re),Promise.reject(re))):(ws($,Z),Z)}}const E={_p:s,$id:t,$onAction:pf.bind(null,f),$patch:b,$reset:v,$subscribe(R,I={}){const V=pf(h,R,I.detached,()=>$()),$=i.run(()=>Wn(()=>s.state.value[t],W=>{(I.flush==="sync"?u:l)&&R({storeId:t,type:xr.direct,events:p},W)},Kt({},c,I)));return V},$dispose:w},T=hs(Kt({},E));s._s.set(t,T);const P=s._e.run(()=>(i=Cl(),i.run(()=>e())));for(const R in P){const I=P[R];if(Ne(I)&&!G0(I)||Jt(I))o||(g&&z0(I)&&(Ne(I)?I.value=g[R]:qc(I,g[R])),s.state.value[t][R]=I);else if(typeof I=="function"){const V=y(R,I);P[R]=V,a.actions[R]=I}}return Kt(T,P),Kt(ue(T),P),Object.defineProperty(T,"$state",{get:()=>s.state.value[t],set:R=>{b(I=>{Kt(I,R)})}}),s._p.forEach(R=>{Kt(T,i.run(()=>R({store:T,app:s._a,pinia:s,options:a})))}),g&&o&&n.hydrate&&n.hydrate(T.$state,g),l=!0,u=!0,T}function _k(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Bt();return a=a||l&&gt(Ig),a&&wa(a),a=Eg,a._s.has(s)||(i?bg(s,e,r,a):Y0(s,r,a)),a._s.get(s)}return o.$id=s,o}var to,X0=new Uint8Array(16);function J0(){if(!to&&(to=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!to))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return to(X0)}var Q0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Z0(t){return typeof t=="string"&&Q0.test(t)}var He=[];for(var nc=0;nc<256;++nc)He.push((nc+256).toString(16).substr(1));function eI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(He[t[e+0]]+He[t[e+1]]+He[t[e+2]]+He[t[e+3]]+"-"+He[t[e+4]]+He[t[e+5]]+"-"+He[t[e+6]]+He[t[e+7]]+"-"+He[t[e+8]]+He[t[e+9]]+"-"+He[t[e+10]]+He[t[e+11]]+He[t[e+12]]+He[t[e+13]]+He[t[e+14]]+He[t[e+15]]).toLowerCase();if(!Z0(n))throw TypeError("Stringified UUID is invalid");return n}function Ek(t,e,n){t=t||{};var s=t.random||(t.rng||J0)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=s[r];return e}return eI(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nI=function(t){const e=Sg(t);return Cg.encodeByteArray(e,!0)},Ag=function(t){return nI(t).replace(/\./g,"")},sI=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function kg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){return $e().indexOf("Electron/")>=0}function Dg(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return $e().indexOf("MSAppHost/")>=0}function aI(){return typeof indexedDB=="object"}function cI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class ds extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=lI,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?uI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ds(r,a,s)}}function uI(t,e){return t.replace(hI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const hI=/\{\$([^}]+)}/g;function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gf(i)&&gf(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function _r(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=sc),r.error===void 0&&(r.error=sc),r.complete===void 0&&(r.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class mf{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Pg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Og(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Pg{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Og(this._transaction.objectStore(e))}}class Og{constructor(e){this._store=e}index(e){return new yf(this._store.index(e))}createIndex(e,n,s){return new yf(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return Er(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return Er(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Er(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Er(e,"Error clearing IndexedDB object store")}}class yf{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Er(n,"Error reading from IndexedDB")}}function mI(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new mf(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new mf(i.result),o.oldVersion,o.newVersion,new Pg(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class Qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vI(t){return t===Fn?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const EI={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},II=pe.INFO,TI={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},bI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=TI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=II,this._logHandler=bI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function CI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kc="@firebase/app",vf="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new iu("@firebase/app"),AI="@firebase/app-compat",RI="@firebase/analytics-compat",kI="@firebase/analytics",NI="@firebase/app-check-compat",DI="@firebase/app-check",PI="@firebase/auth",OI="@firebase/auth-compat",xI="@firebase/database",MI="@firebase/database-compat",LI="@firebase/functions",UI="@firebase/functions-compat",FI="@firebase/installations",VI="@firebase/installations-compat",$I="@firebase/messaging",BI="@firebase/messaging-compat",jI="@firebase/performance",HI="@firebase/performance-compat",qI="@firebase/remote-config",KI="@firebase/remote-config-compat",WI="@firebase/storage",zI="@firebase/storage-compat",GI="@firebase/firestore",YI="@firebase/firestore-compat",XI="firebase",JI="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="[DEFAULT]",QI={[Kc]:"fire-core",[AI]:"fire-core-compat",[kI]:"fire-analytics",[RI]:"fire-analytics-compat",[DI]:"fire-app-check",[NI]:"fire-app-check-compat",[PI]:"fire-auth",[OI]:"fire-auth-compat",[xI]:"fire-rtdb",[MI]:"fire-rtdb-compat",[LI]:"fire-fn",[UI]:"fire-fn-compat",[FI]:"fire-iid",[VI]:"fire-iid-compat",[$I]:"fire-fcm",[BI]:"fire-fcm-compat",[jI]:"fire-perf",[HI]:"fire-perf-compat",[qI]:"fire-rc",[KI]:"fire-rc-compat",[WI]:"fire-gcs",[zI]:"fire-gcs-compat",[GI]:"fire-fst",[YI]:"fire-fst-compat","fire-js":"fire-js",[XI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,Wc=new Map;function ZI(t,e){try{t.container.addComponent(e)}catch(n){ou.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Wc.has(e))return ou.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,t);for(const n of Do.values())ZI(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Zn=new wi("app","Firebase",eT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=JI;function Ik(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xg,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});const r=Do.get(s);if(r){if(No(t,r.options)&&No(n,r.config))return r;throw Zn.create("duplicate-app",{appName:s})}const i=new _I(s);for(const a of Wc.values())i.addComponent(a);const o=new tT(t,n,i);return Do.set(s,o),o}function Mg(t=xg){const e=Do.get(t);if(!e)throw Zn.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let r=(s=QI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ou.warn(a.join(" "));return}Ks(new Qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firebase-heartbeat-database",sT=1,zr="firebase-heartbeat-store";let rc=null;function Lg(){return rc||(rc=mI(nT,sT,(t,e)=>{switch(e){case 0:t.createObjectStore(zr)}}).catch(t=>{throw Zn.create("storage-open",{originalErrorMessage:t.message})})),rc}async function rT(t){try{return(await Lg()).transaction(zr).objectStore(zr).get(Ug(t))}catch(e){throw Zn.create("storage-get",{originalErrorMessage:e.message})}}async function wf(t,e){try{const s=(await Lg()).transaction(zr,"readwrite");return await s.objectStore(zr).put(e,Ug(t)),s.complete}catch(n){throw Zn.create("storage-set",{originalErrorMessage:n.message})}}function Ug(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_f();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=oT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_f(),{heartbeatsToSend:n,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),r=Ag(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _f(){return new Date().toISOString().substring(0,10)}function cT(t,e=iT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ef(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ef(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ef(t){return Ag(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){Ks(new Qn("platform-logger",e=>new SI(e),"PRIVATE")),Ks(new Qn("heartbeat",e=>new aT(e),"PRIVATE")),vn(Kc,vf,t),vn(Kc,vf,"esm2017"),vn("fire-js","")}uT("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function cu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Fg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=Fg,Vg=new wi("auth","Firebase",Fg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=new iu("@firebase/auth");function uo(t,...e){If.logLevel<=pe.ERROR&&If.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw lu(t,...e)}function Ft(t,...e){return lu(t,...e)}function $g(t,e,n){const s=Object.assign(Object.assign({},hT()),{[e]:n});return new wi("auth","Firebase",s).create(e,{appName:t.name})}function fT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ct(t,"argument-error"),$g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vg.create(t,...e)}function ee(t,e,...n){if(!t)throw lu(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function en(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;function Yt(t){en(t instanceof Function,"Expected a class definition");let e=Tf.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e){const n=au(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(No(i,e!=null?e:{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function pT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gT(){return bf()==="http:"||bf()==="https:"}function bf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gT()||kg()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=Rg()||Ng()}get(){return mT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Ii(3e4,6e4);function Ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,s,r={}){return jg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=_i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Bg.fetch()(Hg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vT),e);try{const r=new _T(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ic(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ic(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ic(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $g(t,u,l);Ct(t,u)}}catch(r){if(r instanceof ds)throw r;Ct(t,"network-request-failed")}}async function Si(t,e,n,s,r={}){const i=await bi(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?uu(t.config,r):`${t.config.apiScheme}://${r}`}class _T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),wT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ic(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ft(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function IT(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(t,e=!1){const n=vt(t),s=await n.getIdToken(e),r=hu(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Mr(oc(r.auth_time)),issuedAtTime:Mr(oc(r.iat)),expirationTime:Mr(oc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function hu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const r=sI(n);return r?JSON.parse(r):(uo("Failed to decode base64 JWT payload"),null)}catch(r){return uo("Caught error parsing JWT payload as JSON",r),null}}function bT(t){const e=hu(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ds&&ST(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gr(t,IT(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?kT(i.providerUserInfo):[],a=RT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AT(t){const e=vt(t);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function kT(t){return t.map(e=>{var{providerId:n}=e,s=cu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(t,e){const n=await jg(t,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Hg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):bT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await NT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Yr;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return AT(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,ET(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:P,providerData:R,stsTokenManager:I}=n;ee(E&&I,e,"internal-error");const V=Yr.fromJSON(this.name,I);ee(typeof E=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),ee(typeof T=="boolean",e,"internal-error"),ee(typeof P=="boolean",e,"internal-error"),cn(p,e.name),cn(g,e.name),cn(b,e.name),cn(v,e.name),cn(w,e.name),cn(y,e.name);const $=new Gn({uid:E,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:P,photoURL:g,phoneNumber:p,tenantId:b,stsTokenManager:V,createdAt:w,lastLoginAt:y});return R&&Array.isArray(R)&&($.providerData=R.map(W=>Object.assign({},W))),v&&($._redirectEventId=v),$}static async _fromIdTokenResponse(e,n,s=!1){const r=new Yr;r.updateFromServerResponse(n);const i=new Gn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Po(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kg.type="NONE";const Sf=Kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ho(this.userKey,r.apiKey,i),this.fullPersistenceKey=ho("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ps(Yt(Sf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Yt(Sf);const o=ho(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Gn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ps(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ps(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xg(e))return"Blackberry";if(Jg(e))return"Webos";if(fu(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wg(t=$e()){return/firefox\//i.test(t)}function fu(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(t=$e()){return/crios\//i.test(t)}function Gg(t=$e()){return/iemobile/i.test(t)}function Yg(t=$e()){return/android/i.test(t)}function Xg(t=$e()){return/blackberry/i.test(t)}function Jg(t=$e()){return/webos/i.test(t)}function _a(t=$e()){return/iphone|ipad|ipod/i.test(t)}function DT(t=$e()){var e;return _a(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function PT(){return Dg()&&document.documentMode===10}function Qg(t=$e()){return _a(t)||Yg(t)||Jg(t)||Xg(t)||/windows phone/i.test(t)||Gg(t)}function OT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e=[]){let n;switch(t){case"Browser":n=Cf($e());break;case"Worker":n=`${Cf($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ci(t){return vt(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}async function MT(t,e){return bi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e){return Si(t,"POST","/v1/accounts:signInWithPassword",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}async function FT(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends du{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Xr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Xr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return LT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UT(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return MT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return Si(t,"POST","/v1/accounts:signInWithIdp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="http://localhost";class es extends du{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=cu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new es(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Os(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:VT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BT(t){const e=wr(_r(t)).link,n=e?wr(_r(e)).deep_link_id:null,s=wr(_r(t)).deep_link_id;return(s?wr(_r(s)).link:null)||s||n||e||t}class pu{constructor(e){var n,s,r,i,o,a;const c=wr(_r(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=$T((r=c.mode)!==null&&r!==void 0?r:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BT(e);try{return new pu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.providerId=nr.PROVIDER_ID}static credential(e,n){return Xr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pu.parseLink(n);return ee(s,"argument-error"),Xr._fromEmailAndCode(e,s.code,s.tenantId)}}nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends gu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ai{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ai{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ai{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ai{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){return Si(t,"POST","/v1/accounts:signUp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Gn._fromIdTokenResponse(e,s,r),o=Rf(s);return new ts({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Rf(s);return new ts({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends ds{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oo(e,n,s,r)}}function em(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,s):i})}async function HT(t,e,n=!1){const s=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Gr(t,em(s,r,e,t),n);ee(i.idToken,s,"internal-error");const o=hu(i.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),ts._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e,n=!1){const s="signIn",r=await em(t,s,e),i=await ts._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function KT(t,e){return tm(Ci(t),e)}async function Tk(t,e,n){const s=Ci(t),r=await jT(s,{returnSecureToken:!0,email:e,password:n}),i=await ts._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function bk(t,e,n){return KT(vt(t),nr.credential(e,n))}function Sk(t,e,n,s){return vt(t).onAuthStateChanged(e,n,s)}function Ck(t){return vt(t).signOut()}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){const t=$e();return fu(t)||_a(t)}const zT=1e3,GT=10;class sm extends nm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WT()&&OT(),this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);PT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,GT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sm.type="LOCAL";const YT=sm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rm.type="SESSION";const im=rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await XT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=mu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function QT(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return typeof Vt().WorkerGlobalScope!="undefined"&&typeof Vt().importScripts=="function"}async function ZT(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tb(){return om()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebaseLocalStorageDb",nb=1,Mo="firebaseLocalStorage",cm="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function sb(){const t=indexedDB.deleteDatabase(am);return new Ri(t).toPromise()}function Gc(){const t=indexedDB.open(am,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mo,{keyPath:cm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mo)?e(s):(s.close(),await sb(),e(await Gc()))})})}async function kf(t,e,n){const s=Ia(t,!0).put({[cm]:e,value:n});return new Ri(s).toPromise()}async function rb(t,e){const n=Ia(t,!1).get(e),s=await new Ri(n).toPromise();return s===void 0?null:s.value}function Nf(t,e){const n=Ia(t,!0).delete(e);return new Ri(n).toPromise()}const ib=800,ob=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ob)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZT(),!this.activeServiceWorker)return;this.sender=new JT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await kf(e,xo,"1"),await Nf(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>kf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ia(r,!1).getAll();return new Ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const ab=lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lb(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ft("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",cb().appendChild(s)})}function ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){return e?Yt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends du{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hb(t){return tm(t.auth,new yu(t),t.bypassAuthState)}function fb(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),qT(n,new yu(t),t.bypassAuthState)}async function db(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),HT(n,new yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return db;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:Ct(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new Ii(2e3,1e4);async function Ak(t,e,n){const s=Ci(t);fT(t,e,gu);const r=um(s,n);return new Bn(s,"signInViaPopup",e,r).executeNotNull()}class Bn extends hm{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="pendingRedirect",ac=new Map;class mb extends hm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const s=await yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yb(t,e){const n=wb(e),s=vb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function vb(t){return Yt(t._redirectPersistence)}function wb(t){return ho(gb,t.config.apiKey,t.name)}async function _b(t,e,n=!1){const s=Ci(t),r=um(s,e),o=await new mb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=10*60*1e3;class Ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Df(e))}saveEventToCache(e){this.cachedEventUids.add(Df(e)),this.lastProcessedEventTime=Date.now()}}function Df(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cb=/^https?/;async function Ab(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Rb(n))return}catch{}Ct(t,"unauthorized-domain")}function Rb(t){const e=zc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Cb.test(n))return!1;if(Sb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Ii(3e4,6e4);function Pf(){const t=Vt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nb(t){return new Promise((e,n)=>{var s,r,i;function o(){Pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pf(),n(Ft(t,"network-request-failed"))},timeout:kb.get()})}if((r=(s=Vt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((i=Vt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=ub("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},lb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fo=null,e})}let fo=null;function Db(t){return fo=fo||Nb(t),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Ii(5e3,15e3),Ob="__/auth/iframe",xb="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ub(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uu(e,xb):`https://${t.config.authDomain}/${Ob}`,s={apiKey:e.apiKey,appName:t.name,v:Ei},r=Lb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${_i(s).slice(1)}`}async function Fb(t){const e=await Db(t),n=Vt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Ub(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Vt().setTimeout(()=>{i(o)},Pb.get());function c(){Vt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$b=500,Bb=600,jb="_blank",Hb="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qb(t,e,n,s=$b,r=Bb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=$e().toLowerCase();n&&(a=zg(l)?jb:n),Wg(l)&&(e=e||Hb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(DT(l)&&a!=="_self")return Kb(e||"",a),new Of(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Of(h)}function Kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="__/auth/handler",zb="emulator/auth/handler";function xf(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ei,eventId:r};if(e instanceof gu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ai){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Gb(t)}?${_i(a).slice(1)}`}function Gb({config:t}){return t.emulator?uu(t,zb):`https://${t.authDomain}/${Wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class Yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=_b}async _openPopup(e,n,s,r){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=xf(e,n,s,zc(),r);return qb(e,o,mu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),QT(xf(e,n,s,zc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Fb(e),s=new Ib(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[cc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ab(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qg()||fu()||_a()}}const Xb=Yb;var Mf="@firebase/auth",Lf="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zb(t){Ks(new Qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zg(t)},u=new xT(a,c,l);return pT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new Qn("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(s=>new Jb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Mf,Lf,Qb(t)),vn(Mf,Lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t=Mg()){const e=au(t,"auth");return e.isInitialized()?e.getImmediate():dT(t,{popupRedirectResolver:Xb,persistence:[ab,YT,im]})}Zb("Browser");var eS="firebase",tS="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(eS,tS,"app");var nS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,vu=vu||{},ne=nS||self;function Lo(){}function Yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ki(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sS(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++rS)}var lc="closure_uid_"+(1e9*Math.random()>>>0),rS=0;function iS(t,e,n){return t.call.apply(t.bind,arguments)}function oS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=iS:ze=oS,ze.apply(null,arguments)}function no(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var aS=0,cS={};Dn.prototype.s=!1;Dn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),aS!=0)){var t=sS(this);delete cS[t]}};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},pm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function lS(t){e:{var e=eC;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Uf(t){return Array.prototype.concat.apply([],arguments)}function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Uo(t){return/^[\s\xa0]*$/.test(t)}var Ff=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nt(t,e){return t.indexOf(e)!=-1}function uc(t,e){return t<e?-1:t>e?1:0}var st;e:{var Vf=ne.navigator;if(Vf){var $f=Vf.userAgent;if($f){st=$f;break e}}st=""}function _u(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function gm(t){const e={};for(const n in t)e[n]=t[n];return e}var Bf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Bf.length;i++)n=Bf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Eu(t){return Eu[" "](t),t}Eu[" "]=Lo;function uS(t){var e=dS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hS=nt(st,"Opera"),Ws=nt(st,"Trident")||nt(st,"MSIE"),ym=nt(st,"Edge"),Xc=ym||Ws,vm=nt(st,"Gecko")&&!(nt(st.toLowerCase(),"webkit")&&!nt(st,"Edge"))&&!(nt(st,"Trident")||nt(st,"MSIE"))&&!nt(st,"Edge"),fS=nt(st.toLowerCase(),"webkit")&&!nt(st,"Edge");function wm(){var t=ne.document;return t?t.documentMode:void 0}var Fo;e:{var hc="",fc=function(){var t=st;if(vm)return/rv:([^\);]+)(\)|;)/.exec(t);if(ym)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fS)return/WebKit\/(\S+)/.exec(t);if(hS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fc&&(hc=fc?fc[1]:""),Ws){var dc=wm();if(dc!=null&&dc>parseFloat(hc)){Fo=String(dc);break e}}Fo=hc}var dS={};function pS(){return uS(function(){let t=0;const e=Ff(String(Fo)).split("."),n=Ff("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=uc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||uc(r[2].length==0,i[2].length==0)||uc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Jc;if(ne.document&&Ws){var jf=wm();Jc=jf||parseInt(Fo,10)||void 0}else Jc=void 0;var gS=Jc,mS=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Lo,e),ne.removeEventListener("test",Lo,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function Jr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vm){e:{try{Eu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.Z.h.call(this)}}Je(Jr,Ze);var yS={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),vS=0;function wS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++vS,this.ca=this.fa=!1}function Ta(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ba(t){this.src=t,this.g={},this.h=0}ba.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Zc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new wS(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Qc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=dm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Iu="closure_lm_"+(1e6*Math.random()|0),pc={};function _m(t,e,n,s,r){if(s&&s.once)return Im(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_m(t,e[i],n,s,r);return null}return n=Su(n),t&&t[Ni]?t.N(e,n,ki(s)?!!s.capture:!!s,r):Em(t,e,n,!1,s,r)}function Em(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ki(r)?!!r.capture:!!r,a=bu(t);if(a||(t[Iu]=a=new ba(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=_S(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)mS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(bm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _S(){function t(n){return e.call(t.src,t.listener,n)}var e=ES;return t}function Im(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Im(t,e[i],n,s,r);return null}return n=Su(n),t&&t[Ni]?t.O(e,n,ki(s)?!!s.capture:!!s,r):Em(t,e,n,!0,s,r)}function Tm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tm(t,e[i],n,s,r);else s=ki(s)?!!s.capture:!!s,n=Su(n),t&&t[Ni]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Zc(i,n,s,r),-1<n&&(Ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zc(e,n,s,r)),(n=-1<t?e[t]:null)&&Tu(n))}function Tu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ni])Qc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=bu(e))?(Qc(n,t),n.h==0&&(n.src=null,e[Iu]=null)):Ta(t)}}}function bm(t){return t in pc?pc[t]:pc[t]="on"+t}function ES(t,e){if(t.ca)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Tu(t),t=n.call(s,e)}return t}function bu(t){return t=t[Iu],t instanceof ba?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function Be(){Dn.call(this),this.i=new ba(this),this.P=this,this.I=null}Je(Be,Dn);Be.prototype[Ni]=!0;Be.prototype.removeEventListener=function(t,e,n,s){Tm(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),mm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=so(o,s,!0,e)&&r}if(o=e.g=t,r=so(o,s,!0,e)&&r,r=so(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=so(o,s,!1,e)&&r}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ta(n[s]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function so(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Qc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Cu=ne.JSON.stringify;function IS(){var t=Cm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TS{constructor(){this.h=this.g=null}add(e,n){const s=Sm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bS,t=>t.reset());class bS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SS(t){ne.setTimeout(()=>{throw t},0)}function Au(t,e){el||CS(),tl||(el(),tl=!0),Cm.add(t,e)}var el;function CS(){var t=ne.Promise.resolve(void 0);el=function(){t.then(AS)}}var tl=!1,Cm=new TS;function AS(){for(var t;t=IS();){try{t.h.call(t.g)}catch(n){SS(n)}var e=Sm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tl=!1}function Sa(t,e){Be.call(this),this.h=t||1,this.g=e||ne,this.j=ze(this.kb,this),this.l=Date.now()}Je(Sa,Be);B=Sa.prototype;B.da=!1;B.S=null;B.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(Ru(this),this.start()))}};B.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ru(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}B.M=function(){Sa.Z.M.call(this),Ru(this),delete this.g};function ku(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Am(t){t.g=ku(()=>{t.g=null,t.i&&(t.i=!1,Am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RS extends Dn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Am(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(t){Dn.call(this),this.h=t,this.g={}}Je(Qr,Dn);var Hf=[];function Rm(t,e,n,s){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var r=0;r<n.length;r++){var i=_m(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function km(t){_u(t.g,function(e,n){this.g.hasOwnProperty(n)&&Tu(e)},t),t.g={}}Qr.prototype.M=function(){Qr.Z.M.call(this),km(this)};Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ca(){this.g=!0}Ca.prototype.Aa=function(){this.g=!1};function kS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function NS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ss(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PS(t,n)+(s?" "+s:"")})}function DS(t,e){t.info(function(){return"TIMEOUT: "+e})}Ca.prototype.info=function(){};function PS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Cu(n)}catch{return e}}var ps={},qf=null;function Aa(){return qf=qf||new Be}ps.Ma="serverreachability";function Nm(t){Ze.call(this,ps.Ma,t)}Je(Nm,Ze);function Zr(t){const e=Aa();Ge(e,new Nm(e,t))}ps.STAT_EVENT="statevent";function Dm(t,e){Ze.call(this,ps.STAT_EVENT,t),this.stat=e}Je(Dm,Ze);function rt(t){const e=Aa();Ge(e,new Dm(e,t))}ps.Na="timingevent";function Pm(t,e){Ze.call(this,ps.Na,t),this.size=e}Je(Pm,Ze);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ra={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Om={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Nu(){}Nu.prototype.h=null;function Kf(t){return t.h||(t.h=t.i())}function xm(){}var Pi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Du(){Ze.call(this,"d")}Je(Du,Ze);function Pu(){Ze.call(this,"c")}Je(Pu,Ze);var nl;function ka(){}Je(ka,Nu);ka.prototype.g=function(){return new XMLHttpRequest};ka.prototype.i=function(){return{}};nl=new ka;function Oi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Qr(this),this.P=OS,t=Xc?125:void 0,this.W=new Sa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Mm}function Mm(){this.i=null,this.g="",this.h=!1}var OS=45e3,sl={},Vo={};B=Oi.prototype;B.setTimeout=function(t){this.P=t};function rl(t,e,n){t.K=1,t.v=Da(tn(e)),t.s=n,t.U=!0,Lm(t,null)}function Lm(t,e){t.F=Date.now(),xi(t),t.A=tn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Hm(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Mm,t.g=ly(t.l,n?e:null,!t.s),0<t.O&&(t.L=new RS(ze(t.Ia,t,t.g),t.O)),Rm(t.V,t.g,"readystatechange",t.gb),e=t.H?gm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Zr(1),kS(t.j,t.u,t.A,t.m,t.X,t.s)}B.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};B.Ia=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Xc||this.g&&(this.h.h||this.g.ga()||Yf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Zr(3):Zr(2)),Na(this);var n=this.g.ba();this.N=n;t:if(Um(this)){var s=Yf(this.g);t="";var r=s.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jn(this),Lr(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,NS(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var l=a;break t}}l=null}if(n=l)Ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,il(this,n);else{this.i=!1,this.o=3,rt(12),jn(this),Lr(this);break e}}this.U?(Fm(this,u,o),Xc&&this.i&&u==3&&(Rm(this.V,this.W,"tick",this.fb),this.W.start())):(Ss(this.j,this.m,o,null),il(this,o)),u==4&&jn(this),this.i&&!this.I&&(u==4?iy(this.l,this):(this.i=!1,xi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),jn(this),Lr(this)}}}catch{}finally{}};function Um(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Fm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=xS(t,n),r==Vo){e==4&&(t.o=4,rt(14),s=!1),Ss(t.j,t.m,null,"[Incomplete Response]");break}else if(r==sl){t.o=4,rt(15),Ss(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ss(t.j,t.m,r,null),il(t,r);Um(t)&&r!=Vo&&r!=sl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bu(e),e.L=!0,rt(11))):(Ss(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),Lr(t))}B.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&(Na(this),Fm(this,t,e),this.i&&t!=4&&xi(this))}};function xS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Vo:(n=Number(e.substring(n,s)),isNaN(n)?sl:(s+=1,s+n>e.length?Vo:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,jn(this)};function xi(t){t.Y=Date.now()+t.P,Vm(t,t.P)}function Vm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Di(ze(t.eb,t),e)}function Na(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}B.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(DS(this.j,this.A),this.K!=2&&(Zr(3),rt(17)),jn(this),this.o=2,Lr(this)):Vm(this,this.Y-t)};function Lr(t){t.l.G==0||t.I||iy(t.l,t)}function jn(t){Na(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ru(t.W),km(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function il(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ol(n.i,t))){if(n.I=t.N,!t.J&&ol(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ho(n),xa(n);else break e;$u(n),rt(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Di(ze(n.ab,n),6e3));if(1>=Wm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&Ho(n),!Uo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;!i.g&&(nt(g,"spdy")||nt(g,"quic")||nt(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Mu(i,i.h),i.h=null))}if(s.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,ke(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=cy(s,s.H?s.la:null,s.W),o.J){zm(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Na(a),xi(a)),s.g=o}else sy(s);0<n.l.length&&Ma(n)}else l[0]!="stop"&&l[0]!="close"||Hn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Hn(n,7):Vu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Zr(4)}catch{}}function MS(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Yc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ou(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yc(t)||typeof t=="string")pm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Yc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=MS(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function sr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof sr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}B=sr.prototype;B.R=function(){xu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};B.T=function(){return xu(this),this.g.concat()};function xu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ns(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ns(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}B.get=function(t,e){return ns(this.h,t)?this.h[t]:e};B.set=function(t,e){ns(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};B.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ns(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var $m=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function LS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ss(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ss){this.g=e!==void 0?e:t.g,$o(this,t.j),this.s=t.s,Bo(this,t.i),jo(this,t.m),this.l=t.l,e=t.h;var n=new ei;n.i=e.i,e.g&&(n.g=new sr(e.g),n.h=e.h),Wf(this,n),this.o=t.o}else t&&(n=String(t).match($m))?(this.g=!!e,$o(this,n[1]||"",!0),this.s=Ur(n[2]||""),Bo(this,n[3]||"",!0),jo(this,n[4]),this.l=Ur(n[5]||"",!0),Wf(this,n[6]||"",!0),this.o=Ur(n[7]||"")):(this.g=!!e,this.h=new ei(null,this.g))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ir(e,zf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ir(e,zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ir(n,n.charAt(0)=="/"?BS:$S,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ir(n,HS)),t.join("")};function tn(t){return new ss(t)}function $o(t,e,n){t.j=n?Ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bo(t,e,n){t.i=n?Ur(e,!0):e}function jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wf(t,e,n){e instanceof ei?(t.h=e,qS(t.h,t.g)):(n||(e=Ir(e,jS)),t.h=new ei(e,t.g))}function ke(t,e,n){t.h.set(e,n)}function Da(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function US(t){return t instanceof ss?tn(t):new ss(t,void 0)}function FS(t,e,n,s){var r=new ss(null,void 0);return t&&$o(r,t),e&&Bo(r,e),n&&jo(r,n),s&&(r.l=s),r}function Ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zf=/[#\/\?@]/g,$S=/[#\?:]/g,BS=/[#\?]/g,jS=/[#\?@]/g,HS=/#/g;function ei(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new sr,t.h=0,t.i&&LS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=ei.prototype;B.add=function(t,e){Pn(this),this.i=null,t=rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bm(t,e){Pn(t),e=rr(t,e),ns(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ns(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&xu(t)))}function jm(t,e){return Pn(t),e=rr(t,e),ns(t.g.h,e)}B.forEach=function(t,e){Pn(this),this.g.forEach(function(n,s){pm(n,function(r){t.call(e,r,s,this)},this)},this)};B.T=function(){Pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};B.R=function(t){Pn(this);var e=[];if(typeof t=="string")jm(this,t)&&(e=Uf(e,this.g.get(rr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Uf(e,t[n])}return e};B.set=function(t,e){return Pn(this),this.i=null,t=rr(this,t),jm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Hm(t,e,n){Bm(t,e),0<n.length&&(t.i=null,t.g.set(rr(t,e),wu(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qS(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Bm(this,s),Hm(this,r,n))},t)),t.j=e}var KS=class{constructor(t,e){this.h=t,this.g=e}};function qm(t){this.l=t||WS,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ea&&ne.g.Ea()&&ne.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WS=10;function Km(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wm(t){return t.h?1:t.g?t.g.size:0}function ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mu(t,e){t.g?t.g.add(e):t.h=e}function zm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qm.prototype.cancel=function(){if(this.i=Gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wu(t.i)}function Lu(){}Lu.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};Lu.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function zS(){this.g=new Lu}function GS(t,e,n){const s=n||"";try{Ou(t,function(r,i){let o=r;ki(r)&&(o=Cu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function YS(t,e){const n=new Ca;if(ne.Image){const s=new Image;s.onload=no(ro,n,s,"TestLoadImage: loaded",!0,e),s.onerror=no(ro,n,s,"TestLoadImage: error",!1,e),s.onabort=no(ro,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=no(ro,n,s,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ro(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Mi(t){this.l=t.$b||null,this.j=t.ib||!1}Je(Mi,Nu);Mi.prototype.g=function(){return new Pa(this.l,this.j)};Mi.prototype.i=function(t){return function(){return t}}({});function Pa(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Uu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Pa,Be);var Uu=0;B=Pa.prototype;B.open=function(t,e){if(this.readyState!=Uu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ti(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=Uu};B.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ne.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ym(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ym(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}B.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Li(this):ti(this),this.readyState==3&&Ym(this)}};B.Ua=function(t){this.g&&(this.response=this.responseText=t,Li(this))};B.Ta=function(t){this.g&&(this.response=t,Li(this))};B.ha=function(){this.g&&Li(this)};function Li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ti(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XS=ne.JSON.parse;function Ue(t){Be.call(this),this.headers=new sr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xm,this.K=this.L=!1}Je(Ue,Be);var Xm="",JS=/^https?$/i,QS=["POST","PUT"];B=Ue.prototype;B.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?Kf(this.u):Kf(nl),this.g.onreadystatechange=ze(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Gf(this,i);return}t=n||"";const r=new sr(this.headers);s&&Ou(s,function(i,o){r.set(o,i)}),s=lS(r.T()),n=ne.FormData&&t instanceof ne.FormData,!(0<=dm(QS,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zm(this),0<this.B&&((this.K=ZS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.pa,this)):this.A=ku(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gf(this,i)}};function ZS(t){return Ws&&pS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function eC(t){return t.toLowerCase()=="content-type"}B.pa=function(){typeof vu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Gf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jm(t),Oa(t)}function Jm(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Oa(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oa(this,!0)),Ue.Z.M.call(this)};B.Fa=function(){this.s||(this.F||this.v||this.l?Qm(this):this.cb())};B.cb=function(){Qm(this)};function Qm(t){if(t.h&&typeof vu!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)ku(t.Fa,0,t);else if(Ge(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match($m)[1]||null;if(!r&&ne.self&&ne.self.location){var i=ne.self.location.protocol;r=i.substr(0,i.length-1)}s=!JS.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Jm(t)}}finally{Oa(t)}}}}function Oa(t,e){if(t.g){Zm(t);const n=t.g,s=t.C[0]?Lo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}B.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};B.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XS(e)}};function Yf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Da=function(){return this.m};B.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function tC(t){let e="";return _u(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=tC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function gr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ey(t){this.za=0,this.l=[],this.h=new Ca,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=gr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=gr("baseRetryDelayMs",5e3,t),this.$a=gr("retryDelaySeedMs",1e4,t),this.Ya=gr("forwardChannelMaxRetries",2,t),this.ra=gr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new qm(t&&t.concurrentRequestLimit),this.Ca=new zS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}B=ey.prototype;B.ma=8;B.G=1;function Vu(t){if(ty(t),t.G==3){var e=t.V++,n=tn(t.F);ke(n,"SID",t.J),ke(n,"RID",e),ke(n,"TYPE","terminate"),Ui(t,n),e=new Oi(t,t.h,e,void 0),e.K=2,e.v=Da(tn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=ly(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xi(e)}ay(t)}B.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function xa(t){t.g&&(Bu(t),t.g.cancel(),t.g=null)}function ty(t){xa(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Ho(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function mc(t,e){t.l.push(new KS(t.Za++,e)),t.G==3&&Ma(t)}function Ma(t){Km(t.i)||t.m||(t.m=!0,Au(t.Ha,t),t.C=0)}function nC(t,e){return Wm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Di(ze(t.Ha,t,e),oy(t,t.C)),t.C++,!0)}B.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Oi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=gm(i),mm(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ny(this,r,e),n=tn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),Ui(this,n),this.o&&i&&Fu(n,this.o,i),Mu(this.i,r),this.Ra&&ke(n,"TYPE","init"),this.ja?(ke(n,"$req",e),ke(n,"SID","null"),r.$=!0,rl(r,n,null)):rl(r,n,e),this.G=2}}else this.G==3&&(t?Xf(this,t):this.l.length==0||Km(this.i)||Xf(this))};function Xf(t,e){var n;e?n=e.m:n=t.V++;const s=tn(t.F);ke(s,"SID",t.J),ke(s,"RID",n),ke(s,"AID",t.U),Ui(t,s),t.o&&t.s&&Fu(s,t.o,t.s),n=new Oi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ny(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mu(t.i,n),rl(n,s,e)}function Ui(t,e){t.j&&Ou({},function(n,s){ke(e,s,n)})}function ny(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ze(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{GS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function sy(t){t.g||t.u||(t.Y=1,Au(t.Ga,t),t.A=0)}function $u(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Di(ze(t.Ga,t),oy(t,t.A)),t.A++,!0)}B.Ga=function(){if(this.u=null,ry(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Di(ze(this.bb,this),t)}};B.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),xa(this),ry(this))};function Bu(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function ry(t){t.g=new Oi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=tn(t.oa);ke(e,"RID","rpc"),ke(e,"SID",t.J),ke(e,"CI",t.N?"0":"1"),ke(e,"AID",t.U),Ui(t,e),ke(e,"TYPE","xmlhttp"),t.o&&t.s&&Fu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Da(tn(e)),n.s=null,n.U=!0,Lm(n,t)}B.ab=function(){this.v!=null&&(this.v=null,xa(this),$u(this),rt(19))};function Ho(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function iy(t,e){var n=null;if(t.g==e){Ho(t),Bu(t),t.g=null;var s=2}else if(ol(t.i,e))n=e.D,zm(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Aa(),Ge(s,new Pm(s,n,e,r)),Ma(t)}else sy(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&nC(t,e)||s==2&&$u(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}}function oy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Hn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ze(t.jb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||$o(n,"https"),Da(n)),YS(n.toString(),s)}else rt(2);t.G=0,t.j&&t.j.va(e),ay(t),ty(t)}B.jb=function(t){t?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function ay(t){t.G=0,t.I=-1,t.j&&((Gm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wu(t.l),t.l.length=0),t.j.ua())}function cy(t,e,n){let s=US(n);if(s.i!="")e&&Bo(s,e+"."+s.i),jo(s,s.m);else{const r=ne.location;s=FS(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&_u(t.aa,function(r,i){ke(s,i,r)}),e=t.D,n=t.sa,e&&n&&ke(s,e,n),ke(s,"VER",t.ma),Ui(t,s),s}function ly(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ue(new Mi({ib:!0})):new Ue(t.qa),e.L=t.H,e}function uy(){}B=uy.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Oa=function(){};function qo(){if(Ws&&!(10<=Number(gS)))throw Error("Environmental error: no available transport.")}qo.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Be.call(this),this.g=new ey(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ir(this)}Je(wt,Be);wt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Au(ze(t.hb,t,e))),rt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=cy(t,null,t.W),Ma(t)};wt.prototype.close=function(){Vu(this.g)};wt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mc(this.g,e)}else this.v?(e={},e.__data__=Cu(t),mc(this.g,e)):mc(this.g,t)};wt.prototype.M=function(){this.g.j=null,delete this.j,Vu(this.g),delete this.g,wt.Z.M.call(this)};function hy(t){Du.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(hy,Du);function fy(){Pu.call(this),this.status=1}Je(fy,Pu);function ir(t){this.g=t}Je(ir,uy);ir.prototype.xa=function(){Ge(this.g,"a")};ir.prototype.wa=function(t){Ge(this.g,new hy(t))};ir.prototype.va=function(t){Ge(this.g,new fy(t))};ir.prototype.ua=function(){Ge(this.g,"b")};qo.prototype.createWebChannel=qo.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Ra.NO_ERROR=0;Ra.TIMEOUT=8;Ra.HTTP_ERROR=6;Om.COMPLETE="complete";xm.EventType=Pi;Pi.OPEN="a";Pi.CLOSE="b";Pi.ERROR="c";Pi.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.La;Ue.prototype.getLastErrorCode=Ue.prototype.Da;Ue.prototype.getStatus=Ue.prototype.ba;Ue.prototype.getResponseJson=Ue.prototype.Qa;Ue.prototype.getResponseText=Ue.prototype.ga;Ue.prototype.send=Ue.prototype.ea;var sC=function(){return new qo},rC=function(){return Aa()},yc=Ra,iC=Om,oC=ps,Jf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},aC=Mi,io=xm,cC=Ue;const Qf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new iu("@firebase/firestore");function Zf(){return rs.logLevel}function z(t,...e){if(rs.logLevel<=pe.DEBUG){const n=e.map(ju);rs.debug(`Firestore (${or}): ${t}`,...n)}}function Rn(t,...e){if(rs.logLevel<=pe.ERROR){const n=e.map(ju);rs.error(`Firestore (${or}): ${t}`,...n)}}function ed(t,...e){if(rs.logLevel<=pe.WARN){const n=e.map(ju);rs.warn(`Firestore (${or}): ${t}`,...n)}}function ju(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function Te(t,e){t||ie()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends ds{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class hC{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new lC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new ct(e)}}class fC{constructor(e,n,s){this.type="FirstParty",this.user=ct.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class dC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new fC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.p=n.token,new pC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hu.A=-1;class dy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=mC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new et(0,0))}static max(){return new ce(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(),s===void 0?s=e.length-n:s>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ni.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ni{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const yC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends ni{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return yC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.fields=e,e.sort(lt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const vC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=vC.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function my(t){const e=t.mapValue.fields.__previous_value__;return gy(e)?my(e):e}function si(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ys{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ys("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ys&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function _C(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gy(t)?4:EC(t)?9:10:ie()}function $t(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=kn(s.timestampValue),o=kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Gs(s.bytesValue).isEqual(Gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?Ko(i)===Ko(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(td(i)!==td(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function ri(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=is(t),s=is(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nd(t.timestampValue,e.timestampValue);case 4:return nd(si(t),si(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Gs(r),a=Gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(Le(r.latitude),Le(i.latitude));return o!==0?o:ge(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Xs(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const f=Xs(o[a[u]],c[l[u]]);if(f!==0)return f}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ie()}}function nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=kn(t),s=kn(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function xs(t){return cl(t)}function cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=cl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${cl(s.fields[a])}`;return i+"}"}(t.mapValue):ie();var e,n}function sd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ll(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function rd(t){return!!t&&"nullValue"in t}function id(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function Fr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Fr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fr(n)}setAll(e){let n=lt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Fr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];po(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(Fr(this.value))}}function yy(t){const e=[];return ar(t.fields,(n,s)=>{const r=new lt([n]);if(po(s)){const i=yy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new al(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Qe(e,0,ce.min(),ce.min(),Rt.empty(),0)}static newFoundDocument(e,n,s){return new Qe(e,1,n,ce.min(),s,0)}static newNoDocument(e,n){return new Qe(e,2,n,ce.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,ce.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function IC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ce.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Js(r,Y.empty(),e)}function TC(t){return new Js(t.readTime,t.key,-1)}class Js{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Js(ce.min(),Y.empty(),-1)}static max(){return new Js(ce.max(),Y.empty(),-1)}}function bC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function od(t,e=null,n=[],s=[],r=null,i=null,o=null){return new SC(t,e,n,s,r,i,o)}function Ku(t){const e=oe(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+xs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),cr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>xs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>xs(s)).join(",")),e.P=n}return e.P}function CC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xs(s.value)}`;var s}).join(", ")}]`),cr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>xs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>xs(n)).join(",")),`Target(${e})`}function Wu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!xC(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!$t(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cd(t.startAt,e.startAt)&&cd(t.endAt,e.endAt)}function ul(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class it extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new AC(e,n,s):n==="array-contains"?new NC(e,s):n==="in"?new DC(e,s):n==="not-in"?new PC(e,s):n==="array-contains-any"?new OC(e,s):new it(e,n,s)}static V(e,n,s){return n==="in"?new RC(e,s):new kC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Xs(n,this.value)):n!==null&&is(this.value)===is(n)&&this.v(Xs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class AC extends it{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.v(n)}}class RC extends it{constructor(e,n){super(e,"in",n),this.keys=vy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kC extends it{constructor(e,n){super(e,"not-in",n),this.keys=vy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}class NC extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&ri(n.arrayValue,this.value)}}class DC extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}}class PC extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}}class OC extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ri(this.value.arrayValue,s))}}class Wo{constructor(e,n){this.position=e,this.inclusive=n}}class Vr{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ad(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function MC(t,e,n,s,r,i,o,a){return new Fi(t,e,n,s,r,i,o,a)}function wy(t){return new Fi(t)}function go(t){return!cr(t.limit)&&t.limitType==="F"}function zo(t){return!cr(t.limit)&&t.limitType==="L"}function _y(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ey(t){for(const e of t.filters)if(e.S())return e.field;return null}function Iy(t){return t.collectionGroup!==null}function ii(t){const e=oe(t);if(e.D===null){e.D=[];const n=Ey(e),s=_y(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Vr(n)),e.D.push(new Vr(lt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Vr(lt.keyField(),i))}}}return e.D}function os(t){const e=oe(t);if(!e.C)if(e.limitType==="F")e.C=od(e.path,e.collectionGroup,ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ii(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vr(i.field,o))}const s=e.endAt?new Wo(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Wo(e.startAt.position,!e.startAt.inclusive):null;e.C=od(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function LC(t,e,n){return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function La(t,e){return Wu(os(t),os(e))&&t.limitType===e.limitType}function Ty(t){return`${Ku(os(t))}|lt:${t.limitType}`}function hl(t){return`Query(target=${CC(os(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Y.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ad(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ii(n),s)||n.endAt&&!function(r,i,o){const a=ad(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ii(n),s))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function by(t){return(e,n)=>{let s=!1;for(const r of ii(t)){const i=FC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FC(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Xs(a,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function Cy(t){return{integerValue:""+t}}function VC(t,e){return _C(e)?Cy(e):Sy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._=void 0}}function $C(t,e,n){return t instanceof Go?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof oi?Ry(t,e):t instanceof ai?ky(t,e):function(s,r){const i=Ay(s,r),o=ld(i)+ld(s.k);return ll(i)&&ll(s.k)?Cy(o):Sy(s.M,o)}(t,e)}function BC(t,e,n){return t instanceof oi?Ry(t,e):t instanceof ai?ky(t,e):n}function Ay(t,e){return t instanceof Yo?ll(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Go extends Ua{}class oi extends Ua{constructor(e){super(),this.elements=e}}function Ry(t,e){const n=Ny(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class ai extends Ua{constructor(e){super(),this.elements=e}}function ky(t,e){let n=Ny(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class Yo extends Ua{constructor(e,n){super(),this.M=e,this.k=n}}function ld(t){return Le(t.integerValue||t.doubleValue)}function Ny(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof oi&&s instanceof oi||n instanceof ai&&s instanceof ai?zs(n.elements,s.elements,$t):n instanceof Yo&&s instanceof Yo?$t(n.k,s.k):n instanceof Go&&s instanceof Go}(t.transform,e.transform)}class HC{constructor(e,n){this.version=e,this.transformResults=n}}class Ms{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ms}static exists(e){return new Ms(void 0,e)}static updateTime(e){return new Ms(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function qC(t,e,n){t instanceof Va?function(s,r,i){const o=s.value.clone(),a=fd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(s,r,i){if(!mo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=fd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fl(t,e,n){t instanceof Va?function(s,r,i){if(!mo(s.precondition,r))return;const o=s.value.clone(),a=dd(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(hd(r),o).setHasLocalMutations()}(t,e,n):t instanceof Vi?function(s,r,i){if(!mo(s.precondition,r))return;const o=dd(s.fieldTransforms,i,r),a=r.data;a.setAll(Dy(s)),a.setAll(o),r.convertToFoundDocument(hd(r),a).setHasLocalMutations()}(t,e,n):function(s,r){mo(s.precondition,r)&&r.convertToNoDocument(ce.min())}(t,e)}function KC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ay(s.transform,r||null);i!=null&&(n==null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function ud(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zs(n,s,(r,i)=>jC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function hd(t){return t.isFoundDocument()?t.version:ce.min()}class Va extends Fa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Vi extends Fa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fd(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,BC(o,a,n[r]))}return s}function dd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,$C(i,o,e))}return s}class WC extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class zC extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,he;function YC(t){switch(t){default:return ie();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Py(t){if(t===void 0)return Rn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Me.OK:return A.OK;case Me.CANCELLED:return A.CANCELLED;case Me.UNKNOWN:return A.UNKNOWN;case Me.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Me.INTERNAL:return A.INTERNAL;case Me.UNAVAILABLE:return A.UNAVAILABLE;case Me.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Me.NOT_FOUND:return A.NOT_FOUND;case Me.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Me.ABORTED:return A.ABORTED;case Me.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Me.DATA_LOSS:return A.DATA_LOSS;default:return ie()}}(he=Me||(Me={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return py(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ke.RED,this.left=r!=null?r:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(e){return new pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new je(Y.comparator);function as(){return XC}const JC=new je(Y.comparator);function dl(){return JC}function vc(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const QC=new je(Y.comparator),ZC=new Ye(Y.comparator);function Ae(...t){let e=ZC;for(const n of t)e=e.add(n);return e}const eA=new Ye(ge);function Oy(){return eA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n)),new $a(ce.min(),s,Oy(),as(),Ae())}}class $i{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new $i(Xe.EMPTY_BYTE_STRING,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class xy{constructor(e,n){this.targetId=e,this.$=n}}class My{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gd{constructor(){this.B=0,this.L=yd(),this.U=Xe.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=Ae(),n=Ae(),s=Ae();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie()}}),new $i(this.U,this.q,e,n,s)}J(){this.G=!1,this.L=yd()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class tA{constructor(e){this.nt=e,this.st=new Map,this.it=as(),this.rt=md(),this.ot=new Ye(ge)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(ul(i))if(s===0){const o=new Y(i.path);this.ct(n,o,Qe.newNoDocument(o,ce.min()))}else Te(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ul(a.target)){const c=new Y(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Qe.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=Ae();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new $a(e,n,this.ot,this.it,s);return this.it=as(),this.rt=md(),this.ot=new Ye(ge),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new gd,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ye(ge),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new gd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function md(){return new je(Y.comparator)}function yd(){return new je(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class rA{constructor(e,n){this.databaseId=e,this.N=n}}function Xo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ly(t,e){return t.N?e.toBase64():e.toUint8Array()}function iA(t,e){return Xo(t,e.toTimestamp())}function Qt(t){return Te(!!t),ce.fromTimestamp(function(e){const n=kn(e);return new et(n.seconds,n.nanos)}(t))}function Gu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Uy(t){const e=Se.fromString(t);return Te($y(e)),e}function pl(t,e){return Gu(t.databaseId,e.path)}function wc(t,e){const n=Uy(e);if(n.get(1)!==t.databaseId.projectId)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Fy(n))}function gl(t,e){return Gu(t.databaseId,e)}function oA(t){const e=Uy(t);return e.length===4?Se.emptyPath():Fy(e)}function ml(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fy(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vd(t,e,n){return{name:pl(t,e),fields:n.value.mapValue.fields}}function aA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(Te(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Py(c.code);return new H(l,c.message||"")}(o);n=new My(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wc(t,s.document.name),i=Qt(s.document.updateTime),o=new Rt({mapValue:{fields:s.document.fields}}),a=Qe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new yo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wc(t,s.document),i=s.readTime?Qt(s.readTime):ce.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wc(t,s.document),i=s.removedTargetIds||[];n=new yo([],i,r,null)}else{if(!("filter"in e))return ie();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new GC(r),o=s.targetId;n=new xy(o,i)}}return n}function cA(t,e){let n;if(e instanceof Va)n={update:vd(t,e.key,e.value)};else if(e instanceof WC)n={delete:pl(t,e.key)};else if(e instanceof Vi)n={update:vd(t,e.key,e.data),updateMask:vA(e.fieldMask)};else{if(!(e instanceof zC))return ie();n={verify:pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Go)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:iA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ie()}(t,e.precondition)),n}function lA(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Qt(s.updateTime):Qt(r);return i.isEqual(ce.min())&&(i=Qt(r)),new HC(i,s.transformResults||[])}(n,e))):[]}function uA(t,e){return{documents:[gl(t,e.path)]}}function hA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=gl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(id(h.value))return{unaryFilter:{field:_s(h.field),op:"IS_NAN"}};if(rd(h.value))return{unaryFilter:{field:_s(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(id(h.value))return{unaryFilter:{field:_s(h.field),op:"IS_NOT_NAN"}};if(rd(h.value))return{unaryFilter:{field:_s(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(h.field),op:gA(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:_s(u.field),direction:pA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||cr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fA(t){let e=oA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Vy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Vr(Cs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,cr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Wo(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Wo(f,h)}(n.endAt)),MC(e,r,o,i,a,"F",c,l)}function dA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vy(t){return t?t.unaryFilter!==void 0?[yA(t)]:t.fieldFilter!==void 0?[mA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Vy(e)).reduce((e,n)=>e.concat(n)):ie():[]}function pA(t){return nA[t]}function gA(t){return sA[t]}function _s(t){return{fieldPath:t.canonicalString()}}function Cs(t){return lt.fromServerFormat(t.fieldPath)}function mA(t){return it.create(Cs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function yA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cs(t.unaryFilter.field);return it.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cs(t.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cs(t.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Cs(t.unaryFilter.field);return it.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function vA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $y(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(r=>r?M.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&qC(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&fl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&fl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ce.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,s)=>ud(n,s))&&zs(this.baseMutations,e.baseMutations,(n,s)=>ud(n,s))}}class Yu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Te(e.mutations.length===s.length);let r=QC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Yu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s,r,i=ce.min(),o=ce.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.Jt=e}}function bA(t){const e=fA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?LC(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.qe=new CA}addToCollectionParentIndex(e,n){return this.qe.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getFieldIndex(e,n){return M.resolve(null)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class CA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ye(Se.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ye(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Qs(0)}static gn(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==wA)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,s){this.fs=e,this.$s=n,this.indexManager=s}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Ls(e,n,s))}Ls(e,n,s){return this.fs.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Us(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}qs(e,n){return this.fs.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Us(n,s))}Ks(e,n,s){return function(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Qs(e,n.path):Iy(n)?this.js(e,n,s):this.Ws(e,n,s)}Qs(e,n){return this.Bs(e,new Y(n)).next(s=>{let r=dl();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}js(e,n,s){const r=n.collectionGroup;let i=dl();return this.indexManager.getCollectionParents(e,r).next(o=>M.forEach(o,a=>{const c=function(l,u){return new Fi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Ws(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Ws(e,n,s){let r;return this.fs.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Qe.newInvalidDocument(c),r=r.insert(c,l)),fl(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{zu(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.zs=s,this.Hs=r}static Js(e,n){let s=Ae(),r=Ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{Ys(e){this.Xs=e}Ks(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(ce.min())?this.Zs(e,n):this.Xs.qs(e,r).next(i=>{const o=this.ti(n,i);return(go(n)||zo(n))&&this.ei(n.limitType,o,r,s)?this.Zs(e,n):(Zf()<=pe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hl(n)),this.Xs.Ks(e,n,IC(s,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,n){let s=new Ye(by(e));return n.forEach((r,i)=>{zu(e,i)&&(s=s.add(i))}),s}ei(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,n){return Zf()<=pe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",hl(n)),this.Xs.Ks(e,n,Js.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,r){this.persistence=e,this.ni=n,this.M=r,this.si=new je(ge),this.ii=new lr(i=>Ku(i),Wu),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(s)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new RA(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function DA(t,e,n,s){return new NA(t,e,n,s)}async function By(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.$s.getAllMutationBatches(s).next(i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ai.qs(s,c).next(l=>({ci:l,removedBatchIds:o,addedBatchIds:a}))})})}function PA(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=M.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(g=>{const b=c.docVersions.get(p);Te(b!==null),g.version.compareTo(b)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.$s.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.$s.performConsistencyCheck(s)).next(()=>n.ai.qs(s,r))})}function jy(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function OA(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.ls.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ls.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Xe.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(p,g,b){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.ls.updateTargetData(i,f))});let c=as();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(xA(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(ce.min())){const l=n.ls.getLastRemoteSnapshotVersion(i).next(u=>n.ls.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return M.waitFor(a).next(()=>o.apply(i)).next(()=>n.ai.Gs(i,c)).next(()=>c)}).then(i=>(n.si=r,i))}function xA(t,e,n){let s=Ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=as();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(ce.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):z("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function MA(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(s,e)))}function LA(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ls.getTargetData(s,e).next(i=>i?(r=i,M.resolve(r)):n.ls.allocateTargetId(s).next(o=>(r=new Yn(e,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.si.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(e,s.targetId)),s})}async function yl(t,e,n){const s=oe(t),r=s.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bi(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.si=s.si.remove(e),s.ii.delete(r.target)}function wd(t,e,n){const s=oe(t);let r=ce.min(),i=Ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.ii.get(l);return h!==void 0?M.resolve(u.si.get(h)):u.ls.getTargetData(c,l)}(s,o,os(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ni.Ks(o,e,n?r:ce.min(),n?i:Ae())).next(a=>(UA(s,UC(e),a),{documents:a,hi:i})))}function UA(t,e,n){let s=ce.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ri.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return M.resolve(this._i.get(n))}saveBundleMetadata(e,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:Qt(s.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(s){return{name:s.name,query:bA(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.overlays=new je(Y.comparator),this.mi=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.mi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const r=vc(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return M.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=vc(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vc(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return M.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.mi.get(r.largestBatchId).delete(s.key);this.mi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new IA(n,s));let i=this.mi.get(n);i===void 0&&(i=Ae(),this.mi.set(n,i)),this.mi.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.gi=new Ye(Ve.yi),this.pi=new Ye(Ve.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const s=new Ve(e,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ei(new Ve(e,n))}Ai(e,n){e.forEach(s=>this.removeReference(s,n))}Ri(e){const n=new Y(new Se([])),s=new Ve(n,e),r=new Ve(n,e+1),i=[];return this.pi.forEachInRange([s,r],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new Y(new Se([])),s=new Ve(n,e),r=new Ve(n,e+1);let i=Ae();return this.pi.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return Y.comparator(e.key,n.key)||ge(e.Vi,n.Vi)}static Ii(e,n){return ge(e.Vi,n.Vi)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new Ye(Ve.yi)}checkEmpty(e){return M.resolve(this.$s.length===0)}addMutationBatch(e,n,s,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new EA(i,n,s,r);this.$s.push(o);for(const a of r)this.Si=this.Si.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ci(s),i=r<0?0:r;return M.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return M.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ve(n,0),r=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([s,r],o=>{const a=this.Di(o.Vi);i.push(a)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ye(ge);return n.forEach(r=>{const i=new Ve(r,0),o=new Ve(r,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{s=s.add(a.Vi)})}),M.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new Y(i),0);let a=new Ye(ge);return this.Si.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Vi)),!0)},o),M.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(s=>{const r=this.Di(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return M.forEach(n.mutations,r=>{const i=new Ve(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=s})}dn(e){}containsKey(e,n){const s=new Ve(n,0),r=this.Si.firstAfterOrEqual(s);return M.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,M.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.ki=e,this.docs=new je(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=as();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),M.resolve(s)}getAllFromCollection(e,n,s){let r=as();const i=new Y(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||bC(TC(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,s,r){ie()}Mi(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new jA(this)}getSize(e){return M.resolve(this.size)}}class jA extends AA{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.qn.addEntry(e,r)):this.qn.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.persistence=e,this.Oi=new lr(n=>Ku(n),Wu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Ju,this.targetCount=0,this.Bi=Qs.mn()}forEachTarget(e,n){return this.Oi.forEach((s,r)=>n(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),M.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.In(n),M.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),M.waitFor(i).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.Oi.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.$i.Ti(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.$i.Ai(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.$i.Pi(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.$i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.Li={},this.overlays={},this.ts=new Hu(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new HA(this),this.indexManager=new SA,this.fs=function(s){return new BA(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new TA(n),this.ds=new FA(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Li[e.toKey()];return s||(s=new $A(n,this.referenceDelegate),this.Li[e.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const r=new KA(this.ts.next());return this.referenceDelegate.qi(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ki(e,n){return M.or(Object.values(this.Li).map(s=>()=>s.containsKey(e,n)))}}class KA extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.Qi=new Ju,this.ji=null}static Wi(e){return new Qu(e)}get zi(){if(this.ji)return this.ji;throw ie()}addReference(e,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(r=>this.zi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.zi,s=>{const r=Y.fromPath(s);return this.Hi(e,r).next(i=>{i||n.removeEntry(r,ce.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return M.or([()=>M.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}class _d{constructor(){this.activeTargetIds=Oy()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WA{constructor(){this.Fr=new _d,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new _d,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);z("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.ao(e,o,a,s).then(c=>(z("RestConnection","Received: ",c),c),c=>{throw ed("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}co(e,n,s,r,i){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+or,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=GA[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,s,r){return new Promise((i,o)=>{const a=new cC;a.listenOnce(iC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yc.NO_ERROR:const l=a.getResponseJson();z("Connection","XHR received:",JSON.stringify(l)),i(l);break;case yc.TIMEOUT:z("Connection",'RPC "'+e+'" timed out'),o(new H(A.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const u=a.getStatus();if(z("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(h.status);o(new H(f,h.message))}else o(new H(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(A.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{z("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=sC(),o=rC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new aC({})),this.uo(a.initMessageHeaders,n,s),Rg()||Ng()||iI()||Dg()||oI()||kg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");z("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new YA({jr:g=>{h?z("Connection","Not sending because WebChannel is closed:",g):(u||(z("Connection","Opening WebChannel transport."),l.open(),u=!0),z("Connection","WebChannel sending:",g),l.send(g))},Wr:()=>l.close()}),p=(g,b,v)=>{g.listen(b,w=>{try{v(w)}catch(y){setTimeout(()=>{throw y},0)}})};return p(l,io.EventType.OPEN,()=>{h||z("Connection","WebChannel transport opened.")}),p(l,io.EventType.CLOSE,()=>{h||(h=!0,z("Connection","WebChannel transport closed"),f.eo())}),p(l,io.EventType.ERROR,g=>{h||(h=!0,ed("Connection","WebChannel transport errored:",g),f.eo(new H(A.UNAVAILABLE,"The operation could not be completed")))}),p(l,io.EventType.MESSAGE,g=>{var b;if(!h){const v=g.data[0];Te(!!v);const w=v,y=w.error||((b=w[0])===null||b===void 0?void 0:b.error);if(y){z("Connection","WebChannel received error:",y);const E=y.status;let T=function(R){const I=Me[R];if(I!==void 0)return Py(I)}(E),P=y.message;T===void 0&&(T=A.INTERNAL,P="Unknown error status: "+E+" with message "+y.message),h=!0,f.eo(new H(T,P)),l.close()}else z("Connection","WebChannel received:",v),f.no(v)}}),p(o,oC.STAT_EVENT,g=>{g.stat===Jf.PROXY?z("Connection","Detected buffering proxy"):g.stat===Jf.NOPROXY&&z("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function _c(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new rA(t,!0)}class Hy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,s,r,i,o,a,c){this.Jn=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Hy(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new H(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JA extends qy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=aA(this.M,e),s=function(r){if(!("targetChange"in r))return ce.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?Qt(i.readTime):ce.min()}(e);return this.listener.Ko(n,s)}Qo(e){const n={};n.database=ml(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=ul(a)?{documents:uA(r,a)}:{query:hA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ly(r,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=Xo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=dA(this.M,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=ml(this.M),n.removeTarget=e,this.Oo(n)}}class QA extends qy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=lA(e.writeResults,e.commitTime),s=Qt(e.commitTime);return this.listener.Jo(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=ml(this.M),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cA(this.M,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(A.UNKNOWN,r.toString())})}co(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(A.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class eR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Rn(n),this.su=!1):z("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{gs(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.lu.add(4),await Hi(c),c._u.set("Unknown"),c.lu.delete(4),await ja(c)}(this))})}),this._u=new eR(s,r)}}async function ja(t){if(gs(t))for(const e of t.fu)await e(!0)}async function Hi(t){for(const e of t.fu)await e(!1)}function Ky(t,e){const n=oe(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),th(n)?eh(n):ur(n).Co()&&Zu(n,e))}function Wy(t,e){const n=oe(t),s=ur(n);n.hu.delete(e),s.Co()&&zy(n,e),n.hu.size===0&&(s.Co()?s.ko():gs(n)&&n._u.set("Unknown"))}function Zu(t,e){t.wu.Z(e.targetId),ur(t).Qo(e)}function zy(t,e){t.wu.Z(e),ur(t).jo(e)}function eh(t){t.wu=new tA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),ur(t).start(),t._u.iu()}function th(t){return gs(t)&&!ur(t).Do()&&t.hu.size>0}function gs(t){return oe(t).lu.size===0}function Gy(t){t.wu=void 0}async function nR(t){t.hu.forEach((e,n)=>{Zu(t,e)})}async function sR(t,e){Gy(t),th(t)?(t._u.uu(e),eh(t)):t._u.set("Unknown")}async function rR(t,e,n){if(t._u.set("Online"),e instanceof My&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jo(t,s)}else if(e instanceof yo?t.wu.ut(e):e instanceof xy?t.wu._t(e):t.wu.ht(e),!n.isEqual(ce.min()))try{const s=await jy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),zy(r,a);const l=new Yn(c.target,a,1,c.sequenceNumber);Zu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Jo(t,s)}}async function Jo(t,e,n){if(!Bi(e))throw e;t.lu.add(1),await Hi(t),t._u.set("Offline"),n||(n=()=>jy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ja(t)})}function Yy(t,e){return e().catch(n=>Jo(t,n,e))}async function Ha(t){const e=oe(t),n=Nn(e);let s=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;iR(e);)try{const r=await MA(e.localStore,s);if(r===null){e.cu.length===0&&n.ko();break}s=r.batchId,oR(e,r)}catch(r){await Jo(e,r)}Xy(e)&&Jy(e)}function iR(t){return gs(t)&&t.cu.length<10}function oR(t,e){t.cu.push(e);const n=Nn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Xy(t){return gs(t)&&!Nn(t).Do()&&t.cu.length>0}function Jy(t){Nn(t).start()}async function aR(t){Nn(t).Xo()}async function cR(t){const e=Nn(t);for(const n of t.cu)e.Ho(n.mutations)}async function lR(t,e,n){const s=t.cu.shift(),r=Yu.from(s,e,n);await Yy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ha(t)}async function uR(t,e){e&&Nn(t).zo&&await async function(n,s){if(r=s.code,YC(r)&&r!==A.ABORTED){const i=n.cu.shift();Nn(n).No(),await Yy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(n)}var r}(t,e),Xy(t)&&Jy(t)}async function Id(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=gs(n);n.lu.add(3),await Hi(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ja(n)}async function hR(t,e){const n=oe(t);e?(n.lu.delete(2),await ja(n)):e||(n.lu.add(2),await Hi(n),n._u.set("Unknown"))}function ur(t){return t.mu||(t.mu=function(e,n,s){const r=oe(e);return r.tu(),new JA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:nR.bind(null,t),Jr:sR.bind(null,t),Ko:rR.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),th(t)?eh(t):t._u.set("Unknown")):(await t.mu.stop(),Gy(t))})),t.mu}function Nn(t){return t.gu||(t.gu=function(e,n,s){const r=oe(e);return r.tu(),new QA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:aR.bind(null,t),Jr:uR.bind(null,t),Yo:cR.bind(null,t),Jo:lR.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ha(t)):(await t.gu.stop(),t.cu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new nh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sh(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Bi(t))return new H(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=dl(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ls;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.yu=new je(Y.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):ie():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Zs(e,n,Ls.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.Iu=void 0,this.listeners=[]}}class dR{constructor(){this.queries=new lr(e=>Ty(e),La),this.onlineState="Unknown",this.Tu=new Set}}async function pR(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new fR),r)try{i.Iu=await n.onListen(s)}catch(o){const a=sh(o,`Initialization of query '${hl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&rh(n)}async function gR(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function mR(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&rh(n)}function yR(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function rh(t){t.Tu.forEach(e=>{e.next()})}class vR{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.key=e}}class Zy{constructor(e){this.key=e}}class wR{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Ae(),this.mutatedKeys=Ae(),this.Lu=by(e),this.Uu=new Ls(this.Lu)}get qu(){return this.Fu}Gu(e,n){const s=n?n.Ku:new Td,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=go(this.query)&&r.size===this.query.limit?r.last():null,l=zo(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=zu(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?g!==b&&(s.track({type:3,doc:p}),v=!0):this.Qu(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),go(this.query)||zo(this.query))for(;o.size>this.query.limit;){const u=go(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Ku:s,ei:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((l,u)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return p(h)-p(f)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Zs(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Td,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Ae(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Zy(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Qy(s))}),n}Ju(e){this.Fu=e.hi,this.Bu=Ae();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return Zs.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class _R{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ER{constructor(e){this.key=e,this.Xu=!1}}class IR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new lr(a=>Ty(a),La),this.ea=new Map,this.na=new Set,this.sa=new je(Y.comparator),this.ia=new Map,this.ra=new Ju,this.oa={},this.ua=new Map,this.aa=Qs.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function TR(t,e){const n=OR(t);let s,r;const i=n.ta.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await LA(n.localStore,os(e));n.isPrimaryClient&&Ky(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await bR(n,e,s,a==="current")}return r}async function bR(t,e,n,s){t.ha=(u,h,f)=>async function(p,g,b,v){let w=g.view.Gu(b);w.ei&&(w=await wd(p.localStore,g.query,!1).then(({documents:T})=>g.view.Gu(T,w)));const y=v&&v.targetChanges.get(g.targetId),E=g.view.applyChanges(w,p.isPrimaryClient,y);return Sd(p,g.targetId,E.zu),E.snapshot}(t,u,h,f);const r=await wd(t.localStore,e,!0),i=new wR(e,r.hi),o=i.Gu(r.documents),a=$i.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Sd(t,n,c.zu);const l=new _R(e,n,i);return t.ta.set(e,l),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function SR(t,e){const n=oe(t),s=n.ta.get(e),r=n.ea.get(s.targetId);if(r.length>1)return n.ea.set(s.targetId,r.filter(i=>!La(i,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wy(n.remoteStore,s.targetId),vl(n,s.targetId)}).catch(ji)):(vl(n,s.targetId),await yl(n.localStore,s.targetId,!0))}async function CR(t,e,n){const s=xR(t);try{const r=await function(i,o){const a=oe(i),c=et.now(),l=o.reduce((h,f)=>h.add(f.key),Ae());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,l).next(f=>{u=f;const p=[];for(const g of o){const b=KC(g,u.get(g.key));b!=null&&p.push(new Vi(g.key,b,yy(b.value.mapValue),Ms.exists(!0)))}return a.$s.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oa[i.currentUser.toKey()];c||(c=new je(ge)),c=c.insert(o,a),i.oa[i.currentUser.toKey()]=c}(s,r.batchId,n),await qi(s,r.changes),await Ha(s.remoteStore)}catch(r){const i=sh(r,"Failed to persist write");n.reject(i)}}async function ev(t,e){const n=oe(t);try{const s=await OA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ia.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?Te(o.Xu):r.removedDocuments.size>0&&(Te(o.Xu),o.Xu=!1))}),await qi(n,s,e)}catch(s){await ji(s)}}function bd(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&rh(a)}(s.eventManager,e),r.length&&s.Zu.Ko(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AR(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ia.get(e),i=r&&r.key;if(i){let o=new je(Y.comparator);o=o.insert(i,Qe.newNoDocument(i,ce.min()));const a=Ae().add(i),c=new $a(ce.min(),new Map,new Ye(ge),o,a);await ev(s,c),s.sa=s.sa.remove(i),s.ia.delete(e),ih(s)}else await yl(s.localStore,e,!1).then(()=>vl(s,e,n)).catch(ji)}async function RR(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await PA(n.localStore,e);nv(n,s,null),tv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qi(n,r)}catch(r){await ji(r)}}async function kR(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.$s.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.$s.removeMutationBatch(c,u))).next(()=>a.$s.performConsistencyCheck(c)).next(()=>a.ai.qs(c,l))})}(s.localStore,e);nv(s,e,n),tv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qi(s,r)}catch(r){await ji(r)}}function tv(t,e){(t.ua.get(e)||[]).forEach(n=>{n.resolve()}),t.ua.delete(e)}function nv(t,e,n){const s=oe(t);let r=s.oa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oa[s.currentUser.toKey()]=r}}function vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ea.get(e))t.ta.delete(s),n&&t.Zu.la(s,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(s=>{t.ra.containsKey(s)||sv(t,s)})}function sv(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(Wy(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),ih(t))}function Sd(t,e,n){for(const s of n)s instanceof Qy?(t.ra.addReference(s.key,e),NR(t,s)):s instanceof Zy?(z("SyncEngine","Document no longer in limbo: "+s.key),t.ra.removeReference(s.key,e),t.ra.containsKey(s.key)||sv(t,s.key)):ie()}function NR(t,e){const n=e.key,s=n.path.canonicalString();t.sa.get(n)||t.na.has(s)||(z("SyncEngine","New document in limbo: "+n),t.na.add(s),ih(t))}function ih(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new Y(Se.fromString(e)),s=t.aa.next();t.ia.set(s,new ER(n)),t.sa=t.sa.insert(n,s),Ky(t.remoteStore,new Yn(os(wy(n.path)),s,2,Hu.A))}}async function qi(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,c)=>{o.push(s.ha(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Xu.Js(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Ko(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>M.forEach(c,h=>M.forEach(h.zs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>M.forEach(h.Hs,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Bi(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.si.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);l.si=l.si.insert(h,g)}}}(s.localStore,i))}async function DR(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const s=await By(n.localStore,e);n.currentUser=e,function(r,i){r.ua.forEach(o=>{o.forEach(a=>{a.reject(new H(A.CANCELLED,i))})}),r.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qi(n,s.ci)}}function PR(t,e){const n=oe(t),s=n.ia.get(e);if(s&&s.Xu)return Ae().add(s.key);{let r=Ae();const i=n.ea.get(e);if(!i)return r;for(const o of i){const a=n.ta.get(o);r=r.unionWith(a.view.qu)}return r}}function OR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AR.bind(null,e),e.Zu.Ko=mR.bind(null,e.eventManager),e.Zu.la=yR.bind(null,e.eventManager),e}function xR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kR.bind(null,e),e}class MR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ba(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return DA(this.persistence,new kA,e.initialUser,this.M)}_a(e){return new qA(Qu.Wi,this.M)}da(e){return new WA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DR.bind(null,this.syncEngine),await hR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dR}createDatastore(e){const n=Ba(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new XA(r));var r;return function(i,o,a,c){return new ZA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>bd(this.syncEngine,a,0),o=Ed.vt()?new Ed:new zA,new tR(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new IR(s,r,i,o,a,c);return l&&(u.ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);z("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Hi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=dy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=sh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function VR(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await By(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $R(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BR(t);z("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Id(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Id(e.remoteStore,i)),t.onlineComponents=e}async function BR(t){return t.offlineComponents||(z("FirestoreClient","Using default OfflineComponentProvider"),await VR(t,new MR)),t.offlineComponents}async function rv(t){return t.onlineComponents||(z("FirestoreClient","Using default OnlineComponentProvider"),await $R(t,new LR)),t.onlineComponents}function jR(t){return rv(t).then(e=>e.syncEngine)}async function HR(t){const e=await rv(t),n=e.eventManager;return n.onListen=TR.bind(null,e.syncEngine),n.onUnlisten=SR.bind(null,e.syncEngine),n}function qR(t,e,n={}){const s=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new UR({next:h=>{i.enqueueAndForget(()=>gR(r,u)),h.fromCache&&a.source==="server"?c.reject(new H(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vR(o,l,{includeMetadataChanges:!0,Du:!0});return pR(r,u)}(await HR(t),t.asyncQueue,e,n,s)),s.promise}const Cd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e,n){if(!n)throw new H(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KR(t,e,n,s){if(e===!0&&s===!0)throw new H(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ad(t){if(!Y.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(Y.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function wl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qa(t);throw new H(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1,e instanceof Ys?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new H(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(r.options.projectId)}(e))}get app(){if(!this._app)throw new H(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uC;switch(n.type){case"gapi":const s=n.client;return Te(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new dC(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new H(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cd.get(e);n&&(z("ComponentProvider","Removing Datastore"),Cd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Ki{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ki(this.firestore,e,this._query)}}class _n extends Ki{constructor(e,n,s){super(e,n,wy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new Y(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}function kk(t,e,...n){if(t=vt(t),iv("collection","path",e),t instanceof oh){const s=Se.fromString(e,...n);return Rd(s),new _n(t,null,s)}{if(!(t instanceof St||t instanceof _n))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Rd(s),new _n(t.firestore,null,s)}}function WR(t,e,...n){if(t=vt(t),arguments.length===1&&(e=dy.R()),iv("doc","path",e),t instanceof oh){const s=Se.fromString(e,...n);return Ad(s),new St(t,null,new Y(s))}{if(!(t instanceof St||t instanceof _n))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Ad(s),new St(t.firestore,t instanceof _n?t.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Hy(this,"async_queue_retry"),this.Ua=()=>{const n=_c();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=_c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new wn;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!Bi(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(s=>{this.Fa=s,this.$a=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Rn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(e,n,s){this.qa(),this.La.indexOf(e)>-1&&(n=0);const r=nh.createAndSchedule(this,e,n,s,i=>this.Qa(i));return this.Oa.push(r),r}qa(){this.Fa&&ie()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}class ah extends oh{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new zR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||av(this),this._firestoreClient.terminate()}}function Nk(t=Mg()){return au(t,"firestore").getImmediate()}function ov(t){return t._firestoreClient||av(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function av(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new wC(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FR(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(Xe.fromBase64String(e))}catch(n){throw new H(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=/^__.*__$/;class YR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}function lv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class uh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.ec(e),r}nc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return Qo(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(lv(this.Ya)&&GR.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class XR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Ba(e)}uc(e,n,s,r=!1){return new uh({Ya:e,methodName:n,oc:s,path:lt.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function uv(t){const e=t._freezeSettings(),n=Ba(t._databaseId);return new XR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JR(t,e,n,s,r,i={}){const o=t.uc(i.merge||i.mergeFields?2:0,e,n,r);dv("Data must be an object, but it was:",o,s);const a=hv(s,o);let c,l;if(i.merge)c=new al(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=ZR(e,h,n);if(!o.contains(f))throw new H(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);tk(u,f)||u.push(f)}c=new al(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new YR(new Rt(a),c,l)}function QR(t,e,n,s=!1){return hh(n,t.uc(s?4:3,e))}function hh(t,e){if(fv(t=vt(t)))return dv("Unsupported field value:",e,t),hv(t,e);if(t instanceof cv)return function(n,s){if(!lv(s.Ya))throw s.ic(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ic(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hh(o,s.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return VC(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=et.fromDate(n);return{timestampValue:Xo(s.M,r)}}if(n instanceof et){const r=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xo(s.M,r)}}if(n instanceof lh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:Ly(s.M,n._byteString)};if(n instanceof St){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ic(`Unsupported field value: ${qa(n)}`)}(t,e)}function hv(t,e){const n={};return py(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=hh(r,e.Za(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof lh||t instanceof er||t instanceof St||t instanceof cv)}function dv(t,e,n){if(!fv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=qa(n);throw s==="an object"?e.ic(t+" a custom object"):e.ic(t+" "+s)}}function ZR(t,e,n){if((e=vt(e))instanceof ch)return e._internalPath;if(typeof e=="string")return pv(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const ek=new RegExp("[~\\*/\\[\\]]");function pv(t,e,n){if(e.search(ek)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ch(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(A.INVALID_ARGUMENT,a+t+c)}function tk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nk extends gv{data(){return super.data()}}function fh(t,e){return typeof e=="string"?pv(t,e):e instanceof ch?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sk extends gv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vo extends sk{data(e={}){return super.data(e)}}class rk{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ao(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vo(this._firestore,this._userDataWriter,s.key,s,new ao(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ao(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ao(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ik(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ik(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){if(zo(t)&&t.explicitOrderBy.length===0)throw new H(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ak{}function Dk(t,...e){for(const n of e)t=n._apply(t);return t}class ck extends ak{constructor(e,n,s){super(),this.hc=e,this.lc=n,this.fc=s,this.type="where"}_apply(e){const n=uv(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new H(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Dd(u,l);const p=[];for(const g of u)p.push(Nd(a,r,g));h={arrayValue:{values:p}}}else h=Nd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Dd(u,l),h=QR(o,i,u,l==="in"||l==="not-in");const f=it.create(c,l,h);return function(p,g){if(g.S()){const v=Ey(p);if(v!==null&&!v.isEqual(g.field))throw new H(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${g.field.toString()}'`);const w=_y(p);w!==null&&lk(p,g.field,w)}const b=function(v,w){for(const y of v.filters)if(w.indexOf(y.op)>=0)return y.op;return null}(p,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(b!==null)throw b===g.op?new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${b.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.hc,this.lc,this.fc);return new Ki(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Fi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Pk(t,e,n){const s=e,r=fh("where",t);return new ck(r,s,n)}function Nd(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new H(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iy(e)&&n.indexOf("/")!==-1)throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Se.fromString(n));if(!Y.isDocumentKey(s))throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sd(t,new Y(s))}if(n instanceof St)return sd(t,n._key);throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qa(n)}.`)}function Dd(t,e){if(!Array.isArray(t)||t.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new H(A.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function lk(t,e,n){if(!n.isEqual(e))throw new H(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const s={};return ar(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new lh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=my(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=kn(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Te($y(s));const r=new Ys(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class fk extends uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Ok(t){t=wl(t,Ki);const e=wl(t.firestore,ah),n=ov(e),s=new fk(e);return ok(t._query),qR(n,t._query).then(r=>new rk(e,s,t,r))}function xk(t,e){const n=wl(t.firestore,ah),s=WR(t),r=hk(t.converter,e);return dk(n,[JR(uv(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ms.exists(!1))]).then(()=>s)}function dk(t,e){return function(n,s){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>CR(await jR(n),s,r)),r.promise}(ov(t),e)}(function(t,e=!0){(function(n){or=n})(Ei),Ks(new Qn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ah(r,new hC(n.getProvider("auth-internal")),new gC(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),vn(Qf,"3.4.7",t),vn(Qf,"3.4.7","esm2017")})();export{Wn as $,gi as A,yk as B,Kn as C,Pk as D,bt as E,Ns as F,dn as G,Sv as H,I_ as I,Jl as J,li as K,vk as L,We as M,T_ as N,i_ as O,Nk as P,ig as Q,pk as R,S_ as S,eu as T,ci as U,ME as V,d_ as W,yw as X,hs as Y,ga as Z,Up as _,v_ as a,Aw as a0,Rw as a1,yi as a2,Tk as b,Yl as c,_k as d,Ak as e,Ck as f,Rk as g,Dk as h,Ik as i,Ok as j,mk as k,gk as l,Sk as m,VE as n,da as o,wk as p,Xl as q,g_ as r,bk as s,Ce as t,xk as u,Ek as v,kk as w,$l as x,E_ as y,m_ as z};
