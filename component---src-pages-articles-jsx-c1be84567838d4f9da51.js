(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1EB3":function(e,t,a){"use strict";var n=a("9Hrx"),l=a("q1tI"),r=a.n(l),c=a("Wbzz"),s=a("wd/R"),i=a.n(s),m=a("LvDl"),o=(a("9JP6"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=m.get(this.props,"data.elements.title.value","N/A"),t=m.get(this.props,"data.elements.date.value","N/A"),a=m.get(this.props,"data.elements.category.value[0].elements.title.value","N/A"),n=m.get(this.props,"data.elements.category.value[0].elements.slug.value","N/A"),l=m.get(this.props,"data.elements.description.value","N/A"),s="/articles/"+m.get(this.props,"data.elements.slug.value","N/A"),o=m.get(this.props,"data.system.id");return r.a.createElement("div",{className:"article","data-kontent-item-id":o},r.a.createElement("div",{className:"article__meta"},r.a.createElement("time",{className:"article__meta-time",dateTime:i()(t).format("MMMM D, YYYY"),"data-kontent-element-codename":"date"},i()(t).format("MMMM YYYY")),r.a.createElement("span",{className:"article__meta-divider"}),r.a.createElement("span",{className:"article__meta-category",key:n,"data-kontent-element-codename":"category"},r.a.createElement(c.Link,{to:"/categories/"+n+"/",className:"article__meta-category-link"},a))),r.a.createElement("h2",{className:"article__title","data-kontent-element-codename":"title"},r.a.createElement(c.Link,{className:"article__title-link",to:s},e)),r.a.createElement("p",{className:"article__description","data-kontent-element-codename":"description"},l),r.a.createElement(c.Link,{className:"article__readmore",to:s},"Read"))},t}(r.a.Component));t.a=o},"39YN":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("9Hrx"),l=a("q1tI"),r=a.n(l),c=a("TJpk"),s=a.n(c),i=a("ntAx"),m=a("1EB3"),o=a("kfNp"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=[],a=e.data.kontentItemSiteMetadata.elements.title.value,n=e.data.kontentItemSiteMetadata.elements.subtitle.value;return e.data.allKontentItemArticle.nodes.forEach((function(e){t.push(r.a.createElement(m.a,{data:e,key:e.elements.slug.value}))})),r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})),r.a.createElement(o.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},t))))},t}(r.a.Component);t.default=d;var u="729843114"},"9JP6":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-articles-jsx-c1be84567838d4f9da51.js.map