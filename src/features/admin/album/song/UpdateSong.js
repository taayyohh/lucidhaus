import {
    songFields,
    validateSong
}                       from 'config/fields/song'
import React            from 'react'
import {
    useDispatch,
    useSelector
}                       from 'react-redux'
import Div              from 'shared/Basic/Div'
import Form             from 'shared/Field/Form'
import {songsFormStyle} from 'shared/Field/styles'

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


    return (
        <Form
            initialValues={initialValues}
            fields={songFields}
            validationSchema={validateSong}
            dispatchAction={'admin/addSongToAlbum'}
            formHeading={`${title}`}
            theme={songsFormStyle}
            buttonText={'Save'}
        >

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
        </Form>
    )
}

export default UpdateSong