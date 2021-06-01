import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageSexualOrientation = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage SexualOrientation Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage SexualOrientation</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageSexualOrientation
