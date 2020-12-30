import {userFieldTypes}    from 'config/fields/user'
import {userDashboardMenu} from 'config/menus/userDashboard'
import React               from 'react'
import {useSelector}       from 'react-redux'
import GenericFormik       from 'shared/Forms/GenericFormik'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Settings = () => {
    const {name, token, _id} = useSelector(state => state.user)
    const initialValues = {name: name, token: token, _id: _id}
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Manage Settings'}
                    description={'Control your settings here.'}
                />
                <GenericFormik
                    initialValues={initialValues}
                    fields={userFieldTypes}
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