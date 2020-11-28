import React, {
    lazy,
    Suspense
}                 from 'react'
import LinkSwitch from '../Basic/LinkSwitch'
import MotionDiv  from '../Basic/MotionDiv'
import {
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle
}                 from './styles'

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('../Basic/S3Img'))

const GenericCard = ({photo, name, slug, theme, layoutId}) =>
    <MotionDiv>
        <LinkSwitch
            url={slug}
            theme={{...genericCardStyle, ...theme}}
        >
            {photo && (
                <MotionDiv theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <S3Img
                            url={photo}
                            alt={name}
                            theme={{...genericCardImageStyle, ...theme.image}}
                        />
                    </Suspense>
                </MotionDiv>
            )}

            <MotionDiv
                theme={{...genericCardNameStyle, ...theme.name}}
            >
                {name}
            </MotionDiv>
        </LinkSwitch>
    </MotionDiv>


GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard