// Class: tink.json.Parser0

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_json_BasicParser() {return require("./../../tink/json/BasicParser");}
function tink_json__$Parser_JsonString_$Impl_$() {return require("./../../tink/json/_Parser/JsonString_Impl_");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}

// Constructor

var Parser0 = function() {
	(tink_json_BasicParser().default).call(this);
}

// Meta

Parser0.__name__ = "tink.json.Parser0";
Parser0.__super__ = (tink_json_BasicParser().default);
Parser0.prototype = $extend((tink_json_BasicParser().default).prototype, {
	parse0: function() {
		var _gthis = this;
		var v_slideshow = null;
		var hasv_slideshow = false;
		var __start__ = this.pos;
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 123) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			this.die("Expected {");
		}
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp1;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp1 = true;
		} else {
			tmp1 = false;
		}
		if(!tmp1) {
			while(true) {
				var __name__ = this.parseString();
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp2;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 58) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp2 = true;
				} else {
					tmp2 = false;
				}
				if(!tmp2) {
					this.die("Expected :");
				}
				if("slideshow".length == __name__.max - __name__.min && __name__.source.startsWith("slideshow",__name__.min)) {
					v_slideshow = this.parse1();
					hasv_slideshow = true;
				} else {
					this.skipValue();
				}
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp3;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp3 = true;
				} else {
					tmp3 = false;
				}
				if(!tmp3) {
					break;
				}
			}
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp4;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp4 = true;
			} else {
				tmp4 = false;
			}
			if(!tmp4) {
				this.die("Expected }");
			}
		}
		var __missing__ = function(field) {
			return _gthis.die("missing field \"" + field + "\"",__start__);
		};
		return { slideshow : hasv_slideshow ? v_slideshow : __missing__("slideshow")};
	},
	parse1: function() {
		var _gthis = this;
		var v_author = null;
		var hasv_author = false;
		var v_date = null;
		var hasv_date = false;
		var v_slides = null;
		var hasv_slides = false;
		var v_title = null;
		var hasv_title = false;
		var __start__ = this.pos;
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 123) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			this.die("Expected {");
		}
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp1;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp1 = true;
		} else {
			tmp1 = false;
		}
		if(!tmp1) {
			while(true) {
				var __name__ = this.parseString();
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp2;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 58) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp2 = true;
				} else {
					tmp2 = false;
				}
				if(!tmp2) {
					this.die("Expected :");
				}
				if("title".length == __name__.max - __name__.min && __name__.source.startsWith("title",__name__.min)) {
					v_title = (tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString());
					hasv_title = true;
				} else if("slides".length == __name__.max - __name__.min && __name__.source.startsWith("slides",__name__.min)) {
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					var v_slides1;
					if(this.max > this.pos && this.source.charCodeAt(this.pos) == 91) {
						this.pos += 1;
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						v_slides1 = true;
					} else {
						v_slides1 = false;
					}
					if(!v_slides1) {
						this.die("Expected [");
					}
					var __ret = [];
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					var v_slides2;
					if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
						this.pos += 1;
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						v_slides2 = true;
					} else {
						v_slides2 = false;
					}
					if(!v_slides2) {
						while(true) {
							__ret.push(this.parse2());
							while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
							var v_slides3;
							if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
								this.pos += 1;
								while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
								v_slides3 = true;
							} else {
								v_slides3 = false;
							}
							if(!v_slides3) {
								break;
							}
						}
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						var v_slides4;
						if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
							this.pos += 1;
							while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
							v_slides4 = true;
						} else {
							v_slides4 = false;
						}
						if(!v_slides4) {
							this.die("Expected ]");
						}
					}
					v_slides = __ret;
					hasv_slides = true;
				} else if("date".length == __name__.max - __name__.min && __name__.source.startsWith("date",__name__.min)) {
					v_date = (tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString());
					hasv_date = true;
				} else if("author".length == __name__.max - __name__.min && __name__.source.startsWith("author",__name__.min)) {
					v_author = (tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString());
					hasv_author = true;
				} else {
					this.skipValue();
				}
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp3;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp3 = true;
				} else {
					tmp3 = false;
				}
				if(!tmp3) {
					break;
				}
			}
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp4;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp4 = true;
			} else {
				tmp4 = false;
			}
			if(!tmp4) {
				this.die("Expected }");
			}
		}
		var __missing__ = function(field) {
			return _gthis.die("missing field \"" + field + "\"",__start__);
		};
		return { author : hasv_author ? v_author : __missing__("author"), date : hasv_date ? v_date : __missing__("date"), slides : hasv_slides ? v_slides : __missing__("slides"), title : hasv_title ? v_title : __missing__("title")};
	},
	parse2: function() {
		var _gthis = this;
		var v_items = null;
		var v_title = null;
		var hasv_title = false;
		var v_type = null;
		var hasv_type = false;
		var __start__ = this.pos;
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 123) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			this.die("Expected {");
		}
		while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
		var tmp1;
		if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
			this.pos += 1;
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			tmp1 = true;
		} else {
			tmp1 = false;
		}
		if(!tmp1) {
			while(true) {
				var __name__ = this.parseString();
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp2;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 58) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp2 = true;
				} else {
					tmp2 = false;
				}
				if(!tmp2) {
					this.die("Expected :");
				}
				if("type".length == __name__.max - __name__.min && __name__.source.startsWith("type",__name__.min)) {
					v_type = (tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString());
					hasv_type = true;
				} else if("title".length == __name__.max - __name__.min && __name__.source.startsWith("title",__name__.min)) {
					v_title = (tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString());
					hasv_title = true;
				} else if("items".length == __name__.max - __name__.min && __name__.source.startsWith("items",__name__.min)) {
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					var v_items1;
					if(this.max > this.pos + 3 && this.source.charCodeAt(this.pos) == 110 && this.source.charCodeAt(this.pos + 1) == 117 && this.source.charCodeAt(this.pos + 2) == 108 && this.source.charCodeAt(this.pos + 3) == 108) {
						this.pos += 4;
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						v_items1 = true;
					} else {
						v_items1 = false;
					}
					if(v_items1) {
						v_items = null;
					} else {
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						var v_items2;
						if(this.max > this.pos && this.source.charCodeAt(this.pos) == 91) {
							this.pos += 1;
							while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
							v_items2 = true;
						} else {
							v_items2 = false;
						}
						if(!v_items2) {
							this.die("Expected [");
						}
						var __ret = [];
						while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
						var v_items3;
						if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
							this.pos += 1;
							while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
							v_items3 = true;
						} else {
							v_items3 = false;
						}
						if(!v_items3) {
							while(true) {
								__ret.push((tink_json__$Parser_JsonString_$Impl_$().default).toString(this.parseString()));
								while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
								var v_items4;
								if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
									this.pos += 1;
									while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
									v_items4 = true;
								} else {
									v_items4 = false;
								}
								if(!v_items4) {
									break;
								}
							}
							while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
							var v_items5;
							if(this.max > this.pos && this.source.charCodeAt(this.pos) == 93) {
								this.pos += 1;
								while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
								v_items5 = true;
							} else {
								v_items5 = false;
							}
							if(!v_items5) {
								this.die("Expected ]");
							}
						}
						v_items = __ret;
					}
				} else {
					this.skipValue();
				}
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				var tmp3;
				if(this.max > this.pos && this.source.charCodeAt(this.pos) == 44) {
					this.pos += 1;
					while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
					tmp3 = true;
				} else {
					tmp3 = false;
				}
				if(!tmp3) {
					break;
				}
			}
			while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
			var tmp4;
			if(this.max > this.pos && this.source.charCodeAt(this.pos) == 125) {
				this.pos += 1;
				while(this.pos < this.max && this.source.charCodeAt(this.pos) < 33) this.pos++;
				tmp4 = true;
			} else {
				tmp4 = false;
			}
			if(!tmp4) {
				this.die("Expected }");
			}
		}
		var __missing__ = function(field) {
			return _gthis.die("missing field \"" + field + "\"",__start__);
		};
		return { items : v_items, title : hasv_title ? v_title : __missing__("title"), type : hasv_type ? v_type : __missing__("type")};
	},
	parse: function(source) {
		this.init(source);
		return this.parse0();
	},
	tryParse: function(source) {
		var _gthis = this;
		return (tink_core_TypedError().default).catchExceptions(function() {
			return _gthis.parse(source);
		},null,{ fileName : "tink/json/macros/Macro.hx", lineNumber : 91, className : "tink.json.Parser0", methodName : "tryParse"});
	}
});
Parser0.prototype.__class__ = Parser0.prototype.constructor = $hxClasses["tink.json.Parser0"] = Parser0;

// Init



// Statics




// Export

exports.default = Parser0;