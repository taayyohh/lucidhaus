import PropTypes              from 'prop-types'
import {defaultFieldsetStyle} from 'shared/Fields/styles'
import styled                 from 'styled-components/macro'
import {themer}               from 'utils/themer'

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme.fieldset})}`

Fieldset.propTypes = {
    theme: PropTypes.object,
}

Fieldset.defaultProps = {
    theme: {}
}

export default Fieldset
