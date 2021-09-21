import {adminDashboardMenu}         from 'config/menus/dashboard/admin'
import {userDashboardMenu}          from 'config/menus/dashboard/user'
import React                      from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Span                         from 'shared/Basic/Span'
import {adminMenuStyle}             from 'shared/Layout/Dashboard/admin/styles'
import HeaderDashboardMenu          from './HeaderDashboardMenu'
import {headerAccountMenuLinkStyle} from './styles'

const MobileHeaderMenu = () => {
    const {nameFirst, isAdmin} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Div theme={adminMenuStyle}>
            <Div theme={adminMenuStyle.list}>
                <Div theme={adminMenuStyle.greeting}>Hello, {nameFirst}</Div>
                <HeaderDashboardMenu
                    menu={isAdmin ? adminDashboardMenu : userDashboardMenu}
                />
                <Span
                    theme={{...headerAccountMenuLinkStyle, ...headerAccountMenuLinkStyle.signOut}}
                    onClick={() => dispatch({type: 'user/signOut'})}
                >
                    Sign Out
                </Span>
            </Div>
        </Div>
    )
}


export default MobileHeaderMenu
