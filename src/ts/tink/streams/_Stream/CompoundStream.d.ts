import tink_streams_StreamBase from "./../../../tink/streams/StreamBase";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_streams_Step from "./../../../tink/streams/Step";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_streams_Conclusion from "./../../../tink/streams/Conclusion";
import tink_streams_Empty from "./../../../tink/streams/Empty";

declare namespace tink.streams._Stream {

export class CompoundStream extends tink_streams_StreamBase {

	constructor(parts:any);
	
	get_depleted():any;
	next():any;
	decompose(into:any):any;
	forEach(handler:any):any;
	static consumeParts(parts:any, handler:any, cb:any):any;
	static of(streams:any):any;


}

}

export default tink.streams._Stream.CompoundStream;