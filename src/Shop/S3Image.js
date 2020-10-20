import React from 'react'
import Img   from '../shared/Basic/Img'
import {CDN} from '../config'

const S3Image = ({url, alt, theme}) =>
    <Img
        src={`${CDN}${url}`}
        alt={alt}
        theme={{maxHeight: '100%', maxWidth: '100%', ...theme}}
    />


S3Image.defaultProps = {
    theme: {},
}

export default S3Image