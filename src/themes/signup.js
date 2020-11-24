import {
    auto,
    borderBox,
    column,
    fixed,
    flex,
    flexStart,
    relative,
    sv,
    white
}                from '../utils/themer'
import {globals} from '../config/styles'

export const genericFormStyle = {
    display: flex,
    alignItems: flexStart,
    flexDirection: column,
    width: [700, .6, '100%'],
    padding: [80, globals.style.layoutScalingValue, 30],
    background: '#fcfcfc',
    border: '1px solid #dadce0',
    borderRadius: [10, .7, 10],
    boxShadow: 'inset 0px 0px 4px #d9d9d9',
    position: relative,
    height: auto,
    boxSizing: borderBox,
    margin: '0 auto',
    heading: {
        margin: 0,
        fontFamily: globals.fonts.fancy,
        alignSelf: flexStart,
        size: [38, .7, 38],
        marginBottom: 20
    },
    fieldset: {
        marginBottom: [20, .7, 20],
        background: white
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
