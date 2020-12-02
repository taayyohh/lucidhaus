import {
    postUploadPath,
    shopUploadPath
} from './index'

/**
 *
 * Array used in FieldSwitch
 *
 * structure of object in array:
 * name: api model field name
 * inputLabel: text that appears in input
 * type: used to determine component type in FieldSwitch
 *
 * /// special types & their extra paramaters
 *
 * singleImageUpload
 * s3Path: path to bucket in s3
 * cropWidth, cropWidth: set the height and width of cropper tool
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
        disabled: true
    },
    {
        name: 'category',
        inputLabel: 'Category',
        type: 'select'
    },
    {
        name: 'isPublished',
        type: 'bool'
    }
]

export const productCategoryFieldTypes = [
    {
        name: 'name',
        inputLabel: 'Category',
        type: 'text',
    }
]