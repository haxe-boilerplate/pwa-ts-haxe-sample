// Class: tink.json.BasicParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_json__$Parser_SliceData() {return require("./../../tink/json/_Parser/SliceData");}
function tink_json_Value() {return require("./../../tink/json/Value");}
function tink_json__$Parser_JsonString_$Impl_$() {return require("./../../tink/json/_Parser/JsonString_Impl_");}
function tink_core_NamedWith() {return require("./../../tink/core/NamedWith");}
function StringTools() {return require("./../../StringTools");}
function HxOverrides() {return require("./../../HxOverrides");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function tink_core_Annex() {return require("./../../tink/core/Annex");}

// Constructor

var BasicParser = function() {
	this.plugins = new (tink_core_Annex().default)(this);
}

// Meta

BasicParser.__name__ = "tink.json.BasicParser";
BasicParser.prototype = {
	init: function(source) {
		this.source = source;
		this.pos = 0;
		this.max = source.length;
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
	},
	skipIgnored: function() {
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
	},
	parseDynamic: function() {
		var start = this.pos;
		this.skipValue();
		return JSON.parse(this.source.substring(start,this.pos));
	},
	parseString: function() {
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var e;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 34) {
			this.pos += 1;
			e = true;
		} else {
			e = false;
		}
		var e1 = !e ? this.die("Expected string") : null;
		return this.parseRestOfString();
	},
	parseRestOfString: function() {
		return this.slice(this.skipString(),this.pos - 1);
	},
	skipString: function() {
		var start = this.pos;
		while(true) {
			var _g = this.source.indexOf("\"",this.pos);
			if(_g == -1) {
				this.die("unterminated string",start);
			} else {
				var v = _g;
				this.pos = v + 1;
				var p = this.pos - 2;
				while(this.source.charCodeAt(p) == 92) --p;
				if((p - this.pos & 1) == 0) {
					break;
				}
			}
		}
		return start;
	},
	parseNumber: function() {
		var char = this.source.charCodeAt(this.pos);
		if(char == 46 || char == 45 || char < 58 && char > 47) {
			return this.doParseNumber();
		} else {
			return this.die("number expected");
		}
	},
	doParseNumber: function() {
		return this.slice(this.skipNumber(this.source.charCodeAt(this.pos++)),this.pos);
	},
	invalidNumber: function(start) {
		return this.die("Invalid number " + this.source.substring(start,this.pos),start);
	},
	skipNumber: function(c) {
		var start = this.pos - 1;
		var minus = c == 45;
		var digit = !minus;
		var zero = c == 48;
		var point = false;
		var e = false;
		var pm = false;
		var end = false;
		while(true) {
			c = this.source.charCodeAt(this.pos++);
			switch(c) {
			case 43:case 45:
				if(!e || pm) {
					this.invalidNumber(start);
				}
				digit = false;
				pm = true;
				break;
			case 46:
				if(minus || point) {
					this.invalidNumber(start);
				}
				digit = false;
				point = true;
				break;
			case 48:
				if(zero && !point) {
					this.invalidNumber(start);
				}
				if(minus) {
					minus = false;
					zero = true;
				}
				digit = true;
				break;
			case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				if(zero && !point) {
					this.invalidNumber(start);
				}
				if(minus) {
					minus = false;
				}
				digit = true;
				zero = false;
				break;
			case 69:case 101:
				if(minus || zero || e) {
					this.invalidNumber(start);
				}
				digit = false;
				e = true;
				break;
			default:
				if(!digit) {
					this.invalidNumber(start);
				}
				this.pos--;
				end = true;
			}
			if(end) {
				break;
			}
		}
		return start;
	},
	slice: function(from,to) {
		return new (tink_json__$Parser_SliceData().default)(this.source,from,to);
	},
	nextChar: function() {
		return this.source.charCodeAt(this.pos++);
	},
	parseSerialized: function() {
		var start = this.pos;
		this.skipValue();
		return this.source.substring(start,this.pos);
	},
	parseValue: function() {
		var _gthis = this;
		var _g = this.source.charCodeAt(this.pos++);
		switch(_g) {
		case 34:
			return (tink_json_Value().default).VString((tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseRestOfString()));
		case 91:
			var ret = [];
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp = true;
			} else {
				tmp = false;
			}
			if(!tmp) {
				while(true) {
					ret.push(this.parseValue());
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					var tmp1;
					if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
						this.pos += 1;
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						tmp1 = true;
					} else {
						tmp1 = false;
					}
					if(!tmp1) {
						break;
					}
				}
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp2;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
					this.pos += 1;
					tmp2 = true;
				} else {
					tmp2 = false;
				}
				if(!tmp2) {
					this.die("Expected ]");
				}
			}
			return (tink_json_Value().default).VArray(ret);
		case 102:
			var e;
			if(this.max > this.pos + 3 && this.source.charCodeAt(this.pos) == 97 && this.source.charCodeAt(this.pos + 1) == 108 && this.source.charCodeAt(this.pos + 2) == 115 && this.source.charCodeAt(this.pos + 3) == 101) {
				this.pos += 4;
				e = true;
			} else {
				e = false;
			}
			var e1 = !e ? this.die("Expected alse") : null;
			return (tink_json_Value().default).VBool(false);
		case 110:
			var e2;
			if(this.max > this.pos + 2 && this.source.charCodeAt(this.pos) == 117 && this.source.charCodeAt(this.pos + 1) == 108 && this.source.charCodeAt(this.pos + 2) == 108) {
				this.pos += 3;
				e2 = true;
			} else {
				e2 = false;
			}
			var e3 = !e2 ? this.die("Expected ull") : null;
			return (tink_json_Value().default).VNull;
		case 116:
			var e4;
			if(this.max > this.pos + 2 && this.source.charCodeAt(this.pos) == 114 && this.source.charCodeAt(this.pos + 1) == 117 && this.source.charCodeAt(this.pos + 2) == 101) {
				this.pos += 3;
				e4 = true;
			} else {
				e4 = false;
			}
			var e5 = !e4 ? this.die("Expected rue") : null;
			return (tink_json_Value().default).VBool(true);
		case 123:
			var fields = [];
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp3;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp3 = true;
			} else {
				tmp3 = false;
			}
			if(!tmp3) {
				while(true) {
					if(_gthis.source.charCodeAt(_gthis.pos++) != 34) {
						_gthis.die("expected string",_gthis.pos - 1);
					}
					var tmp4 = (tink_json__$Parser_JsonString_$Impl_$().default).toString(_gthis.parseRestOfString());
					while(_gthis.pos < _gthis.max && _gthis.source.charCodeAt(_gthis.pos) < 33) _gthis.pos++;
					var e6;
					if(_gthis.max > _gthis.pos && _gthis.source.charCodeAt(_gthis.pos) == 58) {
						_gthis.pos += 1;
						while(_gthis.pos < _gthis.max && _gthis.source.charCodeAt(_gthis.pos) < 33) _gthis.pos++;
						e6 = true;
					} else {
						e6 = false;
					}
					var e7 = !e6 ? _gthis.die("Expected :") : null;
					fields.push(new (tink_core_NamedWith().default)(tmp4,_gthis.parseValue()));
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					var tmp5;
					if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
						this.pos += 1;
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						tmp5 = true;
					} else {
						tmp5 = false;
					}
					if(!tmp5) {
						break;
					}
				}
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp6;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
					this.pos += 1;
					tmp6 = true;
				} else {
					tmp6 = false;
				}
				if(!tmp6) {
					this.die("Expected }");
				}
			}
			return (tink_json_Value().default).VObject(fields);
		default:
			var char = _g;
			if(char == 46 || char == 45 || char < 58 && char > 47) {
				this.pos--;
				var this1 = this.doParseNumber();
				return (tink_json_Value().default).VNumber(parseFloat(this1.source.substring(this1.min,this1.max)));
			} else {
				return this.invalidChar(char);
			}
		}
	},
	skipArray: function() {
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp = true;
		} else {
			tmp = false;
		}
		if(tmp) {
			return;
		}
		while(true) {
			this.skipValue();
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp1;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp1 = true;
			} else {
				tmp1 = false;
			}
			if(!tmp1) {
				break;
			}
		}
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp2;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
			this.pos += 1;
			tmp2 = true;
		} else {
			tmp2 = false;
		}
		if(!tmp2) {
			this.die("Expected ]");
		}
	},
	skipValue: function() {
		var _gthis = this;
		var _g = this.source.charCodeAt(this.pos++);
		switch(_g) {
		case 34:
			this.skipString();
			break;
		case 91:
			this.skipArray();
			break;
		case 102:
			var tmp;
			if(this.max > this.pos + 3 && this.source.charCodeAt(this.pos) == 97 && this.source.charCodeAt(this.pos + 1) == 108 && this.source.charCodeAt(this.pos + 2) == 115 && this.source.charCodeAt(this.pos + 3) == 101) {
				this.pos += 4;
				tmp = true;
			} else {
				tmp = false;
			}
			if(!tmp) {
				this.die("Expected alse");
			}
			break;
		case 110:
			var tmp1;
			if(this.max > this.pos + 2 && this.source.charCodeAt(this.pos) == 117 && this.source.charCodeAt(this.pos + 1) == 108 && this.source.charCodeAt(this.pos + 2) == 108) {
				this.pos += 3;
				tmp1 = true;
			} else {
				tmp1 = false;
			}
			if(!tmp1) {
				this.die("Expected ull");
			}
			break;
		case 116:
			var tmp2;
			if(this.max > this.pos + 2 && this.source.charCodeAt(this.pos) == 114 && this.source.charCodeAt(this.pos + 1) == 117 && this.source.charCodeAt(this.pos + 2) == 101) {
				this.pos += 3;
				tmp2 = true;
			} else {
				tmp2 = false;
			}
			if(!tmp2) {
				this.die("Expected rue");
			}
			break;
		case 123:
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp3;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp3 = true;
			} else {
				tmp3 = false;
			}
			if(tmp3) {
				return;
			}
			while(true) {
				if(_gthis.source.charCodeAt(_gthis.pos++) != 34) {
					_gthis.die("expected string",_gthis.pos - 1);
				}
				_gthis.skipString();
				while(_gthis.pos < _gthis.max && _gthis.source.charCodeAt(_gthis.pos) < 33) _gthis.pos++;
				var tmp4;
				if(_gthis.max > _gthis.pos && _gthis.source.charCodeAt(_gthis.pos) == 58) {
					_gthis.pos += 1;
					while(_gthis.pos < _gthis.max && _gthis.source.charCodeAt(_gthis.pos) < 33) _gthis.pos++;
					tmp4 = true;
				} else {
					tmp4 = false;
				}
				if(!tmp4) {
					_gthis.die("Expected :");
				}
				_gthis.skipValue();
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp5;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp5 = true;
				} else {
					tmp5 = false;
				}
				if(!tmp5) {
					break;
				}
			}
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp6;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				tmp6 = true;
			} else {
				tmp6 = false;
			}
			if(!tmp6) {
				this.die("Expected }");
			}
			break;
		default:
			var char = _g;
			if(char == 46 || char == 45 || char < 58 && char > 47) {
				this.skipNumber(char);
			} else {
				this.invalidChar(char);
			}
		}
	},
	invalidChar: function(c) {
		return this.die("invalid char " + (StringTools().default).hex(c,2),this.pos - 1);
	},
	die: function(s,pos,end) {
		if(pos == null) {
			pos = this.pos;
			end = pos;
		} else if(end == null) {
			end = this.pos;
		}
		if(end <= pos) {
			end = pos + 1;
		}
		var range = end > pos + 1 ? "characters " + pos + " - " + end : "character " + pos;
		var clip = function(s1,maxLength,left) {
			if(s1.length > maxLength) {
				if(left) {
					return "... " + (HxOverrides().default).substr(s1,s1.length - maxLength,null);
				} else {
					return (HxOverrides().default).substr(s1,0,maxLength) + " ...";
				}
			} else {
				return s1;
			}
		};
		var p = pos + end;
		var center = p >> 1;
		var context = clip(this.source.substring(0,pos),20,true) + "  ---->  " + clip(this.source.substring(pos,center),20,false) + clip(this.source.substring(center,end),20,true) + "  <----  " + clip(this.source.substring(end),20,false);
		return (tink_core_TypedError().default).withData(422,s + (" at " + range + " in " + context),{ source : this.source, start : pos, end : end},{ fileName : "tink/json/Parser.hx", lineNumber : 347, className : "tink.json.BasicParser", methodName : "die"}).throwSelf();
	},
	parseBool: function() {
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp;
		if(this.max > this.pos + 3 && this.source.charCodeAt(this.pos) == 116 && this.source.charCodeAt(this.pos + 1) == 114 && this.source.charCodeAt(this.pos + 2) == 117 && this.source.charCodeAt(this.pos + 3) == 101) {
			this.pos += 4;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp = true;
		} else {
			tmp = false;
		}
		if(tmp) {
			return true;
		} else {
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp1;
			if(this.max > this.pos + 4 && this.source.charCodeAt(this.pos) == 102 && this.source.charCodeAt(this.pos + 1) == 97 && this.source.charCodeAt(this.pos + 2) == 108 && this.source.charCodeAt(this.pos + 3) == 115 && this.source.charCodeAt(this.pos + 4) == 101) {
				this.pos += 5;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp1 = true;
			} else {
				tmp1 = false;
			}
			if(tmp1) {
				return false;
			} else {
				return this.die("expected boolean value");
			}
		}
	}
};
BasicParser.prototype.__class__ = BasicParser.prototype.constructor = $hxClasses["tink.json.BasicParser"] = BasicParser;

// Init



// Statics

BasicParser.isDigit = function(char) {
	if(char < 58) {
		return char > 47;
	} else {
		return false;
	}
}
BasicParser.startsNumber = function(char) {
	if(!(char == 46 || char == 45)) {
		if(char < 58) {
			return char > 47;
		} else {
			return false;
		}
	} else {
		return true;
	}
}


// Export

exports.default = BasicParser;