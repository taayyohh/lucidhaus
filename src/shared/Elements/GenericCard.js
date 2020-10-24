import React, {memo} from 'react'
import S3Img         from '../Basic/S3Img'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}            from '../../themes/business'
import Div        from '../Basic/Div'
import LinkSwitch from '../Basic/LinkSwitch'

const GenericCard = memo(({photo, name, slug, theme}) => {
    return (
        <LinkSwitch
            url={slug}
            theme={{...genericCardStyle, ...theme}}
        >
            <Div theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}>
                <S3Img
                    url={photo}
                    alt={name}
                    theme={{...genericCardImageStyle, ...theme.image}}
                />
            </Div>

            <Div theme={{...genericCardNameStyle, ...theme.name}}>{name}</Div>
        </LinkSwitch>
    )
})

GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard