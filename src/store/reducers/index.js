import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


import { user } from './user';
import { map } from './map';
import { routes } from './routes';

export default ( history ) => combineReducers({
    router: connectRouter(history),
    user,
    map,
    routes
});