import {globals}          from '../../config/styles'
import {
    flexEnd,
    none,
    pointer,
    uppercase,
    white
}                         from '../../utils/themer'
import {genericCardStyle} from '../Cards/styles'

export const orderCardWrapperStyle = {
    ...genericCardStyle,
    hover: {
        ...genericCardStyle.hover,
        cursor: pointer
    }
}
export const genericButtonStyle = {
    border: `1px solid #dadce0`,
    background: '#5e4a6c',
    color: white,
    font: globals.fonts.sans,
    borderRadius: [5, .7, 5],
    alignSelf: flexEnd,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    letterSpacing: [1, .7, 1],
    cursor: pointer,
    marginTop: 20,
    textTransform: uppercase,
    size: [16, .7, 16],
    transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
    focus: {
        outline: none,
    },
    hover: {
        cursor: 'pointer',
        border: `1px solid #dadce0`,
        background: '#582a77',
        color: white,
    }
}