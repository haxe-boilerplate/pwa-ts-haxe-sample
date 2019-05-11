// Enum: tink.core.Outcome

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Outcome = $hxEnums["tink.core.Outcome"] = { __ename__ : "tink.core.Outcome", __constructs__ : ["Success","Failure"]
  ,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome<tink.core.Outcome.Data, tink.core.Outcome.Failure>",toString:$estr}; },$_.__params__ = ["data"],$_)
  ,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome<tink.core.Outcome.Data, tink.core.Outcome.Failure>",toString:$estr}; },$_.__params__ = ["failure"],$_)
};

exports.default = Outcome;