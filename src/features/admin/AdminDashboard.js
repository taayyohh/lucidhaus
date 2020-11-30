import React                              from 'react'
import {
    useDispatch,
    useSelector
}                                         from 'react-redux'
import Div                                from '../../shared/Basic/Div'
import H3                                 from '../../shared/Basic/H3'
import Li                                 from '../../shared/Basic/Li'
import LinkSwitch                         from '../../shared/Basic/LinkSwitch'
import Span                               from '../../shared/Basic/Span'
import Ul                                 from '../../shared/Basic/Ul'
import ContentWrapper                     from '../../shared/Layout/ContentWrapper'
import {headerMenuAuthStyleListItemStyle} from '../../shared/Menus/styles'
import {
    adminDashboardStyle,
    adminMenuStyle
}                                         from './styles'

const AdminDashboard = () => {
    const {name, email, isAuthenticated} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <ContentWrapper>
            <Div theme={adminDashboardStyle}>
                <H3 theme={adminDashboardStyle.heading}>Hey, {name} | {isAuthenticated && (
                    <Span
                        to="/signout"
                        theme={headerMenuAuthStyleListItemStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                )}</H3>
                <Ul>
                    <Li>{email}</Li>
                    <Li theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/posts">
                            Manage Posts
                        </LinkSwitch>
                    </Li>
                    <Li theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/shop">
                            Manage Products
                        </LinkSwitch>
                    </Li>
                    <Li theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/orders">
                            Manage Orders
                        </LinkSwitch>
                    </Li>
                    <Li theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/taxonomy">
                            Manage Taxonomy
                        </LinkSwitch>
                    </Li>
                </Ul>
            </Div>
        </ContentWrapper>

    )
}

export default AdminDashboard