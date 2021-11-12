import {infoCircle}                                                                        from 'config/icons'
import {AnimatePresence}                                                                   from 'framer-motion'
import React, {useRef, useState}                                                           from 'react'
import Div                                                                                 from 'shared/Basic/Div'
import Icon                                                                                from 'shared/Basic/Icon'
import MotionDiv                                                                           from 'shared/Basic/MotionDiv'
import {auto}                                                                              from 'utils/themer'
import useOutsideAlerter
                                                                                           from '../../utils/clickOutside'
import {toolTipIconStyles, toolTipMessageInnerStyles, toolTipMessageStyles, toolTipStyles} from './styles'

const Tooltip = ({message}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toolTipRef = useRef()
    const variants = {
        initial: {
            height: 0,
            padding: 0,
        },
        animate: {
            height: auto,
        },
        exit: {
            height: 0,
            padding: 0
        }
    }

    useOutsideAlerter(toolTipRef, {type: 'site/closeToolTip', payload: true})


    return (
        <Div theme={toolTipStyles}>
            <Icon
                icon={infoCircle}
                onClick={() => setIsOpen(flag => !flag)}
                theme={toolTipIconStyles}
            />
            <AnimatePresence>
                <MotionDiv
                    theme={toolTipMessageStyles}
                    variants={variants}
                    initial={'initial'}
                    exit={'exit'}
                    animate={isOpen ? 'animate' : 'exit'}
                    ref={toolTipRef}
                >
                    <Div theme={toolTipMessageInnerStyles}>
                        {message}
                    </Div>
                </MotionDiv>
            </AnimatePresence>

        </Div>
    )
}

export default Tooltip
