import{r as v,j as we,h as Pe}from"./jsx-runtime.d96912fc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function O(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(r){return typeof r}:O=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(e)}function xe(e){return Ie(e)||Re(e)||Te(e)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(e,t){if(!!e){if(typeof e=="string")return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(r);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}}function Re(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function Ie(e){if(Array.isArray(e))return j(e)}function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e){return e.filter(function(t,r){return e.lastIndexOf(t)===r})}function fe(e){for(var t=0,r=arguments.length<=1?0:arguments.length-1;t<r;++t){var n=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];for(var a in n){var o=n[a],i=e[a];if(i&&o){if(Array.isArray(i)){e[a]=B(i.concat(o));continue}if(Array.isArray(o)){e[a]=B([i].concat(xe(o)));continue}if(O(o)==="object"){e[a]=fe({},i,o);continue}}e[a]=o}}return e}var Ne=/-([a-z])/g,je=/^Ms/g,T={};function Ee(e){return e[1].toUpperCase()}function $e(e){if(T.hasOwnProperty(e))return T[e];var t=e.replace(Ne,Ee).replace(je,"ms");return T[e]=t,t}var ke=/[A-Z]/g,Fe=/^ms-/,R={};function Me(e){return"-"+e.toLowerCase()}function De(e){if(R.hasOwnProperty(e))return R[e];var t=e.replace(ke,Me);return R[e]=Fe.test(t)?"-"+t:t}function Ue(e){return De(e)}function se(e,t){return Ue(e)+":"+t}function H(e){var t="";for(var r in e){var n=e[r];typeof n!="string"&&typeof n!="number"||(t&&(t+=";"),t+=se(r,n))}return t}function _(e,t){for(var r=0,n=e.length;r<n;++r)t(e[r],r,n,e)}function ze(e,t){for(var r=[],n=0,a=e.length;n<a;++n){var o=e[n];t(o,n,a,e)&&r.push(o)}return r}function h(e,t,r){for(var n=0,a=e.length;n<a;++n)r=t(r,e[n],n,a,e);return r}function Q(e,t){for(var r in e)t(e[r],r,e)}function qe(e,t,r){for(var n in e)r=t(r,e[n],n,e);return r}/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Le=function(t){return t!=null&&typeof t=="object"&&Array.isArray(t)===!1};const Ke=Le;function ce(e,t){return"".concat(e,"{").concat(t,"}")}function le(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return e.length===0||t.length===0?0:e.indexOf(e.find(function(r){return t.match(r)!==null}))+1}var b="RULE",S="KEYFRAME",Y="FONT",x="STATIC",pe="CLEAR";function We(e,t){return"@supports ".concat(e,"{").concat(t,"}")}function G(e,t){return e.length===0?t:"".concat(e," and ").concat(t)}function me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=".".concat(e).repeat(n);return"".concat(r).concat(a).concat(t)}function He(e){return e.substr(0,6)==="@media"}var Qe=/^(:|\[|>|&)/;function Ye(e){return Qe.test(e)}function Xe(e){return e.substr(0,9)==="@supports"}var Be=/undefined|null/,Ge=/url/;function Je(e){return e==null||typeof e=="string"&&Be.test(e)&&!Ge.test(e)}function Ze(e){return e.charAt(0)==="&"?e.substr(1):e}function E(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:e.plugins;return a.length>0?h(a,function(o,i){return i(o,r,e,n)},t):t}function $(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"";return a+n+r+e+t}function Ve(e){return"@font-face{".concat(H(e),"}")}function de(e){return qe(e,function(t,r,n){return"".concat(t).concat(n,"{").concat(H(r),"}")},"")}function et(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[""],n=arguments.length>3?arguments[3]:void 0,a=n||de(e);return h(r,function(o,i){return"".concat(o,"@").concat(i,"keyframes ").concat(t,"{").concat(a,"}")},"")}function tt(e){return e.replace(/\s{2,}/g,"")}function rt(e,t,r){if(typeof e=="string")return tt(e);var n=E(t,e,x,r);return H(n)}function nt(e){return"k"+e}var k="abcdefghijklmnopqrstuvwxyz",I=k.length;function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return e<=I?k[e-1]+t:ye(e/I|0,k[e%I]+t)}function ge(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},r=e(),n=ye(r);return t(n)?n:ge(e,t)}function ve(e){return e.substr(0,5)==="data:"}function J(e){return ve(e)?e:"'".concat(e,"'")}var Z={".woff":"woff",".woff2":"woff2",".eot":"embedded-opentype",".ttf":"truetype",".otf":"opentype",".svg":"svg",".svgz":"svg"},V={"image/svg+xml":"svg","application/x-font-woff":"woff","application/font-woff":"woff","application/x-font-woff2":"woff2","application/font-woff2":"woff2","font/woff2":"woff2","application/octet-stream":"truetype","application/x-font-ttf":"truetype","application/x-font-truetype":"truetype","application/x-font-opentype":"opentype","application/vnd.ms-fontobject":"embedded-opentype","application/font-sfnt":"sfnt"};function at(e){if(ve(e)){for(var t="",r=5;;r++){var n=e.charAt(r);if(n===";"||n===",")break;t+=n}var a=V[t];if(a)return a;console.warn("A invalid base64 font was used. Please use one of the following mime type: ".concat(Object.keys(V).join(", "),"."))}else{for(var o="",i=e.length-1;;i--){var f=e.charAt(i);if(f==="."){var u=e.slice(i,e.length);o=u.includes("?")?u.split("?",1)[0]:u;break}}var s=Z[o];if(s)return s;console.warn('A invalid font-format was used in "'.concat(e,'". Use one of these: ').concat(Object.keys(Z).join(", "),"."))}return""}function ot(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=h(t,function(o,i,f){var u=f>0?",":"",s=J(i);return"".concat(o).concat(u,"local(").concat(s,")")},""),n=h(e,function(o,i,f){var u=f>0?",":"",s=at(i),c=J(i);return"".concat(o).concat(u,"url(").concat(c,") format('").concat(s,"')")},""),a=r.length>0&&n.length>0?",":"";return"".concat(r).concat(a).concat(n)}function it(e,t){return typeof e=="string"?e:t?t+JSON.stringify(e):""}function ut(e){return typeof e=="string"?[e]:Array.isArray(e)?e.slice():[]}function ft(e){return e.indexOf("ad")===-1}function st(e){return e.charAt(0)==='"'?e:'"'.concat(e,'"')}var ct=/^[a-z_][a-z0-9-_]*$/gi;function lt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.length>0&&e.match(ct)===null&&console.error("An invalid selectorPrefix (".concat(e,`) has been used to create a new Fela renderer.
It must only contain a-Z, 0-9, - and _ while it must start with either _ or a-Z.
See http://fela.js.org/docs/advanced/RendererConfiguration.html`)),e}function pt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return function(r,n){return e.indexOf(n)===-1?e.indexOf(r)===-1?0:-1:e.indexOf(r)===-1?1:e.indexOf(r)-e.indexOf(n)}}function mt(e){if(e._className){var t=e._className+" ";return delete e._className,t}return""}var dt=["localAlias"];function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(r),!0).forEach(function(n){yt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gt(e,t){if(e==null)return{};var r=vt(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function vt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ht(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t={listeners:[],keyframePrefixes:e.keyframePrefixes||["-webkit-","-moz-"],plugins:e.plugins||[],sortMediaQuery:e.sortMediaQuery||pt(e.mediaQueryOrder),supportQueryOrder:e.supportQueryOrder||[],styleNodeAttributes:e.styleNodeAttributes||{},propertyPriority:e.propertyPriority||{},ruleOrder:[/^:link/,/^:visited/,/^:hover/,/^:focus-within/,/^:focus/,/^:active/],selectorPrefix:lt(e.selectorPrefix),specificityPrefix:e.specificityPrefix||"",filterClassName:e.filterClassName||ft,devMode:e.devMode||!1,uniqueRuleIdentifier:0,uniqueKeyframeIdentifier:0,nodes:{},scoreIndex:{},cache:{},getNextRuleIdentifier:function(){return++t.uniqueRuleIdentifier},getNextKeyframeIdentifier:function(){return++t.uniqueKeyframeIdentifier},renderRule:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t._renderStyle(n(a,t),a)},renderKeyframe:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n(a,t),i=E(t,o,S,a),f=de(i);if(!t.cache.hasOwnProperty(f)){var u=t.selectorPrefix+t.generateAnimationName(a),s=et(i,u,t.keyframePrefixes,f),c={type:S,keyframe:s,name:u};t.cache[f]=c,t._emitChange(c)}return t.cache[f].name},generateAnimationName:function(n){return nt(t.getNextKeyframeIdentifier())},renderFont:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.localAlias,f=gt(o,dt),u=n+JSON.stringify(o),s=ut(i);if(!t.cache.hasOwnProperty(u)){var c=st(n),l=te(te({},f),{},{src:ot(a,s),fontFamily:c}),m=Ve(l),d={type:Y,fontFace:m,fontFamily:c};t.cache[u]=d,t._emitChange(d)}return t.cache[u].fontFamily},renderStatic:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=it(n,a);if(!t.cache.hasOwnProperty(i)){var f=rt(n,t,o),u={type:x,css:f,selector:a};t.cache[i]=u,t._emitChange(u)}},subscribe:function(n){return t.listeners.push(n),{unsubscribe:function(){return t.listeners.splice(t.listeners.indexOf(n),1)}}},clear:function(){t.uniqueRuleIdentifier=0,t.uniqueKeyframeIdentifier=0,t.cache={},t._emitChange({type:pe})},_renderStyle:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=mt(n),i=E(t,n,b,a,t.unoptimizedPlugins||t.plugins);return o+t._renderStyleToClassNames(i).substr(1)},_renderStyleToClassNames:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",f="";for(var u in n){var s=n[u];if(Ke(s))if(Ye(u))f+=t._renderStyleToClassNames(s,a+Ze(u),o,i);else if(He(u)){var c=G(o,u.slice(6).trim());f+=t._renderStyleToClassNames(s,a,c,i)}else if(Xe(u)){var l=G(i,u.slice(9).trim());f+=t._renderStyleToClassNames(s,a,o,l)}else console.warn('The object key "'.concat(u,`" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`));else{var m=$(u,s,a,o,i);if(t.cacheMap){if(!t.cacheMap.hasOwnProperty(m)){var d={property:u,value:s,pseudo:a,media:o,support:i},p=h(t.optimizedPlugins,function(A,C){return C(A,t)},d),y=$(p.property,p.value,p.pseudo,p.media,p.support);t.cache.hasOwnProperty(y)||t._renderStyleToCache(y,p.property,p.value,p.pseudo,p.media,p.support),t.cacheMap[m]=y}m=t.cacheMap[m]}t.cache.hasOwnProperty(m)||t._renderStyleToCache(m,u,s,a,o,i);var g=t.cache[m].className;g&&(f+=" "+g)}}return f},_renderStyleToCache:function(n,a,o,i,f,u){if(Je(o)){t.cache[n]={className:""};return}var s=t.selectorPrefix+t.generateClassName(a,o,i,f,u),c=se(a,o),l=me(s,i,e.specificityPrefix,t.propertyPriority[a]),m={type:b,className:s,selector:l,declaration:c,pseudo:i,media:f,support:u};t.cache[n]=m,t._emitChange(m)},generateClassName:function(n,a,o,i,f){return ge(t.getNextRuleIdentifier,t.filterClassName)},_emitChange:function(n){_(t.listeners,function(a){return a(n)})}};return t.keyframePrefixes.push(""),t.optimizedPlugins=h(t.plugins,function(r,n){return n.optimized&&r.push(n.optimized),r},[]),t.optimizedPlugins.length>0&&(t.cacheMap={},t.unoptimizedPlugins=ze(t.plugins,function(r){return!r.optimized})),e.enhancers&&_(e.enhancers,function(r){t=r(t)}),t}function bt(e){return _t(e)||Ot(e)||At(e)||St()}function St(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(e,t){if(!!e){if(typeof e=="string")return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}}function Ot(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return F(e)}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t,r){return Array.isArray(e)?M(he.apply(void 0,bt(e)),t,r):typeof e=="function"?e(t,r):e}function he(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===1?function(n,a){return M(t[0],n,a)}:function(n,a){return h(t,function(o,i){var f=M(i,n,a);return f&&o._className&&(f._className=o._className+(f._className?" "+f._className:"")),fe(o,f)},{})}}function wt(e){var t=e.type,r=e.media,n=e.support,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,o=r?'[media="'.concat(r,'"]'):":not([media])",i=n?'[data-fela-support="true"]':':not([data-fela-support="true"])';return a.querySelector('[data-fela-type="'.concat(t,'"]').concat(i).concat(o))}function Pt(e){return Rt(e)||Tt(e)||Ct(e)||xt()}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(e,t){if(!!e){if(typeof e=="string")return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}}function Tt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rt(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function It(e,t,r){var n=t.type,a=t.media,o=t.support;switch(n){case Y:case x:case S:return e[0];case b:var i=e.map(function(p){return p.media}),f=i.filter(function(p){return p.length!==0});if(a){var u=[].concat(Pt(f),[a]).sort(r),s=u.indexOf(a)+1,c=u[s];if(c)return c===a&&o?e.find(function(p){return p.media===u[u.indexOf(a)+2]}):e.find(function(p){return p.media===c})}else{var l=f.sort(r),m=l[0];if(!o){var d=e.find(function(p){return p.getAttribute("data-fela-support")!==void 0&&p.media===""&&p.getAttribute("data-fela-type")==="RULE"});if(d)return d}if(m)return e.find(function(p){return p.media===m})}}}function Nt(e){return kt(e)||$t(e)||Et(e)||jt()}function jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,t){if(!!e){if(typeof e=="string")return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}}function $t(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,a=t.head||{},o=e.type,i=e.media,f=e.support,u=t.createElement("style");u.setAttribute("data-fela-type",o),u.type="text/css",f&&u.setAttribute("data-fela-support","true"),i&&(u.media=i);for(var s in n)u.setAttribute(s,n[s]);if((typeof window>"u"?"undefined":z(window))!==void 0&&window.FelaConfig)for(var c in window.FelaConfig.styleNodeAttributes)u.setAttribute(c,window.FelaConfig.styleNodeAttributes[c]);var l=a.querySelectorAll("[data-fela-type]"),m=It(Nt(l),e,r);return m?a.insertBefore(u,m):a.appendChild(u),u}function Mt(e){var t=e.type,r=e.media,n=r===void 0?"":r,a=e.support,o=a===void 0?"":a;return t+n+o}function Dt(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,n=Mt(e);if(!t.nodes[n]){var a=wt(e,r)||Ft(e,r,t.sortMediaQuery,t.styleNodeAttributes);t.nodes[n]=a}return t.nodes[n]}function Ut(e,t,r){var n=e.selector,a=e.declaration,o=e.support,i=e.media,f=e.pseudo,u=i+o;try{var s=le(t.ruleOrder,f),c=r.sheet.cssRules,l=c.length;if(s===0)t.scoreIndex[u]===void 0?l=0:l=t.scoreIndex[u]+1;else for(var m=t.scoreIndex[u]||0,d=m,p=c.length;d<p;++d)if(c[d].score>s){l=d;break}var y=ce(n,a);if(o.length>0){var g=We(o,y);r.sheet.insertRule(g,l)}else r.sheet.insertRule(y,l);s===0&&(t.scoreIndex[u]=l),c[l].score=s}catch{}}function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;return function(r){if(r.type===pe){Q(e.nodes,function(o){return o.parentNode.removeChild(o)}),e.nodes={},e.scoreIndex={};return}var n=Dt(r,e,t);switch(r.type){case S:n.textContent.indexOf(r.keyframe)===-1&&(n.textContent+=r.keyframe);break;case Y:n.textContent.indexOf(r.fontFace)===-1&&(n.textContent+=r.fontFace);break;case x:var a=r.selector?ce(r.selector,r.css):r.css;n.textContent.indexOf(a)===-1&&(n.textContent+=a);break;case b:Ut(r,e,n);break}}}function be(e,t){e.updateSubscription||(e.scoreIndex={},e.nodes={},e.updateSubscription=zt(e,t),e.subscribe(e.updateSubscription),Q(e.cache,e._emitChange))}function qt(e){return e.split("{")[0].slice(9).trim()}function Lt(e,t,r,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"",o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"",i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:"",f=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"",u=arguments.length>8&&arguments[8]!==void 0?arguments[8]:1;return{type:e,className:t,selector:me(t,a,f,u),declaration:r+":"+n,pseudo:a,media:o,support:i}}function q(e,t){return Qt(e)||Ht(e,t)||Wt(e,t)||Kt()}function Kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(e,t){if(!!e){if(typeof e=="string")return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}}function re(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ht(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,i,f;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(n.push(i.value),!(t&&n.length===t));a=!0);}catch(u){o=!0,f=u}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw f}}return n}}function Qt(e){if(Array.isArray(e))return e}function Yt(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}var N={};function Xt(e){return N[e]||(N[e]=new RegExp("".concat(Yt(e),"[.]([0-9a-z_-]+)(([.][0-9a-z_-]+){0,})([^{]+)?{([^:]+):([^}]+)}"),"gi")),N[e]}function Bt(e,t){if(e){var r=new RegExp("(([.]".concat(t,")+)?(.*)?"),""),n=e.match(r),a=q(n,4);a[0];var o=a[1],i=a[2],f=a[3],u=f===void 0?"":f;return[u,o?o.length/i.length+1:1]}return["",1]}function Se(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"",o,i=Xt(a);o=i.exec(e);){var f=o,u=q(f,7);u[0];var s=u[1],c=u[2];u[3];var l=u[4],m=l===void 0?"":l,d=u[5],p=u[6],y=Bt(c,s),g=q(y,2),A=g[0],C=g[1],_e=$(d.indexOf("--")===0?d:$e(d),p,A+m,t,r);n[_e]=Lt(b,s,d,p,A+m,t,r,a,C)}return n}function Gt(e,t){return er(e)||Vt(e,t)||Zt(e,t)||Jt()}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e,t){if(!!e){if(typeof e=="string")return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}}function ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Vt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,i,f;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(n.push(i.value),!(t&&n.length===t));a=!0);}catch(u){o=!0,f=u}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw f}}return n}}function er(e){if(Array.isArray(e))return e}var tr=/@supports[^{]+\{([\s\S]+?})\s*}/gi;function rr(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a;a=tr.exec(e);){var o=a,i=Gt(o,2),f=i[0],u=i[1],s=qt(f);Se(u,t,s,r,n)}return r}function nr(e,t){return ur(e)||ir(e,t)||or(e,t)||ar()}function ar(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(e,t){if(!!e){if(typeof e=="string")return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ir(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,i,f;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(n.push(i.value),!(t&&n.length===t));a=!0);}catch(u){o=!0,f=u}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw f}}return n}}function ur(e){if(Array.isArray(e))return e}var fr=/@(-webkit-|-moz-)?keyframes ([a-z_][a-z0-9-_]*)(\{.*?(?=}})}})/gi;function sr(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;r=fr.exec(e);){var n=r,a=nr(n,4),o=a[0];a[1];var i=a[2],f=a[3];t[f]?t[f].keyframe+=o:t[f]={type:S,keyframe:o,name:i}}return t}var cr=/[.][a-z0-9_-]*/gi;function lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;be(e,t),_(t.querySelectorAll("[data-fela-type]"),function(r){var n=r.getAttribute("data-fela-rehydration")||-1,a=e.uniqueRuleIdentifier||parseInt(n,10);if(a!==-1){var o=r.getAttribute("data-fela-type")||"",i=r.getAttribute("media")||"",f=r.getAttribute("data-fela-support")||"",u=r.textContent;e.uniqueRuleIdentifier=a;var s=o+i+f;if(e.nodes[s]=r,o===b){if(f?rr(u,i,e.cache,e.specificityPrefix):Se(u,i,"",e.cache,e.specificityPrefix),r.sheet&&r.sheet.cssRules){var c=i+f;_(r.sheet.cssRules,function(l,m){var d=l.conditionText?l.cssRules[0].selectorText:l.selectorText,p=le(e.ruleOrder,d.split(cr)[1]);p===0&&(e.scoreIndex[c]=m),l.score=p})}}else o===S&&sr(u,e.cache)}})}function L(e){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function pr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function mr(e,t,r){return t&&oe(e.prototype,t),r&&oe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function dr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}function K(e,t){return K=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},K(e,t)}function yr(e){var t=hr();return function(){var n=w(e),a;if(t){var o=w(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return gr(this,a)}}function gr(e,t){if(t&&(L(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vr(e)}function vr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},w(e)}function br(e,t){if(typeof document>"u")return!1;var r=t||document;return e&&!e.isNativeRenderer&&r&&r.createElement}function Sr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return e.querySelectorAll("[data-fela-type]").length>0}function Ar(e,t,r,n,a){var o=function(i){dr(u,i);var f=yr(u);function u(s,c){var l;return pr(this,u),l=f.call(this,s,c),l._renderStyle(),l}return mr(u,[{key:"componentDidUpdate",value:function(c){c.renderer!==this.props.renderer&&this._renderStyle()}},{key:"_renderStyle",value:function(){var c=this.props,l=c.renderer,m=c.rehydrate,d=c.targetDocument;br(l,d)&&(m&&Sr(d)?lr(l,d):be(l,d))}},{key:"render",value:function(){return r(t.Provider,{value:this.props.renderer},n(this.props.children))}}]),u}(e);return a&&Q(a,function(i,f){o[f]=i}),o}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ie(Object(r),!0).forEach(function(n){Or(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Or(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _r(e,t){return e?ue(ue({},e),{},{theme:t}):{theme:t}}function wr(e,t,r){return function(a){var o=r(e),i=r(t)||{};if(!o)throw new Error('The "useFela" hook can only be used inside a "RendererProvider"');var f=_r(a,i);function u(){return o.renderRule(he.apply(void 0,arguments),f)}function s(c,l){return o.renderStatic(c,l,f)}return{renderer:o,theme:i,css:u,staticStyle:s}}}var X=v.exports.createContext(),Pr=v.exports.createContext(),W={exports:{}},xr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Cr=xr,Tr=Cr;function Ae(){}function Oe(){}Oe.resetWarningCache=Ae;var Rr=function(){function e(n,a,o,i,f,u){if(u!==Tr){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Oe,resetWarningCache:Ae};return r.PropTypes=r,r};W.exports=Rr();const Ir=Ar(v.exports.Component,X,v.exports.createElement,function(e){return e},{propTypes:{renderer:W.exports.object.isRequired,rehydrate:W.exports.bool.isRequired},defaultProps:{rehydrate:!0}}),Nr=wr(X,Pr,v.exports.useContext);X.Consumer;const P=we.exports.jsx;function jr(e,t=({children:r})=>r){document.querySelectorAll("[data-tropical-hydration-component]").forEach(r=>{const n=e[r.dataset.tropicalHydrationComponent];if(!n){console.warn(`Found a server-rendered Tropical Island for ${r.dataset.tropicalHydrationComponent} but that component was not passed to hydrateIslands`);return}const a=JSON.parse(r.dataset.tropicalHydrationProps);Pe(r,P(t,{children:P(n,{...a})}))})}const Er="/assets/gunayala.f6132071.jpg";function $r({children:e,alertMessage:t}){const{css:r}=Nr(),[n,a]=v.exports.useState(!1);return v.exports.useEffect(()=>a(!0),[]),P("button",{disabled:!n,onClick:()=>window.alert(t),className:r({background:`url(${Er})`,backgroundAttachment:"cover",backgroundPosition:"center center",border:"none",borderRadius:"4px",color:"chartreuse",cursor:"pointer",fontFamily:'"Comic Sans MS", "Comic Sans", cursive',fontSize:"2rem",marginRight:"5px",padding:"30px 70px",textShadow:"2px 2px 4px #000","&[disabled]":{cursor:"not-allowed",filter:"grayscale(100%)"},"&:hover:not([disabled])":{color:"hotpink"}}),children:e})}function kr({children:e}){return P(Ir,{renderer:ht(),children:e})}console.log("hydrating...");jr({ExampleComponent:$r},kr);console.log("hydrated!");