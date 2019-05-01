package client;

class SuperClientComponent {
  var thisIsNice: Int;

  function saySomething(finally: String) {
    trace(finally);
    trace('foo');
  }
}
