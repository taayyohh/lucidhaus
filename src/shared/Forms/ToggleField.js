import {AnimatePresence} from 'framer-motion'
import React             from 'react'
import MotionDiv         from '../Basic/MotionDiv'
import {toggleVariants}  from './animations'
import {
    toggleBallStyle,
    toggleFieldStyle
}                        from './styles'

const ToggleField = ({formik, name}) =>
    <AnimatePresence layout>
        {console.log('formik', formik)}

        <MotionDiv
            theme={toggleFieldStyle}
            onClick={() => formik.setFieldValue(name, !formik.values[name])}
            animate={formik.values[name] ? 'true' : 'false'}
            variants={toggleVariants}
        >
            <MotionDiv theme={toggleBallStyle}/>
        </MotionDiv>
    </AnimatePresence>

export default ToggleField