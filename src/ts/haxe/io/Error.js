// Enum: haxe.io.Error

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Error = $hxEnums["haxe.io.Error"] = { __ename__ : "haxe.io.Error", __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"]
  ,Overflow: {_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
  ,OutsideBounds: {_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
  ,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,Blocked: {_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
};

exports.default = Error;