// Enum: tink.io.ParseStep

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ParseStep = $hxEnums["tink.io.ParseStep"] = { __ename__ : "tink.io.ParseStep", __constructs__ : ["Progressed","Done","Failed"]
  ,Progressed: {_hx_index:0,__enum__:"tink.io.ParseStep<tink.io.ParseStep.Result>",toString:$estr}
  ,Failed: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseStep<tink.io.ParseStep.Result>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,Done: ($_=function(r) { return {_hx_index:1,r:r,__enum__:"tink.io.ParseStep<tink.io.ParseStep.Result>",toString:$estr}; },$_.__params__ = ["r"],$_)
};

exports.default = ParseStep;