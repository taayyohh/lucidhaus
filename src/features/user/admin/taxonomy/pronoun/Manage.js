import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManagePronoun = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Pronoun Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Pronoun</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePronoun
