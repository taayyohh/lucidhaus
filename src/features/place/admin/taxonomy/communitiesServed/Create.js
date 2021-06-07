import {communitiesServedField, validateCommunitiesServed} from 'features/place/admin/taxonomy/communitiesServed/fields'
import React                                               from 'react'
import {useSelector}                                        from 'react-redux'
import Form                                                 from 'shared/Fields/Form'

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
            fields={communitiesServedField}
            validationSchema={validateCommunitiesServed}
            dispatchAction={'place/createCommunitiesServed'}
            formHeading={'Create Adaptive Equipment'}
            buttonText={'Create'}
        />
    )
}

export default Create
