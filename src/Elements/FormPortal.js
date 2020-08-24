import React           from 'react'
import {Portal}        from 'react-portal'
import Div             from '../Basic/Div'
import MotionDiv       from '../Basic/MotionDiv'
import Overlay         from '../Layout/Overlay'
import {dropZoneStyle} from '../themes/elements'

const FormPortal = ({isOpen, setIsOpen, children}) => {
    const formPortalVariants = {
        initial: {
            top: '100vh',
            opacity: 0
        },
        animate: {
            top: '5vh',
            opacity: 1
        }
    }
    return (

        <>
            <Overlay
                isOpen={isOpen}
                handleClick={() => setIsOpen(false)}
            />
            <Portal>
                <MotionDiv
                    variants={formPortalVariants}
                    initial="initial"
                    animate={isOpen ? 'animate' : 'initial'}
                    theme={dropZoneStyle.portal}
                >
                    <Div theme={dropZoneStyle.portalInner}>
                        {children}
                    </Div>
                </MotionDiv>
            </Portal>
        </>

    )
}

export default FormPortal