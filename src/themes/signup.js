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
        marginBottom: [20, .7, 20],
        boxSizing: borderBox,
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
