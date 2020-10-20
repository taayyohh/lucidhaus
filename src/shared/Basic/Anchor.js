import PropTypes          from 'prop-types'
import styled   from 'styled-components'
import {themer} from '../../utils/themer'

const Anchor = styled.a`${props => themer({...props.theme})}`

Anchor.displayName = 'Anchor'

Anchor.propTypes = {
    theme: PropTypes.object,
}

Anchor.defaultProps = {
    theme: {}
}

export default Anchor