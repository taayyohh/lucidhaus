import {mobileHeaderMenu, mobileUserDashboardMenu, userDashboardMenu} from 'config/menus/dashboard/user'
import React                                                          from 'react'
import {useDispatch, useSelector}                                                   from 'react-redux'
import Div                                                                          from 'shared/Basic/Div'
import Span                                                                         from 'shared/Basic/Span'
import {adminMenuStyle}                                                             from 'shared/Layout/Dashboard/admin/styles'
import {mobileFlag}                                                                 from '../../features/site/slice'
import LinkSwitch                                                                   from '../Basic/LinkSwitch'
import {headerButtonSignInStyle, headerButtonSignUpStyle, headerButtonWrapperStyle} from '../Layout/styles/header'
import HeaderDashboardMenu                                                          from './HeaderDashboardMenu'
import {headerAccountMenuLinkStyle}                                                 from './styles'

const MobileHeaderMenu = () => {
    const {nameFirst, isAdmin, isAuthenticated} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const isMobile = useSelector(mobileFlag)


    return (
        <Div theme={adminMenuStyle}>
            <Div theme={adminMenuStyle.list}>
                {(isAuthenticated && (
                    <>
                        <Div theme={adminMenuStyle.greeting}>Hello, {nameFirst}</Div>
                        <HeaderDashboardMenu
                            // menu={isAdmin ? mobileAdminDashboardMenu : userDashboardMenu}
                            menu={isMobile ? mobileUserDashboardMenu : userDashboardMenu}

                        />
                        <Span
                            theme={{...headerAccountMenuLinkStyle, ...headerAccountMenuLinkStyle.signOut}}
                            onClick={() => dispatch({type: 'user/signOut'})}
                        >
                            Sign Out
                        </Span>
                    </>
                )) || (
                    <>
                        <HeaderDashboardMenu
                            menu={mobileHeaderMenu}
                        />
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
                    </>
                )}
            </Div>
        </Div>
    )
}


export default MobileHeaderMenu
