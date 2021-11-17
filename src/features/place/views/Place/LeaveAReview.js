import {push}                    from 'connected-react-router'
import React, {useContext}       from 'react'
import {useDispatch}             from 'react-redux'
import Div                       from 'shared/Basic/Div'
import {menuPanelContext}        from 'shared/Containers/MenuPanelController'
import {LeaveAReviewButtonStyle} from './styles'

const LeaveAReview = ({isAuth = true}) => {
    const {setPanel, currentPanel} = useContext(menuPanelContext)
    const dispatch = useDispatch()


    return (
        <Div
            theme={LeaveAReviewButtonStyle}
            onClick={isAuth ? () => setPanel(
                !currentPanel
                    ? 'leave-a-review'
                    : null
            ) : () => dispatch(push('/dashboard'))}
        >
            {isAuth ? `Leave A Review` : `Leave A Review`}
        </Div>
    )
}

export default LeaveAReview
