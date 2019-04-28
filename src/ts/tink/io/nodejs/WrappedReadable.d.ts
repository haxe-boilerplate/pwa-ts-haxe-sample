import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import js_node_buffer_Buffer from "buffer";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import tink_io_nodejs_WrappedBuffer from "./../../../tink/io/nodejs/WrappedBuffer";
import tink_core_TypedError from "./../../../tink/core/TypedError";
import js__$Boot_HaxeError from "./../../../js/_Boot/HaxeError";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";

declare namespace tink.io.nodejs {

export class WrappedReadable {

	constructor(name:any, native:any, chunkSize:any, onEnd:any);
	native:any;
	name:any;
	
	chunkSize:any;
	read():any;


}

}

export default tink.io.nodejs.WrappedReadable;