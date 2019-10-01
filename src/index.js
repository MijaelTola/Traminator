import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import $ from 'jquery';
//import Popper from 'popper.js';

import './index.css';

import * as serviceWorker from './serviceWorker';
import Login from './components/Login/login'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={Login} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
