import React, {useContext}           from 'react'
import Div                           from '../Basic/Div'
import {menuPanelContext}            from '../Containers/MenuPanelController'
import {mobileHeaderMenuToggleStyle} from '../Layout/styles/header'

const MobileHeaderMenu = () => {
    const {setPanel} = useContext(menuPanelContext)

    return (
        <Div>
            <Div
                theme={mobileHeaderMenuToggleStyle}
                onClick={() => setPanel('mobile-header-menu-panel')}
            />
        </Div>
    )
}

export default MobileHeaderMenu