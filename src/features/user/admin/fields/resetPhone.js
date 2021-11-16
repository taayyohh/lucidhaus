import {TEL}         from 'config/variables'
import {phoneRegExp} from 'utils/helpers'
import * as Yup      from 'yup'

export const resetPhoneFields = [
    {
        name: 'tel',
        inputLabel: 'Enter New Phone Number',
        type: TEL
    }
]


export const validateResetPhone = Yup.object().shape({
    tel: Yup.string()
        .matches(phoneRegExp, 'invalid phone')
        .required('*')
})

