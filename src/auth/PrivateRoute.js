import React, {Component, useEffect} from 'react'
import {Route} from 'react-router-dom'
import {useSelector} from "react-redux"
import {history} from '../redux/store'


const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useSelector(state => state.user)

    console.log('hi')

    if (!isAuthenticated)
        history.push("/signin")

    return (
        <Route {...rest} render={props =>
            <Component {...props} />
        }/>
    )
}


export default PrivateRoute