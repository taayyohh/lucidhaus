import {userDashboardMenu} from 'config/menus/dashboard/user'
import {userField}         from 'features/user/admin/fields'
import React               from 'react'
import {useSelector}       from 'react-redux'
import Form                from 'shared/Fields/Form'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Settings = () => {
    const {slug, _id, token, description, avatar, email, ethnicHispanicOrigin, handle, nameMiddle, nameFirst, nameLast, tel, role} = useSelector(state => state.user)

    const initialValues = {
        nameFirst: nameFirst,
        nameMiddle: nameMiddle,
        nameLast: nameLast,
        description: description,
        avatar: avatar,
        avatarFile: '',
        email: email,
        handle:  handle,
        tel: tel,
        ethnicHispanicOrigin: ethnicHispanicOrigin,
        role: role,
        slug: slug,
        _id,
        token,
    }

    console.log('slug', slug)


    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Manage Settings'}
                    description={'Control your settings here.'}
                />
                <Form
                    initialValues={initialValues}
                    fields={userField}
                    //validationSchema={validateProfile}
                    dispatchAction={'user/updateUser'}
                    formHeading={'Update Profile'}
                    buttonText={'Update'}
                    enableReinitialize={true}
                />
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Settings
