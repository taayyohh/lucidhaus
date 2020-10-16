import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from '../../Basic/Div'
import StyledLink    from '../../Basic/StyledLink'
import {
    adminCardControlsButtonStyle,
    adminCardControlsButtonWrapperStyle
}                    from '../../themes/admin'

const BusinessCardAdminControls = ({slug}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={adminCardControlsButtonWrapperStyle}>
            <StyledLink
                theme={adminCardControlsButtonStyle}
                to={`/admin/business/update/${slug}`}
            >
                Edit
            </StyledLink>
            <Div
                theme={adminCardControlsButtonStyle}
                onClick={() => dispatch({type: 'admin/attemptDestroyBusiness', payload: {slug: slug}})}
            >
                Delete
            </Div>
        </Div>
    )
}

export default BusinessCardAdminControls