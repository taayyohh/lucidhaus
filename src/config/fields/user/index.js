import {NUMBER, TEL, TEXT} from 'config/index'

export const userFields = [
    {
        name: 'nameFirst',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'role',
        inputLabel: 'Account Type',
        type: NUMBER
    },
    {
        name: 'tel',
        inputLabel: 'Phone Number',
        type: TEL
    }
]
