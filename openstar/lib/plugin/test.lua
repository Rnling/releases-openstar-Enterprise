
-- 非线上 master 版本使用
local ngx_say = ngx.say


local _M      = { _VERSION = "0.01" }
local function test(_base_msg , _tb_args)
     local re = ""
     for i,v in ipairs(_tb_args) do
         re = re + v + "</br>"
     end
     ngx_say(re)
end
_M.test = test
return _M