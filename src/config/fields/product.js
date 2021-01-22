import {
    NUMBER,
    RICH_TEXT,
    SELECT,
    TEXT,
    TOGGLE,
    IMAGE_UPLOAD,
    UPLOAD_PATHS
}               from 'config'
import * as Yup from 'yup'

export const productFields = [
    {
        name: 'photo',
        file: 'photoFile',
        inputLabel: 'Product Image',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.shop,
        type: IMAGE_UPLOAD,
    },
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
        name: 'price',
        inputLabel: 'Price',
        type: NUMBER
    },
    {
        name: 'quantity',
        inputLabel: 'Quantity',
        type: NUMBER
    },
    {
        name: 'sold',
        inputLabel: 'Sold',
        type: NUMBER,
        disabled: true
    },
    {
        name: 'category',
        inputLabel: 'Category',
        type: SELECT
    },
    {
        name: 'isPublished',
        inputLabel: 'Published',
        type: TOGGLE
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateProduct = Yup.object().shape({
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
    price: Yup
        .number()
        .required('Required')
        .positive()
        .integer(),
    quantity: Yup
        .number()
        .required('Required')
        .positive()
        .integer(),
    category: Yup
        .string()
        .required('Required'),
})