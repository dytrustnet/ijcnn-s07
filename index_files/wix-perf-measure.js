!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wix-perf-measure",[],t):"object"==typeof exports?exports["wix-perf-measure"]=t():e["wix-perf-measure"]=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://static.parastorage.com/services/wix-perf-measure/1.334.0/",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"m",(function(){return o})),n.d(t,"r",(function(){return u})),n.d(t,"n",(function(){return c})),n.d(t,"o",(function(){return a})),n.d(t,"q",(function(){return f})),n.d(t,"l",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"f",(function(){return v})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return w}));var r=n(1);function i(){}var o=function(e){return""+r.d+e},u=Math.round,c=Math.max,a=Math.min;function f(e){return function(){return Promise.reject(e)}}function s(e){return function(t){return typeof t===e}}var l=s("undefined"),d=s("number"),p=s("boolean");s("string");function v(e){return e&&e.replace(/\?.*$/,"")}function m(e,t){var n;return null==e.getEntriesByType||null==(n=e.getEntriesByType(t))?void 0:n[0]}function b(e,t){return e.then((function(e){return e[t]}))}function h(e,t,n){return function(){var r=e.indexOf(t);r>-1&&(e.splice(r,1),0===e.length&&n())}}function y(e){return function(){return e.disconnect()}}function g(e,t){if(t)return t;var n=e&&e.closest("*[id]");return n?n.id:void 0}function j(e,t,n){l(n)||(e[t]=/^is/.test(t)?!!n:n)}function O(e){return Promise.allSettled(e).then((function(e){return e.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value}))}))}function w(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t){O(n).then((function(n){var r=n.reduce((function(e,t){return Object.assign(e,t)}),{});r.entryType=e,t(r)}))}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var r=1e4,i="\u23f1",o={capture:!0,passive:!0},u=Object.assign({once:!0},o)},function(e,t,n){"use strict";function r(e){var t;return e.wixBiSession||(null==(t=e.bi)?void 0:t.wixBiSession)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r;function i(t,n,i,o){Object.defineProperty(o,"info",{value:function(){function u(e){e?e.default(o):c()}function c(){console.info("Failed to load info")}void 0===e&&(t.process={env:{}}),r||(r=new Promise((function(e,t){if(!i)return t();var r=n.createElement("script");r.src=i.replace("measure.","measure-info."),r.onload=e,r.onerror=t,n.head.appendChild(r)}))),r.then((function(){"function"==typeof requirejs?requirejs(["wix-perf-measure-info"],u,c):u(t["wix-perf-measure-info"])})).catch(c)}})}}).call(this,n(4))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,f=[],s=!1,l=-1;function d(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&p())}function p(){if(!s){var e=c(d);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||s||c(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1);function o(e,t,n,r){void 0===r&&(r=!0),e.addEventListener(t,n,r?i.c:i.b)}function u(e,t,n,r){void 0===r&&(r=!0),e.removeEventListener(t,n,r?i.c:i.b)}var c=f((function(e){return"loading"!==e}),"DOMContentLoaded"),a=f((function(e){return"complete"===e}),"load");function f(e,t){var n;return function(r){return n||(n=function(e,t,n){return new Promise((function(r){t(e.document.readyState)?r(0):o(e,n,(function(e){var t=e.timeStamp;return r(t)}))}))}(r,e,t)),n}}function s(e,t,n,r){void 0===r&&(r=e),r.dispatchEvent(new e.CustomEvent(t,{detail:n}))}function l(e){var t=e[0];return new Promise((function(e){var n=t.document;if(n.hidden)return u("visibilitychange",0);function i(e){return function(t){var n=t.timeStamp;return u(e,n)}}function u(t,n){e({entryType:"visibility",type:t,startTime:Object(r.r)(n)})}o(n,"visibilitychange",i("visibilitychange")),o(t,"unload",i("unload"))}))}var d=n(2),p={__proto__:{load:function(e,t){var n=t.dataset,i=t.src;if(Object.entries(p).map((function(e){var t=e[0],r=e[1];return[n[t],t,r]})).filter((function(e){var t=e[0];return!Object(r.l)(t)})).forEach((function(e){var t=e[0],n=e[1],i=e[2];if(Object(r.j)(i))t=!0;else if(Object(r.k)(i)){var o=Number(t);t=Number.isNaN(o)?i:o}p[n]=t})),i){p.src=i;var o=/\d+\.\d+\.\d+/.exec(i);o&&(p.version=o[0])}!p.clientType&&Object(d.a)(e)&&(p.clientType="ugc")}},resourceDebounce:3e3,taskDelta:300,lcpMin:500,downloadToRenderDelta:1e3,longTask:60,eventDelta:500,ttiDurationInc:2e3,ignoreResources:"cdn_detect,-analytics,perf-measure",label:"wixPerformanceMeasurements",clientType:"",fcpPolyfill:"wixFirstPaint",fcpPolyfillId:"wix-first-paint",pageEvent:"wixPageMeasurements",noMeasure:!1,log:!1};var v=p;var m={entryType:!0,clientType:!0,dns:!0,tcp:!0,ssl:!0,ttfb:!0,pageCaching:!0,_brandId:!0,viewerName:!0,v:!0,dc:!0,microPop:!0,cdn:!0,msid:!0,pageId:!0,fp:!0,fcp:!0,tti:!0,tbt:!0,lcp:!0,lcpSize:!0,closestId:!0,lcpTag:!0,cls:!0,countCls:!0,clsId:!0,clsTag:!0,ttlb:!0,dcl:!0,isSsr:!0,ssrDuration:!0,startTime:!0,duration:!0,delay:!0,action:!0,type:!0,pn:!0,simLH6:!0,isMobile:!0,maybeBot:!0,btype:!0};function b(e,t){var n=e.consentPolicyManager;return Symbol.iterator in t||y(n)?t:Object.entries(t).filter((function(e){var t=e[0];return m[t]})).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})}function h(e,t){var n=t.consentPolicyManager,i=/^https?:\/\/(?:www\.)?(.*)/.exec(e),o=i?i[1]:e;return y(n)?o:Object(r.f)(o)}function y(e){var t,n;return!1!==(null==e||null==(t=e.getCurrentConsentPolicy())||null==(n=t.policy)?void 0:n.analytics)}function g(e){var t=e[1];return a(window).then((function(){var e,n,i=Math.round,o=Object(r.h)(t,"navigation");if(o){var u=o,c=u.duration,a=u.transferSize,f=u.decodedBodySize;n=0,e={duration:i(c),transferSize:a,decodedBodySize:f}}else{n=(o=t.timing).navigationStart,e={duration:o.loadEventStart-n}}var s=o,l=s.responseEnd,d=s.domContentLoadedEventEnd;e.ttlb=i(l-n),e.dcl=i(d-n),e.entryType="navigation-finish";var p=function(e){var t=e.requestStart,n=e.responseStart,i=e.responseEnd,o=e.transferSize,u=e.encodedBodySize;if(Object(r.k)(o)){if(0===o)return"browser";if(o<u)return"eTag"}else{if(n-t<13)return"browser";if(i-n<13)return"maybe eTag"}if(i-n<333)return"maybe CDN"}(o);return p&&(e.pageCaching=p),e}))}var j=["microPop","is_rollout","is_platform_loaded","maybeBot","isjp"],O={is_rollout:"isRollout",is_platform_loaded:"isPlatformLoaded",isjp:"maybeBot"};function w(e){var t=e.URL;if(!t)return Promise.resolve();var n=new t(v.src).origin;return fetch(n+"/cdn_detect",{method:"GET",mode:"cors",cache:"no-cache"}).then((function(e){return e.headers.get("CDN-seen")})).catch(r.p)}function T(e,t,n,i){if(void 0===n&&(n=r.p),void 0===i&&(i=!0),e){var o=e.supportedEntryTypes;if(o&&o.includes(t)){var u=new e((function(e,t){return n(e.getEntries(),t)}));try{u.observe({type:t,buffered:i})}catch(e){u.observe({entryTypes:[t]})}return u}}}var S,P=function(e){var t=e.initiatorType,n=e.name;return"script"===t||"link"===t&&/\.js$/.test(n)},E=function(e){var t=e.initiatorType,n=e.name;return"img"===t||"image"===t||"css"===t&&/\.(?:jpe?g|png|webp|gif)/i.test(n)},x=function(e){var t=e.initiatorType,n=e.name;return"css"===t&&n.includes("font")||/\.(?:woff2?|ttf|eot)/i.test(n)},M=[];function I(e,t,n){if(1===M.push(t)){var i=v.ignoreResources.split(",");S=T(e,"resource",(function(e){(e=e.filter((function(e){var t=e.name;return!i.some((function(e){return t.includes(e)}))}))).length&&M.forEach((function(t){return t(e)}))}),n)}return{observer:S,finish:Object(r.i)(M,t,Object(r.e)(S))}}function R(e,t,n){var i=e[2],o=e[3],u=e[4],c=void 0===n?{}:n,a=c.filter,f=c.tag,s=void 0===f||f,l=c.debounce,d=void 0===l?v.resourceDebounce:l,p=new Promise((function(e,t){var n=[],r=o(l,d),c=I(i,(function(e){a&&(e=e.filter(a)),e.length&&(n.push.apply(n,e),u(r),r=o(l,d))}),!0),f=c.observer,s=c.finish;function l(){if(!f)return t();var r=null==f.takeRecords?void 0:f.takeRecords();r&&n.push.apply(n,r),s(),e(n)}})).then((function(e){var n=Math.round,i=e.length;if(!i)throw t;var o=e.reduce((function(e,t){var n=t.transferSize,i=t.responseStart,o=t.responseEnd;return{tbd:e.tbd+n,firstResponse:i>0&&i<e.firstResponse?i:e.firstResponse,lastResponse:Object(r.n)(e.lastResponse,o)}}),{tbd:0,firstResponse:1e6,lastResponse:0}),u=o.tbd,c=o.firstResponse,a=o.lastResponse,f=e.filter((function(e){var t=e.requestStart;return Object(r.k)(t)})).map((function(e){var t=e.requestStart;return e.responseStart-t})).sort(),s=f.length,l=s>>1,d=Object(r.o)(c,a),p={count:i,startTime:n(d),duration:n(a-d),mttfb:n(s%2?f[l]:(f[l-1]+f[l])/2),attfb:n(f.reduce((function(e,t){return e+t}),0)/s)};return Number.isNaN(u)||(p.tbd=u),p})).catch((function(){return{count:0}}));return s?p.then((function(e){var n=(r=t,r[0].toUpperCase()+r.slice(1));var r;return Object.entries(e).reduce((function(e,t){var r=t[0],i=t[1];return e[r+n]=i,e}),{})})):p}function k(e,t,n,i){return new Promise((function(o,u){var c=T(e,t,(function(e){return n(e,(function(e){Object(r.e)(c)(),o(e)}))}),i);c||u(t)}))}var D={"first-paint":"fp","first-contentful-paint":"fcp"};function _(e){var t=e[0],n=e[2],i={entryType:"initial-paint"};return k(n,"paint",(function(e,t){var n=!1;e.forEach((function(e){var t=e.name,o=e.startTime;i[t=D[t]||t]=Object(r.r)(o),"fcp"===t&&(n=!0)})),n&&t(i)})).catch((function(){return function(e,t){return new Promise((function(n,i){var u=v.fcpPolyfill,a=v.fcpPolyfillId;function f(){var i=Object(r.r)(e[u]);n({entryType:t,fp:i,fcp:i})}u in e?f():(o(e,u,f),c(e).then((function(){e.document.getElementById(a)||i(t)})))}))}(t,i.entryType)}))}function C(e,t,n){var i=e[0],o=e[2],u=e[3],a=e[4],f=v.resourceDebounce,s=v.taskDelta,l=v.ttiDurationInc;return t.then((function(t){return new Promise((function(l){var d=t,p=!1,m=0,b=[],h=function(e,t){var n=e[0],i=n.requestAnimationFrame,o=n.cancelAnimationFrame,u=e[1],c=T(e[2],"longtask",t,!1);if(c)return Object(r.e)(c);var a=u.now(),f=v.longTask,s=i((function e(n){var r=n-a;r>=f&&t([{startTime:a,duration:r}]);a=n,s=i(e)}));return function(){return o(s)}}(e,(function(e){b.push.apply(b,e),m&&(a(m),w())})),y=c(i),g=u(w,f),j=I(o,(function(e){p?a(g):(e=e.filter((function(e){return"fetch"===(t=e.initiatorType)||"xmlhttprequest"===t||P(e);var t}))).length&&(d=e.reduce((function(e,t){var n=t.startTime,i=t.duration;return Object(r.n)(e,n+i)}),d),y.then((function(e){d=Object(r.n)(e,d),a(g),g=u(w,f)})))}),!1).finish;function O(e){void 0===e&&(e=1e6),h(),l([b,t,d,e])}function w(){j(),p=!0,m=u(O,s)}null==n||n.then((function(e){return O(e.startTime+e.delay)}),r.p)}))})).then((function(e){var t=e[0],n=e[1],o=e[2],u=e[3],c=Math.round,a=function(e,t,n,i){t===n&&(n+=l);var o=e.findIndex((function(e){var t=e.startTime,i=e.duration;if(t>n+s)return!0;n=Object(r.n)(n,t+i)}));-1===o&&(o=e.length);var u=o>0?(c=e[o-1],c.startTime+c.duration):0;var c;return Object(r.n)(Object(r.o)(u,i),t)}(t,n,o,u),f=i.document,d=i.innerHeight,p=function(e,t){for(var n=0,r=0;r<e.length;++r){var i=e[r],o=i.startTime,u=i.duration;if(o>t)break;n+=u-50}return n}(t,a),v={tti:c(a),tbt:c(p),iframes:f.querySelectorAll("iframe").length},m=Object(r.n)(f.body.offsetHeight,d);return m>0&&(v.screens=c(f.body.scrollHeight/m)),v})).catch(Object(r.q)("interactive"))}function B(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=["pointerdown","click","mousedown","keydown","touchstart"],q=[],z=0;function A(e,t){var n=e[0],i=e[1];return 1===q.push(t)&&L.forEach((function(e){return o(n,e,c,!1)})),Object(r.i)(q,t,(function(){return L.forEach((function(e){return u(n,e,c,!1)}))}));function c(e){var t=e.type,c=e.timeStamp;if(e.cancelable){var f=i.now(),s=c>1e12?Date.now():f,l=Object(r.n)(s-c,0),d=f-l;t===L[0]?function(e,t,r){function i(){a(e,t,r),c()}function c(){u(n,"pointerup",i,!1),u(n,"pointercancel",c,!1)}o(n,"pointerup",i,!1),o(n,"pointercancel",c,!1)}(t,d,l):a(t,d,l)}}function a(e,t,n){var r=t+n;r-z<v.eventDelta||(z=r,q.forEach((function(r){return r(e,t,n)})))}}function H(e){var t=e[2],n=Math.round;return k(t,"first-input",(function(e,t){var i=e[0],o=i.name,u=i.startTime,c=i.processingStart,a=i.duration,f=i.target,s={entryType:"first-input",action:o,startTime:n(u),delay:n(c-u),duration:n(a)},l=Object(r.d)(f);l&&(s.closestId=l),t(s)})).catch((function(){return function(e,t){return new Promise((function(n){var i=A(e,(function(e,o,u){i(),n({entryType:t,action:e,startTime:Object(r.r)(o),delay:Object(r.r)(u)})}))}))}(e,"first-input")}))}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){var t,n,i=e[0],u=p(),c=1,a=[],f=[],l=function(){return a.push(new Promise((function(e){return n=e})))};return l(),o(i,"popstate",(function(e){return d(e.type,e.timeStamp,0)}),!1),A(e,d),Promise.resolve(((t={entryType:"page-transitions"})[Symbol.iterator]=function(){var e=0;return{next:function(){return{value:f[e++],done:e>f.length}}}},t[Symbol.asyncIterator]=function(){var e=0;return{next:function(){return a[e++]}}},t));function d(t,o,a){C(e,Promise.resolve(o+a)).then((function(d){var m=Math.round,h=p();if(function(e,t){return Object(r.f)(e)!==Object(r.f)(t)}(u,h)){var y=v.clientType,g=v.pageEvent,j=m(d.tti-o),O=Object.freeze(b(e[0],function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({entryType:"page-transition",clientType:y,origin:u,destination:h,action:t,startTime:m(o),delay:m(a),duration:j,pn:c++},d)));u=h,f.push(O),n({value:O}),l(),s(i,g,O)}}))}function p(){return h(i.location.href,i)}}var $=n(3),V=Object(r.m)("tti"),G=Object(r.m)("lcp");function Q(e){console.log(i.d,e)}var J=[.2,.33,.15,.25,.07],K=[[1600,799.4643],[2400,883.7075],[4500,2000.0009],[350,90.5512],[.25,.05435]],X=[[4e3,2000.2137],[4e3,2251.6873],[7300,2900.1506],[600,200.631],[.25,.05435]],Y=Math.round,Z=Math.log,ee=Math.exp,te=Math.sqrt,ne=Math.abs,re=Math.SQRT2;function ie(e,t,n){var r,o,u=e[0],c=n.tti,a=n.tbt,f=n.lcp,s=n.cls,l=(null==(r=u.viewerModel)?void 0:r.deviceInfo.deviceClass)||(null==(o=u.publicModel)?void 0:o.deviceInfo.deviceType),d=l?"Smartphone"===l:function(e){var t=e.navigator.userAgent;if(/android/i.test(t))return!/tablet|smart_?tv/i.test(t);return/iphone/i.test(t)}(u),p=function(e,t){return function(e){var t=e.reduce((function(e,t){var n=t[0],r=t[1];return[e[0]+n,e[1]+r*n]}),[0,0]),n=t[0];return t[1]/n||0}(J.map((function(n,r){return[n,Y(100*(c=e[r],a=t[r],f=c[0],s=c[1],l=Z(f),d=Z(s/f),p=te(1-3*d-te((d-3)*(d-3)-8))/2,v=(Z(a)-l)/(re*p),(1-(i=v,.254829592,-.284496736,1.421413741,-1.453152027,1.061405429,.3275911,o=1/(1+.3275911*ne(i)),u=o*(.254829592+o*(o*(1.421413741+o*(1.061405429*o-1.453152027))-.284496736)),oe(i)*(1-u*ee(-i*i))))/2))/100];var i,o,u,c,a,f,s,l,d,p,v})))}(d?X:K,[t,f,c,a,s/i.a]);return{simLH6:Y(100*p),isMobile:d}}function oe(e){return e<0?-1:1}!function(e){if("function"!=typeof Promise||!Promise.allSettled)return;var t=e.document,n=e.performance,o=t.currentScript||t.getElementById("wix-perf-measure");o&&v.load(e,o);var u=v.noMeasure,a=v.log,f=v.label,p=v.clientType,m=function(e,t){var n=Object(r.c)("environment",function(e){var t=e[0],n=t.screen,i=t.navigator,o={screenRes:n.width+"x"+n.height,availScreenRes:n.availWidth+"x"+n.availHeight,windowInner:t.innerWidth+"x"+t.innerHeight,windowOuter:t.outerWidth+"x"+t.outerHeight,devicePixelRatio:Object(r.r)(10*t.devicePixelRatio),colorDepth:n.colorDepth};v.version&&(o.version=v.version);var u=n.orientation;null!=u&&u.type&&(o.orientation=u.type);var c=i.connection,a=i.deviceMemory,f=i.hardwareConcurrency;if(f&&(o.cores=f),a&&(o.memory=Math.floor(a)),c){var s=c.type,l=c.effectiveType,d=c.rtt,p=c.downlink,m=c.saveData;s&&(o.networkType=s),l&&(o.effectiveType=l),Object(r.k)(d)&&d&&(o.rtt=d),p&&(o.download=Object(r.o)(Object(r.r)(p),1e4)),Object(r.j)(m)&&(o.saveData=m)}if(t.matchMedia){var b=t.matchMedia("(prefers-reduced-motion:reduce)");o.reducedMotion=b.matches}return i.getBattery?i.getBattery().then((function(e){var t=e.charging,n=e.level;return o.lowBattery=!1===t&&n<.1,o})).catch((function(){return o})):Promise.resolve(o)}(e),function(e){var t,n=e[0],i=e[1],o=Math.round,u=Object(r.h)(i,"navigation");u?t={navigationType:u.type,protocol:u.nextHopProtocol}:(u=i.timing,t={});var c=u,a=c.navigationStart,f=void 0===a?0:a,s=c.fetchStart,l=c.domainLookupStart,d=c.domainLookupEnd,p=c.redirectStart,v=c.redirectEnd,m=c.connectStart,b=c.connectEnd,y=c.secureConnectionStart,g=c.requestStart,j=c.responseStart;Object(r.k)(s)&&(t.fetchStart=o(s-f)),t.dns=o(d-l);var O=o(v-p);O&&(t.redirect=O),y?(t.tcp=o(y-m),t.ssl=o(b-y)):t.tcp=o(b-m),t.ttfb=o(j-f),t.response=o(j-g);var w=n.document.referrer,T=n.location.href;return t.url=h(T,n),w&&(t.referrer=h(w,n)),Promise.resolve(t)}(e),function(e){var t,n,i=e[0],o=Object(d.a)(i);if(!o)return Promise.reject("wix-start");var u={};Object(r.a)(u,"msid",(null==(t=i.rendererModel)?void 0:t.metaSiteId)||o.msId);var c,a=i.thunderboltVersion,f=i.viewerModel,s=void 0===f?{}:f,l=i.commonConfig||(null==(n=s.siteFeaturesConfigs)?void 0:n.commonConfig);return Object(r.a)(u,"_brandId",null==l?void 0:l.brand),a?p(null!=(c=s.site)&&c.isResponsive?"thunderboltResponsive":"thunderbolt",a):p(o.renderType,i.boltVersion),Object(r.a)(u,"dc",o.dc||(null==s?void 0:s.site.dc)),Promise.resolve(u);function p(e,t){Object(r.a)(u,"viewerName",e),Object(r.a)(u,"v",t)}}(e)),o=_(e),u=H(e),a=C(e,Object(r.g)(o,"fcp"),u),f=function(e,t,n){var i=e[1],o=e[2],u=e[3],c=e[4];return Promise.all([t,n]).then((function(e){var t=e[0].fcp,n=e[1].tti,a=v.lcpMin,f=v.downloadToRenderDelta,s=v.resourceDebounce,l=Object(r.n)(n,t+a),d=0;return k(o,"largest-contentful-paint",(function(e,t){var n=e.reverse().find((function(e){var t=e.url,n=e.startTime;if(n<l)return!0;if(t){var r=i.getEntriesByName(t)[0];if(r){var o=r.initiatorType,u=r.startTime,c=r.duration;if(u<l&&n-(u+c)<f&&"link"!==o)return!0}}return!1}));n&&(c(d),d=u((function(){var e=n.startTime,i=n.size,o=n.id,u=n.element,c={lcp:Object(r.r)(e),lcpSize:i},a=Object(r.d)(u,o);if(a&&(c.closestId=a),u){var f=u.tagName;f&&(c.lcpTag=f)}t(c)}),s))}))})).catch(Object(r.q)("largest-contentful-paint"))}(e,o,a),s=function(e){return R(e,"scripts",{filter:P})}(e),p=function(e){return R(e,"images",{filter:E})}(e),m=function(e){return R(e,"fonts",{filter:x})}(e),y=Object(r.c)("loaded",a,f,s,p,m,g(e),function(e,t){var n=e[0];return Object(r.b)([w(n),t,c(n)]).then((function(e){var t,i=e[0],o=Object(d.a)(n);if(!o)throw"wix-finish";var u=!n.clientSideRender,c={entryType:"wix-finish",isSsr:u,isWelcome:!!n.requestCloseWelcomeScreen};if(i&&(c.cdn=i),Object(r.a)(c,"pageId",(null==(t=n.rendererModel)?void 0:t.landingPageId)||n.firstPageId),u){var a=n.ssrInfo,f=void 0===a?{}:a;Object(r.a)(c,"ssrDuration",f.renderBodyTime||f.timeSpentInSSR)}return j.forEach((function(e){return Object(r.a)(c,O[e]||e,o[e])})),o.btype&&(c.btype=o.btype),c}))}(e,a)).then((function(t){return Object.assign(t,function(e){var t=T(e[2],"layout-shift");if(t){var n=null==t.takeRecords?void 0:t.takeRecords();if(Object(r.e)(t)(),n){for(var o,u=n.filter((function(e){return!e.hadRecentInput})).map((function(e){var t=e.sources,n=e.value;return[t.reduce((function(e,t){var n=t.node,r=t.currentRect,i=r.width*r.height;return i<e.area?e:{area:i,node:n}}),{area:-1,node:null}).node,n]})).reduce((function(e,t){var n=e[0],r=e[1],i=e[2],o=t[0],u=t[1];return o&&i.set(o,u+(i.get(o)||0)),[n+u,++r,i]}),[0,0,new Map]),c=u[0],a=u[1],f=[],s=B(u[2].entries());!(o=s()).done;){var l=o.value;f.push(l)}f.sort((function(e,t){return t[1]-e[1]}));var d={cls:Object(r.r)(c*i.a),countCls:a};if(f.length){var p=f[0][0];p.nodeType!==Node.ELEMENT_NODE&&(p=p.parentElement);var v=Object(r.d)(p);v&&(d.clsId=v);var m=p.tagName;m&&(d.clsTag=m)}return d}}}(e)),o.then((function(n){var r=n.fcp;return Object.assign(t,ie(e,r,t))})).catch((function(){return t}))}));return[n,o,y,u,l(e),U(e)].map((function(n){return n.then((function(n){return n.clientType=t,Object.freeze(b(e[0],n))}))}))}([e,n,e.PerformanceObserver,e.setTimeout,e.clearTimeout],p);Object($.a)(e,t,v.src,m),Object.freeze(m);var y=m.slice(0,3),S=m.slice(3,5);u||function(e,t){function n(e,t){return e.find((function(e){return e.entryType===t}))||{}}function i(t,n,r){if(n)return e.mark(t,{startTime:n,detail:r})}function o(t,n){n.end>n.start&&e.measure(t,n)}Object(r.b)(t).then((function(t){var r=n(t,"loaded"),u=r.tti,c=r.tbt,a=r.lcp;if(i(V,u,c)){i(G,a);var f=n(t,"initial-paint").fcp,s={end:a},l={end:u,detail:c},d=a<u?[f,a]:[u,f];s.start=d[0],l.start=d[1],o(G,s),o(V,l)}else e.clearMarks(V)}),r.p)}(n,y);a&&function(e,t){Object(r.b)(e).then((function(e){return e.forEach(Q)}),r.p),t.forEach((function(e){return e.then(Q,r.p)}))}(y,S);e[f]=m,s(e,f,m)}(window)}])}));
//# sourceMappingURL=wix-perf-measure.bundle.min.js.map