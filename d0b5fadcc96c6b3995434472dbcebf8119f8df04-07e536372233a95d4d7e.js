(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7");t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},"0IOL":function(t,e,n){},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"44Ds":function(t,e,n){var r=n("e4Nc");function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},"4kuk":function(t,e,n){var r=n("SfRM"),a=n("Hvzi"),o=n("u8Dt"),i=n("ekgI"),c=n("JSQU");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=c,t.exports=s},"4uTw":function(t,e,n){var r=n("Z0cm"),a=n("9ggG"),o=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return r(t)?t:a(t,e)?[t]:o(i(t))}},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),a=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(i.test(t)||!o.test(t)||null!=e&&t in Object(e))}},AP2z:function(t,e,n){var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(s){}var a=i.call(t);return r&&(e?t[c]=n:delete t[c]),a}},Cwc5:function(t,e,n){var r=n("NKxu"),a=n("Npjl");t.exports=function(t,e){var n=a(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){var r,a=n("2gN3"),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){var r=n("I01J"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,(function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)})),e}));t.exports=i},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}},"HMJ/":function(t,e,n){},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},IlJI:function(t,e,n){},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},NKxu:function(t,e,n){var r=n("lSCD"),a=n("E2jh"),o=n("GoyQ"),i=n("3Fdi"),c=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,u=s.toString,p=l.hasOwnProperty,f=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||a(t))&&(r(t)?f:c).test(i(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?a(t):o(t)}},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Xi7e:function(t,e,n){var r=n("KMkd"),a=n("adU4"),o=n("tMB7"),i=n("+6XX"),c=n("Z8oC");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=c,t.exports=s},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,a=r(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),a=n("9Nap");t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[a(e[n++])];return n&&n==o?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}},cS2O:function(t,e,n){},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),a=n("k+1r"),o=n("JHgL"),i=n("pSRY"),c=n("H8j4");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=c,t.exports=s},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),a=n("Xi7e"),o=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},kfNp:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("mwIZ"),n("Wbzz")),i=n("9Hrx"),c=(n("IlJI"),function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=a.a.createElement("ul",{className:"menu__list"},t.elements.menu_items.value.map((function(t){return a.a.createElement("li",{className:"menu__list-item",key:t.id},a.a.createElement(o.Link,{to:(t.elements.slug.value.startsWith("/")?"":"/")+t.elements.slug.value,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},t.elements.label.value))})));return a.a.createElement("nav",{className:"menu"},e)},e}(a.a.Component)),s=(n("cS2O"),n("HMJ/"),function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.elements.telegram.value,n=t.elements.twitter.value,r=t.elements.github.value,o=t.elements.vk.value,i=t.elements.email.value;return a.a.createElement("div",{className:"links"},a.a.createElement("ul",{className:"links__list"},a.a.createElement("li",{className:"links__list-item","data-kontent-element-codename":"twitter"},a.a.createElement("a",{href:"https://www.twitter.com/"+n,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"icon-twitter"}))),a.a.createElement("li",{className:"links__list-item","data-kontent-element-codename":"github"},a.a.createElement("a",{href:"https://www.github.com/"+r,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"icon-github"}))),a.a.createElement("li",{className:"links__list-item","data-kontent-element-codename":"vk"},a.a.createElement("a",{href:"https://www.vk.com/"+o,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"icon-vkontakte"})))),a.a.createElement("ul",{className:"links__list"},a.a.createElement("li",{className:"links__list-item","data-kontent-element-codename":"email"},a.a.createElement("a",{href:"mailto:"+i},a.a.createElement("i",{className:"icon-mail"}))),a.a.createElement("li",{className:"links__list-item","data-kontent-element-codename":"telegram"},a.a.createElement("a",{href:"telegram:"+e},a.a.createElement("i",{className:"icon-paper-plane"})))))},e}(a.a.Component));n("0IOL"),e.a=function(t){var e=t.isHomePage,n=Object(o.useStaticQuery)("3341733526"),r=n.kontentItemAuthor,i=n.kontentItemMenu,l=n.kontentItemSiteMetadata.elements.copyright.value,u=n.kontentItemAuthor.elements.avatar_image.value[0].url;return a.a.createElement("div",{className:"sidebar"},a.a.createElement("div",{className:"sidebar__inner","data-kontent-item-id":r.system.id},a.a.createElement("div",{className:"sidebar__author"},a.a.createElement("div",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{src:u,className:"sidebar__author-photo",width:"75",height:"75",alt:r.name,"data-kontent-element-codename":"avatar_image"})),a.a.createElement("div",{className:"sidebar__author-container"},e?a.a.createElement("h1",{className:"sidebar__author-title","data-kontent-element-codename":"name"},a.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},r.elements.name.value)):a.a.createElement("h2",{className:"sidebar__author-title","data-kontent-element-codename":"name"},a.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},r.elements.name.value)),a.a.createElement("span",{className:"sidebar__author-text-effect"})),a.a.createElement("p",{className:"sidebar__author-subtitle","data-kontent-element-codename":"bio"},r.elements.bio.value))),a.a.createElement("div",null,a.a.createElement(c,{data:i}),a.a.createElement(s,{data:r}),a.a.createElement("p",{className:"sidebar__copyright"},l))))}},lSCD:function(t,e,n){var r=n("NykK"),a=n("GoyQ");t.exports=function(t){if(!a(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var a=null==t?void 0:r(t,e);return void 0===a?n:a}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(e,t)?e[t]:void 0}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zoYe:function(t,e,n){var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),i=n("/9aa"),c=r?r.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(i(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=d0b5fadcc96c6b3995434472dbcebf8119f8df04-07e536372233a95d4d7e.js.map