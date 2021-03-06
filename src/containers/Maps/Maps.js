import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Maps from '../../components/Maps/Maps'

import { getRoutes, selectRoute } from '../../store/actions/routes';
import { loadAllUsers } from '../../store/actions/user'
import { loadCars } from '../../store/actions/car';
import { replacePosition, replaceUserId } from '../../store/actions/map';

const mapStateToProps = (state) => {
    return {
        routes: state.routes.routesData,
        users: state.user.users,
        driverId: state.map.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoutes() {
            dispatch(getRoutes());
        },
        selectRoute(data) {
            dispatch(selectRoute({pathId: data.pathId[0], coordinates: data.coordinates}));
        },
        loadAllUsers() {
            dispatch(loadAllUsers());
        },
        loadAllCars() {
            dispatch(loadCars());
        },
        replacePosition(data) {
            dispatch(replacePosition(data));
        },
        replaceUserId(id) {
            dispatch(replaceUserId(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Maps));