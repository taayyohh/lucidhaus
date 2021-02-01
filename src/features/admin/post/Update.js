import {
    postFields,
    validatePost
}                              from 'config/fields/post'
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
    const {post} = useSelector(state => state.post)
    const {name, description, primaryArtist, photo, isPublished} = post
    const {artists} = useSelector(state => state.artist)
    const {postsIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        photoFile: '',
        isPublished: isPublished,
        primaryArtist: primaryArtist,
        slug,
        _id,
        token,
    }

    const options = [
        {
            name: 'primaryArtist',
            options: artists
        },
    ]

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        dispatch({
            type: 'post/getPost',
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
                    fields={postFields}
                    validationSchema={validatePost}
                    options={options}
                    dispatchAction={'admin/updatePost'}
                    formHeading={'Update Post'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyPost'}
                    destroyAction={'admin/destroyPost'}
                    slug={slug}
                    objectID={post.objectID}
                    index={postsIndex}
                    type={'post'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update