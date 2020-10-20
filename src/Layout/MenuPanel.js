import React, {useContext} from 'react'
import Div                           from '../shared/Basic/Div'
import HeaderMenu                    from '../shared/Menus/HeaderMenu'
import {headerMenuPanelWrapperStyle} from '../themes/menus'
import HeaderMenuPanelWrapper        from '../shared/Menus/MenuPanelWrapper'
import AdminMenu                     from "../shared/Menus/AdminMenu";
import {menuPanelContext}            from "../Containers/MenuPanelController";
import Cart                          from "../Shop/Cart";
import Overlay                       from "./Overlay";

const MenuPanels = () => {
    const {currentPanel, setPanel} = useContext(menuPanelContext)
    const setCurrentPanel = () => {
        switch (currentPanel.name) {
            case 'admin-menu-panel':
                return <AdminMenu/>
            case 'cart-menu-panel':
                return <Cart />
            case 'mobile-header-menu-panel':
                return <HeaderMenu />
            default:
                return null
        }
    }

    return (
        <Div theme={headerMenuPanelWrapperStyle}>
            <HeaderMenuPanelWrapper
                children={setCurrentPanel()}
                name={currentPanel.name}
            />
            <Overlay
                isOpen={!!currentPanel.name}
                onClick={() => setPanel('')}
            />
        </Div>
    )
}

MenuPanels.displayName = 'MenuPanels'

export default MenuPanels
