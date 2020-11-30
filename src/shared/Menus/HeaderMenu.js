import React, {useContext} from 'react'
import {useSelector}       from 'react-redux'
import {
    shoppingCart,
    user
}                          from '../../config/iconLibrary'
import {mobileFlag}        from '../../features/site/siteSlice'
import {absolute}          from '../../utils/themer'
import Div                 from '../Basic/Div'
import Icon                from '../Basic/Icon'
import LinkSwitch          from '../Basic/LinkSwitch'
import {menuPanelContext}  from '../Containers/MenuPanelController'
import MenuPanels          from '../Layout/MenuPanel'
import {
    cartNumberStyle,
    headerIconStyle,
    headerMenuIconWrapperStyle
}                          from '../Layout/styles/header'
import MenuToggle          from './MenuToggle'
import {
    headerMenuControlWrapperStyle,
    headerMenuListItemStyle,
    headerMenuListStyle,
    headerMenuStyle,
    menuToggleStyle
}                          from './styles'

const HeaderMenu = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel, currentPanel} = useContext(menuPanelContext)
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={headerMenuStyle}>
            <Div theme={headerMenuListStyle}>
                {!isMobile && (
                    <>
                        <LinkSwitch
                            url="/posts"
                            theme={headerMenuListItemStyle}>
                            Posts
                            <Div theme={{position: absolute, left: 0, bottom: 0, height: 4, backgroundColor: '#afe'}}/>
                        </LinkSwitch>
                        <LinkSwitch
                            url="/shop"
                            theme={headerMenuListItemStyle}>
                            Shop
                        </LinkSwitch>
                    </>
                )}
            </Div>
            <Div theme={headerMenuControlWrapperStyle}>
                <Div
                    onClick={() => setPanel('cart-menu-panel')}
                    theme={headerMenuIconWrapperStyle}
                >
                    <Icon
                        icon={shoppingCart}
                        theme={headerIconStyle}
                    />
                    {cart.length > 0 && (
                        <Div as={'sup'} theme={cartNumberStyle}>{cart.length}</Div>
                    )}
                </Div>
                <LinkSwitch
                    url={isAuthenticated && isAdmin
                        ? '/admin'
                        : isAuthenticated
                            ? '/user'
                            : '/signin'}
                    theme={headerMenuIconWrapperStyle}
                >
                    <Icon
                        icon={user}
                        theme={headerIconStyle}
                    />
                </LinkSwitch>
            </Div>
            {isMobile && (
                <MenuToggle
                    theme={menuToggleStyle}
                    onClick={() => setPanel(!currentPanel ? 'admin-menu-panel' : null)}
                />
            )}
            <MenuPanels/>
        </Div>
    )
}


export default HeaderMenu