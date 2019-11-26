import * as TYPES from '../types';
import { SERVER, POST, GET} from '../../config/server.config'
import { postData, getData } from '../../services/datasets'


export const replaceCar = (data) => {
    return {
        type: TYPES.REPLACE_CAR,
        data,
    }
}

export const createCar = (data) => {
    return async dispatch => {
        const result = await fetch(SERVER.CREATE_CAR(), 
        POST({
            placa: data.carId,
            descripcion: data.description,
            estado: data.state,
            idChofer: data.userId,
        }))
        dispatch(replaceCar(data));
    }
}

export const loadCars = () => {
    return async dispatch => {
        const result = await fetch(SERVER.LOAD_CAR(), GET());
        console.log(result);
    }
}
