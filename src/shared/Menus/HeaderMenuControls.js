import React, {useContext}             from 'react'
import {useSelector}                   from 'react-redux'
import {
    shoppingCart,
    user
}                                      from '../../config/iconLibrary'
import {transparent}                   from '../../utils/themer'
import Div                             from '../Basic/Div'
import Icon                            from '../Basic/Icon'
import LinkSwitch                      from '../Basic/LinkSwitch'
import MotionDiv                       from '../Basic/MotionDiv'
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
    const {setPanel} = useContext(menuPanelContext)

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
                <MotionDiv
                    as={'sup'}
                    theme={cart.length > 0
                        ? {...cartNumberStyle}
                        : {
                            ...cartNumberStyle,
                            color: transparent,
                            backgroundColor: transparent
                        }
                    }
                >
                    {cart.length}
                </MotionDiv>
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