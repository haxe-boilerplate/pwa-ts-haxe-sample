import tink_http_RequestHeader from "./../../tink/http/RequestHeader";
import haxe_ds_StringMap from "./../../haxe/ds/StringMap";
import tink_url__$Query_QueryStringParser from "./../../tink/url/_Query/QueryStringParser";
import tink_url__$Portion_Portion_$Impl_$ from "./../../tink/url/_Portion/Portion_Impl_";
import haxe_crypto_Base64 from "./../../haxe/crypto/Base64";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import tink_http_Authorization from "./../../tink/http/Authorization";
import HxOverrides from "./../../HxOverrides";
import tink_core_OutcomeTools from "./../../tink/core/OutcomeTools";
import tink_core__$Outcome_OutcomeMapper_$Impl_$ from "./../../tink/core/_Outcome/OutcomeMapper_Impl_";
import tink_http_HeaderParser from "./../../tink/http/HeaderParser";
import tink__$Url_Url_$Impl_$ from "./../../tink/_Url/Url_Impl_";
import tink_http_HeaderField from "./../../tink/http/HeaderField";

declare namespace tink.http {

export class IncomingRequestHeader extends tink_http_RequestHeader {

	constructor(method:any, url:any, protocol?:any, fields:any);
	
	getCookies():any;
	concat(fields:any):any;
	cookieNames():any;
	getCookie(name:any):any;
	getAuth():any;
	getAuthWith(parser:any):any;
	static parser():any;
	static fromIncomingMessage(req:any):any;


}

}

export default tink.http.IncomingRequestHeader;