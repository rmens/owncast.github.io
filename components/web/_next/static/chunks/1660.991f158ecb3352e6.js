"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1660],{11660:function(e,t,n){function words(e){for(var t={},n=e.split(" "),o=0;o<n.length;++o)t[n[o]]=!0;return t}n.r(t),n.d(t,{d:function(){return d}});var o,r="body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";let i={keywords:words("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters "+r),blockKeywords:words(r),builtin:words("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:words("exit failure success true false null"),hooks:{"@":function(e,t){return e.eatWhile(/[\w\$_]/),"meta"}}};var a=i.statementIndentUnit,u=i.keywords,s=i.builtin,l=i.blockKeywords,c=i.atoms,p=i.hooks,f=i.multiLineStrings,m=/[+\-*&%=<>!?|\/]/;function tokenBase(e,t){var n=e.next();if(p[n]){var r=p[n](e,t);if(!1!==r)return r}if('"'==n||"'"==n||"`"==n)return t.tokenize=tokenString(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return o=n,null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("/"==n){if(e.eat("+"))return t.tokenize=tokenNestedComment,tokenNestedComment(e,t);if(e.eat("*"))return t.tokenize=tokenComment,tokenComment(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(m.test(n))return e.eatWhile(m),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var i=e.current();return u.propertyIsEnumerable(i)?(l.propertyIsEnumerable(i)&&(o="newstatement"),"keyword"):s.propertyIsEnumerable(i)?(l.propertyIsEnumerable(i)&&(o="newstatement"),"builtin"):c.propertyIsEnumerable(i)?"atom":"variable"}function tokenString(e){return function(t,n){for(var o,r=!1,i=!1;null!=(o=t.next());){if(o==e&&!r){i=!0;break}r=!r&&"\\"==o}return(i||!(r||f))&&(n.tokenize=null),"string"}}function tokenComment(e,t){for(var n,o=!1;n=e.next();){if("/"==n&&o){t.tokenize=null;break}o="*"==n}return"comment"}function tokenNestedComment(e,t){for(var n,o=!1;n=e.next();){if("/"==n&&o){t.tokenize=null;break}o="+"==n}return"comment"}function Context(e,t,n,o,r){this.indented=e,this.column=t,this.type=n,this.align=o,this.prev=r}function pushContext(e,t,n){var o=e.indented;return e.context&&"statement"==e.context.type&&(o=e.context.indented),e.context=new Context(o,t,n,null,e.context)}function popContext(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}let d={name:"d",startState:function(e){return{tokenize:null,context:new Context(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;o=null;var r=(t.tokenize||tokenBase)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),(";"==o||":"==o||","==o)&&"statement"==n.type)popContext(t);else if("{"==o)pushContext(t,e.column(),"}");else if("["==o)pushContext(t,e.column(),"]");else if("("==o)pushContext(t,e.column(),")");else if("}"==o){for(;"statement"==n.type;)n=popContext(t);for("}"==n.type&&(n=popContext(t));"statement"==n.type;)n=popContext(t)}else o==n.type?popContext(t):(("}"==n.type||"top"==n.type)&&";"!=o||"statement"==n.type&&"newstatement"==o)&&pushContext(t,e.column(),"statement");return t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=tokenBase&&null!=e.tokenize)return null;var o=e.context,r=t&&t.charAt(0);"statement"==o.type&&"}"==r&&(o=o.prev);var i=r==o.type;return"statement"==o.type?o.indented+("{"==r?0:a||n.unit):o.align?o.column+(i?0:1):o.indented+(i?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);