import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageGender = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Gender Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Gender</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageGender
