import React, {useContext, useEffect}                     from 'react'
import {useDispatch, useSelector}                         from 'react-redux'
import Div                                                from 'shared/Basic/Div'
import {searchContext}                                    from 'shared/Containers/SearchController'
import DangerZone                                         from 'shared/Controls/DangerZone'
import Form                                               from 'shared/Fields/Form'
import ContentWrapper                                     from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                              from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormSongWrapperStyle, adminFormWrapperStyle} from 'shared/Layout/Dashboard/admin/styles'
import {userContentWrapperStyle}                          from '../../../user/admin/views/styles'
import {albumFields, validateAlbum}                       from '../fields'
import CreateSong                                         from './CreateSong'
import UpdateSong                                         from './UpdateSong'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {album} = useSelector(state => state.album)
    const {artists} = useSelector(state => state.artist)
    const {albumCollaborators} = useSelector(state => state.collaborator)
    const {albumName, description, collaborators, primaryArtist, coverArt, songs, isPublished} = album
    const {albumsIndex} = useContext(searchContext)

    const initialValues = {
        albumName: albumName,
        description: description,
        primaryArtist: primaryArtist,
        collaborators: collaborators,
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
        },
        {
            name: 'collaborators',
            options: albumCollaborators
        }
    ]

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})
        dispatch({type: 'collaborator/getCollaborators'})


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
        <ContentWrapper theme={userContentWrapperStyle}>
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
                />
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

                <CreateSong/>
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
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
