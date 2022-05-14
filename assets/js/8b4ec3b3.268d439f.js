"use strict";(self.webpackChunkkeson_cn=self.webpackChunkkeson_cn||[]).push([[7367],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,g=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],l={title:"\u5de7\u5999\u4f7f\u7528channel\u5b9e\u73b0\u9650\u6d41\u5668",date:new Date("2020-05-10T00:00:00.000Z"),authors:"keson",tags:["go","limiter","\u9650\u6d41\u5668","channel"]},c=void 0,u={permalink:"/go/channel-limiter",source:"@site/blog/go/channel-limiter.md",title:"\u5de7\u5999\u4f7f\u7528channel\u5b9e\u73b0\u9650\u6d41\u5668",description:"cover",date:"2020-05-10T00:00:00.000Z",formattedDate:"2020\u5e745\u670810\u65e5",tags:[{label:"go",permalink:"/tags/go"},{label:"limiter",permalink:"/tags/limiter"},{label:"\u9650\u6d41\u5668",permalink:"/tags/\u9650\u6d41\u5668"},{label:"channel",permalink:"/tags/channel"}],readingTime:1.2033333333333334,truncated:!0,authors:[{name:"Keson",title:"\u5b57\u8282\u8df3\u52a8\u5f00\u53d1\u5de5\u7a0b\u5e08 /  goctl \u7ef4\u62a4\u4eba",url:"https://github.com/anqiansong",imageURL:"/img/logo.webp",key:"keson"}],frontMatter:{title:"\u5de7\u5999\u4f7f\u7528channel\u5b9e\u73b0\u9650\u6d41\u5668",date:"2020-05-10T00:00:00.000Z",authors:"keson",tags:["go","limiter","\u9650\u6d41\u5668","channel"]},prevItem:{title:"\u4e3a\u4ec0\u4e48\u770b\u4e86 N \u6b21 go module, \u5c31\u662f\u8bb0\u4e0d\u4f4f\uff1f",permalink:"/go/golang-module"}},p={authorsImageUrls:[void 0]},s=[{value:"\u666e\u901aLimiter",id:"\u666e\u901alimiter",level:3}],m={toc:s};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cover",src:n(3828).Z,width:"1200",height:"300"})),(0,a.kt)("h3",{id:"\u666e\u901alimiter"},"\u666e\u901aLimiter"),(0,a.kt)("p",null,"\u7279\u70b9\uff1a\u65e0\u65f6\u95f4\u9650\u5236\uff0c\u53ea\u8981\u4e0d\u8d85\u8fc7\u6570\u91cf\u5c31\u53ef\u901a\u8fc7"))}f.isMDXComponent=!0},3828:function(e,t,n){t.Z=n.p+"assets/images/channel-limiter-2fa2d7ccbf92cbdcb998dd363017b153.png"}}]);