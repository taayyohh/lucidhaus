import {globals}                     from 'config/styles'
import CartPanel                     from 'features/shop/views/CartPanel'
import React, {useContext}           from 'react'
import Div                           from 'shared/Basic/Div'
import {menuPanelContext}            from 'shared/Containers/MenuPanelController'
import MenuOverlay                   from 'shared/Menus/MenuOverlay'
import MenuPanelWrapper              from 'shared/Menus/MenuPanelWrapper'
import MobileHeaderMenu              from 'shared/Menus/MobileHeaderMenu'
import {headerMenuPanelWrapperStyle} from 'shared/Menus/styles'
import Player                        from 'shared/Player'
import LeaveAReview                  from './LeaveAReview'
import SearchMenu                    from './SearchMenu'

const MenuPanels = () => {
    const {currentPanel, setPanel} = useContext(menuPanelContext)
    const setCurrentPanel = () => {
        switch (currentPanel) {
            case 'cart-menu-panel':
                return <CartPanel/>
            case 'mobile-header-menu-panel':
                return <MobileHeaderMenu/>
            case 'search-menu':
                return <SearchMenu/>
            case 'leave-a-review':
                return <LeaveAReview/>
            case 'player':
                return <Player/>
            default:
                return null
        }
    }

    return (
        <Div theme={headerMenuPanelWrapperStyle}>
            <MenuPanelWrapper
                children={setCurrentPanel()}
                name={currentPanel}
            />
            <MenuOverlay
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
