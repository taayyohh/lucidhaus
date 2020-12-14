import PropTypes            from 'prop-types'
import {genericButtonStyle} from 'shared/Controls/styles'
import styled               from 'styled-components/macro'
import {themer}             from 'utils/themer'

const Button = styled.button`${props => themer({...genericButtonStyle, ...props.theme})}`

Button.propTypes = {
    theme: PropTypes.object.isRequired
}

Button.defaultProps = {
    theme: {}
}

export default Button