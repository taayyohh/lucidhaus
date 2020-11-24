import React                    from 'react'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminMarketplaceInnerWrapperStyle
} from '../../features/admin/styles'
import Div         from '../Basic/Div'
import GenericCard from '../Cards/GenericCard'
import GenericCardAdminControls from '../Controls/GenericCardAdminControls'

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
                    layoutId={business._id}
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