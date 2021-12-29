import {
    rsvpFields,
    validateRsvp
}                       from 'config/fields/rsvp'
import React            from 'react'
import {
    useDispatch,
    useSelector
}                       from 'react-redux'
import Div              from 'shared/Basic/Div'
import Form             from 'shared/Fields/Form'
import {rsvpsFormStyle} from 'shared/Fields/styles'

const UpdateRsvp = ({name, email}) => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const initialValues = {
        _id,
        token,
        slug,
        name: name,
        email: email
    }


    return (
        <Form
            initialValues={initialValues}
            fields={rsvpFields}
            validationSchema={validateRsvp}
            dispatchAction={'admin/addRsvpToEvent'}
            formHeading={`${name}. ${email}`}
            theme={rsvpsFormStyle}
            buttonText={'Save'}
        >

            <Div
                onClick={
                    () => dispatch({
                        type: 'admin/destroyRsvp',
                        payload: {
                            slug,
                            _id,
                            token,
                            name,
                            email,
                            remove: true
                        }
                    })}
            >
                Delete
            </Div>
        </Form>
    )
}

export default UpdateRsvp
