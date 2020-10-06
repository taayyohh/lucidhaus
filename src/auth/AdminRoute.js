import React, {Component, useEffect} from 'react'
import {Route} from 'react-router-dom'
import {useSelector} from "react-redux"
import {history} from '../redux/store'


const AdminRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    useEffect(() => {
        if (!isAuthenticated || !isAdmin)
            history.push("/signin")

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Route {...rest} render={props => isAuthenticated && isAdmin &&
            <Component {...props} />
        }/>
    )
}


export default AdminRoute