import React      from 'react'
import Div        from '../../Basic/Div'
import StyledLink from '../../Basic/StyledLink'
import S3Image    from '../../Shop/S3Image'
import {
    businessCardImageStyle,
    businessCardImageWrapperStyle,
    businessCardNameStyle,
    businessCardStyle
} from '../../themes/business'

const BusinessCard = ({photo, name, slug, theme}) => {
    return (
        <StyledLink
            to={`marketplace/${slug}`}
            theme={{...businessCardStyle, ...theme}}
        >
            <Div theme={{...businessCardImageWrapperStyle, ...theme.imageWrapper}}>
                <S3Image
                    url={photo}
                    alt={name}
                    theme={{...businessCardImageStyle, ...theme.image}}
                />
            </Div>

            <Div theme={{...businessCardNameStyle, ...theme.name}}>{name}</Div>
        </StyledLink>
    )
}

BusinessCard.defaultProps = {
    theme: {}
}

export default BusinessCard