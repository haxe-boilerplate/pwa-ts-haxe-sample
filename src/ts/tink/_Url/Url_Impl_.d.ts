import Reflect from "./../../Reflect";
import tink_url__$Path_Path_$Impl_$ from "./../../tink/url/_Path/Path_Impl_";
import StringTools from "./../../StringTools";
import HxOverrides from "./../../HxOverrides";
import EReg from "./../../EReg";
import Std from "./../../Std";
import tink_url__$Host_Host_$Impl_$ from "./../../tink/url/_Host/Host_Impl_";
import tink_json__$Representation_Representation_$Impl_$ from "./../../tink/json/_Representation/Representation_Impl_";

declare namespace tink._Url {

export class Url_Impl_ {

	static SCHEME:any;
	static PAYLOAD:any;
	static AUTH:any;
	static HOSTNAMES:any;
	static PATH:any;
	static QUERY:any;
	static HASH:any;
	static pathWithQuery:any;
	static get_pathWithQuery(this:any):any;
	static _new(parts:any):any;
	static resolve(this:any, that:any):any;
	static makePayload(parts:any):any;
	static toString(this:any):any;
	static fromString(s:any):any;
	static noop(_:any):any;
	static parse(s:any, onError?:any):any;
	static make(parts:any):any;
	static fromRepresentation(v:any):any;
	static toRepresentation(this:any):any;


}

}

export default tink._Url.Url_Impl_;