import React            from 'react'
import Div              from 'shared/Basic/Div'
import MotionDiv        from 'shared/Basic/MotionDiv'
import {toggleVariants} from './animations'
import {
    defaultFieldHeadingStyle,
    toggleBallStyle,
    toggleFieldStyle
}                       from './styles'

const Toggle = ({formik, inputLabel, name}) =>
    <>
        <Div theme={defaultFieldHeadingStyle}>{inputLabel}</Div>
        <MotionDiv
            theme={toggleFieldStyle}
            onClick={() => formik.setFieldValue(name, !formik.values[name])}
            animate={formik.values[name] === undefined ? 'initial' : (formik.values[name] ? 'true' : 'false')}
            variants={toggleVariants}
        >
            <MotionDiv
                layoutId={'toggleBall'}
                theme={toggleBallStyle}
                transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 30
                }}
            />
        </MotionDiv>
    </>

export default Toggle
