import PropTypes          from 'prop-types'
import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {defaultFormStyle} from 'shared/Forms/styles'

const Form = styled.form`${props => themer({...defaultFormStyle, ...props.theme})}`

Form.propTypes = {
    theme: PropTypes.object,
}

Form.defaultProps = {
    theme: {}
}

export default Form