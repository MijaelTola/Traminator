import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import CarRegister from '../../components/CarRegister/CarRegister'

import { createCar } from '../../store/actions/car';
const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCar(data) {
            dispatch(createCar(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarRegister));