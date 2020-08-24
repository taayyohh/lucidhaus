import {motion}  from 'framer-motion'
import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {themer}  from '../utils/themer'

// NOTE: Even though MotionDiv uses styled-components, it does not support the 'as' prop.

const MotionDiv = styled(motion.div)`${props => themer(props.theme)}`

MotionDiv.propTypes = {
    animate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
        PropTypes.array
    ]),
    variants: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}

export default MotionDiv