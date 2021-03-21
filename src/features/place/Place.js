import {placeImageWrapperStyle}                                    from 'features/place/styles'
import {AnimatePresence}                                           from 'framer-motion'
import React, {useEffect}                                          from 'react'
import {useDispatch, useSelector}                                  from 'react-redux'
import Div                                                         from 'shared/Basic/Div'
import MotionDiv                                                   from 'shared/Basic/MotionDiv'
import RichText                                                    from 'shared/Basic/RichText'
import S3Img                                                       from 'shared/Basic/S3Img'
import {genericCardImageStyle}                                     from 'shared/Cards/styles'
import ContentWrapper                                              from 'shared/Layout/ContentWrapper'
import {fadeIn, fadeOut, nOpacity}                                 from 'shared/Layout/styles/animations'
import LinkSwitch                                                  from '../../shared/Basic/LinkSwitch'
import {placeDescriptionStyle, placeTitleStyle, placeWrapperStyle} from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {place, boonePlace} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = place
    const placeId = slug.substr(slug.lastIndexOf('-') + 1)
    // const {
    //     alt_names,
    //     attribution,
    //     categories,
    //     contact_info,
    //     contact_infos,
    //     details,
    //     engagement,
    //     hours,
    //     icon,
    //     icon_url,
    //     id,
    //     images,
    //     locations,
    //     // name,
    //     open_now,
    //     owner_verified,
    //     parking_details,
    //     ranking_score,
    //     regions_hierarchy,
    //     restaurant_details,
    //     tags,
    // } = boonePlace


    useEffect(() => {
        dispatch({
            type: 'place/getPlace',
            payload: {slug: slug}
        })

        dispatch({
            type: 'place/getBoonePlace',
            payload: {
                placeId: placeId
            }
        })


        console.log('slug', slug)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

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
                        <Div theme={{display: 'flex', flexDirection: 'column'}}>
                            <LinkSwitch
                                url={boonePlace?.contact_info?.website}>{boonePlace?.contact_info?.website}</LinkSwitch>
                            <Div>{boonePlace?.contact_info?.phone}</Div>
                            {boonePlace?.locations && (
                                <Div>
                                    <Div>Locations:</Div>
                                    {boonePlace.locations.map((location) => (
                                        <Div key={location.address1}>
                                            {location?.address1}
                                            {}
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