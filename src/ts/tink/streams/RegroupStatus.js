// Enum: tink.streams.RegroupStatus

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var RegroupStatus = $hxEnums["tink.streams.RegroupStatus"] = { __ename__ : "tink.streams.RegroupStatus", __constructs__ : ["Flowing","Errored","Ended"]
  ,Flowing: {_hx_index:0,__enum__:"tink.streams.RegroupStatus<tink.streams.RegroupStatus.Quality>",toString:$estr}
  ,Errored: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.RegroupStatus<tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,Ended: {_hx_index:2,__enum__:"tink.streams.RegroupStatus<tink.streams.RegroupStatus.Quality>",toString:$estr}
};

exports.default = RegroupStatus;