import Review                       from 'features/place/admin/views/Review'
import {AnimatePresence}            from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                          from 'shared/Basic/Div'
import LinkSwitch                   from 'shared/Basic/LinkSwitch'
import MotionDiv                    from 'shared/Basic/MotionDiv'
import RichText                     from 'shared/Basic/RichText'
import ContentWrapper               from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}  from 'shared/Layout/styles/animations'
import Map                          from 'shared/Map'
import {history}                    from 'store'
import {debounce}                   from 'utils/helpers'
import {isEmpty}                    from 'utils/themer'
import Bookmark                     from './Bookmark'
import Reviews                      from './Reviews'
import {
    placeAddressStyle,
    placeDescriptionStyle,
    placeTaxonomyStyle,
    placeTitleStyle,
    placeWrapperBottomStyle,
    placeWrapperStyle,
    placeWrapperTopStyle,
    reviewHeadingStyle,
    reviewsHeadingWrapperStyle
}                                   from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {
        place,
        boonePlace,
        error,
        reviews,
        bathrooms,
        businessOwner,
        placeCategory,
        communitiesServed,
        foodOptions,
        languageSpoken
    } = useSelector(state => state.place)
    const {isAuthenticated, isVerified, _id, token} = useSelector(state => state.user)
    const userSlug = useSelector(state => state.user.slug)

    const {
        address1,
        address2,
        audioAvailable,
        braille,
        brickAndMortar,
        city,
        country,
        description,
        isRestaurant,
        largeAdaptiveEquipment,
        longitude,
        latitude,
        name,
        photo,
        onlyAccessibleByStairs,
        publicTransportation,
        signLanguageAccessible,
        state,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
        zip,
    } = place
    const {slug} = useSelector(state => state.site)
    const placeId = slug.substr(slug.lastIndexOf('-') + 1)
    const [hasNoReviews, setHasNoReviews] = useState(true)

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


    useEffect(() => {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const boonePlaceRemoved = hasError(error?.boonePlace?.[0]?.status)
        const hasNoBoonePlace = hasError(error?.boonePlace?.status)
        const hasNoPlace = hasError(error?.place?.status)
        const hasBoonePlace = !isEmpty(boonePlace)

        if ((hasNoPlace && hasNoBoonePlace) || boonePlaceRemoved) {
            debounce(history.push(`/places`), 500)
            //TODO::add 404 error, create a collection in db with ids of booneplaces that no longer exist

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

    //TODO: fix this
    useEffect(() => {
        setHasNoReviews(!reviews || reviews?.filter(review => review?.user === _id).length === 0)

    }, [reviews])

    useEffect(() => {
        place.bathrooms?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'bathroom',
                    feature: 'place'
                }
            })
        })
        place.businessOwner?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'business-owner',
                    feature: 'place'
                }
            })
        })
        place.categories?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'place-category',
                    feature: 'place'
                }
            })
        })
        place.communitiesServed?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'communities-served',
                    feature: 'place'
                }
            })
        })
        place.foodOptions?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'food-options',
                    feature: 'place'
                }
            })
        })
        place.languageSpoken?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'language-spoken',
                    feature: 'place'
                }
            })
        })

    }, [place.bathrooms, place.businessOwner, place.categories, place.communitiesServed, place.foodOptions, place.languageSpoken])

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
                                        {isVerified && (
                                            <Bookmark
                                                place={place}
                                                _id={_id}
                                                token={token}
                                                userSlug={userSlug}
                                            />
                                        )}
                                    </MotionDiv>
                                )}
                                <Div>
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
                                    {website && (
                                        <Div theme={placeTaxonomyStyle}>
                                            <LinkSwitch url={website} children={website}/>
                                        </Div>
                                    )}
                                    {(description) && (
                                        <RichText
                                            children={description}
                                            theme={placeDescriptionStyle}
                                        />
                                    )}
                                    <Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Audio Available:
                                            {audioAvailable ? 'true' : 'false'}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Bathrooms: {bathrooms && bathrooms.map((bathroom, i) => (
                                            <Div key={i}>{bathroom.name}</Div>
                                        ))}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Braille:
                                            {braille ? 'true' : 'false'}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Brick & Mortar Establishment:
                                            {brickAndMortar ? 'true' : 'false'}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            {businessOwner && businessOwner.map((owner, i) => (
                                                <Div key={i}>{owner.name}</Div>
                                            ))}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Categories:
                                            {placeCategory && placeCategory.map((category, i) => (
                                                <Div key={i}>{category.name}</Div>
                                            ))}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Communities Served:
                                            {communitiesServed && communitiesServed.map((community, i) => (
                                                <Div key={i}>{community.name}</Div>
                                            ))}
                                        </Div>
                                        <Div theme={placeTaxonomyStyle}>
                                            Food Options:
                                            {foodOptions && foodOptions.map((food, i) => (
                                                <Div key={i}>{food.name}</Div>
                                            ))}
                                        </Div>
                                        {isRestaurant && (
                                            <Div theme={placeTaxonomyStyle}>This is a restaurant</Div>
                                        )}
                                        <Div theme={placeTaxonomyStyle}>
                                            Languages Spoken in this space:
                                            {languageSpoken && languageSpoken.map((language, i) => (
                                                <Div key={i}>{language.name}</Div>
                                            ))}
                                        </Div>
                                        {largeAdaptiveEquipment && (
                                            <Div theme={placeTaxonomyStyle}>
                                                Adaptive Equipment:
                                                This space can accommodate large adaptive
                                                equipment!
                                            </Div>
                                        )}
                                        {onlyAccessibleByStairs && (
                                            <Div theme={placeTaxonomyStyle}>
                                                Stairs: This space is only accessible by stairs
                                            </Div>
                                        )}
                                        {publicTransportation && (
                                            <Div theme={placeTaxonomyStyle}>
                                                Public Transportation: This space is accessible by public
                                                transportation
                                            </Div>
                                        )}
                                        {signLanguageAccessible && (
                                            <Div theme={placeTaxonomyStyle}>
                                                Sign Language: This space is sign language accessible
                                            </Div>
                                        )}
                                        {wheelchairElevator && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div>Wheelchair Elevator:</Div>
                                                <Div>A wheel chair elevator is accessible</Div>
                                            </Div>
                                        )}
                                        {wheelchairParking && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div>Wheelchair Parking:</Div>
                                                <Div>A wheel parking space is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRamps && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div>Wheelchair Ramps:</Div>
                                                <Div>A wheel ramp is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRestroom && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div>Wheelchair Restroom:</Div>
                                                <Div>A wheel parking restroom is available</Div>
                                            </Div>
                                        )}
                                    </Div>

                                </Div>


                            </Div>
                            <Map
                                lon={longitude || (!isEmpty(boonePlace) && boonePlace.locations[0].longitude)}
                                lat={latitude || (!isEmpty(boonePlace) && boonePlace.locations[0].latitude)}
                                theme={{height: 500, width: 500}}
                            />
                        </Div>
                        <Div theme={placeWrapperBottomStyle}>
                            {place.reviews?.length > 0 && (
                                <Div theme={reviewsHeadingWrapperStyle}>
                                    <Div theme={reviewHeadingStyle}>Reviews</Div>
                                    <Reviews reviewIds={place.reviews}/>
                                </Div>
                            )}
                            {(isAuthenticated && isVerified && hasNoReviews) && (
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
