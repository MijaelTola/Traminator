import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../../containers/Register/Register';
import Maps from '../../components/Maps/Maps'
import Home from '../../components/Maps/Maps'
const PrivateAppRoutes = ({user}) => {
    return (
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Home}/>
            <Route path='/maps' component={Maps}/>
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);