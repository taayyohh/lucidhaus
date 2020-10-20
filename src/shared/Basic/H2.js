import PropTypes from 'prop-types'
import styled           from 'styled-components/macro'
import {themer}         from '../../utils/themer'
import {defaultH2Style} from '../../themes/elements'

const H2 = styled.h2`${props => themer({...defaultH2Style, ...props.theme})}`

H2.propTypes = {
    theme: PropTypes.object
}

H2.defaultProps = {
    theme: {}
}

export default H2