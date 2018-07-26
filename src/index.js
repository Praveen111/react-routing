import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './rootreducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk]
const store = createStore(RootReducer,{},composeWithDevTools(
    applyMiddleware(...middleware)))

ReactDOM.render(
    <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
