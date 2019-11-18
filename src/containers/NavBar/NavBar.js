import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";

import NavBarComp from '../../components/NavBar/NavBar'

import { logoutUser } from '../../store/actions/user'
const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser() {
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarComp));