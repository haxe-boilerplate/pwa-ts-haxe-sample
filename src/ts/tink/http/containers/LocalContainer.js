// Class: tink.http.containers.LocalContainer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_Container() {return require("./../../../tink/http/Container");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_http_ContainerResult() {return require("./../../../tink/http/ContainerResult");}
function tink_core_SignalTrigger() {return require("./../../../tink/core/SignalTrigger");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}
function tink_http__$Response_OutgoingResponseData() {return require("./../../../tink/http/_Response/OutgoingResponseData");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}

// Constructor

var LocalContainer = function() {
}

// Meta

LocalContainer.__name__ = "tink.http.containers.LocalContainer";
LocalContainer.__interfaces__ = [(tink_http_Container().default)];
LocalContainer.prototype = {
	run: function(handler) {
		var _gthis = this;
		this.handler = handler;
		this.running = true;
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_http_ContainerResult().default).Running({ failures : new (tink_core_SignalTrigger().default)(), shutdown : function(hard) {
			_gthis.running = false;
			var ret = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(true)).map((tink_core_Outcome().default).Success);
			return ret.gather();
		}})));
	},
	serve: function(req) {
		if(!this.running) {
			var this1 = new (tink_http_ResponseHeaderBase().default)(503,"Server stopped",[],"HTTP/1.1");
			var this2 = new (tink_http__$Response_OutgoingResponseData().default)(this1,(tink_io__$Source_Source_$Impl_$().default).EMPTY);
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(this2));
		}
		return this.handler.process(req);
	}
};
LocalContainer.prototype.__class__ = LocalContainer.prototype.constructor = $hxClasses["tink.http.containers.LocalContainer"] = LocalContainer;

// Init



// Statics




// Export

exports.default = LocalContainer;