import {globals}                  from 'config/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import S3Img                      from '../Basic/S3Img'
import {defaultFieldHeadingStyle} from './styles'

const User = ({value, inputLabel}) => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {current} = useSelector(state => state.place)


    useEffect(() => {
        if (!!value)
            dispatch({
                type: 'user/getSubmittedByUser',
                payload: {
                    userId: value,
                    _id: _id,
                    token: token
                }
            })

    }, [value])


    return (
        <Div>
            {current && (
                <Div theme={{
                    border: `1px solid ${globals.colors.borderColor}`,
                    padding: [20, .7, 20],
                    borderRadius: [10, .7, 10],
                    background: '#fff'
                }}>
                    <Div theme={defaultFieldHeadingStyle}>{inputLabel}</Div>
                    <Div theme={{display: 'flex', marginTop: [20, .7, 20]}}>
                        <S3Img url={current.submittedBy.avatar}
                               theme={{height: 'auto', width: [100, .7, 100], borderRadius: [50, .7, 50]}}/>
                        <Div theme={{display: 'flex', flexDirection: 'column', marginLeft: [20, .7, 20]}}>
                            <Div theme={{size: [28, .7, 28]}}>{current.submittedBy.nameFirst}</Div>
                            <Div>{current.submittedBy.email}</Div>
                        </Div>
                    </Div>
                </Div>
            )}
        </Div>
    )
}

export default User
