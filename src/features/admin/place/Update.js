import {
    placeFields,
    validatePlace
}                            from 'config/fields/place'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import React, {
    useContext,
    useEffect
}                              from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import {searchContext}         from 'shared/Containers/SearchController'
import DangerZone     from 'shared/Controls/DangerZone'
import Form           from 'shared/Fields/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'
import {adminFormWrapperStyle} from 'features/admin/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place} = useSelector(state => state.place)
    const {name, description, photo, isPublished} = place
    const {placesIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        photoFile: '',
        isPublished: isPublished,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'place/getPlace',
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
                    fields={placeFields}
                    validationSchema={validatePlace}
                    dispatchAction={'admin/updatePlace'}
                    formHeading={'Update Place'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyPlace'}
                    destroyAction={'admin/destroyPlace'}
                    slug={slug}
                    objectID={place.objectID}
                    index={placesIndex}
                    type={'place'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
