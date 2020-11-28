import React, {useContext} from 'react'
import {useSelector}       from 'react-redux'
import {absolute}          from '../../utils/themer'
import Div                 from '../Basic/Div'
import LinkSwitch          from '../Basic/LinkSwitch'
import {menuPanelContext}  from '../Containers/MenuPanelController'
import MenuPanels          from '../Layout/MenuPanel'
import MenuToggle          from './MenuToggle'
import {
    headerMenuAuthStyle,
    headerMenuAuthStyleListItemStyle,
    headerMenuListItemStyle,
    headerMenuListStyle,
    headerMenuStyle,
    menuToggleStyle
} from './styles'

const HeaderMenu = () => {
    const {isAuthenticated} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel, currentPanel} = useContext(menuPanelContext)

    return (
        <Div theme={headerMenuStyle}>
            <Div as="nav" theme={headerMenuListStyle}>
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
                <Div
                    onClick={() => setPanel('cart-menu-panel')}
                    theme={headerMenuListItemStyle}
                >
                    Cart
                    <sup>{cart.length}</sup>
                </Div>
            </Div>
            <Div as="nav" theme={headerMenuAuthStyle}>
                {(!isAuthenticated && (
                    <>
                        <LinkSwitch
                            url="/signin"
                            theme={headerMenuAuthStyleListItemStyle}
                        >
                            Sign in
                        </LinkSwitch>
                        <LinkSwitch
                            url="/signup"
                            theme={headerMenuAuthStyleListItemStyle}
                        >
                            Sign Up
                        </LinkSwitch>

                    </>
                )) || (
                    <MenuToggle
                        theme={menuToggleStyle}
                        onClick={() => setPanel(!currentPanel ? 'admin-menu-panel' : null)}
                    />
                )}
                <MenuPanels/>
            </Div>
        </Div>
    )
}


export default HeaderMenu