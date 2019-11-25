import * as TYPES from '../types';
import { defaultMap } from '../reducers/init';

export const createPath = (coordinates) => {
    return {
        type: TYPES.CREATE_PATH,
        coordinates: coordinates
    }
}

export const delete_path = () => {
    return {
        type: TYPES.DELETE_PATH,
        coordinates: defaultMap
    }
}