(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,h=r.regeneratorRuntime;if(h)s&&(t.exports=h);else{(h=r.regeneratorRuntime=s?t.exports:{}).wrap=x;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(G([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=E.prototype=b.prototype=Object.create(y);_.prototype=w.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},S(j.prototype),j.prototype[c]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(x(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}}}function x(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?d:l,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function b(){}function _(){}function E(){}function S(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,n){function i(){return new Promise(function(r,i){!function r(e,n,i,a){var c=L(t[e],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}(e,n,r,i)})}return r=r?r.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=L(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},169:function(t,r,e){"use strict";function n(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function a(t,r){try{var e=i[t](r),a=e.value}catch(t){return void o(t)}e.done?n(a):Promise.resolve(a).then(c,u)}function c(t){a("next",t)}function u(t){a("throw",t)}c()})}}e.d(r,"a",function(){return n})},189:function(t,r,e){"use strict";e.r(r);e(51),e(168);var n=e(169),o={data:function(){return{result:"",noStreamApiSupport:!1}},methods:{onDecode:function(t){this.result=t},onInit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),"StreamApiNotSupportedError"===t.t0.name&&(this.noStreamApiSupport=!0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(r){return t.apply(this,arguments)}}()}},i=e(1),a=Object(i.a)(o,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("p",{staticClass:"decode-result"},[t._v("Last result: "),e("b",[t._v(t._s(t.result))])]),t._v(" "),e("qrcode-drop-zone",{on:{decode:t.onDecode}},[e("qrcode-stream",{on:{decode:t.onDecode,init:t.onInit}})],1),t._v(" "),t.noStreamApiSupport?e("qrcode-capture",{on:{decode:t.onDecode}}):t._e()],1)},[],!1,null,null,null);a.options.__file="Fallback.vue";r.default=a.exports}}]);