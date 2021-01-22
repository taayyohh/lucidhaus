import {
    NUMBER,
    TEXT,
    UPLOAD_PATHS
}                     from 'config'
import {AUDIO_UPLOAD} from 'config/index'
import * as Yup       from 'yup'

export const songFields = [
    {
        inputLabel: 'Audio File',
        name: 'audio',
        file: 'audioFile',
        s3Path: UPLOAD_PATHS.audio,
        type: AUDIO_UPLOAD,
    },
    {
        name: 'title',
        inputLabel: 'Song Title',
        type: TEXT
    },
    {
        name: 'trackNumber',
        inputLabel: 'Track Number',
        type: NUMBER
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateSong = Yup.object().shape({
    audio: Yup
        .string()
        .required('Required'),
    title: Yup
        .string()
        .max(250)
        .required('Required'),
})