(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1EB3":function(e,t,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),l=a.n(r),c=a("Wbzz"),s=a("wd/R"),i=a.n(s),o=a("LvDl"),m=(a("9JP6"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=o.get(this.props,"data.elements.title.value","N/A"),t=o.get(this.props,"data.elements.date.value","N/A"),a=o.get(this.props,"data.elements.category.value[0].elements.title.value","N/A"),n=o.get(this.props,"data.elements.category.value[0].elements.slug.value","N/A"),r=o.get(this.props,"data.elements.description.value","N/A"),s="/articles/"+o.get(this.props,"data.elements.slug.value","N/A"),m=o.get(this.props,"data.system.id");return l.a.createElement("div",{className:"article","data-kontent-item-id":m},l.a.createElement("div",{className:"article__meta"},l.a.createElement("time",{className:"article__meta-time",dateTime:i()(t).format("MMMM D, YYYY"),"data-kontent-element-codename":"date"},i()(t).format("MMMM YYYY")),l.a.createElement("span",{className:"article__meta-divider"}),l.a.createElement("span",{className:"article__meta-category",key:n,"data-kontent-element-codename":"category"},l.a.createElement(c.Link,{to:"/categories/"+n+"/",className:"article__meta-category-link"},a))),l.a.createElement("h2",{className:"article__title","data-kontent-element-codename":"title"},l.a.createElement(c.Link,{className:"article__title-link",to:s},e)),l.a.createElement("p",{className:"article__description","data-kontent-element-codename":"description"},r),l.a.createElement(c.Link,{className:"article__readmore",to:s},"Read"))},t}(l.a.Component));t.a=m},"9JP6":function(e,t,a){},nz5Z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("9Hrx"),r=a("q1tI"),l=a.n(r),c=a("TJpk"),s=a.n(c),i=a("ntAx"),o=a("kfNp"),m=a("1EB3"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allKontentItemArticle.nodes.forEach((function(t){e.push(l.a.createElement(m.a,{data:t,key:t.system.codename}))})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__inner"},l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"page__title"},t),l.a.createElement("div",{className:"page__body"},e))))},t}(l.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data.kontentItemSiteMetadata.elements.title.value,a=e.pageContext.categoryTitle;return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s.a,{title:a+" - "+t}),l.a.createElement(o.a,null),l.a.createElement(p,e)))},t}(l.a.Component),u=(t.default=d,"54756664")}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-14ce6122913861242983.js.map