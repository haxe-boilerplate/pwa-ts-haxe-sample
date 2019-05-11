// Class: tink.http._Header.HeaderValue_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_ds_StringMap() {return require("./../../../haxe/ds/StringMap");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../tink/url/_Portion/Portion_Impl_");}
function HxOverrides() {return require("./../../../HxOverrides");}
function StringTools() {return require("./../../../StringTools");}
function tink_url__$Query_QueryStringParser() {return require("./../../../tink/url/_Query/QueryStringParser");}
function haxe_crypto_Base64() {return require("./../../../haxe/crypto/Base64");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function DateTools() {return require("./../../../DateTools");}

// Constructor

var HeaderValue_Impl_ = function(){}

// Meta

HeaderValue_Impl_.__name__ = "tink.http._Header.HeaderValue_Impl_";
HeaderValue_Impl_.prototype = {
	
};
HeaderValue_Impl_.prototype.__class__ = HeaderValue_Impl_.prototype.constructor = $hxClasses["tink.http._Header.HeaderValue_Impl_"] = HeaderValue_Impl_;

// Init



// Statics

HeaderValue_Impl_.getExtension = function(this1) {
	return HeaderValue_Impl_.parse(this1)[0].extensions;
}
HeaderValue_Impl_.parse = function(this1) {
	return HeaderValue_Impl_.parseWith(this1,function(_,params) {
		var _g = new (haxe_ds_StringMap().default)();
		var p = params;
		while(p.hasNext()) {
			var p1 = p.next();
			var key = p1.name;
			var value;
			var _g1 = (tink_url__$Portion_Portion_$Impl_$().default).toString(p1.value);
			var quoted = _g1;
			if((HxOverrides().default).cca(quoted,0) == 34) {
				value = (HxOverrides().default).substr(quoted,1,quoted.length - 2);
			} else {
				var v = _g1;
				value = v;
			}
			if(__map_reserved[key] != null) {
				_g.setReserved(key,value);
			} else {
				_g.h[key] = value;
			}
		}
		return _g;
	});
}
HeaderValue_Impl_.parseWith = function(this1,parseExtension) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split(",");
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		v = (StringTools().default).trim(v);
		var i;
		var _g11 = v.indexOf(";");
		if(_g11 == -1) {
			i = v.length;
		} else {
			var i1 = _g11;
			i = i1;
		}
		var value = (HxOverrides().default).substr(v,0,i);
		_g.push({ value : value, extensions : parseExtension(value,new (tink_url__$Query_QueryStringParser().default)(v,";","=",i + 1))});
	}
	return _g;
}
HeaderValue_Impl_.basicAuth = function(username,password) {
	return "Basic " + (haxe_crypto_Base64().default).encode((haxe_io_Bytes().default).ofString("" + username + ":" + password)).toString();
}
HeaderValue_Impl_.ofDate = function(d) {
	return (DateTools().default).format(d,HeaderValue_Impl_.DAYS[d.getDay()] + ", %d " + HeaderValue_Impl_.MONTHS[d.getMonth()] + " %Y %H:%M:%S GMT");
}
HeaderValue_Impl_.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
}
HeaderValue_Impl_.DAYS = "Sun,Mon,Tue,Wen,Thu,Fri,Sat".split(",")
HeaderValue_Impl_.MONTHS = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")

// Export

exports.default = HeaderValue_Impl_;