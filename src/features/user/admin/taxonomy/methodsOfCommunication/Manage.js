import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageMethodsOfCommunication = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Methods of Communication Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Methods of Communication</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageMethodsOfCommunication
