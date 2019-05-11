// Enum: tink.http.containers._NodeContainer.ServerKindBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../estr_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Definition

var ServerKindBase = $hxEnums["tink.http.containers._NodeContainer.ServerKindBase"] = { __ename__ : "tink.http.containers._NodeContainer.ServerKindBase", __constructs__ : ["Instance","Port","Host","Path","Fd"]
  ,Port: ($_=function(port) { return {_hx_index:1,port:port,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_.__params__ = ["port"],$_)
  ,Path: ($_=function(path) { return {_hx_index:3,path:path,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_.__params__ = ["path"],$_)
  ,Instance: ($_=function(server) { return {_hx_index:0,server:server,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_.__params__ = ["server"],$_)
  ,Host: ($_=function(host) { return {_hx_index:2,host:host,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_.__params__ = ["host"],$_)
  ,Fd: ($_=function(fd) { return {_hx_index:4,fd:fd,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_.__params__ = ["fd"],$_)
};

exports.default = ServerKindBase;