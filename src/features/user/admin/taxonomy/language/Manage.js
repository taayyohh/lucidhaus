import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageUserLanguages = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Language Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Language</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageUserLanguages
