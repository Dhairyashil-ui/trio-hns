var O0=Object.defineProperty;var k0=(t,e,n)=>e in t?O0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fe=(t,e,n)=>k0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function B0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nm={exports:{}},Fl={},Lm={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),z0=Symbol.for("react.portal"),H0=Symbol.for("react.fragment"),V0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),W0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),X0=Symbol.for("react.forward_ref"),q0=Symbol.for("react.suspense"),Y0=Symbol.for("react.memo"),$0=Symbol.for("react.lazy"),xh=Symbol.iterator;function K0(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Um={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Dm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=Fs.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Dm}var Yd=qd.prototype=new Fm;Yd.constructor=qd;Im(Yd,Fs.prototype);Yd.isPureReactComponent=!0;var Sh=Array.isArray,Om=Object.prototype.hasOwnProperty,$d={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Om.call(e,i)&&!km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:$d.current}}function Z0(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Q0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Q0(""+t.key):e.toString(36)}function Ho(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case z0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,Sh(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Ho(r,e,n,"",function(c){return c})):r!=null&&(Kd(r)&&(r=Z0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+rc(s,o);a+=Ho(s,e,n,l,r)}else if(l=K0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,o++),a+=Ho(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Ho(t,i,"","",function(s){return e.call(n,s,r++)}),i}function J0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Vo={transition:null},e_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:$d};function zm(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Fs;et.Fragment=H0;et.Profiler=G0;et.PureComponent=qd;et.StrictMode=V0;et.Suspense=q0;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;et.act=zm;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Om.call(e,l)&&!km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:j0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W0,_context:t},t.Consumer=t};et.createElement=Bm;et.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:X0,render:t}};et.isValidElement=Kd;et.lazy=function(t){return{$$typeof:$0,_payload:{_status:-1,_result:t},_init:J0}};et.memo=function(t,e){return{$$typeof:Y0,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};et.unstable_act=zm;et.useCallback=function(t,e){return an.current.useCallback(t,e)};et.useContext=function(t){return an.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return an.current.useDeferredValue(t)};et.useEffect=function(t,e){return an.current.useEffect(t,e)};et.useId=function(){return an.current.useId()};et.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return an.current.useMemo(t,e)};et.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};et.useRef=function(t){return an.current.useRef(t)};et.useState=function(t){return an.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return an.current.useTransition()};et.version="18.3.1";Lm.exports=et;var De=Lm.exports;const t_=B0(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_=De,i_=Symbol.for("react.element"),r_=Symbol.for("react.fragment"),s_=Object.prototype.hasOwnProperty,a_=n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o_={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)s_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i_,type:t,key:s,ref:a,props:r,_owner:a_.current}}Fl.Fragment=r_;Fl.jsx=Hm;Fl.jsxs=Hm;Nm.exports=Fl;var h=Nm.exports,uu={},Vm={exports:{}},En={},Gm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,z){var C=V.length;V.push(z);e:for(;0<C;){var A=C-1>>>1,ee=V[A];if(0<r(ee,z))V[A]=z,V[C]=ee,C=A;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var z=V[0],C=V.pop();if(C!==z){V[0]=C;e:for(var A=0,ee=V.length,re=ee>>>1;A<re;){var pe=2*(A+1)-1,he=V[pe],me=pe+1,k=V[me];if(0>r(he,C))me<ee&&0>r(k,he)?(V[A]=k,V[me]=C,A=me):(V[A]=he,V[pe]=C,A=pe);else if(me<ee&&0>r(k,C))V[A]=k,V[me]=C,A=me;else break e}}return z}function r(V,z){var C=V.sortIndex-z.sortIndex;return C!==0?C:V.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,u=3,m=!1,g=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=V)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function y(V){if(M=!1,E(V),!g)if(n(l)!==null)g=!0,te(T);else{var z=n(c);z!==null&&K(y,z.startTime-V)}}function T(V,z){g=!1,M&&(M=!1,d(S),S=-1),m=!0;var C=u;try{for(E(z),p=n(l);p!==null&&(!(p.expirationTime>z)||V&&!D());){var A=p.callback;if(typeof A=="function"){p.callback=null,u=p.priorityLevel;var ee=A(p.expirationTime<=z);z=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(l)&&i(l),E(z)}else i(l);p=n(l)}if(p!==null)var re=!0;else{var pe=n(c);pe!==null&&K(y,pe.startTime-z),re=!1}return re}finally{p=null,u=C,m=!1}}var b=!1,P=null,S=-1,R=5,L=-1;function D(){return!(t.unstable_now()-L<R)}function B(){if(P!==null){var V=t.unstable_now();L=V;var z=!0;try{z=P(!0,V)}finally{z?q():(b=!1,P=null)}}else b=!1}var q;if(typeof _=="function")q=function(){_(B)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=B,q=function(){G.postMessage(null)}}else q=function(){v(B,0)};function te(V){P=V,b||(b=!0,q())}function K(V,z){S=v(function(){V(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,te(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var C=u;u=z;try{return V()}finally{u=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var C=u;u=V;try{return z()}finally{u=C}},t.unstable_scheduleCallback=function(V,z,C){var A=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?A+C:A):C=A,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=C+ee,V={id:f++,callback:z,priorityLevel:V,startTime:C,expirationTime:ee,sortIndex:-1},C>A?(V.sortIndex=C,e(c,V),n(l)===null&&V===n(c)&&(M?(d(S),S=-1):M=!0,K(y,C-A))):(V.sortIndex=ee,e(l,V),g||m||(g=!0,te(T))),V},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(V){var z=u;return function(){var C=u;u=z;try{return V.apply(this,arguments)}finally{u=C}}}})(Wm);Gm.exports=Wm;var l_=Gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=De,Mn=l_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,Sa={};function Fr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Sa[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,u_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Eh={};function d_(t){return du.call(Eh,t)?!0:du.call(Mh,t)?!1:u_.test(t)?Eh[t]=!0:(Mh[t]=!0,!1)}function f_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h_(t,e,n,i){if(e===null||typeof e>"u"||f_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function Qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h_(e,n,r,i)&&(n=null),i||r===null?d_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Ym=Symbol.for("react.offscreen"),wh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,sc;function na(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function p_(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case fu:return"Profiler";case ef:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Xm:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function m_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g_(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=g_(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$m(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Th(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function vu(t,e){Zm(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_u(t,e.type,n):e.hasOwnProperty("defaultValue")&&_u(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _u(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ia(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function Qm(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v_=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){v_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var __=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(__[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,Ss=null,ys=null;function Rh(t){if(t=ja(t)){if(typeof wu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Hl(e),wu(t.stateNode,t.type,e))}}function ig(t){Ss?ys?ys.push(t):ys=[t]:Ss=t}function rg(){if(Ss){var t=Ss,e=ys;if(ys=Ss=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function sg(t,e){return t(e)}function ag(){}var lc=!1;function og(t,e,n){if(lc)return t(e,n);lc=!0;try{return sg(t,e,n)}finally{lc=!1,(Ss!==null||ys!==null)&&(ag(),rg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Tu=!1;if(Ri)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Tu=!1}function x_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ca=!1,al=null,ol=!1,bu=null,S_={onError:function(t){ca=!0,al=t}};function y_(t,e,n,i,r,s,a,o,l){ca=!1,al=null,x_.apply(S_,arguments)}function M_(t,e,n,i,r,s,a,o,l){if(y_.apply(this,arguments),ca){if(ca){var c=al;ca=!1,al=null}else throw Error(ce(198));ol||(ol=!0,bu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(Or(t)!==t)throw Error(ce(188))}function E_(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ph(r),t;if(s===i)return Ph(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function cg(t){return t=E_(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var dg=Mn.unstable_scheduleCallback,Nh=Mn.unstable_cancelCallback,w_=Mn.unstable_shouldYield,T_=Mn.unstable_requestPaint,Pt=Mn.unstable_now,b_=Mn.unstable_getCurrentPriorityLevel,sf=Mn.unstable_ImmediatePriority,fg=Mn.unstable_UserBlockingPriority,ll=Mn.unstable_NormalPriority,A_=Mn.unstable_LowPriority,hg=Mn.unstable_IdlePriority,Ol=null,li=null;function C_(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:N_,R_=Math.log,P_=Math.LN2;function N_(t){return t>>>=0,t===0?32:31-(R_(t)/P_|0)|0}var io=64,ro=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function L_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=L_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function I_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,of,vg,_g,xg,Cu=!1,so=[],er=null,tr=null,nr=null,Ea=new Map,wa=new Map,Yi=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F_(t,e,n,i,r){switch(e){case"focusin":return er=Ws(er,t,e,n,i,r),!0;case"dragenter":return tr=Ws(tr,t,e,n,i,r),!0;case"mouseover":return nr=Ws(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Ws(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Ws(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=yr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,xg(t.priority,function(){vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=ja(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){Go(t)&&n.delete(e)}function O_(){Cu=!1,er!==null&&Go(er)&&(er=null),tr!==null&&Go(tr)&&(tr=null),nr!==null&&Go(nr)&&(nr=null),Ea.forEach(Dh),wa.forEach(Dh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,O_)))}function Ta(t){function e(r){return js(r,t)}if(0<so.length){js(so[0],t);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&js(er,t),tr!==null&&js(tr,t),nr!==null&&js(nr,t),Ea.forEach(e),wa.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&Yi.shift()}var Ms=Ii.ReactCurrentBatchConfig,ul=!0;function k_(t,e,n,i){var r=ft,s=Ms.transition;Ms.transition=null;try{ft=1,lf(t,e,n,i)}finally{ft=r,Ms.transition=s}}function B_(t,e,n,i){var r=ft,s=Ms.transition;Ms.transition=null;try{ft=4,lf(t,e,n,i)}finally{ft=r,Ms.transition=s}}function lf(t,e,n,i){if(ul){var r=Ru(t,e,n,i);if(r===null)xc(t,e,i,dl,n),Lh(t,i);else if(F_(r,t,e,n,i))i.stopPropagation();else if(Lh(t,i),e&4&&-1<U_.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&gg(s),s=Ru(t,e,n,i),s===null&&xc(t,e,i,dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var dl=null;function Ru(t,e,n,i){if(dl=null,t=rf(i),t=yr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case sf:return 1;case fg:return 4;case ll:case A_:return 16;case hg:return 536870912;default:return 16}default:return 16}}var Zi=null,cf=null,Wo=null;function Mg(){if(Wo)return Wo;var t,e=cf,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wo=r.slice(t,1<i?1-i:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Ih(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:Ih,this.isPropagationStopped=Ih,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=wn(Os),Wa=Tt({},Os,{view:0,detail:0}),z_=wn(Wa),uc,dc,Xs,kl=Tt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(uc=t.screenX-Xs.screenX,dc=t.screenY-Xs.screenY):dc=uc=0,Xs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Uh=wn(kl),H_=Tt({},kl,{dataTransfer:0}),V_=wn(H_),G_=Tt({},Wa,{relatedTarget:0}),fc=wn(G_),W_=Tt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=wn(W_),X_=Tt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=wn(X_),Y_=Tt({},Os,{data:0}),Fh=wn(Y_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z_[t])?!!e[t]:!1}function df(){return Q_}var J_=Tt({},Wa,{key:function(t){if(t.key){var e=$_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=wn(J_),tx=Tt({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=wn(tx),nx=Tt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),ix=wn(nx),rx=Tt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=wn(rx),ax=Tt({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=wn(ax),lx=[9,13,27,32],ff=Ri&&"CompositionEvent"in window,ua=null;Ri&&"documentMode"in document&&(ua=document.documentMode);var cx=Ri&&"TextEvent"in window&&!ua,Eg=Ri&&(!ff||ua&&8<ua&&11>=ua),kh=" ",Bh=!1;function wg(t,e){switch(t){case"keyup":return lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function ux(t,e){switch(t){case"compositionend":return Tg(e);case"keypress":return e.which!==32?null:(Bh=!0,kh);case"textInput":return t=e.data,t===kh&&Bh?null:t;default:return null}}function dx(t,e){if(os)return t==="compositionend"||!ff&&wg(t,e)?(t=Mg(),Wo=cf=Zi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fx[t.type]:e==="textarea"}function bg(t,e,n,i){ig(i),e=fl(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,ba=null;function hx(t){Og(t,0)}function Bl(t){var e=us(t);if(Km(e))return t}function px(t,e){if(t==="change")return e}var Ag=!1;if(Ri){var hc;if(Ri){var pc="oninput"in document;if(!pc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),pc=typeof Hh.oninput=="function"}hc=pc}else hc=!1;Ag=hc&&(!document.documentMode||9<document.documentMode)}function Vh(){da&&(da.detachEvent("onpropertychange",Cg),ba=da=null)}function Cg(t){if(t.propertyName==="value"&&Bl(ba)){var e=[];bg(e,ba,t,rf(t)),og(hx,e)}}function mx(t,e,n){t==="focusin"?(Vh(),da=e,ba=n,da.attachEvent("onpropertychange",Cg)):t==="focusout"&&Vh()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(ba)}function vx(t,e){if(t==="click")return Bl(e)}function _x(t,e){if(t==="input"||t==="change")return Bl(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:xx;function Aa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wh(t,e){var n=Gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function Rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sx(t){var e=Pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(i!==null&&hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wh(n,s);var a=Wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=Ri&&"documentMode"in document&&11>=document.documentMode,ls=null,Pu=null,fa=null,Nu=!1;function jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||ls==null||ls!==sl(i)||(i=ls,"selectionStart"in i&&hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Aa(fa,i)||(fa=i,i=fl(Pu,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},mc={},Ng={};Ri&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function zl(t){if(mc[t])return mc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ng)return mc[t]=e[n];return t}var Lg=zl("animationend"),Dg=zl("animationiteration"),Ig=zl("animationstart"),Ug=zl("transitionend"),Fg=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Fg.set(t,e),Fr(e,[t])}for(var gc=0;gc<Xh.length;gc++){var vc=Xh[gc],Mx=vc.toLowerCase(),Ex=vc[0].toUpperCase()+vc.slice(1);ur(Mx,"on"+Ex)}ur(Lg,"onAnimationEnd");ur(Dg,"onAnimationIteration");ur(Ig,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Ug,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,M_(i,e,void 0,t),t.currentTarget=null}function Og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,c),s=l}}}if(ol)throw t=bu,ol=!1,bu=null,t}function St(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(kg(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),kg(n,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[lo]){t[lo]=!0,jm.forEach(function(n){n!=="selectionchange"&&(wx.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,_c("selectionchange",!1,e))}}function kg(t,e,n,i){switch(yg(e)){case 1:var r=k_;break;case 4:r=B_;break;default:r=lf}n=r.bind(null,e,n,t),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}og(function(){var c=s,f=rf(n),p=[];e:{var u=Fg.get(t);if(u!==void 0){var m=uf,g=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":m=ex;break;case"focusin":g="focus",m=fc;break;case"focusout":g="blur",m=fc;break;case"beforeblur":case"afterblur":m=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=V_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ix;break;case Lg:case Dg:case Ig:m=j_;break;case Ug:m=sx;break;case"scroll":m=z_;break;case"wheel":m=ox;break;case"copy":case"cut":case"paste":m=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Oh}var M=(e&4)!==0,v=!M&&t==="scroll",d=M?u!==null?u+"Capture":null:u;M=[];for(var _=c,E;_!==null;){E=_;var y=E.stateNode;if(E.tag===5&&y!==null&&(E=y,d!==null&&(y=Ma(_,d),y!=null&&M.push(Ra(_,y,E)))),v)break;_=_.return}0<M.length&&(u=new m(u,g,null,n,f),p.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Eu&&(g=n.relatedTarget||n.fromElement)&&(yr(g)||g[Pi]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?yr(g):null,g!==null&&(v=Or(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(M=Uh,y="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(M=Oh,y="onPointerLeave",d="onPointerEnter",_="pointer"),v=m==null?u:us(m),E=g==null?u:us(g),u=new M(y,_+"leave",m,n,f),u.target=v,u.relatedTarget=E,y=null,yr(f)===c&&(M=new M(d,_+"enter",g,n,f),M.target=E,M.relatedTarget=v,y=M),v=y,m&&g)t:{for(M=m,d=g,_=0,E=M;E;E=Hr(E))_++;for(E=0,y=d;y;y=Hr(y))E++;for(;0<_-E;)M=Hr(M),_--;for(;0<E-_;)d=Hr(d),E--;for(;_--;){if(M===d||d!==null&&M===d.alternate)break t;M=Hr(M),d=Hr(d)}M=null}else M=null;m!==null&&Yh(p,u,m,M,!1),g!==null&&v!==null&&Yh(p,v,g,M,!0)}}e:{if(u=c?us(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var T=px;else if(zh(u))if(Ag)T=_x;else{T=gx;var b=mx}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=vx);if(T&&(T=T(t,c))){bg(p,T,n,f);break e}b&&b(t,u,c),t==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&_u(u,"number",u.value)}switch(b=c?us(c):window,t){case"focusin":(zh(b)||b.contentEditable==="true")&&(ls=b,Pu=c,fa=null);break;case"focusout":fa=Pu=ls=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,jh(p,n,f);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":jh(p,n,f)}var P;if(ff)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else os?wg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Eg&&n.locale!=="ko"&&(os||S!=="onCompositionStart"?S==="onCompositionEnd"&&os&&(P=Mg()):(Zi=f,cf="value"in Zi?Zi.value:Zi.textContent,os=!0)),b=fl(c,S),0<b.length&&(S=new Fh(S,t,null,n,f),p.push({event:S,listeners:b}),P?S.data=P:(P=Tg(n),P!==null&&(S.data=P)))),(P=cx?ux(t,n):dx(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(f=new Fh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=P))}Og(p,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ma(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Ma(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Tx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(Tx,`
`).replace(bx,"")}function co(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(ce(425))}function hl(){}var Lu=null,Du=null;function Iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(Rx)}:Uu;function Rx(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ri="__reactFiber$"+ks,Pa="__reactProps$"+ks,Pi="__reactContainer$"+ks,Fu="__reactEvents$"+ks,Px="__reactListeners$"+ks,Nx="__reactHandles$"+ks;function yr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zh(t);t!==null;){if(n=t[ri])return n;t=Zh(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[ri]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Hl(t){return t[Pa]||null}var Ou=[],ds=-1;function dr(t){return{current:t}}function yt(t){0>ds||(t.current=Ou[ds],Ou[ds]=null,ds--)}function _t(t,e){ds++,Ou[ds]=t.current,t.current=e}var cr={},Jt=dr(cr),un=dr(!1),Ar=cr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function pl(){yt(un),yt(Jt)}function Qh(t,e,n){if(Jt.current!==cr)throw Error(ce(168));_t(Jt,e),_t(un,n)}function Bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,m_(t)||"Unknown",r));return Tt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Ar=Jt.current,_t(Jt,t),_t(un,un.current),!0}function Jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Bg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,yt(un),yt(Jt),_t(Jt,t)):yt(un),_t(un,n)}var Si=null,Vl=!1,yc=!1;function zg(t){Si===null?Si=[t]:Si.push(t)}function Lx(t){Vl=!0,zg(t)}function fr(){if(!yc&&Si!==null){yc=!0;var t=0,e=ft;try{var n=Si;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Vl=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),dg(sf,fr),r}finally{ft=e,yc=!1}}return null}var fs=[],hs=0,gl=null,vl=0,Cn=[],Rn=0,Cr=null,Mi=1,Ei="";function xr(t,e){fs[hs++]=vl,fs[hs++]=gl,gl=t,vl=e}function Hg(t,e,n){Cn[Rn++]=Mi,Cn[Rn++]=Ei,Cn[Rn++]=Cr,Cr=t;var i=Mi;t=Ei;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-jn(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function pf(t){t.return!==null&&(xr(t,1),Hg(t,1,0))}function mf(t){for(;t===gl;)gl=fs[--hs],fs[hs]=null,vl=fs[--hs],fs[hs]=null;for(;t===Cr;)Cr=Cn[--Rn],Cn[Rn]=null,Ei=Cn[--Rn],Cn[Rn]=null,Mi=Cn[--Rn],Cn[Rn]=null}var yn=null,xn=null,Mt=!1,Vn=null;function Vg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(Mt){var e=xn;if(e){var n=e;if(!ep(t,e)){if(ku(t))throw Error(ce(418));e=ir(n.nextSibling);var i=yn;e&&ep(t,e)?Vg(i,n):(t.flags=t.flags&-4097|2,Mt=!1,yn=t)}}else{if(ku(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Mt=!1,yn=t}}}function tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function uo(t){if(t!==yn)return!1;if(!Mt)return tp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Iu(t.type,t.memoizedProps)),e&&(e=xn)){if(ku(t))throw Gg(),Error(ce(418));for(;e;)Vg(t,e),e=ir(e.nextSibling)}if(tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?ir(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=xn;t;)t=ir(t.nextSibling)}function Rs(){xn=yn=null,Mt=!1}function gf(t){Vn===null?Vn=[t]:Vn.push(t)}var Dx=Ii.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function np(t){var e=t._init;return e(t._payload)}function Wg(t){function e(d,_){if(t){var E=d.deletions;E===null?(d.deletions=[_],d.flags|=16):E.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=or(d,_),d.index=0,d.sibling=null,d}function s(d,_,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<_?(d.flags|=2,_):E):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,E,y){return _===null||_.tag!==6?(_=Cc(E,d.mode,y),_.return=d,_):(_=r(_,E),_.return=d,_)}function l(d,_,E,y){var T=E.type;return T===as?f(d,_,E.props.children,y,E.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xi&&np(T)===_.type)?(y=r(_,E.props),y.ref=qs(d,_,E),y.return=d,y):(y=Qo(E.type,E.key,E.props,null,d.mode,y),y.ref=qs(d,_,E),y.return=d,y)}function c(d,_,E,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Rc(E,d.mode,y),_.return=d,_):(_=r(_,E.children||[]),_.return=d,_)}function f(d,_,E,y,T){return _===null||_.tag!==7?(_=br(E,d.mode,y,T),_.return=d,_):(_=r(_,E),_.return=d,_)}function p(d,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Cc(""+_,d.mode,E),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case eo:return E=Qo(_.type,_.key,_.props,null,d.mode,E),E.ref=qs(d,null,_),E.return=d,E;case ss:return _=Rc(_,d.mode,E),_.return=d,_;case Xi:var y=_._init;return p(d,y(_._payload),E)}if(ia(_)||Vs(_))return _=br(_,d.mode,E,null),_.return=d,_;fo(d,_)}return null}function u(d,_,E,y){var T=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return T!==null?null:o(d,_,""+E,y);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case eo:return E.key===T?l(d,_,E,y):null;case ss:return E.key===T?c(d,_,E,y):null;case Xi:return T=E._init,u(d,_,T(E._payload),y)}if(ia(E)||Vs(E))return T!==null?null:f(d,_,E,y,null);fo(d,E)}return null}function m(d,_,E,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(E)||null,o(_,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:return d=d.get(y.key===null?E:y.key)||null,l(_,d,y,T);case ss:return d=d.get(y.key===null?E:y.key)||null,c(_,d,y,T);case Xi:var b=y._init;return m(d,_,E,b(y._payload),T)}if(ia(y)||Vs(y))return d=d.get(E)||null,f(_,d,y,T,null);fo(_,y)}return null}function g(d,_,E,y){for(var T=null,b=null,P=_,S=_=0,R=null;P!==null&&S<E.length;S++){P.index>S?(R=P,P=null):R=P.sibling;var L=u(d,P,E[S],y);if(L===null){P===null&&(P=R);break}t&&P&&L.alternate===null&&e(d,P),_=s(L,_,S),b===null?T=L:b.sibling=L,b=L,P=R}if(S===E.length)return n(d,P),Mt&&xr(d,S),T;if(P===null){for(;S<E.length;S++)P=p(d,E[S],y),P!==null&&(_=s(P,_,S),b===null?T=P:b.sibling=P,b=P);return Mt&&xr(d,S),T}for(P=i(d,P);S<E.length;S++)R=m(P,d,S,E[S],y),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?S:R.key),_=s(R,_,S),b===null?T=R:b.sibling=R,b=R);return t&&P.forEach(function(D){return e(d,D)}),Mt&&xr(d,S),T}function M(d,_,E,y){var T=Vs(E);if(typeof T!="function")throw Error(ce(150));if(E=T.call(E),E==null)throw Error(ce(151));for(var b=T=null,P=_,S=_=0,R=null,L=E.next();P!==null&&!L.done;S++,L=E.next()){P.index>S?(R=P,P=null):R=P.sibling;var D=u(d,P,L.value,y);if(D===null){P===null&&(P=R);break}t&&P&&D.alternate===null&&e(d,P),_=s(D,_,S),b===null?T=D:b.sibling=D,b=D,P=R}if(L.done)return n(d,P),Mt&&xr(d,S),T;if(P===null){for(;!L.done;S++,L=E.next())L=p(d,L.value,y),L!==null&&(_=s(L,_,S),b===null?T=L:b.sibling=L,b=L);return Mt&&xr(d,S),T}for(P=i(d,P);!L.done;S++,L=E.next())L=m(P,d,S,L.value,y),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?S:L.key),_=s(L,_,S),b===null?T=L:b.sibling=L,b=L);return t&&P.forEach(function(B){return e(d,B)}),Mt&&xr(d,S),T}function v(d,_,E,y){if(typeof E=="object"&&E!==null&&E.type===as&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case eo:e:{for(var T=E.key,b=_;b!==null;){if(b.key===T){if(T=E.type,T===as){if(b.tag===7){n(d,b.sibling),_=r(b,E.props.children),_.return=d,d=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xi&&np(T)===b.type){n(d,b.sibling),_=r(b,E.props),_.ref=qs(d,b,E),_.return=d,d=_;break e}n(d,b);break}else e(d,b);b=b.sibling}E.type===as?(_=br(E.props.children,d.mode,y,E.key),_.return=d,d=_):(y=Qo(E.type,E.key,E.props,null,d.mode,y),y.ref=qs(d,_,E),y.return=d,d=y)}return a(d);case ss:e:{for(b=E.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(d,_.sibling),_=r(_,E.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Rc(E,d.mode,y),_.return=d,d=_}return a(d);case Xi:return b=E._init,v(d,_,b(E._payload),y)}if(ia(E))return g(d,_,E,y);if(Vs(E))return M(d,_,E,y);fo(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,E),_.return=d,d=_):(n(d,_),_=Cc(E,d.mode,y),_.return=d,d=_),a(d)):n(d,_)}return v}var Ps=Wg(!0),jg=Wg(!1),_l=dr(null),xl=null,ps=null,vf=null;function _f(){vf=ps=xl=null}function xf(t){var e=_l.current;yt(_l),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){xl=t,vf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(vf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(xl===null)throw Error(ce(308));ps=t,xl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Mr=null;function Sf(t){Mr===null?Mr=[t]:Mr.push(t)}function Xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var u=o.lane,m=o.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,M=o;switch(u=e,m=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){p=g.call(m,p,u);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break e;p=Tt({},p,u);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else m={eventTime:m,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=a,t.lanes=a,t.memoizedState=p}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Xa={},ci=dr(Xa),Na=dr(Xa),La=dr(Xa);function Er(t){if(t===Xa)throw Error(ce(174));return t}function Mf(t,e){switch(_t(La,e),_t(Na,t),_t(ci,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Su(e,t)}yt(ci),_t(ci,e)}function Ns(){yt(ci),yt(Na),yt(La)}function Yg(t){Er(La.current);var e=Er(ci.current),n=Su(e,t.type);e!==n&&(_t(Na,t),_t(ci,n))}function Ef(t){Na.current===t&&(yt(ci),yt(Na))}var Et=dr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function wf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var qo=Ii.ReactCurrentDispatcher,Ec=Ii.ReactCurrentBatchConfig,Rr=0,wt=null,It=null,Bt=null,Ml=!1,ha=!1,Da=0,Ix=0;function qt(){throw Error(ce(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(Rr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qo.current=t===null||t.memoizedState===null?kx:Bx,t=n(i,r),ha){s=0;do{if(ha=!1,Da=0,25<=s)throw Error(ce(301));s+=1,Bt=It=null,e.updateQueue=null,qo.current=zx,t=n(i,r)}while(ha)}if(qo.current=El,e=It!==null&&It.next!==null,Rr=0,Bt=It=wt=null,Ml=!1,e)throw Error(ce(300));return t}function Af(){var t=Da!==0;return Da=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function In(){if(It===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Bt===null?wt.memoizedState:Bt.next;if(e!==null)Bt=e,It=t;else{if(t===null)throw Error(ce(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ia(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=In(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Rr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,wt.lanes|=f,Pr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=In(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $g(){}function Kg(t,e){var n=wt,i=In(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Cf(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,Qg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Rr&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,ev(e)&&tv(t)}function Jg(t,e,n){return n(function(){ev(e)&&tv(t)})}function ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function tv(t){var e=Ni(t,1);e!==null&&Xn(e,t,1,-1)}function sp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Ox.bind(null,wt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function nv(){return In().memoizedState}function Yo(t,e,n,i){var r=ni();wt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Gl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&Tf(i,a.deps)){r.memoizedState=Ua(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function ap(t,e){return Yo(8390656,8,t,e)}function Cf(t,e){return Gl(2048,8,t,e)}function iv(t,e){return Gl(4,2,t,e)}function rv(t,e){return Gl(4,4,t,e)}function sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,sv.bind(null,e,t),n)}function Rf(){}function ov(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cv(t,e,n){return Rr&21?(Yn(n,e)||(n=pg(),wt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Ux(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{ft=n,Ec.transition=i}}function uv(){return In().memoizedState}function Fx(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dv(t))fv(e,n);else if(n=Xg(t,e,n,i),n!==null){var r=sn();Xn(n,t,i,r),hv(n,e,i)}}function Ox(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dv(t))fv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xg(t,e,r,i),n!==null&&(r=sn(),Xn(n,t,i,r),hv(n,e,i))}}function dv(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function fv(t,e){ha=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var El={readContext:Dn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},kx={readContext:Dn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fx.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:sp,useDebugValue:Rf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=sp(!1),e=t[0];return t=Ux.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=ni();if(Mt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Rr&30||Zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ap(Jg.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=zt.identifierPrefix;if(Mt){var n=Ei,i=Mi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bx={readContext:Dn,useCallback:ov,useContext:Dn,useEffect:Cf,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:wc,useRef:nv,useState:function(){return wc(Ia)},useDebugValue:Rf,useDeferredValue:function(t){var e=In();return cv(e,It.memoizedState,t)},useTransition:function(){var t=wc(Ia)[0],e=In().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:uv,unstable_isNewReconciler:!1},zx={readContext:Dn,useCallback:ov,useContext:Dn,useEffect:Cf,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:Tc,useRef:nv,useState:function(){return Tc(Ia)},useDebugValue:Rf,useDeferredValue:function(t){var e=In();return It===null?e.memoizedState=t:cv(e,It.memoizedState,t)},useTransition:function(){var t=Tc(Ia)[0],e=In().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:uv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Xn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Xn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=ar(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Xn(e,t,i,n),Xo(e,t,i))}};function op(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function pv(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=dn(e)?Ar:Jt.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=dn(e)?Ar:Jt.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wl.enqueueReplaceState(r,r.state,null),Sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=p_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,Ju=i),Gu(t,e)},n}function gv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var Vx=Ii.ReactCurrentOwner,cn=!1;function rn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Ps(e,t.child,n,i)}function fp(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=bf(t,e,n,i,s,r),n=Af(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Mt&&n&&pf(e),e.flags|=1,rn(t,e,i,r),e.child)}function hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vv(t,e,s,i,r)):(t=Qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Wu(t,e,n,i,r)}function _v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(gs,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(gs,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(gs,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(gs,vn),vn|=i;return rn(t,e,r,n),e.child}function xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=dn(n)?Ar:Jt.current;return s=Cs(e,s),Es(e,r),n=bf(t,e,n,i,s,r),i=Af(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Mt&&i&&pf(e),e.flags|=1,rn(t,e,n,r),e.child)}function pp(t,e,n,i,r){if(dn(n)){var s=!0;ml(e)}else s=!1;if(Es(e,r),e.stateNode===null)$o(t,e),pv(e,n,i),Vu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=dn(n)?Ar:Jt.current,c=Cs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&lp(e,a,i,c),qi=!1;var u=e.memoizedState;a.state=u,Sl(e,i,a,r),l=e.memoizedState,o!==i||u!==l||un.current||qi?(typeof f=="function"&&(Hu(e,n,f,i),l=e.memoizedState),(o=qi||op(e,n,o,i,u,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,p=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=dn(n)?Ar:Jt.current,l=Cs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||u!==l)&&lp(e,a,i,l),qi=!1,u=e.memoizedState,a.state=u,Sl(e,i,a,r);var g=e.memoizedState;o!==p||u!==g||un.current||qi?(typeof m=="function"&&(Hu(e,n,m,i),g=e.memoizedState),(c=qi||op(e,n,c,i,u,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){xv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Jh(e,n,!1),Li(t,e,s);i=e.stateNode,Vx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&Jh(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qh(t,e.context,!1),Mf(t,e.containerInfo)}function mp(t,e,n,i,r){return Rs(),gf(r),e.flags|=256,rn(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Et,r&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ql(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Pf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Gx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pf(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,i){return i!==null&&gf(i),Ps(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(ce(422))),ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=qu(a),e.memoizedState=Xu,s);if(!(e.mode&1))return ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=bc(s,i,void 0),ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Xn(i,t,r,-1))}return Ff(),i=bc(Error(ce(421))),ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=ir(r.nextSibling),yn=e,Mt=!0,Vn=null,t!==null&&(Cn[Rn++]=Mi,Cn[Rn++]=Ei,Cn[Rn++]=Cr,Mi=t.id,Ei=t.overflow,Cr=e),e=Pf(e,i.children),e.flags|=4096,e)}function gp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,n,e);else if(t.tag===19)gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wx(t,e,n){switch(e.tag){case 3:Sv(e),Rs();break;case 5:Yg(e);break;case 1:dn(e.type)&&ml(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?yv(t,e,n):(_t(Et,Et.current&1),t=Li(t,e,n),t!==null?t.sibling:null);_t(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return Li(t,e,n)}var Ev,Yu,wv,Tv;Ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ci.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}yu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jx(t,e,n){var i=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return dn(e.type)&&pl(),Yt(e),null;case 3:return i=e.stateNode,Ns(),yt(un),yt(Jt),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(nd(Vn),Vn=null))),Yu(t,e),Yt(e),null;case 5:Ef(e);var r=Er(La.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Yt(e),null}if(t=Er(ci.current),uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)St(sa[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Th(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Ah(i,s),St("invalid",i)}yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":to(i),bh(i,s,!0);break;case"textarea":to(i),Ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Pa]=i,Ev(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mu(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)St(sa[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Th(t,i),r=gu(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Ah(t,i),r=xu(t,i),St("invalid",t);break;default:r=i}yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&Jd(t,s,l,a))}switch(n){case"input":to(t),bh(t,i,!1);break;case"textarea":to(t),Ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Er(La.current),Er(ci.current),uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:co(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Yt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&xn!==null&&e.mode&1&&!(e.flags&128))Gg(),Rs(),e.flags|=98560,s=!1;else if(s=uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ri]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Vn!==null&&(nd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ut===0&&(Ut=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ns(),Yu(t,e),t===null&&Ca(e.stateNode.containerInfo),Yt(e),null;case 10:return xf(e.type._context),Yt(e),null;case 17:return dn(e.type)&&pl(),Yt(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=yl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Ds&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return Yt(e),null}else 2*Pt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Et.current,_t(Et,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Xx(t,e){switch(mf(e),e.tag){case 1:return dn(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),yt(un),yt(Jt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return Ns(),null;case 10:return xf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var po=!1,Zt=!1,qx=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){bt(t,e,i)}}var vp=!1;function Yx(t,e){if(Lu=ul,t=Pg(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,u=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)u=p,p=m;for(;;){if(p===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++f===i&&(l=a),(m=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},ul=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,v=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:zn(e.type,M),v);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return g=vp,vp=!1,g}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Pa],delete e[Fu],delete e[Px],delete e[Nx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Ht=null,Hn=!1;function ki(t,e,n){for(n=n.child;n!==null;)Cv(t,e,n),n=n.sibling}function Cv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:Zt||ms(n,e);case 6:var i=Ht,r=Hn;Ht=null,ki(t,e,n),Ht=i,Hn=r,Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),Ta(t)):Sc(Ht,n.stateNode));break;case 4:i=Ht,r=Hn,Ht=n.stateNode.containerInfo,Hn=!0,ki(t,e,n),Ht=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$u(n,e,a),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Zt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,ki(t,e,n),Zt=i):ki(t,e,n);break;default:ki(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qx),e.forEach(function(i){var r=iS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Hn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ht===null)throw Error(ce(160));Cv(s,a,r),Ht=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rv(e,t),e=e.sibling}function Rv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Jn(t),i&4){try{pa(3,t,t.return),jl(3,t)}catch(M){bt(t,t.return,M)}try{pa(5,t,t.return)}catch(M){bt(t,t.return,M)}}break;case 1:Fn(e,t),Jn(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Fn(e,t),Jn(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(M){bt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Zm(r,s),Mu(o,a);var c=Mu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?ng(r,p):f==="dangerouslySetInnerHTML"?eg(r,p):f==="children"?ya(r,p):Jd(r,f,p,c)}switch(o){case"input":vu(r,s);break;case"textarea":Qm(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xs(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(M){bt(t,t.return,M)}}break;case 6:if(Fn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){bt(t,t.return,M)}}break;case 3:if(Fn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(M){bt(t,t.return,M)}break;case 4:Fn(e,t),Jn(t);break;case 13:Fn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=Pt())),i&4&&xp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||f,Fn(e,t),Zt=c):Fn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Pe=t,f=t.child;f!==null;){for(p=Pe=f;Pe!==null;){switch(u=Pe,m=u.child,u.tag){case 0:case 11:case 14:case 15:pa(4,u,u.return);break;case 1:ms(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){bt(i,n,M)}}break;case 5:ms(u,u.return);break;case 22:if(u.memoizedState!==null){yp(p);continue}}m!==null?(m.return=u,Pe=m):yp(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tg("display",a))}catch(M){bt(t,t.return,M)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(M){bt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),Jn(t),i&4&&xp(t);break;case 21:break;default:Fn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=_p(t);Qu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=_p(t);Zu(t,o,a);break;default:throw Error(ce(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $x(t,e,n){Pe=t,Pv(t)}function Pv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=po;var c=Zt;if(po=a,(Zt=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?Mp(r):l!==null?(l.return=a,Pe=l):Mp(r);for(;s!==null;)Pe=s,Pv(s),s=s.sibling;Pe=r,po=o,Zt=c}Sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Sp(t)}}function Sp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Zt||e.flags&512&&Ku(e)}catch(u){bt(e,e.return,u)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function yp(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Mp(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Ku(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var Kx=Math.ceil,wl=Ii.ReactCurrentDispatcher,Nf=Ii.ReactCurrentOwner,Ln=Ii.ReactCurrentBatchConfig,ot=0,zt=null,Dt=null,Wt=0,vn=0,gs=dr(0),Ut=0,Fa=null,Pr=0,Xl=0,Lf=0,ma=null,ln=null,Df=0,Ds=1/0,xi=null,Tl=!1,Ju=null,sr=null,mo=!1,Qi=null,bl=0,ga=0,ed=null,Ko=-1,Zo=0;function sn(){return ot&6?Pt():Ko!==-1?Ko:Ko=Pt()}function ar(t){return t.mode&1?ot&2&&Wt!==0?Wt&-Wt:Dx.transition!==null?(Zo===0&&(Zo=pg()),Zo):(t=ft,t!==0||(t=window.event,t=t===void 0?16:yg(t.type)),t):1}function Xn(t,e,n,i){if(50<ga)throw ga=0,ed=null,Error(ce(185));Ga(t,n,i),(!(ot&2)||t!==zt)&&(t===zt&&(!(ot&2)&&(Xl|=n),Ut===4&&$i(t,Wt)),fn(t,i),n===1&&ot===0&&!(e.mode&1)&&(Ds=Pt()+500,Vl&&fr()))}function fn(t,e){var n=t.callbackNode;D_(t,e);var i=cl(t,t===zt?Wt:0);if(i===0)n!==null&&Nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nh(n),e===1)t.tag===0?Lx(Ep.bind(null,t)):zg(Ep.bind(null,t)),Cx(function(){!(ot&6)&&fr()}),n=null;else{switch(mg(i)){case 1:n=sf;break;case 4:n=fg;break;case 16:n=ll;break;case 536870912:n=hg;break;default:n=ll}n=kv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(Ko=-1,Zo=0,ot&6)throw Error(ce(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=cl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=ot;ot|=2;var s=Dv();(zt!==t||Wt!==e)&&(xi=null,Ds=Pt()+500,Tr(t,e));do try{Jx();break}catch(o){Lv(t,o)}while(!0);_f(),wl.current=s,ot=r,Dt!==null?e=0:(zt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Fa,Tr(t,0),$i(t,i),fn(t,Pt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zx(r)&&(e=Al(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Fa,Tr(t,0),$i(t,i),fn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Sr(t,ln,xi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Df+500-Pt(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(Sr.bind(null,t,ln,xi),e);break}Sr(t,ln,xi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Kx(i/1960))-i,10<i){t.timeoutHandle=Uu(Sr.bind(null,t,ln,xi),i);break}Sr(t,ln,xi);break;case 5:Sr(t,ln,xi);break;default:throw Error(ce(329))}}}return fn(t,Pt()),t.callbackNode===n?Nv.bind(null,t):null}function td(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=ln,ln=n,e!==null&&nd(e)),t}function nd(t){ln===null?ln=t:ln.push.apply(ln,t)}function Zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Lf,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Ep(t){if(ot&6)throw Error(ce(327));ws();var e=cl(t,0);if(!(e&1))return fn(t,Pt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Fa,Tr(t,0),$i(t,e),fn(t,Pt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,ln,xi),fn(t,Pt()),null}function If(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(Ds=Pt()+500,Vl&&fr())}}function Nr(t){Qi!==null&&Qi.tag===0&&!(ot&6)&&ws();var e=ot;ot|=1;var n=Ln.transition,i=ft;try{if(Ln.transition=null,ft=1,t)return t()}finally{ft=i,Ln.transition=n,ot=e,!(ot&6)&&fr()}}function Uf(){vn=gs.current,yt(gs)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ax(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ns(),yt(un),yt(Jt),wf();break;case 5:Ef(i);break;case 4:Ns();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:xf(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(zt=t,Dt=t=or(t.current,null),Wt=vn=e,Ut=0,Fa=null,Lf=Xl=Pr=0,ln=ma=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Mr=null}return t}function Lv(t,e){do{var n=Dt;try{if(_f(),qo.current=El,Ml){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(Rr=0,Bt=It=wt=null,ha=!1,Da=0,Nf.current=null,n===null||n.return===null){Ut=1,Fa=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=up(a);if(m!==null){m.flags&=-257,dp(m,a,o,s,e),m.mode&1&&cp(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){cp(s,c,e),Ff();break e}l=Error(ce(426))}}else if(Mt&&o.mode&1){var v=up(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),dp(v,a,o,s,e),gf(Ls(l,o));break e}}s=l=Ls(l,o),Ut!==4&&(Ut=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=mv(s,l,e);ip(s,d);break e;case 1:o=l;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(sr===null||!sr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=gv(s,o,e);ip(s,y);break e}}s=s.return}while(s!==null)}Uv(n)}catch(T){e=T,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Dv(){var t=wl.current;return wl.current=El,t===null?El:t}function Ff(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Pr&268435455)&&!(Xl&268435455)||$i(zt,Wt)}function Al(t,e){var n=ot;ot|=2;var i=Dv();(zt!==t||Wt!==e)&&(xi=null,Tr(t,e));do try{Qx();break}catch(r){Lv(t,r)}while(!0);if(_f(),ot=n,wl.current=i,Dt!==null)throw Error(ce(261));return zt=null,Wt=0,Ut}function Qx(){for(;Dt!==null;)Iv(Dt)}function Jx(){for(;Dt!==null&&!w_();)Iv(Dt)}function Iv(t){var e=Ov(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Uv(t):Dt=e,Nf.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xx(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=jx(n,e,vn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Sr(t,e,n){var i=ft,r=Ln.transition;try{Ln.transition=null,ft=1,eS(t,e,n,i)}finally{Ln.transition=r,ft=i}return null}function eS(t,e,n,i){do ws();while(Qi!==null);if(ot&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I_(t,s),t===zt&&(Dt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,kv(ll,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=ft;ft=1;var o=ot;ot|=4,Nf.current=null,Yx(t,n),Rv(n,t),Sx(Du),ul=!!Lu,Du=Lu=null,t.current=n,$x(n),T_(),ot=o,ft=a,Ln.transition=s}else t.current=n;if(mo&&(mo=!1,Qi=t,bl=r),s=t.pendingLanes,s===0&&(sr=null),C_(n.stateNode),fn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=Ju,Ju=null,t;return bl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===ed?ga++:(ga=0,ed=t):ga=0,fr(),null}function ws(){if(Qi!==null){var t=mg(bl),e=Ln.transition,n=ft;try{if(Ln.transition=null,ft=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,bl=0,ot&6)throw Error(ce(331));var r=ot;for(ot|=4,Pe=t.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var f=Pe;switch(f.tag){case 0:case 11:case 15:pa(8,f,s)}var p=f.child;if(p!==null)p.return=f,Pe=p;else for(;Pe!==null;){f=Pe;var u=f.sibling,m=f.return;if(bv(f),f===c){Pe=null;break}if(u!==null){u.return=m,Pe=u;break}Pe=m}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var v=M.sibling;M.sibling=null,M=v}while(M!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){a=Pe;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Pe=E;else e:for(a=_;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:jl(9,o)}}catch(T){bt(o,o.return,T)}if(o===a){Pe=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Pe=y;break e}Pe=o.return}}if(ot=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{ft=n,Ln.transition=e}}return!1}function wp(t,e,n){e=Ls(n,e),e=mv(t,e,1),t=rr(t,e,1),e=sn(),t!==null&&(Ga(t,1,e),fn(t,e))}function bt(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Ls(n,t),t=gv(e,t,1),e=rr(e,t,1),t=sn(),e!==null&&(Ga(e,1,t),fn(e,t));break}}e=e.return}}function tS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Pt()-Df?Tr(t,0):Lf|=n),fn(t,e)}function Fv(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=sn();t=Ni(t,e),t!==null&&(Ga(t,e,n),fn(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fv(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Fv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Wx(t,e,n);cn=!!(t.flags&131072)}else cn=!1,Mt&&e.flags&1048576&&Hg(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$o(t,e),t=e.pendingProps;var r=Cs(e,Jt.current);Es(e,n),r=bf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=Wl,e.stateNode=r,r._reactInternals=e,Vu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&pf(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($o(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sS(i),t=zn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=pp(null,e,i,t,n);break e;case 11:e=fp(null,e,i,t,n);break e;case 14:e=hp(null,e,i,zn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),pp(t,e,i,r,n);case 3:e:{if(Sv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),Sl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ce(423)),e),e=mp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ce(424)),e),e=mp(t,e,i,n,r);break e}else for(xn=ir(e.stateNode.containerInfo.firstChild),yn=e,Mt=!0,Vn=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=Li(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Yg(e),t===null&&Bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Iu(i,r)?a=null:s!==null&&Iu(i,s)&&(e.flags|=32),xv(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return yv(t,e,n);case 4:return Mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),fp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(_l,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!un.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=Dn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),hp(t,e,i,r,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),$o(t,e),e.tag=1,dn(i)?(t=!0,ml(e)):t=!1,Es(e,n),pv(e,i,r),Vu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return Mv(t,e,n);case 22:return _v(t,e,n)}throw Error(ce(156,e.tag))};function kv(t,e){return dg(t,e)}function rS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new rS(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Of(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return br(n.children,r,s,e);case ef:a=8,r|=8;break;case fu:return t=Nn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Nn(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Nn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case Ym:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xm:a=10;break e;case qm:a=9;break e;case tf:a=11;break e;case nf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Ym,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,i,r,s,a,o,l){return t=new aS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function oS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return cr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(dn(n))return Bg(t,n,e)}return e}function zv(t,e,n,i,r,s,a,o,l){return t=kf(n,i,!0,t,r,s,a,o,l),t.context=Bv(null),n=t.current,i=sn(),r=ar(n),s=Ti(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,Ga(t,r,i),fn(t,i),t}function Yl(t,e,n,i){var r=e.current,s=sn(),a=ar(r);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(Xn(t,r,a,s),Xo(t,r,a)),a}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Tp(t,e),(t=t.alternate)&&Tp(t,e)}function lS(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}$l.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Yl(t,e,null,null)};$l.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Yl(null,t,null,null)}),e[Pi]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Sg(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function cS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cl(a);s.call(c)}}var a=zv(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=a,t[Pi]=a.current,Ca(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Cl(l);o.call(c)}}var l=kf(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[Pi]=l.current,Ca(t.nodeType===8?t.parentNode:t),Nr(function(){Yl(e,l,n,i)}),l}function Zl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Cl(a);o.call(l)}}Yl(e,a,t,r)}else a=cS(n,e,t,r,i);return Cl(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(af(e,n|1),fn(e,Pt()),!(ot&6)&&(Ds=Pt()+500,fr()))}break;case 13:Nr(function(){var i=Ni(t,1);if(i!==null){var r=sn();Xn(i,t,1,r)}}),Bf(t,1)}};of=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=sn();Xn(e,t,134217728,n)}Bf(t,134217728)}};vg=function(t){if(t.tag===13){var e=ar(t),n=Ni(t,e);if(n!==null){var i=sn();Xn(n,t,e,i)}Bf(t,e)}};_g=function(){return ft};xg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};wu=function(t,e,n){switch(e){case"input":if(vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ce(90));Km(i),vu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};sg=If;ag=Nr;var uS={usingClientEntryPoint:!1,Events:[ja,us,Hl,ig,rg,If]},$s={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dS={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ol=go.inject(dS),li=go}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(ce(200));return oS(t,e,null,n)};En.createRoot=function(t,e){if(!Hf(t))throw Error(ce(299));var n=!1,i="",r=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new zf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Nr(t)};En.hydrate=function(t,e,n){if(!Kl(e))throw Error(ce(200));return Zl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=zv(e,null,t,1,n??null,r,!1,s,a),t[Pi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};En.render=function(t,e,n){if(!Kl(e))throw Error(ce(200));return Zl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(ce(40));return t._reactRootContainer?(Nr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};En.unstable_batchedUpdates=If;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kl(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Zl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(t){console.error(t)}}Vv(),Vm.exports=En;var fS=Vm.exports,Ap=fS;uu.createRoot=Ap.createRoot,uu.hydrateRoot=Ap.hydrateRoot;var Cp="1.3.26";function Gv(t,e,n){return Math.max(t,Math.min(e,n))}function hS(t,e,n){return(1-n)*t+n*e}function pS(t,e,n,i){return hS(t,e,1-Math.exp(-n*i))}function mS(t,e){return(t%e+e)%e}var gS=class{constructor(){Fe(this,"isRunning",!1);Fe(this,"value",0);Fe(this,"from",0);Fe(this,"to",0);Fe(this,"currentTime",0);Fe(this,"lerp");Fe(this,"duration");Fe(this,"easing");Fe(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=Gv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=pS(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function vS(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var _S=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Fe(this,"width",0);Fe(this,"height",0);Fe(this,"scrollHeight",0);Fe(this,"scrollWidth",0);Fe(this,"debouncedResize");Fe(this,"wrapperResizeObserver");Fe(this,"contentResizeObserver");Fe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Fe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Fe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=vS(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wv=class{constructor(){Fe(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const xS=100/6,Bi={passive:!1};function Rp(t,e){return t===1?xS:t===2?e:1}var SS=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Fe(this,"touchStart",{x:0,y:0});Fe(this,"lastDelta",{x:0,y:0});Fe(this,"window",{width:0,height:0});Fe(this,"emitter",new Wv);Fe(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Fe(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Fe(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Fe(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=Rp(i,this.window.width),s=Rp(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Fe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Bi),this.element.addEventListener("touchstart",this.onTouchStart,Bi),this.element.addEventListener("touchmove",this.onTouchMove,Bi),this.element.addEventListener("touchend",this.onTouchEnd,Bi)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Bi),this.element.removeEventListener("touchstart",this.onTouchStart,Bi),this.element.removeEventListener("touchmove",this.onTouchMove,Bi),this.element.removeEventListener("touchend",this.onTouchEnd,Bi)}};const Pp=t=>Math.min(1,1.001-2**(-10*t));var yS=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:u=p==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:g=1,autoResize:M=!0,prevent:v,virtualScroll:d,overscroll:_=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:P=!1,naiveDimensions:S=P,stopInertiaOnNavigate:R=!1,respectReducedMotion:L=!0}={}){Fe(this,"_isScrolling",!1);Fe(this,"_isStopped",!1);Fe(this,"_isLocked",!1);Fe(this,"_preventNextNativeScrollEvent",!1);Fe(this,"_resetVelocityTimeout",null);Fe(this,"_rafId",null);Fe(this,"_isDraggingSelection",!1);Fe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Fe(this,"isTouching");Fe(this,"isIos");Fe(this,"time",0);Fe(this,"userData",{});Fe(this,"lastVelocity",0);Fe(this,"velocity",0);Fe(this,"direction",0);Fe(this,"options");Fe(this,"targetScroll");Fe(this,"animatedScroll");Fe(this,"animate",new gS);Fe(this,"emitter",new Wv);Fe(this,"dimensions");Fe(this,"virtualScroll");Fe(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Fe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Fe(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Fe(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Fe(this,"onPointerDown",t=>{t.button===1&&this.reset()});Fe(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(g=>{var M,v,d,_,E;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((M=g.hasAttribute)==null?void 0:M.call(g,"data-lenis-prevent"))||f==="vertical"&&((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent-vertical"))||f==="horizontal"&&((d=g.hasAttribute)==null?void 0:d.call(g,"data-lenis-prevent-horizontal"))||r&&((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent-touch"))||s&&((E=g.hasAttribute)==null?void 0:E.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const u=r&&this.options.syncTouch,m=r&&i.type==="touchend";m&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...u?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Fe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Fe(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Cp,window.lenis||(window.lenis={}),window.lenis.version=Cp,p==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=Pp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:f,gestureOrientation:u,orientation:p,touchMultiplier:m,wheelMultiplier:g,autoResize:M,prevent:v,virtualScroll:d,overscroll:_,autoRaf:E,anchors:y,autoToggle:T,allowNestedScroll:b,naiveDimensions:S,stopInertiaOnNavigate:R,respectReducedMotion:L},this.dimensions=new _S(t,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new SS(n,{touchMultiplier:m,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:p}={}){if(this.prefersReducedMotion&&(r?n=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!f)return;let u=t,m=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(g=u),g){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?y.left:y.top}const M=g.getBoundingClientRect(),v=getComputedStyle(g),d=this.isHorizontal?Number.parseFloat(v.scrollMarginLeft):Number.parseFloat(v.scrollMarginTop),_=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(_.scrollPaddingLeft):Number.parseFloat(_.scrollPaddingTop);u=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Gv(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof a=="number"&&typeof o!="function"?o=Pp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),M||this.emit(),M&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,c,f,p,u,m,g;if(i-(r.time??0)>2e3){r.time=Date.now();const b=window.getComputedStyle(t);if(r.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),a=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),f=["auto"].includes(b.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;p=t.scrollWidth,u=t.scrollHeight,m=t.clientWidth,g=t.clientHeight,o=p>m,l=u>g,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=p,r.scrollHeight=u,r.clientWidth=m,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,p=r.scrollWidth,u=r.scrollHeight,m=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const M=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let v,d,_,E,y,T;if(M==="horizontal")v=Math.round(t.scrollLeft),d=p-m,_=e,E=s,y=o,T=c;else if(M==="vertical")v=Math.round(t.scrollTop),d=u-g,_=n,E=a,y=l,T=f;else return!1;return!T&&(v>=d||v<=0)?!0:(_>0?v<d:v>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?mS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function MS({onOpenModal:t,scrolled:e}){const[n,i]=De.useState(!1),[r,s]=De.useState(!1),[a,o]=De.useState("hero"),l=e!==void 0?e:r;De.useEffect(()=>{const f=()=>{const p=document.querySelector(".hero-line-intelligence")||document.querySelector(".hero-left-mid-block"),u=document.querySelector(".stats-strip-white")||document.getElementById("counts");if(p&&u){const M=p.getBoundingClientRect(),v=u.getBoundingClientRect();s(d=>d?v.top<=M.bottom+45||M.bottom<=85:v.top<=M.bottom+25||M.bottom<=72)}else s(window.scrollY>=window.innerHeight*.5+30);const m=["hero","counts","trusted-by","modules","workflows","testimonials","faq","contact"],g=window.scrollY+200;for(const M of m){const v=document.getElementById(M);if(v){const d=v.offsetTop,_=v.offsetHeight;if(g>=d&&g<d+_){o(M);break}}}};return window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",f,{passive:!0}),f(),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f)}},[]);const c=f=>{i(!1);const p=document.getElementById(f);if(p)if(window.__lenis)window.__lenis.scrollTo(p,{offset:-74,duration:1.15});else{const g=p.getBoundingClientRect().top+window.pageYOffset-74;window.scrollTo({top:g,behavior:"smooth"})}};return h.jsx("header",{id:"header",className:`fixed-top d-flex align-items-center ${l?"header-scrolled":""}`,children:h.jsxs("div",{className:"container d-flex align-items-center justify-content-between",children:[h.jsx("div",{className:"logo",children:h.jsx("a",{href:"#hero",onClick:f=>{f.preventDefault(),c("hero")},children:h.jsx("img",{src:"/assets/img/trio-logo.png",alt:"TRIO Corporation Pvt. Ltd.",title:"TRIO Corporation Pvt Ltd",className:"trio-header-logo"})})}),h.jsxs("nav",{id:"navbar",className:`navbar ${n?"navbar-mobile":""}`,children:[h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx("a",{href:"#hero",className:a==="hero"?"active":"",onClick:f=>{f.preventDefault(),c("hero")},children:"Home"})}),h.jsx("li",{children:h.jsx("a",{href:"#trusted-by",className:a==="trusted-by"?"active":"",onClick:f=>{f.preventDefault(),c("trusted-by")},children:"Trusted By"})}),h.jsx("li",{children:h.jsxs("a",{href:"#modules",className:a==="modules"?"active":"",onClick:f=>{f.preventDefault(),c("modules")},children:[h.jsx("span",{children:"Modules"}),h.jsx("i",{className:"bi bi-chevron-down nav-chevron"})]})}),h.jsx("li",{children:h.jsxs("a",{href:"#workflows",className:a==="workflows"?"active":"",onClick:f=>{f.preventDefault(),c("workflows")},children:[h.jsx("span",{children:"Work Flows"}),h.jsx("i",{className:"bi bi-chevron-down nav-chevron"})]})}),h.jsx("li",{children:h.jsx("a",{href:"#testimonials",className:a==="testimonials"?"active":"",onClick:f=>{f.preventDefault(),c("testimonials")},children:"Testimonials"})}),h.jsx("li",{children:h.jsx("a",{href:"#faq",className:a==="faq"?"active":"",onClick:f=>{f.preventDefault(),c("faq")},children:"FAQ"})}),h.jsx("li",{children:h.jsx("a",{href:"#contact",className:a==="contact"?"active":"",onClick:f=>{f.preventDefault(),c("contact")},children:"Contact"})})]}),h.jsx("i",{className:`bi ${n?"bi-x":"bi-list"} mobile-nav-toggle`,onClick:()=>i(!n)})]}),h.jsxs("div",{className:"google-nav-actions d-flex align-items-center gap-3",children:[h.jsxs("div",{className:"google-nav-icons d-none d-lg-flex align-items-center gap-2",children:[h.jsx("a",{href:"https://wa.me/918459424217",target:"_blank",rel:"noopener noreferrer",className:"google-icon-link",title:"Chat on WhatsApp",children:h.jsx("i",{className:"bi bi-whatsapp"})}),h.jsx("a",{href:"tel:+918459424217",className:"google-icon-link",title:"Call Us",children:h.jsx("i",{className:"bi bi-telephone"})}),h.jsx("a",{href:"mailto:info@triocorporation.in",className:"google-icon-link",title:"Email Us",children:h.jsx("i",{className:"bi bi-envelope"})})]}),h.jsx("button",{type:"button",className:"btn-google-pill",onClick:t,children:h.jsx("span",{children:"Book a Demo"})})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="186",ES=0,Np=1,wS=2,Jo=1,TS=2,aa=3,Lr=0,hn=1,si=2,bi=0,va=1,id=2,Lp=3,Dp=4,bS=5,is=100,AS=101,CS=102,RS=103,PS=104,NS=200,LS=201,DS=202,IS=203,jv=204,Xv=205,US=206,FS=207,OS=208,kS=209,BS=210,zS=211,HS=212,VS=213,GS=214,rd=0,sd=1,ad=2,Oa=3,od=4,ld=5,cd=6,ud=7,qv=0,WS=1,jS=2,ui=0,Yv=1,$v=2,Kv=3,Zv=4,Qv=5,Jv=6,e0=7,t0=300,Dr=301,Is=302,Pc=303,Nc=304,Ql=306,dd=1e3,wi=1001,fd=1002,Vt=1003,XS=1004,vo=1005,Gt=1006,Lc=1007,Ji=1008,Pn=1009,n0=1010,i0=1011,ka=1012,Gf=1013,di=1014,ai=1015,fi=1016,Wf=1017,jf=1018,Ba=1020,r0=35902,s0=35899,a0=1021,o0=1022,Wn=1023,Di=1026,wr=1027,l0=1028,Xf=1029,Ir=1030,qf=1031,Yf=1033,el=33776,tl=33777,nl=33778,il=33779,hd=35840,pd=35841,md=35842,gd=35843,vd=36196,_d=37492,xd=37496,Sd=37488,yd=37489,Rl=37490,Md=37491,Ed=37808,wd=37809,Td=37810,bd=37811,Ad=37812,Cd=37813,Rd=37814,Pd=37815,Nd=37816,Ld=37817,Dd=37818,Id=37819,Ud=37820,Fd=37821,Od=36492,kd=36494,Bd=36495,zd=36283,Hd=36284,Pl=36285,Vd=36286,qS=3200,Ip=0,YS=1,Ki="",An="srgb",Nl="srgb-linear",Ll="linear",dt="srgb",Dc=7680,$S=519,KS=512,ZS=513,QS=514,$f=515,JS=516,ey=517,Kf=518,ty=519,ny=35044,Up="300 es",oi=2e3,Dl=2001;function iy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ry(){const t=Il("canvas");return t.style.display="block",t}const Fp={};function Op(...t){const e="THREE."+t.shift();console.log(e,...t)}function c0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function We(...t){t=c0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=c0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ts(...t){const e=t.join(" ");e in Fp||(Fp[e]=!0,We(...t))}function sy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ay={[rd]:sd,[ad]:cd,[od]:ud,[Oa]:ld,[sd]:rd,[cd]:ad,[ud]:od,[ld]:Oa};class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kp=1234567;const _a=Math.PI/180,za=180/Math.PI;function Bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function Zf(t,e){return(t%e+e)%e}function oy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ly(t,e,n){return t!==e?(n-t)/(e-t):0}function xa(t,e,n){return(1-n)*t+n*e}function cy(t,e,n,i){return xa(t,e,1-Math.exp(-n*i))}function uy(t,e=1){return e-Math.abs(Zf(t,e*2)-e)}function dy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function py(t,e){return t+Math.random()*(e-t)}function my(t){return t*(.5-Math.random())}function gy(t){t!==void 0&&(kp=t);let e=kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vy(t){return t*_a}function _y(t){return t*za}function xy(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Sy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function yy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function My(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*p,l*u,o*c);break;case"YZY":t.set(l*u,o*f,l*p,o*c);break;case"ZXZ":t.set(l*p,l*u,o*f,o*c);break;case"XZX":t.set(o*f,l*g,l*m,o*c);break;case"YXY":t.set(l*m,o*f,l*g,o*c);break;case"ZYZ":t.set(l*g,l*m,o*f,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bp={DEG2RAD:_a,RAD2DEG:za,generateUUID:Bs,clamp:nt,euclideanModulo:Zf,mapLinear:oy,inverseLerp:ly,lerp:xa,damp:cy,pingpong:uy,smoothstep:dy,smootherstep:fy,randInt:hy,randFloat:py,randFloatSpread:my,seededRandom:gy,degToRad:vy,radToDeg:_y,isPowerOfTwo:xy,ceilPowerOfTwo:Sy,floorPowerOfTwo:yy,setQuaternionFromProperEuler:My,normalize:tn,denormalize:rs},rh=class rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;let lt=rh;class zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],u=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(p!==M||l!==u||c!==m||f!==g){let v=l*u+c*m+f*g+p*M;v<0&&(u=-u,m=-m,g=-g,M=-M,v=-v);let d=1-o;if(v<.9995){const _=Math.acos(v),E=Math.sin(_);d=Math.sin(d*_)/E,o=Math.sin(o*_)/E,l=l*d+u*o,c=c*d+m*o,f=f*d+g*o,p=p*d+M*o}else{l=l*d+u*o,c=c*d+m*o,f=f*d+g*o,p=p*d+M*o;const _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+f*p+l*m-c*u,e[n+1]=l*g+f*u+c*p-o*m,e[n+2]=c*g+f*m+o*u-l*p,e[n+3]=f*g-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),u=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*f*p+c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p-u*m*g;break;case"YXZ":this._x=u*f*p+c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p+u*m*g;break;case"ZXY":this._x=u*f*p-c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p-u*m*g;break;case"ZYX":this._x=u*f*p-c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p+u*m*g;break;case"YZX":this._x=u*f*p+c*m*g,this._y=c*m*p+u*f*g,this._z=c*f*g-u*m*p,this._w=c*f*p-u*m*g;break;case"XZY":this._x=u*f*p-c*m*g,this._y=c*m*p-u*f*g,this._z=c*f*g+u*m*p,this._w=c*f*p+u*m*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sh=class sh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;let $=sh;const Ic=new $,zp=new zs,ah=class ah{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],m=i[5],g=i[8],M=r[0],v=r[3],d=r[6],_=r[1],E=r[4],y=r[7],T=r[2],b=r[5],P=r[8];return s[0]=a*M+o*_+l*T,s[3]=a*v+o*E+l*b,s[6]=a*d+o*y+l*P,s[1]=c*M+f*_+p*T,s[4]=c*v+f*E+p*b,s[7]=c*d+f*y+p*P,s[2]=u*M+m*_+g*T,s[5]=u*v+m*E+g*b,s[8]=u*d+m*y+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,u=o*l-f*s,m=c*s-a*l,g=n*p+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=p*M,e[1]=(r*c-f*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,n)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,n){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;let Xe=ah;const Uc=new Xe,Hp=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){const t={enabled:!0,workingColorSpace:Nl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Nl]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const it=Ey();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class wy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=Il("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class Qf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fc(r[a].image)):s.push(Fc(r[a]))}else s=Fc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let by=0;const Oc=new $;class Qt extends kr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=wi,r=wi,s=Gt,a=Ji,o=Wn,l=Pn,c=Qt.DEFAULT_ANISOTROPY,f=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Bs(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=t0;Qt.DEFAULT_ANISOTROPY=1;const oh=class oh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],u=l[1],m=l[5],g=l[9],M=l[2],v=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(g-v)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(g+v)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(m+1)/2,T=(d+1)/2,b=(f+u)/4,P=(p+M)/4,S=(g+v)/4;return E>y&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=b/i,s=P/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=S/s),this.set(i,r,s,n),this}let _=Math.sqrt((v-g)*(v-g)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(p-M)/_,this.z=(u-f)/_,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;let At=oh;class Ay extends kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Qf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Ay{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class u0 extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ul=class Ul{constructor(e,n,i,r,s,a,o,l,c,f,p,u,m,g,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,u,m,g,M,v)}set(e,n,i,r,s,a,o,l,c,f,p,u,m,g,M,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=M,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*p,g=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+g*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=g+m*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*f,m=l*p,g=c*f,M=c*p;n[0]=u+M*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=m*o-g,n[6]=M+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*f,m=l*p,g=c*f,M=c*p;n[0]=u-M*o,n[4]=-a*p,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*f,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*f,m=a*p,g=o*f,M=o*p;n[0]=l*f,n[4]=g*c-m,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=g*p+m,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*p+g,n[10]=u-M*p}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=a*f,n[9]=m*p-g,n[2]=g*p-m,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Py)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),zi.crossVectors(i,mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),zi.crossVectors(i,mn)),zi.normalize(),_o.crossVectors(mn,zi),r[0]=zi.x,r[4]=_o.x,r[8]=mn.x,r[1]=zi.y,r[5]=_o.y,r[9]=mn.y,r[2]=zi.z,r[6]=_o.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],m=i[13],g=i[2],M=i[6],v=i[10],d=i[14],_=i[3],E=i[7],y=i[11],T=i[15],b=r[0],P=r[4],S=r[8],R=r[12],L=r[1],D=r[5],B=r[9],q=r[13],I=r[2],G=r[6],te=r[10],K=r[14],V=r[3],z=r[7],C=r[11],A=r[15];return s[0]=a*b+o*L+l*I+c*V,s[4]=a*P+o*D+l*G+c*z,s[8]=a*S+o*B+l*te+c*C,s[12]=a*R+o*q+l*K+c*A,s[1]=f*b+p*L+u*I+m*V,s[5]=f*P+p*D+u*G+m*z,s[9]=f*S+p*B+u*te+m*C,s[13]=f*R+p*q+u*K+m*A,s[2]=g*b+M*L+v*I+d*V,s[6]=g*P+M*D+v*G+d*z,s[10]=g*S+M*B+v*te+d*C,s[14]=g*R+M*q+v*K+d*A,s[3]=_*b+E*L+y*I+T*V,s[7]=_*P+E*D+y*G+T*z,s[11]=_*S+E*B+y*te+T*C,s[15]=_*R+E*q+y*K+T*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],u=e[10],m=e[14],g=e[3],M=e[7],v=e[11],d=e[15],_=l*m-c*u,E=o*m-c*p,y=o*u-l*p,T=a*m-c*f,b=a*u-l*f,P=a*p-o*f;return n*(M*_-v*E+d*y)-i*(g*_-v*T+d*b)+r*(g*E-M*T+d*P)-s*(g*y-M*b+v*P)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],u=e[10],m=e[11],g=e[12],M=e[13],v=e[14],d=e[15],_=n*o-i*a,E=n*l-r*a,y=n*c-s*a,T=i*l-r*o,b=i*c-s*o,P=r*c-s*l,S=f*M-p*g,R=f*v-u*g,L=f*d-m*g,D=p*v-u*M,B=p*d-m*M,q=u*d-m*v,I=_*q-E*B+y*D+T*L-b*R+P*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*q-l*B+c*D)*G,e[1]=(r*B-i*q-s*D)*G,e[2]=(M*P-v*b+d*T)*G,e[3]=(u*b-p*P-m*T)*G,e[4]=(l*L-a*q-c*R)*G,e[5]=(n*q-r*L+s*R)*G,e[6]=(v*y-g*P-d*E)*G,e[7]=(f*P-u*y+m*E)*G,e[8]=(a*B-o*L+c*S)*G,e[9]=(i*L-n*B-s*S)*G,e[10]=(g*b-M*y+d*_)*G,e[11]=(p*y-f*b-m*_)*G,e[12]=(o*R-a*D-l*S)*G,e[13]=(n*D-i*R+r*S)*G,e[14]=(M*E-g*T-v*_)*G,e[15]=(f*T-p*E+u*_)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,u=s*c,m=s*f,g=s*p,M=a*f,v=a*p,d=o*p,_=l*c,E=l*f,y=l*p,T=i.x,b=i.y,P=i.z;return r[0]=(1-(M+d))*T,r[1]=(m+y)*T,r[2]=(g-E)*T,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(u+d))*b,r[6]=(v+_)*b,r[7]=0,r[8]=(g+E)*P,r[9]=(v-_)*P,r[10]=(1-(u+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),On.copy(this);const c=1/a,f=1/o,p=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===oi)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Dl)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===oi)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===Dl)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ul.prototype.isMatrix4=!0;let Ct=Ul;const Gr=new $,On=new Ct,Ry=new $(0,0,0),Py=new $(1,1,1),zi=new $,_o=new $,mn=new $,Gp=new Ct,Wp=new zs;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const jp=new $,Wr=new zs,pi=new Ct,xo=new $,Ks=new $,Ly=new $,Dy=new zs,Xp=new $(1,0,0),qp=new $(0,1,0),Yp=new $(0,0,1),$p={type:"added"},Iy={type:"removed"},jr={type:"childadded",child:null},kc={type:"childremoved",child:null};class pn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new $,n=new Ur,i=new zs,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Xe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xo.copy(e):xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ks,xo,this.up):pi.lookAt(xo,Ks,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(pi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),jr.child=e,this.dispatchEvent(jr),jr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Iy),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vs extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const v=n.getJointPose(M,i),d=this._getHandJoint(c,M);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},So={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Zf(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=zc(a,s,e+1/3),this.g=zc(a,s,e),this.b=zc(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=d0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return it.workingToColorSpace(Kt.copy(this),e),Math.round(nt(Kt.r*255,0,255))*65536+Math.round(nt(Kt.g*255,0,255))*256+Math.round(nt(Kt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=An){it.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(So);const i=xa(Hi.h,So.h,n),r=xa(Hi.s,So.s,n),s=xa(Hi.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new $e;$e.NAMES=d0;class f0 extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kn=new $,mi=new $,Hc=new $,gi=new $,Xr=new $,qr=new $,Kp=new $,Vc=new $,Gc=new $,Wc=new $,jc=new At,Xc=new At,qc=new At;class Gn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),mi.subVectors(i,n),Hc.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(mi),l=kn.dot(Hc),c=mi.dot(mi),f=mi.dot(Hc),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(c*l-o*f)*u,g=(a*f-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return jc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),jc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jc,s.x),a.addScaledVector(Xc,s.y),a.addScaledVector(qc,s.z),a}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),mi.subVectors(e,n),kn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),kn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),qr.subVectors(s,i),Vc.subVectors(e,i);const l=Xr.dot(Vc),c=qr.dot(Vc);if(l<=0&&c<=0)return n.copy(i);Gc.subVectors(e,r);const f=Xr.dot(Gc),p=qr.dot(Gc);if(f>=0&&p<=f)return n.copy(r);const u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Xr,a);Wc.subVectors(e,s);const m=Xr.dot(Wc),g=qr.dot(Wc);if(g>=0&&m<=g)return n.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(qr,o);const v=f*g-m*p;if(v<=0&&p-f>=0&&m-g>=0)return Kp.subVectors(s,r),o=(p-f)/(p-f+(m-g)),n.copy(r).addScaledVector(Kp,o);const d=1/(v+M+u);return a=M*d,o=u*d,n.copy(i).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Mo.subVectors(this.max,Zs),Yr.subVectors(e.a,Zs),$r.subVectors(e.b,Zs),Kr.subVectors(e.c,Zs),Vi.subVectors($r,Yr),Gi.subVectors(Kr,$r),pr.subVectors(Yr,Kr);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-pr.z,pr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,pr.z,0,-pr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-pr.y,pr.x,0];return!Yc(n,Yr,$r,Kr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,Yr,$r,Kr,Mo))?!1:(Eo.crossVectors(Vi,Gi),n=[Eo.x,Eo.y,Eo.z],Yc(n,Yr,$r,Kr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new $,new $,new $,new $,new $,new $,new $,new $],Bn=new $,yo=new qa,Yr=new $,$r=new $,Kr=new $,Vi=new $,Gi=new $,pr=new $,Zs=new $,Mo=new $,Eo=new $,mr=new $;function Yc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Lt=new $,wo=new lt;let Fy=0;class Sn extends kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ny,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wo.fromBufferAttribute(this,n),wo.applyMatrix3(e),this.setXY(n,wo.x,wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class h0 extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p0 extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ci extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Oy=new qa,Qs=new $,$c=new $;class Jl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Oy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add($c)),this.expandByPoint(Qs.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ky=0;const bn=new Ct,Kc=new pn,Zr=new $,gn=new qa,Js=new qa,kt=new $;class Kn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?p0:h0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(gn.min,Js.min),gn.expandByPoint(kt),kt.addVectors(gn.max,Js.max),gn.expandByPoint(kt)):(gn.expandByPoint(Js.min),gn.expandByPoint(Js.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)kt.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),kt.add(Zr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new $,l[S]=new $;const c=new $,f=new $,p=new $,u=new lt,m=new lt,g=new lt,M=new $,v=new $;function d(S,R,L){c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,R),p.fromBufferAttribute(i,L),u.fromBufferAttribute(s,S),m.fromBufferAttribute(s,R),g.fromBufferAttribute(s,L),f.sub(c),p.sub(c),m.sub(u),g.sub(u);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(M.copy(f).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),v.copy(p).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(D),o[S].add(M),o[R].add(M),o[L].add(M),l[S].add(v),l[R].add(v),l[L].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,R=_.length;S<R;++S){const L=_[S],D=L.start,B=L.count;for(let q=D,I=D+B;q<I;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new $,y=new $,T=new $,b=new $;function P(S){T.fromBufferAttribute(r,S),b.copy(T);const R=o[S];E.copy(R),E.sub(T.multiplyScalar(T.dot(R))).normalize(),y.crossVectors(b,R);const D=y.dot(l[S])<0?-1:1;a.setXYZW(S,E.x,E.y,E.z,D)}for(let S=0,R=_.length;S<R;++S){const L=_[S],D=L.start,B=L.count;for(let q=D,I=D+B;q<I;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,f=new $,p=new $;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),M=e.getX(u+1),v=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,v),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,v),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f);let m=0,g=0;for(let M=0,v=l.length;M<v;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*f;for(let d=0;d<f;d++)u[g++]=c[m++]}return new Sn(u,f,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new $,By=new $,zy=new Xe;class yi{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(By.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Zc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zy.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hy=0;class Ya extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=va,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jv,this.blendDst=Xv,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new $,Qc=new $,To=new $,bo=new $;class eh{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qc.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),bo.copy(this.origin).sub(Qc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(To),o=bo.dot(this.direction),l=-bo.dot(To),c=bo.lengthSq(),f=Math.abs(1-a*a);let p,u,m,g;if(f>0)if(p=a*l-o,u=a*o-l,g=s*f,p>=0)if(u>=-g)if(u<=g){const M=1/f;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(p=Math.max(0,-(a*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c);else u=a>0?-s:s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Qc).addScaledVector(To,u),m}intersectSphere(e,n){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=e.x-a.x,u=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,v=n.z-a.z,d=i.x-a.x,_=i.y-a.y,E=i.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(f);let P,S,R,L,D,B,q,I,G,te,K,V;if(y>=T&&y>=b?(R=l,B=p,G=g,V=d,l>=0?(P=c,S=f,L=u,D=m,q=M,I=v,te=_,K=E):(P=f,S=c,L=m,D=u,q=v,I=M,te=E,K=_)):T>=b?(R=c,B=u,G=M,V=_,c>=0?(P=f,S=l,L=m,D=p,q=v,I=g,te=E,K=d):(P=l,S=f,L=p,D=m,q=g,I=v,te=d,K=E)):(R=f,B=m,G=v,V=E,f>=0?(P=l,S=c,L=p,D=u,q=g,I=M,te=d,K=_):(P=c,S=l,L=u,D=p,q=M,I=g,te=_,K=d)),R===0)return null;const z=P/R,C=S/R,A=1/R,ee=L-z*B,re=D-C*B,pe=q-z*G,he=I-C*G,me=te-z*V,k=K-C*V,Y=me*he-k*pe,le=ee*k-re*me,we=pe*re-he*ee;if(r){if(Y<0||le<0||we<0)return null}else if((Y<0||le<0||we<0)&&(Y>0||le>0||we>0))return null;const se=Y+le+we;if(se===0)return null;const ue=A*(Y*B+le*G+we*V);return(se>0?ue<0:ue>0)?null:this.at(ue/se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class th extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zp=new Ct,gr=new eh,Ao=new Jl,Qp=new $,Co=new $,Ro=new $,Po=new $,Jc=new $,No=new $,Jp=new $,Lo=new $;class hi extends pn{constructor(e=new Kn,n=new th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(Jc.fromBufferAttribute(p,e),a?No.addScaledVector(Jc,f):No.addScaledVector(Jc.sub(n),f))}n.add(No)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ao.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ao,Qp)===null||gr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const v=u[g],d=a[v.materialIndex],_=Math.max(v.start,m.start),E=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let y=_,T=E;y<T;y+=3){const b=o.getX(y),P=o.getX(y+1),S=o.getX(y+2);r=Do(this,d,e,i,c,f,p,b,P,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let v=g,d=M;v<d;v+=3){const _=o.getX(v),E=o.getX(v+1),y=o.getX(v+2);r=Do(this,a,e,i,c,f,p,_,E,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const v=u[g],d=a[v.materialIndex],_=Math.max(v.start,m.start),E=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let y=_,T=E;y<T;y+=3){const b=y,P=y+1,S=y+2;r=Do(this,d,e,i,c,f,p,b,P,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let v=g,d=M;v<d;v+=3){const _=v,E=v+1,y=v+2;r=Do(this,a,e,i,c,f,p,_,E,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function Vy(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Lr,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Co),t.getVertexPosition(l,Ro),t.getVertexPosition(c,Po);const f=Vy(t,e,n,i,Co,Ro,Po,Jp);if(f){const p=new $;Gn.getBarycoord(Jp,Co,Ro,Po,p),r&&(f.uv=Gn.getInterpolatedAttribute(r,o,l,c,p,new lt)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,o,l,c,p,new lt)),a&&(f.normal=Gn.getInterpolatedAttribute(a,o,l,c,p,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new $,materialIndex:0};Gn.getNormal(Co,Ro,Po,u.normal),f.face=u,f.barycoord=p}return f}class Gy extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Vt,f=Vt,p,u){super(null,a,o,l,c,f,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vr=new Jl,Wy=new lt(.5,.5),Io=new $;class m0{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],u=s[6],m=s[7],g=s[8],M=s[9],v=s[10],d=s[11],_=s[12],E=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-a,m-f,d-g,T-_).normalize(),r[1].setComponents(c+a,m+f,d+g,T+_).normalize(),r[2].setComponents(c+o,m+p,d+M,T+E).normalize(),r[3].setComponents(c-o,m-p,d-M,T-E).normalize(),i)r[4].setComponents(l,u,v,y).normalize(),r[5].setComponents(c-l,m-u,d-v,T-y).normalize();else if(r[4].setComponents(c-l,m-u,d-v,T-y).normalize(),n===oi)r[5].setComponents(c+l,m+u,d+v,T+y).normalize();else if(n===Dl)r[5].setComponents(l,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=Wy.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jy extends Ya{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new Ct,Gd=new eh,Uo=new Jl,Fo=new $;class Xy extends pn{constructor(e=new Kn,n=new jy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;em.copy(r).invert(),Gd.copy(e.ray).applyMatrix4(em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,M=m;g<M;g++){const v=c.getX(g);Fo.fromBufferAttribute(p,v),tm(Fo,v,l,r,e,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,M=m;g<M;g++)Fo.fromBufferAttribute(p,g),tm(Fo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tm(t,e,n,i,r,s,a){const o=Gd.distanceSqToPoint(t);if(o<n){const l=new $;Gd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class g0 extends Qt{constructor(e=[],n=Dr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qy extends Qt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ha extends Qt{constructor(e,n,i=di,r,s,a,o=Vt,l=Vt,c,f=Di,p=1){if(f!==Di&&f!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Yy extends Ha{constructor(e,n=di,i=Dr,r,s,a=Vt,o=Vt,l,c=Di){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class v0 extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $a extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(f,3)),this.setAttribute("uv",new Ci(p,2));function g(M,v,d,_,E,y,T,b,P,S,R){const L=y/P,D=T/S,B=y/2,q=T/2,I=b/2,G=P+1,te=S+1;let K=0,V=0;const z=new $;for(let C=0;C<te;C++){const A=C*D-q;for(let ee=0;ee<G;ee++){const re=ee*L-B;z[M]=re*_,z[v]=A*E,z[d]=I,c.push(z.x,z.y,z.z),z[M]=0,z[v]=0,z[d]=b>0?1:-1,f.push(z.x,z.y,z.z),p.push(ee/P),p.push(1-C/S),K+=1}}for(let C=0;C<S;C++)for(let A=0;A<P;A++){const ee=u+A+G*C,re=u+A+G*(C+1),pe=u+(A+1)+G*(C+1),he=u+(A+1)+G*C;l.push(ee,re,he),l.push(re,pe,he),V+=6}o.addGroup(m,V,R),m+=V,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,u=n/l,m=[],g=[],M=[],v=[];for(let d=0;d<f;d++){const _=d*u-a;for(let E=0;E<c;E++){const y=E*p-s;g.push(y,-_,0),M.push(0,0,1),v.push(E/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const E=_+c*d,y=_+c*(d+1),T=_+1+c*(d+1),b=_+1+c*d;m.push(E,y,b),m.push(y,T,b)}this.setIndex(m),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(M,3)),this.setAttribute("uv",new Ci(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(nm(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(nm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $y(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ky={clone:Us,merge:nn};var Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jy extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eM extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tM extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oo=new $,ko=new zs,ei=new $;class x0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,ko,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,ko,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Oo,ko,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,ko,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new $,im=new lt,rm=new lt;class _n extends x0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class S0 extends x0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=-90,Jr=1;class nM extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new _n(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new _n(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new _n(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new _n(Qr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class iM extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sm=new Ct;class rM{constructor(e,n,i=0,r=1/0){this.ray=new eh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):at("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sm),this}intersectObject(e,n=!0,i=[]){return Wd(e,this,i,n),i.sort(am),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wd(e[r],this,i,n);return i.sort(am),i}}function am(t,e){return t.distance-e.distance}function Wd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Wd(s[a],e,n,!0)}}class sM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const lh=class lh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};lh.prototype.isMatrix2=!0;let om=lh;function lm(t,e,n,i){const r=aM(i);switch(n){case a0:return t*e;case l0:return t*e/r.components*r.byteLength;case Xf:return t*e/r.components*r.byteLength;case Ir:return t*e*2/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case o0:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Yf:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(t,16)*Math.max(e,8)/4;case hd:case md:return Math.max(t,8)*Math.max(e,8)/2;case vd:case _d:case Sd:case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xd:case Rl:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Od:case kd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pl:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aM(t){switch(t){case Pn:case n0:return{byteLength:1,components:1};case ka:case i0:case fi:return{byteLength:2,components:1};case Wf:case jf:return{byteLength:2,components:4};case di:case Gf:case ai:return{byteLength:4,components:1};case r0:case s0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y0(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],M=p[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const M=p[m];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,MM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,aE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,oE=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_E=`#if defined( USE_POINTS_UV )
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
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
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
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
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
}`,mw=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,vw=`#define DISTANCE
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
void main() {
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`uniform float scale;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,bw=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Cw=`#define NORMAL
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
}`,Rw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,Nw=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Iw=`#define TOON
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
}`,Uw=`#define TOON
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
}`,Fw=`uniform float size;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Bw=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,zw=`uniform float rotation;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:dM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:vM,begin_vertex:_M,beginnormal_vertex:xM,bsdfs:SM,iridescence_fragment:yM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:bM,color_fragment:AM,color_pars_fragment:CM,color_pars_vertex:RM,color_vertex:PM,common:NM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:DM,displacementmap_pars_vertex:IM,displacementmap_vertex:UM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:kM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:HM,envmap_pars_fragment:VM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eE,envmap_vertex:WM,fog_vertex:jM,fog_pars_vertex:XM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:aE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:cE,lightprobes_pars_fragment:uE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:vE,map_particle_pars_fragment:_E,metalnessmap_fragment:xE,metalnessmap_pars_fragment:SE,morphinstance_vertex:yE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:PE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:FE,packing:OE,premultiplied_alpha_fragment:kE,project_vertex:BE,dithering_fragment:zE,dithering_pars_fragment:HE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:jE,shadowmap_vertex:XE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:$E,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:ew,tonemapping_pars_fragment:tw,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:rw,uv_pars_vertex:sw,uv_vertex:aw,worldpos_vertex:ow,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:dw,cube_vert:fw,cube_frag:hw,depth_vert:pw,depth_frag:mw,distance_vert:gw,distance_frag:vw,equirect_vert:_w,equirect_frag:xw,linedashed_vert:Sw,linedashed_frag:yw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:ww,meshlambert_frag:Tw,meshmatcap_vert:bw,meshmatcap_frag:Aw,meshnormal_vert:Cw,meshnormal_frag:Rw,meshphong_vert:Pw,meshphong_frag:Nw,meshphysical_vert:Lw,meshphysical_frag:Dw,meshtoon_vert:Iw,meshtoon_frag:Uw,points_vert:Fw,points_frag:Ow,shadow_vert:kw,shadow_frag:Bw,sprite_vert:zw,sprite_frag:Hw},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ii={basic:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:nn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:nn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:nn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:nn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:nn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:nn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:nn([Me.common,Me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:nn([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Bo={r:0,b:0,g:0},Vw=new Ct,M0=new Xe;M0.set(-1,0,0,0,1,0,0,0,1);function Gw(t,e,n,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,f=null,p=0,u=null;function m(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(_){let E=!1;const y=m(_);y===null?v(a,o):y&&y.isColor&&(v(y,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(_,E){const y=m(E);y&&(y.isCubeTexture||y.mapping===Ql)?(c===void 0&&(c=new hi(new $a(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Us(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M0),c.material.toneMapped=it.getTransfer(y.colorSpace)!==dt,(f!==y||p!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hi(new Ka(2,2),new $n({name:"BackgroundMaterial",uniforms:Us(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,E){_.getRGB(Bo,_0(t)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,E,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,v(a,o)},render:g,addToRenderList:M,dispose:d}}function Ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(D,B,q,I,G){let te=!1;const K=p(D,I,q,B);s!==K&&(s=K,c(s.object)),te=m(D,I,q,G),te&&g(D,I,q,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(D,B,q,I),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function p(D,B,q,I){const G=I.wireframe===!0;let te=i[B.id];te===void 0&&(te={},i[B.id]=te);const K=D.isInstancedMesh===!0?D.id:0;let V=te[K];V===void 0&&(V={},te[K]=V);let z=V[q.id];z===void 0&&(z={},V[q.id]=z);let C=z[G];return C===void 0&&(C=u(l()),z[G]=C),C}function u(D){const B=[],q=[],I=[];for(let G=0;G<n;G++)B[G]=0,q[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,B,q,I){const G=s.attributes,te=B.attributes;let K=0;const V=q.getAttributes();for(const z in V)if(V[z].location>=0){const A=G[z];let ee=te[z];if(ee===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),A===void 0||A.attribute!==ee||ee&&A.data!==ee.data)return!0;K++}return s.attributesNum!==K||s.index!==I}function g(D,B,q,I){const G={},te=B.attributes;let K=0;const V=q.getAttributes();for(const z in V)if(V[z].location>=0){let A=te[z];A===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(A=D.instanceColor));const ee={};ee.attribute=A,A&&A.data&&(ee.data=A.data),G[z]=ee,K++}s.attributes=G,s.attributesNum=K,s.index=I}function M(){const D=s.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function v(D){d(D,0)}function d(D,B){const q=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;q[D]=1,I[D]===0&&(t.enableVertexAttribArray(D),I[D]=1),G[D]!==B&&(t.vertexAttribDivisor(D,B),G[D]=B)}function _(){const D=s.newAttributes,B=s.enabledAttributes;for(let q=0,I=B.length;q<I;q++)B[q]!==D[q]&&(t.disableVertexAttribArray(q),B[q]=0)}function E(D,B,q,I,G,te,K){K===!0?t.vertexAttribIPointer(D,B,q,G,te):t.vertexAttribPointer(D,B,q,I,G,te)}function y(D,B,q,I){M();const G=I.attributes,te=q.getAttributes(),K=B.defaultAttributeValues;for(const V in te){const z=te[V];if(z.location>=0){let C=G[V];if(C===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){const A=C.normalized,ee=C.itemSize,re=e.get(C);if(re===void 0)continue;const pe=re.buffer,he=re.type,me=re.bytesPerElement,k=he===t.INT||he===t.UNSIGNED_INT||C.gpuType===Gf;if(C.isInterleavedBufferAttribute){const Y=C.data,le=Y.stride,we=C.offset;if(Y.isInstancedInterleavedBuffer){for(let se=0;se<z.locationSize;se++)d(z.location+se,Y.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<z.locationSize;se++)v(z.location+se);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let se=0;se<z.locationSize;se++)E(z.location+se,ee/z.locationSize,he,A,le*me,(we+ee/z.locationSize*se)*me,k)}else{if(C.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)d(z.location+Y,C.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let Y=0;Y<z.locationSize;Y++)v(z.location+Y);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Y=0;Y<z.locationSize;Y++)E(z.location+Y,ee/z.locationSize,he,A,ee*me,ee/z.locationSize*Y*me,k)}}else if(K!==void 0){const A=K[V];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(z.location,A);break;case 3:t.vertexAttrib3fv(z.location,A);break;case 4:t.vertexAttrib4fv(z.location,A);break;default:t.vertexAttrib1fv(z.location,A)}}}}_()}function T(){R();for(const D in i){const B=i[D];for(const q in B){const I=B[q];for(const G in I){const te=I[G];for(const K in te)f(te[K].object),delete te[K];delete I[G]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const q in B){const I=B[q];for(const G in I){const te=I[G];for(const K in te)f(te[K].object),delete te[K];delete I[G]}}delete i[D.id]}function P(D){for(const B in i){const q=i[B];for(const I in q){const G=q[I];if(G[D.id]===void 0)continue;const te=G[D.id];for(const K in te)f(te[K].object),delete te[K];delete G[D.id]}}}function S(D){for(const B in i){const q=i[B],I=D.isInstancedMesh===!0?D.id:0,G=q[I];if(G!==void 0){for(const te in G){const K=G[te];for(const V in K)f(K[V].object),delete K[V];delete G[te]}delete q[I],Object.keys(q).length===0&&delete i[B]}}}function R(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:v,disableUnusedAttributes:_}}function jw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Xw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Wn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const S=P===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&P!==ai&&!S&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(We("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:b}}function qw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||r;return r=u,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,M=p.clipIntersection,v=p.clipShadows,d=t.get(p);if(!r||g===null||g.length===0||s&&!v)s?f(null):c();else{const _=s?0:i,E=_*4;let y=d.clippingState||null;l.value=y,y=f(g,u,E,m);for(let T=0;T!==E;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,u,m,g){const M=p!==null?p.length:0;let v=null;if(M!==0){if(v=l.value,g!==!0||v===null){const d=m+M*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<d)&&(v=new Float32Array(d));for(let E=0,y=m;E!==M;++E,y+=4)a.copy(p[E]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}const _s=4,Yw=6,$w=20,Kw=256,ea=new S0,cm=new $e;let eu=null,tu=0,nu=0,iu=!1;const Zw=new $,_r=new $;class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Zw}=s;eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eu,tu,nu),this._renderer.xr.enabled=iu,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Dr||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:fi,format:Wn,colorSpace:Nl,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qw(s)),this._blurMaterial=eT(s,e,n),this._ggxMaterial=Jw(s,e,n)}return r}_compileMaterial(e){const n=new hi(new Kn,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new _n(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(cm),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new $a,new th({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,v=M.material;let d=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,d=!0):(v.color.copy(cm),d=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const T=this._cubeSize;es(r,y*T,E>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(M,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Dr||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,m=p*u,{_lodMax:g}=this,M=this._sizeLods[i],v=3*M*(i>g-_s?i-g+_s:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,es(s,v,d,3*M,2*M),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,es(e,v,d,3*M,2*M),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-_s?r-this._lodMax+_s:0),u=4*(this._cubeSize-f);es(n,p,u,3*f,2*f),a.setRenderTarget(n),a.render(l,ea)}}function Qw(t){const e=[],n=[];let i=t;const r=t-_s+1+Yw;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),M=new Float32Array(m*u*p);for(let d=0;d<p;d++){const _=d%3*2/3-1,E=d>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(y,m*u*d);for(let T=0;T<u;T++){const b=f[T*2]*2-1,P=f[T*2+1]*2-1;d===0?_r.set(1,P,b):d===1?_r.set(-b,1,-P):d===2?_r.set(-b,P,1):d===3?_r.set(-1,P,-b):d===4?_r.set(-b,-1,P):_r.set(b,P,-1),_r.toArray(M,(d*u+T)*m)}}const v=new Kn;v.setAttribute("position",new Sn(g,m)),v.setAttribute("outputDirection",new Sn(M,m)),n.push(new hi(v,null)),i>_s&&i--}return{lodMeshes:n,sizeLods:e}}function dm(t,e,n){const i=new qn(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Jw(t,e,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function eT(t,e,n){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:$w,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fm(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hm(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class E0 extends qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new g0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $a(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:bi});s.uniforms.tEquirect.value=n;const a=new hi(r,s),o=n.minFilter;return n.minFilter===Ji&&(n.minFilter=Gt),new nM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function tT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Pc||m===Nc)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new E0(g.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===Pc||m===Nc,M=m===Dr||m===Is;if(g||M){let v=n.get(u);const d=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new um(t)),v=g?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const _=u.image;return g&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new um(t)),v=g?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",f),v.texture):null}}}return u}function o(u,m){return m===Pc?u.mapping=Dr:m===Nc&&(u.mapping=Is),u}function l(u){let m=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function nT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ts("WebGLRenderer: "+i+" extension not supported."),r}}}function iT(t,e,n,i){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const _=m.array;M=m.version;for(let E=0,y=_.length;E<y;E+=3){const T=_[E+0],b=_[E+1],P=_[E+2];u.push(T,b,b,P,P,T)}}else{const _=g.array;M=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){const T=E+0,b=E+1,P=E+2;u.push(T,b,b,P,P,T)}}const v=new(g.count>=65535?p0:h0)(u,1);v.version=M;const d=s.get(p);d&&e.remove(d),s.set(p,v)}function f(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function rT(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,u){t.drawElements(i,u,s,p*a),n.update(u,i,1)}function c(p,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,p*a,m),n.update(u,i,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,m);let M=0;for(let v=0;v<m;v++)M+=u[v];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function sT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aT(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let L=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),v===!0&&(y=3);let T=o.attributes.position.count*y,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*b*4*p),S=new u0(P,T,b,p);S.type=ai,S.needsUpdate=!0;const R=y*4;for(let D=0;D<p;D++){const B=d[D],q=_[D],I=E[D],G=T*b*4*D;for(let te=0;te<B.count;te++){const K=te*R;g===!0&&(r.fromBufferAttribute(B,te),P[G+K+0]=r.x,P[G+K+1]=r.y,P[G+K+2]=r.z,P[G+K+3]=0),M===!0&&(r.fromBufferAttribute(q,te),P[G+K+4]=r.x,P[G+K+5]=r.y,P[G+K+6]=r.z,P[G+K+7]=0),v===!0&&(r.fromBufferAttribute(I,te),P[G+K+8]=r.x,P[G+K+9]=r.y,P[G+K+10]=r.z,P[G+K+11]=I.itemSize===4?r.w:1)}}u={count:p,texture:S,size:new lt(T,b)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function oT(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const lT={[Yv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Zv]:"ACES_FILMIC_TONE_MAPPING",[Jv]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[Qv]:"CUSTOM_TONE_MAPPING"};function cT(t,e,n,i,r,s){const a=new qn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Kn;c.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const f=new Jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new hi(c,f),u=new S0(-1,1,1,-1,0,1);let m=null,g=null,M=!1,v,d=null,_=[],E=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<_.length;b++){const P=_[b];P.setSize&&P.setSize(y,T)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;const T=a.width,b=a.height;_.length>0&&o===null&&(o=new qn(T,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new qn(T,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<_.length;P++){const S=_[P];S.setSize&&S.setSize(T,b)}},this.begin=function(y,T){if(M||y.toneMapping===ui&&_.length===0)return!1;if(d=T,T!==null){const b=T.width,P=T.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return E===!1&&y.setRenderTarget(a),v=y.toneMapping,y.toneMapping=ui,!0},this.hasRenderPass=function(){return E},this.end=function(y,T){y.toneMapping=v,M=!0;let b=a,P=o;for(let S=0;S<_.length;S++){const R=_[S];R.enabled!==!1&&(R.render(y,P,b,T),R.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(m!==y.outputColorSpace||g!==y.toneMapping){m=y.outputColorSpace,g=y.toneMapping,f.defines={},it.getTransfer(m)===dt&&(f.defines.SRGB_TRANSFER="");const S=lT[g];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(p,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const w0=new Qt,jd=new Ha(1,1),T0=new u0,b0=new Cy,A0=new g0,pm=[],mm=[],gm=new Float32Array(16),vm=new Float32Array(9),_m=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;_m.set(i),t.uniformMatrix2fv(this.addr,!1,_m),Ot(n,i)}}function mT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),Ot(n,i)}}function gT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),Ot(n,i)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(jd.compareFunction=n.isReversedDepthBuffer()?Kf:$f,s=jd):s=w0,n.setTexture2D(e||s,r)}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||b0,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||A0,r)}function CT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||T0,r)}function RT(t){switch(t){case 5126:return uT;case 35664:return dT;case 35665:return fT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return ST;case 5125:return yT;case 36294:return MT;case 36295:return ET;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return CT}}function PT(t,e){t.uniform1fv(this.addr,e)}function NT(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function LT(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function DT(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function IT(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UT(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FT(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OT(t,e){t.uniform1iv(this.addr,e)}function kT(t,e){t.uniform2iv(this.addr,e)}function BT(t,e){t.uniform3iv(this.addr,e)}function zT(t,e){t.uniform4iv(this.addr,e)}function HT(t,e){t.uniform1uiv(this.addr,e)}function VT(t,e){t.uniform2uiv(this.addr,e)}function GT(t,e){t.uniform3uiv(this.addr,e)}function WT(t,e){t.uniform4uiv(this.addr,e)}function jT(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=jd:a=w0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||b0,s[a])}function qT(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||A0,s[a])}function YT(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||T0,s[a])}function $T(t){switch(t){case 5126:return PT;case 35664:return NT;case 35665:return LT;case 35666:return DT;case 35674:return IT;case 35675:return UT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return kT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return VT;case 36295:return GT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class KT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RT(n.type)}}class ZT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$T(n.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function xm(t,e){t.seq.push(e),t.map[e.id]=e}function JT(t,e,n){const i=t.name,r=i.length;for(ru.lastIndex=0;;){const s=ru.exec(i),a=ru.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){xm(n,c===void 0?new KT(o,t,e):new ZT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new QT(o),xm(n,p)),n=p}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);JT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eb=37297;let tb=0;function nb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ym=new Xe;function ib(t){it._getMatrix(ym,it.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+nb(t.getShaderSource(e),o)}else return s}function rb(t,e){const n=ib(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const sb={[Yv]:"Linear",[$v]:"Reinhard",[Kv]:"Cineon",[Zv]:"ACESFilmic",[Jv]:"AgX",[e0]:"Neutral",[Qv]:"Custom"};function ab(t,e){const n=sb[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zo=new $;function ob(){it.getLuminanceCoefficients(zo);const t=zo.x.toFixed(4),e=zo.y.toFixed(4),n=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function cb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ub(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(db,hb)}const fb=new Map;function hb(t,e){let n=Ze[e];if(n===void 0){const i=fb.get(e);if(i!==void 0)n=Ze[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xd(n)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(pb,mb)}function mb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gb={[Jo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function vb(t){return gb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _b={[Dr]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function xb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":_b[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sb={[Is]:"ENVMAP_MODE_REFRACTION"};function yb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Sb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mb={[qv]:"ENVMAP_BLENDING_MULTIPLY",[WS]:"ENVMAP_BLENDING_MIX",[jS]:"ENVMAP_BLENDING_ADD"};function Eb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Mb[t.combine]||"ENVMAP_BLENDING_NONE"}function wb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Tb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=vb(n),c=xb(n),f=yb(n),p=Eb(n),u=wb(n),m=lb(n),g=cb(s),M=r.createProgram();let v,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),d.length>0&&(d+=`
`)):(v=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),d=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?Ze.tonemapping_pars_fragment:"",n.toneMapping!==ui?ab("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,rb("linearToOutputTexel",n.outputColorSpace),ob(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Xd(a),a=Em(a,n),a=wm(a,n),o=Xd(o),o=Em(o,n),o=wm(o,n),a=Tm(a),o=Tm(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=_+v+a,y=_+d+o,T=Sm(r,r.VERTEX_SHADER,E),b=Sm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,T),r.attachShader(M,b),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",q=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(b)||"",G=B.trim(),te=q.trim(),K=I.trim();let V=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,b);else{const C=Mm(r,T,"vertex"),A=Mm(r,b,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+C+`
`+A)}else G!==""?We("WebGLProgram: Program Info Log:",G):(te===""||K==="")&&(z=!1);z&&(D.diagnostics={runnable:V,programLog:G,vertexShader:{log:te,prefix:v},fragmentShader:{log:K,prefix:d}})}r.deleteShader(T),r.deleteShader(b),S=new rl(r,M),R=ub(r,M)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,eb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=b,this}let bb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Cb(e),n.set(e,i)),i}}class Cb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Rb(t){return t===Ir||t===Rl||t===Pl}function Pb(t,e,n,i,r,s){const a=new Jf,o=new Ab,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,R,L,D,B,q){const I=D.fog,G=B.geometry,te=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,V=e.get(S.envMap||te,K),z=V&&V.mapping===Ql?V.image.height:null,C=m[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&We("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const A=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=A!==void 0?A.length:0;let re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let pe,he,me,k;if(C){const gt=ii[C];pe=gt.vertexShader,he=gt.fragmentShader}else{pe=S.vertexShader,he=S.fragmentShader;const gt=o.getVertexShaderStage(S),ct=o.getFragmentShaderStage(S);o.update(S,gt,ct),me=gt.id,k=ct.id}const Y=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,se=B.isBatchedMesh===!0,ue=!!S.map,ze=!!S.matcap,de=!!V,ge=!!S.aoMap,Te=!!S.lightMap,Ie=!!S.bumpMap&&S.wireframe===!1,Ge=!!S.normalMap,Qe=!!S.displacementMap,rt=!!S.emissiveMap,je=!!S.metalnessMap,qe=!!S.roughnessMap,U=S.anisotropy>0,mt=S.clearcoat>0,tt=S.dispersion>0,N=S.retroreflectivity>0,x=S.iridescence>0,H=S.sheen>0,W=S.transmission>0,Z=U&&!!S.anisotropyMap,oe=mt&&!!S.clearcoatMap,fe=mt&&!!S.clearcoatNormalMap,J=mt&&!!S.clearcoatRoughnessMap,ie=x&&!!S.iridescenceMap,ve=x&&!!S.iridescenceThicknessMap,ke=H&&!!S.sheenColorMap,ye=H&&!!S.sheenRoughnessMap,_e=!!S.specularMap,Be=!!S.specularColorMap,Ve=!!S.specularIntensityMap,Ye=W&&!!S.transmissionMap,O=W&&!!S.thicknessMap,xe=!!S.gradientMap,ne=!!S.alphaMap,Se=S.alphaTest>0,Ae=!!S.alphaHash,ae=!!S.extensions;let He=ui;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(He=t.toneMapping);const Ue={shaderID:C,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:he,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:se,batchingColor:se&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:ze,envMap:de,envMapMode:de&&V.mapping,envMapCubeUVHeight:z,aoMap:ge,lightMap:Te,bumpMap:Ie,normalMap:Ge,displacementMap:Qe,emissiveMap:rt,normalMapObjectSpace:Ge&&S.normalMapType===YS,normalMapTangentSpace:Ge&&S.normalMapType===Ip,packedNormalMap:Ge&&S.normalMapType===Ip&&Rb(S.normalMap.format),metalnessMap:je,roughnessMap:qe,anisotropy:U,anisotropyMap:Z,clearcoat:mt,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:tt,retroreflection:N,iridescence:x,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:H,sheenColorMap:ke,sheenRoughnessMap:ye,specularMap:_e,specularColorMap:Be,specularIntensityMap:Ve,transmission:W,transmissionMap:Ye,thicknessMap:O,gradientMap:xe,opaque:S.transparent===!1&&S.blending===va&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:Ae,combine:S.combine,mapUv:ue&&g(S.map.channel),aoMapUv:ge&&g(S.aoMap.channel),lightMapUv:Te&&g(S.lightMap.channel),bumpMapUv:Ie&&g(S.bumpMap.channel),normalMapUv:Ge&&g(S.normalMap.channel),displacementMapUv:Qe&&g(S.displacementMap.channel),emissiveMapUv:rt&&g(S.emissiveMap.channel),metalnessMapUv:je&&g(S.metalnessMap.channel),roughnessMapUv:qe&&g(S.roughnessMap.channel),anisotropyMapUv:Z&&g(S.anisotropyMap.channel),clearcoatMapUv:oe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(S.sheenRoughnessMap.channel),specularMapUv:_e&&g(S.specularMap.channel),specularColorMapUv:Be&&g(S.specularColorMap.channel),specularIntensityMapUv:Ve&&g(S.specularIntensityMap.channel),transmissionMapUv:Ye&&g(S.transmissionMap.channel),thicknessMapUv:O&&g(S.thicknessMap.channel),alphaMapUv:ne&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ge||U),vertexNormals:!!G.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(ue||ne),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||G.attributes.normal===void 0&&Ge===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:rt&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&S.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function v(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)R.push(L),R.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(d(R,S),_(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function d(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function E(S){const R=m[S.type];let L;if(R){const D=ii[R];L=Ky.clone(D.uniforms)}else L=S.uniforms;return L}function y(S,R){let L=f.get(R);return L!==void 0?++L.usedTimes:(L=new Tb(t,R,S,r),c.push(L),f.set(R,L)),L}function T(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function b(S){o.remove(S)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:P}}function Nb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Lb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,M,v,d){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:v,group:d},t[e]=_):(_.id=u.id,_.object=u,_.geometry=m,_.material=g,_.materialVariant=a(u),_.groupOrder=M,_.renderOrder=u.renderOrder,_.z=v,_.group=d),e++,_}function l(u,m,g,M,v,d,_){_.reversedDepth===!0&&(v=-v);const E=o(u,m,g,M,v,d);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):n.push(E)}function c(u,m,g,M,v,d){const _=o(u,m,g,M,v,d);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function f(u,m){n.length>1&&n.sort(u||Lb),i.length>1&&i.sort(m||Am),r.length>1&&r.sort(m||Am)}function p(){for(let u=e,m=t.length;u<m;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function Db(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cm,t.set(i,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new $e};break;case"SpotLight":n={position:new $,direction:new $,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function Ub(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Fb=0;function Ob(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kb(t){const e=new Ib,n=Ub(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Ct,a=new Ct;function o(c){let f=0,p=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,g=0,M=0,v=0,d=0,_=0,E=0,y=0,T=0,b=0,P=0,S=0,R=0,L=0;c.sort(Ob);for(let B=0,q=c.length;B<q;B++){const I=c[B],G=I.color,te=I.intensity,K=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ir?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=G.r*te,p+=G.g*te,u+=G.b*te;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],te);L++}else if(I.isSunLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,A=n.get(I);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[g]=A,i.sunShadowMap[g]=V;const ee=C.getViewportCount();for(let re=0;re<ee;re++)i.sunShadowMatrix[M+re]=C.getMatrix(re),i.sunShadowCascade[M+re]=C._cascadeData[re];M+=ee,g++}i.sun[m]=z,m++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,A=n.get(I);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.directionalShadow[v]=A,i.directionalShadowMap[v]=V,i.directionalShadowMatrix[v]=I.shadow.matrix,T++}i.directional[v]=z,v++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(G).multiplyScalar(te),z.distance=K,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[_]=z;const C=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,C.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=C.matrix,I.castShadow){const A=n.get(I);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.spotShadow[_]=A,i.spotShadowMap[_]=V,P++}_++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(G).multiplyScalar(te),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=z,E++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const C=I.shadow,A=n.get(I);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,A.shadowCameraNear=C.camera.near,A.shadowCameraFar=C.camera.far,i.pointShadow[d]=A,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=I.shadow.matrix,b++}i.point[d]=z,d++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(te),z.groundColor.copy(I.groundColor).multiplyScalar(te),i.hemi[y]=z,y++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;const D=i.hash;(D.sunLength!==m||D.directionalLength!==v||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==P||D.numSpotMaps!==S||D.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=v,i.spot.length=_,i.rectArea.length=E,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,D.sunLength=m,D.directionalLength=v,D.pointLength=d,D.spotLength=_,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=P,D.numSpotMaps=S,D.numLightProbes=L,i.version=Fb++)}function l(c,f){let p=0,u=0,m=0,g=0,M=0,v=0;const d=f.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const y=c[_];if(y.isSunLight){const T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),p++}else if(y.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),u++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:i}}function Rm(t){const e=new kb(t),n=[],i=[],r=[];function s(u){p.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Bb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rm(t),e.set(r,[o])):s>=a.length?(o=new Rm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
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
}`,Vb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Gb=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Pm=new Ct,ta=new $,su=new $;function Wb(t,e,n){let i=new m0;const r=new lt,s=new lt,a=new At,o=new eM,l=new tM,c={},f=n.maxTextureSize,p={[Lr]:hn,[hn]:Lr,[si]:si},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:zb,fragmentShader:Hb}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new hi(g,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let d=this.type;this.render=function(b,P,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;this.type===TS&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const R=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=d!==this.type;q&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){const te=b[I],K=te.shadow;if(K===void 0){We("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const V=K.getFrameExtents();r.multiply(V),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,K.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=z,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===aa){if(te.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new qn(r.x,r.y,{format:Ir,type:fi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Ha(r.x,r.y,ai),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=Di,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt}else te.isPointLight?(K.map=new E0(r.x),K.map.depthTexture=new Yy(r.x,di)):(K.map=new qn(r.x,r.y),K.map.depthTexture=new Ha(r.x,r.y,di)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=Di,this.type===Jo?(K.map.depthTexture.compareFunction=z?Kf:$f,K.map.depthTexture.minFilter=Gt,K.map.depthTexture.magFilter=Gt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const C=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();te.isPointLight!==!0&&K.updateMatrices(te,S);for(let A=0;A<C;A++){const ee=K.getCamera(A);if(te.isPointLight){const re=K.camera,pe=K.matrix,he=te.distance||re.far;he!==re.far&&(re.far=he,re.updateProjectionMatrix()),ta.setFromMatrixPosition(te.matrixWorld),re.position.copy(ta),su.copy(re.position),su.add(Vb[A]),re.up.copy(Gb[A]),re.lookAt(su),re.updateMatrixWorld(),pe.makeTranslation(-ta.x,-ta.y,-ta.z),Pm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Pm,re.coordinateSystem,re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,A),t.clear();else{A===0&&(t.setRenderTarget(K.map),t.clear());const re=K.getViewport(A);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(a)}i=K.getFrustum(A),y(P,S,ee,te,this.type)}K.isPointLightShadow!==!0&&this.type===aa&&_(K,S),K.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(R,L,D)};function _(b,P){const S=e.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new qn(r.x,r.y,{format:Ir,type:fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(P,null,S,u,M,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(P,null,S,m,M,null)}function E(b,P,S,R){let L=null;const D=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)L=D;else if(L=S.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=L.uuid,q=P.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let G=I[q];G===void 0&&(G=L.clone(),I[q]=G,P.addEventListener("dispose",T)),L=G}if(L.visible=P.visible,L.wireframe=P.wireframe,R===aa?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:p[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=S}return L}function y(b,P,S,R,L){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===aa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const q=e.update(b),I=b.material;if(Array.isArray(I)){const G=q.groups;for(let te=0,K=G.length;te<K;te++){const V=G[te],z=I[V.materialIndex];if(z&&z.visible){const C=E(b,z,R,L);b.onBeforeShadow(t,b,P,S,q,C,V),t.renderBufferDirect(S,null,q,C,b,V),b.onAfterShadow(t,b,P,S,q,C,V)}}}else if(I.visible){const G=E(b,I,R,L);b.onBeforeShadow(t,b,P,S,q,G,null),t.renderBufferDirect(S,null,q,G,b,null),b.onAfterShadow(t,b,P,S,q,G,null)}}const B=b.children;for(let q=0,I=B.length;q<I;q++)y(B[q],P,S,R,L)}function T(b){b.target.removeEventListener("dispose",T);for(const S in c){const R=c[S],L=b.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function jb(t,e){function n(){let O=!1;const xe=new At;let ne=null;const Se=new At(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!O&&(t.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,ae,He,Ue,gt){gt===!0&&(Ae*=Ue,ae*=Ue,He*=Ue),xe.set(Ae,ae,He,Ue),Se.equals(xe)===!1&&(t.clearColor(Ae,ae,He,Ue),Se.copy(xe))},reset:function(){O=!1,ne=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,xe=!1,ne=null,Se=null,Ae=null;return{setReversed:function(ae){if(xe!==ae){const He=e.get("EXT_clip_control");ae?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Ue=Ae;Ae=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(ae){ae?Y(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!O&&(t.depthMask(ae),ne=ae)},setFunc:function(ae){if(xe&&(ae=ay[ae]),Se!==ae){switch(ae){case rd:t.depthFunc(t.NEVER);break;case sd:t.depthFunc(t.ALWAYS);break;case ad:t.depthFunc(t.LESS);break;case Oa:t.depthFunc(t.LEQUAL);break;case od:t.depthFunc(t.EQUAL);break;case ld:t.depthFunc(t.GEQUAL);break;case cd:t.depthFunc(t.GREATER);break;case ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=ae}},setLocked:function(ae){O=ae},setClear:function(ae){Ae!==ae&&(Ae=ae,xe&&(ae=1-ae),t.clearDepth(ae))},reset:function(){O=!1,ne=null,Se=null,Ae=null,xe=!1}}}function r(){let O=!1,xe=null,ne=null,Se=null,Ae=null,ae=null,He=null,Ue=null,gt=null;return{setTest:function(ct){O||(ct?Y(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(ct){xe!==ct&&!O&&(t.stencilMask(ct),xe=ct)},setFunc:function(ct,Un,Zn){(ne!==ct||Se!==Un||Ae!==Zn)&&(t.stencilFunc(ct,Un,Zn),ne=ct,Se=Un,Ae=Zn)},setOp:function(ct,Un,Zn){(ae!==ct||He!==Un||Ue!==Zn)&&(t.stencilOp(ct,Un,Zn),ae=ct,He=Un,Ue=Zn)},setLocked:function(ct){O=ct},setClear:function(ct){gt!==ct&&(t.clearStencil(ct),gt=ct)},reset:function(){O=!1,xe=null,ne=null,Se=null,Ae=null,ae=null,He=null,Ue=null,gt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},p={},u={},m=new WeakMap,g=[],M=null,v=!1,d=null,_=null,E=null,y=null,T=null,b=null,P=null,S=new $e(0,0,0),R=0,L=!1,D=null,B=null,q=null,I=null,G=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=V>=2);let C=null,A={};const ee=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),pe=new At().fromArray(ee),he=new At().fromArray(re);function me(O,xe,ne,Se){const Ae=new Uint8Array(4),ae=t.createTexture();t.bindTexture(O,ae),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<ne;He++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(xe+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return ae}const k={};k[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(Oa),Ie(!1),Ge(Np),Y(t.CULL_FACE),ge(bi);function Y(O){f[O]!==!0&&(t.enable(O),f[O]=!0)}function le(O){f[O]!==!1&&(t.disable(O),f[O]=!1)}function we(O,xe){return u[O]!==xe?(t.bindFramebuffer(O,xe),u[O]=xe,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function se(O,xe){let ne=g,Se=!1;if(O){ne=m.get(xe),ne===void 0&&(ne=[],m.set(xe,ne));const Ae=O.textures;if(ne.length!==Ae.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,He=Ae.length;ae<He;ae++)ne[ae]=t.COLOR_ATTACHMENT0+ae;ne.length=Ae.length,Se=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,Se=!0);Se&&t.drawBuffers(ne)}function ue(O){return M!==O?(t.useProgram(O),M=O,!0):!1}const ze={[is]:t.FUNC_ADD,[AS]:t.FUNC_SUBTRACT,[CS]:t.FUNC_REVERSE_SUBTRACT};ze[RS]=t.MIN,ze[PS]=t.MAX;const de={[NS]:t.ZERO,[LS]:t.ONE,[DS]:t.SRC_COLOR,[jv]:t.SRC_ALPHA,[BS]:t.SRC_ALPHA_SATURATE,[OS]:t.DST_COLOR,[US]:t.DST_ALPHA,[IS]:t.ONE_MINUS_SRC_COLOR,[Xv]:t.ONE_MINUS_SRC_ALPHA,[kS]:t.ONE_MINUS_DST_COLOR,[FS]:t.ONE_MINUS_DST_ALPHA,[zS]:t.CONSTANT_COLOR,[HS]:t.ONE_MINUS_CONSTANT_COLOR,[VS]:t.CONSTANT_ALPHA,[GS]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(O,xe,ne,Se,Ae,ae,He,Ue,gt,ct){if(O===bi){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(Y(t.BLEND),v=!0),O!==bS){if(O!==d||ct!==L){if((_!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),_=is,T=is),ct)switch(O){case va:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case id:t.blendFunc(t.ONE,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",O);break}else switch(O){case va:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case id:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lp:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dp:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",O);break}E=null,y=null,b=null,P=null,S.set(0,0,0),R=0,d=O,L=ct}return}Ae=Ae||xe,ae=ae||ne,He=He||Se,(xe!==_||Ae!==T)&&(t.blendEquationSeparate(ze[xe],ze[Ae]),_=xe,T=Ae),(ne!==E||Se!==y||ae!==b||He!==P)&&(t.blendFuncSeparate(de[ne],de[Se],de[ae],de[He]),E=ne,y=Se,b=ae,P=He),(Ue.equals(S)===!1||gt!==R)&&(t.blendColor(Ue.r,Ue.g,Ue.b,gt),S.copy(Ue),R=gt),d=O,L=!1}function Te(O,xe){O.side===si?le(t.CULL_FACE):Y(t.CULL_FACE);let ne=O.side===hn;xe&&(ne=!ne),Ie(ne),O.blending===va&&O.transparent===!1?ge(bi):ge(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){D!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),D=O)}function Ge(O){O!==ES?(Y(t.CULL_FACE),O!==B&&(O===Np?t.cullFace(t.BACK):O===wS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),B=O}function Qe(O){O!==q&&(K&&t.lineWidth(O),q=O)}function rt(O,xe,ne){O?(Y(t.POLYGON_OFFSET_FILL),(I!==xe||G!==ne)&&(I=xe,G=ne,a.getReversed()&&(xe=-xe),t.polygonOffset(xe,ne))):le(t.POLYGON_OFFSET_FILL)}function je(O){O?Y(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function qe(O){O===void 0&&(O=t.TEXTURE0+te-1),C!==O&&(t.activeTexture(O),C=O)}function U(O,xe,ne){ne===void 0&&(C===null?ne=t.TEXTURE0+te-1:ne=C);let Se=A[ne];Se===void 0&&(Se={type:void 0,texture:void 0},A[ne]=Se),(Se.type!==O||Se.texture!==xe)&&(C!==ne&&(t.activeTexture(ne),C=ne),t.bindTexture(O,xe||k[O]),Se.type=O,Se.texture=xe)}function mt(){const O=A[C];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function x(){try{t.texSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function H(){try{t.texSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function oe(){try{t.texStorage2D(...arguments)}catch(O){at("WebGLState:",O)}}function fe(){try{t.texStorage3D(...arguments)}catch(O){at("WebGLState:",O)}}function J(){try{t.texImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function ie(){try{t.texImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function ve(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function ke(O,xe){p[O]!==xe&&(t.pixelStorei(O,xe),p[O]=xe)}function ye(O){pe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function _e(O){he.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function Be(O,xe){let ne=c.get(xe);ne===void 0&&(ne=new WeakMap,c.set(xe,ne));let Se=ne.get(O);Se===void 0&&(Se=t.getUniformBlockIndex(xe,O.name),ne.set(O,Se))}function Ve(O,xe){const Se=c.get(xe).get(O);l.get(xe)!==Se&&(t.uniformBlockBinding(xe,Se,O.__bindingPointIndex),l.set(xe,Se))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},C=null,A={},u={},m=new WeakMap,g=[],M=null,v=!1,d=null,_=null,E=null,y=null,T=null,b=null,P=null,S=new $e(0,0,0),R=0,L=!1,D=null,B=null,q=null,I=null,G=null,pe.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:le,bindFramebuffer:we,drawBuffers:se,useProgram:ue,setBlending:ge,setMaterial:Te,setFlipSided:Ie,setCullFace:Ge,setLineWidth:Qe,setPolygonOffset:rt,setScissorTest:je,activeTexture:qe,bindTexture:U,unbindTexture:mt,compressedTexImage2D:tt,compressedTexImage3D:N,texImage2D:J,texImage3D:ie,pixelStorei:ke,getParameter:ve,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:fe,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ye,viewport:_e,reset:Ye}}function Xb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,f=new WeakMap,p=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,x){return g?new OffscreenCanvas(N,x):Il("canvas")}function v(N,x,H){let W=1;const Z=tt(N);if((Z.width>H||Z.height>H)&&(W=H/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(W*Z.width),fe=Math.floor(W*Z.height);u===void 0&&(u=M(oe,fe));const J=x?M(oe,fe):u;return J.width=oe,J.height=fe,J.getContext("2d").drawImage(N,0,0,oe,fe),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+fe+")."),J}else return"data"in N&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),N;return N}function d(N){return N.generateMipmaps}function _(N){t.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,x,H,W,Z,oe=!1){if(N!==null){if(t[N]!==void 0)return t[N];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8),H===t.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),H===t.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),x===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),x===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8),H===t.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),H===t.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),x===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGB8UI),H===t.UNSIGNED_SHORT&&(J=t.RGB16UI),H===t.UNSIGNED_INT&&(J=t.RGB32UI),H===t.BYTE&&(J=t.RGB8I),H===t.SHORT&&(J=t.RGB16I),H===t.INT&&(J=t.RGB32I)),x===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),H===t.UNSIGNED_INT&&(J=t.RGBA32UI),H===t.BYTE&&(J=t.RGBA8I),H===t.SHORT&&(J=t.RGBA16I),H===t.INT&&(J=t.RGBA32I)),x===t.RGB&&(H===t.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),H===t.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),x===t.RGBA){const ie=oe?Ll:it.getTransfer(Z);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=ie===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),H===t.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(N,x){let H;return N?x===null||x===di||x===Ba?H=t.DEPTH24_STENCIL8:x===ai?H=t.DEPTH32F_STENCIL8:x===ka&&(H=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===Ba?H=t.DEPTH_COMPONENT24:x===ai?H=t.DEPTH_COMPONENT32F:x===ka&&(H=t.DEPTH_COMPONENT16),H}function b(N,x){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vt&&N.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?x.mipmaps.length:1}function P(N){const x=N.target;x.removeEventListener("dispose",P),R(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&p.delete(x)}function S(N){const x=N.target;x.removeEventListener("dispose",S),D(x)}function R(N){const x=i.get(N);if(x.__webglInit===void 0)return;const H=N.source,W=m.get(H);if(W){const Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(N),Object.keys(W).length===0&&m.delete(H)}i.remove(N)}function L(N){const x=i.get(N);t.deleteTexture(x.__webglTexture);const H=N.source,W=m.get(H);delete W[x.__cacheKey],a.memory.textures--}function D(N){const x=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)t.deleteFramebuffer(x.__webglFramebuffer[W]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=N.textures;for(let W=0,Z=H.length;W<Z;W++){const oe=i.get(H[W]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(H[W])}i.remove(N)}let B=0;function q(){B=0}function I(){return B}function G(N){B=N}function te(){const N=B;return N>=r.maxTextures&&We("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,N}function K(N){const x=[];return x.push(N.wrapS),x.push(N.wrapT),x.push(N.wrapR||0),x.push(N.magFilter),x.push(N.minFilter),x.push(N.anisotropy),x.push(N.internalFormat),x.push(N.format),x.push(N.type),x.push(N.generateMipmaps),x.push(N.premultiplyAlpha),x.push(N.flipY),x.push(N.unpackAlignment),x.push(N.colorSpace),x.join()}function V(N,x){const H=i.get(N);if(N.isVideoTexture&&U(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const W=N.image;if(W===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,N,x);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+x)}function z(N,x){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){le(H,N,x);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+x)}function C(N,x){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){le(H,N,x);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+x)}function A(N,x){const H=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){we(H,N,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+x)}const ee={[dd]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[fd]:t.MIRRORED_REPEAT},re={[Vt]:t.NEAREST,[XS]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[Gt]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Ji]:t.LINEAR_MIPMAP_LINEAR},pe={[KS]:t.NEVER,[ty]:t.ALWAYS,[ZS]:t.LESS,[$f]:t.LEQUAL,[QS]:t.EQUAL,[Kf]:t.GEQUAL,[JS]:t.GREATER,[ey]:t.NOTEQUAL};function he(N,x){if(x.type===ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===Lc||x.magFilter===vo||x.magFilter===Ji||x.minFilter===Gt||x.minFilter===Lc||x.minFilter===vo||x.minFilter===Ji)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,ee[x.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,ee[x.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,ee[x.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,re[x.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==vo&&x.minFilter!==Ji||x.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function me(N,x){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,x.addEventListener("dispose",P));const W=x.source;let Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));const oe=K(x);if(oe!==N.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[oe].usedTimes++;const fe=Z[N.__cacheKey];fe!==void 0&&(Z[N.__cacheKey].usedTimes--,fe.usedTimes===0&&L(x)),N.__cacheKey=oe,N.__webglTexture=Z[oe].texture}return H}function k(N,x,H){return Math.floor(Math.floor(N/H)/x)}function Y(N,x,H,W){const oe=N.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,H,W,x.data);else{oe.sort((ke,ye)=>ke.start-ye.start);let fe=0;for(let ke=1;ke<oe.length;ke++){const ye=oe[fe],_e=oe[ke],Be=ye.start+ye.count,Ve=k(_e.start,x.width,4),Ye=k(ye.start,x.width,4);_e.start<=Be+1&&Ve===Ye&&k(_e.start+_e.count-1,x.width,4)===Ve?ye.count=Math.max(ye.count,_e.start+_e.count-ye.start):(++fe,oe[fe]=_e)}oe.length=fe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let ke=0,ye=oe.length;ke<ye;ke++){const _e=oe[ke],Be=Math.floor(_e.start/4),Ve=Math.ceil(_e.count/4),Ye=Be%x.width,O=Math.floor(Be/x.width),xe=Ve,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ye,O,xe,ne,H,W,x.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function le(N,x,H){let W=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=t.TEXTURE_3D);const Z=me(N,x),oe=x.source;n.bindTexture(W,N.__webglTexture,t.TEXTURE0+H);const fe=i.get(oe);if(oe.version!==fe.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ne=it.getPrimaries(it.workingColorSpace),Se=x.colorSpace===Ki?null:it.getPrimaries(x.colorSpace),Ae=x.colorSpace===Ki||ne===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=v(x.image,!1,r.maxTextureSize);ie=mt(x,ie);const ve=s.convert(x.format,x.colorSpace),ke=s.convert(x.type);let ye=y(x.internalFormat,ve,ke,x.normalized,x.colorSpace,x.isVideoTexture);he(W,x);let _e;const Be=x.mipmaps,Ve=x.isVideoTexture!==!0,Ye=fe.__version===void 0||Z===!0,O=oe.dataReady,xe=b(x,ie);if(x.isDepthTexture)ye=T(x.format===wr,x.type),Ye&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ye,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ye,ie.width,ie.height,0,ve,ke,null));else if(x.isDataTexture)if(Be.length>0){Ve&&Ye&&n.texStorage2D(t.TEXTURE_2D,xe,ye,Be[0].width,Be[0].height);for(let ne=0,Se=Be.length;ne<Se;ne++)_e=Be[ne],Ve?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,ve,ke,_e.data):n.texImage2D(t.TEXTURE_2D,ne,ye,_e.width,_e.height,0,ve,ke,_e.data);x.generateMipmaps=!1}else Ve?(Ye&&n.texStorage2D(t.TEXTURE_2D,xe,ye,ie.width,ie.height),O&&Y(x,ie,ve,ke)):n.texImage2D(t.TEXTURE_2D,0,ye,ie.width,ie.height,0,ve,ke,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ye,Be[0].width,Be[0].height,ie.depth);for(let ne=0,Se=Be.length;ne<Se;ne++)if(_e=Be[ne],x.format!==Wn)if(ve!==null)if(Ve){if(O)if(x.layerUpdates.size>0){const Ae=lm(_e.width,_e.height,x.format,x.type);for(const ae of x.layerUpdates){const He=_e.data.subarray(ae*Ae/_e.data.BYTES_PER_ELEMENT,(ae+1)*Ae/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ae,_e.width,_e.height,1,ve,He)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ie.depth,ve,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,_e.width,_e.height,ie.depth,0,_e.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ie.depth,ve,ke,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,_e.width,_e.height,ie.depth,0,ve,ke,_e.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ve&&Ye&&n.texStorage2D(t.TEXTURE_2D,xe,ye,Be[0].width,Be[0].height);for(let ne=0,Se=Be.length;ne<Se;ne++)_e=Be[ne],x.format!==Wn?ve!==null?Ve?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ye,_e.width,_e.height,0,_e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,ve,ke,_e.data):n.texImage2D(t.TEXTURE_2D,ne,ye,_e.width,_e.height,0,ve,ke,_e.data)}else if(x.isDataArrayTexture)if(Ve){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ye,ie.width,ie.height,ie.depth),O)if(x.layerUpdates.size>0){const ne=lm(ie.width,ie.height,x.format,x.type);for(const Se of x.layerUpdates){const Ae=ie.data.subarray(Se*ne/ie.data.BYTES_PER_ELEMENT,(Se+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Se,ie.width,ie.height,1,ve,ke,Ae)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,ke,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,ve,ke,ie.data);else if(x.isData3DTexture)Ve?(Ye&&n.texStorage3D(t.TEXTURE_3D,xe,ye,ie.width,ie.height,ie.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,ke,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,ve,ke,ie.data);else if(x.isFramebufferTexture){if(Ye)if(Ve)n.texStorage2D(t.TEXTURE_2D,xe,ye,ie.width,ie.height);else{let ne=ie.width,Se=ie.height;for(let Ae=0;Ae<xe;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,ye,ne,Se,0,ve,ke,null),ne>>=1,Se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),p.add(x),ne.onpaint=Se=>{const Ae=Se.changedElements;for(const ae of p)Ae.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Ae=t.RGBA,ae=t.RGBA,He=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ae,ae,He,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ve&&Ye){const ne=tt(Be[0]);n.texStorage2D(t.TEXTURE_2D,xe,ye,ne.width,ne.height)}for(let ne=0,Se=Be.length;ne<Se;ne++)_e=Be[ne],Ve?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve,ke,_e):n.texImage2D(t.TEXTURE_2D,ne,ye,ve,ke,_e);x.generateMipmaps=!1}else if(Ve){if(Ye){const ne=tt(ie);n.texStorage2D(t.TEXTURE_2D,xe,ye,ne.width,ne.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,ke,ie)}else n.texImage2D(t.TEXTURE_2D,0,ye,ve,ke,ie);d(x)&&_(W),fe.__version=oe.version,x.onUpdate&&x.onUpdate(x)}N.__version=x.version}function we(N,x,H){if(x.image.length!==6)return;const W=me(N,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+H);const oe=i.get(Z);if(Z.version!==oe.__version||W===!0){n.activeTexture(t.TEXTURE0+H);const fe=it.getPrimaries(it.workingColorSpace),J=x.colorSpace===Ki?null:it.getPrimaries(x.colorSpace),ie=x.colorSpace===Ki||fe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ke=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!ve&&!ke?ye[ae]=v(x.image[ae],!0,r.maxCubemapSize):ye[ae]=ke?x.image[ae].image:x.image[ae],ye[ae]=mt(x,ye[ae]);const _e=ye[0],Be=s.convert(x.format,x.colorSpace),Ve=s.convert(x.type),Ye=y(x.internalFormat,Be,Ve,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,xe=oe.__version===void 0||W===!0,ne=Z.dataReady;let Se=b(x,_e);he(t.TEXTURE_CUBE_MAP,x);let Ae;if(ve){O&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ye,_e.width,_e.height);for(let ae=0;ae<6;ae++){Ae=ye[ae].mipmaps;for(let He=0;He<Ae.length;He++){const Ue=Ae[He];x.format!==Wn?Be!==null?O?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,Ue.width,Ue.height,Be,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,Ye,Ue.width,Ue.height,0,Ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,Ue.width,Ue.height,Be,Ve,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,Ye,Ue.width,Ue.height,0,Be,Ve,Ue.data)}}}else{if(Ae=x.mipmaps,O&&xe){Ae.length>0&&Se++;const ae=tt(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ye,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ke){O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Be,Ve,ye[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,ye[ae].width,ye[ae].height,0,Be,Ve,ye[ae].data);for(let He=0;He<Ae.length;He++){const gt=Ae[He].image[ae].image;O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,gt.width,gt.height,Be,Ve,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,Ye,gt.width,gt.height,0,Be,Ve,gt.data)}}else{O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,Ve,ye[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,Be,Ve,ye[ae]);for(let He=0;He<Ae.length;He++){const Ue=Ae[He];O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,Be,Ve,Ue.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,Ye,Be,Ve,Ue.image[ae])}}}d(x)&&_(t.TEXTURE_CUBE_MAP),oe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}N.__version=x.version}function se(N,x,H,W,Z,oe){const fe=s.convert(H.format,H.colorSpace),J=s.convert(H.type),ie=y(H.internalFormat,fe,J,H.normalized,H.colorSpace),ve=i.get(x),ke=i.get(H);if(ke.__renderTarget=x,!ve.__hasExternalTextures){const ye=Math.max(1,x.width>>oe),_e=Math.max(1,x.height>>oe);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,oe,ie,ye,_e,x.depth,0,fe,J,null):n.texImage2D(Z,oe,ie,ye,_e,0,fe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,ke.__webglTexture,0,je(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,ke.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(N,x,H){if(t.bindRenderbuffer(t.RENDERBUFFER,N),x.depthBuffer){const W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,oe=T(x.stencilBuffer,Z),fe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(x),oe,x.width,x.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,N)}else{const W=x.textures;for(let Z=0;Z<W.length;Z++){const oe=W[Z],fe=s.convert(oe.format,oe.colorSpace),J=s.convert(oe.type),ie=y(oe.internalFormat,fe,J,oe.normalized,oe.colorSpace);qe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(x),ie,x.width,x.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(x),ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(N,x,H){const W=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),he(t.TEXTURE_CUBE_MAP,x.depthTexture);const ve=s.convert(x.depthTexture.format),ke=s.convert(x.depthTexture.type);let ye;x.depthTexture.format===Di?ye=t.DEPTH_COMPONENT24:x.depthTexture.format===wr&&(ye=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,x.width,x.height,0,ve,ke,null)}}else V(x.depthTexture,0);const oe=Z.__webglTexture,fe=je(x),J=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ie=x.depthTexture.format===wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,J,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,J,oe,0);else if(x.depthTexture.format===wr)qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,J,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(N){const x=i.get(N),H=N.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==N.depthTexture){const W=N.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(N.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)ze(x.__webglFramebuffer[W],N,W);else{const W=N.texture.mipmaps;W&&W.length>0?ze(x.__webglFramebuffer[0],N,0):ze(x.__webglFramebuffer,N,0)}else if(H){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=t.createRenderbuffer(),ue(x.__webglDepthbuffer[W],N,!1);else{const Z=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,oe)}}else{const W=N.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ue(x.__webglDepthbuffer,N,!1);else{const Z=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(N,x,H){const W=i.get(N);x!==void 0&&se(W.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&de(N)}function Te(N){const x=N.texture,H=i.get(N),W=i.get(x);N.addEventListener("dispose",S);const Z=N.textures,oe=N.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=x.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ie=0;ie<x.mipmaps.length;ie++)H.__webglFramebuffer[J][ie]=t.createFramebuffer()}else H.__webglFramebuffer[J]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)H.__webglFramebuffer[J]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(fe)for(let J=0,ie=Z.length;J<ie;J++){const ve=i.get(Z[J]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&qe(N)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ie=Z[J];H.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const ve=s.convert(ie.format,ie.colorSpace),ke=s.convert(ie.type),ye=y(ie.internalFormat,ve,ke,ie.normalized,ie.colorSpace,N.isXRRenderTarget===!0),_e=je(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,H.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),he(t.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)se(H.__webglFramebuffer[J][ie],N,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else se(H.__webglFramebuffer[J],N,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(x)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let J=0,ie=Z.length;J<ie;J++){const ve=Z[J],ke=i.get(ve);let ye=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ke.__webglTexture),he(ye,ve),se(H.__webglFramebuffer,N,ve,t.COLOR_ATTACHMENT0+J,ye,0),d(ve)&&_(ye)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(J=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,W.__webglTexture),he(J,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)se(H.__webglFramebuffer[ie],N,x,t.COLOR_ATTACHMENT0,J,ie);else se(H.__webglFramebuffer,N,x,t.COLOR_ATTACHMENT0,J,0);d(x)&&_(J),n.unbindTexture()}N.depthBuffer&&de(N)}function Ie(N){const x=N.textures;for(let H=0,W=x.length;H<W;H++){const Z=x[H];if(d(Z)){const oe=E(N),fe=i.get(Z).__webglTexture;n.bindTexture(oe,fe),_(oe),n.unbindTexture()}}}const Ge=[],Qe=[];function rt(N){if(N.samples>0){if(qe(N)===!1){const x=N.textures,H=N.width,W=N.height;let Z=t.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(N),J=x.length>1;if(J)for(let ve=0;ve<x.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=N.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const ke=i.get(x[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,H,W,0,0,H,W,Z,t.NEAREST),l===!0&&(Ge.length=0,Qe.length=0,Ge.push(t.COLOR_ATTACHMENT0+ve),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ge.push(oe),Qe.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ve=0;ve<x.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const ke=i.get(x[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const x=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function je(N){return Math.min(r.maxSamples,N.samples)}function qe(N){const x=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(N){const x=a.render.frame;f.get(N)!==x&&(f.set(N,x),N.update())}function mt(N,x){const H=N.colorSpace,W=N.format,Z=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Nl&&H!==Ki&&(it.getTransfer(H)===dt?(W!==Wn||Z!==Pn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",H)),x}function tt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=C,this.setTextureCube=A,this.rebindTextures=ge,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=se,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qb(t,e){function n(i,r=Ki){let s;const a=it.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Wf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===s0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===n0)return t.BYTE;if(i===i0)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===Gf)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===a0)return t.ALPHA;if(i===o0)return t.RGB;if(i===Wn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===wr)return t.DEPTH_STENCIL;if(i===l0)return t.RED;if(i===Xf)return t.RED_INTEGER;if(i===Ir)return t.RG;if(i===qf)return t.RG_INTEGER;if(i===Yf)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===_d||i===xd||i===Sd||i===yd||i===Rl||i===Md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===_d)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sd)return s.COMPRESSED_R11_EAC;if(i===yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Rl)return s.COMPRESSED_RG11_EAC;if(i===Md)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd||i===Rd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ad)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Od||i===kd||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Od)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zd||i===Hd||i===Pl||i===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
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

}`;class Kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new v0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $n({vertexShader:Yb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",v=new Kb,d={},_=n.getContextAttributes();let E=null,y=null;const T=[],b=[],P=new lt;let S=null,R=null;const L=new _n;L.viewport=new At;const D=new _n;D.viewport=new At;const B=[L,D],q=new iM;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=T[k];return Y===void 0&&(Y=new Bc,T[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=T[k];return Y===void 0&&(Y=new Bc,T[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=T[k];return Y===void 0&&(Y=new Bc,T[k]=Y),Y.getHandSpace()};function te(k){const Y=b.indexOf(k.inputSource);if(Y===-1)return;const le=T[Y];le!==void 0&&(le.update(k.inputSource,k.frame,c||a),le.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let k=0;k<T.length;k++){const Y=b[k];Y!==null&&(b[k]=null,T[k].disconnect(Y))}I=null,G=null,v.reset();for(const k in d)delete d[k];if(e.setRenderTarget(E),m=null,u=null,p=null,r=null,y=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),R!==null){const k=R.camera;k.fov=R.fov,k.zoom=R.zoom,k.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,se=null;_.depth&&(se=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=_.stencil?wr:Di,we=_.stencil?Ba:di);const ue={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new qn(u.textureWidth,u.textureHeight,{format:Wn,type:Pn,depthTexture:new Ha(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qn(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(k){for(let Y=0;Y<k.removed.length;Y++){const le=k.removed[Y],we=b.indexOf(le);we>=0&&(b[we]=null,T[we].disconnect(le))}for(let Y=0;Y<k.added.length;Y++){const le=k.added[Y];let we=b.indexOf(le);if(we===-1){for(let ue=0;ue<T.length;ue++)if(ue>=b.length){b.push(le),we=ue;break}else if(b[ue]===null){b[ue]=le,we=ue;break}if(we===-1)break}const se=T[we];se&&se.connect(le)}}const z=new $,C=new $;function A(k,Y,le){z.setFromMatrixPosition(Y.matrixWorld),C.setFromMatrixPosition(le.matrixWorld);const we=z.distanceTo(C),se=Y.projectionMatrix.elements,ue=le.projectionMatrix.elements,ze=se[14]/(se[10]-1),de=se[14]/(se[10]+1),ge=(se[9]+1)/se[5],Te=(se[9]-1)/se[5],Ie=(se[8]-1)/se[0],Ge=(ue[8]+1)/ue[0],Qe=ze*Ie,rt=ze*Ge,je=we/(-Ie+Ge),qe=je*-Ie;if(Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),se[10]===-1)k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const U=ze+je,mt=de+je,tt=Qe-qe,N=rt+(we-qe),x=ge*de/mt*U,H=Te*de/mt*U;k.projectionMatrix.makePerspective(tt,N,x,H,U,mt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ee(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let Y=k.near,le=k.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(le=v.depthFar)),q.near=D.near=L.near=Y,q.far=D.far=L.far=le,(I!==q.near||G!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,G=q.far),q.layers.mask=k.layers.mask|6,L.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;const we=k.parent,se=q.cameras;ee(q,we);for(let ue=0;ue<se.length;ue++)ee(se[ue],we);se.length===2?A(q,L,D):q.projectionMatrix.copy(L.projectionMatrix),R===null&&k.isPerspectiveCamera&&(R={camera:k,fov:k.fov,zoom:k.zoom}),re(k,q,we)};function re(k,Y,le){le===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=za*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(q)},this.getCameraTexture=function(k){return d[k]};let pe=null;function he(k,Y){if(f=Y.getViewerPose(c||a),g=Y,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let we=!1;le.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let de=0;de<le.length;de++){const ge=le[de];let Te=null;if(m!==null)Te=m.getViewport(ge);else{const Ge=p.getViewSubImage(u,ge);Te=Ge.viewport,de===0&&(e.setRenderTargetTextures(y,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(y))}let Ie=B[de];Ie===void 0&&(Ie=new _n,Ie.layers.enable(de),Ie.viewport=new At,B[de]=Ie),Ie.matrix.fromArray(ge.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ge.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(q.matrix.copy(Ie.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Ie)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const de=p.getDepthInformation(le[0]);de&&de.isValid&&de.texture&&v.init(de,r.renderState)}if(se&&se.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let de=0;de<le.length;de++){const ge=le[de].camera;if(ge){let Te=d[ge];Te||(Te=new v0,d[ge]=Te);const Ie=p.getCameraImage(ge);Te.sourceTexture=Ie}}}}for(let le=0;le<T.length;le++){const we=b[le],se=T[le];we!==null&&se!==void 0&&se.update(we,Y,c||a)}pe&&pe(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const me=new y0;me.setAnimationLoop(he),this.setAnimationLoop=function(k){pe=k},this.dispose=function(){}}}const Qb=new Ct,C0=new Xe;C0.set(-1,0,0,0,1,0,0,0,1);function Jb(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,_0(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,_,E,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),p(v,d)):d.isMeshPhongMaterial?(s(v,d),f(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),u(v,d),d.isMeshPhysicalMaterial&&m(v,d,y)):d.isMeshMatcapMaterial?(s(v,d),g(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),M(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?l(v,d,_,E):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===hn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===hn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const _=e.get(d),E=_.envMap,y=_.envMapRotation;E&&(v.envMap.value=E,v.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(C0),v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,_,E){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*_,v.scale.value=E*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function f(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function p(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function u(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function m(v,d,_){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.retroreflectivity>0&&(v.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,d){d.matcap&&(v.matcap.value=d.matcap)}function M(v,d){const _=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e1(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(v(y),b=f(y),r[y.id]=b,y.addEventListener("dispose",_));const P=T.program;i.updateUBOMapping(y,P);const S=e.render.frame;s[y.id]!==S&&(u(y),s[y.id]=S)}function f(y){const T=p();y.__bindingPointIndex=T;const b=t.createBuffer(),P=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,P,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],b=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let S=0,R=b.length;S<R;S++){const L=b[S];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)m(L[D],S,D,P);else m(L,S,0,P)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,T,b,P){if(M(y,T,b,P)===!0){const S=y.__offset,R=y.value;if(Array.isArray(R)){let L=0;for(let D=0;D<R.length;D++){const B=R[D],q=d(B);g(B,y.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,y.__data)}}function g(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function M(y,T,b,P){const S=y.value,R=T+"_"+b;if(P[R]===void 0)return typeof S=="number"||typeof S=="boolean"?P[R]=S:ArrayBuffer.isView(S)?P[R]=S.slice():P[R]=S.clone(),!0;{const L=P[R];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return P[R]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function v(y){const T=y.uniforms;let b=0;const P=16;for(let R=0,L=T.length;R<L;R++){const D=Array.isArray(T[R])?T[R]:[T[R]];for(let B=0,q=D.length;B<q;B++){const I=D[B],G=Array.isArray(I.value)?I.value:[I.value];for(let te=0,K=G.length;te<K;te++){const V=G[te],z=d(V),C=b%P,A=C%z.boundary,ee=C+A;b+=A,ee!==0&&P-ee<z.storage&&(b+=P-ee),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=z.storage}}}const S=b%P;return S>0&&(b+=P-S),y.__size=b,y.__cache={},this}function d(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),T}function _(y){const T=y.target;T.removeEventListener("dispose",_);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function E(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:E}}const t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function n1(){return ti===null&&(ti=new Gy(t1,16,16,Ir,fi),ti.name="DFG_LUT",ti.minFilter=Gt,ti.magFilter=Gt,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class R0{constructor(e={}){const{canvas:n=ry(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=m,v=new Set([Yf,qf,Xf]),d=new Set([Pn,di,ka,Ba,Wf,jf]),_=new Uint32Array(4),E=new Int32Array(4),y=new $;let T=null,b=null;const P=[],S=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,q=null,I=null,G=null;this._outputColorSpace=An;let te=0,K=0,V=null,z=-1,C=null;const A=new At,ee=new At;let re=null;const pe=new $e(0);let he=0,me=n.width,k=n.height,Y=1,le=null,we=null;const se=new At(0,0,me,k),ue=new At(0,0,me,k);let ze=!1;const de=new m0;let ge=!1,Te=!1;const Ie=new Ct,Ge=new $,Qe=new At,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function qe(){return V===null?Y:1}let U=i;function mt(w,F){return n.getContext(w,F)}let tt,N,x,H,W,Z,oe,fe,J,ie,ve,ke,ye,_e,Be,Ve,Ye,O,xe,ne,Se,Ae,ae;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",gt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Un,!1),U===null){const F="webgl2";if(U=mt(F,w),U===null)throw mt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(w){throw n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Un,!1),at("WebGLRenderer: "+w.message),w}function He(){tt=new nT(U),tt.init(),Se=new qb(U,tt),N=new Xw(U,tt,e,Se),x=new jb(U,tt),N.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),q=U.createFramebuffer(),I=U.createFramebuffer(),G=U.createFramebuffer(),H=new sT(U),W=new Nb,Z=new Xb(U,tt,x,W,N,Se,H),oe=new tT(L),fe=new oM(U),Ae=new Ww(U,fe),J=new iT(U,fe,H,Ae),ie=new oT(U,J,fe,Ae,H),O=new aT(U,N,Z),Be=new qw(W),ve=new Pb(L,oe,tt,N,Ae,Be),ke=new Jb(L,W),ye=new Db,_e=new Bb(tt),Ye=new Gw(L,oe,x,ie,g,l),Ve=new Wb(L,ie,N),ae=new e1(U,H,N,x),xe=new jw(U,tt,H),ne=new rT(U,tt,H),H.programs=ve.programs,L.capabilities=N,L.extensions=tt,L.properties=W,L.renderLists=ye,L.shadowMap=Ve,L.state=x,L.info=H}M!==Pn&&(R=new cT(M,n.width,n.height,o,r,s));const Ue=new Zb(L,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(me,k,!1))},this.getSize=function(w){return w.set(me,k)},this.setSize=function(w,F,Q=!0){if(Ue.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,k=F,n.width=Math.floor(w*Y),n.height=Math.floor(F*Y),Q===!0&&(n.style.width=w+"px",n.style.height=F+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(me*Y,k*Y).floor()},this.setDrawingBufferSize=function(w,F,Q){me=w,k=F,Y=Q,n.width=Math.floor(w*Q),n.height=Math.floor(F*Q),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===Pn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,F,Q,j){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,F,Q,j),x.viewport(A.copy(se).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,F,Q,j){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,F,Q,j),x.scissor(ee.copy(ue).multiplyScalar(Y).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){x.setScissorTest(ze=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Q=!0){let j=0;if(w){let X=!1;if(V!==null){const be=V.texture.format;X=v.has(be)}if(X){const be=V.texture.type,Re=d.has(be),Ee=Ye.getClearColor(),Ne=Ye.getClearAlpha(),Oe=Ee.r,Ke=Ee.g,Je=Ee.b;Re?(_[0]=Oe,_[1]=Ke,_[2]=Je,_[3]=Ne,U.clearBufferuiv(U.COLOR,0,_)):(E[0]=Oe,E[1]=Ke,E[2]=Je,E[3]=Ne,U.clearBufferiv(U.COLOR,0,E))}else j|=U.COLOR_BUFFER_BIT}F&&(j|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Un,!1),Ye.dispose(),ye.dispose(),_e.dispose(),W.dispose(),oe.dispose(),ie.dispose(),Ae.dispose(),ae.dispose(),ve.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",uh),Ue.removeEventListener("sessionend",dh),hr.stop()};function gt(w){w.preventDefault(),Op("WebGLRenderer: Context Lost."),D=!0}function ct(){Op("WebGLRenderer: Context Restored."),D=!1;const w=H.autoReset,F=Ve.enabled,Q=Ve.autoUpdate,j=Ve.needsUpdate,X=Ve.type;He(),H.autoReset=w,Ve.enabled=F,Ve.autoUpdate=Q,Ve.needsUpdate=j,Ve.type=X}function Un(w){at("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zn(w){const F=w.target;F.removeEventListener("dispose",Zn),P0(F)}function P0(w){N0(w),W.remove(w)}function N0(w){const F=W.get(w).programs;F!==void 0&&(F.forEach(function(Q){ve.releaseProgram(Q)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Q,j,X,be){F===null&&(F=rt);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ee=I0(w,F,Q,j,X);x.setMaterial(j,Re);let Ne=Q.index,Oe=1;if(j.wireframe===!0){if(Ne=J.getWireframeAttribute(Q),Ne===void 0)return;Oe=2}const Ke=Q.drawRange,Je=Q.attributes.position;let Le=Ke.start*Oe,ut=(Ke.start+Ke.count)*Oe;be!==null&&(Le=Math.max(Le,be.start*Oe),ut=Math.min(ut,(be.start+be.count)*Oe)),Ne!==null?(Le=Math.max(Le,0),ut=Math.min(ut,Ne.count)):Je!=null&&(Le=Math.max(Le,0),ut=Math.min(ut,Je.count));const Nt=ut-Le;if(Nt<0||Nt===1/0)return;Ae.setup(X,j,Ee,Q,Ne);let xt,pt=xe;if(Ne!==null&&(xt=fe.get(Ne),pt=ne,pt.setIndex(xt)),X.isMesh)j.wireframe===!0?(x.setLineWidth(j.wireframeLinewidth*qe()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(X.isLine){let Xt=j.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*qe()),X.isLineSegments?pt.setMode(U.LINES):X.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else X.isPoints?pt.setMode(U.POINTS):X.isSprite&&pt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xt=X._multiDrawStarts,Ce=X._multiDrawCounts,en=X._multiDrawCount,st=Ne?fe.get(Ne).bytesPerElement:1,Tn=W.get(j).currentProgram.getUniforms();for(let Qn=0;Qn<en;Qn++)Tn.setValue(U,"_gl_DrawID",Qn),pt.render(Xt[Qn]/st,Ce[Qn])}else if(X.isInstancedMesh)pt.renderInstances(Le,Nt,X.count);else if(Q.isInstancedBufferGeometry){const Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ce=Math.min(Q.instanceCount,Xt);pt.renderInstances(Le,Nt,Ce)}else pt.render(Le,Nt)};function ch(w,F,Q,j){B!==null&&w.isNodeMaterial&&B.setObject(j,w),ge===!0&&Be.setState(w,Q,!1),w.transparent===!0&&w.side===si&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,Qa(w,F,j),w.side=Lr,w.needsUpdate=!0,Qa(w,F,j),w.side=si):Qa(w,F,j)}this.compile=function(w,F,Q=null){Q===null&&(Q=w),B!==null&&B.renderStart(w,F,Q),b=_e.get(Q),b.init(F),S.push(b),Q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),w!==Q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),Te=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,Te),ge===!0&&Be.setGlobalState(this.clippingPlanes,F),B!==null&&Ve.render(b.state.shadowsArray,Q,F);const j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const be=X.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const Ee=be[Re];ch(Ee,Q,F,X),j.add(Ee)}else ch(be,Q,F,X),j.add(be)}),b=S.pop(),B!==null&&B.renderEnd(),j},this.compileAsync=function(w,F,Q=null){const j=this.compile(w,F,Q);return new Promise(X=>{function be(){if(j.forEach(function(Re){const Ne=W.get(Re).currentProgram;(Ne===void 0||Ne.isReady())&&j.delete(Re)}),j.size===0){X(w);return}setTimeout(be,10)}tt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let nc=null;function L0(w){nc&&nc(w)}function uh(){hr.stop()}function dh(){hr.start()}const hr=new y0;hr.setAnimationLoop(L0),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(w){nc=w,Ue.setAnimationLoop(w),w===null?hr.stop():hr.start()},Ue.addEventListener("sessionstart",uh),Ue.addEventListener("sessionend",dh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(w,F);const Q=Ue.enabled===!0&&Ue.isPresenting===!0,j=R!==null&&(V===null||Q)&&R.begin(L,V);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(F),F=Ue.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,F,V),b=_e.get(w,S.length),b.init(F),b.state.textureUnits=Z.getTextureUnits(),S.push(b),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),de.setFromProjectionMatrix(Ie,oi,F.reversedDepth),Te=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,Te),T=ye.get(w,P.length),T.init(),P.push(T),Ue.enabled===!0&&Ue.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&ic(Re,F,-1/0,L.sortObjects)}ic(w,F,0,L.sortObjects),T.finish(),B!==null&&B.updateLights(b.state.lightsArray),L.sortObjects===!0&&T.sort(le,we),je=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,je&&Ye.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Be.beginShadows();const X=b.state.shadowsArray;if(Ve.render(X,w,F),ge===!0&&Be.endShadows(),(j&&R.hasRenderPass())===!1){const Re=T.opaque,Ee=T.transmissive;if(b.setupLights(),F.isArrayCamera){const Ne=F.cameras;if(Ee.length>0)for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const Je=Ne[Oe];hh(Re,Ee,w,Je)}je&&Ye.render(w);for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const Je=Ne[Oe];fh(T,w,Je,Je.viewport)}}else Ee.length>0&&hh(Re,Ee,w,F),je&&Ye.render(w),fh(T,w,F)}V!==null&&K===0&&(Z.updateMultisampleRenderTarget(V),Z.updateRenderTargetMipmap(V)),j&&R.end(L),w.isScene===!0&&w.onAfterRender(L,w,F),Ae.resetDefaultState(),z=-1,C=null,S.pop(),S.length>0?(b=S[S.length-1],Z.setTextureUnits(b.state.textureUnits),ge===!0&&Be.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,B!==null&&B.renderEnd()};function ic(w,F,Q,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(de)){j&&Qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const Re=ie.update(w),Ee=w.material;Ee.visible&&T.push(w,Re,Ee,Q,Qe.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(de))){const Re=ie.update(w),Ee=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qe.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ee)){const Ne=Re.groups;for(let Oe=0,Ke=Ne.length;Oe<Ke;Oe++){const Je=Ne[Oe],Le=Ee[Je.materialIndex];Le&&Le.visible&&T.push(w,Re,Le,Q,Qe.z,Je,F)}}else Ee.visible&&T.push(w,Re,Ee,Q,Qe.z,null,F)}}const be=w.children;for(let Re=0,Ee=be.length;Re<Ee;Re++)ic(be[Re],F,Q,j)}function fh(w,F,Q,j){const{opaque:X,transmissive:be,transparent:Re}=w;b.setupLightsView(Q),ge===!0&&Be.setGlobalState(L.clippingPlanes,Q),j&&x.viewport(A.copy(j)),X.length>0&&Za(X,F,Q),be.length>0&&Za(be,F,Q),Re.length>0&&Za(Re,F,Q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function hh(w,F,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const Le=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new qn(1,1,{generateMipmaps:!0,type:Le?fi:Pn,minFilter:Ji,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const be=b.state.transmissionRenderTarget[j.id],Re=j.viewport||A;be.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const Ee=L.getRenderTarget(),Ne=L.getActiveCubeFace(),Oe=L.getActiveMipmapLevel();L.setRenderTarget(be),L.getClearColor(pe),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),je&&Ye.render(Q);const Ke=L.toneMapping;L.toneMapping=ui;const Je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),ge===!0&&Be.setGlobalState(L.clippingPlanes,j),Za(w,Q,j),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ut=0,Nt=F.length;ut<Nt;ut++){const xt=F[ut],{object:pt,geometry:Xt,material:Ce,group:en}=xt;if(Ce.side===si&&pt.layers.test(j.layers)){const st=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,ph(pt,Q,j,Xt,Ce,en),Ce.side=st,Ce.needsUpdate=!0,Le=!0}}Le===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be))}L.setRenderTarget(Ee,Ne,Oe),L.setClearColor(pe,he),Je!==void 0&&(j.viewport=Je),L.toneMapping=Ke}function Za(w,F,Q){const j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,be=w.length;X<be;X++){const Re=w[X],{object:Ee,geometry:Ne,group:Oe}=Re;let Ke=Re.material;Ke.allowOverride===!0&&j!==null&&(Ke=j),Ee.layers.test(Q.layers)&&ph(Ee,F,Q,Ne,Ke,Oe)}}function ph(w,F,Q,j,X,be){B!==null&&X.isNodeMaterial&&B.setObject(w,X),w.onBeforeRender(L,F,Q,j,X,be),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(L,F,Q,j,w,be),X.transparent===!0&&X.side===si&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,L.renderBufferDirect(Q,F,j,X,w,be),X.side=Lr,X.needsUpdate=!0,L.renderBufferDirect(Q,F,j,X,w,be),X.side=si):L.renderBufferDirect(Q,F,j,X,w,be),w.onAfterRender(L,F,Q,j,X,be)}function Qa(w,F,Q){F.isScene!==!0&&(F=rt);const j=W.get(w),X=b.state.lights,be=b.state.shadowsArray,Re=X.state.version,Ee=ve.getParameters(w,X.state,be,F,Q,b.state.lightProbeGridArray),Ne=ve.getProgramCacheKey(Ee);let Oe=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,j.fog=F.fog;const Ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=oe.get(w.envMap||j.environment,Ke),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Zn),Oe=new Map,j.programs=Oe);let Je=Oe.get(Ne);if(Je!==void 0){if(j.currentProgram===Je&&j.lightsStateVersion===Re)return gh(w,Ee),Je}else Ee.uniforms=ve.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,Q,Ee),w.onBeforeCompile(Ee,L),Je=ve.acquireProgram(Ee,Ne),Oe.set(Ne,Je),j.uniforms=Ee.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=Be.uniform),gh(w,Ee),j.needsLights=F0(w),j.lightsStateVersion=Re,j.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=Je,j.uniformsList=null,Je}function mh(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=rl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function gh(w,F){const Q=W.get(w);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.batchingColor=F.batchingColor,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.instancingMorph=F.instancingMorph,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function D0(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Q=0,j=w.length;Q<j;Q++){const X=w[Q];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function I0(w,F,Q,j,X){F.isScene!==!0&&(F=rt),Z.resetTextureUnits();const be=F.fog,Re=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?F.environment:null,Ee=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:it.workingColorSpace,Ne=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Oe=oe.get(j.envMap||Re,Ne),Ke=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let xt=ui;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(xt=L.toneMapping);const pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=pt!==void 0?pt.length:0,Ce=W.get(j),en=b.state.lights;if(ge===!0&&(Te===!0||w!==C)){const vt=w===C&&j.id===z;Be.setState(j,w,vt)}let st=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==en.state.version||Ce.outputColorSpace!==Ee||X.isBatchedMesh&&Ce.batching===!1||!X.isBatchedMesh&&Ce.batching===!0||X.isBatchedMesh&&Ce.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ce.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||X.isInstancedMesh&&Ce.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ce.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ce.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ce.instancingMorph===!1&&X.morphTexture!==null||Ce.envMap!==Oe||j.fog===!0&&Ce.fog!==be||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Be.numPlanes||Ce.numIntersection!==Be.numIntersection)||Ce.vertexAlphas!==Ke||Ce.vertexTangents!==Je||Ce.morphTargets!==Le||Ce.morphNormals!==ut||Ce.morphColors!==Nt||Ce.toneMapping!==xt||Ce.morphTargetsCount!==Xt||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ce.__version=j.version);let Tn=Ce.currentProgram;st===!0&&(Tn=Qa(j,F,X),B&&j.isNodeMaterial&&B.onUpdateProgram(j,Tn,Ce));let Qn=!1,Ui=!1,Br=!1;const ht=Tn.getUniforms(),Rt=Ce.uniforms;if(x.useProgram(Tn.program)&&(Qn=!0,Ui=!0,Br=!0),j.id!==z&&(z=j.id,Ui=!0),Ce.needsLights){const vt=D0(b.state.lightProbeGridArray,X);Ce.lightProbeGrid!==vt&&(Ce.lightProbeGrid=vt,Ui=!0)}if(Qn||C!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",w.projectionMatrix),ht.setValue(U,"viewMatrix",w.matrixWorldInverse);const Oi=ht.map.cameraPosition;Oi!==void 0&&Oi.setValue(U,Ge.setFromMatrixPosition(w.matrixWorld)),N.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ht.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Ui=!0,Br=!0)}if(Ce.needsLights&&(en.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",en.state.sunShadowMap,Z),en.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",en.state.directionalShadowMap,Z),en.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",en.state.spotShadowMap,Z),en.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",en.state.pointShadowMap,Z)),X.isSkinnedMesh){ht.setOptional(U,X,"bindMatrix"),ht.setOptional(U,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ht.setValue(U,"boneTexture",vt.boneTexture,Z))}X.isBatchedMesh&&(ht.setOptional(U,X,"batchingTexture"),ht.setValue(U,"batchingTexture",X._matricesTexture,Z),ht.setOptional(U,X,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",X._indirectTexture,Z),ht.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",X._colorsTexture,Z));const Fi=Q.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&O.update(X,Q,Tn),(Ui||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,ht.setValue(U,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&F.environment!==null&&(Rt.envMapIntensity.value=F.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=n1()),Ui){if(ht.setValue(U,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&U0(Rt,Br),be&&j.fog===!0&&ke.refreshFogUniforms(Rt,be),ke.refreshMaterialUniforms(Rt,j,Y,k,b.state.transmissionRenderTarget[w.id]),Ce.needsLights&&Ce.lightProbeGrid){const vt=Ce.lightProbeGrid;Rt.probesSH.value=vt.texture,Rt.probesMin.value.copy(vt.boundingBox.min),Rt.probesMax.value.copy(vt.boundingBox.max),Rt.probesResolution.value.copy(vt.resolution)}rl.upload(U,mh(Ce),Rt,Z)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(rl.upload(U,mh(Ce),Rt,Z),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ht.setValue(U,"center",X.center),ht.setValue(U,"modelViewMatrix",X.modelViewMatrix),ht.setValue(U,"normalMatrix",X.normalMatrix),ht.setValue(U,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){const vt=j.uniformsGroups;for(let Oi=0,zr=vt.length;Oi<zr;Oi++){const _h=vt[Oi];ae.update(_h,Tn),ae.bind(_h,Tn)}}return Tn}function U0(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function F0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,F,Q){const j=W.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=F,W.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const Q=W.get(w);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Q=0){V=w,te=F,K=Q;let j=null,X=!1,be=!1;if(w){const Ee=W.get(w);if(Ee.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),A.copy(w.viewport),ee.copy(w.scissor),re=w.scissorTest,x.viewport(A),x.scissor(ee),x.setScissorTest(re),z=-1;return}else if(Ee.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Ee.__hasExternalTextures)Z.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(Ee.__boundDepthTexture!==Ke){if(Ke!==null&&W.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(be=!0);const Oe=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?j=Oe[F][Q]:j=Oe[F],X=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?j=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[Q]:j=Oe,A.copy(w.viewport),ee.copy(w.scissor),re=w.scissorTest}else A.copy(se).multiplyScalar(Y).floor(),ee.copy(ue).multiplyScalar(Y).floor(),re=ze;if(Q!==0&&(j=q),x.bindFramebuffer(U.FRAMEBUFFER,j)&&x.drawBuffers(w,j),x.viewport(A),x.scissor(ee),x.setScissorTest(re),X){const Ee=W.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,Q)}else if(be){const Ee=F;for(let Ne=0;Ne<w.textures.length;Ne++){const Oe=W.get(w.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Q,Ee)}}else if(w!==null&&Q!==0){const Ee=W.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,Q)}z=-1};function vh(w){const F=W.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=N.textureFormatReadable(w.format),F.__typeReadable=N.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Q,j,X,be,Re,Ee=0){if(!(w&&w.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){x.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const Oe=w.textures[Ee],Ke=Oe.format,Je=Oe.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);const Le=vh(Oe);if(Le.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&Q>=0&&Q<=w.height-X&&U.readPixels(F,Q,j,X,Se.convert(Ke),Se.convert(Je),be)}finally{const Oe=V!==null?W.get(V).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,F,Q,j,X,be,Re,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(F>=0&&F<=w.width-j&&Q>=0&&Q<=w.height-X){x.bindFramebuffer(U.FRAMEBUFFER,Ne);const Oe=w.textures[Ee],Ke=Oe.format,Je=Oe.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);const Le=vh(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(F,Q,j,X,Se.convert(Ke),Se.convert(Je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Nt=V!==null?W.get(V).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Nt);const xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sy(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ut),U.deleteSync(xt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Q=0){const j=Math.pow(2,-Q),X=Math.floor(w.image.width*j),be=Math.floor(w.image.height*j),Re=F!==null?F.x:0,Ee=F!==null?F.y:0;Z.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,Re,Ee,X,be),x.unbindTexture()},this.copyTextureToTexture=function(w,F,Q=null,j=null,X=0,be=0){let Re,Ee,Ne,Oe,Ke,Je,Le,ut,Nt;const xt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(Q!==null)Re=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Oe=Q.min.x,Ke=Q.min.y,Je=Q.isBox3?Q.min.z:0;else{const Rt=Math.pow(2,-X);Re=Math.floor(xt.width*Rt),Ee=Math.floor(xt.height*Rt),w.isDataArrayTexture?Ne=xt.depth:w.isData3DTexture?Ne=Math.floor(xt.depth*Rt):Ne=1,Oe=0,Ke=0,Je=0}j!==null?(Le=j.x,ut=j.y,Nt=j.z):(Le=0,ut=0,Nt=0);const pt=Se.convert(F.format),Xt=Se.convert(F.type);let Ce;F.isData3DTexture?(Z.setTexture3D(F,0),Ce=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Ce=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Ce=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const en=x.getParameter(U.UNPACK_ROW_LENGTH),st=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(U.UNPACK_SKIP_PIXELS),Qn=x.getParameter(U.UNPACK_SKIP_ROWS),Ui=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const Br=w.isDataArrayTexture||w.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Rt=W.get(w),Fi=W.get(F),vt=W.get(Rt.__renderTarget),Oi=W.get(Fi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let zr=0;zr<Ne;zr++)Br&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(w).__webglTexture,X,Je+zr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(F).__webglTexture,be,Nt+zr)),U.blitFramebuffer(Oe,Ke,Re,Ee,Le,ut,Re,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||W.has(w)){const Rt=W.get(w),Fi=W.get(F);x.bindFramebuffer(U.READ_FRAMEBUFFER,I),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let vt=0;vt<Ne;vt++)Br?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,X,Je+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,X),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fi.__webglTexture,be,Nt+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fi.__webglTexture,be),X!==0?U.blitFramebuffer(Oe,Ke,Re,Ee,Le,ut,Re,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Ce,be,Le,ut,Nt+vt,Oe,Ke,Re,Ee):U.copyTexSubImage2D(Ce,be,Le,ut,Oe,Ke,Re,Ee);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ce,be,Le,ut,Nt,Re,Ee,Ne,pt,Xt,xt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,be,Le,ut,Nt,Re,Ee,Ne,pt,xt.data):U.texSubImage3D(Ce,be,Le,ut,Nt,Re,Ee,Ne,pt,Xt,xt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Le,ut,Re,Ee,pt,Xt,xt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Le,ut,xt.width,xt.height,pt,xt.data):U.texSubImage2D(U.TEXTURE_2D,be,Le,ut,Re,Ee,pt,Xt,xt);x.pixelStorei(U.UNPACK_ROW_LENGTH,en),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(U.UNPACK_SKIP_ROWS,Qn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ui),be===0&&F.generateMipmaps&&U.generateMipmap(Ce),x.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){te=0,K=0,V=null,x.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}function i1({scrolled:t}){const e=De.useRef(null);return De.useEffect(()=>{const n=e.current;if(!n)return;const i=new f0;let r=n.clientWidth||window.innerWidth,s=n.clientHeight||window.innerHeight;const a=new _n(48,r/s,.1,1e3);a.position.set(0,0,105);const o=new R0({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(r,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.domElement.style.position="absolute",o.domElement.style.top="0",o.domElement.style.left="0",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.pointerEvents="auto",n.appendChild(o.domElement);const l=11e3,c=64,f=100,p=3600,u=l*2+c*f+p,m=new Float32Array(u*3),g=new Float32Array(u*3),M=new Float32Array(u*3),v=new Float32Array(u),d=new Float32Array(u),_=[new $e("#38bdf8"),new $e("#a855f7"),new $e("#10b981"),new $e("#fbbf24"),new $e("#f43f5e"),new $e("#00f0ff")],E=140,y=20,b=4.2*Math.PI*2,P=2.45;let S=0;const R=()=>{let ge=0,Te=0;for(;ge===0;)ge=Math.random();for(;Te===0;)Te=Math.random();return Math.sqrt(-2*Math.log(ge))*Math.cos(2*Math.PI*Te)};for(let ge=0;ge<2;ge++){const Te=ge===1,Ie=Te?P:0;for(let Ge=0;Ge<l;Ge++){const Qe=Ge/l,rt=(Qe-.5)*b+Ie,je=(Qe-.5)*E,qe=R()*1.35,U=R()*.9,mt=R()*.045,tt=y+qe,N=rt+mt,x=je+U,H=tt*Math.cos(N),W=tt*Math.sin(N),Z=S*3;m[Z]=H,m[Z+1]=x,m[Z+2]=W,g[Z]=H,g[Z+1]=x,g[Z+2]=W;const oe=new $e,fe=Te?(Qe*3.8+.5)%1:Qe*3.8%1;oe.setHSL(fe,.96,.58),M[Z]=oe.r,M[Z+1]=oe.g,M[Z+2]=oe.b;const J=(Math.abs(qe)<.5?2.4:1.3)+Math.random()*1.5;v[S]=J,d[S]=Math.random()*Math.PI*2,S++}}for(let ge=0;ge<c;ge++){const Te=(ge+.5)/c,Ie=(Te-.5)*E,Ge=(Te-.5)*b,Qe=Ge+P,rt=y*Math.cos(Ge),je=y*Math.sin(Ge),qe=y*Math.cos(Qe),U=y*Math.sin(Qe),mt=ge*.16%1,tt=(ge*.16+.5)%1;for(let N=0;N<f;N++){const x=N/(f-1),H=Bp.lerp(rt,qe,x)+R()*.45,W=Ie+R()*.45,Z=Bp.lerp(je,U,x)+R()*.45,oe=S*3;m[oe]=H,m[oe+1]=W,m[oe+2]=Z,g[oe]=H,g[oe+1]=W,g[oe+2]=Z;const fe=Math.abs(x-.5)*2,J=new $e;fe<.22?(J.setHSL(.12,1,.65),J.lerp(new $e("#ffffff"),.5)):x<.5?J.setHSL(mt,1,.6):J.setHSL(tt,1,.6),M[oe]=J.r,M[oe+1]=J.g,M[oe+2]=J.b;const ie=fe<.2?3:1.4+Math.random()*1.3;v[S]=ie,d[S]=Math.random()*Math.PI*2,S++}}for(let ge=0;ge<p;ge++){const Te=5+Math.random()*55,Ie=Math.random()*Math.PI*2,Ge=(Math.random()-.5)*(E+45),Qe=Te*Math.cos(Ie),rt=Te*Math.sin(Ie),je=S*3;m[je]=Qe,m[je+1]=Ge,m[je+2]=rt,g[je]=Qe,g[je+1]=Ge,g[je+2]=rt;const qe=new $e;qe.setHSL(Math.random(),.95,.62),M[je]=qe.r*.85,M[je+1]=qe.g*.85,M[je+2]=qe.b*.85;const U=.9+Math.random()*2.2;v[S]=U,d[S]=Math.random()*Math.PI*2,S++}const L=new Kn;L.setAttribute("position",new Sn(m,3)),L.setAttribute("rainbowColor",new Sn(M,3)),L.setAttribute("customSize",new Sn(v,1)),L.setAttribute("aPhase",new Sn(d,1));const D=_[0].clone(),B=new $n({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uColorA:{value:D.clone()},uColorB:{value:D.clone()},uTransition:{value:0},uUseRainbow:{value:0},uWaveRadius:{value:-100},uWaveWidth:{value:45},uWaveCenter:{value:new $(0,0,0)}},vertexColors:!1,transparent:!0,depthWrite:!1,blending:id,vertexShader:`
        attribute vec3 rainbowColor;
        attribute float customSize;
        attribute float aPhase;
        
        varying vec3 vColor;
        varying float vAlpha;
        
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTransition;
        uniform float uUseRainbow;
        uniform float uWaveRadius;
        uniform float uWaveWidth;
        uniform vec3 uWaveCenter;

        void main() {
          // Distance from 3D shockwave click ripple center
          float distToWave = length(position - uWaveCenter);

          // Wavefront crest highlight
          float waveRing = 0.0;
          if (uWaveRadius >= 0.0) {
            float diff = abs(distToWave - uWaveRadius);
            if (diff < uWaveWidth) {
              waveRing = 1.0 - (diff / uWaveWidth);
            }
          }

          // Smooth interpolation between previous uniform color and target uniform color
          vec3 uniformCurrent = mix(uColorA, uColorB, uTransition);

          // If in rainbow mode, blend towards rainbow; otherwise 100% ONE UNIFORM COLOR for all particles
          vec3 finalColor = mix(uniformCurrent, rainbowColor, uUseRainbow * uTransition);

          // Add extra intense luminous energy along the expanding wave crest
          finalColor += vec3(waveRing * 0.65);

          vColor = finalColor;

          // Organic breathing & twinkle wave
          float pulse = 0.82 + 0.18 * sin(uTime * 2.5 + aPhase * 6.28318);
          vAlpha = pulse;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          // Point size boost during shockwave ripple
          float sizeBoost = 1.0 + waveRing * 1.6;
          gl_PointSize = (customSize * pulse * sizeBoost) * uPixelRatio * (280.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Circular Gaussian-like smooth soft particle sprite
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Multi-layer anti-aliased luminous falloff
          float core = 1.0 - smoothstep(0.0, 0.20, dist);
          float aura = 1.0 - smoothstep(0.15, 0.50, dist);
          float alpha = (core * 0.52 + aura * 0.48) * vAlpha;

          // Diamond sparkle center
          vec3 finalColor = mix(vColor, vec3(1.0, 1.0, 1.0), core * 0.42);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `}),q=new Xy(L,B),I=new vs;I.add(q),I.rotation.z=-.32,I.rotation.x=.22,I.position.set(0,0,0),i.add(I);const G=new rM,te=new lt(-9999,-9999),K=new yi(new $(0,0,1),0),V=new $,z=new $(0,0,0);let C=!1,A=0,ee=0,re=1,pe=-100,he=!1;const me=240,k=260,Y=ge=>{const Te=n.getBoundingClientRect(),Ie=(ge.clientX-Te.left)/Te.width*2-1,Ge=-((ge.clientY-Te.top)/Te.height)*2+1;te.x=Ie,te.y=Ge,C=!0},le=()=>{C=!1,te.set(-9999,-9999)},we=ge=>{if(G.setFromCamera(te,a),G.ray.intersectPlane(K,V)?(z.copy(V),I.worldToLocal(z)):z.set(0,0,0),B.uniforms.uWaveCenter.value.copy(z),pe=0,he=!0,re<1){const Te=new $e().lerpColors(_[A],_[ee],re);B.uniforms.uColorA.value.copy(Te)}else B.uniforms.uColorA.value.copy(_[ee]);A=ee,ee=(ee+1)%_.length,B.uniforms.uColorB.value.copy(_[ee]),B.uniforms.uUseRainbow.value=ee===5?1:0,re=0};window.addEventListener("pointermove",Y,{passive:!0}),window.addEventListener("pointerleave",le),window.addEventListener("pointerdown",we);const se=()=>{n&&(r=n.clientWidth||window.innerWidth,s=n.clientHeight||window.innerHeight,a.aspect=r/s,a.updateProjectionMatrix(),o.setSize(r,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",se);let ue;const ze=new sM,de=()=>{ue=requestAnimationFrame(de);const ge=Math.min(ze.getDelta(),.1),Te=ze.getElapsedTime();if(B.uniforms.uTime.value=Te,q.rotation.y+=ge*.4,re<1&&(re=Math.min(1,re+ge*2.2),B.uniforms.uTransition.value=re),he&&(pe+=ge*me,B.uniforms.uWaveRadius.value=pe,pe>k&&(he=!1,B.uniforms.uWaveRadius.value=-100)),C){const je=te.x*.4,qe=.22-te.y*.25;I.rotation.y+=(je-I.rotation.y)*.05,I.rotation.x+=(qe-I.rotation.x)*.05}else I.rotation.y+=(0-I.rotation.y)*.03,I.rotation.x+=(.22-I.rotation.x)*.03;I.position.y=Math.sin(Te*.9)*2.2;const Ie=L.attributes.position.array,Ge=.06,Qe=2.2,rt=l*2+c*f;for(let je=0;je<rt;je+=2){const qe=je*3,U=g[qe+1],mt=Math.sin(U*Ge+Te*Qe)*.8;Ie[qe]=g[qe+1]?g[qe]+mt*.35:g[qe],Ie[qe+2]=g[qe+2]+mt*.35}L.attributes.position.needsUpdate=!0,o.render(i,a)};return de(),()=>{cancelAnimationFrame(ue),window.removeEventListener("pointermove",Y),window.removeEventListener("pointerleave",le),window.removeEventListener("pointerdown",we),window.removeEventListener("resize",se),o.domElement&&n.contains(o.domElement)&&n.removeChild(o.domElement),L.dispose(),B.dispose(),o.dispose()}},[]),h.jsx("div",{ref:e,className:"dna-canvas-container",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",cursor:"pointer",zIndex:1,opacity:t?0:1,visibility:t?"hidden":"visible",transition:"opacity 3.0s cubic-bezier(0.16, 1, 0.3, 1), visibility 3.0s ease",pointerEvents:t?"none":"auto"}})}function r1({onOpenModal:t,scrolled:e}){const[n,i]=De.useState(""),[r,s]=De.useState(""),[a,o]=De.useState(""),[l,c]=De.useState(""),[f,p]=De.useState(1),[u,m]=De.useState(1),[g,M]=De.useState(!1),[v,d]=De.useState(!1);return De.useEffect(()=>{const _="The intelligence",E="behind",y="modern hospitals",T="TRIO HIMS";let b;const P=()=>{let D=0;p(1);const B=setInterval(()=>{D++,i(_.slice(0,D)),D>=_.length&&(clearInterval(B),p(2),b=setTimeout(S,180))},42)},S=()=>{let D=0;const B=setInterval(()=>{D++,s(E.slice(0,D)),D>=E.length&&(clearInterval(B),p(3),b=setTimeout(R,160))},48)},R=()=>{let D=0;const B=setInterval(()=>{D++,o(y.slice(0,D)),D>=y.length&&(clearInterval(B),p(4),b=setTimeout(L,200))},42)},L=()=>{let D=0;m(1);const B=setInterval(()=>{D++,c(T.slice(0,D)),D>=T.length&&(clearInterval(B),m(2),b=setTimeout(()=>{d(!0),b=setTimeout(()=>{M(!0)},300)},180))},55)};return b=setTimeout(P,350),()=>{clearTimeout(b)}},[]),h.jsxs("section",{id:"hero",className:`hero-stage ${e?"scrolled":""}`,children:[h.jsxs("div",{className:"hero-video-wrapper",children:[h.jsx(i1,{scrolled:e}),h.jsx("div",{className:`hero-white-cover ${e?"active":""}`}),h.jsx("div",{className:`hero-bottom-fade ${e?"active":""}`})]}),h.jsxs("div",{className:"hero-editorial-stage",children:[h.jsxs("div",{className:"hero-left-mid-block",children:[h.jsxs("div",{className:"hero-typography-line hero-line-intelligence",children:[h.jsx("span",{children:n}),f===1&&h.jsx("span",{className:"type-caret"})]}),h.jsxs("div",{className:"hero-typography-line hero-line-behind",children:[h.jsx("span",{children:r}),f===2&&h.jsx("span",{className:"type-caret"})]}),h.jsxs("div",{className:"hero-typography-line hero-line-modern",children:[h.jsx("span",{children:a}),f===3&&h.jsx("span",{className:"type-caret"})]})]}),h.jsxs("div",{className:"hero-right-mid-block",children:[h.jsxs("div",{className:"hero-typography-line hero-line-triohms",children:[h.jsx("span",{children:l}),u===1&&h.jsx("span",{className:"type-caret"})]}),h.jsx("div",{className:`hero-subheading-wrap ${v?"visible":""}`,children:h.jsx("div",{className:"hero-google-card",children:h.jsxs("div",{className:"hero-card-text",children:[h.jsx("div",{className:"hero-card-title",children:"All-in-One system to simplify Hospital’s Operational Tasks"}),h.jsx("div",{className:"hero-card-subtitle",children:"A Trusted Name in HIMS providing a simple and sustainable system for Healthcare Automation."})]})})}),h.jsx("div",{className:`hero-cta-btn-wrap ${g?"visible":""}`,children:h.jsxs("button",{type:"button",className:"hero-btn-pill hero-btn-premium",onClick:t,children:[h.jsx("span",{className:"btn-shimmer-sweep"}),h.jsx("span",{className:"btn-text",children:"Book a Free Demo"}),h.jsx("i",{className:"bi bi-arrow-right btn-arrow"})]})})]})]})]})}const s1=[{id:"doctors",target:3e3,label:"Doctors"},{id:"hospital",target:250,label:"Hospital"},{id:"clients",target:1e3,label:"Happy Clients"},{id:"clinics",target:656,label:"Clinic Installations"}];function a1({target:t,label:e,suffix:n="+",isVisible:i,delayIndex:r=0}){const[s,a]=De.useState(0);return De.useEffect(()=>{if(!i)return;let o=null,l;const c=2e3,f=p=>{o||(o=p);const u=p-o,m=Math.min(u/c,1),g=m===1?1:1-Math.pow(2,-10*m);a(Math.floor(g*t)),m<1?l=requestAnimationFrame(f):a(t)};return l=requestAnimationFrame(f),()=>cancelAnimationFrame(l)},[i,t]),h.jsxs("div",{className:`google-stat-card ${i?"card-revealed":""}`,style:{"--reveal-delay":`${r*.08}s`},children:[h.jsx("div",{className:"google-stat-card-sheen","aria-hidden":"true"}),h.jsxs("div",{className:"google-stat-card-inner",children:[h.jsxs("div",{className:"google-stat-num-row",children:[h.jsx("span",{className:"google-stat-number",children:s.toLocaleString()}),h.jsx("span",{className:"google-stat-suffix",children:n})]}),h.jsx("div",{className:"google-stat-label",children:e})]})]})}const ts=[{id:"why-choose",number:"01",category:"Why Choose TRIO",highlight:"200+ Hospitals Across India & Abroad",desc:"10+ years domain expertise with 27+ hospital modules unified in one simple, sustainable & scalable enterprise cloud architecture.",metricNum:"200+",metricUnit:"Hospitals Connected",metricSub:"Active deployments across India & international",statusBadge:"Live Network 99.98%",statusDot:"dot-blue",themeColor:"#1a73e8",glowClass:"aura-blue",videoSrc:"/assets/video/1.mp4",icon:"bi-shield-check",chips:["10+ Years Trust","200+ Hospitals","27+ Modules","24/7 Dedicated Support"],highlights:["Comprehensive multi-specialty coverage in one unified cloud system","Proven 99.98% uptime with seamless hospital chain deployment","Zero maintenance headache with automatic compliance updates"]},{id:"technology",number:"02",category:"Technology",highlight:"Web & Machine Interfacing",desc:"Web/cloud-based multi-level framework with auto-analyzer interfacing, scalable database clustering & bi-directional ASTM/HL7 compliance.",metricNum:"< 50ms",metricUnit:"Machine Sync Latency",metricSub:"Bi-directional LIS / HIS connection",statusBadge:"Machine Sync < 50ms",statusDot:"dot-purple",themeColor:"#9333ea",glowClass:"aura-purple",videoSrc:"/assets/video/2.mp4",icon:"bi-rocket-takeoff-fill",chips:["Cloud & Web-Based","Machine Interfacing","Data Security","Bi-Directional LIS"],highlights:["Auto-analyzer bi-directional interfacing with zero human error","Instant HL7 / ASTM protocol parsing with DICOM PACS integration","Multi-tier encrypted cloud architecture with role-based governance"]},{id:"management",number:"03",category:"Management",highlight:"Zero Revenue Leakage",desc:"Methodical automated reporting, KPI tracking, clinical decision support & strict financial controls to stop revenue leaks before they happen.",metricNum:"100%",metricUnit:"Audited & Protected",metricSub:"Zero billing leakage guarantee",statusBadge:"Audit Status Zero-Leak",statusDot:"dot-amber",themeColor:"#d97706",glowClass:"aura-amber",videoSrc:"/assets/video/3.mp4",icon:"bi-box-seam-fill",chips:["KPI Analytics","Stop Revenue Leakage","Role-Based Security","Executive Dashboard"],highlights:["Pre-billing tariff validation stops unbilled services instantly","Real-time executive KPI dashboards with automated revenue alerts","Comprehensive cashier reconciliation and insurance claim scrubbing"]},{id:"clinical",number:"04",category:"Clinical Benefits",highlight:"Automated Operations",desc:"Enhance doctor-patient communication, automate routine clinical tasks, eliminate paper latency & simplify overall hospital operations.",metricNum:"10x",metricUnit:"Faster Operations",metricSub:"Accelerated patient care turnaround",statusBadge:"Auto-Pipeline Active",statusDot:"dot-green",themeColor:"#10b981",glowClass:"aura-green",videoSrc:"/assets/video/4.mp4",icon:"bi-plus-circle-fill",chips:["Automate Tasks","Care Coordination","Data Accuracy","Instant EMR Access"],highlights:["Automated triage, doctor queue, pharmacy and lab routing","Smart e-prescriptions with drug-interaction warning safety checks","One-click discharge summary generation saving 45+ minutes per patient"]}];function o1(){const[t,e]=De.useState(0),n=De.useRef(null),i=De.useRef(null),r=De.useRef(0);r.current=t;const s=De.useRef(!1),a=De.useRef(null),[o,l]=De.useState(!1),c=De.useRef(null);De.useEffect(()=>{if(!c.current)return;const u=new IntersectionObserver(([m])=>{m.isIntersecting&&(l(!0),u.disconnect())},{threshold:.05,rootMargin:"0px 0px -20px 0px"});return u.observe(c.current),()=>u.disconnect()},[]);const f=u=>{if(!n.current)return;const m=Math.max(0,Math.min(u,ts.length-1)),g=m*n.current.clientHeight;n.current.scrollTo({top:g,behavior:"smooth"}),e(m)},p=()=>{if(!n.current)return;const u=n.current,m=u.clientHeight;if(m<=0)return;const g=Math.round(u.scrollTop/m);g>=0&&g<ts.length&&g!==r.current&&e(g)};return De.useEffect(()=>{const u=i.current;if(!u)return;const m=d=>{const _=d.deltaY;if(Math.abs(_)<18)return;const E=r.current;if(_>0&&E<ts.length-1){if(d.preventDefault(),d.stopPropagation(),s.current)return;s.current=!0,f(E+1),clearTimeout(a.current),a.current=setTimeout(()=>{s.current=!1},500)}else if(_<0&&E>0){if(d.preventDefault(),d.stopPropagation(),s.current)return;s.current=!0,f(E-1),clearTimeout(a.current),a.current=setTimeout(()=>{s.current=!1},500)}};let g=0;const M=d=>{g=d.touches[0].clientY},v=d=>{const _=d.changedTouches[0].clientY,E=g-_;if(Math.abs(E)<40)return;const y=r.current;E>0&&y<ts.length-1?f(y+1):E<0&&y>0&&f(y-1)};return u.addEventListener("wheel",m,{passive:!1}),u.addEventListener("touchstart",M,{passive:!0}),u.addEventListener("touchend",v,{passive:!0}),()=>{u.removeEventListener("wheel",m),u.removeEventListener("touchstart",M),u.removeEventListener("touchend",v),clearTimeout(a.current)}},[]),h.jsxs("section",{id:"counts",className:"stats-strip-white",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{ref:i,className:"mini-screen-container","data-lenis-prevent":"true",children:[h.jsx("div",{className:"mini-screen-floating-dots","aria-label":"Slide indicators",children:ts.map((u,m)=>h.jsx("button",{type:"button",onClick:()=>f(m),className:`floating-dot-pill ${t===m?"pill-active":""}`,title:u.category,"aria-label":`Slide ${m+1}: ${u.category}`,children:h.jsx("span",{className:"dot-pill-num",children:u.number})},u.id))}),h.jsx("div",{ref:n,className:"mini-screen-viewport",onScroll:p,"data-lenis-prevent":"true",children:ts.map((u,m)=>h.jsx("div",{className:`mini-screen-slide ${u.glowClass}`,"data-slide-index":m,children:h.jsxs("div",{className:"slide-content-grid",children:[h.jsx("div",{className:"slide-video-col",children:h.jsxs("div",{className:"slide-video-square-card liquid-glass-strong",children:[h.jsx("div",{className:"liquid-glass-beam"}),h.jsx("div",{className:"square-video-ratio-box",children:h.jsx("video",{className:"square-video-element",src:u.videoSrc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"})})]})}),h.jsxs("div",{className:"slide-info-col",children:[h.jsx("h2",{className:"slide-panel-top-title",children:u.category}),h.jsxs("div",{className:"slide-info-panel liquid-glass",children:[h.jsx("div",{className:"liquid-glass-beam"}),h.jsx("h3",{className:"slide-main-heading",children:u.highlight}),h.jsx("p",{className:"slide-main-desc",children:u.desc}),h.jsxs("div",{className:"slide-metric-callout",children:[h.jsx("div",{className:"metric-large",style:{color:u.themeColor},children:u.metricNum}),h.jsxs("div",{className:"metric-details",children:[h.jsx("span",{className:"metric-unit-text",children:u.metricUnit}),h.jsx("span",{className:"metric-sub-text",children:u.metricSub})]})]}),h.jsx("div",{className:"slide-highlights-list",children:u.highlights.map((g,M)=>h.jsxs("div",{className:"slide-highlight-item",children:[h.jsx("i",{className:"bi bi-check-circle-fill me-2",style:{color:u.themeColor}}),h.jsx("span",{children:g})]},M))}),h.jsx("div",{className:"slide-chips-row mt-3",children:u.chips.map((g,M)=>h.jsx("span",{className:"slide-chip-item",children:g},M))})]})]})]})},u.id))})]}),h.jsxs("div",{className:"trust-badges-ribbon",children:[h.jsx("div",{className:"trust-badge-item",title:"10 Years Expertise",children:h.jsx("img",{src:"/assets/img/1-removebg-preview.png",alt:"10 Years Expertise",className:"trust-badge-img",loading:"lazy"})}),h.jsx("div",{className:"trust-badge-item",title:"Deploy in 200+ Hospitals",children:h.jsx("img",{src:"/assets/img/2-removebg-preview.png",alt:"Deploy in 200+ Hospitals",className:"trust-badge-img",loading:"lazy"})}),h.jsx("div",{className:"trust-badge-item",title:"27 Hospital Modules",children:h.jsx("img",{src:"/assets/img/3-removebg-preview.png",alt:"27 Hospital Modules",className:"trust-badge-img",loading:"lazy"})}),h.jsx("div",{className:"trust-badge-item",title:"Excellent Service and Support System",children:h.jsx("img",{src:"/assets/img/4-removebg-preview(4).png",alt:"Excellent Service and Support System",className:"trust-badge-img",loading:"lazy"})})]}),h.jsxs("div",{className:"mini-screen-parallel-showcase",children:[h.jsxs("p",{className:"parallel-showcase-desc",children:[h.jsx("span",{className:"desc-lead",children:"Trio Corporation"})," provides healthcare information management software, ",h.jsx("strong",{className:"desc-highlight-brand",children:"TRIO HIMS"}),", tailored to the healthcare centre requirements. Our team of experts with enormous experience in the healthcare industry, wholeheartedly, dedicated to provide the ",h.jsx("span",{className:"desc-highlight-value",children:"secure, reliable, and cost-effective IT solution"})," to simplify hospital’s operational tasks."]}),h.jsx("div",{className:"quote-glass-stage-wrap",children:h.jsxs("div",{className:"quote-callout-card quote-glass-card",children:[h.jsx("div",{className:"liquid-glass-beam"}),h.jsxs("div",{className:"quote-callout-inner",children:[h.jsx("div",{className:"quote-premium-glyph","aria-hidden":"true",children:h.jsxs("svg",{width:"38",height:"28",viewBox:"0 0 38 28",fill:"none",children:[h.jsx("path",{d:"M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z",fill:"url(#premiumQuoteGradient)"}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"premiumQuoteGradient",x1:"0",y1:"0",x2:"38",y2:"28",gradientUnits:"userSpaceOnUse",children:[h.jsx("stop",{stopColor:"#1a73e8"}),h.jsx("stop",{offset:"0.5",stopColor:"#38bdf8"}),h.jsx("stop",{offset:"1",stopColor:"#06b6d4"})]})})]})}),h.jsxs("p",{className:"quote-callout-text",children:["Remove paperwork and gather all your hospital’s data digitally with accuracy and precision.",h.jsx("span",{className:"quote-close-glyph","aria-hidden":"true",children:h.jsx("svg",{width:"26",height:"20",viewBox:"0 0 38 28",fill:"none",children:h.jsx("g",{transform:"rotate(180 19 14)",children:h.jsx("path",{d:"M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z",fill:"url(#premiumQuoteGradient)"})})})})]}),h.jsx("div",{className:"quote-author-tag",children:"— TRIO HIMS"})]})]})})]})]}),h.jsx("div",{className:"stats-metric-strip-band",children:h.jsx("div",{className:"container",children:h.jsx("div",{ref:c,className:"parallel-stats-strip-grid",children:s1.map((u,m)=>h.jsx(a1,{target:u.target,label:u.label,suffix:"+",isVisible:o,delayIndex:m},u.id))})})})]})}const au=[{id:"ssd",name:"SSD Hospital",type:"Sai Snehdeep Hospital",logo:"/assets/img/ssd.jpeg",accent:"#8b5cf6"},{id:"gsmc",name:"Government S.M.C. Hospital",type:"Medical College & Hospital",logo:"/assets/img/Logo_gsmc_my_creation.png",accent:"#38bdf8"},{id:"lifeline",name:"Lifeline Hospital",type:"Multi-Speciality Centre",logo:"/assets/img/lifeline.jpeg",accent:"#10b981"},{id:"queens",name:"Queens Hospital",type:"Super Speciality Institute",logo:"/assets/img/Quuens%20logo.png",accent:"#a855f7"},{id:"samarth-main",name:"Shri Swami Samarth Hospital",type:"NABH Accredited Hospital",logo:"/assets/img/logoMain.jpg",accent:"#f59e0b"},{id:"samarth-heart",name:"Shri Swami Samarth Heart Care",type:"Cardiac Sciences Institute",logo:"/assets/img/WhatsApp%20Image%202022-12-28%20at%209.16.32%20PM.jpeg",accent:"#ef4444"},{id:"samarth-care",name:"Shri Swami Samarth Care",type:"Critical & Emergency Care",logo:"/assets/img/Logo%20(1).png",accent:"#06b6d4"},{id:"kedarnath",name:"Kedarnath Hospital",type:"Advanced Trauma Care",logo:"/assets/img/kedarnathlogo.jpg",accent:"#3b82f6"},{id:"sunrise",name:"Sunrise Super Speciality Hospital",type:"Tertiary Care Hospital",logo:"/assets/img/sunriseHospital.webp",accent:"#ec4899"},{id:"apex-care",name:"Apex Clinical Network",type:"Regional Healthcare Chain",icon:"hospital",accent:"#14b8a6"},{id:"metro-clinical",name:"Metro Health Institute",type:"Research & Diagnostics",icon:"pulse",accent:"#6366f1"},{id:"global-care",name:"Global Care Multispeciality",type:"International Clinical Center",icon:"shield",accent:"#22c55e"}];function ou(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.lineTo(e+i-s,n),t.quadraticCurveTo(e+i,n,e+i,n+s),t.lineTo(e+i,n+r-s),t.quadraticCurveTo(e+i,n+r,e+i-s,n+r),t.lineTo(e+s,n+r),t.quadraticCurveTo(e,n+r,e,n+r-s),t.lineTo(e,n+s),t.quadraticCurveTo(e,n,e+s,n),t.closePath()}function l1(t){const e=document.createElement("canvas");e.width=560,e.height=330;const n=e.getContext("2d"),i=new qy(e);i.generateMipmaps=!0,i.minFilter=Ji,i.magFilter=Gt;let r=null;const s=()=>{n.clearRect(0,0,e.width,e.height),n.save(),n.shadowColor="rgba(15, 23, 42, 0.08)",n.shadowBlur=24,n.shadowOffsetY=10,n.fillStyle="rgba(255, 255, 255, 0.95)",ou(n,10,10,540,310,26),n.fill(),n.restore();const a=n.createLinearGradient(0,0,560,330);a.addColorStop(0,"rgba(255, 255, 255, 0.98)"),a.addColorStop(.4,"rgba(248, 250, 255, 0.92)"),a.addColorStop(1,"rgba(240, 246, 255, 0.95)"),n.fillStyle=a,ou(n,10,10,540,310,26),n.fill();const o=n.createLinearGradient(0,10,560,320);o.addColorStop(0,"rgba(226, 232, 240, 0.85)"),o.addColorStop(1,"rgba(203, 213, 225, 0.75)"),n.strokeStyle=o,n.lineWidth=1.2,ou(n,10,10,540,310,26),n.stroke();const l=70,c=32,f=420,p=150;if(r&&r.complete&&r.naturalWidth>0){const u=r.naturalWidth,m=r.naturalHeight,g=Math.min(f/u,p/m,1.35),M=u*g,v=m*g,d=l+(f-M)/2,_=c+(p-v)/2;n.save(),n.drawImage(r,d,_,M,v),n.restore()}else{n.save();const u=280,m=105;n.strokeStyle=`${t.accent}44`,n.lineWidth=2.5,n.beginPath(),n.arc(u,m,38,0,Math.PI*2),n.stroke(),n.fillStyle=`${t.accent}12`,n.beginPath(),n.arc(u,m,37,0,Math.PI*2),n.fill(),n.fillStyle=t.accent,n.shadowColor=t.accent,n.shadowBlur=10;const g=12,M=40;n.fillRect(u-g/2,m-M/2,g,M),n.fillRect(u-M/2,m-g/2,M,g),n.restore()}n.font='700 23.5px "Google Sans", "Plus Jakarta Sans", system-ui, sans-serif',n.fillStyle="#0f172a",n.textAlign="center",n.textBaseline="middle",n.fillText(t.name,280,236),n.font='500 15px "Google Sans", "Plus Jakarta Sans", system-ui, sans-serif',n.fillStyle="#64748b",n.fillText(t.type,280,270)};if(s(),t.logo){const a=new Image;a.crossOrigin="anonymous",a.src=t.logo;const o=()=>{r=a,s(),i.needsUpdate=!0};a.onload=o,a.onerror=()=>{r=null,s(),i.needsUpdate=!0},a.complete&&a.naturalWidth>0&&o()}return i}function c1(){const t=De.useRef(null),e=De.useRef(null);De.useEffect(()=>{const c=t.current,f=e.current;if(!c||!f)return;let u=!window.matchMedia("(prefers-reduced-motion: reduce)").matches;const m=new f0,g=c.clientWidth||window.innerWidth,M=c.clientHeight||440,v=g<768,d=new _n(40,g/M,.1,100);d.position.set(0,0,v?7.6:6.6),d.lookAt(0,0,0);const _=new R0({canvas:f,antialias:!0,alpha:!0,powerPreference:"high-performance"});_.setSize(g,M),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let E=v?0:1.15;const y=new vs;y.position.set(E,.22,0),m.add(y);const T=3.65,b=au.length,P=new Ka(1.95,1.18),S=[],R=[],L=[];au.forEach((se,ue)=>{const ze=ue/b*Math.PI*2,de=l1(se);S.push(de);const ge=new th({map:de,transparent:!0,side:si});R.push(ge);const Te=new hi(P,ge);Te.position.x=T*Math.sin(ze),Te.position.z=T*Math.cos(ze),Te.position.y=0,Te.rotation.y=ze,y.add(Te),L.push(Te)});let D=0;const B=.0032;let q=0,I=!1,G=0,te=0,K=!1;const V=se=>{I=!0,G=se.clientX||se.touches&&se.touches[0].clientX||0,te=G,q=0,f.style.cursor="grabbing"},z=se=>{if(!I)return;const ue=se.clientX||se.touches&&se.touches[0].clientX||0,ze=ue-te;te=ue;const de=v?.006:.0045;D+=ze*de,q=ze*de},C=()=>{I&&(I=!1,f.style.cursor="grab")},A=()=>{K=!0},ee=()=>{K=!1,I=!1,f.style.cursor="grab"};f.addEventListener("mousedown",V),window.addEventListener("mousemove",z),window.addEventListener("mouseup",C),f.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",z,{passive:!0}),window.addEventListener("touchend",C),f.addEventListener("mouseenter",A),f.addEventListener("mouseleave",ee);let re,pe=!0,he=!1,me=0;window.__triggerTrustedBounce=()=>{he=!0,me=performance.now()};const k=new IntersectionObserver(([se])=>{pe=se.isIntersecting},{threshold:.05});k.observe(c);const Y=new $,le=()=>{if(re=requestAnimationFrame(le),!pe)return;if(!he)y.scale.set(1e-4,1e-4,1e-4);else{const ue=(performance.now()-me)/1e3;if(ue<1.6){const ze=Math.max(0,1-Math.exp(-4.2*ue)*Math.cos(9.6*ue));y.scale.set(ze,ze,ze);const de=.22-Math.exp(-4.2*ue)*Math.sin(8*ue)*.35;y.position.y=de,y.position.x=E;const ge=Math.exp(-3.2*ue)*.024;D+=ge}else y.scale.set(1,1,1),y.position.y=.22,y.position.x=E}if(!I){if(Math.abs(q)>1e-4)D+=q,q*=.94;else if(u){const ue=K?B*.35:B;D+=ue}}y.rotation.y=D;const se=performance.now()*.001;L.forEach((ue,ze)=>{ue.position.y=Math.sin(se*1.5+ze*.52)*.07,ue.getWorldPosition(Y);const de=(Y.z- -T)/(2*T),ge=Math.min(1,Math.max(0,(de-.1)/.82));ue.material.opacity=ge;const Te=.9+.1*de;ue.material.color.setRGB(Te,Te,Te)}),_.render(m,d)};le();const we=()=>{if(!c)return;const se=c.clientWidth,ue=c.clientHeight||440,ze=se<768;E=ze?0:1.15,y.position.x=E,d.aspect=se/ue,d.position.z=ze?7.6:6.6,d.updateProjectionMatrix(),_.setSize(se,ue),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2))};return window.addEventListener("resize",we),()=>{delete window.__triggerTrustedBounce,k.disconnect(),cancelAnimationFrame(re),window.removeEventListener("resize",we),f.removeEventListener("mousedown",V),window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",C),f.removeEventListener("touchstart",V),window.removeEventListener("touchmove",z),window.removeEventListener("touchend",C),f.removeEventListener("mouseenter",A),f.removeEventListener("mouseleave",ee),P.dispose(),S.forEach(se=>se.dispose()),R.forEach(se=>se.dispose()),_.dispose()}},[]);const n=De.useRef(null),[i,r]=De.useState("idle"),[s,a]=De.useState({x:0,y:0});De.useEffect(()=>{if(!n.current)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(r("text-in"),setTimeout(()=>{r("boxes-bouncing"),window.__triggerTrustedBounce&&window.__triggerTrustedBounce()},620),setTimeout(()=>{r("all-loaded")},1750),c.disconnect())},{threshold:.16});return c.observe(n.current),()=>c.disconnect()},[]);const o=c=>{const f=c.currentTarget.getBoundingClientRect(),p=((c.clientX-f.left)/f.width-.5)*2,u=((c.clientY-f.top)/f.height-.5)*2;a({x:p,y:u})},l=()=>{a({x:0,y:0})};return h.jsx("section",{id:"trusted-by",ref:n,className:`trusted-by-cinematic-section ${i!=="idle"?"section-active":""}`,"aria-label":"Trusted By Partner Hospitals",children:h.jsxs("div",{className:"trusted-container-miniscreen",children:[h.jsxs("div",{className:"trusted-wheel-stage-wrapper",children:[h.jsx("div",{className:`trusted-corner-heading ${i!=="idle"?"text-in":""}`,onMouseMove:o,onMouseLeave:l,style:i!=="idle"?{transform:`perspective(900px) rotateY(${s.x*6}deg) rotateX(${-s.y*4}deg)`}:void 0,children:h.jsxs("h2",{className:"section-title-google trusted-corner-title",children:[h.jsx("span",{className:"kinetic-word",children:"TRUSTED"})," ",h.jsx("span",{className:"text-gradient-gemini kinetic-word",children:"BY"})]})}),h.jsxs("div",{ref:t,className:`trusted-3d-stage trusted-stage-parallel ${i==="boxes-bouncing"||i==="all-loaded"?"boxes-bouncing":""}`,children:[h.jsx("div",{className:"trusted-stage-vignette left","aria-hidden":"true"}),h.jsx("div",{className:"trusted-stage-vignette right","aria-hidden":"true"}),h.jsx("canvas",{ref:e,className:"trusted-three-canvas","aria-label":"Interactive 3D cylindrical carousel of company logos"})]})]}),h.jsx("ul",{className:"visually-hidden",children:au.map(c=>h.jsxs("li",{children:[c.name," - ",c.type]},c.id))})]})})}const ji=[{id:1,title:"Registration, Admit, Discharge and Transfer (RADT)",shortTitle:"Patient Registration (RADT)",subtitle:"Front Desk & Admissions",icon:"bx-user-plus",category:"Clinical & Front Desk",description:"Complete patient lifecycle management from entry to discharge with emergency handling.",features:["Patient Registration (OPD / IPD / Daycare)","Automated Unique Patient Identification (UHID)","Inpatient Admissions & Bed Allocation","Inter-ward and Bed Transfers","Planned & Emergency Discharge Summaries","Casualty & Emergency Desk Management","Demographic capture, photo capture, and ID verification"]},{id:2,title:"Billing Cash Counter",shortTitle:"Billing & Cash Counter",subtitle:"Cashless, TPA & Invoicing",icon:"bx-receipt",category:"Finance & Accounts",description:"Multi-mode payment billing, corporate/cashless coverage, packages and audits.",features:["IPD Package creation & Health Check-up plans","Health Card & Privilege membership management","Automatic billing calculation with manual overrides","Service-wise discounting and subsidy approval","Patient receipt managed in 3 ways: Cash, Credit, and Settle against Deposit","Corporate and Insurance billing as per negotiated rates","Co-pay facility for corporate and insurance policies","Refund management with multi-level validation of clinical transactions","Separate cash/credit generation for cashless patients with non-applicable services","Pop-up alert display for duplicate services on the same day for a patient","Multi-mode payment collection (Cash, UPI, Card, Net Banking, Cheque)","In-patient live bill monitoring & credit limits","Cashless approval flow for Insurance, Govt Schemes, Corporates, & Charities","Consultation fee rules: 1st consultation, free follow-up, and follow-up fee config"]},{id:3,title:"Patient Consultation – OPD and IPD",shortTitle:"Doctor Consultation Desk",subtitle:"OPD & E-Prescriptions",icon:"bx-pulse",category:"Clinical & Doctors",description:"Electronic health records, doctor consultation desks, and e-prescriptions.",features:["Comprehensive Patient EMR with past history and allergies","Interactive E-Prescription with dosage, duration, and instructions","Diagnosis coding (ICD-10) and clinical notes","Investigation order requisition directly sent to Lab & Radiology","Dynamic clinical templates customized per medical specialty","Follow-up scheduling and appointment reminders","Vitals tracking, growth charts, and BMI calculations"]},{id:4,title:"Radiology Information System (RIS)",shortTitle:"Radiology (RIS & PACS)",subtitle:"Imaging, X-Ray & DICOM",icon:"bx-scan",category:"Diagnostics",description:"Complete radiology workflow, order processing, and PACS imaging integration.",features:["Templates stored in customizable format with standard terminology","Strict PDF view-only permissions for non-radiology staff","Seamless integration with PACS & DICOM viewers","Radiology Order Processing from OPD & IPD wards","Result verification, digital signature, and multi-stage reporting","Radiology film & contrast consumption tracking","Modality appointment scheduling (X-Ray, CT, MRI, Ultrasound)","Comparison tool for previous vs current radiologic reports"]},{id:5,title:"Electronic Health Record (EHR / EMR)",shortTitle:"Electronic Health Records",subtitle:"Unified EMR / EHR History",icon:"bx-folder-open",category:"Clinical & Doctors",description:"Longitudinal health records uniting clinical, diagnostic, and administrative data.",features:["Demographics, vital signs, problems list, and allergy warnings","Physician progress notes & clinical documentation","Past medical, surgical, and family history recording","Immunization and vaccination schedule tracking","Unified timeline aggregating Lab, Radiology, and Pharmacy data","Clinical Decision Support (CDS) for drug-drug interactions","Doctor-wise dynamic medical record generation facility","Enables admin analytics, physician outcome tracking, and research reports"]},{id:6,title:"Laboratory Information System (LIS)",shortTitle:"Laboratory (LIS)",subtitle:"Bi-directional Auto-Analyzers",icon:"bx-vial",category:"Diagnostics",description:"End-to-end pathology workflow with machine interfacing and barcode tracking.",features:["Configurable test catalog across Biochemistry, Hematology, Microbiology, etc.","Sample collection with automatic unique barcode label generation","Specimen tracking from collection to accessioning, testing, and disposal","Direct bi-directional machine interfacing with lab auto-analyzers","Automatic panic/critical value alerts and deviation highlighting","Cumulative test results and patient trend/correlation graphs","Digital signatures configured faculty-wise for verified reports","Formula-based calculations (e.g. CBC absolute count values)","Repeat sample tracking in case of hemolyzed or broken specimens"]},{id:7,title:"Pharmacy Management",shortTitle:"Pharmacy Management",subtitle:"Retail & IPD Drug Dispensing",icon:"bx-capsule",category:"Inventory & Pharmacy",description:"Retail and IPD pharmacy sales, batch/expiry controls, and GST compliance.",features:["Batch-wise stock tracking with online status during sales","Cash, credit, and cashless insurance invoicing","Automated drug expiry alerts & expiry aging analysis","Fast-moving, slow-moving, and non-moving drug classification","Barcode scanning for dispensing and sales processing","Narcotics and Schedule-X drug control linked to doctor prescription","Substitute drug suggestion during out-of-stock situations","Purchase order generation and purchase returns workflow","Complete GST invoicing and export to GST return portals","Profitability reports by date, category, and sales register"]},{id:8,title:"Financial Accounting & Tally Integration",shortTitle:"Financial Accounting",subtitle:"2-Way Tally ERP Sync",icon:"bx-calculator",category:"Finance & Accounts",description:"Two-way Tally bridge, accounts receivable, payables, and financial reporting.",features:["Accounts Receivable: debtor ledger, receipts, and outstanding aging","Reminder letters and notices for bounced or returned cheques","Accounts Payable: vendor bills, payment vouchers, and refund vouchers","Merged payments and automatic cheque printing","Two-way data synchronization with Tally ERP / Tally Prime","Real-time Revenue Leakage detection and financial control","Automated Bank Reconciliation (BRS) and cash book maintenance"]},{id:9,title:"Nursing Care Desk & Station",shortTitle:"Nursing Care Station",subtitle:"Vitals, MAR & Handover",icon:"bx-first-aid",category:"Inpatient Care",description:"Ward administration, vitals charting, doctor order execution, and bed control.",features:["Unified view of all admitted patients at the specific nursing station","Live vital signs charting and intake/output fluid balance recording","Doctor treatment sheet & medication administration record (MAR)","Fall risk assessment & Braden pressure ulcer scale tracking","Nursing shift handover notes and clinical alerts","Ward sub-store requisition and medication issue","Bed transfer requests and discharge intimation workflow","OT schedule requests and patient dietary orders"]},{id:10,title:"License & Statutory Compliance Management",shortTitle:"Statutory Compliance",subtitle:"Hospital License Tracking",icon:"bx-shield-quarter",category:"Administration",description:"Centralized tracking and timely automated reminders for hospital statutory licenses.",features:["Repository of all hospital licenses (PNDT, Bio-medical, Pharmacy, Fire safety, AERB)","Record issuing authority, license number, validity dates, and department","Automated countdown alerts & reminders before renewal due dates","Document scanning and upload for statutory certificates","Compliance audits and NABH/NABL accreditation documentation"]},{id:11,title:"Interface with External Medical Equipment",shortTitle:"Machine Interfacing",subtitle:"ASTM & HL7 Protocols",icon:"bx-devices",category:"Technical & Hardware",description:"Direct machine integration with analyzers, biometric devices, and display tokens.",features:["Bi-directional interface with auto-analyzers for direct lab result transfer","Credit card swap machine integration for counter receipts","Biometric fingerprint/face recognition attendance systems for staff","Barcode printers and high-speed laser scanners","Digital Token Display Boards for OPD patient queue calling","Nurse calling systems wired to nursing stations","Direct PACS server integration for DICOM image streaming"]},{id:12,title:"Biomedical Asset Maintenance (BAM)",shortTitle:"Asset Maintenance (BAM)",subtitle:"Equipment AMC & Calibration",icon:"bx-wrench",category:"Administration",description:"Preventive maintenance schedules, breakdown logs, AMC contracts, and depreciation.",features:["Exhaustive medical asset registry with serial numbers and warranty","Asset capitalization, depreciation calculation, and lease tracking","AMC / CMC contract management and renewal alerts","Preventive Maintenance (PPM) scheduled calendar","Breakdown ticket logging and job assignment to engineers","Asset transfer, condemnations, and disposal approvals","Uptime and MTBF / MTTR equipment reliability analytics"]},{id:13,title:"Visitor Management System",shortTitle:"Visitor Management",subtitle:"Digital Passes & Security",icon:"bx-id-card",category:"Administration",description:"Digital visitor passes, security checkpoints, and visitor tracking.",features:["Paperless visitor check-in with web camera photo capture","Instant barcode/QR-coded visitor badge pass printing","Time-tracking with entry, exit, and total stay duration recording","Visitor search by visit code, name, phone, or company","Restricted ward access control and maximum visitor limit per patient","SMS notification to patient attendant or hospital host upon arrival","Security audit reports by department, patient, and date range"]},{id:14,title:"Diet & Kitchen Management",shortTitle:"Diet & Kitchen Services",subtitle:"Clinical Nutrition & 8 Meals",icon:"bx-restaurant",category:"Hospital Services",description:"Personalized patient nutrition planning, 8-meal cycles, and dietitian reviews.",features:["Diet categorization: Liquid, Semi-solid, Solid, Diabetic, Renal, Salt-restricted","Menu planning across 8 daily meal heads (Bed Tea, Breakfast, Lunch, Snacks, Dinner, etc.)","Specialized consultation screen for Clinical Dietitian","Patient food allergies, likes, and dislikes tracking","Dietitian reviews patient lab reports, vitals, and medication before prescribing","Kitchen food preparation requisition slips categorized by ward and room","Calorie and nutritional breakdown tracking per meal"]},{id:15,title:"Operation Theatre (OT) Management",shortTitle:"Operation Theatre (OT)",subtitle:"WHO Checklists & Scheduling",icon:"bx-cut",category:"Clinical & Surgery",description:"OT scheduling, multi-stage clinical checklists, anesthesia notes, and surgical safety.",features:["Interactive OT scheduler with conflict detection and rescheduling","Support for multiple surgeries for the same patient in a single OT slot","Pre-surgery clinical clearance and WHO surgical safety checklists","General & regional anesthesia consent documentation","Pre-operative, intra-operative, and post-operative surgical notes","Surgeon, assistant, anesthetist, and scrub nurse staff logging","OT equipment and surgical consumable/implant consumption tracking","Aldrete recovery score card with multi-level approval","Pre and post surgery photo attachment capability"]},{id:16,title:"Staff Roster Management",shortTitle:"Staff Duty Roster",subtitle:"Shifts & Attendance Swaps",icon:"bx-calendar-event",category:"HR & Operations",description:"Doctor, nurse, and support staff shift planning with Excel upload and swap approvals.",features:["Shift scheduling for doctors, nurses, technicians, and non-clinical staff","Dual scheduling method: Bulk Excel upload or system interactive calendar","Shift swap and leave replacement requests with supervisor approval","Duty roster printable charts for ward notice boards","Night shift allowances and emergency on-call duty management","Automated integration with biometric attendance punches"]},{id:17,title:"Stores & Inventory Management",shortTitle:"Stores & Inventory",subtitle:"MUSIC-3D Analytics & ROL",icon:"bx-store-alt",category:"Inventory & Supply",description:"Central warehouse, sub-stores, purchase indents, PO workflows, and MUSIC-3D analytics.",features:["Main central store and unlimited department sub-stores hierarchy","ABC, VED, and MUSIC-3D inventory classification models","Requisition indents, purchase quotations, and purchase order workflow","Goods Receipt Note (GRN) with QC verification and return handling","Stock valuation methods (FIFO, Weighted Average, LIFO)","Inter-store stock transfers with two-stage approval","Department consumption tracking and bedside patient item issues","Automated Reorder Level (ROL) calculation and stock alerts","Full GST reporting and purchase audit documentation"]},{id:18,title:"Human Resource Management (HRMS & Payroll)",shortTitle:"HRMS & Staff Payroll",subtitle:"Biometric Attendance & Pay",icon:"bx-group",category:"Administration",description:"Staff records, biometric attendance, salary generation, PF/TDS, and appraisals.",features:["Complete employee digital profiles with credential and license tracking","Biometric machine interfacing for automatic punch attendance logs","Automated monthly salary calculation with parameterized allowances and deductions","Overtime (OT) management with single/double rate calculation","Online employee leave requests, approvals, and balance ledgers","PF returns (Form 3A, 5, 10, 12A) and ECR CSV generation","TDS calculation and investment declaration forms","Doctor visit incentives and consultant share payout reports","Staff separation and full & final settlement process"]}];function u1({onOpenModal:t}){const[e,n]=De.useState(null),i=e?ji.findIndex(a=>a.id===e.id):-1,r=a=>{a&&a.stopPropagation(),i>0?n(ji[i-1]):n(ji[ji.length-1])},s=a=>{a&&a.stopPropagation(),i<ji.length-1?n(ji[i+1]):n(ji[0])};return De.useEffect(()=>{if(!e)return;const a=o=>{o.key==="Escape"?n(null):o.key==="ArrowLeft"?r():o.key==="ArrowRight"&&s()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",window.__lenis&&window.__lenis.stop(),()=>{window.removeEventListener("keydown",a),document.body.style.overflow="",window.__lenis&&window.__lenis.start()}},[e,i]),h.jsxs("section",{id:"modules",className:"google-modules-section",children:[h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"google-modules-header text-center",children:h.jsxs("h2",{className:"section-title-google",children:["Hospital ",h.jsx("span",{className:"text-gradient-gemini",children:"Modules"})]})}),h.jsx("div",{className:"google-modules-grid",children:ji.map(a=>h.jsxs("div",{className:"google-module-tile",onClick:()=>n(a),role:"button",tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n(a))},title:`View ${a.shortTitle} details`,children:[h.jsxs("div",{className:"google-tile-top-row",children:[h.jsx("div",{className:"google-tile-icon-circle","aria-hidden":"true",children:h.jsx("i",{className:`bx ${a.icon}`})}),h.jsxs("div",{className:"google-tile-index","aria-hidden":"true",children:[h.jsx("span",{className:"tile-idx-num",children:String(a.id).padStart(2,"0")}),h.jsx("i",{className:"bi bi-arrow-up-right tile-idx-arrow"})]})]}),h.jsxs("div",{className:"google-tile-content",children:[h.jsx("h3",{className:"google-tile-title",children:a.shortTitle}),h.jsx("div",{className:"google-tile-subtitle",children:a.subtitle})]})]},a.id))})]}),e&&h.jsx("div",{className:"google-module-modal-overlay",onClick:()=>n(null),role:"dialog","aria-modal":"true","aria-labelledby":"modal-module-title","data-lenis-prevent":"true",children:h.jsxs("div",{className:"google-module-modal-card",onClick:a=>a.stopPropagation(),"data-lenis-prevent":"true",children:[h.jsxs("div",{className:"google-modal-header",children:[h.jsxs("div",{className:"d-flex align-items-center gap-3",children:[h.jsx("div",{className:"google-modal-icon-badge",children:h.jsx("i",{className:`bx ${e.icon}`})}),h.jsxs("div",{children:[h.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[h.jsxs("span",{className:"google-modal-idx-pill",children:["Module ",String(e.id).padStart(2,"0")," of 18"]}),h.jsx("span",{className:"google-modal-cat-badge",children:e.category})]}),h.jsx("h3",{id:"modal-module-title",className:"google-modal-title",children:e.title})]})]}),h.jsxs("div",{className:"google-modal-header-actions",children:[h.jsx("button",{type:"button",className:"google-modal-nav-arrow",onClick:r,title:"Previous Module (←)","aria-label":"Previous Module",children:h.jsx("i",{className:"bi bi-chevron-left"})}),h.jsx("button",{type:"button",className:"google-modal-nav-arrow",onClick:s,title:"Next Module (→)","aria-label":"Next Module",children:h.jsx("i",{className:"bi bi-chevron-right"})}),h.jsx("button",{type:"button",className:"google-modal-close-btn",onClick:()=>n(null),title:"Close (Esc)","aria-label":"Close dialog",children:h.jsx("i",{className:"bi bi-x-lg"})})]})]}),h.jsxs("div",{className:"google-modal-body",children:[h.jsx("p",{className:"google-modal-desc",children:e.description}),h.jsxs("div",{className:"google-modal-meta-strip",children:[h.jsxs("div",{className:"meta-tag-item",children:[h.jsx("i",{className:"bi bi-shield-check text-primary me-1"}),h.jsx("span",{children:"Zero Data Silos"})]}),h.jsxs("div",{className:"meta-tag-item",children:[h.jsx("i",{className:"bi bi-lightning-charge-fill text-warning me-1"}),h.jsx("span",{children:"Real-time Cloud Sync"})]}),h.jsxs("div",{className:"meta-tag-item",children:[h.jsx("i",{className:"bi bi-patch-check-fill text-success me-1"}),h.jsx("span",{children:"NABH & NABL Ready"})]})]}),h.jsxs("div",{className:"google-modal-features-box",children:[h.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[h.jsxs("h4",{className:"google-features-heading m-0",children:[h.jsx("i",{className:"bi bi-stars text-primary me-2"}),"Core Capabilities & Workflows"]}),h.jsxs("span",{className:"features-count-pill",children:[e.features.length," Features"]})]}),h.jsx("div",{className:"google-features-grid",children:e.features.map((a,o)=>h.jsxs("div",{className:"google-feature-item",children:[h.jsx("i",{className:"bi bi-check-circle-fill google-check-icon"}),h.jsx("span",{children:a})]},o))})]})]}),h.jsxs("div",{className:"google-modal-footer",children:[h.jsxs("div",{className:"google-modal-footer-nav",children:[h.jsxs("button",{type:"button",className:"btn btn-sm btn-google-nav-btn",onClick:r,title:"Previous Module",children:[h.jsx("i",{className:"bi bi-arrow-left me-1"})," Prev"]}),h.jsxs("span",{className:"footer-nav-counter",children:[String(e.id).padStart(2,"0")," / 18"]}),h.jsxs("button",{type:"button",className:"btn btn-sm btn-google-nav-btn",onClick:s,title:"Next Module",children:["Next ",h.jsx("i",{className:"bi bi-arrow-right ms-1"})]})]}),h.jsxs("div",{className:"d-flex align-items-center gap-2",children:[h.jsx("button",{type:"button",className:"btn btn-google-outline",onClick:()=>n(null),children:"Close"}),h.jsxs("button",{type:"button",className:"btn btn-google-primary",onClick:()=>{n(null),t&&t()},children:[h.jsx("i",{className:"bi bi-calendar-check me-2"}),"Book Free Demo"]})]})]})]})})]})}var nh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),A=C.getContext("2d");A.fillRect(0,0,1,1);var ee=C.transferToImageBitmap();A.createPattern(ee,"no-repeat")}catch{return!1}return!0}();function l(){}function c(C){var A=n.exports.Promise,ee=A!==void 0?A:e.Promise;return typeof ee=="function"?new ee(C):(C(l,l),null)}var f=function(C,A){return{transform:function(ee){if(C)return ee;if(A.has(ee))return A.get(ee);var re=new OffscreenCanvas(ee.width,ee.height),pe=re.getContext("2d");return pe.drawImage(ee,0,0),A.set(ee,re),re},clear:function(){A.clear()}}}(o,new Map),p=function(){var C=Math.floor(16.666666666666668),A,ee,re={},pe=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(he){var me=Math.random();return re[me]=requestAnimationFrame(function k(Y){pe===Y||pe+C-1<Y?(pe=Y,delete re[me],he()):re[me]=requestAnimationFrame(k)}),me},ee=function(he){re[he]&&cancelAnimationFrame(re[he])}):(A=function(he){return setTimeout(he,C)},ee=function(he){return clearTimeout(he)}),{frame:A,cancel:ee}}(),u=function(){var C,A,ee={};function re(pe){function he(me,k){pe.postMessage({options:me||{},callback:k})}pe.init=function(k){var Y=k.transferControlToOffscreen();pe.postMessage({canvas:Y},[Y])},pe.fire=function(k,Y,le){if(A)return he(k,null),A;var we=Math.random().toString(36).slice(2);return A=c(function(se){function ue(ze){ze.data.callback===we&&(delete ee[we],pe.removeEventListener("message",ue),A=null,f.clear(),le(),se())}pe.addEventListener("message",ue),he(k,we),ee[we]=ue.bind(null,{data:{callback:we}})}),A},pe.reset=function(){pe.postMessage({reset:!0});for(var k in ee)ee[k](),delete ee[k]}}return function(){if(C)return C;if(!i&&s){var pe=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([pe])))}catch(he){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",he),null}re(C)}return C}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(C,A){return A?A(C):C}function M(C){return C!=null}function v(C,A,ee){return g(C&&M(C[A])?C[A]:m[A],ee)}function d(C){return C<0?0:Math.floor(C)}function _(C,A){return Math.floor(Math.random()*(A-C))+C}function E(C){return parseInt(C,16)}function y(C){return C.map(T)}function T(C){var A=String(C).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:E(A.substring(0,2)),g:E(A.substring(2,4)),b:E(A.substring(4,6))}}function b(C){var A=v(C,"origin",Object);return A.x=v(A,"x",Number),A.y=v(A,"y",Number),A}function P(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function S(C){var A=C.getBoundingClientRect();C.width=A.width,C.height=A.height}function R(C){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=C,A}function L(C,A,ee,re,pe,he,me,k,Y){C.save(),C.translate(A,ee),C.rotate(he),C.scale(re,pe),C.arc(0,0,1,me,k,Y),C.restore()}function D(C){var A=C.angle*(Math.PI/180),ee=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-A+(.5*ee-Math.random()*ee),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function B(C,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var ee=A.tick++/A.totalTicks,re=A.x+A.random*A.tiltCos,pe=A.y+A.random*A.tiltSin,he=A.wobbleX+A.random*A.tiltCos,me=A.wobbleY+A.random*A.tiltSin;if(C.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-ee)+")",C.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))C.fill(K(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(he-re)*.1,Math.abs(me-pe)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var k=Math.PI/10*A.wobble,Y=Math.abs(he-re)*.1,le=Math.abs(me-pe)*.1,we=A.shape.bitmap.width*A.scalar,se=A.shape.bitmap.height*A.scalar,ue=new DOMMatrix([Math.cos(k)*Y,Math.sin(k)*Y,-Math.sin(k)*le,Math.cos(k)*le,A.x,A.y]);ue.multiplySelf(new DOMMatrix(A.shape.matrix));var ze=C.createPattern(f.transform(A.shape.bitmap),"no-repeat");ze.setTransform(ue),C.globalAlpha=1-ee,C.fillStyle=ze,C.fillRect(A.x-we/2,A.y-se/2,we,se),C.globalAlpha=1}else if(A.shape==="circle")C.ellipse?C.ellipse(A.x,A.y,Math.abs(he-re)*A.ovalScalar,Math.abs(me-pe)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):L(C,A.x,A.y,Math.abs(he-re)*A.ovalScalar,Math.abs(me-pe)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var de=Math.PI/2*3,ge=4*A.scalar,Te=8*A.scalar,Ie=A.x,Ge=A.y,Qe=5,rt=Math.PI/Qe;Qe--;)Ie=A.x+Math.cos(de)*Te,Ge=A.y+Math.sin(de)*Te,C.lineTo(Ie,Ge),de+=rt,Ie=A.x+Math.cos(de)*ge,Ge=A.y+Math.sin(de)*ge,C.lineTo(Ie,Ge),de+=rt;else C.moveTo(Math.floor(A.x),Math.floor(A.y)),C.lineTo(Math.floor(A.wobbleX),Math.floor(pe)),C.lineTo(Math.floor(he),Math.floor(me)),C.lineTo(Math.floor(re),Math.floor(A.wobbleY));return C.closePath(),C.fill(),A.tick<A.totalTicks}function q(C,A,ee,re,pe){var he=A.slice(),me=C.getContext("2d"),k,Y,le=c(function(we){function se(){k=Y=null,me.clearRect(0,0,re.width,re.height),f.clear(),pe(),we()}function ue(){i&&!(re.width===r.width&&re.height===r.height)&&(re.width=C.width=r.width,re.height=C.height=r.height),!re.width&&!re.height&&(ee(C),re.width=C.width,re.height=C.height),me.clearRect(0,0,re.width,re.height),he=he.filter(function(ze){return B(me,ze)}),he.length?k=p.frame(ue):se()}k=p.frame(ue),Y=se});return{addFettis:function(we){return he=he.concat(we),le},canvas:C,promise:le,reset:function(){k&&p.cancel(k),Y&&Y()}}}function I(C,A){var ee=!C,re=!!v(A||{},"resize"),pe=!1,he=v(A,"disableForReducedMotion",Boolean),me=s&&!!v(A||{},"useWorker"),k=me?u():null,Y=ee?P:S,le=C&&k?!!C.__confetti_initialized:!1,we=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,se;function ue(de,ge,Te){for(var Ie=v(de,"particleCount",d),Ge=v(de,"angle",Number),Qe=v(de,"spread",Number),rt=v(de,"startVelocity",Number),je=v(de,"decay",Number),qe=v(de,"gravity",Number),U=v(de,"drift",Number),mt=v(de,"colors",y),tt=v(de,"ticks",Number),N=v(de,"shapes"),x=v(de,"scalar"),H=!!v(de,"flat"),W=b(de),Z=Ie,oe=[],fe=C.width*W.x,J=C.height*W.y;Z--;)oe.push(D({x:fe,y:J,angle:Ge,spread:Qe,startVelocity:rt,color:mt[Z%mt.length],shape:N[_(0,N.length)],ticks:tt,decay:je,gravity:qe,drift:U,scalar:x,flat:H}));return se?se.addFettis(oe):(se=q(C,oe,Y,ge,Te),se.promise)}function ze(de){var ge=he||v(de,"disableForReducedMotion",Boolean),Te=v(de,"zIndex",Number);if(ge&&we)return c(function(rt){rt()});ee&&se?C=se.canvas:ee&&!C&&(C=R(Te),document.body.appendChild(C)),re&&!le&&Y(C);var Ie={width:C.width,height:C.height};k&&!le&&k.init(C),le=!0,k&&(C.__confetti_initialized=!0);function Ge(){if(k){var rt={getBoundingClientRect:function(){if(!ee)return C.getBoundingClientRect()}};Y(rt),k.postMessage({resize:{width:rt.width,height:rt.height}});return}Ie.width=Ie.height=null}function Qe(){se=null,re&&(pe=!1,e.removeEventListener("resize",Ge)),ee&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,le=!1)}return re&&!pe&&(pe=!0,e.addEventListener("resize",Ge,!1)),k?k.fire(de,Ie,Qe):ue(de,Ie,Qe)}return ze.reset=function(){k&&k.reset(),se&&se.reset()},ze}var G;function te(){return G||(G=I(null,{useWorker:!0,resize:!0})),G}function K(C,A,ee,re,pe,he,me){var k=new Path2D(C),Y=new Path2D;Y.addPath(k,new DOMMatrix(A));var le=new Path2D;return le.addPath(Y,new DOMMatrix([Math.cos(me)*pe,Math.sin(me)*pe,-Math.sin(me)*he,Math.cos(me)*he,ee,re])),le}function V(C){if(!a)throw new Error("path confetti are not supported in this browser");var A,ee;typeof C=="string"?A=C:(A=C.path,ee=C.matrix);var re=new Path2D(A),pe=document.createElement("canvas"),he=pe.getContext("2d");if(!ee){for(var me=1e3,k=me,Y=me,le=0,we=0,se,ue,ze=0;ze<me;ze+=2)for(var de=0;de<me;de+=2)he.isPointInPath(re,ze,de,"nonzero")&&(k=Math.min(k,ze),Y=Math.min(Y,de),le=Math.max(le,ze),we=Math.max(we,de));se=le-k,ue=we-Y;var ge=10,Te=Math.min(ge/se,ge/ue);ee=[Te,0,0,Te,-Math.round(se/2+k)*Te,-Math.round(ue/2+Y)*Te]}return{type:"path",path:A,matrix:ee}}function z(C){var A,ee=1,re="#000000",pe='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?A=C:(A=C.text,ee="scalar"in C?C.scalar:ee,pe="fontFamily"in C?C.fontFamily:pe,re="color"in C?C.color:re);var he=10*ee,me=""+he+"px "+pe,k=new OffscreenCanvas(he,he),Y=k.getContext("2d");Y.font=me;var le=Y.measureText(A),we=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),se=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),ue=2,ze=le.actualBoundingBoxLeft+ue,de=le.actualBoundingBoxAscent+ue;we+=ue+ue,se+=ue+ue,k=new OffscreenCanvas(we,se),Y=k.getContext("2d"),Y.font=me,Y.fillStyle=re,Y.fillText(A,ze,de);var ge=1/ee;return{type:"bitmap",bitmap:k.transferToImageBitmap(),matrix:[ge,0,0,ge,-we*ge/2,-se*ge/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=I,n.exports.shapeFromPath=V,n.exports.shapeFromText=z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),nh,!1);const ih=nh.exports;nh.exports.create;const d1=[{icon:"bi-lightning-charge-fill",label:"30-Min Live Walkthrough",desc:"Tailored to your hospital workflow"},{icon:"bi-shield-check",label:"NABH-Ready Compliance",desc:"Standardized clinical documentation"},{icon:"bi-headset",label:"24x7 Onboarding Support",desc:"Dedicated implementation engineer"},{icon:"bi-patch-check-fill",label:"Zero Hidden Charges",desc:"Transparent per-bed/cloud pricing"}];function f1(){const[t,e]=De.useState({name:"",email:"",phone:"",date:"",department:"Complete Hospital Suite (All 18 Modules)",bedCount:"Medium Hospital (26-50 Beds)",message:""}),[n,i]=De.useState(!1),[r,s]=De.useState(!1),a=l=>{l.preventDefault(),s(!0),setTimeout(()=>{s(!1),i(!0);try{ih({particleCount:75,spread:70,origin:{y:.6}})}catch{}},550)},o=()=>{i(!1),e({name:"",email:"",phone:"",date:"",department:"Complete Hospital Suite (All 18 Modules)",bedCount:"Medium Hospital (26-50 Beds)",message:""})};return h.jsx("section",{id:"appointment",className:"book-demo-section",children:h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"google-modules-header text-center mb-4",children:h.jsxs("h2",{className:"section-title-google",children:["Book A ",h.jsx("span",{className:"text-gradient-gemini",children:"Free Demo"})]})}),h.jsx("div",{className:"demo-stage-card",children:h.jsxs("div",{className:"demo-stage-grid",children:[h.jsx("div",{className:"demo-brief-panel",children:h.jsxs("div",{className:"demo-brief-inner",children:[h.jsxs("div",{className:"demo-brief-badge",children:[h.jsx("i",{className:"bi bi-person-video3 me-2"}),"Personalized Session"]}),h.jsx("h3",{className:"demo-brief-heading",children:"Experience TRIO HIMS in Real-Time"}),h.jsx("p",{className:"demo-brief-lead",children:"Watch our senior clinical specialists demonstrate how TRIO eliminates paper bottlenecks and unifies all 18 modules."}),h.jsx("div",{className:"demo-perks-list",children:d1.map(l=>h.jsxs("div",{className:"demo-perk-card",children:[h.jsx("div",{className:"demo-perk-icon",children:h.jsx("i",{className:`bi ${l.icon}`})}),h.jsxs("div",{className:"demo-perk-info",children:[h.jsx("div",{className:"demo-perk-title",children:l.label}),h.jsx("div",{className:"demo-perk-desc",children:l.desc})]})]},l.label))}),h.jsxs("div",{className:"demo-assurance-pill",children:[h.jsx("i",{className:"bi bi-shield-check text-success me-1"}),h.jsx("span",{children:"NDA Protected · 100% Free Consultation · No Commitment"})]})]})}),h.jsx("div",{className:"demo-form-panel",children:n?h.jsxs("div",{className:"demo-success-box",children:[h.jsx("div",{className:"demo-success-circle",children:h.jsx("i",{className:"bi bi-check-lg"})}),h.jsx("h3",{className:"demo-success-title",children:"Appointment Confirmed"}),h.jsxs("p",{className:"demo-success-text",children:["Thank you, ",h.jsx("strong",{children:t.name}),". Our hospital solutions team has scheduled your demo request and will reach you at ",h.jsx("strong",{children:t.phone}),"."]}),h.jsxs("button",{className:"demo-reset-btn",onClick:o,children:[h.jsx("i",{className:"bi bi-arrow-counterclockwise me-2"}),"Book Another Slot"]})]}):h.jsxs("form",{onSubmit:a,className:"demo-modern-form",children:[h.jsxs("div",{className:"demo-form-row",children:[h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Full Name *"}),h.jsx("input",{className:"demo-form-control",type:"text",placeholder:"Dr. / Mr. Name",required:!0,value:t.name,onChange:l=>e({...t,name:l.target.value})})]}),h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Phone Number *"}),h.jsx("input",{className:"demo-form-control",type:"tel",placeholder:"10-digit mobile",pattern:"[0-9]{10}",required:!0,value:t.phone,onChange:l=>e({...t,phone:l.target.value})})]})]}),h.jsxs("div",{className:"demo-form-row",children:[h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Email Address *"}),h.jsx("input",{className:"demo-form-control",type:"email",placeholder:"doctor@hospital.org",required:!0,value:t.email,onChange:l=>e({...t,email:l.target.value})})]}),h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Preferred Date"}),h.jsx("input",{className:"demo-form-control",type:"date",value:t.date,onChange:l=>e({...t,date:l.target.value})})]})]}),h.jsxs("div",{className:"demo-form-row",children:[h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Module Interest"}),h.jsxs("select",{className:"demo-form-control demo-select",value:t.department,onChange:l=>e({...t,department:l.target.value}),children:[h.jsx("option",{children:"Complete Hospital Suite (All 18 Modules)"}),h.jsx("option",{children:"OPD & Electronic Health Records (EHR)"}),h.jsx("option",{children:"IPD & Nursing Station Care Desk"}),h.jsx("option",{children:"Laboratory (LIMS) & Machine Interfacing"}),h.jsx("option",{children:"Radiology Information System (RIS & PACS)"}),h.jsx("option",{children:"Billing Cash Counter & Tally Sync"})]})]}),h.jsxs("div",{className:"demo-input-group",children:[h.jsx("label",{className:"demo-form-label",children:"Bed Capacity"}),h.jsxs("select",{className:"demo-form-control demo-select",value:t.bedCount,onChange:l=>e({...t,bedCount:l.target.value}),children:[h.jsx("option",{children:"Clinic / Daycare (1-10 Beds)"}),h.jsx("option",{children:"Small Hospital (11-25 Beds)"}),h.jsx("option",{children:"Medium Hospital (26-50 Beds)"}),h.jsx("option",{children:"Large Hospital (51-100 Beds)"}),h.jsx("option",{children:"Multi-Speciality (100+ Beds)"})]})]})]}),h.jsxs("div",{className:"demo-input-group mb-3",children:[h.jsx("label",{className:"demo-form-label",children:"Specific Needs / Questions"}),h.jsx("input",{className:"demo-form-control",type:"text",placeholder:"e.g. NABH audit in 3 months, migrating from legacy desktop app...",value:t.message,onChange:l=>e({...t,message:l.target.value})})]}),h.jsx("button",{type:"submit",className:"demo-submit-btn-obsidian",disabled:r,children:r?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Scheduling Demo..."]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{children:"Confirm Demo Appointment"}),h.jsx("i",{className:"bi bi-calendar2-check ms-2"})]})})]})})]})})]})})}const ns=[{id:"out-patient",title:"Out Patient",subtitle:"Complete OPD Lifecycle Management",tag:"OPD Clinical Flow",icon:"bx-user-check",image:"/assets/img/workflow/out-patient2.png",description:"Connects patient registration, queue calling, physician EMR, investigations, and instant billing.",metrics:[{label:"Patient Turnaround",value:"< 4.5 Mins",icon:"bi-stopwatch"},{label:"Prescription Flow",value:"100% Digital",icon:"bi-file-earmark-medical"},{label:"Queue Latency",value:"Zero Delay",icon:"bi-lightning-charge"}],steps:["Patient Registration & UHID Token","Doctor Desk EMR & Clinical Vitals","E-Prescription & Investigation Orders","Automated Lab & Radiology Routing","Pharmacy Dispensing & POS Billing","Instant Receipt & Follow-up SMS"]},{id:"in-patient",title:"In Patient",subtitle:"Admission to Discharge Protocol",tag:"IPD Ward Operations",icon:"bx-bed",image:"/assets/img/workflow/in-patient.png",description:"Orchestrates ward admission, bed tariffs, treatment charts, nursing care, OT, and discharge billing.",metrics:[{label:"Admission Protocol",value:"< 90 Seconds",icon:"bi-speedometer2"},{label:"TPA Pre-Authorization",value:"Real-time Sync",icon:"bi-shield-check"},{label:"Discharge Clearance",value:"Instant Gate Pass",icon:"bi-door-open"}],steps:["IPD Desk Bed Allocation & Tariffs","Nursing Station Intake & Vitals Charting","Doctor Clinical Rounds & Medication Orders","OT Booking, Clearance & Surgery Execution","Cashless TPA Insurance Pre-Authorization","Summary Generation & Gate Pass Release"]},{id:"radiology",title:"Radiology",subtitle:"PACS & DICOM Modality Sync",tag:"Imaging & Diagnostics",icon:"bx-scan",image:"/assets/img/workflow/radiology.png",description:"Streamlines radiological requisitions, modality scanning, high-res film reviews, and digital EMR delivery.",metrics:[{label:"Modality Sync",value:"DICOM 3.0 / PACS",icon:"bi-broadcast"},{label:"Film Turnaround",value:"Instant Push",icon:"bi-cloud-arrow-up"},{label:"Diagnostic Loss",value:"0% Lossless",icon:"bi-check2-circle"}],steps:["Electronic Order from OPD/IPD Desk","Modality Slot Booking (CT, MRI, X-Ray)","Patient Scan Pushed to PACS Server","Radiologist Film Review & Reporting","Digital Signature Verification","Instant Dispatch to Doctor EMR & App"]},{id:"laboratory",title:"Laboratory",subtitle:"Automated Machine Interfacing",tag:"LIS & Analyzers",icon:"bx-vial",image:"/assets/img/workflow/laboratory.png",description:"Automates barcoding, analyzer machine data capture, panic value alerts, and verified report printing.",metrics:[{label:"LIS Interfacing",value:"Bi-directional",icon:"bi-arrow-left-right"},{label:"Panic Value Alert",value:"Instant EMR/SMS",icon:"bi-exclamation-triangle"},{label:"Sample Tracking",value:"Barcode UHID",icon:"bi-upc-scan"}],steps:["Barcode Specimen Label Generation","Phlebotomy Sample Collection","Auto-Analyzer Bi-directional Testing","Panic Value Alerts to Attending Doctor","Pathologist Historical Delta Review","Report Sign-off & WhatsApp Notification"]},{id:"accounting",title:"Accounting System Integration",subtitle:"Bi-directional Tally & Financial Governance",tag:"Tally & Finance",icon:"bx-calculator",image:"/assets/icon/HIMS Images Workflow (1).png",description:"Seamless financial synchronization between hospital counters and corporate accounting ledgers.",metrics:[{label:"Ledger Sync",value:"2-Way Tally Prime",icon:"bi-arrow-repeat"},{label:"Reconciliation Lag",value:"Zero Day Lag",icon:"bi-clock-history"},{label:"Audit Readiness",value:"GST & TDS Ready",icon:"bi-journal-check"}],steps:["Real-time Counter Cash Collection Sync","Automated Debtor Ledger for Corporate TPA","Vendor Purchase Vouchers & GRN Mapping","Multi-Account Bank Reconciliation (BRS)","Automated GST Return & Invoicing","Executive P&L and Balance Sheet Visibility"]},{id:"architecture",title:"Technical Architecture",subtitle:"High-Security Cloud Infrastructure",tag:"Cloud Infrastructure",icon:"bx-shield-quarter",image:"/assets/icon/HIMS Images Workflow.png",description:"Enterprise-grade multi-tier architecture built for 99.98% availability, encryption, and zero maintenance.",metrics:[{label:"System Availability",value:"99.98% SLA",icon:"bi-server"},{label:"Data Security",value:"AES-256 In-Transit",icon:"bi-lock"},{label:"Interoperability",value:"HL7 & FHIR",icon:"bi-link-45deg"}],steps:["Multi-tier Cloud & Microservices Core","Zero-Footprint Web Browser Deployment","Role-Based Access Control (RBAC)","End-to-End In-Transit & At-Rest Encryption","Automated Redundant Daily Cloud Backups","HL7 / FHIR Standards for Interoperability"]}];function h1({onOpenModal:t}){const[e,n]=De.useState(ns[0].id),[i,r]=De.useState(!1),s=ns.findIndex(o=>o.id===e),a=ns[s]||ns[0];return De.useEffect(()=>{if(!i)return;const o=l=>{l.key==="Escape"&&r(!1)};return window.addEventListener("keydown",o),document.body.style.overflow="hidden",window.__lenis&&window.__lenis.stop(),()=>{window.removeEventListener("keydown",o),document.body.style.overflow="",window.__lenis&&window.__lenis.start()}},[i]),h.jsxs("section",{id:"workflows",className:"workflows-cinematic-section",children:[h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"google-modules-header text-center mb-4",children:h.jsxs("h2",{className:"section-title-google",children:["HIMS ",h.jsx("span",{className:"text-gradient-gemini",children:"Work Flows"})]})}),h.jsxs("div",{className:"row g-4 align-items-stretch",children:[h.jsx("div",{className:"col-lg-4 col-md-5",children:h.jsx("div",{className:"workflow-tabs-stack",role:"tablist","aria-label":"Hospital Workflows",children:ns.map((o,l)=>{const c=e===o.id;return h.jsxs("div",{className:`workflow-tab-card ${c?"active":""}`,onClick:()=>n(o.id),role:"tab","aria-selected":c,tabIndex:0,onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),n(o.id))},title:`View ${o.title} flow`,children:[h.jsx("div",{className:"workflow-tab-active-bar","aria-hidden":"true"}),h.jsx("div",{className:"workflow-tab-icon-box","aria-hidden":"true",children:h.jsx("i",{className:`bx ${o.icon||"bx-layer"}`})}),h.jsxs("div",{className:"workflow-tab-text",children:[h.jsx("div",{className:"workflow-tab-title",children:o.title}),h.jsx("div",{className:"workflow-tab-sub",children:o.subtitle})]}),h.jsxs("div",{className:"workflow-tab-end","aria-hidden":"true",children:[h.jsxs("span",{className:"workflow-tab-index",children:["0",l+1]}),h.jsx("i",{className:"bi bi-chevron-right workflow-tab-arrow"})]})]},o.id)})})}),h.jsx("div",{className:"col-lg-8 col-md-7",children:h.jsxs("div",{className:"workflow-stage-card",children:[h.jsxs("div",{className:"workflow-card-top-bar",children:[h.jsxs("div",{className:"workflow-heading-wrap",children:[h.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[h.jsxs("span",{className:"workflow-counter-badge",children:["0",s+1," / 0",ns.length]}),h.jsx("span",{className:"workflow-blueprint-badge",children:"Architecture Blueprint"})]}),h.jsx("h3",{className:"workflow-card-heading",children:a.title}),h.jsx("p",{className:"workflow-card-desc",children:a.description})]}),h.jsxs("div",{className:"workflow-actions-wrap",children:[h.jsx("button",{type:"button",className:"workflow-zoom-action-btn",onClick:()=>r(!0),title:"Expand Fullscreen","aria-label":"Expand Diagram Fullscreen",children:h.jsx("i",{className:"bi bi-arrows-fullscreen"})}),h.jsxs("button",{type:"button",className:"workflow-walkthrough-btn",onClick:t,children:[h.jsx("span",{children:"Schedule Walkthrough"}),h.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),h.jsx("div",{className:"workflow-visual-stage",children:h.jsxs("div",{className:"workflow-visual-stage-inner",onClick:()=>r(!0),title:"Click to zoom architecture diagram in high resolution",role:"button",tabIndex:0,onKeyDown:o=>{o.key==="Enter"&&r(!0)},children:[h.jsx("img",{src:a.image,alt:`${a.title} Workflow Architecture Diagram`,className:"workflow-visual-img",loading:"lazy"}),h.jsxs("div",{className:"visual-zoom-overlay",children:[h.jsx("i",{className:"bi bi-arrows-angle-expand"}),h.jsx("span",{children:"Click to View Full Resolution"})]})]})})]})})]})]}),i&&h.jsx("div",{className:"workflow-lightbox-backdrop",onClick:()=>r(!1),role:"dialog","aria-modal":"true","aria-label":`${a.title} Architecture Diagram`,children:h.jsxs("div",{className:"workflow-lightbox-modal",onClick:o=>o.stopPropagation(),children:[h.jsxs("div",{className:"workflow-lightbox-header",children:[h.jsxs("div",{children:[h.jsxs("h3",{className:"workflow-lightbox-title",children:[a.title," Architecture Blueprint"]}),h.jsx("p",{className:"workflow-lightbox-sub",children:a.description})]}),h.jsx("button",{type:"button",className:"google-modal-close-btn",onClick:()=>r(!1),"aria-label":"Close Diagram",children:h.jsx("i",{className:"bi bi-x-lg"})})]}),h.jsx("div",{className:"workflow-lightbox-body",children:h.jsx("img",{src:a.image,alt:`${a.title} Full Architecture`,className:"workflow-lightbox-full-img"})}),h.jsxs("div",{className:"workflow-lightbox-footer",children:[h.jsxs("span",{className:"lightbox-flow-info",children:[h.jsxs("strong",{children:["Flow 0",s+1,":"]})," ",a.title]}),h.jsxs("button",{type:"button",className:"workflow-walkthrough-btn",onClick:()=>{r(!1),t&&t()},children:[h.jsx("span",{children:"Book Live Demonstration"}),h.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]})})]})}const lu=[{id:1,question:"Why choose TRIO HIMS over traditional software?",answer:"A modern, license-free hospital cloud that lowers total ownership cost, unifies departments, and scales effortlessly."},{id:2,question:"How do I book a live software walkthrough?",answer:"Pick a convenient slot in our demo scheduler or call +91 902 10 23456 for an immediate personalized session."},{id:3,question:"How is pricing calculated?",answer:"Transparent, flexible pricing tailored specifically to your bed capacity and selected modules."},{id:4,question:"Is staff and doctor training included?",answer:"Yes. We deliver role-based onboarding for doctors, nurses, billing, and lab staff with complete video manuals."},{id:5,question:"What technical support channels are available?",answer:"24/7 dedicated support via telephone, WhatsApp, email, and instant built-in remote desktop assistance."},{id:6,question:"Is specialized IT knowledge required to operate TRIO?",answer:"No. The interface is intuitive with zero learning curve, allowing medical staff to operate smoothly on day one."},{id:7,question:"What hardware and infrastructure is needed?",answer:"Standard computers, tablets, and local network. No expensive proprietary servers or complex setups required."},{id:8,question:"Can user roles and department access be customized?",answer:"Yes. Granular Role-Based Access Control (RBAC) with full audit trails and NABH-compliant access logs."},{id:9,question:"How is patient health data secured?",answer:"End-to-end encryption, automated multi-location backups, and strict compliance ensure 100% data safety."}];function p1(){const[t,e]=De.useState(1),n=o=>e(l=>l===o?null:o),i=Math.ceil(lu.length/2),r=lu.slice(0,i),s=lu.slice(i),a=o=>{const l=t===o.id;return h.jsxs("div",{className:`faq-acc-card ${l?"faq-acc-card--open":""}`,children:[h.jsxs("button",{className:"faq-acc-header",onClick:()=>n(o.id),"aria-expanded":l,children:[h.jsx("span",{className:"faq-acc-question",children:o.question}),h.jsx("span",{className:"faq-acc-icon-circle",children:h.jsx("i",{className:`bi ${l?"bi-dash":"bi-plus"}`})})]}),l&&h.jsx("div",{className:"faq-acc-body",children:h.jsx("p",{className:"faq-acc-answer",children:o.answer})})]},o.id)};return h.jsx("section",{id:"faq",className:"faq-cinematic-section",children:h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"google-modules-header text-center mb-4",children:h.jsxs("h2",{className:"section-title-google",children:["Frequently Asked ",h.jsx("span",{className:"text-gradient-gemini",children:"Questions"})]})}),h.jsxs("div",{className:"faq-two-cols-wrap",children:[h.jsx("div",{className:"faq-acc-column",children:r.map(a)}),h.jsx("div",{className:"faq-acc-column",children:s.map(a)})]})]})})}const cu=[{id:1,name:"Dr. Satish Patki",designation:"Patki Hospital & Research Foundation",location:"Kolhapur, Maharashtra",image:"/assets/img/testimonials/dr.satish.png",rating:5,quote:"TRIO HIMS has drastically simplified our operations and streamlined our patient workflows across departments. The reliability and responsiveness of their technical team is truly commendable."},{id:2,name:"Dr. Kawedia",designation:"Kawedia Hospital",location:"Maharashtra",image:"/assets/img/testimonials/dr.Kawedia.jpg",rating:5,quote:"Very intuitive and comprehensive solution. Outstanding clinical and inventory integration. It gives us absolute peace of mind regarding patient records and billing accuracy."},{id:3,name:"Dr. Ravindra Bhate",designation:"General Surgeon",location:"Pune, Maharashtra",image:"/assets/img/testimonials/dr.ravindrabhate.jpeg",rating:5,quote:"To make this software as suitable as possible for our benefit and our daily OPD use and in patient use. It brings exceptional ease to our surgical documentation and patient follow-ups."},{id:4,name:"Dr. Dhiraj Surana",designation:"Consulting Eye Surgeon",location:"Maharashtra",image:"/assets/img/testimonials/drsurana.webp",rating:5,quote:"I am very happy with the software, this is very user friendly. Even new clinic assistants pick it up within an hour. Excellent clinical speed."},{id:5,name:"Dr. Suhas Kulkarni",designation:"Senior Paediatrician",location:"Maharashtra",image:"/assets/img/testimonials/dr.suhas_kulkarni.webp",rating:5,quote:"I've tried many software and they were no so much use for me. Then I come to contact with TRIO team. They developed a personalised software for me which is very useful and it saves all the information which is required like all the past history, family history and more."},{id:6,name:"Dr. Shishir Jirge",designation:"General Surgeon",location:"Karnataka & Maharashtra",image:"/assets/img/testimonials/drjirge.webp",rating:5,quote:"The software is meant for the hospital and I recommend this software to all the doctors in my region or anywhere in India. The OT and ward flow is seamless."},{id:7,name:"Dr. Sachin Patil",designation:"Gynecologist & Obstetrician",location:"Maharashtra",image:"/assets/img/testimonials/sachin_patil.webp",rating:5,quote:"I'm able to see more number of patients in very less time, can send online messages, and get all the registers updated with the software. I recommend this to all other gynaecologist, It is must have software now-a-days."},{id:8,name:"Sunrise Hospital",designation:"Multi-Speciality Hospital",location:"Pune",image:"/assets/img/testimonials/sunriseHospital.webp",rating:5,quote:"Complete digital transformation for our multi-speciality facility. Zero revenue leakages, transparent insurance TPA billing, and seamless round-the-clock operations."}];function m1(){const[t,e]=De.useState(0),[n,i]=De.useState(!1),r=cu.length,s=c=>{n||c===t||(i(!0),setTimeout(()=>{e(c),i(!1)},220))},a=()=>s(t===0?r-1:t-1),o=()=>s(t===r-1?0:t+1);De.useEffect(()=>{const c=setInterval(o,7e3);return()=>clearInterval(c)},[t]);const l=cu[t];return h.jsx("section",{id:"testimonials",className:"testi-cinematic-section",children:h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"google-modules-header text-center mb-4",children:h.jsxs("h2",{className:"section-title-google",children:["Doctor ",h.jsx("span",{className:"text-gradient-gemini",children:"Testimonials"})]})}),h.jsxs("div",{className:"testi-showcase-wrapper",children:[h.jsxs("div",{className:"testi-spotlight-card",children:[h.jsxs("div",{className:"testi-card-top-bar",children:[h.jsxs("div",{className:"testi-meta-left",children:[h.jsx("div",{className:"testi-stars-row",children:[...Array(l.rating)].map((c,f)=>h.jsx("i",{className:"bi bi-star-fill text-warning"},f))}),h.jsxs("span",{className:"testi-verified-tag",children:[h.jsx("i",{className:"bi bi-patch-check-fill text-primary me-1"}),"Verified Hospital Partner"]})]}),h.jsxs("div",{className:"testi-nav-controls",children:[h.jsx("button",{className:"testi-nav-arrow-btn",onClick:a,title:"Previous Testimonial","aria-label":"Previous Testimonial",children:h.jsx("i",{className:"bi bi-chevron-left"})}),h.jsxs("span",{className:"testi-counter-badge",children:[h.jsx("strong",{children:String(t+1).padStart(2,"0")})," / ",String(r).padStart(2,"0")]}),h.jsx("button",{className:"testi-nav-arrow-btn",onClick:o,title:"Next Testimonial","aria-label":"Next Testimonial",children:h.jsx("i",{className:"bi bi-chevron-right"})})]})]}),h.jsxs("div",{className:`testi-quote-body ${n?"testi-fade-out":"testi-fade-in"}`,children:[h.jsx("div",{className:"testi-quote-mark",children:h.jsx("i",{className:"bi bi-quote"})}),h.jsxs("blockquote",{className:"testi-quote-content",children:["“",l.quote,"”"]})]}),h.jsxs("div",{className:`testi-doctor-bar ${n?"testi-fade-out":"testi-fade-in"}`,children:[h.jsx("div",{className:"testi-avatar-wrapper",children:h.jsx("img",{src:l.image,alt:l.name,className:"testi-avatar-img",onError:c=>{c.target.src="/assets/img/testimonials/dr.satish.png"}})}),h.jsxs("div",{className:"testi-doctor-details",children:[h.jsx("div",{className:"testi-doctor-name",children:l.name}),h.jsx("div",{className:"testi-doctor-role",children:l.designation}),h.jsxs("div",{className:"testi-doctor-location",children:[h.jsx("i",{className:"bi bi-geo-alt-fill text-muted me-1"}),l.location]})]})]})]}),h.jsx("div",{className:"testi-doctor-dock",children:cu.map((c,f)=>{const p=f===t;return h.jsxs("button",{className:`testi-dock-pill ${p?"active":""}`,onClick:()=>s(f),title:c.name,children:[h.jsx("img",{src:c.image,alt:c.name,className:"testi-dock-avatar",onError:u=>{u.target.src="/assets/img/testimonials/dr.satish.png"}}),h.jsx("span",{className:"testi-dock-name",children:c.name.replace("Hospital","Hosp.")})]},c.id)})})]})]})})}function g1(){const[t,e]=De.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,i]=De.useState(!1),[r,s]=De.useState(!1),a=o=>{o.preventDefault(),s(!0),setTimeout(()=>{s(!1),i(!0);try{ih({particleCount:50,spread:60,origin:{y:.7}})}catch{}},500)};return h.jsx("section",{id:"contact",className:"section-padding section-bg-subtle",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"section-header-google",children:[h.jsxs("div",{className:"section-pill-badge",children:[h.jsx("i",{className:"bi bi-geo-alt-fill"}),h.jsx("span",{children:"Headquarters"})]}),h.jsxs("h2",{className:"section-title-google",children:["Get in ",h.jsx("span",{className:"text-gradient-gemini",children:"Touch"})]}),h.jsx("p",{className:"section-desc-google",children:"Connect with our healthcare technology specialists to discuss your hospital requirements."})]}),h.jsxs("div",{className:"row g-4 justify-content-center",children:[h.jsx("div",{className:"col-lg-4",children:h.jsxs("div",{className:"d-flex flex-column gap-3",children:[h.jsxs("div",{className:"bento-box p-4",children:[h.jsx("span",{className:"bento-tag",children:"Corporate Office"}),h.jsx("h5",{className:"fs-6 fw-bold mb-1",children:"Pune Headquarters"}),h.jsx("p",{className:"text-secondary fs-7 mb-0",children:"Dhruta Complex, Office 104 & 105, Narayan Peth, Pune, Maharashtra."})]}),h.jsxs("div",{className:"bento-box p-4",children:[h.jsx("span",{className:"bento-tag",children:"Electronic Mail"}),h.jsx("h5",{className:"fs-6 fw-bold mb-1",children:"Direct Inquiries"}),h.jsx("p",{className:"text-secondary fs-7 mb-0",children:h.jsx("a",{href:"mailto:info@triocorporation.in",children:"info@triocorporation.in"})})]}),h.jsxs("div",{className:"bento-box p-4",children:[h.jsx("span",{className:"bento-tag",children:"Telephony"}),h.jsx("h5",{className:"fs-6 fw-bold mb-1",children:"Direct Helpline"}),h.jsx("p",{className:"text-secondary fs-7 mb-0",children:h.jsx("a",{href:"tel:+919021023456",children:"+91 9021 023 456"})})]})]})}),h.jsx("div",{className:"col-lg-7",children:h.jsx("div",{className:"bento-box h-100 p-4 p-md-5",children:n?h.jsxs("div",{className:"text-center py-5",children:[h.jsx("i",{className:"bi bi-check-circle-fill text-success fs-1 mb-2 d-block"}),h.jsx("h4",{className:"fs-5 fw-bold text-success mb-2",children:"Message Sent Successfully!"}),h.jsxs("p",{className:"text-secondary fs-7",children:["Thank you, ",h.jsx("strong",{children:t.name}),". Our team will get back to you shortly."]}),h.jsx("button",{type:"button",className:"btn btn-outline-primary rounded-pill px-4 fs-7 mt-3",onClick:()=>{i(!1),e({name:"",email:"",phone:"",subject:"",message:""})},children:"Send Another Message"})]}):h.jsxs("form",{onSubmit:a,children:[h.jsx("h4",{className:"fs-6 fw-bold text-main mb-3",children:"Send a Message"}),h.jsxs("div",{className:"row g-3",children:[h.jsxs("div",{className:"col-md-6",children:[h.jsx("label",{className:"material-label",children:"Full Name *"}),h.jsx("input",{type:"text",className:"material-input",placeholder:"Dr. / Mr. Name",required:!0,value:t.name,onChange:o=>e({...t,name:o.target.value})})]}),h.jsxs("div",{className:"col-md-6",children:[h.jsx("label",{className:"material-label",children:"Email Address *"}),h.jsx("input",{type:"email",className:"material-input",placeholder:"doctor@hospital.org",required:!0,value:t.email,onChange:o=>e({...t,email:o.target.value})})]}),h.jsxs("div",{className:"col-md-6",children:[h.jsx("label",{className:"material-label",children:"Phone Number"}),h.jsx("input",{type:"tel",className:"material-input",placeholder:"+91 98765 43210",value:t.phone,onChange:o=>e({...t,phone:o.target.value})})]}),h.jsxs("div",{className:"col-md-6",children:[h.jsx("label",{className:"material-label",children:"Subject *"}),h.jsx("input",{type:"text",className:"material-input",placeholder:"Hospital Software Quote",required:!0,value:t.subject,onChange:o=>e({...t,subject:o.target.value})})]}),h.jsxs("div",{className:"col-12",children:[h.jsx("label",{className:"material-label",children:"Message *"}),h.jsx("textarea",{className:"material-input",rows:"3",placeholder:"Tell us about your hospital setup...",required:!0,value:t.message,onChange:o=>e({...t,message:o.target.value})})]}),h.jsx("div",{className:"col-12 text-end mt-3",children:h.jsx("button",{type:"submit",className:"btn-google-pill",disabled:r,children:r?"Sending...":"Send Message"})})]})]})})})]})]})})}function v1({onOpenModal:t}){const[e,n]=De.useState(""),[i,r]=De.useState(!1),s=o=>{o.preventDefault(),e&&r(!0)},a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsx("footer",{id:"footer",className:"footer-refined",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row g-4 mb-5",children:[h.jsxs("div",{className:"col-lg-4 col-md-6",children:[h.jsx("img",{src:"/assets/img/trio-logo.png",alt:"TRIO Corporation Pvt. Ltd.",className:"trio-header-logo mb-3"}),h.jsx("p",{className:"text-secondary fs-7 leading-relaxed pe-lg-4",children:"TRIO HIMS is a reliable hospital management system engineered to automate healthcare operations with clinical precision and zero revenue leakage."}),h.jsxs("div",{className:"d-flex gap-2 mt-4",children:[h.jsx("a",{href:"https://twitter.com/CorporationTrio",target:"_blank",rel:"noreferrer",className:"footer-icon-circle",title:"Twitter",children:h.jsx("i",{className:"bi bi-twitter"})}),h.jsx("a",{href:"https://www.facebook.com/trioindia",target:"_blank",rel:"noreferrer",className:"footer-icon-circle",title:"Facebook",children:h.jsx("i",{className:"bi bi-facebook"})}),h.jsx("a",{href:"https://www.instagram.com/triocorporationitservices/",target:"_blank",rel:"noreferrer",className:"footer-icon-circle",title:"Instagram",children:h.jsx("i",{className:"bi bi-instagram"})}),h.jsx("a",{href:"https://www.linkedin.com/company/trio-corporation-pvt-ltd-/",target:"_blank",rel:"noreferrer",className:"footer-icon-circle",title:"LinkedIn",children:h.jsx("i",{className:"bi bi-linkedin"})}),h.jsx("a",{href:"https://www.youtube.com/@triocorporation2512",target:"_blank",rel:"noreferrer",className:"footer-icon-circle",title:"YouTube",children:h.jsx("i",{className:"bi bi-youtube"})})]})]}),h.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[h.jsx("h6",{children:"Navigation"}),h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx("a",{href:"#hero",children:"Home"})}),h.jsx("li",{children:h.jsx("a",{href:"#why-us",children:"Why Us"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"18 Modules"})}),h.jsx("li",{children:h.jsx("a",{href:"#workflows",children:"Workflows"})}),h.jsx("li",{children:h.jsx("a",{href:"#testimonials",children:"Testimonials"})}),h.jsx("li",{children:h.jsx("a",{href:"#contact",children:"Contact"})})]})]}),h.jsxs("div",{className:"col-lg-3 col-md-6 col-6",children:[h.jsx("h6",{children:"Core Modules"}),h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"RADT (Patient Intake)"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"Billing Cash Counter"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"EMR & Doctor Desk"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"LIS Pathology & Analyzers"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"RIS Radiology & PACS"})}),h.jsx("li",{children:h.jsx("a",{href:"#modules",children:"OT & Surgery Management"})})]})]}),h.jsxs("div",{className:"col-lg-3 col-md-6",children:[h.jsx("h6",{className:"text-primary fw-bold fs-7",children:"Product Demo"}),h.jsx("p",{className:"text-secondary fs-7 mb-3",children:"Request a free tailored consultation for your hospital's specific specialty needs."}),h.jsx("button",{type:"button",className:"btn-google-pill w-100 justify-content-center mb-3",onClick:t,children:h.jsx("span",{children:"Schedule Live Demo"})}),i?h.jsxs("span",{className:"text-success fs-8",children:[h.jsx("i",{className:"bi bi-check-circle me-1"})," Subscribed!"]}):h.jsxs("form",{onSubmit:s,className:"d-flex gap-2",children:[h.jsx("input",{type:"email",className:"material-input py-1 px-3 fs-8",placeholder:"Enter work email",required:!0,value:e,onChange:o=>n(o.target.value)}),h.jsx("button",{type:"submit",className:"btn btn-sm btn-outline-primary rounded-pill px-3 fs-8",children:"Join"})]})]})]}),h.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center pt-4 border-top border-light fs-8 text-secondary",children:[h.jsxs("p",{className:"mb-0",children:["© ",new Date().getFullYear()," ",h.jsx("strong",{children:"TRIO Corporation Pvt. Ltd."})," All Rights Reserved. Built with React & Vite."]}),h.jsxs("div",{className:"d-flex align-items-center gap-3",children:[h.jsx("span",{children:"ISO 9001:2015 Healthcare IT Certified"}),h.jsx("button",{type:"button",className:"footer-icon-circle cursor-pointer",onClick:a,title:"Return to top",children:h.jsx("i",{className:"bi bi-arrow-up"})})]})]})]})})}function _1({isOpen:t,onClose:e}){const[n,i]=De.useState({name:"",email:"",phone:"",message:""}),[r,s]=De.useState(!1),[a,o]=De.useState(!1);if(!t)return null;const l=f=>{f.preventDefault(),o(!0),setTimeout(()=>{o(!1),s(!0);try{ih({particleCount:70,spread:70,origin:{y:.5}})}catch{}},550)},c=()=>{s(!1),e()};return h.jsx("div",{className:"modal-overlay",onClick:c,children:h.jsxs("div",{className:"modal-dialog-box",onClick:f=>f.stopPropagation(),children:[h.jsxs("div",{className:"modal-header-google",children:[h.jsxs("div",{className:"modal-title-wrap",children:[h.jsx("div",{className:"modal-header-icon-badge",children:h.jsx("i",{className:"bi bi-calendar2-check"})}),h.jsxs("div",{children:[h.jsx("h4",{className:"modal-title-main",children:"Request a Live Demo"}),h.jsx("p",{className:"modal-subtitle-text",children:"See TRIO HIMS in action with a tailored hospital walkthrough"})]})]}),h.jsx("button",{type:"button",className:"modal-close-btn",onClick:c,title:"Close dialog","aria-label":"Close dialog",children:h.jsx("i",{className:"bi bi-x-lg"})})]}),r?h.jsx("div",{className:"modal-body-google",children:h.jsxs("div",{className:"text-center py-4",children:[h.jsx("div",{className:"modal-success-icon-wrap mb-3",children:h.jsx("i",{className:"bi bi-check-lg"})}),h.jsx("h4",{className:"fs-5 fw-bold text-main mb-1",children:"Demo Request Received!"}),h.jsxs("p",{className:"text-secondary fs-7 mb-4 px-2",children:["Thank you, ",h.jsx("strong",{children:n.name}),". Our hospital solutions specialist will contact you at ",h.jsx("strong",{children:n.phone})," shortly to confirm your scheduled walkthrough."]}),h.jsxs("button",{type:"button",className:"btn-modal-submit mx-auto",onClick:c,children:[h.jsx("i",{className:"bi bi-check2"}),h.jsx("span",{children:"Done"})]})]})}):h.jsxs("form",{onSubmit:l,className:"modal-form-layout",children:[h.jsxs("div",{className:"modal-body-google",children:[h.jsx("div",{className:"modal-banner-card",children:h.jsx("img",{src:"/assets/img/modal_image_1.png",alt:"THE COMPLETE HOSPITAL MANAGEMENT SOFTWARE - TRIO Corporation",className:"modal-banner-img"})}),h.jsxs("div",{className:"row g-2",children:[h.jsx("div",{className:"col-6",children:h.jsxs("div",{className:"google-field-group",children:[h.jsxs("label",{className:"google-field-label",children:["Your Name ",h.jsx("span",{className:"text-danger",children:"*"})]}),h.jsxs("div",{className:"google-input-box",children:[h.jsx("i",{className:"bi bi-person google-input-icon"}),h.jsx("input",{type:"text",className:"google-text-input",placeholder:"Dr. / Mr. Name",required:!0,value:n.name,onChange:f=>i({...n,name:f.target.value})})]})]})}),h.jsx("div",{className:"col-6",children:h.jsxs("div",{className:"google-field-group",children:[h.jsxs("label",{className:"google-field-label",children:["Your Email ",h.jsx("span",{className:"text-danger",children:"*"})]}),h.jsxs("div",{className:"google-input-box",children:[h.jsx("i",{className:"bi bi-envelope google-input-icon"}),h.jsx("input",{type:"email",className:"google-text-input",placeholder:"doctor@hospital.org",required:!0,value:n.email,onChange:f=>i({...n,email:f.target.value})})]})]})}),h.jsx("div",{className:"col-6",children:h.jsxs("div",{className:"google-field-group",children:[h.jsxs("label",{className:"google-field-label",children:["Your Phone ",h.jsx("span",{className:"text-danger",children:"*"})]}),h.jsxs("div",{className:"google-input-box",children:[h.jsx("i",{className:"bi bi-telephone google-input-icon"}),h.jsx("input",{type:"tel",className:"google-text-input",placeholder:"10-digit mobile number",pattern:"[1-9]{1}[0-9]{9}",required:!0,value:n.phone,onChange:f=>i({...n,phone:f.target.value})})]})]})}),h.jsx("div",{className:"col-6",children:h.jsxs("div",{className:"google-field-group",children:[h.jsx("label",{className:"google-field-label",children:"Hospital Notes / Requirements"}),h.jsxs("div",{className:"google-input-box",children:[h.jsx("i",{className:"bi bi-building google-input-icon"}),h.jsx("input",{type:"text",className:"google-text-input",placeholder:"Bed capacity, modules needed...",value:n.message,onChange:f=>i({...n,message:f.target.value})})]})]})})]})]}),h.jsxs("div",{className:"modal-footer-google",children:[h.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:c,children:"Cancel"}),h.jsxs("button",{type:"submit",className:"btn-modal-submit",disabled:a,children:[h.jsx("span",{className:"btn-shimmer-sweep"}),a?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"spinner-border spinner-border-sm me-1",role:"status"}),h.jsx("span",{children:"Scheduling..."})]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{children:"Submit Request"}),h.jsx("i",{className:"bi bi-arrow-right"})]})]})]})]})]})})}function x1(){return h.jsx("div",{className:"whatsapp-corner",children:h.jsx("a",{href:"https://wa.me/918380055452",target:"_blank",rel:"noreferrer",title:"Direct Chat on WhatsApp",children:h.jsx("img",{src:"/assets/icon/icons8-whatsapp.gif",alt:"WhatsApp Chat"})})})}function S1(){const[t,e]=De.useState(!1),[n,i]=De.useState(!1);return De.useEffect(()=>{const r=new yS({duration:1.15,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.2,infinite:!1});window.__lenis=r;let s;function a(l){r.raf(l),s=requestAnimationFrame(a)}s=requestAnimationFrame(a);const o=()=>{const l=document.querySelector(".hero-line-intelligence")||document.querySelector(".hero-left-mid-block"),c=document.querySelector(".stats-strip-white")||document.getElementById("counts");if(l&&c){const f=l.getBoundingClientRect(),p=c.getBoundingClientRect();i(u=>u?p.top<=f.bottom+45||f.bottom<=85:p.top<=f.bottom+25||f.bottom<=72)}else{const f=window.innerHeight*.5+30;i(window.scrollY>=f)}};return r.on("scroll",o),window.addEventListener("resize",o,{passive:!0}),o(),()=>{cancelAnimationFrame(s),r.destroy(),window.__lenis=null,window.removeEventListener("resize",o)}},[]),De.useEffect(()=>{window.__lenis&&(t?window.__lenis.stop():window.__lenis.start())},[t]),h.jsxs("div",{className:"trio-app-root",children:[h.jsx(MS,{scrolled:n,onOpenModal:()=>e(!0)}),h.jsxs("main",{id:"main",children:[h.jsx(r1,{scrolled:n,onOpenModal:()=>e(!0)}),h.jsx(o1,{}),h.jsx(c1,{}),h.jsx(u1,{onOpenModal:()=>e(!0)}),h.jsx(h1,{onOpenModal:()=>e(!0)}),h.jsx(f1,{}),h.jsx(m1,{}),h.jsx(p1,{}),h.jsx(g1,{})]}),h.jsx(v1,{onOpenModal:()=>e(!0)}),h.jsx(_1,{isOpen:t,onClose:()=>e(!1)}),h.jsx(x1,{})]})}uu.createRoot(document.getElementById("root")).render(h.jsx(t_.StrictMode,{children:h.jsx(S1,{})}));
