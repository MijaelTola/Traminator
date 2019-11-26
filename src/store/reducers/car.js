import * as TYPES from '../types';
import { defaultCar } from './init';

export const car = (state = {...defaultCar}, action) => {
    switch (action.type) {
        case TYPES.REPLACE_CAR:
            return {...state, ...action.data};
        case TYPES.LOAD_CAR:
            return {...state, cars: action.cars };
        default:
            return state;
    }

}