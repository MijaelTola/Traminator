import * as TYPES from '../types/user';
import { defaultUser } from './init';

export const user = (state = {...defaultUser}, action) => {
    switch (action.type) {
        case TYPES.LOAD_USER:
            return { ...defaultUser };
        case TYPES.REPLACE_USER:
            return {...state, ...action.action};
        case TYPES.LOAD_ALL_USERS:
            return {...state, users: action.users}
        default:
            return state;
    }

}

