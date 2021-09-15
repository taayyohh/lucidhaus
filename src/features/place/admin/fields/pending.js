import {IMAGE_UPLOAD, MULTI_SELECT, NUMBER, RICH_TEXT, SELECT, TEXT, TOGGLE, UPLOAD_PATHS, USER} from 'config/variables'
import * as Yup                                                                                  from 'yup'

export const pendingFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Description',
        type: RICH_TEXT
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
        name: 'accessibleDoorway',
        inputLabel: 'Accessible Doorway ',
        type: TEXT
    },
    {
        name: 'audioAvailable',
        inputLabel: 'Audio Available',
        type: TOGGLE
    },
    {
        name: 'address1',
        inputLabel: 'Address ',
        type: TEXT
    },
    {
        name: 'address2',
        inputLabel: 'Address 2 ',
        type: TEXT
    },
    {
        name: 'city',
        inputLabel: 'City ',
        type: TEXT
    },
    {
        name: 'zip',
        inputLabel: 'Zip ',
        type: TEXT
    },
    {
        name: 'country',
        inputLabel: 'Country',
        type: TEXT
    },
    {
        name: 'state',
        inputLabel: 'State ',
        type: TEXT
    },
    {
        name: 'longitude',
        inputLabel: 'Longitude ',
        type: NUMBER
    },
    {
        name: 'latitude',
        inputLabel: 'Latitude ',
        type: NUMBER
    },
    {
        name: 'bathrooms',
        inputLabel: 'Bathrooms',
        type: SELECT
    },
    {
        name: 'braille',
        inputLabel: 'Braille',
        type: TOGGLE
    },
    {
        name: 'brickAndMortar',
        inputLabel: 'Published',
        type: TOGGLE
    },
    {
        name: 'categories',
        inputLabel: 'Categories',
        type: MULTI_SELECT
    },
    {
        name: 'communitiesServed',
        inputLabel: 'Communities Served',
        type: MULTI_SELECT
    },
    {
        name: 'foodOptions',
        inputLabel: 'Food Options',
        type: MULTI_SELECT
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
        name: 'languageSpoken',
        inputLabel: 'Language Spoken',
        type: MULTI_SELECT
    },
    {
        name: 'largeAdaptiveEquipment',
        inputLabel: 'Large Adaptive Equipment',
        type: TOGGLE
    },
    {
        name: 'onlyAccessibleByStairs',
        inputLabel: 'Only Accessible By Stairs',
        type: TOGGLE
    },
    {
        name: 'businessOwner',
        inputLabel: 'Owners',
        type: SELECT
    },
    {
        name: 'publicTransportation',
        inputLabel: 'Public Transportation',
        type: TOGGLE
    },
    {
        name: 'signLanguageAccessible',
        inputLabel: 'Sign Language Accessible',
        type: TOGGLE
    },
    {
        name: 'website',
        inputLabel: 'Website',
        type: TEXT
    },
    {
        name: 'wheelchairElevator',
        inputLabel: 'Wheelchair Accessible Elevator',
        type: TOGGLE
    },
    {
        name: 'wheelchairParking',
        inputLabel: 'Wheelchair Accessible Parking',
        type: TOGGLE
    },
    {
        name: 'wheelchairRamps',
        inputLabel: 'Wheelchair Accessible Ramps',
        type: TOGGLE
    },
    {
        name: 'wheelchairRestroom',
        inputLabel: 'Wheelchair Accessible Restrooms',
        type: TOGGLE
    },
    {
        name: 'isPendingSubmission',
        inputLabel: 'Pending Submission',
        type: TOGGLE
    },
    {
        name: 'submittedBy',
        inputLabel: 'Submitted By',
        type: USER
    },
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validatePlace = Yup.object().shape({
    photo: Yup
        .string(),
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
})
