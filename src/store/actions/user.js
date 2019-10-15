import * as TYPES from '../types'
import { defaultUser } from '../reducers/init';

export const loginUser = (user) => {
    return {
        type: TYPES.REPLACE_USER,
        action: {
            ...user,
            isLogged: true,
            isAthenticated: true,
        }
    }
}
export const logoutUser = () => {
    return {
        type: TYPES.LOAD_USER,
        action: {...defaultUser}
    }
}
