import {
    IMAGE_UPLOAD,
    RICH_TEXT,
    SELECT,
    TEXT,
    TOGGLE,
    UPLOAD_PATHS
}               from 'config'
import * as Yup from 'yup'

export const albumFields = [
    {
        name: 'coverArt',
        file: 'coverArtFile',
        inputLabel: 'Cover Art',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.audioCoverArt,
        type: IMAGE_UPLOAD,
    },
    {
        name: 'albumName',
        inputLabel: 'Album Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Album Description',
        type: RICH_TEXT
    },
    {
        name: 'primaryArtist',
        inputLabel: 'Primary Artist',
        type: SELECT
    },
    {
        name: 'isPublished',
        inputLabel: 'Published',
        type: TOGGLE
    },
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateAlbum = Yup.object().shape({
    coverArt: Yup
        .string()
        .required('Required'),
    albumName: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
    primaryArtist: Yup
        .string()
        .required('Required'),
})