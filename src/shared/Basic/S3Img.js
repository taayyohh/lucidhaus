import {CDN} from 'config'
import React from 'react'
import Img   from './Img'

const S3Img = ({url, alt, theme}) => url ? (
    <Img
        src={`${CDN}${url}`}
        alt={alt}
        theme={{maxWidth: '100%', width: 'auto', ...theme}}
    />
) : null


S3Img.defaultProps = {
    theme: {},
}

export default S3Img