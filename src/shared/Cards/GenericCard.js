import {AnimatePresence} from 'framer-motion'
import React, {
    lazy,
    Suspense
}                        from 'react'
import Div               from 'shared/Basic/Div'
import LinkSwitch        from 'shared/Basic/LinkSwitch'
import MotionDiv         from 'shared/Basic/MotionDiv'
import RichText          from 'shared/Basic/RichText'
import {
    genericCardArtistNameStyle,
    genericCardPriceStyle,
    genericCardProductCategoryStyle
} from 'shared/Cards/styles'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                        from 'shared/Layout/styles/animations'
import {
    excerpt,
    getNameById
}                        from 'utils/helpers'
import {
    genericCardDescriptionStyle,
    genericCardImageStyle,
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle,
    genericCardTextWrapperStyle
}                        from './styles'

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('shared/Basic/S3Img'))

const GenericCard = ({photo, name, slug, description, productCategory, artist, productCategories, price, theme}) =>
    <AnimatePresence>
        <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
            <LinkSwitch
                url={slug}
                theme={{...genericCardStyle, ...theme}}
            >
                {photo && (
                    <MotionDiv
                        theme={{...genericCardImageWrapperStyle, ...theme.imageWrapper}}
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
                    {productCategories && (
                        <MotionDiv
                            theme={{...genericCardProductCategoryStyle, ...theme.productCategory}}
                            children={getNameById(productCategories, productCategory)}
                        />
                    )}
                    {artist && (
                        <MotionDiv
                            theme={{...genericCardArtistNameStyle, ...theme.artistName}}
                            children={artist}
                        />
                    )}
                    {name && (
                        <MotionDiv
                            theme={{...genericCardNameStyle, ...theme.name}}
                            children={name}
                        />
                    )}

                    {price && (
                        <MotionDiv
                            theme={{...genericCardPriceStyle, ...theme.price}}
                        >
                            {price}
                            <span>{' USD'}</span>
                        </MotionDiv>
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