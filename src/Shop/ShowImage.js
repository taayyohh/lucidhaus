import React from 'react'
import Div   from '../Basic/Div'
import Img   from '../Basic/Img'
import {CDN} from '../config'

const ShowImage = ({url, alt, theme}) => (
    <Div  theme={theme.wrapper}>
        {console.log('url',`${CDN}`)}
        <Img src={`https://d1ogvuec9tg4jo.cloudfront.net/${url}`}
             alt={alt}
             theme={{...theme, maxHeight: '100%', maxWidth: '100%'}}
        />
    </Div>
)

ShowImage.defaultProps = {
    theme: {},
}

export default ShowImage