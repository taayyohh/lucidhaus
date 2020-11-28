import React from 'react'
import {CDN} from '../../config'
import Img   from './Img'

const S3Img = ({url, alt, theme}) =>
    <Img
        src={`${CDN}${url}`}
        alt={alt}
        theme={{maxWidth: '100%', width: 'auto', ...theme}}
    />


S3Img.defaultProps = {
    theme: {},
}

export default S3Img