import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import tink_core_TypedError from "./../../tink/core/TypedError";
import haxe_ds_Option from "./../../haxe/ds/Option";
import tink_core_OptionIter from "./../../tink/core/OptionIter";

declare namespace tink.core {

export class OptionTools {

	static force(o:any, pos?:any):any;
	static or(o:any, l:any):any;
	static orNull(o:any):any;
	static filter(o:any, f:any):any;
	static satisfies(o:any, f:any):any;
	static equals(o:any, v:any):any;
	static map(o:any, f:any):any;
	static flatMap(o:any, f:any):any;
	static iterator(o:any):any;
	static toArray(o:any):any;


}

}

export default tink.core.OptionTools;