import PropTypes            from 'prop-types'
import React                from 'react'
import {genericButtonStyle} from '../../themes/elements'
import Button               from './Button'

const SubmitButton = ({theme, children}) => {
    return (
        <Button
            theme={{...genericButtonStyle, ...theme}}
            type={'submit'}
            children={children || 'Submit'}
        />
    )
}

SubmitButton.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.string
}

SubmitButton.defaultProps = {
    theme: {}
}

export default SubmitButton