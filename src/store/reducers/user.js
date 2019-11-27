import * as TYPES from '../types/user';
import { defaultUser } from './init';

export const user = (state = {...defaultUser}, action) => {
    let newState;
    switch (action.type) {
        case TYPES.CREATE_USER:
            newState = JSON.parse(JSON.stringify(state))
            newState.users.push(action.user);
            return newState;
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

