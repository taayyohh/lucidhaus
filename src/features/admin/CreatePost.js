import {postFields}          from 'config/fields/post'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import React                 from 'react'
import {useSelector}  from 'react-redux'
import Form           from 'shared/Forms/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const CreatePost = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        name: '',
        description: '',
        photo: '',
        image: '',
        token: token,
        isPublished: false,
        _id: _id
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={postFields}
                    //validationSchema={validateSignin}
                    dispatchAction={'admin/createPost'}
                    formHeading={'Create Post'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreatePost