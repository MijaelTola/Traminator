import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Maps from '../../components/Maps/Maps'

import { getRoutes, selectRoute } from '../../store/actions/routes';

const mapStateToProps = (state) => {
    return {
        routes: state.routes.routesData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoutes() {
            dispatch(getRoutes());
        },
        selectRoute(data) {
            dispatch(selectRoute({pathId: data.pathId, coordinates: data.coordinates}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Maps));