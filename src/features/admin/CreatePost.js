import {postFieldTypes} from 'config/fieldTypes/post'
import React            from 'react'
import {useSelector}    from 'react-redux'
import AdminControls    from 'shared/Admin/AdminControls'
import GenericFormik    from 'shared/Forms/GenericFormik'
import AdminWrapper     from 'shared/Layout/AdminWrapper'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
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
            <AdminWrapper>
                {/*//TODO:improve*/}
                <AdminControls
                    title={'Post'}
                    create={'/create/post'}
                />
                <GenericFormik
                    initialValues={initialValues}
                    fields={postFieldTypes}
                    //   validationSchema={validateSignin}
                    dispatchAction={'admin/createPost'}
                    formHeading={'Create Post'}
                    buttonText={'Create'}
                    theme={postFormStyle}
                />
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default CreatePost