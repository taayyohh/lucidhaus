import React                    from 'react'
import {
    adminMarketplaceInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
} from '../../features/admin/styles'
import Div                      from '../Basic/Div'
import GenericCard              from '../Cards/GenericCard'
import GenericCardAdminControls from '../Controls/GenericCardAdminControls'

const AdminShop = ({shop}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
        {shop && shop.map(product => (
            <Div
                key={product.slug}
                theme={adminShopCardWrapperStyle}
            >
                <GenericCard
                    slug={`product/update/${product.slug}`}
                    name={product.name}
                    photo={product.photo}
                    theme={adminShopCardStyle}
                    layoutId={product._id}
                />
                <GenericCardAdminControls
                    edit={'/admin/product/update'}
                    destroyAction={'admin/attemptDestroyProduct'}
                    slug={product.slug}
                />
            </Div>
        ))}
    </Div>

export default AdminShop