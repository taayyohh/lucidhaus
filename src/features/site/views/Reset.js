import {resetFields, validateReset}              from 'features/site/admin/fields/reset'
import {signInFormStyle, signInFormWrapperStyle} from 'features/user/views/styles'
import React, {useEffect}                        from 'react'
import {useDispatch, useSelector}                from 'react-redux'
import Div                                       from 'shared/Basic/Div'
import Form                                      from 'shared/Fields/Form'
import ContentWrapper                            from 'shared/Layout/ContentWrapper'

const Reset = () => {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const initialValues = {password: '', passwordConfirm: '', slug, token}


    useEffect(() => {
        dispatch({
            type: 'user/confirmResetToken',
            payload: {
                token: slug,
            }
        })
        //TODO: prevent view if invalid


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <Div theme={signInFormWrapperStyle}>
                <Form
                    initialValues={initialValues}
                    fields={resetFields}
                    validationSchema={validateReset}
                    dispatchAction={'user/resetPassword'}
                    formHeading={'Reset Password'}
                    buttonText={'Reset'}
                    theme={signInFormStyle}
                />
            </Div>
        </ContentWrapper>
    )
}

export default Reset
