import {userDashboardMenu} from 'config/menus/dashboard/user'
import React               from 'react'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Places = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Saved Places'}
                    description={"Here are the places you've saved."}
                />
                My Places
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Places
