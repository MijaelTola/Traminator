import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Reports from '../../components/Reports/Reports'

import { loadReports } from '../../store/actions/reports';

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadReports() {
            dispatch(loadReports());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Reports));