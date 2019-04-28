// Enum: tink.streams.Conclusion

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Conclusion = $hxClasses["tink.streams.Conclusion"] = { __ename__: ["tink","streams","Conclusion"], __constructs__: ["Halted","Clogged","Failed","Depleted"] }

Conclusion.Halted = function(rest) { var $x = ["Halted",0,rest]; $x.__enum__ = Conclusion; $x.toString = $estr; return $x; }
Conclusion.Failed = function(error) { var $x = ["Failed",2,error]; $x.__enum__ = Conclusion; $x.toString = $estr; return $x; }
Conclusion.Depleted = ["Depleted",3];
Conclusion.Depleted.toString = $estr;
Conclusion.Depleted.__enum__ = Conclusion;

Conclusion.Clogged = function(error,at) { var $x = ["Clogged",1,error,at]; $x.__enum__ = Conclusion; $x.toString = $estr; return $x; }

exports.default = Conclusion;