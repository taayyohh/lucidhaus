import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import {userContentWrapperStyle}      from '../../../user/admin/views/styles'
import {eventFields, validateEvent}   from '../fields'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {event} = useSelector(state => state.event)
    const {name, flyer, description, dateOfEvent, rsvps, isPublished} = event
    const {eventsIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        flyer: flyer,
        flyerFile: '',
        description: description,
        dateOfEvent: dateOfEvent?.split('T')[0],
        rsvps: rsvps,
        isPublished: isPublished,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'event/getEvent',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={eventFields}
                    validationSchema={validateEvent}
                    dispatchAction={'event/updateEvent'}
                    formHeading={'Update Event'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyEvent'}
                    destroyAction={'admin/destroyEvent'}
                    slug={slug}
                    objectID={event.objectID}
                    index={eventsIndex}
                    type={'event'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
