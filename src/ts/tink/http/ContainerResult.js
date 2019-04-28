// Enum: tink.http.ContainerResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var ContainerResult = $hxClasses["tink.http.ContainerResult"] = { __ename__: ["tink","http","ContainerResult"], __constructs__: ["Running","Failed","Shutdown"] }

ContainerResult.Shutdown = ["Shutdown",2];
ContainerResult.Shutdown.toString = $estr;
ContainerResult.Shutdown.__enum__ = ContainerResult;

ContainerResult.Running = function(running) { var $x = ["Running",0,running]; $x.__enum__ = ContainerResult; $x.toString = $estr; return $x; }
ContainerResult.Failed = function(e) { var $x = ["Failed",1,e]; $x.__enum__ = ContainerResult; $x.toString = $estr; return $x; }

exports.default = ContainerResult;