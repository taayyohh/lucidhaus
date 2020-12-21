import React                from 'react'
import DashboardWrapper     from 'shared/Layout/DashboardWrapper'
import {adminDashboardMenu} from 'shared/Menus'

const AdminWrapper = ({children}) =>
    <DashboardWrapper menu={adminDashboardMenu}>
        {children}
    </DashboardWrapper>

export default AdminWrapper