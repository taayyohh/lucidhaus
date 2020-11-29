import React, {useContext} from 'react'
import {useSelector}      from 'react-redux'
import {
    shoppingCart,
    user
}                         from '../../config/iconLibrary'
import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    absolute,
    center,
    flexStart,
    inlineFlex
} from '../../utils/themer'
import Div       from '../Basic/Div'
import Icon               from '../Basic/Icon'
import LinkSwitch         from '../Basic/LinkSwitch'
import {menuPanelContext} from '../Containers/MenuPanelController'
import MenuPanels         from '../Layout/MenuPanel'
import MenuToggle         from './MenuToggle'
import {
    headerMenuAuthStyle,
    headerMenuListItemStyle,
    headerMenuListStyle,
    headerMenuStyle,
    menuToggleStyle
}                         from './styles'

const HeaderMenu = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
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
            </Div>
            <Div as="nav" theme={headerMenuAuthStyle}>
                <Div
                    onClick={() => {
                        setPanel('cart-menu-panel')
                        globals.style.hideBodyOverflow()
                    }}
                    theme={headerMenuListItemStyle}
                >
                    <Icon
                        icon={shoppingCart}
                        theme={{size: 18, hover: {cursor: 'pointer', color: '#8c141e', transition: 'color 500ms ease'}}}
                    />
                    {cart.length > 0 && (
                        <Div as={'sup'} theme={{width: 20,
                            height: 20,
                            background: colorPalette.purple,
                            color: '#fff',
                            display: inlineFlex,
                            alignItems: flexStart,
                            justifyContent: center,
                            borderRadius: 20,
                            fontSize: 16,
                            fontWeight: 400,
                            marginTop: -4,
                            marginLeft: 2,}}>{cart.length}</Div>
                    )}

                </Div>
                <LinkSwitch url={isAuthenticated && isAdmin ? '/admin' : isAuthenticated ? '/user' : '/signin'} theme={{color: '#000'}}>
                    <Icon
                        icon={user}
                        theme={{size: 18, hover: {cursor: 'pointer', color: '#8c141e', transition: 'color 500ms ease'}}}
                    />
                </LinkSwitch>
            </Div>
            <MenuPanels/>
        </Div>
    )
}


export default HeaderMenu