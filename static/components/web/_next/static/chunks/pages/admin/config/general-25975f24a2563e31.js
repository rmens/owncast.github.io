(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1871,8035],{39856:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/general",function(){return n(60060)}])},4349:function(e,t,n){"use strict";n.d(t,{Q:function(){return d},Y:function(){return u}});var s=n(85893),a=n(67294),r=n(85818),o=n(20550),i=n(67032),l=n(57520);let{Title:c}=r.Z,d="#5a67d8",u=e=>{let{title:t,description:n,placeholder:r,maxLength:u,values:m,handleDeleteIndex:h,handleCreateString:p,submitStatus:f,continuousStatusMessage:x}=e,[g,j]=(0,a.useState)(""),v=e=>{let{value:t}=e;j(t)},y=()=>{let e=g.trim();p(e),j("")};return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(c,{level:3,className:"section-title",children:t}),(0,s.jsx)("p",{className:"description",children:n}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==m?void 0:m.map((e,t)=>{let n=()=>{h(t)};return(0,s.jsx)(o.Z,{closable:!0,onClose:n,color:d,children:e},"tag-".concat(e,"-").concat(t))})}),x&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(l.E,{status:x})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(i.nv,{fieldName:"string-input",value:g,onChange:v,onPressEnter:y,maxLength:u,placeholder:r,status:f})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},44716:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(85893),a=n(67294),r=n(94594),o=n(91332),i=n(57520),l=n(24044),c=n(38631);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:m=!1,fieldName:h,label:p,tip:f,useSubmit:x,onChange:g}=e,[j,v]=(0,a.useState)(null),y=null,b=(0,a.useContext)(c.aC),{setFieldInConfigState:k}=b||{},N=()=>{v(null),clearTimeout(y),y=null},w=async e=>{if(x){v((0,o.kg)(o.Jk));let n=d?!e:e;await (0,l.Si)({apiPath:t,data:{value:n},onSuccess:()=>{k({fieldName:h,value:n,path:u}),v((0,o.kg)(o.zv))},onError:e=>{v((0,o.kg)(o.Un,"There was an error: ".concat(e)))}}),y=setTimeout(N,l.sI)}g&&g(e)},C=null!==j&&j.type===o.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:p})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(r.Z,{className:"switch field-".concat(h),loading:C,onChange:w,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,s.jsx)(i.E,{status:j})]}),(0,s.jsx)("p",{className:"field-tip",children:f})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},97469:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var s=n(85893),a=n(67294),r=n(85818),o=n(71577),i=n(79531),l=n(54398),c=n(85402),d=n(5152),u=n.n(d),m=n(34041),h=n(24044);let p=e=>{let{iconList:t,selectedOption:n,onSelected:a}=e,r=e=>{a&&a(e)},o=""===n?null:n;return(0,s.jsxs)("div",{className:"social-dropdown-container",children:[(0,s.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,s.jsxs)("div",{className:"formfield-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsxs)(m.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:o,value:o,onSelect:r,children:[t.map(e=>{let{platform:t,icon:n,key:a}=e;return(0,s.jsxs)(m.Z.Option,{className:"social-option",value:a,children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,s.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(a))}),(0,s.jsx)(m.Z.Option,{className:"social-option",value:h.z_,children:"Other..."},"platform-".concat(h.z_))]})})]})]})};var f=n(81453),x=n(38631),g=n(89126),j=n(67032),v=n(91332),y=n(57520);let{Title:b}=r.Z,k=u()(()=>Promise.all([n.e(2074),n.e(8244)]).then(n.t.bind(n,18244,23)),{loadableGenerated:{webpack:()=>[18244]},ssr:!1}),N=u()(()=>Promise.all([n.e(2074),n.e(2802)]).then(n.t.bind(n,22802,23)),{loadableGenerated:{webpack:()=>[22802]},ssr:!1}),w=u()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1});function C(){var e,t;let[n,r]=(0,a.useState)([]),[d,u]=(0,a.useState)([]),[m,C]=(0,a.useState)(!1),[S,Z]=(0,a.useState)(!1),[T,E]=(0,a.useState)(!1),[_,P]=(0,a.useState)(-1),[O,F]=(0,a.useState)(h.wC),[L,M]=(0,a.useState)(null),z=(0,a.useContext)(x.aC),{serverConfig:U,setFieldInConfigState:I}=z||{},{instanceDetails:Q}=U,{socialHandles:B}=Q,A=async()=>{try{let e=await (0,f.rQ)(f.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));r(t)}catch(e){console.log(e)}},G=e=>n.find(t=>t.key===e)||!1,J=""!==O.platform&&!n.find(e=>e.key===O.platform);(0,a.useEffect)(()=>{A()},[]),(0,a.useEffect)(()=>{Q.socialHandles&&u(B)},[Q]);let R=()=>{M(null),clearTimeout(null)},D=()=>{C(!1),P(-1),Z(!1),E(!1),F({...h.wC})},V=()=>{D()},H=(e,t)=>{F({...O,[e]:t})},$=e=>{e===h.z_?(Z(!0),H("platform","")):(Z(!1),H("platform",e))},K=e=>{let{value:t}=e.target;H("platform",t)},Y=e=>{let{value:t}=e;H("url",t)},W=async e=>{await (0,h.Si)({apiPath:h.c9,data:{value:e},onSuccess:()=>{I({fieldName:"socialHandles",value:e,path:"instanceDetails"}),E(!1),V(),M((0,v.kg)(v.zv)),setTimeout(R,h.sI)},onError:e=>{M((0,v.kg)(v.Un,"There was an error: ".concat(e))),E(!1),setTimeout(R,h.sI)}})},X=()=>{E(!0);let e=d.length?[...d]:[];-1===_?e.push(O):e.splice(_,1,O),W(e)},q=e=>{let t=[...d];t.splice(e,1),W(t)},ee=e=>{if(e<=0||e>=d.length)return;let t=[...d],n=t[e-1];t[e-1]=t[e],t[e]=n,W(t)},et=e=>{if(e<0||e>=d.length-1)return;let t=[...d],n=t[e+1];t[e+1]=t[e],t[e]=n,W(t)},en={disabled:(e=O.url,"xmpp"===(t=O.platform)?!(0,g.Kf)(e,"xmpp"):"matrix"===t?!(0,g.bu)(e):!(0,g.jv)(e))},es=(0,s.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,s.jsx)("div",{className:"label-side"}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsx)(i.Z,{placeholder:"Other platform name",defaultValue:O.platform,onChange:K})})]});return(0,s.jsxs)("div",{className:"social-links-edit-container",children:[(0,s.jsx)(b,{level:3,className:"section-title",children:"Your Social Handles"}),(0,s.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,s.jsx)(y.E,{status:L}),(0,s.jsx)(l.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:n,url:a}=t,r=G(n);if(!r)return(0,s.jsx)("div",{className:"social-handle-cell",children:(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:n}),(0,s.jsx)("span",{className:"handle-url",title:a,children:a})]})});let{icon:o,platform:i}=r;return(0,s.jsxs)("div",{className:"social-handle-cell",children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:o,alt:"",className:"option-icon"})}),(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:i}),(0,s.jsx)("span",{className:"handle-url",title:a,children:a})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)(o.Z,{size:"small",onClick:()=>{let e=d[n];P(n),F({...e}),C(!0),G(e.platform)||Z(!0)},children:"Edit"}),(0,s.jsx)(o.Z,{icon:(0,s.jsx)(N,{}),size:"small",hidden:0===n,onClick:()=>ee(n)}),(0,s.jsx)(o.Z,{icon:(0,s.jsx)(k,{}),size:"small",hidden:n===d.length-1,onClick:()=>et(n)}),(0,s.jsx)(o.Z,{className:"delete-button",icon:(0,s.jsx)(w,{}),size:"small",onClick:()=>q(n)})]})}],dataSource:d}),(0,s.jsx)(c.Z,{title:"Edit Social Handle",open:m,onOk:X,onCancel:V,confirmLoading:T,okButtonProps:en,children:(0,s.jsxs)("div",{className:"social-handle-modal-content",children:[(0,s.jsx)(p,{iconList:n,selectedOption:J?h.z_:O.platform,onSelected:$}),S&&es,(0,s.jsx)("br",{}),(0,s.jsx)(j.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[O.platform]||"Url to page",value:O.url,onChange:Y,useTrim:!0,type:"url",pattern:g.ax}),(0,s.jsx)(y.E,{status:L})]})}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{type:"primary",onClick:()=>{D(),C(!0)},children:"Add a new social link"})]})}},42099:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var s=n(85893);n(67294);var a=n(94184),r=n.n(a),o=n(57361),i=n.n(o);let l=e=>{let{variant:t="simple",className:n=""}=e,a=r()(i().root,{[i().simple]:"simple"===t,[i().contrast]:"contrast"===t});return(0,s.jsx)("div",{className:"".concat(a," ").concat(n),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.68623352050781 104.46271514892578",className:"logo-svg",children:(0,s.jsx)("g",{transform:"matrix(1 0 0 1 -37.08803939819336 -18.940391540527344)",children:(0,s.jsx)("g",{children:(0,s.jsxs)("g",{children:[(0,s.jsx)("g",{children:(0,s.jsxs)("g",{transform:"matrix(1.0445680396949917 0 0 1.0445679172996596 36.34559138380523 18.877718021903796)",children:[(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient120",gradientTransform:"rotate(-90 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#1f2022",stopOpacity:"1"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#635e69",stopOpacity:"1"})]})}),(0,s.jsx)("path",{fill:"url(#gradient120)",d:"M91.5 75.35Q93.05 71.15 91.65 67.7 90.35 64.5 86.65 62.3 83.2 60.3 78.3 59.4 73.85 58.6 68.6 58.7 63.55 58.85 58.8 59.8 54.25 60.75 50.8 62.2 47.4 63.65 45.5 65.35 43.6 67.15 43.5 69.05 43.35 71.3 45.8 73.9 48.05 76.3 52.1 78.6 56.15 80.9 61.05 82.55 66.3 84.3 71.4 84.8 74.7 85.1 77.55 84.9 80.65 84.6 83.3 83.6 86.15 82.5 88.15 80.55 90.4 78.4 91.5 75.35M70.6 67.5Q72.3 68.4 73.1 69.7 73.9 71.15 73.45 73 73.1 74.3 72.3 75.25 71.55 76.1 70.3 76.6 69.25 77.05 67.75 77.25 66.3 77.4 64.85 77.3 62.3 77.15 59.25 76.3 56.6 75.5 54.15 74.3 51.9 73.2 50.45 72 49.05 70.75 49.1 69.8 49.2 69 50.25 68.25 51.3 67.55 53.15 67 55 66.4 57.25 66.1 59.8 65.8 62.1 65.8 64.65 65.85 66.7 66.2 68.9 66.65 70.6 67.5Z"})]}),(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient121",gradientTransform:"rotate(-180 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#2087e2",stopOpacity:"1"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#b63fff",stopOpacity:"1"})]})}),(0,s.jsx)("path",{fill:"url(#gradient121)",d:"M66.6 15.05Q66.4 9.65 63.9 6.05 61.25 2.1 56.1 0.65 54.95 0.3 53.65 0.15 52.5 0 51.3 0.1 50.2 0.1 49.1 0.35 48.15 0.55 47 1 43.3 2.45 40.3 6.1 37.5 9.4 35.5 14.3 33.75 18.45 32.7 23.4 31.7 28.05 31.35 32.85 31.05 37.2 31.3 41.2 31.6 45.15 32.4 48.35 34 54.9 37.3 56.4 37.6 56.55 37.9 56.65L39.2 56.85Q39.45 56.85 39.95 56.8 42.05 56.6 44.7 55.05 47.25 53.5 50.05 50.8 53.05 47.9 55.85 44.05 58.8 40.05 61.1 35.6 63.8 30.35 65.25 25.3 66.75 19.75 66.6 15.05M47.55 23.15Q48.05 23.25 48.4 23.4 52.45 24.8 52.55 29.85 52.6 34 50 39.4 47.85 43.9 44.85 47.3 42.05 50.5 40.15 50.7L39.9 50.75 39.45 50.7 39.2 50.6Q37.8 49.95 37.25 46.35 36.7 42.7 37.3 38 37.95 32.75 39.75 28.8 41.9 24.1 45.05 23.25 45.6 23.1 45.85 23.1 46.25 23.05 46.65 23.05 47.05 23.05 47.55 23.15Z"})]}),(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient122",gradientTransform:"rotate(-90 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#100f0f",stopOpacity:"1"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#49261F",stopOpacity:"1"})]})}),(0,s.jsx)("path",{fill:"url(#gradient122)",d:"M2.7 33.6Q2.1 34.4 1.7 35.35 1.25 36.5 1.05 37.7 0 42.6 2.2 47.2 4 51 8 54.35 11.55 57.3 16 59.15 20.5 61 23.85 60.85 24.5 60.85 25.25 60.7 26 60.55 26.5 60.3 27 60.05 27.45 59.65 27.9 59.25 28.15 58.75 29.35 56.45 27.5 51.65 25.6 47 21.75 42.1 17.75 37 13.4 34.05 8.7 30.9 5.45 31.7 4.65 31.9 3.95 32.4 3.25 32.85 2.7 33.6M10.1 43.55Q10.35 43.1 10.6 42.85 10.85 42.6 11.2 42.4 11.6 42.25 11.9 42.2 13.5 41.9 15.95 43.6 18.15 45.05 20.35 47.7 22.35 50.1 23.55 52.4 24.7 54.75 24.25 55.7 24.15 55.9 24 56 23.85 56.2 23.65 56.25 23.55 56.35 23.25 56.4L22.7 56.5Q21.1 56.6 18.55 55.6 16.05 54.6 13.85 52.95 11.5 51.2 10.35 49.15 9.05 46.8 9.75 44.45 9.9 43.95 10.1 43.55Z"})]}),(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient123",gradientTransform:"rotate(-180 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#222020",stopOpacity:"1"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#49261F",stopOpacity:"1"})]})}),(0,s.jsx)("path",{fill:"url(#gradient123)",d:"M34.95 74.2L34.75 74.2Q33.2 74.15 31.9 75.25 30.7 76.3 29.85 78.25 29.1 80 28.8 82.2 28.5 84.4 28.7 86.65 29.1 91.4 31.5 94.7 34.3 98.5 39.3 99.7L39.4 99.7 39.7 99.8 39.85 99.8Q45.3 100.85 47.15 97.75 48 96.3 48 94.05 47.95 91.9 47.2 89.35 46.45 86.75 45.1 84.15 43.75 81.5 42.05 79.35 40.25 77.1 38.45 75.75 36.55 74.35 34.95 74.2M33.55 80.4Q34.35 78.2 35.6 78.3L35.65 78.3Q36.9 78.45 38.6 80.9 40.3 83.35 41.15 86.05 42.1 89 41.55 90.75 40.9 92.6 38.35 92.25L38.3 92.25 38.25 92.2 38.1 92.2Q35.6 91.7 34.25 89.6 33.1 87.7 32.95 85 32.8 82.35 33.55 80.4Z"})]}),(0,s.jsxs)("g",{transform:"matrix(0.9999999999999999 0 0 1 0 5.684341886080802e-14)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient124",gradientTransform:"rotate(-180 .5 .5)",children:[" ",(0,s.jsx)("stop",{offset:"0",stopColor:"#1e1c1c",stopOpacity:"1"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#49261F",stopOpacity:"1"})]})}),(0,s.jsx)("path",{fill:"url(#gradient124)",d:"M22.7 69.65Q22.25 69.3 21.6 69.05 20.95 68.8 20.25 68.7 19.6 68.55 18.85 68.5 16.7 68.45 14.65 69.15 12.65 69.8 11.4 71.1 10.15 72.5 10.2 74.2 10.25 76.05 11.95 78.2 12.4 78.75 13.05 79.4 13.55 79.9 14.2 80.3 14.7 80.6 15.3 80.85 16 81.1 16.4 81.1 18.2 81.35 19.9 80.35 21.55 79.4 22.75 77.65 24 75.85 24.3 73.95 24.6 71.85 23.55 70.5 23.15 70 22.7 69.65M21.7 71.7Q22.15 72.3 21.9 73.3 21.7 74.25 21 75.25 20.3 76.2 19.4 76.75 18.45 77.35 17.55 77.25L17 77.15Q16.7 77.05 16.45 76.85 16.25 76.75 15.9 76.45 15.7 76.25 15.4 75.9 14.5 74.75 14.7 73.8 14.8 72.95 15.75 72.3 16.6 71.7 17.8 71.4 19 71.1 20.1 71.15L20.65 71.2 21.1 71.3Q21.3 71.4 21.45 71.5L21.7 71.7Z"})]}),(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient125",gradientTransform:"rotate(-360 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#FFFFFF",stopOpacity:"0.5"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#FFFFFF",stopOpacity:"0.2"})]})}),(0,s.jsx)("path",{fill:"url(#gradient125)",d:"M52.6 19.25Q59.6 19.25 66.2 20.95 66.7 17.8 66.6 15.05 66.4 9.65 63.9 6.05 61.25 2.1 56.1 0.65 54.95 0.3 53.65 0.15 52.5 0 51.3 0.1 50.2 0.1 49.1 0.35 48.15 0.55 47 1 43.3 2.45 40.3 6.1 37.5 9.4 35.5 14.3 33.85 18.3 32.8 22.85 42.25 19.25 52.6 19.25Z"})]}),(0,s.jsxs)("g",{transform:"matrix(1 0 0 1 0 0)",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{x1:"0",y1:"0",x2:"0",y2:"1",id:"gradient126",gradientTransform:"rotate(-360 .5 .5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#FFFFFF",stopOpacity:"0.5"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#FFFFFF",stopOpacity:"0.2"})]})}),(0,s.jsx)("path",{fill:"url(#gradient126)",d:"M1.05 37.7Q0 42.6 2.2 47.2 2.95 48.8 4.05 50.25 7.55 41.65 14.4 34.75 14 34.45 13.4 34.05 8.7 30.9 5.45 31.7 4.65 31.9 3.95 32.4 3.25 32.85 2.7 33.6 2.1 34.4 1.7 35.35 1.25 36.5 1.05 37.7Z"})]})]})}),(0,s.jsx)("g",{transform:"matrix(1.219512230276127 0 0 1.2195122143630526 32.82519274395008 88.56945194723018)",children:(0,s.jsx)("path",{fill:"#000000",fillOpacity:"1",d:""})})]})})})})})}},60060:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return el}});var s=n(85893),a=n(67294),r=n(44526),o=n(85818),i=n(78353),l=n(38631),c=n(24044),d=n(44716),u=n(77916),m=n(71577),h=n(5152),p=n.n(h),f=n(57520),x=n(91332),g=n(81453),j=n(80693);let v=p()(()=>Promise.resolve().then(n.t.bind(n,628,23)),{loadableGenerated:{webpack:()=>[628]},ssr:!1}),y=p()(()=>n.e(9876).then(n.t.bind(n,29876,23)),{loadableGenerated:{webpack:()=>[29876]},ssr:!1}),b=()=>{var e;let[t,n]=(0,a.useState)(null),[r,o]=(0,a.useState)(!1),[i,d]=(0,a.useState)(0),h=(0,a.useContext)(l.aC),{setFieldInConfigState:p,serverConfig:b}=h||{},k=null==b?void 0:null===(e=b.instanceDetails)||void 0===e?void 0:e.logo,[N,w]=(0,a.useState)(null),C=null,{apiPath:S,tip:Z}=c.ZQ,T=()=>{w(null),clearTimeout(C),C=null},E=e=>(o(!0),new Promise((t,s)=>{if(e.size>j.Z7){let t="File size is too big: ".concat((0,j.kR)(e.size));return w((0,x.kg)(x.Un,"There was an error: ".concat(t))),C=setTimeout(T,c.sI),o(!1),s()}if(!j.dr.includes(e.type)){let t="File type is not supported: ".concat(e.type);return w((0,x.kg)(x.Un,"There was an error: ".concat(t))),C=setTimeout(T,c.sI),o(!1),s()}(0,j.y3)(e,e=>{n(e),setTimeout(()=>t(),100)})})),_=async()=>{t!==k&&(w((0,x.kg)(x.Jk)),await (0,c.Si)({apiPath:S,data:{value:t},onSuccess:()=>{p({fieldName:"logo",value:t,path:""}),w((0,x.kg)(x.zv)),o(!1),d(Math.floor(100*Math.random()))},onError:e=>{w((0,x.kg)(x.Un,"There was an error: ".concat(e))),o(!1)}}),C=setTimeout(T,c.sI))},P="".concat(g.WB,"logo?random=").concat(i);return(0,s.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("img",{src:P,alt:"avatar",className:"logo-preview"}),(0,s.jsx)(u.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:j.dr.join(","),beforeUpload:E,customRequest:_,disabled:r,children:r?(0,s.jsx)(v,{style:{color:"white"}}):(0,s.jsx)(m.Z,{icon:(0,s.jsx)(y,{})})})]}),(0,s.jsx)(f.E,{status:N}),(0,s.jsx)("p",{className:"field-tip",children:Z})]})]})},{Title:k}=o.Z;function N(){let[e,t]=(0,a.useState)(null),n=(0,a.useContext)(l.aC),{serverConfig:r}=n||{},{instanceDetails:o,yp:u}=r,{instanceUrl:m}=u;if((0,a.useEffect)(()=>{t({...o,...u})},[o,u]),!e)return null;let h=()=>{""===e.instanceUrl&&!0===u.enabled&&(0,c.Si)({apiPath:c.AP,data:{value:!1}})},p=n=>{let{fieldName:s,value:a}=n;t({...e,[s]:a})},f=""!==m;return(0,s.jsxs)("div",{className:"edit-general-settings",children:[(0,s.jsx)(k,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.$7,{fieldName:"name",...c.RE,value:e.name,initialValue:o.name,onChange:p}),(0,s.jsx)(i.$7,{fieldName:"instanceUrl",...c.cj,value:e.instanceUrl,initialValue:u.instanceUrl,type:i.xA,onChange:p,onSubmit:h}),(0,s.jsx)(i.$7,{fieldName:"summary",...c.rs,type:i.Sk,value:e.summary,initialValue:o.summary,onChange:p}),(0,s.jsx)(i.$7,{fieldName:"offlineMessage",...c.rd,type:i.Sk,value:e.offlineMessage,initialValue:o.offlineMessage,onChange:p}),(0,s.jsx)(b,{}),(0,s.jsx)(d.Z,{fieldName:"hideViewerCount",useSubmit:!0,...c._X,checked:e.hideViewerCount,onChange:function(e){p({fieldName:"hideViewerCount",value:e})}}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,s.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!u.instanceUrl&&(0,s.jsxs)("p",{className:"description",children:["You must set your ",(0,s.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,s.jsxs)("div",{className:"config-yp-container",children:[(0,s.jsx)(d.Z,{fieldName:"enabled",useSubmit:!0,...c.P,checked:e.enabled,disabled:!f}),(0,s.jsx)(d.Z,{fieldName:"nsfw",useSubmit:!0,...c.EY,checked:e.nsfw,disabled:!f})]})]})}var w=n(20550),C=n(67032),S=n(4349);let{Title:Z}=o.Z;function T(){let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(null),o=(0,a.useContext)(l.aC),{serverConfig:i,setFieldInConfigState:d}=o||{},{instanceDetails:u}=i,{tags:m=[]}=u,{apiPath:h,maxLength:p,placeholder:f,configPath:g}=c.y_,j=null;(0,a.useEffect)(()=>()=>{clearTimeout(j)},[]);let v=()=>{r(null),clearTimeout(j=null)},y=async e=>{r((0,x.kg)(x.Jk)),await (0,c.Si)({apiPath:h,data:{value:e},onSuccess:()=>{d({fieldName:"tags",value:e,path:g}),r((0,x.kg)(x.zv,"Tags updated.")),t(""),j=setTimeout(v,c.sI)},onError:e=>{r((0,x.kg)(x.Un,e)),j=setTimeout(v,c.sI)}})},b=e=>{let{value:s}=e;n||r(null),t(s)},k=()=>{v();let t=e.trim();if(""===t){r((0,x.kg)(x.dG,"Please enter a tag"));return}if(m.some(e=>e.toLowerCase()===t.toLowerCase())){r((0,x.kg)(x.dG,"This tag is already used!"));return}let n=[...m,t];y(n)},N=e=>{v();let t=[...m];t.splice(e,1),y(t)};return(0,s.jsxs)("div",{className:"tag-editor-container",children:[(0,s.jsx)(Z,{level:3,className:"section-title",children:"Add Tags"}),(0,s.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,s.jsx)("div",{className:"edit-current-strings",children:m.map((e,t)=>{let n=()=>{N(t)};return(0,s.jsx)(w.Z,{closable:!0,onClose:n,color:S.Q,children:e},"tag-".concat(e,"-").concat(t))})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(C.nv,{fieldName:"tag-input",value:e,className:"new-tag-input",onChange:b,onPressEnter:k,maxLength:p,placeholder:f,status:n})})]})}var E=n(97469),_=n(87685),P=n(58909),O=n(48825),F=n(76538);let{Title:L}=o.Z;function M(){let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(null),[o,i]=(0,a.useState)(!1),d=(0,a.useContext)(l.aC),{serverConfig:u,setFieldInConfigState:h}=d||{},{instanceDetails:p}=u,{extraPageContent:g}=p,j=null,v=()=>{r(null),i(!1),clearTimeout(j),j=null};async function y(){r((0,x.kg)(x.Jk)),await (0,c.Si)({apiPath:c.AA,data:{value:e},onSuccess:t=>{h({fieldName:"extraPageContent",value:e,path:"instanceDetails"}),r((0,x.kg)(x.zv,t))},onError:e=>{r((0,x.kg)(x.Un,e))}}),j=setTimeout(v,c.sI)}return(0,a.useEffect)(()=>{t(g)},[p]),(0,s.jsxs)("div",{className:"edit-page-content",children:[(0,s.jsx)(L,{level:3,className:"section-title",children:"Custom Page Content"}),(0,s.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,s.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,s.jsx)(_.ZP,{value:e,placeholder:"Enter your custom page content here...",theme:P.FZ,onChange:function(e){t(e),e===g||o?e===g&&o&&i(!1):i(!0)},extensions:[(0,O.markdown)({base:O.markdownLanguage,codeLanguages:F.M})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[o&&(0,s.jsx)(m.Z,{type:"primary",onClick:y,children:"Save"}),(0,s.jsx)(f.E,{status:n})]})]})}function z(){return(0,s.jsxs)("div",{className:"config-public-details-page",children:[(0,s.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,s.jsxs)("div",{className:"top-container",children:[(0,s.jsx)("div",{className:"form-module instance-details-container",children:(0,s.jsx)(N,{})}),(0,s.jsxs)("div",{className:"form-module social-items-container ",children:[(0,s.jsx)("div",{className:"form-module tags-module",children:(0,s.jsx)(T,{})}),(0,s.jsx)("div",{className:"form-module social-handles-container",children:(0,s.jsx)(E.Z,{})})]})]}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(M,{})})]})}var U=n(54907),I=n(15746),Q=n(26713),B=n(71230),A=n(22918),G=n(21987),J=n(11700),R=n(61426);let{Title:D}=o.Z,V=()=>{let[e,t]=(0,a.useState)("/* Enter custom CSS here */"),[n,r]=(0,a.useState)(null),[o,i]=(0,a.useState)(!1),d=(0,a.useContext)(l.aC),{serverConfig:u,setFieldInConfigState:h}=d||{},{instanceDetails:p}=u,{customStyles:g}=p,j=null,v=()=>{r(null),i(!1),clearTimeout(j),j=null};async function y(){r((0,x.kg)(x.Jk)),await (0,c.Si)({apiPath:c.d$,data:{value:e},onSuccess:t=>{h({fieldName:"customStyles",value:e,path:"instanceDetails"}),r((0,x.kg)(x.zv,t))},onError:e=>{r((0,x.kg)(x.Un,e))}}),j=setTimeout(v,c.sI)}(0,a.useEffect)(()=>{t(g)},[p]);let b=a.useCallback(e=>{t(e),e===g||o?e===g&&o&&i(!1):i(!0)},[]);return(0,s.jsxs)("div",{className:"edit-custom-css",children:[(0,s.jsx)(D,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,s.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,s.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,s.jsx)(_.ZP,{value:e,placeholder:"/* Enter custom CSS here */",theme:P.FZ,height:"200px",extensions:[(0,R.css)()],onChange:b}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[o&&(0,s.jsx)(m.Z,{type:"primary",onClick:y,children:"Save"}),(0,s.jsx)(f.E,{status:n})]})]})};var H=n(8118),$=n.n(H);let{Panel:K}=U.Z,Y="/appearance",W=[{name:"theme-color-users-0",description:""},{name:"theme-color-users-1",description:""},{name:"theme-color-users-2",description:""},{name:"theme-color-users-3",description:""},{name:"theme-color-users-4",description:""},{name:"theme-color-users-5",description:""},{name:"theme-color-users-6",description:""},{name:"theme-color-users-7",description:""}],X=[{name:"theme-color-background-main",description:"Background"},{name:"theme-color-action",description:"Action"},{name:"theme-color-action-hover",description:"Action Hover"},{name:"theme-color-components-primary-button-border",description:"Primary Button Border"},{name:"theme-color-components-primary-button-text",description:"Primary Button Text"},{name:"theme-color-components-chat-background",description:"Chat Background"},{name:"theme-color-components-chat-text",description:"Text: Chat"},{name:"theme-color-components-text-on-dark",description:"Text: Light"},{name:"theme-color-components-text-on-light",description:"Text: Dark"},{name:"theme-color-background-header",description:"Header/Footer"},{name:"theme-color-components-content-background",description:"Page Content"},{name:"theme-color-components-video-status-bar-background",description:"Video Status Bar Background"},{name:"theme-color-components-video-status-bar-foreground",description:"Video Status Bar Foreground"}],q=[{name:"theme-rounded-corners",description:"Corner radius"}],ee=[...X,...W,...q].reduce((e,t)=>(e[t.name]={name:t.name,description:t.description},e),{}),et=a.memo(e=>{let{value:t,name:n,description:a,onChange:r}=e;return(0,s.jsxs)(I.Z,{span:3,children:[(0,s.jsx)("input",{type:"color",id:n,name:a,title:a,value:t,className:$().colorPicker,onChange:e=>r(n,e.target.value,a)}),(0,s.jsx)("div",{style:{padding:"2px"},children:a})]},n)}),en=e=>{let{variables:t,updateColor:n}=e,a=t.map(e=>{let{name:t,description:a,value:r}=e;return(0,s.jsx)(et,{value:r,name:t,description:a,onChange:n},t)});return(0,s.jsx)(s.Fragment,{children:a})};function es(){var e,t,n,r,o,i,d,u,h;let p=(0,a.useContext)(l.aC),{serverConfig:g}=p,{instanceDetails:j}=g,{appearanceVariables:v}=j,[y,b]=(0,a.useState)(),[k,N]=(0,a.useState)(),[w,C]=(0,a.useState)(null),S=()=>{C(null),clearTimeout(null)},Z=()=>{let e={};[...X,...W,...q].forEach(t=>{let n=getComputedStyle(document.documentElement).getPropertyValue("--".concat(t.name));e[t.name]={value:n.trim(),description:t.description}}),b(e)};(0,a.useEffect)(()=>{Z()},[]),(0,a.useEffect)(()=>{if(0===Object.keys(v).length)return;let e={};Object.keys(v).forEach(t=>{var n;e[t]={value:v[t],description:(null===(n=ee[t])||void 0===n?void 0:n.description)||""}}),N(e)},[v]);let T=(0,a.useCallback)((e,t,n)=>{N(s=>({...s,[e]:{value:t,description:n}}))},[]),E=async()=>{await (0,c.Si)({apiPath:Y,data:{value:{}},onSuccess:()=>{C((0,x.kg)(x.zv,"Updated.")),setTimeout(S,c.sI),N({})},onError:e=>{C((0,x.kg)(x.Un,e)),setTimeout(S,c.sI)}})},_=async()=>{let e={};Object.keys(k).forEach(t=>{e[t]=k[t].value}),await (0,c.Si)({apiPath:Y,data:{value:e},onSuccess:()=>{C((0,x.kg)(x.zv,"Updated.")),setTimeout(S,c.sI)},onError:e=>{C((0,x.kg)(x.Un,e)),setTimeout(S,c.sI)}})},P=e=>{T("theme-rounded-corners","".concat(e.toString(),"px"),"")};if(!y)return(0,s.jsx)("div",{children:"Loading..."});let O=e=>e.map(e=>{let t=(null==k?void 0:k[e.name])?k:y,{name:n,description:s}=e,{value:a}=t[n];return{name:n,description:s,value:a}});return(0,s.jsxs)(Q.Z,{direction:"vertical",children:[(0,s.jsx)(J.Z,{children:"Customize Appearance"}),(0,s.jsx)(G.Z,{children:"The following colors are used across the user interface."}),(0,s.jsx)("div",{children:(0,s.jsxs)(U.Z,{defaultActiveKey:["1"],children:[(0,s.jsxs)(K,{header:(0,s.jsx)(J.Z,{level:3,children:"Section Colors"}),children:[(0,s.jsx)("p",{children:"Certain sections of the interface can be customized by selecting new colors for them."}),(0,s.jsx)(B.Z,{gutter:[16,16],children:(0,s.jsx)(en,{variables:O(X),updateColor:T})})]},"1"),(0,s.jsx)(K,{header:(0,s.jsx)(J.Z,{level:3,children:"Chat User Colors"}),children:(0,s.jsx)(B.Z,{gutter:[16,16],children:(0,s.jsx)(en,{variables:O(W),updateColor:T})})},"2"),(0,s.jsxs)(K,{header:(0,s.jsx)(J.Z,{level:3,children:"Other Settings"}),children:["How rounded should corners be?",(0,s.jsxs)(B.Z,{gutter:[16,16],children:[(0,s.jsx)(I.Z,{span:12,children:(0,s.jsx)(A.Z,{min:0,max:20,tooltip:{formatter:null},onChange:e=>{P(e)},value:Number(null!==(u=null!==(d=null==k?void 0:null===(e=k["theme-rounded-corners"])||void 0===e?void 0:null===(t=e.value)||void 0===t?void 0:t.replace("px",""))&&void 0!==d?d:null==y?void 0:null===(n=y["theme-rounded-corners"])||void 0===n?void 0:null===(r=n.value)||void 0===r?void 0:r.replace("px",""))&&void 0!==u?u:0)})}),(0,s.jsx)(I.Z,{span:4,children:(0,s.jsx)("div",{style:{width:"100px",height:"30px",borderRadius:"".concat(null!==(h=null==k?void 0:null===(o=k["theme-rounded-corners"])||void 0===o?void 0:o.value)&&void 0!==h?h:null==y?void 0:null===(i=y["theme-rounded-corners"])||void 0===i?void 0:i.value),backgroundColor:"var(--theme-color-palette-7)"}})})]})]},"4")]})}),(0,s.jsxs)(Q.Z,{direction:"horizontal",children:[(0,s.jsx)(m.Z,{type:"primary",onClick:_,children:"Save Colors"}),(0,s.jsx)(m.Z,{type:"ghost",onClick:E,children:"Reset to Defaults"})]}),(0,s.jsx)(f.E,{status:w}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(V,{})})]})}var ea=n(34261),er=n(58037);let{Title:eo}=o.Z,ei=()=>{let[e,t]=(0,a.useState)("/* Enter custom Javascript here */"),[n,r]=(0,a.useState)(null),[o,i]=(0,a.useState)(!1),d=(0,a.useContext)(l.aC),{serverConfig:u,setFieldInConfigState:h}=d||{},{instanceDetails:p}=u,{customJavascript:g}=p,j=null,v=()=>{r(null),i(!1),clearTimeout(j),j=null};async function y(){r((0,x.kg)(x.Jk)),await (0,c.Si)({apiPath:c.JZ,data:{value:e},onSuccess:t=>{h({fieldName:"customJavascript",value:e,path:"instanceDetails"}),r((0,x.kg)(x.zv,t))},onError:e=>{r((0,x.kg)(x.Un,e))}}),j=setTimeout(v,c.sI)}(0,a.useEffect)(()=>{t(g)},[p]);let b=a.useCallback(e=>{t(e),e===g||o?e===g&&o&&i(!1):i(!0)},[]);return(0,s.jsxs)("div",{className:"edit-custom-css",children:[(0,s.jsx)(eo,{level:3,className:"section-title",children:"Customize your page with Javascript"}),(0,s.jsxs)("p",{className:"description",children:["Insert custom Javascript into your Owncast page to add your own functionality or to add 3rd party scripts. Read more about how to use this feature in the"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"Web page documentation."}),"."]}),(0,s.jsx)("p",{className:"description",children:"Please use raw Javascript, no HTML or any script tags."}),(0,s.jsx)(_.ZP,{value:e,placeholder:"/* Enter custom Javascript here */",theme:P.FZ,height:"200px",extensions:[(0,er.javascript)()],onChange:b}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[o&&(0,s.jsx)(m.Z,{type:"primary",onClick:y,children:"Save"}),(0,s.jsx)(f.E,{status:n})]})]})};function el(){return(0,s.jsx)("div",{className:"config-public-details-page",children:(0,s.jsx)(r.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"General",key:"1",children:(0,s.jsx)(z,{})},{label:"Appearance",key:"2",children:(0,s.jsx)(es,{})},{label:"Custom Scripting",key:"3",children:(0,s.jsx)(ei,{})}]})})}el.getLayout=function(e){return(0,s.jsx)(ea.l,{page:e})}},81453:function(e,t,n){"use strict";n.d(t,{$i:function(){return L},$l:function(){return D},Bu:function(){return g},E8:function(){return U},Ff:function(){return Z},GC:function(){return y},GR:function(){return K},HP:function(){return z},IO:function(){return _},Kp:function(){return p},Kt:function(){return H},M_:function(){return O},N$:function(){return A},NE:function(){return l},NM:function(){return x},Q_:function(){return c},Qc:function(){return S},RB:function(){return j},UJ:function(){return J},WB:function(){return o},WE:function(){return w},WQ:function(){return N},Wr:function(){return E},XA:function(){return P},Y9:function(){return I},a_:function(){return h},ao:function(){return u},bl:function(){return d},e_:function(){return M},hn:function(){return C},iG:function(){return F},iV:function(){return m},jr:function(){return v},kb:function(){return Q},kg:function(){return V},ms:function(){return T},nx:function(){return b},op:function(){return B},qk:function(){return f},rQ:function(){return R},sG:function(){return k},um:function(){return G}});var s=n(34155);let a=s.env.NEXT_PUBLIC_ADMIN_USERNAME,r=s.env.NEXT_PUBLIC_ADMIN_STREAMKEY,o="/",i="".concat(o,"api/admin/"),l=15e3,c="".concat(i,"status"),d="".concat(i,"serverconfig"),u="".concat(i,"config"),m="".concat(i,"viewersOverTime"),h="".concat(i,"viewers"),p="".concat(i,"chat/clients"),f="".concat(i,"chat/users/disabled"),x="".concat(i,"chat/users/setenabled"),g="".concat(i,"chat/users/ipbans"),j="".concat(i,"chat/users/ipbans/remove"),v="".concat(i,"chat/users/setmoderator"),y="".concat(i,"chat/users/moderators"),b="".concat(i,"hardwarestats"),k="".concat(i,"logs"),N="".concat(i,"logs/warnings"),w="".concat(i,"chat/messages"),C="/api/admin/chat/messagevisibility",S="".concat(i,"emoji/upload"),Z="".concat(i,"emoji/delete"),T="".concat(i,"accesstokens"),E="".concat(i,"accesstokens/delete"),_="".concat(i,"accesstokens/create"),P="".concat(i,"webhooks"),O="".concat(i,"webhooks/delete"),F="".concat(i,"webhooks/create"),L="".concat(o,"api/socialplatforms"),M="".concat(i,"federation/send"),z="".concat(i,"followers"),U="".concat(i,"followers/pending"),I="".concat(i,"followers/blocked"),Q="".concat(i,"followers/approve"),B="".concat(i,"federation/actions"),A="".concat(i,"metrics/video"),G="".concat(i,"config/streamkeys"),J="".concat(i,"yp/reset");async function R(e,t){let{data:n,method:s="GET",auth:o=!0}=t||{},i={method:s};if(n&&(i.body=JSON.stringify(n)),o&&a&&r){let e=btoa("".concat(a,":").concat(r));i.headers={Authorization:"Basic ".concat(e)},i.mode="cors",i.credentials="include"}try{let t=await fetch(e,i),n=await t.json();if(!t.ok){let e=n.message||"An error has occurred: ".concat(t.status);throw Error(e)}return n}catch(e){return console.error(e),e}}async function D(e,t){let n={method:"GET",auth:!1,...t};return R(e,n)}async function V(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let e="An error has occured: ".concat(t.status);throw Error(e)}let n=await t.json();return n}catch(e){console.log(e)}return{}}async function H(){return V("https://api.github.com/repos/owncast/owncast/releases/latest")}let $=/^\d+(\.\d+){0,2}$/;async function K(e){let t=await H(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if($.test(e)&&$.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let s=t.split(".");for(;s.length<3;)s.push("0");for(let e=0;e<3;e++){let t=parseInt(n[e],10),a=parseInt(s[e],10);if(t!==a)return t>a}return!0}return e>=t}(e,n))?n:null}},80693:function(e,t,n){"use strict";n.d(t,{Z7:function(){return s},dr:function(){return a},kR:function(){return o},y3:function(){return r}});let s=2097152,a=["image/png","image/jpeg","image/gif"];function r(e,t){let n=new FileReader;n.addEventListener("load",()=>t(n.result)),n.readAsDataURL(e)}function o(e){let t=Math.floor(Math.log(e)/Math.log(1024)),n=1*Number((e/Math.pow(1024,t)).toFixed(2));return"".concat(n," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t])}},8118:function(e){e.exports={colorPicker:"appearance_colorPicker__xsvcV"}},57361:function(e){e.exports={root:"OwncastLogo_root__uDVJf",contrast:"OwncastLogo_contrast__rDMJY",simple:"OwncastLogo_simple___hC9r"}}},function(e){e.O(0,[5762,2074,173,164,2744,9680,4931,5402,2231,5818,492,7524,9915,4041,3698,3013,4398,4526,4734,2928,8861,7916,7055,1700,2746,4261,9774,2888,179],function(){return e(e.s=39856)}),_N_E=e.O()}]);