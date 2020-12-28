import {adminDashboardMenu} from 'config/menus'
import React                from 'react'
import DashboardWrapper     from 'shared/Layout/Dashboard/DashboardWrapper'

const AdminDashboardWrapper = ({children, title, description}) =>
    <DashboardWrapper
        menu={adminDashboardMenu}
        title={title}
        description={description}
    >
        {children}
    </DashboardWrapper>

export default AdminDashboardWrapper