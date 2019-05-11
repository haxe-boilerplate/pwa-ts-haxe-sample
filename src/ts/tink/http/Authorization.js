// Enum: tink.http.Authorization

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Authorization = $hxEnums["tink.http.Authorization"] = { __ename__ : "tink.http.Authorization", __constructs__ : ["Basic","Bearer","Others"]
  ,Others: ($_=function(scheme,param) { return {_hx_index:2,scheme:scheme,param:param,__enum__:"tink.http.Authorization",toString:$estr}; },$_.__params__ = ["scheme","param"],$_)
  ,Bearer: ($_=function(token) { return {_hx_index:1,token:token,__enum__:"tink.http.Authorization",toString:$estr}; },$_.__params__ = ["token"],$_)
  ,Basic: ($_=function(user,pass) { return {_hx_index:0,user:user,pass:pass,__enum__:"tink.http.Authorization",toString:$estr}; },$_.__params__ = ["user","pass"],$_)
};

exports.default = Authorization;