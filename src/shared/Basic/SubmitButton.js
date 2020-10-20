import PropTypes from 'prop-types'
import styled   from 'styled-components/macro'
import {themer} from '../../utils/themer'

const SubmitButton = styled.button`${props => themer(props.theme)}`

SubmitButton.propTypes = {
    theme: PropTypes.object.isRequired
}

SubmitButton.defaultProps = {
    theme: {}
}

export default SubmitButton