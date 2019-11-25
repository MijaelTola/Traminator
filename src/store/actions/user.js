import * as TYPES from '../types'
import { defaultUser } from '../reducers/init';
import { SERVER, POST } from '../../config/server.config'
import { postData } from '../../services/datasets'

export const loginUser = (user) => {
    return {
        type: TYPES.REPLACE_USER,
        action: {
            ...user,
        }
    }
}
export const logoutUser = () => {
    localStorage.clear();
    return {
        type: TYPES.LOAD_USER,
        action: { ...defaultUser }
    }
}

export const registerUser = (user) => {
    console.log('comes here');
    return async dispatch => {
        const result = await postData(SERVER.CREATE_USER(), POST(user));
        console.log(result);
    }
}
export const loggInUser = (email, password) => {
    return async dispatch => {
        const result = await postData(SERVER.LOGIN(), POST({ email, password }))
        if (result.ok) {
            dispatch(loginUser({
                nombre: result.usuario.nombre,
                email: result.usuario.email,
                role: result.usuario.role,
                id: result.usuario['_id'],
                tokeId: result.token,
                signUpSuccess: result.ok,
                isLogged: true,
                isAuthenticated: true,
            }));

            localStorage.setItem('user-token', JSON.stringify({
                nombre: result.usuario.nombre,
                email: result.usuario.email,
                role: result.usuario.role,
                id: result.usuario['_id'],
                tokeId: result.token,
                signUpSuccess: result.ok,
                isLogged: true,
                isAuthenticated: true
                }))
        }  else {
            dispatch(loginUser({
                signUpSuccess: 'not found',
                isLogged: false,
            }))
        }
    }
}