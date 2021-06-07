import {bodyModificationField, validateBodyModification} from 'features/user/admin/taxonomy/bodyModification/fields'
import React                                             from 'react'
import {useSelector}                                     from 'react-redux'
import Form                                              from 'shared/Fields/Form'

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
            fields={bodyModificationField}
            validationSchema={validateBodyModification}
            dispatchAction={'user/createBodyModification'}
            formHeading={'Create Body Modification'}
            buttonText={'Create'}
        />
    )
}

export default Create
