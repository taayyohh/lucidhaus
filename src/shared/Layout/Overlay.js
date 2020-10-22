import React          from 'react'
import MotionDiv      from '../Basic/MotionDiv'
import {overlayStyle} from '../../themes/layout'

const Overlay = ({isOpen, onClick, theme}) => {
    const overlayVariants = {
        initial: {
            opacity: 0,
            transitionEnd: {
                zIndex: -1
            }
        },
        animate: {
            opacity: .25,
            zIndex: 24
        }
    }

    return (
        <MotionDiv
            theme={{...overlayStyle, ...theme}}
            initial="initial"
            animate={isOpen ? 'animate' : 'initial'}
            variants={overlayVariants}
            onClick={onClick}
            alt='Close Panel'
        />
    )
}


Overlay.defaultProps = {
    theme: {},
}

export default Overlay