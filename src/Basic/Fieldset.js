import PropTypes              from 'prop-types'
import styled                 from 'styled-components/macro'
import {defaultFieldsetStyle} from '../themes/forms'
import {themer}               from '../utils/themer'

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme})}`

Fieldset.propTypes = {
    theme: PropTypes.object,
}

Fieldset.defaultProps = {
    theme: {}
}

export default Fieldset