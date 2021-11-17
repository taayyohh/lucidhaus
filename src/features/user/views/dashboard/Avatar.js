import {colorPalette}             from 'config/styles'
import React                      from 'react'
import Div                        from 'shared/Basic/Div'
import S3Img                      from 'shared/Basic/S3Img'
import {userDashboardAvatarStyle} from './styles'

const Avatar = ({avatar}) => {
    return (
        <Div theme={userDashboardAvatarStyle}>
            {(avatar && (
                <S3Img
                    url={avatar}
                    theme={{width: '100%'}}
                />
            ) || (
                <Div
                    theme={{background: colorPalette.seaFoamGreen}}/>
            ))}
        </Div>
    )
}

export default Avatar
