// Enum: haxe.ds.Option

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Option = $hxEnums["haxe.ds.Option"] = { __ename__ : "haxe.ds.Option", __constructs__ : ["Some","None"]
  ,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option<haxe.ds.Option.T>",toString:$estr}; },$_.__params__ = ["v"],$_)
  ,None: {_hx_index:1,__enum__:"haxe.ds.Option<haxe.ds.Option.T>",toString:$estr}
};

exports.default = Option;