import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../Register/Register';

const PrivateAppRoutes = ({user}) => {
    return (
        <switch>
            <Route path='/register' component={Register}/>
        </switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);