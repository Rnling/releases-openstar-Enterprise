
local checkcafc = require("plugin.checkcafc")


local Pub_func={ _VERSION = 0.1}

--- plugin  checkcafc.sign_check
--  用于检测 header 头中的 x-chj-cafc 算法碰撞是否合法
Pub_func.sign_check = checkcafc.sign_check


return Pub_func