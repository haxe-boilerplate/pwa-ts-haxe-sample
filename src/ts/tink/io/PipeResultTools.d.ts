import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_streams_Single from "./../../tink/streams/Single";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_io_PipeResult from "./../../tink/io/PipeResult";

declare namespace tink.io {

export class PipeResultTools {

	static toOutcome(result:any):any;
	static toResult(c:any, result:any, buffered?:any):any;


}

}

export default tink.io.PipeResultTools;