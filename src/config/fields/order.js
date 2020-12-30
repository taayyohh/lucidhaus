import * as Yup from 'yup'

export const orderFieldTypes = [
    {
      name: 'autoAddress',
      inputLabel: 'Address',
      type: 'autoAddress'
    },
    {
        name: 'address',
        inputLabel: 'Address',
        type: 'text'
    },
    {
        name: 'address2',
        inputLabel: 'Unit/Apt #',
        type: 'text'
    },
    {
        name: 'country',
        inputLabel: 'Country/Region',
        type: 'country'
    },
    {
        name: 'state',
        inputLabel: 'State/Province',
        type: 'region'
    },
    {
        name: 'city',
        inputLabel: 'City',
        type: 'text'
    },
    {
        name: 'zip',
        inputLabel: 'ZIP or Postal Code',
        type: 'text'
    },
    {
        name: 'phone',
        inputLabel: 'Phone:',
        type: 'tel'
    },
    {
        name: 'company',
        inputLabel: 'Company',
        type: 'text'
    }
]
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
        .required('*')
})