(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d101"],{d065:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{attrs:{shadow:"never"}},[a("el-dialog",{staticClass:"preview",attrs:{visible:t.showVisible,fullscreen:t.fullscreen},on:{"update:visible":function(e){t.showVisible=e}}},[a("h3",{staticStyle:{float:"left"},attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t预览\n\t\t\t\t")]),a("div",{domProps:{innerHTML:t._s(t.form.denyMsg.msg)}})]),a("el-row",[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini",round:""},on:{click:t.setConfig}},[t._v("立即应用")]),a("el-button",{staticStyle:{float:"right","margin-right":"20px"},attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1),a("el-row",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基础配置",name:"first"}},[a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("baseDir:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:""},model:{value:t.form.baseDir,callback:function(e){t.$set(t.form,"baseDir",e)},expression:"form.baseDir"}}),a("label",{staticStyle:{float:"right","line-height":"40px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" waf主目录；谨慎修改\n\t\t\t\t\t\t\t\t")])],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("logPath:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{width:"50%"},model:{value:t.form.logPath,callback:function(e){t.$set(t.form,"logPath",e)},expression:"form.logPath"}}),a("label",{staticStyle:{float:"right","line-height":"40px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 调试日志目录；谨慎修改\n\t\t\t\t\t\t\t\t")])],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("jsonPath:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{width:"50%"},model:{value:t.form.jsonPath,callback:function(e){t.$set(t.form,"jsonPath",e)},expression:"form.jsonPath"}}),a("label",{staticStyle:{"line-height":"40px",float:"right"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 规则本地存放目录；谨慎修改\n\t\t\t\t\t\t\t\t")])],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("htmlPath:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{width:"50%"},model:{value:t.form.htmlPath,callback:function(e){t.$set(t.form,"htmlPath",e)},expression:"form.htmlPath"}}),a("label",{staticStyle:{"line-height":"40px",float:"right"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" app_Mod规则中文件存放目录；谨慎修改\n\t\t\t\t\t\t\t\t")])],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("dengyMsg:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-radio",{staticStyle:{width:"5%"},attrs:{label:"on"},model:{value:t.form.denyMsg.state,callback:function(e){t.$set(t.form.denyMsg,"state",e)},expression:"form.denyMsg.state"}},[t._v("\n\t\t\t\t\t\t\t\t\t开启\n\t\t\t\t\t\t\t\t")]),a("el-radio",{staticStyle:{width:"5%"},attrs:{label:"off"},model:{value:t.form.denyMsg.state,callback:function(e){t.$set(t.form.denyMsg,"state",e)},expression:"form.denyMsg.state"}},[t._v("\n\t\t\t\t\t\t\t\t\t关闭\n\t\t\t\t\t\t\t\t")]),a("label",{staticStyle:{"ine-height":"40px",float:"right"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" \n\t\t\t\t\t\t\t\t\t开启表示启用自定义拦截信息配置，否则仅显示默认拦截信息\n\t\t\t\t\t\t\t\t")])],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("label",{staticStyle:{width:"20%","line-height":"40px"}},[a("strong",[t._v("状态码:")]),t._v("  \n\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{width:"50%"},model:{value:t.form.denyMsg.http_code,callback:function(e){t.$set(t.form.denyMsg,"http_code",e)},expression:"form.denyMsg.http_code"}})],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("el-input",{attrs:{type:"textarea",rows:"8"},model:{value:t.form.denyMsg.msg,callback:function(e){t.$set(t.form.denyMsg,"msg",e)},expression:"form.denyMsg.msg"}})],1),a("el-form-item",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.previewScope}},[t._v("\n\t\t\t\t\t\t\t\t\t预览\n\t\t\t\t\t\t\t\t")])],1)],1),a("el-tab-pane",{attrs:{label:"高级配置",name:"second"}},[a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[a("span",{staticStyle:{color:"red"}},[a("strong",[t._v("WAF防护开关:")])])]),a("el-radio",{attrs:{label:"on"},model:{value:t.form.Mod_state,callback:function(e){t.$set(t.form,"Mod_state",e)},expression:"form.Mod_state"}},[t._v("开启")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.Mod_state,callback:function(e){t.$set(t.form,"Mod_state",e)},expression:"form.Mod_state"}},[t._v("关闭")]),a("el-radio",{attrs:{label:"log"},model:{value:t.form.Mod_state,callback:function(e){t.$set(t.form,"Mod_state",e)},expression:"form.Mod_state"}},[t._v("日志")])],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[a("strong",[t._v("请求统计开关:")])]),a("el-radio",{attrs:{label:"on"},model:{value:t.form.ngx_status,callback:function(e){t.$set(t.form,"ngx_status",e)},expression:"form.ngx_status"}},[t._v("开启")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.ngx_status,callback:function(e){t.$set(t.form,"ngx_status",e)},expression:"form.ngx_status"}},[t._v("关闭")])],1),a("el-collapse",{staticStyle:{"margin-left":"60px",width:"60%"}},[a("el-collapse-item",{attrs:{title:"集群配置"}},[a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:3}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[t._v("集群配置:")])]),a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{"line-height":"40px",float:"left"}},[a("el-radio",{attrs:{label:"Master"},model:{value:t.form.autoSync.state,callback:function(e){t.$set(t.form.autoSync,"state",e)},expression:"form.autoSync.state"}},[t._v("Master")]),a("el-radio",{attrs:{label:"Slave"},model:{value:t.form.autoSync.state,callback:function(e){t.$set(t.form.autoSync,"state",e)},expression:"form.autoSync.state"}},[t._v("Slave")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.autoSync.state,callback:function(e){t.$set(t.form.autoSync,"state",e)},expression:"form.autoSync.state"}},[t._v("Off")])],1)]),a("el-col",{attrs:{span:13}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" Master:主配,Slave:从机,Off:单机")])])],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:3}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[t._v("集群同步周期:")])]),a("el-col",{attrs:{span:8}},[a("el-input",{model:{value:t.form.autoSync.timeAt,callback:function(e){t.$set(t.form.autoSync,"timeAt",e)},expression:"form.autoSync.timeAt"}})],1),a("el-col",{attrs:{span:13}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 集群模式下规则同步时间周期")])])],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:3}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[t._v("Master IP:")])]),a("el-col",{attrs:{span:8}},[a("el-input",{model:{value:t.form.autoSync.master,callback:function(e){t.$set(t.form.autoSync,"master",e)},expression:"form.autoSync.master"}})],1),a("el-col",{attrs:{span:13}},[a("label",{staticStyle:{float:"left","line-height":"40px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 集群模式下主服务器的IP")])])],1),a("el-form-item",[a("el-col",{attrs:{span:18}}),a("el-col",{attrs:{span:6}},[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("Slave IPs:")]),a("el-input",{staticStyle:{"min-width":"200px",width:"600px"},attrs:{type:"textarea",rows:"8",placeholder:"集群模式下，主服务器需要进行配置从服务器的ip列表"},model:{value:t.slaves,callback:function(e){t.slaves=e},expression:"slaves"}})],1)],1)],1),a("el-collapse-item",{attrs:{title:"Redis配置"}},[a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:7}},[a("label",[t._v("Redis配置:")]),a("el-radio",{staticStyle:{"margin-left":"20px"},attrs:{label:"on"},model:{value:t.form.redis_Mod.state,callback:function(e){t.$set(t.form.redis_Mod,"state",e)},expression:"form.redis_Mod.state"}},[t._v("开启")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.redis_Mod.state,callback:function(e){t.$set(t.form.redis_Mod,"state",e)},expression:"form.redis_Mod.state"}},[t._v("关闭")])],1),a("el-col",{attrs:{span:17}},[a("label",{staticStyle:{"margin-left":"20px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("集群模式下，Redis是否使用开关")])])],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:8}},[a("label",[t._v("IP: ")]),a("el-input",{staticStyle:{width:"200px","margin-left":"20px"},model:{value:t.form.redis_Mod.ip,callback:function(e){t.$set(t.form.redis_Mod,"ip",e)},expression:"form.redis_Mod.ip"}})],1),a("el-col",{attrs:{span:16}})],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:8}},[a("label",[t._v("Port: ")]),a("el-input",{staticStyle:{width:"200px","margin-left":"20px"},model:{value:t.form.redis_Mod.Port,callback:function(e){t.$set(t.form.redis_Mod,"Port",e)},expression:"form.redis_Mod.Port"}})],1),a("el-col",{attrs:{span:16}})],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-col",{attrs:{span:8}},[a("label",[t._v("密码:")]),a("el-input",{staticStyle:{width:"200px","margin-left":"20px"},model:{value:t.form.redis_Mod.Password,callback:function(e){t.$set(t.form.redis_Mod,"Password",e)},expression:"form.redis_Mod.Password"}})],1),a("el-col",{attrs:{span:16}})],1)],1),a("el-collapse-item",{attrs:{title:"本地日志设置"}},[a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("本地日志:")]),a("el-radio",{attrs:{label:"on"},model:{value:t.form.log_onLocal.state,callback:function(e){t.$set(t.form.log_onLocal,"state",e)},expression:"form.log_onLocal.state"}},[t._v("开启")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.log_onLocal.state,callback:function(e){t.$set(t.form.log_onLocal,"state",e)},expression:"form.log_onLocal.state"}},[t._v("关闭")])],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("路径配置:")]),a("el-input",{staticStyle:{width:"50%","margin-right":"50px","margin-left":"20px"},model:{value:t.form.log_onLocal.path,callback:function(e){t.$set(t.form.log_onLocal,"path",e)},expression:"form.log_onLocal.path"}})],1),a("el-form-item",[a("el-col",{attrs:{span:12}},[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("日志格式化配置:")]),a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("ngx_localtime(时间)")]),a("p",[t._v("remoteIp(直连ip)")]),a("p",[t._v("host")]),a("p",[t._v("ip(从header头取的用户ip)")]),a("p",[t._v("method(请求的方法)")]),a("p",[t._v("server_protocol(协议和版本)")]),a("p",[t._v("status(状态)")]),a("p",[t._v("request_uri(请求的完整url，包含get的args参数)")]),a("p",[t._v("useragent,referer,cookie")]),a("p",[t._v("ip(从header头取的用户ip)")]),a("p",[t._v("query_string(get的args参数)")]),a("p",[t._v("headers_data(整个请求头，http2 时为空)")]),a("p",[t._v("args_data(所有get参数的值)")]),a("p",[t._v("posts_data(所有post参数的值)")]),a("p",[t._v("body_bytes_sent(返回内容长度)")]),a("p",[t._v("waf_log(waf产生的拦截信息)")])]),a("el-input",{staticStyle:{"min-width":"200px",width:"600px"},attrs:{type:"textarea",rows:"8"},model:{value:t.log_onLocal_format_tb,callback:function(e){t.log_onLocal_format_tb=e},expression:"log_onLocal_format_tb"}})],1)],1),a("el-col",{attrs:{span:12}},[a("label",{staticStyle:{"margin-left":"20px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("日志格式化支持的变量")])])],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("连接符:")]),a("el-input",{staticStyle:{width:"50%","margin-right":"50px","margin-left":"20px"},model:{value:t.form.log_onLocal.tb_concat,callback:function(e){t.$set(t.form.log_onLocal,"tb_concat",e)},expression:"form.log_onLocal.tb_concat"}})],1)],1),a("el-collapse-item",{attrs:{title:"API鉴权设置"}},[a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("API鉴权:")]),a("el-radio",{attrs:{label:"on"},model:{value:t.form.api_sign.state,callback:function(e){t.$set(t.form.api_sign,"state",e)},expression:"form.api_sign.state"}}),a("el-radio",{attrs:{label:"off"},model:{value:t.form.api_sign.state,callback:function(e){t.$set(t.form.api_sign,"state",e)},expression:"form.api_sign.state"}})],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("检查Master IP:")]),a("el-radio",{attrs:{label:"on"},model:{value:t.form.api_sign.checkMaster,callback:function(e){t.$set(t.form.api_sign,"checkMaster",e)},expression:"form.api_sign.checkMaster"}},[t._v("检查")]),a("el-radio",{attrs:{label:"off"},model:{value:t.form.api_sign.checkMaster,callback:function(e){t.$set(t.form.api_sign,"checkMaster",e)},expression:"form.api_sign.checkMaster"}},[t._v("不检查")])],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("检查算法:")]),a("el-select",{staticClass:"col-sm-4",staticStyle:{width:"350px","margin-right":"20px"},model:{value:t.form.api_sign.authority.alg,callback:function(e){t.$set(t.form.api_sign.authority,"alg",e)},expression:"form.api_sign.authority.alg"}},[a("el-option",{attrs:{value:"MD5"}},[t._v("MD5")]),a("el-option",{attrs:{value:"HS256"}},[t._v("HS256")]),a("el-option",{attrs:{value:"HS512"}},[t._v("HS512")])],1),a("label",{staticStyle:{"margin-left":"20px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("算法支持MD5/HS256/HS512")])],1),a("el-form-item",[a("el-col",{attrs:{span:12}},[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("格式化配置:")]),a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\thttp_time(从http头中取的时间字段 time) uri(请求的uri) "),a("br"),t._v(" \n\t\t\t\t\t\t\t\t\t\t\t\t\tuseragent,referer,cookie等 常量(自定义的常量，用于增加算法碰撞复杂度)\n\t\t\t\t\t\t\t\t\t\t\t\t")]),a("el-input",{staticStyle:{"min-width":"200px",width:"600px"},attrs:{type:"textarea",rows:"8"},model:{value:t.authority_format_tb,callback:function(e){t.authority_format_tb=e},expression:"authority_format_tb"}})],1)],1),a("el-col",{attrs:{span:12}},[a("label",{staticStyle:{"margin-left":"20px"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("格式化变量")])])],1),a("el-form-item",[a("label",{staticStyle:{"margin-right":"20px"}},[t._v("密钥:")]),a("el-input",{staticStyle:{width:"50%","margin-right":"50px","margin-left":"20px"},model:{value:t.form.api_sign.authority.key,callback:function(e){t.$set(t.form.api_sign.authority,"key",e)},expression:"form.api_sign.authority.key"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],s={data:function(){return{activeName:"first",form:{baseDir:"",logPath:"",jsonPath:"",htmlPath:"",denyMsg:{state:"",msg:"",http_code:""},Mod_state:"",ngx_status:"",autoSync:{slaves:[],timeAt:"",state:"",master:""},redis_Mod:{ip:"",Password:"",state:"",Port:""},log_onLocal:{tb_concat:" ",format_tb:[],path:"",state:""},api_sign:{checkMaster:"",authority:{alg:"",format_tb:[],header_name:"",key:""},state:""},network_Mod:"",cookie_Mod:"",replace_Mod:"",debug_Mod:"",host_method_Mod:"",uri_Mod:"",rewrite_Mod:"",realIpFrom_Mod:"",args_Mod:{state:"",HPP_state:""},ip_Mod:"",referer_Mod:"",header_Mod:"",log_onRemote:{host:"",state:"",sendBufferSize:"",socketType:"",worker_sleep_time:"",port:"",tb_concat:" ",format_tb:[],worker_deal_limit:""},useragent_Mod:"",post_form:"",app_Mod:"",post_Mod:{state:"",HPP_state:""}},slaves:"",log_onLocal_format_tb:"",authority_format_tb:"",showVisible:!1,fullscreen:!0}},mounted:function(){this.initConfig()},methods:{saveRule:function(){var t=this.secReq(this.api.save2js,"post",{action:"save",mod:"all_Mod"});t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},initConfig:function(){var t,e;t={action:"get",mod:"base"},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?(this.form=e.msg,this.slaves=JSON.stringify(this.form.autoSync.slaves),this.log_onLocal_format_tb=JSON.stringify(this.form.log_onLocal.format_tb),this.authority_format_tb=JSON.stringify(this.form.api_sign.authority.format_tb)):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})},previewScope:function(){this.showVisible=!0},setConfig:function(){var t,e;this.form.autoSync.slaves=JSON.parse(this.slaves),this.form.log_onLocal.format_tb=JSON.parse(this.log_onLocal_format_tb),this.form.api_sign.authority.format_tb=JSON.parse(this.authority_format_tb),this.form.denyMsg.http_code?this.form.denyMsg.http_code=parseInt(this.form.denyMsg.http_code):delete this.form.denyMsg.http_code;var a=JSON.stringify(this.form);t={action:"set",mod:"base",value:a},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})}},components:{},watch:{$route:function(t,e){}}},i=s,r=a("2877"),n=Object(r["a"])(i,l,o,!1,null,null,null);e["default"]=n.exports}}]);