import { createBrowserHistory } from 'history'

import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers/index'
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const logger = store => next => action => {
  // console.log('dispatching', action);
  let result = next(action);
  // console.log('next state', store.getState());
  return result;
};

export default function configureStore(preloadedStated) {
    const store = createStore(
        createRootReducer(history),
        preloadedStated,
        composeEnhancers(
            applyMiddleware(
              routerMiddleware(history),
              thunk,
              logger
            ),
          )
    );
    return store;
}