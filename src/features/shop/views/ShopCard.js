import {AnimatePresence}           from 'framer-motion'
import React, {lazy, Suspense}     from 'react'
import Div                         from 'shared/Basic/Div'
import LinkSwitch                  from 'shared/Basic/LinkSwitch'
import MotionDiv                   from 'shared/Basic/MotionDiv'
import {
    genericCardImageStyle,
    genericCardNameStyle,
    genericCardPriceStyle,
    genericCardProductCategoryStyle,
    genericCardStyle,
    genericCardTextWrapperStyle
}                                  from 'shared/Cards/styles'
import {fadeIn, fadeOut, nOpacity} from 'shared/Layout/styles/animations'
import {getNameById}               from 'utils/helpers'


//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('shared/Basic/S3Img'))

const ShopCard = ({
                      photo,
                      name,
                      slug,
                      productCategory,
                      quantity,
                      productCategories,
                      price,
                      theme
                  }) =>
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
                    {/*{quantity && (*/}
                    {/*    <Span theme={{...genericCardQuantityStyle}}>qty: {quantity}</Span>*/}
                    {/*)}*/}
                </Div>
            </LinkSwitch>
        </MotionDiv>
    </AnimatePresence>


ShopCard.defaultProps = {
    theme: {}
}

export default ShopCard
