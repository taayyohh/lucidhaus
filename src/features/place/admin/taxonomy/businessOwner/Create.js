import {businessOwnerField, validateBusinessOwner} from 'features/place/admin/taxonomy/businessOwner/fields'
import React                                       from 'react'
import {useSelector}                                from 'react-redux'
import Form                                         from 'shared/Fields/Form'

const CreateBusinessOwner = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        avatar: '',
        description: '',
        email: '',
        name: '',
        tel: ''
    }

    return (
        <Form
            initialValues={initialValues}
            fields={businessOwnerField}
            validationSchema={validateBusinessOwner}
            dispatchAction={'place/createBusinessOwner'}
            formHeading={'Create Business Owner'}
            buttonText={'Create'}
        />
    )
}

export default CreateBusinessOwner
