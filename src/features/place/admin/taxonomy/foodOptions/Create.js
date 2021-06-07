import {foodOptionsField, validateFoodOptions} from 'features/place/admin/taxonomy/foodOptions/fields'
import React                                   from 'react'
import {useSelector}                            from 'react-redux'
import Form                                     from 'shared/Fields/Form'

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
            fields={foodOptionsField}
            validationSchema={validateFoodOptions}
            dispatchAction={'place/createFoodOptions'}
            formHeading={'Create Food Options'}
            buttonText={'Create'}
        />
    )
}

export default Create
