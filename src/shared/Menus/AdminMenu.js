import React            from 'react'
import {adminMenuStyle} from '../../features/admin/styles'
import Div              from '../Basic/Div'
import H2               from '../Basic/H2'
import Li               from '../Basic/Li'
import Ul               from '../Basic/Ul'
import LinkSwitch             from '../Basic/LinkSwitch'
import {menuPanelHeaderStyle} from './styles'

const AdminMenu = () =>
    <Div theme={adminMenuStyle}>
        <H2 theme={menuPanelHeaderStyle}>Admin Menu</H2>
        <Ul theme={adminMenuStyle.list}>
            <Li theme={adminMenuStyle.listItem}>
                <LinkSwitch
                    url="/admin/dashboard"
                    theme={adminMenuStyle.link}>
                    Dashboard
                </LinkSwitch>
            </Li>
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

export default AdminMenu