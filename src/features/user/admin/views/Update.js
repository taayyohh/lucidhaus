import AdminDashboardWrapper          from 'features/admin/views/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'features/admin/views/styles'
import {userFields}                   from 'features/user/admin/fields'
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
    const {user} = useSelector(state => state.admin)
    const {usersIndex} = useContext(searchContext)
    const {nameFirst, role, tel} = user

    const initialValues = {
        nameFirst: nameFirst,
        photoFile: '',
        tel: tel,
        role: role,
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
                    fields={userFields}
                    // validationSchema={validateUser}
                    dispatchAction={'admin/updateUser'}
                    formHeading={'Update User'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyUser'}
                    destroyAction={'admin/destroyUser'}
                    slug={slug}
                    objectID={user?.objectID}
                    index={usersIndex}
                    type={'user'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
