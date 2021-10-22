import {physicalAppearanceField, validatePhysicalAppearance} from 'features/user/admin/taxonomy/physicalAppearance/fields'
import React, {useEffect}                                    from 'react'
import {useDispatch, useSelector}                            from 'react-redux'
import DangerZone                                            from 'shared/Controls/DangerZone'
import Form                                                  from 'shared/Fields/Form'
import ContentWrapper                                        from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                                 from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}                               from 'shared/Layout/Dashboard/admin/styles'
import {adminContentWrapperStyle}                            from 'shared/Layout/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {physicalAppearance} = useSelector(state => state.user.taxonomy)
    const {name, description, type} = physicalAppearance

    const initialValues = {
        name: name,
        description: description,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'user/getPhysicalAppearance',
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
                    fields={physicalAppearanceField}
                    validationSchema={validatePhysicalAppearance}
                    dispatchAction={'user/updatePhysicalAppearance'}
                    formHeading={'Update Physical Appearance'}
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
