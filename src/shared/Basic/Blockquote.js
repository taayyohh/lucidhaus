import PropTypes         from 'prop-types'
import styled   from 'styled-components'
import {themer} from '../../utils/themer'

const Blockquote = styled.blockquote`${props => themer({...props.theme})}`

Blockquote.displayName = 'Blockquote'

Blockquote.propTypes = {
    theme: PropTypes.object,
}

export default Blockquote