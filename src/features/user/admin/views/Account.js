import {userDashboardMenu}                             from 'config/menus/dashboard/user'
import {userFields, validateUser}                      from 'features/user/admin/fields'
import React, {useEffect}                              from 'react'
import {useDispatch, useSelector}                      from 'react-redux'
import Form                                            from 'shared/Fields/Form'
import ContentWrapper                                  from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                from 'shared/Layout/Dashboard/DashboardWrapper'
import CloseAccount                                    from './CloseAccount'
import ResetContactInfo                                from './ResetContactInfo'
import ResetPassword                                   from './ResetPassword'
import {userContentWrapperStyle, userProfileFormStyle} from './styles'

const Account = () => {
    const dispatch = useDispatch()
    const {slug, _id, token, user} = useSelector(state => state.user)

    const initialValues = {
        nameFirst: user.nameFirst,
        nameMiddle: user.nameMiddle,
        nameLast: user.nameLast,
        description: user.description,
        avatar: user.avatar,
        avatarFile: '',
        email: user.email,
        dateOfBirth: user.dateOfBirth?.split('T')[0],
        handle: user.handle,
        tel: user.tel,
        ethnicHispanicOrigin: user.ethnicHispanicOrigin,
        role: user.role,
        slug: slug,
        zip: user.zip,

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
    }, [slug])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <DashboardWrapper menu={userDashboardMenu}>
                <Form
                    initialValues={initialValues}
                    fields={userFields}
                    validationSchema={validateUser}
                    dispatchAction={'user/updateUserProfile'}
                    formHeading={'Account Details'}
                    buttonText={'Update'}
                    enableReinitialize={true}
                    theme={userProfileFormStyle}
                >
                    <ResetPassword/>
                    <ResetContactInfo/>
                    <CloseAccount/>
                </Form>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Account
