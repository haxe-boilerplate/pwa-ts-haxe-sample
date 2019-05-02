// Class: server.SuperServerComponent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var SuperServerComponent = function(){}

// Meta

SuperServerComponent.__name__ = ["server","SuperServerComponent"];
SuperServerComponent.prototype = {
	saySomething: function(phrase) {
		console.log("src/hx/server/SuperServerComponent.hx:7:",phrase);
		console.log("src/hx/server/SuperServerComponent.hx:8:","foo");
	}
};
SuperServerComponent.prototype.__class__ = SuperServerComponent.prototype.constructor = $hxClasses["server.SuperServerComponent"] = SuperServerComponent;

// Init



// Statics




// Export

exports.default = SuperServerComponent;