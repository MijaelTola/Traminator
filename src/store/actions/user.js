import * as TYPES from '../types'
import { defaultUser } from '../reducers/init';
import { SERVER, POST, GETWITHTOKEN } from '../../config/server.config'
import { postData, getData } from '../../services/datasets'

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
export const loadUsers = (users) => {
    return {
        type: TYPES.LOAD_ALL_USERS,
        users: users,
    }
}
export const createUser = (user) => {
    return {
        type: TYPES.CREATE_USER,
        user: user,
    }
}

export const registerUser = (user) => {
    return async dispatch => {
        const result = await postData(SERVER.CREATE_USER(), POST(user));
        dispatch(createUser({
            name: result.usuario.nombre,
            email: result.usuario.email,
            role: result.usuario.role,
            state: result.usuario.estado,
            id: result.usuario['_id'],
        }));
    }
}

export const loadAllUsers = () => {
    return async dispatch => {
        const result = await getData(SERVER.LOAD_USER(), GETWITHTOKEN());
        let users = []
        if (result.ok) {
            result.usuarios.forEach(data => {
                users.push({
                    name: data.nombre,
                    email: data.email,
                    role: data.role,
                    state: true,
                    id: data['_id'],
                });
            });
        }
        dispatch(loadUsers(users));
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
        } else {
            dispatch(loginUser({
                signUpSuccess: 'not found',
                isLogged: false,
            }))
        }
    }
}