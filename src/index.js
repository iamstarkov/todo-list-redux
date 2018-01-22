import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './views/app';
import registerServiceWorker from './registerServiceWorker';
import * as ducks from './ducks';

export const reducer =  combineReducers({
  ...ducks.todosDuck.reducer,
  ...ducks.filtersDuck.reducer,
});


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
