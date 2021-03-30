import {placeImageWrapperStyle}                                    from 'features/place/styles'
import {AnimatePresence}                                           from 'framer-motion'
import React, {useEffect}                                          from 'react'
import {useDispatch, useSelector}                                  from 'react-redux'
import {history}                                                   from 'redux/store'
import Div                                                         from 'shared/Basic/Div'
import LinkSwitch                                                  from 'shared/Basic/LinkSwitch'
import MotionDiv                                                   from 'shared/Basic/MotionDiv'
import RichText                                                    from 'shared/Basic/RichText'
import S3Img                                                       from 'shared/Basic/S3Img'
import {genericCardImageStyle}                                     from 'shared/Cards/styles'
import ContentWrapper                                              from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}                                 from 'shared/Layout/styles/animations'
import Map                                                         from 'shared/Map'
import {isEmpty}                                                   from 'utils/themer'
import {placeDescriptionStyle, placeTitleStyle, placeWrapperStyle} from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {place, boonePlace, error} = useSelector(state => state.place)
    const {name, description, photo} = place
    const {slug} = useSelector(state => state.site)
    const placeId = slug.substr(slug.lastIndexOf('-') + 1)
    const hasNoPlace = error.place?.status === 400
    const hasNoBoonePlace = error.boonePlace?.status === 500

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
                placeId: placeId
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (hasNoPlace && hasNoBoonePlace) {
            history.push(`/places`)
            console.log('truly doesnnt exist')
        } else if (!hasNoPlace && !isEmpty(boonePlace)) {
            console.log('allow auth user to create boone place')
        }


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
                        {(name || boonePlace?.name) && (
                            <MotionDiv theme={placeTitleStyle}>
                                {name || boonePlace?.name}
                            </MotionDiv>
                        )}
                        {description || boonePlace?.description && (
                            <Div>{description || boonePlace?.description}</Div>
                        )}
                        <Div theme={{display: 'flex', flexDirection: 'column'}}>
                            {boonePlace?.contact_info && (
                                <>
                                    {boonePlace?.contact_info?.website && (
                                        <LinkSwitch url={boonePlace?.contact_info?.website}>
                                            {boonePlace?.contact_info?.website}
                                        </LinkSwitch>
                                    )}
                                    <Div>
                                        {boonePlace?.contact_info?.phone}
                                    </Div>
                                </>
                            )}

                            {boonePlace?.locations && (
                                <Div>
                                    <Div>Locations:</Div>
                                    {boonePlace.locations.map((location) => (
                                        <Div key={location.address1}>
                                            <Div>Address: {location?.address1}</Div>
                                            <Div>City: {location?.city}</Div>
                                            <Div>Country: {location?.country}</Div>
                                            <Div>Latitude: {location?.latitude}</Div>
                                            <Div>Longitude: {location?.longitude}</Div>
                                            <Div>Navigable: {location?.navigable}</Div>
                                            <Div>Postal Code: {location?.postal_code}</Div>
                                            <Div>State: {location?.state}</Div>
                                            <Div>Timezone: {location?.timezone}</Div>
                                            <Map
                                                lon={location?.longitude}
                                                lat={location?.latitude}
                                                theme={{height: 500, width: 500}}
                                            />
                                        </Div>
                                    ))}
                                </Div>
                            )}
                        </Div>


                        <Div theme={placeImageWrapperStyle}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
                        </Div>
                        <RichText
                            children={description}
                            theme={placeDescriptionStyle}
                        />
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Place