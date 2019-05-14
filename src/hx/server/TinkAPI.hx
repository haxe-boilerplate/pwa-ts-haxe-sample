package server;

import tink.core.Future.JsPromiseTools;
import tink.http.containers.*;
import tink.http.Response;
import tink.web.routing.*;
import tink.http.Request;
import tink.io.Source;
import tink.io.Sink;
import tink.http.Response;

@:tsextern
class Root {
    public function new() {}

    @:get('/')
    @:get('/doood/$name')
    public function hello(name = 'World')
        return 'Hello, $name!';
}

class TinkAPI {
    static var main = {
        var router = new Router<Root>(new Root());
        NodeContainer.toNodeHandler(req -> router.route(Context.ofRequest(req)).recover(OutgoingResponse.reportError));
    }
}
