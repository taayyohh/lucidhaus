import PropTypes              from 'prop-types'
import {defaultFieldsetStyle} from 'shared/Forms/styles'
import styled                 from 'styled-components/macro'
import {themer}               from 'utils/themer'

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme})}`

Fieldset.propTypes = {
    theme: PropTypes.object,
}

Fieldset.defaultProps = {
    theme: {}
}

export default Fieldset