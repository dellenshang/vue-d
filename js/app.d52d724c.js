(function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b2f966d7"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"655daf34"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.request=n,delete o[e],f.parentNode.removeChild(f),r(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1bb6":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"login"}},[r("router-view")],1)],1)},a=[],u=(r("5c0b"),r("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null);c.options.__file="App.vue";var s=c.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("LoginPanel")],1)},f=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h1",[e._v(e._s(e.welcome))]),r("h2",[e._v(e._s(e.welcomeSub))]),r("ul",[r("li",[r("h3",{style:e.warning1},[e._v(e._s(e.account))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.aValue,expression:"aValue"}],style:e.warning3,attrs:{spellcheck:"false",type:"text"},domProps:{value:e.aValue},on:{input:function(t){t.target.composing||(e.aValue=t.target.value)}}})]),r("li",[r("h3",{style:e.warning2},[e._v(e._s(e.password))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pValue,expression:"pValue"}],style:e.warning4,attrs:{type:"password"},domProps:{value:e.pValue},on:{input:function(t){t.target.composing||(e.pValue=t.target.value)}}})]),r("li",[r("h3",[r("a",[e._v(e._s(e.forgot))])]),r("button",{on:{click:e.loging}},[e._v(e._s(e.login))])])])])},g=[],m=(r("7f7f"),r("7514"),r("96cf"),r("1da1")),v={name:"LoginPanel",data:function(){return{welcome:"おかえりなさい!",welcomeSub:"またお会いしましたね!",account:"社員コード",aValue:"",password:"パスワード",pValue:"",forgot:"Forgot your password?",login:"ログイン",warning1:{},warning2:{},warning3:{},warning4:{}}},methods:{loging:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,r,n,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,r="rgb(143,119,181)",t.account="社員コード",t.password="パスワード",t.warning1.color="rgb(104,109,116)",t.warning2.color="rgb(104,109,116)",t.warning3.borderColor="rgb(43,43,47)",t.warning4.borderColor="rgb(43,43,47)",e.next=10,t.api.login();case 10:if(n=e.sent,o=n.data.user,a=o.find(function(e){return e.name===t.aValue}),!a){e.next=21;break}if(a.password!==t.pValue){e.next=16;break}return e.abrupt("return",t.$router.push("/about"));case 16:t.password="パスワードが入力不正になりました。",t.warning2.color=r,t.warning4.borderColor=r,e.next=24;break;case 21:t.account="社員コードが入力不正になりました。",t.warning1.color=r,t.warning3.borderColor=r;case 24:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},b=v,h=(r("7cd8"),Object(u["a"])(b,d,g,!1,null,"f84284ce",null));h.options.__file="LoginPanel.vue";var w=h.exports,y={name:"home",components:{LoginPanel:w}},_=y,x=(r("9d05"),Object(u["a"])(_,p,f,!1,null,"b734a40c",null));x.options.__file="Home.vue";var P=x.exports,j=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}];n["a"].use(l["a"]);var k=new l["a"]({mode:"history",base:"",routes:j});k.beforeEach(function(e,t,r){r()});var O=k,V=r("2f62");n["a"].use(V["a"]);var E=new V["a"].Store({strict:!1,state:{},mutations:{},actions:{}}),S=r("bc3a"),C=r.n(S),T=r("4328"),L=r.n(T);C.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),C.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e.response)});var N=function(e,t){return new Promise(function(){var r=Object(m["a"])(regeneratorRuntime.mark(function r(n){var o,a,u;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,C()({method:"get",url:e,params:t});case 2:if(o=r.sent,a=o.data,u=o.error,!u){r.next=7;break}return r.abrupt("return",console.log("error"));case 7:n({data:a});case 8:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}())},R=function(e,t){return new Promise(function(){var r=Object(m["a"])(regeneratorRuntime.mark(function r(n){var o,a,u;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,C()({method:"post",url:e,data:L.a.stringify(t)});case 2:if(o=r.sent,a=o.data,u=o.error,!u){r.next=7;break}return r.abrupt("return",console.log("error"));case 7:n({data:a});case 8:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}())},A={post:R,get:N},$={login:function(){return A.post("https://www.easy-mock.com/mock/5c2332542965cb5ed87bae79/mock")}};r("9d2c");Object.defineProperties(n["a"].prototype,{api:{value:$}}),n["a"].config.productionTip=!1,new n["a"]({router:O,store:E,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(e,t,r){},"7cd8":function(e,t,r){"use strict";var n=r("1bb6"),o=r.n(n);o.a},9699:function(e,t,r){},"9d05":function(e,t,r){"use strict";var n=r("9699"),o=r.n(n);o.a},"9d2c":function(e,t){}});
//# sourceMappingURL=app.d52d724c.js.map