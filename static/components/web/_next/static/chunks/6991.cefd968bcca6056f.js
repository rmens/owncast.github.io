"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6991],{76991:function(t,e,n){var r;function tokenBase(t,e){var n=t.next();if("<"==n&&t.eat("!")){if(t.eatWhile(/[\-]/))return e.tokenize=tokenSGMLComment,tokenSGMLComment(t,e);if(t.eatWhile(/[\w]/))return r="doindent","keyword"}else{if("<"==n&&t.eat("?"))return e.tokenize=function(t,e){for(;!t.eol();){if(t.match("?>")){e.tokenize=tokenBase;break}t.next()}return"meta"},r=n,"meta";if("#"==n&&t.eatWhile(/[\w]/))return r="tag","atom";if("|"==n)return r="separator","keyword";if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return r=n,null;if(n.match(/[\[\]]/))return r=n,"rule";if('"'==n||"'"==n)return e.tokenize=function(t,e){for(var a,u=!1;null!=(a=t.next());){if(a==n&&!u){e.tokenize=tokenBase;break}u=!u&&"\\"==a}return r="tag","string"},e.tokenize(t,e);if(!t.eatWhile(/[a-zA-Z\?\+\d]/))return"%"==n||"*"==n?(r="number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),r=null,null);var a=t.current();return null!==a.substr(a.length-1,a.length).match(/\?|\+/)&&t.backUp(1),r="tag","tag"}}function tokenSGMLComment(t,e){for(var n,a=0;null!=(n=t.next());){if(a>=2&&">"==n){e.tokenize=tokenBase;break}a="-"==n?a+1:0}return r="comment","comment"}n.r(e),n.d(e,{dtd:function(){return a}});let a={name:"dtd",startState:function(){return{tokenize:tokenBase,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),a=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==a?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var a=t.stack.length;return"]"===e.charAt(0)?a--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?a--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?a--:"tag"==r?a++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?a--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?a-=1:">"===e||(a-=1)))),(null==r||"]"==r)&&a--),t.baseIndent+a*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);