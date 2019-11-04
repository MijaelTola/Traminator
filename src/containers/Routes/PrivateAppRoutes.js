import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../../components/Register/Register';
import Home from '../../components/Home/Home'

const PrivateAppRoutes = ({user}) => {
    return (
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Home}/>
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);