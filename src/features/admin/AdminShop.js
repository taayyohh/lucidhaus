import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
}                               from 'features/admin/styles'
import React                    from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

const AdminShop = ({shop}) =>
    <Div theme={adminPostsInnerWrapperStyle}>
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