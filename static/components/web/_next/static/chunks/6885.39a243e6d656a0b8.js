(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6885],{55871:function(e,n,t){"use strict";t.r(n),t.d(n,{ChatModerationActionMenu:function(){return K}});var o=t(85893),a=t(24716),r=t(45257),l=t(28625),c=t(96652),i=t(67294),s=t(5152),u=t.n(s),d=t(22159),f=t(78533),p=t(6647),m=t(55050),v=t(90622),h=t(70936),y=t(14845),C=t(43796),b=t(14675),x=t(4511);class g{static async removeMessage(e,n){let t=new URL("/api/chat/messagevisibility",window.location.toString());t.searchParams.append("accessToken",n);let o=t.toString(),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})};await fetch(o,a)}static async banUser(e,n){let t=new URL("/api/chat/users/setenabled",window.location.toString());t.searchParams.append("accessToken",n);let o=t.toString(),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e})};await fetch(o,a)}}var Z=t(26024),k=t.n(Z),w=t(9507),j=t(30927);let{Panel:E}=f.default,P=u()(()=>Promise.all([t.e(7298),t.e(7618)]).then(t.t.bind(t,7618,23)),{loadableGenerated:{webpack:()=>[7618]},ssr:!1}),N=async(e,n)=>{try{g.removeMessage(e,n)}catch(e){console.error(e)}},M=e=>{let{label:n,value:t}=e;return(0,o.jsxs)(p.Z,{justify:"space-around",align:"middle",children:[(0,o.jsx)(m.Z,{span:12,children:n}),(0,o.jsx)(m.Z,{span:12,children:t})]})},O=e=>{let{client:n}=e,{messageCount:t,connectedAt:a,geo:r}=n,l=(0,b.WU)(new Date(a),"PP pp");return(0,o.jsxs)("div",{children:[(0,o.jsx)(M,{label:"Messages Sent",value:t.toString()}),"N/A"!==r&&(0,o.jsx)(M,{label:"Geo",value:r}),(0,o.jsx)(M,{label:"Connected At",value:l})]})},S=e=>{let{color:n}=e,t="var(--theme-color-users-".concat(n,")");return(0,o.jsxs)("div",{className:k().colorBlock,style:{backgroundColor:t},children:["Color ",n]})},I=e=>{let{userId:n,accessToken:t}=e,[a,r]=(0,i.useState)(null),[l,c]=(0,i.useState)(!0),s=async()=>{try{let e=await (await fetch("/api/moderation/chat/user/".concat(n,"?accessToken=").concat(t))).json();r(e),c(!1)}catch(e){console.error(e)}};if((0,i.useEffect)(()=>{s()},[]),!a)return null;let{user:u,connectedClients:d,messages:p}=a,{displayColor:m,createdAt:g,previousNames:Z,scopes:k,isBot:I,authenticated:A}=u,_=d.reduce((e,n)=>e+n.messageCount,0),R=(0,b.WU)(new Date(g),"PP pp"),z=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:e=>(0,b.WU)(new Date(e),"PP pp")},{title:"Delete",key:"delete",render:(e,n)=>(0,o.jsx)(v.Z,{type:"primary",ghost:!0,icon:(0,o.jsx)(P,{}),onClick:()=>N(n.id,t)})}];return(0,o.jsx)(x.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,o.jsx)(j.A,{componentName:"ChatModerationDetailsModal",message:n.message,retryFunction:t})},children:(0,o.jsxs)(h.Z,{spinning:l,children:[(0,o.jsx)(S,{color:m}),null==k?void 0:k.map(e=>(0,o.jsx)(y.Z,{children:e},e)),A&&(0,o.jsx)(y.Z,{children:"Authenticated"}),I&&(0,o.jsx)(y.Z,{children:"Bot"}),(0,o.jsx)(M,{label:"Messages Sent Across Clients",value:_.toString()}),(0,o.jsx)(M,{label:"User Created",value:R}),(0,o.jsx)(M,{label:"Known As",value:Z.join(",")}),(0,o.jsxs)(f.default,{accordion:!0,children:[(0,o.jsx)(E,{header:"Currently Connected Clients",children:(0,o.jsx)(f.default,{accordion:!0,children:d.map(e=>(0,o.jsx)(E,{header:(0,w.AB)(e.userAgent),children:(0,o.jsx)(O,{client:e})},e.id))})},"connected-clients"),(0,o.jsx)(f.default,{accordion:!0,children:(0,o.jsx)(E,{header:"Recent Chat Messages",children:(0,o.jsx)(C.Z,{size:"small",pagination:null,columns:z,dataSource:p,rowKey:"id"})},"chat-messages")})]})]})})},{confirm:A}=a.default,_=u()(()=>Promise.all([t.e(7298),t.e(3200)]).then(t.t.bind(t,33200,23)),{loadableGenerated:{webpack:()=>[33200]},ssr:!1}),R=u()(()=>Promise.all([t.e(7298),t.e(2236)]).then(t.t.bind(t,32236,23)),{loadableGenerated:{webpack:()=>[32236]},ssr:!1}),z=u()(()=>Promise.all([t.e(7298),t.e(1008)]).then(t.t.bind(t,71008,23)),{loadableGenerated:{webpack:()=>[71008]},ssr:!1}),T=u()(()=>Promise.all([t.e(7298),t.e(2992)]).then(t.t.bind(t,72992,23)),{loadableGenerated:{webpack:()=>[72992]},ssr:!1}),K=e=>{let{messageID:n,userID:t,userDisplayName:a,accessToken:s}=e,[u,f]=(0,i.useState)(!1),p=async()=>{try{await g.banUser(t,s)}catch(e){console.error(e),r.ZP.error(e)}},m=async()=>{try{await g.removeMessage(n,s)}catch(e){console.error(e),r.ZP.error(e)}},v=async()=>{A({icon:(0,o.jsx)(R,{}),content:"Are you sure you want to remove this message from ".concat(a,"?"),onOk(){m()}})},h=async()=>{A({icon:(0,o.jsx)(R,{}),content:"Are you sure you want to ban ".concat(a," from chat?"),onOk(){p()}})},y=[{icon:(0,o.jsx)(z,{}),label:"Hide Message",key:"hide-message",onClick:v},{icon:(0,o.jsx)(_,{}),label:"Ban User",key:"ban-user",onClick:h},{label:"More Info...",key:"more-info",onClick:()=>f(!0)}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{menu:{items:y},trigger:["click"],children:(0,o.jsx)("button",{type:"button","aria-label":"Chat moderation options",onClick:e=>e.preventDefault(),children:(0,o.jsx)(c.Z,{children:(0,o.jsx)(T,{})})})}),(0,o.jsx)(d.Modal,{title:a,open:u,handleCancel:()=>{f(!1)},children:(0,o.jsx)(I,{userId:t,accessToken:s})})]})}},22159:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return d}});var o=t(85893),a=t(24716),r=t(70936),l=t(67294),c=t(4511),i=t(30927),s=t(27705),u=t.n(s);let d=e=>{let{title:n,url:t,open:s,handleOk:d,handleCancel:f,afterClose:p,height:m,width:v,children:h}=e,[y,C]=(0,l.useState)(!!t),b="100%",x="520px";t&&(b="70vh",x="900px");let g={padding:"0px",minHeight:m,height:null!=m?m:b},Z=t&&(0,o.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>C(!1)}),k=y?"none":"inline";return(0,o.jsx)(a.default,{title:n,open:s,onOk:d,onCancel:f,afterClose:p,bodyStyle:g,width:null!=v?v:x,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:u().modal,children:(0,o.jsx)(c.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,o.jsx)(i.A,{componentName:"Modal",message:n.message,retryFunction:t})},children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[Z&&(0,o.jsx)("div",{style:{display:k},children:Z}),h&&(0,o.jsx)("div",{className:u().content,children:h}),y&&(0,o.jsx)(r.Z,{className:u().spinner,spinning:y,size:"large",tip:n})]})})})};d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},66192:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(1413),a=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=t(32206),c=a.forwardRef(function(e,n){return a.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:r}))})},38443:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(1413),a=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},l=t(32206),c=a.forwardRef(function(e,n){return a.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:r}))})},2850:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(1413),a=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},l=t(32206),c=a.forwardRef(function(e,n){return a.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:r}))})},72909:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(1413),a=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=t(32206),c=a.forwardRef(function(e,n){return a.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:r}))})},78533:function(e,n,t){"use strict";t.d(n,{default:function(){return S}});var o=t(87462),a=t(4942),r=t(19395),l=t(93967),c=t.n(l),i=t(74902),s=t(15671),u=t(43144),d=t(32531),f=t(73568),p=t(71002),m=t(78086),v=t(67294),h=t(96774),y=t.n(h),C=t(45987),b=t(82225),x=t(97685),g=v.forwardRef(function(e,n){var t,o=e.prefixCls,r=e.forceRender,l=e.className,i=e.style,s=e.children,u=e.isActive,d=e.role,f=v.useState(u||r),p=(0,x.Z)(f,2),m=p[0],h=p[1];return(v.useEffect(function(){(r||u)&&h(!0)},[r,u]),m)?v.createElement("div",{ref:n,className:c()("".concat(o,"-content"),(t={},(0,a.Z)(t,"".concat(o,"-content-active"),u),(0,a.Z)(t,"".concat(o,"-content-inactive"),!u),t),l),style:i,role:d},v.createElement("div",{className:"".concat(o,"-content-box")},s)):null});g.displayName="PanelContent";var Z=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],k=function(e){(0,d.Z)(t,e);var n=(0,f.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).onItemClick=function(){var n=e.props,t=n.onItemClick,o=n.panelKey;"function"==typeof t&&t(o)},e.handleKeyPress=function(n){("Enter"===n.key||13===n.keyCode||13===n.which)&&e.onItemClick()},e.renderIcon=function(){var n=e.props,t=n.showArrow,o=n.expandIcon,a=n.prefixCls,r=n.collapsible;if(!t)return null;var l="function"==typeof o?o(e.props):v.createElement("i",{className:"arrow"});return l&&v.createElement("div",{className:"".concat(a,"-expand-icon"),onClick:"header"===r||"icon"===r?e.onItemClick:null},l)},e.renderTitle=function(){var n=e.props,t=n.header,o=n.prefixCls,a=n.collapsible;return v.createElement("span",{className:"".concat(o,"-header-text"),onClick:"header"===a?e.onItemClick:null},t)},e}return(0,u.Z)(t,[{key:"shouldComponentUpdate",value:function(e){return!y()(this.props,e)}},{key:"render",value:function(){var e,n,t=this.props,r=t.className,l=t.id,i=t.style,s=t.prefixCls,u=t.headerClass,d=t.children,f=t.isActive,p=t.destroyInactivePanel,m=t.accordion,h=t.forceRender,y=t.openMotion,x=t.extra,k=t.collapsible,w=(0,C.Z)(t,Z),j="disabled"===k,E="header"===k,P="icon"===k,N=c()((e={},(0,a.Z)(e,"".concat(s,"-item"),!0),(0,a.Z)(e,"".concat(s,"-item-active"),f),(0,a.Z)(e,"".concat(s,"-item-disabled"),j),e),r),M={className:c()("".concat(s,"-header"),(n={},(0,a.Z)(n,u,u),(0,a.Z)(n,"".concat(s,"-header-collapsible-only"),E),(0,a.Z)(n,"".concat(s,"-icon-collapsible-only"),P),n)),"aria-expanded":f,"aria-disabled":j,onKeyPress:this.handleKeyPress};return E||P||(M.onClick=this.onItemClick,M.role=m?"tab":"button",M.tabIndex=j?-1:0),delete w.header,delete w.panelKey,delete w.onItemClick,delete w.showArrow,delete w.expandIcon,v.createElement("div",(0,o.Z)({},w,{className:N,style:i,id:l}),v.createElement("div",M,this.renderIcon(),this.renderTitle(),null!=x&&"boolean"!=typeof x&&v.createElement("div",{className:"".concat(s,"-extra")},x)),v.createElement(b.default,(0,o.Z)({visible:f,leavedClassName:"".concat(s,"-content-hidden")},y,{forceRender:h,removeOnLeave:p}),function(e,n){var t=e.className,o=e.style;return v.createElement(g,{ref:n,prefixCls:s,className:t,style:o,isActive:f,forceRender:h,role:m?"tabpanel":null},d)}))}}]),t}(v.Component);function w(e){var n=e;if(!Array.isArray(n)){var t=(0,p.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map(function(e){return String(e)})}k.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var j=function(e){(0,d.Z)(t,e);var n=(0,f.Z)(t);function t(e){(0,s.Z)(this,t),(o=n.call(this,e)).onClickItem=function(e){var n=o.state.activeKey;if(o.props.accordion)n=n[0]===e?[]:[e];else{var t=(n=(0,i.Z)(n)).indexOf(e);t>-1?n.splice(t,1):n.push(e)}o.setActiveKey(n)},o.getNewChild=function(e,n){if(!e)return null;var t=o.state.activeKey,a=o.props,r=a.prefixCls,l=a.openMotion,c=a.accordion,i=a.destroyInactivePanel,s=a.expandIcon,u=a.collapsible,d=e.key||String(n),f=e.props,p=f.header,m=f.headerClass,h=f.destroyInactivePanel,y=f.collapsible,C=!1;C=c?t[0]===d:t.indexOf(d)>-1;var b=null!=y?y:u,x={key:d,panelKey:d,header:p,headerClass:m,isActive:C,prefixCls:r,destroyInactivePanel:null!=h?h:i,openMotion:l,accordion:c,children:e.props.children,onItemClick:"disabled"===b?null:o.onClickItem,expandIcon:s,collapsible:b};return"string"==typeof e.type?e:(Object.keys(x).forEach(function(e){void 0===x[e]&&delete x[e]}),v.cloneElement(e,x))},o.getItems=function(){var e=o.props.children;return(0,m.Z)(e).map(o.getNewChild)},o.setActiveKey=function(e){"activeKey"in o.props||o.setState({activeKey:e}),o.props.onChange(o.props.accordion?e[0]:e)};var o,a=e.activeKey,r=e.defaultActiveKey;return"activeKey"in e&&(r=a),o.state={activeKey:w(r)},o}return(0,u.Z)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!y()(this.props,e)||!y()(this.state,n)}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,o=n.className,r=n.style,l=n.accordion,i=c()((e={},(0,a.Z)(e,t,!0),(0,a.Z)(e,o,!!o),e));return v.createElement("div",{className:i,style:r,role:l?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=w(e.activeKey)),n}}]),t}(v.Component);j.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},j.Panel=k,j.Panel;var E=t(55548),P=t(71946),N=t(37474),M=t(91604),O=function(e){var n,t=v.useContext(P.E_),l=t.getPrefixCls,i=t.direction,s=e.prefixCls,u=e.className,d=e.bordered,f=e.ghost,p=e.expandIconPosition,h=void 0===p?"start":p,y=l("collapse",s),C=v.useMemo(function(){return"left"===h?"start":"right"===h?"end":h},[h]),b=c()("".concat(y,"-icon-position-").concat(C),(0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(y,"-borderless"),!(void 0===d||d)),"".concat(y,"-rtl"),"rtl"===i),"".concat(y,"-ghost"),!!f),void 0===u?"":u),x=(0,o.Z)((0,o.Z)({},N.ZP),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")});return v.createElement(j,(0,o.Z)({openMotion:x},e,{expandIcon:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,o=t?t(n):v.createElement(r.Z,{rotate:n.isActive?90:void 0});return(0,M.Tm)(o,function(){return{className:c()(o.props.className,"".concat(y,"-arrow"))}})},prefixCls:y,className:b}),(n=e.children,(0,m.Z)(n).map(function(e,n){var t;if(null===(t=e.props)||void 0===t?void 0:t.disabled){var a=e.key||String(n),r=e.props,l=r.disabled,c=r.collapsible,i=(0,o.Z)((0,o.Z)({},(0,E.Z)(e.props,["disabled"])),{key:a,collapsible:null!=c?c:l?"disabled":void 0});return(0,M.Tm)(e,i)}return e})))};O.Panel=function(e){var n=v.useContext(P.E_).getPrefixCls,t=e.prefixCls,r=e.className,l=e.showArrow,i=n("collapse",t),s=c()((0,a.Z)({},"".concat(i,"-no-arrow"),!(void 0===l||l)),void 0===r?"":r);return v.createElement(j.Panel,(0,o.Z)({},e,{prefixCls:i,className:s}))};var S=O},43795:function(e,n,t){"use strict";t.d(n,{default:function(){return A}});var o=t(87462),a=t(4942),r=t(93967),l=t.n(r),c=t(67294),i=t(71946),s=t(24061),u=t(96234),d=t(97685),f=t(71002),p=t(1413),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},v=t(32206),h=c.forwardRef(function(e,n){return c.createElement(v.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:m}))}),y=t(2850),C=t(55548),b=t(21396),x=t(95905),g=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>n.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},Z={click:"onClick",hover:"onMouseOver"},k=c.forwardRef(function(e,n){var t=e.visibilityToggle,r=void 0===t||t,s="object"===(0,f.Z)(r)&&void 0!==r.visible,p=(0,c.useState)(function(){return!!s&&r.visible}),m=(0,d.Z)(p,2),v=m[0],k=m[1],w=(0,c.useRef)(null);c.useEffect(function(){s&&k(r.visible)},[s,r]);var j=(0,x.Z)(w),E=function(){e.disabled||(v&&j(),k(function(e){var n,t=!e;return"object"===(0,f.Z)(r)&&(null===(n=r.onVisibleChange)||void 0===n||n.call(r,t)),t}))},P=function(n){var t=e.action,o=e.iconRender,r=Z[void 0===t?"click":t]||"",l=(void 0===o?function(e){return e?c.createElement(y.Z,null):c.createElement(h,null)}:o)(v),i=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},r,E),"className","".concat(n,"-icon")),"key","passwordIcon"),"onMouseDown",function(e){e.preventDefault()}),"onMouseUp",function(e){e.preventDefault()});return c.cloneElement(c.isValidElement(l)?l:c.createElement("span",null,l),i)};return c.createElement(i.C,null,function(t){var i=t.getPrefixCls,s=e.className,d=e.prefixCls,f=e.inputPrefixCls,p=e.size,m=g(e,["className","prefixCls","inputPrefixCls","size"]),h=i("input",f),y=i("input-password",d),x=r&&P(y),Z=l()(y,s,(0,a.Z)({},"".concat(y,"-").concat(p),!!p)),k=(0,o.Z)((0,o.Z)({},(0,C.Z)(m,["suffix","iconRender","visibilityToggle"])),{type:v?"text":"password",className:Z,prefixCls:h,suffix:x});return p&&(k.size=p),c.createElement(u.ZP,(0,o.Z)({ref:(0,b.sQ)(n,w)},k))})}),w=t(72909),j=t(90622),E=t(41395),P=t(44053),N=t(91604),M=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>n.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},O=c.forwardRef(function(e,n){var t,r=e.prefixCls,s=e.inputPrefixCls,d=e.className,f=e.size,p=e.suffix,m=e.enterButton,v=void 0!==m&&m,h=e.addonAfter,y=e.loading,C=e.disabled,x=e.onSearch,g=e.onChange,Z=e.onCompositionStart,k=e.onCompositionEnd,O=M(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),S=c.useContext(i.E_),I=S.getPrefixCls,A=S.direction,_=c.useContext(E.Z),R=c.useRef(!1),z=I("input-search",r),T=I("input",s),K=(0,P.ri)(z,A).compactSize||f||_,B=c.useRef(null),D=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},L=function(e){var n,t;x&&x(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},U="boolean"==typeof v?c.createElement(w.Z,null):null,F="".concat(z,"-button"),G=v||{},Q=G.type&&!0===G.type.__ANT_BUTTON;t=Q||"button"===G.type?(0,N.Tm)(G,(0,o.Z)({onMouseDown:D,onClick:function(e){var n,t;null===(t=null===(n=null==G?void 0:G.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),L(e)},key:"enterButton"},Q?{className:F,size:K}:{})):c.createElement(j.Z,{className:F,type:v?"primary":void 0,size:K,disabled:C,key:"enterButton",onMouseDown:D,onClick:L,loading:y,icon:U},v),h&&(t=[t,(0,N.Tm)(h,{key:"addonAfter"})]);var q=l()(z,(0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(z,"-rtl"),"rtl"===A),"".concat(z,"-").concat(K),!!K),"".concat(z,"-with-button"),!!v),d);return c.createElement(u.ZP,(0,o.Z)({ref:(0,b.sQ)(B,n),onPressEnter:function(e){R.current||y||L(e)}},O,{size:K,onCompositionStart:function(e){R.current=!0,null==Z||Z(e)},onCompositionEnd:function(e){R.current=!1,null==k||k(e)},prefixCls:T,addonAfter:t,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&x&&x(e.target.value,e),g&&g(e)},className:q,disabled:C}))}),S=t(36410),I=u.ZP;I.Group=function(e){var n=(0,c.useContext)(i.E_),t=n.getPrefixCls,r=n.direction,u=e.prefixCls,d=e.className,f=t("input-group",u),p=l()(f,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(f,"-lg"),"large"===e.size),"".concat(f,"-sm"),"small"===e.size),"".concat(f,"-compact"),e.compact),"".concat(f,"-rtl"),"rtl"===r),void 0===d?"":d),m=(0,c.useContext)(s.aM),v=(0,c.useMemo)(function(){return(0,o.Z)((0,o.Z)({},m),{isFormItemInput:!1})},[m]);return c.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},c.createElement(s.aM.Provider,{value:v},e.children))},I.Search=O,I.TextArea=S.Z,I.Password=k;var A=I},14845:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o=t(4942),a=t(87462),r=t(97685),l=t(96494),c=t(93967),i=t.n(c),s=t(55548),u=t(67294),d=t(71946),f=t(5505),p=t(40823),m=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>n.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},v=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>n.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},h=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(f.E.join("|"),")$")),C=u.forwardRef(function(e,n){var t=e.prefixCls,c=e.className,f=e.style,m=e.children,C=e.icon,b=e.color,x=e.onClose,g=e.closeIcon,Z=e.closable,k=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=u.useContext(d.E_),j=w.getPrefixCls,E=w.direction,P=u.useState(!0),N=(0,r.Z)(P,2),M=N[0],O=N[1];u.useEffect(function(){"visible"in k&&O(k.visible)},[k.visible]);var S=function(){return!!b&&(h.test(b)||y.test(b))},I=(0,a.Z)({backgroundColor:b&&!S()?b:void 0},f),A=S(),_=j("tag",t),R=i()(_,(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(_,"-").concat(b),A),"".concat(_,"-has-color"),b&&!A),"".concat(_,"-hidden"),!M),"".concat(_,"-rtl"),"rtl"===E),c),z=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in k||O(!1))},T="onClick"in k||m&&"a"===m.type,K=(0,s.Z)(k,["visible"]),B=C||null,D=B?u.createElement(u.Fragment,null,B,u.createElement("span",null,m)):m,L=u.createElement("span",(0,a.Z)({},K,{ref:n,className:R,style:I}),D,void 0!==Z&&Z?g?u.createElement("span",{className:"".concat(_,"-close-icon"),onClick:z},g):u.createElement(l.Z,{className:"".concat(_,"-close-icon"),onClick:z}):null);return T?u.createElement(p.Z,null,L):L});C.CheckableTag=function(e){var n=e.prefixCls,t=e.className,r=e.checked,l=e.onChange,c=e.onClick,s=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",n),p=i()(f,(0,o.Z)((0,o.Z)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),r),t);return u.createElement("span",(0,a.Z)({},s,{className:p,onClick:function(e){null==l||l(!r),null==c||c(e)}}))};var b=C},59181:function(e,n,t){"use strict";t.d(n,{G:function(){return l}});var o=t(49641),a=function(e){if((0,o.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some(function(e){return e in t.style})}return!1},r=function(e,n){if(!a(e))return!1;var t=document.createElement("div"),o=t.style[e];return t.style[e]=n,t.style[e]!==o};function l(e,n){return Array.isArray(e)||void 0===n?a(e):r(e,n)}},9507:function(e,n,t){"use strict";t.d(n,{AB:function(){return s},Qr:function(){return l},t5:function(){return r},wS:function(){return i}});var o=t(42238),a=t.n(o);function r(e){let n=e.split(":");n[n.length-1]="";let t=n.join(":");return"[::1]"===(t=t.slice(0,t.length-1))||"127.0.0.1"===t?"Localhost":t}function l(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function c(e,n,t){return String(n.repeat(t)+e).slice(-t)}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Number.isFinite(+e)?Math.abs(e):0,t=Math.floor(n/86400),o=t>0?"".concat(t," day").concat(t>1?"s":""," "):"",a=Math.floor(n/3600%24);return o+(a||t?c("".concat(a,":"),"0",3):"")+c("".concat(Math.floor(n/60%60),":"),"0",3)+c("".concat(Math.floor(n%60)),"0",2)}function s(e){let{device:n,os:t,browser:o}=a()(e),{major:r,name:l}=o,{version:c,name:i}=t,{model:s,type:u}=n;return"libmpv"===e?"mpv media player":l&&r&&i?"".concat(l," ").concat(r," on ").concat(i," ").concat(c,"\n  ").concat(s||u?" (".concat(s||u,")"):""):e}},26024:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__mtTcg",chatHistory:"ChatModerationDetailsModal_chatHistory__Iksxq",colorBlock:"ChatModerationDetailsModal_colorBlock__eRrFu",displayName:"ChatModerationDetailsModal_displayName__vcRZ5"}},27705:function(e){e.exports={spinner:"Modal_spinner__vORWo",content:"Modal_content__mZkaV",modal:"Modal_modal___vOcW"}}}]);