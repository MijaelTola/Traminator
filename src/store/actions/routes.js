import * as TYPES from '../types'

export const createRoute = (data) => {
    return {
        type: TYPES.CREATE_ROUTE,
        pathId: data.pathId,
        ini: data.ini,
        fin: data.fin,
        coordinates: data.coordinates,
    }
}