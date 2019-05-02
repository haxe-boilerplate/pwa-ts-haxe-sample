// Enum: tink.io.PipeResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var PipeResult = $hxClasses["tink.io.PipeResult"] = { __ename__: ["tink","io","PipeResult"], __constructs__: ["AllWritten","SinkEnded","SinkFailed","SourceFailed"] }

PipeResult.SourceFailed = function(e) { var $x = ["SourceFailed",3,e]; $x.__enum__ = PipeResult; $x.toString = $estr; return $x; }
PipeResult.SinkFailed = function(e,rest) { var $x = ["SinkFailed",2,e,rest]; $x.__enum__ = PipeResult; $x.toString = $estr; return $x; }
PipeResult.SinkEnded = function(result,rest) { var $x = ["SinkEnded",1,result,rest]; $x.__enum__ = PipeResult; $x.toString = $estr; return $x; }
PipeResult.AllWritten = ["AllWritten",0];
PipeResult.AllWritten.toString = $estr;
PipeResult.AllWritten.__enum__ = PipeResult;


exports.default = PipeResult;