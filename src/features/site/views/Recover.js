import {signInFormStyle, signInFormWrapperStyle} from 'features/user/views/styles'
import React, {useEffect}                        from 'react'
import {useSelector}                             from 'react-redux'
import Div                                       from 'shared/Basic/Div'
import Form                                      from 'shared/Fields/Form'
import ContentWrapper                            from 'shared/Layout/ContentWrapper'
import {recoverFields, validateRecover}          from '../admin/fields/recover'

const Recover = () => {
    const {_id, token} = useSelector(state => state.user)
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const initialValues = {email: '', _id, token}

    useEffect(() => {


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <Div theme={signInFormWrapperStyle}>
                <Form
                    initialValues={initialValues}
                    fields={recoverFields}
                    validationSchema={validateRecover}
                    dispatchAction={'user/recoverPassword'}
                    formHeading={'Recover Password'}
                    buttonText={'Recover'}
                    theme={signInFormStyle}
                />
            </Div>
        </ContentWrapper>
    )
}

export default Recover
