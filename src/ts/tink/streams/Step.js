// Enum: tink.streams.Step

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Step = $hxClasses["tink.streams.Step"] = { __ename__: ["tink","streams","Step"], __constructs__: ["Link","Fail","End"] }

Step.Link = function(value,next) { var $x = ["Link",0,value,next]; $x.__enum__ = Step; $x.toString = $estr; return $x; }
Step.Fail = function(e) { var $x = ["Fail",1,e]; $x.__enum__ = Step; $x.toString = $estr; return $x; }
Step.End = ["End",2];
Step.End.toString = $estr;
Step.End.__enum__ = Step;


exports.default = Step;