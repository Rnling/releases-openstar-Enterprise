
-- 非线上 master 版本使用
local ngx_say = ngx.say
local ngx_md5 = ngx.md5
local http    = require "resty.http"
local stool   = require "stool"

local _M      = { _VERSION = "0.01" }
local function cap(_base_msg , _tb_args)
     local AppID = _tb_args[1] or "xxx"
     local AppSecret = _tb_args[2] or "xxxx"
     if _base_msg.method ~= "POST" then
        --ngx_say(stool.tableTojsonStr(_base_msg))
        -- 可以在 app_ext 规则中进行检查
        return "break"
     end
     local form_name = _tb_args[3] or 'verify_token'
     local token = _base_msg.posts[form_name]
     if not token then
        ngx_say("form token error!")
        return "break"
     end
     local arr = stool.split(token,":")
     local constId = ""
     if #arr == 2 then
        constId = arr[2]
     end
     local _str    = AppSecret..arr[1]..AppSecret
     local sign = ngx_md5(_str)
     local _httpc = http.new()
     local _url   = "http://cap.dingxiang-inc.com/api/tokenVerify"
     local re,err =  _httpc:request_uri(_url , {
            method = "GET",
            query = {
                     appKey=AppID,
                     token=arr[1],
                     constId=constId,
                     sign=sign
                    }
        })
     if not re then
        ngx_say(err)
        return "break"
     elseif re.status ~= 200 then
        ngx_say(re.status,re.reason)
        return "break"
     else -- 验证合法
        -- ngx_say(re.body)
        -- return "break"
        return
     end
end
_M.cap = cap
return _M