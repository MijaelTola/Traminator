import * as TYPES from '../types/maps';
import { defaultMap } from './init';

export const map = (state = {...defaultMap}, action) => {
    switch (action.type) {
        case TYPES.CREATE_PATH:
            return {...state, coordinates: action.coordinates};
        case TYPES.DELETE_PATH:
            return { ...defaultMap };
        case TYPES.REPLACE_USER_ID:
            return {...state, id: action.id};
        default:
            return state;
    }

}