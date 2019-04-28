// Class: tink.streams.FutureStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../tink/streams/StreamBase");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}

// Constructor

var FutureStream = function(f) {
	(tink_streams_StreamBase().default).call(this);
	this.f = f;
}

// Meta

FutureStream.__name__ = ["tink","streams","FutureStream"];
FutureStream.__super__ = (tink_streams_StreamBase().default);
FutureStream.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	next: function() {
		var ret = this.f.flatMap(function(s) {
			return s.next();
		});
		return ret.gather();
	},
	forEach: function(handler) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			_gthis.f.handle(function(s) {
				s.forEach(handler).handle(cb);
			});
		});
	}
});
FutureStream.prototype.__class__ = FutureStream.prototype.constructor = $hxClasses["tink.streams.FutureStream"] = FutureStream;

// Init



// Statics




// Export

exports.default = FutureStream;