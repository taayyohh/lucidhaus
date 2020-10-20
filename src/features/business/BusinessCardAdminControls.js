import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from '../../shared/Basic/Div'
import LinkSwitch    from '../../shared/Basic/LinkSwitch'
import {
    adminCardControlsButtonStyle,
    adminCardControlsButtonWrapperStyle
}                    from '../../themes/admin'

const BusinessCardAdminControls = ({slug}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={adminCardControlsButtonWrapperStyle}>
            <LinkSwitch
                theme={adminCardControlsButtonStyle}
                url={`/admin/marketplace/update/${slug}`}
            >
                Edit
            </LinkSwitch>
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