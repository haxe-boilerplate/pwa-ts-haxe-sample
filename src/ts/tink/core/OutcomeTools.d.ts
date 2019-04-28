import tink_core_TypedError from "./../../tink/core/TypedError";
import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import haxe_ds_Option from "./../../haxe/ds/Option";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core__$Outcome_OutcomeMapper_$Impl_$ from "./../../tink/core/_Outcome/OutcomeMapper_Impl_";

declare namespace tink.core {

export class OutcomeTools {

	static sure(outcome:any):any;
	static toOption(outcome:any):any;
	static toOutcome(option:any, pos?:any):any;
	static orNull(outcome:any):any;
	static orUse(outcome:any, fallback:any):any;
	static orTry(outcome:any, fallback:any):any;
	static equals(outcome:any, to:any):any;
	static map(outcome:any, transform:any):any;
	static isSuccess(outcome:any):any;
	static flatMap(o:any, mapper:any):any;
	static swap(outcome:any, v:any):any;
	static attempt(f:any, report:any):any;
	static flatten(o:any):any;


}

}

export default tink.core.OutcomeTools;