import React, {useContext} from 'react'
import MotionDiv from '../Basic/MotionDiv'
import {TransitionAnimations} from '../Containers/TransitionController'

const TransitionOverlay = () => {
    const {overlayAnimation} = useContext(TransitionAnimations)

    return (
        <MotionDiv
            theme={{
                backgroundColor: '#afe',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                height: 0,
                zIndex: 12,
                display: 'static'
            }}
            initial={{height: '100vh', opacity: 1}}
            animate={overlayAnimation}
        />
    )
}

export default TransitionOverlay