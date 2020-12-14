import {postFieldTypes}        from 'config/fieldTypes/post'
import React, {useEffect}      from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import AdminControls           from 'shared/Admin/AdminControls'
import GenericFormik           from 'shared/Forms/GenericFormik'
import AdminWrapper            from 'shared/Layout/AdminWrapper'
import ContentWrapper          from 'shared/Layout/ContentWrapper'
import {adminFormWrapperStyle} from './styles'

const UpdatePost = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {post} = useSelector(state => state.post)
    const {name, description, photo, isPublished} = post

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
            <AdminWrapper>
                {/*//TODO:improve*/}
                <AdminControls
                    data={post}
                    title={'Post'}
                    create={'/create/post'}
                    publish={postFieldTypes.filter(field => field.name === 'isPublished')}
                />
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
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default UpdatePost