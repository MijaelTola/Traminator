import * as TYPES from '../types'
import { postData, getData } from '../../services/datasets'
import { SERVER, POST, GET } from '../../config/server.config'

export const createRoute = (data) => {
    return {
        type: TYPES.CREATE_ROUTE,
        pathId: data.pathId,
        ini: data.ini,
        fin: data.fin,
        coordinates: data.coordinates,
    }
}

export const loadRoute = (data) => {
    return {
        type: TYPES.LOAD_ROUTE,
        routesData: data, 
    }
}

export const selectRoute = (data) => {
    return {
        type: TYPES.SELECT_ROUTE,
        pathId: data.pathId,
        coordinates: data.coordinates
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

export const getRoutes = () => {
    return async dispatch => {
        let result = await getData(SERVER.CREATE_ROUTE(), GET());

        let routeData = {};
        result.lineas.forEach(data => {
            let coordinates = [];
            data.coordenadas.forEach(data => {
                coordinates.push([parseFloat(data.lat),parseFloat(data.lng)]);
            })
            routeData[data.identificador] = {
                pathId: data.identificador,
                ini: data.inicio,
                fin: data.fin,
                coordinates: coordinates
            }
        });
        dispatch(loadRoute(routeData));
    };
}