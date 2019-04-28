import tink_streams_StreamBase from "./../../tink/streams/StreamBase";

declare namespace tink.streams {

export class IdealStreamBase extends tink_streams_StreamBase {

	constructor();
	idealize(rescue:any):any;


}

}

export default tink.streams.IdealStreamBase;