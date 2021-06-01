import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageBusinessOwner = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Business Owner Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Business Owner</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageBusinessOwner
