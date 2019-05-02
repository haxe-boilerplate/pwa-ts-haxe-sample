// Class: tink.streams._Stream.ErrorStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../../tink/streams/StreamBase");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink_streams_Conclusion() {return require("./../../../tink/streams/Conclusion");}

// Constructor

var ErrorStream = function(error) {
	(tink_streams_StreamBase().default).call(this);
	this.error = error;
}

// Meta

ErrorStream.__name__ = ["tink","streams","_Stream","ErrorStream"];
ErrorStream.__super__ = (tink_streams_StreamBase().default);
ErrorStream.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	next: function() {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Step().default).Fail(this.error)));
	},
	forEach: function(handler) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Conclusion().default).Failed(this.error)));
	}
});
ErrorStream.prototype.__class__ = ErrorStream.prototype.constructor = $hxClasses["tink.streams._Stream.ErrorStream"] = ErrorStream;

// Init



// Statics




// Export

exports.default = ErrorStream;