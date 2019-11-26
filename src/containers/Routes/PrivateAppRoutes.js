import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../../containers/Register/Register'
import CreateCarPath from '../CarPaths/CreateCarPath'
import PathList from '../CarPaths/ListCarPath'
import Maps from '../Maps/Maps'
import UserList from '../UserList/UserList'

import Home from '../../components/Maps/Maps'
import CarRegister from '../../components/CarRegister/CarRegister'


const PrivateAppRoutes = ({user}) => {
    return (
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Home}/>
            <Route path='/maps' component={Maps}/>
            <Route path='/userList' component={UserList} />
            <Route path='/carRegister' component={CarRegister} />
            <Route path='/createPath' component={CreateCarPath} />
            <Route path='/pathsList' component={PathList} />
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);