(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{1025:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(7163)}])},5855:function(e,t,n){"use strict";var r=n(2729),o=n(5893),i=n(2962),a=n(7294),c=n(9521),u=n(9524),s=n(8867);function _templateObject(){let e=(0,r._)(["\n      text-align: left;\n    "]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  margin-bottom: 50px !important;\n  text-align: center;\n\n  ","\n"]);return _templateObject1=function(){return e},e}let l=(0,c.ZP)(s.nL).withConfig({componentId:"sc-ba990baf-0"})(_templateObject1(),e=>e.$leftAlign&&(0,c.iv)(_templateObject()));t.Z=e=>{let{children:t,title:n,justSEO:r,openGraph:c,$width650:s,$width714:d,titleLeft:f}=e,p=a.useMemo(()=>(0,o.jsx)(i.PB,{title:"Orange Data Mining - ".concat(n),openGraph:{title:"Orange Data Mining - ".concat(n),...c||{}}}),[c,n]);return r?(0,o.jsxs)(o.Fragment,{children:[p,t]}):(0,o.jsxs)(o.Fragment,{children:[p,(0,o.jsxs)(u.Z,{$mt:!0,$mb:!0,$width650:s,$width714:d,children:[n&&(0,o.jsxs)(l,{$leftAlign:f,children:[" ",n]}),t]})]})}},8867:function(e,t,n){"use strict";n.d(t,{Ac:function(){return s},XJ:function(){return u},nL:function(){return c}});var r=n(2729),o=n(9521),i=n(5596);function _templateObject(){let e=(0,r._)(["\n  a {\n    transition: color 0.3s;\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  font-size: 44px;\n  line-height: 1.13;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 12px;\n\n  ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n      margin-bottom: 6px;\n    "]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  font-size: 22px;\n  line-height: 1.18;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: ",";\n\n  ","\n  ",";\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  font-size: 20px;\n  line-height: 1.4;\n  color: ",";\n\n  @media "," {\n    font-size: 18px;\n  }\n\n  + p {\n    margin-top: 10px;\n  }\n\n  a {\n    color: ",";\n    font-weight: 600;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return _templateObject4=function(){return e},e}let a=(0,o.iv)(_templateObject(),e=>{let{theme:t}=e;return t.orange}),c=o.ZP.h1.withConfig({componentId:"sc-89e95305-0"})(_templateObject1(),e=>{let{theme:t}=e;return t.blackLight1},a),u=o.ZP.h2.withConfig({componentId:"sc-89e95305-1"})(_templateObject3(),e=>{let{theme:t}=e;return t.blackLight1},e=>e.$mb6&&(0,o.iv)(_templateObject2()),a),s=o.ZP.p.withConfig({componentId:"sc-89e95305-2"})(_templateObject4(),e=>{let{theme:t}=e;return t.blackLight1},i.Z.S,e=>{let{theme:t}=e;return t.orange})},7163:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return I},default:function(){return GettingStarted}});var r=n(2729),o=n(5893),i=n(5855),a=n(3659);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var c=n(7294);let u=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],getState=e=>({_s:e,status:u[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),startOrEnd=e=>e?6:5,getEndStatus=(e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return startOrEnd(t)}},getTimeout=e=>"object"==typeof e?[e.enter,e.exit]:[e,e],nextTick=(e,t)=>setTimeout(()=>{isNaN(document.body.offsetTop)||e(t+1)},0),s=new Map,l=new Map,updateState=(e,t,n,r,o,i)=>{clearTimeout(o);let a=getState(t),c=new Map(r.current);c.set(e,a),n(c),r.current=c,i&&i({key:e,current:a})},useTransitionMap=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:r,preExit:o,timeout:i,initialEntered:a,mountOnEnter:u,unmountOnExit:d,onStateChange:f}={})=>{let[p,m]=(0,c.useState)(s),b=(0,c.useRef)(p),g=(0,c.useRef)(l),[h,x]=getTimeout(i),_=(0,c.useCallback)((e,t)=>{let{initialEntered:n=a}=t||{},r=n?2:startOrEnd(u);updateState(e,r,m,b),g.current.set(e,{})},[a,u]),w=(0,c.useCallback)(e=>{let t=new Map(b.current);return!!t.delete(e)&&(m(t),b.current=t,g.current.delete(e),!0)},[]),j=(0,c.useCallback)(e=>{let t=b.current.get(e);if(!t)return;let{timeoutId:n}=g.current.get(e),r=getEndStatus(t._s,d);r&&updateState(e,r,m,b,n,f)},[f,d]),v=(0,c.useCallback)((i,a)=>{let c=b.current.get(i);if(!c)return;let u=g.current.get(i),transitState=e=>{switch(updateState(i,e,m,b,u.timeoutId,f),e){case 1:h>=0&&(u.timeoutId=setTimeout(()=>j(i),h));break;case 4:x>=0&&(u.timeoutId=setTimeout(()=>j(i),x));break;case 0:case 3:u.timeoutId=nextTick(transitState,e)}},s=c.isEnter;"boolean"!=typeof a&&(a=!s),a?!s&&(transitState(t?r?0:1:2),e||b.current.forEach((e,t)=>t!==i&&v(t,!1))):s&&transitState(n?o?3:4:startOrEnd(d))},[f,j,e,t,n,r,o,h,x,d]),E=(0,c.useCallback)(t=>{if(e||!1===t)for(let e of b.current.keys())v(e,t)},[e,v]);return{stateMap:p,toggle:v,toggleAll:E,endTransition:j,setItem:_,deleteItem:w}},d=["transition","transitionTimeout"],getTransition=(e,t)=>!0===e||!!(e&&e[t]),useAccordionProvider=(e={})=>{let{transition:t,transitionTimeout:n}=e,r=_objectWithoutPropertiesLoose(e,d),o=useTransitionMap(_extends({timeout:n,enter:getTransition(t,"enter"),exit:getTransition(t,"exit"),preEnter:getTransition(t,"preEnter"),preExit:getTransition(t,"preExit")},r));return _extends({mountOnEnter:!!r.mountOnEnter,initialEntered:!!r.initialEntered},o)},f="szh-accordion",p="szh-adn",m=`data-${p}`,b=`data-${p}-btn`,g=(0,c.createContext)({}),bem=(e,t,n)=>(r,o)=>{let i=t?`${e}__${t}`:e,a=i;n&&Object.keys(n).forEach(e=>{let t=n[e];t&&(a+=` ${i}--${!0===t?e:`${e}-${t}`}`)});let c="function"==typeof r?r(o):r;return"string"==typeof c&&(c=c.trim())&&(a+=` ${c}`),a},mergeProps=(e,t)=>{if(!t)return e;let n=_extends({},e);return Object.keys(t).forEach(r=>{let o=e[r],i=t[r];"function"==typeof i&&o?n[r]=(...e)=>{o(...e),i(...e)}:n[r]=i}),n},AccordionProvider=e=>(0,o.jsx)(g.Provider,_extends({},e)),getAccordion=e=>{do e=e.parentElement;while(e&&!e.hasAttribute(m));return e},getNextIndex=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,moveFocus=(e,t)=>{let{activeElement:n}=document;if(!n||!n.hasAttribute(b)||getAccordion(n)!==t.currentTarget)return;let r=t.currentTarget.querySelectorAll(`[${b}]`),{length:o}=r;for(let i=0;i<o;i++)if(r[i]===n){let n=getNextIndex(e,i,o);for(;getAccordion(r[i])!==getAccordion(r[n]);)n=getNextIndex(e,n,o);i!==n&&(t.preventDefault(),r[n].focus());break}},useAccordion=()=>({accordionProps:{[m]:"",onKeyDown:e=>"ArrowUp"===e.key?moveFocus(!0,e):"ArrowDown"===e.key&&moveFocus(!1,e)}}),h=["providerValue","className"],x=(0,c.forwardRef)((e,t)=>{let{providerValue:n,className:r}=e,i=_objectWithoutPropertiesLoose(e,h),{accordionProps:a}=useAccordion();return(0,o.jsx)(AccordionProvider,{value:n,children:(0,o.jsx)("div",_extends({},mergeProps(a,i),{ref:t,className:bem(f)(r)}))})});x.displayName="ControlledAccordion";let _=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],w=(0,c.forwardRef)((e,t)=>{let{allowMultiple:n,initialEntered:r,mountOnEnter:i,unmountOnExit:a,transition:c,transitionTimeout:u,onStateChange:s}=e,l=_objectWithoutPropertiesLoose(e,_),d=useAccordionProvider({allowMultiple:n,initialEntered:r,mountOnEnter:i,unmountOnExit:a,transition:c,transitionTimeout:u,onStateChange:s});return(0,o.jsx)(x,_extends({},l,{ref:t,providerValue:d}))});w.displayName="Accordion";let j=0,v=c.useId||(()=>{let[e,t]=(0,c.useState)();return(0,c.useEffect)(()=>t(++j),[]),e&&`${p}-${e}`}),useAccordionItem=({state:e,toggle:t,disabled:n})=>{let r=v(),o=r&&r+"-",i={id:r,"aria-controls":o,"aria-expanded":e.isEnter,onClick:t};return n?i.disabled=!0:i[b]="",{buttonProps:i,panelProps:{id:o,"aria-labelledby":r,role:"region"}}},E="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?c.useLayoutEffect:c.useEffect,useHeightTransition=({status:e,isResolved:t})=>{let[n,r]=(0,c.useState)(),o=(0,c.useRef)(null);return E(()=>{("preEnter"===e||"preExit"===e)&&r(o.current.getBoundingClientRect().height)},[e]),[{height:"preEnter"===e||"exiting"===e?0:"entering"===e||"preExit"===e?n:void 0,overflow:t?void 0:"hidden"},o]};function setRef(e,t){"function"==typeof e?e(t):e.current=t}function useMergeRef(e,t){return(0,c.useMemo)(()=>e?t?n=>{setRef(e,n),setRef(t,n)}:e:t,[e,t])}let getItemState=(e,t,n)=>{let{stateMap:r,mountOnEnter:o,initialEntered:i}=e,a=null!=n?n:i;return r.get(t)||{status:a?"entered":o?"unmounted":"exited",isMounted:!o,isEnter:a,isResolved:!0}},useAccordionContext=()=>{let e=(0,c.useContext)(g);return e},useAccordionItemEffect=({itemKey:e,initialEntered:t,disabled:n}={})=>{let r=(0,c.useRef)(null),o=useAccordionContext(),i=null!=e?e:r.current,a=getItemState(o,i,t),{setItem:u,deleteItem:s,toggle:l}=o;return(0,c.useEffect)(()=>{if(n)return;let o=null!=e?e:r.current;return u(o,{initialEntered:t}),()=>void s(o)},[u,s,e,t,n]),{itemRef:r,state:a,toggle:(0,c.useCallback)(e=>l(i,e),[l,i])}},O=["itemKey","initialEntered"],y=["forwardedRef","itemRef","state","toggle","className","disabled","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],getRenderNode=(e,t)=>"function"==typeof e?e(t):e,C=(0,c.memo)(e=>{let{forwardedRef:t,itemRef:n,state:r,toggle:i,className:a,disabled:c,header:u,headingTag:s="h3",headingProps:l,buttonProps:d,contentProps:p,panelProps:m,children:b}=e,g=_objectWithoutPropertiesLoose(e,y),h={state:r,toggle:i,disabled:c},{buttonProps:x,panelProps:_}=useAccordionItem(h),[w,j]=useHeightTransition(r),v=useMergeRef(m&&m.ref,j),{status:E,isMounted:O,isEnter:C}=r;return(0,o.jsxs)("div",_extends({},g,{ref:useMergeRef(t,n),className:bem(f,"item",{status:E,expanded:C})(a,r),children:[(0,o.jsx)(s,_extends({},l,{style:_extends({margin:0},l&&l.style),className:bem(f,"item-heading")(l&&l.className,r),children:(0,o.jsx)("button",_extends({},mergeProps(x,d),{type:"button",className:bem(f,"item-btn")(d&&d.className,r),children:getRenderNode(u,h)}))})),O&&(0,o.jsx)("div",_extends({},p,{style:_extends({display:"exited"===E?"none":void 0},w,p&&p.style),className:bem(f,"item-content")(p&&p.className,r),children:(0,o.jsx)("div",_extends({},mergeProps(_,m),{ref:v,className:bem(f,"item-panel")(m&&m.className,r),children:getRenderNode(b,h)}))}))]}))});C.displayName="AccordionItem";let P=(e=>{let t=(0,c.forwardRef)((t,n)=>{let{itemKey:r,initialEntered:i}=t,a=_objectWithoutPropertiesLoose(t,O);return(0,o.jsx)(e,_extends({forwardedRef:n},a,useAccordionItemEffect({itemKey:r,initialEntered:i,disabled:a.disabled})))});return t.displayName="WithAccordionItem",t})(C);var k=n(9521),M=n(1664),T=n.n(M),A=n(8867);function _templateObject(){let e=(0,r._)(["\n  margin-top: 30px;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  border: 1px solid ",";\n  border-top-width: 1px;\n  border-top: none;\n  overflow: hidden;\n\n  &:first-of-type {\n    border-top: 1px solid ",';\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n  }\n  &:last-of-type {\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n\n  .szh-accordion__item {\n    &-btn {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      width: 100%;\n      margin: 0;\n      padding: 16px;\n      font-size: 18px;\n      font-weight: 400;\n      text-align: left;\n\n      background-color: transparent;\n      border: none;\n\n      &[aria-expanded="true"] {\n        background-color: #f6f6f6d3 !important;\n        box-shadow: inset 0 -1px 0 0 ',";\n      }\n\n      &:hover {\n        background-color: #f6f6f6b7 !important;\n      }\n    }\n\n    &--expanded {\n    }\n\n    &-content {\n      transition: height 0.25s cubic-bezier(0, 0, 0, 1);\n      font-size: 18px;\n\n      a {\n        text-decoration: underline;\n      }\n\n      pre {\n        font-size: 16px;\n        margin-top: 8px;\n      }\n    }\n\n    &-panel {\n      padding: 1rem;\n    }\n  }\n\n  .chevron-down {\n    margin-left: auto;\n    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);\n  }\n\n  &.szh-accordion__item--expanded {\n    .szh-accordion__item-btn {\n      background-color: #e7e7e7;\n    }\n    .chevron-down {\n      transform: rotate(180deg);\n    }\n  }\n"]);return _templateObject1=function(){return e},e}var I=!0;function GettingStarted(e){let{mdxSource:t,frontmatter:n}=e;return(0,o.jsx)(i.Z,{title:n.title,children:(0,o.jsx)(a.R,{...t,components:{Accordion:e=>{let{children:t}=e;return(0,o.jsx)(w,{transition:!0,allowMultiple:!0,transitionTimeout:250,children:t})},AccordionItem:R,Link:e=>{let{url:t,name:n}=e;return(0,o.jsx)(T(),{href:t,children:n})},h2:N}})})}let N=(0,k.ZP)(A.XJ).withConfig({componentId:"sc-61331446-0"})(_templateObject()),R=(0,k.ZP)(P).withConfig({componentId:"sc-61331446-1"})(_templateObject1(),e=>e.theme.borderColor,e=>e.theme.borderColor,e=>e.theme.borderColor)},2746:function(e,t,n){let r=n(5893);e.exports.c=r},3659:function(e,t,n){"use strict";n.d(t,{R:function(){return MDXRemote}});var r={};n.r(r),n.d(r,{MDXContext:function(){return a},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var o=n(7294),i=n(2746);let a=o.createContext({});function withMDXComponents(e){return function(t){let n=useMDXComponents(t.components);return o.createElement(e,{...t,allComponents:n})}}function useMDXComponents(e){let t=o.useContext(a);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let c={};function MDXProvider({components:e,children:t,disableParentContext:n}){let r=useMDXComponents(e);return n&&(r=e||c),o.createElement(a.Provider,{value:r},t)}function MDXRemote({compiledSource:e,frontmatter:t,scope:n,components:a={},lazy:c}){let[u,s]=(0,o.useState)(!c||"undefined"==typeof window);(0,o.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let l=(0,o.useMemo)(()=>{let o=Object.assign({opts:{...r,...i.c}},{frontmatter:t},n),a=Object.keys(o),c=Object.values(o),u=Reflect.construct(Function,a.concat(`${e}`));return u.apply(u,c).default},[n,e]);if(!u)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=o.createElement(MDXProvider,{components:a},o.createElement(l,null));return c?o.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1025)}),_N_E=e.O()}]);