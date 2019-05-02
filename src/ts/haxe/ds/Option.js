// Enum: haxe.ds.Option

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Option = $hxClasses["haxe.ds.Option"] = { __ename__: ["haxe","ds","Option"], __constructs__: ["Some","None"] }

Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = Option; $x.toString = $estr; return $x; }
Option.None = ["None",1];
Option.None.toString = $estr;
Option.None.__enum__ = Option;


exports.default = Option;