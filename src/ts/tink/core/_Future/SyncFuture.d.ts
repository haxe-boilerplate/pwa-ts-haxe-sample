import tink_core__$Future_FutureObject from "./../../../tink/core/_Future/FutureObject";
import tink_core__$Future_SimpleFuture from "./../../../tink/core/_Future/SimpleFuture";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";

declare namespace tink.core._Future {

export class SyncFuture {

	constructor(value:any);
	
	map(f:any):any;
	flatMap(f:any):any;
	handle(cb:any):any;
	eager():any;
	gather():any;


}

}

export default tink.core._Future.SyncFuture;