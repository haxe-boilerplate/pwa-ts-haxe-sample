import tink_chunk_ChunkObject from "./../../tink/chunk/ChunkObject";
import tink_chunk_ChunkBase from "./../../tink/chunk/ChunkBase";
import haxe_io_Bytes from "./../../haxe/io/Bytes";
import tink__$Chunk_Chunk_$Impl_$ from "./../../tink/_Chunk/Chunk_Impl_";

declare namespace tink.chunk {

export class ByteChunk extends tink_chunk_ChunkBase {

	constructor(data:any, from:any, to:any);
	
	from:any;
	to:any;
	wrapped:any;
	get_wrapped():any;
	getByte(index:any):any;
	flatten(into:any):any;
	getLength():any;
	getSlice(from:any, to:any):any;
	slice(from:any, to:any):any;
	blitTo(target:any, offset:any):any;
	toBytes():any;
	toString():any;
	static of(b:any):any;


}

}

export default tink.chunk.ByteChunk;