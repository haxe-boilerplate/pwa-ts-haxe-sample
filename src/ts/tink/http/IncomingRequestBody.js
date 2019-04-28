// Enum: tink.http.IncomingRequestBody

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var IncomingRequestBody = $hxClasses["tink.http.IncomingRequestBody"] = { __ename__: ["tink","http","IncomingRequestBody"], __constructs__: ["Plain","Parsed"] }

IncomingRequestBody.Plain = function(source) { var $x = ["Plain",0,source]; $x.__enum__ = IncomingRequestBody; $x.toString = $estr; return $x; }
IncomingRequestBody.Parsed = function(parts) { var $x = ["Parsed",1,parts]; $x.__enum__ = IncomingRequestBody; $x.toString = $estr; return $x; }

exports.default = IncomingRequestBody;