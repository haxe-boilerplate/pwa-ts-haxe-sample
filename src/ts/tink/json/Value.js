// Enum: tink.json.Value

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Value = $hxEnums["tink.json.Value"] = { __ename__ : "tink.json.Value", __constructs__ : ["VNumber","VString","VNull","VBool","VArray","VObject"]
  ,VString: ($_=function(s) { return {_hx_index:1,s:s,__enum__:"tink.json.Value",toString:$estr}; },$_.__params__ = ["s"],$_)
  ,VObject: ($_=function(a) { return {_hx_index:5,a:a,__enum__:"tink.json.Value",toString:$estr}; },$_.__params__ = ["a"],$_)
  ,VNumber: ($_=function(f) { return {_hx_index:0,f:f,__enum__:"tink.json.Value",toString:$estr}; },$_.__params__ = ["f"],$_)
  ,VNull: {_hx_index:2,__enum__:"tink.json.Value",toString:$estr}
  ,VBool: ($_=function(b) { return {_hx_index:3,b:b,__enum__:"tink.json.Value",toString:$estr}; },$_.__params__ = ["b"],$_)
  ,VArray: ($_=function(a) { return {_hx_index:4,a:a,__enum__:"tink.json.Value",toString:$estr}; },$_.__params__ = ["a"],$_)
};

exports.default = Value;