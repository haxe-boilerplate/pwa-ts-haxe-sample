// Enum: haxe.io.Encoding

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Encoding = $hxClasses["haxe.io.Encoding"] = { __ename__: ["haxe","io","Encoding"], __constructs__: ["UTF8","RawNative"] }

Encoding.UTF8 = ["UTF8",0];
Encoding.UTF8.toString = $estr;
Encoding.UTF8.__enum__ = Encoding;

Encoding.RawNative = ["RawNative",1];
Encoding.RawNative.toString = $estr;
Encoding.RawNative.__enum__ = Encoding;


exports.default = Encoding;