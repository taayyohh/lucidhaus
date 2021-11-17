import {AnimatePresence}          from 'framer-motion'
import React, {useEffect}         from 'react'
import {
    useDispatch,
    useSelector
}                                 from 'react-redux'
import {
    resolvedPromise,
    timeoutAsync
}                                 from 'utils/helpers'
import MotionDiv                  from 'shared/Basic/MotionDiv'
import {notificationWrapperStyle} from './styles'

const Notification = () => {
    const dispatch = useDispatch()
    const {notification, notificationTheme, notificationDelay} = useSelector(state => state.site)

    //TODO: can improve
    const clearNotification = async () => {
        await timeoutAsync(notificationDelay ? notificationDelay : 3000)
        await resolvedPromise(dispatch({type: 'site/clearNotification'}))
        await clearTimeout(timeoutAsync)
    }

    useEffect(() => {
        if(notification)
            clearNotification()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notification])

    return (
        <AnimatePresence>
            {notification && (
                <MotionDiv
                    key={'notification'}
                    initial={{
                        y: 20,
                        x: -480,
                        height: 150,
                        opacity: 0
                    }}
                    animate={{
                        height: 150,
                        y: 20,
                        x: 20,
                        opacity: 1,
                        transition: {
                            duration: 0.25,
                            ease: 'easeOut'
                        }
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            duration: 0.15,
                            ease: 'easeOut'
                        }
                    }}
                    theme={notificationWrapperStyle(notificationTheme)}
                >
                    {notification}
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

export default Notification
