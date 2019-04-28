import tink_streams_Empty from "./../../../tink/streams/Empty";
import tink_io_nodejs_NodejsSource from "./../../../tink/io/nodejs/NodejsSource";
import js_node_stream_PassThrough from "stream";
import tink_streams__$Stream_Handler_$Impl_$ from "./../../../tink/streams/_Stream/Handler_Impl_";
import js_node_buffer_Buffer from "buffer";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_streams_Handled from "./../../../tink/streams/Handled";
import tink_io_js_BlobSource from "./../../../tink/io/js/BlobSource";
import tink_io__$Worker_Worker_$Impl_$ from "./../../../tink/io/_Worker/Worker_Impl_";
import tink_io_std_InputSource from "./../../../tink/io/std/InputSource";
import haxe_io_Bytes from "./../../../haxe/io/Bytes";
import tink_streams__$Stream_Stream_$Impl_$ from "./../../../tink/streams/_Stream/Stream_Impl_";
import tink__$Chunk_Chunk_$Impl_$ from "./../../../tink/_Chunk/Chunk_Impl_";
import tink_streams__$Stream_Reducer_$Impl_$ from "./../../../tink/streams/_Stream/Reducer_Impl_";
import tink_streams_ReductionStep from "./../../../tink/streams/ReductionStep";
import tink_streams__$Stream_Regrouper_$Impl_$ from "./../../../tink/streams/_Stream/Regrouper_Impl_";
import tink_streams_RegroupResult from "./../../../tink/streams/RegroupResult";
import haxe_ds_Option from "./../../../haxe/ds/Option";
import tink_streams_Single from "./../../../tink/streams/Single";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";

declare namespace tink.io._Source {

export class Source_Impl_ {

	
	static dirty(this:any):any;
	static depleted:any;
	static get_depleted(this:any):any;
	static ofNodeStream(name:any, r:any, options?:any):any;
	static toNodeStream(this:any):any;
	static ofJsFile(name:any, file:any, options?:any):any;
	static ofJsBlob(name:any, blob:any, options?:any):any;
	static ofInput(name:any, input:any, options?:any):any;
	static chunked(this:any):any;
	static ofError(e:any):any;
	static ofFuture(f:any):any;
	static ofPromised(p:any):any;
	static concatAll(s:any):any;
	static pipeTo(this:any, target:any, options?:any):any;
	static append(this:any, that:any):any;
	static prepend(this:any, that:any):any;
	static transform(this:any, transformer:any):any;
	static skip(this:any, len:any):any;
	static limit(this:any, len:any):any;
	static ofChunk(chunk:any):any;
	static ofString(s:any):any;
	static ofBytes(b:any):any;


}

}

export default tink.io._Source.Source_Impl_;