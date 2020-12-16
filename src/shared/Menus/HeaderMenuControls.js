import React, {useContext}             from 'react'
import {useSelector} from 'react-redux'
import {
    shoppingCart,
    user
}                    from 'config/icons/fa'
import {transparent} from 'utils/themer'
import Div                             from 'shared/Basic/Div'
import Icon                            from 'shared/Basic/Icon'
import LinkSwitch                      from 'shared/Basic/LinkSwitch'
import MotionDiv                       from 'shared/Basic/MotionDiv'
import {menuPanelContext}              from 'shared/Containers/MenuPanelController'
import {
    cartNumberStyle,
    headerIconStyle,
    headerMenuIconWrapperStyle
}                                      from 'shared/Layout/styles/header'
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