import PropTypes          from 'prop-types'
import styled             from 'styled-components'
import {defaultFormStyle} from '../../themes/forms'
import {themer}           from '../../utils/themer'

const Form = styled.form`${props => themer({...defaultFormStyle, ...props.theme})}`

Form.propTypes = {
    theme: PropTypes.object,
}

Form.defaultProps = {
    theme: {}
}

export default Form