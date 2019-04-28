// Enum: tink.streams.Handled

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Handled = $hxClasses["tink.streams.Handled"] = { __ename__: ["tink","streams","Handled"], __constructs__: ["BackOff","Finish","Resume","Clog"] }

Handled.Resume = ["Resume",2];
Handled.Resume.toString = $estr;
Handled.Resume.__enum__ = Handled;

Handled.Finish = ["Finish",1];
Handled.Finish.toString = $estr;
Handled.Finish.__enum__ = Handled;

Handled.Clog = function(e) { var $x = ["Clog",3,e]; $x.__enum__ = Handled; $x.toString = $estr; return $x; }
Handled.BackOff = ["BackOff",0];
Handled.BackOff.toString = $estr;
Handled.BackOff.__enum__ = Handled;


exports.default = Handled;