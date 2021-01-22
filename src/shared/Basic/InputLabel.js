import PropTypes                from 'prop-types'
import styled                   from 'styled-components/macro'
import {themer}                 from 'utils/themer'
import {defaultInputLabelStyle} from 'shared/Field/styles'

const InputLabel = styled.label`${props => themer({...defaultInputLabelStyle, ...props.theme})}`

InputLabel.propTypes = {
    theme: PropTypes.object,
}

InputLabel.defaultProps = {
    theme: {}
}

export default InputLabel