"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[6],{9529:function(e,t,a){var l=a(7294),n=a(5444);t.Z=function(e){var t=e.extraClassName,a=e.buttonClass;return l.createElement("section",{className:"commonSection "+t},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-9 col-sm-8 col-md-9"},l.createElement("h2",{className:"sec_title white"},"Let's Get Your Project Started!")),l.createElement("div",{className:"col-lg-3  col-sm-4 col-md-3 text-right"},l.createElement(n.Link,{to:"/contact",className:"common_btn "+a},l.createElement("span",null,"Contact with us"))))))}},5011:function(e,t,a){var l=a(7294),n=a(6187),c=a(994),m=a(7408),r=a(7717),s=a(3471);t.Z=function(){var e=(0,l.useState)(1),t=e[0],a=e[1],i=s.iT.sectionContent,o=s.iT.posts;return l.createElement("section",{className:"commonSection chooseUs"},l.createElement(n.Z,null,l.createElement(c.Z,null,l.createElement(m.Z,{lg:12,className:"text-center"},l.createElement(r.Z,{data:i}))),l.createElement("div",{id:"tabs"},l.createElement(c.Z,null,l.createElement(m.Z,{lg:12},l.createElement("ul",{className:"chooseUs_title"},o.map((function(e,n){var c=e.title;return l.createElement("li",{key:n,className:t===n?"active":" "},l.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a(n)}},c))}))))),l.createElement("div",{className:"tab-content"},o.map((function(e,a){return a===t?l.createElement("div",{className:"tab-pane fade show active animated fadeIn",id:"tes_tab_"+a,key:a},l.createElement(c.Z,{className:0==a%2?" ":"flex-lg-row-reverse"},l.createElement(m.Z,{lg:7},l.createElement("div",{className:"wh_choose"},l.createElement("p",null,e.content),l.createElement("ul",null,e.lists.map((function(e,t){var a=e.item;return l.createElement("li",{key:t},l.createElement("i",{className:"fa fa-check-square"})," ",a)}))))),l.createElement(m.Z,{lg:5},l.createElement("div",{className:"chose_img"},l.createElement("img",{src:e.image,alt:"chose_img-"+a}))))):null}))))))}},199:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),n=a(6187),c=a(994),m=a(7408),r=a(3471),s=a(5444),i=function(e){var t=e.data,a=t.title,n=t.image,c=t.url;return l.createElement("div",{className:"single_wedo"},l.createElement("img",{src:n,alt:a}),l.createElement("div",{className:"overlay_wedo"},l.createElement(s.Link,{to:c},a)))},o=function(){var e=r.$f.sectionContent,t=r.$f.posts,a=e.title,s=e.subTitle,o=e.text;return l.createElement("section",{className:"commonSection what_wedo_2"},l.createElement(n.Z,null,l.createElement(c.Z,null,l.createElement(m.Z,{lg:12,className:"text-center"},l.createElement("h4",{className:"sub_title "},s),l.createElement("h2",{className:"sec_title "},a),l.createElement("p",{className:"sec_desc "},o))),l.createElement(c.Z,null,t.map((function(e,t){return l.createElement(m.Z,{lg:4,md:12,key:t},l.createElement(i,{data:e}))})))))}},2889:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var l=a(7294),n=a(2728),c=a(9529),m=a(5610),r=a(6187),s=a(994),i=a(7408),o=a(7419),u=a(3471),E=a(7717),d=function(){return l.createElement("section",{className:"service_section_2 commonSection"},l.createElement(r.Z,null,l.createElement(s.Z,null,l.createElement(i.Z,{md:12,className:"text-center"},l.createElement(E.Z,{data:u.h_}))),l.createElement(s.Z,null,u.j.map((function(e,t){return l.createElement(i.Z,{lg:4,md:12,key:t},l.createElement(o.Z,{data:e}))})))))},f=a(4324),N=a(510),v=a(199),g=a(2417),Z=a(8055),h=a(1825),p=a(8560),_=a(5011),b=a(9117),w=function(){var e=u.qn.sectionContent,t=u.qn.posts,a=u.qn.image;return l.createElement("section",{className:"commonSection featured"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5 col-sm-12  col-md-5"},l.createElement("div",{className:"features_content"},l.createElement(E.Z,{data:e}),t.map((function(e,t){var a,n,c,m,r,s=e.title,i=e.text;return l.createElement("div",{className:"singleFeature",key:t},l.createElement("div",{className:"f_count"},(a=t+1,n=2,c=Math.abs(a),m=Math.max(0,n-Math.floor(c).toString().length),r=Math.pow(10,m).toString().substr(1),a<0&&(r="-"+r),r+c)),l.createElement("h3",null,s),l.createElement("p",null,i))})))),l.createElement("div",{className:"col-lg-7 col-sm-12 col-md-7 noPaddingRight"},l.createElement("div",{className:"features_img"},l.createElement("img",{src:a.path,alt:""}),l.createElement("div",{className:"img_details"},l.createElement("h4",null,a.text)))))))},k=a(7859),x=a(3530),y=a(5444),C=function(){var e=(0,l.useState)(!1),t=e[0],a=e[1],n=(0,l.useContext)(k.c),c=n.searchStatus,m=n.updateSearchStatus,o=(0,l.useContext)(x.p),E=o.menuStatus,d=o.updateMenuStatus,f=function(){window.scrollY>70?a(!0):window.scrollY<70&&a(!1)};return(0,l.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[t]),l.createElement("header",{className:"header_01 black_color "+(!0===t?"fixedHeader animated flipInX":null),id:"header"},l.createElement(r.Z,{fluid:!0},l.createElement(s.Z,{className:"justify-content-between"},l.createElement(i.Z,{className:"col-6",lg:2,md:3,sm:3},l.createElement("div",{className:"logo"},l.createElement(y.Link,{to:"/"},l.createElement("img",{src:u.yA.dark,alt:""})))),l.createElement(i.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},l.createElement("nav",{className:"mainmenu text-center"},l.createElement("ul",null,u.H9.map((function(e,t){return l.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},l.createElement(y.Link,{to:e.url},e.name),void 0!==e.subItems?l.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return l.createElement("li",{key:t},l.createElement(y.Link,{to:e.url},e.name))}))):null)}))))),l.createElement(i.Z,{lg:2,md:2,sm:4,className:"col-6"},l.createElement("div",{className:"navigator text-right"},l.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),m(!c)}},l.createElement("i",{className:"mei-magnifying-glass"})),l.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},l.createElement("i",{className:"mei-menu"})),l.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),d(!E)},href:"#"},l.createElement("i",{className:"mei-menu"})))))))},S=a(1587),L=a(7619),T=a(2682),I=a(3455),M=a(558),q=a(5355);T.Z.use([I.Z,M.Z,q.Z]);var P=function(){var e={slidesPerView:1,loop:!0,effect:"fade",navigation:{nextEl:"#main-slider-next",prevEl:"#main-slider-prev"},autoplay:{delay:5e3}};return l.createElement("section",{className:"main-slider main-slider__two"},l.createElement(S.t,e,u.zT.map((function(e,t){var a=e.image,n=e.subTitle,c=e.title,m=e.button;return l.createElement(L.o,{key:t},l.createElement("div",{className:"image-layer",style:{backgroundImage:"url("+a+")"}}),l.createElement(r.Z,null,l.createElement(s.Z,null,l.createElement(i.Z,{lg:12,className:"text-left"},l.createElement("p",{className:"main-slider__subtext"},n),l.createElement("h3",{className:"main-slider__title"},c),l.createElement(y.Link,{to:m.url,className:"common_btn red_bg"},l.createElement("span",null,m.label))))))})),l.createElement("div",{className:"swiper-button-prev",id:"main-slider-prev"},l.createElement("i",{className:"fa fa-angle-left"})),l.createElement("div",{className:"swiper-button-next",id:"main-slider-next"},l.createElement("i",{className:"fa fa-angle-right"}))))},j=function(){return l.createElement(x.Z,null,l.createElement(k.Z,null,l.createElement(n.Z,{PageTitle:"Home Two"},l.createElement(C,null),l.createElement(P,null),l.createElement(c.Z,{extraClassName:"ready_2",buttonClass:"red_bg"}),l.createElement(d,null),l.createElement(w,null),l.createElement(p.Z,null),l.createElement(h.Z,null),l.createElement(_.Z,null),l.createElement(v.Z,null),l.createElement(g.Z,null),l.createElement(f.Z,null),l.createElement(Z.Z,{extraClass:"contact-page"}),l.createElement(b.Z,null),l.createElement(N.Z,null),l.createElement(m.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-2-js-1b31033c8164e1f57e9c.js.map