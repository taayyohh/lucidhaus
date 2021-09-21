import {mobileFlag}                                      from 'features/site/slice'
import React, {useContext}                               from 'react'
import {useSelector}                                     from 'react-redux'
import Div                                               from 'shared/Basic/Div'
import {menuPanelContext}                                from 'shared/Containers/MenuPanelController'
import MenuPanels                                        from 'shared/Menus/MenuPanel'
import {search}                                          from '../../config/icons'
import Icon                                              from '../Basic/Icon'
import {headerSearchIconStyle, headerSearchWrapperStyle} from '../Layout/styles/header'
import HeaderMenuControls                                from './HeaderMenuControls'
import MenuToggle                                        from './MenuToggle'
import {headerMenuStyle, menuToggleStyle}                from './styles'

const HeaderMenu = () => {
    const {setPanel, currentPanel} = useContext(menuPanelContext)
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={headerMenuStyle}>
            {!isMobile && (
                <HeaderMenuControls/>
            )}
            {isMobile && (
                <>

                    <MenuToggle
                        theme={menuToggleStyle}
                        onClick={
                            () => setPanel(
                                !currentPanel
                                    ? 'mobile-header-menu-panel'
                                    : null
                            )}
                    />
                    <Div
                        theme={headerSearchWrapperStyle}
                        onClick={
                            () => setPanel(
                                !currentPanel
                                    ? 'search-menu'
                                    : null
                            )}
                    >
                        <Icon
                            icon={search}
                            theme={headerSearchIconStyle}
                        />
                    </Div>
                </>

            )}
            <MenuPanels/>
        </Div>
    )
}

export default HeaderMenu
