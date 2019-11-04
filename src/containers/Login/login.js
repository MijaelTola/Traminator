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
            /*
            localStorage.setItem('user-token', JSON.stringify({
                id_token: user.tokenId,
                isAuthenticated: true,
                isLogged: true,
                name: user.name,
                email: user.email,
                role: user.role,
            }));
            */
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));