import {catchError, requestIsOk} from '../helpers/services'

export const requestData = (url, signal) => {
    // OPTIONS.headers.id_token = store.getState().user.tokenId;
    return fetch(url, signal ? {signal: signal} : {}) //, OPTIONS)
      .then(response => requestIsOk(response))
      .then(data => valid(data))
      .catch((err) => {
        catchError(err, signal)
      });
  };