import tink_streams_Generator from "./../../../tink/streams/Generator";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_streams_Step from "./../../../tink/streams/Step";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../../haxe/io/Bytes";
import tink_core_TypedError from "./../../../tink/core/TypedError";

declare namespace tink.io.js {

export class BlobSource extends tink_streams_Generator {

	constructor(name:any, blob:any, pos:any, chunkSize:any);
	name:any;
	static wrap(name:any, blob:any, chunkSize:any):any;


}

}

export default tink.io.js.BlobSource;