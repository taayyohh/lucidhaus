import {serviceAnimalField, validateServiceAnimal} from 'features/user/admin/taxonomy/serviceAnimal/fields'
import React                                       from 'react'
import {useSelector}                               from 'react-redux'
import Form                                        from 'shared/Fields/Form'

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
            fields={serviceAnimalField}
            validationSchema={validateServiceAnimal}
            dispatchAction={'user/createServiceAnimal'}
            formHeading={'Create Service Animal'}
            buttonText={'Create'}
        />
    )
}

export default Create
