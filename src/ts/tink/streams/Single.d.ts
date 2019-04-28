import tink_streams_StreamBase from "./../../tink/streams/StreamBase";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_streams_Step from "./../../tink/streams/Step";
import tink_streams_Empty from "./../../tink/streams/Empty";
import tink_streams_Conclusion from "./../../tink/streams/Conclusion";

declare namespace tink.streams {

export class Single extends tink_streams_StreamBase {

	constructor(value:any);
	
	next():any;
	forEach(handle:any):any;


}

}

export default tink.streams.Single;