package client;

import SomeTsClass;

typedef Foo = {
  bar: String,
  bow: Float

}

@:tsextern
class SuperClientComponent {
  public var thisIsNice: Foo;
  
  public function new() {}

  public function saySomething(foo: String) {
    trace(foo);
    trace('fo');
    new SomeTsClass('from client');
  }
}

