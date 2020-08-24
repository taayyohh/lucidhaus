import React from 'react'
import Div   from '../Basic/Div'
import Img   from '../Basic/Img'
import {CDN} from '../config'

const GetS3Image = ({url, theme}) => (
    <Div className="product-image" theme={theme.wrapper}>
        {console.log('CDN LOCATION', CDN)}
        <Img src={`${CDN}/artist-profile/${url}`}
             alt="image"
             theme={{...theme, maxHeight: '100%', maxWidth: '100%'}}
        />
    </Div>
)

GetS3Image.defaultProps = {
    theme: {},
}

export default GetS3Image