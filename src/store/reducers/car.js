import * as TYPES from '../types';
import { defaultCar } from './init';

export const car = (state = {...defaultCar}, action) => {
    switch (action.type) {
        case TYPES.REPLACE_CAR:
            return {...state, ...action.data};

        
        default:
            return state;
    }

}