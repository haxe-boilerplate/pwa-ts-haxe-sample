// Enum: tink.http.IncomingRequestBody

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var IncomingRequestBody = $hxEnums["tink.http.IncomingRequestBody"] = { __ename__ : "tink.http.IncomingRequestBody", __constructs__ : ["Plain","Parsed"]
  ,Plain: ($_=function(source) { return {_hx_index:0,source:source,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_.__params__ = ["source"],$_)
  ,Parsed: ($_=function(parts) { return {_hx_index:1,parts:parts,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_.__params__ = ["parts"],$_)
};

exports.default = IncomingRequestBody;