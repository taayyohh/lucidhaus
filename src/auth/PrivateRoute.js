import React, {Component} from 'react'
import {
    Redirect,
    Route
}                         from 'react-router-dom'
import {isAuthenticated}  from '../api/apiAuth'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: '/user', state: {from: props.location}}}/>
    )}/>
)

export default PrivateRoute