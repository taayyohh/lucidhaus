import PropTypes                from 'prop-types'
import styled                   from 'styled-components/macro'
import {defaultInputLabelStyle} from '../themes/forms'
import {themer}                 from '../utils/themer'

const InputLabel = styled.label`${props => themer({...defaultInputLabelStyle, ...props.theme})}`

InputLabel.propTypes = {
    theme: PropTypes.object,
}

InputLabel.defaultProps = {
    theme: {}
}

export default InputLabel