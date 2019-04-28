import tink_io__$Sink_Blackhole from "./../../../tink/io/_Sink/Blackhole";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import tink_io__$Source_Source_$Impl_$ from "./../../../tink/io/_Source/Source_Impl_";
import tink_io__$Sink_ErrorSink from "./../../../tink/io/_Sink/ErrorSink";
import tink_io__$Sink_FutureSink from "./../../../tink/io/_Sink/FutureSink";
import tink_io_nodejs_NodejsSink from "./../../../tink/io/nodejs/NodejsSink";
import tink_io__$Worker_Worker_$Impl_$ from "./../../../tink/io/_Worker/Worker_Impl_";
import tink_io_std_OutputSink from "./../../../tink/io/std/OutputSink";

declare namespace tink.io._Sink {

export class SinkYielding_Impl_ {

	
	static end(this:any):any;
	static dirty(this:any):any;
	static ofError(e:any):any;
	static ofPromised(p:any):any;
	static ofNodeStream(name:any, r:any):any;
	static ofOutput(name:any, target:any, options?:any):any;


}

}

export default tink.io._Sink.SinkYielding_Impl_;