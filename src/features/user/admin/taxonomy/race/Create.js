import {raceField, validateRace} from 'features/user/admin/taxonomy/race/fields'
import React                     from 'react'
import {useSelector}             from 'react-redux'
import Form                      from 'shared/Fields/Form'

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
            fields={raceField}
            validationSchema={validateRace}
            dispatchAction={'user/createRace'}
            formHeading={'Create Race Type'}
            buttonText={'Create'}
        />
    )
}

export default Create
