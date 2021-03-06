import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';

import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './push-notification';

// push global styling assets away from the soruce code
import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

initializeFirebase();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
