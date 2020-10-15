import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import {Link}             from 'react-router-dom'
import Div                from '../../Basic/Div'
import H2                 from '../../Basic/H2'
import ShowImage          from '../../Shop/ShowImage'
import {
    adminHeadingStyle,
    manageBusinessStyle
}                         from '../../themes/admin'

const ManageMarketplace = () => {
    const {marketplace} = useSelector(state => state.business)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div>
            <H2 theme={adminHeadingStyle}>Manage Businesses</H2>

            <Link to="/create/business">Create Business</Link>

            {marketplace && marketplace.map(business => (
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

export default ManageMarketplace
