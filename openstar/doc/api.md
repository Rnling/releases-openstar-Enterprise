
API相关介绍：

# 基本使用

  相关API在单独的server中，即ip:5460,那么对于接口就是`http://ip:5460/api/xxx`

# 返回值介绍

返回值都是json序列化之后的字符串，其中包含`code`字段，代表api执行的成功与否。
- code=ok 
执行成功，此时如果执行的是查询类的api，则在结果中包含所需要看到的内容。

- code=error
执行失败，此时包含`msg`字段，用来返回错误信息。

# 模块介绍

 - base
 表示基本配置，参考readme.md的说明即可

 - realIpFrom_Mod
 表示配置设置从http头中获取用户真实IP

 - ip_Mod
 ip过滤模块

 - host_method_Mod
 host && method 过滤模块

 - rewrite_Mod
 跳转规则模块 set-cookie

 - host_Mod
 对应host执行的规则过滤（url,referer,useragent,network）

 - app_Mod
 自定义应用规则模块

 - referer_Mod
 referer过滤模块

 - url_Mod
 url过滤模块

 - header_Mod
 header过滤模块

 - useragent_Mod
 useragent过滤模块

 - cookie_Mod
 cookie过滤模块

 - args_Mod
 get参数过滤模块

 - post_Mod
 post参数过滤模块

 - network_Mod
 网络层连接频率限制模块

 - replace_Mod
 返回内容替换模块

 - denyMsg
 应用层拒绝访问时，显示的内容配置

# /api/json_config

  配置文件操作

  - reload action=reload 重新载入所有配置

  ```
  /api/json_config?action=reload
  ```

  - save action=save 保存当前配置

  将当前内存中的配置保存到配置文件

  ```
  /api/json_config?action=save&mod=[参数1]&debug=[参数2]
  mod=all_mod --- 表示保存所有配置模块,以及针对host的过滤规则
  mod=[base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/host_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]
  ```
  成功返回: 
  ```   
      {
      code: "ok",
      msg: "reload ok"
      }

  ```
   2. 保存当前配置
     （将当前内存中的配置保存到配置文件）
      ```
      /api/config?action=save&mod=[参数1]&debug=[参数2]
      mod=all_mod --- 表示保存所有配置模块,以及针对host的过滤规则
      mod=[base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/host_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]

      debug=no --- 表示关闭调试，即会覆盖模块对应的配置文件，默认是在对应目录中新建一个对应bak文件

      EG：保存cookie_Mod到对应json文件中
      /api/config?action=save&mod=cookie_Mod
      成功返回:
      {
      code: "ok",
      msg: "[{"state":"on","cookie":["\\.\\.\/","jio"],"hostname":["*",""],"action":"deny"}]",
      debug: ""
      }

      失败返回:
      {
      code: "error",
      msg: "[{"state":"on","cookie":["\\.\\.\/","jio"],"hostname":["*",""],"action":"deny"}]",
      debug: ""
      }

      ```

# /api/config_dict

  配置操作

   - 增 action=add

   ```
   /api/config_dict?action=add&mod=[参数1]&id=[参数2]&value=[参数3]&value_type=[参数4]
   mod=[realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]
   ```

   id=[仅当mod=realIpFrom_Mod/denyMsg时使用]，realIpFrom_Mod的序列不是数字，而是host。
   value=[增加的内容]
   value_type=[json] 表示传递的value是一个json,其余当做字符串
   
   EG:
   /api/config_dict?action=add&mod=args_Mod&value_type=json&value={"state":"on","action":"deny","hostname":["*",""],"args":["select.+(from)","jio"]}
   
   /api/config_dict?action=add&mod=realIpFrom_Mod&id=101.200.122.200&value_type=json&value={"ips":["*",""],"realipset":"x-for-f"}
   
    返回：

  ```
   {"code":"ok","value":[value],"mod":[mod]}   ---- 正常
   {"code":"error",msg:"错误原因"} ---- 错误等
   ```

   - 删 action=del

   ```
    /api/config_dict?action=del&mod=[参数1]&id=[参数2]
    mod=[realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]
  ```

    id=[需要删除的id]
    
    EG:
    /api/config_dict?action=del&mod=realIpFrom_Mod&id=101.200.122.200
    
    /api/config_dict?action=del&mod=args_Mod&id=2
    
    返回：
    
   ```
    {"code":"ok","mod":mod,"id":id}  ---- 正常
    {"code":"error",msg:"错误原因"} ---- 错误等
    
   ```

   - 改 action=set

   ```
   /api/config_dict?action=set&mod=[参数1]&id=[参数2]&value=[参数3]&value_type=[参数4]
    mod=[base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]
    id=[需要修改的id] ，id没有表示修改整个mod
    value=[修改后的内容]，如果是json，需要标记value_type
    value_type=[json]，默认是为字符串
    ```
    EG:
    /api/config_dict?action=set&mod=post_Mod&id=1&value_type=json&value={"state":"on","action":"log","post":["\\.\\.\/","jio"],"hostname":["*",""]}
    
   /api/config_dict?action=set&mod=base&id=replace_Mod&value=on
   
   /api/config_dict?action=set&mod=realIpFrom_Mod&id=101.200.122.200:5460&value_type=json&value={"ips":["*",""],"realipset":"v-realip-from"}
    
    返回：
    
    ```
    {"new_value":value,"code":true,"old_value":"原id的值"} ---- 正常
    {"code":"error","msg":"错误原因"} ---- 错误等
   ```

   - 查 action=get
   
   ```
   /api/config_dict?action=get&mod=[参数1]&id=[参数2]
   
   mod=all_mod -- 表示显示所有模块
   mod=count_mod -- 显示模块个数
   mod=空  -- 显示所有模块名称
   mod=[base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg]
    id=空 -- 显示模块所有内容和状态
    id=count_id -- 显示对应模块的id个数
    id=[其他] -- 显示对应模块指定id的内容
   ```
   
    EG:
    GET /api/config_dict?action=get&mod=args_Mod
    
    GET /api/config_dict?action=get&mod=all_mod
    
    GET /api/config_dict?action=get&mod=args_Mod&id=1
    
    GET /api/config_dict?action=get&mod=args_Mod&id=count_id
  
