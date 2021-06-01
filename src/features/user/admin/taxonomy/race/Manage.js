import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageRace = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Race Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Race</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageRace
