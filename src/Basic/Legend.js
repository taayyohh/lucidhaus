import PropTypes            from 'prop-types'
import styled               from 'styled-components/macro'
import {defaultLegendStyle} from '../themes/forms'
import {themer}             from '../utils/themer'

const Legend = styled.legend`${props => themer({...defaultLegendStyle, ...props.theme})}`

Legend.propTypes = {
    theme: PropTypes.object,
}

Legend.defaultProps = {
    theme: {}
}

export default Legend