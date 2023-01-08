/*! For license information please see component---src-pages-contact-js-36728d613d1fc3b00166.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[501],{5900:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===c){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)l.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},7408:function(e,t,a){"use strict";var l=a(7462),n=a(3366),c=a(5900),r=a.n(c),s=a(7294),m=a(9541),i=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.as,d=void 0===u?"div":u,f=(0,n.Z)(e,i),E=(0,m.vE)(a,"col"),p=[],v=[];return o.forEach((function(e){var t,a,l,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var c=n.span;t=void 0===c||c,a=n.offset,l=n.order}else t=n;var r="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+E+r:""+E+r+"-"+t),null!=l&&v.push("order"+r+"-"+l),null!=a&&v.push("offset"+r+"-"+a)})),p.length||p.push(E),s.createElement(d,(0,l.Z)({},f,{ref:t,className:r().apply(void 0,[c].concat(p,v))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,a){"use strict";var l=a(7462),n=a(3366),c=a(5900),r=a.n(c),s=a(7294),m=a(9541),i=["bsPrefix","fluid","as","className"],o=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,o=e.as,u=void 0===o?"div":o,d=e.className,f=(0,n.Z)(e,i),E=(0,m.vE)(a,"container"),p="string"==typeof c?"-"+c:"-fluid";return s.createElement(u,(0,l.Z)({ref:t},f,{className:r()(d,c?""+E+p:E)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},994:function(e,t,a){"use strict";var l=a(7462),n=a(3366),c=a(5900),r=a.n(c),s=a(7294),m=a(9541),i=["bsPrefix","className","noGutters","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.noGutters,d=e.as,f=void 0===d?"div":d,E=(0,n.Z)(e,i),p=(0,m.vE)(a,"row"),v=p+"-cols",N=[];return o.forEach((function(e){var t,a=E[e];delete E[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&N.push(""+v+l+"-"+t)})),s.createElement(f,(0,l.Z)({ref:t},E,{className:r().apply(void 0,[c,p,u&&"no-gutters"].concat(N))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,a){"use strict";a.d(t,{vE:function(){return c}});var l=a(7294),n=l.createContext({});n.Consumer,n.Provider;function c(e,t){var a=(0,l.useContext)(n);return e||a[t]||t}},510:function(e,t,a){"use strict";var l=a(7294),n=a(3471);t.Z=function(){var e=n.sY.subTitle,t=n.sY.title,a=n.sY.description;return l.createElement("section",{className:"commonSection client_2"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 text-center"},l.createElement("h4",{className:"sub_title"},e),l.createElement("h2",{className:"sec_title"},t),l.createElement("p",{className:"sec_desc"},a))),l.createElement("div",{className:"row"},n.Tj.map((function(e,t){var a=e.title,n=e.infos;return l.createElement("div",{className:"col-lg-3 col-sm-6 col-md-3",key:"contact-infos-"+t},l.createElement("div",{className:"singleClient_2"},l.createElement("h3",null,a),n.map((function(e,t){var a=e.name;return l.createElement("p",{key:"contact-infos-list-"+t},a)}))))})))))}},5610:function(e,t,a){"use strict";var l=a(7294),n=a(3471);t.Z=function(){var e=n.yA.light;return l.createElement("footer",{className:"footer_1"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},l.createElement("aside",{className:"widget aboutwidget"},l.createElement("a",{href:"/"},l.createElement("img",{src:e,alt:""})),l.createElement("p",null,"Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium."))),l.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},l.createElement("aside",{className:"widget contact_widgets"},l.createElement("h3",{className:"widget_title"},"contact"),l.createElement("p",null,"66 Broklyn Street, New York",l.createElement("br",null),"United States of America"),l.createElement("p",null,"P: 666 888 000"),l.createElement("p",null,"E: ",l.createElement("a",{href:"#"},"needhelp@meipaly.com")))),l.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},l.createElement("aside",{className:"widget social_widget"},l.createElement("h3",{className:"widget_title"},"social"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-twitter"}),"Twitter")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-facebook-square"}),"Facebook")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-youtube-play"}),"Youtube")))))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},l.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",l.createElement("a",{href:"#"},"Layerdrops.com"))))))}},8055:function(e,t,a){"use strict";var l=a(7294);t.Z=function(e){var t=e.extraClass;return l.createElement("div",{className:"google-map__"+t},l.createElement("iframe",{title:"template google map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd",className:"map__"+t,allowFullScreen:!0}))}},5097:function(e,t,a){"use strict";var l=a(7294),n=a(3471),c=a(6187),r=a(994),s=a(7408),m=a(7859),i=a(3530),o=a(5444);t.Z=function(){var e=(0,l.useState)(!1),t=e[0],a=e[1],u=(0,l.useContext)(m.c),d=u.searchStatus,f=u.updateSearchStatus,E=(0,l.useContext)(i.p),p=E.menuStatus,v=E.updateMenuStatus,N=function(){window.scrollY>70?a(!0):window.scrollY<70&&a(!1)};return(0,l.useEffect)((function(){return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[t]),l.createElement("header",{className:"header_01 "+(!0===t?"fixedHeader animated flipInX":null),id:"header",style:{height:70}},l.createElement(c.Z,{fluid:!0},l.createElement(r.Z,{className:"justify-content-between",style:{marginTop:-20}},l.createElement(s.Z,{className:"col-6",lg:2,md:3,sm:3},l.createElement("div",{className:"logo"},l.createElement(o.Link,{to:"/"},l.createElement("img",{src:n.yA.light,alt:""})))),l.createElement(s.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},l.createElement("nav",{className:"mainmenu text-center"},l.createElement("ul",null,n.H9.map((function(e,t){return l.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},l.createElement(o.Link,{to:e.url},e.name),void 0!==e.subItems?l.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return l.createElement("li",{key:t},l.createElement(o.Link,{to:e.url},e.name))}))):null)}))))),l.createElement(s.Z,{lg:2,md:2,sm:4,className:"col-6"},l.createElement("div",{className:"navigator text-right"},l.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),f(!d)}},l.createElement("i",{className:"mei-magnifying-glass"})),l.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},l.createElement("i",{className:"mei-menu"})),l.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),v(!p)},href:"#"},l.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,a){"use strict";var l=a(7294);t.Z=function(e){var t=e.title,a=e.name;return l.createElement("section",{className:"pageBanner"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("div",{className:"banner_content text-center"},l.createElement("h4",null,l.createElement("a",{href:"/"},"home")," - ",a),l.createElement("h2",null,t))))))}},6811:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var l=a(7294),n=a(5610),c=a(2728),r=a(510),s=a(8055),m=a(3471),i=function(){var e=m.yl.subTitle,t=m.yl.title,a=m.yl.description;return l.createElement("section",{className:"commonSection ContactPage"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 text-center"},l.createElement("h4",{className:"sub_title"},e),l.createElement("h2",{className:"sec_title"},t),l.createElement("p",{className:"sec_desc"},a))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1"},l.createElement("form",{action:"#",method:"post",className:"contactFrom",id:"contactForm"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-6 col-sm-6"},l.createElement("input",{className:"input-form required",type:"text",name:"f_name",id:"f_name",placeholder:"First Name"})),l.createElement("div",{className:"col-lg-6 col-sm-6"},l.createElement("input",{className:"input-form required",type:"text",name:"l_name",id:"l_name",placeholder:"Last Name"})),l.createElement("div",{className:"col-lg-6 col-sm-6"},l.createElement("input",{className:"input-form required",type:"email",name:"email",id:"email",placeholder:"Email Address"})),l.createElement("div",{className:"col-lg-6 col-sm-6"},l.createElement("input",{className:"input-form",type:"text",name:"phone",id:"phone",placeholder:"Phone Number"})),l.createElement("div",{className:"col-lg-12 col-sm-12"},l.createElement("textarea",{className:"input-form required",name:"con_message",id:"con_message",placeholder:"Write Message"}))),l.createElement("button",{className:"common_btn red_bg",type:"submit",id:"con_submit"},l.createElement("span",null,"Send Message")))))))},o=a(5035),u=a(7859),d=a(3530),f=a(5097),E=function(){return l.createElement(d.Z,null,l.createElement(u.Z,null,l.createElement(c.Z,{PageTitle:"Contact Page"},l.createElement(f.Z,null),l.createElement(o.Z,{title:"Contact Us",name:"Contact"}),l.createElement(i,null),l.createElement(s.Z,{extraClass:"contact-page"}),l.createElement(r.Z,null),l.createElement(n.Z,null))))}},7462:function(e,t,a){"use strict";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{Z:function(){return l}})},3366:function(e,t,a){"use strict";function l(e,t){if(null==e)return{};var a,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-36728d613d1fc3b00166.js.map