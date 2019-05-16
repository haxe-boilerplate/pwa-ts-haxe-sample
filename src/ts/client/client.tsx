import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { configureSocket } from './utils/socket';
import { createStore } from 'redux';
import reducer from './utils/reducer';
import { Provider } from 'react-redux';

import SuperClientComponent from './SuperClientComponent';

const superClientComponent = new SuperClientComponent();
superClientComponent.saySomething('Hello from Haxe packaged by webpack and running from the client!');
superClientComponent.thisIsNice = {bar: 'foo', bow: 2};
console.log(superClientComponent.thisIsNice);

// Test consume the tink api through express
// NOTE: Hxgendts doesn't work very well with third-party libs and hxgenjs
// so the extern for Client has been modified manually to have any as return type
// it should have been typed as FutureObject typed with the Result typedef from
// src/hx/ApiResult. Unfortunately this negates most of the benefit of having a
// typed api from tink, since the typing information is not really visible from TS,
// but at least you can consume it and refer to the Haxe code for typing information.
import Client from './Client';

Client.call().handle(result =>
  console.log(result)
);

const store = createStore(reducer);

export const socket = configureSocket(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/statics/service-worker.js');
  }
})();