# /api/ip_dict
  ip黑白名单操作(大小写敏感)
   
 - 增 action=add
 
 ```
 /api/ip_dict?action=add&ip=[参数1]&value=[参数2]&time=[参数3]
 time = [默认为0]
 value = [默认为deny]
 ```
 
 EG：
 /api/ip_dict?action=add&ip=101.200.122.200&value=deny&time=10
 
 /api/ip_dict?action=add&ip=www.baidu.com-101.200.122.200&value=allow&time=10
 
 返回：
 
 ```

 {"code":"ok","ip":$ip,"value":$value} -- 正常

 {"code"="error","msg"="错误原因"}      -- 错误等

 ```

 - 删 action=del
 
 ```
 /api/ip_dict?action=del&ip=[参数1]
 ```
 
 EG:
 /api/ip_dict?action=del&ip=114.111.166.9
 
 返回：
 
 ```

 {"code":"ok",ip:$ip} -- 正常

 {"code"="error","msg"="错误原因"}      -- 错误等

 ```

 - 改 action=set
 
 ```

 /api/ip_dict?action=set&ip=[参数1]&value=[参数2]&time=[参数3]

 time = [默认为0]
 value = [默认为deny]

 ```
 
 EG:
 /api/ip_dict?action=set&ip=127.0.0.1
 /api/ip_dict?action=set&ip=127.0.0.1&value=allow&time=0
 
 返回：
 
 ```

 {"ip":$ip,"code":"ok","value":value}  -- 正常

 {"ip":$ip"code":"error","value":value} -- 错误等

 {code="error",msg="错误原因"}

 ```

 - 查 action=get
 
 ```

 /api/ip_dict?action=get&ip=[参数1]

 ip=all_ip -- 表示显示所有内容

 ip=count_ip -- 显示ip个数

 ip=空  -- 显示1024个ip名称

 ip=[其他] -- 显示对应ip的值

 
 ```
 
# /api/read_dict
  字典查询接口
   
 - 查 action=get
   
   ```

    /api/read_dict?action=get&dict=[参数1]&id=[参数2]
    dict=[config_dict/count_dict/limit_ip_dict/token_dict/ip_dict]
    id=all_id -- 显示对应字典所有的key和value
    id=count_id -- 显示个数
    id=空  -- 显示对应字典所有key名称
    id=[其他key] -- 显示指定key的内容
    EG:
    /api/read_dict?action=get&dict=count_dict&id=all_id
    
    错误:{"code":"error","msg":"error info"}

   ```

