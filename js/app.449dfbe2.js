(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({home:"home"}[e]||e)+"."+{home:"302c18b2"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({home:"home"}[e]||e)+"."+{home:"9fe15d75"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-d/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"54e9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("d847"),o=n.n(r),a=(n("cadf"),n("551c"),n("097d"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"login"}},[n("router-view")],1)],1)},i=[],s=(n("5c0b"),n("2877")),c={},l=Object(s["a"])(c,u,i,!1,null,null,null);l.options.__file="App.vue";var p=l.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("LoginPanel")],1)},m=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v(e._s(e.welcome))]),n("h2",[e._v(e._s(e.welcomeSub))]),n("ul",[n("li",[n("h3",{style:e.warning1},[e._v(e._s(e.account))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.aValue,expression:"aValue"}],style:e.warning3,attrs:{spellcheck:"false",type:"text"},domProps:{value:e.aValue},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.loging(t):null},input:function(t){t.target.composing||(e.aValue=t.target.value)}}})]),n("li",[n("h3",{style:e.warning2},[e._v(e._s(e.password))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pValue,expression:"pValue"}],style:e.warning4,attrs:{type:"password"},domProps:{value:e.pValue},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.loging(t):null},input:function(t){t.target.composing||(e.pValue=t.target.value)}}})]),n("li",[n("h3",[e._v(e._s(e.forgot))]),n("button",{on:{click:e.loging}},[e._v(e._s(e.login))])])])])},h=[],v=(n("7f7f"),n("7514"),n("96cf"),n("3b8d")),b={name:"LoginPanel",data:function(){return{welcome:"おかえりなさい!",welcomeSub:"またお会いしましたね!",account:"社員コード",aValue:"",password:"パスワード",pValue:"",forgot:"Forgot your password?",login:"ログイン",warning1:{},warning2:{},warning3:{},warning4:{}}},mounted:function(){this.$parent.$parent.$el.className+="spec"},destroyed:function(){this.$parent.$parent.$el.className=""},methods:{loging:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,n="rgb(143,119,181)",t.account="社員コード",t.forgot="Forgot your password?",t.warning1.color="rgb(104,109,116)",t.warning2.color="rgb(104,109,116)",t.warning3.borderColor="rgb(43,43,47)",t.warning4.borderColor="rgb(43,43,47)",e.next=10,t.api.login();case 10:if(r=e.sent,o=r.data.user,a=o.find(function(e){return e.name===t.aValue}),!a){e.next=21;break}if(a.password!==t.pValue){e.next=16;break}return e.abrupt("return",t.$router.push("/home"));case 16:t.forgot="パスワード、或は社員コードが入力不正になりました。",t.warning3.borderColor=n,t.warning4.borderColor=n,e.next=24;break;case 21:t.account="社員コードがまだ登録しませんでした。",t.warning1.color=n,t.warning3.borderColor=n;case 24:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},w=b,y=(n("74a7"),Object(s["a"])(w,g,h,!1,null,"898456a2",null));y.options.__file="LoginPanel.vue";var k=y.exports,_={name:"login",components:{LoginPanel:k}},x=_,P=(n("8225"),Object(s["a"])(x,d,m,!1,null,"12cb4fa6",null));P.options.__file="Login.vue";var j=P.exports,O=[{path:"/",name:"login",component:j},{path:"/home",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}}],C=n("2f62"),E=n("795b"),V=n.n(E),S=n("bc3a"),$=n.n(S),N=n("4328"),R=n.n(N);$.a.interceptors.request.use(function(e){return e},function(e){return V.a.reject(e)}),$.a.interceptors.response.use(function(e){return e},function(e){return V.a.reject(e.response)});var T=function(e,t){return new V.a(function(){var n=Object(v["a"])(regeneratorRuntime.mark(function n(r){var o,a,u;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,$()({method:"get",url:e,params:t});case 2:if(o=n.sent,a=o.data,u=o.error,!u){n.next=7;break}return n.abrupt("return",console.log("error"));case 7:r({data:a});case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}())},W=function(e,t){return new V.a(function(){var n=Object(v["a"])(regeneratorRuntime.mark(function n(r){var o,a,u;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,$()({method:"post",url:e,data:R.a.stringify(t)});case 2:if(o=n.sent,a=o.data,u=o.error,!u){n.next=7;break}return n.abrupt("return",console.log("error"));case 7:r({data:a});case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}())},A={post:W,get:T},L={login:function(){return A.post("https://www.easy-mock.com/mock/5c2332542965cb5ed87bae79/mock")},updatePassWord:function(e){return A.post("https://www.easy-mock.com/mock/5c2332542965cb5ed87bae79/upload",e)}};a["default"].use(C["a"]);var q=new C["a"].Store({strict:!1,state:{id:"",account:"myAccount",passWord:"asdas",isCollapsed:!1},mutations:{updatePassWord:function(e,t){e.passWord=t.data.data.newPassWord},collapsedSider:function(e){e.isCollapsed=!e.isCollapsed}},actions:{actionUpdatePassWord:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,L.updatePassWord(n);case 3:o=e.sent,r("updatePassWord",o);case 5:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()}});a["default"].use(f["a"]);var M=new f["a"]({mode:"history",base:"/vue-d/",routes:O});M.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requireAuth})?q.state.token?n():n({path:"/",query:{redirect:e.fullPath}}):n()});var B=M,F=n("e069"),J=n.n(F),U=(n("dcad"),n("c242")),z=n.n(U);n("f5fa");Object(F["locale"])(z.a),a["default"].use(J.a),o()(a["default"].prototype,{api:{value:L}}),a["default"].config.productionTip=!1,new a["default"]({router:B,store:q,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"74a7":function(e,t,n){"use strict";var r=n("8f4b"),o=n.n(r);o.a},8225:function(e,t,n){"use strict";var r=n("54e9"),o=n.n(r);o.a},"8f4b":function(e,t,n){},f5fa:function(e,t,n){}});
//# sourceMappingURL=app.449dfbe2.js.map