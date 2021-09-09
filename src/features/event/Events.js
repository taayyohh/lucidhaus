import {eventCardStyle}           from 'features/event/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import GenericCard                from 'shared/Cards/GenericCard'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import {eventsWrapperStyle}       from './styles'

const Events = () => {
    const {events} = useSelector(state => state.event)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'event/getEvents'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Events',
                description: 'The events description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [events])

    return (
        <ContentWrapper>
            <Div theme={eventsWrapperStyle}>
                {events && events.slice(0).reverse().map(
                    event => event.isPublished && (
                        <GenericCard
                            key={event.slug}
                            slug={`events/${event.slug}`}
                            photo={event.flyer}
                            theme={eventCardStyle}
                        />
                    )
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Events
