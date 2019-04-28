import tink_io_BytewiseParser from "./../../tink/io/BytewiseParser";
import tink_io_ParseStep from "./../../tink/io/ParseStep";
import StringBuf from "./../../StringBuf";
import tink_http_HeaderField from "./../../tink/http/HeaderField";
import tink_core_TypedError from "./../../tink/core/TypedError";

declare namespace tink.http {

export class HeaderParser extends tink_io_BytewiseParser {

	constructor(makeHeader:any);
	header:any;
	fields:any;
	buf:any;
	last:any;
	makeHeader(a1:any, a2:any):any;
	read(c:any):any;
	nextLine():any;
	


}

}

export default tink.http.HeaderParser;