import tink_io_StreamParserObject from "./../../tink/io/StreamParserObject";
import Std from "./../../Std";
import tink_io_ParseStep from "./../../tink/io/ParseStep";
import tink_core_TypedError from "./../../tink/core/TypedError";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink__$Chunk_Chunk_$Impl_$ from "./../../tink/_Chunk/Chunk_Impl_";
import tink_chunk__$Seekable_Seekable_$Impl_$ from "./../../tink/chunk/_Seekable/Seekable_Impl_";
import haxe_io_Bytes from "./../../haxe/io/Bytes";

declare namespace tink.http {

export class ChunkedParser {

	constructor();
	chunkSize:any;
	reset():any;
	progress(cursor:any):any;
	eof(rest:any):any;
	static LINEBREAK:any;


}

}

export default tink.http.ChunkedParser;