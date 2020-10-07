import PropTypes           from 'prop-types'
import styled              from 'styled-components'
import {defaultInputStyle} from '../themes/forms'
import {themer}            from '../utils/themer'

const Input = styled.input`${props => themer({...defaultInputStyle, ...props.theme})}`

Input.propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string
}

Input.defaultProps = {
    theme: {}
}

export default Input