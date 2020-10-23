import {
    businessUploadPath,
    shopUploadPath
} from './s3'

/**
 *
 * Array used in FieldSwitch
 *
 * structure of object in array:
 * name: api model field name
 * inputLabel: text that appears in input
 * type: used to determine component type in FieldSwitch
 *
 *
 */

export const signInFieldTypes = [
    {
        name: 'email',
        inputLabel: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: 'password'
    }
]

export const signUpFieldTypes = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: 'password'
    }
]

export const userFieldTypes = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    }
]

export const businessFieldTypes = [
    {
        name: 'photo', //not neccesary
        cropWidth: 500,
        cropHeight: 500,
        s3Path: businessUploadPath,
        type: 'singleImageUpload',
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    },
    {
        name: 'description',
        inputLabel: 'Business Description',
        type: 'richText'
    },
]

export const productFieldTypes = [
    {
        cropWidth: 500,
        cropHeight: 500,
        s3Path: shopUploadPath,
        type: 'singleImageUpload',
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    },
    {
        name: 'description',
        inputLabel: 'Product Description',
        type: 'richText'
    },
    {
        name: 'price',
        inputLabel: 'Price',
        type: 'number'
    },
    {
        name: 'quantity',
        inputLabel: 'Quantity',
        type: 'number'
    },
    {
        name: 'sold',
        inputLabel: 'Sold',
        type: 'number',
        disabled: 'disabled'
    }
]