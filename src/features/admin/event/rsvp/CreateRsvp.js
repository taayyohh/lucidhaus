import {rsvpFields, validateRsvp} from 'config/fields/rsvp'
import React                      from 'react'
import {useSelector}              from 'react-redux'
import Form                       from 'shared/Fields/Form'
import {rsvpsFormStyle}           from 'shared/Fields/styles'

const CreateRsvp = () => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {event} = useSelector(state => state.event)
    const initialValues = {
        _id,
        token,
        slug,
        name: '',
        email: ''
    }

    return (
        <Form
            initialValues={initialValues}
            fields={rsvpFields}
            validationSchema={validateRsvp}
            dispatchAction={'admin/addRsvpToEvent'}
            formHeading={`${60 - event.attendees?.length} RSVPs left`}
            theme={rsvpsFormStyle}
            buttonText={'I wanna come'}
        />
    )
}

export default CreateRsvp
