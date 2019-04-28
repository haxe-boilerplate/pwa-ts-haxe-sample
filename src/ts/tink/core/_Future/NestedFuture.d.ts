import tink_core__$Future_FutureObject from "./../../../tink/core/_Future/FutureObject";
import tink_core_FutureTrigger from "./../../../tink/core/FutureTrigger";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";

declare namespace tink.core._Future {

export class NestedFuture {

	constructor(outer:any);
	outer:any;
	gathered:any;
	map(f:any):any;
	flatMap(f:any):any;
	gather():any;
	eager():any;
	handle(cb:any):any;


}

}

export default tink.core._Future.NestedFuture;