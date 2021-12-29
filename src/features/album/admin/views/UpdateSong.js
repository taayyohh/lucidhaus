import React                      from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Form                       from 'shared/Fields/Form'
import {songFields, validateSong} from '../fields/songs'
import {songsFormStyle}           from './styles'

const UpdateSong = ({audio, audioId, title, trackNumber}) => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const initialValues = {
        _id,
        token,
        slug,
        title: title,
        audioId: audioId,
        audio: audio,
        audioFile: '',
        trackNumber: trackNumber
    }

    const DeleteSong = () =>
        <Div
            onClick={
                () => dispatch({
                    type: 'admin/destroySong',
                    payload: {
                        slug,
                        _id,
                        token,
                        audio,
                        audioId,
                        title,
                        trackNumber,
                        remove: true
                    }
                })}
        >
            Delete
        </Div>


    return (
        <Form
            initialValues={initialValues}
            fields={songFields}
            validationSchema={validateSong}
            dispatchAction={'album/addSongToAlbum'}
            formHeading={`${trackNumber}. ${title}`}
            theme={songsFormStyle}
            buttonText={'Save'}
            children={<DeleteSong />}
        />
    )
}

export default UpdateSong
