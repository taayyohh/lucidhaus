import {businessOwnerField, validateBusinessOwner} from 'features/place/admin/taxonomy/businessOwner/fields'
import React, {useEffect}                          from 'react'
import {useDispatch, useSelector}                  from 'react-redux'
import DangerZone                                  from 'shared/Controls/DangerZone'
import Form                                        from 'shared/Fields/Form'
import ContentWrapper                              from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                       from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}                     from 'shared/Layout/Dashboard/admin/styles'
import {adminContentWrapperStyle}                  from 'shared/Layout/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {businessOwner} = useSelector(state => state.place.taxonomy)
    const {name, description, avatar, email, tel, type} = businessOwner

    const initialValues = {
        name: name,
        description: description,
        avatar: avatar,
        avatarFile: '',
        email: email,
        tel: tel,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'place/getBusinessOwner',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={businessOwnerField}
                    validationSchema={validateBusinessOwner}
                    dispatchAction={'place/updateBusinessOwner'}
                    formHeading={'Update Business Owner'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    type={type}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
