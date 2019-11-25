import * as TYPES from '../types'
import { postData } from '../../services/datasets'
import { SERVER, POST } from '../../config/server.config'

export const createRoute = (data) => {
    return {
        type: TYPES.CREATE_ROUTE,
        pathId: data.pathId,
        ini: data.ini,
        fin: data.fin,
        coordinates: data.coordinates,
    }
}

export const postRoutes = (data) => {
    let coordinates = [];

    data.coordinates.forEach(data => {
        coordinates.push({
            lat: data[0] + '',
            lng: data[1] + '',
        });
    });
    return async dispatch => {
        const result = await postData(SERVER.CREATE_ROUTE(), 
        POST({
            identificador: data.pathId,
            inicio: data.ini,
            fin: data.ini,
            coordenadas: JSON.stringify(coordinates),
            destinos: JSON.stringify([{nombre:"vita"},{nombre:"Perez"}]),
        }));
        dispatch(createRoute(data));
    }
}