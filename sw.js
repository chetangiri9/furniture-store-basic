var __wpo = {"assets":{"main":["./favicon.ico","./runtime.978d23d467132a667774.js","./"],"additional":["./npm.ant-design.c30e06719ed400c6ae14.chunk.js","./npm.antd.bb2a039b107baf5a960a.chunk.js","./npm.intl.68183f02971ad8ff5f4b.chunk.js","./npm.lodash.958bde30070ed67ecdda.chunk.js","./npm.redux-saga.44ac6a2b2e539333ada0.chunk.js","./main.be029da96aff6805ac62.chunk.js","./npm.babel.836715714d8f079b1ee0.chunk.js","./npm.core-js.d26c90ec5d63a57a77f4.chunk.js","./npm.rc-util.f6bc4f41b75aeb659407.chunk.js","./npm.react-redux.b606877b92ce20568b77.chunk.js","./npm.reduxsauce.5aaa6915927992023d9e.chunk.js","./12.5988e088af649edb270b.chunk.js","./13.b9e4d0621a408560216d.chunk.js","./14.5642d2fee52332eba92c.chunk.js"],"optional":[]},"externals":[],"hashesMap":{"4065bde4accd464423ad33cecb2d281f1992df77":"./favicon.ico","dbaed3315658368d9d1966934b3b72ac8af34b44":"./npm.ant-design.c30e06719ed400c6ae14.chunk.js","a10618956da99cd13534a28167c6df36d2eb857e":"./npm.antd.bb2a039b107baf5a960a.chunk.js","3d37e8e9ff22b1bb59df478885289de4a541d6b4":"./npm.intl.68183f02971ad8ff5f4b.chunk.js","cbea3865ac00fe42b0400beec873b7d4831753c9":"./npm.lodash.958bde30070ed67ecdda.chunk.js","b775de405e10f9669472c7506c2438726795388a":"./npm.redux-saga.44ac6a2b2e539333ada0.chunk.js","a5ea60deaa4f36722db15956099889e997dfaf49":"./main.be029da96aff6805ac62.chunk.js","b2331d2a583c6d77992fa68247a39d28c30795f7":"./npm.babel.836715714d8f079b1ee0.chunk.js","55eff4a22ba3477d42732fefcbde3a0927f102b0":"./npm.core-js.d26c90ec5d63a57a77f4.chunk.js","92f2e9a81d4dffd9b08768cb954bd5e89c0ae99d":"./npm.rc-util.f6bc4f41b75aeb659407.chunk.js","430ce6435a06eec2aa73d55a8f62ef08d1e6215f":"./npm.react-redux.b606877b92ce20568b77.chunk.js","8f5837550b958f53d43b48021f3011b0e0ab459b":"./npm.reduxsauce.5aaa6915927992023d9e.chunk.js","a04482bb4eac02526d92fea1ddd284c595895005":"./runtime.978d23d467132a667774.js","2e46ceafa9cc7457ab31e6c2091cc768c48a8144":"./12.5988e088af649edb270b.chunk.js","ae394d8bc44959080cf7d5bcb3d84228987c2f14":"./13.b9e4d0621a408560216d.chunk.js","62b176a4ec1381c89d4915cfdd806023582473e0":"./14.5642d2fee52332eba92c.chunk.js","46fa695593da5fa4a52831316f27d6d9e19e34c6":"./"},"strategy":"changed","responseStrategy":"cache-first","version":"5/20/2021, 5:56:04 PM","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":true};

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/react-template/",t(t.s="22249e1ea7baa06e7c1b")}({"22249e1ea7baa06e7c1b":function(e,n,t){"use strict";var r,o,i;if(r=ExtendableEvent.prototype.waitUntil,o=FetchEvent.prototype.respondWith,i=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=i.get(n);if(!t)return t=[Promise.resolve(e)],i.set(n,t),r.call(n,Promise.resolve().then((function e(){var r=t.length;return Promise.all(t.map((function(e){return e.catch((function(){}))}))).then((function(){return t.length!=r?e():(i.delete(n),Promise.all(t))}))})));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),o.call(this,e)},"undefined"===typeof a)var a=!1;function c(e,n){return caches.match(e,{cacheName:n}).then((function(t){return u(t)?t:s(t).then((function(t){return caches.open(n).then((function(n){return n.put(e,t)})).then((function(){return t}))}))})).catch((function(){}))}function u(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function s(e){return u(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then((function(n){return new Response(n,{headers:e.headers,status:e.status})}))}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach((function(e){console.log("Asset:",e)})),console.groupEnd()}!function(e,n){var t=n.cacheMaps,r=n.navigationPreload,o=e.strategy,i=e.responseStrategy,u=e.assets,l=e.hashesMap,h=e.externals,d=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},p=e.name,v=e.version,m=p+":"+v,g=p+"$preload";Object.keys(u).forEach((function(e){u[e]=u[e].map((function(e){var n=new URL(e,location);return n.hash="",-1===h.indexOf(e)&&(n.search=""),n.toString()}))})),l=Object.keys(l).reduce((function(e,n){var t=new URL(l[n],location);return t.search="",t.hash="",e[n]=t.toString(),e}),{}),h=h.map((function(e){var n=new URL(e,location);return n.hash="",n.toString()}));var w=[].concat(u.main,u.additional,u.optional);function y(n){var t=u[n];return caches.open(m).then((function(r){return R(r,t,{bust:e.version,request:d,failAll:"main"===n})})).then((function(){f("Cached assets: "+n,t)})).catch((function(e){throw console.error(e),e}))}function b(n){return caches.keys().then((function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(p););if(t){var r=void 0;return caches.open(t).then((function(e){return r=e,e.match(new URL("__offline_webpack__data",location).toString())})).then((function(e){if(e)return Promise.all([r,r.keys(),e.json()])}))}})).then((function(t){if(!t)return y(n);var r=t[0],o=t[1],i=t[2],a=i.hashmap,c=i.version;if(!i.hashmap||c===e.version)return y(n);var s=Object.keys(a).map((function(e){return a[e]})),h=o.map((function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()})),p=u[n],v=[],g=p.filter((function(e){return-1===h.indexOf(e)||-1===s.indexOf(e)}));Object.keys(l).forEach((function(e){var n=l[e];if(-1!==p.indexOf(n)&&-1===g.indexOf(n)&&-1===v.indexOf(n)){var t=a[e];t&&-1!==h.indexOf(t)?v.push([t,n]):g.push(n)}})),f("Changed assets: "+n,g),f("Moved assets: "+n,v);var w=Promise.all(v.map((function(e){return r.match(e[0]).then((function(n){return[e[1],n]}))})));return caches.open(m).then((function(t){var r=w.then((function(e){return Promise.all(e.map((function(e){return t.put(e[0],e[1])})))}));return Promise.all([r,R(t,g,{bust:e.version,request:d,failAll:"main"===n,deleteFirst:"main"!==n})])}))}))}function P(){return caches.keys().then((function(e){var n=e.map((function(e){if(0===e.indexOf(p)&&0!==e.indexOf(m))return console.log("[SW]:","Delete cache:",e),caches.delete(e)}));return Promise.all(n)}))}function U(){return caches.open(m).then((function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:l}));return n.put(new URL("__offline_webpack__data",location).toString(),t)}))}self.addEventListener("install",(function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===o?b("main"):y("main"),e.waitUntil(n)})),self.addEventListener("activate",(function(e){console.log("[SW]:","Activate event");var n=function(){if(!u.additional.length)return Promise.resolve();a&&console.log("[SW]:","Caching additional");var e=void 0;e="changed"===o?b("additional"):y("additional");return e.catch((function(e){console.error("[SW]:","Cache section `additional` failed to load")}))}();n=(n=(n=n.then(U)).then(P)).then((function(){if(self.clients&&self.clients.claim)return self.clients.claim()})),r&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var o=n.toString();-1===h.indexOf(o)&&(n.search="",o=n.toString());var u=-1!==w.indexOf(o),s=o;if(!u){var f=function(e){var n=e.url,r=new URL(n),o=void 0;o=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<t.length;i++){var a=t[i];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(o))){var c=void 0;if((c="function"===typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&c!==n)return c}}}(e.request);f&&(s=f,u=!0)}if(u){var l=void 0;l="network-first"===i?function(e,n,t){return S(e).then((function(e){if(e.ok)return a&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e})).catch((function(e){return a&&console.log("[SW]:","URL ["+n+"] from cache if possible"),c(t,m).then((function(n){if(n)return n;if(e instanceof Response)return e;throw e}))}))}(e,o,s):function(e,n,t){return function(e){if(r&&"function"===typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=r.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;O.set(r,{url:t,response:r});var o=function(){return O.has(r)},i=r.then((function(e){if(e&&o()){var n=e.clone();return caches.open(g).then((function(e){if(o())return e.put(t,n).then((function(){if(!o())return caches.open(g).then((function(e){return e.delete(t)}))}))}))}}));n.waitUntil(i)}(n,e)}}(e),c(t,m).then((function(r){return r?(a&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then((function(r){return r.ok?(a&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&(o=r.clone(),i=caches.open(m).then((function(e){return e.put(n,o)})).then((function(){console.log("[SW]:","Cache asset: "+n)})),e.waitUntil(i)),r):(a&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r);var o,i}))}))}(e,o,s),e.respondWith(l)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(S(e));if(r){var d=function(e){var n=new URL(e.request.url);if(!(self.registration.navigationPreload&&r&&r.test&&r.test(n,e.request)))return;var t=function(e){if(!O)return;var n=void 0,t=void 0;if(O.forEach((function(r,o){r.url.href===e.href&&(n=r.response,t=o)})),n)return O.delete(t),n}(n),o=e.request;if(t)return e.waitUntil(caches.open(g).then((function(e){return e.delete(o)}))),t;return c(o,g).then((function(n){return n&&e.waitUntil(caches.open(g).then((function(e){return e.delete(o)}))),n||fetch(e.request)}))}(e);if(d)return void e.respondWith(d)}}}})),self.addEventListener("message",(function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}}));var O=new Map;function R(e,n,t){n=n.slice();var r=t.bust,o=!1!==t.failAll,i=!0===t.deleteFirst,a=t.request||{credentials:"omit",mode:"cors"},c=Promise.resolve();return i&&(c=Promise.all(n.map((function(n){return e.delete(n).catch((function(){}))})))),Promise.all(n.map((function(e){var n,t,o;return r&&(t=r,o=-1!==(n=e).indexOf("?"),e=n+(o?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,a).then(s).then((function(e){return e.ok?{response:e}:{error:!0}}),(function(){return{error:!0}}))}))).then((function(t){return o&&t.some((function(e){return e.error}))?Promise.reject(new Error("Wrong response status")):(o||(t=t.filter((function(e,t){return!e.error||(n.splice(t,1),!1)}))),c.then((function(){var r=t.map((function(t,r){var o=t.response;return e.put(n[r],o)}));return Promise.all(r)})))}))}function S(e){return e.preloadResponse&&!0===r?e.preloadResponse.then((function(n){return n||fetch(e.request)})):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[{match:function(e){if(e.pathname!==location.pathname)return new URL("/",location)},to:null,requestTypes:["navigate"]}],navigationPreload:!1}),e.exports=t("6872a71ed75a597694c7")},"6872a71ed75a597694c7":function(e,n){}});