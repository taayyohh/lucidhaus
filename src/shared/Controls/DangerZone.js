import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from 'shared/Basic/Div'
import {
    dangerZoneButtonStyle,
    dangerZoneStyle
}                    from 'shared/Controls/styles'
import DeletePrompt  from 'shared/Layout/DeletePrompt'

const DangerZone = ({destroyAction, slug, _id}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={dangerZoneStyle}>
            <Div></Div>
            <Div
                theme={dangerZoneButtonStyle}
                onClick={() => dispatch({type: destroyAction, payload: {slug: (_id || slug)}})}
            >
                Delete
            </Div>
            <DeletePrompt destroyAction={'admin/destroyProduct'}/>
        </Div>
    )
}

export default DangerZone