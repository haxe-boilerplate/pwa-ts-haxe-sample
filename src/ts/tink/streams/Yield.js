// Enum: tink.streams.Yield

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Yield = $hxClasses["tink.streams.Yield"] = { __ename__: ["tink","streams","Yield"], __constructs__: ["Data","Fail","End"] }

Yield.Fail = function(e) { var $x = ["Fail",1,e]; $x.__enum__ = Yield; $x.toString = $estr; return $x; }
Yield.End = ["End",2];
Yield.End.toString = $estr;
Yield.End.__enum__ = Yield;

Yield.Data = function(data) { var $x = ["Data",0,data]; $x.__enum__ = Yield; $x.toString = $estr; return $x; }

exports.default = Yield;