# /api/redis

  redis相关操作
  
  - set key action=set
  
  ```

  /api/redis?action=set&key=[参数1]&value=[参数2]

  ```

  EG:
  /api/redis?action=set&key=aaa&value=ijdkdn

  注：如果是推送配置请使用push
  可作为redis调试使用
  

  - get key action=get
  
  ```

  /api/redis?action=get&key=[参数1]

  ```

  注：可查询远程模块配置情况
  key=[*/redis db 0 中任何key]

    成功返回：{"code":"ok","key":"aaa1ddd","value":"dddddddddddd"}
    失败返回：{"code":"error","msg":"error info"}


  - push 推送本地配置到redis action=push

    ```

        /api/redis?action=push&key=[参数1]
        key=config_dict  -- 表示将本地 config_dict字典 配置推送到redis
        返回：
        ["name1":ok,"name2":ok,...]   -- 表示对应name 操作正常

        成功返回：{"code":"ok","msg":{"useragent_Mod":"OK","app_Mod":"OK","replace_Mod":"OK","denyMsg":"OK","rewrite_Mod":"OK","args_Mod":"OK","network_Mod":"OK","referer_Mod":"OK","host_method_Mod":"OK","header_Mod":"OK","realIpFrom_Mod":"OK","base":"OK","cookie_Mod":"OK","url_Mod":"OK","post_Mod":"OK"}}
        失败返回：{"code":"error","msg":"error info"}


        key=count_dict   -- 表示将本地的 count_dict字典 计数信息推送到redis
        成功返回：{"code":"ok","msg":0}
        失败返回：{"code":"error","msg":"error info"}

        key=ip_dict      -- 表示将本地的 ip_dict字典 永久的IP黑白名单推送到redis db 1中
        成功返回：{"code":"ok","msg":{"www.g.com-123.125.26.23":"OK","127.0.0.1":"OK","114.111.166.9":"OK"}}
        失败返回：{"code":"error","msg":"error info"}

        key=host_dict     -- 表示将本地的 host_dict字典 推送到redis 对应host执行的规则过滤,一个key为host_Mod,其余以%host%_HostMod命名

        成功返回：{"code":"ok","msg":{"www.game.com_HostMod":"OK","101.200.122.200_HostMod":"OK","127.0.0.1_HostMod":"OK","host_Mod":"OK","pass.game.com_HostMod":"OK"}}
        失败返回：{"code":"error","msg":"error info"}

        key=[base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg] -- 表示推送本地 config_dict字典 指定key到redis
        成功返回：{"code":"ok","msg":"OK"}
        失败返回：{"code":"error","msg":"error info"}

        EG:
        /api/redis?action=push&key=config_dict
        /api/redis?action=push&key=count_dict
        /api/redis?action=push&key=host_dict
        /api/redis?action=push&key=ip_dict -- 该数据存到 db 1 中，其他都在 默认 0 中
        /api/redis?action=push&key=base
    ```

  - pull 拉取redis配置到本地 action=pull

    ```
    /api/redis?action=pull&key=[参数1]
    key = config_dict  -- 表示拉取所有配置到本地
    成功返回：{"code":"ok","msg":{"useragent_Mod":true,"app_Mod":true,"replace_Mod":true,"denyMsg":true,"rewrite_Mod":true,"args_Mod":true,"network_Mod":true,"referer_Mod":true,"host_method_Mod":true,"header_Mod":true,"realIpFrom_Mod":true,"base":true,"cookie_Mod":true,"url_Mod":true,"post_Mod":true}}
    失败返回：{"code":"error","msg":"error info"}

    key = host_dict    -- 表示拉取host_Mod数据到host_dict中
    成功返回：{"code":"ok","msg":{"www.game.com_HostMod":true,"101.200.122.200":true,"127.0.0.1_HostMod":true,"www.game.com":true,"pass.game.com_HostMod":true,"pass.game.com":true,"101.200.122.200_HostMod":true,"127.0.0.1":true,"flush_expired":5}}
    失败返回：{"code":"error","msg":"error info"}

    key = ip_dict    -- 表示拉取ip名单列表ip_dict中 包含ttl信息
    成功返回：{"code":"ok","msg":{"114.111.166.9":true,"www.g.com-1.1.1.1":true,"127.0.0.1":true,"www.g.com-123.125.26.23":true}}
    失败返回：{"code":"error","msg":"error info"}

    key = [base/realIpFrom_Mod/host_method_Mod/rewrite_Mod/app_Mod/referer_Mod/url_Mod/header_Mod/useragent_Mod/cookie_Mod/args_Mod/post_Mod/network_Mod/replace_Mod/denyMsg] -- 表示拉取指定模块到本地
    成功返回：{"code":"ok","msg":{"new_value":"[{\"state\":\"on\",\"cookie\":[\"\\\\.\\\\.\\\/\",\"jio\"],\"hostname\":[\"*\",\"\"],\"action\":\"deny\"}]","replace":true,"key":"cookie_Mod","old_value":"[{\"state\":\"on\",\"cookie\":[\"\\\\.\\\\.\\\/\",\"jio\"],\"hostname\":[\"*\",\"\"],\"action\":\"deny\"}]"}}
    失败返回：{"code":"error","msg":"error info"}

    EG:
    /api/redis?action=pull&key=config_dict
    /api/redis?action=pull&key=host_dict
    /api/redis?action=pull&key=ip_Mod
    /api/redis?action=pull&key=app_Mod/base

    ```
 
