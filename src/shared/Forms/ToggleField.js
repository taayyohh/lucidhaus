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
        <MotionDiv
            theme={toggleFieldStyle}
            onClick={() => formik.setFieldValue(name, !formik.values[name])}
            animate={formik.values[name] ? 'true' : 'false'}
            variants={toggleVariants}
            layout
        >
            <MotionDiv theme={toggleBallStyle} layout transition={{type: "spring",
                stiffness: 700,
                damping: 30}}/>
        </MotionDiv>
    </AnimatePresence>

export default ToggleField