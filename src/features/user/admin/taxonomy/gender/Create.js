import {genderField, validateGender} from 'features/user/admin/taxonomy/gender/fields'
import React                         from 'react'
import {useSelector}                 from 'react-redux'
import Form                          from 'shared/Fields/Form'

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
            fields={genderField}
            validationSchema={validateGender}
            dispatchAction={'user/createGender'}
            formHeading={'Create Gender'}
            buttonText={'Create'}
        />
    )
}

export default Create
