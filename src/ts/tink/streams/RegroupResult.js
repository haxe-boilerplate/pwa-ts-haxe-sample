// Enum: tink.streams.RegroupResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var RegroupResult = $hxClasses["tink.streams.RegroupResult"] = { __ename__: ["tink","streams","RegroupResult"], __constructs__: ["Converted","Terminated","Untouched","Errored"] }

RegroupResult.Untouched = ["Untouched",2];
RegroupResult.Untouched.toString = $estr;
RegroupResult.Untouched.__enum__ = RegroupResult;

RegroupResult.Terminated = function(data) { var $x = ["Terminated",1,data]; $x.__enum__ = RegroupResult; $x.toString = $estr; return $x; }
RegroupResult.Errored = function(e) { var $x = ["Errored",3,e]; $x.__enum__ = RegroupResult; $x.toString = $estr; return $x; }
RegroupResult.Converted = function(data) { var $x = ["Converted",0,data]; $x.__enum__ = RegroupResult; $x.toString = $estr; return $x; }

exports.default = RegroupResult;