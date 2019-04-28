import tink_io_SinkBase from "./../../../tink/io/SinkBase";

declare namespace tink.io._Sink {

export class FutureSink extends tink_io_SinkBase {

	constructor(f:any);
	
	consume(source:any, options:any):any;


}

}

export default tink.io._Sink.FutureSink;