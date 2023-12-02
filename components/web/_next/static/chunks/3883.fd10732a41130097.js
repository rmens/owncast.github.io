"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3883],{23883:function(e,n,r){function words(e){for(var n={},r=e.split(" "),o=0;o<r.length;++o)n[r[o]]=!0;return n}r.r(n),r.d(n,{groovy:function(){return u}});var o,i=words("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),a=words("catch class def do else enum finally for if interface switch trait try while"),s=words("return break continue"),l=words("null true false this");function tokenBase(e,n){var r=e.next();if('"'==r||"'"==r)return startString(r,e,n);if(/[\[\]{}\(\),;\:\.]/.test(r))return o=r,null;if(/\d/.test(r))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if("/"==r){if(e.eat("*"))return n.tokenize.push(tokenComment),tokenComment(e,n);if(e.eat("/"))return e.skipToEnd(),"comment";if(expectExpression(n.lastToken,!1))return startString(r,e,n)}if("-"==r&&e.eat(">"))return o="->",null;if(/[+\-*&%=<>!?|\/~]/.test(r))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";if(e.eatWhile(/[\w\$_]/),"@"==r)return e.eatWhile(/[\w\$_\.]/),"meta";if("."==n.lastToken)return"property";if(e.eat(":"))return o="proplabel","property";var u=e.current();return l.propertyIsEnumerable(u)?"atom":i.propertyIsEnumerable(u)?(a.propertyIsEnumerable(u)?o="newstatement":s.propertyIsEnumerable(u)&&(o="standalone"),"keyword"):"variable"}function startString(e,n,r){var o=!1;if("/"!=e&&n.eat(e)){if(!n.eat(e))return"string";o=!0}function t(n,r){for(var i,a=!1,s=!o;null!=(i=n.next());){if(i==e&&!a){if(!o)break;if(n.match(e+e)){s=!0;break}}if('"'==e&&"$"==i&&!a){if(n.eat("{"))return r.tokenize.push(tokenBaseUntilBrace()),"string";if(n.match(/^\w/,!1))return r.tokenize.push(tokenVariableDeref),"string"}a=!a&&"\\"==i}return s&&r.tokenize.pop(),"string"}return r.tokenize.push(t),t(n,r)}function tokenBaseUntilBrace(){var e=1;function t(n,r){if("}"==n.peek()){if(0==--e)return r.tokenize.pop(),r.tokenize[r.tokenize.length-1](n,r)}else"{"==n.peek()&&e++;return tokenBase(n,r)}return t.isBase=!0,t}function tokenVariableDeref(e,n){var r=e.match(/^(\.|[\w\$_]+)/);return r?"."==r[0]?null:"variable":(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](e,n))}function tokenComment(e,n){for(var r,o=!1;r=e.next();){if("/"==r&&o){n.tokenize.pop();break}o="*"==r}return"comment"}function expectExpression(e,n){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!n}function Context(e,n,r,o,i){this.indented=e,this.column=n,this.type=r,this.align=o,this.prev=i}function pushContext(e,n,r){return e.context=new Context(e.indented,n,r,null,e.context)}function popContext(e){var n=e.context.type;return(")"==n||"]"==n||"}"==n)&&(e.indented=e.context.indented),e.context=e.context.prev}tokenBase.isBase=!0;let u={name:"groovy",startState:function(e){return{tokenize:[tokenBase],context:new Context(-e,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,n){var r=n.context;if(e.sol()&&(null==r.align&&(r.align=!1),n.indented=e.indentation(),n.startOfLine=!0,"statement"!=r.type||expectExpression(n.lastToken,!0)||(popContext(n),r=n.context)),e.eatSpace())return null;o=null;var i=n.tokenize[n.tokenize.length-1](e,n);if("comment"==i)return i;if(null==r.align&&(r.align=!0),(";"==o||":"==o)&&"statement"==r.type)popContext(n);else if("->"==o&&"statement"==r.type&&"}"==r.prev.type)popContext(n),n.context.align=!1;else if("{"==o)pushContext(n,e.column(),"}");else if("["==o)pushContext(n,e.column(),"]");else if("("==o)pushContext(n,e.column(),")");else if("}"==o){for(;"statement"==r.type;)r=popContext(n);for("}"==r.type&&(r=popContext(n));"statement"==r.type;)r=popContext(n)}else o==r.type?popContext(n):("}"==r.type||"top"==r.type||"statement"==r.type&&"newstatement"==o)&&pushContext(n,e.column(),"statement");return n.startOfLine=!1,n.lastToken=o||i,i},indent:function(e,n,r){if(!e.tokenize[e.tokenize.length-1].isBase)return null;var o=n&&n.charAt(0),i=e.context;"statement"!=i.type||expectExpression(e.lastToken,!0)||(i=i.prev);var a=o==i.type;return"statement"==i.type?i.indented+("{"==o?0:r.unit):i.align?i.column+(a?0:1):i.indented+(a?0:r.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}}]);