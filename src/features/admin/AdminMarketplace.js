import React                     from 'react'
import Div                       from '../../shared/Basic/Div'
import GenericCard               from '../../shared/Elements/GenericCard'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminMarketplaceInnerWrapperStyle
}                               from '../../themes/admin'
import GenericCardAdminControls from '../../shared/Elements/GenericCardAdminControls'

const AdminMarketplace = ({marketplace}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
        {marketplace && marketplace.map(business => (
            <Div
                key={business.slug}
                theme={adminBusinessCardWrapperStyle}
            >
                <GenericCard
                    slug={`marketplace/update/${business.slug}`}
                    name={business.name}
                    photo={business.photo}
                    theme={adminBusinessCardStyle}
                />
                <GenericCardAdminControls
                    edit={'/admin/marketplace/update'}
                    destroyAction={'admin/attemptDestroyBusiness'}
                    slug={business.slug}
                />
            </Div>
        ))}
    </Div>

export default AdminMarketplace