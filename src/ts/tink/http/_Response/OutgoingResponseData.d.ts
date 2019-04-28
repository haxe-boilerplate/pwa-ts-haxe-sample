import tink_http_Message from "./../../../tink/http/Message";

declare namespace tink.http._Response {

export class OutgoingResponseData extends tink_http_Message {

	constructor(header:any, body:any);


}

}

export default tink.http._Response.OutgoingResponseData;