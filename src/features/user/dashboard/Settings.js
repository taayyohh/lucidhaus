import {userFieldTypes}    from 'config/fields/user'
import React               from 'react'
import {useSelector}       from 'react-redux'
import GenericFormik       from 'shared/Forms/GenericFormik'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardWrapper    from 'shared/Layout/DashboardWrapper'
import {userDashboardMenu} from 'shared/Menus'

const Settings = () => {
    const {name, token, _id} = useSelector(state => state.user)
    const initialValues = {name: name, token: token, _id: _id}
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
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