import {RICH_TEXT, TEXT} from 'config/variables'
import * as Yup          from 'yup'

export const communitiesServedFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Post Description',
        type: RICH_TEXT
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateCommunitiesServed = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
})
