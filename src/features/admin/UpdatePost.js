import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import GenericFormik        from '../../shared/Forms/GenericFormik'
import ContentWrapper       from '../../shared/Layout/ContentWrapper'
import {postFieldTypes} from '../../config/fieldTypes'

const UpdatePost = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {post} = useSelector(state => state.post)
    const initialValues = {
        name: post.name,
        description: post.description,
        photo: post.photo,
        image: '',
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
            <GenericFormik
                initialValues={initialValues}
                fields={postFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'admin/updatePost'}
                formHeading={'Update Post'}
                buttonText={'Update'}
                theme={{width: 1100}}
                enableReinitialize={true}
            />
        </ContentWrapper>
    )
}

export default UpdatePost