import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import {Route}   from 'react-router-dom'
import {history} from '../../redux/store'


const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        if (!isAuthenticated)
            history.push('/signin')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Route {...rest} render={props => isAuthenticated &&
            <Component {...props} />
        }/>
    )
}


export default PrivateRoute