import * as TYPES from '../types'
import {  getData } from '../../services/datasets'
import { SERVER, GET } from '../../config/server.config'

export const replaceReports = (reports) => {
    return {
        type: TYPES.LOAD_REPORTS,
        reports,
    }
} 
export const loadReports = () => {
    return async dispatch => {
        const results = await getData(SERVER.LOAD_REPORTS(), GET());
        let reports = [];
        if (results.ok) {
            results.denuncias.forEach(data => {
                reports.push(data);
            });
        }
        dispatch(replaceReports(reports));
    }
}