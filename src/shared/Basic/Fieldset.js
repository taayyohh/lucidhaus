import PropTypes              from 'prop-types'
import styled                 from 'styled-components/macro'
import {themer}               from '../../utils/themer'
import {defaultFieldsetStyle} from '../Forms/styles'

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme})}`

Fieldset.propTypes = {
    theme: PropTypes.object,
}

Fieldset.defaultProps = {
    theme: {}
}

export default Fieldset