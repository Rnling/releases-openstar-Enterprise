(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8e53"],{"8ae9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{attrs:{shadow:"never"}},[i("wafRuleDiag2",{ref:"ruleDiag",on:{refreshTable:t.initTable}}),i("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[i("div",{staticStyle:{width:"300px",float:"left"}},[i("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.ruleSearch,callback:function(e){t.ruleSearch=e},expression:"ruleSearch"}})],1),i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.showRuleDiag}},[t._v("添加规则")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.setRulePriority}},[t._v("应用优先级")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1)]),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:4}},[t._v("\n\t\t\t\t高级匹配规则开关: \n\t\t\t\t"),i("el-tooltip",{attrs:{content:t.state,placement:"top"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"on","inactive-value":"off"},on:{change:t.ruleClick},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),i("el-col",{attrs:{span:4}},[i("span",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t(点击应用生效)\n\t\t\t\t")]),t._v("\n\t\t\t\t当前数量：\n\t\t\t\t"),i("i",{staticClass:"red-fonts"},[t._v("\n\t\t\t\t\t"+t._s(t.count?t.count:0)+"\n\t\t\t\t")])])],1),i("wafRuleTable2",{attrs:{data:t.data},on:{del:t.delRule,edit:t.editRule}})],1)],1)},n=[],s=(i("a481"),i("6b54"),i("cadf"),i("551c"),i("097d"),function(){return i.e("chunk-2d0ba6fb").then(i.bind(null,"36ce"))}),r=function(){return i.e("chunk-24bbae2e").then(i.bind(null,"0882"))},o=function(){return i.e("chunk-391ddfb8").then(i.bind(null,"b52b"))},l={data:function(){return{state:"on",count:0,data:[],ruleSearch:"",temp:[]}},mounted:function(){this.initTable(),this.temp=this.data},methods:{setRulePriority:function(){var t={action:"set",mod:"app_Mod",value_type:"json",value:JSON.stringify(this.data)},e=this.secReq(this.api.globalConfig,"post",t);"ok"===e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})},saveRule:function(){var t=this.secReq(this.api.save2js,"post",{action:"save",mod:"all_Mod"});"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},showRuleDiag:function(){this.$refs.ruleDiag.editIndex=0,this.$refs.ruleDiag.ruleName="",this.$refs.ruleDiag.ruleState="",this.$refs.ruleDiag.ruleBasicTable=[{condition:"host",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1},{condition:"uri",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1}],this.$refs.ruleDiag.ruleAdvanceTable=[],this.$refs.ruleDiag.action="deny",this.$refs.ruleDiag.rehtml="",this.$refs.ruleDiag.refile=[],this.$refs.ruleDiag.func=[],this.$refs.ruleDiag.title="添加",this.$refs.ruleDiag.wafRuleVisible=!0},arr2obj:function(t,e){var i,a,n,s,r,o,l;if("adv"===e){a=t[0],l=t[2]||"and",n=t[1][1];var c=t[1][0];switch(n){case"":r=c;break;case"dict":r=JSON.stringify(c);break;case"len":r=c.toString();break;case"@token@":r=c;break;default:if("list"===n||"in_list"===n||"start_list"===n||"end_list"===n||"rein_list"===n){var u=c.map(function(t){return t}).toString().replace(/[]/g,"");r=u}else r=c}"headers"===a||"args"===a||"posts"===a||"post_form"===a?(s=t[1][3]?"true":"false",o=t[1][2][1]?t[1][2]:[t[1][2][0],"any"]):s=t[1][2]?"true":"false",i=""===n||"in"===n||"list"===n||"in_list"===n||"start_list"===n||"end_list"===n||"dict"===n||"rein_list"===n||"len"===n?{condition:a,symbol:n,negate:s,connector:l,content:r,jioRegData:"",disabled:!1,headerData:o||""}:"@token@"===n?{condition:a,symbol:n,negate:s,connector:l,content:r,jioRegData:"",disabled:!0,headerData:o||""}:{condition:a,symbol:"reg",negate:s,connector:l,content:r,jioRegData:n,disabled:!1,headerData:o||""}}else{n=t[1];c=t[0];switch(n){case"":r=c;break;case"dict":r=JSON.stringify(c);break;case"len":r=c.toString();break;case"@token@":r=c;break;default:if("list"===n||"in_list"===n||"start_list"===n||"end_list"===n||"rein_list"===n){u=c.map(function(t){return t}).toString().replace(/[]/g,"");r=u}else r=c;break}s=t[2]?"true":"false",i=""===n||"in"===n||"list"===n||"in_list"===n||"start_list"===n||"end_list"===n||"dict"===n||"rein_list"===n||"len"===n?{condition:"",symbol:n,negate:s,content:r,jioRegData:"",disabled:!1}:"@token@"===n?{condition:"",symbol:n,negate:s,content:r,jioRegData:"",disabled:!0}:{condition:"",symbol:"reg",negate:s,content:r,jioRegData:n,disabled:!1}}return i},editRule:function(t,e){var i=t["state"];i="on"===i;var a=this.arr2obj(t["hostname"],"");a["condition"]="host";var n=this.arr2obj(t["uri"],"");n["condition"]="uri";var s=[];if(t["app_ext"]&&t["app_ext"].length>0)for(var r in t["app_ext"])s.push(this.arr2obj(t["app_ext"][r],"adv"));this.$refs.ruleDiag.editIndex=e,this.$refs.ruleDiag.ruleName=t["id"],this.$refs.ruleDiag.ruleState=i,this.$refs.ruleDiag.ruleBasicTable=[a,n],this.$refs.ruleDiag.ruleAdvanceTable=s,this.$refs.ruleDiag.action=t["action"],"rehtml"===t["action"]&&t["rehtml"]?this.$refs.ruleDiag.rehtml=t["rehtml"]:"refile"===t["action"]&&t["refile"]?this.$refs.ruleDiag.refile=[t["refile"][0],t["refile"][1]]:"func"===t["action"]&&t["func"]&&(this.$refs.ruleDiag.func=[t["func"][0],t["func"][1]]),this.$refs.ruleDiag.title="编辑",this.$refs.ruleDiag.wafRuleVisible=!0},ruleClick:function(){"on"===this.state?(this.state="on",this.setRuleSwitch()):"off"===this.state&&(this.state="off",this.setRuleSwitch())},delRule:function(t){var e=this;this.$confirm("此操作将删除选择的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i={action:"del",mod:"app_Mod",id:parseInt(t)+1},a=e.secReq(e.api.globalConfig,"post",i);"ok"===a.code?(e.initTable(),e.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3})):e.$notify({type:"warning",title:"提示",message:a.msg,duration:4e3})})},initTable:function(){var t=this.secReq(this.api.globalConfig,"post",{action:"get",mod:"app_Mod"});if("ok"===t.code){for(var e=new Array,i=1;i<=t.msg.count;i++)e.push(t.msg[i]);this.state=String(t.msg.state),this.count=parseInt(t.msg.count),this.data=e}},setRuleSwitch:function(){var t={action:"set",mod:"base",id:"app_Mod",value:this.state},e=this.secReq(this.api.globalConfig,"post",t);"ok"===e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})}},components:{wafRuleTable2:s,wafDivider:r,wafRuleDiag2:o},watch:{$route:function(t,e){},ruleSearch:{handler:function(t,e){this.data=""===t?this.temp:this.data.filter(function(e){if(e.id.indexOf(t)>=0)return!0})}}}},c=l,u=i("2877"),d=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=d.exports}}]);