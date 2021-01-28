import {
    albumFields,
    validateAlbum
}                              from 'config/fields/album'
import AdminDashboardWrapper   from 'features/admin/AdminDashboardWrapper'
import CreateSong              from 'features/admin/album/song/CreateSong'
import UpdateSong              from 'features/admin/album/song/UpdateSong'
import {
    adminFormSongWrapperStyle,
    adminFormWrapperStyle
} from 'features/admin/styles'
import React, {
    useContext,
    useEffect
}                              from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Div                     from 'shared/Basic/Div'
import {searchContext}         from 'shared/Containers/SearchController'
import DangerZone     from 'shared/Controls/DangerZone'
import Form           from 'shared/Fields/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {album} = useSelector(state => state.album)
    const {artists} = useSelector(state => state.artist)
    const {albumName, description, primaryArtist, coverArt, songs, isPublished} = album
    const {albumsIndex} = useContext(searchContext)

    const initialValues = {
        albumName: albumName,
        description: description,
        primaryArtist: primaryArtist,
        coverArt: coverArt,
        songs: songs,
        isPublished: isPublished,
        slug,
        _id,
        token,
    }

    const options = [
        {
            name: 'primaryArtist',
            options: artists
        }
    ]

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'album/getAlbum',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={albumFields}
                    validationSchema={validateAlbum}
                    dispatchAction={'admin/updateAlbum'}
                    formHeading={'Update Album'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                    options={options}
                >
                    <Div theme={adminFormSongWrapperStyle}>
                        {album.songs && album.songs.map(s => (
                            <UpdateSong
                                key={s.audio}
                                audioId={s._id}
                                audio={s.audio}
                                title={s.title}
                                trackNumber={s.trackNumber}
                            />
                        ))}
                    </Div>
                </Form>


                <CreateSong/>
                <DangerZone
                    key={album.objectID}
                    attemptDestroyAction={'admin/attemptDestroyAlbum'}
                    destroyAction={'admin/destroyAlbum'}
                    slug={slug}
                    objectID={album.objectID}
                    index={albumsIndex}
                    type={'album'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update