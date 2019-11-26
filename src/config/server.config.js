import store from '../store'

const API_URL = process.env.REACT_APP_BASE_API_URL;

export const SERVER = (function () {
    return {
        LOGIN: () => {
            return `${API_URL}/login`
        },
        CREATE_USER: () => {
            return `${API_URL}/usuario`
        },
        LOAD_USER: () => {
            return `${API_URL}/usuario`
        },
        CREATE_ROUTE: () => {
            return `${API_URL}/linea`
        }
    };
})();

export const POST = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
}

export const GET = () => {
    return {
        method: 'GET',
        headers: {
        },
    }
};

export const GETWITHTOKEN = () => {
    return {
        method: 'GET',
        headers: {
            token: store.getState().user.tokeId
        },
    }
};