package server;

import SomeTsClass;

class SuperServerComponent {
  var thisIsNice: Int;

  function saySomething(phrase: String) {
    trace(phrase);
    new SomeTsClass('from server');
  }
}
