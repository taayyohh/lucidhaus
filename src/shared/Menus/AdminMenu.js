import React                              from 'react'
import {
    useDispatch,
    useSelector
}                                         from 'react-redux'
import {adminMenuStyle}                   from '../../features/admin/styles'
import Div                                from '../Basic/Div'
import H2                                 from '../Basic/H2'
import Li                                 from '../Basic/Li'
import Span                               from '../Basic/Span'
import Ul                                 from '../Basic/Ul'
import LinkSwitch                         from '../Basic/LinkSwitch'
import {
    headerMenuAuthStyleListItemStyle,
    menuPanelHeaderStyle
} from './styles'

const AdminMenu = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    return (
        <Div theme={adminMenuStyle}>
            <H2 theme={menuPanelHeaderStyle}>Admin Menu</H2>
            <Ul theme={adminMenuStyle.list}>
                <Li theme={adminMenuStyle.listItem}>
                    <LinkSwitch
                        url="/admin"
                        theme={adminMenuStyle.link}>
                        Dashboard
                    </LinkSwitch>
                </Li>
                {!isAuthenticated && (
                    <>
                        <LinkSwitch
                            url="/signin"
                            theme={headerMenuAuthStyleListItemStyle}
                        >
                            Sign in
                        </LinkSwitch>
                        <LinkSwitch
                            url="/signup"
                            theme={headerMenuAuthStyleListItemStyle}
                        >
                            Sign Up
                        </LinkSwitch>

                    </>
                )}
                {isAuthenticated && (
                    <Span
                        to="/signout"
                        theme={headerMenuAuthStyleListItemStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                )}
                {isAuthenticated && !isAdmin && (
                    <LinkSwitch
                        url="/user/dashboard"
                        theme={headerMenuAuthStyleListItemStyle}>
                        Profile
                    </LinkSwitch>
                )}
            </Ul>
        </Div>
    )
}


export default AdminMenu