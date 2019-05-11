// Class: tink.streams.Empty

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../tink/streams/StreamBase");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_streams_Step() {return require("./../../tink/streams/Step");}
function tink_streams_Conclusion() {return require("./../../tink/streams/Conclusion");}

// Constructor

var Empty = function() {
	(tink_streams_StreamBase().default).call(this);
}

// Meta

Empty.__name__ = "tink.streams.Empty";
Empty.__super__ = (tink_streams_StreamBase().default);
Empty.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	get_depleted: function() {
		return true;
	},
	next: function() {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Step().default).End));
	},
	forEach: function(handler) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Conclusion().default).Depleted));
	}
});
Empty.prototype.__class__ = Empty.prototype.constructor = $hxClasses["tink.streams.Empty"] = Empty;

// Init



// Statics

Empty.make = function() {
	return Empty.inst;
}
Empty.inst = new Empty()

// Export

exports.default = Empty;