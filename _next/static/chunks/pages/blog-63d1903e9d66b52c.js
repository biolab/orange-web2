(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(9239)}])},2130:function(n,t,e){"use strict";e.d(t,{Z:function(){return x}});var r=e(7297),i=e(5893),o=e(7294),c=e(9521),l=e(4249),u={src:"/_next/static/media/icon-arrow.a5093233.svg",height:10,width:7};function s(){let n=(0,r.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 0;\n  border-top: 1px solid ",";\n"]);return s=function(){return n},n}function a(){let n=(0,r.Z)(["\n      color: #fff;\n      background-color: ",";\n    "]);return a=function(){return n},n}function d(){let n=(0,r.Z)(["\n  font-size: 16px;\n  line-height: 1.25;\n  color: ",";\n  padding: 0;\n  border: 0;\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n\n  ","\n"]);return d=function(){return n},n}function h(){let n=(0,r.Z)(["\n  font-size: 16px;\n  line-height: 1.25;\n  color: ",";\n  padding: 3px 5px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  &:hover {\n    img {\n      transform: ",";\n    }\n  }\n\n  img {\n    display: inline-block;\n    margin: 0 4px;\n    transition: transform 0.3s;\n    ","\n  }\n"]);return h=function(){return n},n}let f=c.ZP.div.withConfig({componentId:"sc-47038421-0"})(s(),n=>{let{theme:t}=n;return t.borderColor}),p=c.ZP.button.withConfig({componentId:"sc-47038421-1"})(d(),n=>{let{theme:t}=n;return t.blackLight},n=>{let{$active:t,theme:e}=n;return t&&(0,c.iv)(a(),e.violet)}),g=c.ZP.button.withConfig({componentId:"sc-47038421-2"})(h(),n=>{let{theme:t}=n;return t.violet},n=>{let{$previous:t}=n;return t?"rotate(180deg) translateX(3px)":"translateX(3px)"},n=>{let{$previous:t}=n;return t&&"transform: rotate(180deg);"});function x(n){let{setPage:t,noOfPages:e,page:r}=n,c=o.useMemo(()=>{let n=[];if(e<=5){for(let t=1;t<e-1;t++)n.push(t);return n}for(let i=r-1;i<r+3;i++)n.push(i);return n.filter(n=>n>0&&n<e-1)},[e,r]);return e<2?null:(0,i.jsxs)(f,{children:[0!==r&&(0,i.jsxs)(g,{$previous:!0,onClick(){t(n=>n-1)},children:[(0,i.jsx)(l.Z,{src:u.src,width:u.width,height:u.height,alt:""}),"Previous"]}),(0,i.jsx)(p,{$active:0===r,onClick(){t(0)},children:1}),!!c.length&&1!==c[0]&&(0,i.jsx)("span",{children:"..."}),c.map(n=>(0,i.jsx)(p,{$active:r===n,onClick(){t(n)},children:n+1},n)),!!c.length&&c[c.length-1]!==e-2&&(0,i.jsx)("span",{children:"..."}),(0,i.jsx)(p,{$active:r===e-1,onClick(){t(e-1)},children:e}),r!==e-1&&(0,i.jsxs)(g,{onClick(){t(n=>n+1)},children:["Next",(0,i.jsx)(l.Z,{src:u.src,width:u.width,height:u.height,alt:""})]})]})}},2724:function(n,t,e){"use strict";e.d(t,{Ac:function(){return h},aC:function(){return d},nL:function(){return a}});var r=e(7297),i=e(9521);function o(){let n=(0,r.Z)(["\n  a {\n    transition: color 0.3s;\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return o=function(){return n},n}function c(){let n=(0,r.Z)(["\n  font-size: 44px;\n  line-height: 1.13;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 12px;\n\n  ",";\n"]);return c=function(){return n},n}function l(){let n=(0,r.Z)(["\n  font-size: 22px;\n  line-height: 1.18;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: ",";\n\n  ",";\n"]);return l=function(){return n},n}function u(){let n=(0,r.Z)(["\n  font-size: 20px;\n  line-height: 1.4;\n  color: ",";\n\n  + p {\n    margin-top: 10px;\n  }\n\n  a {\n    color: ",";\n    font-weight: 600;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return u=function(){return n},n}let s=(0,i.iv)(o(),n=>{let{theme:t}=n;return t.orange}),a=i.ZP.h1.withConfig({componentId:"sc-4f21a047-0"})(c(),n=>{let{theme:t}=n;return t.blackLight},s),d=i.ZP.h3.withConfig({componentId:"sc-4f21a047-1"})(l(),n=>{let{theme:t}=n;return t.blackLight},s),h=i.ZP.p.withConfig({componentId:"sc-4f21a047-2"})(u(),n=>{let{theme:t}=n;return t.blackLight},n=>{let{theme:t}=n;return t.orange})},3391:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(7294);function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,[e,i]=r.useState(n),o=r.useMemo(()=>Math.ceil(e.length/t),[e.length,t]),[c,l]=r.useState(0),u=r.useMemo(()=>e.slice(c*t,(c+1)*t),[e,t,c]);return r.useEffect(()=>{window.scrollTo(0,0)},[c]),{itemsOnPage:u,noOfPages:o,page:c,setPage:l,setItems:i}}},9239:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return N},default:function(){return E}});var r=e(5893);e(7294);var i=e(2206),o=e(3391),c=e(2130),l=e(1664),u=e.n(l),s=e(4249),a=e(7297),d=e(1466),h=e(9521);function f(){let n=(0,a.Z)(["\n  display: inline-grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 70px;\n  border-top: 1px solid ",";\n\n  @media "," {\n    column-gap: 35px;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media "," {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return f=function(){return n},n}function p(){let n=(0,a.Z)(["\n  padding: 30px 0;\n\n  &:nth-child(n + 4) {\n    border-top: 1px solid ",";\n  }\n\n  @media "," {\n    &:nth-child(n + 3) {\n      border-top: 1px solid ",";\n    }\n  }\n\n  @media "," {\n    &:nth-child(n + 2) {\n      border-top: 1px solid ",";\n    }\n  }\n"]);return p=function(){return n},n}function g(){let n=(0,a.Z)(["\n  margin-bottom: 20px;\n\n  img {\n    aspect-ratio: 1.79;\n    object-fit: cover;\n    width: 100%;\n  }\n"]);return g=function(){return n},n}function x(){let n=(0,a.Z)(["\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 600;\n  color: ",";\n  margin-bottom: 10px;\n  text-transform: capitalize;\n"]);return x=function(){return n},n}function m(){let n=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row-reverse;\n  margin-bottom: 30px;\n\n  @media "," {\n    flex-direction: initial;\n  }\n"]);return m=function(){return n},n}function w(){let n=(0,a.Z)(["\n  flex: 0 0 56%;\n  max-width: 56%;\n\n  @media "," {\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n  }\n\n  img {\n    aspect-ratio: 1.82;\n    object-fit: cover;\n    width: 100%;\n  }\n"]);return w=function(){return n},n}function Z(){let n=(0,a.Z)(["\n  flex: 0 0 44%;\n  max-width: 44%;\n  padding-right: 5.17%;\n\n  @media "," {\n    flex: 0 0 100%;\n    max-width: 100%;\n    padding-right: 0;\n  }\n\n  p {\n    max-width: 467px;\n  }\n"]);return Z=function(){return n},n}let j=h.ZP.ul.withConfig({componentId:"sc-3a92640f-0"})(f(),n=>{let{theme:t}=n;return t.borderColor},d.Z.L,d.Z.M,d.Z.XS),b=h.ZP.li.withConfig({componentId:"sc-3a92640f-1"})(p(),n=>{let{theme:t}=n;return t.borderColor},d.Z.M,n=>{let{theme:t}=n;return t.borderColor},d.Z.XS,n=>{let{theme:t}=n;return t.borderColor}),v=h.ZP.figure.withConfig({componentId:"sc-3a92640f-2"})(g()),C=h.ZP.p.withConfig({componentId:"sc-3a92640f-3"})(x(),n=>{let{theme:t}=n;return t.violet}),P=h.ZP.div.withConfig({componentId:"sc-3a92640f-4"})(m(),d.Z.S),k=h.ZP.figure.withConfig({componentId:"sc-3a92640f-5"})(w(),d.Z.S),_=h.ZP.div.withConfig({componentId:"sc-3a92640f-6"})(Z(),d.Z.S);function I(n){let{tags:t}=n;return(0,r.jsx)(C,{children:t.map((n,e)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:n}),e!==t.length-1&&", "]},n))})}var S=e(2724);function z(n){let{blog:t,show:e}=n,{title:i,url:o,date:c,thumbImage:l,shortExcerpt:a,author:d,tags:h}=t;return e?(0,r.jsxs)(P,{children:[(0,r.jsx)(k,{children:l&&(0,r.jsx)(u(),{href:"blog/".concat(o),children:(0,r.jsx)(s.Z,{src:l.src,width:l.width,height:l.height,alt:""})})}),(0,r.jsxs)(_,{children:[(0,r.jsx)(I,{tags:h}),(0,r.jsx)(S.nL,{children:(0,r.jsx)(u(),{href:"blog/".concat(o),children:i})}),(0,r.jsx)(S.Ac,{children:a}),(0,r.jsxs)(S.Ac,{children:[(0,r.jsx)("strong",{children:d}),", ",c]})]})]}):null}function L(n){let{blogs:t}=n;return(0,r.jsx)(j,{children:t.map(n=>{let{title:t,url:e,date:i,thumbImage:o,shortExcerpt:c,author:l,tags:a}=n;return(0,r.jsxs)(b,{children:[o&&(0,r.jsx)(v,{children:(0,r.jsx)(u(),{href:"blog/".concat(e),children:(0,r.jsx)(s.Z,{src:o.src,width:o.width,height:o.height,alt:""})})}),(0,r.jsx)(I,{tags:a}),(0,r.jsx)(S.aC,{children:(0,r.jsx)(u(),{href:"blog/".concat(e),children:t})}),(0,r.jsx)(S.Ac,{children:c}),(0,r.jsxs)(S.Ac,{children:[(0,r.jsx)("strong",{children:l}),", ",i]})]},e)})})}var N=!0;function E(n){let{blogs:t}=n,{itemsOnPage:e,setPage:l,page:u,noOfPages:s}=(0,o.Z)(t.slice(1));return(0,r.jsxs)(i.Z,{$mt:!0,children:[(0,r.jsx)(z,{blog:t[0],show:0===u}),(0,r.jsx)(L,{blogs:e}),(0,r.jsx)(c.Z,{noOfPages:s,page:u,setPage:l})]})}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7801)}),_N_E=n.O()}]);