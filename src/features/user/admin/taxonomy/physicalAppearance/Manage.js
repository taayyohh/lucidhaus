import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManagePhysicalAppearance = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Physical Appearance Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Physical Appearance</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePhysicalAppearance
