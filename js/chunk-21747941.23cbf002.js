(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-21747941","chunk-0f941c4a"],{"18ff":function(t,e,a){},"483c":function(t,e,a){"use strict";var s=a("cecf");a.n(s).a},cecf:function(t,e,a){},dd7b:function(t,e,a){"use strict";a.r(e);var s=(a("96cf"),a("3b8d")),n=a("f62d"),i=a("e544"),r=a("df04"),l={name:"ApplyStateCheck",components:{ApplyStateTable:i.default,RefreshButton:r.a.RefreshButton},data:function(){return{loading:!1,amount:0,isShow:!1,denyData:[],columns:[{title:"申請者",slot:"empName",minWidth:100,maxWidth:200},{title:"休暇種類",key:"restTypeName",tooltip:!0,minWidth:60,maxWidth:180},{title:"対象日",slot:"dateList",minWidth:190,maxWidth:200},{title:"否認理由",slot:"remark"}],tableData:[],errorInfo:!1,RadioStatusHelper:6,pageValue:{curPage:1,list:[20,30,50,100],curSize:this.utils.getStorage("SO_userSettings","pageSize")||20},opts:{sidx:"create_time",order:"desc",status:null,self:!1,page:null,keyword:null,limit:this.utils.getStorage("SO_userSettings","pageSize")||20}}},created:function(){this.getData()},methods:{getData:Object(n.a)(Object(s.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.api.apply("applyHistory",this.opts);case 4:e=t.sent,a=e.data,this.tableData=a.list,this.amount=a.totalCount,t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[0,10,13,16]])})))),handleRadioStatusHelper:function(t){6!==t?this.opts.status=t:delete this.opts.status,1===t?this.opts.pass=!0:delete this.opts.pass,this.$refs.Page.currentPage=1,this.getData()},onRefresh:function(){this.opts.keyword=null,this.$refs.Page.currentPage=1,this.getData(),this.$Message.success("再表示完了")},pageChange:function(t){this.opts.page=t,this.pageValue.curPage=t,this.getData()},sizeChange:function(t){this.opts.limit=t,this.pageValue.curSize=t,this.utils.setStorage("SO_userSettings",{pageSize:t}),this.getData()}}},o=(a("e33d"),a("2877")),u=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("Icon",{attrs:{type:"i-happytime colored"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[a("RadioGroup",{attrs:{value:t.RadioStatusHelper},on:{"on-change":t.handleRadioStatusHelper}},[a("Radio",{staticClass:"custom-radio",attrs:{label:6}},[t._v("全て")]),a("Radio",{staticClass:"custom-radio",attrs:{label:0}},[t._v("待ち")]),a("Radio",{staticClass:"custom-radio",attrs:{label:1}},[t._v("済み")]),a("Radio",{staticClass:"custom-radio",attrs:{label:2}},[t._v("拒否")])],1),a("RefreshButton",{staticStyle:{"margin-top":"0"},on:{refresh:t.onRefresh}})],1)]),a("div",{staticClass:"searchwrap"},[a("span",{staticClass:"label"},[t._v("キーワード")]),a("Input",{staticClass:"mar like-select",attrs:{placeholder:"社員名或はコード",search:"","enter-button":""},on:{"on-search":t.getData},model:{value:t.opts.keyword,callback:function(e){t.$set(t.opts,"keyword",e)},expression:"opts.keyword"}}),a("span",{staticStyle:{flex:"1"}})],1)]),a("div",{staticClass:"content_body"},[a("div",{staticClass:"table-top"},[a("Row",{attrs:{gutter:16}},[a("Col",{staticClass:"tr",attrs:{span:"24"}},[a("Page",{ref:"Page",attrs:{total:t.amount,current:t.pageValue.curPage,"show-total":"","show-sizer":"","page-size":t.pageValue.curSize,"page-size-opts":t.pageValue.list},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)],1)],1),a("ApplyStateTable",{attrs:{data:t.tableData,loading:t.loading}})],1)])}),[],!1,null,"436c6703",null);e.default=u.exports},e33d:function(t,e,a){"use strict";var s=a("18ff");a.n(s).a},e544:function(t,e,a){"use strict";a.r(e);var s=(a("20d6"),{name:"ApplyStateTable",props:{data:Array,loading:Boolean},data:function(){return{columns:[{title:"申請日時",key:"createTime",minWidth:50,maxWidth:160,tooltip:!0},{title:"申請者",slot:"empName",minWidth:100,maxWidth:200},{title:"申請内容",slot:"restTypeName",tooltip:!0,minWidth:105,maxWidth:200},{title:"対象日",slot:"dateList",minWidth:190,maxWidth:200},{title:"承認フロー",slot:"progressList",align:"center",minWidth:254},{title:"申請理由",key:"remark",tooltip:!0,minWidth:70},{title:"状況",slot:"status",align:"center",width:45}]}},methods:{handleApplyDayShow:function(t){return 1===t.length?t.join(""):"".concat(t[0]," ～ ").concat(t[t.length-1])},handleApplyMarkShow:function(t){switch(t){case 0:return"apply-status ing";case 2:return"apply-status deny";default:return"apply-status ok"}},handleAdminflowShow:function(t){if(2===t.status){var e=t.progressList.findIndex((function(t){return 2===t.status}))+1;return t.progressList.slice(0,e)}return t.progressList},handleApplyMarkResult:function(t){switch(t){case 0:return"apply-status ing-notext small";case 2:return"apply-status deny-notext small";default:return"apply-status ok-notext small"}}}}),n=(a("483c"),a("2877")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"big-font-size-table",attrs:{stripe:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"dateList",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(t.handleApplyDayShow(s.dateList)))])]}},{key:"empName",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(s.code+" "+s.empName))])]}},{key:"progressList",fn:function(e){var s=e.row;return 3!==s.status?[a("ul",{staticStyle:{display:"flex","justify-content":"center"}},t._l(t.handleAdminflowShow(s),(function(e,s){return a("li",{key:s,staticStyle:{"margin-right":"10px"}},[a("span",[t._v(t._s(e.name+" "))]),a("span",{class:t.handleApplyMarkShow(e.status)})])})),0)]:void 0}},{key:"status",fn:function(e){var s=e.row;return[3!==s.status?a("span",{class:t.handleApplyMarkResult(s.status)}):a("span",{staticClass:"apply-status cancel small"})]}},{key:"restTypeName",fn:function(e){var s=e.row;return[a("span",{class:1===s.typeId?"":"description"},[t._v(t._s(s.restTypeName))])]}}],null,!0)})}),[],!1,null,"7377f27e",null);e.default=i.exports}}]);