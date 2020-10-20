import React      from 'react'
import Div        from '../Basic/Div'
import H2         from '../Basic/H2'
import Li         from '../Basic/Li'
import Ul         from '../Basic/Ul'
import LinkSwitch from '../Basic/LinkSwitch'
import {
    adminMenuStyle,
    menuPanelHeaderStyle
}                 from '../../themes/admin'

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
                <LinkSwitch theme={adminMenuStyle.link} url="/admin/marketplace">
                    Manage Businesses
                </LinkSwitch>
            </Li>
            <Li theme={adminMenuStyle.listItem}>
                <LinkSwitch theme={adminMenuStyle.link} url="/admin/products">
                    Manage Products
                </LinkSwitch>
            </Li>
            <Li theme={adminMenuStyle.listItem}>
                <LinkSwitch theme={adminMenuStyle.link} url="/admin/orders">
                    Manage Orders
                </LinkSwitch>
            </Li>
        </Ul>
    </Div>

export default AdminMenu