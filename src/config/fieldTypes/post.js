import {postUploadPath} from '../index'

export const postFieldTypes = [
    {
        name: 'photo', //not neccesary
        cropWidth: 500,
        cropHeight: 500,
        s3Path: postUploadPath,
        type: 'singleImageUpload',
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    },
    {
        name: 'description',
        inputLabel: 'Post Description',
        type: 'richText'
    },
    {
        name: 'isPublished',
        type: 'bool'
    }
]