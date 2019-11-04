import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user.isAuthenticated) {
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
    user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
