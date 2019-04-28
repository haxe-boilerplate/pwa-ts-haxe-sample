import tink_core_NamedWith from "./../../tink/core/NamedWith";
import HxOverrides from "./../../HxOverrides";
import StringTools from "./../../StringTools";
import Std from "./../../Std";
import tink_http__$Header_HeaderValue_$Impl_$ from "./../../tink/http/_Header/HeaderValue_Impl_";

declare namespace tink.http {

export class HeaderField extends tink_core_NamedWith {

	constructor(name:any, value:any);
	toString():any;
	static ofString(s:any):any;
	static setCookie(key:any, value:any, options?:any):any;


}

}

export default tink.http.HeaderField;