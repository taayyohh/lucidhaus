import {TEXT}   from 'config/variables'
import * as Yup from 'yup'

export const productCategoryFields = [
    {
        name: 'name',
        inputLabel: 'Category',
        type: TEXT,
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateProductCategory = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
})
