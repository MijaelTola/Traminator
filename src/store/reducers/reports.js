import * as TYPES from '../types';
import { defaultreports } from './init';

export const reports = (state = { ...defaultreports }, action) => {
    switch (action.type) {
        case TYPES.LOAD_REPORTS:
            return {...state, reports: action.reports };
        default:
            return state;
    }

}