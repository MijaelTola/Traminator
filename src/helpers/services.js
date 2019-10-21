
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
