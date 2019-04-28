// Enum: tink.io.ParseResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var ParseResult = $hxClasses["tink.io.ParseResult"] = { __ename__: ["tink","io","ParseResult"], __constructs__: ["Parsed","Invalid","Broke"] }

ParseResult.Parsed = function(data,rest) { var $x = ["Parsed",0,data,rest]; $x.__enum__ = ParseResult; $x.toString = $estr; return $x; }
ParseResult.Invalid = function(e,rest) { var $x = ["Invalid",1,e,rest]; $x.__enum__ = ParseResult; $x.toString = $estr; return $x; }
ParseResult.Broke = function(e) { var $x = ["Broke",2,e]; $x.__enum__ = ParseResult; $x.toString = $estr; return $x; }

exports.default = ParseResult;