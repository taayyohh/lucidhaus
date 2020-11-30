import React, {useContext}           from 'react'
import {globals}                     from '../../config/styles'
import Cart                          from '../../features/shop/Cart'
import Div                           from '../Basic/Div'
import {menuPanelContext}            from '../Containers/MenuPanelController'
import AdminMenu                     from '../Menus/AdminMenu'
import HeaderMenuPanelWrapper        from '../Menus/MenuPanelWrapper'
import {headerMenuPanelWrapperStyle} from '../Menus/styles'
import Overlay                       from './Overlay'

const MenuPanels = () => {
    const {currentPanel, setPanel} = useContext(menuPanelContext)
    const setCurrentPanel = () => {
        switch (currentPanel) {
            case 'admin-menu-panel':
                return <AdminMenu/>
            case 'cart-menu-panel':
                return <Cart/>
            case 'mobile-header-menu-panel':
                return <AdminMenu/>
            default:
                return null
        }
    }

    return (
        <Div theme={headerMenuPanelWrapperStyle}>
            <HeaderMenuPanelWrapper
                children={setCurrentPanel()}
                name={currentPanel}
            />
            <Overlay
                isOpen={!!currentPanel}
                onClick={
                    () => {
                        setPanel(null)
                        globals.style.resetBody()
                    }
                }
            />
        </Div>
    )
}

MenuPanels.displayName = 'MenuPanels'

export default MenuPanels
