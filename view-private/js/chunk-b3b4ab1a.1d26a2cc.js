(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3b4ab1a"],{"456d":function(t,e,i){var s=i("4bf8"),a=i("0d58");i("5eda")("keys",function(){return function(t){return a(s(t))}})},"5eda":function(t,e,i){var s=i("5ca1"),a=i("8378"),n=i("79e5");t.exports=function(t,e){var i=(a.Object||{})[t]||Object[t],o={};o[t]=e(i),s(s.S+s.F*n(function(){i(1)}),"Object",o)}},"7f7f":function(t,e,i){var s=i("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in a||i("9e1e")&&s(a,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},ac6a:function(t,e,i){for(var s=i("cadf"),a=i("0d58"),n=i("2aba"),o=i("7726"),r=i("32e9"),l=i("84f2"),c=i("2b4c"),f=c("iterator"),d=c("toStringTag"),u=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(p),g=0;g<h.length;g++){var m,v=h[g],w=p[v],b=o[v],_=b&&b.prototype;if(_&&(_[f]||r(_,f,u),_[d]||r(_,d,v),l[v]=u,w))for(m in s)_[m]||n(_,m,s[m],!0)}},ace1:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{attrs:{shadow:"never"}},[i("wafSiteSetDiag",{ref:"viewDiag",on:{diagAdd:t.setData}}),i("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[i("div",{staticStyle:{width:"300px",float:"left"}},[i("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.ruleSearch,callback:function(e){t.ruleSearch=e},expression:"ruleSearch"}})],1),i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.showDiag}},[t._v("添加规则")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"普通规则"===this.tabName,expression:" this.tabName === '普通规则' "}],attrs:{type:"primary",size:"mini",round:""},on:{click:t.setRulePriority}},[t._v("应用优先级")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1)]),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{float:"left"}},[t._v("\n\t\t\t\t\t域名名称: "),i("el-input",{staticStyle:{width:"200px"},attrs:{disabled:""},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1),i("div",{staticStyle:{float:"right"}},[t._v("\n\t\t\t\t\t当前规则数量：\n\t\t\t\t\t"),i("i",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.count?t.count:0)+"\n\t\t\t\t\t")])]),i("br"),i("div",{directives:[{name:"show",rawName:"v-show",value:"配置获取真实IP"===t.tabName,expression:"tabName === '配置获取真实IP' "}],staticStyle:{float:"right"}},[i("span",{staticStyle:{color:"red"}},[i("strong",[t._v("默认一个域名对应一个规则，不能添加多个规则")])])])]),i("el-col",{staticClass:"custom-col"},[i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("放行")]),i("el-radio",{attrs:{label:"log"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("日志")])],1),i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("args_HPP 拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.args_HPP,callback:function(e){t.args_HPP=e},expression:"args_HPP"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.args_HPP,callback:function(e){t.args_HPP=e},expression:"args_HPP"}},[t._v("放行")])],1),i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("posts_HPP 拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.posts_HPP,callback:function(e){t.posts_HPP=e},expression:"posts_HPP"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.posts_HPP,callback:function(e){t.posts_HPP=e},expression:"posts_HPP"}},[t._v("放行")])],1)],1)],1),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.tabClick},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[i("el-tab-pane",{attrs:{label:"普通规则",name:"普通规则"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.results}},[i("el-table-column",{attrs:{label:"系统ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.systemId)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"规则ID/名称","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ruleId)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"防护",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.protect)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"规则条件","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("joint")(e.row))+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"取反",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.uri[2])+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"匹配动作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.action)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.up(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-up"}),t._v(" 上移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.down(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-down"}),t._v(" 下移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.upIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-up"}),t._v(" 置顶")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.downIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-down"}),t._v(" 置底")])]}}])})],1)],1),i("el-tab-pane",{attrs:{label:"配置获取真实IP",name:"配置获取真实IP"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.realip_results}},[i("el-table-column",{attrs:{label:"域名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.host)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("match")(e.row.option))+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"取反",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(void 0===e.row.negate?"false":e.row.negate)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"来源IPS"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ips)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"http头名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.http_header)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row.host,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")])]}}])})],1)],1),i("el-tab-pane",{attrs:{label:"IP规则",name:"IP规则"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.ip_results}},[i("el-table-column",{attrs:{label:"域名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.host)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"ip"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ip)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"动作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.option)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")])]}}])})],1)],1)],1)],1)],1)],1)},a=[],n=(i("ac6a"),i("456d"),i("6b54"),i("7f7f"),i("28a5"),i("cadf"),i("551c"),i("097d"),function(){return i.e("chunk-24bbae2e").then(i.bind(null,"0882"))}),o=function(){return i.e("chunk-2d20edf0").then(i.bind(null,"b0e1"))},r={data:function(){return{ruleSearch:"",temp:[],domain:"",commonData:[],count:0,state:"",args_HPP:"",posts_HPP:"",tabName:"",editIndex:0,host:"",results:[],realip_results:[],ip_results:[]}},mounted:function(){this.domain=this.$route.params["host"],this.tabName="普通规则",this.initData("普通规则")},methods:{setRulePriority:function(){var t=this.secReq(this.api.defHost,"post",{action:"set",host:this.domain,value:JSON.stringify(this.commonData)});"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},saveRule:function(){var t;"普通规则"===this.tabName?t=this.secReq(this.api.save2js,"post",{action:"save",mod:"all_Mod"}):"配置获取真实IP"===this.tabName?t=this.secReq(this.api.save2js,"post",{action:"save",mod:"realIpFrom_Mod"}):"IP规则"===this.tabName&&(t=this.secReq(this.api.save2js,"post",{action:"save",mod:"ip_Mod"})),t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},initData:function(t){if("普通规则"===t){var e,i=this.$route.params["host"];if(e={action:"get",host:i},o=this.secReq(this.api.defHost,"get",e),o.hasOwnProperty("code")&&"ok"==o.code){this.host=i,this.commonData=o.msg["mod"],this.count=o.msg["count"],this.state=o.msg["state"],this.args_HPP=o.msg["args_HPP"],this.posts_HPP=o.msg["posts_HPP"];var s=[];for(var a in o.msg.mod){var n={};n.systemId=parseInt(a)+1,n.ruleId=o.msg.mod[a].id,n.protect=o.msg.mod[a].state,n.action=o.msg.mod[a].action,o.msg.mod[a].uri&&(n.uri=o.msg.mod[a].uri),o.msg.mod[a].network&&(n.network=o.msg.mod[a].network),o.msg.mod[a].app_ext&&(n.app_ext=o.msg.mod[a].app_ext),s.push(n)}this.results=s}else this.$notify({type:"warning",title:"提示",message:o.msg,duration:4e3})}else if("配置获取真实IP"===t){this.count=1;var o=this.secReq(this.api.globalConfig,"post",{action:"get",mod:"realIpFrom_Mod",id:this.domain});if(o.hasOwnProperty("code")&&"ok"===o.code){s=[],n={};n.host=this.domain,n.option=o.msg.ips[1],n.negate=o.msg.ips[2],n.ips=o.msg.ips[0],n.http_header=o.msg.realipfrom,s.push(n),this.realip_results=s,this.temp=s}else this.realip_results=[],this.$notify({type:"warning",title:"提示",message:o.msg||"无返回值",duration:4e3})}else if("IP规则"===t){o=this.secReq(this.api.defIPselect,"post",{action:"get",host:this.domain});if(o.hasOwnProperty("code")&&"ok"===o.code){this.count=o.msg.count;s=[];for(var a in o.msg)if("state"!==a&&"count"!==a){n={};var r=a.split("_");1==r.length?(n.host="*",n.ip=r[0]):(n.host=r[0],n.ip=r[1]),n.option=o.msg[a],s.push(n)}this.ip_results=s,this.temp=s}else this.$notify({type:"warning",title:"提示",message:o.msg,duration:4e3})}},stateClick:function(){var t,e;t={action:"set",host:this.domain,value:this.state,id:"state"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})},argsHPPClick:function(){var t,e;t={action:"set",host:this.domain,value:this.args_HPP,id:"args_HPP"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})},postsHPPClick:function(){var t,e;t={action:"set",host:this.domain,value:this.posts_HPP,id:"posts_HPP"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})},delData:function(t,e){var i,s;if("普通规则"===this.tabName)i=e+1,s=this.domain,a={action:"del",host:String(s),id:parseInt(i)},n=this.secReq(this.api.defHost,"post",a);else if("配置获取真实IP"===this.tabName){a={action:"del",mod:"realIpFrom_Mod",id:String(this.domain)},n=this.secReq(this.api.globalConfig,"post",a)}else if("IP规则"===this.tabName){var a,n,o;o="*"===t.host?t.ip:t.host+"_"+t.ip,a={action:"del",ip:String(o)},n=this.secReq(this.api.defIP,"post",a)}"ok"==n.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData(this.tabName)):this.$notify({type:"warning",title:"提示",message:n.msg,duration:4e3})},tabClick:function(t,e){var i=t.name;this.tabName=i,this.initData(i)},showDiag:function(){"普通规则"===this.tabName?(this.$refs.viewDiag.viewTable="on",this.$refs.viewDiag.id="",this.$refs.viewDiag.state="off",this.$refs.viewDiag.action="deny",this.$refs.viewDiag.uri=[{condition:"uri",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1,headerData:""}],this.$refs.viewDiag.network=[{condition:"network",maxReqs:"",pTime:"",blackTime:""}],this.$refs.viewDiag.app_ext=[],this.$refs.viewDiag.title="普通规则"):"配置获取真实IP"===this.tabName?(this.$refs.viewDiag.realipfrom="",this.$refs.viewDiag.ips=[{condition:"ips",symbol:"",negate:"false",content:""}],this.$refs.viewDiag.contentIpTitle="",this.$refs.viewDiag.contentIPVisible=!1,this.$refs.viewDiag.title="配置获取真实IP"):"IP规则"===this.tabName&&(this.$refs.viewDiag.ip="",this.$refs.viewDiag.ip_value="",this.$refs.viewDiag.title="IP规则"),this.$refs.viewDiag.wafRuleVisible=!0},editDiag:function(t,e){if(this.$refs.viewDiag.editTile=!0,this.editIndex=e+1,"普通规则"===this.tabName){var i,s;if(i=this.arr2obj(t.uri,""),i["condition"]="uri",t.hasOwnProperty("app_ext")){var a=[];for(var n in t.app_ext)a.push(this.arr2obj(t.app_ext[n],"advanced"));this.$refs.viewDiag.viewTable="off",this.$refs.viewDiag.app_ext=a}else s={condition:"network",maxReqs:t.network["maxReqs"],pTime:t.network["pTime"],blackTime:t.network["blackTime"]},this.$refs.viewDiag.viewTable="on",this.$refs.viewDiag.network=[s];this.$refs.viewDiag.id=t.ruleId,this.$refs.viewDiag.state=t.protect,this.$refs.viewDiag.action=t.action,this.$refs.viewDiag.uri=[i],this.$refs.viewDiag.title="普通规则"}else if("配置获取真实IP"===this.tabName){var o,r,l;this.$refs.viewDiag.realipfrom=t.http_header,o=t.option,r=t.negate?"true":"false",l=t.ips,this.$refs.viewDiag.ips=[{condition:"ips",symbol:o,negate:r,content:l}],this.$refs.viewDiag.title="配置获取真实IP"}else"IP规则"===this.tabName&&(this.$refs.viewDiag.ip=t.ip,this.$refs.viewDiag.ip_value=t.option,this.$refs.viewDiag.title="IP规则");this.$refs.viewDiag.wafRuleVisible=!0},arr2obj:function(t,e){var i,s,a,n,o,r,l,c,f;if(""===e){var d=t[1];if(""===d||"in"===d)s=t[1],n=t[0],r=!1;else if("@token@"===d)s=t[1],n=t[0],r=!0;else if("list"===d||"start_list"===d||"end_list"===d||"rein_list"===d||"in_list"===d||"len"===d){s=t[1];var u=[];for(var p in t[0])u.push(t[0][p]);n=u.toString(),r=!1}else"dict"===d?(s=t[1],n=JSON.stringify(t[0]),r=!1):(s="reg",o=t[1],r=!1,n=t[0]);a=t[2]?"true":"false",i={condition:"",symbol:s,negate:a,content:n,jioRegData:o||"",disabled:r}}else if("advanced"===e){l=t[0],c=t[2]||"and";d=t[1][1];if(""===d||"in"===d)s=t[1][1],n=t[1][0],r=!1;else if("@token@"===d)s=t[1][1],n=t[1][0],r=!0;else if("list"===d||"start_list"===d||"end_list"===d||"rein_list"===d||"in_list"===d||"len"===d){s=t[1][1];u=[];for(var p in t[1][0])u.push(t[1][0][p]);n=u.toString(),r=!1}else"dict"===d?(s=t[1][1],n=JSON.stringify(t[1][0]),r=!1):(s="reg",o=t[1][1],r=!1,n=t[1][0]);a=t[2]?"true":"false","headers"!==l&&"args"!==l&&"posts"!==l&&"post_form"!==l||(a=t[1][3]?"true":"false",f=t[1][2]),i=""===s||"in"===s||"list"===s||"in_list"===s||"start_list"===s||"end_list"===s||"dict"===s||"rein_list"===s||"len"===s?{condition:l,symbol:s,negate:a,connector:c,content:n,jioRegData:"",disabled:!1,headerData:f||""}:"@token@"===s?{condition:l,symbol:s,negate:a,connector:c,content:n,jioRegData:"",disabled:!0,headerData:f||""}:{condition:l,symbol:"reg",negate:a,connector:c,content:n,jioRegData:s,disabled:!1,headerData:f||""}}return i},formatData2:function(t){var e,i,s,a,n=t["symbol"];switch(n){case"":i=t["content"],s=n;break;case"dict":i=JSON.parse(t["content"]),s=n;break;default:i=t["content"].split(","),s=n;break}return a="false"!=t["negate"],e=[i,s,a],e},formatData:function(t,e){var i,s,a,n,o=t["condition"],r=t["symbol"];if("adv"===e)if("headers"===o||"args"===o||"posts"===o||"post_form"===o){switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":var l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!=t["negate"],i=[o,[s,a,t["headerData"],n],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!=t["negate"],i=[o,[s,a,n],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!=t["negate"],i=[s,a,n]}return i},setData:function(){var t,e=this.$refs.viewDiag.title;if(this.$refs.viewDiag.editTile){var i=this.editIndex;if("普通规则"===e){v=""===this.$refs.viewDiag.typeValue?this.$refs.viewDiag.id+"-other":this.$refs.viewDiag.id+"-"+this.$refs.viewDiag.typeValue,p=this.$refs.viewDiag.state,h=this.$refs.viewDiag.action,g=this.formatData(this.$refs.viewDiag.uri[0],"");var s=this.$refs.viewDiag.network[0]["maxReqs"],a=this.$refs.viewDiag.network[0]["pTime"],n=this.$refs.viewDiag.network[0]["blackTime"];if("on"===this.$refs.viewDiag.viewTable){m={maxReqs:parseInt(s),pTime:parseInt(a),blackTime:parseInt(n)};var o={id:v,state:p,action:h,uri:g,network:m},r=o,l=r["id"].split("-");if(o["id"].split("-")[o["id"].split("-").length-1]!==l[l.length-1]){r["id"]=l[0]+"-"+l[l.length-1];o=JSON.stringify(r);console.log(o,"test11")}else{r["id"]=l[0]+"-"+l[l.length-1];o=JSON.stringify(r)}u={action:"set",host:this.domain,value:o,id:parseInt(i)},t=this.secReq(this.api.defHost,"post",u)}else if("off"===this.$refs.viewDiag.viewTable){var c=[],f=Object.keys(this.$refs.viewDiag.app_ext).length;if(f>0)for(var d in this.$refs.viewDiag.app_ext)c.push(this.formatData(this.$refs.viewDiag.app_ext[d],"adv"));o={id:v,state:p,action:h,uri:g,app_ext:c},r=o,l=r["id"].split("-");if(o["id"].split("-")[o["id"].split("-").length-1]!==l[l.length-1]){r["id"]=l[0]+"-"+l[l.length-1];o=JSON.stringify(r);console.log(o,"test11")}else{r["id"]=l[0]+"-"+l[l.length-1];o=JSON.stringify(r)}u={action:"set",host:this.domain,value:o,id:parseInt(i)},t=this.secReq(this.api.defHost,"post",u)}}else if("配置获取真实IP"===e){v=this.domain,b=this.$refs.viewDiag.realipfrom,w=this.formatData2(this.$refs.viewDiag.ips[0]);o={ips:w,realipfrom:b};var u={action:"set",id:v,mod:"realIpFrom_Mod",value_type:"json",value:JSON.stringify(o)};t=this.secReq(this.api.globalConfig,"post",u)}else if("IP规则"===e){_=this.domain+"_"+this.$refs.viewDiag.ip,D=this.$refs.viewDiag.ip_value;u={action:"set",ip:_,value:D};t=this.secReq(this.api.defIP,"post",u)}this.editIndex=0}else if("普通规则"===e){var p,h,g,m;v=""===this.$refs.viewDiag.typeValue?this.$refs.viewDiag.id+"-other":this.$refs.viewDiag.id+"-"+this.$refs.viewDiag.typeValue,p=this.$refs.viewDiag.state,h=this.$refs.viewDiag.action,g=this.formatData(this.$refs.viewDiag.uri[0],"");s=this.$refs.viewDiag.network[0]["maxReqs"],a=this.$refs.viewDiag.network[0]["pTime"],n=this.$refs.viewDiag.network[0]["blackTime"];if("on"===this.$refs.viewDiag.viewTable){m={maxReqs:parseInt(s),pTime:parseInt(a),blackTime:parseInt(n)};o={id:v,state:p,action:h,uri:g,network:m};u={action:"add",host:this.domain,value:JSON.stringify(o)},t=this.secReq(this.api.defHost,"post",u)}else if("off"===this.$refs.viewDiag.viewTable){c=[],f=Object.keys(this.$refs.viewDiag.app_ext).length;if(f>0)for(var d in this.$refs.viewDiag.app_ext)c.push(this.formatData(this.$refs.viewDiag.app_ext[d],"adv"));o={id:v,state:p,action:h,uri:g,app_ext:c};u={action:"add",host:this.domain,value:JSON.stringify(o)},t=this.secReq(this.api.defHost,"post",u)}}else if("配置获取真实IP"===e){var v,w,b;v=this.domain,b=this.$refs.viewDiag.realipfrom,w=this.formatData2(this.$refs.viewDiag.ips[0]);o={ips:w,realipfrom:b},u={action:"add",id:v,mod:"realIpFrom_Mod",value:JSON.stringify(o)};t=this.secReq(this.api.globalConfig,"post",u)}else if("IP规则"===e){var _,D;_=this.domain+"_"+this.$refs.viewDiag.ip,D=this.$refs.viewDiag.ip_value;u={action:"set",ip:_,value:D};t=this.secReq(this.api.defIP,"post",u)}"ok"==t.code?(this.$refs.viewDiag.editTile=!1,this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData(this.tabName),this.$refs.viewDiag.wafRuleVisible=!1):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},up:function(t){0!==t&&this.swapItems(this.results,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.results,t,0,"up")},down:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,t+1)},downIndex:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,0,"down")},swapItems:function(t,e,i,s){return"up"==s?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==s?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(i,1,t[e])[0],t)}},components:{wafDivider:n,wafSiteSetDiag:o},filters:{joint:function(t){var e=""==t.uri[1]?"等于":t.uri[1];return"uri"+e+t.uri[0]},match:function(t){return""==t?"等于":"list"==t?"数组":"cidr"==t?"ip段":"dict"==t?"字典":void 0}},watch:{$route:function(t,e){},state:function(t,e){""!==e&&this.stateClick()},args_HPP:function(t,e){""!==e&&this.argsHPPClick()},posts_HPP:function(t,e){""!==e&&this.postsHPPClick()},ruleSearch:{handler:function(t,e){this.data=""===t?this.temp:this.data.filter(function(e){if(e.id.indexOf(t)>=0)return!0})}}}},l=r,c=i("2877"),f=Object(c["a"])(l,s,a,!1,null,null,null);e["default"]=f.exports}}]);