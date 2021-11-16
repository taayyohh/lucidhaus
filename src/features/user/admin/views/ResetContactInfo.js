import React                                     from 'react'
import {PortalWithState}                         from 'react-portal'
import {useSelector}                             from 'react-redux'
import Div                                       from 'shared/Basic/Div'
import H2                                        from 'shared/Basic/H2'
import MotionDiv                                 from 'shared/Basic/MotionDiv'
import {defaultModalStyle}                       from 'shared/Layout/styles'
import {resetContactInfoStyle, userAccountStyle} from './styles'

const ResetContactInfo = () => {
    const {_id, token, tel, email} = useSelector(state => state.user)

    return (
        <Div theme={resetContactInfoStyle}>
            <H2 theme={userAccountStyle.heading}>Registered Phone Number and Email Address</H2>
            <Div>Every user of the Inclusive Guide is required to have a
                registered phone number and email to leave reviews for places and businesses.
                This requirement ensures the integrity of each review or rating,
                and helps to limit the likelihood of false reviews.
            </Div>
            <Div theme={userAccountStyle.infoWrapper}>
                <Div theme={userAccountStyle.info}>
                    <Div>
                        Registered Phone Number : <span>{tel}</span>
                    </Div>
                    <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({openPortal, portal}) => (
                            <>
                                <Div onClick={openPortal} theme={userAccountStyle.updateLink}>
                                    Update My Registered Phone Number
                                </Div>
                                {portal(
                                    <MotionDiv theme={defaultModalStyle}>
                                        Update PHONE
                                    </MotionDiv>
                                )}
                            </>

                        )}
                    </PortalWithState>
                </Div>
                <Div theme={userAccountStyle.info}>
                    <Div>
                        Registered Email : <span>{email}</span>
                    </Div>
                    <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({openPortal, portal}) => (
                            <>
                                <Div onClick={openPortal} theme={userAccountStyle.updateLink}>
                                    Update My Registered Email
                                </Div>
                                {portal(
                                    <MotionDiv theme={defaultModalStyle}>
                                        Update Email
                                    </MotionDiv>
                                )}
                            </>

                        )}
                    </PortalWithState>

                </Div>
            </Div>
            <Div theme={userAccountStyle.disclaimer}>
                * Please Note: Updating the phone number or email associated with your account will require
                reverification via text or email confirmation. A verification text will be sent to the number
                provided when updating your phone number. An email confirmation will be sent to the address provided
                when updating your registered email. This is done to protect the privacy and integrity of all
                users of the Inclusive Guide.
            </Div>
        </Div>
    )
}

export default ResetContactInfo
