import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_core_Noise from "./../../../tink/core/Noise";
import tink_core__$Future_NeverFuture from "./../../../tink/core/_Future/NeverFuture";
import tink_core__$Future_SimpleFuture from "./../../../tink/core/_Future/SimpleFuture";
import tink_core_FutureTrigger from "./../../../tink/core/FutureTrigger";
import tink_core__$Future_NestedFuture from "./../../../tink/core/_Future/NestedFuture";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import tink_core_TypedError from "./../../../tink/core/TypedError";
import tink_core__$Future_LazyTrigger from "./../../../tink/core/_Future/LazyTrigger";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";
import haxe_ds_Either from "./../../../haxe/ds/Either";
import tink_core_MPair from "./../../../tink/core/MPair";
import tink_core_OutcomeTools from "./../../../tink/core/OutcomeTools";
import tink_core__$Outcome_OutcomeMapper_$Impl_$ from "./../../../tink/core/_Outcome/OutcomeMapper_Impl_";
import haxe_Timer from "./../../../haxe/Timer";

declare namespace tink.core._Future {

export class Future_Impl_ {

	static NULL:any;
	static NOISE:any;
	static NEVER:any;
	static _new(f:any):any;
	static first(this:any, other:any):any;
	static map(this:any, f:any, gather?:any):any;
	static flatMap(this:any, next:any, gather?:any):any;
	static next(this:any, n:any):any;
	static merge(this:any, other:any, merger:any, gather?:any):any;
	static flatten(f:any):any;
	static ofJsPromise(promise:any):any;
	static ofAny(v:any):any;
	static asPromise(s:any):any;
	static ofMany(futures:any, gather?:any):any;
	static fromMany(futures:any):any;
	static lazy(l:any):any;
	static sync(v:any):any;
	static async(f:any, lazy?:any):any;
	static or(a:any, b:any):any;
	static either(a:any, b:any):any;
	static and(a:any, b:any):any;
	static _tryFailingFlatMap(f:any, map:any):any;
	static _tryFlatMap(f:any, map:any):any;
	static _tryFailingMap(f:any, map:any):any;
	static _tryMap(f:any, map:any):any;
	static _flatMap(f:any, map:any):any;
	static _map(f:any, map:any):any;
	static trigger():any;
	static delay(ms:any, value:any):any;


}

}

export default tink.core._Future.Future_Impl_;