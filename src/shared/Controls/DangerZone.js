import React                      from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import DeletePrompt               from 'shared/Controls/DeletePrompt'
import {
    dangerZoneButtonStyle,
    dangerZoneHeadingStyle,
    dangerZoneInnerWrapperStyle,
    dangerZoneItemDescriptionStyle,
    dangerZoneItemHeadingStyle,
    dangerZoneItemWrapperStyle,
    dangerZoneStyle
}                                 from './styles'

const DangerZone = ({attemptDestroyAction, destroyAction, slug, type, objectID, index, _id}) => {
    const dispatch = useDispatch()
    const {confirmDelete} = useSelector(state => state.admin)
    const {shouldDelete} = confirmDelete

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
                    onClick={() => dispatch({type: attemptDestroyAction, payload: {slug: (_id || slug)}})}
                >
                    Delete
                </Div>
            </Div>
            {shouldDelete && (
                <DeletePrompt
                    key={objectID || _id}
                    destroyAction={destroyAction}
                    type={type}
                    objectID={objectID}
                    index={index}
                />
            )}
        </Div>
    )
}

export default DangerZone
