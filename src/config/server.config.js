import store from '../store'

const API_URL = 'http://localhost:8080';

export const SERVER = (function() {
    return {
        LOGIN: () => {
            return `${API_URL}/login`
        },
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

const GET = {
    method: 'GET',
    headers: {
      id_token: store.getState().user.tokenId
    },
    credentials: 'include'
};