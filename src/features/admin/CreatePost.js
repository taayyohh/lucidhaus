import {postFieldTypes} from 'config/fields/post'
import React            from 'react'
import {useSelector}    from 'react-redux'
import GenericFormik         from 'shared/Forms/GenericFormik'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import {postFormStyle}  from '../post/styles'

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
                <GenericFormik
                    initialValues={initialValues}
                    fields={postFieldTypes}
                    //   validationSchema={validateSignin}
                    dispatchAction={'admin/createPost'}
                    formHeading={'Create Post'}
                    buttonText={'Create'}
                    theme={postFormStyle}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreatePost