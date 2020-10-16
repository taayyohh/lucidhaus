import React, {useEffect}        from 'react'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import {Link}                    from 'react-router-dom'
import Div                       from '../../Basic/Div'
import H2                        from '../../Basic/H2'
import {
    adminBusinessCardStyle,
    adminHeadingStyle,
    adminMarketplaceInnerWrapperStyle,
    adminMarketplaceWrapperStyle
} from '../../themes/admin'
import BusinessCard              from '../business/BusinessCard'
import BusinessCardAdminControls from '../business/BusinessCardAdminControls'

const ManageMarketplace = () => {
    const {marketplace} = useSelector(state => state.business)
    const {_id, token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div>
            <H2 theme={adminHeadingStyle}>Manage Businesses</H2>
            <Link to="/create/business">Create Business</Link>
            <Div theme={adminMarketplaceWrapperStyle}>
                {marketplace && marketplace.map(business => (
                    <Div theme={adminMarketplaceInnerWrapperStyle}>
                        <BusinessCard
                            key={business.slug}
                            slug={business.slug}
                            name={business.name}
                            photo={business.photo}
                            theme={adminBusinessCardStyle}
                        />
                        <BusinessCardAdminControls
                            slug={business.slug}
                            _id={_id}
                            token={token}
                        />
                    </Div>
                ))}
            </Div>

        </Div>
    )
}

export default ManageMarketplace
