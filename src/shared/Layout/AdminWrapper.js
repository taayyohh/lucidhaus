import React                from 'react'
import H2                   from 'shared/Basic/H2'
import DashboardWrapper     from 'shared/Layout/DashboardWrapper'
import {adminDashboardMenu} from 'shared/Menus'

const AdminWrapper = ({children, title}) =>
    <DashboardWrapper menu={adminDashboardMenu}>
        <H2>{title}</H2>
        {children}
    </DashboardWrapper>

export default AdminWrapper