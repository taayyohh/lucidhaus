import {bathroomField, validateBathroom} from 'features/place/admin/taxonomy/bathroom/fields'
import React                             from 'react'
import {useSelector}                      from 'react-redux'
import Form                               from 'shared/Fields/Form'

const CreateBathroom = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: '',
        description: '',
        gender: '',
        multiStall: false,
        toilets: false,
        urinals: false
    }

    return (
        <Form
            initialValues={initialValues}
            fields={bathroomField}
            validationSchema={validateBathroom}
            dispatchAction={'place/createBathroom'}
            formHeading={'Create Bathroom'}
            buttonText={'Create'}
        />
    )
}

export default CreateBathroom
