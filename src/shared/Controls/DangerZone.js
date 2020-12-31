import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from 'shared/Basic/Div'
import DeletePrompt  from 'shared/Layout/DeletePrompt'
import {
    dangerZoneButtonStyle,
    dangerZoneHeadingStyle,
    dangerZoneInnerWrapperStyle,
    dangerZoneItemDescriptionStyle,
    dangerZoneItemHeadingStyle,
    dangerZoneItemWrapperStyle,
    dangerZoneStyle
}                    from './styles'

const DangerZone = ({destroyAction, slug, type, objectId, index, _id}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={dangerZoneStyle}>
            <Div theme={dangerZoneHeadingStyle}>Danger Zone</Div>
            <Div theme={dangerZoneInnerWrapperStyle}>
                <Div theme={dangerZoneItemWrapperStyle}>
                    <Div theme={dangerZoneItemHeadingStyle}>
                        Delete this {type}
                    </Div>
                    <Div theme={dangerZoneItemDescriptionStyle}>
                        Once you delete a {type}, there is no going back. Please be certain.
                    </Div>
                </Div>
                <Div
                    theme={dangerZoneButtonStyle}
                    onClick={() => dispatch({type: destroyAction, payload: {slug: (_id || slug)}})}
                >
                    Delete
                </Div>
            </Div>

            <DeletePrompt
                destroyAction={'admin/destroyProduct'}
                type={type}
                objectId={objectId}
                index={index}
            />
        </Div>
    )
}

export default DangerZone