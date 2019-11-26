import {valid, catchError, requestIsOk} from '../helpers/services'

/*
export const requestData = (url, signal) => {
    // OPTIONS.headers.id_token = store.getState().user.tokenId;
    return fetch(url, signal ? {signal: signal} : {}) //, OPTIONS)
      .then(response => requestIsOk(response))
      .then(data => valid(data))
      .catch((err) => {
        catchError(err, signal)
      });
  };
*/
export const postData = (url, post) => {
  return fetch(url, post)
    .then(response => response.json())
    .then(data => data);
};

export const getData = (url, header) => {
  return fetch(url, header)
    .then(response => response.json())
    .then(data => data);
}