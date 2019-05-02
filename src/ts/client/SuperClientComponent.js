// Class: client.SuperClientComponent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var SuperClientComponent = function(){}

// Meta

SuperClientComponent.__name__ = ["client","SuperClientComponent"];
SuperClientComponent.prototype = {
	saySomething: function($finally) {
		console.log("src/hx/client/SuperClientComponent.hx:7:",$finally);
		console.log("src/hx/client/SuperClientComponent.hx:8:","LOOL");
	}
};
SuperClientComponent.prototype.__class__ = SuperClientComponent.prototype.constructor = $hxClasses["client.SuperClientComponent"] = SuperClientComponent;

// Init



// Statics




// Export

exports.default = SuperClientComponent;