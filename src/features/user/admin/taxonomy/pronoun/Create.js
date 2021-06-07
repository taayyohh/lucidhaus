import {pronounField, validatePronoun} from 'features/user/admin/taxonomy/pronoun/fields'
import React                           from 'react'
import {useSelector}                   from 'react-redux'
import Form                            from 'shared/Fields/Form'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: '',
        description: '',
        subjectiveSingular: '',
        objectiveSingular: '',
        objectivePossessive: ''
    }

    return (
        <Form
            initialValues={initialValues}
            fields={pronounField}
            validationSchema={validatePronoun}
            dispatchAction={'user/createPronoun'}
            formHeading={'Create Pronoun'}
            buttonText={'Create'}
        />
    )
}

export default Create
