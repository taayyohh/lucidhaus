import {
    postFields,
    validatePost
}                            from 'config/fields/post'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import React                 from 'react'
import {useSelector}  from 'react-redux'
import Form           from 'shared/Fields/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        photoFile: '',
        isPublished: false
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={postFields}
                    validationSchema={validatePost}
                    dispatchAction={'admin/createPost'}
                    formHeading={'Create Post'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create