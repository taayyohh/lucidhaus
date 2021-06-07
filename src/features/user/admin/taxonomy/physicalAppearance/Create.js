import {physicalAppearanceField, validatePhysicalAppearance} from 'features/user/admin/taxonomy/physicalAppearance/fields'
import React                                                 from 'react'
import {useSelector}                                         from 'react-redux'
import Form                                                  from 'shared/Fields/Form'

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
            fields={physicalAppearanceField}
            validationSchema={validatePhysicalAppearance}
            dispatchAction={'user/createPhysicalAppearance'}
            formHeading={'Create Physical Appearance'}
            buttonText={'Create'}
        />
    )
}

export default Create
