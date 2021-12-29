import {
    postFields,
    validatePost
}                            from 'config/fields/post'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import Form           from 'shared/Fields/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const Create = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {artists} = useSelector(state => state.artist)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        primaryArtist: '',
        photo: '',
        photoFile: '',
        video: '',
        isPublished: false
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

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={postFields}
                    validationSchema={validatePost}
                    dispatchAction={'admin/createPost'}
                    options={options}
                    formHeading={'Create Post'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create