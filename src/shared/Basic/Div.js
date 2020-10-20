import PropTypes from 'prop-types'
import styled   from 'styled-components/macro'
import {themer} from '../../utils/themer'

const Div = styled.div`${props => themer(props.theme)}`

Div.propTypes = {
    theme: PropTypes.object.isRequired
}

Div.defaultProps = {
    theme: {}
}

export default Div