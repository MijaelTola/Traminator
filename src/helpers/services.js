import store from '../store'

export const requestIsOk = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

export const catchError = (err, signal) => {
    if ((signal && signal.aborted) || err === 'DOMException: "The operation was aborted.') {
        return null;
    }
    // store.dispatch(logoutUser());
    // localStorage.removeItem('user-token');
    console.log('Fetch Error: ', err);
    return null;
};


export const valid = (jsonText) => {
    //if (jsonText.code === 1102) {
    //store.dispatch(logoutUser());
    //localStorage.removeItem('user-token');
    //return null;
    //}
    return jsonText.results;
};

export const isLogged = async () => {
    const user = store.getState().user;
    if (!(user && user.isLogged)) {
        return false;
    }
    return await user.isLogged;
};
