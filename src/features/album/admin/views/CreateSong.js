import React                      from 'react'
import {useSelector}              from 'react-redux'
import Form                       from 'shared/Fields/Form'
import {songFields, validateSong} from '../fields/songs'
import {songsFormStyle}           from './styles'


const CreateSong = () => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const initialValues = {
        _id,
        token,
        slug,
        title: '',
        audio: '',
        audioFile: '',
        trackNumber: 1
    }

    return (
        <Form
            initialValues={initialValues}
            fields={songFields}
            validationSchema={validateSong}
            dispatchAction={'album/addSongToAlbum'}
            formHeading={'Create Song'}
            theme={songsFormStyle}
            buttonText={'Save'}
        />
    )
}

export default CreateSong