# /api/token_dict

 token相关操作
 
 - get action=get
   
   ```
   /api/token_dict?action=get&token=[参数1]
   token=count_token -- 获取token数量
   token=all_token   -- 获取所有内容
   token=空       -- 获取所有token名称
   token=[其他]   -- 获取指定token的值
   
   EG:
   /api/token_dict?action=get&token=all_token
   成功返回：{"codokie_Mod":true,"XnqjkRyBnw-VOyfvFkOAB":true}
   失败返回：{"code":"error","msg":"error info"}

   /api/token_dict?action=get&token=count_token
   成功返回：{"count_id":2}
   失败返回：{"code":"error","msg":"error info"}

   /api/token_dict?action=get&token=aaa
   成功返回：{"code":"ok","token":"XnqjkRyBnw-VOyfvFkOAB"}
   失败返回：{"code":"error","msg":"error info"}
   
   ```
 - set action=set
   
   ```
   /api/token_dict?action=set&token=[参数1]
   token=[默认系统生成随机字符串]
   
   EG：
   /api/token_dict?action=set&token=asdfasdfweewew
   成功返回：{"code":"ok","token":"3egqQ3950R-6f20B48F5b"}
   失败返回：{"code":"error","msg":"error info"}
   
   ```
   
# /api/nginx_config
  对https类型域名的nginx配置文件、证书、key的设置
  `POST`方法，header中的`Content type`要设置为`application/x-www-form-urlencoded`

   - get action=get
   
  sep1: 获取所有的domain名称列表信息:
  ```$xslt
  /api/nginx_config?action=get
  ```

  sep2: 获取某个域名的目录下配置文件列表信息:
  ```$xslt
  ／api/nginx_config?action=get&domain=xxx
  ```

  sep3: 获取某个域名的目录下配置文件内容信息, `detail`字段制定内容为上例中配置文件列表信息中的某一个:
  ```$xslt
  /api/nginx_config?action=get&domain=xxx&detail=server.cert
  ```


   - set mod=conf 设置某个域名的nginx配置文件

  sep1: 设置80端口的http类型:
  ```$xslt
  /api/nginx_config?action=set&domain=www.baidu.com&mod=conf&
  &server_listen=80&upstream_hosts=1.1.1.1:80,2.2.2.2:443
  &upstream_backups=3.3.3.3,4.4.4.4
  ```
  注: upstream_backup为设置upstream中的backup的主机

  sep2: ssl=on 设置443端口的https类型，未开启双向认证:
  ```$xslt
  /api/nginx_config?action=set&domain=www.baidu.com&mod=conf&
  &server_listen=443&upstream_hosts=1.1.1.1:80,2.2.2.2:443
  &upstream_backups=3.3.3.3,4.4.4.4&ssl=on
  ```
  sep3: ssl=on verify_client=on 设置443端口的https类型，开启双向认证:
  ```$xslt
  /api/nginx_config?action=set&domain=www.baidu.com&mod=conf&
  &server_listen=443&upstream_hosts=1.1.1.1:80,2.2.2.2:443
  &upstream_backups=3.3.3.3,4.4.4.4&ssl=on&verify_client=on
  ```

  - set mod=cert 设置某个域名的证书文件

  设置域名的server证书、server私钥以及client证书:
  ```$xslt
  /api/nginx_config?action=set&domain=www.baidu.com&mod=cert&
  &server_cert=xxx&server_key=xxx&client_cert=xxx
  ```
  注: server_cert、server_key、client_cert三个参数可以分别配置：
  ```$xslt
  /api/nginx_config?action=set&domain=www.baidu.com&mod=cert&server_cert=xxx
  /api/nginx_config?action=set&domain=www.baidu.com&mod=cert&server_key=xxx
  /api/nginx_config?action=set&domain=www.baidu.com&mod=cert&client_cert=xxx
  ```


   - delete 删除
   
  sep1: 删除某个域名相关的所有信息(包含所有nginx配置信息和证书信息): 
  ```$xslt
  /api/nginx_config?action=delete&domain=www.baidu.com
  ```

  sep2: detail=xxx 删除某个域名目录的某个文件:
  ```$xslt
  /api/nginx_config?action=delete&domain=www.baidu.com&detail=80.conf
  /api/nginx_config?action=delete&domain=www.baidu.com&detail=server.cert
  ```

   - reload action=reload 对nginx进行reload:
  ```$xslt
  /api/https_nginx_config?action=reload
  ```

   reload所有nginx的配置

