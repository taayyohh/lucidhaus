import {adminDashboardMenu} from 'config/menus/dashboard/admin'
import React                from 'react'
import {useSelector}        from 'react-redux'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import DashboardInfo        from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper     from 'shared/Layout/Dashboard/DashboardWrapper'

const AdminDashboard = () => {
    const {nameFirst, tel} = useSelector(state => state.user)
    // const {coords} = useContext(mapContext)
    // /geocoding/v5/{endpoint}/{longitude},{latitude}.json

    return (
        <ContentWrapper>
            <DashboardWrapper menu={adminDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${nameFirst}`}
                    description={`${tel}`}
                />

            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default AdminDashboard
