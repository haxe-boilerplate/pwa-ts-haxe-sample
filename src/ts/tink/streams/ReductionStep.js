// Enum: tink.streams.ReductionStep

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ReductionStep = $hxEnums["tink.streams.ReductionStep"] = { __ename__ : "tink.streams.ReductionStep", __constructs__ : ["Progress","Crash"]
  ,Progress: ($_=function(result) { return {_hx_index:0,result:result,__enum__:"tink.streams.ReductionStep<tink.streams.ReductionStep.Safety, tink.streams.ReductionStep.Result>",toString:$estr}; },$_.__params__ = ["result"],$_)
  ,Crash: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.ReductionStep<tink.Error, tink.streams.ReductionStep.Result>",toString:$estr}; },$_.__params__ = ["e"],$_)
};

exports.default = ReductionStep;