# /api/post_redis

  `POST`方法，header中的`Content type`要设置为`application/x-www-form-urlencoded`

  nginx配置/证书的redis相关操作

  - action=get/set/delete 参考 `/api/nginx_conf` 的get/set/delete用法

  － action=push   将本地的nginx配置/证书文件写入redis，注意会覆盖redis中原有的nginx配置/证书数据

  - action=pull   将redis中的nginx配置/证书数据写入到本地文件系统，注意会覆盖本地文件系统中原有的nginx配置/证书数据

# /api/host_dict

   对应host执行的规则操作

  - 增 action=add

   ```
    api/host_dict?action=add&host=[参数1]&id=[参数2]&value_type=[参数3]&value=[参数4]
    1：添加一个host状态，后续才能添加其规则
    api/host_dict?action=add&host=www.abc.com&id=state&value=on
    value=默认 off
    成功返回：{"code":"ok","value":"on","id":"state"}
    失败返回：{"code":"error","msg":"error info"}

    2：添加一条规则
    api/host_dict?action=add&host=www.abc.com&value_type=json&value={"state":"on","action":["log","url"],"url":["\\.(css|txt)$","jio"]}
    value_type=默认 json
    成功返回：{"code":"ok","value":{"state":"on","action":["log","url"],"url":["\\.(css|txt)$","jio"]}}
    失败返回：{"code":"error","msg":"error info"}

    规则 EG: 
    正则 匹配url 动作：允许 
    value={"state":"on","action":["allow","url"],"url":["\\.(css|js|flv|swf|woff|txt)$","jio"]}
    
    包含 匹配referer 动作：记录
    {"state":"on","action":["log","referer"],"url":["\\.(gif|jpg|png|jpeg|bmp|ico)$","jio"],"referer":["hao123","in"]}

    包含 匹配useragent 动作：拒绝
    {"state":"on","action":["deny","useragent"],"useragent":["baidu","in"]}

    等于 匹配url and network阈值 动作：拒绝 （暂不能为其他动作）
    {"state":"on","action":["deny","network"],"url":["\/index.html",""],"network":{"blackTime":600,"maxReqs":30,"pTime":10}}

   ```
  - 删 action=del
    ```
     api/host_dict?action=del&host=[参数1]&id=[参数2]
     id就表示需要删除的哪一条规则记录，关于id，可以从get操作获取

     EG: api/host_dict?action=del&host=www.abc.com&id=1
     成功返回：{"code":"ok","value":{"state":"on","action":["log","url"],"url":["\\.(css|txt)$","jio"]},"id":1}
     失败返回：{"code":"error","msg":"error info"}

    ```
  - 改 action=set

   ```
   api/host_dict?action=set&host=[参数1]&id=[参数2]&value_type=[参数3]&value=[参数4]
   id=state   -- 表示修改 对应host的规则总开关
   value= 默认 off

   EG：api/host_dict?action=set&host=www.abc.com&id=state 表示修改该host的防护状态为off
   成功返回：{"host":"www.abc.com","code":"ok","state":"off"}
   失败返回：{"code":"error","msg":"error info"}


   id=[number] 表示修改 对应规则序号
   value_type=json  -- 表示 传递的value是一个json,默认是当做字符串
   value=[规则]

   EG：api/host_dict?action=www.abc.com&id=1&value_type=json&value={"state":"on","action":["log","url"],"url":["\\.(css|txt)$","jio"]}
   成功返回：{"new_value":{"state":"on","action":["deny","url"],"url":["\\.(css|txt)$","jio"]},"code":"ok","old_value":{"state":"on","action":["log","url"],"url":["\\.(css|txt)$","jio"]}}
   失败返回：{"code":"error","msg":"error info"}


   ```
  - 查 action=get

   ```
   api/host_dict?action=get&host=[参数1]&id=[参数2]

   host=all  -- 返回所有的host的规则

   host=all_host  -- 返回所有host规则的host名称

   host=[$host] -- 取对应host的规则,配置id参数
   id="" -- 返回对应host规则，包括状态，有序规则列表
   id=count_id -- 返回对应host规则，规则个数
   id=[number] -- 返回对应host规则中，指定id

   ```   
   
# /api/upgrade
  更新该waf上的openstar代码，并reload
  － update_config=on 代表将旧waf中的配置文件和规则删除。默认off代表会在更新代码之后保留原来的配置和规则。



