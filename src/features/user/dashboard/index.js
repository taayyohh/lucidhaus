import {userDashboardMenu} from 'config/menus/userDashboard'
import React               from 'react'
import {useSelector}       from 'react-redux'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
import DashboardInfo    from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper from 'shared/Layout/Dashboard/DashboardWrapper'

const UserDashboard = () => {
    const {name, email} = useSelector(state => state.user)

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${name}`}
                    description={`${email}`}
                />
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard