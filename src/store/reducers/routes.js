import * as TYPES from '../types';
import { defaultRoute } from './init';

export const routes = (state = { ...defaultRoute }, action) => {
    let newState;
    switch (action.type) {
        case TYPES.CREATE_ROUTE:
            newState = JSON.parse(JSON.stringify(state))
            newState.routesData[action.pathId] = {
                ...newState[action.pathId],
                pathId: action.pathId,
                ini: action.ini,
                fin: action.fin,
                coordinates: action.coordinates,
            }
            return newState;
        case TYPES.LOAD_ROUTE:
            return {...state, routesData: action.routesData };
        default:
            return state;
    }

}