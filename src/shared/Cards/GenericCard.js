import {AnimatePresence} from 'framer-motion'
import React, {
    lazy,
    Suspense
}                        from 'react'
import {excerpt}         from 'utils/helpers'
import Div               from 'shared/Basic/Div'
import LinkSwitch        from 'shared/Basic/LinkSwitch'
import MotionDiv         from 'shared/Basic/MotionDiv'
import RichText          from 'shared/Basic/RichText'
import {
    genericCardDescriptionStyle,
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle,
    genericCardTextWrapperStyle
} from './styles'

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('shared/Basic/S3Img'))

const GenericCard = ({photo, name, slug, description, theme, layoutId}) =>
    <AnimatePresence>
        <MotionDiv>
            <LinkSwitch
                url={slug}
                theme={{...genericCardStyle, ...theme}}
            >
                {photo && (
                    <MotionDiv
                        theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}
                        layoutId={!!layoutId ? `${layoutId}-image` : Math.random()}
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={{...genericCardImageStyle, ...theme.image}}
                            />
                        </Suspense>
                    </MotionDiv>
                )}
                <Div theme={{...genericCardTextWrapperStyle, ...theme.textWrapper}}>
                    {name && (
                        <MotionDiv
                            theme={{...genericCardNameStyle, ...theme.name}}
                            children={name}
                        />
                    )}
                    {description && (
                        <RichText
                            theme={{...genericCardDescriptionStyle, ...theme.description}}
                            children={excerpt(description)}
                        />
                    )}
                </Div>
            </LinkSwitch>
        </MotionDiv>
    </AnimatePresence>


GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard