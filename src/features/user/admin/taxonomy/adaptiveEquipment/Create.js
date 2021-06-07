import {adaptiveEquipmentField, validateAdaptiveEquipment} from 'features/user/admin/taxonomy/adaptiveEquipment/fields'
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
            fields={adaptiveEquipmentField}
            validationSchema={validateAdaptiveEquipment}
            dispatchAction={'user/createAdaptiveEquipment'}
            formHeading={'Create Adaptive Equipment'}
            buttonText={'Create'}
        />
    )
}

export default Create
