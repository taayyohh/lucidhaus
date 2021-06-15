import {userDashboardMenu} from 'config/menus/dashboard/user'
import React               from 'react'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Reviews = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Reviews'}
                    description={"Here are the reviews you've left."}
                />
                The Reviews you've left of businesses
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Reviews
