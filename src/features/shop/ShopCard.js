import React      from 'react'
import Div        from '../../shared/Basic/Div'
import LinkSwitch from '../../shared/Basic/LinkSwitch'
import S3Img      from '../../shared/Basic/S3Img'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}                 from '../../themes/business'

const ShopCard = ({photo, name, slug, theme}) => {
    return (
        <LinkSwitch
            url={`marketplace/${slug}`}
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
}

ShopCard.defaultProps = {
    theme: {}
}

export default ShopCard