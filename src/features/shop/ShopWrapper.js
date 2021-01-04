import React    from 'react'
import Div      from 'shared/Basic/Div'
import ShopMenu from './ShopMenu'
import {
    shopLeftColumnStyle,
    shopRightColumnStyle,
    shopWrapperStyle
}               from './styles'

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