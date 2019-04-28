import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import tink_core__$Promise_Promise_$Impl_$ from "./../../../tink/core/_Promise/Promise_Impl_";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import js_node_buffer_Buffer from "buffer";
import tink_core_TypedError from "./../../../tink/core/TypedError";

declare namespace tink.io.nodejs {

export class WrappedWritable {

	constructor(name:any, native:any);
	
	name:any;
	native:any;
	end():any;
	write(chunk:any):any;


}

}

export default tink.io.nodejs.WrappedWritable;