// Class: tink.streams.SignalStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_Generator() {return require("./../../tink/streams/Generator");}
function tink_core__$Signal_Signal_$Impl_$() {return require("./../../tink/core/_Signal/Signal_Impl_");}
function tink_streams_Step() {return require("./../../tink/streams/Step");}

// Constructor

var SignalStream = function(signal) {
	var ret = (tink_core__$Signal_Signal_$Impl_$().default).nextTime(signal).map(function(o) {
		switch(o._hx_index) {
		case 0:
			var data = o.data;
			return (tink_streams_Step().default).Link(data,new SignalStream(signal));
		case 1:
			var e = o.e;
			return (tink_streams_Step().default).Fail(e);
		case 2:
			return (tink_streams_Step().default).End;
		}
	});
	(tink_streams_Generator().default).call(this,ret.gather());
}

// Meta

SignalStream.__name__ = ["tink","streams","SignalStream"];
SignalStream.__super__ = (tink_streams_Generator().default);
SignalStream.prototype = $extend((tink_streams_Generator().default).prototype, {
	
});
SignalStream.prototype.__class__ = SignalStream.prototype.constructor = $hxClasses["tink.streams.SignalStream"] = SignalStream;

// Init



// Statics




// Export

exports.default = SignalStream;