import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { configureSocket } from './utils/socket';
import { createStore } from 'redux';
import reducer from './utils/reducer';
import { Provider } from 'react-redux';

import SuperClientComponent from './SuperClientComponent';

const superClientComponent = new SuperClientComponent()
superClientComponent.saySomething('Hello from Haxe packaged by webpack and running from the client!');


const store = createStore(reducer);

export const socket = configureSocket(store.dispatch);

//TODO check registration of serviceWorker from the webpack plugin

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
