import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";

import CreateCarPath from '../../components/CarPaths/CreateCarPath';

import { createRoute} from '../../store/actions/routes';

const mapStateToProps = (state) => {
    return {
      user: state.user,
      coordinates: state.map.coordinates,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createRoute(data) {
            dispatch(createRoute({
                pathId: data.pathId,
                ini: data.ini,
                fin: data.fin,
                coordinates: data.coordinates,
            }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateCarPath));