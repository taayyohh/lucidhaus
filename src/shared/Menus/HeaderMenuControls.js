import {shoppingCart}                  from 'config/icons'
import React, {useContext}             from 'react'
import {useSelector}                   from 'react-redux'
import Div                             from 'shared/Basic/Div'
import Icon                            from 'shared/Basic/Icon'
import LinkSwitch                      from 'shared/Basic/LinkSwitch'
import {menuPanelContext}              from 'shared/Containers/MenuPanelController'
import {
    cartNumberStyle,
    headerButtonSignInStyle,
    headerButtonSignUpStyle,
    headerButtonWrapperStyle,
    headerIconStyle,
    headerMenuIconWrapperStyle
}                                      from 'shared/Layout/styles/header'
import {transparent}                   from '../../utils/themer'
import MotionDiv                       from '../Basic/MotionDiv'
import HeaderMenuUserDropdown          from './HeaderMenuUserDropdown'
import {headerMenuControlWrapperStyle} from './styles'

const HeaderMenuControls = () => {
    const {isAuthenticated, isAdmin, nameFirst} = useSelector(state => state.user)
    const {cart} = useSelector(state => state.shop)
    const {setPanel, currentPanel} = useContext(menuPanelContext)

    return (
        <Div theme={headerMenuControlWrapperStyle}>
            <Div
<<<<<<< HEAD
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
=======
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
            {/*<LinkSwitch*/}
            {/*    url={*/}
            {/*        isAuthenticated && isAdmin*/}
            {/*            ? '/admin'*/}
            {/*            : isAuthenticated*/}
            {/*            ? '/dashboard'*/}
            {/*            : '/signin'*/}
            {/*    }*/}
            {/*    theme={headerMenuIconWrapperStyle}*/}
            {/*>*/}
            {/*    <Icon*/}
            {/*        icon={user}*/}
            {/*        theme={headerIconStyle}*/}
            {/*    />*/}
            {/*</LinkSwitch>*/}
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
        </Div>

    )
}

export default HeaderMenuControls
