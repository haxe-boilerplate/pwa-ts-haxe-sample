// Enum: tink.http.BodyPart

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var BodyPart = $hxEnums["tink.http.BodyPart"] = { __ename__ : "tink.http.BodyPart", __constructs__ : ["Value","File"]
  ,Value: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.http.BodyPart",toString:$estr}; },$_.__params__ = ["v"],$_)
  ,File: ($_=function(handle) { return {_hx_index:1,handle:handle,__enum__:"tink.http.BodyPart",toString:$estr}; },$_.__params__ = ["handle"],$_)
};

exports.default = BodyPart;