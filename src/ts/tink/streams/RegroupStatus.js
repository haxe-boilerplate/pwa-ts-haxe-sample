// Enum: tink.streams.RegroupStatus

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var RegroupStatus = $hxClasses["tink.streams.RegroupStatus"] = { __ename__: ["tink","streams","RegroupStatus"], __constructs__: ["Flowing","Errored","Ended"] }

RegroupStatus.Flowing = ["Flowing",0];
RegroupStatus.Flowing.toString = $estr;
RegroupStatus.Flowing.__enum__ = RegroupStatus;

RegroupStatus.Errored = function(e) { var $x = ["Errored",1,e]; $x.__enum__ = RegroupStatus; $x.toString = $estr; return $x; }
RegroupStatus.Ended = ["Ended",2];
RegroupStatus.Ended.toString = $estr;
RegroupStatus.Ended.__enum__ = RegroupStatus;


exports.default = RegroupStatus;