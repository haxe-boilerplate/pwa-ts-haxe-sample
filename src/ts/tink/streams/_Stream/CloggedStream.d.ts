import tink_streams_StreamBase from "./../../../tink/streams/StreamBase";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_streams_Step from "./../../../tink/streams/Step";
import tink_streams_Conclusion from "./../../../tink/streams/Conclusion";

declare namespace tink.streams._Stream {

export class CloggedStream extends tink_streams_StreamBase {

	constructor(rest:any, error:any);
	rest:any;
	
	next():any;
	forEach(handler:any):any;


}

}

export default tink.streams._Stream.CloggedStream;