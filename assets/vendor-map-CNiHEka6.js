import{i as e,t}from"./rolldown-runtime-DWdDZTNf.js";import{Et as n,Nt as r}from"./vendor-pX6FM8jG.js";var i=e(n(),1),a=e(r(),1);function o(e,t){let n=(0,a.useRef)(t);(0,a.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function s(e,t,n){t.center!==n.center&&e.setLatLng(t.center),t.radius!=null&&t.radius!==n.radius&&e.setRadius(t.radius)}function c(e){return Object.freeze({__version:1,map:e})}function l(e,t){return Object.freeze({...e,...t})}var u=(0,a.createContext)(null);function d(){let e=(0,a.use)(u);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}function f(e){function t(t,n){let{instance:r,context:i}=e(t).current;(0,a.useImperativeHandle)(n,()=>r);let{children:o}=t;return o==null?null:a.createElement(u,{value:i},o)}return(0,a.forwardRef)(t)}function p(e){function t(t,n){let[r,o]=(0,a.useState)(!1),{instance:s}=e(t,o).current;(0,a.useImperativeHandle)(n,()=>s),(0,a.useEffect)(function(){r&&s.update()},[s,r,t.children]);let c=s._contentNode;return c?(0,i.createPortal)(t.children,c):null}return(0,a.forwardRef)(t)}function m(e){function t(t,n){let{instance:r}=e(t).current;return(0,a.useImperativeHandle)(n,()=>r),null}return(0,a.forwardRef)(t)}function h(e,t){let n=(0,a.useRef)(void 0);(0,a.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function g(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function _(e,t){return function(n,r){let i=d(),a=e(g(n,i),i);return o(i.map,n.attribution),h(a.current,n.eventHandlers),t(a.current,i,n,r),a}}var v=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function ee(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var S=window.requestAnimationFrame||b(`RequestAnimationFrame`)||ee,te=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function C(e,t,n){if(n&&S===ee)e.call(t);else return S.call(window,i(e,t))}function w(e){e&&te.call(window,e)}var ne={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:S,cancelFn:te,requestAnimFrame:C,cancelAnimFrame:w};function T(){}T.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(re(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},T.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},T.mergeOptions=function(e){return n(this.prototype.options,e),this},T.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function re(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var E={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};E.addEventListener=E.on,E.removeEventListener=E.clearAllEventListeners=E.off,E.addOneTimeEventListener=E.once,E.fireEvent=E.fire,E.hasEventListeners=E.listens;var D=T.extend(E);function O(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var ie=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(e){return this.clone()._add(k(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(k(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new O(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new O(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ie(this.x),this.y=ie(this.y),this},distanceTo:function(e){e=k(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=k(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=k(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function k(e,t,n){return e instanceof O?e:_(e)?new O(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new O(e.x,e.y):new O(e,t,n)}function A(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}A.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof O||typeof e[0]==`number`||`x`in e)t=n=k(e);else if(e=j(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return k((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return k(this.min.x,this.max.y)},getTopRight:function(){return k(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof O?k(e):j(e),e instanceof A?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=j(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=j(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return j(k(t.x-r,t.y-i),k(n.x+r,n.y+i))},equals:function(e){return e?(e=j(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function j(e,t){return!e||e instanceof A?e:new A(e,t)}function M(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}M.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof P)r=e,i=e;else if(e instanceof M){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(F(e)||N(e)):this;return!t&&!n?(this._southWest=new P(r.lat,r.lng),this._northEast=new P(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new M(new P(t.lat-r,t.lng-i),new P(n.lat+r,n.lng+i))},getCenter:function(){return new P((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new P(this.getNorth(),this.getWest())},getSouthEast:function(){return new P(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof P||`lat`in e?F(e):N(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof M?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=N(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=N(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=N(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function N(e,t){return e instanceof M?e:new M(e,t)}function P(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}P.prototype={equals:function(e,t){return e?(e=F(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return ae.distance(this,F(e))},wrap:function(){return ae.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return N([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new P(this.lat,this.lng,this.alt)}};function F(e,t,n){return e instanceof P?e:_(e)&&typeof e[0]!=`object`?e.length===3?new P(e[0],e[1],e[2]):e.length===2?new P(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new P(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new P(e,t,n)}var I={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new A(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new P(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new M(new P(a.lat-r,a.lng-i),new P(o.lat-r,o.lng-i))}},ae=n({},I,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),oe=6378137,se={R:oe,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new O(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new P((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=oe*Math.PI;return new A([-e,-e],[e,e])})()};function ce(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}ce.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new O((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function le(e,t,n,r){return new ce(e,t,n,r)}var R=n({},ae,{code:`EPSG:3857`,projection:se,transformation:function(){var e=.5/(Math.PI*se.R);return le(e,.5,-e,.5)}()}),ue=n({},R,{code:`EPSG:900913`});function de(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function fe(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?z.svg?`z`:`x`:``}return n||`M0 0`}var pe=document.documentElement.style,me=`ActiveXObject`in window,he=me&&!document.addEventListener,ge=`msLaunchUri`in navigator&&!(`documentMode`in document),_e=Xe(`webkit`),ve=Xe(`android`),ye=Xe(`android 2`)||Xe(`android 3`),be=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),xe=ve&&Xe(`Google`)&&be<537&&!(`AudioNode`in window),Se=!!window.opera,Ce=!ge&&Xe(`chrome`),we=Xe(`gecko`)&&!_e&&!Se&&!me,Te=!Ce&&Xe(`safari`),Ee=Xe(`phantom`),De=`OTransition`in pe,Oe=navigator.platform.indexOf(`Win`)===0,ke=me&&`transition`in pe,Ae=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!ye,je=`MozPerspective`in pe,Me=!window.L_DISABLE_3D&&(ke||Ae||je)&&!De&&!Ee,Ne=typeof orientation<`u`||Xe(`mobile`),Pe=Ne&&_e,Fe=Ne&&Ae,Ie=!window.PointerEvent&&window.MSPointerEvent,Le=!!(window.PointerEvent||Ie),Re=`ontouchstart`in window||!!window.TouchEvent,ze=!window.L_NO_TOUCH&&(Re||Le),Be=Ne&&Se,Ve=Ne&&we,He=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ue=function(){var e=!1;try{var t=Object.defineProperty({},`passive`,{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),We=function(){return!!document.createElement(`canvas`).getContext}(),Ge=!!(document.createElementNS&&de(`svg`).createSVGRect),Ke=!!Ge&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),qe=!Ge&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Je=navigator.platform.indexOf(`Mac`)===0,Ye=navigator.platform.indexOf(`Linux`)===0;function Xe(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var z={ie:me,ielt9:he,edge:ge,webkit:_e,android:ve,android23:ye,androidStock:xe,opera:Se,chrome:Ce,gecko:we,safari:Te,phantom:Ee,opera12:De,win:Oe,ie3d:ke,webkit3d:Ae,gecko3d:je,any3d:Me,mobile:Ne,mobileWebkit:Pe,mobileWebkit3d:Fe,msPointer:Ie,pointer:Le,touch:ze,touchNative:Re,mobileOpera:Be,mobileGecko:Ve,retina:He,passiveEvents:Ue,canvas:We,svg:Ge,vml:qe,inlineSvg:Ke,mac:Je,linux:Ye},Ze=z.msPointer?`MSPointerDown`:`pointerdown`,Qe=z.msPointer?`MSPointerMove`:`pointermove`,$e=z.msPointer?`MSPointerUp`:`pointerup`,et=z.msPointer?`MSPointerCancel`:`pointercancel`,tt={touchstart:Ze,touchmove:Qe,touchend:$e,touchcancel:et},nt={touchstart:ft,touchmove:dt,touchend:dt,touchcancel:dt},rt={},it=!1;function at(e,t,n){return t===`touchstart`&&ut(),nt[t]?(n=nt[t].bind(this,n),e.addEventListener(tt[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function ot(e,t,n){if(!tt[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener(tt[t],n,!1)}function st(e){rt[e.pointerId]=e}function ct(e){rt[e.pointerId]&&(rt[e.pointerId]=e)}function lt(e){delete rt[e.pointerId]}function ut(){it||=(document.addEventListener(Ze,st,!0),document.addEventListener(Qe,ct,!0),document.addEventListener($e,lt,!0),document.addEventListener(et,lt,!0),!0)}function dt(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],rt)t.touches.push(rt[n]);t.changedTouches=[t],e(t)}}function ft(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&Y(t),dt(e,t)}function pt(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var mt=200;function ht(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=$t(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=mt?(r++,r===2&&t(pt(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function gt(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var _t=kt([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),vt=kt([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),yt=vt===`webkitTransition`||vt===`OTransition`?vt+`End`:`transitionend`;function bt(e){return typeof e==`string`?document.getElementById(e):e}function xt(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function B(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function V(e){var t=e.parentNode;t&&t.removeChild(e)}function St(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Ct(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function wt(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function Tt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=Dt(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function H(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!Tt(e,t)){var a=Dt(e);Et(e,(a?a+` `:``)+t)}}function U(e,t){e.classList===void 0?Et(e,d((` `+Dt(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function Et(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function Dt(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function W(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&Ot(e,t)}function Ot(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function kt(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function At(e,t,n){var r=t||new O(0,0);e.style[_t]=(z.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function G(e,t){e._leaflet_pos=t,z.any3d?At(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function jt(e){return e._leaflet_pos||new O(0,0)}var Mt,Nt,Pt;if(`onselectstart`in document)Mt=function(){K(window,`selectstart`,Y)},Nt=function(){J(window,`selectstart`,Y)};else{var Ft=kt([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Mt=function(){if(Ft){var e=document.documentElement.style;Pt=e[Ft],e[Ft]=`none`}},Nt=function(){Ft&&(document.documentElement.style[Ft]=Pt,Pt=void 0)}}function It(){K(window,`dragstart`,Y)}function Lt(){J(window,`dragstart`,Y)}var Rt,zt;function Bt(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Vt(),Rt=e,zt=e.style.outlineStyle,e.style.outlineStyle=`none`,K(window,`keydown`,Vt))}function Vt(){Rt&&(Rt.style.outlineStyle=zt,Rt=void 0,zt=void 0,J(window,`keydown`,Vt))}function Ht(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Ut(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Wt={__proto__:null,TRANSFORM:_t,TRANSITION:vt,TRANSITION_END:yt,get:bt,getStyle:xt,create:B,remove:V,empty:St,toFront:Ct,toBack:wt,hasClass:Tt,addClass:H,removeClass:U,setClass:Et,getClass:Dt,setOpacity:W,testProp:kt,setTransform:At,setPosition:G,getPosition:jt,get disableTextSelection(){return Mt},get enableTextSelection(){return Nt},disableImageDrag:It,enableImageDrag:Lt,preventOutline:Bt,restoreOutline:Vt,getSizedParentNode:Ht,getScale:Ut};function K(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)qt(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)qt(e,t[a],n,r)}return this}var q=`_leaflet_events`;function J(e,t,n,r){if(arguments.length===1)Gt(e),delete e[q];else if(t&&typeof t==`object`)for(var i in t)Jt(e,i,t[i],n);else if(t=f(t),arguments.length===2)Gt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)Jt(e,t[a],n,r);return this}function Gt(e,t){for(var n in e[q]){var r=n.split(/\d/)[0];(!t||t(r))&&Jt(e,r,null,null,n)}}var Kt={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function qt(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[q]&&e[q][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!z.touchNative&&z.pointer&&t.indexOf(`touch`)===0?a=at(e,t,a):z.touch&&t===`dblclick`?a=ht(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Kt[t]||t,a,z.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,rn(e,t)&&s(t)},e.addEventListener(Kt[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[q]=e[q]||{},e[q][i]=a}function Jt(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[q]&&e[q][i];if(!a)return this;!z.touchNative&&z.pointer&&t.indexOf(`touch`)===0?ot(e,t,a):z.touch&&t===`dblclick`?gt(e,a):`removeEventListener`in e?e.removeEventListener(Kt[t]||t,a,!1):e.detachEvent(`on`+t,a),e[q][i]=null}function Yt(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function Xt(e){return qt(e,`wheel`,Yt),this}function Zt(e){return K(e,`mousedown touchstart dblclick contextmenu`,Yt),e._leaflet_disable_click=!0,this}function Y(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function Qt(e){return Y(e),Yt(e),this}function $t(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function en(e,t){if(!t)return new O(e.clientX,e.clientY);var n=Ut(t),r=n.boundingClientRect;return new O((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var tn=z.linux&&z.chrome?window.devicePixelRatio:z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function nn(e){return z.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/tn:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function rn(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var an={__proto__:null,on:K,off:J,stopPropagation:Yt,disableScrollPropagation:Xt,disableClickPropagation:Zt,preventDefault:Y,stop:Qt,getPropagationPath:$t,getMousePosition:en,getWheelDelta:nn,isExternalTarget:rn,addListener:K,removeListener:J},on=D.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=jt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=C(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),G(this._el,n),this.fire(`step`)},_complete:function(){w(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),X=D.extend({options:{crs:R,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(F(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=vt&&z.any3d&&!z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),K(this._proxy,yt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(F(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=z.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=z.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof O?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():N(e);var n=k(t.paddingTopLeft||t.padding||[0,0]),r=k(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=N(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=k(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new on,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){H(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!z.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=F(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,ee=n.duration?1e3*n.duration:1e3*x*.8;function S(){var n=(Date.now()-b)/ee,a=y(n)*x;n<=1?(this._flyToFrame=C(S,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),S.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=N(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,N(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=k(t.paddingTopLeft||t.padding||[0,0]),r=k(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=j([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new P(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),V(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(w(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)V(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=B(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new M(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=N(e),n=k(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=j(this.project(s,r),this.project(o,r)).getSize(),u=z.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new A(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(F(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(k(e),t)},layerPointToLatLng:function(e){var t=k(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(F(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(F(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(N(e))},distance:function(e,t){return this.options.crs.distance(F(e),F(t))},containerPointToLayerPoint:function(e){return k(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return k(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(k(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(e)))},mouseEventToContainerPoint:function(e){return en(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=bt(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);K(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&z.any3d,H(e,`leaflet-container`+(z.touch?` leaflet-touch`:``)+(z.retina?` leaflet-retina`:``)+(z.ielt9?` leaflet-oldie`:``)+(z.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=xt(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),G(this._mapPane,new O(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(H(e.markerPane,`leaflet-zoom-hide`),H(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){G(this._mapPane,new O(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return w(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){G(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?J:K;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),z.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){w(this._resizeRequest),this._resizeRequest=C(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!rn(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Bt(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&Y(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return jt(this._mapPane)||new O(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return j([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new A(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new A(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=j(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new O(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=z.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){U(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=B(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=_t,n=this._proxy.style[t];At(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){V(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();At(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(C(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,H(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&U(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function sn(e,t){return new X(e,t)}var Z=T.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return H(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(V(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),cn=function(e){return new Z(e)};X.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=B(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=B(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)V(this._controlCorners[e]);V(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ln=Z.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return Z.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){H(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(H(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):U(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return U(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=B(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),Zt(t),Xt(t);var r=this._section=B(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),K(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=B(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),K(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){Y(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=B(`div`,e+`-base`,r),this._separator=B(`div`,e+`-separator`,r),this._overlaysList=B(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;St(this._baseLayersList),St(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),K(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,K(e,`click`,Y),this.expand();var t=this;setTimeout(function(){J(e,`click`,Y),t._preventClick=!1})}}),un=function(e,t,n){return new ln(e,t,n)},dn=Z.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=B(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=B(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),Zt(a),K(a,`click`,Qt),K(a,`click`,i,this),K(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;U(this._zoomInButton,t),U(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(H(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(H(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});X.mergeOptions({zoomControl:!0}),X.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new dn,this.addControl(this.zoomControl))});var fn=function(e){return new dn(e)},pn=Z.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=B(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=B(`div`,t,n)),e.imperial&&(this._iScale=B(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),mn=function(e){return new pn(e)},hn=Z.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(z.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=B(`div`,`leaflet-control-attribution`),Zt(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});X.mergeOptions({attributionControl:!0}),X.addInitHook(function(){this.options.attributionControl&&new hn().addTo(this)}),Z.Layers=ln,Z.Zoom=dn,Z.Scale=pn,Z.Attribution=hn,cn.layers=un,cn.zoom=fn,cn.scale=mn,cn.attribution=function(e){return new hn(e)};var gn=T.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});gn.addTo=function(e,t){return e.addHandler(t,this),this};var _n={Events:E},vn=z.touch?`touchstart mousedown`:`mousedown`,yn=D.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(K(this._dragStartTarget,vn,this._onDown,this),!0)},disable:function(){this._enabled&&(yn._dragging===this&&this.finishDrag(!0),J(this._dragStartTarget,vn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!Tt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){yn._dragging===this&&this.finishDrag();return}if(!(yn._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(yn._dragging=this,this._preventOutline&&Bt(this._element),It(),Mt(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=Ht(this._element);this._startPoint=new O(t.clientX,t.clientY),this._startPos=jt(this._element),this._parentScale=Ut(n);var r=e.type===`mousedown`;K(document,r?`mousemove`:`touchmove`,this._onMove,this),K(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new O(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,Y(e),this._moved||(this.fire(`dragstart`),this._moved=!0,H(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),H(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),G(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){U(document.body,`leaflet-dragging`),this._lastTarget&&=(U(this._lastTarget,`leaflet-drag-target`),null),J(document,`mousemove touchmove`,this._onMove,this),J(document,`mouseup touchend touchcancel`,this._onUp,this),Lt(),Nt();var t=this._moved&&this._moving;this._moving=!1,yn._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function bn(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=Nn(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=Mn(l,c,d,t,n),f._code=Nn(f,t),r.push(f)):(l._code&d&&(f=Mn(l,c,d,t,n),f._code=Nn(f,t),r.push(f)),r.push(c));e=r}return e}function xn(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Q(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=F([0,0]),f=N(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=Sn(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=F(e[n]);m.push(t.project(F([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(k(u));return F([g.lat+d.lat,g.lng+d.lng])}function Sn(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=F(e[i]);t+=a.lat,n+=a.lng,r++}return F([t/r,n/r])}var Cn={__proto__:null,clipPolygon:bn,polygonCenter:xn,centroid:Sn};function wn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=kn(e,n),e=Dn(e,n),e}function Tn(e,t,n){return Math.sqrt(Fn(e,t,n,!0))}function En(e,t,n){return Fn(e,t,n)}function Dn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,On(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function On(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=Fn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,On(e,t,n,r,o),On(e,t,n,o,i))}function kn(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Pn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var An;function jn(e,t,n,r,i){var a=r?An:Nn(e,n),o=Nn(t,n),s,c,l;for(An=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=Mn(e,t,s,n,i),l=Nn(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function Mn(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new O(l,u,i)}function Nn(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Pn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Fn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new O(i,a)}function Q(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function In(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Q(e)}function Ln(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Q(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=F([0,0]),d=N(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=Sn(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=F(e[n]);p.push(t.project(F([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(k(l));return F([h.lat+u.lat,h.lng+u.lng])}var Rn={__proto__:null,simplify:wn,pointToSegmentDistance:Tn,closestPointOnSegment:En,clipSegment:jn,_getEdgeIntersection:Mn,_getBitCode:Nn,_sqClosestPointOnSegment:Fn,isFlat:Q,_flat:In,polylineCenter:Ln},zn={project:function(e){return new O(e.lng,e.lat)},unproject:function(e){return new P(e.y,e.x)},bounds:new A([-180,-90],[180,90])},Bn={R:6378137,R_MINOR:6356752.314245179,bounds:new A([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new O(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new P(o*t,e.x*t/n)}},Vn={__proto__:null,LonLat:zn,Mercator:Bn,SphericalMercator:se},Hn=n({},ae,{code:`EPSG:3395`,projection:Bn,transformation:function(){var e=.5/(Math.PI*Bn.R);return le(e,.5,-e,.5)}()}),Un=n({},ae,{code:`EPSG:4326`,projection:zn,transformation:le(1/180,1,-1/180,.5)}),Wn=n({},I,{projection:zn,transformation:le(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});I.Earth=ae,I.EPSG3395=Hn,I.EPSG3857=R,I.EPSG900913=ue,I.EPSG4326=Un,I.Simple=Wn;var $=D.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});X.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Gn=$.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),Kn=function(e,t){return new Gn(e,t)},qn=Gn.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Gn.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Gn.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new M;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),Jn=function(e,t){return new qn(e,t)},Yn=T.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=k(r),a=k(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return z.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function Xn(e){return new Yn(e)}var Zn=Yn.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof Zn.imagePath!=`string`&&(Zn.imagePath=this._detectIconPath()),(this.options.imagePath||Zn.imagePath)+Yn.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=B(`div`,`leaflet-default-icon-path`,document.body),t=xt(e,`background-image`)||xt(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),Qn=gn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new yn(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),H(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&U(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=jt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=j(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=k((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),G(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=C(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(w(this._panRequest),this._panRequest=C(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=jt(t._icon),i=t._map.layerPointToLatLng(r);n&&G(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){w(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),$n=$.extend({options:{icon:new Zn,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=F(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),H(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&K(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(H(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&J(this._icon,`focus`,this._panOnFocus,this),V(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&V(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&G(this._icon,e),this._shadow&&G(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(H(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),Qn)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Qn(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&W(this._icon,e),this._shadow&&W(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?k(t.iconSize):k(0,0),r=t.iconAnchor?k(t.iconAnchor):k(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function er(e,t){return new $n(e,t)}var tr=$.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),nr=tr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=F(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return tr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new A(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function rr(e,t){return new nr(e,t)}var ir=nr.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=F(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new M(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:tr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===ae.distance){var i=Math.PI/180,a=this._mRadius/ae.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function ar(e,t,n){return new ir(e,t,n)}var or=tr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Fn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Ln(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=F(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new M,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Q(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Q(e),r=0,i=e.length;r<i;r++)n?(t[r]=F(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new A;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new O(e,e);this._rawPxBounds&&(this._pxBounds=new A([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof P,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=jn(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=wn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&Tn(e,s[i],s[r])<=c)return!0;return!1}});function sr(e,t){return new or(e,t)}or._flat=In;var cr=or.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return xn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=or.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof P&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){or.prototype._setLatLngs.call(this,e),Q(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Q(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new O(t,t);if(e=new A(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=bn(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||or.prototype._containsPoint.call(this,e,!0)}});function lr(e,t){return new cr(e,t)}var ur=qn.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=dr(e,a);return o?(o.feature=vr(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function dr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||pr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),fr(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(fr(a,e,s,t));return new qn(i);case`LineString`:case`MultiLineString`:return c=mr(r,n.type===`LineString`?0:1,o),new or(c,t);case`Polygon`:case`MultiPolygon`:return c=mr(r,n.type===`Polygon`?1:2,o),new cr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=dr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new qn(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=dr(n.features[l],t);f&&i.push(f)}return new qn(i);default:throw Error(`Invalid GeoJSON object.`)}}function fr(e,t,n,r){return e?e(t,n):new $n(n,r&&r.markersInheritOptions&&r)}function pr(e){return new P(e[1],e[0],e[2])}function mr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?mr(e[i],t-1,n):(n||pr)(e[i]),r.push(o);return r}function hr(e,t){return e=F(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function gr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?gr(e[a],Q(e[a])?0:t-1,n,r):hr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function _r(e,t){return e.feature?n({},e.feature,{geometry:t}):vr(t)}function vr(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var yr={toGeoJSON:function(e){return _r(this,{type:`Point`,coordinates:hr(this.getLatLng(),e)})}};$n.include(yr),ir.include(yr),nr.include(yr),or.include({toGeoJSON:function(e){var t=!Q(this._latlngs),n=gr(this._latlngs,+!!t,!1,e);return _r(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),cr.include({toGeoJSON:function(e){var t=!Q(this._latlngs),n=t&&!Q(this._latlngs[0]),r=gr(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),_r(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),Gn.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),_r(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=vr(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?_r(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function br(e,t){return new ur(e,t)}var xr=br,Sr=$.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=N(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(H(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){V(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&Ct(this._image),this},bringToBack:function(){return this._map&&wt(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=N(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:B(`img`);if(H(t,`leaflet-image-layer`),this._zoomAnimated&&H(t,`leaflet-zoom-animated`),this.options.className&&H(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;At(this._image,n,t)},_reset:function(){var e=this._image,t=new A(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();G(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){W(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),Cr=function(e,t,n){return new Sr(e,t,n)},wr=Sr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:B(`video`);if(H(t,`leaflet-image-layer`),this._zoomAnimated&&H(t,`leaflet-zoom-animated`),this.options.className&&H(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=B(`source`);s.src=this._url[o],t.appendChild(s)}}});function Tr(e,t,n){return new wr(e,t,n)}var Er=Sr.extend({_initImage:function(){var e=this._image=this._url;H(e,`leaflet-image-layer`),this._zoomAnimated&&H(e,`leaflet-zoom-animated`),this.options.className&&H(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Dr(e,t,n){return new Er(e,t,n)}var Or=$.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof P||_(e))?(this._latlng=F(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&W(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&W(this._container,1),this.bringToFront(),this.options.interactive&&(H(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(W(this._container,0),this._removeTimeout=setTimeout(i(V,void 0,this._container),200)):V(this._container),this.options.interactive&&(U(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=F(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ct(this._container),this},bringToBack:function(){return this._map&&wt(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof qn){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e)if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`);return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=k(this.options.offset),n=this._getAnchor();this._zoomAnimated?G(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});X.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),$.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var kr=Or.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Or.prototype.openOn.call(this,e)},onAdd:function(e){Or.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof tr||this._source.on(`preclick`,Yt))},onRemove:function(e){Or.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof tr||this._source.off(`preclick`,Yt))},getEvents:function(){var e=Or.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=B(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=B(`div`,e+`-content-wrapper`,t);if(this._contentNode=B(`div`,e+`-content`,n),Zt(t),Xt(this._contentNode),K(t,`contextmenu`,Yt),this._tipContainer=B(`div`,e+`-tip-container`,t),this._tip=B(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=B(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,K(r,`click`,function(e){Y(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,H(e,a)):U(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();G(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(xt(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new O(this._containerLeft,-n-this._containerBottom);i._add(jt(this._container));var a=e.layerPointToContainerPoint(i),o=k(this.options.autoPanPadding),s=k(this.options.autoPanPaddingTopLeft||o),c=k(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return k(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ar=function(e,t){return new kr(e,t)};X.mergeOptions({closePopupOnClick:!0}),X.include({openPopup:function(e,t,n){return this._initOverlay(kr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),$.include({bindPopup:function(e,t){return this._popup=this._initOverlay(kr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof qn||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){Qt(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof tr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var jr=Or.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Or.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Or.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Or.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e=`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`);this._contentNode=this._container=B(`div`,e),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=k(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(k(t,n,!0)).add(u).add(d),U(i,`leaflet-tooltip-right`),U(i,`leaflet-tooltip-left`),U(i,`leaflet-tooltip-top`),U(i,`leaflet-tooltip-bottom`),H(i,`leaflet-tooltip-`+s),G(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&W(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return k(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Mr=function(e,t){return new jr(e,t)};X.include({openTooltip:function(e,t,n){return this._initOverlay(jr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),$.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(jr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof qn||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(K(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),K(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Nr=Yn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(St(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=k(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Pr(e){return new Nr(e)}Yn.Default=Zn;var Fr=$.extend({options:{tileSize:256,opacity:1,updateWhenIdle:z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),V(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ct(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(wt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof O?e:new O(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!z.ielt9){W(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);W(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(w(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=B(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(V(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=B(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)V(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new O(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r?this._retainParent(i,a,o,r):!1)},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new O(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}else c&&c.loaded&&(c.retain=!0);n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();z.any3d?At(e.el,i,r):G(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new A(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new A(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new O(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new O(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return N(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new M(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new O(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(V(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){H(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,z.ielt9&&this.options.opacity<1&&W(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&C(i(this._tileReady,this,e,null,a)),G(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(W(n.el,0),w(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(H(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),z.ielt9||!this._map._fadeAnimated?C(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new O(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new A(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Ir(e){return new Fr(e)}var Lr=Fr.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&z.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return K(n,`load`,i(this._tileOnLoad,this,t,n)),K(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:z.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){z.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;V(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Fr.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Fr.prototype._tileReady.call(this,e,t,n)}});function Rr(e,t){return new Lr(e,t)}var zr=Lr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&z.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Lr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=j(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Un?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Lr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Br(e,t){return new zr(e,t)}Lr.WMS=zr,Rr.wms=Br;var Vr=$.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),H(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));z.any3d?At(this._container,a,n):G(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new A(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Hr=Vr.extend({options:{tolerance:0},getEvents:function(){var e=Vr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Vr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);K(e,`mousemove`,this._onMouseMove,this),K(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),K(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){w(this._redrawRequest),delete this._ctx,V(this._container),J(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Vr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=z.retina?2:1;G(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,z.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Vr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||C(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new A,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(!(e.type===`click`||e.type===`preclick`)||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(U(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(H(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Ur(e){return z.canvas?new Hr(e):null}var Wr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),Gr={_initContainer:function(){this._container=B(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Vr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Wr(`shape`);H(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Wr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;V(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Wr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Wr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){Ct(e._container)},_bringToBack:function(e){wt(e._container)}},Kr=z.vml?Wr:de,qr=Vr.extend({_initContainer:function(){this._container=Kr(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=Kr(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){V(this._container),J(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Vr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),G(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=Kr(`path`);e.options.className&&H(t,e.options.className),e.options.interactive&&H(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){V(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,fe(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){Ct(e._path)},_bringToBack:function(e){wt(e._path)}});z.vml&&qr.include(Gr);function Jr(e){return z.svg||z.vml?new qr(e):null}X.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Ur(e)||Jr(e)}});var Yr=cr.extend({initialize:function(e,t){cr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=N(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function Xr(e,t){return new Yr(e,t)}qr.create=Kr,qr.pointsToPath=fe,ur.geometryToLayer=dr,ur.coordsToLatLng=pr,ur.coordsToLatLngs=mr,ur.latLngToCoords=hr,ur.latLngsToCoords=gr,ur.getFeature=_r,ur.asFeature=vr,X.mergeOptions({boxZoom:!0});var Zr=gn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){K(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){J(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){V(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Mt(),It(),this._startPoint=this._map.mouseEventToContainerPoint(e),K(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=B(`div`,`leaflet-zoom-box`,this._container),H(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new A(this._point,this._startPoint),n=t.getSize();G(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(V(this._box),U(this._container,`leaflet-crosshair`)),Nt(),Lt(),J(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if(!(e.which!==1&&e.button!==1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new M(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});X.addInitHook(`addHandler`,`boxZoom`,Zr),X.mergeOptions({doubleClickZoom:!0});var Qr=gn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});X.addInitHook(`addHandler`,`doubleClickZoom`,Qr),X.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var $r=gn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new yn(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}H(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){U(this._map._container,`leaflet-grab`),U(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=N(this._map.options.maxBounds);this._offsetLimit=j(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),C(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});X.addInitHook(`addHandler`,`dragging`,$r),X.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ei=gn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),K(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),J(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){K(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){J(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(r=this._panKeys[t],e.shiftKey&&(r=k(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(k(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;Qt(e)}}});X.addInitHook(`addHandler`,`keyboard`,ei),X.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ti=gn.extend({addHooks:function(){K(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){J(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=nn(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),Qt(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});X.addInitHook(`addHandler`,`scrollWheelZoom`,ti);var ni=600;X.mergeOptions({tapHold:z.touchNative&&z.safari&&z.mobile,tapTolerance:15});var ri=gn.extend({addHooks:function(){K(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){J(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new O(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(K(document,`touchend`,Y),K(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),ni),K(document,`touchend touchcancel contextmenu`,this._cancel,this),K(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){J(document,`touchend`,Y),J(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),J(document,`touchend touchcancel contextmenu`,this._cancel,this),J(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new O(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});X.addInitHook(`addHandler`,`tapHold`,ri),X.mergeOptions({touchZoom:z.touch,bounceAtZoomLimits:!0});var ii=gn.extend({addHooks:function(){H(this._map._container,`leaflet-touch-zoom`),K(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){U(this._map._container,`leaflet-touch-zoom`),J(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),K(document,`touchmove`,this._onTouchMove,this),K(document,`touchend touchcancel`,this._onTouchEnd,this),Y(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),w(this._animRequest);var s=i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=C(s,this,!0),Y(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,w(this._animRequest),J(document,`touchmove`,this._onTouchMove,this),J(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});X.addInitHook(`addHandler`,`touchZoom`,ii),X.BoxZoom=Zr,X.DoubleClickZoom=Qr,X.Drag=$r,X.Keyboard=ei,X.ScrollWheelZoom=ti,X.TapHold=ri,X.TouchZoom=ii,e.Bounds=A,e.Browser=z,e.CRS=I,e.Canvas=Hr,e.Circle=ir,e.CircleMarker=nr,e.Class=T,e.Control=Z,e.DivIcon=Nr,e.DivOverlay=Or,e.DomEvent=an,e.DomUtil=Wt,e.Draggable=yn,e.Evented=D,e.FeatureGroup=qn,e.GeoJSON=ur,e.GridLayer=Fr,e.Handler=gn,e.Icon=Yn,e.ImageOverlay=Sr,e.LatLng=P,e.LatLngBounds=M,e.Layer=$,e.LayerGroup=Gn,e.LineUtil=Rn,e.Map=X,e.Marker=$n,e.Mixin=_n,e.Path=tr,e.Point=O,e.PolyUtil=Cn,e.Polygon=cr,e.Polyline=or,e.Popup=kr,e.PosAnimation=on,e.Projection=Vn,e.Rectangle=Yr,e.Renderer=Vr,e.SVG=qr,e.SVGOverlay=Er,e.TileLayer=Lr,e.Tooltip=jr,e.Transformation=ce,e.Util=ne,e.VideoOverlay=wr,e.bind=i,e.bounds=j,e.canvas=Ur,e.circle=ar,e.circleMarker=rr,e.control=cn,e.divIcon=Pr,e.extend=n,e.featureGroup=Jn,e.geoJSON=br,e.geoJson=xr,e.gridLayer=Ir,e.icon=Xn,e.imageOverlay=Cr,e.latLng=F,e.latLngBounds=N,e.layerGroup=Kn,e.map=sn,e.marker=er,e.point=k,e.polygon=lr,e.polyline=sr,e.popup=Ar,e.rectangle=Xr,e.setOptions=p,e.stamp=o,e.svg=Jr,e.svgOverlay=Dr,e.tileLayer=Rr,e.tooltip=Mr,e.transformation=le,e.version=t,e.videoOverlay=Tr;var ai=window.L;e.noConflict=function(){return window.L=ai,this},window.L=e}))}));function y(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function b(e,t){return t==null?function(t,n){let r=(0,a.useRef)(void 0);return r.current||=e(t,n),r}:function(n,r){let i=(0,a.useRef)(void 0);i.current||=e(n,r);let o=(0,a.useRef)(n),{instance:s}=i.current;return(0,a.useEffect)(function(){o.current!==n&&(t(s,n,o.current),o.current=n)},[s,n,t]),i}}function x(e,t){(0,a.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function ee(e){return function(t){let n=d(),r=e(g(t,n),n);return o(n.map,t.attribution),h(r.current,t.eventHandlers),x(r.current,n),r}}function S(e,t){let n=(0,a.useRef)(void 0);(0,a.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}function te(e){return function(t){let n=d(),r=e(g(t,n),n);return h(r.current,t.eventHandlers),x(r.current,n),S(r.current,t),r}}function C(e,t){return p(_(b(e),t))}function w(e,t){return f(te(b(e,t)))}function ne(e,t){return m(ee(b(e,t)))}function T(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}function re(){return d().map}function E(e){let t=re();return(0,a.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}var D=e(v(),1),O=w(function({center:e,children:t,...n},r){let i=new D.Circle(e,n);return y(i,l(r,{overlayContainer:i}))},s),ie=w(function({center:e,children:t,...n},r){let i=new D.CircleMarker(e,n);return y(i,l(r,{overlayContainer:i}))},s);function k({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:o,placeholder:s,style:l,whenReady:d,zoom:f,...p},m){let[h]=(0,a.useState)({className:i,id:o,style:l}),[g,_]=(0,a.useState)(null),v=(0,a.useRef)(void 0);(0,a.useImperativeHandle)(m,()=>g?.map??null,[g]);let y=(0,a.useCallback)(r=>{if(r!==null&&!v.current){let i=new D.Map(r,p);v.current=i,n!=null&&f!=null?i.setView(n,f):e!=null&&i.fitBounds(e,t),d!=null&&i.whenReady(d),_(c(i))}},[]);(0,a.useEffect)(()=>()=>{g?.map.remove()},[g]);let b=g?a.createElement(u,{value:g},r):s??null;return a.createElement(`div`,{...h,ref:y},b)}var A=(0,a.forwardRef)(k),j=C(function(e,t){return y(new D.Popup(e,t.overlayContainer),t)},function(e,t,{position:n},r){(0,a.useEffect)(function(){let{instance:i}=e;function a(e){e.popup===i&&(i.update(),r(!0))}function o(e){e.popup===i&&r(!1)}return t.map.on({popupopen:a,popupclose:o}),t.overlayContainer==null?(n!=null&&i.setLatLng(n),i.openOn(t.map)):t.overlayContainer.bindPopup(i),function(){t.map.off({popupopen:a,popupclose:o}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(i)}},[e,t,r,n])}),M=ne(function({url:e,...t},n){return y(new D.TileLayer(e,g(t,n)),n)},function(e,t,n){T(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)}),N=ne(function({eventHandlers:e,params:t={},url:n,...r},i){return y(new D.TileLayer.WMS(n,{...t,...g(r,i)}),i)},function(e,t,n){T(e,t,n),t.params!=null&&t.params!==n.params&&e.setParams(t.params)});(function(){function e(e,t,n){try{return window.URL.createObjectURL(new Blob([Uint8Array.from(e.split(``).map(function(e){return e.charCodeAt(0)}))],{type:t}))}catch{return`data:`+t+(n?`;base64,`:`,`)+e}}(function(e){if(e.fetch)return;var t={searchParams:`URLSearchParams`in e,iterable:`Symbol`in e&&`iterator`in Symbol,blob:`FileReader`in e&&`Blob`in e&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:`FormData`in e,arrayBuffer:`ArrayBuffer`in e};if(t.arrayBuffer)var n=[`[object Int8Array]`,`[object Uint8Array]`,`[object Uint8ClampedArray]`,`[object Int16Array]`,`[object Uint16Array]`,`[object Int32Array]`,`[object Uint32Array]`,`[object Float32Array]`,`[object Float64Array]`],r=function(e){return e&&DataView.prototype.isPrototypeOf(e)},i=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if(typeof e!=`string`&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw TypeError(`Invalid character in header field name`);return e.toLowerCase()}function o(e){return typeof e!=`string`&&(e=String(e)),e}function s(e){var n={next:function(){var t=e.shift();return{done:t===void 0,value:t}}};return t.iterable&&(n[Symbol.iterator]=function(){return n}),n}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}c.prototype.append=function(e,t){e=a(e),t=o(t);var n=this.map[e];this.map[e]=n?n+`,`+t:t},c.prototype.delete=function(e){delete this.map[a(e)]},c.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},c.prototype.set=function(e,t){this.map[a(e)]=o(t)},c.prototype.forEach=function(e,t){var n=this;for(var r in this.map)n.map.hasOwnProperty(r)&&e.call(t,n.map[r],r,n)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),s(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),s(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),s(e)},t.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);function l(e){if(e.bodyUsed)return Promise.reject(TypeError(`Already read`));e.bodyUsed=!0}function u(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function d(e){var t=new FileReader,n=u(t);return t.readAsArrayBuffer(e),n}function f(e){var t=new FileReader,n=u(t);return t.readAsText(e),n}function p(e){for(var t=new Uint8Array(e),n=Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join(``)}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,!e)this._bodyText=``;else if(typeof e==`string`)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&r(e))this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else if(t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e)))this._bodyArrayBuffer=m(e);else throw Error(`unsupported BodyInit type`);this.headers.get(`content-type`)||(typeof e==`string`?this.headers.set(`content-type`,`text/plain;charset=UTF-8`):this._bodyBlob&&this._bodyBlob.type?this.headers.set(`content-type`,this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set(`content-type`,`application/x-www-form-urlencoded;charset=UTF-8`))},t.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw Error(`could not read FormData body as blob`);return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return f(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(p(this._bodyArrayBuffer));if(this._bodyFormData)throw Error(`could not read FormData body as text`);return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}var g=[`DELETE`,`GET`,`HEAD`,`OPTIONS`,`POST`,`PUT`];function _(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}function v(e,t){t||={};var n=t.body;if(e instanceof v){if(e.bodyUsed)throw TypeError(`Already read`);this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,!n&&e._bodyInit!=null&&(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||`omit`,(t.headers||!this.headers)&&(this.headers=new c(t.headers)),this.method=_(t.method||this.method||`GET`),this.mode=t.mode||this.mode||null,this.referrer=null,(this.method===`GET`||this.method===`HEAD`)&&n)throw TypeError(`Body not allowed for GET or HEAD requests`);this._initBody(n)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})};function y(e){var t=new FormData;return e.trim().split(`&`).forEach(function(e){if(e){var n=e.split(`=`),r=n.shift().replace(/\+/g,` `),i=n.join(`=`).replace(/\+/g,` `);t.append(decodeURIComponent(r),decodeURIComponent(i))}}),t}function b(e){var t=new c;return e.split(/\r?\n/).forEach(function(e){var n=e.split(`:`),r=n.shift().trim();if(r){var i=n.join(`:`).trim();t.append(r,i)}}),t}h.call(v.prototype);function x(e,t){t||={},this.type=`default`,this.status=`status`in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText=`statusText`in t?t.statusText:`OK`,this.headers=new c(t.headers),this.url=t.url||``,this._initBody(e)}h.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:``});return e.type=`error`,e};var ee=[301,302,303,307,308];x.redirect=function(e,t){if(ee.indexOf(t)===-1)throw RangeError(`Invalid status code`);return new x(null,{status:t,headers:{location:e}})},e.Headers=c,e.Request=v,e.Response=x,e.fetch=function(e,n){return new Promise(function(r,i){var a=new v(e,n),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:b(o.getAllResponseHeaders()||``)};e.url=`responseURL`in o?o.responseURL:e.headers.get(`X-Request-URL`),r(new x(`response`in o?o.response:o.responseText,e))},o.onerror=function(){i(TypeError(`Network request failed`))},o.ontimeout=function(){i(TypeError(`Network request failed`))},o.open(a.method,a.url,!0),a.credentials===`include`&&(o.withCredentials=!0),`responseType`in o&&t.blob&&(o.responseType=`blob`),a.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(a._bodyInit===void 0?null:a._bodyInit)})},e.fetch.polyfill=!0})(typeof self<`u`?self:void 0);var t={read:function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},write:function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,h=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=h*128}},n=i,r=t;function i(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}i.Varint=0,i.Fixed64=1,i.Bytes=2,i.Fixed32=5;var a=65536*65536,o=1/a;i.prototype={destroy:function(){this.buf=null},readFields:function(e,t,n){var r=this;for(n||=this.length;this.pos<n;){var i=r.readVarint(),a=i>>3,o=r.pos;r.type=i&7,e(a,t,r),r.pos===o&&r.skip(i)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=S(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=C(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=S(this.buf,this.pos)+S(this.buf,this.pos+4)*a;return this.pos+=8,e},readSFixed64:function(){var e=S(this.buf,this.pos)+C(this.buf,this.pos+4)*a;return this.pos+=8,e},readFloat:function(){var e=r.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=r.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t=this.buf,n,r=t[this.pos++];return n=r&127,r<128||(r=t[this.pos++],n|=(r&127)<<7,r<128)||(r=t[this.pos++],n|=(r&127)<<14,r<128)||(r=t[this.pos++],n|=(r&127)<<21,r<128)?n:(r=t[this.pos],n|=(r&15)<<28,s(n,e,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2==1?(e+1)/-2:e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e=this.readVarint()+this.pos,t=w(this.buf,this.pos,e);return this.pos=e,t},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){var n=this,r=c(this);for(e||=[];this.pos<r;)e.push(n.readVarint(t));return e},readPackedSVarint:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readSVarint());return e},readPackedBoolean:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readBoolean());return e},readPackedFloat:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readFloat());return e},readPackedDouble:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readDouble());return e},readPackedFixed32:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readFixed32());return e},readPackedSFixed32:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readSFixed32());return e},readPackedFixed64:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readFixed64());return e},readPackedSFixed64:function(e){var t=this,n=c(this);for(e||=[];this.pos<n;)e.push(t.readSFixed64());return e},skip:function(e){var t=e&7;if(t===i.Varint)for(;this.buf[this.pos++]>127;);else if(t===i.Bytes)this.pos=this.readVarint()+this.pos;else if(t===i.Fixed32)this.pos+=4;else if(t===i.Fixed64)this.pos+=8;else throw Error(`Unimplemented type: `+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var n=new Uint8Array(t);n.set(this.buf),this.buf=n,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),te(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),te(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),te(this.buf,e&-1,this.pos),te(this.buf,Math.floor(e*o),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),te(this.buf,e&-1,this.pos),te(this.buf,Math.floor(e*o),this.pos+4),this.pos+=8},writeVarint:function(e){if(e=+e||0,e>268435455||e<0){u(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))},writeSVarint:function(e){this.writeVarint(e<0?-e*2-1:e*2)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(e.length*4),this.pos++;var t=this.pos;this.pos=ne(this.buf,e,this.pos);var n=this.pos-t;n>=128&&p(t,n,this),this.pos=t-1,this.writeVarint(n),this.pos+=n},writeFloat:function(e){this.realloc(4),r.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),r.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=this,n=e.length;this.writeVarint(n),this.realloc(n);for(var r=0;r<n;r++)t.buf[t.pos++]=e[r]},writeRawMessage:function(e,t){this.pos++;var n=this.pos;e(t,this);var r=this.pos-n;r>=128&&p(n,r,this),this.pos=n-1,this.writeVarint(r),this.pos+=r},writeMessage:function(e,t,n){this.writeTag(e,i.Bytes),this.writeRawMessage(t,n)},writePackedVarint:function(e,t){this.writeMessage(e,m,t)},writePackedSVarint:function(e,t){this.writeMessage(e,h,t)},writePackedBoolean:function(e,t){this.writeMessage(e,v,t)},writePackedFloat:function(e,t){this.writeMessage(e,g,t)},writePackedDouble:function(e,t){this.writeMessage(e,_,t)},writePackedFixed32:function(e,t){this.writeMessage(e,y,t)},writePackedSFixed32:function(e,t){this.writeMessage(e,b,t)},writePackedFixed64:function(e,t){this.writeMessage(e,x,t)},writePackedSFixed64:function(e,t){this.writeMessage(e,ee,t)},writeBytesField:function(e,t){this.writeTag(e,i.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,i.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,i.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,i.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,i.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,i.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,i.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,i.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,i.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,i.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}};function s(e,t,n){var r=n.buf,i,a=r[n.pos++];if(i=(a&112)>>4,a<128||(a=r[n.pos++],i|=(a&127)<<3,a<128)||(a=r[n.pos++],i|=(a&127)<<10,a<128)||(a=r[n.pos++],i|=(a&127)<<17,a<128)||(a=r[n.pos++],i|=(a&127)<<24,a<128)||(a=r[n.pos++],i|=(a&1)<<31,a<128))return l(e,i,t);throw Error(`Expected varint not more than 10 bytes`)}function c(e){return e.type===i.Bytes?e.readVarint()+e.pos:e.pos+1}function l(e,t,n){return n?t*4294967296+(e>>>0):(t>>>0)*4294967296+(e>>>0)}function u(e,t){var n,r;if(e>=0?(n=e%4294967296|0,r=e/4294967296|0):(n=~(-e%4294967296),r=~(-e/4294967296),n^4294967295?n=n+1|0:(n=0,r=r+1|0)),e>=0x10000000000000000||e<-0x10000000000000000)throw Error(`Given varint doesn't fit into 10 bytes`);t.realloc(10),d(n,r,t),f(r,t)}function d(e,t,n){n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos]=e&127}function f(e,t){var n=(e&7)<<4;t.buf[t.pos++]|=n|((e>>>=3)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127)))))}function p(e,t,n){var r=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.ceil(Math.log(t)/(Math.LN2*7));n.realloc(r);for(var i=n.pos-1;i>=e;i--)n.buf[i+r]=n.buf[i]}function m(e,t){for(var n=0;n<e.length;n++)t.writeVarint(e[n])}function h(e,t){for(var n=0;n<e.length;n++)t.writeSVarint(e[n])}function g(e,t){for(var n=0;n<e.length;n++)t.writeFloat(e[n])}function _(e,t){for(var n=0;n<e.length;n++)t.writeDouble(e[n])}function v(e,t){for(var n=0;n<e.length;n++)t.writeBoolean(e[n])}function y(e,t){for(var n=0;n<e.length;n++)t.writeFixed32(e[n])}function b(e,t){for(var n=0;n<e.length;n++)t.writeSFixed32(e[n])}function x(e,t){for(var n=0;n<e.length;n++)t.writeFixed64(e[n])}function ee(e,t){for(var n=0;n<e.length;n++)t.writeSFixed64(e[n])}function S(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+e[t+3]*16777216}function te(e,t,n){e[n]=t,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24}function C(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}function w(e,t,n){for(var r=``,i=t;i<n;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s>n)break;var c,l,u;s===1?a<128&&(o=a):s===2?(c=e[i+1],(c&192)==128&&(o=(a&31)<<6|c&63,o<=127&&(o=null))):s===3?(c=e[i+1],l=e[i+2],(c&192)==128&&(l&192)==128&&(o=(a&15)<<12|(c&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):s===4&&(c=e[i+1],l=e[i+2],u=e[i+3],(c&192)==128&&(l&192)==128&&(u&192)==128&&(o=(a&15)<<18|(c&63)<<12|(l&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,s=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=s}return r}function ne(e,t,n){for(var r=0,i,a;r<t.length;r++){if(i=t.charCodeAt(r),i>55295&&i<57344)if(a)if(i<56320){e[n++]=239,e[n++]=191,e[n++]=189,a=i;continue}else i=a-55296<<10|i-56320|65536,a=null;else{i>56319||r+1===t.length?(e[n++]=239,e[n++]=191,e[n++]=189):a=i;continue}else a&&=(e[n++]=239,e[n++]=191,e[n++]=189,null);i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:(i<65536?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=i&63|128)}return n}var T=re;function re(e,t){this.x=e,this.y=t}re.prototype={clone:function(){return new re(this.x,this.y)},add:function(e){return this.clone()._add(e)},sub:function(e){return this.clone()._sub(e)},mult:function(e){return this.clone()._mult(e)},div:function(e){return this.clone()._div(e)},rotate:function(e){return this.clone()._rotate(e)},matMult:function(e){return this.clone()._matMult(e)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(e){return this.x===e.x&&this.y===e.y},dist:function(e){return Math.sqrt(this.distSqr(e))},distSqr:function(e){var t=e.x-this.x,n=e.y-this.y;return t*t+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(e){return Math.atan2(this.y-e.y,this.x-e.x)},angleWith:function(e){return this.angleWithSep(e.x,e.y)},angleWithSep:function(e,t){return Math.atan2(this.x*t-this.y*e,this.x*e+this.y*t)},_matMult:function(e){var t=e[0]*this.x+e[1]*this.y,n=e[2]*this.x+e[3]*this.y;return this.x=t,this.y=n,this},_add:function(e){return this.x+=e.x,this.y+=e.y,this},_sub:function(e){return this.x-=e.x,this.y-=e.y,this},_mult:function(e){return this.x*=e,this.y*=e,this},_div:function(e){return this.x/=e,this.y/=e,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var e=this.y;return this.y=this.x,this.x=-e,this},_rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=t*this.x-n*this.y,i=n*this.x+t*this.y;return this.x=r,this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},re.convert=function(e){return e instanceof re?e:Array.isArray(e)?new re(e[0],e[1]):e};var E=T,D=O;function O(e,t,n,r,i){this.properties={},this.extent=n,this.type=0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=i,e.readFields(ie,this,t)}function ie(e,t,n){e==1?t.id=n.readVarint():e==2?k(n,t):e==3?t.type=n.readVarint():e==4&&(t._geometry=n.pos)}function k(e,t){for(var n=e.readVarint()+e.pos;e.pos<n;){var r=t._keys[e.readVarint()],i=t._values[e.readVarint()];t.properties[r]=i}}O.types=[`Unknown`,`Point`,`LineString`,`Polygon`],O.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=[],s;e.pos<t;){if(!r){var c=e.readVarint();n=c&7,r=c>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),n===1&&(s&&o.push(s),s=[]),s.push(new E(i,a));else if(n===7)s&&s.push(s[0].clone());else throw Error(`unknown command `+n)}return s&&o.push(s),o},O.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=1/0,s=-1/0,c=1/0,l=-1/0;e.pos<t;){if(!r){var u=e.readVarint();n=u&7,r=u>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),i<o&&(o=i),i>s&&(s=i),a<c&&(c=a),a>l&&(l=a);else if(n!==7)throw Error(`unknown command `+n)}return[o,c,s,l]},O.prototype.toGeoJSON=function(e,t,n){var r=this.extent*2**n,i=this.extent*e,a=this.extent*t,o=this.loadGeometry(),s=O.types[this.type],c,l;function u(e){for(var t=0;t<e.length;t++){var n=e[t],o=180-(n.y+a)*360/r;e[t]=[(n.x+i)*360/r-180,360/Math.PI*Math.atan(Math.exp(o*Math.PI/180))-90]}}switch(this.type){case 1:var d=[];for(c=0;c<o.length;c++)d[c]=o[c][0];o=d,u(o);break;case 2:for(c=0;c<o.length;c++)u(o[c]);break;case 3:for(o=A(o),c=0;c<o.length;c++)for(l=0;l<o[c].length;l++)u(o[c][l]);break}o.length===1?o=o[0]:s=`Multi`+s;var f={type:`Feature`,geometry:{type:s,coordinates:o},properties:this.properties};return`id`in this&&(f.id=this.id),f};function A(e){var t=e.length;if(t<=1)return[e];for(var n=[],r,i,a=0;a<t;a++){var o=j(e[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[e[a]]):r.push(e[a]))}return r&&n.push(r),n}function j(e){for(var t=0,n=0,r=e.length,i=r-1,a,o;n<r;i=n++)a=e[n],o=e[i],t+=(o.x-a.x)*(a.y+o.y);return t}var M=D,N=P;function P(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(F,this,t),this.length=this._features.length}function F(e,t,n){e===15?t.version=n.readVarint():e===1?t.name=n.readString():e===5?t.extent=n.readVarint():e===2?t._features.push(n.pos):e===3?t._keys.push(n.readString()):e===4&&t._values.push(I(n))}function I(e){for(var t=null,n=e.readVarint()+e.pos;e.pos<n;){var r=e.readVarint()>>3;t=r===1?e.readString():r===2?e.readFloat():r===3?e.readDouble():r===4?e.readVarint64():r===5?e.readVarint():r===6?e.readSVarint():r===7?e.readBoolean():null}return t}P.prototype.feature=function(e){if(e<0||e>=this._features.length)throw Error(`feature index out of bounds`);this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new M(this._pbf,t,this.extent,this._keys,this._values)};var ae=N,oe=se;function se(e,t){this.layers=e.readFields(ce,{},t)}function ce(e,t,n){if(e===3){var r=new ae(n,n.readVarint()+n.pos);r.length&&(t[r.name]=r)}}var le=oe;L.SVG.Tile=L.SVG.extend({initialize:function(e,t,n){L.SVG.prototype.initialize.call(this,n),this._tileCoord=e,this._size=t,this._initContainer(),this._container.setAttribute(`width`,this._size.x),this._container.setAttribute(`height`,this._size.y),this._container.setAttribute(`viewBox`,[0,0,this._size.x,this._size.y].join(` `)),this._layers={}},getCoord:function(){return this._tileCoord},getContainer:function(){return this._container},onAdd:L.Util.falseFn,addTo:function(e){if(this._map=e,this.options.interactive)for(var t in this._layers){var n=this._layers[t];n._path.style.pointerEvents=`auto`,this._map._targets[L.stamp(n._path)]=n}},removeFrom:function(e){if(this.options.interactive)for(var t in this._layers){var n=this._layers[t];delete this._map._targets[L.stamp(n._path)]}delete this._map},_initContainer:function(){L.SVG.prototype._initContainer.call(this),L.SVG.create(`rect`)},_addPath:function(e){this._rootGroup.appendChild(e._path),this._layers[L.stamp(e)]=e},_updateIcon:function(e){var t=e._path=L.SVG.create(`image`),n=e.options.icon.options,r=L.point(n.iconSize),i=n.iconAnchor||r&&r.divideBy(2,!0),a=e._point.subtract(i);t.setAttribute(`x`,a.x),t.setAttribute(`y`,a.y),t.setAttribute(`width`,r.x+`px`),t.setAttribute(`height`,r.y+`px`),t.setAttribute(`href`,n.iconUrl)}}),L.svg.tile=function(e,t,n){return new L.SVG.Tile(e,t,n)};var R=L.Class.extend({render:function(e,t){this._renderer=e,this.options=t,e._initPath(this),e._updateStyle(this)},updateStyle:function(e,t){this.options=t,e._updateStyle(this)},_getPixelBounds:function(){for(var e=this._parts,t=L.bounds([]),n=0;n<e.length;n++)for(var r=e[n],i=0;i<r.length;i++)t.extend(r[i]);var a=this._clickTolerance(),o=new L.Point(a,a);return t.min._subtract(o),t.max._add(o),t},_clickTolerance:L.Path.prototype._clickTolerance}),ue={_makeFeatureParts:function(e,t){var n=e.geometry,r;this._parts=[];for(var i=0;i<n.length;i++){for(var a=n[i],o=[],s=0;s<a.length;s++)r=a[s],o.push(L.point(r).scaleBy(t));this._parts.push(o)}},makeInteractive:function(){this._pxBounds=this._getPixelBounds()}},de=L.CircleMarker.extend({includes:R.prototype,statics:{iconCache:{}},initialize:function(e,t){this.properties=e.properties,this._makeFeatureParts(e,t)},render:function(e,t){R.prototype.render.call(this,e,t),this._radius=t.radius||L.CircleMarker.prototype.options.radius,this._updatePath()},_makeFeatureParts:function(e,t){var n=e.geometry[0];typeof n[0]==`object`&&`x`in n[0]?(this._point=L.point(n[0]).scaleBy(t),this._empty=L.Util.falseFn):(this._point=L.point(n).scaleBy(t),this._empty=L.Util.falseFn)},makeInteractive:function(){this._updateBounds()},updateStyle:function(e,t){return this._radius=t.radius||this._radius,this._updateBounds(),R.prototype.updateStyle.call(this,e,t)},_updateBounds:function(){var e=this.options.icon;if(e){var t=L.point(e.options.iconSize),n=e.options.iconAnchor||t&&t.divideBy(2,!0),r=this._point.subtract(n);this._pxBounds=new L.Bounds(r,r.add(e.options.iconSize))}else L.CircleMarker.prototype._updateBounds.call(this)},_updatePath:function(){this.options.icon?this._renderer._updateIcon(this):L.CircleMarker.prototype._updatePath.call(this)},_getImage:function(){if(this.options.icon){var e=this.options.icon.options.iconUrl,t=de.iconCache[e];if(!t){var n=this.options.icon;t=de.iconCache[e]=n.createIcon()}return t}else return null},_containsPoint:function(e){return this.options.icon?this._pxBounds.contains(e):L.CircleMarker.prototype._containsPoint.call(this,e)}}),fe=L.Polyline.extend({includes:[R.prototype,ue],initialize:function(e,t){this.properties=e.properties,this._makeFeatureParts(e,t)},render:function(e,t){t.fill=!1,R.prototype.render.call(this,e,t),this._updatePath()},updateStyle:function(e,t){t.fill=!1,R.prototype.updateStyle.call(this,e,t)}}),pe=L.Polygon.extend({includes:[R.prototype,ue],initialize:function(e,t){this.properties=e.properties,this._makeFeatureParts(e,t)},render:function(e,t){R.prototype.render.call(this,e,t),this._updatePath()}});L.VectorGrid=L.GridLayer.extend({options:{rendererFactory:L.svg.tile,vectorTileLayerStyles:{},interactive:!1},initialize:function(e){L.setOptions(this,e),L.GridLayer.prototype.initialize.apply(this,arguments),this.options.getFeatureId&&(this._vectorTiles={},this._overriddenStyles={},this.on(`tileunload`,function(e){var t=this._tileCoordsToKey(e.coords),n=this._vectorTiles[t];n&&this._map&&n.removeFrom(this._map),delete this._vectorTiles[t]},this)),this._dataLayerNames={}},createTile:function(e,t){var n=this.options.getFeatureId,r=this.getTileSize(),i=this.options.rendererFactory(e,r,this.options),a=this._getVectorTilePromise(e);return n&&(this._vectorTiles[this._tileCoordsToKey(e)]=i,i._features={}),a.then(function(r){for(var a in r.layers){this._dataLayerNames[a]=!0;for(var o=r.layers[a],s=this.getTileSize().divideBy(o.extent),c=this.options.vectorTileLayerStyles[a]||L.Path.prototype.options,l=0;l<o.features.length;l++){var u=o.features[l],d,f=c;if(n){d=this.options.getFeatureId(u);var p=this._overriddenStyles[d];p&&(f=p[a]?p[a]:p)}if(f instanceof Function&&(f=f(u.properties,e.z)),f instanceof Array||(f=[f]),f.length){for(var m=this._createLayer(u,s),h=0;h<f.length;h++){var g=L.extend({},L.Path.prototype.options,f[h]);m.render(i,g),i._addPath(m)}this.options.interactive&&m.makeInteractive(),n&&(i._features[d]={layerName:a,feature:m})}}}this._map!=null&&i.addTo(this._map),L.Util.requestAnimFrame(t.bind(e,null,null))}.bind(this)),i.getContainer()},setFeatureStyle:function(e,t){for(var n in this._overriddenStyles[e]=t,this._vectorTiles){var r=this._vectorTiles[n],i=r._features[e];if(i){var a=i.feature,o=t;t[i.layerName]&&(o=t[i.layerName]),this._updateStyles(a,r,o)}}return this},resetFeatureStyle:function(e){for(var t in delete this._overriddenStyles[e],this._vectorTiles){var n=this._vectorTiles[t],r=n._features[e];if(r){var i=r.feature,a=this.options.vectorTileLayerStyles[r.layerName]||L.Path.prototype.options;this._updateStyles(i,n,a)}}return this},getDataLayerNames:function(){return Object.keys(this._dataLayerNames)},_updateStyles:function(e,t,n){n=n instanceof Function?n(e.properties,t.getCoord().z):n,n instanceof Array||(n=[n]);for(var r=0;r<n.length;r++){var i=L.extend({},L.Path.prototype.options,n[r]);e.updateStyle(t,i)}},_createLayer:function(e,t,n){var r;switch(e.type){case 1:r=new de(e,t);break;case 2:r=new fe(e,t);break;case 3:r=new pe(e,t);break}return this.options.interactive&&r.addEventParent(this),r}}),L.vectorGrid=function(e){return new L.VectorGrid(e)},L.VectorGrid.Protobuf=L.VectorGrid.extend({options:{subdomains:`abc`,fetchOptions:{}},initialize:function(e,t){this._url=e,L.VectorGrid.prototype.initialize.call(this,t)},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},_getSubdomain:L.TileLayer.prototype._getSubdomain,_getVectorTilePromise:function(e){var t={s:this._getSubdomain(e),x:e.x,y:e.y,z:e.z};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}var i=L.Util.template(this._url,L.extend(t,this.options));return fetch(i,this.options.fetchOptions).then(function(e){return e.ok?e.blob().then(function(e){var t=new FileReader;return new Promise(function(r){t.addEventListener(`loadend`,function(){return r(new le(new n(t.result)))}),t.readAsArrayBuffer(e)})}):{layers:[]}}).then(function(e){for(var t in e.layers){for(var n=[],r=0;r<e.layers[t].length;r++){var i=e.layers[t].feature(r);i.geometry=i.loadGeometry(),n.push(i)}e.layers[t].features=n}return e})}}),L.vectorGrid.protobuf=function(e,t){return new L.VectorGrid.Protobuf(e,t)};var me=e(`'use strict';

var simplify_1 = simplify$1;

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify$1(points, tolerance) {

    var sqTolerance = tolerance * tolerance,
        len = points.length,
        first = 0,
        last = len - 1,
        stack = [],
        i, maxSqDist, sqDist, index;

    // always retain the endpoints (1 is the max value)
    points[first][2] = 1;
    points[last][2] = 1;

    // avoid recursion by using a stack
    while (last) {

        maxSqDist = 0;

        for (i = first + 1; i < last; i++) {
            sqDist = getSqSegDist(points[i], points[first], points[last]);

            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }

        if (maxSqDist > sqTolerance) {
            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate
            stack.push(first);
            stack.push(index);
            first = index;

        } else {
            last = stack.pop();
            first = stack.pop();
        }
    }
}

// square distance from a point to a segment
function getSqSegDist(p, a, b) {

    var x = a[0], y = a[1],
        bx = b[0], by = b[1],
        px = p[0], py = p[1],
        dx = bx - x,
        dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}

var convert_1 = convert$1;

var simplify = simplify_1;

// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert$1(data, tolerance) {
    var features = [];

    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], tolerance);
        }
    } else if (data.type === 'Feature') {
        convertFeature(features, data, tolerance);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, tolerance);
    }
    return features;
}

function convertFeature(features, feature, tolerance) {
    if (feature.geometry === null) {
        // ignore features with null geometry
        return;
    }

    var geom = feature.geometry,
        type = geom.type,
        coords = geom.coordinates,
        tags = feature.properties,
        i, j, rings, projectedRing;

    if (type === 'Point') {
        features.push(create(tags, 1, [projectPoint(coords)]));

    } else if (type === 'MultiPoint') {
        features.push(create(tags, 1, project(coords)));

    } else if (type === 'LineString') {
        features.push(create(tags, 2, [project(coords, tolerance)]));

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            projectedRing = project(coords[i], tolerance);
            if (type === 'Polygon') { projectedRing.outer = (i === 0); }
            rings.push(projectedRing);
        }
        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));

    } else if (type === 'MultiPolygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                projectedRing = project(coords[i][j], tolerance);
                projectedRing.outer = (j === 0);
                rings.push(projectedRing);
            }
        }
        features.push(create(tags, 3, rings));

    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geom.geometries.length; i++) {
            convertFeature(features, {
                geometry: geom.geometries[i],
                properties: tags
            }, tolerance);
        }

    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }
}

function create(tags, type, geometry) {
    var feature = {
        geometry: geometry,
        type: type,
        tags: tags || null,
        min: [2, 1], // initial bbox values;
        max: [-1, 0]  // note that coords are usually in [0..1] range
    };
    calcBBox(feature);
    return feature;
}

function project(lonlats, tolerance) {
    var projected = [];
    for (var i = 0; i < lonlats.length; i++) {
        projected.push(projectPoint(lonlats[i]));
    }
    if (tolerance) {
        simplify(projected, tolerance);
        calcSize(projected);
    }
    return projected;
}

function projectPoint(p) {
    var sin = Math.sin(p[1] * Math.PI / 180),
        x = (p[0] / 360 + 0.5),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);

    y = y < 0 ? 0 :
        y > 1 ? 1 : y;

    return [x, y, 0];
}

// calculate area and length of the poly
function calcSize(points) {
    var area = 0,
        dist = 0;

    for (var i = 0, a, b; i < points.length - 1; i++) {
        a = b || points[i];
        b = points[i + 1];

        area += a[0] * b[1] - b[0] * a[1];

        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation
        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
    }
    points.area = Math.abs(area / 2);
    points.dist = dist;
}

// calculate the feature bounding box for faster clipping later
function calcBBox(feature) {
    var geometry = feature.geometry,
        min = feature.min,
        max = feature.max;

    if (feature.type === 1) { calcRingBBox(min, max, geometry); }
    else { for (var i = 0; i < geometry.length; i++) { calcRingBBox(min, max, geometry[i]); } }

    return feature;
}

function calcRingBBox(min, max, points) {
    for (var i = 0, p; i < points.length; i++) {
        p = points[i];
        min[0] = Math.min(p[0], min[0]);
        max[0] = Math.max(p[0], max[0]);
        min[1] = Math.min(p[1], min[1]);
        max[1] = Math.max(p[1], max[1]);
    }
}

var tile = transformTile;
var point = transformPoint;

// Transforms the coordinates of each feature in the given tile from
// mercator-projected space into (extent x extent) tile space.
function transformTile(tile, extent) {
    if (tile.transformed) { return tile; }

    var z2 = tile.z2,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        if (type === 1) {
            for (j = 0; j < geom.length; j++) { geom[j] = transformPoint(geom[j], extent, z2, tx, ty); }

        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = geom[j];
                for (k = 0; k < ring.length; k++) { ring[k] = transformPoint(ring[k], extent, z2, tx, ty); }
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(p, extent, z2, tx, ty) {
    var x = Math.round(extent * (p[0] * z2 - tx)),
        y = Math.round(extent * (p[1] * z2 - ty));
    return [x, y];
}

var transform$1 = {
	tile: tile,
	point: point
};

var clip_1 = clip$1;

/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   ____|____/
 *     |        |
 */

function clip$1(features, scale, k1, k2, axis, intersect, minAll, maxAll) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll <= k2) { return features; } // trivial accept
    else if (minAll > k2 || maxAll < k1) { return null; } // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i],
            geometry = feature.geometry,
            type = feature.type,
            min, max;

        min = feature.min[axis];
        max = feature.max[axis];

        if (min >= k1 && max <= k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (min > k2 || max < k1) { continue; } // trivial reject

        var slices = type === 1 ?
                clipPoints(geometry, k1, k2, axis) :
                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);

        if (slices.length) {
            // if a feature got clipped, it will likely get clipped on the next zoom level as well,
            // so there's no need to recalculate bboxes
            clipped.push({
                geometry: slices,
                type: type,
                tags: features[i].tags || null,
                min: feature.min,
                max: feature.max
            });
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geometry, k1, k2, axis) {
    var slice = [];

    for (var i = 0; i < geometry.length; i++) {
        var a = geometry[i],
            ak = a[axis];

        if (ak >= k1 && ak <= k2) { slice.push(a); }
    }
    return slice;
}

function clipGeometry(geometry, k1, k2, axis, intersect, closed) {

    var slices = [];

    for (var i = 0; i < geometry.length; i++) {

        var ak = 0,
            bk = 0,
            b = null,
            points = geometry[i],
            area = points.area,
            dist = points.dist,
            outer = points.outer,
            len = points.length,
            a, j, last;

        var slice = [];

        for (j = 0; j < len - 1; j++) {
            a = b || points[j];
            b = points[j + 1];
            ak = bk || a[axis];
            bk = b[axis];

            if (ak < k1) {

                if ((bk > k2)) { // ---|-----|-->
                    slice.push(intersect(a, b, k1), intersect(a, b, k2));
                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }

                } else if (bk >= k1) { slice.push(intersect(a, b, k1)); } // ---|-->  |

            } else if (ak > k2) {

                if ((bk < k1)) { // <--|-----|---
                    slice.push(intersect(a, b, k2), intersect(a, b, k1));
                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }

                } else if (bk <= k2) { slice.push(intersect(a, b, k2)); } // |  <--|---

            } else {

                slice.push(a);

                if (bk < k1) { // <--|---  |
                    slice.push(intersect(a, b, k1));
                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }

                } else if (bk > k2) { // |  ---|-->
                    slice.push(intersect(a, b, k2));
                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }
                }
                // | --> |
            }
        }

        // add the last point
        a = points[len - 1];
        ak = a[axis];
        if (ak >= k1 && ak <= k2) { slice.push(a); }

        // close the polygon if its endpoints are not the same after clipping

        last = slice[slice.length - 1];
        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) { slice.push(slice[0]); }

        // add the final slice
        newSlice(slices, slice, area, dist, outer);
    }

    return slices;
}

function newSlice(slices, slice, area, dist, outer) {
    if (slice.length) {
        // we don't recalculate the area/length of the unclipped geometry because the case where it goes
        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work
        slice.area = area;
        slice.dist = dist;
        if (outer !== undefined) { slice.outer = outer; }

        slices.push(slice);
    }
    return [];
}

var clip$2 = clip_1;

var wrap_1 = wrap$1;

function wrap$1(features, buffer, intersectX) {
    var merged = features,
        left  = clip$2(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy
        right = clip$2(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy

    if (left || right) {
        merged = clip$2(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy

        if (left) { merged = shiftFeatureCoords(left, 1).concat(merged); } // merge left into center
        if (right) { merged = merged.concat(shiftFeatureCoords(right, -1)); } // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 1) {
            newGeometry = shiftCoords(feature.geometry, offset);
        } else {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        }

        newFeatures.push({
            geometry: newGeometry,
            type: type,
            tags: feature.tags,
            min: [feature.min[0] + offset, feature.min[1]],
            max: [feature.max[0] + offset, feature.max[1]]
        });
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.area = points.area;
    newPoints.dist = points.dist;

    for (var i = 0; i < points.length; i++) {
        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);
    }
    return newPoints;
}

var tile$1 = createTile$1;

function createTile$1(features, z2, tx, ty, tolerance, noSimplify) {
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z2: z2,
        transformed: false,
        min: [2, 1],
        max: [-1, 0]
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, noSimplify);

        var min = features[i].min,
            max = features[i].max;

        if (min[0] < tile.min[0]) { tile.min[0] = min[0]; }
        if (min[1] < tile.min[1]) { tile.min[1] = min[1]; }
        if (max[0] > tile.max[0]) { tile.max[0] = max[0]; }
        if (max[1] > tile.max[1]) { tile.max[1] = max[1]; }
    }
    return tile;
}

function addFeature(tile, feature, tolerance, noSimplify) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [],
        sqTolerance = tolerance * tolerance,
        i, j, ring, p;

    if (type === 1) {
        for (i = 0; i < geom.length; i++) {
            simplified.push(geom[i]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else {

        // simplify and transform projected coordinates for tile geometry
        for (i = 0; i < geom.length; i++) {
            ring = geom[i];

            // filter out tiny polylines & polygons
            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||
                                (type === 3 && ring.area < sqTolerance))) {
                tile.numPoints += ring.length;
                continue;
            }

            var simplifiedRing = [];

            for (j = 0; j < ring.length; j++) {
                p = ring[j];
                // keep points with importance > tolerance
                if (noSimplify || p[2] > sqTolerance) {
                    simplifiedRing.push(p);
                    tile.numSimplified++;
                }
                tile.numPoints++;
            }

            if (type === 3) { rewind(simplifiedRing, ring.outer); }

            simplified.push(simplifiedRing);
        }
    }

    if (simplified.length) {
        tile.features.push({
            geometry: simplified,
            type: type,
            tags: feature.tags || null
        });
    }
}

function rewind(ring, clockwise) {
    var area = signedArea(ring);
    if (area < 0 === clockwise) { ring.reverse(); }
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
    }
    return sum;
}

var index = geojsonvt;

var convert = convert_1;
var transform = transform$1;
var clip = clip_1;
var wrap = wrap_1;
var createTile = tile$1;     // final simplified tile generation


function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) { console.time('preprocess data'); }

    var z2 = 1 << options.maxZoom, // 2^z
        features = convert(data, options.tolerance / (z2 * options.extent));

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = wrap(features, options.buffer / options.extent, intersectX);

    // start slicing from the top tile down
    if (features.length) { this.splitTile(features, 0, 0, 0); }

    if (debug) {
        if (features.length) { console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints); }
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    solidChildren: false,   // whether to tile solid square tiles further
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {
    var this$1 = this;


    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug,
        solid = null;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this$1.tiles[id],
            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);

        if (!tile) {
            if (debug > 1) { console.time('creation'); }

            tile = this$1.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);
            this$1.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this$1.stats[key] = (this$1.stats[key] || 0) + 1;
                this$1.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) { continue; }

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) { continue; }

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) { continue; }
        }

        // stop tiling if the tile is solid clipped square
        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) {
            if (cz) { solid = z; } // and remember the zoom if we're drilling down
            continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (debug > 1) { console.time('clipping'); }

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);
        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);

        if (left) {
            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (right) {
            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (debug > 1) { console.timeEnd('clipping'); }

        if (tl) { stack.push(tl, z + 1, x * 2,     y * 2); }
        if (bl) { stack.push(bl, z + 1, x * 2,     y * 2 + 1); }
        if (tr) { stack.push(tr, z + 1, x * 2 + 1, y * 2); }
        if (br) { stack.push(br, z + 1, x * 2 + 1, y * 2 + 1); }
    }

    return solid;
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var this$1 = this;

    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) { return transform.tile(this.tiles[id], extent); }

    if (debug > 1) { console.log('drilling down to z%d-%d-%d', z, x, y); }

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this$1.tiles[toID(z0, x0, y0)];
    }

    if (!parent || !parent.source) { return null; }

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (debug > 1) { console.log('found parent tile z%d-%d-%d', z0, x0, y0); }

    // it parent tile is a solid clipped square, return it instead since it's identical
    if (isClippedSquare(parent, extent, options.buffer)) { return transform.tile(parent, extent); }

    if (debug > 1) { console.time('drilling down'); }
    var solid = this.splitTile(parent.source, z0, x0, y0, z, x, y);
    if (debug > 1) { console.timeEnd('drilling down'); }

    // one of the parent tiles was a solid clipped square
    if (solid !== null) {
        var m = 1 << (z - solid);
        id = toID(solid, Math.floor(x / m), Math.floor(y / m));
    }

    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;
};

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function intersectX(a, b, x) {
    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];
}
function intersectY(a, b, y) {
    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];
}

function extend(dest, src) {
    for (var i in src) { dest[i] = src[i]; }
    return dest;
}

// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further
function isClippedSquare(tile, extent, buffer) {

    var features = tile.source;
    if (features.length !== 1) { return false; }

    var feature = features[0];
    if (feature.type !== 3 || feature.geometry.length > 1) { return false; }

    var len = feature.geometry[0].length;
    if (len !== 5) { return false; }

    for (var i = 0; i < len; i++) {
        var p = transform.point(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);
        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||
            (p[1] !== -buffer && p[1] !== extent + buffer)) { return false; }
    }

    return true;
}

var identity = function(x) {
  return x;
};

var transform$3 = function(topology) {
  if ((transform = topology.transform) == null) { return identity; }
  var transform,
      x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) { x0 = y0 = 0; }
    point[0] = (x0 += point[0]) * kx + dx;
    point[1] = (y0 += point[1]) * ky + dy;
    return point;
  };
};

var bbox = function(topology) {
  var bbox = topology.bbox;

  function bboxPoint(p0) {
    p1[0] = p0[0], p1[1] = p0[1], t(p1);
    if (p1[0] < x0) { x0 = p1[0]; }
    if (p1[0] > x1) { x1 = p1[0]; }
    if (p1[1] < y0) { y0 = p1[1]; }
    if (p1[1] > y1) { y1 = p1[1]; }
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  if (!bbox) {
    var t = transform$3(topology), p0, p1 = new Array(2), name,
        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

    topology.arcs.forEach(function(arc) {
      var i = -1, n = arc.length;
      while (++i < n) {
        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);
        if (p1[0] < x0) { x0 = p1[0]; }
        if (p1[0] > x1) { x1 = p1[0]; }
        if (p1[1] < y0) { y0 = p1[1]; }
        if (p1[1] > y1) { y1 = p1[1]; }
      }
    });

    for (name in topology.objects) {
      bboxGeometry(topology.objects[name]);
    }

    bbox = topology.bbox = [x0, y0, x1, y1];
  }

  return bbox;
};

var reverse = function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) { t = array[i], array[i++] = array[j], array[j] = t; }
};

var feature = function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature$1(topology, o); })}
      : feature$1(topology, o);
};

function feature$1(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = transform$3(topology),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) { points.pop(); }
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k].slice(), k));
    }
    if (i < 0) { reverse(points, n); }
  }

  function point(p) {
    return transformPoint(p.slice());
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) { arc(arcs[i], points); }
    if (points.length < 2) { points.push(points[0].slice()); }
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) { points.push(points[0].slice()); }
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}

var stitch = function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) { p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; }); }
    else { p1 = arc[arc.length - 1]; }
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) { fragments.push([i]); } });

  return fragments;
};

function extractArcs(topology, object$$1, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object$$1);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) { arcs.push(geoms[0].i); } });

  return arcs;
}

function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) { a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0]; }
  return Math.abs(area); // Note: doubled area!
}

var bisect = function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) { lo = mid + 1; }
    else { hi = mid; }
  }
  return lo;
};

var slicers = {};
var options;

onmessage = function (e) {
	if (e.data[0] === 'slice') {
		// Given a blob of GeoJSON and some topojson/geojson-vt options, do the slicing.
		var geojson = e.data[1];
		options     = e.data[2];

		if (geojson.type && geojson.type === 'Topology') {
			for (var layerName in geojson.objects) {
				slicers[layerName] = index(
					feature(geojson, geojson.objects[layerName])
				, options);
			}
		} else {
			slicers[options.vectorTileLayerName] = index(geojson, options);
		}

	} else if (e.data[0] === 'get') {
		// Gets the vector tile for the given coordinates, sends it back as a message
		var coords = e.data[1];

		var tileLayers = {};
		for (var layerName in slicers) {
			var slicedTileLayer = slicers[layerName].getTile(coords.z, coords.x, coords.y);

			if (slicedTileLayer) {
				var vectorTileLayer = {
					features: [],
					extent: options.extent,
					name: options.vectorTileLayerName,
					length: slicedTileLayer.features.length
				};

				for (var i in slicedTileLayer.features) {
					var feat = {
						geometry: slicedTileLayer.features[i].geometry,
						properties: slicedTileLayer.features[i].tags,
						type: slicedTileLayer.features[i].type	// 1 = point, 2 = line, 3 = polygon
					};
					vectorTileLayer.features.push(feat);
				}
				tileLayers[layerName] = vectorTileLayer;
			}
		}
		postMessage({ layers: tileLayers, coords: coords });
	}
};
//# sourceMappingURL=slicerWebWorker.js.worker.map
`,`text/plain; charset=us-ascii`,!1);L.VectorGrid.Slicer=L.VectorGrid.extend({options:{vectorTileLayerName:`sliced`,extent:4096,maxZoom:14},initialize:function(e,t){L.VectorGrid.prototype.initialize.call(this,t);var t={};for(var n in this.options)n!==`rendererFactory`&&n!==`vectorTileLayerStyles`&&typeof this.options[n]!=`function`&&(t[n]=this.options[n]);this._worker=new Worker(me),this._worker.postMessage([`slice`,e,t])},_getVectorTilePromise:function(e){var t=this,n=new Promise(function(n){t._worker.addEventListener(`message`,function r(i){i.data.coords&&i.data.coords.x===e.x&&i.data.coords.y===e.y&&i.data.coords.z===e.z&&(n(i.data),t._worker.removeEventListener(`message`,r))})});return this._worker.postMessage([`get`,e]),n}}),L.vectorGrid.slicer=function(e,t){return new L.VectorGrid.Slicer(e,t)},L.Canvas.Tile=L.Canvas.extend({initialize:function(e,t,n){L.Canvas.prototype.initialize.call(this,n),this._tileCoord=e,this._size=t,this._initContainer(),this._container.setAttribute(`width`,this._size.x),this._container.setAttribute(`height`,this._size.y),this._layers={},this._drawnLayers={},this._drawing=!0,n.interactive&&(this._container.style.pointerEvents=`auto`)},getCoord:function(){return this._tileCoord},getContainer:function(){return this._container},getOffset:function(){return this._tileCoord.scaleBy(this._size).subtract(this._map.getPixelOrigin())},onAdd:L.Util.falseFn,addTo:function(e){this._map=e},removeFrom:function(e){delete this._map},_onClick:function(e){var t=this._map.mouseEventToLayerPoint(e).subtract(this.getOffset()),n,r;for(var i in this._layers)n=this._layers[i],n.options.interactive&&n._containsPoint(t)&&!this._map._draggableMoved(n)&&(r=n);r&&(L.DomEvent.fakeStop(e),this._fireEvent([r],e))},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e).subtract(this.getOffset());this._handleMouseHover(e,t)}},_updateIcon:function(e){if(this._drawing){var t=e.options.icon.options,n=L.point(t.iconSize),r=t.iconAnchor||n&&n.divideBy(2,!0),i=e._point.subtract(r),a=this._ctx,o=e._getImage();o.complete?a.drawImage(o,i.x,i.y,n.x,n.y):L.DomEvent.on(o,`load`,function(){a.drawImage(o,i.x,i.y,n.x,n.y)}),this._drawnLayers[e._leaflet_id]=e}}}),L.canvas.tile=function(e,t,n){return new L.Canvas.Tile(e,t,n)}})();var P=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=`,F=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==`,I=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC`;export{M as a,ie as c,E as d,v as f,N as i,O as l,F as n,j as o,P as r,A as s,I as t,re as u};