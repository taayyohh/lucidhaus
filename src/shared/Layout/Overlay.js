import React          from 'react'
import MotionDiv      from 'shared/Basic/MotionDiv'
import {overlayStyle} from './styles'

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
            zIndex: 4
        }
    }

    return (isOpen ?
            <MotionDiv
                theme={{...overlayStyle, ...theme}}
                initial="initial"
                animate={isOpen ? 'animate' : 'initial'}
                variants={overlayVariants}
                onClick={onClick}
                alt='Close Panel'
            /> : null
    )
}


Overlay.defaultProps = {
    theme: {},
}

export default Overlay