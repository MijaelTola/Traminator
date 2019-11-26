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

export const replacePosition = (data) => {
    return {
        type: TYPES.REPLACE_POSITION,
        lat: data.lat,
        lng: data.lng,
    }
}

export const replaceUserId = data => {
    return {
        type: TYPES.REPLACE_USER_ID,
        id: data
    }
}