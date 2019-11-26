import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Maps from '../../components/Maps/Maps'

import { getRoutes } from '../../store/actions/routes';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoutes() {
            dispatch(getRoutes());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Maps));