import React, {Component} from 'react'
import {
    Redirect,
    Route
}                         from 'react-router-dom'
import {isAuthenticated}  from '../api/apiAuth'
import {useSelector} from "react-redux";

const AdminRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    return (
        <>
            <Route {...rest} render={props => (isAuthenticated && isAdmin) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/user', state: {from: props.location}}}/>
            )}/>
        </>
    )
}



export default AdminRoute