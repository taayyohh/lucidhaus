import React, {useContext}           from 'react'
import Div                           from '../Basic/Div'
import {menuPanelContext}            from '../Containers/MenuPanelController'
import {mobileHeaderMenuToggleStyle} from '../themes/header'
import HeaderMenu                    from './HeaderMenu'

const MobileHeaderMenu = () => {
    const {setPanel} = useContext(menuPanelContext)

    return (
        <Div>
            <Div
                theme={mobileHeaderMenuToggleStyle}
                onClick={() => setPanel({name: 'mobile-header-menu-panel'})}
            />
            {/*<HeaderMenu />*/}
        </Div>
    )
}

export default MobileHeaderMenu