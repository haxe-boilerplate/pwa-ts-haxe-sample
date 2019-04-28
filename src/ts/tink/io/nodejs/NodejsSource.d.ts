import tink_streams_Generator from "./../../../tink/streams/Generator";
import tink_io_nodejs_WrappedReadable from "./../../../tink/io/nodejs/WrappedReadable";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_streams_Step from "./../../../tink/streams/Step";

declare namespace tink.io.nodejs {

export class NodejsSource extends tink_streams_Generator {

	constructor(target:any);
	static wrap(name:any, native:any, chunkSize:any, onEnd:any):any;


}

}

export default tink.io.nodejs.NodejsSource;