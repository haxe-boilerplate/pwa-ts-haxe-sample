// Enum: tink.http.BodyPart

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var BodyPart = $hxClasses["tink.http.BodyPart"] = { __ename__: ["tink","http","BodyPart"], __constructs__: ["Value","File"] }

BodyPart.Value = function(v) { var $x = ["Value",0,v]; $x.__enum__ = BodyPart; $x.toString = $estr; return $x; }
BodyPart.File = function(handle) { var $x = ["File",1,handle]; $x.__enum__ = BodyPart; $x.toString = $estr; return $x; }

exports.default = BodyPart;