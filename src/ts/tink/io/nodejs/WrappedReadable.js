// Class: tink.io.nodejs.WrappedReadable

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function js_node_buffer_Buffer() {return require("buffer");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_io_nodejs_WrappedBuffer() {return require("./../../../tink/io/nodejs/WrappedBuffer");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}

// Constructor

var WrappedReadable = function(name,native,chunkSize,onEnd) {
	this.name = name;
	this.native = native;
	this.chunkSize = chunkSize;
	this.end = (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		native.once("end",function() {
			cb((tink_core_Outcome().default).Success(null));
		});
		native.once("error",function(e) {
			var tmp = (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 21, className : "tink.io.nodejs.WrappedReadable", methodName : "new"}));
			cb(tmp);
		});
	});
	if(onEnd != null) {
		this.end.handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic(function() {
			process.nextTick(onEnd);
		}));
	}
}

// Meta

WrappedReadable.__name__ = ["tink","io","nodejs","WrappedReadable"];
WrappedReadable.prototype = {
	read: function() {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).first((tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var attempt = null;
			attempt = function() {
				try {
					var _g = _gthis.native.read(_gthis.chunkSize);
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						var chunk = _g;
						var buf = typeof(chunk) == "string" ? new (js_node_buffer_Buffer().Buffer)(chunk) : chunk;
						var attempt1 = (tink_core_Outcome().default).Success(new (tink_io_nodejs_WrappedBuffer().default)(buf));
						cb(attempt1);
					}
				} catch( e ) {
					var attempt2 = (tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(null,"Error while reading from " + _gthis.name,((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 46, className : "tink.io.nodejs.WrappedReadable", methodName : "read"}));
					cb(attempt2);
				}
			};
			attempt();
		}),this.end);
	}
};
WrappedReadable.prototype.__class__ = WrappedReadable.prototype.constructor = $hxClasses["tink.io.nodejs.WrappedReadable"] = WrappedReadable;

// Init



// Statics




// Export

exports.default = WrappedReadable;