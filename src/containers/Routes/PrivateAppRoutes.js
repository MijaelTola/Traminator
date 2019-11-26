import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import Register from '../../containers/Register/Register'
import CreateCarPath from '../CarPaths/CreateCarPath'
import PathList from '../CarPaths/ListCarPath'
import CarRegister from '../CarRegister/CarRegister'
import Maps from '../Maps/Maps'
import UserList from '../UserList/UserList'
import Reports from '../Reports/Reports';

import Home from '../../components/Maps/Maps'


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
            <Route path='/reports' component={Reports} />
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateAppRoutes);