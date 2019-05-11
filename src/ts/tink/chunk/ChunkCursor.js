// Class: tink.chunk.ChunkCursor

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}
function haxe_ds_Option() {return require("./../../haxe/ds/Option");}

// Constructor

var ChunkCursor = function() {
	this.currentByte = -1;
	this.currentPos = 0;
	this.length = 0;
	this.curLength = 0;
	this.curOffset = 0;
	this.curPartIndex = 0;
}

// Meta

ChunkCursor.__name__ = "tink.chunk.ChunkCursor";
ChunkCursor.prototype = {
	clone: function() {
		var ret = new ChunkCursor();
		ret.parts = this.parts.slice();
		ret.curPart = this.curPart;
		ret.curPartIndex = this.curPartIndex;
		ret.curOffset = this.curOffset;
		ret.curLength = this.curLength;
		ret.length = this.length;
		ret.currentPos = this.currentPos;
		ret.currentByte = this.currentByte;
		return ret;
	},
	reset: function() {
		this.length = 0;
		this.currentPos = 0;
		this.currentByte = -1;
		this.curOffset = 0;
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			this.length += p.to - p.from;
		}
		this.curPart = this.parts[this.curPartIndex = 0];
		if(this.curPart != null) {
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this1 = this.curPart;
			this.currentByte = _this1.data.bytes[_this1.from];
		}
	},
	flush: function() {
		var ret = this.left();
		this.shift();
		return ret;
	},
	prune: function() {
		this.shift();
	},
	add: function(chunk) {
		chunk.flatten(this.parts);
		this.reset();
	},
	shift: function(chunk) {
		this.parts.splice(0,this.curPartIndex);
		var _g = this.parts[0];
		if(_g != null) {
			var chunk1 = _g;
			var _g1 = chunk1.getSlice(this.curOffset,this.curLength);
			if(_g1 == null) {
				this.parts.shift();
			} else {
				var rest = _g1;
				this.parts[0] = rest;
			}
		}
		if(chunk != null) {
			this.add(chunk);
		} else {
			this.reset();
		}
	},
	clear: function() {
		this.parts = [];
		this.reset();
	},
	left: function() {
		if(this.curPart == null) {
			return (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
		}
		var _g = [];
		var _g1 = 0;
		var _g2 = this.curPartIndex;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		var left = _g;
		left.push(this.curPart.slice(0,this.curOffset));
		return (tink__$Chunk_Chunk_$Impl_$().default).join(left);
	},
	right: function() {
		if(this.curPart == null) {
			return (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
		}
		var _g = [];
		var _g1 = this.curPartIndex;
		var _g2 = this.parts.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		var right = _g;
		if(right.length > 0) {
			right[0] = this.curPart.slice(this.curOffset,this.curLength);
		}
		return (tink__$Chunk_Chunk_$Impl_$().default).join(right);
	},
	seek: function(seekable,options) {
		var _gthis = this;
		if(this.curPart == null || seekable == null || seekable.length == 0) {
			return (haxe_ds_Option().default).None;
		}
		var max = seekable.length - 1;
		var first = seekable[0];
		var candidates = [];
		var count = 0;
		var copy = this.clone();
		copy.shift();
		var part = function(b,offset) {
			var data = b.data;
			var _g = b.from + offset;
			var _g1 = b.to;
			while(_g < _g1) {
				var i = _g++;
				var byte = data.bytes[i];
				if(candidates.length > 0) {
					var c = 0;
					while(c < count) {
						var pos = candidates[c];
						if(seekable[pos] == byte) {
							if(pos == max) {
								copy.moveTo(copy.currentPos + (i - (b.from + offset) - seekable.length + 1));
								var before = copy.left();
								var delta = before.getLength() + seekable.length;
								_gthis.moveTo(_gthis.currentPos + delta);
								if(options == null) {
									_gthis.shift();
								} else if(options.withoutPruning == null) {
									_gthis.shift();
								} else if(options.withoutPruning == false) {
									_gthis.shift();
								}
								return (haxe_ds_Option().default).Some(before);
							} else {
								candidates[c++] = pos + 1;
							}
						} else {
							count -= 1;
							var last = candidates.pop();
							if(count > c) {
								candidates[c] = last;
							}
						}
					}
				}
				if(byte == first) {
					count = candidates.push(1);
				}
			}
			copy.moveTo(copy.currentPos + (b.to - (b.from + offset)));
			return (haxe_ds_Option().default).None;
		};
		var _g2 = part(this.curPart,this.curOffset);
		if(_g2._hx_index == 1) {
			var _g3 = this.curPartIndex + 1;
			var _g11 = this.parts.length;
			while(_g3 < _g11) {
				var i1 = _g3++;
				var _g4 = part(this.parts[i1],0);
				switch(_g4._hx_index) {
				case 0:
					var v = _g4.v;
					return (haxe_ds_Option().default).Some(v);
				case 1:
					break;
				}
			}
			return (haxe_ds_Option().default).None;
		} else {
			var v1 = _g2;
			return v1;
		}
	},
	sweep: function(len) {
		var data = this.right().slice(0,len);
		this.moveTo(this.currentPos + len);
		return data;
	},
	sweepTo: function(pos) {
		return this.sweep(pos - this.currentPos);
	},
	moveBy: function(delta) {
		return this.moveTo(this.currentPos + delta);
	},
	moveTo: function(position) {
		if(this.length == 0) {
			return 0;
		}
		if(position > this.length) {
			position = this.length - 1;
		}
		if(position < 0) {
			position = 0;
		}
		this.currentPos = position;
		if(position == this.length) {
			this.ffwd();
		} else {
			var _g = 0;
			var _g1 = this.parts.length;
			while(_g < _g1) {
				var i = _g++;
				var c = this.parts[i];
				var _g2 = c.to - c.from;
				var enough = _g2;
				if(enough > position) {
					this.curPart = c;
					this.curPartIndex = i;
					this.curOffset = position;
					this.curLength = c.to - c.from;
					this.currentByte = c.data.bytes[c.from + position];
					break;
				} else {
					var v = _g2;
					position -= v;
				}
			}
		}
		return this.currentPos;
	},
	ffwd: function() {
		this.currentByte = -1;
		this.curLength = 0;
		this.curOffset = 0;
		this.curPart = null;
		this.curPartIndex = this.parts.length;
	},
	next: function() {
		if(this.currentPos == this.length) {
			return false;
		}
		this.currentPos++;
		if(this.currentPos == this.length) {
			this.ffwd();
			return false;
		}
		if(this.curOffset == this.curLength - 1) {
			this.curOffset = 0;
			this.curPart = this.parts[++this.curPartIndex];
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this1 = this.curPart;
			this.currentByte = _this1.data.bytes[_this1.from];
		} else {
			var _this2 = this.curPart;
			this.currentByte = _this2.data.bytes[_this2.from + ++this.curOffset];
		}
		return true;
	}
};
ChunkCursor.prototype.__class__ = ChunkCursor.prototype.constructor = $hxClasses["tink.chunk.ChunkCursor"] = ChunkCursor;

// Init



// Statics

ChunkCursor.create = function(parts) {
	var ret = new ChunkCursor();
	ret.parts = parts;
	ret.reset();
	return ret;
}


// Export

exports.default = ChunkCursor;