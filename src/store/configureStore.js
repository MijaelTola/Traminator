
import { applyMiddleware, compose, createStore } from 'redux'

import createRootReducer from './reducers/index'
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(preloadedStated) {
    const store = createStore(
        createRootReducer(),
        preloadedStated,
        composeEnhancers(
            applyMiddleware(
              thunk
            ),
          )
    );
    return store;
}