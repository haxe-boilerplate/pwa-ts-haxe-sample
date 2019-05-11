// Enum: tink.http.ContainerResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ContainerResult = $hxEnums["tink.http.ContainerResult"] = { __ename__ : "tink.http.ContainerResult", __constructs__ : ["Running","Failed","Shutdown"]
  ,Shutdown: {_hx_index:2,__enum__:"tink.http.ContainerResult",toString:$estr}
  ,Running: ($_=function(running) { return {_hx_index:0,running:running,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_.__params__ = ["running"],$_)
  ,Failed: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_.__params__ = ["e"],$_)
};

exports.default = ContainerResult;