import React            from 'react'
import Div              from 'shared/Basic/Div'
import {adminMenuStyle} from 'shared/Layout/Dashboard/admin/styles'

const LeaveAReview = () =>
    <Div theme={adminMenuStyle}>
        <Div theme={adminMenuStyle.list}>
            <Div theme={adminMenuStyle.tagline}>
                Leave a Review
            </Div>
        </Div>
    </Div>

export default LeaveAReview
