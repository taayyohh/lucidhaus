import {placeCardStyle, placeContentWrapperStyle, placeDetailStyle} from 'features/place/views/styles'
import React, {useEffect, useState}                                 from 'react'
import {useDispatch, useSelector}                                   from 'react-redux'
import Div                                                          from 'shared/Basic/Div'
import GenericCard                                                  from 'shared/Cards/GenericCard'
import ContentWrapper                                               from 'shared/Layout/ContentWrapper'
import {slugify, unslugify}                                         from 'utils/helpers'
import NoResults                                                    from './NoResults'
import Search                                                       from './Search'
import {placesWrapperStyle}                                         from './styles'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places, noResults} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)
    const dispatch = useDispatch()
    const [allPlaces, setAllPlaces] = useState([])

    useEffect(() => {
        setAllPlaces(
            !boonePlaces?.data
                ? [...algoliaPlaces]
                : [...algoliaPlaces, ...boonePlaces?.data]
                    .reduce(function (accumulator = [], currentValue) {
                        if (!currentValue.isPendingSubmission)
                            if (currentValue.type === 'place') {
                                accumulator.push(currentValue)
                            } else if (accumulator.filter(place =>
                                !!place.booneId
                                && (place.booneId === currentValue?.id)).length === 0) {
                                accumulator.push(currentValue)
                            }

                        return accumulator
                    }, [])
        )

    }, [algoliaPlaces, boonePlaces])


    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Places',
                description: 'The places description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])

    return (
        <ContentWrapper theme={placeContentWrapperStyle}>
            <Div>
                <Div>
                    <Search/>
                    {(slug !== 'places' && (
                        <Div>
                            Search results for: {slug ? unslugify(slug) : ''}
                        </Div>
                    ))}
                    <Div theme={placeDetailStyle}>
                        By reviewing businesses, you help other members of your
                        community know where you felt safe, welcomed, and celebrated!
                        It’s a win/win way to celebrate the businesses that celebrate
                        you as well as to provide local resources to your friends and neighbors.
                    </Div>
                </Div>

                <Div theme={placesWrapperStyle}>
                    {allPlaces.length > 0 && allPlaces.map((place) => {
                        if (!!place.uuid) { // if place does not exist in Inclusive Guide database


                            const address1 = !!place?.locations[0]?.address1 ? `${place?.locations[0]?.address1}` : ''
                            const city = !!place.locations[0].city ? `, ${place.locations[0].city}` : ''
                            const state = !!place.locations[0].state ? `, ${place.locations[0].state}` : ''
                            const zip = !!place.locations[0].postal_code ? `, ${place.locations[0].postal_code}` : ''
                            const composedAddress = `${address1}${city}${state}${zip}`

                            const slug = `${slugify(place.name)}-${
                                place?.locations[0].length > 0 ?
                                    slugify(place?.locations[0]?.address1) : ''}-${place.id}`

                            return (
                                <GenericCard
                                    key={slug}
                                    slug={`/places/${place.id}`}
                                    name={place.name}
                                    address={composedAddress}
                                    theme={placeCardStyle}
                                />
                            )
                        } else {
                            const address1 = !!place?.address1 ? `${place?.address1}` : ''
                            // const address2 = !!place?.address2 ? place?.address2 : ''
                            const city = !!place.city ? `, ${place.city}` : ''
                            const state = !!place.state ? `, ${place.state}` : ''
                            const zip = !!place.postal_code ? place.postal_code : ''
                            const composedAddress = `${address1}${city}${state}${zip}`


                            return (
                                <GenericCard
                                    key={place.slug}
                                    slug={`/places/${place.slug}`}
                                    name={place.name}
                                    address={composedAddress}
                                    theme={{...placeCardStyle}}
                                />
                            )
                        }
                    })}
                </Div>
                {noResults.boone && noResults.algolia && (
                    <NoResults/>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
