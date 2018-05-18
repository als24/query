/*!
 * query 1.0.2
 * (c) 2018 Smohan<https://smohan.net>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Query",[],e):"object"==typeof exports?exports.Query=e():t.Query=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,s=Array.prototype.slice,o=["string","number","boolean","symbol"],u=function(t){return"string"==typeof t},c=function(t){return void 0===t},l=function(t){return null===t},f=function(t){return!!(c(t)||l(t)||u(t)&&0===t.trim().length)},p=function(t){return"[object Object]"===i.call(t)},h=function(t){return Array.isArray.call(null,t)},g=function(t){return!!~o.indexOf(void 0===t?"undefined":n(t))},d=function(t){return"number"==typeof t},y=/(\^|\.|\[|\$|\(|\)|\||\*|\+|\?|\{|\\)/g;var v=function(t,e){return a.call(e,t)};var m={isRegexp:function(t){return"[object RegExp]"===i.call(t)},isString:u,isUndefined:c,isNull:l,isEmpty:f,isObject:function(t){return!l(t)&&"object"===(void 0===t?"undefined":n(t))},isPlainObject:p,isArray:h,isPrimitive:g,isFullPrimitive:function(t){return l(t)||c(t)||g(t)},isFunction:function(t){return"function"==typeof t},isNumber:d,isInteger:function(t){return d(t)&&t%1==0},isFloat:function(t){return+t&&t!==(0|t)},isBoolean:function(t){return"boolean"==typeof t},escapeKeyword:function(t){return(t||"").toString().replace(y,"\\$1")},getObjectValue:function(t,e){if(!f(t)){for(var r=t.split(".");r.length&&(e=e[r.shift()],p(e)||h(e)););return e}},objKeyIsExists:function(t,e){if(f(t))return!1;for(var r=t.split(".");r.length;){var n=r.shift();if(!v(n,e))return!1;e=e[n]}return!0},hasKey:v,apply:function(t,e){var r=s.call(arguments,2);switch(r.length){case 0:case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2]);default:return t.apply(e,r)}},toArray:function(t){return s.call(t)}},b=function(t){return{y:(t=function(t){return t instanceof Date?t:/^\d+$/.test(t)?new Date(parseInt(t,10)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/g,"/").replace(/T/," ").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t))}(t)).getFullYear(),M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),q:Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()}},O=function(t){return m.isNumber(t)?t:+t},j=function(t){return m.isString(t)?t:t+""},x={date:function(t,e){t=t||new Date,e=e||"yy-MM-dd hh:mm:ss";var r=b(t);return e=e.replace(/([yMdhmsqS])+/g,function(t,e){var n=r[e];return void 0!==n&&(n=n.toString(),"y"!==e&&t.length>1?n=(n="0"+n).substr(n.length-2):"y"===e&&1===t.length&&(n=n.substr(2))),n})},number:O,int:function(t){var e=O(t);return isNaN(e)?t:parseInt(t,10)},zero:function(t){return t||0},boolean:function(t){return!!t},string:j,lower:function(t){return j(t).toLocaleLowerCase()},upper:function(t){return j(t).toLocaleUpperCase()}};function w(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var S=["eq","=","neq","<>","gt",">","gte",">=","lt","<","lte","<=","like","in","nin","exists","custom"],A=["asc","desc"],k=["and","or"],q=Object.keys(x),M=Object.create(null);q.forEach(function(t){M[t]=function(e){return m.apply.apply(m,[x[t],e].concat(w(m.toArray(arguments))))}});var P={index:[],groupKeySeparator:"$",newFieldNamePrefix:"$"};function _(t,e){if(!(this instanceof _))return new _(t,e);m.isArray(t)||($("data must be an array"),t=[]),this.source=t,this.options=Object.assign(Object.create(null),P,e),this.reset()}_.version="1.0.2",_.hooks=function(t,e){!1==!!~q.indexOf(t)&&m.isFunction(e)&&(M[t]=function(t){return m.apply.apply(m,[e,t].concat(w(m.toArray(arguments))))})};var F=_.prototype,N={args:null,new:!1,handler:null};function E(t,e,r,n){if(m.isString(t)&&!m.isEmpty(t)){if(m.isFunction(e)&&(r=e,e="custom",n=~k.indexOf(r)?r:~k.indexOf(n)?n:"and"),m.isFullPrimitive(r)||m.isFunction(r)){e=e.toLocaleLowerCase();var i={_f:t,_c:r,_e:e=~S.indexOf(e)?e:"exists",_r:n=~k.indexOf(n)?n:"and"};return~JSON.stringify(this.params.query).indexOf(JSON.stringify(i))?void 0:i}$("condition must be a primitive value or function")}}function I(t){var e=this.params.query,r=e.length;if(0===r)return!0;for(var n=!0,i=void 0,a=0;a<r;a++){i=e[a];var s=void 0,o=K(s=m.isArray(i)?i:[i],t);n="or"===s[0]._r?n||o:n&&o}return n}function K(t,e){for(var r=!0,n=-1,i=t.length;++n<i;){var a=t[n],s=a._f,o=a._c,u=a._e,c=a._r,l=void 0;if("exists"===u)l=m.objKeyIsExists(s,e);else{var f=m.getObjectValue(s,e);l="custom"===u&&m.isFunction(o)?o.call(null,f):L(f,u,o)}r="or"===c?r||l:r&&l}return r}function L(t,e,r){var n=!0;switch(e){case"like":var i=new RegExp(m.escapeKeyword(r),"i");n=!!(t||"").toString().match(i);break;case"in":m.isPrimitive(r)&&(r=[r]),n=!!m.isArray(r)&&!!~r.indexOf(t);break;case"nin":m.isPrimitive(r)&&(r=[r]),m.isArray(r)&&(n=!1==!!~r.indexOf(t));break;case"neq":case"<>":n=t!==r;break;case"lt":case"<":n=t<r;break;case"lte":case"<=":n=t<=r;break;case"gt":case">":n=t>r;break;case"gte":case">=":n=t>=r;break;case"eq":case"=":default:n=t===r}return n}function R(t,e){for(var r=this.params.sort,n=r.length,i=void 0;--n>=0;){if(r[n][0]===t){i=n;break}}var a=[t,e];i>-1&&this.params.sort.splice(i,1),this.params.sort.push(a)}function U(){var t=this.target,e=this.params,r=this.queried,n=this.options,i=e.group,a=e.range;if(!r){var s=[],o=Object.create(null),u=i&&i.length,c=a[0],l=a[1],f=-1,p=t.length;if(!m.isUndefined(c)||!m.isUndefined(l)){if(c>l){var h=[l,c];c=h[0],l=h[1]}c>p-1&&(c=p-1),l>p-1&&(l=p-1),p=(t=t.slice(c,l)).length}for(var g=void 0;++f<p;){if(g=V.call(this,t[f]),I.call(this,g))if(u){for(var d=[],y=0;y<u;y++){var v=i[y],b=m.getObjectValue(v,g);void 0!==b&&d.push(b)}var O=d.join(n.groupKeySeparator);o[O]||(o[O]=[]),o[O].push(g)}else s.push(g)}if(u)for(var j in s.length=0,o){var x=o[j];s.push({_id:j,list:x,count:x.length})}this.queried=!0,this.target=s}}function V(t){var e=this.params,r=this.options;if(e.format)try{for(var n in e.format){var i=e.format[n],a=m.getObjectValue(n,t),s=i.handler.apply(i,[a].concat(w(i.args))),o=n.split("."),u=o.slice(0,o.length-1).join("."),c=o[o.length-1],l=t;if(u){var f=m.getObjectValue(u,t);(m.isPlainObject(f)||m.isArray(f))&&(l=f)}if(i.new)l[r.newFieldNamePrefix+(m.isString(i.new)?i.new:c)]=s;else l[c]=s}}catch(t){$(t)}return t}function $(t){console.log("[QUERY ERROR]:",t)}F.to=F.format=function(t,e,r){var n=void 0;if((r=Object.assign(Object.create(null),N,r)).handler&&m.isFunction(r.handler)?n=r.handler:m.hasKey(e,M)&&(n=M[e]),n){var i=[];m.isUndefined(r.args)||(m.isArray(r.args)?r.args.forEach(function(t){return i.push(t)}):i.push(r.args)),this.params.format[t]={args:i,handler:n,new:r.new}}return this},F.range=function(t,e){return m.isInteger(t)&&t>=0&&(this.params.range[0]=t),m.isInteger(e)&&e>=0&&(this.params.range[1]=e),this},F.skip=function(t){return this.params.skip=m.isInteger(t)&&t>0?t:0,this},F.limit=function(t){return this.params.limit=m.isInteger(t)?Math.abs(t):void 0,this},F.where=function(t,e,r,n){if(m.isArray(arguments[0])){for(var i=arguments[0].length,a=-1,s=[];++a<i;){var o=arguments[0][a];if(m.isArray(o)){var u=E.call(this,o[0],o[1],o[2],o[3]);u&&s.push(u)}}s.length&&this.params.query.push(s)}else{var c=E.call(this,t,e,r,n);c&&this.params.query.push(c)}return this},F.sort=function(t,e){var r=Object.create(null);for(var n in 1===arguments.length?m.isPlainObject(t)?r=t:r[t]="desc":r[t]=e,r){var i=r[n].toLocaleLowerCase();m.isString(n)&&~A.indexOf(i)&&R.call(this,n,i)}return this},F.count=function(){return U.call(this),this.target.length},F.find=function(){U.call(this);var t=this.target,e=this.params.sort.length,r=this.params,n=r.skip,i=r.limit;e&&function(t){var e=this.params.sort;t.sort(function(t,r){for(var n=-1,i=e.length,a=void 0;++n<i;){var s=(a=e[n])[0],o=a[1],u=m.getObjectValue(s,t),c=m.getObjectValue(s,r);if(u>c)return"desc"===o?-1:1;if(u<c)return"asc"===o?-1:1}})}.call(this,t);var a=t.length;if(0!==a){var s=n,o=void 0;return void 0===s&&(s=0),s=Math.min(s,a),o=void 0===i?a:s+i,o=Math.min(o,a),t=t.slice(s,o)}this.target=[]},F.group=function(t){return!1==!!~this.params.group.indexOf(t)&&this.params.group.push(t),this},F.reset=function(){var t,e=this.source;return this.target=(t=e,JSON.parse(JSON.stringify(t))),this.params=Object.create(null),this.params.query=[],this.params.sort=[],this.params.field=Object.create(null),this.params.group=[],this.params.format=Object.create(null),this.params.range=[],this.queried=!1,this.indexes=Object.create(null),this},F.destroy=function(){this.target=null,this.params=null};var C=_;r.d(e,"default",function(){return C})}]).default});