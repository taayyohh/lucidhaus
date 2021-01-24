import {
    songFields,
    validateSong
}                       from 'config/fields/song'
import React            from 'react'
import {useSelector}    from 'react-redux'
import Form             from 'shared/Field/Form'
import {songsFormStyle} from 'shared/Field/styles'


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
            dispatchAction={'admin/addSongToAlbum'}
            formHeading={'Create Song'}
            theme={songsFormStyle}
            buttonText={'Save'}
        />
    )
}

export default CreateSong