import React      from 'react'
import Div        from '../../Basic/Div'
import S3Image    from '../../Shop/S3Image'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}                 from '../../themes/business'
import LinkSwitch from '../Basic/LinkSwitch'

const GenericCard = ({photo, name, slug, theme}) => {
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

GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard