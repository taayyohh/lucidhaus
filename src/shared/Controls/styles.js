import {
    colorPalette,
    globals
} from 'config/styles'
import {
    black,
    flexEnd,
    flexStart,
    none,
    pointer,
    transparent,
    uppercase,
    white
} from 'utils/themer'
import {genericCardStyle} from 'shared/Cards/styles'

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
export const deleteButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    alignSelf: flexStart,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    color: black,
    textDecoration: none,
    transition: 'background-color 250ms ease, color 250ms ease',
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
    borderRadius: 5,
    hover: {
        cursor: pointer,
        backgroundColor: globals.colors.linkHoverColor,
        color: white
    }
}

export const removeFromCartButtonStyle = {
    border: none,
    background: transparent,
    textDecoration: 'underline',
    alignSelf: flexEnd,
    hover: {
        color: colorPalette.purple,
        cursor: pointer
    }
}