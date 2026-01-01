(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Pl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},fr=[],wn=()=>{},qu=()=>!1,ua=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dl=n=>n.startsWith("onUpdate:"),At=Object.assign,Ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jh=Object.prototype.hasOwnProperty,tt=(n,e)=>jh.call(n,e),He=Array.isArray,hr=n=>fa(n)==="[object Map]",Yu=n=>fa(n)==="[object Set]",Xe=n=>typeof n=="function",St=n=>typeof n=="string",Mi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",$u=n=>(dt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Ku=Object.prototype.toString,fa=n=>Ku.call(n),Zh=n=>fa(n).slice(8,-1),ju=n=>fa(n)==="[object Object]",Il=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Jh=/-\w/g,_i=ha(n=>n.replace(Jh,e=>e.slice(1).toUpperCase())),Qh=/\B([A-Z])/g,Wi=ha(n=>n.replace(Qh,"-$1").toLowerCase()),Zu=ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=ha(n=>n?`on${Zu(n)}`:""),gi=(n,e)=>!Object.is(n,e),Da=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ju=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ed=n=>{const e=parseFloat(n);return isNaN(e)?n:e},td=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let gc;const da=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?sd(i):Ul(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||dt(n))return n}const nd=/;(?![^(]*\))/g,id=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function sd(n){const e={};return n.replace(rd,"").split(nd).forEach(t=>{if(t){const i=t.split(id);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xr(n){let e="";if(St(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=xr(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",od=Pl(ad);function Qu(n){return!!n||n===""}const ef=n=>!!(n&&n.__v_isRef===!0),zi=n=>St(n)?n:n==null?"":He(n)||dt(n)&&(n.toString===Ku||!Xe(n.toString))?ef(n)?zi(n.value):JSON.stringify(n,tf,2):String(n),tf=(n,e)=>ef(e)?tf(n,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[La(i,s)+" =>"]=r,t),{})}:Yu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>La(t))}:Mi(e)?La(e):dt(e)&&!He(e)&&!ju(e)?String(e):e,La=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Gt;class ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cd(){return Gt}let ht;const Ia=new WeakSet;class nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),af(this);const e=ht,t=pn;ht=this,pn=!0;try{return this.fn()}finally{of(this),ht=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ol(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eo(this)&&this.run()}get dirty(){return Eo(this)}}let rf=0,Hr,Gr;function sf(n,e=!1){if(n.flags|=8,e){n.next=Gr,Gr=n;return}n.next=Hr,Hr=n}function Nl(){rf++}function Fl(){if(--rf>0)return;if(Gr){let e=Gr;for(Gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function af(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function of(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ol(i),ud(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Eo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r)||(n.globalVersion=$r,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Eo(n))))return;n.flags|=2;const e=n.dep,t=ht,i=pn;ht=n,pn=!0;try{af(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,pn=i,of(n),n.flags&=-3}}function Ol(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ol(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ud(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const cf=[];function jn(){cf.push(pn),pn=!1}function Zn(){const n=cf.pop();pn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let $r=0;class fd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!pn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new fd(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,$r++,this.notify(e)}notify(e){Nl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fl()}}}function uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yo=new WeakMap,Gi=Symbol(""),bo=Symbol(""),Kr=Symbol("");function Rt(n,e,t){if(pn&&ht){let i=yo.get(n);i||yo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Bl),r.map=i,r.key=t),r.track()}}function kn(n,e,t,i,r,s){const a=yo.get(n);if(!a){$r++;return}const o=l=>{l&&l.trigger()};if(Nl(),e==="clear")a.forEach(o);else{const l=He(n),u=l&&Il(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===Kr||!Mi(h)&&h>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Kr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Gi)),hr(n)&&o(a.get(bo)));break;case"delete":l||(o(a.get(Gi)),hr(n)&&o(a.get(bo)));break;case"set":hr(n)&&o(a.get(Gi));break}}Fl()}function qi(n){const e=et(n);return e===n?e:(Rt(e,"iterate",Kr),mn(n)?e:e.map(Jn))}function zl(n){return Rt(n=et(n),"iterate",Kr),n}function fi(n,e){return xi(n)?dr(n)?jr(Jn(e)):jr(e):Jn(e)}const hd={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,n=>fi(this,n))},concat(...n){return qi(this).concat(...n.map(e=>He(e)?qi(e):e))},entries(){return Ua(this,"entries",n=>(n[1]=fi(this,n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(i=>fi(this,i)),arguments)},find(n,e){return Un(this,"find",n,e,t=>fi(this,t),arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,t=>fi(this,t),arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return xc(this,"reduce",n,e)},reduceRight(n,...e){return xc(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return Ua(this,"values",n=>fi(this,n))}};function Ua(n,e,t){const i=zl(n),r=i[e]();return i!==n&&!mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dd=Array.prototype;function Un(n,e,t,i,r,s){const a=zl(n),o=a!==n&&!mn(n),l=a[e];if(l!==dd[e]){const f=l.apply(n,s);return o?Jn(f):f}let u=t;a!==n&&(o?u=function(f,h){return t.call(this,fi(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function xc(n,e,t,i){const r=zl(n);let s=t;return r!==n&&(mn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,fi(n,o),l,n)}),r[e](s,...i)}function Na(n,e,t){const i=et(n);Rt(i,"iterate",Kr);const r=i[e](...t);return(r===-1||r===!1)&&kl(t[0])?(t[0]=et(t[0]),i[e](...t)):r}function wr(n,e,t=[]){jn(),Nl();const i=et(n)[e].apply(n,t);return Fl(),Zn(),i}const pd=Pl("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function md(n){Mi(n)||(n=String(n));const e=et(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class hf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Td:gf:s?mf:pf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=hd[t]))return l;if(t==="hasOwnProperty")return md}const o=Reflect.get(e,t,Dt(e)?e:i);if((Mi(t)?ff.has(t):pd(t))||(r||Rt(e,"get",t),s))return o;if(Dt(o)){const l=a&&Il(t)?o:o.value;return r&&dt(l)?Ao(l):l}return dt(o)?r?Ao(o):Hl(o):o}}class df extends hf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=He(e)&&Il(t);if(!this._isShallow){const u=xi(s);if(!mn(i)&&!xi(i)&&(s=et(s),i=et(i)),!a&&Dt(s)&&!Dt(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,Dt(e)?e:r);return e===et(r)&&(o?gi(i,s)&&kn(e,"set",t,i):kn(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!ff.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",He(e)?"length":Gi),Reflect.ownKeys(e)}}class gd extends hf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _d=new df,xd=new gd,vd=new df(!0);const To=n=>n,_s=n=>Reflect.getPrototypeOf(n);function Sd(n,e,t){return function(...i){const r=this.__v_raw,s=et(r),a=hr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?To:e?jr:Jn;return!e&&Rt(s,"iterate",l?bo:Gi),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Md(n,e){const t={get(r){const s=this.__v_raw,a=et(s),o=et(r);n||(gi(r,o)&&Rt(a,"get",r),Rt(a,"get",o));const{has:l}=_s(a),u=e?To:n?jr:Jn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(et(r),"iterate",Gi),r.size},has(r){const s=this.__v_raw,a=et(s),o=et(r);return n||(gi(r,o)&&Rt(a,"has",r),Rt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=et(o),u=e?To:n?jr:Jn;return!n&&Rt(l,"iterate",Gi),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return At(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){!e&&!mn(r)&&!xi(r)&&(r=et(r));const s=et(this);return _s(s).has.call(s,r)||(s.add(r),kn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!xi(s)&&(s=et(s));const a=et(this),{has:o,get:l}=_s(a);let u=o.call(a,r);u||(r=et(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?gi(s,c)&&kn(a,"set",r,s):kn(a,"add",r,s),this},delete(r){const s=et(this),{has:a,get:o}=_s(s);let l=a.call(s,r);l||(r=et(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&kn(s,"delete",r,void 0),u},clear(){const r=et(this),s=r.size!==0,a=r.clear();return s&&kn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sd(r,n,e)}),t}function Vl(n,e){const t=Md(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const Ed={get:Vl(!1,!1)},yd={get:Vl(!1,!0)},bd={get:Vl(!0,!1)};const pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,Td=new WeakMap;function Ad(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(n){return n.__v_skip||!Object.isExtensible(n)?0:Ad(Zh(n))}function Hl(n){return xi(n)?n:Gl(n,!1,_d,Ed,pf)}function Cd(n){return Gl(n,!1,vd,yd,mf)}function Ao(n){return Gl(n,!0,xd,bd,gf)}function Gl(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=wd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function dr(n){return xi(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function kl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Rd(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&Ju(n,"__v_skip",!0),n}const Jn=n=>dt(n)?Hl(n):n,jr=n=>dt(n)?Ao(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function tn(n){return Pd(n,!1)}function Pd(n,e){return Dt(n)?n:new Dd(n,e)}class Dd{constructor(e,t){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||xi(e);e=i?e:et(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:Jn(e),this.dep.trigger())}}function Ld(n){return Dt(n)?n.value:n}const Id={get:(n,e,t)=>e==="__v_raw"?n:Ld(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _f(n){return dr(n)?n:new Proxy(n,Id)}class Ud{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return sf(this,!0),!0}get value(){const e=this.dep.track();return lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nd(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Ud(i,r,t)}const vs={},Qs=new WeakMap;let Ui;function Fd(n,e=!1,t=Ui){if(t){let i=Qs.get(t);i||Qs.set(t,i=[]),i.push(n)}}function Od(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=y=>r?y:mn(y)||r===!1||r===0?Wn(y,1):Wn(y);let c,f,h,p,x=!1,S=!1;if(Dt(n)?(f=()=>n.value,x=mn(n)):dr(n)?(f=()=>u(n),x=!0):He(n)?(S=!0,x=n.some(y=>dr(y)||mn(y)),f=()=>n.map(y=>{if(Dt(y))return y.value;if(dr(y))return u(y);if(Xe(y))return l?l(y,2):y()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){jn();try{h()}finally{Zn()}}const y=Ui;Ui=c;try{return l?l(n,3,[p]):n(p)}finally{Ui=y}}:f=wn,e&&r){const y=f,w=r===!0?1/0:r;f=()=>Wn(y(),w)}const g=cd(),d=()=>{c.stop(),g&&g.active&&Ll(g.effects,c)};if(s&&e){const y=e;e=(...w)=>{y(...w),d()}}let T=S?new Array(n.length).fill(vs):vs;const A=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const w=c.run();if(r||x||(S?w.some((R,P)=>gi(R,T[P])):gi(w,T))){h&&h();const R=Ui;Ui=c;try{const P=[w,T===vs?void 0:S&&T[0]===vs?[]:T,p];T=w,l?l(e,3,P):e(...P)}finally{Ui=R}}}else c.run()};return o&&o(A),c=new nf(f),c.scheduler=a?()=>a(A,!1):A,p=y=>Fd(y,!1,c),h=c.onStop=()=>{const y=Qs.get(c);if(y){if(l)l(y,4);else for(const w of y)w();Qs.delete(c)}},e?i?A(!0):T=c.run():a?a(A.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Wn(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dt(n))Wn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(Yu(n)||hr(n))n.forEach(i=>{Wn(i,e,t)});else if(ju(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}function ls(n,e,t,i){try{return i?n(...i):n()}catch(r){pa(r,e,t)}}function _n(n,e,t,i){if(Xe(n)){const r=ls(n,e,t,i);return r&&$u(r)&&r.catch(s=>{pa(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(_n(n[s],e,t,i));return r}}function pa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){jn(),ls(s,null,10,[n,l,u]),Zn();return}}Bd(n,t,r,i,a)}function Bd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ft=[];let En=-1;const pr=[];let hi=null,lr=0;const xf=Promise.resolve();let ea=null;function zd(n){const e=ea||xf;return n?e.then(this?n.bind(this):n):e}function Vd(n){let e=En+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,r=Ft[i],s=Zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Wl(n){if(!(n.flags&1)){const e=Zr(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=Zr(t)?Ft.push(n):Ft.splice(Vd(e),0,n),n.flags|=1,vf()}}function vf(){ea||(ea=xf.then(Mf))}function Hd(n){He(n)?pr.push(...n):hi&&n.id===-1?hi.splice(lr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1),vf()}function vc(n,e,t=En+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sf(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>Zr(t)-Zr(i));if(pr.length=0,hi){hi.push(...e);return}for(hi=e,lr=0;lr<hi.length;lr++){const t=hi[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hi=null,lr=0}}const Zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Mf(n){try{for(En=0;En<Ft.length;En++){const e=Ft[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ft.length;En++){const e=Ft[En];e&&(e.flags&=-2)}En=-1,Ft.length=0,Sf(),ea=null,(Ft.length||pr.length)&&Mf()}}let on=null,Ef=null;function ta(n){const e=on;return on=n,Ef=n&&n.type.__scopeId||null,e}function yf(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ra(-1);const s=ta(e);let a;try{a=n(...r)}finally{ta(s),i._d&&ra(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Gd(n,e){if(on===null)return n;const t=Sa(on),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ct]=e[r];s&&(Xe(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(jn(),_n(l,t,8,[n.el,o,n,e]),Zn())}}function kd(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function Ws(n,e,t=!1){const i=Qf();if(i||mr){let r=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Wd=Symbol.for("v-scx"),Xd=()=>Ws(Wd);function kr(n,e,t){return bf(n,e,t)}function bf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:a}=t,o=At({},t),l=e&&i||!e&&s!=="post";let u;if(ts){if(s==="sync"){const p=Xd();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=wn,p.resume=wn,p.pause=wn,p}}const c=Bt;o.call=(p,x,S)=>_n(p,c,x,S);let f=!1;s==="post"?o.scheduler=p=>{Kt(p,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,x)=>{x?p():Wl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Od(n,e,o);return ts&&(u?u.push(h):l&&h()),h}function qd(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const a=cs(this),o=bf(r,s.bind(i),t);return a(),o}function Tf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Yd=Symbol("_vte"),Af=n=>n.__isTeleport,Gn=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function $d(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xl(()=>{n.isMounted=!0}),_a(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Cf=n=>{const e=n.subTree;return e.component?Cf(e.component):e},Kd={name:"BaseTransition",props:wf,setup(n,{slots:e}){const t=Qf(),i=$d();return()=>{const r=e.default&&Df(e.default(),!0);if(!r||!r.length)return;const s=Rf(r),a=et(n),{mode:o}=a;if(i.isLeaving)return Fa(s);const l=Sc(s);if(!l)return Fa(s);let u=wo(l,a,i,t,f=>u=f);l.type!==Ot&&Jr(l,u);let c=t.subTree&&Sc(t.subTree);if(c&&c.type!==Ot&&!Fi(c,l)&&Cf(t).type!==Ot){let f=wo(c,a,i,t);if(Jr(c,f),o==="out-in"&&l.type!==Ot)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Fa(s);o==="in-out"&&l.type!==Ot?f.delayLeave=(h,p,x)=>{const S=Pf(i,c);S[String(c.key)]=c,h[Gn]=()=>{p(),h[Gn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Rf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ot){e=t;break}}return e}const jd=Kd;function Pf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wo(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:g,onAppear:d,onAfterAppear:T,onAppearCancelled:A}=e,y=String(n.key),w=Pf(t,n),R=(_,E)=>{_&&_n(_,i,9,E)},P=(_,E)=>{const L=E[1];R(_,E),He(_)?_.every(U=>U.length<=1)&&L():_.length<=1&&L()},O={mode:a,persisted:o,beforeEnter(_){let E=l;if(!t.isMounted)if(s)E=g||l;else return;_[Gn]&&_[Gn](!0);const L=w[y];L&&Fi(n,L)&&L.el[Gn]&&L.el[Gn](),R(E,[_])},enter(_){let E=u,L=c,U=f;if(!t.isMounted)if(s)E=d||u,L=T||c,U=A||f;else return;let z=!1;const J=_[Ss]=Q=>{z||(z=!0,Q?R(U,[_]):R(L,[_]),O.delayedLeave&&O.delayedLeave(),_[Ss]=void 0)};E?P(E,[_,J]):J()},leave(_,E){const L=String(n.key);if(_[Ss]&&_[Ss](!0),t.isUnmounting)return E();R(h,[_]);let U=!1;const z=_[Gn]=J=>{U||(U=!0,E(),J?R(S,[_]):R(x,[_]),_[Gn]=void 0,w[L]===n&&delete w[L])};w[L]=n,p?P(p,[_,z]):z()},clone(_){const E=wo(_,e,t,i,r);return r&&r(E),E}};return O}function Fa(n){if(ma(n))return n=vi(n),n.children=null,n}function Sc(n){if(!ma(n))return Af(n.type)&&n.children?Rf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function Jr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Df(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===rn?(a.patchFlag&128&&r++,i=i.concat(Df(a.children,e,o))):(e||a.type!==Ot)&&i.push(o!=null?vi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const na=new WeakMap;function Wr(n,e,t,i,r=!1){if(He(n)){n.forEach((x,S)=>Wr(x,e&&(He(e)?e[S]:e),t,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Sa(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===ct?o.refs={}:o.refs,f=o.setupState,h=et(f),p=f===ct?qu:x=>tt(h,x);if(u!=null&&u!==l){if(Mc(e),St(u))c[u]=null,p(u)&&(f[u]=null);else if(Dt(u)){u.value=null;const x=e;x.k&&(c[x.k]=null)}}if(Xe(l))ls(l,o,12,[a,c]);else{const x=St(l),S=Dt(l);if(x||S){const g=()=>{if(n.f){const d=x?p(l)?f[l]:c[l]:l.value;if(r)He(d)&&Ll(d,s);else if(He(d))d.includes(s)||d.push(s);else if(x)c[l]=[s],p(l)&&(f[l]=c[l]);else{const T=[s];l.value=T,n.k&&(c[n.k]=T)}}else x?(c[l]=a,p(l)&&(f[l]=a)):S&&(l.value=a,n.k&&(c[n.k]=a))};if(a){const d=()=>{g(),na.delete(n)};d.id=-1,na.set(n,d),Kt(d,t)}else Mc(n),g()}}}function Mc(n){const e=na.get(n);e&&(e.flags|=8,na.delete(n))}da().requestIdleCallback;da().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,ma=n=>n.type.__isKeepAlive;function Zd(n,e){If(n,"a",e)}function Jd(n,e){If(n,"da",e)}function If(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ga(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ma(r.parent.vnode)&&Qd(i,e,t,r),r=r.parent}}function Qd(n,e,t,i){const r=ga(e,n,i,!0);Uf(()=>{Ll(i[e],r)},t)}function ga(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{jn();const o=cs(t),l=_n(e,t,n,a);return o(),Zn(),l});return i?r.unshift(s):r.push(s),s}}const ii=n=>(e,t=Bt)=>{(!ts||n==="sp")&&ga(n,(...i)=>e(...i),t)},ep=ii("bm"),Xl=ii("m"),tp=ii("bu"),np=ii("u"),_a=ii("bum"),Uf=ii("um"),ip=ii("sp"),rp=ii("rtg"),sp=ii("rtc");function ap(n,e=Bt){ga("ec",n,e)}const op=Symbol.for("v-ndc"),Co=n=>n?eh(n)?Sa(n):Co(n.parent):null,qr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Co(n.parent),$root:n=>Co(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ff(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=zd.bind(n.proxy)),$watch:n=>qd.bind(n)}),Oa=(n,e)=>n!==ct&&!n.__isScriptSetup&&tt(n,e),lp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Oa(i,e))return a[e]=1,i[e];if(r!==ct&&tt(r,e))return a[e]=2,r[e];if(tt(s,e))return a[e]=3,s[e];if(t!==ct&&tt(t,e))return a[e]=4,t[e];Ro&&(a[e]=0)}}const u=qr[e];let c,f;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==ct&&tt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Oa(r,e)?(r[e]=t,!0):i!==ct&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==ct&&o[0]!=="$"&&tt(n,o)||Oa(e,o)||tt(s,o)||tt(i,o)||tt(qr,o)||tt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ec(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ro=!0;function cp(n){const e=Ff(n),t=n.proxy,i=n.ctx;Ro=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:x,activated:S,deactivated:g,beforeDestroy:d,beforeUnmount:T,destroyed:A,unmounted:y,render:w,renderTracked:R,renderTriggered:P,errorCaptured:O,serverPrefetch:_,expose:E,inheritAttrs:L,components:U,directives:z,filters:J}=e;if(u&&up(u,i,null),a)for(const B in a){const W=a[B];Xe(W)&&(i[B]=W.bind(t))}if(r){const B=r.call(t,t);dt(B)&&(n.data=Hl(B))}if(Ro=!0,s)for(const B in s){const W=s[B],ce=Xe(W)?W.bind(t,t):Xe(W.get)?W.get.bind(t,t):wn,ue=!Xe(W)&&Xe(W.set)?W.set.bind(t):wn,ee=Kl({get:ce,set:ue});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ee.value,set:se=>ee.value=se})}if(o)for(const B in o)Nf(o[B],i,t,B);if(l){const B=Xe(l)?l.call(t):l;Reflect.ownKeys(B).forEach(W=>{kd(W,B[W])})}c&&yc(c,n,"c");function Y(B,W){He(W)?W.forEach(ce=>B(ce.bind(t))):W&&B(W.bind(t))}if(Y(ep,f),Y(Xl,h),Y(tp,p),Y(np,x),Y(Zd,S),Y(Jd,g),Y(ap,O),Y(sp,R),Y(rp,P),Y(_a,T),Y(Uf,y),Y(ip,_),He(E))if(E.length){const B=n.exposed||(n.exposed={});E.forEach(W=>{Object.defineProperty(B,W,{get:()=>t[W],set:ce=>t[W]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===wn&&(n.render=w),L!=null&&(n.inheritAttrs=L),U&&(n.components=U),z&&(n.directives=z),_&&Lf(n)}function up(n,e,t=wn){He(n)&&(n=Po(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=Ws(r.from||i,r.default,!0):s=Ws(r.from||i):s=Ws(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function yc(n,e,t){_n(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let r=i.includes(".")?Tf(t,i):()=>t[i];if(St(n)){const s=e[n];Xe(s)&&kr(r,s)}else if(Xe(n))kr(r,n.bind(t));else if(dt(n))if(He(n))n.forEach(s=>Nf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&kr(r,s,n)}}function Ff(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>ia(l,u,a,!0)),ia(l,e,a)),dt(e)&&s.set(e,l),l}function ia(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ia(n,s,t,!0),r&&r.forEach(a=>ia(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=fp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const fp={data:bc,props:Tc,emits:Tc,methods:Or,computed:Or,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Or,directives:Or,watch:dp,provide:bc,inject:hp};function bc(n,e){return e?n?function(){return At(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function hp(n,e){return Or(Po(n),Po(e))}function Po(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Or(n,e){return n?At(Object.create(null),n,e):e}function Tc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:At(Object.create(null),Ec(n),Ec(e??{})):e}function dp(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function mp(n,e){return function(i,r=null){Xe(i)||(i=At({},i)),r!=null&&!dt(r)&&(r=null);const s=Of(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:pp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Kp,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Xe(c.install)?(a.add(c),c.install(u,...f)):Xe(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||bt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,c,h),l=!0,u._container=c,c.__vue_app__=u,Sa(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(_n(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=mr;mr=u;try{return c()}finally{mr=f}}};return u}}let mr=null;const gp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_i(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function _p(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),a=s&&gp(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>St(c)?c.trim():c)),a.number&&(r=t.map(ed)));let o,l=i[o=Pa(e)]||i[o=Pa(_i(e))];!l&&s&&(l=i[o=Pa(Wi(e))]),l&&_n(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(u,n,6,r)}}const xp=new WeakMap;function Bf(n,e,t=!1){const i=t?xp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Xe(n)){const l=u=>{const c=Bf(u,e,!0);c&&(o=!0,At(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(dt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>a[l]=null):At(a,s),dt(n)&&i.set(n,a),a)}function xa(n,e){return!n||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Wi(e))||tt(n,e))}function Ac(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:x,inheritAttrs:S}=n,g=ta(n);let d,T;try{if(t.shapeFlag&4){const y=r||i,w=y;d=yn(u.call(w,y,c,f,p,h,x)),T=o}else{const y=e;d=yn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:vp(o)}}catch(y){Yr.length=0,pa(y,n,1),d=bt(Ot)}let A=d;if(T&&S!==!1){const y=Object.keys(T),{shapeFlag:w}=A;y.length&&w&7&&(s&&y.some(Dl)&&(T=Sp(T,s)),A=vi(A,T,!1,!0))}return t.dirs&&(A=vi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Jr(A,t.transition),d=A,ta(g),d}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ua(t))&&((e||(e={}))[t]=n[t]);return e},Sp=(n,e)=>{const t={};for(const i in n)(!Dl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wc(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(a[h]!==i[h]&&!xa(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?wc(i,a,u):!0:!!a;return!1}function wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xa(t,s))return!0}return!1}function Ep({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const zf={},Vf=()=>Object.create(zf),Hf=n=>Object.getPrototypeOf(n)===zf;function yp(n,e,t,i=!1){const r={},s=Vf();n.propsDefaults=Object.create(null),Gf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Cd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=et(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(xa(n.emitsOptions,h))continue;const p=e[h];if(l)if(tt(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const x=_i(h);r[x]=Do(l,o,x,p,n,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{Gf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!tt(e,f)&&((c=Wi(f))===f||!tt(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Do(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!tt(e,f))&&(delete s[f],u=!0)}u&&kn(n.attrs,"set","")}function Gf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vr(l))continue;const u=e[l];let c;r&&tt(r,c=_i(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:xa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=et(t),u=o||ct;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Do(r,l,f,u[f],n,!tt(u,f))}}return a}function Do(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=tt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=cs(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const Tp=new WeakMap;function kf(n,e,t=!1){const i=t?Tp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Xe(n)){const c=f=>{l=!0;const[h,p]=kf(f,e,!0);At(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return dt(n)&&i.set(n,fr),fr;if(He(s))for(let c=0;c<s.length;c++){const f=_i(s[c]);Cc(f)&&(a[f]=ct)}else if(s)for(const c in s){const f=_i(c);if(Cc(f)){const h=s[c],p=a[f]=He(h)||Xe(h)?{type:h}:At({},h),x=p.type;let S=!1,g=!0;if(He(x))for(let d=0;d<x.length;++d){const T=x[d],A=Xe(T)&&T.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(g=!1)}else S=Xe(x)&&x.name==="Boolean";p[0]=S,p[1]=g,(S||tt(p,"default"))&&o.push(f)}}const u=[a,o];return dt(n)&&i.set(n,u),u}function Cc(n){return n[0]!=="$"&&!Vr(n)}const ql=n=>n==="_"||n==="_ctx"||n==="$stable",Yl=n=>He(n)?n.map(yn):[yn(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=yf((...r)=>Yl(e(...r)),t);return i._c=!1,i},Wf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ql(r))continue;const s=n[r];if(Xe(s))e[r]=Ap(r,s,i);else if(s!=null){const a=Yl(s);e[r]=()=>a}}},Xf=(n,e)=>{const t=Yl(e);n.slots.default=()=>t},qf=(n,e,t)=>{for(const i in e)(t||!ql(i))&&(n[i]=e[i])},wp=(n,e,t)=>{const i=n.slots=Vf();if(n.vnode.shapeFlag&32){const r=e._;r?(qf(i,e,t),t&&Ju(i,"_",r,!0)):Wf(e,i)}else e&&Xf(n,e)},Cp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:qf(r,e,t):(s=!e.$stable,Wf(e,r)),a=e}else e&&(Xf(n,e),a={default:1});if(s)for(const o in r)!ql(o)&&a[o]==null&&delete r[o]},Kt=Ip;function Rp(n){return Pp(n)}function Pp(n,e){const t=da();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=wn,insertStaticContent:x}=n,S=(C,I,G,ne=null,K=null,re=null,b=void 0,fe=null,ae=!!I.dynamicChildren)=>{if(C===I)return;C&&!Fi(C,I)&&(ne=ie(C),se(C,K,re,!0),C=null),I.patchFlag===-2&&(ae=!1,I.dynamicChildren=null);const{type:te,ref:oe,shapeFlag:v}=I;switch(te){case va:g(C,I,G,ne);break;case Ot:d(C,I,G,ne);break;case za:C==null&&T(I,G,ne,b);break;case rn:U(C,I,G,ne,K,re,b,fe,ae);break;default:v&1?w(C,I,G,ne,K,re,b,fe,ae):v&6?z(C,I,G,ne,K,re,b,fe,ae):(v&64||v&128)&&te.process(C,I,G,ne,K,re,b,fe,ae,Re)}oe!=null&&K?Wr(oe,C&&C.ref,re,I||C,!I):oe==null&&C&&C.ref!=null&&Wr(C.ref,null,re,C,!0)},g=(C,I,G,ne)=>{if(C==null)i(I.el=o(I.children),G,ne);else{const K=I.el=C.el;I.children!==C.children&&u(K,I.children)}},d=(C,I,G,ne)=>{C==null?i(I.el=l(I.children||""),G,ne):I.el=C.el},T=(C,I,G,ne)=>{[C.el,C.anchor]=x(C.children,I,G,ne,C.el,C.anchor)},A=({el:C,anchor:I},G,ne)=>{let K;for(;C&&C!==I;)K=h(C),i(C,G,ne),C=K;i(I,G,ne)},y=({el:C,anchor:I})=>{let G;for(;C&&C!==I;)G=h(C),r(C),C=G;r(I)},w=(C,I,G,ne,K,re,b,fe,ae)=>{if(I.type==="svg"?b="svg":I.type==="math"&&(b="mathml"),C==null)R(I,G,ne,K,re,b,fe,ae);else{const te=C.el&&C.el._isVueCE?C.el:null;try{te&&te._beginPatch(),_(C,I,K,re,b,fe,ae)}finally{te&&te._endPatch()}}},R=(C,I,G,ne,K,re,b,fe)=>{let ae,te;const{props:oe,shapeFlag:v,transition:m,dirs:D}=C;if(ae=C.el=a(C.type,re,oe&&oe.is,oe),v&8?c(ae,C.children):v&16&&O(C.children,ae,null,ne,K,Ba(C,re),b,fe),D&&bi(C,null,ne,"created"),P(ae,C,C.scopeId,b,ne),oe){for(const Z in oe)Z!=="value"&&!Vr(Z)&&s(ae,Z,null,oe[Z],re,ne);"value"in oe&&s(ae,"value",null,oe.value,re),(te=oe.onVnodeBeforeMount)&&Sn(te,ne,C)}D&&bi(C,null,ne,"beforeMount");const k=Dp(K,m);k&&m.beforeEnter(ae),i(ae,I,G),((te=oe&&oe.onVnodeMounted)||k||D)&&Kt(()=>{te&&Sn(te,ne,C),k&&m.enter(ae),D&&bi(C,null,ne,"mounted")},K)},P=(C,I,G,ne,K)=>{if(G&&p(C,G),ne)for(let re=0;re<ne.length;re++)p(C,ne[re]);if(K){let re=K.subTree;if(I===re||jf(re.type)&&(re.ssContent===I||re.ssFallback===I)){const b=K.vnode;P(C,b,b.scopeId,b.slotScopeIds,K.parent)}}},O=(C,I,G,ne,K,re,b,fe,ae=0)=>{for(let te=ae;te<C.length;te++){const oe=C[te]=fe?di(C[te]):yn(C[te]);S(null,oe,I,G,ne,K,re,b,fe)}},_=(C,I,G,ne,K,re,b)=>{const fe=I.el=C.el;let{patchFlag:ae,dynamicChildren:te,dirs:oe}=I;ae|=C.patchFlag&16;const v=C.props||ct,m=I.props||ct;let D;if(G&&Ti(G,!1),(D=m.onVnodeBeforeUpdate)&&Sn(D,G,I,C),oe&&bi(I,C,G,"beforeUpdate"),G&&Ti(G,!0),(v.innerHTML&&m.innerHTML==null||v.textContent&&m.textContent==null)&&c(fe,""),te?E(C.dynamicChildren,te,fe,G,ne,Ba(I,K),re):b||W(C,I,fe,null,G,ne,Ba(I,K),re,!1),ae>0){if(ae&16)L(fe,v,m,G,K);else if(ae&2&&v.class!==m.class&&s(fe,"class",null,m.class,K),ae&4&&s(fe,"style",v.style,m.style,K),ae&8){const k=I.dynamicProps;for(let Z=0;Z<k.length;Z++){const H=k[Z],be=v[H],pe=m[H];(pe!==be||H==="value")&&s(fe,H,be,pe,K,G)}}ae&1&&C.children!==I.children&&c(fe,I.children)}else!b&&te==null&&L(fe,v,m,G,K);((D=m.onVnodeUpdated)||oe)&&Kt(()=>{D&&Sn(D,G,I,C),oe&&bi(I,C,G,"updated")},ne)},E=(C,I,G,ne,K,re,b)=>{for(let fe=0;fe<I.length;fe++){const ae=C[fe],te=I[fe],oe=ae.el&&(ae.type===rn||!Fi(ae,te)||ae.shapeFlag&198)?f(ae.el):G;S(ae,te,oe,null,ne,K,re,b,!0)}},L=(C,I,G,ne,K)=>{if(I!==G){if(I!==ct)for(const re in I)!Vr(re)&&!(re in G)&&s(C,re,I[re],null,K,ne);for(const re in G){if(Vr(re))continue;const b=G[re],fe=I[re];b!==fe&&re!=="value"&&s(C,re,fe,b,K,ne)}"value"in G&&s(C,"value",I.value,G.value,K)}},U=(C,I,G,ne,K,re,b,fe,ae)=>{const te=I.el=C?C.el:o(""),oe=I.anchor=C?C.anchor:o("");let{patchFlag:v,dynamicChildren:m,slotScopeIds:D}=I;D&&(fe=fe?fe.concat(D):D),C==null?(i(te,G,ne),i(oe,G,ne),O(I.children||[],G,oe,K,re,b,fe,ae)):v>0&&v&64&&m&&C.dynamicChildren&&C.dynamicChildren.length===m.length?(E(C.dynamicChildren,m,G,K,re,b,fe),(I.key!=null||K&&I===K.subTree)&&Yf(C,I,!0)):W(C,I,G,oe,K,re,b,fe,ae)},z=(C,I,G,ne,K,re,b,fe,ae)=>{I.slotScopeIds=fe,C==null?I.shapeFlag&512?K.ctx.activate(I,G,ne,b,ae):J(I,G,ne,K,re,b,ae):Q(C,I,ae)},J=(C,I,G,ne,K,re,b)=>{const fe=C.component=Gp(C,ne,K);if(ma(C)&&(fe.ctx.renderer=Re),kp(fe,!1,b),fe.asyncDep){if(K&&K.registerDep(fe,Y,b),!C.el){const ae=fe.subTree=bt(Ot);d(null,ae,I,G),C.placeholder=ae.el}}else Y(fe,C,I,G,K,re,b)},Q=(C,I,G)=>{const ne=I.component=C.component;if(Mp(C,I,G))if(ne.asyncDep&&!ne.asyncResolved){B(ne,I,G);return}else ne.next=I,ne.update();else I.el=C.el,ne.vnode=I},Y=(C,I,G,ne,K,re,b)=>{const fe=()=>{if(C.isMounted){let{next:v,bu:m,u:D,parent:k,vnode:Z}=C;{const Ne=$f(C);if(Ne){v&&(v.el=Z.el,B(C,v,b)),Ne.asyncDep.then(()=>{C.isUnmounted||fe()});return}}let H=v,be;Ti(C,!1),v?(v.el=Z.el,B(C,v,b)):v=Z,m&&Da(m),(be=v.props&&v.props.onVnodeBeforeUpdate)&&Sn(be,k,v,Z),Ti(C,!0);const pe=Ac(C),we=C.subTree;C.subTree=pe,S(we,pe,f(we.el),ie(we),C,K,re),v.el=pe.el,H===null&&Ep(C,pe.el),D&&Kt(D,K),(be=v.props&&v.props.onVnodeUpdated)&&Kt(()=>Sn(be,k,v,Z),K)}else{let v;const{el:m,props:D}=I,{bm:k,m:Z,parent:H,root:be,type:pe}=C,we=Xr(I);Ti(C,!1),k&&Da(k),!we&&(v=D&&D.onVnodeBeforeMount)&&Sn(v,H,I),Ti(C,!0);{be.ce&&be.ce._def.shadowRoot!==!1&&be.ce._injectChildStyle(pe);const Ne=C.subTree=Ac(C);S(null,Ne,G,ne,C,K,re),I.el=Ne.el}if(Z&&Kt(Z,K),!we&&(v=D&&D.onVnodeMounted)){const Ne=I;Kt(()=>Sn(v,H,Ne),K)}(I.shapeFlag&256||H&&Xr(H.vnode)&&H.vnode.shapeFlag&256)&&C.a&&Kt(C.a,K),C.isMounted=!0,I=G=ne=null}};C.scope.on();const ae=C.effect=new nf(fe);C.scope.off();const te=C.update=ae.run.bind(ae),oe=C.job=ae.runIfDirty.bind(ae);oe.i=C,oe.id=C.uid,ae.scheduler=()=>Wl(oe),Ti(C,!0),te()},B=(C,I,G)=>{I.component=C;const ne=C.vnode.props;C.vnode=I,C.next=null,bp(C,I.props,ne,G),Cp(C,I.children,G),jn(),vc(C),Zn()},W=(C,I,G,ne,K,re,b,fe,ae=!1)=>{const te=C&&C.children,oe=C?C.shapeFlag:0,v=I.children,{patchFlag:m,shapeFlag:D}=I;if(m>0){if(m&128){ue(te,v,G,ne,K,re,b,fe,ae);return}else if(m&256){ce(te,v,G,ne,K,re,b,fe,ae);return}}D&8?(oe&16&&j(te,K,re),v!==te&&c(G,v)):oe&16?D&16?ue(te,v,G,ne,K,re,b,fe,ae):j(te,K,re,!0):(oe&8&&c(G,""),D&16&&O(v,G,ne,K,re,b,fe,ae))},ce=(C,I,G,ne,K,re,b,fe,ae)=>{C=C||fr,I=I||fr;const te=C.length,oe=I.length,v=Math.min(te,oe);let m;for(m=0;m<v;m++){const D=I[m]=ae?di(I[m]):yn(I[m]);S(C[m],D,G,null,K,re,b,fe,ae)}te>oe?j(C,K,re,!0,!1,v):O(I,G,ne,K,re,b,fe,ae,v)},ue=(C,I,G,ne,K,re,b,fe,ae)=>{let te=0;const oe=I.length;let v=C.length-1,m=oe-1;for(;te<=v&&te<=m;){const D=C[te],k=I[te]=ae?di(I[te]):yn(I[te]);if(Fi(D,k))S(D,k,G,null,K,re,b,fe,ae);else break;te++}for(;te<=v&&te<=m;){const D=C[v],k=I[m]=ae?di(I[m]):yn(I[m]);if(Fi(D,k))S(D,k,G,null,K,re,b,fe,ae);else break;v--,m--}if(te>v){if(te<=m){const D=m+1,k=D<oe?I[D].el:ne;for(;te<=m;)S(null,I[te]=ae?di(I[te]):yn(I[te]),G,k,K,re,b,fe,ae),te++}}else if(te>m)for(;te<=v;)se(C[te],K,re,!0),te++;else{const D=te,k=te,Z=new Map;for(te=k;te<=m;te++){const Me=I[te]=ae?di(I[te]):yn(I[te]);Me.key!=null&&Z.set(Me.key,te)}let H,be=0;const pe=m-k+1;let we=!1,Ne=0;const he=new Array(pe);for(te=0;te<pe;te++)he[te]=0;for(te=D;te<=v;te++){const Me=C[te];if(be>=pe){se(Me,K,re,!0);continue}let Pe;if(Me.key!=null)Pe=Z.get(Me.key);else for(H=k;H<=m;H++)if(he[H-k]===0&&Fi(Me,I[H])){Pe=H;break}Pe===void 0?se(Me,K,re,!0):(he[Pe-k]=te+1,Pe>=Ne?Ne=Pe:we=!0,S(Me,I[Pe],G,null,K,re,b,fe,ae),be++)}const ve=we?Lp(he):fr;for(H=ve.length-1,te=pe-1;te>=0;te--){const Me=k+te,Pe=I[Me],xe=I[Me+1],We=Me+1<oe?xe.el||Kf(xe):ne;he[te]===0?S(null,Pe,G,We,K,re,b,fe,ae):we&&(H<0||te!==ve[H]?ee(Pe,G,We,2):H--)}}},ee=(C,I,G,ne,K=null)=>{const{el:re,type:b,transition:fe,children:ae,shapeFlag:te}=C;if(te&6){ee(C.component.subTree,I,G,ne);return}if(te&128){C.suspense.move(I,G,ne);return}if(te&64){b.move(C,I,G,Re);return}if(b===rn){i(re,I,G);for(let v=0;v<ae.length;v++)ee(ae[v],I,G,ne);i(C.anchor,I,G);return}if(b===za){A(C,I,G);return}if(ne!==2&&te&1&&fe)if(ne===0)fe.beforeEnter(re),i(re,I,G),Kt(()=>fe.enter(re),K);else{const{leave:v,delayLeave:m,afterLeave:D}=fe,k=()=>{C.ctx.isUnmounted?r(re):i(re,I,G)},Z=()=>{re._isLeaving&&re[Gn](!0),v(re,()=>{k(),D&&D()})};m?m(re,k,Z):Z()}else i(re,I,G)},se=(C,I,G,ne=!1,K=!1)=>{const{type:re,props:b,ref:fe,children:ae,dynamicChildren:te,shapeFlag:oe,patchFlag:v,dirs:m,cacheIndex:D}=C;if(v===-2&&(K=!1),fe!=null&&(jn(),Wr(fe,null,G,C,!0),Zn()),D!=null&&(I.renderCache[D]=void 0),oe&256){I.ctx.deactivate(C);return}const k=oe&1&&m,Z=!Xr(C);let H;if(Z&&(H=b&&b.onVnodeBeforeUnmount)&&Sn(H,I,C),oe&6)Ce(C.component,G,ne);else{if(oe&128){C.suspense.unmount(G,ne);return}k&&bi(C,null,I,"beforeUnmount"),oe&64?C.type.remove(C,I,G,Re,ne):te&&!te.hasOnce&&(re!==rn||v>0&&v&64)?j(te,I,G,!1,!0):(re===rn&&v&384||!K&&oe&16)&&j(ae,I,G),ne&&de(C)}(Z&&(H=b&&b.onVnodeUnmounted)||k)&&Kt(()=>{H&&Sn(H,I,C),k&&bi(C,null,I,"unmounted")},G)},de=C=>{const{type:I,el:G,anchor:ne,transition:K}=C;if(I===rn){Oe(G,ne);return}if(I===za){y(C);return}const re=()=>{r(G),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:b,delayLeave:fe}=K,ae=()=>b(G,re);fe?fe(C.el,re,ae):ae()}else re()},Oe=(C,I)=>{let G;for(;C!==I;)G=h(C),r(C),C=G;r(I)},Ce=(C,I,G)=>{const{bum:ne,scope:K,job:re,subTree:b,um:fe,m:ae,a:te}=C;Rc(ae),Rc(te),ne&&Da(ne),K.stop(),re&&(re.flags|=8,se(b,C,I,G)),fe&&Kt(fe,I),Kt(()=>{C.isUnmounted=!0},I)},j=(C,I,G,ne=!1,K=!1,re=0)=>{for(let b=re;b<C.length;b++)se(C[b],I,G,ne,K)},ie=C=>{if(C.shapeFlag&6)return ie(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const I=h(C.anchor||C.el),G=I&&I[Yd];return G?h(G):I};let _e=!1;const Ie=(C,I,G)=>{let ne;C==null?I._vnode&&(se(I._vnode,null,null,!0),ne=I._vnode.component):S(I._vnode||null,C,I,null,null,null,G),I._vnode=C,_e||(_e=!0,vc(ne),Sf(),_e=!1)},Re={p:S,um:se,m:ee,r:de,mt:J,mc:O,pc:W,pbc:E,n:ie,o:n};return{render:Ie,hydrate:void 0,createApp:mp(Ie)}}function Ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yf(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=di(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Yf(a,o)),o.type===va&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===rn?1:0)),o.type===Ot&&!o.el&&(o.el=a.el)}}function Lp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function $f(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function Rc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Kf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Kf(e.subTree):null}const jf=n=>n.__isSuspense;function Ip(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Hd(n)}const rn=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Yr=[];let Zt=null;function gn(n=!1){Yr.push(Zt=n?null:[])}function Up(){Yr.pop(),Zt=Yr[Yr.length-1]||null}let Qr=1;function ra(n,e=!1){Qr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Zf(n){return n.dynamicChildren=Qr>0?Zt||fr:null,Up(),Qr>0&&Zt&&Zt.push(n),n}function Cn(n,e,t,i,r,s){return Zf(gt(n,e,t,i,r,s,!0))}function Np(n,e,t,i,r){return Zf(bt(n,e,t,i,r,!0))}function sa(n){return n?n.__v_isVNode===!0:!1}function Fi(n,e){return n.type===e.type&&n.key===e.key}const Jf=({key:n})=>n??null,Xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Dt(n)||Xe(n)?{i:on,r:n,k:e,f:!!t}:n:null);function gt(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jf(e),ref:e&&Xs(e),scopeId:Ef,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?($l(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Qr>0&&!a&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const bt=Fp;function Fp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===op)&&(n=Ot),sa(n)){const o=vi(n,e,!0);return t&&$l(o,t),Qr>0&&!s&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag=-2,o}if(Yp(n)&&(n=n.__vccOpts),e){e=Op(e);let{class:o,style:l}=e;o&&!St(o)&&(e.class=xr(o)),dt(l)&&(kl(l)&&!He(l)&&(l=At({},l)),e.style=Ul(l))}const a=St(n)?1:jf(n)?128:Af(n)?64:dt(n)?4:Xe(n)?2:0;return gt(n,e,t,i,r,a,s,!0)}function Op(n){return n?kl(n)||Hf(n)?At({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?zp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Jf(u),ref:e&&e.ref?t&&s?He(s)?s.concat(Xs(e)):[s,Xs(e)]:Xs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jr(c,l.clone(c)),c}function Bp(n=" ",e=0){return bt(va,null,n,e)}function es(n="",e=!1){return e?(gn(),Np(Ot,null,n)):bt(Ot,null,n)}function yn(n){return n==null||typeof n=="boolean"?bt(Ot):He(n)?bt(rn,null,n.slice()):sa(n)?di(n):bt(va,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function $l(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$l(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Hf(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:on},t=32):(e=String(e),i&64?(t=16,e=[Bp(e)]):t=8);n.children=e,n.shapeFlag|=t}function zp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xr([e.class,i.class]));else if(r==="style")e.style=Ul([e.style,i.style]);else if(ua(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){_n(n,e,7,[t,i])}const Vp=Of();let Hp=0;function Gp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Vp,s={uid:Hp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,r),emitsOptions:Bf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_p.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const Qf=()=>Bt||on;let aa,Lo;{const n=da(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};aa=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),Lo=e("__VUE_SSR_SETTERS__",t=>ts=t)}const cs=n=>{const e=Bt;return aa(n),n.scope.on(),()=>{n.scope.off(),aa(e)}},Pc=()=>{Bt&&Bt.scope.off(),aa(null)};function eh(n){return n.vnode.shapeFlag&4}let ts=!1;function kp(n,e=!1,t=!1){e&&Lo(e);const{props:i,children:r}=n.vnode,s=eh(n);yp(n,i,s,e),wp(n,r,t||e);const a=s?Wp(n,e):void 0;return e&&Lo(!1),a}function Wp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lp);const{setup:i}=t;if(i){jn();const r=n.setupContext=i.length>1?qp(n):null,s=cs(n),a=ls(i,n,0,[n.props,r]),o=$u(a);if(Zn(),s(),(o||n.sp)&&!Xr(n)&&Lf(n),o){if(a.then(Pc,Pc),e)return a.then(l=>{Dc(n,l)}).catch(l=>{pa(l,n,0)});n.asyncDep=a}else Dc(n,a)}else th(n)}function Dc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=_f(e)),th(n)}function th(n,e,t){const i=n.type;n.render||(n.render=i.render||wn);{const r=cs(n);jn();try{cp(n)}finally{Zn(),r()}}}const Xp={get(n,e){return Rt(n,"get",""),n[e]}};function qp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xp),slots:n.slots,emit:n.emit,expose:e}}function Sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_f(Rd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function Yp(n){return Xe(n)&&"__vccOpts"in n}const Kl=(n,e)=>Nd(n,e,ts);function $p(n,e,t){try{ra(-1);const i=arguments.length;return i===2?dt(e)&&!He(e)?sa(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&sa(t)&&(t=[t]),bt(n,e,t))}finally{ra(1)}}const Kp="3.5.26";let Io;const Lc=typeof window<"u"&&window.trustedTypes;if(Lc)try{Io=Lc.createPolicy("vue",{createHTML:n=>n})}catch{}const nh=Io?n=>Io.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,Ic=Hn&&Hn.createElement("template"),Jp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Hn.createElementNS(jp,n):e==="mathml"?Hn.createElementNS(Zp,n):t?Hn.createElement(n,{is:t}):Hn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Hn.createTextNode(n),createComment:n=>Hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ic.innerHTML=nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ic.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ri="transition",Cr="animation",ns=Symbol("_vtc"),ih={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qp=At({},wf,ih),em=n=>(n.displayName="Transition",n.props=Qp,n),tm=em((n,{slots:e})=>$p(jd,nm(n),e)),Ai=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},Uc=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function nm(n){const e={};for(const U in n)U in ih||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=im(r),S=x&&x[0],g=x&&x[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:A,onLeave:y,onLeaveCancelled:w,onBeforeAppear:R=d,onAppear:P=T,onAppearCancelled:O=A}=e,_=(U,z,J,Q)=>{U._enterCancelled=Q,wi(U,z?c:o),wi(U,z?u:a),J&&J()},E=(U,z)=>{U._isLeaving=!1,wi(U,f),wi(U,p),wi(U,h),z&&z()},L=U=>(z,J)=>{const Q=U?P:T,Y=()=>_(z,U,J);Ai(Q,[z,Y]),Nc(()=>{wi(z,U?l:s),Nn(z,U?c:o),Uc(Q)||Fc(z,i,S,Y)})};return At(e,{onBeforeEnter(U){Ai(d,[U]),Nn(U,s),Nn(U,a)},onBeforeAppear(U){Ai(R,[U]),Nn(U,l),Nn(U,u)},onEnter:L(!1),onAppear:L(!0),onLeave(U,z){U._isLeaving=!0;const J=()=>E(U,z);Nn(U,f),U._enterCancelled?(Nn(U,h),zc(U)):(zc(U),Nn(U,h)),Nc(()=>{U._isLeaving&&(wi(U,f),Nn(U,p),Uc(y)||Fc(U,i,g,J))}),Ai(y,[U,J])},onEnterCancelled(U){_(U,!1,void 0,!0),Ai(A,[U])},onAppearCancelled(U){_(U,!0,void 0,!0),Ai(O,[U])},onLeaveCancelled(U){E(U),Ai(w,[U])}})}function im(n){if(n==null)return null;if(dt(n))return[Va(n.enter),Va(n.leave)];{const e=Va(n);return[e,e]}}function Va(n){return td(n)}function Nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ns]||(n[ns]=new Set)).add(e)}function wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ns];t&&(t.delete(e),t.size||(n[ns]=void 0))}function Nc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let rm=0;function Fc(n,e,t,i){const r=n._endId=++rm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=sm(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,h)}function sm(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${ri}Delay`),s=i(`${ri}Duration`),a=Oc(r,s),o=i(`${Cr}Delay`),l=i(`${Cr}Duration`),u=Oc(o,l);let c=null,f=0,h=0;e===ri?a>0&&(c=ri,f=a,h=s.length):e===Cr?u>0&&(c=Cr,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?ri:Cr:null,h=c?c===ri?s.length:l.length:0);const p=c===ri&&/\b(?:transform|all)(?:,|$)/.test(i(`${ri}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:p}}function Oc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Bc(t)+Bc(n[i])))}function Bc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function zc(n){return(n?n.ownerDocument:document).body.offsetHeight}function am(n,e,t){const i=n[ns];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const oa=Symbol("_vod"),rh=Symbol("_vsh"),om={name:"show",beforeMount(n,{value:e},{transition:t}){n[oa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Rr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Rr(n,!0),i.enter(n)):i.leave(n,()=>{Rr(n,!1)}):Rr(n,e))},beforeUnmount(n,{value:e}){Rr(n,e)}};function Rr(n,e){n.style.display=e?n[oa]:"none",n[rh]=!e}const lm=Symbol(""),cm=/(?:^|;)\s*display\s*:/;function um(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&qs(i,o,"")}else for(const a in e)t[a]==null&&qs(i,a,"");for(const a in t)a==="display"&&(s=!0),qs(i,a,t[a])}else if(r){if(e!==t){const a=i[lm];a&&(t+=";"+a),i.cssText=t,s=cm.test(t)}}else e&&n.removeAttribute("style");oa in n&&(n[oa]=s?i.display:"",n[rh]&&(i.display="none"))}const Vc=/\s*!important$/;function qs(n,e,t){if(He(t))t.forEach(i=>qs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fm(n,e);Vc.test(t)?n.setProperty(Wi(i),t.replace(Vc,""),"important"):n[i]=t}}const Hc=["Webkit","Moz","ms"],Ha={};function fm(n,e){const t=Ha[e];if(t)return t;let i=_i(e);if(i!=="filter"&&i in n)return Ha[e]=i;i=Zu(i);for(let r=0;r<Hc.length;r++){const s=Hc[r]+i;if(s in n)return Ha[e]=s}return e}const Gc="http://www.w3.org/1999/xlink";function kc(n,e,t,i,r,s=od(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gc,e.slice(6,e.length)):n.setAttributeNS(Gc,e,t):t==null||s&&!Qu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mi(t)?String(t):t)}function Wc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Qu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function hm(n,e,t,i){n.addEventListener(e,t,i)}function dm(n,e,t,i){n.removeEventListener(e,t,i)}const Xc=Symbol("_vei");function pm(n,e,t,i,r=null){const s=n[Xc]||(n[Xc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=mm(e);if(i){const u=s[e]=xm(i,r);hm(n,o,u,l)}else a&&(dm(n,o,a,l),s[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function mm(n){let e;if(qc.test(n)){e={};let i;for(;i=n.match(qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Ga=0;const gm=Promise.resolve(),_m=()=>Ga||(gm.then(()=>Ga=0),Ga=Date.now());function xm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(vm(i,t.value),e,5,[i])};return t.value=n,t.attached=_m(),t}function vm(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?am(n,i,a):e==="style"?um(n,t,i):ua(e)?Dl(e)||pm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mm(n,e,i,a))?(Wc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?Wc(n,_i(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kc(n,e,i,a))};function Mm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yc(e)&&St(t)?!1:e in n}const Em=At({patchProp:Sm},Jp);let $c;function ym(){return $c||($c=Rp(Em))}const bm=((...n)=>{const e=ym().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Am(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Tm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Am(n){return St(n)?document.querySelector(n):n}const jl="182",wm=0,Kc=1,Cm=2,Ys=1,Rm=2,Br=3,Si=0,kt=1,Xn=2,Yn=0,gr=1,Uo=2,jc=3,Zc=4,Pm=5,Oi=100,Dm=101,Lm=102,Im=103,Um=104,Nm=200,Fm=201,Om=202,Bm=203,No=204,Fo=205,zm=206,Vm=207,Hm=208,Gm=209,km=210,Wm=211,Xm=212,qm=213,Ym=214,Oo=0,Bo=1,zo=2,vr=3,Vo=4,Ho=5,Go=6,ko=7,sh=0,$m=1,Km=2,Rn=0,ah=1,oh=2,lh=3,ch=4,uh=5,fh=6,hh=7,dh=300,ki=301,Sr=302,Wo=303,Xo=304,Ma=306,qo=1e3,qn=1001,Yo=1002,Tt=1003,jm=1004,Ms=1005,Pt=1006,ka=1007,Vi=1008,an=1009,ph=1010,mh=1011,is=1012,Zl=1013,Dn=1014,Tn=1015,Qn=1016,Jl=1017,Ql=1018,rs=1020,gh=35902,_h=35899,xh=1021,vh=1022,dn=1023,ei=1026,Hi=1027,Sh=1028,ec=1029,Mr=1030,tc=1031,nc=1033,$s=33776,Ks=33777,js=33778,Zs=33779,$o=35840,Ko=35841,jo=35842,Zo=35843,Jo=36196,Qo=37492,el=37496,tl=37488,nl=37489,il=37490,rl=37491,sl=37808,al=37809,ol=37810,ll=37811,cl=37812,ul=37813,fl=37814,hl=37815,dl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,vl=36492,Sl=36494,Ml=36495,El=36283,yl=36284,bl=36285,Tl=36286,Zm=3200,Jm=0,Qm=1,pi="",nn="srgb",Er="srgb-linear",la="linear",st="srgb",Yi=7680,Jc=519,eg=512,tg=513,ng=514,ic=515,ig=516,rg=517,rc=518,sg=519,Qc=35044,eu="300 es",An=2e3,ca=2001;function Mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ag(){const n=ss("canvas");return n.style.display="block",n}const tu={};function nu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function as(...n){const e=n.join(" ");e in tu||(tu[e]=!0,ke(...n))}function og(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,Al=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function lg(n,e){return(n%e+e)%e}function Xa(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],x=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==h||u!==p||c!==x){let g=l*h+u*p+c*x+f*S;g<0&&(h=-h,p=-p,x=-x,S=-S,g=-g);let d=1-o;if(g<.9995){const T=Math.acos(g),A=Math.sin(T);d=Math.sin(d*T)/A,o=Math.sin(o*T)/A,l=l*d+h*o,u=u*d+p*o,c=c*d+x*o,f=f*d+S*o}else{l=l*d+h*o,u=u*d+p*o,c=c*d+x*o,f=f*d+S*o;const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+c*f+l*p-u*h,e[t+1]=l*x+c*h+u*f-o*p,e[t+2]=u*x+c*p+o*h-l*f,e[t+3]=c*x-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"YXZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"ZXY":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"ZYX":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"YZX":this._x=h*c*f+u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f-h*p*x;break;case"XZY":this._x=h*c*f-u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f+h*p*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new X,iu=new fs;class qe{constructor(e,t,i,r,s,a,o,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],x=i[8],S=r[0],g=r[3],d=r[6],T=r[1],A=r[4],y=r[7],w=r[2],R=r[5],P=r[8];return s[0]=a*S+o*T+l*w,s[3]=a*g+o*A+l*R,s[6]=a*d+o*y+l*P,s[1]=u*S+c*T+f*w,s[4]=u*g+c*A+f*R,s[7]=u*d+c*y+f*P,s[2]=h*S+p*T+x*w,s[5]=h*g+p*A+x*R,s[8]=h*d+p*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*u-c*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(c*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-u*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new qe,ru=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cg(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:la,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const Ze=cg();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class ug{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ss("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($a(r[a].image)):s.push($a(r[a]))}else s=$a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ug.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let hg=0;const Ka=new X;class Lt extends br{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=qn,r=qn,s=Pt,a=Vi,o=dn,l=an,u=Lt.DEFAULT_ANISOTROPY,c=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=us(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qo:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qo:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=dh;Lt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],x=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,y=(p+1)/2,w=(d+1)/2,R=(c+h)/4,P=(f+S)/4,O=(x+g)/4;return A>y&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=P/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=O/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-x)*(g-x)+(f-S)*(f-S)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(f-S)/T,this.z=(h-c)/T,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dg extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends dg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eh extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pg extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),ys.subVectors(this.max,Dr),Ki.subVectors(e.a,Dr),ji.subVectors(e.b,Dr),Zi.subVectors(e.c,Dr),si.subVectors(ji,Ki),ai.subVectors(Zi,ji),Ci.subVectors(Ki,Zi);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,si.z,0,-si.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-si.y,si.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!ja(t,Ki,ji,Zi,ys)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,Ki,ji,Zi,ys))?!1:(bs.crossVectors(si,ai),t=[bs.x,bs.y,bs.z],ja(t,Ki,ji,Zi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new X,new X,new X,new X,new X,new X,new X,new X],cn=new X,Es=new hs,Ki=new X,ji=new X,Zi=new X,si=new X,ai=new X,Ci=new X,Dr=new X,ys=new X,bs=new X,Ri=new X;function ja(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ri.fromArray(n,s);const o=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),u=t.dot(Ri),c=i.dot(Ri);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const mg=new hs,Lr=new X,Za=new X;class Ea{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Za)),this.expandByPoint(Lr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new X,Ja=new X,Ts=new X,oi=new X,Qa=new X,As=new X,eo=new X;class yh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ts),o=oi.dot(this.direction),l=-oi.dot(Ts),u=oi.lengthSq(),c=Math.abs(1-a*a);let f,h,p,x;if(c>0)if(f=a*l-o,h=a*o-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const S=1/c;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(Ts,h),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){Qa.subVectors(t,e),As.subVectors(i,e),eo.crossVectors(Qa,As);let a=this.direction.dot(eo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(oi,As));if(l<0)return null;const u=o*this.direction.dot(Qa.cross(oi));if(u<0||l+u>a)return null;const c=-o*oi.dot(eo);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,l,u,c,f,h,p,x,S,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,h,p,x,S,g)}set(e,t,i,r,s,a,o,l,u,c,f,h,p,x,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,p=a*f,x=o*c,S=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+x*u,t[5]=h-S*u,t[9]=-o*l,t[2]=S-h*u,t[6]=x+p*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,x=u*c,S=u*f;t[0]=h+S*o,t[4]=x*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-x,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,x=u*c,S=u*f;t[0]=h-S*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*c,t[9]=S-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*f,x=o*c,S=o*f;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+S,t[1]=l*f,t[5]=S*u+h,t[9]=p*u-x,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,x=o*l,S=o*u;t[0]=l*c,t[4]=S-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+x,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*u,x=o*l,S=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+S,t[5]=a*c,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*c,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,_g)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),li.crossVectors(i,Yt),li.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),li.crossVectors(i,Yt)),li.normalize(),ws.crossVectors(Yt,li),r[0]=li.x,r[4]=ws.x,r[8]=Yt.x,r[1]=li.y,r[5]=ws.y,r[9]=Yt.y,r[2]=li.z,r[6]=ws.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],x=i[2],S=i[6],g=i[10],d=i[14],T=i[3],A=i[7],y=i[11],w=i[15],R=r[0],P=r[4],O=r[8],_=r[12],E=r[1],L=r[5],U=r[9],z=r[13],J=r[2],Q=r[6],Y=r[10],B=r[14],W=r[3],ce=r[7],ue=r[11],ee=r[15];return s[0]=a*R+o*E+l*J+u*W,s[4]=a*P+o*L+l*Q+u*ce,s[8]=a*O+o*U+l*Y+u*ue,s[12]=a*_+o*z+l*B+u*ee,s[1]=c*R+f*E+h*J+p*W,s[5]=c*P+f*L+h*Q+p*ce,s[9]=c*O+f*U+h*Y+p*ue,s[13]=c*_+f*z+h*B+p*ee,s[2]=x*R+S*E+g*J+d*W,s[6]=x*P+S*L+g*Q+d*ce,s[10]=x*O+S*U+g*Y+d*ue,s[14]=x*_+S*z+g*B+d*ee,s[3]=T*R+A*E+y*J+w*W,s[7]=T*P+A*L+y*Q+w*ce,s[11]=T*O+A*U+y*Y+w*ue,s[15]=T*_+A*z+y*B+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],x=e[3],S=e[7],g=e[11],d=e[15],T=l*p-u*h,A=o*p-u*f,y=o*h-l*f,w=a*p-u*c,R=a*h-l*c,P=a*f-o*c;return t*(S*T-g*A+d*y)-i*(x*T-g*w+d*R)+r*(x*A-S*w+d*P)-s*(x*y-S*R+g*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],x=e[12],S=e[13],g=e[14],d=e[15],T=f*g*u-S*h*u+S*l*p-o*g*p-f*l*d+o*h*d,A=x*h*u-c*g*u-x*l*p+a*g*p+c*l*d-a*h*d,y=c*S*u-x*f*u+x*o*p-a*S*p-c*o*d+a*f*d,w=x*f*l-c*S*l-x*o*h+a*S*h+c*o*g-a*f*g,R=t*T+i*A+r*y+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(S*h*s-f*g*s-S*r*p+i*g*p+f*r*d-i*h*d)*P,e[2]=(o*g*s-S*l*s+S*r*u-i*g*u-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*P,e[4]=A*P,e[5]=(c*g*s-x*h*s+x*r*p-t*g*p-c*r*d+t*h*d)*P,e[6]=(x*l*s-a*g*s-x*r*u+t*g*u+a*r*d-t*l*d)*P,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*p+t*l*p)*P,e[8]=y*P,e[9]=(x*f*s-c*S*s-x*i*p+t*S*p+c*i*d-t*f*d)*P,e[10]=(a*S*s-x*o*s+x*i*u-t*S*u-a*i*d+t*o*d)*P,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*P,e[12]=w*P,e[13]=(c*S*r-x*f*r+x*i*h-t*S*h-c*i*g+t*f*g)*P,e[14]=(x*o*r-a*S*r-x*i*l+t*S*l+a*i*g-t*o*g)*P,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,x=s*f,S=a*c,g=a*f,d=o*f,T=l*u,A=l*c,y=l*f,w=i.x,R=i.y,P=i.z;return r[0]=(1-(S+d))*w,r[1]=(p+y)*w,r[2]=(x-A)*w,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+d))*R,r[6]=(g+T)*R,r[7]=0,r[8]=(x+A)*P,r[9]=(g-T)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),un.copy(this);const u=1/s,c=1/a,f=1/o;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===An)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ca)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===An)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===ca)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new X,un=new xt,gg=new X(0,0,0),_g=new X(1,1,1),li=new X,ws=new X,Yt=new X,au=new xt,ou=new fs;class ti{constructor(e=0,t=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xg=0;const lu=new X,Qi=new fs,Bn=new xt,Cs=new X,Ir=new X,vg=new X,Sg=new fs,cu=new X(1,0,0),uu=new X(0,1,0),fu=new X(0,0,1),hu={type:"added"},Mg={type:"removed"},er={type:"childadded",child:null},to={type:"childremoved",child:null};class Wt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,t=new ti,i=new fs,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ir,Cs,this.up):Bn.lookAt(Cs,Ir,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),er.child=e,this.dispatchEvent(er),er.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mg),to.child=e,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new X,zn=new X,no=new X,Vn=new X,tr=new X,nr=new X,du=new X,io=new X,ro=new X,so=new X,ao=new _t,oo=new _t,lo=new _t;class hn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),zn.subVectors(i,t),no.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(zn),l=fn.dot(no),u=zn.dot(zn),c=zn.dot(no),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,x=(a*c-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ao.setScalar(0),oo.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,i),lo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ao,s.x),a.addScaledVector(oo,s.y),a.addScaledVector(lo,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),zn.subVectors(e,t),fn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),io.subVectors(e,i);const l=tr.dot(io),u=nr.dot(io);if(l<=0&&u<=0)return t.copy(i);ro.subVectors(e,r);const c=tr.dot(ro),f=nr.dot(ro);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(tr,a);so.subVectors(e,s);const p=tr.dot(so),x=nr.dot(so);if(x>=0&&p<=x)return t.copy(s);const S=p*u-l*x;if(S<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(i).addScaledVector(nr,o);const g=c*x-p*f;if(g<=0&&f-c>=0&&p-x>=0)return du.subVectors(s,r),o=(f-c)/(f-c+(p-x)),t.copy(r).addScaledVector(du,o);const d=1/(g+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=lg(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=co(a,s,e+1/3),this.g=co(a,s,e),this.b=co(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ze.workingToColorSpace(Ct.copy(this),e),Math.round(Ke(Ct.r*255,0,255))*65536+Math.round(Ke(Ct.g*255,0,255))*256+Math.round(Ke(Ct.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nn){Ze.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Rs);const i=Xa(ci.h,Rs.h,t),r=Xa(ci.s,Rs.s,t),s=Xa(ci.l,Rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new nt;nt.NAMES=Th;let Eg=0;class ds extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=us(),this.name="",this.type="Material",this.blending=gr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==No&&(i.blendSrc=this.blendSrc),this.blendDst!==Fo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ah extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new X,Ps=new ot;let yg=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class wh extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ch extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kn extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bg=0;const en=new xt,uo=new Wt,ir=new X,$t=new hs,Ur=new hs,yt=new X;class xn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ch:wh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors($t.min,Ur.min),$t.expandByPoint(yt),yt.addVectors($t.max,Ur.max),$t.expandByPoint(yt)):($t.expandByPoint(Ur.min),$t.expandByPoint(Ur.max))}$t.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)yt.fromBufferAttribute(o,u),l&&(ir.fromBufferAttribute(e,u),yt.add(ir)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new X,l[O]=new X;const u=new X,c=new X,f=new X,h=new ot,p=new ot,x=new ot,S=new X,g=new X;function d(O,_,E){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,O),p.fromBufferAttribute(s,_),x.fromBufferAttribute(s,E),c.sub(u),f.sub(u),p.sub(h),x.sub(h);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(S.copy(c).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-x.x).multiplyScalar(L),o[O].add(S),o[_].add(S),o[E].add(S),l[O].add(g),l[_].add(g),l[E].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,_=T.length;O<_;++O){const E=T[O],L=E.start,U=E.count;for(let z=L,J=L+U;z<J;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const A=new X,y=new X,w=new X,R=new X;function P(O){w.fromBufferAttribute(r,O),R.copy(w);const _=o[O];A.copy(_),A.sub(w.multiplyScalar(w.dot(_))).normalize(),y.crossVectors(R,_);const L=y.dot(l[O])<0?-1:1;a.setXYZW(O,A.x,A.y,A.z,L)}for(let O=0,_=T.length;O<_;++O){const E=T[O],L=E.start,U=E.count;for(let z=L,J=L+U;z<J;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*c;for(let d=0;d<c;d++)h[x++]=u[p++]}return new ln(h,c,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new xt,Pi=new yh,Ds=new Ea,mu=new X,Ls=new X,Is=new X,Us=new X,fo=new X,Ns=new X,gu=new X,Fs=new X;class ni extends Wt{constructor(e=new xn,t=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(fo.fromBufferAttribute(f,e),a?Ns.addScaledVector(fo,c):Ns.addScaledVector(fo.sub(t),c))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Ds.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Ds,mu)===null||Pi.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(pu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,w=A;y<w;y+=3){const R=o.getX(y),P=o.getX(y+1),O=o.getX(y+2);r=Os(this,d,e,i,u,c,f,R,P,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const T=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);r=Os(this,a,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,w=A;y<w;y+=3){const R=y,P=y+1,O=y+2;r=Os(this,d,e,i,u,c,f,R,P,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const T=g,A=g+1,y=g+2;r=Os(this,a,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tg(n,e,t,i,r,s,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Si,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Fs);return u<t.near||u>t.far?null:{distance:u,point:Fs.clone(),object:n}}function Os(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Ls),n.getVertexPosition(l,Is),n.getVertexPosition(u,Us);const c=Tg(n,e,t,i,Ls,Is,Us,gu);if(c){const f=new X;hn.getBarycoord(gu,Ls,Is,Us,f),r&&(c.uv=hn.getInterpolatedAttribute(r,o,l,u,f,new ot)),s&&(c.uv1=hn.getInterpolatedAttribute(s,o,l,u,f,new ot)),a&&(c.normal=hn.getInterpolatedAttribute(a,o,l,u,f,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new X,materialIndex:0};hn.getNormal(Ls,Is,Us,h.normal),c.face=h,c.barycoord=f}return c}class ps extends xn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kn(u,3)),this.setAttribute("normal",new Kn(c,3)),this.setAttribute("uv",new Kn(f,2));function x(S,g,d,T,A,y,w,R,P,O,_){const E=y/P,L=w/O,U=y/2,z=w/2,J=R/2,Q=P+1,Y=O+1;let B=0,W=0;const ce=new X;for(let ue=0;ue<Y;ue++){const ee=ue*L-z;for(let se=0;se<Q;se++){const de=se*E-U;ce[S]=de*T,ce[g]=ee*A,ce[d]=J,u.push(ce.x,ce.y,ce.z),ce[S]=0,ce[g]=0,ce[d]=R>0?1:-1,c.push(ce.x,ce.y,ce.z),f.push(se/P),f.push(1-ue/O),B+=1}}for(let ue=0;ue<O;ue++)for(let ee=0;ee<P;ee++){const se=h+ee+Q*ue,de=h+ee+Q*(ue+1),Oe=h+(ee+1)+Q*(ue+1),Ce=h+(ee+1)+Q*ue;l.push(se,de,Ce),l.push(de,Oe,Ce),W+=6}o.addGroup(p,W,_),p+=W,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ag(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const wg={clone:yr,merge:Nt};var Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ph extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new X,_u=new ot,xu=new ot;class sn extends Ph{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,_u,xu),t.subVectors(xu,_u)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Pg extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new sn(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new sn(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new sn(rr,sr,e,t);o.layers=this.layers,this.add(o);const l=new sn(rr,sr,e,t);l.layers=this.layers,this.add(l);const u=new sn(rr,sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dh extends Lt{constructor(e=[],t=ki,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Yn});s.uniforms.tEquirect.value=t;const a=new ni(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Pt),new Pg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Bs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),d=this._getHandJoint(u,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lg extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ig extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Tt,c=Tt,f,h){super(null,a,o,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=new X,Ug=new X,Ng=new qe;class Ni{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=po.subVectors(i,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ng.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ea,Fg=new ot(.5,.5),zs=new X;class Ih{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],x=s[8],S=s[9],g=s[10],d=s[11],T=s[12],A=s[13],y=s[14],w=s[15];if(r[0].setComponents(u-a,p-c,d-x,w-T).normalize(),r[1].setComponents(u+a,p+c,d+x,w+T).normalize(),r[2].setComponents(u+o,p+f,d+S,w+A).normalize(),r[3].setComponents(u-o,p-f,d-S,w-A).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(u-l,p-h,d-g,w-y).normalize();else if(r[4].setComponents(u-l,p-h,d-g,w-y).normalize(),t===An)r[5].setComponents(u+l,p+h,d+g,w+y).normalize();else if(t===ca)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Fg.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zs.x=r.normal.x>0?e.max.x:e.min.x,zs.y=r.normal.y>0?e.max.y:e.min.y,zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new xt,wl=new yh,Vs=new Ea,Hs=new X;class Og extends Wt{constructor(e=new xn,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;vu.copy(r).invert(),wl.copy(e.ray).applyMatrix4(vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,S=p;x<S;x++){const g=u.getX(x);Hs.fromBufferAttribute(f,g),Su(Hs,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,S=p;x<S;x++)Hs.fromBufferAttribute(f,x),Su(Hs,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Su(n,e,t,i,r,s,a){const o=wl.distanceSqToPoint(n);if(o<t){const l=new X;wl.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class os extends Lt{constructor(e,t,i=Dn,r,s,a,o=Tt,l=Tt,u,c=ei,f=1){if(c!==ei&&c!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bg extends os{constructor(e,t=Dn,i=ki,r,s,a=Tt,o=Tt,l,u=ei){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=t/l,p=[],x=[],S=[],g=[];for(let d=0;d<c;d++){const T=d*h-a;for(let A=0;A<u;A++){const y=A*f-s;x.push(y,-T,0),S.push(0,0,1),g.push(A/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const A=T+u*d,y=T+u*(d+1),w=T+1+u*(d+1),R=T+1+u*d;p.push(A,y,R),p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new Kn(x,3)),this.setAttribute("normal",new Kn(S,3)),this.setAttribute("uv",new Kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}class zg extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vg extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gg{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kg=new Gg;class oc{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}oc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar=new WeakMap;class Wg extends oc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=ar.get(a);f===void 0&&(f=[],ar.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=ss("img");function l(){c(),t&&t(this);const f=ar.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}ar.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),mo.remove(`image:${e}`);const h=ar.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(f)}ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mo.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Xg extends oc{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,a=new Wg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Fh extends Ph{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mu(n,e,t,i){const r=Yg(i);switch(t){case xh:return n*e;case Sh:return n*e/r.components*r.byteLength;case ec:return n*e/r.components*r.byteLength;case Mr:return n*e*2/r.components*r.byteLength;case tc:return n*e*2/r.components*r.byteLength;case vh:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case nc:return n*e*4/r.components*r.byteLength;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Zo:return Math.max(n,16)*Math.max(e,8)/4;case $o:case jo:return Math.max(n,8)*Math.max(e,8)/2;case Jo:case Qo:case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vl:case Sl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case El:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yg(n){switch(n){case an:case ph:return{byteLength:1,components:1};case is:case mh:case Qn:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Dn:case Zl:case Tn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);function Oh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $g(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],S=f[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const S=f[p];n.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,r_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,H_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,nx=`#define DISTANCE
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
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,hx=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,px=`#define NORMAL
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
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
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
}`,_x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,xx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Sx=`#define TOON
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
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ex=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Ax=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Kg,alphahash_pars_fragment:jg,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:Qg,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:r_,begin_vertex:s_,beginnormal_vertex:a_,bsdfs:o_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:x_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:S_,displacementmap_pars_vertex:M_,displacementmap_vertex:E_,emissivemap_fragment:y_,emissivemap_pars_fragment:b_,colorspace_fragment:T_,colorspace_pars_fragment:A_,envmap_fragment:w_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:H_,envmap_vertex:D_,fog_vertex:L_,fog_pars_vertex:I_,fog_fragment:U_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:V_,lights_toon_fragment:G_,lights_toon_pars_fragment:k_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:$_,lights_fragment_maps:K_,lights_fragment_end:j_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:r0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:h0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:M0,opaque_fragment:E0,packing:y0,premultiplied_alpha_fragment:b0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:w0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:I0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:k0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:$0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:Q0,depth_vert:ex,depth_frag:tx,distance_vert:nx,distance_frag:ix,equirect_vert:rx,equirect_frag:sx,linedashed_vert:ax,linedashed_frag:ox,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:ux,meshlambert_frag:fx,meshmatcap_vert:hx,meshmatcap_frag:dx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:_x,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:Sx,meshtoon_frag:Mx,points_vert:Ex,points_frag:yx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:wx},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},bn={basic:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Nt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Nt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Nt([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Nt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Nt([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Nt([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Nt([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Nt([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:Nt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Gs={r:0,b:0,g:0},Li=new ti,Cx=new xt;function Rx(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function x(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function S(A){let y=!1;const w=x(A);w===null?d(o,l):w&&w.isColor&&(d(w,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,y){const w=x(y);w&&(w.isCubeTexture||w.mapping===Ma)?(c===void 0&&(c=new ni(new ps(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:yr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Li)),c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==st,(f!==w||h!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new ni(new ya(2,2),new Ln({name:"BackgroundMaterial",uniforms:yr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,y){A.getRGB(Gs,Rh(n)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,y,a)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:S,addToRenderList:g,dispose:T}}function Px(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(E,L,U,z,J){let Q=!1;const Y=f(z,U,L);s!==Y&&(s=Y,u(s.object)),Q=p(E,z,U,J),Q&&x(E,z,U,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(E,L,U,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function c(E){return n.deleteVertexArray(E)}function f(E,L,U){const z=U.wireframe===!0;let J=i[E.id];J===void 0&&(J={},i[E.id]=J);let Q=J[L.id];Q===void 0&&(Q={},J[L.id]=Q);let Y=Q[z];return Y===void 0&&(Y=h(l()),Q[z]=Y),Y}function h(E){const L=[],U=[],z=[];for(let J=0;J<t;J++)L[J]=0,U[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,L,U,z){const J=s.attributes,Q=L.attributes;let Y=0;const B=U.getAttributes();for(const W in B)if(B[W].location>=0){const ue=J[W];let ee=Q[W];if(ee===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ue===void 0||ue.attribute!==ee||ee&&ue.data!==ee.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function x(E,L,U,z){const J={},Q=L.attributes;let Y=0;const B=U.getAttributes();for(const W in B)if(B[W].location>=0){let ue=Q[W];ue===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const ee={};ee.attribute=ue,ue&&ue.data&&(ee.data=ue.data),J[W]=ee,Y++}s.attributes=J,s.attributesNum=Y,s.index=z}function S(){const E=s.newAttributes;for(let L=0,U=E.length;L<U;L++)E[L]=0}function g(E){d(E,0)}function d(E,L){const U=s.newAttributes,z=s.enabledAttributes,J=s.attributeDivisors;U[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),J[E]!==L&&(n.vertexAttribDivisor(E,L),J[E]=L)}function T(){const E=s.newAttributes,L=s.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==E[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function A(E,L,U,z,J,Q,Y){Y===!0?n.vertexAttribIPointer(E,L,U,J,Q):n.vertexAttribPointer(E,L,U,z,J,Q)}function y(E,L,U,z){S();const J=z.attributes,Q=U.getAttributes(),Y=L.defaultAttributeValues;for(const B in Q){const W=Q[B];if(W.location>=0){let ce=J[B];if(ce===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const ue=ce.normalized,ee=ce.itemSize,se=e.get(ce);if(se===void 0)continue;const de=se.buffer,Oe=se.type,Ce=se.bytesPerElement,j=Oe===n.INT||Oe===n.UNSIGNED_INT||ce.gpuType===Zl;if(ce.isInterleavedBufferAttribute){const ie=ce.data,_e=ie.stride,Ie=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)d(W.location+Re,ie.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<W.locationSize;Re++)g(W.location+Re);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Re=0;Re<W.locationSize;Re++)A(W.location+Re,ee/W.locationSize,Oe,ue,_e*Ce,(Ie+ee/W.locationSize*Re)*Ce,j)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)d(W.location+ie,ce.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<W.locationSize;ie++)g(W.location+ie);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ie=0;ie<W.locationSize;ie++)A(W.location+ie,ee/W.locationSize,Oe,ue,ee*Ce,ee/W.locationSize*ie*Ce,j)}}else if(Y!==void 0){const ue=Y[B];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(W.location,ue);break;case 3:n.vertexAttrib3fv(W.location,ue);break;case 4:n.vertexAttrib4fv(W.location,ue);break;default:n.vertexAttrib1fv(W.location,ue)}}}}T()}function w(){O();for(const E in i){const L=i[E];for(const U in L){const z=L[U];for(const J in z)c(z[J].object),delete z[J];delete L[U]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const U in L){const z=L[U];for(const J in z)c(z[J].object),delete z[J];delete L[U]}delete i[E.id]}function P(E){for(const L in i){const U=i[L];if(U[E.id]===void 0)continue;const z=U[E.id];for(const J in z)c(z[J].object),delete z[J];delete U[E.id]}}function O(){_(),a=!0,s!==r&&(s=r,u(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:T}}function Dx(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let x=0;x<f;x++)p+=c[x];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)a(u[x],c[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=c[S]*h[S];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==dn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const O=P===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==an&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Tn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(ke("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:R}}function Ix(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ni,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?c(null):u();else{const T=s?0:i,A=T*4;let y=d.clippingState||null;l.value=y,y=c(x,h,A,p);for(let w=0;w!==A;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,x){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const d=p+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,y=p;A!==S;++A,y+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Ux(n){let e=new WeakMap;function t(a,o){return o===Wo?a.mapping=ki:o===Xo&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wo||o===Xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Lh(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const mi=4,Eu=[.125,.215,.35,.446,.526,.582],Bi=20,Nx=256,Nr=new Fh,yu=new nt;let go=null,_o=0,xo=0,vo=!1;const Fx=new X;class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Fx}=s;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=vo,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Qn,format:dn,colorSpace:Er,depthBuffer:!1},r=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ox(s)),this._blurMaterial=zx(s,e,t),this._ggxMaterial=Bx(s,e,t)}return r}_compileMaterial(e){const t=new ni(new xn,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,r,s){const l=new sn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(yu),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new ps,new Ah({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,d=!0):(g.color.copy(yu),d=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[A],s.y,s.z)):y===1?(l.up.set(0,0,u[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[A],s.z)):(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[A]));const w=this._cubeSize;or(r,y*w,A>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ki||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),h=0+u*1.25,p=f*h,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-mi?i-x+mi:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,or(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(o,Nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,or(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(o,Nr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),S=s/x,g=isFinite(s)?1+Math.floor(c*S):Bi;g>Bi&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const d=[];let T=0;for(let P=0;P<Bi;++P){const O=P/S,_=Math.exp(-O*O/2);d.push(_),P===0?T+=_:P<g&&(T+=2*_)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=x,h.mipInt.value=A-i;const y=this._sizeLods[r],w=3*y*(r>A-mi?r-A+mi:0),R=4*(this._cubeSize-y);or(t,w,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Nr)}}function Ox(n){const e=[],t=[],i=[];let r=n;const s=n-mi+1+Eu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-mi?l=Eu[a-n+mi-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,x=6,S=3,g=2,d=1,T=new Float32Array(S*x*p),A=new Float32Array(g*x*p),y=new Float32Array(d*x*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,O=R>2?0:-1,_=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];T.set(_,S*x*R),A.set(h,g*x*R);const E=[R,R,R,R,R,R];y.set(E,d*x*R)}const w=new xn;w.setAttribute("position",new ln(T,S)),w.setAttribute("uv",new ln(A,g)),w.setAttribute("faceIndex",new ln(y,d)),i.push(new ni(w,null)),r>mi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tu(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bx(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function zx(n,e,t){const i=new Float32Array(Bi),r=new X(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Au(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function wu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function Vx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Wo||l===Xo,c=l===ki||l===Sr;if(u||c){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new bu(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new bu(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&as("WebGLRenderer: "+i+" extension not supported."),r}}}function Gx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,x=f.attributes.position;let S=0;if(p!==null){const T=p.array;S=p.version;for(let A=0,y=T.length;A<y;A+=3){const w=T[A+0],R=T[A+1],P=T[A+2];h.push(w,R,R,P,P,w)}}else if(x!==void 0){const T=x.array;S=x.version;for(let A=0,y=T.length/3-1;A<y;A+=3){const w=A+0,R=A+1,P=A+2;h.push(w,R,R,P,P,w)}}else return;const g=new(Mh(h)?Ch:wh)(h,1);g.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function kx(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function u(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,h*a,x),t.update(p,i,x))}function c(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let g=0;for(let d=0;d<x;d++)g+=p[d];t.update(g,i,1)}function f(h,p,x,S){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/a,p[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,x);let d=0;for(let T=0;T<x;T++)d+=p[T]*S[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Wx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xx(n,e,t){const i=new WeakMap,r=new _t;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*R*4*f),O=new Eh(P,w,R,f);O.type=Tn,O.needsUpdate=!0;const _=y*4;for(let L=0;L<f;L++){const U=d[L],z=T[L],J=A[L],Q=w*R*4*L;for(let Y=0;Y<U.count;Y++){const B=Y*_;x===!0&&(r.fromBufferAttribute(U,Y),P[Q+B+0]=r.x,P[Q+B+1]=r.y,P[Q+B+2]=r.z,P[Q+B+3]=0),S===!0&&(r.fromBufferAttribute(z,Y),P[Q+B+4]=r.x,P[Q+B+5]=r.y,P[Q+B+6]=r.z,P[Q+B+7]=0),g===!0&&(r.fromBufferAttribute(J,Y),P[Q+B+8]=r.x,P[Q+B+9]=r.y,P[Q+B+10]=r.z,P[Q+B+11]=J.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new ot(w,R)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function qx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Yx={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function $x(n,e,t,i,r){const s=new Pn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Pn(e,t,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),o=new xn;o.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kn([0,2,0,0,2,0],2));const l=new zg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ni(o,l),c=new Fh(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,S=null,g=[],d=!1;this.setSize=function(T,A){s.setSize(T,A),a.setSize(T,A);for(let y=0;y<g.length;y++){const w=g[y];w.setSize&&w.setSize(T,A)}},this.setEffects=function(T){g=T,d=g.length>0&&g[0].isRenderPass===!0;const A=s.width,y=s.height;for(let w=0;w<g.length;w++){const R=g[w];R.setSize&&R.setSize(A,y)}},this.begin=function(T,A){if(p||T.toneMapping===Rn&&g.length===0)return!1;if(S=A,A!==null){const y=A.width,w=A.height;(s.width!==y||s.height!==w)&&this.setSize(y,w)}return d===!1&&T.setRenderTarget(s),x=T.toneMapping,T.toneMapping=Rn,!0},this.hasRenderPass=function(){return d},this.end=function(T,A){T.toneMapping=x,p=!0;let y=s,w=a;for(let R=0;R<g.length;R++){const P=g[R];if(P.enabled!==!1&&(P.render(T,w,y,A),P.needsSwap!==!1)){const O=y;y=w,w=O}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},Ze.getTransfer(f)===st&&(l.defines.SRGB_TRANSFER="");const R=Yx[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(S),T.render(u,c),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Bh=new Lt,Cl=new os(1,1),zh=new Eh,Vh=new pg,Hh=new Dh,Cu=[],Ru=[],Pu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cu[r];if(s===void 0&&(s=new Float32Array(r),Cu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),Et(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Du.set(i),n.uniformMatrix3fv(this.addr,!1,Du),Et(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Et(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cl.compareFunction=t.isReversedDepthBuffer()?rc:ic,s=Cl):s=Bh,t.setTexture2D(e||s,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vh,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zh,r)}function pv(n){switch(n){case 5126:return Kx;case 35664:return jx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function _v(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function xv(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function vv(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sv(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mv(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ev(n,e){n.uniform1iv(this.addr,e)}function yv(n,e){n.uniform2iv(this.addr,e)}function bv(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function Av(n,e){n.uniform1uiv(this.addr,e)}function wv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Rv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cl:a=Bh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dv(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vh,s[a])}function Lv(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hh,s[a])}function Iv(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zh,s[a])}function Uv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return xv;case 35674:return vv;case 35675:return Sv;case 35676:return Mv;case 5124:case 35670:return Ev;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}}class Ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Iu(n,e){n.seq.push(e),n.map[e.id]=e}function Bv(n,e,t){const i=n.name,r=i.length;for(So.lastIndex=0;;){const s=So.exec(i),a=So.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Iu(t,u===void 0?new Nv(o,n,e):new Fv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ov(o),Iu(t,f)),t=f}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Bv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zv=37297;let Vv=0;function Hv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Nu=new qe;function Gv(n){Ze._getMatrix(Nu,Ze.workingColorSpace,n);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hv(n.getShaderSource(e),o)}else return s}function kv(n,e){const t=Gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Wv={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[fh]:"AgX",[hh]:"Neutral",[uh]:"Custom"};function Xv(n,e){const t=Wv[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new X;function qv(){Ze.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function $v(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zr(n){return n!==""}function Ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(jv,Jv)}const Zv=new Map;function Jv(n,e){let t=Ye[e];if(t===void 0){const i=Zv.get(e);if(i!==void 0)t=Ye[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(Qv,eS)}function eS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tS={[Ys]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function nS(n){return tS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iS={[ki]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function rS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":iS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const sS={[Sr]:"ENVMAP_MODE_REFRACTION"};function aS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oS={[sh]:"ENVMAP_BLENDING_MULTIPLY",[$m]:"ENVMAP_BLENDING_MIX",[Km]:"ENVMAP_BLENDING_ADD"};function lS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oS[n.combine]||"ENVMAP_BLENDING_NONE"}function cS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nS(t),u=rS(t),c=aS(t),f=lS(t),h=cS(t),p=Yv(t),x=$v(s),S=r.createProgram();let g,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(g=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Rl(a),a=Ou(a,t),a=Bu(a,t),o=Rl(o),o=Ou(o,t),o=Bu(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+g+a,y=T+d+o,w=Uu(r,r.VERTEX_SHADER,A),R=Uu(r,r.FRAGMENT_SHADER,y);r.attachShader(S,w),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(S)||"",z=r.getShaderInfoLog(w)||"",J=r.getShaderInfoLog(R)||"",Q=U.trim(),Y=z.trim(),B=J.trim();let W=!0,ce=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,w,R);else{const ue=Fu(r,w,"vertex"),ee=Fu(r,R,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+ue+`
`+ee)}else Q!==""?ke("WebGLProgram: Program Info Log:",Q):(Y===""||B==="")&&(ce=!1);ce&&(L.diagnostics={runnable:W,programLog:Q,vertexShader:{log:Y,prefix:g},fragmentShader:{log:B,prefix:d}})}r.deleteShader(w),r.deleteShader(R),O=new Js(r,S),_=Kv(r,S)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let _;this.getAttributes=function(){return _===void 0&&P(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,zv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=R,this}let fS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dS(e),t.set(e,i)),i}}class dS{constructor(e){this.id=fS++,this.code=e,this.usedTimes=0}}function pS(n,e,t,i,r,s,a){const o=new bh,l=new hS,u=new Set,c=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return u.add(_),_===0?"uv":`uv${_}`}function g(_,E,L,U,z){const J=U.fog,Q=z.geometry,Y=_.isMeshStandardMaterial?U.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),W=B&&B.mapping===Ma?B.image.height:null,ce=x[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const ue=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ee=ue!==void 0?ue.length:0;let se=0;Q.morphAttributes.position!==void 0&&(se=1),Q.morphAttributes.normal!==void 0&&(se=2),Q.morphAttributes.color!==void 0&&(se=3);let de,Oe,Ce,j;if(ce){const it=bn[ce];de=it.vertexShader,Oe=it.fragmentShader}else de=_.vertexShader,Oe=_.fragmentShader,l.update(_),Ce=l.getVertexShaderID(_),j=l.getFragmentShaderID(_);const ie=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,je=!!_.map,C=!!_.matcap,I=!!B,G=!!_.aoMap,ne=!!_.lightMap,K=!!_.bumpMap,re=!!_.normalMap,b=!!_.displacementMap,fe=!!_.emissiveMap,ae=!!_.metalnessMap,te=!!_.roughnessMap,oe=_.anisotropy>0,v=_.clearcoat>0,m=_.dispersion>0,D=_.iridescence>0,k=_.sheen>0,Z=_.transmission>0,H=oe&&!!_.anisotropyMap,be=v&&!!_.clearcoatMap,pe=v&&!!_.clearcoatNormalMap,we=v&&!!_.clearcoatRoughnessMap,Ne=D&&!!_.iridescenceMap,he=D&&!!_.iridescenceThicknessMap,ve=k&&!!_.sheenColorMap,Me=k&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,xe=!!_.specularColorMap,We=!!_.specularIntensityMap,N=Z&&!!_.transmissionMap,Ae=Z&&!!_.thicknessMap,ge=!!_.gradientMap,De=!!_.alphaMap,me=_.alphaTest>0,le=!!_.alphaHash,Se=!!_.extensions;let Ge=Rn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ut={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:de,fragmentShader:Oe,defines:_.defines,customVertexShaderID:Ce,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Er,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:C,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:ne,bumpMap:K,normalMap:re,displacementMap:b,emissiveMap:fe,normalMapObjectSpace:re&&_.normalMapType===Qm,normalMapTangentSpace:re&&_.normalMapType===Jm,metalnessMap:ae,roughnessMap:te,anisotropy:oe,anisotropyMap:H,clearcoat:v,clearcoatMap:be,clearcoatNormalMap:pe,clearcoatRoughnessMap:we,dispersion:m,iridescence:D,iridescenceMap:Ne,iridescenceThicknessMap:he,sheen:k,sheenColorMap:ve,sheenRoughnessMap:Me,specularMap:Pe,specularColorMap:xe,specularIntensityMap:We,transmission:Z,transmissionMap:N,thicknessMap:Ae,gradientMap:ge,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:De,alphaTest:me,alphaHash:le,combine:_.combine,mapUv:je&&S(_.map.channel),aoMapUv:G&&S(_.aoMap.channel),lightMapUv:ne&&S(_.lightMap.channel),bumpMapUv:K&&S(_.bumpMap.channel),normalMapUv:re&&S(_.normalMap.channel),displacementMapUv:b&&S(_.displacementMap.channel),emissiveMapUv:fe&&S(_.emissiveMap.channel),metalnessMapUv:ae&&S(_.metalnessMap.channel),roughnessMapUv:te&&S(_.roughnessMap.channel),anisotropyMapUv:H&&S(_.anisotropyMap.channel),clearcoatMapUv:be&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&S(_.sheenRoughnessMap.channel),specularMapUv:Pe&&S(_.specularMap.channel),specularColorMapUv:xe&&S(_.specularColorMap.channel),specularIntensityMapUv:We&&S(_.specularIntensityMap.channel),transmissionMapUv:N&&S(_.transmissionMap.channel),thicknessMapUv:Ae&&S(_.thicknessMap.channel),alphaMapUv:De&&S(_.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(re||oe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(je||De),fog:!!J,useFog:_.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:fe&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function d(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(T(E,_),A(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function T(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function A(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){const E=x[_.type];let L;if(E){const U=bn[E];L=wg.clone(U.uniforms)}else L=_.uniforms;return L}function w(_,E){let L=f.get(E);return L!==void 0?++L.usedTimes:(L=new uS(n,E,_,s),c.push(L),f.set(E,L)),L}function R(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function P(_){l.remove(_)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:O}}function mS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function gS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,x,S,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=S,d.group=g),e++,d}function o(f,h,p,x,S,g){const d=a(f,h,p,x,S,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,S,g){const d=a(f,h,p,x,S,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||gS),i.length>1&&i.sort(h||Hu),r.length>1&&r.sort(h||Hu)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function _S(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gu,n.set(i,[a])):r>=s.length?(a=new Gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new nt};break;case"SpotLight":t={position:new X,direction:new X,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function vS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SS=0;function MS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ES(n){const e=new xS,t=vS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new xt,a=new xt;function o(u){let c=0,f=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,x=0,S=0,g=0,d=0,T=0,A=0,y=0,w=0,R=0,P=0;u.sort(MS);for(let _=0,E=u.length;_<E;_++){const L=u[_],U=L.color,z=L.intensity,J=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Mr?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=U.r*z,f+=U.g*z,h+=U.b*z;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],z);P++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,W=t.get(L);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=L.shadow.matrix,T++}i.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(z),Y.distance=J,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[S]=Y;const B=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,B.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[S]=B.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=Q,y++}S++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(U).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const B=L.shadow,W=t.get(L);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,i.pointShadow[x]=W,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=L.shadow.matrix,A++}i.point[x]=Y,x++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(z),Y.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=Y,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==p||O.pointLength!==x||O.spotLength!==S||O.rectAreaLength!==g||O.hemiLength!==d||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==y||O.numSpotMaps!==w||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,O.directionalLength=p,O.pointLength=x,O.spotLength=S,O.rectAreaLength=g,O.hemiLength=d,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=y,O.numSpotMaps=w,O.numLightProbes=P,i.version=SS++)}function l(u,c){let f=0,h=0,p=0,x=0,S=0;const g=c.matrixWorldInverse;for(let d=0,T=u.length;d<T;d++){const A=u[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(A.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function ku(n){const e=new ES(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ku(n),e.set(r,[o])):s>=a.length?(o=new ku(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],wS=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Wu=new xt,Fr=new X,Mo=new X;function CS(n,e,t){let i=new Ih;const r=new ot,s=new ot,a=new _t,o=new Vg,l=new Hg,u={},c=t.maxTextureSize,f={[Si]:kt,[kt]:Si,[Xn]:Xn},h=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:bS,fragmentShader:TS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new xn;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ni(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let d=this.type;this.render=function(R,P,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===Rm&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ys);const _=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Yn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=d!==this.type;z&&P.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=R.length;J<Q;J++){const Y=R[J],B=Y.shadow;if(B===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const W=B.getFrameExtents();if(r.multiply(W),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Br){if(Y.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Pn(r.x,r.y,{format:Mr,type:Qn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new os(r.x,r.y,Tn),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt}else{Y.isPointLight?(B.map=new Lh(r.x),B.map.depthTexture=new Bg(r.x,Dn)):(B.map=new Pn(r.x,r.y),B.map.depthTexture=new os(r.x,r.y,Dn)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=ei;const ue=n.state.buffers.depth.getReversed();this.type===Ys?(B.map.depthTexture.compareFunction=ue?rc:ic,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt)}B.camera.updateProjectionMatrix()}const ce=B.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ce;ue++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(B.map),n.clear());const ee=B.getViewport(ue);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),U.viewport(a)}if(Y.isPointLight){const ee=B.camera,se=B.matrix,de=Y.distance||ee.far;de!==ee.far&&(ee.far=de,ee.updateProjectionMatrix()),Fr.setFromMatrixPosition(Y.matrixWorld),ee.position.copy(Fr),Mo.copy(ee.position),Mo.add(AS[ue]),ee.up.copy(wS[ue]),ee.lookAt(Mo),ee.updateMatrixWorld(),se.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Wu.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Wu,ee.coordinateSystem,ee.reversedDepth)}else B.updateMatrices(Y);i=B.getFrustum(),y(P,O,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Br&&T(B,O),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(_,E,L)};function T(R,P){const O=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pn(r.x,r.y,{format:Mr,type:Qn})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,O,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,O,p,S,null)}function A(R,P,O,_){let E=null;const L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)E=L;else if(E=O.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=E.uuid,z=P.uuid;let J=u[U];J===void 0&&(J={},u[U]=J);let Q=J[z];Q===void 0&&(Q=E.clone(),J[z]=Q,P.addEventListener("dispose",w)),E=Q}if(E.visible=P.visible,E.wireframe=P.wireframe,_===Br?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=O}return E}function y(R,P,O,_,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Br)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const z=e.update(R),J=R.material;if(Array.isArray(J)){const Q=z.groups;for(let Y=0,B=Q.length;Y<B;Y++){const W=Q[Y],ce=J[W.materialIndex];if(ce&&ce.visible){const ue=A(R,ce,_,E);R.onBeforeShadow(n,R,P,O,z,ue,W),n.renderBufferDirect(O,null,z,ue,R,W),R.onAfterShadow(n,R,P,O,z,ue,W)}}}else if(J.visible){const Q=A(R,J,_,E);R.onBeforeShadow(n,R,P,O,z,Q,null),n.renderBufferDirect(O,null,z,Q,R,null),R.onAfterShadow(n,R,P,O,z,Q,null)}}const U=R.children;for(let z=0,J=U.length;z<J;z++)y(U[z],P,O,_,E)}function w(R){R.target.removeEventListener("dispose",w);for(const O in u){const _=u[O],E=R.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}const RS={[Oo]:Bo,[zo]:Go,[Vo]:ko,[vr]:Ho,[Bo]:Oo,[Go]:zo,[ko]:Vo,[Ho]:vr};function PS(n,e){function t(){let N=!1;const Ae=new _t;let ge=null;const De=new _t(0,0,0,0);return{setMask:function(me){ge!==me&&!N&&(n.colorMask(me,me,me,me),ge=me)},setLocked:function(me){N=me},setClear:function(me,le,Se,Ge,ut){ut===!0&&(me*=Ge,le*=Ge,Se*=Ge),Ae.set(me,le,Se,Ge),De.equals(Ae)===!1&&(n.clearColor(me,le,Se,Ge),De.copy(Ae))},reset:function(){N=!1,ge=null,De.set(-1,0,0,0)}}}function i(){let N=!1,Ae=!1,ge=null,De=null,me=null;return{setReversed:function(le){if(Ae!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const Ge=me;me=null,this.setClear(Ge)}},getReversed:function(){return Ae},setTest:function(le){le?ie(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(le){ge!==le&&!N&&(n.depthMask(le),ge=le)},setFunc:function(le){if(Ae&&(le=RS[le]),De!==le){switch(le){case Oo:n.depthFunc(n.NEVER);break;case Bo:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Vo:n.depthFunc(n.EQUAL);break;case Ho:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=le}},setLocked:function(le){N=le},setClear:function(le){me!==le&&(Ae&&(le=1-le),n.clearDepth(le),me=le)},reset:function(){N=!1,ge=null,De=null,me=null,Ae=!1}}}function r(){let N=!1,Ae=null,ge=null,De=null,me=null,le=null,Se=null,Ge=null,ut=null;return{setTest:function(it){N||(it?ie(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(it){Ae!==it&&!N&&(n.stencilMask(it),Ae=it)},setFunc:function(it,vn,In){(ge!==it||De!==vn||me!==In)&&(n.stencilFunc(it,vn,In),ge=it,De=vn,me=In)},setOp:function(it,vn,In){(le!==it||Se!==vn||Ge!==In)&&(n.stencilOp(it,vn,In),le=it,Se=vn,Ge=In)},setLocked:function(it){N=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){N=!1,Ae=null,ge=null,De=null,me=null,le=null,Se=null,Ge=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],x=null,S=!1,g=null,d=null,T=null,A=null,y=null,w=null,R=null,P=new nt(0,0,0),O=0,_=!1,E=null,L=null,U=null,z=null,J=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=B>=2);let ce=null,ue={};const ee=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),de=new _t().fromArray(ee),Oe=new _t().fromArray(se);function Ce(N,Ae,ge,De){const me=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<ge;Se++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(Ae+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return le}const j={};j[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(vr),K(!1),re(Kc),ie(n.CULL_FACE),G(Yn);function ie(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function _e(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ie(N,Ae){return f[N]!==Ae?(n.bindFramebuffer(N,Ae),f[N]=Ae,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Re(N,Ae){let ge=p,De=!1;if(N){ge=h.get(Ae),ge===void 0&&(ge=[],h.set(Ae,ge));const me=N.textures;if(ge.length!==me.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Se=me.length;le<Se;le++)ge[le]=n.COLOR_ATTACHMENT0+le;ge.length=me.length,De=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,De=!0);De&&n.drawBuffers(ge)}function je(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const C={[Oi]:n.FUNC_ADD,[Dm]:n.FUNC_SUBTRACT,[Lm]:n.FUNC_REVERSE_SUBTRACT};C[Im]=n.MIN,C[Um]=n.MAX;const I={[Nm]:n.ZERO,[Fm]:n.ONE,[Om]:n.SRC_COLOR,[No]:n.SRC_ALPHA,[km]:n.SRC_ALPHA_SATURATE,[Hm]:n.DST_COLOR,[zm]:n.DST_ALPHA,[Bm]:n.ONE_MINUS_SRC_COLOR,[Fo]:n.ONE_MINUS_SRC_ALPHA,[Gm]:n.ONE_MINUS_DST_COLOR,[Vm]:n.ONE_MINUS_DST_ALPHA,[Wm]:n.CONSTANT_COLOR,[Xm]:n.ONE_MINUS_CONSTANT_COLOR,[qm]:n.CONSTANT_ALPHA,[Ym]:n.ONE_MINUS_CONSTANT_ALPHA};function G(N,Ae,ge,De,me,le,Se,Ge,ut,it){if(N===Yn){S===!0&&(_e(n.BLEND),S=!1);return}if(S===!1&&(ie(n.BLEND),S=!0),N!==Pm){if(N!==g||it!==_){if((d!==Oi||y!==Oi)&&(n.blendEquation(n.FUNC_ADD),d=Oi,y=Oi),it)switch(N){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}T=null,A=null,w=null,R=null,P.set(0,0,0),O=0,g=N,_=it}return}me=me||Ae,le=le||ge,Se=Se||De,(Ae!==d||me!==y)&&(n.blendEquationSeparate(C[Ae],C[me]),d=Ae,y=me),(ge!==T||De!==A||le!==w||Se!==R)&&(n.blendFuncSeparate(I[ge],I[De],I[le],I[Se]),T=ge,A=De,w=le,R=Se),(Ge.equals(P)===!1||ut!==O)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ut),P.copy(Ge),O=ut),g=N,_=!1}function ne(N,Ae){N.side===Xn?_e(n.CULL_FACE):ie(n.CULL_FACE);let ge=N.side===kt;Ae&&(ge=!ge),K(ge),N.blending===gr&&N.transparent===!1?G(Yn):G(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const De=N.stencilWrite;o.setTest(De),De&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){E!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),E=N)}function re(N){N!==wm?(ie(n.CULL_FACE),N!==L&&(N===Kc?n.cullFace(n.BACK):N===Cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=N}function b(N){N!==U&&(Y&&n.lineWidth(N),U=N)}function fe(N,Ae,ge){N?(ie(n.POLYGON_OFFSET_FILL),(z!==Ae||J!==ge)&&(n.polygonOffset(Ae,ge),z=Ae,J=ge)):_e(n.POLYGON_OFFSET_FILL)}function ae(N){N?ie(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function te(N){N===void 0&&(N=n.TEXTURE0+Q-1),ce!==N&&(n.activeTexture(N),ce=N)}function oe(N,Ae,ge){ge===void 0&&(ce===null?ge=n.TEXTURE0+Q-1:ge=ce);let De=ue[ge];De===void 0&&(De={type:void 0,texture:void 0},ue[ge]=De),(De.type!==N||De.texture!==Ae)&&(ce!==ge&&(n.activeTexture(ge),ce=ge),n.bindTexture(N,Ae||j[N]),De.type=N,De.texture=Ae)}function v(){const N=ue[ce];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Z(){try{n.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function pe(){try{n.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function we(){try{n.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Ne(){try{n.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function he(){try{n.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ve(N){de.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Me(N){Oe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Oe.copy(N))}function Pe(N,Ae){let ge=u.get(Ae);ge===void 0&&(ge=new WeakMap,u.set(Ae,ge));let De=ge.get(N);De===void 0&&(De=n.getUniformBlockIndex(Ae,N.name),ge.set(N,De))}function xe(N,Ae){const De=u.get(Ae).get(N);l.get(Ae)!==De&&(n.uniformBlockBinding(Ae,De,N.__bindingPointIndex),l.set(Ae,De))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ce=null,ue={},f={},h=new WeakMap,p=[],x=null,S=!1,g=null,d=null,T=null,A=null,y=null,w=null,R=null,P=new nt(0,0,0),O=0,_=!1,E=null,L=null,U=null,z=null,J=null,de.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:_e,bindFramebuffer:Ie,drawBuffers:Re,useProgram:je,setBlending:G,setMaterial:ne,setFlipSided:K,setCullFace:re,setLineWidth:b,setPolygonOffset:fe,setScissorTest:ae,activeTexture:te,bindTexture:oe,unbindTexture:v,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:Ne,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:we,texSubImage2D:k,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:be,scissor:ve,viewport:Me,reset:We}}function DS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,m){return p?new OffscreenCanvas(v,m):ss("canvas")}function S(v,m,D){let k=1;const Z=oe(v);if((Z.width>D||Z.height>D)&&(k=D/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const H=Math.floor(k*Z.width),be=Math.floor(k*Z.height);f===void 0&&(f=x(H,be));const pe=m?x(H,be):f;return pe.width=H,pe.height=be,pe.getContext("2d").drawImage(v,0,0,H,be),ke("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+be+")."),pe}else return"data"in v&&ke("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),v;return v}function g(v){return v.generateMipmaps}function d(v){n.generateMipmap(v)}function T(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(v,m,D,k,Z=!1){if(v!==null){if(n[v]!==void 0)return n[v];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let H=m;if(m===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),m===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),m===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),m===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),m===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),m===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),m===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),m===n.RGBA){const be=Z?la:Ze.getTransfer(k);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=be===st?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(v,m){let D;return v?m===null||m===Dn||m===rs?D=n.DEPTH24_STENCIL8:m===Tn?D=n.DEPTH32F_STENCIL8:m===is&&(D=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Dn||m===rs?D=n.DEPTH_COMPONENT24:m===Tn?D=n.DEPTH_COMPONENT32F:m===is&&(D=n.DEPTH_COMPONENT16),D}function w(v,m){return g(v)===!0||v.isFramebufferTexture&&v.minFilter!==Tt&&v.minFilter!==Pt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function R(v){const m=v.target;m.removeEventListener("dispose",R),O(m),m.isVideoTexture&&c.delete(m)}function P(v){const m=v.target;m.removeEventListener("dispose",P),E(m)}function O(v){const m=i.get(v);if(m.__webglInit===void 0)return;const D=v.source,k=h.get(D);if(k){const Z=k[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&_(v),Object.keys(k).length===0&&h.delete(D)}i.remove(v)}function _(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const D=v.source,k=h.get(D);delete k[m.__cacheKey],a.memory.textures--}function E(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let Z=0;Z<m.__webglFramebuffer[k].length;Z++)n.deleteFramebuffer(m.__webglFramebuffer[k][Z]);else n.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)n.deleteFramebuffer(m.__webglFramebuffer[k]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=v.textures;for(let k=0,Z=D.length;k<Z;k++){const H=i.get(D[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(D[k])}i.remove(v)}let L=0;function U(){L=0}function z(){const v=L;return v>=r.maxTextures&&ke("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),L+=1,v}function J(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function Q(v,m){const D=i.get(v);if(v.isVideoTexture&&ae(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&D.__version!==v.version){const k=v.image;if(k===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,v,m);return}}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+m)}function Y(v,m){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){j(D,v,m);return}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+m)}function B(v,m){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){j(D,v,m);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+m)}function W(v,m){const D=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&D.__version!==v.version){ie(D,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+m)}const ce={[qo]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},ue={[Tt]:n.NEAREST,[jm]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},ee={[eg]:n.NEVER,[sg]:n.ALWAYS,[tg]:n.LESS,[ic]:n.LEQUAL,[ng]:n.EQUAL,[rc]:n.GEQUAL,[ig]:n.GREATER,[rg]:n.NOTEQUAL};function se(v,m){if(m.type===Tn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Pt||m.magFilter===ka||m.magFilter===Ms||m.magFilter===Vi||m.minFilter===Pt||m.minFilter===ka||m.minFilter===Ms||m.minFilter===Vi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ce[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ce[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ce[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ue[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ue[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,ee[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==Ms&&m.minFilter!==Vi||m.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function de(v,m){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",R));const k=m.source;let Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));const H=J(m);if(H!==v.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[H].usedTimes++;const be=Z[v.__cacheKey];be!==void 0&&(Z[v.__cacheKey].usedTimes--,be.usedTimes===0&&_(m)),v.__cacheKey=H,v.__webglTexture=Z[H].texture}return D}function Oe(v,m,D){return Math.floor(Math.floor(v/D)/m)}function Ce(v,m,D,k){const H=v.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,D,k,m.data);else{H.sort((he,ve)=>he.start-ve.start);let be=0;for(let he=1;he<H.length;he++){const ve=H[be],Me=H[he],Pe=ve.start+ve.count,xe=Oe(Me.start,m.width,4),We=Oe(ve.start,m.width,4);Me.start<=Pe+1&&xe===We&&Oe(Me.start+Me.count-1,m.width,4)===xe?ve.count=Math.max(ve.count,Me.start+Me.count-ve.start):(++be,H[be]=Me)}H.length=be+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let he=0,ve=H.length;he<ve;he++){const Me=H[he],Pe=Math.floor(Me.start/4),xe=Math.ceil(Me.count/4),We=Pe%m.width,N=Math.floor(Pe/m.width),Ae=xe,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,We,N,Ae,ge,D,k,m.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function j(v,m,D){let k=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=n.TEXTURE_3D);const Z=de(v,m),H=m.source;t.bindTexture(k,v.__webglTexture,n.TEXTURE0+D);const be=i.get(H);if(H.version!==be.__version||Z===!0){t.activeTexture(n.TEXTURE0+D);const pe=Ze.getPrimaries(Ze.workingColorSpace),we=m.colorSpace===pi?null:Ze.getPrimaries(m.colorSpace),Ne=m.colorSpace===pi||pe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let he=S(m.image,!1,r.maxTextureSize);he=te(m,he);const ve=s.convert(m.format,m.colorSpace),Me=s.convert(m.type);let Pe=A(m.internalFormat,ve,Me,m.colorSpace,m.isVideoTexture);se(k,m);let xe;const We=m.mipmaps,N=m.isVideoTexture!==!0,Ae=be.__version===void 0||Z===!0,ge=H.dataReady,De=w(m,he);if(m.isDepthTexture)Pe=y(m.format===Hi,m.type),Ae&&(N?t.texStorage2D(n.TEXTURE_2D,1,Pe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,ve,Me,null));else if(m.isDataTexture)if(We.length>0){N&&Ae&&t.texStorage2D(n.TEXTURE_2D,De,Pe,We[0].width,We[0].height);for(let me=0,le=We.length;me<le;me++)xe=We[me],N?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,xe.width,xe.height,ve,Me,xe.data):t.texImage2D(n.TEXTURE_2D,me,Pe,xe.width,xe.height,0,ve,Me,xe.data);m.generateMipmaps=!1}else N?(Ae&&t.texStorage2D(n.TEXTURE_2D,De,Pe,he.width,he.height),ge&&Ce(m,he,ve,Me)):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,ve,Me,he.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){N&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,We[0].width,We[0].height,he.depth);for(let me=0,le=We.length;me<le;me++)if(xe=We[me],m.format!==dn)if(ve!==null)if(N){if(ge)if(m.layerUpdates.size>0){const Se=Mu(xe.width,xe.height,m.format,m.type);for(const Ge of m.layerUpdates){const ut=xe.data.subarray(Ge*Se/xe.data.BYTES_PER_ELEMENT,(Ge+1)*Se/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Ge,xe.width,xe.height,1,ve,ut)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,he.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Pe,xe.width,xe.height,he.depth,0,xe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,he.depth,ve,Me,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Pe,xe.width,xe.height,he.depth,0,ve,Me,xe.data)}else{N&&Ae&&t.texStorage2D(n.TEXTURE_2D,De,Pe,We[0].width,We[0].height);for(let me=0,le=We.length;me<le;me++)xe=We[me],m.format!==dn?ve!==null?N?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Pe,xe.width,xe.height,0,xe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,xe.width,xe.height,ve,Me,xe.data):t.texImage2D(n.TEXTURE_2D,me,Pe,xe.width,xe.height,0,ve,Me,xe.data)}else if(m.isDataArrayTexture)if(N){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,he.width,he.height,he.depth),ge)if(m.layerUpdates.size>0){const me=Mu(he.width,he.height,m.format,m.type);for(const le of m.layerUpdates){const Se=he.data.subarray(le*me/he.data.BYTES_PER_ELEMENT,(le+1)*me/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,ve,Me,Se)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Me,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,ve,Me,he.data);else if(m.isData3DTexture)N?(Ae&&t.texStorage3D(n.TEXTURE_3D,De,Pe,he.width,he.height,he.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Me,he.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,ve,Me,he.data);else if(m.isFramebufferTexture){if(Ae)if(N)t.texStorage2D(n.TEXTURE_2D,De,Pe,he.width,he.height);else{let me=he.width,le=he.height;for(let Se=0;Se<De;Se++)t.texImage2D(n.TEXTURE_2D,Se,Pe,me,le,0,ve,Me,null),me>>=1,le>>=1}}else if(We.length>0){if(N&&Ae){const me=oe(We[0]);t.texStorage2D(n.TEXTURE_2D,De,Pe,me.width,me.height)}for(let me=0,le=We.length;me<le;me++)xe=We[me],N?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve,Me,xe):t.texImage2D(n.TEXTURE_2D,me,Pe,ve,Me,xe);m.generateMipmaps=!1}else if(N){if(Ae){const me=oe(he);t.texStorage2D(n.TEXTURE_2D,De,Pe,me.width,me.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Me,he)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ve,Me,he);g(m)&&d(k),be.__version=H.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ie(v,m,D){if(m.image.length!==6)return;const k=de(v,m),Z=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+D);const H=i.get(Z);if(Z.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+D);const be=Ze.getPrimaries(Ze.workingColorSpace),pe=m.colorSpace===pi?null:Ze.getPrimaries(m.colorSpace),we=m.colorSpace===pi||be===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ne=m.isCompressedTexture||m.image[0].isCompressedTexture,he=m.image[0]&&m.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Ne&&!he?ve[le]=S(m.image[le],!0,r.maxCubemapSize):ve[le]=he?m.image[le].image:m.image[le],ve[le]=te(m,ve[le]);const Me=ve[0],Pe=s.convert(m.format,m.colorSpace),xe=s.convert(m.type),We=A(m.internalFormat,Pe,xe,m.colorSpace),N=m.isVideoTexture!==!0,Ae=H.__version===void 0||k===!0,ge=Z.dataReady;let De=w(m,Me);se(n.TEXTURE_CUBE_MAP,m);let me;if(Ne){N&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,We,Me.width,Me.height);for(let le=0;le<6;le++){me=ve[le].mipmaps;for(let Se=0;Se<me.length;Se++){const Ge=me[Se];m.format!==dn?Pe!==null?N?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ge.width,Ge.height,Pe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,We,Ge.width,Ge.height,0,Ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ge.width,Ge.height,Pe,xe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,We,Ge.width,Ge.height,0,Pe,xe,Ge.data)}}}else{if(me=m.mipmaps,N&&Ae){me.length>0&&De++;const le=oe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,We,le.width,le.height)}for(let le=0;le<6;le++)if(he){N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Pe,xe,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,ve[le].width,ve[le].height,0,Pe,xe,ve[le].data);for(let Se=0;Se<me.length;Se++){const ut=me[Se].image[le].image;N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,ut.width,ut.height,Pe,xe,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,We,ut.width,ut.height,0,Pe,xe,ut.data)}}else{N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,xe,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Pe,xe,ve[le]);for(let Se=0;Se<me.length;Se++){const Ge=me[Se];N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Pe,xe,Ge.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,We,Pe,xe,Ge.image[le])}}}g(m)&&d(n.TEXTURE_CUBE_MAP),H.__version=Z.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function _e(v,m,D,k,Z,H){const be=s.convert(D.format,D.colorSpace),pe=s.convert(D.type),we=A(D.internalFormat,be,pe,D.colorSpace),Ne=i.get(m),he=i.get(D);if(he.__renderTarget=m,!Ne.__hasExternalTextures){const ve=Math.max(1,m.width>>H),Me=Math.max(1,m.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,we,ve,Me,m.depth,0,be,pe,null):t.texImage2D(Z,H,we,ve,Me,0,be,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),fe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Z,he.__webglTexture,0,b(m)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Z,he.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(v,m,D){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const k=m.depthTexture,Z=k&&k.isDepthTexture?k.type:null,H=y(m.stencilBuffer,Z),be=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),H,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),H,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,H,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,v)}else{const k=m.textures;for(let Z=0;Z<k.length;Z++){const H=k[Z],be=s.convert(H.format,H.colorSpace),pe=s.convert(H.type),we=A(H.internalFormat,be,pe,H.colorSpace);fe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),we,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),we,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,we,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(v,m,D){const k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(m.depthTexture);if(Z.__renderTarget=m,(!Z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),se(n.TEXTURE_CUBE_MAP,m.depthTexture);const Ne=s.convert(m.depthTexture.format),he=s.convert(m.depthTexture.type);let ve;m.depthTexture.format===ei?ve=n.DEPTH_COMPONENT24:m.depthTexture.format===Hi&&(ve=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ve,m.width,m.height,0,Ne,he,null)}}else Q(m.depthTexture,0);const H=Z.__webglTexture,be=b(m),pe=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,we=m.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ei)fe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,pe,H,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,we,pe,H,0);else if(m.depthTexture.format===Hi)fe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,pe,H,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,we,pe,H,0);else throw new Error("Unknown depthTexture format")}function je(v){const m=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const k=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=k}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let k=0;k<6;k++)Re(m.__webglFramebuffer[k],v,k);else{const k=v.texture.mipmaps;k&&k.length>0?Re(m.__webglFramebuffer[0],v,0):Re(m.__webglFramebuffer,v,0)}else if(D){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=n.createRenderbuffer(),Ie(m.__webglDepthbuffer[k],v,!1);else{const Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else{const k=v.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ie(m.__webglDepthbuffer,v,!1);else{const Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(v,m,D){const k=i.get(v);m!==void 0&&_e(k.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&je(v)}function I(v){const m=v.texture,D=i.get(v),k=i.get(m);v.addEventListener("dispose",P);const Z=v.textures,H=v.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=m.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[pe]=[];for(let we=0;we<m.mipmaps.length;we++)D.__webglFramebuffer[pe][we]=n.createFramebuffer()}else D.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let pe=0;pe<m.mipmaps.length;pe++)D.__webglFramebuffer[pe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(be)for(let pe=0,we=Z.length;pe<we;pe++){const Ne=i.get(Z[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&fe(v)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<Z.length;pe++){const we=Z[pe];D.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);const Ne=s.convert(we.format,we.colorSpace),he=s.convert(we.type),ve=A(we.internalFormat,Ne,he,we.colorSpace,v.isXRRenderTarget===!0),Me=b(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ve,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),se(n.TEXTURE_CUBE_MAP,m);for(let pe=0;pe<6;pe++)if(m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)_e(D.__webglFramebuffer[pe][we],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else _e(D.__webglFramebuffer[pe],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,we=Z.length;pe<we;pe++){const Ne=Z[pe],he=i.get(Ne);let ve=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ve=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),se(ve,Ne),_e(D.__webglFramebuffer,v,Ne,n.COLOR_ATTACHMENT0+pe,ve,0),g(Ne)&&d(ve)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(pe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,k.__webglTexture),se(pe,m),m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)_e(D.__webglFramebuffer[we],v,m,n.COLOR_ATTACHMENT0,pe,we);else _e(D.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,pe,0);g(m)&&d(pe),t.unbindTexture()}v.depthBuffer&&je(v)}function G(v){const m=v.textures;for(let D=0,k=m.length;D<k;D++){const Z=m[D];if(g(Z)){const H=T(v),be=i.get(Z).__webglTexture;t.bindTexture(H,be),d(H),t.unbindTexture()}}}const ne=[],K=[];function re(v){if(v.samples>0){if(fe(v)===!1){const m=v.textures,D=v.width,k=v.height;let Z=n.COLOR_BUFFER_BIT;const H=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(v),pe=m.length>1;if(pe)for(let Ne=0;Ne<m.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const we=v.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ne=0;Ne<m.length;Ne++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const he=i.get(m[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,D,k,0,0,D,k,Z,n.NEAREST),l===!0&&(ne.length=0,K.length=0,ne.push(n.COLOR_ATTACHMENT0+Ne),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ne.push(H),K.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<m.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const he=i.get(m[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function b(v){return Math.min(r.maxSamples,v.samples)}function fe(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ae(v){const m=a.render.frame;c.get(v)!==m&&(c.set(v,m),v.update())}function te(v,m){const D=v.colorSpace,k=v.format,Z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==Er&&D!==pi&&(Ze.getTransfer(D)===st?(k!==dn||Z!==an)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),m}function oe(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(u.width=v.naturalWidth||v.width,u.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(u.width=v.displayWidth,u.height=v.displayHeight):(u.width=v.width,u.height=v.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=C,this.setupRenderTarget=I,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LS(n,e){function t(i,r=pi){let s;const a=Ze.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===vh)return n.RGB;if(i===dn)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===Mr)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===$s||i===Ks||i===js||i===Zs)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$o||i===Ko||i===jo||i===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jo||i===Qo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===el)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tl)return s.COMPRESSED_R11_EAC;if(i===nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===il)return s.COMPRESSED_RG11_EAC;if(i===rl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===Sl||i===Ml)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vl)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===yl||i===bl||i===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
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

}`;class NS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:IS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FS extends br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",g=new NS,d={},T=t.getContextAttributes();let A=null,y=null;const w=[],R=[],P=new ot;let O=null;const _=new sn;_.viewport=new _t;const E=new sn;E.viewport=new _t;const L=[_,E],U=new qg;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=w[j];return ie===void 0&&(ie=new ho,w[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=w[j];return ie===void 0&&(ie=new ho,w[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=w[j];return ie===void 0&&(ie=new ho,w[j]=ie),ie.getHandSpace()};function Q(j){const ie=R.indexOf(j.inputSource);if(ie===-1)return;const _e=w[ie];_e!==void 0&&(_e.update(j.inputSource,j.frame,u||a),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",B);for(let j=0;j<w.length;j++){const ie=R[j];ie!==null&&(R[j]=null,w[j].disconnect(ie))}z=null,J=null,g.reset();for(const j in d)delete d[j];e.setRenderTarget(A),p=null,h=null,f=null,r=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",B),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Re=null;T.depth&&(Re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Hi:ei,Ie=T.stencil?rs:Dn);const je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Pn(h.textureWidth,h.textureHeight,{format:dn,type:an,depthTexture:new os(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(j){for(let ie=0;ie<j.removed.length;ie++){const _e=j.removed[ie],Ie=R.indexOf(_e);Ie>=0&&(R[Ie]=null,w[Ie].disconnect(_e))}for(let ie=0;ie<j.added.length;ie++){const _e=j.added[ie];let Ie=R.indexOf(_e);if(Ie===-1){for(let je=0;je<w.length;je++)if(je>=R.length){R.push(_e),Ie=je;break}else if(R[je]===null){R[je]=_e,Ie=je;break}if(Ie===-1)break}const Re=w[Ie];Re&&Re.connect(_e)}}const W=new X,ce=new X;function ue(j,ie,_e){W.setFromMatrixPosition(ie.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const Ie=W.distanceTo(ce),Re=ie.projectionMatrix.elements,je=_e.projectionMatrix.elements,C=Re[14]/(Re[10]-1),I=Re[14]/(Re[10]+1),G=(Re[9]+1)/Re[5],ne=(Re[9]-1)/Re[5],K=(Re[8]-1)/Re[0],re=(je[8]+1)/je[0],b=C*K,fe=C*re,ae=Ie/(-K+re),te=ae*-K;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(te),j.translateZ(ae),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const oe=C+ae,v=I+ae,m=b-te,D=fe+(Ie-te),k=G*I/v*oe,Z=ne*I/v*oe;j.projectionMatrix.makePerspective(m,D,k,Z,oe,v),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,_e=j.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),U.near=E.near=_.near=ie,U.far=E.far=_.far=_e,(z!==U.near||J!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,J=U.far),U.layers.mask=j.layers.mask|6,_.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const Ie=j.parent,Re=U.cameras;ee(U,Ie);for(let je=0;je<Re.length;je++)ee(Re[je],Ie);Re.length===2?ue(U,_,E):U.projectionMatrix.copy(_.projectionMatrix),se(j,U,Ie)};function se(j,ie,_e){_e===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Al*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(j){return d[j]};let de=null;function Oe(j,ie){if(c=ie.getViewerPose(u||a),x=ie,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let I=0;I<_e.length;I++){const G=_e[I];let ne=null;if(p!==null)ne=p.getViewport(G);else{const re=f.getViewSubImage(h,G);ne=re.viewport,I===0&&(e.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(y))}let K=L[I];K===void 0&&(K=new sn,K.layers.enable(I),K.viewport=new _t,L[I]=K),K.matrix.fromArray(G.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(G.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ne.x,ne.y,ne.width,ne.height),I===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(K)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const I=f.getDepthInformation(_e[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(Re&&Re.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<_e.length;I++){const G=_e[I].camera;if(G){let ne=d[G];ne||(ne=new Nh,d[G]=ne);const K=f.getCameraImage(G);ne.sourceTexture=K}}}}for(let _e=0;_e<w.length;_e++){const Ie=R[_e],Re=w[_e];Ie!==null&&Re!==void 0&&Re.update(Ie,ie,u||a)}de&&de(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const Ce=new Oh;Ce.setAnimationLoop(Oe),this.setAnimationLoop=function(j){de=j},this.dispose=function(){}}}const Ii=new ti,OS=new xt;function BS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Rh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,T,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,T,A):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===kt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===kt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,y=T.envMapRotation;A&&(g.envMap.value=A,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Ii)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,T,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const y=A.program;i.uniformBlockBinding(T,y)}function u(T,A){let y=r[T.id];y===void 0&&(x(T),y=c(T),r[T.id]=y,T.addEventListener("dispose",g));const w=A.program;i.updateUBOMapping(T,w);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function c(T){const A=f();T.__bindingPointIndex=A;const y=n.createBuffer(),w=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=r[T.id],y=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,P=y.length;R<P;R++){const O=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,E=O.length;_<E;_++){const L=O[_];if(p(L,R,_,w)===!0){const U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let Q=0;Q<z.length;Q++){const Y=z[Q],B=S(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+J,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,J),J+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,A,y,w){const R=T.value,P=A+"_"+y;if(w[P]===void 0)return typeof R=="number"||typeof R=="boolean"?w[P]=R:w[P]=R.clone(),!0;{const O=w[P];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return w[P]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function x(T){const A=T.uniforms;let y=0;const w=16;for(let P=0,O=A.length;P<O;P++){const _=Array.isArray(A[P])?A[P]:[A[P]];for(let E=0,L=_.length;E<L;E++){const U=_[E],z=Array.isArray(U.value)?U.value:[U.value];for(let J=0,Q=z.length;J<Q;J++){const Y=z[J],B=S(Y),W=y%w,ce=W%B.boundary,ue=W+ce;y+=ce,ue!==0&&w-ue<B.storage&&(y+=w-ue),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=B.storage}}}const R=y%w;return R>0&&(y+=w-R),T.__size=y,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",T),A}function g(T){const A=T.target;A.removeEventListener("dispose",g);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}const VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function HS(){return Mn===null&&(Mn=new Ig(VS,16,16,Mr,Qn),Mn.name="DFG_LUT",Mn.minFilter=Pt,Mn.magFilter=Pt,Mn.wrapS=qn,Mn.wrapT=qn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class GS{constructor(e={}){const{canvas:t=ag(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=an}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=p,g=new Set([nc,tc,ec]),d=new Set([an,Dn,is,rs,Jl,Ql]),T=new Uint32Array(4),A=new Int32Array(4);let y=null,w=null;const R=[],P=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=nn;let L=0,U=0,z=null,J=-1,Q=null;const Y=new _t,B=new _t;let W=null;const ce=new nt(0);let ue=0,ee=t.width,se=t.height,de=1,Oe=null,Ce=null;const j=new _t(0,0,ee,se),ie=new _t(0,0,ee,se);let _e=!1;const Ie=new Ih;let Re=!1,je=!1;const C=new xt,I=new X,G=new _t,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function re(){return z===null?de:1}let b=i;function fe(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",it,!1),b===null){const F="webgl2";if(b=fe(F,M),b===null)throw fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Qe("WebGLRenderer: "+M.message),M}let ae,te,oe,v,m,D,k,Z,H,be,pe,we,Ne,he,ve,Me,Pe,xe,We,N,Ae,ge,De,me;function le(){ae=new Hx(b),ae.init(),ge=new LS(b,ae),te=new Lx(b,ae,e,ge),oe=new PS(b,ae),te.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),v=new Wx(b),m=new mS,D=new DS(b,ae,oe,m,te,ge,v),k=new Ux(_),Z=new Vx(_),H=new $g(b),De=new Px(b,H),be=new Gx(b,H,v,De),pe=new qx(b,be,H,v),We=new Xx(b,te,D),Me=new Ix(m),we=new pS(_,k,Z,ae,te,De,Me),Ne=new BS(_,m),he=new _S,ve=new yS(ae),xe=new Rx(_,k,Z,oe,pe,x,l),Pe=new CS(_,pe,te),me=new zS(b,v,te,oe),N=new Dx(b,ae,v),Ae=new kx(b,ae,v),v.programs=we.programs,_.capabilities=te,_.extensions=ae,_.properties=m,_.renderLists=he,_.shadowMap=Pe,_.state=oe,_.info=v}le(),S!==an&&(O=new $x(S,t.width,t.height,r,s));const Se=new FS(_,b);this.xr=Se,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(M){M!==void 0&&(de=M,this.setSize(ee,se,!1))},this.getSize=function(M){return M.set(ee,se)},this.setSize=function(M,F,$=!0){if(Se.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,se=F,t.width=Math.floor(M*de),t.height=Math.floor(F*de),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ee*de,se*de).floor()},this.setDrawingBufferSize=function(M,F,$){ee=M,se=F,de=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(S===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Y)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,F,$,q){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,F,$,q),oe.viewport(Y.copy(j).multiplyScalar(de).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,F,$,q){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,F,$,q),oe.scissor(B.copy(ie).multiplyScalar(de).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(M){oe.setScissorTest(_e=M)},this.setOpaqueSort=function(M){Oe=M},this.setTransparentSort=function(M){Ce=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let q=0;if(M){let V=!1;if(z!==null){const Ee=z.texture.format;V=g.has(Ee)}if(V){const Ee=z.texture.type,Le=d.has(Ee),Te=xe.getClearColor(),Ue=xe.getClearAlpha(),Fe=Te.r,Ve=Te.g,Be=Te.b;Le?(T[0]=Fe,T[1]=Ve,T[2]=Be,T[3]=Ue,b.clearBufferuiv(b.COLOR,0,T)):(A[0]=Fe,A[1]=Ve,A[2]=Be,A[3]=Ue,b.clearBufferiv(b.COLOR,0,A))}else q|=b.COLOR_BUFFER_BIT}F&&(q|=b.DEPTH_BUFFER_BIT),$&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",it,!1),xe.dispose(),he.dispose(),ve.dispose(),m.dispose(),k.dispose(),Z.dispose(),pe.dispose(),De.dispose(),me.dispose(),we.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",cc),Se.removeEventListener("sessionend",uc),Ei.stop()};function Ge(M){M.preventDefault(),nu("WebGLRenderer: Context Lost."),E=!0}function ut(){nu("WebGLRenderer: Context Restored."),E=!1;const M=v.autoReset,F=Pe.enabled,$=Pe.autoUpdate,q=Pe.needsUpdate,V=Pe.type;le(),v.autoReset=M,Pe.enabled=F,Pe.autoUpdate=$,Pe.needsUpdate=q,Pe.type=V}function it(M){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vn(M){const F=M.target;F.removeEventListener("dispose",vn),In(F)}function In(M){Gh(M),m.remove(M)}function Gh(M){const F=m.get(M).programs;F!==void 0&&(F.forEach(function($){we.releaseProgram($)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,q,V,Ee){F===null&&(F=ne);const Le=V.isMesh&&V.matrixWorld.determinant()<0,Te=Wh(M,F,$,q,V);oe.setMaterial(q,Le);let Ue=$.index,Fe=1;if(q.wireframe===!0){if(Ue=be.getWireframeAttribute($),Ue===void 0)return;Fe=2}const Ve=$.drawRange,Be=$.attributes.position;let $e=Ve.start*Fe,at=(Ve.start+Ve.count)*Fe;Ee!==null&&($e=Math.max($e,Ee.start*Fe),at=Math.min(at,(Ee.start+Ee.count)*Fe)),Ue!==null?($e=Math.max($e,0),at=Math.min(at,Ue.count)):Be!=null&&($e=Math.max($e,0),at=Math.min(at,Be.count));const pt=at-$e;if(pt<0||pt===1/0)return;De.setup(V,q,Te,$,Ue);let mt,lt=N;if(Ue!==null&&(mt=H.get(Ue),lt=Ae,lt.setIndex(mt)),V.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*re()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(V.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),oe.setLineWidth(ze*re()),V.isLineSegments?lt.setMode(b.LINES):V.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else V.isPoints?lt.setMode(b.POINTS):V.isSprite&&lt.setMode(b.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)as("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ze=V._multiDrawStarts,rt=V._multiDrawCounts,Je=V._multiDrawCount,Xt=Ue?H.get(Ue).bytesPerElement:1,Xi=m.get(q).currentProgram.getUniforms();for(let qt=0;qt<Je;qt++)Xi.setValue(b,"_gl_DrawID",qt),lt.render(ze[qt]/Xt,rt[qt])}else if(V.isInstancedMesh)lt.renderInstances($e,pt,V.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,rt=Math.min($.instanceCount,ze);lt.renderInstances($e,pt,rt)}else lt.render($e,pt)};function lc(M,F,$){M.transparent===!0&&M.side===Xn&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,gs(M,F,$),M.side=Si,M.needsUpdate=!0,gs(M,F,$),M.side=Xn):gs(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),w=ve.get($),w.init(F),P.push(w),$.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),M!==$&&M.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const q=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Te=Ee[Le];lc(Te,$,V),q.add(Te)}else lc(Ee,$,V),q.add(Ee)}),w=P.pop(),q},this.compileAsync=function(M,F,$=null){const q=this.compile(M,F,$);return new Promise(V=>{function Ee(){if(q.forEach(function(Le){m.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){V(M);return}setTimeout(Ee,10)}ae.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wa=null;function kh(M){wa&&wa(M)}function cc(){Ei.stop()}function uc(){Ei.start()}const Ei=new Oh;Ei.setAnimationLoop(kh),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(M){wa=M,Se.setAnimationLoop(M),M===null?Ei.stop():Ei.start()},Se.addEventListener("sessionstart",cc),Se.addEventListener("sessionend",uc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const $=Se.enabled===!0&&Se.isPresenting===!0,q=O!==null&&(z===null||$)&&O.begin(_,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(F),F=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,F,z),w=ve.get(M,P.length),w.init(F),P.push(w),C.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(C,An,F.reversedDepth),je=this.localClippingEnabled,Re=Me.init(this.clippingPlanes,je),y=he.get(M,R.length),y.init(),R.push(y),Se.enabled===!0&&Se.isPresenting===!0){const Le=_.xr.getDepthSensingMesh();Le!==null&&Ca(Le,F,-1/0,_.sortObjects)}Ca(M,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(Oe,Ce),K=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,K&&xe.addToRenderList(y,M),this.info.render.frame++,Re===!0&&Me.beginShadows();const V=w.state.shadowsArray;if(Pe.render(V,M,F),Re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&O.hasRenderPass())===!1){const Le=y.opaque,Te=y.transmissive;if(w.setupLights(),F.isArrayCamera){const Ue=F.cameras;if(Te.length>0)for(let Fe=0,Ve=Ue.length;Fe<Ve;Fe++){const Be=Ue[Fe];hc(Le,Te,M,Be)}K&&xe.render(M);for(let Fe=0,Ve=Ue.length;Fe<Ve;Fe++){const Be=Ue[Fe];fc(y,M,Be,Be.viewport)}}else Te.length>0&&hc(Le,Te,M,F),K&&xe.render(M),fc(y,M,F)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),q&&O.end(_),M.isScene===!0&&M.onAfterRender(_,M,F),De.resetDefaultState(),J=-1,Q=null,P.pop(),P.length>0?(w=P[P.length-1],Re===!0&&Me.setGlobalState(_.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Ca(M,F,$,q){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){q&&G.setFromMatrixPosition(M.matrixWorld).applyMatrix4(C);const Le=pe.update(M),Te=M.material;Te.visible&&y.push(M,Le,Te,$,G.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const Le=pe.update(M),Te=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),G.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),G.copy(Le.boundingSphere.center)),G.applyMatrix4(M.matrixWorld).applyMatrix4(C)),Array.isArray(Te)){const Ue=Le.groups;for(let Fe=0,Ve=Ue.length;Fe<Ve;Fe++){const Be=Ue[Fe],$e=Te[Be.materialIndex];$e&&$e.visible&&y.push(M,Le,$e,$,G.z,Be)}}else Te.visible&&y.push(M,Le,Te,$,G.z,null)}}const Ee=M.children;for(let Le=0,Te=Ee.length;Le<Te;Le++)Ca(Ee[Le],F,$,q)}function fc(M,F,$,q){const{opaque:V,transmissive:Ee,transparent:Le}=M;w.setupLightsView($),Re===!0&&Me.setGlobalState(_.clippingPlanes,$),q&&oe.viewport(Y.copy(q)),V.length>0&&ms(V,F,$),Ee.length>0&&ms(Ee,F,$),Le.length>0&&ms(Le,F,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function hc(M,F,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){const $e=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new Pn(1,1,{generateMipmaps:!0,type:$e?Qn:an,minFilter:Vi,samples:te.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[q.id],Le=q.viewport||Y;Ee.setSize(Le.z*_.transmissionResolutionScale,Le.w*_.transmissionResolutionScale);const Te=_.getRenderTarget(),Ue=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(Ee),_.getClearColor(ce),ue=_.getClearAlpha(),ue<1&&_.setClearColor(16777215,.5),_.clear(),K&&xe.render($);const Ve=_.toneMapping;_.toneMapping=Rn;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Re===!0&&Me.setGlobalState(_.clippingPlanes,q),ms(M,$,q),D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee),ae.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,pt=F.length;at<pt;at++){const mt=F[at],{object:lt,geometry:ze,material:rt,group:Je}=mt;if(rt.side===Xn&&lt.layers.test(q.layers)){const Xt=rt.side;rt.side=kt,rt.needsUpdate=!0,dc(lt,$,q,ze,rt,Je),rt.side=Xt,rt.needsUpdate=!0,$e=!0}}$e===!0&&(D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee))}_.setRenderTarget(Te,Ue,Fe),_.setClearColor(ce,ue),Be!==void 0&&(q.viewport=Be),_.toneMapping=Ve}function ms(M,F,$){const q=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Ee=M.length;V<Ee;V++){const Le=M[V],{object:Te,geometry:Ue,group:Fe}=Le;let Ve=Le.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Te.layers.test($.layers)&&dc(Te,F,$,Ue,Ve,Fe)}}function dc(M,F,$,q,V,Ee){M.onBeforeRender(_,F,$,q,V,Ee),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(_,F,$,q,M,Ee),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=kt,V.needsUpdate=!0,_.renderBufferDirect($,F,q,V,M,Ee),V.side=Si,V.needsUpdate=!0,_.renderBufferDirect($,F,q,V,M,Ee),V.side=Xn):_.renderBufferDirect($,F,q,V,M,Ee),M.onAfterRender(_,F,$,q,V,Ee)}function gs(M,F,$){F.isScene!==!0&&(F=ne);const q=m.get(M),V=w.state.lights,Ee=w.state.shadowsArray,Le=V.state.version,Te=we.getParameters(M,V.state,Ee,F,$),Ue=we.getProgramCacheKey(Te);let Fe=q.programs;q.environment=M.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(M.isMeshStandardMaterial?Z:k).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",vn),Fe=new Map,q.programs=Fe);let Ve=Fe.get(Ue);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===Le)return mc(M,Te),Ve}else Te.uniforms=we.getUniforms(M),M.onBeforeCompile(Te,_),Ve=we.acquireProgram(Te,Ue),Fe.set(Ue,Ve),q.uniforms=Te.uniforms;const Be=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Me.uniform),mc(M,Te),q.needsLights=qh(M),q.lightsStateVersion=Le,q.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function pc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Js.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function mc(M,F){const $=m.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Wh(M,F,$,q,V){F.isScene!==!0&&(F=ne),D.resetTextureUnits();const Ee=F.fog,Le=q.isMeshStandardMaterial?F.environment:null,Te=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Er,Ue=(q.isMeshStandardMaterial?Z:k).get(q.envMap||Le),Fe=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,at=!!$.morphAttributes.color;let pt=Rn;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pt=_.toneMapping);const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,lt=mt!==void 0?mt.length:0,ze=m.get(q),rt=w.state.lights;if(Re===!0&&(je===!0||M!==Q)){const It=M===Q&&q.id===J;Me.setState(q,M,It)}let Je=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==rt.state.version||ze.outputColorSpace!==Te||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isBatchedMesh&&ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ze.instancingMorph===!1&&V.morphTexture!==null||ze.envMap!==Ue||q.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Me.numPlanes||ze.numIntersection!==Me.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Ve||ze.morphTargets!==Be||ze.morphNormals!==$e||ze.morphColors!==at||ze.toneMapping!==pt||ze.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,ze.__version=q.version);let Xt=ze.currentProgram;Je===!0&&(Xt=gs(q,F,V));let Xi=!1,qt=!1,Ar=!1;const ft=Xt.getUniforms(),zt=ze.uniforms;if(oe.useProgram(Xt.program)&&(Xi=!0,qt=!0,Ar=!0),q.id!==J&&(J=q.id,qt=!0),Xi||Q!==M){oe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(b,"projectionMatrix",M.projectionMatrix),ft.setValue(b,"viewMatrix",M.matrixWorldInverse);const Vt=ft.map.cameraPosition;Vt!==void 0&&Vt.setValue(b,I.setFromMatrixPosition(M.matrixWorld)),te.logarithmicDepthBuffer&&ft.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,qt=!0,Ar=!0)}if(ze.needsLights&&(rt.state.directionalShadowMap.length>0&&ft.setValue(b,"directionalShadowMap",rt.state.directionalShadowMap,D),rt.state.spotShadowMap.length>0&&ft.setValue(b,"spotShadowMap",rt.state.spotShadowMap,D),rt.state.pointShadowMap.length>0&&ft.setValue(b,"pointShadowMap",rt.state.pointShadowMap,D)),V.isSkinnedMesh){ft.setOptional(b,V,"bindMatrix"),ft.setOptional(b,V,"bindMatrixInverse");const It=V.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ft.setValue(b,"boneTexture",It.boneTexture,D))}V.isBatchedMesh&&(ft.setOptional(b,V,"batchingTexture"),ft.setValue(b,"batchingTexture",V._matricesTexture,D),ft.setOptional(b,V,"batchingIdTexture"),ft.setValue(b,"batchingIdTexture",V._indirectTexture,D),ft.setOptional(b,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(b,"batchingColorTexture",V._colorsTexture,D));const Jt=$.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&We.update(V,$,Xt),(qt||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,ft.setValue(b,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(zt.envMap.value=Ue,zt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(zt.envMapIntensity.value=F.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=HS()),qt&&(ft.setValue(b,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&Xh(zt,Ar),Ee&&q.fog===!0&&Ne.refreshFogUniforms(zt,Ee),Ne.refreshMaterialUniforms(zt,q,de,se,w.state.transmissionRenderTarget[M.id]),Js.upload(b,pc(ze),zt,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Js.upload(b,pc(ze),zt,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(b,"center",V.center),ft.setValue(b,"modelViewMatrix",V.modelViewMatrix),ft.setValue(b,"normalMatrix",V.normalMatrix),ft.setValue(b,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const It=q.uniformsGroups;for(let Vt=0,Ra=It.length;Vt<Ra;Vt++){const yi=It[Vt];me.update(yi,Xt),me.bind(yi,Xt)}}return Xt}function Xh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function qh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,F,$){const q=m.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),m.get(M.texture).__webglTexture=F,m.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=m.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const Yh=b.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){z=M,L=F,U=$;let q=null,V=!1,Ee=!1;if(M){const Te=m.get(M);if(Te.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(b.FRAMEBUFFER,Te.__webglFramebuffer),Y.copy(M.viewport),B.copy(M.scissor),W=M.scissorTest,oe.viewport(Y),oe.scissor(B),oe.setScissorTest(W),J=-1;return}else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(Te.__hasExternalTextures)D.rebindTextures(M,m.get(M.texture).__webglTexture,m.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(Te.__boundDepthTexture!==Ve){if(Ve!==null&&m.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);const Fe=m.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?q=Fe[F][$]:q=Fe[F],V=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?q=m.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[$]:q=Fe,Y.copy(M.viewport),B.copy(M.scissor),W=M.scissorTest}else Y.copy(j).multiplyScalar(de).floor(),B.copy(ie).multiplyScalar(de).floor(),W=_e;if($!==0&&(q=Yh),oe.bindFramebuffer(b.FRAMEBUFFER,q)&&oe.drawBuffers(M,q),oe.viewport(Y),oe.scissor(B),oe.setScissorTest(W),V){const Te=m.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,$)}else if(Ee){const Te=F;for(let Ue=0;Ue<M.textures.length;Ue++){const Fe=m.get(M.textures[Ue]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ue,Fe.__webglTexture,$,Te)}}else if(M!==null&&$!==0){const Te=m.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Te.__webglTexture,$)}J=-1},this.readRenderTargetPixels=function(M,F,$,q,V,Ee,Le,Te=0){if(!(M&&M.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){oe.bindFramebuffer(b.FRAMEBUFFER,Ue);try{const Fe=M.textures[Te],Ve=Fe.format,Be=Fe.type;if(!te.textureFormatReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Be)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-q&&$>=0&&$<=M.height-V&&(M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(F,$,q,V,ge.convert(Ve),ge.convert(Be),Ee))}finally{const Fe=z!==null?m.get(z).__webglFramebuffer:null;oe.bindFramebuffer(b.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,q,V,Ee,Le,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(F>=0&&F<=M.width-q&&$>=0&&$<=M.height-V){oe.bindFramebuffer(b.FRAMEBUFFER,Ue);const Fe=M.textures[Te],Ve=Fe.format,Be=Fe.type;if(!te.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,$e),b.bufferData(b.PIXEL_PACK_BUFFER,Ee.byteLength,b.STREAM_READ),M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(F,$,q,V,ge.convert(Ve),ge.convert(Be),0);const at=z!==null?m.get(z).__webglFramebuffer:null;oe.bindFramebuffer(b.FRAMEBUFFER,at);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await og(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,$e),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ee),b.deleteBuffer($e),b.deleteSync(pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const q=Math.pow(2,-$),V=Math.floor(M.image.width*q),Ee=Math.floor(M.image.height*q),Le=F!==null?F.x:0,Te=F!==null?F.y:0;D.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,$,0,0,Le,Te,V,Ee),oe.unbindTexture()};const $h=b.createFramebuffer(),Kh=b.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,q=null,V=0,Ee=null){Ee===null&&(V!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=V,V=0):Ee=0);let Le,Te,Ue,Fe,Ve,Be,$e,at,pt;const mt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if($!==null)Le=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,Ve=$.min.y,Be=$.isBox3?$.min.z:0;else{const Jt=Math.pow(2,-V);Le=Math.floor(mt.width*Jt),Te=Math.floor(mt.height*Jt),M.isDataArrayTexture?Ue=mt.depth:M.isData3DTexture?Ue=Math.floor(mt.depth*Jt):Ue=1,Fe=0,Ve=0,Be=0}q!==null?($e=q.x,at=q.y,pt=q.z):($e=0,at=0,pt=0);const lt=ge.convert(F.format),ze=ge.convert(F.type);let rt;F.isData3DTexture?(D.setTexture3D(F,0),rt=b.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),rt=b.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),rt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const Je=b.getParameter(b.UNPACK_ROW_LENGTH),Xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Xi=b.getParameter(b.UNPACK_SKIP_PIXELS),qt=b.getParameter(b.UNPACK_SKIP_ROWS),Ar=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,mt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Be);const ft=M.isDataArrayTexture||M.isData3DTexture,zt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Jt=m.get(M),It=m.get(F),Vt=m.get(Jt.__renderTarget),Ra=m.get(It.__renderTarget);oe.bindFramebuffer(b.READ_FRAMEBUFFER,Vt.__webglFramebuffer),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let yi=0;yi<Ue;yi++)ft&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(M).__webglTexture,V,Be+yi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(F).__webglTexture,Ee,pt+yi)),b.blitFramebuffer(Fe,Ve,Le,Te,$e,at,Le,Te,b.DEPTH_BUFFER_BIT,b.NEAREST);oe.bindFramebuffer(b.READ_FRAMEBUFFER,null),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||m.has(M)){const Jt=m.get(M),It=m.get(F);oe.bindFramebuffer(b.READ_FRAMEBUFFER,$h),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Kh);for(let Vt=0;Vt<Ue;Vt++)ft?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Jt.__webglTexture,V,Be+Vt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Jt.__webglTexture,V),zt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,Ee,pt+Vt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,It.__webglTexture,Ee),V!==0?b.blitFramebuffer(Fe,Ve,Le,Te,$e,at,Le,Te,b.COLOR_BUFFER_BIT,b.NEAREST):zt?b.copyTexSubImage3D(rt,Ee,$e,at,pt+Vt,Fe,Ve,Le,Te):b.copyTexSubImage2D(rt,Ee,$e,at,Fe,Ve,Le,Te);oe.bindFramebuffer(b.READ_FRAMEBUFFER,null),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else zt?M.isDataTexture||M.isData3DTexture?b.texSubImage3D(rt,Ee,$e,at,pt,Le,Te,Ue,lt,ze,mt.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(rt,Ee,$e,at,pt,Le,Te,Ue,lt,mt.data):b.texSubImage3D(rt,Ee,$e,at,pt,Le,Te,Ue,lt,ze,mt):M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Ee,$e,at,Le,Te,lt,ze,mt.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Ee,$e,at,mt.width,mt.height,lt,mt.data):b.texSubImage2D(b.TEXTURE_2D,Ee,$e,at,Le,Te,lt,ze,mt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Je),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Xi),b.pixelStorei(b.UNPACK_SKIP_ROWS,qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ar),Ee===0&&F.generateMipmaps&&b.generateMipmap(rt),oe.unbindTexture()},this.initRenderTarget=function(M){m.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),oe.unbindTexture()},this.resetState=function(){L=0,U=0,z=null,oe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const ur=window.innerWidth<768,jt={particleCount:ur?12e3:22e3,particleSize:ur?1.6:1.1,textScale:ur?.12:.18,canvasFont:ur?'900 80px "Microsoft YaHei", sans-serif':'900 120px "Microsoft YaHei", sans-serif'},kS=["快乐","喜悦","平静","爱","感恩","希望","自豪","兴奋","幽默","悲伤","愤怒","恐惧","焦虑","羞愧","嫉妒","孤独","内疚","厌恶"];function cr(n){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=ur?512:1024,e.height=256,t.fillStyle="black",t.fillRect(0,0,e.width,e.height),t.fillStyle="white",t.font=jt.canvasFont,t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2);const i=t.getImageData(0,0,e.width,e.height),r=[],s=ur?3:2;for(let a=0;a<e.height;a+=s)for(let o=0;o<e.width;o+=s)i.data[(a*e.width+o)*4]>100&&r.push({x:(o-e.width/2)*jt.textScale,y:-(a-e.height/2)*jt.textScale,z:0});return r}function WS(){return kS.map(n=>cr(n))}function XS(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*220;let r=Math.sqrt(Math.pow(i,2))*.5+3;Math.abs(i)>100&&(r=60*Math.random());const s=Math.random()*Math.PI*2;Math.random()>.85&&(r*=Math.random()),e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}function qS(n){const e=[];for(let s=0;s<n;s++)e.push({x:(Math.random()-.5)*140,y:(Math.random()-.5)*50-160,z:(Math.random()-.5)*80});return e}function YS(n){const e=[];for(let t=0;t<n;t++){const i=t<n/2,r=i?-50:50;let s="glass",a=(Math.random()-.5)*110,o=28,l=Math.random()*Math.PI*2;Math.random()>.35&&a<35&&a>-50&&(s="liquid",o=Math.random()*26,a>30&&(s="foam"));let u=o*Math.cos(l),c=o*Math.sin(l),f=a;s==="glass"&&a>-15&&a<35&&Math.abs(l-(i?Math.PI:0))<.6&&(u+=i?-18:18,s="handle"),e.push({x:u+r,y:f,z:c,type:s,isLeft:i,baseX:u+r})}return e}function $S(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*200;let r=0;i>60?r=20*(100-i)/40:i>-80?r=20:r=20+(-80-i)*1.5;const s=Math.random()*Math.PI*2;i<60&&i>-80&&Math.random()>.4&&(r*=Math.random()),e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}function KS(n){const e=[],i=n-1200;for(let r=0;r<i;r++){const s=Math.random();let a,o,l;a=(s-.5)*380,o=-5e-4*a*a+30,l=(Math.random()-.5)*70,Math.abs(l)>30?o+=Math.random()*12:o-=Math.random()*8;let c=s>.4&&s<.6,f=o;c&&(f=-250-Math.random()*100),e.push({x:a,y:f,z:l,targetY:o,type:"bridge",isBrokenPart:c})}for(let r=0;r<1200;r++){const s=r<600?0:1,a=Math.random();let o=0,l=0;if(a<.15){const u=Math.random()*6.28,c=Math.random()*5;o=Math.cos(u)*c,l=25+Math.sin(u)*c}else a<.5?(o=(Math.random()-.5)*6,l=10+Math.random()*15):(o=(Math.random()-.5)*12,l=Math.random()*15);e.push({x:s===0?-220:220,y:0,z:(Math.random()-.5)*20,type:"man",manIndex:s,offsetX:o,offsetY:l,part:a})}return e}const Aa=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},jS={__name:"ParticleScene",props:{currentShape:String,triggerState:Number,currentTheme:String},emits:["firework-tick"],setup(n,{emit:e}){const t=n,i=e,r=tn(null);let s,a,o,l,u,c=[],f,h=0,p=[],x=[],S=[],g=[],d=[],T=0,A=0,y=!1,w=[],R=[],P=0,O=[],_=[],E=[],L=[];const U=async()=>{s=new Lg,s.fog=new ac(0,.002),a=new sn(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.z=140,o=new GS({antialias:!0,alpha:!0}),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value&&r.value.appendChild(o.domElement),z(),Y()},z=()=>{u=new xn;const W=jt.particleCount,ce=new Float32Array(W*3),ue=new Float32Array(W*3);c=new Float32Array(W*3);for(let de=0;de<W;de++)ce[de*3]=(Math.random()-.5)*800,ce[de*3+1]=(Math.random()-.5)*800,ce[de*3+2]=(Math.random()-.5)*800,ue[de*3]=1,ue[de*3+1]=1,ue[de*3+2]=1;u.setAttribute("position",new ln(ce,3)),u.setAttribute("color",new ln(ue,3));const ee=new Xg().load("https://threejs.org/examples/textures/sprites/spark1.png"),se=new Uh({size:jt.particleSize,map:ee,transparent:!0,opacity:.95,vertexColors:!0,blending:Uo,depthWrite:!1});l=new Og(u,se),s.add(l),J()},J=()=>{h=0,P=0;let W=[];const ce=jt.particleCount;t.currentShape==="hourglass"?(p.length===0&&(p=XS(ce*.7),x=cr("2025"),S=cr("今年辛苦啦")),W=[...p]):t.currentShape==="fireworks"?(g.length===0&&(g=qS(3e3)),d.length===0&&(d=WS()),T=0,A=0,y=!1,i("firework-tick",{idx:0,time:2}),W=g):t.currentShape==="beer"?(w.length===0&&(w=YS(ce*.9),R=cr("2025 有你相伴")),W=w):t.currentShape==="rocket"?(O.length===0&&(O=$S(ce),_=cr("2026新年快乐")),W=O):t.currentShape==="bridge"&&(E.length===0&&(E=KS(ce*.9),L=cr("2026 与你同行")),W=E);for(let ue=0;ue<ce;ue++){const ee=ue*3;ue<W.length?(c[ee]=W[ue].x,c[ee+1]=W[ue].y,c[ee+2]=W[ue].z):(c[ee]=(Math.random()-.5)*700,c[ee+1]=(Math.random()-.5)*700,c[ee+2]=(Math.random()-.5)*300-200)}Q()},Q=()=>{if(!u)return;const W=u.attributes.color;for(let ce=0;ce<jt.particleCount;ce++){let ue,ee,se;const de=Math.random();t.currentTheme==="warm"?de>.6?(ue=1,ee=.8,se=.2):de>.3?(ue=1,ee=.5,se=.1):(ue=1,ee=.9,se=.8):de>.6?(ue=.1,ee=.9,se=1):de>.3?(ue=.6,ee=.1,se=1):(ue=.9,ee=1,se=1),t.currentShape==="beer"&&ce<w.length&&w[ce].type==="liquid"&&(ue=1,ee=.65,se=0),W.setXYZ(ce,ue,ee,se)}W.needsUpdate=!0},Y=()=>{f=requestAnimationFrame(Y);const W=u.attributes.position.array,ce=u.attributes.color.array;if(h+=.01,t.currentShape==="hourglass")for(let se=0;se<jt.particleCount;se++){const de=se*3;if(se<p.length){const Oe=c[de],Ce=c[de+2],j=Math.atan2(Ce,Oe)+.003,ie=Math.sqrt(Oe*Oe+Ce*Ce);c[de]=ie*Math.cos(j),c[de+2]=ie*Math.sin(j)}else{const Oe=se-p.length,Ce=x.length,j=S.length,ie=Oe%800*.005,_e=h-ie;if(_e<0){const Ie=x[Oe%Ce];c[de]=Ie.x,c[de+1]=Ie.y+50,c[de+2]=Ie.z}else if(_e<3){const Ie=_e/3;c[de]=(Math.random()-.5)*4,c[de+1]=50-Ie*100,c[de+2]=(Math.random()-.5)*4}else{const Ie=S[Oe%j];c[de]=Ie.x,c[de+1]=Ie.y-50,c[de+2]=Ie.z}}}else if(t.currentShape==="fireworks"){for(let se=0;se<3e3;se++)se<g.length&&(Math.random()>.99?c[se*3+1]+=20:c[se*3+1]+=(g[se].y-c[se*3+1])*.1);if(t.triggerState>=1&&(y=!0,A+=.016,A>2&&(A=0,T++,T>=18&&(y=!1,T=17)),i("firework-tick",{idx:T+1,total:18,time:Math.max(0,(2-A).toFixed(1))}),y)){const se=d[T],de=12e3;for(let Oe=3e3;Oe<de;Oe++){const Ce=Oe*3,j=Oe-3e3;if(A<.6){const ie=A/.6,_e=-120+ie*240,Ie=5*Math.sin(ie*Math.PI),Re=j%50*.5;c[Ce]=Math.sin(ie*10+j)*Ie,c[Ce+1]=_e-Re,c[Ce+2]=Math.cos(ie*10+j)*Ie,ce[Ce]=1,ce[Ce+1]=.8,ce[Ce+2]=.2}else if(A<.8){if(A<.65){const ie=Math.random()*Math.PI*2,_e=Math.acos(2*Math.random()-1),Ie=15;c[Ce]+=Ie*Math.sin(_e)*Math.cos(ie),c[Ce+1]+=Ie*Math.sin(_e)*Math.sin(ie),c[Ce+2]+=Ie*Math.cos(_e),ce[Ce]=Math.random(),ce[Ce+1]=Math.random(),ce[Ce+2]=1}}else if(A<1.3)c[Ce+1]-=2,c[Ce]*=.98,c[Ce+2]*=.98;else if(A<1.8)if(j<se.length*15){const ie=se[j%se.length],_e=ie.x,Ie=ie.y+50,Re=ie.z;c[Ce]+=(_e-c[Ce])*.2,c[Ce+1]+=(Ie-c[Ce+1])*.2,c[Ce+2]+=(Re-c[Ce+2])*.2,ce[Ce]=0,ce[Ce+1]=1,ce[Ce+2]=1}else c[Ce+1]-=5;else c[Ce]*=1.1,ce[Ce]*=.9}u.attributes.color.needsUpdate=!0}}else if(t.currentShape==="beer"){t.triggerState>=1&&P++;for(let ee=0;ee<jt.particleCount;ee++){const se=ee*3;if(ee<w.length){const de=w[ee];let Oe=de.x,Ce=de.y;if(t.triggerState>=1){const j=Math.min(25,P*.5);if(de.isLeft?Oe+=j:Oe-=j,P>40&&de.type==="liquid"&&Math.random()>.98){c[se+1]+=3;continue}}de.type==="liquid"&&(Ce+=Math.sin(h*5+Oe*.1)*1.5),c[se]=Oe,c[se+1]=Ce}else if(P>250){const de=ee-w.length,Oe=R[de%R.length];c[se]+=(Oe.x-c[se])*.05,c[se+1]+=(Oe.y-60-c[se+1])*.05,c[se+2]+=(Oe.z-c[se+2])*.05}else c[se]=0,c[se+1]=-800}if(P>300)for(let ee=0;ee<w.length;ee++)c[ee*3+1]-=3}else if(t.currentShape==="rocket"){if(t.triggerState===1)for(let ee=0;ee<jt.particleCount;ee++)c[ee*3+1]+=8,Math.random()>.7&&(c[ee*3+1]-=20);else if(t.triggerState===2)for(let ee=0;ee<jt.particleCount;ee++){const se=ee*3;if(ee<_.length){const de=_[ee];c[se]=de.x,c[se+1]=de.y,c[se+2]=de.z}else c[se]*=1.1}}else if(t.currentShape==="bridge"&&t.triggerState>=1)for(let ee=0;ee<jt.particleCount;ee++){const se=ee*3;if(ee<E.length){const de=E[ee];if(de.isBrokenPart&&(c[se+1]+=(de.targetY-c[se+1])*.04),de.type==="man"){let Ce,j=h*120%220;de.manIndex===0?Ce=-220+j:Ce=220-j;let ie=de.offsetX+Math.sin(h*20)*3,_e=de.offsetY+Math.abs(Math.cos(h*20))*2;c[se]=Ce+ie;const Ie=-5e-4*Ce*Ce+30;c[se+1]=Ie+_e,c[se+2]=de.z}}else{const de=ee-E.length,Oe=L[de%L.length];c[se]=Oe.x,c[se+1]=Oe.y-40,c[se+2]=Oe.z}}const ue=.12;for(let ee=0;ee<jt.particleCount;ee++){const se=ee*3;W[se]+=(c[se]-W[se])*ue,W[se+1]+=(c[se+1]-W[se+1])*ue,W[se+2]+=(c[se+2]-W[se+2])*ue}u.attributes.position.needsUpdate=!0,o.render(s,a)};kr(()=>t.currentShape,J),kr(()=>t.currentTheme,Q),Xl(()=>{U(),window.addEventListener("resize",B)}),_a(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",B)});const B=()=>{!a||!o||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),J())};return(W,ce)=>(gn(),Cn("div",{ref_key:"canvasContainer",ref:r,class:"canvas-wrapper"},null,512))}},ZS=Aa(jS,[["__scopeId","data-v-d4f01114"]]),JS={id:"ui-container"},QS={class:"panel-card"},eM={class:"year-group"},tM={class:"year-item"},nM={key:0,class:"hint-wrap"},iM={class:"sub-hint"},rM={class:"year-item"},sM={key:0,class:"hint-wrap"},aM={class:"sub-hint"},oM={__name:"ControlPanel",props:{currentYear:String,sceneIndex:Number},emits:["select-year"],setup(n){const e=n,t=Kl(()=>{if(e.currentYear==="2025"){if(e.sceneIndex===0)return"流沙自动播放";if(e.sceneIndex===1)return"✌️剪刀手: 18连发烟花";if(e.sceneIndex===2)return"✊握拳: 干杯碰撞"}else{if(e.sceneIndex===0)return"🖐️上滑: 发射火箭";if(e.sceneIndex===1)return"✊握拳: 断桥重连"}return"互动就绪"});return(i,r)=>(gn(),Cn("div",JS,[gt("div",QS,[gt("div",eM,[gt("div",tM,[gt("button",{class:xr(["year-btn y25",{active:n.currentYear==="2025"}]),onClick:r[0]||(r[0]=s=>i.$emit("select-year","2025"))}," 2025 ",2),n.currentYear==="2025"?(gn(),Cn("div",nM,[r[2]||(r[2]=gt("div",{class:"main-hint"},"👋 左 → 右 切页",-1)),gt("div",iM,zi(t.value),1)])):es("",!0)]),r[4]||(r[4]=gt("div",{class:"divider"},null,-1)),gt("div",rM,[gt("button",{class:xr(["year-btn y26",{active:n.currentYear==="2026"}]),onClick:r[1]||(r[1]=s=>i.$emit("select-year","2026"))}," 2026 ",2),n.currentYear==="2026"?(gn(),Cn("div",sM,[r[3]||(r[3]=gt("div",{class:"main-hint"},"👋 右 ← 左 切页",-1)),gt("div",aM,zi(t.value),1)])):es("",!0)])])])]))}},lM=Aa(oM,[["__scopeId","data-v-0d323a33"]]);function Xu(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.async=!0,i.crossOrigin="anonymous",i.onload=()=>e(),i.onerror=()=>t(new Error(`Script load error: ${n}`)),document.head.appendChild(i)})}const cM={class:"camera-wrapper"},uM=8,fM={__name:"CameraInput",props:{isActive:Boolean},emits:["status-change","camera-error","gesture","hand-x","hand-y","lock-swipe"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=tn(null),a=tn(null);let o=null,l=null,u=-1,c="NONE",f=0;const h=(g,d)=>Math.sqrt(Math.pow(g.x-d.x,2)+Math.pow(g.y-d.y,2)),p=async()=>{try{r("status-change","引擎启动中..."),await Promise.all([Xu("https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"),Xu("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js")]);const g=window.Hands;o=new g({locateFile:T=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${T}`}),o.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.7,minTrackingConfidence:.7}),o.onResults(S);const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}});s.value.srcObject=d,s.value.onloadedmetadata=()=>{s.value.play(),a.value.width=s.value.videoWidth,a.value.height=s.value.videoHeight,r("status-change","Ready"),x()}}catch(g){console.error(g),r("camera-error",g.name==="NotAllowedError"?"NO_PERMISSION":"NO_HARDWARE")}},x=async()=>{i.isActive&&(s.value&&s.value.readyState>=2&&s.value.currentTime!==u&&(u=s.value.currentTime,o&&await o.send({image:s.value})),l=requestAnimationFrame(x))},S=g=>{if(!a.value)return;const d=a.value.getContext("2d"),T=a.value.width,A=a.value.height;d.save(),d.clearRect(0,0,T,A),d.translate(T,0),d.scale(-1,1),d.drawImage(g.image,0,0,T,A);let y="NONE";if(g.multiHandLandmarks&&g.multiHandLandmarks.length>0){const w=g.multiHandLandmarks[0];window.drawConnectors&&window.drawConnectors(d,w,window.HAND_CONNECTIONS,{color:"#00d2ff",lineWidth:2}),r("hand-x",w[0].x),r("hand-y",w[0].y);const R=(L,U)=>h(w[0],w[L])>h(w[0],w[U])*1.3,P=R(8,6),O=R(12,10),_=R(16,14),E=R(20,18);P&&O&&!_&&!E?y="VICTORY":!P&&!O&&!_&&!E?y="FIST":P&&O&&_&&E&&(y="PALM")}y===c?(f++,f>uM&&(r("gesture",y),r("lock-swipe",y==="VICTORY"||y==="FIST"))):(f=0,c=y,y==="NONE"&&r("lock-swipe",!1)),d.restore()};return e({startCamera:p}),_a(()=>{s.value?.srcObject&&s.value.srcObject.getTracks().forEach(g=>g.stop()),cancelAnimationFrame(l),o&&o.close()}),(g,d)=>(gn(),Cn("div",cM,[gt("video",{ref_key:"inputVideo",ref:s,playsinline:"","webkit-playsinline":"",style:{display:"none"}},null,512),Gd(gt("canvas",{ref_key:"previewCanvas",ref:a,class:"video-preview"},null,512),[[om,n.isActive]])]))}},hM=Aa(fM,[["__scopeId","data-v-5eacb425"]]),dM={key:0,id:"overlay"},pM={__name:"IntroOverlay",props:{visible:Boolean,showGuide:Boolean},emits:["select-mode"],setup(n){return(e,t)=>(gn(),Cn(rn,null,[n.visible?(gn(),Cn("div",dM,[t[2]||(t[2]=gt("h2",{class:"title"},"Lynx",-1)),t[3]||(t[3]=gt("div",{class:"msg-box"},"请选择交互方式",-1)),gt("button",{id:"btn-cam",class:"action-btn",onClick:t[0]||(t[0]=i=>e.$emit("select-mode","camera"))},"开启摄像头"),gt("button",{id:"btn-touch",class:"action-btn",onClick:t[1]||(t[1]=i=>e.$emit("select-mode","touch"))},"触屏 / 鼠标模式")])):es("",!0),gt("div",{id:"touch-guide",class:xr({show:n.showGuide})},"⟵ 滑动屏幕控制扩散 ⟶",2)],64))}},mM=Aa(pM,[["__scopeId","data-v-da6579d6"]]),gM={class:"app-container"},_M={key:0,class:"firework-hud"},xM={class:"hud-item"},vM={class:"hud-item"},SM={key:0,class:"status-tip"},MM={__name:"App",setup(n){const e=tn("2025"),t=tn(0),i=tn("warm"),r=tn(0),s=tn(""),a=tn(!0),o=tn(null),l=tn(!1),u=tn({idx:0,total:18,time:0}),c={2025:["hourglass","fireworks","beer"],2026:["rocket","bridge"]},f=Kl(()=>c[e.value][t.value]);let h=-1,p=-1,x=!1;const S=_=>{a.value=!1,_==="camera"&&o.value.startCamera()},g=_=>{e.value=_,t.value=0,r.value=0,i.value=_==="2025"?"warm":"cyber"},d=_=>{u.value=_},T=_=>{if(x||l.value||r.value===1)return;if(h===-1){h=_;return}const E=_-h;h=_;const L=.04;(e.value==="2025"&&E>L||e.value==="2026"&&E<-L)&&A()},A=()=>{x=!0,r.value=0;const _=c[e.value].length;t.value=(t.value+1)%_,s.value="切换场景...",setTimeout(()=>x=!1,1500)},y=_=>{if(x||r.value!==0)return;if(p===-1){p=_;return}const E=_-p;p=_,E<-.05&&f.value==="rocket"&&P(2e3)};let w=0;const R=_=>{if(!(x||r.value!==0))if(f.value==="fireworks"&&_==="VICTORY")w++,w>5&&P(0);else if((f.value==="beer"||f.value==="bridge")&&_==="FIST"){if(w++,w>8){const E=f.value==="beer"?5e3:2e3;P(E)}}else w=0},P=_=>{x=!0,r.value=1,s.value="特效触发!",_>0?setTimeout(()=>{r.value=2,setTimeout(()=>{x=!1},3e3)},_):setTimeout(()=>{x=!1},5e3)},O=_=>{s.value="摄像头错误: "+_};return(_,E)=>(gn(),Cn("div",gM,[bt(ZS,{currentShape:f.value,currentTheme:i.value,triggerState:r.value,onFireworkTick:d},null,8,["currentShape","currentTheme","triggerState"]),bt(tm,{name:"fade"},{default:yf(()=>[e.value==="2025"&&t.value===1&&r.value===1?(gn(),Cn("div",_M,[gt("div",xM,"发射: "+zi(u.value.idx)+" / "+zi(u.value.total),1),gt("div",vM,"周期: "+zi(u.value.time)+"s",1)])):es("",!0)]),_:1}),bt(hM,{ref_key:"cameraInputRef",ref:o,isActive:"",onStatusChange:E[0]||(E[0]=L=>s.value=L),onCameraError:O,onHandX:T,onHandY:y,onGesture:R,onLockSwipe:E[1]||(E[1]=L=>l.value=L)},null,512),bt(lM,{currentYear:e.value,sceneIndex:t.value,onSelectYear:g},null,8,["currentYear","sceneIndex"]),bt(mM,{visible:a.value,onSelectMode:S},null,8,["visible"]),s.value?(gn(),Cn("div",SM,zi(s.value),1)):es("",!0)]))}};bm(MM).mount("#app");
