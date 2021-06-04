import {adaptiveEquipmentField, validateAdaptiveEquipment} from 'features/user/admin/fields/adaptiveEquipment'
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
        <>
            <Form
                initialValues={initialValues}
                fields={adaptiveEquipmentField}
                validationSchema={validateAdaptiveEquipment}
                dispatchAction={'admin/createAdaptiveEquipment'}
                formHeading={'Create Adaptive Equipment Type'}
                buttonText={'Create'}
            />
        </>
    )
}

export default Create
