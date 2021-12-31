import {ADDRESS, COUNTRY, EMAIL, REGION, TEL, TEXT} from 'config/variables'
import * as Yup                                     from 'yup'


/**
 *
 * FORM FIELDS A ORDER
 *
 **/

export const orderFields = [
    {
        name: 'autoAddress',
        inputLabel: 'Address',
        type: ADDRESS
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'address',
        inputLabel: 'Address',
        type: TEXT
    },
    {
        name: 'address2',
        inputLabel: 'Unit/Apt #',
        type: TEXT
    },
    {
        name: 'country',
        inputLabel: 'Country/Region',
        type: COUNTRY
    },
    {
        name: 'state',
        inputLabel: 'State/Province',
        type: REGION
    },
    {
        name: 'city',
        inputLabel: 'City',
        type: TEXT
    },
    {
        name: 'zip',
        inputLabel: 'ZIP or Postal Code',
        type: TEXT
    },
    {
        name: 'phone',
        inputLabel: 'Phone',
        type: TEL
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: EMAIL
    },
    {
        name: 'company',
        inputLabel: 'Company',
        type: TEXT
    }
]

/**
 *
 * FORM VALIDATION
 *
 **/
export const validateCheckoutAddress = Yup.object().shape({
    address: Yup
        .string()
        .required('*'),
    city: Yup
        .string()
        .required('*'),
    zip: Yup
        .string()
        .required('*'),
    state: Yup
        .string()
        .required('*'),
    country: Yup
        .string()
        .required('*'),
    phone: Yup
        .string()
        .required('*'),
    email: Yup
        .string()
        .required('*')
})
