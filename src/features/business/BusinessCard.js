import React      from 'react'
import Div        from '../../shared/Basic/Div'
import LinkSwitch from '../../shared/Basic/LinkSwitch'
import S3Image    from '../../Shop/S3Image'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}                 from '../../themes/business'

const BusinessCard = ({photo, name, slug, theme}) => {
    return (
        <LinkSwitch
            url={`marketplace/${slug}`}
            theme={{...genericCardStyle, ...theme}}
        >
            <Div theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}>
                <S3Image
                    url={photo}
                    alt={name}
                    theme={{...genericCardImageStyle, ...theme.image}}
                />
            </Div>

            <Div theme={{...genericCardNameStyle, ...theme.name}}>{name}</Div>
        </LinkSwitch>
    )
}

BusinessCard.defaultProps = {
    theme: {}
}

export default BusinessCard