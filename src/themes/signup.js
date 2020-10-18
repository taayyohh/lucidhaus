import {
    auto,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    relative,
    sv
}                from '../utils/themer'
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
        fontFamily: globals.fonts.script,
        alignSelf: center,
        size: 48,
        marginBottom: 20
    },
    fieldset: {
        marginBottom: [20, .7, 20],
    },
    button: {
        padding: '20px 60px',
        transition: 'background 250ms ease',
        size: [16, .7, 16],
        hover: {
            background: globals.colors.buttonHoverColor
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
