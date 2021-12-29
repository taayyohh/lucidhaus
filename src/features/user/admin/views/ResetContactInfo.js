import {confirmationCodeFields}                                                                from 'features/site/admin/fields/signUp'
import {
    updateEmailFields,
    validateUpdateEmail
}                                                                                              from 'features/user/admin/fields/resetEmail'
import {
    resetPhoneFields,
    validateResetPhone
}                                                                                              from 'features/user/admin/fields/resetPhone'
import React, {useEffect, useRef}                                                              from 'react'
import {PortalWithState}                                                                       from 'react-portal'
import {useSelector}                                                                           from 'react-redux'
import Div                                                                                     from 'shared/Basic/Div'
import H2                                                                                      from 'shared/Basic/H2'
import MotionDiv
                                                                                               from 'shared/Basic/MotionDiv'
import Form                                                                                    from 'shared/Fields/Form'
import {defaultModalStyle}                                                                     from 'shared/Layout/styles'
import {resetContactInfoStyle, userAccountFormStyle, userAccountStyle, userAccountVerifyStyle} from './styles'

const ResetContactInfo = () => {
    const {_id, token, slug, tel, email, confirmationRequest} = useSelector(state => state.user)
    const confirmationCodeInitialValues = {verificationCode: '', slug, _id, token, ...confirmationRequest}
    const updatedPhoneNumberInitialValues = {tel: ''}
    const updatedEmailInitialValues = {email: ''}
    const ref = useRef()

    useEffect(() => {
        if (!confirmationRequest) {
            ref?.current.click()
        }

    }, [confirmationRequest])

    return (
        <Div theme={resetContactInfoStyle} ref={ref}>
            <H2 theme={userAccountStyle.heading}>Phone and Email</H2>
            <Div theme={userAccountStyle.subHeading}>
                Every user of the LucidHaus is required to have a
                registered phone number and email to leave reviews for places and businesses.
                This requirement ensures the integrity of each review or rating,
                and helps to limit the likelihood of false reviews.
            </Div>
            <Div theme={userAccountStyle.infoWrapper}>
                <Div theme={userAccountStyle.info}>
                    <Div theme={userAccountStyle.infoText}>
                        <div><strong>Registered Phone Number:</strong></div>
                        <span>{tel}</span>
                        <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({openPortal, portal}) => (
                                <>
                                    <Div onClick={openPortal} theme={userAccountStyle.updateLink}>
                                        Update
                                    </Div>
                                    {portal(
                                        <MotionDiv theme={defaultModalStyle}>
                                            {(confirmationRequest && (
                                                <Form
                                                    initialValues={confirmationCodeInitialValues}
                                                    fields={confirmationCodeFields}
                                                    dispatchAction={'user/confirmUpdatePhoneNumber'}
                                                    formHeading={'Verify Phone'}
                                                    buttonText={'Confirm'}
                                                    theme={userAccountVerifyStyle}
                                                    enableReinitialize={true}
                                                />
                                            )) || (
                                                <Form
                                                    initialValues={updatedPhoneNumberInitialValues}
                                                    fields={resetPhoneFields}
                                                    validationSchema={validateResetPhone}
                                                    dispatchAction={'user/updatePhoneNumber'}
                                                    formHeading={'Update Phone Number'}
                                                    buttonText={'Update'}
                                                    theme={userAccountFormStyle}
                                                    enableReinitialize={true}
                                                />
                                            )}
                                        </MotionDiv>
                                    )}
                                </>
                            )}
                        </PortalWithState>
                    </Div>
                </Div>
                <Div theme={userAccountStyle.info}>
                    <Div theme={userAccountStyle.infoText}>
                        <div><strong>Registered Email:</strong></div>
                        <span>{email}</span>
                        <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({openPortal, portal}) => (
                                <>
                                    <Div onClick={openPortal} theme={userAccountStyle.updateLink}>
                                        Update
                                    </Div>
                                    {portal(
                                        <MotionDiv theme={defaultModalStyle}>
                                            {(confirmationRequest && (
                                                <Form
                                                    initialValues={confirmationCodeInitialValues}
                                                    fields={confirmationCodeFields}
                                                    dispatchAction={'user/confirmUpdateEmail'}
                                                    formHeading={'Verify Email Address'}
                                                    buttonText={'Confirm'}
                                                    theme={userAccountVerifyStyle}
                                                    enableReinitialize={true}
                                                />
                                            )) || (
                                                <Form
                                                    initialValues={updatedEmailInitialValues}
                                                    fields={updateEmailFields}
                                                    validationSchema={validateUpdateEmail}
                                                    dispatchAction={'user/updateEmail'}
                                                    formHeading={'Update Email Address'}
                                                    buttonText={'Update'}
                                                    theme={userAccountFormStyle}
                                                    enableReinitialize={true}
                                                />
                                            )}
                                        </MotionDiv>
                                    )}
                                </>
                            )}
                        </PortalWithState>
                    </Div>
                </Div>
            </Div>
            <Div theme={userAccountStyle.disclaimer}>
                * Please Note: Updating the phone number or email associated with your account will require
                reverification via text or email confirmation. A verification text will be sent to the number
                provided when updating your phone number. An email confirmation will be sent to the address provided
                when updating your registered email. This is done to protect the privacy and integrity of all
                users of the LucidHaus.
            </Div>
        </Div>
    )
}

export default ResetContactInfo
