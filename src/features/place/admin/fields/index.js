import {IMAGE_UPLOAD, SELECT, TEXT, TOGGLE, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                           from 'yup'

export const placeField = [
    {
        name: 'accessibility',
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'bathrooms',
        inputLabel: 'Bathrooms',
        type: SELECT
    },
    {
        name: 'brickAndMortar',
        inputLabel: 'Published',
        type: TOGGLE
    },
    {
        name: 'categories',
        inputLabel: 'Categories',
        type: SELECT
    },
    {
        name: 'communitiesServed',
        inputLabel: 'Communities Served',
        type: SELECT
    },
    {
        name: 'description',
        inputLabel: 'Description',
        type: TEXT
    },
    {
        name: 'foodOptions',
        inputLabel: 'Food Options',
        type: SELECT
    },
    {
        name: 'isPublished',
        inputLabel: 'Published',
        type: TOGGLE
    },
    {
        name: 'isRestaurant',
        inputLabel: 'Restaurant',
        type: TOGGLE
    },
    {
        name: 'languages',
        inputLabel: 'Language Spoken',
        type: SELECT
    },
    {
        name: 'owners',
        inputLabel: 'Owners',
        type: SELECT
    },
    {
        name: 'photo',
        file: 'photoFile',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.place,
        type: IMAGE_UPLOAD,
    },
    {
        name: 'publicTransportation',
        inputLabel: 'Public Transportation',
        type: TOGGLE
    },
    {
        name: 'website',
        inputLabel: 'Website',
        type: TEXT
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validatePlace = Yup.object().shape({
    photo: Yup
        .string()
        .required('Required'),
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
})
