// Class: tink.streams._Stream.Stream_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink_streams_Generator() {return require("./../../../tink/streams/Generator");}
function tink_streams_FutureStream() {return require("./../../../tink/streams/FutureStream");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_streams__$Stream_ErrorStream() {return require("./../../../tink/streams/_Stream/ErrorStream");}

// Constructor

var Stream_Impl_ = function(){}

// Meta

Stream_Impl_.__name__ = ["tink","streams","_Stream","Stream_Impl_"];
Stream_Impl_.prototype = {
	
};
Stream_Impl_.prototype.__class__ = Stream_Impl_.prototype.constructor = $hxClasses["tink.streams._Stream.Stream_Impl_"] = Stream_Impl_;

// Init



// Statics

Stream_Impl_.get_depleted = function(this1) {
	return this1.get_depleted();
}
Stream_Impl_.dirty = function(this1) {
	return this1;
}
Stream_Impl_.single = function(i) {
	return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(i));
}
Stream_Impl_.ofIterator = function(i) {
	var next = null;
	next = function(step) {
		step(i.hasNext() ? (tink_streams_Step().default).Link(i.next(),(tink_streams_Generator().default).stream(next)) : (tink_streams_Step().default).End);
	};
	return (tink_streams_Generator().default).stream(next);
}
Stream_Impl_.flatten = function(f) {
	return new (tink_streams_FutureStream().default)(f);
}
Stream_Impl_.promiseIdeal = function(f) {
	return Stream_Impl_.promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(f));
}
Stream_Impl_.promiseReal = function(f) {
	return Stream_Impl_.promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(f));
}
Stream_Impl_.promise = function(f) {
	var ret = f.map(function(o) {
		switch(o._hx_index) {
		case 0:
			var s = o.data;
			return Stream_Impl_.dirty(s);
		case 1:
			var e = o.failure;
			return Stream_Impl_.ofError(e);
		}
	});
	return Stream_Impl_.flatten(ret.gather());
}
Stream_Impl_.ofError = function(e) {
	return new (tink_streams__$Stream_ErrorStream().default)(e);
}


// Export

exports.default = Stream_Impl_;