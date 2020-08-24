import React          from 'react'
import MotionDiv      from '../Basic/MotionDiv'
import {overlayStyle} from '../themes/layout'

const Overlay = ({isOpen, handleClick, theme}) => {
    const overlayVariants = {
        initial: {
            opacity: 0,
            zIndex: -1
        },
        animate: {
            opacity: .5,
            zIndex: 1
        }
    }

    return (
        <MotionDiv
            theme={{...overlayStyle, ...theme}}
            initial="initial"
            animate={isOpen ? 'animate' : 'initial'}
            variants={overlayVariants}
            onClick={handleClick}
        />
    )
}


Overlay.defaultProps = {
    theme: {},
}

export default Overlay