import React, {useContext}      from 'react'
import MotionDiv                from 'shared/Basic/MotionDiv'
import {TransitionAnimations}   from 'shared/Containers/TransitionController'
import {transitionOverlayStyle} from './styles'

const TransitionOverlay = ({theme}) => {
    const {overlayAnimation} = useContext(TransitionAnimations)

    return (
        <MotionDiv
            theme={{...transitionOverlayStyle, ...theme}}
            initial={{height: '100vh', opacity: 1}}
            animate={overlayAnimation}
        />
    )
}

TransitionOverlay.defaultProps = {
    theme: {}
}

export default TransitionOverlay