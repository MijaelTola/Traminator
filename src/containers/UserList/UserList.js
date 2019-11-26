import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import UserList from '../../components/UserList/UserList'
import { loadAllUsers } from '../../store/actions/user'

const mapStateToProps = (state) => {
    return {
      user: state.user,
      users: state.user.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllUsers() {
            dispatch(loadAllUsers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList));