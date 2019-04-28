// Enum: tink.http.containers._NodeContainer.ServerKindBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../estr_stub").default;
var $hxClasses = require("./../../../../hxClasses_stub").default;

// Definition

var ServerKindBase = $hxClasses["tink.http.containers._NodeContainer.ServerKindBase"] = { __ename__: ["tink","http","containers","_NodeContainer","ServerKindBase"], __constructs__: ["Instance","Port","Host","Path","Fd"] }

ServerKindBase.Port = function(port) { var $x = ["Port",1,port]; $x.__enum__ = ServerKindBase; $x.toString = $estr; return $x; }
ServerKindBase.Path = function(path) { var $x = ["Path",3,path]; $x.__enum__ = ServerKindBase; $x.toString = $estr; return $x; }
ServerKindBase.Instance = function(server) { var $x = ["Instance",0,server]; $x.__enum__ = ServerKindBase; $x.toString = $estr; return $x; }
ServerKindBase.Host = function(host) { var $x = ["Host",2,host]; $x.__enum__ = ServerKindBase; $x.toString = $estr; return $x; }
ServerKindBase.Fd = function(fd) { var $x = ["Fd",4,fd]; $x.__enum__ = ServerKindBase; $x.toString = $estr; return $x; }

exports.default = ServerKindBase;