import React, {useEffect}           from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Form                         from 'shared/Fields/Form'
import ContentWrapper               from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper        from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {albumFields, validateAlbum} from '../fields'

const Create = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {artists} = useSelector(state => state.artist)
    const {albumCollaborators} = useSelector(state => state.collaborator)

    const initialValues = {
        _id: _id,
        token: token,
        albumName: '',
        primaryArtist: '',
        collaborators: '',
        coverArt: '',
        coverArtFile: '',
        description: '',
        songs: [],
        isPublished: false
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

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={albumFields}
                    validationSchema={validateAlbum}
                    options={options}
                    dispatchAction={'album/createAlbum'}
                    formHeading={'Create Album'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
