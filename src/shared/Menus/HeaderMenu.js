import React, {useContext} from 'react'
import {useSelector}       from 'react-redux'
import {mobileFlag}        from 'features/site/siteSlice'
import Div                 from 'shared/Basic/Div'
import {menuPanelContext}  from 'shared/Containers/MenuPanelController'
import MenuPanels          from 'shared/Layout/MenuPanel'
import HeaderMenuControls  from './HeaderMenuControls'
import HeaderMenuItems     from './HeaderMenuItems'
import MenuToggle          from './MenuToggle'
import {
    headerMenuStyle,
    menuToggleStyle
}                          from './styles'

const HeaderMenu = () => {
    const {setPanel, currentPanel} = useContext(menuPanelContext)
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={headerMenuStyle}>
            {!isMobile && (
                <HeaderMenuItems/>
            )}
            <HeaderMenuControls/>
            {isMobile && (
                <MenuToggle
                    theme={menuToggleStyle}
                    onClick={() => setPanel(!currentPanel ? 'mobile-header-menu-panel' : null)}
                />
            )}
            <MenuPanels/>
        </Div>
    )
}


export default HeaderMenu