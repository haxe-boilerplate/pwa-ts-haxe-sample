// Enum: tink.streams.RegroupResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var RegroupResult = $hxEnums["tink.streams.RegroupResult"] = { __ename__ : "tink.streams.RegroupResult", __constructs__ : ["Converted","Terminated","Untouched","Errored"]
  ,Untouched: {_hx_index:2,__enum__:"tink.streams.RegroupResult<tink.streams.RegroupResult.Out, tink.streams.RegroupResult.Quality>",toString:$estr}
  ,Terminated: ($_=function(data) { return {_hx_index:1,data:data,__enum__:"tink.streams.RegroupResult<tink.streams.RegroupResult.Out, tink.streams.RegroupResult.Quality>",toString:$estr}; },$_.__params__ = ["data"],$_)
  ,Errored: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.RegroupResult<tink.streams.RegroupResult.Out, tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,Converted: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.streams.RegroupResult<tink.streams.RegroupResult.Out, tink.streams.RegroupResult.Quality>",toString:$estr}; },$_.__params__ = ["data"],$_)
};

exports.default = RegroupResult;