// Enum: tink.http.Authorization

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Authorization = $hxClasses["tink.http.Authorization"] = { __ename__: ["tink","http","Authorization"], __constructs__: ["Basic","Bearer","Others"] }

Authorization.Others = function(scheme,param) { var $x = ["Others",2,scheme,param]; $x.__enum__ = Authorization; $x.toString = $estr; return $x; }
Authorization.Bearer = function(token) { var $x = ["Bearer",1,token]; $x.__enum__ = Authorization; $x.toString = $estr; return $x; }
Authorization.Basic = function(user,pass) { var $x = ["Basic",0,user,pass]; $x.__enum__ = Authorization; $x.toString = $estr; return $x; }

exports.default = Authorization;