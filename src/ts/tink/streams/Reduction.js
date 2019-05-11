// Enum: tink.streams.Reduction

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Reduction = $hxEnums["tink.streams.Reduction"] = { __ename__ : "tink.streams.Reduction", __constructs__ : ["Crashed","Failed","Reduced"]
  ,Reduced: ($_=function(result) { return {_hx_index:2,result:result,__enum__:"tink.streams.Reduction<tink.streams.Reduction.Item, tink.streams.Reduction.Safety, tink.streams.Reduction.Quality, tink.streams.Reduction.Result>",toString:$estr}; },$_.__params__ = ["result"],$_)
  ,Failed: ($_=function(error) { return {_hx_index:1,error:error,__enum__:"tink.streams.Reduction<tink.streams.Reduction.Item, tink.streams.Reduction.Safety, tink.Error, tink.streams.Reduction.Result>",toString:$estr}; },$_.__params__ = ["error"],$_)
  ,Crashed: ($_=function(error,at) { return {_hx_index:0,error:error,at:at,__enum__:"tink.streams.Reduction<tink.streams.Reduction.Item, tink.Error, tink.streams.Reduction.Quality, tink.streams.Reduction.Result>",toString:$estr}; },$_.__params__ = ["error","at"],$_)
};

exports.default = Reduction;