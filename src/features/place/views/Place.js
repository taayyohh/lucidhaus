import Review                                   from 'features/place/admin/views/Review'
import {AnimatePresence}                        from 'framer-motion'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import Div                                      from 'shared/Basic/Div'
import LinkSwitch                               from 'shared/Basic/LinkSwitch'
import MotionDiv                                from 'shared/Basic/MotionDiv'
import RichText                                 from 'shared/Basic/RichText'
import S3Img                                    from 'shared/Basic/S3Img'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}              from 'shared/Layout/styles/animations'
import Map                                      from 'shared/Map'
import {history}                                from 'store'
import {debounce}                               from 'utils/helpers'
import {isEmpty}                                from 'utils/themer'
import Bookmark                                 from './Bookmark'
import Reviews                                  from './Reviews'
import {
    placeAddressStyle,
    placeDescriptionStyle,
    placeDescriptionWrapperStyle,
    placeMapStyle,
    placePhotoStyle,
    placeTaxonomyStyle,
    placeTaxonomyWrapperStyle,
    placeTitleStyle,
    placeWebsiteStyle,
    placeWrapperBottomStyle,
    placeWrapperStyle,
    placeWrapperTopStyle,
    reviewHeadingStyle,
    reviewsHeadingWrapperStyle
}                                               from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {placesIndex} = useContext(searchContext)
    const {
        place,
        boonePlace,
        createdFromBoone,
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
        description,
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

    }, [_id, reviews])

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


    }, [dispatch, place.bathrooms, place.businessOwner, place.categories, place.communitiesServed, place.foodOptions, place.languageSpoken])

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

    /* ---- Index Newly Added Boone Place in Algolia Search Index */
    useEffect(() => {
        if (createdFromBoone.length > 0) {
            placesIndex.saveObjects(createdFromBoone)
                .then(() => {
                    dispatch({
                        type: 'place/createPlaceFromBooneIndexSuccess'
                    })
                })
                .catch(error =>
                    dispatch({
                        type: 'site/setNotification',
                        payload: {notification: error}
                    })
                )
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createdFromBoone])


    const [userFlaggedReviews, setUserFlaggedReviews] = useState([])
    useEffect(() => {
        const flaggedReviews = reviews.filter(review => review.flaggedBy.length > 0)

        for (const flagged of flaggedReviews) {
            if (flagged.flaggedBy.includes(_id)) {
                setUserFlaggedReviews([...userFlaggedReviews, flagged.id])
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviews])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={placeWrapperStyle}>
                        <Div>
                            <Div>
                                {(boonePlace.name || name) && (
                                    <MotionDiv theme={placeTitleStyle}>
                                        <Div>{boonePlace.name || name}</Div>
                                        <Div theme={placeAddressStyle}>
                                            {(!!address1 && address1) || (!isEmpty(boonePlace) && boonePlace.locations?.[0].address1)}
                                            {(!!address1 ? ', ' : '')}
                                            {(!!address2 && address2 !== 'undefined') ? address2 : ''}
                                            {(!!address2 && address2 !== 'undefined') ? ', ' : ''}
                                            {(!!city && city) || (!isEmpty(boonePlace) && boonePlace.locations[0].city)}
                                            {(!!city ? ', ' : '')}
                                            {(!!state && state) || (!isEmpty(boonePlace) && boonePlace.locations[0].state)}
                                            {' '}
                                            {(!!zip && zip !== 'null' && zip) || (!isEmpty(boonePlace) && !!boonePlace.locations ? boonePlace.locations[0].postal_code : '')}
                                            {' '}
                                            {/*{!!country && country}*/}
                                        </Div>
                                        <Div>
                                            {website && website !== 'undefined' && (
                                                <LinkSwitch
                                                    url={website}
                                                    children={'Website'}
                                                    theme={placeWebsiteStyle}
                                                />
                                            )}
                                        </Div>

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
                            </Div>
                            <Div theme={placeDescriptionWrapperStyle}>
                                {(description) && (
                                    <RichText
                                        children={description}
                                        theme={placeDescriptionStyle}
                                    />
                                )}
                            </Div>


                            <Div theme={{display: 'flex', justifyContent: 'space-around'}}>
                                {!!photo && photo !== 'undefined' && (
                                    <S3Img
                                        url={photo}
                                        theme={placePhotoStyle}
                                        // theme={{borderRadius: 300}}
                                    />
                                )}
                                <Map
                                    lon={longitude || (!isEmpty(boonePlace) && boonePlace.locations[0].longitude)}
                                    lat={latitude || (!isEmpty(boonePlace) && boonePlace.locations[0].latitude)}
                                    theme={placeMapStyle}
                                />
                            </Div>

                            <Div>
                                <Div theme={placeWrapperTopStyle}>


                                    <Div theme={placeTaxonomyWrapperStyle}>
                                        {audioAvailable && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Audio Available:</Div>
                                                {audioAvailable ? 'True' : 'false'}
                                            </Div>
                                        )}
                                        {bathrooms.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Bathrooms:</Div>
                                                {bathrooms && bathrooms.map((bathroom, i) => (
                                                    <Div key={i}>
                                                        {bathroom.name}
                                                    </Div>
                                                ))}
                                            </Div>
                                        )}
                                        {braille && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}> Braille:</Div>
                                                {braille ? 'true' : 'false'}
                                            </Div>
                                        )}
                                        {brickAndMortar && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Brick & Mortar Establishment:
                                                </Div>
                                                {brickAndMortar ? 'true' : 'false'}
                                            </Div>
                                        )}
                                        {businessOwner.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Business Owner:
                                                </Div>
                                                {businessOwner && businessOwner.map((owner, i) => (
                                                    <Div key={i}>{owner.name}</Div>
                                                ))}
                                            </Div>
                                        )}
                                        {placeCategory.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Categories:
                                                </Div>
                                                {placeCategory && placeCategory.map((category, i) => (
                                                    <Div key={i}>{category.name}</Div>
                                                ))}
                                            </Div>
                                        )}
                                        {communitiesServed.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Communities Served:
                                                </Div>
                                                {communitiesServed && communitiesServed.map((community, i) => (
                                                    <Div key={i}>{community.name}</Div>
                                                ))}
                                            </Div>
                                        )}
                                        {foodOptions.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Food Options:
                                                </Div>
                                                {foodOptions && foodOptions.map((food, i) => (
                                                    <Div key={i}>{food.name}</Div>
                                                ))}
                                            </Div>
                                        )}

                                        {languageSpoken.length > 0 && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Languages Spoken in this space:
                                                </Div>
                                                {languageSpoken && languageSpoken.map((language, i) => (
                                                    <Div key={i}>{language.name}</Div>
                                                ))}
                                            </Div>
                                        )}
                                        {largeAdaptiveEquipment && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Adaptive Equipment:
                                                </Div>
                                                This space can accommodate large adaptive
                                                equipment!
                                            </Div>
                                        )}
                                        {onlyAccessibleByStairs && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Stairs:</Div>
                                                This space is only accessible by stairs
                                            </Div>
                                        )}
                                        {publicTransportation && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Public Transportation:</Div>
                                                This space is accessible by public
                                                transportation
                                            </Div>
                                        )}
                                        {signLanguageAccessible && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>
                                                    Sign Language:
                                                </Div>
                                                This space is sign language accessible
                                            </Div>
                                        )}
                                        {wheelchairElevator && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Wheelchair Elevator:</Div>
                                                <Div>A wheel chair elevator is accessible</Div>
                                            </Div>
                                        )}
                                        {wheelchairParking && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Wheelchair Parking:</Div>
                                                <Div>A wheel parking space is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRamps && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Wheelchair Ramps:</Div>
                                                <Div>A wheel ramp is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRestroom && (
                                            <Div theme={placeTaxonomyStyle}>
                                                <Div theme={placeTaxonomyStyle.title}>Wheelchair Restroom:</Div>
                                                <Div>A wheel parking restroom is available</Div>
                                            </Div>
                                        )}
                                    </Div>

                                </Div>


                            </Div>
                        </Div>
                        <Div theme={placeWrapperBottomStyle}>
                            {place.reviews?.length > 0 && (
                                <Div theme={reviewsHeadingWrapperStyle}>
                                    <Div theme={reviewHeadingStyle}>Reviews</Div>
                                    <Reviews
                                        reviewIds={place.reviews}
                                        userFlaggedReviews={userFlaggedReviews}
                                        placeSlug={slug}
                                    />
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
