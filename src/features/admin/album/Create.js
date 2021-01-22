import {
    albumFields,
    validateAlbum
}                            from 'config/fields/album'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AddSong               from 'features/admin/album/song/Add'
import {addTrackButtonStyle} from 'features/admin/styles'
import React, {
    useEffect,
    useState
}                            from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from 'shared/Basic/Div'
import Form                  from 'shared/Field/Form'
import ContentWrapper        from 'shared/Layout/ContentWrapper'

const Create = () => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {artists} = useSelector(state => state.artist)
    const initialValues = {
        _id: _id,
        token: token,
        albumName: '',
        primaryArtist: '',
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
        }
    ]

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})

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
                    dispatchAction={'admin/createAlbum'}
                    formHeading={'Create Album'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create