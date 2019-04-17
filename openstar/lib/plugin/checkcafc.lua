
local type = type
local ipairs = ipairs
local pairs = pairs
local stool = require("stool")

local ngx_unescape_uri = ngx.unescape_uri
local ngx_var          = ngx.var
local ngx_say          = ngx.say
local ngx_md5          = ngx.md5
local table_insert     = table.insert
local table_concat     = table.concat

local _M               = { _VERSION = "0.01" }

--- 算法计算
local function sign_check(_base_msg , _tb_args)
    -- _tb_args 对于参数 需要调用者特别注意
    -- eg: [_header_name,_alg,_format_tb]
    local _header_name = _tb_args[1]
    if type(_header_name) == "nil" then return end
    local client_alg = ngx_var[_header_name]
    if not client_alg then
        ngx_say("sign check error~!")
        return "break"
    end

    local _alg = _tb_args[2]
    if _alg == "md5" then
        local re_log_tb = {}
        for i,v in ipairs(_tb_args) do
            if i > 2 then
                local _req_value
                if stool.stringStarts(v,"$http_") then
                    -- $http_ 类型的 head 头参数，没有 则使用 "" 替代
                    _req_value = ngx_unescape_uri(ngx_var[string.sub(v,2,#v)])
                    table_insert(re_log_tb,_req_value)
                elseif stool.stringStarts(v,"$") then
                    -- ${v} 类型的 request 请求参数，没有则使用 v 本身替代
                    _req_value = _base_msg[string.sub(v,2,#v)] or v
                    table_insert(re_log_tb,_req_value)
                else
                    table_insert(re_log_tb,v)
                end
            end
        end
        local _str = table_concat(re_log_tb, "")
        local str_md5 = ngx_md5(_str)
        if str_md5 ~= client_alg then
            ngx_say("sign check error~!")
            return "break"
        end
    end
end

_M.sign_check = sign_check

return _M