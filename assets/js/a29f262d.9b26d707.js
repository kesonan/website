(self.webpackChunkkeson_cn=self.webpackChunkkeson_cn||[]).push([[9410],{5085:function(e,t,r){e.exports={src:{srcSet:r.p+"assets/ideal-img/icyfenix.bc79510.1183.png 1183w",images:[{path:r.p+"assets/ideal-img/icyfenix.bc79510.1183.png",width:1183,height:600}],src:r.p+"assets/ideal-img/icyfenix.bc79510.1183.png",toString:function(){return r.p+"assets/ideal-img/icyfenix.bc79510.1183.png"},placeholder:void 0,width:1183,height:600},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhUlEQVQImUWMOwrCQBRFZ8XuwDaVYG3hBkQQBCMoMY0gktotCOKPODjk47wjb4Ykt7jFPYdrAEREm0bAfSpwNboQ9hijUideW5gmZxjPwD6D3HEzPMaMNnfyyRJcyU+Z98NjkF9f2F3wqyPV+gDFCbFlZPrYizeLXxQw30KaIfsU3o9e/AO82b3F921jrQAAAABJRU5ErkJggg=="}},1497:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ae},prepareUserState:function(){return G}});var n=r(7294),a=r(1834),c=r(6010),i=r(102),o={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},s=r(5944),l=["svgClass","colorAttr","children","color","size","viewBox"];function d(e){var t=e.svgClass,r=e.colorAttr,n=e.children,a=e.color,d=void 0===a?"inherit":a,u=e.size,h=void 0===u?"medium":u,f=e.viewBox,m=void 0===f?"0 0 24 24":f,g=(0,i.Z)(e,l);return(0,s.tZ)("svg",Object.assign({viewBox:m,color:r,"aria-hidden":!0,className:(0,c.Z)(o.svgIcon,o[d],o[h],t)},g,{children:n}))}function u(e){return(0,s.tZ)(d,Object.assign({},e,{children:(0,s.tZ)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})}))}var h=r(6775);function f(e,t){var r=[].concat(e);return r.sort((function(e,r){return t(e)>t(r)?1:t(r)>t(e)?-1:0})),r}var m="checkboxLabel_YsHf",g=["id","icon","label","tag"],v="tags";function p(e){return new URLSearchParams(e).getAll(v)}var b=n.forwardRef((function(e,t){var r=e.id,a=e.icon,c=e.label,o=e.tag,l=(0,i.Z)(e,g),d=(0,h.TH)(),u=(0,h.k6)(),f=(0,n.useState)(!1),b=f[0],w=f[1];(0,n.useEffect)((function(){var e=p(d.search);w(e.includes(o))}),[o,d]);var Z=(0,n.useCallback)((function(){var e=function(e,t){var r=e.indexOf(t);if(-1===r)return e.concat(t);var n=[].concat(e);return n.splice(r,1),n}(p(d.search),o),t=function(e,t){var r=new URLSearchParams(e);return r.delete(v),t.forEach((function(e){return r.append(v,e)})),r.toString()}(d.search,e);u.push(Object.assign({},d,{search:t,state:G()}))}),[o,d,u]);return(0,s.BX)(s.HY,{children:[(0,s.tZ)("input",Object.assign({type:"checkbox",id:r,className:"screen-reader-only",onKeyDown:function(e){"Enter"===e.key&&Z()},onFocus:function(e){var t;e.relatedTarget&&(null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("focus")))},onBlur:function(e){var t;null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("blur"))},onChange:Z,checked:b},l)),(0,s.BX)("label",{ref:t,htmlFor:r,className:m,children:[c,a]})]})})),w={checkboxLabel:"checkboxLabel_bfjG"},Z="operator";function _(e){var t;return null!=(t=new URLSearchParams(e).get(Z))?t:"OR"}function A(){var e="showcase_filter_toggle",t=(0,h.TH)(),r=(0,h.k6)(),a=(0,n.useState)(!1),i=a[0],o=a[1];(0,n.useEffect)((function(){o("AND"===_(t.search))}),[t]);var l=(0,n.useCallback)((function(){o((function(e){return!e}));var e=new URLSearchParams(t.search);e.delete(Z),i||e.append(Z,i?"OR":"AND"),r.push(Object.assign({},t,{search:e.toString(),state:G()}))}),[i,t,r]);return(0,s.BX)("div",{children:[(0,s.tZ)("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:l,onKeyDown:function(e){"Enter"===e.key&&l()},checked:i}),(0,s.BX)("label",{htmlFor:e,className:(0,c.Z)(w.checkboxLabel,"shadow--md"),children:[(0,s.tZ)("span",{className:w.checkboxLabelOr,children:"OR"}),(0,s.tZ)("span",{className:w.checkboxLabelAnd,children:"AND"})]})]})}var N=r(8637),y=r(3699),C={showcaseCardImage:"showcaseCardImage_WoVb",showcaseCardHeader:"showcaseCardHeader_Mceh",showcaseCardTitle:"showcaseCardTitle_J7aP",svgIconFavorite:"svgIconFavorite_Xc7Y",showcaseCardSrcBtn:"showcaseCardSrcBtn_nptx",showcaseCardBody:"showcaseCardBody_R1Nj",cardFooter:"cardFooter_ODAT",tag:"tag_P8ik",textLabel:"textLabel_MjoO",colorLabel:"colorLabel_gM4S"},E=r(3935),B=r(6441),x="tooltip_LqSg",k="tooltipArrow_bmQN";function S(e){var t=e.children,r=e.id,a=e.anchorEl,c=e.text,i=e.delay,o=(0,n.useState)(!1),l=o[0],d=o[1],u=(0,n.useState)(null),h=u[0],f=u[1],m=(0,n.useState)(null),g=m[0],v=m[1],p=(0,n.useState)(null),b=p[0],w=p[1],Z=(0,n.useState)(null),_=Z[0],A=Z[1],N=(0,B.D)(h,g,{modifiers:[{name:"arrow",options:{element:b}},{name:"offset",options:{offset:[0,8]}}]}),y=N.styles,C=N.attributes,S=(0,n.useRef)(null),L=r+"_tooltip";return(0,n.useEffect)((function(){A(a?"string"==typeof a?document.querySelector(a):a:document.body)}),[_,a]),(0,n.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],r=function(){""!==c&&(null==h||h.removeAttribute("title"),S.current=window.setTimeout((function(){d(!0)}),i||400))},n=function(){clearInterval(S.current),d(!1)};return h&&(e.forEach((function(e){h.addEventListener(e,r)})),t.forEach((function(e){h.addEventListener(e,n)}))),function(){h&&(e.forEach((function(e){h.removeEventListener(e,r)})),t.forEach((function(e){h.removeEventListener(e,n)})))}}),[h,c,i]),(0,s.BX)(s.HY,{children:[n.cloneElement(t,{ref:f,"aria-describedby":l?L:void 0}),_?E.createPortal(l&&(0,s.BX)("div",Object.assign({id:L,role:"tooltip",ref:v,className:x,style:y.popper},C.popper,{children:[c,(0,s.tZ)("span",{ref:w,className:k,style:y.arrow})]})),_):_]})}var L={favorite:{label:"Favorite",description:"\u6536\u85cf",color:"#e9669e"},opensource:{label:"\u5f00\u6e90",description:"\u5f00\u6e90\u7c7b\u8d44\u6e90",color:"#39ca30"},arch:{label:"\u67b6\u6784",description:"\u67b6\u6784",color:"#dfd545"},design:{label:"\u8bbe\u8ba1",description:"Beautiful Docusaurus sites, polished and standing out from the initial template!",color:"#a44fb7"},golang:{label:"Go",description:"Go \u8bed\u8a00\u76f8\u5173\u8d44\u6e90",color:"#dfd545"},java:{label:"Java",description:"Java \u76f8\u5173\u8d44\u6e90",color:"#007acc"},tools:{label:"\u5de5\u7a0b\u6548\u7387",description:"\u5de5\u7a0b\u6548\u7387\u76f8\u5173\u8d44\u6e90",color:"#39ca30"},sre:{label:"SRE",description:"SRE \u76f8\u5173\u8d44\u6e90",color:"#3F8E68"},latest:{label:"latest",description:"latest project",color:"#EC0888"}},O=[{title:"\u51e4\u51f0\u67b6\u6784",description:"\u6784\u5efa\u53ef\u9760\u7684\u5927\u578b\u5206\u5e03\u5f0f\u7cfb\u7edf",preview:r(5085),website:"http://icyfenix.cn/",tags:["opensource","arch"],date:"2022-05-14"}];var X=Object.keys(L);var I,F=((I=O).map((function(e){var t;(t=e.date)&&(new Date).getTime()-Date.parse(t)<=6048e5&&e.tags.push("latest")})),I=f(I,(function(e){return(new Date).getTime()-Date.parse(e.date)}))),j=n.forwardRef((function(e,t){var r=e.label,n=e.color,a=e.description;return(0,s.BX)("li",{ref:t,className:C.tag,title:a,children:[(0,s.tZ)("span",{className:C.textLabel,children:r.toLowerCase()}),(0,s.tZ)("span",{className:C.colorLabel,style:{backgroundColor:n}})]})}));function R(e){var t=f(e.tags.map((function(e){return Object.assign({tag:e},L[e])})),(function(e){return X.indexOf(e.tag)}));return(0,s.tZ)(s.HY,{children:t.map((function(e,t){var r="showcase_card_tag_"+e.tag;return(0,s.tZ)(S,{text:e.description,anchorEl:"#__docusaurus",id:r,children:(0,s.tZ)(j,Object.assign({},e),t)},t)}))})}var T=(0,n.memo)((function(e){var t=e.user;return(0,s.BX)("li",{className:"card shadow--md",children:[(0,s.tZ)("div",{className:(0,c.Z)("card__image",C.showcaseCardImage),children:(0,s.tZ)(N.Z,{img:t.preview,alt:t.title})}),(0,s.BX)("div",{className:"card__body",children:[(0,s.BX)("div",{className:(0,c.Z)(C.showcaseCardHeader),children:[(0,s.tZ)("h4",{className:C.showcaseCardTitle,children:(0,s.tZ)(y.Z,{href:t.website,className:C.showcaseCardLink,children:t.title})}),t.tags.includes("favorite")&&(0,s.tZ)(u,{svgClass:C.svgIconFavorite,size:"small"})]}),(0,s.tZ)("p",{className:C.showcaseCardBody,children:t.description})]}),(0,s.tZ)("ul",{className:(0,c.Z)("card__footer",C.cardFooter),children:(0,s.tZ)(R,{tags:t.tags})})]},t.title)})),D=r(6136),P="filterCheckbox_FZyb",U="checkboxList_LYI2",H="showcaseList_mWrw",Y="checkboxListItem_b1JS",M="searchContainer_a2sm",Q="showcaseFavoriteHeader_A4FS",J="svgIconFavoriteXs_M3yI",K="\u5b66\u4e60\u8d44\u6e90",V="\u4ee5\u4e0b\u8d44\u6e90\u6765\u81ea\u7f51\u7edc\uff0c\u4ec5\u4f9b\u4e2a\u4eba\u5b66\u4e60";function G(){var e;if(D.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}var W="name";function q(e){return new URLSearchParams(e).get(W)}function z(){var e=(0,h.TH)(),t=(0,n.useState)("OR"),r=t[0],a=t[1],c=(0,n.useState)([]),i=c[0],o=c[1],s=(0,n.useState)(null),l=s[0],d=s[1];return(0,n.useEffect)((function(){var t,r,n,c,i;o(p(e.search)),a(_(e.search)),d(q(e.search)),t=e.state,c=(n=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,i=n.focusedElementId,null==(r=document.getElementById(i))||r.focus(),window.scrollTo({top:c})}),[e]),(0,n.useMemo)((function(){return function(e,t,r,n){return n&&(e=e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===r?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(F,i,r,l)}),[i,r,l])}function $(){return(0,s.BX)("section",{className:"margin-top--lg margin-bottom--lg text--center",children:[(0,s.tZ)("h1",{children:K}),(0,s.tZ)("p",{children:V})]})}function ee(){var e=z();return(0,s.BX)("section",{className:"container margin-top--l margin-bottom--lg",children:[(0,s.BX)("div",{className:(0,c.Z)("margin-bottom--sm",P),children:[(0,s.BX)("div",{children:[(0,s.tZ)("h2",{children:"Filters"}),(0,s.tZ)("span",{children:"("+e.length+" site"+(e.length>1?"s":"")+")"})]}),(0,s.tZ)(A,{})]}),(0,s.tZ)("ul",{className:U,children:X.map((function(e,t){var r=L[e],n=r.label,a=r.description,c=r.color,i="showcase_checkbox_id_"+e;return(0,s.tZ)("li",{className:Y,children:(0,s.tZ)(S,{id:i,text:a,anchorEl:"#__docusaurus",children:(0,s.tZ)(b,{tag:e,id:i,label:n,icon:"favorite"===e?(0,s.tZ)(u,{svgClass:J}):(0,s.tZ)("span",{style:{backgroundColor:c,width:10,height:10,borderRadius:"50%",marginLeft:8}})})})},t)}))})]})}F.filter((function(e){return e.tags.includes("favorite")}));var te=F.filter((function(e){return!e.tags.includes("favorite")}));function re(){var e=(0,h.k6)(),t=(0,h.TH)(),r=(0,n.useState)(null),a=r[0],c=r[1];return(0,n.useEffect)((function(){c(q(t.search))}),[t]),(0,s.tZ)("div",{className:M,children:(0,s.tZ)("input",{id:"searchbar",placeholder:"\u641c\u7d22\u9879\u76ee",value:null!=a?a:void 0,onInput:function(r){c(r.currentTarget.value);var n=new URLSearchParams(t.search);n.delete(W),r.currentTarget.value&&n.set(W,r.currentTarget.value),e.push(Object.assign({},t,{search:n.toString(),state:G()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}})})}function ne(){var e=z();return 0===e.length?(0,s.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,s.BX)("div",{className:"container padding-vert--md text--center",children:[(0,s.tZ)("h2",{children:"No result"}),(0,s.tZ)(re,{})]})}):(0,s.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:e.length===F.length?(0,s.tZ)(s.HY,{children:(0,s.BX)("div",{className:"container margin-top--lg",children:[(0,s.BX)("div",{className:(0,c.Z)("margin-bottom--md",Q),children:[(0,s.tZ)("h2",{children:"\u8d44\u6e90\u5217\u8868"}),(0,s.tZ)(re,{})]}),(0,s.tZ)("ul",{className:H,children:te.map((function(e){return(0,s.tZ)(T,{user:e},e.title)}))})]})}):(0,s.BX)("div",{className:"container",children:[(0,s.BX)("div",{className:(0,c.Z)("margin-bottom--md",Q),children:[(0,s.tZ)("h2",{children:"\u8d44\u6e90\u5217\u8868"}),(0,s.tZ)(re,{})]}),(0,s.tZ)("ul",{className:H,children:e.map((function(e){return(0,s.tZ)(T,{user:e},e.title)}))})]})})}var ae=function(){return(0,s.tZ)(a.Z,{title:K,description:V,children:(0,s.BX)("main",{className:"margin-vert--lg",children:[(0,s.tZ)($,{}),(0,s.tZ)(ee,{}),(0,s.tZ)(ne,{})]})})}}}]);