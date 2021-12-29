import React                        from 'react'
import {useSelector}                from 'react-redux'
import Form                         from 'shared/Fields/Form'
import ContentWrapper               from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper        from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {eventFields, validateEvent} from '../fields'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        flyer: '',
        flyerFile: '',
        description: '',
        dateOfEvent: '',
        rsvps: [],
        isPublished: false
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={eventFields}
                    validationSchema={validateEvent}
                    dispatchAction={'event/createEvent'}
                    formHeading={'Create Event'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
