import * as TYPES from '../types';
import { defaultCar } from './init';

export const car = (state = {...defaultCar}, action) => {
    let newState;
    switch (action.type) {
        case TYPES.REPLACE_CAR:
            newState = JSON.parse(JSON.stringify(state));
            newState.cars.push(action.car);
            return newState;
        case TYPES.LOAD_CAR:
            return {...state, cars: action.cars };
        default:
            return state;
    }

}