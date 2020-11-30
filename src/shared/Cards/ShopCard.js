import {AnimatePresence} from 'framer-motion'
import React, {
    lazy,
    Suspense
}                        from 'react'
import LinkSwitch        from '../Basic/LinkSwitch'
import MotionDiv         from '../Basic/MotionDiv'
import {
    genericCardImageWrapperStyle,
    genericCardNameStyle,
    genericCardStyle,
    shopCardImageStyle
}                        from './styles'

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('../Basic/S3Img'))

const ShopCard = ({photo, name, slug, price, theme, layoutId}) =>
    <AnimatePresence>
        <MotionDiv>
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
                                theme={{...shopCardImageStyle, ...theme.image}}
                            />
                        </Suspense>
                    </MotionDiv>
                )}

                <MotionDiv
                    theme={{...genericCardNameStyle, ...theme.name}}
                >
                    {name}
                </MotionDiv>
                {price && (
                    <MotionDiv
                        theme={{...genericCardNameStyle, ...theme.name}}
                    >
                        {price}
                    </MotionDiv>
                )}
            </LinkSwitch>
        </MotionDiv>
    </AnimatePresence>


ShopCard.defaultProps = {
    theme: {}
}

export default ShopCard