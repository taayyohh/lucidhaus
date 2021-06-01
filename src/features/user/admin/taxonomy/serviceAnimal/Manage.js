import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageServiceAnimal = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage ServiceAnimal Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage ServiceAnimal</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageServiceAnimal
