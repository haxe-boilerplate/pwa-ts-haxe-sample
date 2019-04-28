import tink_http_Container from "./../../../tink/http/Container";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";
import tink_core__$Signal_Signal_$Impl_$ from "./../../../tink/core/_Signal/Signal_Impl_";
import js_node_http_Server from "http";
import tink_url__$Host_Host_$Impl_$ from "./../../../tink/url/_Host/Host_Impl_";
import tink_core_TypedError from "./../../../tink/core/TypedError";
import tink_http_ContainerResult from "./../../../tink/http/ContainerResult";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import tink_http_IncomingRequestHeader from "./../../../tink/http/IncomingRequestHeader";
import tink_http_IncomingRequestBody from "./../../../tink/http/IncomingRequestBody";
import tink_io_nodejs_NodejsSource from "./../../../tink/io/nodejs/NodejsSource";
import tink_http_IncomingRequest from "./../../../tink/http/IncomingRequest";
import HxOverrides from "./../../../HxOverrides";
import tink_io__$Source_Source_$Impl_$ from "./../../../tink/io/_Source/Source_Impl_";
import tink_io_nodejs_NodejsSink from "./../../../tink/io/nodejs/NodejsSink";
import tink_streams_Single from "./../../../tink/streams/Single";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../../haxe/io/Bytes";

declare namespace tink.http.containers {

export class NodeContainer {

	constructor(kind:any, opt?:any);
	kind:any;
	upgradable:any;
	run(handler:any):any;
	static toNodeHandler(handler:any):any;
	static toUpgradeHandler(handler:any):any;


}

}

export default tink.http.containers.NodeContainer;