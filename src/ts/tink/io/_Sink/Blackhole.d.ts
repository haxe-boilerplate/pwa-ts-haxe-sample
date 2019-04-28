import tink_io_SinkBase from "./../../../tink/io/SinkBase";
import tink_streams__$Stream_Handler_$Impl_$ from "./../../../tink/streams/_Stream/Handler_Impl_";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_streams_Handled from "./../../../tink/streams/Handled";
import js__$Boot_HaxeError from "./../../../js/_Boot/HaxeError";
import tink_io_PipeResult from "./../../../tink/io/PipeResult";

declare namespace tink.io._Sink {

export class Blackhole extends tink_io_SinkBase {

	constructor();
	consume(source:any, options:any):any;
	static inst:any;


}

}

export default tink.io._Sink.Blackhole;