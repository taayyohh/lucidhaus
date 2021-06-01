import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageBathrooms = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Bathroom Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Bathroom</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageBathrooms
