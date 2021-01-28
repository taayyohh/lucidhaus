import {
    artistFields,
    validateArtist
}                              from 'config/fields/artist'
import AdminDashboardWrapper   from 'features/admin/AdminDashboardWrapper'
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
    const {artist} = useSelector(state => state.artist)
    const {name, description, photo, isPublished} = artist
    const {artistsIndex} = useContext(searchContext)

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
            type: 'artist/getArtist',
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
                    fields={artistFields}
                    validationSchema={validateArtist}
                    dispatchAction={'admin/updateArtist'}
                    formHeading={'Update Artist'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyArtist'}
                    destroyAction={'admin/destroyArtist'}
                    slug={slug}
                    objectID={artist.objectID}
                    index={artistsIndex}
                    type={'artist'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update