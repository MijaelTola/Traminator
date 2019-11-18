import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Register from '../../components/Register/Register'
import {registerUser} from '../../store/actions/user'

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser(user) {
            dispatch(registerUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));