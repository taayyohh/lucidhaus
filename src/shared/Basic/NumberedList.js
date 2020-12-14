import PropTypes           from 'prop-types'
import styled   from 'styled-components'
import {themer} from 'utils/themer'

const NumberedList = styled.ol`${props => themer({...props.theme})}`

NumberedList.displayName = 'NumberedList'

NumberedList.propTypes = {
    theme: PropTypes.object,
}

export default NumberedList