import {AnimatePresence}          from 'framer-motion'
import React, {useEffect}         from 'react'
import {
    useDispatch,
    useSelector
}                                 from 'react-redux'
import {notificationWrapperStyle} from '../../themes/elements'
import {
    emptyPromise,
    timeoutAsync
}                                 from '../../utils/helpers'
import MotionDiv                  from '../Basic/MotionDiv'

const Notifications = () => {
    const dispatch = useDispatch()
    const {notification} = useSelector(state => state.site)

    const clearNotification = async () => {
        await timeoutAsync(3000)
        await emptyPromise(dispatch({type: 'site/clearNotification'}))
    }

    useEffect(() => {
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
                            type: "spring",
                             bounce: 0.25,
                            duration: 0.2
                        }
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            type: "spring",
                             bounce: 0.25,
                            duration: 0.2
                        }
                    }}
                    theme={notificationWrapperStyle}
                >
                    {notification}
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

export default Notifications