(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9965:function(e,a,r){Promise.resolve().then(r.t.bind(r,8995,23)),Promise.resolve().then(r.bind(r,2071)),Promise.resolve().then(r.t.bind(r,4119,23))},7478:function(e,a,r){"use strict";r.d(a,{_6:function(){return applyDarkTheme}});var n=r(4670),t=r(7437),o=r(2265),i=r(2406),c=r.n(i),l=r(9981),s=r(6716),d=r(5805),u=r(237),applyDarkTheme=function(){null===(e=document.querySelector(".navbar"))||void 0===e||e.classList.add("dark"),null===(a=document.querySelector(".navbar-nav"))||void 0===a||a.classList.add("dark"),null===(r=document.querySelector(".modal-content"))||void 0===r||r.classList.add("dark"),null===(n=document.querySelector("body"))||void 0===n||n.classList.add("dark");var e,a,r,n,t,o,i=null===(t=document.querySelector(".navbar-brand"))||void 0===t?void 0:t.querySelectorAll("img");i&&i.forEach(function(e){e.src="/images/logo-blue-dark.svg"}),null===(o=document.querySelectorAll(".card"))||void 0===o||o.forEach(function(e){e.classList.add("dark")})},removeDarkTheme=function(){null===(e=document.querySelector(".navbar"))||void 0===e||e.classList.remove("dark"),null===(a=document.querySelector(".modal-content"))||void 0===a||a.classList.remove("dark"),null===(r=document.querySelector(".navbar-nav"))||void 0===r||r.classList.remove("dark"),null===(n=document.querySelector("body"))||void 0===n||n.classList.remove("dark");var e,a,r,n,t,o,i=null===(t=document.querySelector(".navbar-brand"))||void 0===t?void 0:t.querySelectorAll("img");i&&i.forEach(function(e){e.src="/images/logo-blue.svg"}),null===(o=document.querySelectorAll(".card"))||void 0===o||o.forEach(function(e){e.classList.remove("dark")})};a.ZP=function(e){var a=(0,n._)((0,o.useState)(!1),2),r=a[0],i=a[1],m=(0,n._)((0,o.useState)(!1),2),h=m[0],v=m[1],b=(0,n._)((0,o.useState)(!1),2),f=b[0],x=b[1];(0,o.useEffect)(function(){(0,u.ej)("allowCookies")&&(i(!0),(0,u.ej)("disableIntro")&&v(!0),(0,u.ej)("darkTheme")&&x(!0))},[]);var g=(0,t.jsxs)("span",{children:["Aceitar Cookies (",(0,t.jsx)("a",{href:"/cookies-policy",children:"Pol\xedtica de Cookies"}),")"]});return(0,t.jsxs)(l.Z,{show:e.show,onHide:function(){return e.setShow(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",contentClassName:c().ConfigsModal,centered:!0,children:[(0,t.jsx)(l.Z.Header,{children:(0,t.jsx)(l.Z.Title,{children:"Configura\xe7\xf5es"})}),(0,t.jsx)(l.Z.Body,{children:(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(d.Z.Check,{type:"switch",id:"allow-cookies-switch",label:g,checked:r,onChange:function(){var e=!r;i(e),!0===e?(0,u.d8)("allowCookies","true",365):(v(!1),(0,u.kT)("allowCookies"),(0,u.kT)("disableIntro"),(0,u.kT)("darkTheme"))}}),(0,t.jsx)(d.Z.Check,{disabled:!r,type:"switch",label:"Modo Escuro",id:"dark-theme-switch",checked:f,onChange:function(){var e=!f;x(e),!0===e?((0,u.d8)("darkTheme","true",365),applyDarkTheme()):((0,u.kT)("darkTheme"),removeDarkTheme())}}),(0,t.jsx)(d.Z.Check,{disabled:!r,type:"switch",label:"Desabilitar anima\xe7\xe3o de introdu\xe7\xe3o da p\xe1gina inicial",id:"disable-intro-switch",checked:h,onChange:function(){var e=!h;v(e),!0===e?(0,u.d8)("disableIntro","true",365):(0,u.kT)("disableIntro")}})]})}),(0,t.jsx)(l.Z.Footer,{children:(0,t.jsx)(s.Z,{onClick:function(){return e.setShow(!1)},variant:"primary",children:"Fechar"})})]})}},2071:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return LamacNavbar_LamacNavbar}});var n=r(4670),t=r(7437),o=r(2265),i=r(2824),c=r(5237),l=r(7291),s=r(690),d=r(6691),u=r.n(d),m={src:"/_next/static/media/logo-blue.af6610ec.svg",height:200,width:633,blurWidth:0,blurHeight:0},h=r(2867),v=r.n(h),b=r(9150),f=r(3560),x=r(4606),g=r(237),k=r(7478),LamacNavbar_LamacNavbar=function(){var e=(0,n._)((0,o.useState)(!1),2),a=e[0],r=e[1];(0,o.useEffect)(function(){(0,g.ej)("darkTheme")&&(0,k._6)(),"/"!==window.location.pathname||(0,g.ej)("disableIntro")||sessionStorage.getItem("introPlayed")||r(!0)},[]);var d=(0,t.jsxs)("span",{children:[(0,t.jsx)(b.iqr,{})," Home"]}),h=(0,t.jsxs)("span",{children:[(0,t.jsx)(x.Hfo,{})," Informa\xe7\xf5es"]}),N=(0,t.jsxs)("span",{children:[(0,t.jsx)(f.fbm,{})," Tutoriais"]}),_=(0,t.jsxs)("span",{children:[(0,t.jsx)(x.J1t,{})," Contato"]});return(0,t.jsx)(s.Z,{className:v().Navbar,expand:"lg",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(s.Z.Brand,{href:"/",className:"".concat(v().SmallNavBrand," ").concat(a?v().DelayedNavBrand:""),children:[(0,t.jsx)(u(),{id:"lamac-navbrand",src:m,className:"d-lg-none ".concat(v().SmallNavBrandImg),alt:"LaMaC Logo White",priority:!0}),(0,t.jsx)(u(),{id:"lamac-navbrand-sm",src:m,className:"d-none d-lg-block",width:350,alt:"LaMaC Logo White",priority:!0})]}),(0,t.jsx)(s.Z.Toggle,{"aria-controls":"basic-navbar-nav",className:a?v().NavbarToggleDelayed:""}),(0,t.jsx)(s.Z.Collapse,{id:"basic-navbar-nav",className:"".concat(v().NavbarNav," ").concat(v().NavbarCollapse," ").concat(a?v().NavbarNavDelayed:""),children:(0,t.jsxs)(c.Z,{className:"ms-auto",children:[(0,t.jsx)(c.Z.Link,{href:"/",children:d}),(0,t.jsx)(c.Z.Link,{href:"/about",className:"d-lg-none",children:h}),(0,t.jsxs)(l.Z,{title:h,id:"research-nav-dropdown",renderMenuOnMount:!0,onToggle:function(){return window.location.href="/about"},className:"d-none d-lg-block",children:[(0,t.jsx)(l.Z.Item,{href:"/about#lamac",children:"Sobre o LaMaC"}),(0,t.jsx)(l.Z.Item,{href:"/about#computational-math",children:"O que \xe9 Matem\xe1tica Computacional"}),(0,t.jsx)(l.Z.Item,{href:"/about#research-areas",children:"Linhas de Pesquisa"}),(0,t.jsx)(l.Z.Item,{href:"/about#team",children:"Nossa equipe"})]}),(0,t.jsx)(c.Z.Link,{href:"https://github.com/lamac-uece/tutoriais-lamac",target:"_blank",className:"d-lg-none",children:N}),(0,t.jsxs)(l.Z,{id:"tutorials-nav-dropdown",title:N,renderMenuOnMount:!0,onToggle:function(){return window.location.href="https://github.com/lamac-uece/tutoriais-lamac"},className:"d-none d-lg-block",children:[(0,t.jsx)(l.Z.Header,{children:"Matem\xe1tica"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/LAMAC-UECE/tutoriais-lamac/tree/main/algebra_linear",children:"\xc1lgebra Linear"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/lamac-uece/tutoriais-lamac/tree/main/calculo_numerico",children:"C\xe1lculo Num\xe9rico"}),(0,t.jsx)(l.Z.Divider,{}),(0,t.jsx)(l.Z.Header,{children:"Computa\xe7\xe3o"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/lamac-uece/tutoriais-lamac/tree/main/python",children:"Programa\xe7\xe3o em Python"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/lamac-uece/tutoriais-lamac/tree/main/processamento_de_imagens",children:"Processamento de Imagens"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/lamac-uece/tutoriais-lamac/tree/main/redes_neurais_artificiais",children:"Redes Neurais Artificiais"}),(0,t.jsx)(l.Z.Item,{href:"https://github.com/lamac-uece/tutoriais-lamac/tree/main/computacao_grafica",children:"Computa\xe7\xe3o Gr\xe1fica"})]}),(0,t.jsx)(c.Z.Link,{href:"/contact",children:_})]})})]})})}},237:function(e,a,r){"use strict";function setCookie(e,a,r){var n=new Date;n.setTime(n.getTime()+864e5*r);var t="expires="+n.toUTCString();document.cookie=e+"="+a+";"+t+";path=/"}function deleteCookie(e){var a=new Date;a.setTime(a.getTime());var r="expires="+a.toUTCString();document.cookie="".concat(e,"=; ").concat(r,"; path=/;")}function getCookie(e){for(var a=e+"=",r=decodeURIComponent(document.cookie).split(";"),n=0;n<r.length;n++){for(var t=r[n];" "===t.charAt(0);)t=t.substring(1);if(0===t.indexOf(a))return t.substring(a.length,t.length)}return""}r.d(a,{d8:function(){return setCookie},ej:function(){return getCookie},kT:function(){return deleteCookie}})},4119:function(){},2406:function(e){e.exports={ConfigsModal:"ConfigsModal_ConfigsModal__oCvbx"}},2867:function(e){e.exports={Navbar:"LamacNavbar_Navbar__6ROyB",NavbarNav:"LamacNavbar_NavbarNav___czJ7",NavbarNavDelayed:"LamacNavbar_NavbarNavDelayed__73SZ9",fadeIn:"LamacNavbar_fadeIn__FeZst",NavbarToggleDelayed:"LamacNavbar_NavbarToggleDelayed__X5mQy",NavbarCollapse:"LamacNavbar_NavbarCollapse__8HdLL",DelayedNavBrand:"LamacNavbar_DelayedNavBrand__hb3kZ",fadeInFromLeft:"LamacNavbar_fadeInFromLeft___5HcN",SmallNavBrand:"LamacNavbar_SmallNavBrand__rT08U",SmallNavBrandImg:"LamacNavbar_SmallNavBrandImg__Bfxty"}}},function(e){e.O(0,[520,447,712,780,190,246,971,864,744],function(){return e(e.s=9965)}),_N_E=e.O()}]);