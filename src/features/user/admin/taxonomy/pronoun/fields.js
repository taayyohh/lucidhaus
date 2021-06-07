import {RICH_TEXT, TEXT} from 'config/variables'
import * as Yup          from 'yup'

export const pronounField = [
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
        name: 'subjectiveSingular',
        inputLabel: 'Subjective Singular',
        type: TEXT
    },
    {
        name: 'objectiveSingular',
        inputLabel: 'Objective Singular',
        type: TEXT
    },
    {
        name: 'objectivePossessive',
        inputLabel: 'Objective Possessive',
        type: TEXT
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validatePronoun = Yup.object().shape({
    subjectiveSingular: Yup
        .string()
        .required('Required'),
    objectiveSingular: Yup
        .string()
        .required('Required'),
    objectivePossessive: Yup
        .string()
        .required('Required'),
})
