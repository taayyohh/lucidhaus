import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'
import LinkSwitch            from '../../../../../shared/Basic/LinkSwitch'
import Create                from './Create'

const ManageAdaptiveEquipment = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Adaptive Equipment Taxonomy'}
                    description={'Click to edit.'}
                />
                <LinkSwitch url={'/admin/users/taxonomy'} children={'Taxonomy'}/>

                <Div>Manage Adaptive Equipment</Div>
                <Create/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageAdaptiveEquipment
