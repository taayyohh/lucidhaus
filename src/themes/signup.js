import {
    absolute,
    auto,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    none,
    relative,
    sv
} from '../utils/themer'
import {globals} from '../variables/styles'

export const signUpFormStyle = {
    display: flex,
    alignItems: flexStart,
    flexDirection: column,
    width: [500, .6, '100%'],
    position: relative,
    height: auto,
    boxSizing: borderBox,
    margin: '0 auto',
    // border: '1px solid #000',
    heading: {
        margin: 0,
        fontFamily: globals.fonts.fancyFont,
        alignSelf: center,
        size: 48,
        marginBottom: 20
    },
    fieldset: {
        position: relative,
        width: '100%',
        border: '1px solid #000',
        borderRadius: '5px',
        paddingTop: [20, .7, 20],
        paddingBottom: [20, .7, 20],
        paddingLeft: [20, .7, 20],
        paddingRight: [20, .7, 20],
        marginBottom: [20, .7, 20],
        boxSizing: borderBox,
        child: [
            {
                selector: 'legend',
                height: 0,
                width: 0,
                padding: 0,
                margin: 0
            },
            {
                selector: 'label',
                weight: 300,
                size: [18, .7, 18],
                color: '#585858'

            },
            {
                selector: 'input',
                weight: 300,
                size: [18, .7, 18],
                textAlign: center

            }
        ]
    },
    button: {
        padding: '20px 60px',
        background: '#139080',
        transition: 'background 500ms ease',
        size: [16, .7, 16],
        hover: {
            background: '#54cebe'
        }
    },
    child: [
        {
            selector: 'input',
            width: '100%',
            height: '100%',
            boxSizing: borderBox,
            border: none,
            borderRadius: 'inherit',
            fontFamily: globals.fonts.headerFont,
            padding: '0 30px',
            tablet: {
                size: 32,
            },
            small: {},
            large: {},
            focus: {
                outline: none
            }
        },
        {
            selector: 'label',
            fontFamily: globals.fonts.headerFont,
            position: absolute,
            tablet: {
                size: 18,
            },
            small: {},
            large: {}
        }
    ],
    error: {
        position: fixed,
        background: '#901313',
        padding: `${sv(10)} ${sv(35)}`,
        color: '#fff',
        zIndex: 10,
    }
}

export const signInFormStyle = {
    ...signUpFormStyle,
    heading: {
        ...signUpFormStyle.heading,
    },
    fieldset: {
        ...signUpFormStyle.fieldset
    }
}
