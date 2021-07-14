import {userDashboardMenu} from 'config/menus/dashboard/user'
import {userFields}        from 'features/user/admin/fields'
import React, {useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Form                       from 'shared/Fields/Form'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import Identity                   from './Indentity'
import {userProfileFormStyle}     from './styles'

const Profile = () => {
    const dispatch = useDispatch()
    const {slug, _id, token, user} = useSelector(state => state.user)
    const {description, avatar, email, ethnicHispanicOrigin, handle, nameMiddle, nameFirst, nameLast, tel, role} = user

    const initialValues = {
        nameFirst: nameFirst,
        nameMiddle: nameMiddle,
        nameLast: nameLast,
        description: description,
        avatar: avatar,
        avatarFile: '',
        email: email,
        handle: handle,
        tel: tel,
        ethnicHispanicOrigin: ethnicHispanicOrigin,
        role: role,
        slug: slug,
        _id,
        token,
    }

    useEffect(() => {
        if (!!slug)
            dispatch({
                type: 'user/getUser',
                payload: {
                    slug: slug,
                    _id: _id,
                    token: token
                }
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <Form
                    initialValues={initialValues}
                    fields={userFields}
                    //validationSchema={validateProfile}
                    dispatchAction={'user/updateUserProfile'}
                    formHeading={'Update Profile'}
                    buttonText={'Update'}
                    enableReinitialize={true}
                    theme={userProfileFormStyle}
                />
                {slug && user?._id?.length > 0 && (
                    <Identity slug={slug}/>
                )}
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Profile
