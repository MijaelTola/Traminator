import * as TYPES from '../types/maps';
import { defaultMap } from './init';

export const map = (state = {...defaultMap}, action) => {
    let newState;
    switch (action.type) {
        case TYPES.CREATE_PATH:
            return {...state, coordinates: action.coordinates};
        case TYPES.DELETE_PATH:
            return { ...defaultMap };
        case TYPES.REPLACE_POSITION:
            return {...state, lat: action.lat, lng: action.lng};
        case TYPES.REPLACE_USER_ID:
            newState = JSON.parse(JSON.stringify(state));
            newState.id = action.id;
            newState.lat = 0;
            newState.lng = 0;
            return newState;
        default:
            return state;
    }

}