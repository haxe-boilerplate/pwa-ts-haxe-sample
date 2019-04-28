import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import tink_core_Outcome from "./../../tink/core/Outcome";

declare namespace tink.core {

export class TypedError {

	constructor(code?:any, message:any, pos?:any);
	message:any;
	code:any;
	data:any;
	pos:any;
	callStack:any;
	exceptionStack:any;
	isTinkError:any;
	printPos():any;
	toString():any;
	throwSelf():any;
	static withData(code?:any, message:any, data:any, pos?:any):any;
	static typed(code?:any, message:any, data:any, pos?:any):any;
	static ofJsError(e:any, pos?:any):any;
	static asError(v:any):any;
	static catchExceptions(f:any, report?:any, pos?:any):any;
	static reporter(code?:any, message:any, pos?:any):any;
	static rethrow(any:any):any;
	static tryFinally(f:any, cleanup:any):any;


}

}

export default tink.core.TypedError;