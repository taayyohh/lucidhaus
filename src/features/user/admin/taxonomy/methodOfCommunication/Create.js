import {
    methodOfCommunicationField,
    validateMethodOfCommunication
}            from 'features/user/admin/taxonomy/methodOfCommunication/fields'
import React from 'react'
import {useSelector} from 'react-redux'
import Form          from 'shared/Fields/Form'

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
            fields={methodOfCommunicationField}
            validationSchema={validateMethodOfCommunication}
            dispatchAction={'user/createMethodOfCommunication'}
            formHeading={'Create Method of Communication'}
            buttonText={'Create'}
        />
    )
}

export default Create
