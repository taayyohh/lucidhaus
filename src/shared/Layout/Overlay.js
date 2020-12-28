import React, {useContext}      from 'react'
import MotionDiv                from 'shared/Basic/MotionDiv'
import {TransitionAnimations}   from 'shared/Containers/TransitionController'
import {transitionOverlayStyle} from './styles'

const Overlay = ({theme}) => {
    const {overlayAnimation} = useContext(TransitionAnimations)

    return (
        <MotionDiv
            theme={{...transitionOverlayStyle, ...theme}}
            initial={{height: '100vh', opacity: 1}}
            animate={overlayAnimation}
        />
    )
}

Overlay.defaultProps = {
    theme: {}
}

export default Overlay