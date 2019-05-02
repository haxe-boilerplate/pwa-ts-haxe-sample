// Class: tink.io._Sink.ErrorSink

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_io_SinkBase() {return require("./../../../tink/io/SinkBase");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_io_PipeResult() {return require("./../../../tink/io/PipeResult");}

// Constructor

var ErrorSink = function(error) {
	this.error = error;
}

// Meta

ErrorSink.__name__ = ["tink","io","_Sink","ErrorSink"];
ErrorSink.__super__ = (tink_io_SinkBase().default);
ErrorSink.prototype = $extend((tink_io_SinkBase().default).prototype, {
	get_sealed: function() {
		return false;
	},
	consume: function(source,options) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_PipeResult().default).SinkFailed(this.error,source)));
	}
});
ErrorSink.prototype.__class__ = ErrorSink.prototype.constructor = $hxClasses["tink.io._Sink.ErrorSink"] = ErrorSink;

// Init



// Statics




// Export

exports.default = ErrorSink;