import defaultAvatar              from 'assets/default-avatar.png'
import React                      from 'react'
import Div                        from 'shared/Basic/Div'
import Img                        from 'shared/Basic/Img'
import S3Img                      from 'shared/Basic/S3Img'
import {userDashboardAvatarStyle} from './styles'

const Avatar = ({avatar}) => {
    return (
        <Div theme={userDashboardAvatarStyle}>
            {((avatar && (
                <S3Img
                    url={avatar}
                    theme={{width: '100%'}}
                />
            )) || (
                <Img
                    src={defaultAvatar}
                    theme={{width: '100%'}}
                />
            ))}
        </Div>
    )
}

export default Avatar
