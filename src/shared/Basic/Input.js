import PropTypes           from 'prop-types'
import styled              from 'styled-components'
import {themer}            from 'utils/themer'
import {defaultInputStyle} from 'shared/Fields/styles'

const Input = styled.input`${props => themer({...defaultInputStyle, ...props.theme})}`

Input.propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string
}

Input.defaultProps = {
    theme: {}
}

export default Input