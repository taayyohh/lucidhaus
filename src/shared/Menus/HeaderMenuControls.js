import {search}                        from 'config/icons'
import React, {useContext}             from 'react'
import {useSelector}                   from 'react-redux'
import Div                             from 'shared/Basic/Div'
import Icon                            from 'shared/Basic/Icon'
import LinkSwitch                      from 'shared/Basic/LinkSwitch'
import {
    headerButtonSignInStyle,
    headerButtonSignUpStyle,
    headerButtonWrapperStyle,
    headerMenuIconWrapperStyle,
    headerSearchIconStyle,
    headerSearchWrapperStyle
}                                      from 'shared/Layout/styles/header'
import {menuPanelContext}              from '../Containers/MenuPanelController'
import HeaderMenuUserDropdown          from './HeaderMenuUserDropdown'
import MenuToggle                      from './MenuToggle'
import {headerMenuControlWrapperStyle} from './styles'

const HeaderMenuControls = () => {
    const {isAuthenticated, isAdmin, nameFirst} = useSelector(state => state.user)
    const {setPanel, currentPanel} = useContext(menuPanelContext)


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

            </Div>
        </Div>

    )
}


export default HeaderMenuControls
