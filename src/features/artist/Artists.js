import {artistCardStyle}     from 'features/artist/styles'
import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from 'shared/Basic/Div'
import GenericCard           from 'shared/Cards/GenericCard'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import {artistsWrapperStyle} from './styles'

const Artists = () => {
    const {artists} = useSelector(state => state.artist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Artists',
                description: 'The artists description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artists])

    return (
        <ContentWrapper>
            <Div theme={artistsWrapperStyle}>
                {artists && artists?.map(
                    artist => artist.isPublished && (
                        <GenericCard
                            key={artist.slug}
                            slug={`artists/${artist.slug}`}
                            name={artist.name}
                            photo={artist.photo}
                            description={artist.description}
                            theme={artistCardStyle}
                        />
                    )
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Artists