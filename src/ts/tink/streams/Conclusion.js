// Enum: tink.streams.Conclusion

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Conclusion = $hxEnums["tink.streams.Conclusion"] = { __ename__ : "tink.streams.Conclusion", __constructs__ : ["Halted","Clogged","Failed","Depleted"]
  ,Halted: ($_=function(rest) { return {_hx_index:0,rest:rest,__enum__:"tink.streams.Conclusion<tink.streams.Conclusion.Item, tink.streams.Conclusion.Safety, tink.streams.Conclusion.Quality>",toString:$estr}; },$_.__params__ = ["rest"],$_)
  ,Failed: ($_=function(error) { return {_hx_index:2,error:error,__enum__:"tink.streams.Conclusion<tink.streams.Conclusion.Item, tink.streams.Conclusion.Safety, tink.Error>",toString:$estr}; },$_.__params__ = ["error"],$_)
  ,Depleted: {_hx_index:3,__enum__:"tink.streams.Conclusion<tink.streams.Conclusion.Item, tink.streams.Conclusion.Safety, tink.streams.Conclusion.Quality>",toString:$estr}
  ,Clogged: ($_=function(error,at) { return {_hx_index:1,error:error,at:at,__enum__:"tink.streams.Conclusion<tink.streams.Conclusion.Item, tink.Error, tink.streams.Conclusion.Quality>",toString:$estr}; },$_.__params__ = ["error","at"],$_)
};

exports.default = Conclusion;