import ShopMenu from 'features/shop/ShopMenu'
import {
    shopLeftColumnStyle,
    shopRightColumnStyle,
    shopWrapperStyle
}               from 'features/shop/styles'
import React    from 'react'
import Div      from 'shared/Basic/Div'

const ShopWrapper = ({children}) =>
    <Div theme={shopWrapperStyle}>
        <Div theme={shopLeftColumnStyle}>
            <ShopMenu/>
        </Div>
        <Div theme={shopRightColumnStyle}>
            {children}
        </Div>
    </Div>


export default ShopWrapper