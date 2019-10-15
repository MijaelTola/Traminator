import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import $ from 'jquery';
//import Popper from 'popper.js';

import './index.css';

import * as serviceWorker from './serviceWorker';
import Login from './containers/Login/login';
import store from './store';
import {history} from "./store/configureStore";
import { logoutUser } from './store/actions';
store.dispatch(logoutUser());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={'/login'} component={Login} />
            </Switch>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
