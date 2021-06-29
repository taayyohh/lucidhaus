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

    }, [slug, _id, token, dispatch])

    useEffect(() => {
        if (emailVerified) {
            history.push('/dashboard')
            dispatch({
                type: 'site/setNotification',
                payload: {
                    notification: 'email verified!'
                }
            })
        }

    }, [emailVerified, dispatch])


    return (
        <Div>

        </Div>
    )
}

export default VerifyEmail
