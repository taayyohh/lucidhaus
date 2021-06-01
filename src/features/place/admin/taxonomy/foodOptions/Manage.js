import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageFoodOptions = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Food Options Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Food Options Categories</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageFoodOptions
