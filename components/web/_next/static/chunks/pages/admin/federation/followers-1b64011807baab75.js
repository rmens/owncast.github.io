(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2476],{63606:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),o=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=n(42135),c=function(e,t){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};c.displayName="CheckOutlined";var l=o.forwardRef(c)},81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"==typeof e?e():e:null}},57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(97685),o=n(67294);function a(){var e=o.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},24093:function(e,t,n){"use strict";n.d(t,{C:function(){return Z}});var r=n(87462),o=n(4942),a=n(71002),i=n(97685),c=n(94184),l=n.n(c),s=n(48555),u=n(42550),f=n(67294),d=n(53124),m=n(25378),p=n(24308),v=f.createContext("default"),h=function(e){var t=e.children,n=e.size;return f.createElement(v.Consumer,null,function(e){return f.createElement(v.Provider,{value:n||e},t)})},y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},g=f.forwardRef(function(e,t){var n,c,h,g=f.useContext(v),x=f.useState(1),w=(0,i.Z)(x,2),b=w[0],j=w[1],Z=f.useState(!1),k=(0,i.Z)(Z,2),E=k[0],O=k[1],S=f.useState(!0),C=(0,i.Z)(S,2),P=C[0],T=C[1],D=f.useRef(null),N=f.useRef(null),_=(0,u.sQ)(t,D),z=f.useContext(d.E_).getPrefixCls,I=function(){if(N.current&&D.current){var t=N.current.offsetWidth,n=D.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,o=void 0===r?4:r;2*o<n&&j(n-2*o<t?(n-2*o)/t:1)}}};f.useEffect(function(){O(!0)},[]),f.useEffect(function(){T(!0),j(1)},[e.src]),f.useEffect(function(){I()},[e.gap]);var R=e.prefixCls,F=e.shape,M=void 0===F?"circle":F,A=e.size,Q=void 0===A?"default":A,L=e.src,q=e.srcSet,H=e.icon,W=e.className,G=e.alt,K=e.draggable,$=e.children,B=e.crossOrigin,X=y(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Y="default"===Q?g:Q,U=Object.keys("object"===(0,a.Z)(Y)&&Y||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),V=(0,m.Z)(U),J=f.useMemo(function(){if("object"!==(0,a.Z)(Y))return{};var e=Y[p.c4.find(function(e){return V[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:H?e/2:18}:{}},[V,Y]),ee=z("avatar",R),et=l()((n={},(0,o.Z)(n,"".concat(ee,"-lg"),"large"===Y),(0,o.Z)(n,"".concat(ee,"-sm"),"small"===Y),n)),en=f.isValidElement(L),er=l()(ee,et,(c={},(0,o.Z)(c,"".concat(ee,"-").concat(M),!!M),(0,o.Z)(c,"".concat(ee,"-image"),en||L&&P),(0,o.Z)(c,"".concat(ee,"-icon"),!!H),c),W);if("string"==typeof L&&P)h=f.createElement("img",{src:L,draggable:K,srcSet:q,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&T(!1)},alt:G,crossOrigin:B});else if(en)h=L;else if(H)h=H;else if(E||1!==b){var eo="scale(".concat(b,") translateX(-50%)");h=f.createElement(s.default,{onResize:I},f.createElement("span",{className:"".concat(ee,"-string"),ref:N,style:(0,r.Z)((0,r.Z)({},"number"==typeof Y?{lineHeight:"".concat(Y,"px")}:{}),{msTransform:eo,WebkitTransform:eo,transform:eo})},$))}else h=f.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:N},$);return delete X.onError,delete X.gap,f.createElement("span",(0,r.Z)({},X,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},"number"==typeof Y?{width:Y,height:Y,lineHeight:"".concat(Y,"px"),fontSize:H?Y/2:18}:{}),J),X.style),className:er,ref:_}),h)}),x=n(50344),w=n(55241),b=n(96159),j=g;j.Group=function(e){var t=f.useContext(d.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,i=e.className,c=e.maxCount,s=e.maxStyle,u=e.size,m=n("avatar-group",a),p=l()(m,(0,o.Z)({},"".concat(m,"-rtl"),"rtl"===r),void 0===i?"":i),v=e.children,y=e.maxPopoverPlacement,j=e.maxPopoverTrigger,Z=(0,x.Z)(v).map(function(e,t){return(0,b.Tm)(e,{key:"avatar-key-".concat(t)})}),k=Z.length;if(c&&c<k){var E=Z.slice(0,c),O=Z.slice(c,k);return E.push(f.createElement(w.Z,{key:"avatar-popover-key",content:O,trigger:void 0===j?"hover":j,placement:void 0===y?"top":y,overlayClassName:"".concat(m,"-popover")},f.createElement(g,{style:s},"+".concat(k-c)))),f.createElement(h,{size:u},f.createElement("div",{className:p,style:e.style},E))}return f.createElement(h,{size:u},f.createElement("div",{className:p,style:e.style},Z))};var Z=j},25378:function(e,t,n){"use strict";var r=n(67294),o=n(57838),a=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=a.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return a.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),a=r.ZP;a.Header=r.h4,a.Footer=r.$_,a.Content=r.VY,a.Sider=o.Z,t.Z=a},55241:function(e,t,n){"use strict";var r=n(87462),o=n(67294),a=n(53124),i=n(94199),c=n(81643),l=n(33603),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},u=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?o.createElement(o.Fragment,null,t&&o.createElement("div",{className:"".concat(r,"-title")},(0,c.Z)(t)),o.createElement("div",{className:"".concat(r,"-inner-content")},(0,c.Z)(n))):null},f=o.forwardRef(function(e,t){var n=e.prefixCls,c=e.title,f=e.content,d=e._overlay,m=e.placement,p=e.trigger,v=e.mouseEnterDelay,h=e.mouseLeaveDelay,y=e.overlayStyle,g=s(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),x=o.useContext(a.E_).getPrefixCls,w=x("popover",n),b=x();return o.createElement(i.Z,(0,r.Z)({placement:void 0===m?"top":m,trigger:void 0===p?"hover":p,mouseEnterDelay:void 0===v?.1:v,mouseLeaveDelay:void 0===h?.1:h,overlayStyle:void 0===y?{}:y},g,{prefixCls:w,ref:t,overlay:d||o.createElement(u,{prefixCls:w,title:c,content:f}),transitionName:(0,l.mL)(b,"zoom-big",g.transitionName)}))});t.Z=f},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(19013),o=n(13882);function a(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(59910),o=n(13882),a=n(93645);function i(e,t,n){(0,o.Z)(2,arguments);var i=(0,r.Z)(e,t)/1e3;return(0,a.u)(null==n?void 0:n.roundingMethod)(i)}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),a=n(14841),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,f,d,m,p=0,v=!1,h=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,r=s;return l=s=void 0,p=t,f=e.apply(r,n)}function x(e){var n=e-m,r=e-p;return void 0===m||n>=t||n<0||h&&r>=u}function w(){var e,n,r,a=o();if(x(a))return b(a);d=setTimeout(w,(e=a-m,n=a-p,r=t-e,h?c(r,u-n):r))}function b(e){return(d=void 0,y&&l)?g(e):(l=s=void 0,f)}function j(){var e,n=o(),r=x(n);if(l=arguments,s=this,m=n,r){if(void 0===d)return p=e=m,d=setTimeout(w,t),v?g(e):f;if(h)return clearTimeout(d),d=setTimeout(w,t),g(m)}return void 0===d&&(d=setTimeout(w,t)),f}return t=a(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?i(a(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==d&&clearTimeout(d),p=0,l=m=s=d=void 0},j.flush=function(){return void 0===d?f:b(o())},j}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),a=n(33448),i=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?i:+e}},89675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/followers",function(){return n(70448)}])},70448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),o=n(67294),a=n(54398),i=n(24093),c=n(71577),l=n(44526),s=n(58091),u=n(5152),f=n.n(u),d=n(38631),m=n(81453),p=n(37135),v=n(34261);let h=f()(()=>Promise.all([n.e(2074),n.e(6910)]).then(n.t.bind(n,66910,23)),{loadableGenerated:{webpack:()=>[66910]},ssr:!1}),y=f()(()=>Promise.all([n.e(2074),n.e(6139)]).then(n.t.bind(n,26139,23)),{loadableGenerated:{webpack:()=>[26139]},ssr:!1}),g=e=>{let{data:t,tableColumns:n,totalCount:o,setCurrentPage:i}=e;return(0,r.jsx)(a.Z,{dataSource:t,columns:n,size:"small",rowKey:e=>e.link,pagination:{pageSize:25,hideOnSinglePage:!0,showSizeChanger:!1,total:o},onChange:e=>{let t=e.current;i(t)}})};function x(){let[e,t]=(0,o.useState)([]),[n,u]=(0,o.useState)([]),[f,v]=(0,o.useState)([]),[x,w]=(0,o.useState)(0),[b,j]=(0,o.useState)(0),Z=(0,o.useContext)(d.aC),{serverConfig:k}=Z||{},{federation:E}=k,{isPrivate:O}=E,S=async()=>{try{let e="".concat(m.HP,"?offset=").concat(25*b,"&limit=").concat(25),r=await (0,m.rQ)(e,{auth:!0}),{results:o,total:a}=r;(0,p.Qr)(o)?v([]):(w(a),v(o));let i=await (0,m.rQ)(m.E8,{auth:!0});(0,p.Qr)(i)?t([]):t(i);let c=await (0,m.rQ)(m.Y9,{auth:!0});(0,p.Qr)(n)?u([]):u(c)}catch(e){console.log("==== error",e)}};(0,o.useEffect)(()=>{S()},[]);let C=[{title:"",dataIndex:"image",key:"image",width:90,render:e=>(0,r.jsx)(i.C,{size:40,src:e||"/img/logo.svg"})},{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})},{title:"URL",dataIndex:"link",key:"link",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}];async function P(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!0}}),S()}catch(e){console.error(e)}}async function T(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!1}}),S()}catch(e){console.error(e)}}let D=[...C];D.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(h,{}),onClick:()=>{P(e)}}),width:50},{title:"Reject",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(y,{}),onClick:()=>{T(e)}}),width:50}),D.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let N=[...C];N.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(h,{}),size:"large",onClick:()=>{P(e)}}),width:50}),N.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let _=[...C];_.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(y,{}),onClick:()=>{T(e)}}),width:50});let z=(0,r.jsxs)("span",{children:["Followers ",x>0&&"(".concat(x,")")]}),I=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),(0,r.jsx)(g,{data:f,tableColumns:_,totalCount:x,setCurrentPage:j})]}),R=(0,r.jsxs)("span",{children:["Requests ",e.length>0&&"(".concat(e.length,")")]}),F=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),(0,r.jsx)(a.Z,{dataSource:e,columns:D,size:"small",rowKey:e=>e.link})]}),M=(0,r.jsxs)("span",{children:["Blocked ",n.length>0&&"(".concat(n.length,")")]}),A=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,r.jsx)("p",{children:(0,r.jsx)(a.Z,{dataSource:n,columns:N,size:"small",rowKey:e=>e.link})})]});return(0,r.jsx)("div",{className:"followers-section",children:(0,r.jsx)(l.Z,{defaultActiveKey:"1",items:[{label:z,key:"1",children:I},O&&{label:R,key:"2",children:F},{label:M,key:"3",children:A}]})})}x.getLayout=function(e){return(0,r.jsx)(v.l,{page:e})}},9008:function(e,t,n){e.exports=n(42636)},11163:function(e,t,n){e.exports=n(96885)},79370:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(98924),o=function(e){if((0,r.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some(function(e){return e in n.style})}return!1},a=function(e,t){if(!o(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function i(e,t){return Array.isArray(e)||void 0===t?o(e):a(e,t)}}},function(e){e.O(0,[173,5874,2184,2364,4931,5402,5257,1664,8014,9915,4041,3698,3013,4398,7940,4526,8035,4261,9774,2888,179],function(){return e(e.s=89675)}),_N_E=e.O()}]);