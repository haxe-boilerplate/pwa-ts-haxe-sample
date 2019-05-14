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
    static function main(req: js.node.http.IncomingMessage, res:js.node.http.ServerResponse, next) {
        var container = new NodeContainer(8080);
        var request = new IncomingRequest(
            req.socket.remoteAddress, 
            IncomingRequestHeader.fromIncomingMessage(req),
            Plain(Source.ofNodeStream('Incoming HTTP message from ${req.socket.remoteAddress}', req)));

        var router = new Router<Root>(new Root());
            return router.route(Context.ofRequest(request)).handle(function(out) {
                switch (out) {
                    case Success(data):
                        res.writeHead(data.header.statusCode, data.header.reason, cast [for (h in data.header) [(h.name : String), h.value]]);//TODO: readable status code
                        data.body.pipeTo(Sink.ofNodeStream('Outgoing HTTP response to ${req.socket.remoteAddress}', res)).handle(function (x) {
                           res.end();
                        });
                    case Failure(data):
                };
            });
}
}
