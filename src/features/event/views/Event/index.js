import CreateRsvp                                                         from 'features/event/admin/views/CreateRsvp'
import {eventContentWrapperStyle, eventImageWrapperStyle, eventInfoStyle} from 'features/event/views/styles'
import {AnimatePresence}                                                  from 'framer-motion'
import React, {useEffect}                                                 from 'react'
import {useDispatch, useSelector}                                         from 'react-redux'
import Div                                                                from 'shared/Basic/Div'
import MotionDiv                                                          from 'shared/Basic/MotionDiv'
import RichText                                                           from 'shared/Basic/RichText'
import S3Img                                                              from 'shared/Basic/S3Img'
import {genericCardImageStyle}                                            from 'shared/Cards/styles'
import ContentWrapper                                                     from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}                                        from 'shared/Layout/styles/animations'
import {eventWrapperStyle}                                                from '../styles'

const Event = () => {
    const dispatch = useDispatch()
    const {event} = useSelector(state => state.event)
    const {slug} = useSelector(state => state.site)
    const {name, flyer, description, dateOfEvent, attendees} = event
    const maxAttendees = 150

    useEffect(() => {
        dispatch({type: 'event/getEvent', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: name,
                image: flyer,
                imageAlt: `${name} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event])

    const party = new Date(dateOfEvent);
    const now = Date.now();

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper theme={eventContentWrapperStyle}>
                    <MotionDiv theme={eventWrapperStyle}>
                        <Div theme={eventImageWrapperStyle}>
                            <S3Img
                                url={flyer}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
                            {description && (
                                <RichText>
                                    {description}
                                </RichText>
                            )}
                        </Div>
                        <Div theme={eventInfoStyle}>
                            {((party > now) && (
                                <>
                                    {(attendees?.length < maxAttendees && (
                                        <CreateRsvp maxAttendees={maxAttendees}/>
                                    )) || (
                                        <Div theme={{size: [46, .7, 18], maxWidth: 300}}>
                                            The RSVP list is full, but the event is free and open to the public so
                                            please come by!
                                        </Div>
                                    )}
                                </>
                            )) || (
                                <Div theme={{size: [46, .7, 18], maxWidth: 300}}>
                                    {`thankyou for a lovely event <3`}
                                </Div>
                            )}

                        </Div>
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Event
