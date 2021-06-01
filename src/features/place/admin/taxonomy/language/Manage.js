import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'

const ManageLanguagesSpoken = () => {
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Languages Spoken Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div>Manage Languages Spoken Categories</Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageLanguagesSpoken
