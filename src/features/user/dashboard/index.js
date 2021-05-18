import {userDashboardMenu} from 'config/menus/dashboardUser'
import React               from 'react'
import {useSelector}       from 'react-redux'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
import DashboardInfo    from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper from 'shared/Layout/Dashboard/DashboardWrapper'

const UserDashboard = () => {
    const {nameFirst, tel} = useSelector(state => state.user)

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${nameFirst}`}
                    description={`${tel}`}
                />
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard
