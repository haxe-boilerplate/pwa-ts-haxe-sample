// Enum: tink.core.Outcome

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Outcome = $hxClasses["tink.core.Outcome"] = { __ename__: ["tink","core","Outcome"], __constructs__: ["Success","Failure"] }

Outcome.Success = function(data) { var $x = ["Success",0,data]; $x.__enum__ = Outcome; $x.toString = $estr; return $x; }
Outcome.Failure = function(failure) { var $x = ["Failure",1,failure]; $x.__enum__ = Outcome; $x.toString = $estr; return $x; }

exports.default = Outcome;