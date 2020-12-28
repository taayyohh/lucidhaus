import {userDashboardMenu} from 'config/menus'
import PurchaseHistory     from 'features/user/PurchaseHistory'
import React               from 'react'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const UserDashboard = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard