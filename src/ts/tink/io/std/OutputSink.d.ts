import tink_io_SinkBase from "./../../../tink/io/SinkBase";
import tink__$Chunk_Chunk_$Impl_$ from "./../../../tink/_Chunk/Chunk_Impl_";
import tink_streams__$Stream_Handler_$Impl_$ from "./../../../tink/streams/_Stream/Handler_Impl_";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_streams_Handled from "./../../../tink/streams/Handled";
import tink_io__$Worker_Worker_$Impl_$ from "./../../../tink/io/_Worker/Worker_Impl_";
import tink_core__$Lazy_LazyFunc from "./../../../tink/core/_Lazy/LazyFunc";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import js__$Boot_HaxeError from "./../../../js/_Boot/HaxeError";
import haxe_io_Eof from "./../../../haxe/io/Eof";
import js_Boot from "./../../../js/Boot";
import haxe_io_Error from "./../../../haxe/io/Error";
import tink_core_TypedError from "./../../../tink/core/TypedError";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import tink_io_PipeResultTools from "./../../../tink/io/PipeResultTools";
import tink_core_Noise from "./../../../tink/core/Noise";

declare namespace tink.io.std {

export class OutputSink extends tink_io_SinkBase {

	constructor(name:any, target:any, worker:any);
	name:any;
	target:any;
	worker:any;
	consume(source:any, options:any):any;


}

}

export default tink.io.std.OutputSink;