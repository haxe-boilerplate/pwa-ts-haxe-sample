// Enum: tink.io.ParseStep

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var ParseStep = $hxClasses["tink.io.ParseStep"] = { __ename__: ["tink","io","ParseStep"], __constructs__: ["Progressed","Done","Failed"] }

ParseStep.Progressed = ["Progressed",0];
ParseStep.Progressed.toString = $estr;
ParseStep.Progressed.__enum__ = ParseStep;

ParseStep.Failed = function(e) { var $x = ["Failed",2,e]; $x.__enum__ = ParseStep; $x.toString = $estr; return $x; }
ParseStep.Done = function(r) { var $x = ["Done",1,r]; $x.__enum__ = ParseStep; $x.toString = $estr; return $x; }

exports.default = ParseStep;