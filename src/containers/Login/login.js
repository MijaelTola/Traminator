import { connect } from 'react-redux'
import Login from '../../components/Login/login';
import { loggInUser } from '../../store/actions';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser(username, password) {

            dispatch(loggInUser(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));