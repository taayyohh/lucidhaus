import React               from 'react'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardWrapper    from 'shared/Layout/DashboardWrapper'
import {userDashboardMenu} from 'shared/Menus'
import PurchaseHistory     from 'features/user/PurchaseHistory'

const Orders = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Orders