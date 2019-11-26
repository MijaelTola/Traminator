import * as TYPES from '../types';
import { SERVER, POST, GET} from '../../config/server.config'
import { postData, getData } from '../../services/datasets'


export const replaceCar = (data) => {
    return {
        type: TYPES.REPLACE_CAR,
        data,
    }
}

export const loadCar = (data) => {
    return {
        type: TYPES.LOAD_CAR,
        cars: data
    }
}

export const createCar = (data) => {
    return async dispatch => {
        const result = await postData(SERVER.CREATE_CAR(), 
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
        const result = await getData(SERVER.LOAD_CAR(), GET());
        let cars = [];
        if(result.ok) {
            result.vehiculochoferes.forEach(data => cars.push(data));
        }
        dispatch(loadCar(cars));
    }
}
