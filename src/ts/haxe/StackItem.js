// Enum: haxe.StackItem

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;

// Definition

var StackItem = $hxEnums["haxe.StackItem"] = { __ename__ : "haxe.StackItem", __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"]
  ,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["m"],$_)
  ,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["classname","method"],$_)
  ,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["v"],$_)
  ,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["s","file","line","column"],$_)
  ,CFunction: {_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
};

exports.default = StackItem;