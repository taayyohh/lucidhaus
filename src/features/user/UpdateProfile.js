import React            from 'react'
import {useSelector}    from 'react-redux'
import GenericFormik    from '../../shared/Forms/GenericFormik'
import ContentWrapper   from '../../shared/Layout/ContentWrapper'
import {userFieldTypes} from '../../variables/fieldTypes'

const UpdateProfile = () => {
    const {name, token, _id} = useSelector(state => state.user)
    const initialValues = {name: name, token: token, _id: _id}

    return (
        //TODO: email verification and password reset
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={userFieldTypes}
                //validationSchema={validateProfile}
                dispatchAction={'user/updateProfile'}
                formHeading={'Update Profile'}
                buttonText={'Update'}
            />
        </ContentWrapper>
    )
}

export default UpdateProfile