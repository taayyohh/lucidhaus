import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManagePlaceCategories = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Place Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Place Categories</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePlaceCategories
