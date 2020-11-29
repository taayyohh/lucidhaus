import React, {useContext} from 'react'
import {useSelector}      from 'react-redux'
import {
    shoppingCart,
    user
}                         from '../../config/iconLibrary'
import {globals}          from '../../config/styles'
import {flex}             from '../../utils/themer'
import Div                from '../Basic/Div'
import Icon               from '../Basic/Icon'
import LinkSwitch         from '../Basic/LinkSwitch'
import {menuPanelContext} from '../Containers/MenuPanelController'
import MenuPanels         from '../Layout/MenuPanel'
import MenuToggle         from './MenuToggle'
import {
    headerMenuListItemStyle,
    menuToggleStyle
}                         from './styles'

const MobileHeaderMenu = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel, currentPanel} = useContext(menuPanelContext)


    return (
        <Div as="nav" theme={{display: flex}}>
            <MenuPanels />
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
                <sup>{cart.length}</sup>
            </Div>

            <LinkSwitch url={isAuthenticated && isAdmin ? '/admin' : isAuthenticated ? '/user' : '/signin'}
                        theme={{color: '#000'}}>
                <Icon
                    icon={user}
                    theme={{size: 18, hover: {cursor: 'pointer', color: '#8c141e', transition: 'color 500ms ease'}}}
                />
            </LinkSwitch>

            {isAuthenticated && (
                <MenuToggle
                    theme={menuToggleStyle}
                    onClick={
                        () => {
                            if (!!currentPanel)
                                globals.style.resetBody()

                            setPanel(!currentPanel ? 'admin-menu-panel' : null)
                        }
                    }
                />
            )}
        </Div>
    )
}

export default MobileHeaderMenu