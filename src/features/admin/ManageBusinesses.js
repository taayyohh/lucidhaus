import React, {useEffect} from 'react'
import {Link}                                   from 'react-router-dom'
import Div                                      from '../../Basic/Div'
import ShowImage                                from '../../Shop/ShowImage'
import {adminHeadingStyle, manageBusinessStyle} from '../../themes/admin'
import H2                                       from "../../Basic/H2";
import {useDispatch, useSelector}               from "react-redux";

const ManageBusinesses = () => {
    const {marketPlace} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'admin/getAllBusinesses'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div>
            <H2 theme={adminHeadingStyle}>Manage Businesses</H2>

            <Link to="/create/business">Create Business</Link>

            {marketPlace && marketPlace.map(business => (
                <Div key={business.slug}>
                    <Div theme={manageBusinessStyle.imageWrapper}>
                        <ShowImage url="business" item={business}/>
                    </Div>
                    <strong>{business.name}</strong>
                    <Link to={`/admin/business/update/${business.slug}`}>Edit</Link>
                </Div>
            ))}
        </Div>
    )
}

export default ManageBusinesses
