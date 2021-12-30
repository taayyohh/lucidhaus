import Bookmark                                 from 'features/place/views/Place/Bookmark'
import {AnimatePresence}                        from 'framer-motion'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import Div                                      from 'shared/Basic/Div'
import MotionDiv                                from 'shared/Basic/MotionDiv'
import {menuPanelContext}                       from 'shared/Containers/MenuPanelController'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}              from 'shared/Layout/styles/animations'
import {history}                                from 'store'
import {debounce}                               from 'utils/helpers'
import {isEmpty}                                from 'utils/themer'
import {
    placeInnerLeftWrapperStyle,
    placeMarqueeStyle,
    placeTaxonomyStyle,
    placeTaxonomyWrapperStyle,
    placeWrapperStyle,
    reviewHeadingStyle,
    reviewsHeadingWrapperStyle
}                                               from '../styles'
import Description                              from './Description'
import PlaceSidebar                             from './PlaceSidebar'
import Rating                                   from './Rating'
import Reviews                                  from './Reviews'
import Title                                    from './Title'

const Place = () => {
    const {setPanel} = useContext(menuPanelContext)
    const dispatch = useDispatch()
    const {placesIndex} = useContext(searchContext)
    const {
        addReviewSuccess,
        place,
        boonePlace,
        createdFromBoone,
        error,
        reviews,
        bathrooms,
        placeCategory,
        placeLoaded,
        communitiesServed,
        foodOptions,
        languageSpoken
    } = useSelector(state => state.place)
    const {isAuthenticated, isVerified, _id, token} = useSelector(state => state.user)
    const userSlug = useSelector(state => state.user.slug)

    const {
        audioAvailable,
        braille,
        description,
        geojson,
        largeAdaptiveEquipment,
        name,
        photo,
        onlyAccessibleByStairs,
        publicTransportation,
        signLanguageAccessible,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
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
    }, [slug, placeId])


    /**
     Add Boone Place Resource to InclusiveGuide Database
     **/
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, reviews])

    useEffect(() => {
        if (placeLoaded) {
            place?.bathrooms?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'bathroom',
                        feature: 'place'
                    }
                })
            })
            place?.businessOwner?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'business-owner',
                        feature: 'place'
                    }
                })
            })
            place?.categories?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'place-category',
                        feature: 'place'
                    }
                })
            })
            place?.communitiesServed?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'communities-served',
                        feature: 'place'
                    }
                })
            })
            place?.foodOptions?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'food-options',
                        feature: 'place'
                    }
                })
            })
            place?.languageSpoken?.forEach(_id => {
                dispatch({
                    type: 'site/getEntityById',
                    payload: {
                        entityId: _id,
                        path: 'language-spoken',
                        feature: 'place'
                    }
                })
            })

            dispatch({type: 'place/taxonomyLoaded'})
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [placeLoaded])

    useEffect(() => {
        if (addReviewSuccess) {
            setPanel(null)
            dispatch({type: 'place/closeReviewPanel'})
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addReviewSuccess])

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

        setTimeout(() => {
            if (!!place._id) {
                placesIndex.saveObject(place)
                    .then(() => {
                    })
                    .catch(error =>
                        console.log('error', error)
                    )
            }


            if (!!place._id) {
                dispatch({
                    type: 'place/addToViewCount',
                    payload: {
                        placeId: place._id,
                        viewedAt: Date.now(),
                        _id,
                        token
                    }
                })
            }
        }, 5000)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [place])

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    /**
     *
     * Index Newly Added Boone Place in Algolia Search Index
     *
     **/
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
        const flaggedReviews = reviews.filter(review => review?.report.length > 0)

        for (const flagged of flaggedReviews) {
            if (flagged?.report.filter(flag => flag.flaggedBy)) {
                setUserFlaggedReviews([...userFlaggedReviews, flagged.id])
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviews])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper theme={{width: '100%'}}>
                    <Div theme={placeMarqueeStyle(place.photo)}>
                        {isVerified && (
                            <Bookmark
                                place={place}
                                _id={_id}
                                token={token}
                                userSlug={userSlug}
                            />
                        )}
                    </Div>
                    <MotionDiv theme={placeWrapperStyle}>
                        <Div theme={placeInnerLeftWrapperStyle}>
                            <Title
                                boonePlace={boonePlace}
                                name={name}
                            />
                            <Div theme={{display: 'flex', flexDirection: 'column'}}>
                                <Rating
                                    reviews={reviews}
                                    place={place}
                                />
                            </Div>
                            {(description || place?.geojson?.[0]?.properties?.description) && (
                                <Description description={description || place?.geojson?.[0]?.properties?.description}/>
                            )}

                            <Div theme={placeTaxonomyWrapperStyle}>
                                {audioAvailable && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Audible Signage</Div>
                                        <Div theme={placeTaxonomyStyle.name}>
                                            This location is equipped audible signage.
                                        </Div>
                                    </Div>
                                )}
                                {bathrooms.length > 0 && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Bathrooms</Div>
                                        {bathrooms && bathrooms.map((bathroom, i) => (
                                            <Div key={i} theme={placeTaxonomyStyle.name}>
                                                {bathroom.name}
                                            </Div>
                                        ))}
                                    </Div>
                                )}
                                {braille && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}> Braille</Div>
                                        <Div theme={placeTaxonomyStyle.name}>
                                            This location is equipped braille signage.
                                        </Div>
                                    </Div>
                                )}
                                {communitiesServed.length > 0 && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>
                                            Affinity Space
                                        </Div>
                                        {communitiesServed && communitiesServed.map((community, i) => (
                                            <Div key={i} theme={placeTaxonomyStyle.name}>{community.name}</Div>
                                        ))}
                                    </Div>
                                )}
                                {foodOptions.length > 0 && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>
                                            Food Options
                                        </Div>
                                        {foodOptions && foodOptions.map((food, i) => (
                                            <Div key={i} theme={placeTaxonomyStyle.name}>{food.name}</Div>
                                        ))}
                                    </Div>
                                )}

                                {languageSpoken.length > 0 && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>
                                            Languages Spoken in this space
                                        </Div>
                                        {languageSpoken && languageSpoken.map((language, i) => (
                                            <Div key={i} theme={placeTaxonomyStyle.name}>{language.name}</Div>
                                        ))}
                                    </Div>
                                )}
                                {largeAdaptiveEquipment && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>
                                            Large Adaptive Equipment
                                        </Div>
                                        <Div theme={placeTaxonomyStyle.name}>
                                            This space can accommodate large adaptive
                                            equipment
                                        </Div>
                                    </Div>
                                )}

                                {onlyAccessibleByStairs && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Stairs</Div>
                                        <Div theme={placeTaxonomyStyle.name}>This space is only accessible by
                                            stairs</Div>
                                    </Div>
                                )}
                                {publicTransportation && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Public Transportation</Div>
                                        <Div theme={placeTaxonomyStyle.name}>This space is accessible by public
                                            transportation</Div>
                                    </Div>
                                )}
                                {signLanguageAccessible && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>
                                            Sign Language
                                        </Div>
                                        <Div theme={placeTaxonomyStyle.name}>This space is sign language
                                            accessible</Div>
                                    </Div>
                                )}
                                {wheelchairElevator && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Wheelchair Elevator</Div>
                                        <Div theme={placeTaxonomyStyle.name}>A wheel chair elevator is accessible</Div>
                                    </Div>
                                )}
                                {wheelchairParking && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Wheelchair Parking</Div>
                                        <Div theme={placeTaxonomyStyle.name}>A wheel parking space is available</Div>
                                    </Div>
                                )}
                                {wheelchairRamps && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Wheelchair Ramps</Div>
                                        <Div theme={placeTaxonomyStyle.name}>A wheel ramp is available</Div>
                                    </Div>
                                )}
                                {wheelchairRestroom && (
                                    <Div theme={placeTaxonomyStyle}>
                                        <Div theme={placeTaxonomyStyle.title}>Wheelchair Restroom</Div>
                                        <Div theme={placeTaxonomyStyle.name}>A wheel parking restroom is available</Div>
                                    </Div>
                                )}
                            </Div>


                            {place.reviews?.length > 0 && (
                                <Div theme={reviewsHeadingWrapperStyle}>
                                    <Div theme={reviewHeadingStyle}>What {place.reviews.length} people are saying</Div>
                                    <Reviews
                                        reviewIds={place.reviews}
                                        userFlaggedReviews={userFlaggedReviews}
                                    />
                                </Div>
                            )}
                        </Div>
                        <PlaceSidebar
                            boonePlace={boonePlace}
                            geojson={geojson}
                            hasNoReviews={hasNoReviews}
                            isAuthenticated={isAuthenticated}
                            isVerified={isVerified}
                            placeCategory={placeCategory}
                            website={website}
                        />
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Place
