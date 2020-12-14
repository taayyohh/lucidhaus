import {AnimatePresence}          from 'framer-motion'
import React, {useEffect}         from 'react'
import {
    useDispatch,
    useSelector
}                                 from 'react-redux'
import {
    emptyPromise,
    timeoutAsync
}                                 from 'utils/helpers'
import MotionDiv                  from 'shared/Basic/MotionDiv'
import {notificationWrapperStyle} from './styles'

const Notifications = () => {
    const dispatch = useDispatch()
    const {notification, notificationTheme} = useSelector(state => state.site)

    //TODO: can improve
    const clearNotification = async () => {
        await timeoutAsync(3000)
        await emptyPromise(dispatch({type: 'site/clearNotification'}))
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
                    initial={{height: 0, opacity: 0}}
                    animate={{
                        height: 40,
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

export default Notifications