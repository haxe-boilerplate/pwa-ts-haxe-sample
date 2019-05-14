// Enum: tink.http.ClientType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ClientType = $hxEnums["tink.http.ClientType"] = { __ename__ : "tink.http.ClientType", __constructs__ : ["Default","Local","Curl","StdLib","Custom"]
  ,StdLib: {_hx_index:3,__enum__:"tink.http.ClientType",toString:$estr}
  ,Local: ($_=function(container) { return {_hx_index:1,container:container,__enum__:"tink.http.ClientType",toString:$estr}; },$_.__params__ = ["container"],$_)
  ,Default: {_hx_index:0,__enum__:"tink.http.ClientType",toString:$estr}
  ,Custom: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"tink.http.ClientType",toString:$estr}; },$_.__params__ = ["v"],$_)
  ,Curl: {_hx_index:2,__enum__:"tink.http.ClientType",toString:$estr}
};

exports.default = ClientType;