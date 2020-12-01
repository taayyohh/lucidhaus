import React                              from 'react'
import {
    useDispatch,
    useSelector
}                                         from 'react-redux'
import Div                                from '../../shared/Basic/Div'
import H3                                 from '../../shared/Basic/H3'
import LinkSwitch                         from '../../shared/Basic/LinkSwitch'
import Span                               from '../../shared/Basic/Span'
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
                <H3 theme={adminDashboardStyle.heading}>Hey, {name}</H3>
                <Div>{email}</Div>
                <Div>
                    {isAuthenticated && (
                        <Span
                            to="/signout"
                            theme={headerMenuAuthStyleListItemStyle}
                            onClick={() => dispatch({type: 'user/signOut'})}
                        >
                            Sign Out
                        </Span>
                    )}
                </Div>
                <Div>
                    <Div theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/posts">
                            Manage Posts
                        </LinkSwitch>
                    </Div>
                    <Div theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/shop">
                            Manage Products
                        </LinkSwitch>
                    </Div>
                    <Div theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/orders">
                            Manage Orders
                        </LinkSwitch>
                    </Div>
                    <Div theme={adminMenuStyle.listItem}>
                        <LinkSwitch theme={adminMenuStyle.link} url="/admin/taxonomy">
                            Manage Taxonomy
                        </LinkSwitch>
                    </Div>
                </Div>
            </Div>
        </ContentWrapper>

    )
}

export default AdminDashboard