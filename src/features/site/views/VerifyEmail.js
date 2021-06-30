import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import {history}                  from 'store'

const VerifyEmail = () => {
    const {slug} = useSelector(state => state.site)
    const {_id, token, emailVerified} = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({
            type: 'user/verifyUser',
            payload: {
                verificationToken: slug,
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (emailVerified) {
            dispatch({
                type: 'site/setNotification',
                payload: {
                    notification: 'email verified!'
                }
            })
            setTimeout(() => (
                history.push('/dashboard')
            ), 500)
        }

    }, [emailVerified, dispatch])


    return (
        <Div>

        </Div>
    )
}

export default VerifyEmail
