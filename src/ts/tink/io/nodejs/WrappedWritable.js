// Class: tink.io.nodejs.WrappedWritable

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function js_node_buffer_Buffer() {return require("buffer");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}

// Constructor

var WrappedWritable = function(name,native) {
	this.name = name;
	this.native = native;
	this.ended = (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		native.once("end",function() {
			cb((tink_core_Outcome().default).Success(false));
		});
		native.once("finish",function() {
			cb((tink_core_Outcome().default).Success(false));
		});
		native.once("close",function() {
			cb((tink_core_Outcome().default).Success(false));
		});
		native.on("error",function(e) {
			var tmp = (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(null,"" + e.code + ": " + e.message,{ fileName : "tink/io/nodejs/WrappedWritable.hx", lineNumber : 22, className : "tink.io.nodejs.WrappedWritable", methodName : "new"}));
			cb(tmp);
		});
	});
}

// Meta

WrappedWritable.__name__ = "tink.io.nodejs.WrappedWritable";
WrappedWritable.prototype = {
	end: function() {
		var didEnd = false;
		var this1 = this.ended.handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic(function() {
			didEnd = true;
		}));
		if(this1 != null) {
			this1.cancel();
		}
		if(didEnd) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(false)));
		}
		this.native.end();
		return (tink_core__$Promise_Promise_$Impl_$().default).next(this.ended,function(_) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(true)));
		});
	},
	write: function(chunk) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).first((tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			if(chunk.getLength() == 0) {
				cb((tink_core_Outcome().default).Success(true));
				return;
			}
			var buf;
			if((js_node_buffer_Buffer().Buffer).isBuffer(chunk.buffer)) {
				buf = chunk.buffer;
			} else {
				var b = chunk.toBytes();
				var data = b.b;
				buf = (js_node_buffer_Buffer().Buffer).from(data.buffer,data.byteOffset,b.length);
			}
			var f = cb;
			var a1 = (tink_core_Outcome().default).Success(true);
			var tmp = function() {
				f(a1);
			};
			_gthis.native.write(buf,tmp);
		}),this.ended);
	}
};
WrappedWritable.prototype.__class__ = WrappedWritable.prototype.constructor = $hxClasses["tink.io.nodejs.WrappedWritable"] = WrappedWritable;

// Init



// Statics




// Export

exports.default = WrappedWritable;