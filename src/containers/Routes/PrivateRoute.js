import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { loadCars } from '../../store/actions/car'

const PrivateRoute = ({ component: Component, user, cars, loadCars, ...rest }) => {
    useEffect(() => {
        loadCars();
    },[]);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user.isAuthenticated) {
                    if (user.role === 'DRIVER_ROLE') {
                        if (cars) {
                            const has = cars.filter(data => {
                                return data.idChofer === user.id
                                });
                            if (has.length === 0 && props.location.pathname !== '/carRegister') {
                                return (
                                    <Redirect
                                        to={{
                                            pathname: '/carRegister',
                                            state: { from: props.location, toReturn: props.location.pathname },
                                        }}
                                    />
                                );
                            } else if(props.location.pathname === '/carRegister' && has.length > 0) {
                                return (
                                    <Redirect
                                        to={{
                                            pathname: '/pathsList',
                                            state: { from: props.location, toReturn: props.location.pathname },
                                        }}
                                    />
                                );
                            }
                            
                        }
                    }
                    return <Component {...props} />;
                }
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location, toReturn: props.location.pathname },
                        }}
                    />
                );
            }}
        />
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    cars: state.car.cars
});
const mapDispatchToProps = (dispatch) => {
    return {
        loadCars() {
            dispatch(loadCars());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
