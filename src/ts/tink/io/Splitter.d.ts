import tink_io_BytewiseParser from "./../../tink/io/BytewiseParser";
import tink_io_ParseStep from "./../../tink/io/ParseStep";
import haxe_ds_Option from "./../../haxe/ds/Option";
import tink__$Chunk_Chunk_$Impl_$ from "./../../tink/_Chunk/Chunk_Impl_";
import tink_chunk_ByteChunk from "./../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../haxe/io/Bytes";

declare namespace tink.io {

export class Splitter extends tink_io_BytewiseParser {

	constructor(delim:any);
	delim:any;
	buf:any;
	read(char:any):any;


}

}

export default tink.io.Splitter;