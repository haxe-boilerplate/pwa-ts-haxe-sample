import tink_http_Message from "./../../tink/http/Message";

declare namespace tink.http {

export class OutgoingRequest extends tink_http_Message {

	constructor(header:any, body:any);


}

}

export default tink.http.OutgoingRequest;