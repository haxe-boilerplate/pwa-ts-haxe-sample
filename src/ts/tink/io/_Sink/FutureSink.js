// Class: tink.io._Sink.FutureSink

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_io_SinkBase() {return require("./../../../tink/io/SinkBase");}

// Constructor

var FutureSink = function(f) {
	this.f = f;
}

// Meta

FutureSink.__name__ = "tink.io._Sink.FutureSink";
FutureSink.__super__ = (tink_io_SinkBase().default);
FutureSink.prototype = $extend((tink_io_SinkBase().default).prototype, {
	consume: function(source,options) {
		var ret = this.f.flatMap(function(sink) {
			return sink.consume(source,options);
		});
		return ret.gather();
	}
});
FutureSink.prototype.__class__ = FutureSink.prototype.constructor = $hxClasses["tink.io._Sink.FutureSink"] = FutureSink;

// Init



// Statics




// Export

exports.default = FutureSink;