// Enum: tink.io.ParseResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ParseResult = $hxEnums["tink.io.ParseResult"] = { __ename__ : "tink.io.ParseResult", __constructs__ : ["Parsed","Invalid","Broke"]
  ,Parsed: ($_=function(data,rest) { return {_hx_index:0,data:data,rest:rest,__enum__:"tink.io.ParseResult<tink.io.ParseResult.Result, tink.io.ParseResult.Quality>",toString:$estr}; },$_.__params__ = ["data","rest"],$_)
  ,Invalid: ($_=function(e,rest) { return {_hx_index:1,e:e,rest:rest,__enum__:"tink.io.ParseResult<tink.io.ParseResult.Result, tink.io.ParseResult.Quality>",toString:$estr}; },$_.__params__ = ["e","rest"],$_)
  ,Broke: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseResult<tink.io.ParseResult.Result, tink.Error>",toString:$estr}; },$_.__params__ = ["e"],$_)
};

exports.default = ParseResult;