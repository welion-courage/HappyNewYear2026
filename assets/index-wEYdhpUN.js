(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ll(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},cr=[],Cn=()=>{},ju=()=>!1,fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Il=n=>n.startsWith("onUpdate:"),At=Object.assign,Ul=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ed=Object.prototype.hasOwnProperty,nt=(n,e)=>ed.call(n,e),Ge=Array.isArray,ur=n=>ha(n)==="[object Map]",Zu=n=>ha(n)==="[object Set]",qe=n=>typeof n=="function",St=n=>typeof n=="string",Ei=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Ju=n=>(dt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Qu=Object.prototype.toString,ha=n=>Qu.call(n),td=n=>ha(n).slice(8,-1),ef=n=>ha(n)==="[object Object]",Nl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},nd=/-\w/g,xi=da(n=>n.replace(nd,e=>e.slice(1).toUpperCase())),id=/\B([A-Z])/g,Wi=da(n=>n.replace(id,"-$1").toLowerCase()),tf=da(n=>n.charAt(0).toUpperCase()+n.slice(1)),Da=da(n=>n?`on${tf(n)}`:""),_i=(n,e)=>!Object.is(n,e),La=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},sd=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let xc;const pa=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?cd(i):Fl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||dt(n))return n}const ad=/;(?![^(]*\))/g,od=/:([^]+)/,ld=/\/\*[^]*?\*\//g;function cd(n){const e={};return n.replace(ld,"").split(ad).forEach(t=>{if(t){const i=t.split(od);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xr(n){let e="";if(St(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=xr(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fd=Ll(ud);function rf(n){return!!n||n===""}const sf=n=>!!(n&&n.__v_isRef===!0),fr=n=>St(n)?n:n==null?"":Ge(n)||dt(n)&&(n.toString===Qu||!qe(n.toString))?sf(n)?fr(n.value):JSON.stringify(n,af,2):String(n),af=(n,e)=>sf(e)?af(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ia(i,s)+" =>"]=r,t),{})}:Zu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ia(t))}:Ei(e)?Ia(e):dt(e)&&!Ge(e)&&!ef(e)?String(e):e,Ia=(n,e="")=>{var t;return Ei(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let kt;class hd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dd(){return kt}let ht;const Ua=new WeakSet;class of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vc(this),uf(this);const e=ht,t=mn;ht=this,mn=!0;try{return this.fn()}finally{ff(this),ht=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zl(e);this.deps=this.depsTail=void 0,vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yo(this)&&this.run()}get dirty(){return yo(this)}}let lf=0,Gr,kr;function cf(n,e=!1){if(n.flags|=8,e){n.next=kr,kr=n;return}n.next=Gr,Gr=n}function Ol(){lf++}function Bl(){if(--lf>0)return;if(kr){let e=kr;for(kr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gr;){let e=Gr;for(Gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ff(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),zl(i),pd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function yo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kr)||(n.globalVersion=Kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yo(n))))return;n.flags|=2;const e=n.dep,t=ht,i=mn;ht=n,mn=!0;try{uf(n);const r=n.fn(n._value);(e.version===0||_i(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,mn=i,ff(n),n.flags&=-3}}function zl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)zl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const df=[];function Zn(){df.push(mn),mn=!1}function Jn(){const n=df.pop();mn=n===void 0?!0:n}function vc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Kr=0;class md{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!mn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new md(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){Ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bl()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bo=new WeakMap,Gi=Symbol(""),To=Symbol(""),jr=Symbol("");function Rt(n,e,t){if(mn&&ht){let i=bo.get(n);i||bo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Vl),r.map=i,r.key=t),r.track()}}function Wn(n,e,t,i,r,s){const a=bo.get(n);if(!a){Kr++;return}const o=l=>{l&&l.trigger()};if(Ol(),e==="clear")a.forEach(o);else{const l=Ge(n),u=l&&Nl(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===jr||!Ei(h)&&h>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(jr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Gi)),ur(n)&&o(a.get(To)));break;case"delete":l||(o(a.get(Gi)),ur(n)&&o(a.get(To)));break;case"set":ur(n)&&o(a.get(Gi));break}}Bl()}function qi(n){const e=et(n);return e===n?e:(Rt(e,"iterate",jr),gn(n)?e:e.map(Qn))}function Hl(n){return Rt(n=et(n),"iterate",jr),n}function hi(n,e){return vi(n)?hr(n)?Zr(Qn(e)):Zr(e):Qn(e)}const gd={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,n=>hi(this,n))},concat(...n){return qi(this).concat(...n.map(e=>Ge(e)?qi(e):e))},entries(){return Na(this,"entries",n=>(n[1]=hi(this,n[1]),n))},every(n,e){return Nn(this,"every",n,e,void 0,arguments)},filter(n,e){return Nn(this,"filter",n,e,t=>t.map(i=>hi(this,i)),arguments)},find(n,e){return Nn(this,"find",n,e,t=>hi(this,t),arguments)},findIndex(n,e){return Nn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Nn(this,"findLast",n,e,t=>hi(this,t),arguments)},findLastIndex(n,e){return Nn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Nn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fa(this,"includes",n)},indexOf(...n){return Fa(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Fa(this,"lastIndexOf",n)},map(n,e){return Nn(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return Sc(this,"reduce",n,e)},reduceRight(n,...e){return Sc(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return Nn(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return Na(this,"values",n=>hi(this,n))}};function Na(n,e,t){const i=Hl(n),r=i[e]();return i!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const _d=Array.prototype;function Nn(n,e,t,i,r,s){const a=Hl(n),o=a!==n&&!gn(n),l=a[e];if(l!==_d[e]){const f=l.apply(n,s);return o?Qn(f):f}let u=t;a!==n&&(o?u=function(f,h){return t.call(this,hi(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function Sc(n,e,t,i){const r=Hl(n);let s=t;return r!==n&&(gn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,hi(n,o),l,n)}),r[e](s,...i)}function Fa(n,e,t){const i=et(n);Rt(i,"iterate",jr);const r=i[e](...t);return(r===-1||r===!1)&&Xl(t[0])?(t[0]=et(t[0]),i[e](...t)):r}function wr(n,e,t=[]){Zn(),Ol();const i=et(n)[e].apply(n,t);return Bl(),Jn(),i}const xd=Ll("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ei));function vd(n){Ei(n)||(n=String(n));const e=et(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Rd:Sf:s?vf:xf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ge(e);if(!r){let l;if(a&&(l=gd[t]))return l;if(t==="hasOwnProperty")return vd}const o=Reflect.get(e,t,Dt(e)?e:i);if((Ei(t)?mf.has(t):xd(t))||(r||Rt(e,"get",t),s))return o;if(Dt(o)){const l=a&&Nl(t)?o:o.value;return r&&dt(l)?wo(l):l}return dt(o)?r?wo(o):kl(o):o}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ge(e)&&Nl(t);if(!this._isShallow){const u=vi(s);if(!gn(i)&&!vi(i)&&(s=et(s),i=et(i)),!a&&Dt(s)&&!Dt(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Dt(e)?e:r);return e===et(r)&&(o?_i(i,s)&&Wn(e,"set",t,i):Wn(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ei(t)||!mf.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Ge(e)?"length":Gi),Reflect.ownKeys(e)}}class Sd extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Md=new _f,Ed=new Sd,yd=new _f(!0);const Ao=n=>n,xs=n=>Reflect.getPrototypeOf(n);function bd(n,e,t){return function(...i){const r=this.__v_raw,s=et(r),a=ur(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ao:e?Zr:Qn;return!e&&Rt(s,"iterate",l?To:Gi),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function vs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Td(n,e){const t={get(r){const s=this.__v_raw,a=et(s),o=et(r);n||(_i(r,o)&&Rt(a,"get",r),Rt(a,"get",o));const{has:l}=xs(a),u=e?Ao:n?Zr:Qn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(et(r),"iterate",Gi),r.size},has(r){const s=this.__v_raw,a=et(s),o=et(r);return n||(_i(r,o)&&Rt(a,"has",r),Rt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=et(o),u=e?Ao:n?Zr:Qn;return!n&&Rt(l,"iterate",Gi),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return At(t,n?{add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear")}:{add(r){!e&&!gn(r)&&!vi(r)&&(r=et(r));const s=et(this);return xs(s).has.call(s,r)||(s.add(r),Wn(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!vi(s)&&(s=et(s));const a=et(this),{has:o,get:l}=xs(a);let u=o.call(a,r);u||(r=et(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?_i(s,c)&&Wn(a,"set",r,s):Wn(a,"add",r,s),this},delete(r){const s=et(this),{has:a,get:o}=xs(s);let l=a.call(s,r);l||(r=et(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Wn(s,"delete",r,void 0),u},clear(){const r=et(this),s=r.size!==0,a=r.clear();return s&&Wn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bd(r,n,e)}),t}function Gl(n,e){const t=Td(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Ad={get:Gl(!1,!1)},wd={get:Gl(!1,!0)},Cd={get:Gl(!0,!1)};const xf=new WeakMap,vf=new WeakMap,Sf=new WeakMap,Rd=new WeakMap;function Pd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dd(n){return n.__v_skip||!Object.isExtensible(n)?0:Pd(td(n))}function kl(n){return vi(n)?n:Wl(n,!1,Md,Ad,xf)}function Ld(n){return Wl(n,!1,yd,wd,vf)}function wo(n){return Wl(n,!0,Ed,Cd,Sf)}function Wl(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Dd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function hr(n){return vi(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function Xl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Id(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&nf(n,"__v_skip",!0),n}const Qn=n=>dt(n)?kl(n):n,Zr=n=>dt(n)?wo(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function tn(n){return Ud(n,!1)}function Ud(n,e){return Dt(n)?n:new Nd(n,e)}class Nd{constructor(e,t){this.dep=new Vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Qn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||vi(e);e=i?e:et(e),_i(e,t)&&(this._rawValue=e,this._value=i?e:Qn(e),this.dep.trigger())}}function Fd(n){return Dt(n)?n.value:n}const Od={get:(n,e,t)=>e==="__v_raw"?n:Fd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return hr(n)?n:new Proxy(n,Od)}class Bd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return cf(this,!0),!0}get value(){const e=this.dep.track();return hf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zd(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new Bd(i,r,t)}const Ss={},ea=new WeakMap;let Ni;function Vd(n,e=!1,t=Ni){if(t){let i=ea.get(t);i||ea.set(t,i=[]),i.push(n)}}function Hd(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=T=>r?T:gn(T)||r===!1||r===0?Xn(T,1):Xn(T);let c,f,h,p,_=!1,v=!1;if(Dt(n)?(f=()=>n.value,_=gn(n)):hr(n)?(f=()=>u(n),_=!0):Ge(n)?(v=!0,_=n.some(T=>hr(T)||gn(T)),f=()=>n.map(T=>{if(Dt(T))return T.value;if(hr(T))return u(T);if(qe(T))return l?l(T,2):T()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Zn();try{h()}finally{Jn()}}const T=Ni;Ni=c;try{return l?l(n,3,[p]):n(p)}finally{Ni=T}}:f=Cn,e&&r){const T=f,C=r===!0?1/0:r;f=()=>Xn(T(),C)}const g=dd(),d=()=>{c.stop(),g&&g.active&&Ul(g.effects,c)};if(s&&e){const T=e;e=(...C)=>{T(...C),d()}}let b=v?new Array(n.length).fill(Ss):Ss;const w=T=>{if(!(!(c.flags&1)||!c.dirty&&!T))if(e){const C=c.run();if(r||_||(v?C.some((L,R)=>_i(L,b[R])):_i(C,b))){h&&h();const L=Ni;Ni=c;try{const R=[C,b===Ss?void 0:v&&b[0]===Ss?[]:b,p];b=C,l?l(e,3,R):e(...R)}finally{Ni=L}}}else c.run()};return o&&o(w),c=new of(f),c.scheduler=a?()=>a(w,!1):w,p=T=>Vd(T,!1,c),h=c.onStop=()=>{const T=ea.get(c);if(T){if(l)l(T,4);else for(const C of T)C();ea.delete(c)}},e?i?w(!0):b=c.run():a?a(w.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Xn(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dt(n))Xn(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)Xn(n[i],e,t);else if(Zu(n)||ur(n))n.forEach(i=>{Xn(i,e,t)});else if(ef(n)){for(const i in n)Xn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xn(n[i],e,t)}return n}function cs(n,e,t,i){try{return i?n(...i):n()}catch(r){ma(r,e,t)}}function xn(n,e,t,i){if(qe(n)){const r=cs(n,e,t,i);return r&&Ju(r)&&r.catch(s=>{ma(s,e,t)}),r}if(Ge(n)){const r=[];for(let s=0;s<n.length;s++)r.push(xn(n[s],e,t,i));return r}}function ma(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){Zn(),cs(s,null,10,[n,l,u]),Jn();return}}Gd(n,t,r,i,a)}function Gd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let yn=-1;const dr=[];let di=null,lr=0;const Ef=Promise.resolve();let ta=null;function kd(n){const e=ta||Ef;return n?e.then(this?n.bind(this):n):e}function Wd(n){let e=yn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=Jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ql(n){if(!(n.flags&1)){const e=Jr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=Jr(t)?Ot.push(n):Ot.splice(Wd(e),0,n),n.flags|=1,yf()}}function yf(){ta||(ta=Ef.then(Tf))}function Xd(n){Ge(n)?dr.push(...n):di&&n.id===-1?di.splice(lr+1,0,n):n.flags&1||(dr.push(n),n.flags|=1),yf()}function Mc(n,e,t=yn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bf(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>Jr(t)-Jr(i));if(dr.length=0,di){di.push(...e);return}for(di=e,lr=0;lr<di.length;lr++){const t=di[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}di=null,lr=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tf(n){try{for(yn=0;yn<Ot.length;yn++){const e=Ot[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Ot.length;yn++){const e=Ot[yn];e&&(e.flags&=-2)}yn=-1,Ot.length=0,bf(),ta=null,(Ot.length||dr.length)&&Tf()}}let ln=null,Af=null;function na(n){const e=ln;return ln=n,Af=n&&n.type.__scopeId||null,e}function wf(n,e=ln,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&sa(-1);const s=na(e);let a;try{a=n(...r)}finally{na(s),i._d&&sa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function qd(n,e){if(ln===null)return n;const t=Ma(ln),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ct]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Xn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ti(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Zn(),xn(l,t,8,[n.el,o,n,e]),Jn())}}function Yd(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Xs(n,e,t=!1){const i=ih();if(i||mr){let r=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const $d=Symbol.for("v-scx"),Kd=()=>Xs($d);function pr(n,e,t){return Cf(n,e,t)}function Cf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:a}=t,o=At({},t),l=e&&i||!e&&s!=="post";let u;if(ns){if(s==="sync"){const p=Kd();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Cn,p.resume=Cn,p.pause=Cn,p}}const c=zt;o.call=(p,_,v)=>xn(p,c,_,v);let f=!1;s==="post"?o.scheduler=p=>{jt(p,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():ql(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Hd(n,e,o);return ns&&(u?u.push(h):l&&h()),h}function jd(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Rf(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const a=us(this),o=Cf(r,s.bind(i),t);return a(),o}function Rf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Zd=Symbol("_vte"),Pf=n=>n.__isTeleport,kn=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function Jd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yl(()=>{n.isMounted=!0}),xa(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],Df={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Lf=n=>{const e=n.subTree;return e.component?Lf(e.component):e},Qd={name:"BaseTransition",props:Df,setup(n,{slots:e}){const t=ih(),i=Jd();return()=>{const r=e.default&&Nf(e.default(),!0);if(!r||!r.length)return;const s=If(r),a=et(n),{mode:o}=a;if(i.isLeaving)return Oa(s);const l=Ec(s);if(!l)return Oa(s);let u=Co(l,a,i,t,f=>u=f);l.type!==Bt&&Qr(l,u);let c=t.subTree&&Ec(t.subTree);if(c&&c.type!==Bt&&!Oi(c,l)&&Lf(t).type!==Bt){let f=Co(c,a,i,t);if(Qr(c,f),o==="out-in"&&l.type!==Bt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Oa(s);o==="in-out"&&l.type!==Bt?f.delayLeave=(h,p,_)=>{const v=Uf(i,c);v[String(c.key)]=c,h[kn]=()=>{p(),h[kn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function If(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bt){e=t;break}}return e}const ep=Qd;function Uf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Co(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:g,onAppear:d,onAfterAppear:b,onAppearCancelled:w}=e,T=String(n.key),C=Uf(t,n),L=(x,E)=>{x&&xn(x,i,9,E)},R=(x,E)=>{const U=E[1];L(x,E),Ge(x)?x.every(D=>D.length<=1)&&U():x.length<=1&&U()},z={mode:a,persisted:o,beforeEnter(x){let E=l;if(!t.isMounted)if(s)E=g||l;else return;x[kn]&&x[kn](!0);const U=C[T];U&&Oi(n,U)&&U.el[kn]&&U.el[kn](),L(E,[x])},enter(x){let E=u,U=c,D=f;if(!t.isMounted)if(s)E=d||u,U=b||c,D=w||f;else return;let F=!1;const j=x[Ms]=Z=>{F||(F=!0,Z?L(D,[x]):L(U,[x]),z.delayedLeave&&z.delayedLeave(),x[Ms]=void 0)};E?R(E,[x,j]):j()},leave(x,E){const U=String(n.key);if(x[Ms]&&x[Ms](!0),t.isUnmounting)return E();L(h,[x]);let D=!1;const F=x[kn]=j=>{D||(D=!0,E(),j?L(v,[x]):L(_,[x]),x[kn]=void 0,C[U]===n&&delete C[U])};C[U]=n,p?R(p,[x,F]):F()},clone(x){const E=Co(x,e,t,i,r);return r&&r(E),E}};return z}function Oa(n){if(ga(n))return n=Si(n),n.children=null,n}function Ec(n){if(!ga(n))return Pf(n.type)&&n.children?If(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Qr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Qr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Nf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===sn?(a.patchFlag&128&&r++,i=i.concat(Nf(a.children,e,o))):(e||a.type!==Bt)&&i.push(o!=null?Si(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ia=new WeakMap;function Wr(n,e,t,i,r=!1){if(Ge(n)){n.forEach((_,v)=>Wr(_,e&&(Ge(e)?e[v]:e),t,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ma(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===ct?o.refs={}:o.refs,f=o.setupState,h=et(f),p=f===ct?ju:_=>nt(h,_);if(u!=null&&u!==l){if(yc(e),St(u))c[u]=null,p(u)&&(f[u]=null);else if(Dt(u)){u.value=null;const _=e;_.k&&(c[_.k]=null)}}if(qe(l))cs(l,o,12,[a,c]);else{const _=St(l),v=Dt(l);if(_||v){const g=()=>{if(n.f){const d=_?p(l)?f[l]:c[l]:l.value;if(r)Ge(d)&&Ul(d,s);else if(Ge(d))d.includes(s)||d.push(s);else if(_)c[l]=[s],p(l)&&(f[l]=c[l]);else{const b=[s];l.value=b,n.k&&(c[n.k]=b)}}else _?(c[l]=a,p(l)&&(f[l]=a)):v&&(l.value=a,n.k&&(c[n.k]=a))};if(a){const d=()=>{g(),ia.delete(n)};d.id=-1,ia.set(n,d),jt(d,t)}else yc(n),g()}}}function yc(n){const e=ia.get(n);e&&(e.flags|=8,ia.delete(n))}pa().requestIdleCallback;pa().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function tp(n,e){Of(n,"a",e)}function np(n,e){Of(n,"da",e)}function Of(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_a(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&ip(i,e,t,r),r=r.parent}}function ip(n,e,t,i){const r=_a(e,n,i,!0);Bf(()=>{Ul(i[e],r)},t)}function _a(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Zn();const o=us(t),l=xn(e,t,n,a);return o(),Jn(),l});return i?r.unshift(s):r.push(s),s}}const ri=n=>(e,t=zt)=>{(!ns||n==="sp")&&_a(n,(...i)=>e(...i),t)},rp=ri("bm"),Yl=ri("m"),sp=ri("bu"),ap=ri("u"),xa=ri("bum"),Bf=ri("um"),op=ri("sp"),lp=ri("rtg"),cp=ri("rtc");function up(n,e=zt){_a("ec",n,e)}const fp=Symbol.for("v-ndc"),Ro=n=>n?rh(n)?Ma(n):Ro(n.parent):null,qr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ro(n.parent),$root:n=>Ro(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vf(n),$forceUpdate:n=>n.f||(n.f=()=>{ql(n.update)}),$nextTick:n=>n.n||(n.n=kd.bind(n.proxy)),$watch:n=>jd.bind(n)}),Ba=(n,e)=>n!==ct&&!n.__isScriptSetup&&nt(n,e),hp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ba(i,e))return a[e]=1,i[e];if(r!==ct&&nt(r,e))return a[e]=2,r[e];if(nt(s,e))return a[e]=3,s[e];if(t!==ct&&nt(t,e))return a[e]=4,t[e];Po&&(a[e]=0)}}const u=qr[e];let c,f;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==ct&&nt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ba(r,e)?(r[e]=t,!0):i!==ct&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==ct&&o[0]!=="$"&&nt(n,o)||Ba(e,o)||nt(s,o)||nt(i,o)||nt(qr,o)||nt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function bc(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Po=!0;function dp(n){const e=Vf(n),t=n.proxy,i=n.ctx;Po=!1,e.beforeCreate&&Tc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:g,beforeDestroy:d,beforeUnmount:b,destroyed:w,unmounted:T,render:C,renderTracked:L,renderTriggered:R,errorCaptured:z,serverPrefetch:x,expose:E,inheritAttrs:U,components:D,directives:F,filters:j}=e;if(u&&pp(u,i,null),a)for(const V in a){const ee=a[V];qe(ee)&&(i[V]=ee.bind(t))}if(r){const V=r.call(t,t);dt(V)&&(n.data=kl(V))}if(Po=!0,s)for(const V in s){const ee=s[V],se=qe(ee)?ee.bind(t,t):qe(ee.get)?ee.get.bind(t,t):Cn,re=!qe(ee)&&qe(ee.set)?ee.set.bind(t):Cn,fe=Zl({get:se,set:re});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Te=>fe.value=Te})}if(o)for(const V in o)zf(o[V],i,t,V);if(l){const V=qe(l)?l.call(t):l;Reflect.ownKeys(V).forEach(ee=>{Yd(ee,V[ee])})}c&&Tc(c,n,"c");function q(V,ee){Ge(ee)?ee.forEach(se=>V(se.bind(t))):ee&&V(ee.bind(t))}if(q(rp,f),q(Yl,h),q(sp,p),q(ap,_),q(tp,v),q(np,g),q(up,z),q(cp,L),q(lp,R),q(xa,b),q(Bf,T),q(op,x),Ge(E))if(E.length){const V=n.exposed||(n.exposed={});E.forEach(ee=>{Object.defineProperty(V,ee,{get:()=>t[ee],set:se=>t[ee]=se,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Cn&&(n.render=C),U!=null&&(n.inheritAttrs=U),D&&(n.components=D),F&&(n.directives=F),x&&Ff(n)}function pp(n,e,t=Cn){Ge(n)&&(n=Do(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=Xs(r.from||i,r.default,!0):s=Xs(r.from||i):s=Xs(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Tc(n,e,t){xn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,i){let r=i.includes(".")?Rf(t,i):()=>t[i];if(St(n)){const s=e[n];qe(s)&&pr(r,s)}else if(qe(n))pr(r,n.bind(t));else if(dt(n))if(Ge(n))n.forEach(s=>zf(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&pr(r,s,n)}}function Vf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>ra(l,u,a,!0)),ra(l,e,a)),dt(e)&&s.set(e,l),l}function ra(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ra(n,s,t,!0),r&&r.forEach(a=>ra(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=mp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const mp={data:Ac,props:wc,emits:wc,methods:Br,computed:Br,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Br,directives:Br,watch:_p,provide:Ac,inject:gp};function Ac(n,e){return e?n?function(){return At(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function gp(n,e){return Br(Do(n),Do(e))}function Do(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?At(Object.create(null),n,e):e}function wc(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:At(Object.create(null),bc(n),bc(e??{})):e}function _p(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function Hf(){return{app:null,config:{isNativeTag:ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xp=0;function vp(n,e){return function(i,r=null){qe(i)||(i=At({},i)),r!=null&&!dt(r)&&(r=null);const s=Hf(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:xp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Jp,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&qe(c.install)?(a.add(c),c.install(u,...f)):qe(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||bt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,c,h),l=!0,u._container=c,c.__vue_app__=u,Ma(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(xn(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=mr;mr=u;try{return c()}finally{mr=f}}};return u}}let mr=null;const Sp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xi(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function Mp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),a=s&&Sp(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>St(c)?c.trim():c)),a.number&&(r=t.map(rd)));let o,l=i[o=Da(e)]||i[o=Da(xi(e))];!l&&s&&(l=i[o=Da(Wi(e))]),l&&xn(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,xn(u,n,6,r)}}const Ep=new WeakMap;function Gf(n,e,t=!1){const i=t?Ep:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!qe(n)){const l=u=>{const c=Gf(u,e,!0);c&&(o=!0,At(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(dt(n)&&i.set(n,null),null):(Ge(s)?s.forEach(l=>a[l]=null):At(a,s),dt(n)&&i.set(n,a),a)}function va(n,e){return!n||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Wi(e))||nt(n,e))}function Cc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n,g=na(n);let d,b;try{if(t.shapeFlag&4){const T=r||i,C=T;d=bn(u.call(C,T,c,f,p,h,_)),b=o}else{const T=e;d=bn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),b=e.props?o:yp(o)}}catch(T){Yr.length=0,ma(T,n,1),d=bt(Bt)}let w=d;if(b&&v!==!1){const T=Object.keys(b),{shapeFlag:C}=w;T.length&&C&7&&(s&&T.some(Il)&&(b=bp(b,s)),w=Si(w,b,!1,!0))}return t.dirs&&(w=Si(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Qr(w,t.transition),d=w,na(g),d}const yp=n=>{let e;for(const t in n)(t==="class"||t==="style"||fa(t))&&((e||(e={}))[t]=n[t]);return e},bp=(n,e)=>{const t={};for(const i in n)(!Il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rc(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(a[h]!==i[h]&&!va(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Rc(i,a,u):!0:!!a;return!1}function Rc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!va(t,s))return!0}return!1}function Ap({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const kf={},Wf=()=>Object.create(kf),Xf=n=>Object.getPrototypeOf(n)===kf;function wp(n,e,t,i=!1){const r={},s=Wf();n.propsDefaults=Object.create(null),qf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ld(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Cp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=et(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(va(n.emitsOptions,h))continue;const p=e[h];if(l)if(nt(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const _=xi(h);r[_]=Lo(l,o,_,p,n,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{qf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!nt(e,f)&&((c=Wi(f))===f||!nt(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Lo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!nt(e,f))&&(delete s[f],u=!0)}u&&Wn(n.attrs,"set","")}function qf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Hr(l))continue;const u=e[l];let c;r&&nt(r,c=xi(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:va(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=et(t),u=o||ct;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Lo(r,l,f,u[f],n,!nt(u,f))}}return a}function Lo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=nt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=us(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const Rp=new WeakMap;function Yf(n,e,t=!1){const i=t?Rp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!qe(n)){const c=f=>{l=!0;const[h,p]=Yf(f,e,!0);At(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return dt(n)&&i.set(n,cr),cr;if(Ge(s))for(let c=0;c<s.length;c++){const f=xi(s[c]);Pc(f)&&(a[f]=ct)}else if(s)for(const c in s){const f=xi(c);if(Pc(f)){const h=s[c],p=a[f]=Ge(h)||qe(h)?{type:h}:At({},h),_=p.type;let v=!1,g=!0;if(Ge(_))for(let d=0;d<_.length;++d){const b=_[d],w=qe(b)&&b.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(g=!1)}else v=qe(_)&&_.name==="Boolean";p[0]=v,p[1]=g,(v||nt(p,"default"))&&o.push(f)}}const u=[a,o];return dt(n)&&i.set(n,u),u}function Pc(n){return n[0]!=="$"&&!Hr(n)}const $l=n=>n==="_"||n==="_ctx"||n==="$stable",Kl=n=>Ge(n)?n.map(bn):[bn(n)],Pp=(n,e,t)=>{if(e._n)return e;const i=wf((...r)=>Kl(e(...r)),t);return i._c=!1,i},$f=(n,e,t)=>{const i=n._ctx;for(const r in n){if($l(r))continue;const s=n[r];if(qe(s))e[r]=Pp(r,s,i);else if(s!=null){const a=Kl(s);e[r]=()=>a}}},Kf=(n,e)=>{const t=Kl(e);n.slots.default=()=>t},jf=(n,e,t)=>{for(const i in e)(t||!$l(i))&&(n[i]=e[i])},Dp=(n,e,t)=>{const i=n.slots=Wf();if(n.vnode.shapeFlag&32){const r=e._;r?(jf(i,e,t),t&&nf(i,"_",r,!0)):$f(e,i)}else e&&Kf(n,e)},Lp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:jf(r,e,t):(s=!e.$stable,$f(e,r)),a=e}else e&&(Kf(n,e),a={default:1});if(s)for(const o in r)!$l(o)&&a[o]==null&&delete r[o]},jt=Op;function Ip(n){return Up(n)}function Up(n,e){const t=pa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=Cn,insertStaticContent:_}=n,v=(y,P,O,J=null,X=null,ne=null,A=void 0,ue=null,ae=!!P.dynamicChildren)=>{if(y===P)return;y&&!Oi(y,P)&&(J=te(y),Te(y,X,ne,!0),y=null),P.patchFlag===-2&&(ae=!1,P.dynamicChildren=null);const{type:ie,ref:oe,shapeFlag:S}=P;switch(ie){case Sa:g(y,P,O,J);break;case Bt:d(y,P,O,J);break;case Va:y==null&&b(P,O,J,A);break;case sn:D(y,P,O,J,X,ne,A,ue,ae);break;default:S&1?C(y,P,O,J,X,ne,A,ue,ae):S&6?F(y,P,O,J,X,ne,A,ue,ae):(S&64||S&128)&&ie.process(y,P,O,J,X,ne,A,ue,ae,xe)}oe!=null&&X?Wr(oe,y&&y.ref,ne,P||y,!P):oe==null&&y&&y.ref!=null&&Wr(y.ref,null,ne,y,!0)},g=(y,P,O,J)=>{if(y==null)i(P.el=o(P.children),O,J);else{const X=P.el=y.el;P.children!==y.children&&u(X,P.children)}},d=(y,P,O,J)=>{y==null?i(P.el=l(P.children||""),O,J):P.el=y.el},b=(y,P,O,J)=>{[y.el,y.anchor]=_(y.children,P,O,J,y.el,y.anchor)},w=({el:y,anchor:P},O,J)=>{let X;for(;y&&y!==P;)X=h(y),i(y,O,J),y=X;i(P,O,J)},T=({el:y,anchor:P})=>{let O;for(;y&&y!==P;)O=h(y),r(y),y=O;r(P)},C=(y,P,O,J,X,ne,A,ue,ae)=>{if(P.type==="svg"?A="svg":P.type==="math"&&(A="mathml"),y==null)L(P,O,J,X,ne,A,ue,ae);else{const ie=y.el&&y.el._isVueCE?y.el:null;try{ie&&ie._beginPatch(),x(y,P,X,ne,A,ue,ae)}finally{ie&&ie._endPatch()}}},L=(y,P,O,J,X,ne,A,ue)=>{let ae,ie;const{props:oe,shapeFlag:S,transition:m,dirs:I}=y;if(ae=y.el=a(y.type,ne,oe&&oe.is,oe),S&8?c(ae,y.children):S&16&&z(y.children,ae,null,J,X,za(y,ne),A,ue),I&&Ti(y,null,J,"created"),R(ae,y,y.scopeId,A,J),oe){for(const Q in oe)Q!=="value"&&!Hr(Q)&&s(ae,Q,null,oe[Q],ne,J);"value"in oe&&s(ae,"value",null,oe.value,ne),(ie=oe.onVnodeBeforeMount)&&Mn(ie,J,y)}I&&Ti(y,null,J,"beforeMount");const W=Np(X,m);W&&m.beforeEnter(ae),i(ae,P,O),((ie=oe&&oe.onVnodeMounted)||W||I)&&jt(()=>{ie&&Mn(ie,J,y),W&&m.enter(ae),I&&Ti(y,null,J,"mounted")},X)},R=(y,P,O,J,X)=>{if(O&&p(y,O),J)for(let ne=0;ne<J.length;ne++)p(y,J[ne]);if(X){let ne=X.subTree;if(P===ne||eh(ne.type)&&(ne.ssContent===P||ne.ssFallback===P)){const A=X.vnode;R(y,A,A.scopeId,A.slotScopeIds,X.parent)}}},z=(y,P,O,J,X,ne,A,ue,ae=0)=>{for(let ie=ae;ie<y.length;ie++){const oe=y[ie]=ue?pi(y[ie]):bn(y[ie]);v(null,oe,P,O,J,X,ne,A,ue)}},x=(y,P,O,J,X,ne,A)=>{const ue=P.el=y.el;let{patchFlag:ae,dynamicChildren:ie,dirs:oe}=P;ae|=y.patchFlag&16;const S=y.props||ct,m=P.props||ct;let I;if(O&&Ai(O,!1),(I=m.onVnodeBeforeUpdate)&&Mn(I,O,P,y),oe&&Ti(P,y,O,"beforeUpdate"),O&&Ai(O,!0),(S.innerHTML&&m.innerHTML==null||S.textContent&&m.textContent==null)&&c(ue,""),ie?E(y.dynamicChildren,ie,ue,O,J,za(P,X),ne):A||ee(y,P,ue,null,O,J,za(P,X),ne,!1),ae>0){if(ae&16)U(ue,S,m,O,X);else if(ae&2&&S.class!==m.class&&s(ue,"class",null,m.class,X),ae&4&&s(ue,"style",S.style,m.style,X),ae&8){const W=P.dynamicProps;for(let Q=0;Q<W.length;Q++){const k=W[Q],Ae=S[k],pe=m[k];(pe!==Ae||k==="value")&&s(ue,k,Ae,pe,X,O)}}ae&1&&y.children!==P.children&&c(ue,P.children)}else!A&&ie==null&&U(ue,S,m,O,X);((I=m.onVnodeUpdated)||oe)&&jt(()=>{I&&Mn(I,O,P,y),oe&&Ti(P,y,O,"updated")},J)},E=(y,P,O,J,X,ne,A)=>{for(let ue=0;ue<P.length;ue++){const ae=y[ue],ie=P[ue],oe=ae.el&&(ae.type===sn||!Oi(ae,ie)||ae.shapeFlag&198)?f(ae.el):O;v(ae,ie,oe,null,J,X,ne,A,!0)}},U=(y,P,O,J,X)=>{if(P!==O){if(P!==ct)for(const ne in P)!Hr(ne)&&!(ne in O)&&s(y,ne,P[ne],null,X,J);for(const ne in O){if(Hr(ne))continue;const A=O[ne],ue=P[ne];A!==ue&&ne!=="value"&&s(y,ne,ue,A,X,J)}"value"in O&&s(y,"value",P.value,O.value,X)}},D=(y,P,O,J,X,ne,A,ue,ae)=>{const ie=P.el=y?y.el:o(""),oe=P.anchor=y?y.anchor:o("");let{patchFlag:S,dynamicChildren:m,slotScopeIds:I}=P;I&&(ue=ue?ue.concat(I):I),y==null?(i(ie,O,J),i(oe,O,J),z(P.children||[],O,oe,X,ne,A,ue,ae)):S>0&&S&64&&m&&y.dynamicChildren&&y.dynamicChildren.length===m.length?(E(y.dynamicChildren,m,O,X,ne,A,ue),(P.key!=null||X&&P===X.subTree)&&Zf(y,P,!0)):ee(y,P,O,oe,X,ne,A,ue,ae)},F=(y,P,O,J,X,ne,A,ue,ae)=>{P.slotScopeIds=ue,y==null?P.shapeFlag&512?X.ctx.activate(P,O,J,A,ae):j(P,O,J,X,ne,A,ae):Z(y,P,ae)},j=(y,P,O,J,X,ne,A)=>{const ue=y.component=Xp(y,J,X);if(ga(y)&&(ue.ctx.renderer=xe),qp(ue,!1,A),ue.asyncDep){if(X&&X.registerDep(ue,q,A),!y.el){const ae=ue.subTree=bt(Bt);d(null,ae,P,O),y.placeholder=ae.el}}else q(ue,y,P,O,X,ne,A)},Z=(y,P,O)=>{const J=P.component=y.component;if(Tp(y,P,O))if(J.asyncDep&&!J.asyncResolved){V(J,P,O);return}else J.next=P,J.update();else P.el=y.el,J.vnode=P},q=(y,P,O,J,X,ne,A)=>{const ue=()=>{if(y.isMounted){let{next:S,bu:m,u:I,parent:W,vnode:Q}=y;{const Fe=Jf(y);if(Fe){S&&(S.el=Q.el,V(y,S,A)),Fe.asyncDep.then(()=>{y.isUnmounted||ue()});return}}let k=S,Ae;Ai(y,!1),S?(S.el=Q.el,V(y,S,A)):S=Q,m&&La(m),(Ae=S.props&&S.props.onVnodeBeforeUpdate)&&Mn(Ae,W,S,Q),Ai(y,!0);const pe=Cc(y),Re=y.subTree;y.subTree=pe,v(Re,pe,f(Re.el),te(Re),y,X,ne),S.el=pe.el,k===null&&Ap(y,pe.el),I&&jt(I,X),(Ae=S.props&&S.props.onVnodeUpdated)&&jt(()=>Mn(Ae,W,S,Q),X)}else{let S;const{el:m,props:I}=P,{bm:W,m:Q,parent:k,root:Ae,type:pe}=y,Re=Xr(P);Ai(y,!1),W&&La(W),!Re&&(S=I&&I.onVnodeBeforeMount)&&Mn(S,k,P),Ai(y,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(pe);const Fe=y.subTree=Cc(y);v(null,Fe,O,J,y,X,ne),P.el=Fe.el}if(Q&&jt(Q,X),!Re&&(S=I&&I.onVnodeMounted)){const Fe=P;jt(()=>Mn(S,k,Fe),X)}(P.shapeFlag&256||k&&Xr(k.vnode)&&k.vnode.shapeFlag&256)&&y.a&&jt(y.a,X),y.isMounted=!0,P=O=J=null}};y.scope.on();const ae=y.effect=new of(ue);y.scope.off();const ie=y.update=ae.run.bind(ae),oe=y.job=ae.runIfDirty.bind(ae);oe.i=y,oe.id=y.uid,ae.scheduler=()=>ql(oe),Ai(y,!0),ie()},V=(y,P,O)=>{P.component=y;const J=y.vnode.props;y.vnode=P,y.next=null,Cp(y,P.props,J,O),Lp(y,P.children,O),Zn(),Mc(y),Jn()},ee=(y,P,O,J,X,ne,A,ue,ae=!1)=>{const ie=y&&y.children,oe=y?y.shapeFlag:0,S=P.children,{patchFlag:m,shapeFlag:I}=P;if(m>0){if(m&128){re(ie,S,O,J,X,ne,A,ue,ae);return}else if(m&256){se(ie,S,O,J,X,ne,A,ue,ae);return}}I&8?(oe&16&&H(ie,X,ne),S!==ie&&c(O,S)):oe&16?I&16?re(ie,S,O,J,X,ne,A,ue,ae):H(ie,X,ne,!0):(oe&8&&c(O,""),I&16&&z(S,O,J,X,ne,A,ue,ae))},se=(y,P,O,J,X,ne,A,ue,ae)=>{y=y||cr,P=P||cr;const ie=y.length,oe=P.length,S=Math.min(ie,oe);let m;for(m=0;m<S;m++){const I=P[m]=ae?pi(P[m]):bn(P[m]);v(y[m],I,O,null,X,ne,A,ue,ae)}ie>oe?H(y,X,ne,!0,!1,S):z(P,O,J,X,ne,A,ue,ae,S)},re=(y,P,O,J,X,ne,A,ue,ae)=>{let ie=0;const oe=P.length;let S=y.length-1,m=oe-1;for(;ie<=S&&ie<=m;){const I=y[ie],W=P[ie]=ae?pi(P[ie]):bn(P[ie]);if(Oi(I,W))v(I,W,O,null,X,ne,A,ue,ae);else break;ie++}for(;ie<=S&&ie<=m;){const I=y[S],W=P[m]=ae?pi(P[m]):bn(P[m]);if(Oi(I,W))v(I,W,O,null,X,ne,A,ue,ae);else break;S--,m--}if(ie>S){if(ie<=m){const I=m+1,W=I<oe?P[I].el:J;for(;ie<=m;)v(null,P[ie]=ae?pi(P[ie]):bn(P[ie]),O,W,X,ne,A,ue,ae),ie++}}else if(ie>m)for(;ie<=S;)Te(y[ie],X,ne,!0),ie++;else{const I=ie,W=ie,Q=new Map;for(ie=W;ie<=m;ie++){const Ee=P[ie]=ae?pi(P[ie]):bn(P[ie]);Ee.key!=null&&Q.set(Ee.key,ie)}let k,Ae=0;const pe=m-W+1;let Re=!1,Fe=0;const he=new Array(pe);for(ie=0;ie<pe;ie++)he[ie]=0;for(ie=I;ie<=S;ie++){const Ee=y[ie];if(Ae>=pe){Te(Ee,X,ne,!0);continue}let Pe;if(Ee.key!=null)Pe=Q.get(Ee.key);else for(k=W;k<=m;k++)if(he[k-W]===0&&Oi(Ee,P[k])){Pe=k;break}Pe===void 0?Te(Ee,X,ne,!0):(he[Pe-W]=ie+1,Pe>=Fe?Fe=Pe:Re=!0,v(Ee,P[Pe],O,null,X,ne,A,ue,ae),Ae++)}const Se=Re?Fp(he):cr;for(k=Se.length-1,ie=pe-1;ie>=0;ie--){const Ee=W+ie,Pe=P[Ee],ve=P[Ee+1],Xe=Ee+1<oe?ve.el||Qf(ve):J;he[ie]===0?v(null,Pe,O,Xe,X,ne,A,ue,ae):Re&&(k<0||ie!==Se[k]?fe(Pe,O,Xe,2):k--)}}},fe=(y,P,O,J,X=null)=>{const{el:ne,type:A,transition:ue,children:ae,shapeFlag:ie}=y;if(ie&6){fe(y.component.subTree,P,O,J);return}if(ie&128){y.suspense.move(P,O,J);return}if(ie&64){A.move(y,P,O,xe);return}if(A===sn){i(ne,P,O);for(let S=0;S<ae.length;S++)fe(ae[S],P,O,J);i(y.anchor,P,O);return}if(A===Va){w(y,P,O);return}if(J!==2&&ie&1&&ue)if(J===0)ue.beforeEnter(ne),i(ne,P,O),jt(()=>ue.enter(ne),X);else{const{leave:S,delayLeave:m,afterLeave:I}=ue,W=()=>{y.ctx.isUnmounted?r(ne):i(ne,P,O)},Q=()=>{ne._isLeaving&&ne[kn](!0),S(ne,()=>{W(),I&&I()})};m?m(ne,W,Q):Q()}else i(ne,P,O)},Te=(y,P,O,J=!1,X=!1)=>{const{type:ne,props:A,ref:ue,children:ae,dynamicChildren:ie,shapeFlag:oe,patchFlag:S,dirs:m,cacheIndex:I}=y;if(S===-2&&(X=!1),ue!=null&&(Zn(),Wr(ue,null,O,y,!0),Jn()),I!=null&&(P.renderCache[I]=void 0),oe&256){P.ctx.deactivate(y);return}const W=oe&1&&m,Q=!Xr(y);let k;if(Q&&(k=A&&A.onVnodeBeforeUnmount)&&Mn(k,P,y),oe&6)Le(y.component,O,J);else{if(oe&128){y.suspense.unmount(O,J);return}W&&Ti(y,null,P,"beforeUnmount"),oe&64?y.type.remove(y,P,O,xe,J):ie&&!ie.hasOnce&&(ne!==sn||S>0&&S&64)?H(ie,P,O,!1,!0):(ne===sn&&S&384||!X&&oe&16)&&H(ae,P,O),J&&ce(y)}(Q&&(k=A&&A.onVnodeUnmounted)||W)&&jt(()=>{k&&Mn(k,P,y),W&&Ti(y,null,P,"unmounted")},O)},ce=y=>{const{type:P,el:O,anchor:J,transition:X}=y;if(P===sn){ge(O,J);return}if(P===Va){T(y);return}const ne=()=>{r(O),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(y.shapeFlag&1&&X&&!X.persisted){const{leave:A,delayLeave:ue}=X,ae=()=>A(O,ne);ue?ue(y.el,ne,ae):ae()}else ne()},ge=(y,P)=>{let O;for(;y!==P;)O=h(y),r(y),y=O;r(P)},Le=(y,P,O)=>{const{bum:J,scope:X,job:ne,subTree:A,um:ue,m:ae,a:ie}=y;Dc(ae),Dc(ie),J&&La(J),X.stop(),ne&&(ne.flags|=8,Te(A,y,P,O)),ue&&jt(ue,P),jt(()=>{y.isUnmounted=!0},P)},H=(y,P,O,J=!1,X=!1,ne=0)=>{for(let A=ne;A<y.length;A++)Te(y[A],P,O,J,X)},te=y=>{if(y.shapeFlag&6)return te(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const P=h(y.anchor||y.el),O=P&&P[Zd];return O?h(O):P};let de=!1;const Ie=(y,P,O)=>{let J;y==null?P._vnode&&(Te(P._vnode,null,null,!0),J=P._vnode.component):v(P._vnode||null,y,P,null,null,null,O),P._vnode=y,de||(de=!0,Mc(J),bf(),de=!1)},xe={p:v,um:Te,m:fe,r:ce,mt:j,mc:z,pc:ee,pbc:E,n:te,o:n};return{render:Ie,hydrate:void 0,createApp:vp(Ie)}}function za({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ai({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Np(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zf(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=pi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Zf(a,o)),o.type===Sa&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===sn?1:0)),o.type===Bt&&!o.el&&(o.el=a.el)}}function Fp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Jf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jf(e)}function Dc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Qf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Qf(e.subTree):null}const eh=n=>n.__isSuspense;function Op(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):Xd(n)}const sn=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),Yr=[];let Zt=null;function _n(n=!1){Yr.push(Zt=n?null:[])}function Bp(){Yr.pop(),Zt=Yr[Yr.length-1]||null}let es=1;function sa(n,e=!1){es+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function th(n){return n.dynamicChildren=es>0?Zt||cr:null,Bp(),es>0&&Zt&&Zt.push(n),n}function Rn(n,e,t,i,r,s){return th(pt(n,e,t,i,r,s,!0))}function zp(n,e,t,i,r){return th(bt(n,e,t,i,r,!0))}function aa(n){return n?n.__v_isVNode===!0:!1}function Oi(n,e){return n.type===e.type&&n.key===e.key}const nh=({key:n})=>n??null,qs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Dt(n)||qe(n)?{i:ln,r:n,k:e,f:!!t}:n:null);function pt(n,e=null,t=null,i=0,r=null,s=n===sn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nh(e),ref:e&&qs(e),scopeId:Af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return o?(jl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),es>0&&!a&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const bt=Vp;function Vp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===fp)&&(n=Bt),aa(n)){const o=Si(n,e,!0);return t&&jl(o,t),es>0&&!s&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag=-2,o}if(jp(n)&&(n=n.__vccOpts),e){e=Hp(e);let{class:o,style:l}=e;o&&!St(o)&&(e.class=xr(o)),dt(l)&&(Xl(l)&&!Ge(l)&&(l=At({},l)),e.style=Fl(l))}const a=St(n)?1:eh(n)?128:Pf(n)?64:dt(n)?4:qe(n)?2:0;return pt(n,e,t,i,r,a,s,!0)}function Hp(n){return n?Xl(n)||Xf(n)?At({},n):n:null}function Si(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?Gp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&nh(u),ref:e&&e.ref?t&&s?Ge(s)?s.concat(qs(e)):[s,qs(e)]:qs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Si(n.ssContent),ssFallback:n.ssFallback&&Si(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Qr(c,l.clone(c)),c}function Io(n=" ",e=0){return bt(Sa,null,n,e)}function ts(n="",e=!1){return e?(_n(),zp(Bt,null,n)):bt(Bt,null,n)}function bn(n){return n==null||typeof n=="boolean"?bt(Bt):Ge(n)?bt(sn,null,n.slice()):aa(n)?pi(n):bt(Sa,null,String(n))}function pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Si(n)}function jl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),jl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xf(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:ln},t=32):(e=String(e),i&64?(t=16,e=[Io(e)]):t=8);n.children=e,n.shapeFlag|=t}function Gp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xr([e.class,i.class]));else if(r==="style")e.style=Fl([e.style,i.style]);else if(fa(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ge(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){xn(n,e,7,[t,i])}const kp=Hf();let Wp=0;function Xp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||kp,s={uid:Wp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(i,r),emitsOptions:Gf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Mp.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const ih=()=>zt||ln;let oa,Uo;{const n=pa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};oa=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Uo=e("__VUE_SSR_SETTERS__",t=>ns=t)}const us=n=>{const e=zt;return oa(n),n.scope.on(),()=>{n.scope.off(),oa(e)}},Lc=()=>{zt&&zt.scope.off(),oa(null)};function rh(n){return n.vnode.shapeFlag&4}let ns=!1;function qp(n,e=!1,t=!1){e&&Uo(e);const{props:i,children:r}=n.vnode,s=rh(n);wp(n,i,s,e),Dp(n,r,t||e);const a=s?Yp(n,e):void 0;return e&&Uo(!1),a}function Yp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hp);const{setup:i}=t;if(i){Zn();const r=n.setupContext=i.length>1?Kp(n):null,s=us(n),a=cs(i,n,0,[n.props,r]),o=Ju(a);if(Jn(),s(),(o||n.sp)&&!Xr(n)&&Ff(n),o){if(a.then(Lc,Lc),e)return a.then(l=>{Ic(n,l)}).catch(l=>{ma(l,n,0)});n.asyncDep=a}else Ic(n,a)}else sh(n)}function Ic(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=Mf(e)),sh(n)}function sh(n,e,t){const i=n.type;n.render||(n.render=i.render||Cn);{const r=us(n);Zn();try{dp(n)}finally{Jn(),r()}}}const $p={get(n,e){return Rt(n,"get",""),n[e]}};function Kp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,$p),slots:n.slots,emit:n.emit,expose:e}}function Ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(Id(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function jp(n){return qe(n)&&"__vccOpts"in n}const Zl=(n,e)=>zd(n,e,ns);function Zp(n,e,t){try{sa(-1);const i=arguments.length;return i===2?dt(e)&&!Ge(e)?aa(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&aa(t)&&(t=[t]),bt(n,e,t))}finally{sa(1)}}const Jp="3.5.26";let No;const Uc=typeof window<"u"&&window.trustedTypes;if(Uc)try{No=Uc.createPolicy("vue",{createHTML:n=>n})}catch{}const ah=No?n=>No.createHTML(n):n=>n,Qp="http://www.w3.org/2000/svg",em="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Nc=Gn&&Gn.createElement("template"),tm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(Qp,n):e==="mathml"?Gn.createElementNS(em,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Nc.innerHTML=ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Nc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},si="transition",Cr="animation",is=Symbol("_vtc"),oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nm=At({},Df,oh),im=n=>(n.displayName="Transition",n.props=nm,n),rm=im((n,{slots:e})=>Zp(ep,sm(n),e)),wi=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},Fc=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function sm(n){const e={};for(const D in n)D in oh||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=am(r),v=_&&_[0],g=_&&_[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:w,onLeave:T,onLeaveCancelled:C,onBeforeAppear:L=d,onAppear:R=b,onAppearCancelled:z=w}=e,x=(D,F,j,Z)=>{D._enterCancelled=Z,Ci(D,F?c:o),Ci(D,F?u:a),j&&j()},E=(D,F)=>{D._isLeaving=!1,Ci(D,f),Ci(D,p),Ci(D,h),F&&F()},U=D=>(F,j)=>{const Z=D?R:b,q=()=>x(F,D,j);wi(Z,[F,q]),Oc(()=>{Ci(F,D?l:s),Fn(F,D?c:o),Fc(Z)||Bc(F,i,v,q)})};return At(e,{onBeforeEnter(D){wi(d,[D]),Fn(D,s),Fn(D,a)},onBeforeAppear(D){wi(L,[D]),Fn(D,l),Fn(D,u)},onEnter:U(!1),onAppear:U(!0),onLeave(D,F){D._isLeaving=!0;const j=()=>E(D,F);Fn(D,f),D._enterCancelled?(Fn(D,h),Hc(D)):(Hc(D),Fn(D,h)),Oc(()=>{D._isLeaving&&(Ci(D,f),Fn(D,p),Fc(T)||Bc(D,i,g,j))}),wi(T,[D,j])},onEnterCancelled(D){x(D,!1,void 0,!0),wi(w,[D])},onAppearCancelled(D){x(D,!0,void 0,!0),wi(z,[D])},onLeaveCancelled(D){E(D),wi(C,[D])}})}function am(n){if(n==null)return null;if(dt(n))return[Ha(n.enter),Ha(n.leave)];{const e=Ha(n);return[e,e]}}function Ha(n){return sd(n)}function Fn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[is]||(n[is]=new Set)).add(e)}function Ci(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[is];t&&(t.delete(e),t.size||(n[is]=void 0))}function Oc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let om=0;function Bc(n,e,t,i){const r=n._endId=++om,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=lm(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,h)}function lm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${si}Delay`),s=i(`${si}Duration`),a=zc(r,s),o=i(`${Cr}Delay`),l=i(`${Cr}Duration`),u=zc(o,l);let c=null,f=0,h=0;e===si?a>0&&(c=si,f=a,h=s.length):e===Cr?u>0&&(c=Cr,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?si:Cr:null,h=c?c===si?s.length:l.length:0);const p=c===si&&/\b(?:transform|all)(?:,|$)/.test(i(`${si}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:p}}function zc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Vc(t)+Vc(n[i])))}function Vc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hc(n){return(n?n.ownerDocument:document).body.offsetHeight}function cm(n,e,t){const i=n[is];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const la=Symbol("_vod"),lh=Symbol("_vsh"),um={name:"show",beforeMount(n,{value:e},{transition:t}){n[la]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Rr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Rr(n,!0),i.enter(n)):i.leave(n,()=>{Rr(n,!1)}):Rr(n,e))},beforeUnmount(n,{value:e}){Rr(n,e)}};function Rr(n,e){n.style.display=e?n[la]:"none",n[lh]=!e}const fm=Symbol(""),hm=/(?:^|;)\s*display\s*:/;function dm(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ys(i,o,"")}else for(const a in e)t[a]==null&&Ys(i,a,"");for(const a in t)a==="display"&&(s=!0),Ys(i,a,t[a])}else if(r){if(e!==t){const a=i[fm];a&&(t+=";"+a),i.cssText=t,s=hm.test(t)}}else e&&n.removeAttribute("style");la in n&&(n[la]=s?i.display:"",n[lh]&&(i.display="none"))}const Gc=/\s*!important$/;function Ys(n,e,t){if(Ge(t))t.forEach(i=>Ys(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=pm(n,e);Gc.test(t)?n.setProperty(Wi(i),t.replace(Gc,""),"important"):n[i]=t}}const kc=["Webkit","Moz","ms"],Ga={};function pm(n,e){const t=Ga[e];if(t)return t;let i=xi(e);if(i!=="filter"&&i in n)return Ga[e]=i;i=tf(i);for(let r=0;r<kc.length;r++){const s=kc[r]+i;if(s in n)return Ga[e]=s}return e}const Wc="http://www.w3.org/1999/xlink";function Xc(n,e,t,i,r,s=fd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wc,e.slice(6,e.length)):n.setAttributeNS(Wc,e,t):t==null||s&&!rf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ei(t)?String(t):t)}function qc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ah(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=rf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function mm(n,e,t,i){n.addEventListener(e,t,i)}function gm(n,e,t,i){n.removeEventListener(e,t,i)}const Yc=Symbol("_vei");function _m(n,e,t,i,r=null){const s=n[Yc]||(n[Yc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=xm(e);if(i){const u=s[e]=Mm(i,r);mm(n,o,u,l)}else a&&(gm(n,o,a,l),s[e]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function xm(n){let e;if($c.test(n)){e={};let i;for(;i=n.match($c);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let ka=0;const vm=Promise.resolve(),Sm=()=>ka||(vm.then(()=>ka=0),ka=Date.now());function Mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;xn(Em(i,t.value),e,5,[i])};return t.value=n,t.attached=Sm(),t}function Em(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Kc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ym=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?cm(n,i,a):e==="style"?dm(n,t,i):fa(e)?Il(e)||_m(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bm(n,e,i,a))?(qc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?qc(n,xi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xc(n,e,i,a))};function bm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kc(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Kc(e)&&St(t)?!1:e in n}const Tm=At({patchProp:ym},tm);let jc;function Am(){return jc||(jc=Ip(Tm))}const wm=((...n)=>{const e=Am().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Rm(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Cm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Cm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Rm(n){return St(n)?document.querySelector(n):n}const Jl="182",Pm=0,Zc=1,Dm=2,$s=1,Lm=2,zr=3,Mi=0,Wt=1,qn=2,$n=0,gr=1,Fo=2,Jc=3,Qc=4,Im=5,Bi=100,Um=101,Nm=102,Fm=103,Om=104,Bm=200,zm=201,Vm=202,Hm=203,Oo=204,Bo=205,Gm=206,km=207,Wm=208,Xm=209,qm=210,Ym=211,$m=212,Km=213,jm=214,zo=0,Vo=1,Ho=2,vr=3,Go=4,ko=5,Wo=6,Xo=7,ch=0,Zm=1,Jm=2,Pn=0,uh=1,fh=2,hh=3,dh=4,ph=5,mh=6,gh=7,_h=300,ki=301,Sr=302,qo=303,Yo=304,Ea=306,$o=1e3,Yn=1001,Ko=1002,Tt=1003,Qm=1004,Es=1005,Pt=1006,Wa=1007,Vi=1008,on=1009,xh=1010,vh=1011,rs=1012,Ql=1013,Ln=1014,An=1015,ei=1016,ec=1017,tc=1018,ss=1020,Sh=35902,Mh=35899,Eh=1021,yh=1022,pn=1023,ti=1026,Hi=1027,bh=1028,nc=1029,Mr=1030,ic=1031,rc=1033,Ks=33776,js=33777,Zs=33778,Js=33779,jo=35840,Zo=35841,Jo=35842,Qo=35843,el=36196,tl=37492,nl=37496,il=37488,rl=37489,sl=37490,al=37491,ol=37808,ll=37809,cl=37810,ul=37811,fl=37812,hl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,Sl=37821,Ml=36492,El=36494,yl=36495,bl=36283,Tl=36284,Al=36285,wl=36286,eg=3200,tg=0,ng=1,mi="",nn="srgb",Er="srgb-linear",ca="linear",st="srgb",Yi=7680,eu=519,ig=512,rg=513,sg=514,sc=515,ag=516,og=517,ac=518,lg=519,tu=35044,nu="300 es",wn=2e3,ua=2001;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function as(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cg(){const n=as("canvas");return n.style.display="block",n}const iu={};function ru(...n){const e="THREE."+n.shift();console.log(e,...n)}function We(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function os(...n){const e=n.join(" ");e in iu||(iu[e]=!0,We(...n))}function ug(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,Cl=180/Math.PI;function fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function fg(n,e){return(n%e+e)%e}function qa(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||u!==p||c!==_){let g=l*h+u*p+c*_+f*v;g<0&&(h=-h,p=-p,_=-_,v=-v,g=-g);let d=1-o;if(g<.9995){const b=Math.acos(g),w=Math.sin(b);d=Math.sin(d*b)/w,o=Math.sin(o*b)/w,l=l*d+h*o,u=u*d+p*o,c=c*d+_*o,f=f*d+v*o}else{l=l*d+h*o,u=u*d+p*o,c=c*d+_*o,f=f*d+v*o;const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-o*p,e[t+2]=u*_+c*p+o*h-l*f,e[t+3]=c*_-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new Y,su=new hs;class Ye{constructor(e,t,i,r,s,a,o,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],g=r[3],d=r[6],b=r[1],w=r[4],T=r[7],C=r[2],L=r[5],R=r[8];return s[0]=a*v+o*b+l*C,s[3]=a*g+o*w+l*L,s[6]=a*d+o*T+l*R,s[1]=u*v+c*b+f*C,s[4]=u*g+c*w+f*L,s[7]=u*d+c*T+f*R,s[2]=h*v+p*b+_*C,s[5]=h*g+p*w+_*L,s[8]=h*d+p*T+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Ye,au=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mi?ca:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const Ze=hg();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class dg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=as("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pg=0;class oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ka(r[a].image)):s.push(Ka(r[a]))}else s=Ka(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let mg=0;const ja=new Y;class Lt extends br{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Yn,r=Yn,s=Pt,a=Vi,o=pn,l=on,u=Lt.DEFAULT_ANISOTROPY,c=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=fs(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=_h;Lt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(u+1)/2,T=(p+1)/2,C=(d+1)/2,L=(c+h)/4,R=(f+v)/4,z=(_+g)/4;return w>T&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=L/i,s=R/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=L/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=z/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(f-v)/b,this.z=(h-c)/b,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gg extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new oc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends gg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ah extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),bs.subVectors(this.max,Dr),Ki.subVectors(e.a,Dr),ji.subVectors(e.b,Dr),Zi.subVectors(e.c,Dr),ai.subVectors(ji,Ki),oi.subVectors(Zi,ji),Ri.subVectors(Ki,Zi);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ri.z,Ri.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ri.z,0,-Ri.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ri.y,Ri.x,0];return!Za(t,Ki,ji,Zi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Ki,ji,Zi,bs))?!1:(Ts.crossVectors(ai,oi),t=[Ts.x,Ts.y,Ts.z],Za(t,Ki,ji,Zi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],un=new Y,ys=new ds,Ki=new Y,ji=new Y,Zi=new Y,ai=new Y,oi=new Y,Ri=new Y,Dr=new Y,bs=new Y,Ts=new Y,Pi=new Y;function Za(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Pi.fromArray(n,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),u=t.dot(Pi),c=i.dot(Pi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const xg=new ds,Lr=new Y,Ja=new Y;class ya{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ja)),this.expandByPoint(Lr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new Y,Qa=new Y,As=new Y,li=new Y,eo=new Y,ws=new Y,to=new Y;class wh{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qa.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Qa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=li.dot(this.direction),l=-li.dot(As),u=li.lengthSq(),c=Math.abs(1-a*a);let f,h,p,_;if(c>0)if(f=a*l-o,h=a*o-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const v=1/c;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qa).addScaledVector(As,h),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){eo.subVectors(t,e),ws.subVectors(i,e),to.crossVectors(eo,ws);let a=this.direction.dot(to),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(ws.crossVectors(li,ws));if(l<0)return null;const u=o*this.direction.dot(eo.cross(li));if(u<0||l+u>a)return null;const c=-o*li.dot(to);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,l,u,c,f,h,p,_,v,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,v,g)}set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,p=a*f,_=o*c,v=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-v*u,t[9]=-o*l,t[2]=v-h*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,v=u*f;t[0]=h+v*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,v=u*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=v-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*f,_=o*c,v=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+v,t[1]=l*f,t[5]=v*u+h,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vg,e,Sg)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ci.crossVectors(i,$t),ci.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ci.crossVectors(i,$t)),ci.normalize(),Cs.crossVectors($t,ci),r[0]=ci.x,r[4]=Cs.x,r[8]=$t.x,r[1]=ci.y,r[5]=Cs.y,r[9]=$t.y,r[2]=ci.z,r[6]=Cs.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],g=i[10],d=i[14],b=i[3],w=i[7],T=i[11],C=i[15],L=r[0],R=r[4],z=r[8],x=r[12],E=r[1],U=r[5],D=r[9],F=r[13],j=r[2],Z=r[6],q=r[10],V=r[14],ee=r[3],se=r[7],re=r[11],fe=r[15];return s[0]=a*L+o*E+l*j+u*ee,s[4]=a*R+o*U+l*Z+u*se,s[8]=a*z+o*D+l*q+u*re,s[12]=a*x+o*F+l*V+u*fe,s[1]=c*L+f*E+h*j+p*ee,s[5]=c*R+f*U+h*Z+p*se,s[9]=c*z+f*D+h*q+p*re,s[13]=c*x+f*F+h*V+p*fe,s[2]=_*L+v*E+g*j+d*ee,s[6]=_*R+v*U+g*Z+d*se,s[10]=_*z+v*D+g*q+d*re,s[14]=_*x+v*F+g*V+d*fe,s[3]=b*L+w*E+T*j+C*ee,s[7]=b*R+w*U+T*Z+C*se,s[11]=b*z+w*D+T*q+C*re,s[15]=b*x+w*F+T*V+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],g=e[11],d=e[15],b=l*p-u*h,w=o*p-u*f,T=o*h-l*f,C=a*p-u*c,L=a*h-l*c,R=a*f-o*c;return t*(v*b-g*w+d*T)-i*(_*b-g*C+d*L)+r*(_*w-v*C+d*R)-s*(_*T-v*L+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],g=e[14],d=e[15],b=f*g*u-v*h*u+v*l*p-o*g*p-f*l*d+o*h*d,w=_*h*u-c*g*u-_*l*p+a*g*p+c*l*d-a*h*d,T=c*v*u-_*f*u+_*o*p-a*v*p-c*o*d+a*f*d,C=_*f*l-c*v*l-_*o*h+a*v*h+c*o*g-a*f*g,L=t*b+i*w+r*T+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=b*R,e[1]=(v*h*s-f*g*s-v*r*p+i*g*p+f*r*d-i*h*d)*R,e[2]=(o*g*s-v*l*s+v*r*u-i*g*u-o*r*d+i*l*d)*R,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*R,e[4]=w*R,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*R,e[6]=(_*l*s-a*g*s-_*r*u+t*g*u+a*r*d-t*l*d)*R,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*p+t*l*p)*R,e[8]=T*R,e[9]=(_*f*s-c*v*s-_*i*p+t*v*p+c*i*d-t*f*d)*R,e[10]=(a*v*s-_*o*s+_*i*u-t*v*u-a*i*d+t*o*d)*R,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*R,e[12]=C*R,e[13]=(c*v*r-_*f*r+_*i*h-t*v*h-c*i*g+t*f*g)*R,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*g-t*o*g)*R,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,_=s*f,v=a*c,g=a*f,d=o*f,b=l*u,w=l*c,T=l*f,C=i.x,L=i.y,R=i.z;return r[0]=(1-(v+d))*C,r[1]=(p+T)*C,r[2]=(_-w)*C,r[3]=0,r[4]=(p-T)*L,r[5]=(1-(h+d))*L,r[6]=(g+b)*L,r[7]=0,r[8]=(_+w)*R,r[9]=(g-b)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),fn.copy(this);const u=1/s,c=1/a,f=1/o;return fn.elements[0]*=u,fn.elements[1]*=u,fn.elements[2]*=u,fn.elements[4]*=c,fn.elements[5]*=c,fn.elements[6]*=c,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=wn,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===wn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ua)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wn,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===wn)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===ua)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new Y,fn=new xt,vg=new Y(0,0,0),Sg=new Y(1,1,1),ci=new Y,Cs=new Y,$t=new Y,lu=new xt,cu=new hs;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mg=0;const uu=new Y,Qi=new hs,zn=new xt,Rs=new Y,Ir=new Y,Eg=new Y,yg=new hs,fu=new Y(1,0,0),hu=new Y(0,1,0),du=new Y(0,0,1),pu={type:"added"},bg={type:"removed"},er={type:"childadded",child:null},no={type:"childremoved",child:null};class Xt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Y,t=new ni,i=new hs,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rs.copy(e):Rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ir,Rs,this.up):zn.lookAt(Rs,Ir,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),er.child=e,this.dispatchEvent(er),er.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bg),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new Y(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new Y,Vn=new Y,io=new Y,Hn=new Y,tr=new Y,nr=new Y,mu=new Y,ro=new Y,so=new Y,ao=new Y,oo=new _t,lo=new _t,co=new _t;class dn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Vn.subVectors(i,t),io.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Vn),l=hn.dot(io),u=Vn.dot(Vn),c=Vn.dot(io),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,_=(a*c-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,i),co.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oo,s.x),a.addScaledVector(lo,s.y),a.addScaledVector(co,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Vn.subVectors(e,t),hn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),hn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),ro.subVectors(e,i);const l=tr.dot(ro),u=nr.dot(ro);if(l<=0&&u<=0)return t.copy(i);so.subVectors(e,r);const c=tr.dot(so),f=nr.dot(so);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(tr,a);ao.subVectors(e,s);const p=tr.dot(ao),_=nr.dot(ao);if(_>=0&&p<=_)return t.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(nr,o);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return mu.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(mu,o);const d=1/(g+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=fg(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=uo(a,s,e+1/3),this.g=uo(a,s,e),this.b=uo(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ze.workingToColorSpace(Ct.copy(this),e),Math.round(je(Ct.r*255,0,255))*65536+Math.round(je(Ct.g*255,0,255))*256+Math.round(je(Ct.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nn){Ze.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Ps);const i=qa(ui.h,Ps.h,t),r=qa(ui.s,Ps.s,t),s=qa(ui.l,Ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new tt;tt.NAMES=Rh;let Tg=0;class ps extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=gr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oo&&(i.blendSrc=this.blendSrc),this.blendDst!==Bo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ph extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new Y,Ds=new ot;let Ag=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class Dh extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lh extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jn extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wg=0;const en=new xt,fo=new Xt,ir=new Y,Kt=new ds,Ur=new ds,yt=new Y;class vn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Lh:Dh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Kt.min,Ur.min),Kt.expandByPoint(yt),yt.addVectors(Kt.max,Ur.max),Kt.expandByPoint(yt)):(Kt.expandByPoint(Ur.min),Kt.expandByPoint(Ur.max))}Kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)yt.fromBufferAttribute(o,u),l&&(ir.fromBufferAttribute(e,u),yt.add(ir)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new Y,l[z]=new Y;const u=new Y,c=new Y,f=new Y,h=new ot,p=new ot,_=new ot,v=new Y,g=new Y;function d(z,x,E){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,z),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,E),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(U),o[z].add(v),o[x].add(v),o[E].add(v),l[z].add(g),l[x].add(g),l[E].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,x=b.length;z<x;++z){const E=b[z],U=E.start,D=E.count;for(let F=U,j=U+D;F<j;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new Y,T=new Y,C=new Y,L=new Y;function R(z){C.fromBufferAttribute(r,z),L.copy(C);const x=o[z];w.copy(x),w.sub(C.multiplyScalar(C.dot(x))).normalize(),T.crossVectors(L,x);const U=T.dot(l[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,U)}for(let z=0,x=b.length;z<x;++z){const E=b[z],U=E.start,D=E.count;for(let F=U,j=U+D;F<j;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,u=new Y,c=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new cn(h,c,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new xt,Di=new wh,Ls=new ya,_u=new Y,Is=new Y,Us=new Y,Ns=new Y,ho=new Y,Fs=new Y,xu=new Y,Os=new Y;class ii extends Xt{constructor(e=new vn,t=new Ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(ho.fromBufferAttribute(f,e),a?Fs.addScaledVector(ho,c):Fs.addScaledVector(ho.sub(t),c))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Ls.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Ls,_u)===null||Di.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],d=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let T=b,C=w;T<C;T+=3){const L=o.getX(T),R=o.getX(T+1),z=o.getX(T+2);r=Bs(this,d,e,i,u,c,f,L,R,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const b=o.getX(g),w=o.getX(g+1),T=o.getX(g+2);r=Bs(this,a,e,i,u,c,f,b,w,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],d=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let T=b,C=w;T<C;T+=3){const L=T,R=T+1,z=T+2;r=Bs(this,d,e,i,u,c,f,L,R,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const b=g,w=g+1,T=g+2;r=Bs(this,a,e,i,u,c,f,b,w,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Cg(n,e,t,i,r,s,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Mi,o),l===null)return null;Os.copy(o),Os.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Os);return u<t.near||u>t.far?null:{distance:u,point:Os.clone(),object:n}}function Bs(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Is),n.getVertexPosition(l,Us),n.getVertexPosition(u,Ns);const c=Cg(n,e,t,i,Is,Us,Ns,xu);if(c){const f=new Y;dn.getBarycoord(xu,Is,Us,Ns,f),r&&(c.uv=dn.getInterpolatedAttribute(r,o,l,u,f,new ot)),s&&(c.uv1=dn.getInterpolatedAttribute(s,o,l,u,f,new ot)),a&&(c.normal=dn.getInterpolatedAttribute(a,o,l,u,f,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new Y,materialIndex:0};dn.getNormal(Is,Us,Ns,h.normal),c.face=h,c.barycoord=f}return c}class ms extends vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(c,3)),this.setAttribute("uv",new jn(f,2));function _(v,g,d,b,w,T,C,L,R,z,x){const E=T/R,U=C/z,D=T/2,F=C/2,j=L/2,Z=R+1,q=z+1;let V=0,ee=0;const se=new Y;for(let re=0;re<q;re++){const fe=re*U-F;for(let Te=0;Te<Z;Te++){const ce=Te*E-D;se[v]=ce*b,se[g]=fe*w,se[d]=j,u.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[d]=L>0?1:-1,c.push(se.x,se.y,se.z),f.push(Te/R),f.push(1-re/z),V+=1}}for(let re=0;re<z;re++)for(let fe=0;fe<R;fe++){const Te=h+fe+Z*re,ce=h+fe+Z*(re+1),ge=h+(fe+1)+Z*(re+1),Le=h+(fe+1)+Z*re;l.push(Te,ce,Le),l.push(ce,ge,Le),ee+=6}o.addGroup(p,ee,x),p+=ee,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Rg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pg={clone:yr,merge:Nt};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uh extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new Y,vu=new ot,Su=new ot;class an extends Uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,vu,Su),t.subVectors(Su,vu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Ig extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new an(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new an(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new an(rr,sr,e,t);o.layers=this.layers,this.add(o);const l=new an(rr,sr,e,t);l.layers=this.layers,this.add(l);const u=new an(rr,sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nh extends Lt{constructor(e=[],t=ki,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:$n});s.uniforms.tEquirect.value=t;const a=new ii(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Pt),new Ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class zs extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),d=this._getHandJoint(u,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ng extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fg extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Tt,c=Tt,f,h){super(null,a,o,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mo=new Y,Og=new Y,Bg=new Ye;class Fi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=mo.subVectors(i,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bg.getNormalMatrix(e),r=this.coplanarPoint(mo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new ya,zg=new ot(.5,.5),Vs=new Y;class Oh{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],_=s[8],v=s[9],g=s[10],d=s[11],b=s[12],w=s[13],T=s[14],C=s[15];if(r[0].setComponents(u-a,p-c,d-_,C-b).normalize(),r[1].setComponents(u+a,p+c,d+_,C+b).normalize(),r[2].setComponents(u+o,p+f,d+v,C+w).normalize(),r[3].setComponents(u-o,p-f,d-v,C-w).normalize(),i)r[4].setComponents(l,h,g,T).normalize(),r[5].setComponents(u-l,p-h,d-g,C-T).normalize();else if(r[4].setComponents(u-l,p-h,d-g,C-T).normalize(),t===wn)r[5].setComponents(u+l,p+h,d+g,C+T).normalize();else if(t===ua)r[5].setComponents(l,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=zg.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new xt,Rl=new wh,Hs=new ya,Gs=new Y;class Vg extends Xt{constructor(e=new vn,t=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;Mu.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(Mu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=h,v=p;_<v;_++){const g=u.getX(_);Gs.fromBufferAttribute(f,g),Eu(Gs,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,v=p;_<v;_++)Gs.fromBufferAttribute(f,_),Eu(Gs,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Eu(n,e,t,i,r,s,a){const o=Rl.distanceSqToPoint(n);if(o<t){const l=new Y;Rl.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ls extends Lt{constructor(e,t,i=Ln,r,s,a,o=Tt,l=Tt,u,c=ti,f=1){if(c!==ti&&c!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hg extends ls{constructor(e,t=Ln,i=ki,r,s,a=Tt,o=Tt,l,u=ti){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ba extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=t/l,p=[],_=[],v=[],g=[];for(let d=0;d<c;d++){const b=d*h-a;for(let w=0;w<u;w++){const T=w*f-s;_.push(T,-b,0),v.push(0,0,1),g.push(w/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const w=b+u*d,T=b+u*(d+1),C=b+1+u*(d+1),L=b+1+u*d;p.push(w,T,L),p.push(T,C,L)}this.setIndex(p),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(v,3)),this.setAttribute("uv",new jn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gg extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kg extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wg extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const go={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Xg{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qg=new Xg;class cc{constructor(e){this.manager=e!==void 0?e:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar=new WeakMap;class Yg extends cc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=go.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=ar.get(a);f===void 0&&(f=[],ar.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=as("img");function l(){c(),t&&t(this);const f=ar.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}ar.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),go.remove(`image:${e}`);const h=ar.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),go.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class $g extends cc{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,a=new Yg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Vh extends Uh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kg extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function yu(n,e,t,i){const r=jg(i);switch(t){case Eh:return n*e;case bh:return n*e/r.components*r.byteLength;case nc:return n*e/r.components*r.byteLength;case Mr:return n*e*2/r.components*r.byteLength;case ic:return n*e*2/r.components*r.byteLength;case yh:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case rc:return n*e*4/r.components*r.byteLength;case Ks:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Qo:return Math.max(n,16)*Math.max(e,8)/4;case jo:case Jo:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case sl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ml:case El:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Al:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(n){switch(n){case on:case xh:return{byteLength:1,components:1};case rs:case vh:case ei:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ln:case Ql:case An:return{byteLength:4,components:1};case Sh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Hh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zg(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
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
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a_=`#ifdef USE_BATCHING
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
#endif`,o_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f_=`#ifdef USE_IRIDESCENCE
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
#endif`,h_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,M_=`#define PI 3.141592653589793
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
} // validated`,E_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
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
#endif`,j_=`uniform sampler2D dfgLUT;
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
}`,Z_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,bx=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Jg,alphahash_pars_fragment:Qg,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:r_,aomap_pars_fragment:s_,batching_pars_vertex:a_,batching_vertex:o_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:u_,iridescence_fragment:f_,bumpmap_pars_fragment:h_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:__,color_pars_fragment:x_,color_pars_vertex:v_,color_vertex:S_,common:M_,cube_uv_reflection_fragment:E_,defaultnormal_vertex:y_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:A_,emissivemap_pars_fragment:w_,colorspace_fragment:C_,colorspace_pars_fragment:R_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:L_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:W_,envmap_vertex:U_,fog_vertex:N_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_pars_fragment:V_,lights_lambert_fragment:H_,lights_lambert_pars_fragment:G_,lights_pars_begin:k_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:$_,lights_physical_fragment:K_,lights_physical_pars_fragment:j_,lights_fragment_begin:Z_,lights_fragment_maps:J_,lights_fragment_end:Q_,logdepthbuf_fragment:e0,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:r0,map_pars_fragment:s0,map_particle_fragment:a0,map_particle_pars_fragment:o0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:h0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:_0,normal_pars_vertex:x0,normal_vertex:v0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:w0,project_vertex:C0,dithering_fragment:R0,dithering_pars_fragment:P0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:U0,shadowmap_vertex:N0,shadowmask_pars_fragment:F0,skinbase_vertex:O0,skinning_pars_vertex:B0,skinning_vertex:z0,skinnormal_vertex:V0,specularmap_fragment:H0,specularmap_pars_fragment:G0,tonemapping_fragment:k0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:$0,uv_vertex:K0,worldpos_vertex:j0,background_vert:Z0,background_frag:J0,backgroundCube_vert:Q0,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:rx,distance_vert:sx,distance_frag:ax,equirect_vert:ox,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:hx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:_x,meshnormal_frag:xx,meshphong_vert:vx,meshphong_frag:Sx,meshphysical_vert:Mx,meshphysical_frag:Ex,meshtoon_vert:yx,meshtoon_frag:bx,points_vert:Tx,points_frag:Ax,shadow_vert:wx,shadow_frag:Cx,sprite_vert:Rx,sprite_frag:Px},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Tn={basic:{uniforms:Nt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Nt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Nt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Nt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Nt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Nt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Nt([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Nt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Nt([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Nt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Nt([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Nt([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Nt([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Tn.physical={uniforms:Nt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ks={r:0,b:0,g:0},Ii=new ni,Dx=new xt;function Lx(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function v(w){let T=!1;const C=_(w);C===null?d(o,l):C&&C.isColor&&(d(C,1),T=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,T){const C=_(T);C&&(C.isCubeTexture||C.mapping===Ea)?(c===void 0&&(c=new ii(new ms(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:yr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ii.copy(T.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),c.material.uniforms.envMap.value=C,c.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Ii)),c.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,(f!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new ii(new ba(2,2),new In({name:"BackgroundMaterial",uniforms:yr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function d(w,T){w.getRGB(ks,Ih(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,T,a)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(o,l)},render:v,addToRenderList:g,dispose:b}}function Ix(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(E,U,D,F,j){let Z=!1;const q=f(F,D,U);s!==q&&(s=q,u(s.object)),Z=p(E,F,D,j),Z&&_(E,F,D,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(E,U,D,F),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function c(E){return n.deleteVertexArray(E)}function f(E,U,D){const F=D.wireframe===!0;let j=i[E.id];j===void 0&&(j={},i[E.id]=j);let Z=j[U.id];Z===void 0&&(Z={},j[U.id]=Z);let q=Z[F];return q===void 0&&(q=h(l()),Z[F]=q),q}function h(E){const U=[],D=[],F=[];for(let j=0;j<t;j++)U[j]=0,D[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,U,D,F){const j=s.attributes,Z=U.attributes;let q=0;const V=D.getAttributes();for(const ee in V)if(V[ee].location>=0){const re=j[ee];let fe=Z[ee];if(fe===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;q++}return s.attributesNum!==q||s.index!==F}function _(E,U,D,F){const j={},Z=U.attributes;let q=0;const V=D.getAttributes();for(const ee in V)if(V[ee].location>=0){let re=Z[ee];re===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),j[ee]=fe,q++}s.attributes=j,s.attributesNum=q,s.index=F}function v(){const E=s.newAttributes;for(let U=0,D=E.length;U<D;U++)E[U]=0}function g(E){d(E,0)}function d(E,U){const D=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;D[E]=1,F[E]===0&&(n.enableVertexAttribArray(E),F[E]=1),j[E]!==U&&(n.vertexAttribDivisor(E,U),j[E]=U)}function b(){const E=s.newAttributes,U=s.enabledAttributes;for(let D=0,F=U.length;D<F;D++)U[D]!==E[D]&&(n.disableVertexAttribArray(D),U[D]=0)}function w(E,U,D,F,j,Z,q){q===!0?n.vertexAttribIPointer(E,U,D,j,Z):n.vertexAttribPointer(E,U,D,F,j,Z)}function T(E,U,D,F){v();const j=F.attributes,Z=D.getAttributes(),q=U.defaultAttributeValues;for(const V in Z){const ee=Z[V];if(ee.location>=0){let se=j[V];if(se===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){const re=se.normalized,fe=se.itemSize,Te=e.get(se);if(Te===void 0)continue;const ce=Te.buffer,ge=Te.type,Le=Te.bytesPerElement,H=ge===n.INT||ge===n.UNSIGNED_INT||se.gpuType===Ql;if(se.isInterleavedBufferAttribute){const te=se.data,de=te.stride,Ie=se.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)d(ee.location+xe,te.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<ee.locationSize;xe++)g(ee.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let xe=0;xe<ee.locationSize;xe++)w(ee.location+xe,fe/ee.locationSize,ge,re,de*Le,(Ie+fe/ee.locationSize*xe)*Le,H)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)d(ee.location+te,se.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<ee.locationSize;te++)g(ee.location+te);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let te=0;te<ee.locationSize;te++)w(ee.location+te,fe/ee.locationSize,ge,re,fe*Le,fe/ee.locationSize*te*Le,H)}}else if(q!==void 0){const re=q[V];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(ee.location,re);break;case 3:n.vertexAttrib3fv(ee.location,re);break;case 4:n.vertexAttrib4fv(ee.location,re);break;default:n.vertexAttrib1fv(ee.location,re)}}}}b()}function C(){z();for(const E in i){const U=i[E];for(const D in U){const F=U[D];for(const j in F)c(F[j].object),delete F[j];delete U[D]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const D in U){const F=U[D];for(const j in F)c(F[j].object),delete F[j];delete U[D]}delete i[E.id]}function R(E){for(const U in i){const D=i[U];if(D[E.id]===void 0)continue;const F=D[E.id];for(const j in F)c(F[j].object),delete F[j];delete D[E.id]}}function z(){x(),a=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function Ux(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=c[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==pn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const z=R===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!z)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(We("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:T,maxSamples:C,samples:L}}function Fx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const b=s?0:i,w=b*4;let T=d.clippingState||null;l.value=T,T=c(_,h,w,p);for(let C=0;C!==w;++C)T[C]=t[C];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const d=p+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,T=p;w!==v;++w,T+=4)a.copy(f[w]).applyMatrix4(b,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ox(n){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=ki:o===Yo&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Yo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Fh(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const gi=4,bu=[.125,.215,.35,.446,.526,.582],zi=20,Bx=256,Nr=new Vh,Tu=new tt;let _o=null,xo=0,vo=0,So=!1;const zx=new Y;class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=zx}=s;_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,xo,vo),this._renderer.xr.enabled=So,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:ei,format:pn,colorSpace:Er,depthBuffer:!1},r=wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vx(s)),this._blurMaterial=Gx(s,e,t),this._ggxMaterial=Hx(s,e,t)}return r}_compileMaterial(e){const t=new ii(new vn,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Tu),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new ms,new Ph({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let d=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,d=!0):(g.color.copy(Tu),d=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[w],s.y,s.z)):T===1?(l.up.set(0,0,u[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[w],s.z)):(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[w]));const C=this._cubeSize;or(r,T*C,w>2?C:0,C,C),f.setRenderTarget(r),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ki||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),h=0+u*1.25,p=f*h,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-gi?i-_+gi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,or(s,g,d,3*v,2*v),r.setRenderTarget(s),r.render(o,Nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,or(e,g,d,3*v,2*v),r.setRenderTarget(e),r.render(o,Nr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=s/_,g=isFinite(s)?1+Math.floor(c*v):zi;g>zi&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const d=[];let b=0;for(let R=0;R<zi;++R){const z=R/v,x=Math.exp(-z*z/2);d.push(x),R===0?b+=x:R<g&&(b+=2*x)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=_,h.mipInt.value=w-i;const T=this._sizeLods[r],C=3*T*(r>w-gi?r-w+gi:0),L=4*(this._cubeSize-T);or(t,C,L,3*T,2*T),l.setRenderTarget(t),l.render(f,Nr)}}function Vx(n){const e=[],t=[],i=[];let r=n;const s=n-gi+1+bu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-gi?l=bu[a-n+gi-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,v=3,g=2,d=1,b=new Float32Array(v*_*p),w=new Float32Array(g*_*p),T=new Float32Array(d*_*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,z=L>2?0:-1,x=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];b.set(x,v*_*L),w.set(h,g*_*L);const E=[L,L,L,L,L,L];T.set(E,d*_*L)}const C=new vn;C.setAttribute("position",new cn(b,v)),C.setAttribute("uv",new cn(w,g)),C.setAttribute("faceIndex",new cn(T,d)),i.push(new ii(C,null)),r>gi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function wu(n,e,t){const i=new Dn(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hx(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Gx(n,e,t){const i=new Float32Array(zi),r=new Y(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Cu(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ru(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function kx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===qo||l===Yo,c=l===ki||l===Sr;if(u||c){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Au(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Au(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&os("WebGLRenderer: "+i+" extension not supported."),r}}}function Xx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let w=0,T=b.length;w<T;w+=3){const C=b[w+0],L=b[w+1],R=b[w+2];h.push(C,L,L,R,R,C)}}else if(_!==void 0){const b=_.array;v=_.version;for(let w=0,T=b.length/3-1;w<T;w+=3){const C=w+0,L=w+1,R=w+2;h.push(C,L,L,R,R,C)}}else return;const g=new(Th(h)?Lh:Dh)(h,1);g.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function qx(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*a,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function f(h,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/a,p[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let d=0;for(let b=0;b<_;b++)d+=p[b]*v[b];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Yx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $x(n,e,t){const i=new WeakMap,r=new _t;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){z.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let C=o.attributes.position.count*T,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*L*4*f),z=new Ah(R,C,L,f);z.type=An,z.needsUpdate=!0;const x=T*4;for(let U=0;U<f;U++){const D=d[U],F=b[U],j=w[U],Z=C*L*4*U;for(let q=0;q<D.count;q++){const V=q*x;_===!0&&(r.fromBufferAttribute(D,q),R[Z+V+0]=r.x,R[Z+V+1]=r.y,R[Z+V+2]=r.z,R[Z+V+3]=0),v===!0&&(r.fromBufferAttribute(F,q),R[Z+V+4]=r.x,R[Z+V+5]=r.y,R[Z+V+6]=r.z,R[Z+V+7]=0),g===!0&&(r.fromBufferAttribute(j,q),R[Z+V+8]=r.x,R[Z+V+9]=r.y,R[Z+V+10]=r.z,R[Z+V+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:z,size:new ot(C,L)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Kx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const jx={[uh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[mh]:"AGX_TONE_MAPPING",[gh]:"NEUTRAL_TONE_MAPPING",[ph]:"CUSTOM_TONE_MAPPING"};function Zx(n,e,t,i,r){const s=new Dn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Dn(e,t,{type:ei,depthBuffer:!1,stencilBuffer:!1}),o=new vn;o.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new jn([0,2,0,0,2,0],2));const l=new Gg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ii(o,l),c=new Vh(-1,1,1,-1,0,1);let f=null,h=null,p=!1,_,v=null,g=[],d=!1;this.setSize=function(b,w){s.setSize(b,w),a.setSize(b,w);for(let T=0;T<g.length;T++){const C=g[T];C.setSize&&C.setSize(b,w)}},this.setEffects=function(b){g=b,d=g.length>0&&g[0].isRenderPass===!0;const w=s.width,T=s.height;for(let C=0;C<g.length;C++){const L=g[C];L.setSize&&L.setSize(w,T)}},this.begin=function(b,w){if(p||b.toneMapping===Pn&&g.length===0)return!1;if(v=w,w!==null){const T=w.width,C=w.height;(s.width!==T||s.height!==C)&&this.setSize(T,C)}return d===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=Pn,!0},this.hasRenderPass=function(){return d},this.end=function(b,w){b.toneMapping=_,p=!0;let T=s,C=a;for(let L=0;L<g.length;L++){const R=g[L];if(R.enabled!==!1&&(R.render(b,C,T,w),R.needsSwap!==!1)){const z=T;T=C,C=z}}if(f!==b.outputColorSpace||h!==b.toneMapping){f=b.outputColorSpace,h=b.toneMapping,l.defines={},Ze.getTransfer(f)===st&&(l.defines.SRGB_TRANSFER="");const L=jx[h];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(v),b.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Gh=new Lt,Pl=new ls(1,1),kh=new Ah,Wh=new _g,Xh=new Nh,Pu=[],Du=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pu[r];if(s===void 0&&(s=new Float32Array(r),Pu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Aa(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),Et(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),Et(t,i)}}function rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),Et(t,i)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pl.compareFunction=t.isReversedDepthBuffer()?ac:sc,s=Pl):s=Gh,t.setTexture2D(e||s,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wh,r)}function mv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xh,r)}function gv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function _v(n){switch(n){case 5126:return Jx;case 35664:return Qx;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return fv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function xv(n,e){n.uniform1fv(this.addr,e)}function vv(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Sv(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Mv(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ev(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yv(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bv(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function Av(n,e){n.uniform2iv(this.addr,e)}function wv(n,e){n.uniform3iv(this.addr,e)}function Cv(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Pv(n,e){n.uniform2uiv(this.addr,e)}function Dv(n,e){n.uniform3uiv(this.addr,e)}function Lv(n,e){n.uniform4uiv(this.addr,e)}function Iv(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Pl:a=Gh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Uv(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wh,s[a])}function Nv(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xh,s[a])}function Fv(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||kh,s[a])}function Ov(n){switch(n){case 5126:return xv;case 35664:return vv;case 35665:return Sv;case 35666:return Mv;case 35674:return Ev;case 35675:return yv;case 35676:return bv;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return wv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class Vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Nu(n,e){n.seq.push(e),n.map[e.id]=e}function Hv(n,e,t){const i=n.name,r=i.length;for(Mo.lastIndex=0;;){const s=Mo.exec(i),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Nu(t,u===void 0?new Bv(o,n,e):new zv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Vv(o),Nu(t,f)),t=f}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Hv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gv=37297;let kv=0;function Wv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ou=new Ye;function Xv(n){Ze._getMatrix(Ou,Ze.workingColorSpace,n);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Wv(n.getShaderSource(e),o)}else return s}function qv(n,e){const t=Xv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yv={[uh]:"Linear",[fh]:"Reinhard",[hh]:"Cineon",[dh]:"ACESFilmic",[mh]:"AgX",[gh]:"Neutral",[ph]:"Custom"};function $v(n,e){const t=Yv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new Y;function Kv(){Ze.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function Zv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vr(n){return n!==""}function zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(Qv,tS)}const eS=new Map;function tS(n,e){let t=$e[e];if(t===void 0){const i=eS.get(e);if(i!==void 0)t=$e[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(nS,iS)}function iS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const rS={[$s]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function sS(n){return rS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aS={[ki]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function oS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lS={[Sr]:"ENVMAP_MODE_REFRACTION"};function cS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uS={[ch]:"ENVMAP_BLENDING_MULTIPLY",[Zm]:"ENVMAP_BLENDING_MIX",[Jm]:"ENVMAP_BLENDING_ADD"};function fS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uS[n.combine]||"ENVMAP_BLENDING_NONE"}function hS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sS(t),u=oS(t),c=cS(t),f=fS(t),h=hS(t),p=jv(t),_=Zv(s),v=r.createProgram();let g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(g=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Pn?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Dl(a),a=zu(a,t),a=Vu(a,t),o=Dl(o),o=zu(o,t),o=Vu(o,t),a=Hu(a),o=Hu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+g+a,T=b+d+o,C=Fu(r,r.VERTEX_SHADER,w),L=Fu(r,r.FRAGMENT_SHADER,T);r.attachShader(v,C),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(U){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",F=r.getShaderInfoLog(C)||"",j=r.getShaderInfoLog(L)||"",Z=D.trim(),q=F.trim(),V=j.trim();let ee=!0,se=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,L);else{const re=Bu(r,C,"vertex"),fe=Bu(r,L,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+re+`
`+fe)}else Z!==""?We("WebGLProgram: Program Info Log:",Z):(q===""||V==="")&&(se=!1);se&&(U.diagnostics={runnable:ee,programLog:Z,vertexShader:{log:q,prefix:g},fragmentShader:{log:V,prefix:d}})}r.deleteShader(C),r.deleteShader(L),z=new Qs(r,v),x=Jv(r,v)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,Gv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=L,this}let pS=0;class mS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gS(e),t.set(e,i)),i}}class gS{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}}function _S(n,e,t,i,r,s,a){const o=new Ch,l=new mS,u=new Set,c=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return u.add(x),x===0?"uv":`uv${x}`}function g(x,E,U,D,F){const j=D.fog,Z=F.geometry,q=x.isMeshStandardMaterial?D.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),ee=V&&V.mapping===Ea?V.image.height:null,se=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=re!==void 0?re.length:0;let Te=0;Z.morphAttributes.position!==void 0&&(Te=1),Z.morphAttributes.normal!==void 0&&(Te=2),Z.morphAttributes.color!==void 0&&(Te=3);let ce,ge,Le,H;if(se){const it=Tn[se];ce=it.vertexShader,ge=it.fragmentShader}else ce=x.vertexShader,ge=x.fragmentShader,l.update(x),Le=l.getVertexShaderID(x),H=l.getFragmentShaderID(x);const te=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Be=!!x.map,y=!!x.matcap,P=!!V,O=!!x.aoMap,J=!!x.lightMap,X=!!x.bumpMap,ne=!!x.normalMap,A=!!x.displacementMap,ue=!!x.emissiveMap,ae=!!x.metalnessMap,ie=!!x.roughnessMap,oe=x.anisotropy>0,S=x.clearcoat>0,m=x.dispersion>0,I=x.iridescence>0,W=x.sheen>0,Q=x.transmission>0,k=oe&&!!x.anisotropyMap,Ae=S&&!!x.clearcoatMap,pe=S&&!!x.clearcoatNormalMap,Re=S&&!!x.clearcoatRoughnessMap,Fe=I&&!!x.iridescenceMap,he=I&&!!x.iridescenceThicknessMap,Se=W&&!!x.sheenColorMap,Ee=W&&!!x.sheenRoughnessMap,Pe=!!x.specularMap,ve=!!x.specularColorMap,Xe=!!x.specularIntensityMap,N=Q&&!!x.transmissionMap,Ce=Q&&!!x.thicknessMap,_e=!!x.gradientMap,De=!!x.alphaMap,me=x.alphaTest>0,le=!!x.alphaHash,Me=!!x.extensions;let ke=Pn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ut={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:ge,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Er,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:y,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:ee,aoMap:O,lightMap:J,bumpMap:X,normalMap:ne,displacementMap:A,emissiveMap:ue,normalMapObjectSpace:ne&&x.normalMapType===ng,normalMapTangentSpace:ne&&x.normalMapType===tg,metalnessMap:ae,roughnessMap:ie,anisotropy:oe,anisotropyMap:k,clearcoat:S,clearcoatMap:Ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:m,iridescence:I,iridescenceMap:Fe,iridescenceThicknessMap:he,sheen:W,sheenColorMap:Se,sheenRoughnessMap:Ee,specularMap:Pe,specularColorMap:ve,specularIntensityMap:Xe,transmission:Q,transmissionMap:N,thicknessMap:Ce,gradientMap:_e,opaque:x.transparent===!1&&x.blending===gr&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:me,alphaHash:le,combine:x.combine,mapUv:Be&&v(x.map.channel),aoMapUv:O&&v(x.aoMap.channel),lightMapUv:J&&v(x.lightMap.channel),bumpMapUv:X&&v(x.bumpMap.channel),normalMapUv:ne&&v(x.normalMap.channel),displacementMapUv:A&&v(x.displacementMap.channel),emissiveMapUv:ue&&v(x.emissiveMap.channel),metalnessMapUv:ae&&v(x.metalnessMap.channel),roughnessMapUv:ie&&v(x.roughnessMap.channel),anisotropyMapUv:k&&v(x.anisotropyMap.channel),clearcoatMapUv:Ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(x.sheenRoughnessMap.channel),specularMapUv:Pe&&v(x.specularMap.channel),specularColorMapUv:ve&&v(x.specularColorMap.channel),specularIntensityMapUv:Xe&&v(x.specularIntensityMap.channel),transmissionMapUv:N&&v(x.transmissionMap.channel),thicknessMapUv:Ce&&v(x.thicknessMap.channel),alphaMapUv:De&&v(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ne||oe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Be||De),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:ue&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(b(E,x),w(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const E=_[x.type];let U;if(E){const D=Tn[E];U=Pg.clone(D.uniforms)}else U=x.uniforms;return U}function C(x,E){let U=f.get(E);return U!==void 0?++U.usedTimes:(U=new dS(n,E,x,s),c.push(U),f.set(E,U)),U}function L(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:T,acquireProgram:C,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:z}}function xS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function vS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,_,v,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function o(f,h,p,_,v,g){const d=a(f,h,p,_,v,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,v,g){const d=a(f,h,p,_,v,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||vS),i.length>1&&i.sort(h||ku),r.length>1&&r.sort(h||ku)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function SS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wu,n.set(i,[a])):r>=s.length?(a=new Wu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function MS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function ES(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yS=0;function bS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TS(n){const e=new MS,t=ES(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new xt,a=new xt;function o(u){let c=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,v=0,g=0,d=0,b=0,w=0,T=0,C=0,L=0,R=0;u.sort(bS);for(let x=0,E=u.length;x<E;x++){const U=u[x],D=U.color,F=U.intensity,j=U.distance;let Z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Mr?Z=U.shadow.map.texture:Z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)c+=D.r*F,f+=D.g*F,h+=D.b*F;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],F);R++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,ee=t.get(U);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=U.shadow.matrix,b++}i.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(D).multiplyScalar(F),q.distance=j,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[v]=q;const V=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,V.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[v]=V.matrix,U.castShadow){const ee=t.get(U);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=Z,T++}v++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(D).multiplyScalar(F),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=q,g++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const V=U.shadow,ee=t.get(U);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,i.pointShadow[_]=ee,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=U.shadow.matrix,w++}i.point[_]=q,_++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(F),q.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[d]=q,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==g||z.hemiLength!==d||z.numDirectionalShadows!==b||z.numPointShadows!==w||z.numSpotShadows!==T||z.numSpotMaps!==C||z.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,z.directionalLength=p,z.pointLength=_,z.spotLength=v,z.rectAreaLength=g,z.hemiLength=d,z.numDirectionalShadows=b,z.numPointShadows=w,z.numSpotShadows=T,z.numSpotMaps=C,z.numLightProbes=R,i.version=yS++)}function l(u,c){let f=0,h=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let d=0,b=u.length;d<b;d++){const w=u[d];if(w.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),f++}else if(w.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),h++}else if(w.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Xu(n){const e=new TS(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function AS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xu(n),e.set(r,[o])):s>=a.length?(o=new Xu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const wS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,RS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],PS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],qu=new xt,Fr=new Y,Eo=new Y;function DS(n,e,t){let i=new Oh;const r=new ot,s=new ot,a=new _t,o=new kg,l=new Wg,u={},c=t.maxTextureSize,f={[Mi]:Wt,[Wt]:Mi,[qn]:qn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:wS,fragmentShader:CS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ii(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let d=this.type;this.render=function(L,R,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;L.type===Lm&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=$s);const x=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),D=n.state;D.setBlending($n),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=d!==this.type;F&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(Z=>Z.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,Z=L.length;j<Z;j++){const q=L[j],V=q.shadow;if(V===void 0){We("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ee=V.getFrameExtents();if(r.multiply(ee),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zr){if(q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Dn(r.x,r.y,{format:Mr,type:ei,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new ls(r.x,r.y,An),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=ti,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt}else{q.isPointLight?(V.map=new Fh(r.x),V.map.depthTexture=new Hg(r.x,Ln)):(V.map=new Dn(r.x,r.y),V.map.depthTexture=new ls(r.x,r.y,Ln)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=ti;const re=n.state.buffers.depth.getReversed();this.type===$s?(V.map.depthTexture.compareFunction=re?ac:sc,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt)}V.camera.updateProjectionMatrix()}const se=V.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<se;re++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,re),n.clear();else{re===0&&(n.setRenderTarget(V.map),n.clear());const fe=V.getViewport(re);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),D.viewport(a)}if(q.isPointLight){const fe=V.camera,Te=V.matrix,ce=q.distance||fe.far;ce!==fe.far&&(fe.far=ce,fe.updateProjectionMatrix()),Fr.setFromMatrixPosition(q.matrixWorld),fe.position.copy(Fr),Eo.copy(fe.position),Eo.add(RS[re]),fe.up.copy(PS[re]),fe.lookAt(Eo),fe.updateMatrixWorld(),Te.makeTranslation(-Fr.x,-Fr.y,-Fr.z),qu.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(qu,fe.coordinateSystem,fe.reversedDepth)}else V.updateMatrices(q);i=V.getFrustum(),T(R,z,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===zr&&b(V,z),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(x,E,U)};function b(L,R){const z=e.update(v);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Dn(r.x,r.y,{format:Mr,type:ei})),h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(R,null,z,h,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(R,null,z,p,v,null)}function w(L,R,z,x){let E=null;const U=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)E=U;else if(E=z.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=E.uuid,F=R.uuid;let j=u[D];j===void 0&&(j={},u[D]=j);let Z=j[F];Z===void 0&&(Z=E.clone(),j[F]=Z,R.addEventListener("dispose",C)),E=Z}if(E.visible=R.visible,E.wireframe=R.wireframe,x===zr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=z}return E}function T(L,R,z,x,E){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===zr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const F=e.update(L),j=L.material;if(Array.isArray(j)){const Z=F.groups;for(let q=0,V=Z.length;q<V;q++){const ee=Z[q],se=j[ee.materialIndex];if(se&&se.visible){const re=w(L,se,x,E);L.onBeforeShadow(n,L,R,z,F,re,ee),n.renderBufferDirect(z,null,F,re,L,ee),L.onAfterShadow(n,L,R,z,F,re,ee)}}}else if(j.visible){const Z=w(L,j,x,E);L.onBeforeShadow(n,L,R,z,F,Z,null),n.renderBufferDirect(z,null,F,Z,L,null),L.onAfterShadow(n,L,R,z,F,Z,null)}}const D=L.children;for(let F=0,j=D.length;F<j;F++)T(D[F],R,z,x,E)}function C(L){L.target.removeEventListener("dispose",C);for(const z in u){const x=u[z],E=L.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const LS={[zo]:Vo,[Ho]:Wo,[Go]:Xo,[vr]:ko,[Vo]:zo,[Wo]:Ho,[Xo]:Go,[ko]:vr};function IS(n,e){function t(){let N=!1;const Ce=new _t;let _e=null;const De=new _t(0,0,0,0);return{setMask:function(me){_e!==me&&!N&&(n.colorMask(me,me,me,me),_e=me)},setLocked:function(me){N=me},setClear:function(me,le,Me,ke,ut){ut===!0&&(me*=ke,le*=ke,Me*=ke),Ce.set(me,le,Me,ke),De.equals(Ce)===!1&&(n.clearColor(me,le,Me,ke),De.copy(Ce))},reset:function(){N=!1,_e=null,De.set(-1,0,0,0)}}}function i(){let N=!1,Ce=!1,_e=null,De=null,me=null;return{setReversed:function(le){if(Ce!==le){const Me=e.get("EXT_clip_control");le?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Ce=le;const ke=me;me=null,this.setClear(ke)}},getReversed:function(){return Ce},setTest:function(le){le?te(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(le){_e!==le&&!N&&(n.depthMask(le),_e=le)},setFunc:function(le){if(Ce&&(le=LS[le]),De!==le){switch(le){case zo:n.depthFunc(n.NEVER);break;case Vo:n.depthFunc(n.ALWAYS);break;case Ho:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Go:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Wo:n.depthFunc(n.GREATER);break;case Xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=le}},setLocked:function(le){N=le},setClear:function(le){me!==le&&(Ce&&(le=1-le),n.clearDepth(le),me=le)},reset:function(){N=!1,_e=null,De=null,me=null,Ce=!1}}}function r(){let N=!1,Ce=null,_e=null,De=null,me=null,le=null,Me=null,ke=null,ut=null;return{setTest:function(it){N||(it?te(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(it){Ce!==it&&!N&&(n.stencilMask(it),Ce=it)},setFunc:function(it,Sn,Un){(_e!==it||De!==Sn||me!==Un)&&(n.stencilFunc(it,Sn,Un),_e=it,De=Sn,me=Un)},setOp:function(it,Sn,Un){(le!==it||Me!==Sn||ke!==Un)&&(n.stencilOp(it,Sn,Un),le=it,Me=Sn,ke=Un)},setLocked:function(it){N=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){N=!1,Ce=null,_e=null,De=null,me=null,le=null,Me=null,ke=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],_=null,v=!1,g=null,d=null,b=null,w=null,T=null,C=null,L=null,R=new tt(0,0,0),z=0,x=!1,E=null,U=null,D=null,F=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=V>=2);let se=null,re={};const fe=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),ce=new _t().fromArray(fe),ge=new _t().fromArray(Te);function Le(N,Ce,_e,De){const me=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<_e;Me++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(Ce+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return le}const H={};H[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(vr),X(!1),ne(Zc),te(n.CULL_FACE),O($n);function te(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function de(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ie(N,Ce){return f[N]!==Ce?(n.bindFramebuffer(N,Ce),f[N]=Ce,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function xe(N,Ce){let _e=p,De=!1;if(N){_e=h.get(Ce),_e===void 0&&(_e=[],h.set(Ce,_e));const me=N.textures;if(_e.length!==me.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Me=me.length;le<Me;le++)_e[le]=n.COLOR_ATTACHMENT0+le;_e.length=me.length,De=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,De=!0);De&&n.drawBuffers(_e)}function Be(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const y={[Bi]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Nm]:n.FUNC_REVERSE_SUBTRACT};y[Fm]=n.MIN,y[Om]=n.MAX;const P={[Bm]:n.ZERO,[zm]:n.ONE,[Vm]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[qm]:n.SRC_ALPHA_SATURATE,[Wm]:n.DST_COLOR,[Gm]:n.DST_ALPHA,[Hm]:n.ONE_MINUS_SRC_COLOR,[Bo]:n.ONE_MINUS_SRC_ALPHA,[Xm]:n.ONE_MINUS_DST_COLOR,[km]:n.ONE_MINUS_DST_ALPHA,[Ym]:n.CONSTANT_COLOR,[$m]:n.ONE_MINUS_CONSTANT_COLOR,[Km]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function O(N,Ce,_e,De,me,le,Me,ke,ut,it){if(N===$n){v===!0&&(de(n.BLEND),v=!1);return}if(v===!1&&(te(n.BLEND),v=!0),N!==Im){if(N!==g||it!==x){if((d!==Bi||T!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,T=Bi),it)switch(N){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fo:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}b=null,w=null,C=null,L=null,R.set(0,0,0),z=0,g=N,x=it}return}me=me||Ce,le=le||_e,Me=Me||De,(Ce!==d||me!==T)&&(n.blendEquationSeparate(y[Ce],y[me]),d=Ce,T=me),(_e!==b||De!==w||le!==C||Me!==L)&&(n.blendFuncSeparate(P[_e],P[De],P[le],P[Me]),b=_e,w=De,C=le,L=Me),(ke.equals(R)===!1||ut!==z)&&(n.blendColor(ke.r,ke.g,ke.b,ut),R.copy(ke),z=ut),g=N,x=!1}function J(N,Ce){N.side===qn?de(n.CULL_FACE):te(n.CULL_FACE);let _e=N.side===Wt;Ce&&(_e=!_e),X(_e),N.blending===gr&&N.transparent===!1?O($n):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const De=N.stencilWrite;o.setTest(De),De&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){E!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),E=N)}function ne(N){N!==Pm?(te(n.CULL_FACE),N!==U&&(N===Zc?n.cullFace(n.BACK):N===Dm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),U=N}function A(N){N!==D&&(q&&n.lineWidth(N),D=N)}function ue(N,Ce,_e){N?(te(n.POLYGON_OFFSET_FILL),(F!==Ce||j!==_e)&&(n.polygonOffset(Ce,_e),F=Ce,j=_e)):de(n.POLYGON_OFFSET_FILL)}function ae(N){N?te(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function ie(N){N===void 0&&(N=n.TEXTURE0+Z-1),se!==N&&(n.activeTexture(N),se=N)}function oe(N,Ce,_e){_e===void 0&&(se===null?_e=n.TEXTURE0+Z-1:_e=se);let De=re[_e];De===void 0&&(De={type:void 0,texture:void 0},re[_e]=De),(De.type!==N||De.texture!==Ce)&&(se!==_e&&(n.activeTexture(_e),se=_e),n.bindTexture(N,Ce||H[N]),De.type=N,De.texture=Ce)}function S(){const N=re[se];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function W(){try{n.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Q(){try{n.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function pe(){try{n.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Re(){try{n.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Fe(){try{n.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function he(){try{n.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Se(N){ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function Ee(N){ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Pe(N,Ce){let _e=u.get(Ce);_e===void 0&&(_e=new WeakMap,u.set(Ce,_e));let De=_e.get(N);De===void 0&&(De=n.getUniformBlockIndex(Ce,N.name),_e.set(N,De))}function ve(N,Ce){const De=u.get(Ce).get(N);l.get(Ce)!==De&&(n.uniformBlockBinding(Ce,De,N.__bindingPointIndex),l.set(Ce,De))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},se=null,re={},f={},h=new WeakMap,p=[],_=null,v=!1,g=null,d=null,b=null,w=null,T=null,C=null,L=null,R=new tt(0,0,0),z=0,x=!1,E=null,U=null,D=null,F=null,j=null,ce.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:de,bindFramebuffer:Ie,drawBuffers:xe,useProgram:Be,setBlending:O,setMaterial:J,setFlipSided:X,setCullFace:ne,setLineWidth:A,setPolygonOffset:ue,setScissorTest:ae,activeTexture:ie,bindTexture:oe,unbindTexture:S,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:Fe,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Re,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:k,compressedTexSubImage3D:Ae,scissor:Se,viewport:Ee,reset:Xe}}function US(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,m){return p?new OffscreenCanvas(S,m):as("canvas")}function v(S,m,I){let W=1;const Q=oe(S);if((Q.width>I||Q.height>I)&&(W=I/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(W*Q.width),Ae=Math.floor(W*Q.height);f===void 0&&(f=_(k,Ae));const pe=m?_(k,Ae):f;return pe.width=k,pe.height=Ae,pe.getContext("2d").drawImage(S,0,0,k,Ae),We("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+k+"x"+Ae+")."),pe}else return"data"in S&&We("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function g(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,m,I,W,Q=!1){if(S!==null){if(n[S]!==void 0)return n[S];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=m;if(m===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),m===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),m===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),m===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),m===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),m===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),m===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),m===n.RGBA){const Ae=Q?ca:Ze.getTransfer(W);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=Ae===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function T(S,m){let I;return S?m===null||m===Ln||m===ss?I=n.DEPTH24_STENCIL8:m===An?I=n.DEPTH32F_STENCIL8:m===rs&&(I=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ln||m===ss?I=n.DEPTH_COMPONENT24:m===An?I=n.DEPTH_COMPONENT32F:m===rs&&(I=n.DEPTH_COMPONENT16),I}function C(S,m){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==Tt&&S.minFilter!==Pt?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function L(S){const m=S.target;m.removeEventListener("dispose",L),z(m),m.isVideoTexture&&c.delete(m)}function R(S){const m=S.target;m.removeEventListener("dispose",R),E(m)}function z(S){const m=i.get(S);if(m.__webglInit===void 0)return;const I=S.source,W=h.get(I);if(W){const Q=W[m.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(S),Object.keys(W).length===0&&h.delete(I)}i.remove(S)}function x(S){const m=i.get(S);n.deleteTexture(m.__webglTexture);const I=S.source,W=h.get(I);delete W[m.__cacheKey],a.memory.textures--}function E(S){const m=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let Q=0;Q<m.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(m.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)n.deleteFramebuffer(m.__webglFramebuffer[W]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=S.textures;for(let W=0,Q=I.length;W<Q;W++){const k=i.get(I[W]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(I[W])}i.remove(S)}let U=0;function D(){U=0}function F(){const S=U;return S>=r.maxTextures&&We("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function j(S){const m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function Z(S,m){const I=i.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){const W=S.image;if(W===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{H(I,S,m);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+m)}function q(S,m){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){H(I,S,m);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+m)}function V(S,m){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){H(I,S,m);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+m)}function ee(S,m){const I=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){te(I,S,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+m)}const se={[$o]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},re={[Tt]:n.NEAREST,[Qm]:n.NEAREST_MIPMAP_NEAREST,[Es]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},fe={[ig]:n.NEVER,[lg]:n.ALWAYS,[rg]:n.LESS,[sc]:n.LEQUAL,[sg]:n.EQUAL,[ac]:n.GEQUAL,[ag]:n.GREATER,[og]:n.NOTEQUAL};function Te(S,m){if(m.type===An&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Pt||m.magFilter===Wa||m.magFilter===Es||m.magFilter===Vi||m.minFilter===Pt||m.minFilter===Wa||m.minFilter===Es||m.minFilter===Vi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,se[m.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,se[m.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,se[m.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,re[m.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,re[m.minFilter]),m.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,fe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==Es&&m.minFilter!==Vi||m.type===An&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ce(S,m){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",L));const W=m.source;let Q=h.get(W);Q===void 0&&(Q={},h.set(W,Q));const k=j(m);if(k!==S.__cacheKey){Q[k]===void 0&&(Q[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[k].usedTimes++;const Ae=Q[S.__cacheKey];Ae!==void 0&&(Q[S.__cacheKey].usedTimes--,Ae.usedTimes===0&&x(m)),S.__cacheKey=k,S.__webglTexture=Q[k].texture}return I}function ge(S,m,I){return Math.floor(Math.floor(S/I)/m)}function Le(S,m,I,W){const k=S.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,I,W,m.data);else{k.sort((he,Se)=>he.start-Se.start);let Ae=0;for(let he=1;he<k.length;he++){const Se=k[Ae],Ee=k[he],Pe=Se.start+Se.count,ve=ge(Ee.start,m.width,4),Xe=ge(Se.start,m.width,4);Ee.start<=Pe+1&&ve===Xe&&ge(Ee.start+Ee.count-1,m.width,4)===ve?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++Ae,k[Ae]=Ee)}k.length=Ae+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let he=0,Se=k.length;he<Se;he++){const Ee=k[he],Pe=Math.floor(Ee.start/4),ve=Math.ceil(Ee.count/4),Xe=Pe%m.width,N=Math.floor(Pe/m.width),Ce=ve,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Xe,N,Ce,_e,I,W,m.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function H(S,m,I){let W=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=n.TEXTURE_3D);const Q=ce(S,m),k=m.source;t.bindTexture(W,S.__webglTexture,n.TEXTURE0+I);const Ae=i.get(k);if(k.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const pe=Ze.getPrimaries(Ze.workingColorSpace),Re=m.colorSpace===mi?null:Ze.getPrimaries(m.colorSpace),Fe=m.colorSpace===mi||pe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let he=v(m.image,!1,r.maxTextureSize);he=ie(m,he);const Se=s.convert(m.format,m.colorSpace),Ee=s.convert(m.type);let Pe=w(m.internalFormat,Se,Ee,m.colorSpace,m.isVideoTexture);Te(W,m);let ve;const Xe=m.mipmaps,N=m.isVideoTexture!==!0,Ce=Ae.__version===void 0||Q===!0,_e=k.dataReady,De=C(m,he);if(m.isDepthTexture)Pe=T(m.format===Hi,m.type),Ce&&(N?t.texStorage2D(n.TEXTURE_2D,1,Pe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,Se,Ee,null));else if(m.isDataTexture)if(Xe.length>0){N&&Ce&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Xe[0].width,Xe[0].height);for(let me=0,le=Xe.length;me<le;me++)ve=Xe[me],N?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ee,ve.data):t.texImage2D(n.TEXTURE_2D,me,Pe,ve.width,ve.height,0,Se,Ee,ve.data);m.generateMipmaps=!1}else N?(Ce&&t.texStorage2D(n.TEXTURE_2D,De,Pe,he.width,he.height),_e&&Le(m,he,Se,Ee)):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,Se,Ee,he.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){N&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,Xe[0].width,Xe[0].height,he.depth);for(let me=0,le=Xe.length;me<le;me++)if(ve=Xe[me],m.format!==pn)if(Se!==null)if(N){if(_e)if(m.layerUpdates.size>0){const Me=yu(ve.width,ve.height,m.format,m.type);for(const ke of m.layerUpdates){const ut=ve.data.subarray(ke*Me/ve.data.BYTES_PER_ELEMENT,(ke+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ke,ve.width,ve.height,1,Se,ut)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,he.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Pe,ve.width,ve.height,he.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,he.depth,Se,Ee,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Pe,ve.width,ve.height,he.depth,0,Se,Ee,ve.data)}else{N&&Ce&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Xe[0].width,Xe[0].height);for(let me=0,le=Xe.length;me<le;me++)ve=Xe[me],m.format!==pn?Se!==null?N?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Pe,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ee,ve.data):t.texImage2D(n.TEXTURE_2D,me,Pe,ve.width,ve.height,0,Se,Ee,ve.data)}else if(m.isDataArrayTexture)if(N){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,he.width,he.height,he.depth),_e)if(m.layerUpdates.size>0){const me=yu(he.width,he.height,m.format,m.type);for(const le of m.layerUpdates){const Me=he.data.subarray(le*me/he.data.BYTES_PER_ELEMENT,(le+1)*me/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,Se,Ee,Me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,Ee,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Se,Ee,he.data);else if(m.isData3DTexture)N?(Ce&&t.texStorage3D(n.TEXTURE_3D,De,Pe,he.width,he.height,he.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,Ee,he.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Se,Ee,he.data);else if(m.isFramebufferTexture){if(Ce)if(N)t.texStorage2D(n.TEXTURE_2D,De,Pe,he.width,he.height);else{let me=he.width,le=he.height;for(let Me=0;Me<De;Me++)t.texImage2D(n.TEXTURE_2D,Me,Pe,me,le,0,Se,Ee,null),me>>=1,le>>=1}}else if(Xe.length>0){if(N&&Ce){const me=oe(Xe[0]);t.texStorage2D(n.TEXTURE_2D,De,Pe,me.width,me.height)}for(let me=0,le=Xe.length;me<le;me++)ve=Xe[me],N?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Se,Ee,ve):t.texImage2D(n.TEXTURE_2D,me,Pe,Se,Ee,ve);m.generateMipmaps=!1}else if(N){if(Ce){const me=oe(he);t.texStorage2D(n.TEXTURE_2D,De,Pe,me.width,me.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ee,he)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Ee,he);g(m)&&d(W),Ae.__version=k.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function te(S,m,I){if(m.image.length!==6)return;const W=ce(S,m),Q=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);const k=i.get(Q);if(Q.version!==k.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const Ae=Ze.getPrimaries(Ze.workingColorSpace),pe=m.colorSpace===mi?null:Ze.getPrimaries(m.colorSpace),Re=m.colorSpace===mi||Ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Fe=m.isCompressedTexture||m.image[0].isCompressedTexture,he=m.image[0]&&m.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!Fe&&!he?Se[le]=v(m.image[le],!0,r.maxCubemapSize):Se[le]=he?m.image[le].image:m.image[le],Se[le]=ie(m,Se[le]);const Ee=Se[0],Pe=s.convert(m.format,m.colorSpace),ve=s.convert(m.type),Xe=w(m.internalFormat,Pe,ve,m.colorSpace),N=m.isVideoTexture!==!0,Ce=k.__version===void 0||W===!0,_e=Q.dataReady;let De=C(m,Ee);Te(n.TEXTURE_CUBE_MAP,m);let me;if(Fe){N&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,Ee.width,Ee.height);for(let le=0;le<6;le++){me=Se[le].mipmaps;for(let Me=0;Me<me.length;Me++){const ke=me[Me];m.format!==pn?Pe!==null?N?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Xe,ke.width,ke.height,0,ke.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,ke.width,ke.height,Pe,ve,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Xe,ke.width,ke.height,0,Pe,ve,ke.data)}}}else{if(me=m.mipmaps,N&&Ce){me.length>0&&De++;const le=oe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,le.width,le.height)}for(let le=0;le<6;le++)if(he){N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,Pe,ve,Se[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,Se[le].width,Se[le].height,0,Pe,ve,Se[le].data);for(let Me=0;Me<me.length;Me++){const ut=me[Me].image[le].image;N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,ut.width,ut.height,Pe,ve,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Xe,ut.width,ut.height,0,Pe,ve,ut.data)}}else{N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,ve,Se[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,Pe,ve,Se[le]);for(let Me=0;Me<me.length;Me++){const ke=me[Me];N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Pe,ve,ke.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Xe,Pe,ve,ke.image[le])}}}g(m)&&d(n.TEXTURE_CUBE_MAP),k.__version=Q.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function de(S,m,I,W,Q,k){const Ae=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),Re=w(I.internalFormat,Ae,pe,I.colorSpace),Fe=i.get(m),he=i.get(I);if(he.__renderTarget=m,!Fe.__hasExternalTextures){const Se=Math.max(1,m.width>>k),Ee=Math.max(1,m.height>>k);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,k,Re,Se,Ee,m.depth,0,Ae,pe,null):t.texImage2D(Q,k,Re,Se,Ee,0,Ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ue(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,he.__webglTexture,0,A(m)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,he.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(S,m,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),m.depthBuffer){const W=m.depthTexture,Q=W&&W.isDepthTexture?W.type:null,k=T(m.stencilBuffer,Q),Ae=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(m),k,m.width,m.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(m),k,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,k,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,S)}else{const W=m.textures;for(let Q=0;Q<W.length;Q++){const k=W[Q],Ae=s.convert(k.format,k.colorSpace),pe=s.convert(k.type),Re=w(k.internalFormat,Ae,pe,k.colorSpace);ue(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(m),Re,m.width,m.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(m),Re,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,Re,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(S,m,I){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(m.depthTexture);if(Q.__renderTarget=m,(!Q.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,m.depthTexture.addEventListener("dispose",L)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Te(n.TEXTURE_CUBE_MAP,m.depthTexture);const Fe=s.convert(m.depthTexture.format),he=s.convert(m.depthTexture.type);let Se;m.depthTexture.format===ti?Se=n.DEPTH_COMPONENT24:m.depthTexture.format===Hi&&(Se=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,m.width,m.height,0,Fe,he,null)}}else Z(m.depthTexture,0);const k=Q.__webglTexture,Ae=A(m),pe=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Re=m.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ti)ue(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,pe,k,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Re,pe,k,0);else if(m.depthTexture.format===Hi)ue(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,pe,k,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Re,pe,k,0);else throw new Error("Unknown depthTexture format")}function Be(S){const m=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){const W=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const Q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),m.__depthDisposeCallback=Q}m.__boundDepthTexture=W}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(I)for(let W=0;W<6;W++)xe(m.__webglFramebuffer[W],S,W);else{const W=S.texture.mipmaps;W&&W.length>0?xe(m.__webglFramebuffer[0],S,0):xe(m.__webglFramebuffer,S,0)}else if(I){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=n.createRenderbuffer(),Ie(m.__webglDepthbuffer[W],S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}else{const W=S.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ie(m.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function y(S,m,I){const W=i.get(S);m!==void 0&&de(W.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Be(S)}function P(S){const m=S.texture,I=i.get(S),W=i.get(m);S.addEventListener("dispose",R);const Q=S.textures,k=S.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=m.version,a.memory.textures++),k){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let Re=0;Re<m.mipmaps.length;Re++)I.__webglFramebuffer[pe][Re]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<m.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let pe=0,Re=Q.length;pe<Re;pe++){const Fe=i.get(Q[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&ue(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Re=Q[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Fe=s.convert(Re.format,Re.colorSpace),he=s.convert(Re.type),Se=w(Re.internalFormat,Fe,he,Re.colorSpace,S.isXRRenderTarget===!0),Ee=A(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Te(n.TEXTURE_CUBE_MAP,m);for(let pe=0;pe<6;pe++)if(m.mipmaps&&m.mipmaps.length>0)for(let Re=0;Re<m.mipmaps.length;Re++)de(I.__webglFramebuffer[pe][Re],S,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else de(I.__webglFramebuffer[pe],S,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,Re=Q.length;pe<Re;pe++){const Fe=Q[pe],he=i.get(Fe);let Se=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,he.__webglTexture),Te(Se,Fe),de(I.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+pe,Se,0),g(Fe)&&d(Se)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,W.__webglTexture),Te(pe,m),m.mipmaps&&m.mipmaps.length>0)for(let Re=0;Re<m.mipmaps.length;Re++)de(I.__webglFramebuffer[Re],S,m,n.COLOR_ATTACHMENT0,pe,Re);else de(I.__webglFramebuffer,S,m,n.COLOR_ATTACHMENT0,pe,0);g(m)&&d(pe),t.unbindTexture()}S.depthBuffer&&Be(S)}function O(S){const m=S.textures;for(let I=0,W=m.length;I<W;I++){const Q=m[I];if(g(Q)){const k=b(S),Ae=i.get(Q).__webglTexture;t.bindTexture(k,Ae),d(k),t.unbindTexture()}}}const J=[],X=[];function ne(S){if(S.samples>0){if(ue(S)===!1){const m=S.textures,I=S.width,W=S.height;let Q=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(S),pe=m.length>1;if(pe)for(let Fe=0;Fe<m.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Fe=0;Fe<m.length;Fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Fe]);const he=i.get(m[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,Q,n.NEAREST),l===!0&&(J.length=0,X.length=0,J.push(n.COLOR_ATTACHMENT0+Fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(J.push(k),X.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<m.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Fe]);const he=i.get(m[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const m=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function A(S){return Math.min(r.maxSamples,S.samples)}function ue(S){const m=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ae(S){const m=a.render.frame;c.get(S)!==m&&(c.set(S,m),S.update())}function ie(S,m){const I=S.colorSpace,W=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Er&&I!==mi&&(Ze.getTransfer(I)===st?(W!==pn||Q!==on)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",I)),m}function oe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=y,this.setupRenderTarget=P,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NS(n,e){function t(i,r=mi){let s;const a=Ze.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xh)return n.BYTE;if(i===vh)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===Eh)return n.ALPHA;if(i===yh)return n.RGB;if(i===pn)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===bh)return n.RED;if(i===nc)return n.RED_INTEGER;if(i===Mr)return n.RG;if(i===ic)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===Ks||i===js||i===Zs||i===Js)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Zo||i===Jo||i===Qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===el||i===tl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===il)return s.COMPRESSED_R11_EAC;if(i===rl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===sl)return s.COMPRESSED_RG11_EAC;if(i===al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===Sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ol)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===El||i===yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ml)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Tl||i===Al||i===wl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`;class BS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:FS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zS extends br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",g=new BS,d={},b=t.getContextAttributes();let w=null,T=null;const C=[],L=[],R=new ot;let z=null;const x=new an;x.viewport=new _t;const E=new an;E.viewport=new _t;const U=[x,E],D=new Kg;let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=C[H];return te===void 0&&(te=new po,C[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=C[H];return te===void 0&&(te=new po,C[H]=te),te.getGripSpace()},this.getHand=function(H){let te=C[H];return te===void 0&&(te=new po,C[H]=te),te.getHandSpace()};function Z(H){const te=L.indexOf(H.inputSource);if(te===-1)return;const de=C[te];de!==void 0&&(de.update(H.inputSource,H.frame,u||a),de.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",V);for(let H=0;H<C.length;H++){const te=L[H];te!==null&&(L[H]=null,C[H].disconnect(te))}F=null,j=null,g.reset();for(const H in d)delete d[H];e.setRenderTarget(w),p=null,h=null,f=null,r=null,T=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ie=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Hi:ti,Ie=b.stencil?ss:Ln);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Dn(h.textureWidth,h.textureHeight,{format:pn,type:on,depthTexture:new ls(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Dn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(H){for(let te=0;te<H.removed.length;te++){const de=H.removed[te],Ie=L.indexOf(de);Ie>=0&&(L[Ie]=null,C[Ie].disconnect(de))}for(let te=0;te<H.added.length;te++){const de=H.added[te];let Ie=L.indexOf(de);if(Ie===-1){for(let Be=0;Be<C.length;Be++)if(Be>=L.length){L.push(de),Ie=Be;break}else if(L[Be]===null){L[Be]=de,Ie=Be;break}if(Ie===-1)break}const xe=C[Ie];xe&&xe.connect(de)}}const ee=new Y,se=new Y;function re(H,te,de){ee.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const Ie=ee.distanceTo(se),xe=te.projectionMatrix.elements,Be=de.projectionMatrix.elements,y=xe[14]/(xe[10]-1),P=xe[14]/(xe[10]+1),O=(xe[9]+1)/xe[5],J=(xe[9]-1)/xe[5],X=(xe[8]-1)/xe[0],ne=(Be[8]+1)/Be[0],A=y*X,ue=y*ne,ae=Ie/(-X+ne),ie=ae*-X;if(te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ie),H.translateZ(ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),xe[10]===-1)H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const oe=y+ae,S=P+ae,m=A-ie,I=ue+(Ie-ie),W=O*P/S*oe,Q=J*P/S*oe;H.projectionMatrix.makePerspective(m,I,W,Q,oe,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function fe(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let te=H.near,de=H.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(de=g.depthFar)),D.near=E.near=x.near=te,D.far=E.far=x.far=de,(F!==D.near||j!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,j=D.far),D.layers.mask=H.layers.mask|6,x.layers.mask=D.layers.mask&3,E.layers.mask=D.layers.mask&5;const Ie=H.parent,xe=D.cameras;fe(D,Ie);for(let Be=0;Be<xe.length;Be++)fe(xe[Be],Ie);xe.length===2?re(D,x,E):D.projectionMatrix.copy(x.projectionMatrix),Te(H,D,Ie)};function Te(H,te,de){de===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Cl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(H){return d[H]};let ce=null;function ge(H,te){if(c=te.getViewerPose(u||a),_=te,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ie=!1;de.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let P=0;P<de.length;P++){const O=de[P];let J=null;if(p!==null)J=p.getViewport(O);else{const ne=f.getViewSubImage(h,O);J=ne.viewport,P===0&&(e.setRenderTargetTextures(T,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(T))}let X=U[P];X===void 0&&(X=new an,X.layers.enable(P),X.viewport=new _t,U[P]=X),X.matrix.fromArray(O.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(O.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(J.x,J.y,J.width,J.height),P===0&&(D.matrix.copy(X.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(X)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const P=f.getDepthInformation(de[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<de.length;P++){const O=de[P].camera;if(O){let J=d[O];J||(J=new zh,d[O]=J);const X=f.getCameraImage(O);J.sourceTexture=X}}}}for(let de=0;de<C.length;de++){const Ie=L[de],xe=C[de];Ie!==null&&xe!==void 0&&xe.update(Ie,te,u||a)}ce&&ce(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Le=new Hh;Le.setAnimationLoop(ge),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}const Ui=new ni,VS=new xt;function HS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Ih(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,b,w,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,T)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),v(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,b,w):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Wt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Wt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const b=e.get(d),w=b.envMap,T=b.envMapRotation;w&&(g.envMap.value=w,Ui.copy(T),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(VS.makeRotationFromEuler(Ui)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=w*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const T=w.program;i.uniformBlockBinding(b,T)}function u(b,w){let T=r[b.id];T===void 0&&(_(b),T=c(b),r[b.id]=T,b.addEventListener("dispose",g));const C=w.program;i.updateUBOMapping(b,C);const L=e.render.frame;s[b.id]!==L&&(h(b),s[b.id]=L)}function c(b){const w=f();b.__bindingPointIndex=w;const T=n.createBuffer(),C=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=r[b.id],T=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,R=T.length;L<R;L++){const z=Array.isArray(T[L])?T[L]:[T[L]];for(let x=0,E=z.length;x<E;x++){const U=z[x];if(p(U,L,x,C)===!0){const D=U.__offset,F=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let Z=0;Z<F.length;Z++){const q=F[Z],V=v(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,D+j,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,j),j+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,w,T,C){const L=b.value,R=w+"_"+T;if(C[R]===void 0)return typeof L=="number"||typeof L=="boolean"?C[R]=L:C[R]=L.clone(),!0;{const z=C[R];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return C[R]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function _(b){const w=b.uniforms;let T=0;const C=16;for(let R=0,z=w.length;R<z;R++){const x=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,U=x.length;E<U;E++){const D=x[E],F=Array.isArray(D.value)?D.value:[D.value];for(let j=0,Z=F.length;j<Z;j++){const q=F[j],V=v(q),ee=T%C,se=ee%V.boundary,re=ee+se;T+=se,re!==0&&C-re<V.storage&&(T+=C-re),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=V.storage}}}const L=T%C;return L>0&&(T+=C-L),b.__size=T,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){const w=b.target;w.removeEventListener("dispose",g);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}const kS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function WS(){return En===null&&(En=new Fg(kS,16,16,Mr,ei),En.name="DFG_LUT",En.minFilter=Pt,En.magFilter=Pt,En.wrapS=Yn,En.wrapT=Yn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class XS{constructor(e={}){const{canvas:t=cg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=on}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,g=new Set([rc,ic,nc]),d=new Set([on,Ln,rs,ss,ec,tc]),b=new Uint32Array(4),w=new Int32Array(4);let T=null,C=null;const L=[],R=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=nn;let U=0,D=0,F=null,j=-1,Z=null;const q=new _t,V=new _t;let ee=null;const se=new tt(0);let re=0,fe=t.width,Te=t.height,ce=1,ge=null,Le=null;const H=new _t(0,0,fe,Te),te=new _t(0,0,fe,Te);let de=!1;const Ie=new Oh;let xe=!1,Be=!1;const y=new xt,P=new Y,O=new _t,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function ne(){return F===null?ce:1}let A=i;function ue(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",it,!1),A===null){const B="webgl2";if(A=ue(B,M),A===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Qe("WebGLRenderer: "+M.message),M}let ae,ie,oe,S,m,I,W,Q,k,Ae,pe,Re,Fe,he,Se,Ee,Pe,ve,Xe,N,Ce,_e,De,me;function le(){ae=new Wx(A),ae.init(),_e=new NS(A,ae),ie=new Nx(A,ae,e,_e),oe=new IS(A,ae),ie.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),S=new Yx(A),m=new xS,I=new US(A,ae,oe,m,ie,_e,S),W=new Ox(x),Q=new kx(x),k=new Zg(A),De=new Ix(A,k),Ae=new Xx(A,k,S,De),pe=new Kx(A,Ae,k,S),Xe=new $x(A,ie,I),Ee=new Fx(m),Re=new _S(x,W,Q,ae,ie,De,Ee),Fe=new HS(x,m),he=new SS,Se=new AS(ae),ve=new Lx(x,W,Q,oe,pe,_,l),Pe=new DS(x,pe,ie),me=new GS(A,S,ie,oe),N=new Ux(A,ae,S),Ce=new qx(A,ae,S),S.programs=Re.programs,x.capabilities=ie,x.extensions=ae,x.properties=m,x.renderLists=he,x.shadowMap=Pe,x.state=oe,x.info=S}le(),v!==on&&(z=new Zx(v,t.width,t.height,r,s));const Me=new zS(x,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(fe,Te,!1))},this.getSize=function(M){return M.set(fe,Te)},this.setSize=function(M,B,K=!0){if(Me.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=M,Te=B,t.width=Math.floor(M*ce),t.height=Math.floor(B*ce),K===!0&&(t.style.width=M+"px",t.style.height=B+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(fe*ce,Te*ce).floor()},this.setDrawingBufferSize=function(M,B,K){fe=M,Te=B,ce=K,t.width=Math.floor(M*K),t.height=Math.floor(B*K),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(v===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(H)},this.setViewport=function(M,B,K,$){M.isVector4?H.set(M.x,M.y,M.z,M.w):H.set(M,B,K,$),oe.viewport(q.copy(H).multiplyScalar(ce).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,B,K,$){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,B,K,$),oe.scissor(V.copy(te).multiplyScalar(ce).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){oe.setScissorTest(de=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Le=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,K=!0){let $=0;if(M){let G=!1;if(F!==null){const ye=F.texture.format;G=g.has(ye)}if(G){const ye=F.texture.type,Ue=d.has(ye),we=ve.getClearColor(),Ne=ve.getClearAlpha(),Oe=we.r,He=we.g,ze=we.b;Ue?(b[0]=Oe,b[1]=He,b[2]=ze,b[3]=Ne,A.clearBufferuiv(A.COLOR,0,b)):(w[0]=Oe,w[1]=He,w[2]=ze,w[3]=Ne,A.clearBufferiv(A.COLOR,0,w))}else $|=A.COLOR_BUFFER_BIT}B&&($|=A.DEPTH_BUFFER_BIT),K&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ve.dispose(),he.dispose(),Se.dispose(),m.dispose(),W.dispose(),Q.dispose(),pe.dispose(),De.dispose(),me.dispose(),Re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fc),Me.removeEventListener("sessionend",hc),yi.stop()};function ke(M){M.preventDefault(),ru("WebGLRenderer: Context Lost."),E=!0}function ut(){ru("WebGLRenderer: Context Restored."),E=!1;const M=S.autoReset,B=Pe.enabled,K=Pe.autoUpdate,$=Pe.needsUpdate,G=Pe.type;le(),S.autoReset=M,Pe.enabled=B,Pe.autoUpdate=K,Pe.needsUpdate=$,Pe.type=G}function it(M){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){const B=M.target;B.removeEventListener("dispose",Sn),Un(B)}function Un(M){qh(M),m.remove(M)}function qh(M){const B=m.get(M).programs;B!==void 0&&(B.forEach(function(K){Re.releaseProgram(K)}),M.isShaderMaterial&&Re.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,K,$,G,ye){B===null&&(B=J);const Ue=G.isMesh&&G.matrixWorld.determinant()<0,we=$h(M,B,K,$,G);oe.setMaterial($,Ue);let Ne=K.index,Oe=1;if($.wireframe===!0){if(Ne=Ae.getWireframeAttribute(K),Ne===void 0)return;Oe=2}const He=K.drawRange,ze=K.attributes.position;let Ke=He.start*Oe,at=(He.start+He.count)*Oe;ye!==null&&(Ke=Math.max(Ke,ye.start*Oe),at=Math.min(at,(ye.start+ye.count)*Oe)),Ne!==null?(Ke=Math.max(Ke,0),at=Math.min(at,Ne.count)):ze!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,ze.count));const mt=at-Ke;if(mt<0||mt===1/0)return;De.setup(G,$,we,K,Ne);let gt,lt=N;if(Ne!==null&&(gt=k.get(Ne),lt=Ce,lt.setIndex(gt)),G.isMesh)$.wireframe===!0?(oe.setLineWidth($.wireframeLinewidth*ne()),lt.setMode(A.LINES)):lt.setMode(A.TRIANGLES);else if(G.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),oe.setLineWidth(Ve*ne()),G.isLineSegments?lt.setMode(A.LINES):G.isLineLoop?lt.setMode(A.LINE_LOOP):lt.setMode(A.LINE_STRIP)}else G.isPoints?lt.setMode(A.POINTS):G.isSprite&&lt.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)os("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,rt=G._multiDrawCounts,Je=G._multiDrawCount,qt=Ne?k.get(Ne).bytesPerElement:1,Xi=m.get($).currentProgram.getUniforms();for(let Yt=0;Yt<Je;Yt++)Xi.setValue(A,"_gl_DrawID",Yt),lt.render(Ve[Yt]/qt,rt[Yt])}else if(G.isInstancedMesh)lt.renderInstances(Ke,mt,G.count);else if(K.isInstancedBufferGeometry){const Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,Ve);lt.renderInstances(Ke,mt,rt)}else lt.render(Ke,mt)};function uc(M,B,K){M.transparent===!0&&M.side===qn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,_s(M,B,K),M.side=Mi,M.needsUpdate=!0,_s(M,B,K),M.side=qn):_s(M,B,K)}this.compile=function(M,B,K=null){K===null&&(K=M),C=Se.get(K),C.init(B),R.push(C),K.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),M!==K&&M.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),C.setupLights();const $=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ue=0;Ue<ye.length;Ue++){const we=ye[Ue];uc(we,K,G),$.add(we)}else uc(ye,K,G),$.add(ye)}),C=R.pop(),$},this.compileAsync=function(M,B,K=null){const $=this.compile(M,B,K);return new Promise(G=>{function ye(){if($.forEach(function(Ue){m.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){G(M);return}setTimeout(ye,10)}ae.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ca=null;function Yh(M){Ca&&Ca(M)}function fc(){yi.stop()}function hc(){yi.start()}const yi=new Hh;yi.setAnimationLoop(Yh),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){Ca=M,Me.setAnimationLoop(M),M===null?yi.stop():yi.start()},Me.addEventListener("sessionstart",fc),Me.addEventListener("sessionend",hc),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const K=Me.enabled===!0&&Me.isPresenting===!0,$=z!==null&&(F===null||K)&&z.begin(x,F);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,F),C=Se.get(M,R.length),C.init(B),R.push(C),y.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(y,wn,B.reversedDepth),Be=this.localClippingEnabled,xe=Ee.init(this.clippingPlanes,Be),T=he.get(M,L.length),T.init(),L.push(T),Me.enabled===!0&&Me.isPresenting===!0){const Ue=x.xr.getDepthSensingMesh();Ue!==null&&Ra(Ue,B,-1/0,x.sortObjects)}Ra(M,B,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(ge,Le),X=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,X&&ve.addToRenderList(T,M),this.info.render.frame++,xe===!0&&Ee.beginShadows();const G=C.state.shadowsArray;if(Pe.render(G,M,B),xe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&z.hasRenderPass())===!1){const Ue=T.opaque,we=T.transmissive;if(C.setupLights(),B.isArrayCamera){const Ne=B.cameras;if(we.length>0)for(let Oe=0,He=Ne.length;Oe<He;Oe++){const ze=Ne[Oe];pc(Ue,we,M,ze)}X&&ve.render(M);for(let Oe=0,He=Ne.length;Oe<He;Oe++){const ze=Ne[Oe];dc(T,M,ze,ze.viewport)}}else we.length>0&&pc(Ue,we,M,B),X&&ve.render(M),dc(T,M,B)}F!==null&&D===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),$&&z.end(x),M.isScene===!0&&M.onAfterRender(x,M,B),De.resetDefaultState(),j=-1,Z=null,R.pop(),R.length>0?(C=R[R.length-1],xe===!0&&Ee.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?T=L[L.length-1]:T=null};function Ra(M,B,K,$){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){$&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(y);const Ue=pe.update(M),we=M.material;we.visible&&T.push(M,Ue,we,K,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const Ue=pe.update(M),we=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),O.copy(Ue.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(y)),Array.isArray(we)){const Ne=Ue.groups;for(let Oe=0,He=Ne.length;Oe<He;Oe++){const ze=Ne[Oe],Ke=we[ze.materialIndex];Ke&&Ke.visible&&T.push(M,Ue,Ke,K,O.z,ze)}}else we.visible&&T.push(M,Ue,we,K,O.z,null)}}const ye=M.children;for(let Ue=0,we=ye.length;Ue<we;Ue++)Ra(ye[Ue],B,K,$)}function dc(M,B,K,$){const{opaque:G,transmissive:ye,transparent:Ue}=M;C.setupLightsView(K),xe===!0&&Ee.setGlobalState(x.clippingPlanes,K),$&&oe.viewport(q.copy($)),G.length>0&&gs(G,B,K),ye.length>0&&gs(ye,B,K),Ue.length>0&&gs(Ue,B,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function pc(M,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){const Ke=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Dn(1,1,{generateMipmaps:!0,type:Ke?ei:on,minFilter:Vi,samples:ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ye=C.state.transmissionRenderTarget[$.id],Ue=$.viewport||q;ye.setSize(Ue.z*x.transmissionResolutionScale,Ue.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),Ne=x.getActiveCubeFace(),Oe=x.getActiveMipmapLevel();x.setRenderTarget(ye),x.getClearColor(se),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear(),X&&ve.render(K);const He=x.toneMapping;x.toneMapping=Pn;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),xe===!0&&Ee.setGlobalState(x.clippingPlanes,$),gs(M,K,$),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let at=0,mt=B.length;at<mt;at++){const gt=B[at],{object:lt,geometry:Ve,material:rt,group:Je}=gt;if(rt.side===qn&&lt.layers.test($.layers)){const qt=rt.side;rt.side=Wt,rt.needsUpdate=!0,mc(lt,K,$,Ve,rt,Je),rt.side=qt,rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}x.setRenderTarget(we,Ne,Oe),x.setClearColor(se,re),ze!==void 0&&($.viewport=ze),x.toneMapping=He}function gs(M,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ye=M.length;G<ye;G++){const Ue=M[G],{object:we,geometry:Ne,group:Oe}=Ue;let He=Ue.material;He.allowOverride===!0&&$!==null&&(He=$),we.layers.test(K.layers)&&mc(we,B,K,Ne,He,Oe)}}function mc(M,B,K,$,G,ye){M.onBeforeRender(x,B,K,$,G,ye),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(x,B,K,$,M,ye),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,x.renderBufferDirect(K,B,$,G,M,ye),G.side=Mi,G.needsUpdate=!0,x.renderBufferDirect(K,B,$,G,M,ye),G.side=qn):x.renderBufferDirect(K,B,$,G,M,ye),M.onAfterRender(x,B,K,$,G,ye)}function _s(M,B,K){B.isScene!==!0&&(B=J);const $=m.get(M),G=C.state.lights,ye=C.state.shadowsArray,Ue=G.state.version,we=Re.getParameters(M,G.state,ye,B,K),Ne=Re.getProgramCacheKey(we);let Oe=$.programs;$.environment=M.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(M.isMeshStandardMaterial?Q:W).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",Sn),Oe=new Map,$.programs=Oe);let He=Oe.get(Ne);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===Ue)return _c(M,we),He}else we.uniforms=Re.getUniforms(M),M.onBeforeCompile(we,x),He=Re.acquireProgram(we,Ne),Oe.set(Ne,He),$.uniforms=we.uniforms;const ze=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=Ee.uniform),_c(M,we),$.needsLights=jh(M),$.lightsStateVersion=Ue,$.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function gc(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Qs.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function _c(M,B){const K=m.get(M);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function $h(M,B,K,$,G){B.isScene!==!0&&(B=J),I.resetTextureUnits();const ye=B.fog,Ue=$.isMeshStandardMaterial?B.environment:null,we=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Er,Ne=($.isMeshStandardMaterial?Q:W).get($.envMap||Ue),Oe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!K.morphAttributes.position,Ke=!!K.morphAttributes.normal,at=!!K.morphAttributes.color;let mt=Pn;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(mt=x.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,lt=gt!==void 0?gt.length:0,Ve=m.get($),rt=C.state.lights;if(xe===!0&&(Be===!0||M!==Z)){const It=M===Z&&$.id===j;Ee.setState($,M,It)}let Je=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==rt.state.version||Ve.outputColorSpace!==we||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Ne||$.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==He||Ve.morphTargets!==ze||Ve.morphNormals!==Ke||Ve.morphColors!==at||Ve.toneMapping!==mt||Ve.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Ve.__version=$.version);let qt=Ve.currentProgram;Je===!0&&(qt=_s($,B,G));let Xi=!1,Yt=!1,Ar=!1;const ft=qt.getUniforms(),Vt=Ve.uniforms;if(oe.useProgram(qt.program)&&(Xi=!0,Yt=!0,Ar=!0),$.id!==j&&(j=$.id,Yt=!0),Xi||Z!==M){oe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(A,"projectionMatrix",M.projectionMatrix),ft.setValue(A,"viewMatrix",M.matrixWorldInverse);const Ht=ft.map.cameraPosition;Ht!==void 0&&Ht.setValue(A,P.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&ft.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ft.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,Yt=!0,Ar=!0)}if(Ve.needsLights&&(rt.state.directionalShadowMap.length>0&&ft.setValue(A,"directionalShadowMap",rt.state.directionalShadowMap,I),rt.state.spotShadowMap.length>0&&ft.setValue(A,"spotShadowMap",rt.state.spotShadowMap,I),rt.state.pointShadowMap.length>0&&ft.setValue(A,"pointShadowMap",rt.state.pointShadowMap,I)),G.isSkinnedMesh){ft.setOptional(A,G,"bindMatrix"),ft.setOptional(A,G,"bindMatrixInverse");const It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ft.setValue(A,"boneTexture",It.boneTexture,I))}G.isBatchedMesh&&(ft.setOptional(A,G,"batchingTexture"),ft.setValue(A,"batchingTexture",G._matricesTexture,I),ft.setOptional(A,G,"batchingIdTexture"),ft.setValue(A,"batchingIdTexture",G._indirectTexture,I),ft.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(A,"batchingColorTexture",G._colorsTexture,I));const Jt=K.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Xe.update(G,K,qt),(Yt||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,ft.setValue(A,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vt.envMap.value=Ne,Vt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Vt.envMapIntensity.value=B.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=WS()),Yt&&(ft.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Kh(Vt,Ar),ye&&$.fog===!0&&Fe.refreshFogUniforms(Vt,ye),Fe.refreshMaterialUniforms(Vt,$,ce,Te,C.state.transmissionRenderTarget[M.id]),Qs.upload(A,gc(Ve),Vt,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qs.upload(A,gc(Ve),Vt,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ft.setValue(A,"center",G.center),ft.setValue(A,"modelViewMatrix",G.modelViewMatrix),ft.setValue(A,"normalMatrix",G.normalMatrix),ft.setValue(A,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const It=$.uniformsGroups;for(let Ht=0,Pa=It.length;Ht<Pa;Ht++){const bi=It[Ht];me.update(bi,qt),me.bind(bi,qt)}}return qt}function Kh(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,B,K){const $=m.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),m.get(M.texture).__webglTexture=B,m.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const K=m.get(M);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const Zh=A.createFramebuffer();this.setRenderTarget=function(M,B=0,K=0){F=M,U=B,D=K;let $=null,G=!1,ye=!1;if(M){const we=m.get(M);if(we.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(A.FRAMEBUFFER,we.__webglFramebuffer),q.copy(M.viewport),V.copy(M.scissor),ee=M.scissorTest,oe.viewport(q),oe.scissor(V),oe.setScissorTest(ee),j=-1;return}else if(we.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(we.__hasExternalTextures)I.rebindTextures(M,m.get(M.texture).__webglTexture,m.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(we.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Oe=m.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?$=Oe[B][K]:$=Oe[B],G=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?$=m.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[K]:$=Oe,q.copy(M.viewport),V.copy(M.scissor),ee=M.scissorTest}else q.copy(H).multiplyScalar(ce).floor(),V.copy(te).multiplyScalar(ce).floor(),ee=de;if(K!==0&&($=Zh),oe.bindFramebuffer(A.FRAMEBUFFER,$)&&oe.drawBuffers(M,$),oe.viewport(q),oe.scissor(V),oe.setScissorTest(ee),G){const we=m.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,K)}else if(ye){const we=B;for(let Ne=0;Ne<M.textures.length;Ne++){const Oe=m.get(M.textures[Ne]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,K,we)}}else if(M!==null&&K!==0){const we=m.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,K)}j=-1},this.readRenderTargetPixels=function(M,B,K,$,G,ye,Ue,we=0){if(!(M&&M.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){oe.bindFramebuffer(A.FRAMEBUFFER,Ne);try{const Oe=M.textures[we],He=Oe.format,ze=Oe.type;if(!ie.textureFormatReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(ze)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-$&&K>=0&&K<=M.height-G&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),A.readPixels(B,K,$,G,_e.convert(He),_e.convert(ze),ye))}finally{const Oe=F!==null?m.get(F).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,B,K,$,G,ye,Ue,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(B>=0&&B<=M.width-$&&K>=0&&K<=M.height-G){oe.bindFramebuffer(A.FRAMEBUFFER,Ne);const Oe=M.textures[we],He=Oe.format,ze=Oe.type;if(!ie.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.bufferData(A.PIXEL_PACK_BUFFER,ye.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),A.readPixels(B,K,$,G,_e.convert(He),_e.convert(ze),0);const at=F!==null?m.get(F).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,at);const mt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ug(A,mt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ye),A.deleteBuffer(Ke),A.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,K=0){const $=Math.pow(2,-K),G=Math.floor(M.image.width*$),ye=Math.floor(M.image.height*$),Ue=B!==null?B.x:0,we=B!==null?B.y:0;I.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,K,0,0,Ue,we,G,ye),oe.unbindTexture()};const Jh=A.createFramebuffer(),Qh=A.createFramebuffer();this.copyTextureToTexture=function(M,B,K=null,$=null,G=0,ye=null){ye===null&&(G!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ue,we,Ne,Oe,He,ze,Ke,at,mt;const gt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(K!==null)Ue=K.max.x-K.min.x,we=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,He=K.min.y,ze=K.isBox3?K.min.z:0;else{const Jt=Math.pow(2,-G);Ue=Math.floor(gt.width*Jt),we=Math.floor(gt.height*Jt),M.isDataArrayTexture?Ne=gt.depth:M.isData3DTexture?Ne=Math.floor(gt.depth*Jt):Ne=1,Oe=0,He=0,ze=0}$!==null?(Ke=$.x,at=$.y,mt=$.z):(Ke=0,at=0,mt=0);const lt=_e.convert(B.format),Ve=_e.convert(B.type);let rt;B.isData3DTexture?(I.setTexture3D(B,0),rt=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),rt=A.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),qt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Xi=A.getParameter(A.UNPACK_SKIP_PIXELS),Yt=A.getParameter(A.UNPACK_SKIP_ROWS),Ar=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oe),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ze);const ft=M.isDataArrayTexture||M.isData3DTexture,Vt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const Jt=m.get(M),It=m.get(B),Ht=m.get(Jt.__renderTarget),Pa=m.get(It.__renderTarget);oe.bindFramebuffer(A.READ_FRAMEBUFFER,Ht.__webglFramebuffer),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let bi=0;bi<Ne;bi++)ft&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,m.get(M).__webglTexture,G,ze+bi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,m.get(B).__webglTexture,ye,mt+bi)),A.blitFramebuffer(Oe,He,Ue,we,Ke,at,Ue,we,A.DEPTH_BUFFER_BIT,A.NEAREST);oe.bindFramebuffer(A.READ_FRAMEBUFFER,null),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||m.has(M)){const Jt=m.get(M),It=m.get(B);oe.bindFramebuffer(A.READ_FRAMEBUFFER,Jh),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Qh);for(let Ht=0;Ht<Ne;Ht++)ft?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Jt.__webglTexture,G,ze+Ht):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Jt.__webglTexture,G),Vt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,ye,mt+Ht):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,ye),G!==0?A.blitFramebuffer(Oe,He,Ue,we,Ke,at,Ue,we,A.COLOR_BUFFER_BIT,A.NEAREST):Vt?A.copyTexSubImage3D(rt,ye,Ke,at,mt+Ht,Oe,He,Ue,we):A.copyTexSubImage2D(rt,ye,Ke,at,Oe,He,Ue,we);oe.bindFramebuffer(A.READ_FRAMEBUFFER,null),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Vt?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(rt,ye,Ke,at,mt,Ue,we,Ne,lt,Ve,gt.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(rt,ye,Ke,at,mt,Ue,we,Ne,lt,gt.data):A.texSubImage3D(rt,ye,Ke,at,mt,Ue,we,Ne,lt,Ve,gt):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ye,Ke,at,Ue,we,lt,Ve,gt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ye,Ke,at,gt.width,gt.height,lt,gt.data):A.texSubImage2D(A.TEXTURE_2D,ye,Ke,at,Ue,we,lt,Ve,gt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,qt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Xi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ar),ye===0&&B.generateMipmaps&&A.generateMipmap(rt),oe.unbindTexture()},this.initRenderTarget=function(M){m.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),oe.unbindTexture()},this.resetState=function(){U=0,D=0,F=null,oe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const rn=window.innerWidth<768,Ft={particleCount:rn?18e3:35e3,particleSize:rn?1.6:1.2,textScale:rn?.14:.22,canvasFont:'900 100px "Microsoft YaHei", sans-serif'},qS=["快乐","悲伤","喜悦","愤怒","平静","恐惧","爱","焦虑","感恩","羞愧","希望","嫉妒","自豪","孤独","兴奋","内疚","幽默","厌恶"];function $r(n,e=null){const t=e!==null?e:Ft.textScale,i=document.createElement("canvas"),r=i.getContext("2d");i.width=1024,i.height=256,r.fillStyle="black",r.fillRect(0,0,i.width,i.height),r.fillStyle="white",r.font=Ft.canvasFont,r.textAlign="center",r.textBaseline="middle",r.fillText(n,i.width/2,i.height/2);const s=r.getImageData(0,0,i.width,i.height),a=[],o=rn?4:2;for(let l=0;l<i.height;l+=o)for(let u=0;u<i.width;u+=o)s.data[(l*i.width+u)*4]>100&&a.push({x:(u-i.width/2)*t,y:-(l-i.height/2)*t,z:0});return a}function YS(){return qS.map(n=>$r(n))}function $S(n){const e=[],t=Math.floor(n*.6),i=Math.floor(n*.3),r=n-t-i,s=140,a=35,o=40,l=-100,u=l+a/2;for(let p=0;p<t;p++)e.push({x:(Math.random()-.5)*s,y:l+(Math.random()-.5)*a,z:(Math.random()-.5)*o,type:"box",noise:Math.random()});const c=5,f=8,h=20;for(let p=0;p<i;p++){const v=(Math.floor(Math.random()*c)-(c-1)/2)*25,g=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*f,b=Math.random()*h;e.push({x:v+Math.cos(g)*d,y:u+b,z:Math.sin(g)*d,type:"tube",noise:Math.random()})}for(let p=0;p<r;p++){const v=(Math.floor(Math.random()*c)-(c-1)/2)*25,g=u+h,d=Math.random()*Math.PI*2,b=Math.sqrt(Math.random())*(f*.8);e.push({x:v+Math.cos(d)*b,y:g,z:Math.sin(d)*b,type:"spark",noise:Math.random()})}return e}function KS(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*220;let r=Math.sqrt(Math.pow(i,2))*.5+3;Math.abs(i)>100&&(r=60*Math.random());const s=Math.random()*Math.PI*2;Math.random()>.85&&(r*=Math.random()),e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}function Yu(n,e){return $r(n,rn?.08:.12).map(r=>({x:r.x,y:r.y+e,z:r.z}))}function jS(n){const e=[];for(let t=0;t<n;t++){const i=t<n/2,r=i?-50:50;let s="glass",a=(Math.random()-.5)*110,o=28,l=Math.random()*Math.PI*2;Math.random()>.35&&a<35&&a>-50&&(s="liquid",o=Math.random()*26,a>30&&(s="foam"));let u=o*Math.cos(l),c=o*Math.sin(l),f=a;s==="glass"&&a>-15&&a<35&&Math.abs(l-(i?Math.PI:0))<.6&&(u+=i?-18:18,s="handle"),e.push({x:u+r,y:f,z:c,type:s,isLeft:i,baseX:u+r})}return e}function ZS(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*200;let r=0;i>60?r=20*(100-i)/40:i>-80?r=20:r=20+(-80-i)*1.5;const s=Math.random()*Math.PI*2;i<60&&i>-80&&Math.random()>.4&&(r*=Math.random()),e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}function $u(n,e,t=1){const i=[],r=[" 0110 "," 1111 "," 0110 ","  00  ","111111","101101","101101","001100","001100","001100","010010","010010","110011"],s=3*t,a=r.length,o=r[0].length;for(let l=0;l<a;l++)for(let u=0;u<o;u++)if(r[l][u]==="1")for(let c=0;c<4;c++)i.push({rx:(u-o/2)*s+(Math.random()-.5)*2,ry:-(l-a)*s+e+(Math.random()-.5)*2,rz:(Math.random()-.5)*4});return i}function JS(n){const e=[],i=Math.max(0,n-3e3),r=rn?110:900,s=rn?60:2500,a=rn?25:60;for(let c=0;c<i;c++){const f=(Math.random()-.5)*r,h=60-f*f/s,p=(Math.random()-.5)*a,_=Math.random();let v=0,g=!1;_>.8?v=rn?8+Math.random()*3:15+Math.random()*5:_>.3?v=(Math.random()-.5)*(rn?5:10):(v=-Math.random()*(rn?20:40),g=!0),e.push({x:f,y:h+v,z:p,type:"bridge",isSupport:g,baseY:h,originalX:f})}const o=rn?.8:1.2,l=$u(0,0,o),u=$u(0,0,o);for(let c=0;c<3e3;c++){const f=c<1500,h=f?l:u,p=h[c%h.length];e.push({x:0,y:0,z:0,type:"man",manIndex:f?1:2,relX:p.rx,relY:p.ry,relZ:p.rz})}return e}const wa=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Or=3e3,QS={__name:"ParticleScene",props:{currentShape:String,triggerState:Number,currentTheme:String},emits:["firework-tick"],setup(n,{emit:e}){const t=n,i=e,r=tn(null);let s,a,o,l,u,c=[],f,h=0,p=[],_=[],v=[],g=[],d=0,b=[],w=[],T=0,C=[],L=[],R=[],z=[],x=[],E=[],U=0,D=!1;const F=async()=>{s=new Ng,s.fog=new lc(0,.002),a=new an(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.z=140,o=new XS({antialias:!0,alpha:!0}),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value&&r.value.appendChild(o.domElement),j(),V()},j=()=>{u=new vn;const se=Ft.particleCount,re=new Float32Array(se*3),fe=new Float32Array(se*3);c=new Float32Array(se*3);for(let ge=0;ge<se;ge++)re[ge*3]=(Math.random()-.5)*800,re[ge*3+1]=(Math.random()-.5)*800,re[ge*3+2]=(Math.random()-.5)*800,fe[ge*3]=1,fe[ge*3+1]=1,fe[ge*3+2]=1;u.setAttribute("position",new cn(re,3)),u.setAttribute("color",new cn(fe,3));const Te=new $g().load("https://threejs.org/examples/textures/sprites/spark1.png"),ce=new Bh({size:Ft.particleSize,map:Te,transparent:!0,opacity:.9,vertexColors:!0,blending:Fo,depthWrite:!1});l=new Vg(u,ce),s.add(l),Z()},Z=()=>{h=0,T=0,d=0;let se=[];const re=Ft.particleCount;if(t.currentShape==="fireworks")x.length===0&&(x=$S(Or)),E.length===0&&(E=YS()),D=!1,U=0,i("firework-tick",{idx:0,total:18,time:0}),se=x;else if(t.currentShape==="hourglass"){if(p.length===0){p=KS(re*.6),_=Yu("2025",60),v=Yu("今年辛苦啦",-60);const Te=re-p.length;g=new Float32Array(Te);for(let ce=0;ce<Te;ce++)g[ce]=Math.random()*6}se=p}else t.currentShape==="beer"?(b.length===0&&(b=jS(re*.9),w=$r("2025 有你相伴")),se=b):t.currentShape==="rocket"?(C.length===0&&(C=ZS(re),L=$r("2026新年快乐")),se=C):t.currentShape==="bridge"&&(R.length===0&&(R=JS(re*.9),z=$r("2026 与你同行")),se=R);const fe=u.attributes.position.array;for(let Te=0;Te<re;Te++){const ce=Te*3;Te<se.length?(c[ce]=se[Te].x,c[ce+1]=se[Te].y,c[ce+2]=se[Te].z,t.currentShape==="fireworks"&&(fe[ce]=se[Te].x,fe[ce+1]=se[Te].y,fe[ce+2]=se[Te].z)):t.currentShape==="fireworks"?(c[ce]=0,c[ce+1]=-3e3,c[ce+2]=0,fe[ce]=0,fe[ce+1]=-3e3,fe[ce+2]=0):(c[ce]=(Math.random()-.5)*1e3,c[ce+1]=(Math.random()-.5)*1e3,c[ce+2]=-500)}u.attributes.position.needsUpdate=!0,q()},q=()=>{if(!u)return;const se=u.attributes.color;for(let re=0;re<Ft.particleCount;re++){let fe=1,Te=1,ce=1;if(t.currentTheme==="warm"?(fe=1,Te=.8,ce=.4):(fe=.2,Te=.8,ce=1),t.currentShape==="beer"&&re<b.length&&b[re].type==="liquid"&&(fe=1,Te=.6,ce=0),t.currentShape==="bridge"){const ge=re*3,Le=c[ge],H=window.innerWidth<768?120:900,te=(Le+H/2)/H,de=new tt().setHSL(te,1,.6);fe=de.r,Te=de.g,ce=de.b,re<R.length&&R[re].type==="man"&&(fe=1,Te=1,ce=1)}se.setXYZ(re,fe,Te,ce)}se.needsUpdate=!0};pr(()=>t.triggerState,se=>{t.currentShape==="hourglass"&&se===0&&(d=0)});const V=()=>{f=requestAnimationFrame(V);const se=u.attributes.position.array,re=u.attributes.color.array;if(h+=.01,t.currentShape==="fireworks"){for(let ce=0;ce<Or;ce++){const ge=ce*3;if(ce<x.length){const Le=x[ce];let H=Le.x,te=Le.y,de=Le.z,Ie=1,xe=1,Be=1;if(Le.type==="box")H+=(Math.random()-.5)*.5,te+=(Math.random()-.5)*.5,Ie=.6,xe=.4,Be=.2;else if(Le.type==="tube")H+=(Math.random()-.5)*.5,Ie=.8,xe=.6,Be=.1;else if(Le.type==="spark"){const y=h*8+Le.noise*50,P=Math.sin(y);if(P>.85){const O=(P-.85)/.15;te+=O*20,Ie=1,xe=1,Be=.8}else Ie=1,xe=.3,Be=0;H+=(Math.random()-.5)*1.5}c[ge]=H,c[ge+1]=te,c[ge+2]=de,re[ge]=Ie,re[ge+1]=xe,re[ge+2]=Be}}if(t.triggerState>=1){D||(D=!0,U=Date.now());const ge=(Date.now()-U)/1e3,Le=3,H=18,te=Math.floor(ge/Le),de=ge%Le;if(te<H){i("firework-tick",{idx:te+1,total:H,time:(Le-de).toFixed(1)});const Ie=E[te%18],xe=te<9;for(let Be=Or;Be<Ft.particleCount;Be++){const y=Be*3,P=Be-Or;if(de<.8){const O=de/.8,J=O*20+P*.05,X=5*Math.sin(O*Math.PI),ne=-80,ue=ne+(60-ne)*O;c[y]=Math.cos(J)*X,c[y+1]=ue-P%50*.5,c[y+2]=Math.sin(J)*X,re[y]=1,re[y+1]=.9,re[y+2]=.6}else if(de<1.2){if(de<.95){const O=Math.acos(-1+2*Math.random()),J=Math.sqrt(Ft.particleCount*Math.PI)*O,X=100+Math.random()*50;c[y]=X*Math.sin(O)*Math.cos(J),c[y+1]=60+X*Math.sin(O)*Math.sin(J),c[y+2]=X*Math.cos(O),re[y]=Math.random(),re[y+1]=Math.random(),re[y+2]=1}}else if(de<1.5)c[y+1]-=2,c[y]*=.98,c[y+2]*=.98;else if(de<2.8)if(P<Ie.length){const O=Ie[P];c[y]+=(O.x-c[y])*.15,c[y+1]+=(O.y+60-c[y+1])*.15,c[y+2]+=(O.z-c[y+2])*.15,xe?(re[y]=1,re[y+1]=.4,re[y+2]=.2):(re[y]=.2,re[y+1]=.2,re[y+2]=.9)}else c[y+1]-=5,re[y]*=.9;else c[y]*=1.1,c[y+1]+=5,re[y]*=.5}u.attributes.color.needsUpdate=!0}else i("firework-tick",{idx:18,total:18,time:0})}else{D=!1;for(let ce=Or;ce<Ft.particleCount;ce++){const ge=ce*3;c[ge]=0,c[ge+1]=-3e3,c[ge+2]=0,se[ge]=0,se[ge+1]=-3e3,se[ge+2]=0}}}else if(t.currentShape==="hourglass"){t.triggerState===1?d+=.01:d=0;const ge=d;for(let Le=0;Le<Ft.particleCount;Le++){const H=Le*3;if(Le<p.length){const te=c[H],de=c[H+2],Ie=Math.atan2(de,te)+.003,xe=Math.sqrt(te*te+de*de);c[H]=xe*Math.cos(Ie),c[H+2]=xe*Math.sin(Ie)}else{const te=Le-p.length,de=_[te%_.length],Ie=v[te%v.length],xe=g[te%g.length];if(t.triggerState===0||ge<xe)de&&(c[H]=de.x,c[H+1]=de.y,c[H+2]=de.z);else{const Be=(ge-xe)/1.5;if(Be<1){if(Be<.5){const y=Be*2;c[H]=de.x*(1-y),c[H+1]=de.y*(1-y),c[H+2]=de.z*(1-y)}else{const y=(Be-.5)*2;c[H]=Ie.x*y,c[H+1]=Ie.y*y,c[H+2]=Ie.z*y}c[H]+=(Math.random()-.5)*2,c[H+2]+=(Math.random()-.5)*2}else Ie&&(c[H]=Ie.x,c[H+1]=Ie.y,c[H+2]=Ie.z)}}}}else if(t.currentShape==="bridge"){let ge=0;const Le=window.innerWidth<768,H=Le?20:150,te=Le?-55:-400,de=Le?55:400,Ie=Le?60:2500,xe=Le?-50:-80;t.triggerState>=1?(R.startTime||(R.startTime=h),ge=(h-R.startTime)/(8*.6),ge>1.2&&(ge=1.2)):(R.startTime=null,ge=0);for(let Be=0;Be<Ft.particleCount;Be++){const y=Be*3;if(Be<R.length){const P=R[Be];if(P.type==="bridge"){let O=P.x,J=P.y,X=P.z;t.triggerState===0?Math.abs(P.originalX)<H&&(P.originalX<0?O=-H-Math.random()*(Le?5:20):O=H+Math.random()*(Le?5:20),J+=(Math.random()-.5)*(Le?5:20)):O=P.originalX,c[y]=O,c[y+1]=J,c[y+2]=X}else if(P.type==="man")if(t.triggerState===0)c[y]=0,c[y+1]=-500,c[y+2]=0;else{const O=te+(de-te)*Math.min(1,ge),J=60-O*O/Ie,X=Math.sin(ge*40)*3,ne=P.manIndex===1?-10:10;c[y]=O+P.relX,c[y+1]=J+P.relY+X+(Le?6:10),c[y+2]=ne+P.relZ}}else if(t.triggerState>=2&&z.length>0)if(ge>.3){const P=Be-R.length,O=z[P%z.length];c[y]+=(O.x-c[y])*.1,c[y+1]+=(O.y+xe-c[y+1])*.1,c[y+2]+=(O.z-c[y+2])*.1}else c[y]=0,c[y+1]=-800;else c[y]=0,c[y+1]=-800}}else if(t.currentShape==="beer"){t.triggerState>=1&&T++;for(let ce=0;ce<Ft.particleCount;ce++){const ge=ce*3;if(ce<b.length){const Le=b[ce];let H=Le.x;if(t.triggerState>=1){const te=Math.min(25,T*.5);H+=Le.isLeft?te:-te}c[ge]=H,c[ge+1]=Le.y}else if(T>60&&w.length>0){const Le=ce-b.length,H=w[Le%w.length];c[ge]+=(H.x-c[ge])*.05,c[ge+1]+=(H.y-60-c[ge+1])*.05,c[ge+2]+=(H.z-c[ge+2])*.05}else c[ge]=0,c[ge+1]=-800}}else if(t.currentShape==="rocket"){if(t.triggerState===1)for(let ce=0;ce<Ft.particleCount;ce++)c[ce*3+1]+=8;else if(t.triggerState===2)for(let ce=0;ce<Ft.particleCount;ce++){const ge=ce*3;if(ce<L.length){const Le=L[ce];c[ge]=Le.x,c[ge+1]=Le.y,c[ge+2]=Le.z}else c[ge]*=1.1}}const fe=.15,Te=0;for(let ce=Te;ce<Ft.particleCount;ce++){const ge=ce*3;se[ge]+=(c[ge]-se[ge])*fe,se[ge+1]+=(c[ge+1]-se[ge+1])*fe,se[ge+2]+=(c[ge+2]-se[ge+2])*fe}u.attributes.position.needsUpdate=!0,o.render(s,a)};pr(()=>t.currentShape,Z),pr(()=>t.currentTheme,q),Yl(()=>{F(),window.addEventListener("resize",ee)}),xa(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",ee)});const ee=()=>{a&&o&&(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight))};return(se,re)=>(_n(),Rn("div",{ref_key:"canvasContainer",ref:r,class:"canvas-wrapper"},null,512))}},eM=wa(QS,[["__scopeId","data-v-9425c587"]]),tM={id:"ui-container"},nM={class:"panel-card"},iM={class:"year-group"},rM={class:"year-item"},sM={key:0,class:"hint-wrap"},aM={class:"sub-hint"},oM={class:"year-item"},lM={key:0,class:"hint-wrap"},cM={class:"sub-hint"},uM={__name:"ControlPanel",props:{currentYear:String,sceneIndex:Number},emits:["select-year"],setup(n){const e=n,t=Zl(()=>{if(e.currentYear==="2025"){if(e.sceneIndex===0)return"✊握拳: 重置流沙";if(e.sceneIndex===1)return"✌️剪刀手: 18连发烟花";if(e.sceneIndex===2)return"✊握拳: 干杯碰撞"}else{if(e.sceneIndex===0)return"🖐️上滑: 发射火箭";if(e.sceneIndex===1)return"✊握拳: 断桥重连"}return"互动就绪"});return(i,r)=>(_n(),Rn("div",tM,[pt("div",nM,[pt("div",iM,[pt("div",rM,[pt("button",{class:xr(["year-btn y25",{active:n.currentYear==="2025"}]),onClick:r[0]||(r[0]=s=>i.$emit("select-year","2025"))}," 2025 ",2),n.currentYear==="2025"?(_n(),Rn("div",sM,[r[2]||(r[2]=pt("div",{class:"main-hint"},"👋 左 → 右 切页",-1)),pt("div",aM,fr(t.value),1)])):ts("",!0)]),r[4]||(r[4]=pt("div",{class:"divider"},null,-1)),pt("div",oM,[pt("button",{class:xr(["year-btn y26",{active:n.currentYear==="2026"}]),onClick:r[1]||(r[1]=s=>i.$emit("select-year","2026"))}," 2026 ",2),n.currentYear==="2026"?(_n(),Rn("div",lM,[r[3]||(r[3]=pt("div",{class:"main-hint"},"👋 右 ← 左 切页",-1)),pt("div",cM,fr(t.value),1)])):ts("",!0)])])])]))}},fM=wa(uM,[["__scopeId","data-v-a36f4ce9"]]);function Ku(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.async=!0,i.crossOrigin="anonymous",i.onload=()=>e(),i.onerror=()=>t(new Error(`Script load error: ${n}`)),document.head.appendChild(i)})}const hM={class:"camera-wrapper"},dM=3,pM={__name:"CameraInput",props:{isActive:Boolean},emits:["status-change","camera-error","gesture","hand-x","hand-y","lock-swipe"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=tn(null),a=tn(null);let o=null,l=null,u=-1,c="NONE",f=0;const h=async()=>{try{r("status-change","启动视觉引擎..."),await Promise.all([Ku("https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"),Ku("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js")]);const d=window.Hands;o=new d({locateFile:w=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${w}`}),o.setOptions({maxNumHands:1,modelComplexity:0,minDetectionConfidence:.5,minTrackingConfidence:.5}),o.onResults(g);let b;try{b=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}})}catch(w){console.warn("方案A失败，尝试方案B...",w);try{b=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})}catch(T){console.warn("方案B失败，尝试方案C...",T);try{b=await navigator.mediaDevices.getUserMedia({video:!0})}catch(C){throw C}}}p(b)}catch(d){console.error("Camera Init Error:",d);let b="无法开启摄像头";d.name==="NotAllowedError"&&(b="请允许访问摄像头"),r("camera-error",b)}},p=d=>{s.value&&(s.value.srcObject=d,s.value.onloadedmetadata=()=>{s.value.play().catch(b=>console.error("Auto-play failed:",b)),a.value.width=s.value.videoWidth,a.value.height=s.value.videoHeight,r("status-change","Ready"),_()})},_=async()=>{i.isActive&&(s.value&&s.value.readyState>=2&&s.value.currentTime!==u&&(u=s.value.currentTime,o&&await o.send({image:s.value})),l=requestAnimationFrame(_))},v=(d,b)=>Math.sqrt(Math.pow(d.x-b.x,2)+Math.pow(d.y-b.y,2)),g=d=>{if(!a.value)return;const b=a.value.getContext("2d"),w=a.value.width,T=a.value.height;b.save(),b.clearRect(0,0,w,T),b.translate(w,0),b.scale(-1,1),b.drawImage(d.image,0,0,w,T);let C="NONE",L=-1;if(d.multiHandLandmarks&&d.multiHandLandmarks.length>0){const R=d.multiHandLandmarks[0];window.drawConnectors&&(window.drawConnectors(b,R,window.HAND_CONNECTIONS,{color:"#00d2ff",lineWidth:2}),window.drawLandmarks(b,R,{color:"#ff0000",lineWidth:1,radius:2})),L=R[0].x,r("hand-x",L),r("hand-y",R[0].y);const z=R[0],x=(Z,q)=>v(z,R[Z])>v(z,R[q])*1.1,E=(Z,q)=>v(z,R[Z])<v(z,R[q]),U=x(8,6),D=x(12,10),F=E(16,14),j=E(20,18);U&&D&&F&&j?C="VICTORY":!U&&!D&&F&&j?C="FIST":U&&D&&!F&&!j&&(C="PALM")}C===c?(f++,f>dM&&(r("gesture",C),r("lock-swipe",C==="VICTORY"||C==="FIST"))):(f=0,c=C,(C==="NONE"||C==="PALM")&&r("lock-swipe",!1)),b.restore()};return e({startCamera:h}),xa(()=>{s.value?.srcObject&&s.value.srcObject.getTracks().forEach(d=>d.stop()),cancelAnimationFrame(l),o&&o.close()}),(d,b)=>(_n(),Rn("div",hM,[pt("video",{ref_key:"inputVideo",ref:s,playsinline:"","webkit-playsinline":"",muted:"",style:{display:"none"}},null,512),qd(pt("canvas",{ref_key:"previewCanvas",ref:a,class:"video-preview"},null,512),[[um,n.isActive]])]))}},mM=wa(pM,[["__scopeId","data-v-2133c7e0"]]),gM={key:0,id:"overlay"},_M={__name:"IntroOverlay",props:{visible:Boolean,showGuide:Boolean},emits:["select-mode"],setup(n){return(e,t)=>(_n(),Rn(sn,null,[n.visible?(_n(),Rn("div",gM,[t[2]||(t[2]=pt("h2",{class:"title"},"Lynx",-1)),t[3]||(t[3]=pt("div",{class:"msg-box"},"请选择交互方式",-1)),pt("button",{id:"btn-cam",class:"action-btn",onClick:t[0]||(t[0]=i=>e.$emit("select-mode","camera"))},"开启摄像头"),pt("button",{id:"btn-touch",class:"action-btn",onClick:t[1]||(t[1]=i=>e.$emit("select-mode","touch"))},"触屏 / 鼠标模式")])):ts("",!0),pt("div",{id:"touch-guide",class:xr({show:n.showGuide})},"⟵ 滑动屏幕控制扩散 ⟶",2)],64))}},xM=wa(_M,[["__scopeId","data-v-da6579d6"]]),vM={class:"app-container"},SM={key:0,class:"firework-hud"},MM={class:"hud-row"},EM={class:"hud-row"},yM={key:0,class:"status-tip"},bM={__name:"App",setup(n){const e=tn("2025"),t=tn(0),i=tn("warm"),r=tn(1),s=tn(""),a=tn(!0),o=tn(null),l=tn(!1);let u=null;const c=tn({idx:0,total:18,time:0}),f={2025:["hourglass","fireworks","beer"],2026:["rocket","bridge"]},h=Zl(()=>f[e.value][t.value]);let p=-1,_=-1,v=!1;const g=D=>{a.value=!1,D==="camera"&&o.value.startCamera()},d=()=>{u&&(clearTimeout(u),u=null),r.value=0,v=!1,l.value=!1,s.value="",c.value={idx:0,total:18,time:0}},b=D=>{e.value!==D&&(d(),e.value=D,t.value=0,i.value=D==="2025"?"warm":"cyber",D==="2025"&&(r.value=1))},w=D=>{h.value==="fireworks"&&r.value===1&&(c.value=D)},T=D=>{const F=h.value==="fireworks"&&r.value===1;if(v&&!F||l.value){p=D;return}if(p===-1){p=D;return}const j=D-p;p=D;const Z=.04;(e.value==="2025"&&j>Z||e.value==="2026"&&j<-Z)&&C()},C=()=>{d();const D=f[e.value].length;t.value=(t.value+1)%D,h.value==="hourglass"&&(r.value=1),s.value="切换场景...",v=!0,setTimeout(()=>{v=!1,s.value=""},1e3)},L=D=>{if(v||r.value!==0)return;if(_===-1){_=D;return}const F=D-_;_=D,F<-.05&&h.value==="rocket"&&E(2e3)};let R=0;const z=D=>{if(!(v&&h.value!=="hourglass"))if(h.value==="hourglass"&&D==="FIST")R++,R>3&&(R=0,x());else if(h.value==="fireworks"&&D==="VICTORY"&&r.value===0)R++,R>3&&(R=0,E(0));else if((h.value==="beer"||h.value==="bridge")&&D==="FIST"&&r.value===0){if(R++,R>6){R=0;const F=h.value==="beer"?5e3:2e3;E(F)}}else R>0&&R--},x=()=>{s.value!=="时光倒流..."&&(v=!0,r.value=0,s.value="时光倒流...",u&&clearTimeout(u),u=setTimeout(()=>{r.value=1,s.value="沙漏启动",v=!1,setTimeout(()=>{s.value==="沙漏启动"&&(s.value="")},1e3)},1500))},E=D=>{v=!0,r.value=1,s.value="特效触发!",u&&clearTimeout(u),h.value==="fireworks"?u=setTimeout(()=>{r.value===1&&(v=!1,r.value=0,s.value="演示结束",setTimeout(()=>{s.value==="演示结束"&&(s.value="")},2e3))},92e3):h.value==="bridge"?u=setTimeout(()=>{r.value===1&&(r.value=2,setTimeout(()=>{r.value===2&&(r.value=0,v=!1,s.value="")},2e3))},15e3):D>0&&(u=setTimeout(()=>{r.value===1&&(r.value=2,setTimeout(()=>{r.value===2&&(r.value=0,v=!1,s.value="")},3e3))},D))},U=D=>{s.value=D};return(D,F)=>(_n(),Rn("div",vM,[bt(eM,{currentShape:h.value,currentTheme:i.value,triggerState:r.value,onFireworkTick:w},null,8,["currentShape","currentTheme","triggerState"]),bt(rm,{name:"fade"},{default:wf(()=>[e.value==="2025"&&t.value===1&&r.value>=1?(_n(),Rn("div",SM,[pt("div",MM,[F[2]||(F[2]=pt("span",{class:"label"},"发射进度:",-1)),Io(" "+fr(c.value.idx)+" / 18",1)]),pt("div",EM,[F[3]||(F[3]=pt("span",{class:"label"},"下轮倒计时:",-1)),Io(" "+fr(c.value.time)+"s",1)])])):ts("",!0)]),_:1}),bt(mM,{ref_key:"cameraInputRef",ref:o,isActive:"",onStatusChange:F[0]||(F[0]=j=>s.value=j),onCameraError:U,onHandX:T,onHandY:L,onGesture:z,onLockSwipe:F[1]||(F[1]=j=>l.value=j)},null,512),bt(fM,{currentYear:e.value,sceneIndex:t.value,onSelectYear:b},null,8,["currentYear","sceneIndex"]),bt(xM,{visible:a.value,onSelectMode:g},null,8,["visible"]),s.value?(_n(),Rn("div",yM,fr(s.value),1)):ts("",!0)]))}};wm(bM).mount("#app");
