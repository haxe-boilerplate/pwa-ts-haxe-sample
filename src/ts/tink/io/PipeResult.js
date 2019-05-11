// Enum: tink.io.PipeResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var PipeResult = $hxEnums["tink.io.PipeResult"] = { __ename__ : "tink.io.PipeResult", __constructs__ : ["AllWritten","SinkEnded","SinkFailed","SourceFailed"]
  ,SourceFailed: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.io.PipeResult<tink.Error, tink.io.PipeResult.Out, tink.io.PipeResult.Result>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,SinkFailed: ($_=function(e,rest) { return {_hx_index:2,e:e,rest:rest,__enum__:"tink.io.PipeResult<tink.io.PipeResult.In, tink.Error, tink.io.PipeResult.Result>",toString:$estr}; },$_.__params__ = ["e","rest"],$_)
  ,SinkEnded: ($_=function(result,rest) { return {_hx_index:1,result:result,rest:rest,__enum__:"tink.io.PipeResult<tink.io.PipeResult.In, tink.io.PipeResult.Out, tink.io.PipeResult.Result>",toString:$estr}; },$_.__params__ = ["result","rest"],$_)
  ,AllWritten: {_hx_index:0,__enum__:"tink.io.PipeResult<tink.io.PipeResult.In, tink.io.PipeResult.Out, tink.io.PipeResult.Result>",toString:$estr}
};

exports.default = PipeResult;