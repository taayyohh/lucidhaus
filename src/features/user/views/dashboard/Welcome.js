import {userDashboardWelcomeStyle} from 'features/user/admin/views/styles'
import React                       from 'react'
import {useDispatch}               from 'react-redux'
import Div                         from 'shared/Basic/Div'
import Tooltip                     from 'shared/Controls/ToolTip'

const Welcome = ({
                     _id,
                     token,
                     nameFirst,
                     tel,
                     email,
                     emailVerified,
                     verificationToken
                 }) => {
    const dispatch = useDispatch()


    return (
        <Div theme={userDashboardWelcomeStyle.info}>
            <Div theme={userDashboardWelcomeStyle.heading}>Hey, {nameFirst}</Div>
            <Div theme={userDashboardWelcomeStyle.details}><span>Registered Phone Number:</span> {tel}</Div>
            <Div theme={userDashboardWelcomeStyle.details}><span>Registered Email:</span> {email}</Div>
            <Div theme={userDashboardWelcomeStyle.details}>
                <span>Account Verification Status:</span>
                {(emailVerified && (
                    <Div theme={userDashboardWelcomeStyle.verified}>Verified</Div>
                )) || (
                    <Div theme={userDashboardWelcomeStyle.unverified}>
                        Unverified
                        <Tooltip
                            message={'Account verification is required to leave reviews!'}
                            theme={userDashboardWelcomeStyle.tooltip}
                        />
                    </Div>
                )}
            </Div>
            <Div theme={userDashboardWelcomeStyle.verifyWrapper}>
                {!emailVerified && (
                    <Div
                        onClick={() => dispatch(
                            {
                                type: 'user/resendVerificationLink',
                                payload: {
                                    verificationLink: `https://beta.inclusiveguide.com/verify/${verificationToken}`,
                                    email: email,
                                    _id,
                                    token
                                }
                            })}
                        theme={userDashboardWelcomeStyle.verifyEmail}
                    >
                        Click here to Verify Your Account
                    </Div>
                )}
            </Div>
        </Div>
    )
}

export default Welcome
