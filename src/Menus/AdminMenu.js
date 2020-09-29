import React from 'react'
import Div from '../Basic/Div'
import Li from '../Basic/Li'
import StyledLink from '../Basic/StyledLink'
import Ul from '../Basic/Ul'
import {adminMenuStyle, menuPanelHeaderStyle} from '../themes/admin'
import H2 from "../Basic/H2";

const AdminMenu = () =>
    <Div theme={adminMenuStyle}>
        <H2 theme={menuPanelHeaderStyle}>Admin Menu</H2>
        <Ul theme={adminMenuStyle.list}>
            <Li theme={adminMenuStyle.listItem}>
                <StyledLink theme={adminMenuStyle.link} to="/admin/businesses">
                    Manage Businesses
                </StyledLink>
            </Li>
            <Li theme={adminMenuStyle.listItem}>
                <StyledLink theme={adminMenuStyle.link} to="/admin/products">
                    Manage Products
                </StyledLink>
            </Li>
            <Li theme={adminMenuStyle.listItem}>
                <StyledLink theme={adminMenuStyle.link} to="/admin/orders">
                    Manage Orders
                </StyledLink>
            </Li>
        </Ul>
    </Div>

export default AdminMenu