import React                     from 'react'
import Div                       from '../../Basic/Div'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminMarketplaceInnerWrapperStyle
}                                from '../../themes/admin'
import BusinessCard              from '../business/BusinessCard'
import BusinessCardAdminControls from '../business/BusinessCardAdminControls'

const AdminMarketplace = ({marketplace}) => {
    return (
        <Div theme={adminMarketplaceInnerWrapperStyle}>
            {marketplace && marketplace.map(business => (
                <Div
                    key={business.slug}
                    theme={adminBusinessCardWrapperStyle}
                >
                    <BusinessCard
                        slug={business.slug}
                        name={business.name}
                        photo={business.photo}
                        theme={adminBusinessCardStyle}
                    />
                    <BusinessCardAdminControls slug={business.slug} />
                </Div>
            ))}
        </Div>
    )
}

export default AdminMarketplace