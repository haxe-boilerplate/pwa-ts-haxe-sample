package server;

import tink.http.containers.*;
import tink.http.Response;
import tink.web.routing.*;

class Root {
    public function new() {}

    @:get('/')
    @:get('/$name')
    public function hello(name = 'World')
        return 'Hello, $name!';
}


class TinkAPI {
    static function main() {
        var container = new NodeContainer(8080);
        var router = new Router<Root>(new Root());
        container.run(function(req) {
            return router.route(Context.ofRequest(req))
                .recover(OutgoingResponse.reportError);
        });
    }
}

