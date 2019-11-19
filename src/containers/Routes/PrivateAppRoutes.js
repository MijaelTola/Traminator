import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../../containers/Register/Register';
import Home from '../../containers/NavBar/NavBar';
import Maps from '../../components/Maps/Maps'
import Headers from '../../containers/Header/Header'
const PrivateAppRoutes = ({user}) => {
    return (
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Headers}/>
            <Route path='/maps' component={Maps}/>
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);