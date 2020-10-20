import React                     from 'react'
import Div                       from '../../Basic/Div'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminMarketplaceInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
} from '../../themes/admin'
import BusinessCardAdminControls from '../business/BusinessCardAdminControls'
import ShopCard                  from '../shop/ShopCard'

const AdminShop = ({shop}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
        {shop && shop.map(product => (
            <Div
                key={product.slug}
                theme={adminShopCardWrapperStyle}
            >
                <ShopCard
                    slug={`update/${product.slug}`}
                    name={product.name}
                    photo={product.photo}
                    theme={adminShopCardStyle}
                />
                <BusinessCardAdminControls slug={product.slug}/>
            </Div>
        ))}
    </Div>

export default AdminShop