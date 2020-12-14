import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
}                               from 'features/admin/styles'
import React                    from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

const AdminTaxonomy = ({productCategories}) =>
    <Div theme={adminPostsInnerWrapperStyle}>
        {productCategories && productCategories.map(cat => (
            <Div
                key={cat.slug}
                theme={adminShopCardWrapperStyle}
            >
                <GenericCard
                    slug={`product-category/update/${cat.slug}`}
                    name={cat.name}
                    theme={adminShopCardStyle}
                />
                <GenericCardAdminControls
                    edit={'/admin/product-category/update'}
                    destroyAction={'admin/attemptDestroyProduct'}
                    slug={cat.slug}
                    id={cat._id}
                />
            </Div>
        ))}
    </Div>

export default AdminTaxonomy