import tink_chunk_ChunkObject from "./../../../tink/chunk/ChunkObject";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import js_node_buffer__$Buffer_Helper from "./../../../js/node/buffer/_Buffer/Helper";
import js_node_buffer_Buffer from "buffer";

declare namespace tink.io.nodejs {

export class WrappedBuffer {

	constructor(buffer:any);
	
	getCursor():any;
	flatten(into:any):any;
	getLength():any;
	slice(from:any, to:any):any;
	toString():any;
	toBytes():any;
	blitTo(target:any, offset:any):any;
	static alloc(a1:any):any;


}

}

export default tink.io.nodejs.WrappedBuffer;