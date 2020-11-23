import React, {memo} from 'react'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}                    from '../../themes/business'
import LinkSwitch    from '../Basic/LinkSwitch'
import MotionDiv     from '../Basic/MotionDiv'
import S3Img         from '../Basic/S3Img'

const GenericCard = memo(({photo, name, slug, theme, layoutId}) => {
    return (
        <MotionDiv layoutId={`${layoutId}-wrapper`}>
            <LinkSwitch
                url={slug}
                theme={{...genericCardStyle, ...theme}}
            >
                {photo && (
                    <MotionDiv
                        theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}
                        layoutId={`${layoutId}-image`}
                    >
                        <S3Img
                            url={photo}
                            alt={name}
                            theme={{...genericCardImageStyle, ...theme.image}}
                        />
                    </MotionDiv>
                )}

                <MotionDiv
                    theme={{...genericCardNameStyle, ...theme.name}}
                >
                    {name}
                </MotionDiv>
            </LinkSwitch>
        </MotionDiv>
    )
})

GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard