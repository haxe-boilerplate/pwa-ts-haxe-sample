import tink_core__$Future_FutureObject from "./../../../tink/core/_Future/FutureObject";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_core_FutureTrigger from "./../../../tink/core/FutureTrigger";

declare namespace tink.core._Future {

export class SimpleFuture {

	constructor(f:any);
	f(a1:any):any;
	gathered:any;
	handle(callback:any):any;
	map(f:any):any;
	flatMap(f:any):any;
	gather():any;
	eager():any;


}

}

export default tink.core._Future.SimpleFuture;