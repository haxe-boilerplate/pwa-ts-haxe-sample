// Class: tink.url._Query.Query_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_url__$Query_QueryStringParser() {return require("./../../../tink/url/_Query/QueryStringParser");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../tink/url/_Portion/Portion_Impl_");}
function HxOverrides() {return require("./../../../HxOverrides");}
function haxe_ds_StringMap() {return require("./../../../haxe/ds/StringMap");}
function Reflect() {return require("./../../../Reflect");}

// Constructor

var Query_Impl_ = function(){}

// Meta

Query_Impl_.__name__ = ["tink","url","_Query","Query_Impl_"];
Query_Impl_.prototype = {
	
};
Query_Impl_.prototype.__class__ = Query_Impl_.prototype.constructor = $hxClasses["tink.url._Query.Query_Impl_"] = Query_Impl_;

// Init



// Statics

Query_Impl_.parse = function(this1) {
	return new (tink_url__$Query_QueryStringParser().default)(this1,"&","=",0);
}
Query_Impl_.with = function(this1,values) {
	var this2 = [];
	var ret = this2;
	var _g = [];
	var key = values.keys();
	while(key.hasNext()) {
		var key1 = key.next();
		_g.push(key1);
	}
	var insert = _g;
	var p = new (tink_url__$Query_QueryStringParser().default)(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		if(values.exists((tink_url__$Portion_Portion_$Impl_$().default).ofString(p1.name))) {
			ret.push((tink_url__$Portion_Portion_$Impl_$().default).ofString(p1.name) + "=" + values.get((tink_url__$Portion_Portion_$Impl_$().default).ofString(p1.name)));
			(HxOverrides().default).remove(insert,(tink_url__$Portion_Portion_$Impl_$().default).ofString(p1.name));
		} else {
			ret.push((tink_url__$Portion_Portion_$Impl_$().default).ofString(p1.name) + "=" + p1.value);
		}
	}
	var _g1 = 0;
	while(_g1 < insert.length) {
		var name = insert[_g1];
		++_g1;
		ret.push(name + "=" + values.get(name));
	}
	return ret.join("&");
}
Query_Impl_.iterator = function(this1) {
	return new (tink_url__$Query_QueryStringParser().default)(this1,"&","=",0);
}
Query_Impl_.toMap = function(this1) {
	var _g = new (haxe_ds_StringMap().default)();
	var p = new (tink_url__$Query_QueryStringParser().default)(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		var key = p1.name.toString();
		var value = p1.value;
		if(__map_reserved[key] != null) {
			_g.setReserved(key,value);
		} else {
			_g.h[key] = value;
		}
	}
	return _g;
}
Query_Impl_.ofObj = function(v) {
	var this1 = [];
	var ret = this1;
	var v1 = v;
	var _g = 0;
	var _g1 = (Reflect().default).fields(v1);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		ret.push((tink_url__$Portion_Portion_$Impl_$().default).ofString(k) + "=" + (tink_url__$Portion_Portion_$Impl_$().default).ofString(v1[k]));
	}
	return ret.join("&");
}
Query_Impl_.toString = function(this1) {
	return this1;
}
Query_Impl_.build = function() {
	var this1 = [];
	return this1;
}
Query_Impl_.parseString = function(s,sep,set,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(set == null) {
		set = "=";
	}
	if(sep == null) {
		sep = "&";
	}
	return new (tink_url__$Query_QueryStringParser().default)(s,sep,set,pos);
}


// Export

exports.default = Query_Impl_;