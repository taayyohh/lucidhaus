import {placeCardStyle}     from 'features/place/styles'
import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from 'shared/Basic/Div'
import GenericCard           from 'shared/Cards/GenericCard'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import {placesWrapperStyle} from './styles'

const Places = () => {
    const {places} = useSelector(state => state.place)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'place/getPlaces'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        <ContentWrapper>
            <Div theme={placesWrapperStyle}>
                {places && places?.map(
                    place => place.isPublished && (
                        <GenericCard
                            key={place.slug}
                            slug={`places/${place.slug}`}
                            name={place.name}
                            photo={place.photo}
                            theme={placeCardStyle}
                        />
                    )
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places