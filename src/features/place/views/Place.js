import Review                      from 'features/place/admin/views/Review'
import {AnimatePresence}           from 'framer-motion'
import React, {useEffect}          from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import Div                         from 'shared/Basic/Div'
import MotionDiv                   from 'shared/Basic/MotionDiv'
import RichText                    from 'shared/Basic/RichText'
import ContentWrapper              from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity} from 'shared/Layout/styles/animations'
import Map                         from 'shared/Map'
import {history}                   from 'store'
import {debounce}                  from 'utils/helpers'
import {isEmpty}                   from 'utils/themer'
import Bookmark                    from './Bookmark'
import Reviews                     from './Reviews'
import {
    placeAddressStyle,
    placeDescriptionStyle,
    placeTitleStyle,
    placeWrapperBottomStyle,
    placeWrapperStyle,
    placeWrapperTopStyle,
    reviewHeadingStyle,
    reviewsHeadingWrapperStyle
}                                  from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {place, boonePlace, error} = useSelector(state => state.place)
    const {isAuthenticated, _id, token} = useSelector(state => state.user)
    const userSlug = useSelector(state => state.user.slug)

    const {
        name,
        description,
        reviews,
        longitude,
        latitude,
        photo,
        address1,
        address2,
        city,
        state,
        zip
    } = place
    const {slug} = useSelector(state => state.site)
    const placeId = slug.substr(slug.lastIndexOf('-') + 1)
    const hasNoReviews = !!reviews ? reviews?.filter(review => review.user[0] === _id).length < 1 : []

    const hasError = (response) => {
        switch (parseInt(response)) {
            case 410:
                return true
            case 500:
                return true
            default:
                return false
        }
    }

    const init = () => {
        dispatch({
            type: 'place/getBoonePlace',
            payload: {
                placeId: placeId
            }
        })

        dispatch({
            type: 'place/getPlace',
            payload: {
                slug: slug
            }
        })
    }

    useEffect(() => {
        init()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const boonePlaceRemoved = hasError(error?.boonePlace?.[0]?.status)
        const hasNoBoonePlace = hasError(error?.boonePlace?.status)
        const hasNoPlace = hasError(error?.place?.status)
        const hasBoonePlace = !isEmpty(boonePlace)

        if ((hasNoPlace && hasNoBoonePlace) || boonePlaceRemoved) {
            debounce(history.push(`/places`), 500)

            //TODO::add 404 error
        } else if (hasNoPlace && hasBoonePlace) {
            if (isAuthenticated) {
                dispatch({
                    type: 'place/createPlaceFromBoone',
                    payload: {
                        boonePlace: boonePlace,
                        _id: _id,
                        token: token,
                        slug: slug
                    }
                })
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])


    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: name,
                description,
                image: photo,
                imageAlt: `${name} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [place])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={placeWrapperStyle}>
                        <Div theme={placeWrapperTopStyle}>
                            <Div>
                                {(boonePlace.name || name) && (
                                    <MotionDiv theme={placeTitleStyle}>
                                        {boonePlace.name || name}
                                        <Bookmark
                                            place={place}
                                            _id={_id}
                                            token={token}
                                            userSlug={userSlug}
                                        />
                                    </MotionDiv>
                                )}
                                <Div theme={placeAddressStyle}>
                                    {(!!address1 && address1) || (!isEmpty(boonePlace) && boonePlace.locations?.[0].address1)}
                                    {(!!address1 ? ', ' : '')}
                                    {(!!address2 && address2 !== 'undefined') ? address2 : ''}
                                    {(!!address2 && address2 !== 'undefined') ? ', ' : ''}
                                    {(!!city && city) || (!isEmpty(boonePlace) && boonePlace.locations[0].city)}
                                    {(!!city ? ', ' : '')}
                                    {(!!state && state) || (!isEmpty(boonePlace) && boonePlace.locations[0].state)}
                                    {' '}
                                    {(!!zip && zip) || (!isEmpty(boonePlace) && boonePlace.locations[0].postal_code)}
                                    {' '}
                                    {/*{!!country && country}*/}
                                </Div>
                                {(description) && (
                                    <RichText
                                        children={description}
                                        theme={placeDescriptionStyle}
                                    />
                                )}
                            </Div>
                            <Map
                                lon={longitude || (!isEmpty(boonePlace) && boonePlace.locations[0].longitude)}
                                lat={latitude || (!isEmpty(boonePlace) && boonePlace.locations[0].latitude)}
                                theme={{height: 500, width: 500}}
                            />
                        </Div>
                        <Div theme={placeWrapperBottomStyle}>
                            {reviews?.length > 0 && (
                                <Div theme={reviewsHeadingWrapperStyle}>
                                    <Div theme={reviewHeadingStyle}>Reviews</Div>
                                    <Reviews reviews={reviews}/>
                                </Div>
                            )}
                            {(isAuthenticated && hasNoReviews) && (
                                <Review/>
                            )}
                        </Div>
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Place
