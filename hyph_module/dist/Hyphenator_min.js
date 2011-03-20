/*
 Hyphenator X.Y.Z - client side hyphenation for webbrowsers
 Copyright (C) 2010  Mathias Nater, Zürich (mathias at mnn dot ch)
 Project and Source hosted on http://code.google.com/p/hyphenator/

 This JavaScript code is free software: you can redistribute
 it and/or modify it under the terms of the GNU Lesser
 General Public License (GNU LGPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.
*/
var b=true,h=null,j=false,m=function(){function a(){function c(){this.f=a.a.f}c.prototype=new a.a.za;return new c}a.a={za:function(){this.a=a.a},j:function(c){this.d=function(d){for(var e in c)c.hasOwnProperty(e)&&d(e,c[e])}},f:function(c){var d=this;c=new a.a.j(c);c.d(function(e,f){d[e]=f})}};return new a}(window);m.f({ja:function(a){a&&m.m(a);m.a.Ia(window)}});m.f({log:function(a){window.console&&window.console.log?window.console.log(a):alert(a)}});var n,t=window.navigator.userAgent.toLowerCase();
n=String.fromCharCode(8203);if(t.indexOf("msie 6")!==-1)n="";if(t.indexOf("opera")!==-1&&t.indexOf("version/10.00")!==-1)n="";
m.a.f({P:n,La:function(a){function c(l){l=l||window.event;l=l.target||l.srcElement;var p=l.ownerDocument,s=p.getElementsByTagName("body")[0],o="defaultView"in p?p.defaultView:p.parentWindow;if(!(l.tagName&&m.a.V[l.tagName.toLowerCase()])){e=p.createElement("div");e.style.overflow="hidden";e.style.position="absolute";e.style.top="-5000px";e.style.height="1px";s.appendChild(e);if(window.getSelection){f=o.getSelection();g=f.getRangeAt(0);e.appendChild(g.cloneContents());(new u(e,{})).s();f.selectAllChildren(e);
k=function(){e.parentNode.removeChild(e);f.addRange(g)}}else{f=o.document.selection;g=f.createRange();e.innerHTML=g.htmlText;(new u(e,{})).s();i=s.createTextRange();i.moveToElementText(e);i.select();k=function(){e.parentNode.removeChild(e);g.text!==""&&g.select()}}window.setTimeout(k,0)}}var d=a.ownerDocument.getElementsByTagName("body")[0],e,f,g,i,k;if(d){a=a||d;window.addEventListener?a.addEventListener("copy",c,j):a.attachEvent("oncopy",c)}}});
function u(a,c){this.element=a;this.na=this.A=j;this.data=c}
u.prototype={n:function(){function a(g){var i,k=m.a.aa();if(m.ga>=2){i=g.split(" ");i[1]=i[1].replace(RegExp(k,"g"),"");i[1]=i[1].replace(RegExp(m.P,"g"),"");i=i.join(" ")}if(m.ga===3)i=i.replace(/[ ]+/g,String.fromCharCode(160));return i}var c=this.data.language,d,e,f;if(!this.A&&m.q){if(m.i.hasOwnProperty(c)){d=function(g){return m.a.O.test(g)?m.ba(g):m.K(c,g)};m.gb&&this.element.tagName.toLowerCase()!=="body"&&m.a.La(this.element);for(f=0;e=this.element.childNodes[f++];)if(e.nodeType===3&&e.data.length>=
m.L){e.data=e.data.replace(m.i[c].z,d);if(m.ga!==1)e.data=e.data.replace(/[\S]+ [\S]+$/,a)}}if(this.data.Ea&&m.ea==="hidden"){this.element.style.visibility="visible";if(this.data.Aa)if(this.element.style.removeProperty)this.element.style.removeProperty("visibility");else this.element.style.removeAttribute&&this.element.style.removeAttribute("visibility");else{this.element.setAttribute("style","");this.element.removeAttribute("style")}}this.A=b}else this.na=b},s:function(){for(var a=m.a.aa(),c=0,d;d=
this.element.childNodes[c++];)if(d.nodeType===3){d.data=d.data.replace(RegExp(a,"g"),"");d.data=d.data.replace(RegExp(m.P,"g"),"")}this.A=j}};function v(a){this.language=a;this.X=[]}v.prototype={add:function(a,c){this.X.push(new u(a,c))},d:function(a){(new m.a.j(this.X)).d(a)},J:function(){this.d(function(a,c){c.n()});m.a.postMessage(new w(5,this.language,"Some elements have been hyphenated: "+this.language))},Qa:function(){this.d(function(a,c){c.s()})}};function z(){this.list={}}
z.prototype={addElement:function(a,c,d){this.list.hasOwnProperty(c)||(this.list[c]=new v(c));this.list[c].add(a,d)},d:function(a){(new m.a.j(this.list)).d(a)},Oa:function(){this.d(function(a,c){c.Qa()})},Ba:function(){this.d(function(a,c){c.J()})}};function A(a,c){this.o=a||window;this.parent=c||h;this.href=a.location.href;this.state=1;this.b=h;this.k=new z}
A.prototype={Va:function(){var a=this.o.document.getElementsByTagName("meta"),c;if(!this.b){this.b=m.a.I(this.o,this.o.document.getElementsByTagName("html")[0],j);if(!this.b)for(c=0;c<a.length;c++){if(a[c].getAttribute("http-equiv")&&a[c].getAttribute("http-equiv").toLowerCase()==="content-language")this.b=a[c].getAttribute("content").toLowerCase();if(a[c].getAttribute("name")&&a[c].getAttribute("name").toLowerCase()==="dc.language")this.b=a[c].getAttribute("content").toLowerCase();if(a[c].getAttribute("name")&&
a[c].getAttribute("name").toLowerCase()==="language")this.b=a[c].getAttribute("content").toLowerCase()}if(!this.b&&this.parent!==h)this.b=m.a.h.list[this.parent.location.href].b;if(!this.b&&m.va!=="")this.b=m.va;if(!this.b){c=navigator.language?navigator.language:navigator.ib;c=c.substring(0,2);a=m.a.M.hasOwnProperty(c)?m.a.M[c]:m.a.M.ab;a+=" (ISO 639-1)\n\n"+m.a.Fa;a=window.prompt(unescape(a),c);if(a!==h)this.b=a.toLowerCase();else m.postMessage(new w(0,this.b,"Language unknown. Can't hyphenate."))}if(!m.a.g.hasOwnProperty(this.b)&&
this.b)if(m.a.g.hasOwnProperty(this.b.split("-")[0]))this.b=this.b.split("-")[0];else{a='The language "'+this.b+'" is not yet supported.';m.postMessage(new w(0,this.b,a))}m.a.g.hasOwnProperty(this.b)&&m.a.postMessage(new w(4,this.b,"mainLanguage found: "+this.b))}},s:function(){this.k.Oa()},n:function(){this.k.Ba()},Ja:function(){function a(g,i,k){var l=0,p={};p.language=g.lang&&typeof g.lang==="string"?g.lang.toLowerCase():k?k.toLowerCase():m.a.I(f.o,g,b);k=p.language;if(!m.a.g.hasOwnProperty(k))if(m.a.g.hasOwnProperty(k.split("-")[0])){k=
k.split("-")[0];p.language=k}else m.a.r||m.postMessage(new w(0,k,"Language "+k+" is not yet supported."));if(m.a.g.hasOwnProperty(k)){if(m.q&&i&&m.ea==="hidden"){p.Aa=g.getAttribute("style")?b:j;p.Ea=b;g.style.visibility="hidden"}m.a.g[k].state===0&&m.a.postMessage(new w(4,k,"language found: "+k));f.k.addElement(g,k,p)}for(;i=g.childNodes[l++];)i.nodeType===1&&!m.a.V[i.nodeName.toLowerCase()]&&i.className.indexOf(m.W)===-1&&!(i in f.k)&&a(i,j,k)}var c,d=0,e,f=this;if(m.a.r){e=this.o.document.getElementsByTagName("body")[0];
a(e,j,this.b)}else for(e=m.ka(this.o);c=e[d++];)a(c,b,"");this.u(3)},u:function(a){this.state=a;m.a.postMessage(new w(7,{id:this.o,state:this.state},"Document state updated ("+this.state+"): "+this.href))},ra:function(){var a=b;if(this.state===3)this.k.d(function(c,d){d.d(function(e,f){a=a&&(f.A||f.na)})});else return a=j;if(a){this.u(4);return b}}};function B(){this.list={}}
B.prototype={d:function(a){(new m.a.j(this.list)).d(a)},R:function(a,c){var d=a.location.href;if(this.list.hasOwnProperty(d))m.a.postMessage(new w(7,{id:a,state:0},"Error: Document already added: "+d));else{this.list[d]=new A(a,c);m.a.postMessage(new w(7,{id:a,state:1},"Document added: "+d))}},T:function(){var a=b;this.d(function(c,d){a=d.state===4||d.state===5?a&&b:a&&d.ra()});a&&m.a.postMessage(new w(42,h,"Hyphenation done"))}};
m.a.f({U:function(a,c){c=c||window;if(window.document.createElementNS)return c.document.createElementNS("http://www.w3.org/1999/xhtml",a);else if(window.createElement)return c.document.createElement(a)},Da:function(a){var c,d=window.document.getElementsByTagName("head").item(0);c=m.a.U("script");c.type="text/javascript";c.text=a;d.appendChild(c)},h:new B,Ia:function(a){function c(){if(document.addEventListener)a.removeEventListener("load",c,j);else document.attachEvent&&a.detachEvent("onload",c);
m.a.h.list[a.location.href].state<2&&f(a);d(a)}function d(l){function p(o){var q,r;for(q=0;q<s;q++){r=undefined;try{r=l.frames[q].document.toString()}catch(x){r=undefined}r&&o(l.frames[q],l)}}var s=l.frames.length;if(s>0){p(function(o,q){m.a.h.R(o,q)});p(function(o){m.a.h.list[o.location.href].u(2)})}}function e(){try{document.documentElement.doScroll("left")}catch(l){setTimeout(e,1);return}f(a)}function f(l){if(l.document.getElementsByTagName("frameset").length===0){m.wa&&m.N(l);m.a.h.list[l.location.href].u(2)}else m.a.h.list[l.location.href].u(5)}
a=a||window;var g,i;if(m.a.h.list.hasOwnProperty(a.location.href)&&m.a.h.list[a.location.href].state===4){m.a.h.list[a.location.href].state=1;f(a)}else{m.a.h.R(a,h);if(m.a.r||m.a.h.list[a.location.href].state===2){f(a);d(a)}else{if(document.addEventListener)g=function(){a.document.removeEventListener("DOMContentLoaded",g,j);a.frames.length===0&&f(a)};else if(document.attachEvent)g=function(){if(a.document.readyState==="complete"){a.document.detachEvent("onreadystatechange",g);a.frames.length===0&&
f(a)}};if(document.addEventListener){a.document.addEventListener("DOMContentLoaded",g,j);a.addEventListener("load",c,j)}else if(document.attachEvent){a.document.attachEvent("onreadystatechange",g);a.attachEvent("onload",c);i=j;try{i=window.frameElement===h}catch(k){}document.documentElement.doScroll&&i&&e()}}}},I:function(a,c,d){if(c.getAttribute("lang"))return c.getAttribute("lang").toLowerCase();try{if(c.getAttribute("xml:lang"))return c.getAttribute("xml:lang").toLowerCase()}catch(e){}if(c.tagName!==
"HTML")return m.a.I(a,c.parentNode,b);if(d)return m.a.h.list[a.location.href].b;return h}});m.f({ka:function(a){a=a||window;var c=[],d,e;if(document.getElementsByClassName)c=a.document.getElementsByClassName(m.sa);else{a=a.document.getElementsByTagName("*");e=a.length;for(d=0;d<e;d++)a[d].className.indexOf(m.sa)!==-1&&a[d].className.indexOf(m.W)===-1&&c.push(a[d])}return c}});
m.a.f({url:"(\\w*://)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|((www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.([a-z]{2,4})))(:\\d*)?(/[\\w#!:\\.?\\+=&%@!\\-]*)*",C:"[\\w-\\.]+@[\\w\\.]+",O:RegExp("("+m.a.url+")|("+m.a.C+")","i"),r:function(){var a=h,c=j,d=document.getElementsByTagName("script"),e,f;e=0;for(f=d.length;e<f;e++){if(d[e].getAttribute("src"))a=d[e].getAttribute("src");if(a)if(a.indexOf("Hyphenator")!==-1&&a.indexOf("bm=true")!==-1)c=b}return c}(),V:{script:b,code:b,pre:b,img:b,
br:b,samp:b,kbd:b,"var":b,abbr:b,acronym:b,sub:b,sup:b,button:b,option:b,label:b,textarea:b,input:b}});m.a.f({O:RegExp("("+m.a.url+")|("+m.a.C+")","i"),aa:function(){var a;switch(m.B){case "|":a="\\|";break;case "+":a="\\+";break;case "*":a="\\*";break;default:a=m.B}return a}});function w(a,c,d){this.type=a||0;this.data=c||h;this.text=d||"";this.toString=function(){return"Message:\n\ttype: "+a+":\n\tdata: "+window.JSON.stringify(c)+":\n\ttext: "+d}}
m.a.f({postMessage:function(a){if(a.constructor!==w)m.a.postMessage(new w(0,a,"Received non-conforming message"));else m.a.onmessage(a)},onmessage:function(a){switch(a.type){case 0:m.postMessage(a);break;case 1:break;case 2:m.a.g[a.data.id].state=a.data.readyState;a.data.state===42&&m.a.postMessage(new w(0,a.data.url,"failed to load file: "+a.data.url));if(a.data.state===4){m.a.Da(a.data.content);m.a.g[a.data.id].state=5;m.a.postMessage(new w(3,{id:a.data.id,state:5},"File added: "+a.data.url))}break;
case 3:switch(a.data.state){case 5:m.a.ia(a.data.id);break;case 6:m.a.g[a.data.id].state=7;m.a.postMessage(new w(3,{id:a.data.id,state:7},"Pattern ready: "+a.data.id));(new C).Ya(a.data.id,m.i[a.data.id]);break;case 7:m.a.h.d(function(c,d){d.k.list.hasOwnProperty(a.data.id)&&d.k.list[a.data.id].J()});break;default:m.a.postMessage(new w(0,h,"Error"))}break;case 4:if(m.i.hasOwnProperty(a.data)&&m.a.g[a.data].state<5)m.a.postMessage(new w(3,{id:a.data,state:5},"File added: "+a.data));else if((new C).ca(a.data)){(new C).Ra(a.data);
m.a.g[a.data].state=7;m.a.postMessage(new w(3,{id:a.data,state:7},"Pattern restored: "+a.data))}else if(m.a.g[a.data].state===0&&m.Na){m.a.g[a.data].state=1;m.Ga(a.data)}else if(!m.Na)m.a.g[a.data].state=8;break;case 5:m.a.h.T();break;case 6:break;case 7:switch(a.data.state){case 0:m.a.postMessage(new w(0,a.data.id,"Error in Document."));break;case 2:window.setTimeout(function(){m.a.h.list[a.data.id.location.href].Va();m.a.h.list[a.data.id.location.href].Ja()},0);break;case 3:m.a.h.list[a.data.id.location.href].k.d(function(c,
d){if(m.a.g[c].state===7)d.J();else if(m.a.g[c].state===8){delete m.a.h.list[a.data.id.location.href].k.list[c];m.a.h.T()}})}break;case 42:break;default:m.postMessage(new w(0,a.toString(),"Internally received unknown message."))}}});m.f({postMessage:function(a){if(a.constructor!==w)m.a.postMessage(new w(0,a,"Received non-conforming message"));else m.onmessage(a)},onmessage:function(a){m.fa(a)}});
function C(){this.l=function(){try{if(m.F!=="none"&&typeof window.localStorage!=="undefined"&&typeof window.sessionStorage!=="undefined"&&typeof window.JSON.stringify!=="undefined"&&typeof window.JSON.parse!=="undefined")switch(m.F){case "session":return window.sessionStorage;case "local":return window.localStorage}}catch(a){}return h}()}
C.prototype={t:"Hyphenator_",ca:function(a){return this.l===h||!this.l.getItem(this.t+a)?j:b},Za:function(a){if(this.l!==h)try{this.l.setItem(this.t+"config",window.JSON.stringify(a));m.a.postMessage(new w(6,a,"Settings stored."))}catch(c){}},Sa:function(){if(this.l!==h&&this.ca("config")){var a=window.JSON.parse(this.l.getItem(this.t+"config"));a.Q=b;m.m(a)}},Ya:function(a,c){if(this.l!==h)try{this.l.setItem(this.t+a,window.JSON.stringify(c));m.a.postMessage(new w(6,a,"Lang "+a+" stored."))}catch(d){}},
Ra:function(a){var c,d=window.JSON.parse(this.l.getItem(this.t+a));if(m.a.e.hasOwnProperty("global")){c=new m.a.j(m.a.H(m.a.e.global));c.d(function(e,f){d.e[e]=f})}if(m.a.e.hasOwnProperty(a)){c=new m.a.j(m.a.H(m.a.e[a]));c.d(function(e,f){d.e[e]=f})}delete m.a.e[a];d.w={};c="[\\w"+d.Xa+"@"+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+m.L+",}";d.z=RegExp("("+m.a.url+")|("+m.a.C+")|("+c+")","gi");m.i[a]=d;m.a.postMessage(new w(6,a,"Lang "+a+" retrieved from storage."))}};
m.a.f({Pa:function(){m.a.h.d(function(a,c){c.s()})},Ca:function(){m.a.h.d(function(a,c){c.n()})}});
m.f({N:function(a){a=a||window;var c,d,e,f,g;f=m.q?"Hy-phen-a-tion":"Hyphenation";if(c=a.document.getElementById("HyphenatorToggleBox"))c.firstChild.data=f;else{d=a.document.getElementsByTagName("body")[0];c=m.a.U("div",a);e=a.document.createAttribute("id");e.nodeValue="HyphenatorToggleBox";g=a.document.createAttribute("class");g.nodeValue=m.W;f=a.document.createTextNode(f);c.appendChild(f);c.setAttributeNode(e);c.setAttributeNode(g);c.onclick=function(){m.ma(a)};c.style.position="absolute";c.style.top=
"0px";c.style.right="0px";c.style.margin="0";c.style.backgroundColor="#AAAAAA";c.style.color="#FFFFFF";c.style.font="6pt Arial";c.style.letterSpacing="0.2em";c.style.padding="3px";c.style.cursor="pointer";c.style.WebkitBorderBottomLeftRadius="4px";c.style.MozBorderRadiusBottomleft="4px";d.appendChild(c)}}});m.f({ma:function(a){if(m.q){m.m({q:j});m.a.Pa()}else{m.m({q:b});m.a.Ca()}m.N(a)}});function D(a,c){this.p=this.defaultValue=h;this.type=a;this.v=c}
D.prototype={Ua:function(a){if(typeof a===this.type&&this.v.test(a))this.p=this.defaultValue=a;else m.a.postMessage(new w(0,a,"default setting '"+a+"' doesn't fit ("+this.type+"/"+this.v+")"))},Ta:function(a){if(typeof a===this.type&&this.v.test(a.toString())){this.p=a;return b}else{m.a.postMessage(new w(0,a,"setting '"+a+"' doesn't fit ("+this.v+")"));return j}}};function E(){this.data={}}
E.prototype={Z:function(a){var c={},d;if(typeof a==="string")if(a==="*"){a=new m.a.j(this.data);a.d(function(e,f){c[e]=f.p})}else c[a]=this.data[a].p;else if(typeof a==="object")for(d=0;d<a.length;d++)c[a[d]]=this.data[a[d]].p;m.f(c)},add:function(a,c,d,e){this.data[a]=new D(d,RegExp(e));this.data[a].Ua(c)},qa:function(a,c){return this.data[a].Ta(c)},ya:function(){var a={};(new m.a.j(this.data)).d(function(c,d){a[c]=d.p});return a}};m.a.f({c:new E});
m.f({m:function(a){var c=[],d=j;if(a.hasOwnProperty("STOPSTORAGE")){d=b;delete a.Q}else if(a.hasOwnProperty("persistentconfig")&&a.ha===b&&a.hasOwnProperty("storagetype")&&a.F!==""){m.m({ha:b,F:a.F,Q:b});(new C).Sa()}a=new m.a.j(a);a.d(function(e,f){if(m.a.c.data.hasOwnProperty(e))m.a.c.qa(e,f)&&c.push(e);else m.a.postMessage(new w(0,e,"Error: configuration option '"+e+"' doesn't exist."))});if(c.length>0){m.a.c.Z(c);m.a.postMessage(new w(1,c,"settings changed."))}m.ha&&!d&&(new C).Za(m.a.c.ya())},
Ha:function(){},fa:function(a){window.alert(a.text)}});m.a.c.add("classname","hyphenate","string","^[a-zA-Z_]+[a-zA-Z0-9_]+$");m.a.c.add("donthyphenateclassname","donthyphenate","string","^[a-zA-Z_]+[a-zA-Z0-9_]+$");m.a.c.add("minwordlength",6,"number","\\d+");m.a.c.add("hyphenchar",String.fromCharCode(173),"string",".");m.a.c.add("urlhyphenchar",m.a.P,"string",".");m.a.c.add("displaytogglebox",j,"boolean","true|false");m.a.c.add("remoteloading",b,"boolean","true|false");
m.a.c.add("enablecache",b,"boolean","true|false");m.a.c.add("enablereducedpatternset",j,"boolean","true|false");m.a.c.add("intermediatestate","hidden","string","hidden|visible|progressive");m.a.c.add("safecopy",b,"boolean","true|false");m.a.c.add("doframes",j,"boolean","true|false");m.a.c.add("storagetype","none","string","none|local|session");m.a.c.add("orphancontrol",1,"number","1|2|3");m.a.c.add("dohyphenation",b,"boolean","true|false");m.a.c.add("persistentconfig",j,"boolean","true|false");
m.a.c.add("defaultlanguage","","string",".*");m.a.c.add("togglebox",m.N,"function",".");m.a.c.add("selectorfunction",m.ka,"function",".");m.a.c.add("onhyphenationdonecallback",m.Ha,"function",".");m.a.c.add("onerrorhandler",m.fa,"function",".");m.a.c.Z("*");
m.a.f({g:function(){var a={};(new m.a.j({be:"be.js",cs:"cs.js",da:"da.js",bn:"bn.js",de:"de.js",el:"el-monoton.js","el-monoton":"el-monoton.js","el-polyton":"el-polyton.js",en:"en-us.js","en-gb":"en-gb.js","en-us":"en-us.js",es:"es.js",fi:"fi.js",fr:"fr.js",grc:"grc.js",gu:"gu.js",hi:"hi.js",hu:"hu.js",hy:"hy.js",it:"it.js",kn:"kn.js",la:"la.js",lt:"lt.js",lv:"lv.js",ml:"ml.js",no:"no-nb.js","no-nb":"no-nb.js",nl:"nl.js",or:"or.js",pa:"pa.js",pl:"pl.js",pt:"pt.js",ru:"ru.js",sl:"sl.js",sv:"sv.js",
ta:"ta.js",te:"te.js",tr:"tr.js",uk:"uk.js"})).d(function(c,d){a[c]={file:d,state:0}});return a}(),ua:function(a){var c={};(new m.a.j(m.i[a].D)).d(function(d,e){var f,g,i;d=parseInt(d,10);f=0;for(g=d;f=e.substring(f,g);){i=f.replace(/\d/g,"");c[i]=f;f=g;g+=d}});m.i[a].D=c;m.i[a].eb=b},H:function(a){a=a.split(", ");var c={},d,e,f;d=0;for(e=a.length;d<e;d++){f=a[d].replace(/-/g,"");c.hasOwnProperty(f)||(c[f]=a[d])}return c},ia:function(a){m.a.g[a].state=6;var c=m.i[a];if(m.Y)c.w={};if(m.xa)c.Ka={};
if(c.hasOwnProperty("exceptions")){m.S(a,c.e);delete c.e}if(m.a.e.hasOwnProperty("global"))if(m.a.e.hasOwnProperty(a))m.a.e[a]+=", "+m.a.e.global;else m.a.e[a]=m.a.e.global;if(m.a.e.hasOwnProperty(a)){c.e=m.a.H(m.a.e[a]);delete m.a.e[a]}else c.e={};m.a.ua(a);c.z=RegExp("("+m.a.url+")|("+m.a.C+")|("+("[\\w"+c.Xa+"@"+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+m.L+",}")+")","gi");m.a.postMessage(new w(3,{id:a,state:6},"Pattern object prepared: "+a))},e:{}});var G,H="";
for(G in m.a.g)if(m.a.g.hasOwnProperty(G))H+=G+", ";H=H.substring(0,H.length-2);m.a.f({Fa:H});m.f({b:{},i:{},Ga:function(a){m.a.g[a].state<2&&m.a.load(a,m.a.oa+"patterns/"+m.a.g[a].file)},S:function(a,c){if(a==="")a="global";if(m.a.e.hasOwnProperty(a))m.a.e[a]+=", "+c;else m.a.e[a]=c}});var I;a:{for(var J=document.getElementsByTagName("script"),K=0,L,O,P;P=J[K++];)if(P.src){O=P.src;L=O.indexOf("Hyphenator");if(L!==-1){I=O.substring(0,L);break a}}I="http://192.168.0.2/~mnater/hyph/hyph_module/"}
m.a.f({oa:I,Ma:function(a,c){var d=h;if(typeof XMLHttpRequest!=="undefined")d=new XMLHttpRequest;if(!d)try{d=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){d=h}if(d){d.open("GET",c,b);d.onreadystatechange=function(){if(d.status===404){d.abort();m.a.postMessage(new w(2,{id:a,url:c,state:42},"failed to load file."))}else if(d.readyState<4)m.a.postMessage(new w(2,{id:a,url:c,state:d.readyState},"readyState changed: "+c));else d.readyState===4&&d.status===200&&m.a.postMessage(new w(2,{id:a,url:c,state:d.readyState,
content:d.responseText},"file loaded: "+c))};d.send(h)}},load:function(a,c){m.a.Ma(a,c)}});
m.f({n:function(a,c){var d,e,f;if(m.i.hasOwnProperty(c)){m.a.g[c].state===0&&m.a.ia(c);d=function(g){return m.a.O.test(g)?m.ba(g):m.K(c,g)};if(typeof a==="string"||a.constructor===String)return a.replace(m.i[c].z,d);else if(typeof a==="object")for(f=0;e=a.childNodes[f++];)if(e.nodeType===3&&e.data.length>=m.L)e.data=e.data.replace(m.i[c].z,d);else if(e.nodeType===1)e.lang!==""?m.n(e,e.lang):m.n(e,c)}else m.a.postMessage(new w(0,c,"Language '"+c+"' is not loaded."))},K:function(a,c){var d=m.i[a],e,
f,g,i,k,l,p,s,o=j,q,r,x,M,N,F,y=[];if(c==="")return"";if(c.indexOf(m.B)!==-1)return c;if(m.Y&&d.w.hasOwnProperty(c))return d.w[c];if(d.e.hasOwnProperty(c))return d.e[c].replace(/-/g,m.B);if(c.indexOf("-")!==-1){e=c.split("-");f=0;for(g=e.length;f<g;f++)e[f]=m.K(a,e[f]);return e.join("-")}i="_"+c+"_";if(c.indexOf(String.fromCharCode(8204))!==-1){e=i.split(String.fromCharCode(8204));i=e.join("");f=0;for(g=e.length;f<g;f++)e[f]=e[f].length.toString();e.pop();y=e}e=i.length;g=i.split("");if(d.G)for(k in d.G)if(d.G.hasOwnProperty(k))i=
i.replace(RegExp(k,"g"),d.G[k]);i=c.indexOf("'")!==-1?i.toLowerCase().replace("'","’"):i.toLowerCase();k=[];N={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9};M=e-d.Wa;for(l=0;l<=M;l++){p=Math.min(e-l,d.db);for(s=d.Wa;s<=p;s++)if(d.D.hasOwnProperty(q=i.substring(l,l+s))){o=d.D[q];if(m.xa&&typeof o==="string")d.Ka[q]=o;if(typeof o==="string"){x=0;F=[];for(f=0;f<o.length;f++)if(r=N[o.charAt(f)]){F.push(f-x,r);x++}o=d.D[q]=F}for(f=0;f<o.length;f++){r=l-1+o[f];if(!k[r]||k[r]<o[f+1])k[r]=
o[f+1];f++}}}i=0;for(f=d.cb;f<=e-2-d.fb;f++){if(y.length>0&&y[0]===f){y.shift();g.splice(f+i-1,0,String.fromCharCode(8204));i++}if(k[f]&1){g.splice(f+i+1,0,m.B);i++}}f=g.slice(1,-1).join("");if(m.Y)d.w[c]=f;return f},ba:function(a){return a.replace(/([:\/\.\?#&_,;!@]+)/gi,"$&"+m.hb)}});
m.a.f({M:{be:"Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:",cs:"Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:",da:"Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:",de:"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:",en:"The language of this website could not be determined automatically. Please indicate the main language:",es:"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:",
fi:"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:",fr:"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:",hu:"A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:",hy:"Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝",it:"Lingua del sito sconosciuta. Indicare una lingua, per favore:",kn:"ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:",
lt:"Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:",lv:"Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:",ml:"ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:",nl:"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:",no:"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:",pt:"A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:",
ru:"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:",sl:"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:",sv:"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:",tr:"Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:",uk:"Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:"}});
m.a.f({$:function(){var a=h,c={},d=document.getElementsByTagName("script"),e,f,g;e=0;for(f=d.length;e<f;e++){if(d[e].getAttribute("src"))a=d[e].getAttribute("src");if(a){g=a.indexOf("Hyphenator.js?");if(g!==-1){d=a.substring(g+14).split("&");for(a=0;a<d.length;a++){e=d[a].split("=");if(e[0]!=="bm")c[e[0]]=e[1]==="true"?b:e[1]==="false"?j:isFinite(e[1])?parseInt(e[1],10):e[1]}break}}}return c}});if(m.a.r){m.m({wa:b,ea:"visible",$a:b});m.m(m.a.$());m.ja()}m.languages=m.i;m.config=m.m;m.run=m.ja;
m.addExceptions=m.S;m.hyphenate=m.n;m.getRedPatternSet=m.bb;m.isBookmarklet=m.r;m.getConfigFromURI=m.$;m.toggleHyphenation=m.ma;window.Hyphenator=m;
