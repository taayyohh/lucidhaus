import PropTypes            from 'prop-types'
import styled               from 'styled-components/macro'
import {themer}             from 'utils/themer'
import {defaultLegendStyle} from 'shared/Field/styles'

const Legend = styled.legend`${props => themer({...defaultLegendStyle, ...props.theme})}`

Legend.propTypes = {
    theme: PropTypes.object,
}

Legend.defaultProps = {
    theme: {}
}

export default Legend