import {placeCategoryField, validatePlaceCategory} from 'features/place/admin/taxonomy/placeCategory/fields'
import React                                       from 'react'
import {useSelector}                                from 'react-redux'
import Form                                         from 'shared/Fields/Form'

const CreatePlaceCategory = () => {
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
            fields={placeCategoryField}
            validationSchema={validatePlaceCategory}
            dispatchAction={'place/createPlaceCategory'}
            formHeading={'Create Place Category'}
            buttonText={'Create'}
        />
    )
}

export default CreatePlaceCategory
