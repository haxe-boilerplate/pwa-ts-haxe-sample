// Class: tink.io._Sink.Blackhole

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_io_SinkBase() {return require("./../../../tink/io/SinkBase");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function tink_io_PipeResult() {return require("./../../../tink/io/PipeResult");}

// Constructor

var Blackhole = function() {
}

// Meta

Blackhole.__name__ = "tink.io._Sink.Blackhole";
Blackhole.__super__ = (tink_io_SinkBase().default);
Blackhole.prototype = $extend((tink_io_SinkBase().default).prototype, {
	consume: function(source,options) {
		var ret = source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofSafe(function(_) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Handled().default).Resume));
		})).map(function(o) {
			switch(o._hx_index) {
			case 0:
				throw new (js__$Boot_HaxeError().default)("unreachable");
			case 2:
				var e = o.error;
				return (tink_io_PipeResult().default).SourceFailed(e);
			case 3:
				return (tink_io_PipeResult().default).AllWritten;
			}
		});
		return ret.gather();
	}
});
Blackhole.prototype.__class__ = Blackhole.prototype.constructor = $hxClasses["tink.io._Sink.Blackhole"] = Blackhole;

// Init



// Statics


Blackhole.inst = new Blackhole()

// Export

exports.default = Blackhole;