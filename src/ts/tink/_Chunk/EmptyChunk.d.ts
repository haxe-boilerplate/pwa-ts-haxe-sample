import tink_chunk_ChunkObject from "./../../tink/chunk/ChunkObject";
import tink_chunk_ChunkBase from "./../../tink/chunk/ChunkBase";
import haxe_io_Bytes from "./../../haxe/io/Bytes";

declare namespace tink._Chunk {

export class EmptyChunk extends tink_chunk_ChunkBase {

	constructor();
	getLength():any;
	slice(from:any, to:any):any;
	blitTo(target:any, offset:any):any;
	toString():any;
	toBytes():any;
	static EMPTY:any;


}

}

export default tink._Chunk.EmptyChunk;