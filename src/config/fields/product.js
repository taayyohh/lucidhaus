import {
    NUMBER,
    RICH_TEXT,
    SELECT,
    TEXT,
    TOGGLE,
    UPLOAD,
    UPLOAD_PATHS
}               from 'config'
import * as Yup from 'yup'

export const productFields = [
    {
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.shop,
        type: UPLOAD,
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Product Description',
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
        .integer()
})