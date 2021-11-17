import {infoCircle}                                                                        from 'config/icons'
import {AnimatePresence}                                                                   from 'framer-motion'
import React, {useRef, useState}                                                           from 'react'
import Div                                                                                 from 'shared/Basic/Div'
import Icon                                                                                from 'shared/Basic/Icon'
import MotionDiv                                                                           from 'shared/Basic/MotionDiv'
import {auto}                                                                              from 'utils/themer'
import useOutsideAlerter
                                                                                           from '../../utils/clickOutside'
import Span                                                                                from '../Basic/Span'
import {toolTipIconStyles, toolTipMessageInnerStyles, toolTipMessageStyles, toolTipStyles} from './styles'

const Tooltip = ({message, theme}) => {
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
        <Div theme={{...toolTipStyles, ...theme}}>
            <Icon
                icon={infoCircle}
                onMouseOver={() => setIsOpen(flag => !flag)}
                onMouseOut={() => setIsOpen(flag => !flag)}
                theme={{...toolTipIconStyles, ...theme.icon}}
            />
            <AnimatePresence>
                <MotionDiv
                    theme={{...toolTipMessageStyles, ...theme.message}}
                    variants={variants}
                    initial={'initial'}
                    exit={'exit'}
                    animate={isOpen ? 'animate' : 'exit'}
                    ref={toolTipRef}
                >
                    <Div theme={{...toolTipMessageInnerStyles, ...theme.messageInner}}>
                        {message}
                    </Div>
                </MotionDiv>
            </AnimatePresence>

        </Div>
    )
}

Tooltip.defaultProps = {
    theme: {}
}

export default Tooltip
