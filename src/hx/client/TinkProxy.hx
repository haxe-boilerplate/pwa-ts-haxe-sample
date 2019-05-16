package client;

import tink.core.Callback.CallbackLink;
import tink.http.clients.*;
import tink.web.proxy.Remote;
import tink.url.Host;

using tink.core.Future.JsPromiseTools;

import ApiResult.Result;

class Client {
   static var HOST = new Host('localhost');
    public static function call() {
        var remote = new Remote<Root>(new NodeClient(), new RemoteEndpoint(new Host('localhost', 3000)));
        return remote.json();
    }
}

interface Root {
    @:get('/tink_api/')
    function json():Result;
}


