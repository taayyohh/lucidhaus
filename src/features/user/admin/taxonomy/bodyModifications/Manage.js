import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageBodyModifications = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Body Modifications Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Body Modifications</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageBodyModifications
