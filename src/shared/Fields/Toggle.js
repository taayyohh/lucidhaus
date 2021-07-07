import React                                                                                 from 'react'
import Div                                                                                   from 'shared/Basic/Div'
import MotionDiv
                                                                                             from 'shared/Basic/MotionDiv'
import LinkSwitch                                                                            from '../Basic/LinkSwitch'
import Span                                                                                  from '../Basic/Span'
import {toggleVariants}                                                                      from './animations'
import {
    defaultFieldErrorStyle,
    defaultFieldHeadingStyle,
    toggleBallStyle,
    toggleErrorStyle,
    toggleFieldStyle
} from './styles'

const Toggle = ({formik, inputLabel, errorMessage, inputLabelHelper, name}) =>
    <>
        {(inputLabelHelper && (
            <Div theme={{position: 'relative', paddingTop: 20, paddingBottom: 0}}>
                <LinkSwitch url={inputLabelHelper} theme={defaultFieldHeadingStyle}>
                    {inputLabel}
                </LinkSwitch>
                <Span theme={{...defaultFieldErrorStyle, ...toggleErrorStyle}}>{errorMessage}</Span>
            </Div>
        )) || (
            <Div theme={defaultFieldHeadingStyle}>{inputLabel}</Div>
        )}

        <MotionDiv
            theme={toggleFieldStyle}
            onClick={() => formik.setFieldValue(name, !formik.values[name])}
            animate={formik.values[name] === undefined ? 'initial' : (formik.values[name] ? 'true' : 'false')}
            variants={toggleVariants}
        >
            <MotionDiv
                layoutId={'toggleBall'}
                theme={toggleBallStyle}
                initial={{visibility: 'visible', opacity: 1}}
                transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 30
                }}
            />
        </MotionDiv>
    </>

export default Toggle
