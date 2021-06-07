import {languageSpokenField, validateLanguageSpoken} from 'features/place/admin/taxonomy/languageSpoken/fields'
import React                                         from 'react'
import {useSelector}                                 from 'react-redux'
import Form                                          from 'shared/Fields/Form'

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
            fields={languageSpokenField}
            validationSchema={validateLanguageSpoken}
            dispatchAction={'place/createLanguageSpoken'}
            formHeading={'Create Language Spoken'}
            buttonText={'Create'}
        />
    )
}

export default Create
