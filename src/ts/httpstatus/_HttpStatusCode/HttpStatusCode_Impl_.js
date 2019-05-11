// Class: httpstatus._HttpStatusCode.HttpStatusCode_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$() {return require("./../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_");}
function tink_http_ResponseHeaderBase() {return require("./../../tink/http/ResponseHeaderBase");}
function tink_http_HeaderField() {return require("./../../tink/http/HeaderField");}
function tink_http__$Response_OutgoingResponseData() {return require("./../../tink/http/_Response/OutgoingResponseData");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}

// Constructor

var HttpStatusCode_Impl_ = function(){}

// Meta

HttpStatusCode_Impl_.__name__ = "httpstatus._HttpStatusCode.HttpStatusCode_Impl_";
HttpStatusCode_Impl_.prototype = {
	
};
HttpStatusCode_Impl_.prototype.__class__ = HttpStatusCode_Impl_.prototype.constructor = $hxClasses["httpstatus._HttpStatusCode.HttpStatusCode_Impl_"] = HttpStatusCode_Impl_;

// Init



// Statics

HttpStatusCode_Impl_.toMessage = function(this1) {
	var this2 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(this1);
	return this2;
}
HttpStatusCode_Impl_.toInt = function(this1) {
	return this1;
}
HttpStatusCode_Impl_.fromErrorCode = function(code) {
	return code;
}
HttpStatusCode_Impl_.toWebResponse = function(this1) {
	return HttpStatusCode_Impl_.toOutgoingResponse(this1);
}
HttpStatusCode_Impl_.toOutgoingResponse = function(this1) {
	var this2 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(this1);
	var this3 = new (tink_http_ResponseHeaderBase().default)(this1,this2,[new (tink_http_HeaderField().default)("content-length","0")],"HTTP/1.1");
	var this4 = new (tink_http__$Response_OutgoingResponseData().default)(this3,(tink_io__$Source_Source_$Impl_$().default).EMPTY);
	return this4;
}
HttpStatusCode_Impl_.fromIncomingResponse = function(res) {
	return res.header.statusCode;
}
HttpStatusCode_Impl_.Continue = 100
HttpStatusCode_Impl_.SwitchingProtocols = 101
HttpStatusCode_Impl_.Processing = 102
HttpStatusCode_Impl_.OK = 200
HttpStatusCode_Impl_.Created = 201
HttpStatusCode_Impl_.Accepted = 202
HttpStatusCode_Impl_.NonAuthoritativeInformation = 203
HttpStatusCode_Impl_.NoContent = 204
HttpStatusCode_Impl_.ResetContent = 205
HttpStatusCode_Impl_.PartialContent = 206
HttpStatusCode_Impl_.MultiStatus = 207
HttpStatusCode_Impl_.AlreadyReported = 208
HttpStatusCode_Impl_.IMUsed = 226
HttpStatusCode_Impl_.MultipleChoices = 300
HttpStatusCode_Impl_.MovedPermanently = 301
HttpStatusCode_Impl_.Found = 302
HttpStatusCode_Impl_.SeeOther = 303
HttpStatusCode_Impl_.NotModified = 304
HttpStatusCode_Impl_.UseProxy = 305
HttpStatusCode_Impl_.SwitchProxy = 306
HttpStatusCode_Impl_.TemporaryRedirect = 307
HttpStatusCode_Impl_.PermanentRedirect = 308
HttpStatusCode_Impl_.BadRequest = 400
HttpStatusCode_Impl_.Unauthorized = 401
HttpStatusCode_Impl_.PaymentRequired = 402
HttpStatusCode_Impl_.Forbidden = 403
HttpStatusCode_Impl_.NotFound = 404
HttpStatusCode_Impl_.MethodNotAllowed = 405
HttpStatusCode_Impl_.NotAcceptable = 406
HttpStatusCode_Impl_.ProxyAuthenticationRequired = 407
HttpStatusCode_Impl_.RequestTimeout = 408
HttpStatusCode_Impl_.Conflict = 409
HttpStatusCode_Impl_.Gone = 410
HttpStatusCode_Impl_.LengthRequired = 411
HttpStatusCode_Impl_.PreconditionFailed = 412
HttpStatusCode_Impl_.PayloadTooLarge = 413
HttpStatusCode_Impl_.URITooLong = 414
HttpStatusCode_Impl_.UnsupportedMediaType = 415
HttpStatusCode_Impl_.RangeNotSatisfiable = 416
HttpStatusCode_Impl_.ExpectationFailed = 417
HttpStatusCode_Impl_.ImATeapot = 418
HttpStatusCode_Impl_.MisdirectedRequest = 421
HttpStatusCode_Impl_.UnprocessableEntity = 422
HttpStatusCode_Impl_.Locked = 423
HttpStatusCode_Impl_.FailedDependency = 424
HttpStatusCode_Impl_.UpgradeRequired = 426
HttpStatusCode_Impl_.PreconditionRequired = 428
HttpStatusCode_Impl_.TooManyRequests = 429
HttpStatusCode_Impl_.RequestHeaderFieldsTooLarge = 431
HttpStatusCode_Impl_.UnavailableForLegalReasons = 451
HttpStatusCode_Impl_.InternalServerError = 500
HttpStatusCode_Impl_.NotImplemented = 501
HttpStatusCode_Impl_.BadGateway = 502
HttpStatusCode_Impl_.ServiceUnavailable = 503
HttpStatusCode_Impl_.GatewayTimeout = 504
HttpStatusCode_Impl_.HTTPVersionNotSupported = 505
HttpStatusCode_Impl_.VariantAlsoNegotiates = 506
HttpStatusCode_Impl_.InsufficientStorage = 507
HttpStatusCode_Impl_.LoopDetected = 508
HttpStatusCode_Impl_.NotExtended = 510
HttpStatusCode_Impl_.NetworkAuthenticationRequired = 511

// Export

exports.default = HttpStatusCode_Impl_;