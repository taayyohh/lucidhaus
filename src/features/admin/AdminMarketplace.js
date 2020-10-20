import React from 'react'
import Div   from '../../shared/Basic/Div'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminMarketplaceInnerWrapperStyle
}            from '../../themes/admin'
import BusinessCard              from '../business/BusinessCard'
import BusinessCardAdminControls from '../business/BusinessCardAdminControls'

const AdminMarketplace = ({marketplace}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
        {marketplace && marketplace.map(business => (
            <Div
                key={business.slug}
                theme={adminBusinessCardWrapperStyle}
            >
                <BusinessCard
                    slug={`update/${business.slug}`}
                    name={business.name}
                    photo={business.photo}
                    theme={adminBusinessCardStyle}
                />
                <BusinessCardAdminControls slug={business.slug}/>
            </Div>
        ))}
    </Div>

export default AdminMarketplace