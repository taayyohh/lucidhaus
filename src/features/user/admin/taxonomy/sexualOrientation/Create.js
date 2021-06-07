import {sexualOrientationField, validateSexualOrientation} from 'features/user/admin/taxonomy/sexualOrientation/fields'
import React                                               from 'react'
import {useSelector}                                       from 'react-redux'
import Form                                                from 'shared/Fields/Form'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: '',
        description: ''
    }

    return (
        <Form
            initialValues={initialValues}
            fields={sexualOrientationField}
            validationSchema={validateSexualOrientation}
            dispatchAction={'user/createSexualOrientation'}
            formHeading={'Create Sexual Orientation'}
            buttonText={'Create'}
        />
    )
}

export default Create
