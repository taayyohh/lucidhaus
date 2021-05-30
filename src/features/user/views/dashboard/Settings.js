import {userDashboardMenu} from 'config/menus/dashboardUser'
import {userFields}        from 'features/user/admin/fields'
import React               from 'react'
import {useSelector}       from 'react-redux'
import Form                from 'shared/Fields/Form'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Settings = () => {
    const {nameFirst, token, _id} = useSelector(state => state.user)
    const initialValues = {name: nameFirst, token: token, _id: _id}
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Manage Settings'}
                    description={'Control your settings here.'}
                />
                <Form
                    initialValues={initialValues}
                    fields={userFields}
                    //validationSchema={validateProfile}
                    dispatchAction={'user/updateProfile'}
                    formHeading={'Update Profile'}
                    buttonText={'Update'}
                />
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Settings
