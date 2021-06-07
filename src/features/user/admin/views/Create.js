import AdminDashboardWrapper   from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import {userField}                    from 'features/user/admin/fields'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'

const roleSwitch = ({role}) => {
    switch (role) {
        case 0:
            return 'Super Admin'
        case 1:
            return 'Admin'
        case 2:
            return 'User'
        case 3:
            return 'Business'
    }
}

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {user} = useSelector(state => state.site)
    const {usersIndex} = useContext(searchContext)
    const {description, avatar, email, ethnicHispanicOrigin, nameMiddle, nameFirst, nameLast, tel, role, type} = user

    const initialValues = {
        nameFirst: '',
        nameMiddle: '',
        nameLast: '',
        description: '',
        avatar: '',
        avatarFile: '',
        email: '',
        handle: '',
        tel: '',
        ethnicHispanicOrigin: false,
        role: '',
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'user/getUser',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={userField}
                    // validationSchema={validateUser}
                    dispatchAction={'user/createUser'}
                    formHeading={'Update User'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    objectID={user?.objectID}
                    index={usersIndex}
                    type={type}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
