import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
let store = Redux.createStore(reducer, composeEnhancer(Redux.applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
