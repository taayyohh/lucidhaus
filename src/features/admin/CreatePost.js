import React                from 'react'
import {useSelector}        from 'react-redux'
import GenericFormik        from '../../shared/Forms/GenericFormik'
import ContentWrapper       from '../../shared/Layout/ContentWrapper'
import {postFieldTypes} from '../../config/fieldTypes'
import {postFormStyle}  from '../post/styles'

const CreatePost = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        name: '',
        description: '',
        photo: '',
        image: '',
        token: token,
        _id: _id
    }

    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={postFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'admin/createPost'}
                formHeading={'Create Post'}
                buttonText={'Create'}
                theme={postFormStyle}
            />
        </ContentWrapper>
    )
}

export default CreatePost