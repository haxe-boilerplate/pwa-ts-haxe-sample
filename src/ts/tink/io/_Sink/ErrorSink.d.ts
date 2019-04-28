import tink_io_SinkBase from "./../../../tink/io/SinkBase";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_io_PipeResult from "./../../../tink/io/PipeResult";

declare namespace tink.io._Sink {

export class ErrorSink extends tink_io_SinkBase {

	constructor(error:any);
	
	get_sealed():any;
	consume(source:any, options:any):any;


}

}

export default tink.io._Sink.ErrorSink;