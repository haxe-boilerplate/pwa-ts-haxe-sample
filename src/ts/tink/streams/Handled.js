// Enum: tink.streams.Handled

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Handled = $hxEnums["tink.streams.Handled"] = { __ename__ : "tink.streams.Handled", __constructs__ : ["BackOff","Finish","Resume","Clog"]
  ,Resume: {_hx_index:2,__enum__:"tink.streams.Handled<tink.streams.Handled.Safety>",toString:$estr}
  ,Finish: {_hx_index:1,__enum__:"tink.streams.Handled<tink.streams.Handled.Safety>",toString:$estr}
  ,Clog: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.Handled<tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,BackOff: {_hx_index:0,__enum__:"tink.streams.Handled<tink.streams.Handled.Safety>",toString:$estr}
};

exports.default = Handled;