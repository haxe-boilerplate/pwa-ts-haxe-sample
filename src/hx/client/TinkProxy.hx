package client;

import tink.core.Callback.CallbackLink;
import tink.http.clients.*;
import tink.web.proxy.Remote;
import tink.url.Host;


import ApiResult.Result;

@:tsextern
class Client {
   static var HOST = new Host('localhost');
    public static function call() {
        var remote = new Remote<Root>(new NodeClient(), new RemoteEndpoint(new Host('localhost', 3000)));
        return remote.json().handle(function(o) switch o {
            case Success(result): return result;
            case Failure(e): throw "Foo";
        });
    }
}

class FooFoo {
    static function main() {
      var foo =  Client.call();
      $type(foo);
    }
}
interface Root {
    @:get('/tink_api/')
    function json():Result;
}


