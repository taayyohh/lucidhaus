import React            from 'react'
import Div              from 'shared/Basic/Div'
import MotionDiv        from 'shared/Basic/MotionDiv'
import LinkSwitch       from '../Basic/LinkSwitch'
import {toggleVariants} from './animations'
import {
    defaultFieldHeadingStyle,
    toggleBallStyle,
    toggleFieldStyle
}                       from './styles'

const Toggle = ({formik, inputLabel, inputLabelHelper, name}) =>
    <>
        {(inputLabelHelper && (
            <LinkSwitch url={inputLabelHelper} theme={defaultFieldHeadingStyle}>{inputLabel}</LinkSwitch>
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
