import PurchaseHistory      from 'features/user/PurchaseHistory'
import React                from 'react'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import DashboardWrapper     from 'shared/Layout/DashboardWrapper'
import {adminDashboardMenu} from 'shared/Menus'

const AdminDashboard = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={adminDashboardMenu}>
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default AdminDashboard