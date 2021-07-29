import {MULTI_SELECT, SELECT, TOGGLE} from 'config/variables'

export const identityFields = [
    {
        name: 'adaptiveEquipment',
        inputLabel: 'Adaptive Equipment',
        type: MULTI_SELECT
    },
    {
        name: 'bodyModification',
        inputLabel: 'Body Modification',
        type: MULTI_SELECT
    },
    // blind and deaf should be taxonomy
    {
        name: 'blind',
        inputLabel: 'Blind?',
        type: TOGGLE
    },
    {
        name: 'deaf',
        inputLabel: 'Deaf',
        type: TOGGLE
    },
    {
        name: 'gender',
        inputLabel: 'Gender',
        type: MULTI_SELECT
    },
    {
        name: 'guideAnimal',
        inputLabel: 'Guide Animal',
        type: TOGGLE
    },
    {
        name: 'languagePrimary',
        inputLabel: 'Primary Language',
        type: SELECT
    },
    {
        name: 'languageSecondary',
        inputLabel: 'Secondary Language',
        type: SELECT
    },
    {
        name: 'methodOfCommunication',
        inputLabel: 'Method of Communication',
        type: MULTI_SELECT
    },
    {
        name: 'physicalAppearance',
        inputLabel: 'Is there anything about your physical body that may contribute to how people treat you? ',
        type: MULTI_SELECT
    },
    {
        name: 'pronoun',
        inputLabel: 'Pronouns',
        type: SELECT
    },
    {
        name: 'race',
        inputLabel: 'Ethnicity',
        type: MULTI_SELECT
    },
    {
        name: 'serviceAnimal',
        inputLabel: 'Service Animal',
        type: MULTI_SELECT
    },
    {
        name: 'sexualOrientation',
        inputLabel: 'Sexual Orientation',
        type: MULTI_SELECT
    },
    {
        name: 'transgender',
        inputLabel: 'Transgender',
        type: TOGGLE
    },
]
