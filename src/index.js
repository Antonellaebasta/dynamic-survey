import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import surveyReducers from './store/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(surveyReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.register();
