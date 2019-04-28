import tink__$Chunk_CompoundChunk from "./../../tink/_Chunk/CompoundChunk";
import tink_chunk_ChunkIterator from "./../../tink/chunk/ChunkIterator";
import tink_chunk_ByteChunk from "./../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../haxe/io/Bytes";
import Std from "./../../Std";
import HxOverrides from "./../../HxOverrides";
import tink__$Chunk_EmptyChunk from "./../../tink/_Chunk/EmptyChunk";

declare namespace tink._Chunk {

export class Chunk_Impl_ {

	static length:any;
	static get_length(this:any):any;
	static concat(this:any, that:any):any;
	static cursor(this:any):any;
	static iterator(this:any):any;
	static slice(this:any, from:any, to:any):any;
	static blitTo(this:any, target:any, offset:any):any;
	static toHex(this:any):any;
	static toString(this:any):any;
	static toBytes(this:any):any;
	static join(chunks:any):any;
	static ofBytes(b:any):any;
	static ofString(s:any):any;
	static ofHex(s:any):any;
	static catChunk(a:any, b:any):any;
	static rcatString(a:any, b:any):any;
	static lcatString(a:any, b:any):any;
	static lcatBytes(a:any, b:any):any;
	static rcatBytes(a:any, b:any):any;
	static EMPTY:any;


}

}

export default tink._Chunk.Chunk_Impl_;