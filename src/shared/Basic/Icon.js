import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import styled            from 'styled-components'
import {themer}          from '../../utils/themer'

const Icon = styled(FontAwesomeIcon)`
    ${props => themer(props.theme)}
    ${props => props.theme[props.icon.iconName] ? themer(props.theme[props.icon.iconName]) : ''}
`

Icon.displayName = 'Icon'

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    theme: PropTypes.object
}

Icon.defaultProps = {
    theme: {}
}

export default Icon