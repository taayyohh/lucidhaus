import {
    RICH_TEXT,
    TEXT,
    TOGGLE,
    UPLOAD,
    UPLOAD_PATHS
} from 'config'

export const postFields = [
    {
        name: 'photo', //not neccesary
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.post,
        type: UPLOAD,
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Post Description',
        type: RICH_TEXT
    },
    {
        name: 'isPublished',
        type: TOGGLE
    }
]