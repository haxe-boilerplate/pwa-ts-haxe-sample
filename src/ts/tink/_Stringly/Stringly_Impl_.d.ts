import StringTools from "./../../StringTools";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import tink_core_OutcomeTools from "./../../tink/core/OutcomeTools";
import Std from "./../../Std";
import EReg from "./../../EReg";

declare namespace tink._Stringly {

export class Stringly_Impl_ {

	static isNumber(s:any, allowFloat:any):any;
	static toBool(this:any):any;
	static parseFloat(this:any):any;
	static toFloat(this:any):any;
	static parseInt(this:any):any;
	static toInt(this:any):any;
	static SUPPORTED_DATE_REGEX:any;
	static parseDate(this:any):any;
	static toDate(this:any):any;
	static parse(this:any, f:any):any;
	static ofBool(b:any):any;
	static ofInt(i:any):any;
	static ofFloat(f:any):any;
	static ofDate(d:any):any;


}

}

export default tink._Stringly.Stringly_Impl_;