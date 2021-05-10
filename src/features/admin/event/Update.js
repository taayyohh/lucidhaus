import {
    eventFields,
    validateEvent
}                              from 'config/fields/event'
import AdminDashboardWrapper   from 'features/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle} from 'features/admin/styles'
import React, {
    useContext,
    useEffect
}                              from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import {searchContext}         from 'shared/Containers/SearchController'
import DangerZone              from 'shared/Controls/DangerZone'
import Form                    from 'shared/Fields/Form'
import ContentWrapper          from 'shared/Layout/ContentWrapper'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {event} = useSelector(state => state.event)
    const {name, flyer, description, rsvps, isPublished} = event
    const {eventsIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        flyer: flyer,
        flyerFile: '',
        description: description,
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
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={eventFields}
                    validationSchema={validateEvent}
                    dispatchAction={'admin/updateEvent'}
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
