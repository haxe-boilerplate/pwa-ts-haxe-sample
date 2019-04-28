// Class: tink.web.forms._FormFile.FormFile_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_io_RealSourceTools() {return require("./../../../../tink/io/RealSourceTools");}
function tink_core_OutcomeTools() {return require("./../../../../tink/core/OutcomeTools");}
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function tink_core_TypedError() {return require("./../../../../tink/core/TypedError");}
function Std() {return require("./../../../../Std");}
function tink_json__$Representation_Representation_$Impl_$() {return require("./../../../../tink/json/_Representation/Representation_Impl_");}
function tink_http__$StructuredBody_UploadedFile_$Impl_$() {return require("./../../../../tink/http/_StructuredBody/UploadedFile_Impl_");}

// Constructor

var FormFile_Impl_ = function(){}

// Meta

FormFile_Impl_.__name__ = ["tink","web","forms","_FormFile","FormFile_Impl_"];
FormFile_Impl_.prototype = {
	
};
FormFile_Impl_.prototype.__class__ = FormFile_Impl_.prototype.constructor = $hxClasses["tink.web.forms._FormFile.FormFile_Impl_"] = FormFile_Impl_;

// Init



// Statics

FormFile_Impl_._new = function(v) {
	var this1 = v;
	return this1;
}
FormFile_Impl_.toJson = function(this1) {
	var this2 = this1.fileName;
	var this3 = this1.mimeType;
	var src = this1.read();
	var chunk = null;
	var write = (tink_io_RealSourceTools().default).all(src).handle(function(c) {
		chunk = (tink_core_OutcomeTools().default).sure(c);
	});
	var v;
	if(chunk != null) {
		v = chunk.toBytes();
	} else {
		if(write != null) {
			write.cancel();
		}
		throw new (js__$Boot_HaxeError().default)(new (tink_core_TypedError().default)(501,"Can only upload files through JSON backed by with sync sources but got a " + (Std().default).string(src),{ fileName : "tink/web/forms/FormFile.hx", lineNumber : 34, className : "tink.web.forms._FormFile.FormFile_Impl_", methodName : "toJson"}));
	}
	var this4 = { fileName : this2, mimeType : this3, content : v};
	return this4;
}
FormFile_Impl_.ofJson = function(rep) {
	var data = (tink_json__$Representation_Representation_$Impl_$().default).get(rep);
	var this1 = (tink_http__$StructuredBody_UploadedFile_$Impl_$().default).ofBlob(data.fileName,data.mimeType,data.content);
	return this1;
}
FormFile_Impl_.ofBlob = function(name,type,data) {
	return (tink_http__$StructuredBody_UploadedFile_$Impl_$().default).ofBlob(name,type,data);
}


// Export

exports.default = FormFile_Impl_;