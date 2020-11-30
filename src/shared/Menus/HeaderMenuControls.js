import React, {useContext}             from 'react'
import {useSelector}                   from 'react-redux'
import {
    shoppingCart,
    user
}                                      from '../../config/iconLibrary'
import Div                             from '../Basic/Div'
import Icon                            from '../Basic/Icon'
import LinkSwitch                      from '../Basic/LinkSwitch'
import {menuPanelContext}              from '../Containers/MenuPanelController'
import {
    cartNumberStyle,
    headerIconStyle,
    headerMenuIconWrapperStyle
}                                      from '../Layout/styles/header'
import {headerMenuControlWrapperStyle} from './styles'

const HeaderMenuControls = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel, currentPanel} = useContext(menuPanelContext)

    return (
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

    )
}


export default HeaderMenuControls