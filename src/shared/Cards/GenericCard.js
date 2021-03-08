import {AnimatePresence} from 'framer-motion'
import React, {
    lazy,
    Suspense
}                        from 'react'
import Div               from 'shared/Basic/Div'
import LinkSwitch        from 'shared/Basic/LinkSwitch'
import MotionDiv         from 'shared/Basic/MotionDiv'
import RichText          from 'shared/Basic/RichText'
import Span              from 'shared/Basic/Span'
import {
    genericCardPlaceNameStyle,
    genericCardPlaceWrapperStyle,
    genericCardPriceStyle,
    genericCardProductCategoryStyle,
    genericCardQuantityStyle
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
    genericCardNameStyle,
    genericCardStyle,
    genericCardTextWrapperStyle
}                        from './styles'

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('shared/Basic/S3Img'))

const GenericCard = ({photo, name, slug, description, placeName, collaborators, productCategory, quantity, place, productCategories, price, theme}) =>
    <AnimatePresence>
        <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
            <LinkSwitch
                url={slug}
                theme={{...genericCardStyle, ...theme}}
            >
                {photo && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <S3Img
                            url={photo}
                            alt={name}
                            theme={{...genericCardImageStyle, ...theme.image}}
                        />
                    </Suspense>
                )}

                <Div theme={{...genericCardTextWrapperStyle, ...theme.textWrapper}}>
                    {productCategories && (
                        <MotionDiv
                            theme={{...genericCardProductCategoryStyle, ...theme.productCategory}}
                            children={getNameById(productCategories, productCategory)}
                        />
                    )}
                    <Div theme={genericCardPlaceWrapperStyle}>
                        {place && (
                            <MotionDiv
                                theme={{...genericCardPlaceNameStyle, ...theme.placeName}}
                                children={place}
                            />
                        )}
                        {collaborators && (
                            <MotionDiv
                                theme={{...genericCardPlaceNameStyle, ...theme.placeName}}
                                children={collaborators}
                            />
                        )}
                    </Div>
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
                    {quantity && (
                        <Span theme={{...genericCardQuantityStyle}}>qty: {quantity}</Span>
                    )}
                    {placeName && (
                        <Span>{placeName}</Span>
                    )}
                </Div>
            </LinkSwitch>
        </MotionDiv>
    </AnimatePresence>


GenericCard.defaultProps = {
    theme: {}
}

export default GenericCard