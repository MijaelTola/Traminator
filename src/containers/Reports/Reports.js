import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Reports from '../../components/Reports/Reports'

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Reports));