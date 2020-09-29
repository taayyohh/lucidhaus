import React, {useContext} from 'react'
import Div from '../Basic/Div'
import {headerMenuPanelWrapperStyle} from '../themes/menus'
import HeaderMenuPanelWrapper from '../Menus/MenuPanelWrapper'
import AdminMenu from "../Menus/AdminMenu";
import {menuPanelContext} from "../Containers/MenuPanelController";
import Cart from "../Shop/Cart";

const MenuPanels = () => {
    const {currentPanel} = useContext(menuPanelContext)
    const setCurrentPanel = () => {
        switch (currentPanel.name) {
            case 'admin-menu-panel':
                return <AdminMenu/>
            case 'cart-menu-panel':
                return <Cart />
            default:
                return null
        }
    }
    const panelOpen = setCurrentPanel()

    console.log('name', currentPanel.name)

    return (
        <Div theme={headerMenuPanelWrapperStyle}>
            <HeaderMenuPanelWrapper
                children={setCurrentPanel()}
                name={currentPanel.name}
            />
            {/*<Overlay isOpen={!!panelOpen}/>*/}
        </Div>
    )
}

MenuPanels.displayName = 'MenuPanels'

export default MenuPanels
