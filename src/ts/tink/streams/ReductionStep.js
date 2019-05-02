// Enum: tink.streams.ReductionStep

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var ReductionStep = $hxClasses["tink.streams.ReductionStep"] = { __ename__: ["tink","streams","ReductionStep"], __constructs__: ["Progress","Crash"] }

ReductionStep.Progress = function(result) { var $x = ["Progress",0,result]; $x.__enum__ = ReductionStep; $x.toString = $estr; return $x; }
ReductionStep.Crash = function(e) { var $x = ["Crash",1,e]; $x.__enum__ = ReductionStep; $x.toString = $estr; return $x; }

exports.default = ReductionStep;