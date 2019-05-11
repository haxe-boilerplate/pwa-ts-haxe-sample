// Class: client.SuperClientComponent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function SomeTsClass() {return $import(require("./.././some-ts-class"));}

// Constructor

var SuperClientComponent = function() {
}

// Meta

SuperClientComponent.__name__ = "client.SuperClientComponent";
SuperClientComponent.prototype = {
	saySomething: function(foo) {
		console.log("src/hx/client/SuperClientComponent.hx:18:",foo);
		console.log("src/hx/client/SuperClientComponent.hx:19:","fo");
		new (SomeTsClass().default)("from client");
	}
};
SuperClientComponent.prototype.__class__ = SuperClientComponent.prototype.constructor = $hxClasses["client.SuperClientComponent"] = SuperClientComponent;

// Init



// Statics




// Export

exports.default = SuperClientComponent;