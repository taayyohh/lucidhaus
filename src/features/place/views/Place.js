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
import LinkSwitch                  from '../../../shared/Basic/LinkSwitch'
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
    const {place, boonePlace, error, reviews} = useSelector(state => state.place)
    const {isAuthenticated, isVerified, _id, token} = useSelector(state => state.user)
    const userSlug = useSelector(state => state.user.slug)

    const {
        address1,
        address2,
        audioAvailable,
        bathrooms,
        braille,
        brickAndMortar,
        businessOwner,
        categories,
        city,
        communitiesServed,
        country,
        description,
        foodOptions,
        isRestaurant,
        languageSpoken,
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
        zip
    } = place
    const {slug} = useSelector(state => state.site)
    const placeId = slug.substr(slug.lastIndexOf('-') + 1)
    const hasNoReviews = !!reviews.length > 0 ? reviews?.filter(review => review?.user === _id).length < 1 : []

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
                                    <Div>
                                        <Div>Audio Available: {audioAvailable ? 'true' : 'false'}</Div>
                                        <Div>Bathrooms: {bathrooms && bathrooms.map((bathroom) => (
                                            <Div>{bathroom}</Div>
                                        ))}
                                        </Div>
                                        <Div>Braille: {braille? 'true' : 'false'}</Div>
                                        <Div>Brick & Mortar Establishment: {brickAndMortar ? 'true' : 'false'}</Div>
                                        <Div>
                                            {businessOwner && businessOwner.map((owner) => (
                                                <Div>{owner.name}</Div>
                                            ))}
                                        </Div>
                                        <Div>
                                            Categories:
                                            {categories && categories.map((category) => (
                                                <Div>{category}</Div>
                                            ))}
                                        </Div>
                                        <Div>
                                            Communities Served:
                                            {communitiesServed && communitiesServed.map((community) => (
                                                <Div>{community}</Div>
                                            ))}
                                        </Div>
                                        <Div>
                                            Food Options:
                                            {foodOptions && foodOptions.map((food) => (
                                                <Div>{food}</Div>
                                            ))}
                                        </Div>
                                        {isRestaurant && (
                                            <Div>This is a restaurant</Div>
                                        )}
                                        <Div>
                                            Languages Spoken in this space:
                                            {languageSpoken && languageSpoken.map((language) => (
                                                <Div>{language}</Div>
                                            ))}
                                        </Div>
                                        {largeAdaptiveEquipment && (
                                            <Div>Adaptive Equipment: This space can accommodate large adaptive equipment!</Div>
                                        )}
                                        {onlyAccessibleByStairs && (
                                            <Div>Stairs: This space is only accessible by stairs</Div>
                                        )}
                                        {publicTransportation && (
                                            <Div>Public Transportation: This space is accessible by public transportation</Div>
                                        )}
                                        {signLanguageAccessible && (
                                            <Div>Sign Language: This space is sign language accessible</Div>
                                        )}
                                        {website && (
                                            <LinkSwitch url={website} children={website} />
                                        )}
                                        {wheelchairElevator && (
                                            <Div>
                                                <Div>Wheelchair Elevator:</Div>
                                                <Div>A wheel chair elevator is accessible</Div>
                                            </Div>
                                        )}
                                        {wheelchairParking && (
                                            <Div>
                                                <Div>Wheelchair Parking:</Div>
                                                <Div>A wheel parking space is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRamps && (
                                            <Div>
                                                <Div>Wheelchair Ramps:</Div>
                                                <Div>A wheel ramp is available</Div>
                                            </Div>
                                        )}
                                        {wheelchairRestroom && (
                                            <Div>
                                                <Div>Wheelchair Restroom:</Div>
                                                <Div>A wheel parking restroom is available</Div>
                                            </Div>
                                        )}
                                    </Div>

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
