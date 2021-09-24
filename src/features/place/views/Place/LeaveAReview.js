import React, {useContext}       from 'react'
import Div                       from 'shared/Basic/Div'
import {menuPanelContext}        from 'shared/Containers/MenuPanelController'
import {LeaveAReviewButtonStyle} from './styles'

const LeaveAReview = ({}) => {
    const {setPanel, currentPanel} = useContext(menuPanelContext)

    return (
        <Div
            theme={LeaveAReviewButtonStyle}
            onClick={() => setPanel(
                !currentPanel
                    ? 'leave-a-review'
                    : null
            )}
        >
            Leave A Review
        </Div>
    )
}

export default LeaveAReview
