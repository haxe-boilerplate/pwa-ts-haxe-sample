// Enum: tink.streams.Reduction

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Reduction = $hxClasses["tink.streams.Reduction"] = { __ename__: ["tink","streams","Reduction"], __constructs__: ["Crashed","Failed","Reduced"] }

Reduction.Reduced = function(result) { var $x = ["Reduced",2,result]; $x.__enum__ = Reduction; $x.toString = $estr; return $x; }
Reduction.Failed = function(error) { var $x = ["Failed",1,error]; $x.__enum__ = Reduction; $x.toString = $estr; return $x; }
Reduction.Crashed = function(error,at) { var $x = ["Crashed",0,error,at]; $x.__enum__ = Reduction; $x.toString = $estr; return $x; }

exports.default = Reduction;