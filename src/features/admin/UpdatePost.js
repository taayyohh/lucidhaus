import {postFieldTypes}        from 'config/fields/post'
import React, {
    useContext,
    useEffect
}                              from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import {searchContext}         from 'shared/Containers/SearchController'
import DangerZone              from 'shared/Controls/DangerZone'
import GenericFormik           from 'shared/Forms/GenericFormik'
import AdminDashboardWrapper   from 'features/admin/AdminDashboardWrapper'
import ContentWrapper          from 'shared/Layout/ContentWrapper'
import {adminFormWrapperStyle} from './styles'

const UpdatePost = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {post} = useSelector(state => state.post)
    const {name, description, photo, isPublished} = post
    const {postsIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        image: '',
        isPublished: isPublished,
        slug,
        _id,
        token,
    }

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
                <GenericFormik
                    initialValues={initialValues}
                    fields={postFieldTypes}
                    //   validationSchema={validateSignin}
                    dispatchAction={'admin/updatePost'}
                    formHeading={'Update Post'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    destroyAction={'admin/attemptDestroyPost'}
                    slug={slug}
                    objectId={post.objectID}
                    index={postsIndex}
                    type={'post'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default UpdatePost