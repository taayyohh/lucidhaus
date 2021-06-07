import {languageField, validateLanguage} from 'features/user/admin/taxonomy/language/fields'
import React                             from 'react'
import {useSelector}                     from 'react-redux'
import Form                              from 'shared/Fields/Form'

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
            fields={languageField}
            validationSchema={validateLanguage}
            dispatchAction={'user/createLanguage'}
            formHeading={'Create Language'}
            buttonText={'Create'}
        />
    )
}

export default Create
