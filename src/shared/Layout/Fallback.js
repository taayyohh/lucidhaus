import {AnimatePresence} from 'framer-motion'
import React             from 'react'
import MotionDiv         from '../Basic/MotionDiv'

const Fallback = () =>
    <AnimatePresence>
        <MotionDiv key={'fallback'}>

        </MotionDiv>
    </AnimatePresence>


export default Fallback