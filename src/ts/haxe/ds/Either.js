// Enum: haxe.ds.Either

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Either = $hxClasses["haxe.ds.Either"] = { __ename__: ["haxe","ds","Either"], __constructs__: ["Left","Right"] }

Either.Right = function(v) { var $x = ["Right",1,v]; $x.__enum__ = Either; $x.toString = $estr; return $x; }
Either.Left = function(v) { var $x = ["Left",0,v]; $x.__enum__ = Either; $x.toString = $estr; return $x; }

exports.default = Either;