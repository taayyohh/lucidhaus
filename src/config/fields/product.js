import {shopUploadPath} from '../index'

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