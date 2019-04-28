import tink_io_SinkBase from "./../../../tink/io/SinkBase";
import tink_streams__$Stream_Handler_$Impl_$ from "./../../../tink/streams/_Stream/Handler_Impl_";
import tink_streams_Handled from "./../../../tink/streams/Handled";
import tink_io_PipeResultTools from "./../../../tink/io/PipeResultTools";
import tink_core_Noise from "./../../../tink/core/Noise";
import tink_io_nodejs_WrappedWritable from "./../../../tink/io/nodejs/WrappedWritable";

declare namespace tink.io.nodejs {

export class NodejsSink extends tink_io_SinkBase {

	constructor(target:any);
	target:any;
	consume(source:any, options:any):any;
	static wrap(name:any, native:any):any;


}

}

export default tink.io.nodejs.NodejsSink;