// Enum: haxe.ds.Either

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Either = $hxEnums["haxe.ds.Either"] = { __ename__ : "haxe.ds.Either", __constructs__ : ["Left","Right"]
  ,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either<haxe.ds.Either.L, haxe.ds.Either.R>",toString:$estr}; },$_.__params__ = ["v"],$_)
  ,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either<haxe.ds.Either.L, haxe.ds.Either.R>",toString:$estr}; },$_.__params__ = ["v"],$_)
};

exports.default = Either;