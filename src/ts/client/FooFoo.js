// Class: client.FooFoo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function client_Client() {return require("./../client/Client");}

// Constructor

var FooFoo = function(){}

// Meta

FooFoo.__name__ = "client.FooFoo";
FooFoo.prototype = {
	
};
FooFoo.prototype.__class__ = FooFoo.prototype.constructor = $hxClasses["client.FooFoo"] = FooFoo;

// Init



// Statics

FooFoo.main = function() {
	var foo = (client_Client().default).call();
}


// Export

exports.default = FooFoo;