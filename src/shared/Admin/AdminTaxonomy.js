import React                    from 'react'
import Div                      from '../Basic/Div'
import GenericCard              from '../Cards/GenericCard'
import GenericCardAdminControls from '../Controls/GenericCardAdminControls'
import {
    adminMarketplaceInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
}                               from '../../themes/admin'

const AdminTaxonomy = ({productCategories}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
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