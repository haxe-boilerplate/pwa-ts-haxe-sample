// Enum: tink.streams.Yield

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Yield = $hxEnums["tink.streams.Yield"] = { __ename__ : "tink.streams.Yield", __constructs__ : ["Data","Fail","End"]
  ,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Yield<tink.streams.Yield.Item, tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,End: {_hx_index:2,__enum__:"tink.streams.Yield<tink.streams.Yield.Item, tink.streams.Yield.Quality>",toString:$estr}
  ,Data: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.streams.Yield<tink.streams.Yield.Item, tink.streams.Yield.Quality>",toString:$estr}; },$_.__params__ = ["data"],$_)
};

exports.default = Yield;