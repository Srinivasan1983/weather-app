import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dataStore from './redux'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import App from './components/App';

ReactDOM.render(
    <Provider store={dataStore}>
        <App />
    </Provider>
, document.querySelector('#root'))