// Enum: tink.streams.Step

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Step = $hxEnums["tink.streams.Step"] = { __ename__ : "tink.streams.Step", __constructs__ : ["Link","Fail","End"]
  ,Link: ($_=function(value,next) { return {_hx_index:0,value:value,next:next,__enum__:"tink.streams.Step<tink.streams.Step.Item, tink.streams.Step.Quality>",toString:$estr}; },$_.__params__ = ["value","next"],$_)
  ,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Step<tink.streams.Step.Item, tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,End: {_hx_index:2,__enum__:"tink.streams.Step<tink.streams.Step.Item, tink.streams.Step.Quality>",toString:$estr}
};

exports.default = Step;