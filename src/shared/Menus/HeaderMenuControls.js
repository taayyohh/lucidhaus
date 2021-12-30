import {shoppingCart}                  from 'config/icons'
import React, {useContext}             from 'react'
import {useSelector}                   from 'react-redux'
import Div                             from 'shared/Basic/Div'
import Icon                            from 'shared/Basic/Icon'
import LinkSwitch                      from 'shared/Basic/LinkSwitch'
import MotionDiv                       from 'shared/Basic/MotionDiv'
import {menuPanelContext}              from 'shared/Containers/MenuPanelController'
import {
    cartNumberStyle,
    headerButtonSignInStyle,
    headerButtonSignUpStyle,
    headerButtonWrapperStyle,
    headerIconStyle,
    headerMenuIconWrapperStyle
}                                      from 'shared/Layout/styles/header'
import {transparent}                   from 'utils/themer'
import HeaderMenuUserDropdown          from './HeaderMenuUserDropdown'
import {headerMenuControlWrapperStyle} from './styles'

const HeaderMenuControls = () => {
    const {isAuthenticated, isAdmin, nameFirst} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel} = useContext(menuPanelContext)

    return (
        <Div theme={headerMenuControlWrapperStyle}>
            <Div
                url={
                    isAuthenticated && isAdmin
                        ? '/admin'
                        : isAuthenticated
                        ? '/dashboard'
                        : '/signin'
                }
                theme={headerMenuIconWrapperStyle}
            >
                {(isAuthenticated && (
                    <HeaderMenuUserDropdown
                        nameFirst={nameFirst}
                    />
                )) || (
                    <Div theme={headerButtonWrapperStyle}>
                        <LinkSwitch
                            url={'/signin'}
                            theme={headerButtonSignInStyle}
                        >
                            Signin
                        </LinkSwitch>
                        <LinkSwitch
                            url={'/signup'}
                            theme={headerButtonSignUpStyle}
                        >
                            Sign Up
                        </LinkSwitch>
                    </Div>
                )}
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
                        children={cart.length}
                    />
                </Div>
                {/*<Div*/}
                {/*    theme={headerSearchWrapperStyle}*/}
                {/*    onClick={*/}
                {/*        () => setPanel(*/}
                {/*            !currentPanel*/}
                {/*                ? 'search-menu'*/}
                {/*                : null*/}
                {/*        )}*/}
                {/*>*/}
                {/*    <Icon*/}
                {/*        icon={search}*/}
                {/*        theme={headerSearchIconStyle}*/}
                {/*    />*/}
                {/*</Div>*/}

            </Div>
        </Div>

    )
}

export default HeaderMenuControls
