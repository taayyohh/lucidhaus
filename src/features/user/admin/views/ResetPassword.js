import React                                                    from 'react'
import {useDispatch, useSelector}                               from 'react-redux'
import Div                                                      from 'shared/Basic/Div'
import H2                                                       from 'shared/Basic/H2'
import {resetButtonStyle, resetPasswordStyle, userAccountStyle} from './styles'

const ResetPassword = () => {
    const dispatch = useDispatch()
    const {_id, token, email} = useSelector(state => state.user)

    return (
        <Div theme={resetPasswordStyle}>
            <H2 theme={userAccountStyle.heading}>Password</H2>
            <Div>
                Manage your account password.
            </Div>
            <Div
                theme={resetButtonStyle}
                onClick={() => dispatch({
                    type: 'user/recoverPassword',
                    payload: {
                        _id,
                        token,
                        email
                    }
                })}
            >
                Reset Password
            </Div>
        </Div>
    )
}

export default ResetPassword
