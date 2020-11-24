import React from 'react'
import Div   from './Div'
import Img   from './Img'
import {CDN} from '../../config'

const S3Img = ({url, alt, theme}) =>
    <Div>
        <Img
            src={`${CDN}${url}`}
            alt={alt}
            theme={{maxHeight: '100%', maxWidth: '100%', ...theme}}
        />
    </Div>



S3Img.defaultProps = {
    theme: {},
}

export default S3Img