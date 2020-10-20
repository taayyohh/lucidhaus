import PropTypes        from 'prop-types'
import styled   from 'styled-components/macro'
import {themer} from '../../utils/themer'

const H3 = styled.h3`${props => themer({...props.theme})}`

H3.propTypes = {
    theme: PropTypes.object,
}

H3.defaultProps = {
    theme: {},
}

export default H3