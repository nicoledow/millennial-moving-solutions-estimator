import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { handleInfo } from './reducers/handleInfo';

const store = createStore(handleInfo, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'))


serviceWorker.unregister();
