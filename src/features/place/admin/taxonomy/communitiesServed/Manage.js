import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageCommunitiesServed = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Communities Served Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Communities Served Categories</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageCommunitiesServed
