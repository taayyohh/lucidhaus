import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageAdaptiveEquipment = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Adaptive Equipment Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Adaptive Equipment</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageAdaptiveEquipment
