import * as TYPES from '../types'
import { defaultUser } from '../reducers/init';
import { SERVER, POST } from '../../config/server.config'

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
        action: { ...defaultUser }
    }
}

export const loggInUser = (email, password) => {
    return async dispatch => {
        const result = await fetch(SERVER.LOGIN(), POST({ email, password }))
        console.log(result);
    }
}