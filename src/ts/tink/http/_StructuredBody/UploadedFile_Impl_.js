// Class: tink.http._StructuredBody.UploadedFile_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function tink_io_nodejs_NodejsSink() {return require("./../../../tink/io/nodejs/NodejsSink");}
function js_node_Fs() {return require("fs");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}

// Constructor

var UploadedFile_Impl_ = function(){}

// Meta

UploadedFile_Impl_.__name__ = ["tink","http","_StructuredBody","UploadedFile_Impl_"];
UploadedFile_Impl_.prototype = {
	
};
UploadedFile_Impl_.prototype.__class__ = UploadedFile_Impl_.prototype.constructor = $hxClasses["tink.http._StructuredBody.UploadedFile_Impl_"] = UploadedFile_Impl_;

// Init



// Statics

UploadedFile_Impl_.ofBlob = function(name,type,data) {
	return { fileName : name, mimeType : type, size : data.length, read : function() {
		return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of(data)));
	}, saveTo : function(path) {
		var name1 = "File sink " + path;
		var dest = (tink_io_nodejs_NodejsSink().default).wrap(name1,(js_node_Fs()).createWriteStream(path));
		var ret = (tink_io__$Source_Source_$Impl_$().default).pipeTo(new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of(data))),dest,{ end : true}).map(function(r) {
			switch(r._hx_index) {
			case 0:
				return (tink_core_Outcome().default).Success((tink_core_Noise().default).Noise);
			case 1:
				return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(null,"File $path closed unexpectedly",{ fileName : "tink/http/StructuredBody.hx", lineNumber : 37, className : "tink.http._StructuredBody.UploadedFile_Impl_", methodName : "ofBlob"}));
			case 2:
				var e = r.e;
				return (tink_core_Outcome().default).Failure(e);
			}
		});
		return ret.gather();
	}};
}


// Export

exports.default = UploadedFile_Impl_;