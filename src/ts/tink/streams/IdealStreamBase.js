// Class: tink.streams.IdealStreamBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../tink/streams/StreamBase");}

// Constructor

var IdealStreamBase = function() {
	(tink_streams_StreamBase().default).call(this);
}

// Meta

IdealStreamBase.__name__ = "tink.streams.IdealStreamBase";
IdealStreamBase.__super__ = (tink_streams_StreamBase().default);
IdealStreamBase.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	idealize: function(rescue) {
		return this;
	}
});
IdealStreamBase.prototype.__class__ = IdealStreamBase.prototype.constructor = $hxClasses["tink.streams.IdealStreamBase"] = IdealStreamBase;

// Init



// Statics




// Export

exports.default = IdealStreamBase;