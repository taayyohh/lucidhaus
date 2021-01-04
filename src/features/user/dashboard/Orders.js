import {userDashboardMenu} from 'config/menus/userDashboard'
import PurchaseHistory     from 'features/user/PurchaseHistory'
import React               from 'react'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
import DashboardInfo    from 'shared/Layout/dashboard/DashboardInfo'
import DashboardWrapper from 'shared/Layout/dashboard/DashboardWrapper'

const Orders = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Orders'}
                    description={'Thanks for the support.'}
                />
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Orders