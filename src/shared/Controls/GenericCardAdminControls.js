import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from '../Basic/Div'
import LinkSwitch    from '../Basic/LinkSwitch'
import {
    adminCardControlsButtonStyle,
    adminCardControlsButtonWrapperStyle
}                    from '../../themes/admin'

const GenericCardAdminControls = ({slug, _id, edit, destroyAction}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={adminCardControlsButtonWrapperStyle}>
            <LinkSwitch
                theme={adminCardControlsButtonStyle}
                url={`${edit}/${slug}`}
            >
                Edit
            </LinkSwitch>
            <Div
                theme={adminCardControlsButtonStyle}
                onClick={() => dispatch({type: destroyAction, payload: {slug: (_id || slug)}})}
            >
                Delete
            </Div>
        </Div>
    )
}

export default GenericCardAdminControls