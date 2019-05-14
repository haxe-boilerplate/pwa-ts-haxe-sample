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
import Client from './Client';

console.log(Client.call());

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
