import tink_streams_Generator from "./../../../tink/streams/Generator";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_io__$Worker_Worker_$Impl_$ from "./../../../tink/io/_Worker/Worker_Impl_";
import tink_core__$Lazy_LazyFunc from "./../../../tink/core/_Lazy/LazyFunc";
import tink_streams_Step from "./../../../tink/streams/Step";
import tink__$Chunk_Chunk_$Impl_$ from "./../../../tink/_Chunk/Chunk_Impl_";
import haxe_io_Bytes from "./../../../haxe/io/Bytes";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import js__$Boot_HaxeError from "./../../../js/_Boot/HaxeError";
import haxe_io_Eof from "./../../../haxe/io/Eof";
import js_Boot from "./../../../js/Boot";
import haxe_io_Error from "./../../../haxe/io/Error";
import tink_core_TypedError from "./../../../tink/core/TypedError";

declare namespace tink.io.std {

export class InputSource extends tink_streams_Generator {

	constructor(name:any, target:any, worker:any, buf:any, offset:any);


}

}

export default tink.io.std.InputSource;