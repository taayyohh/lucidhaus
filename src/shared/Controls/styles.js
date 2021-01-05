import {
    colorPalette,
    globals
}                         from 'config/styles'
import {genericCardStyle} from 'shared/Cards/styles'
import {defaultFormStyle} from 'shared/Forms/styles'
import {
    absolute,
    black,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    grid,
    none,
    pointer,
    spaceBetween,
    sv,
    uppercase,
    white
} from 'utils/themer'

export const orderCardWrapperStyle = {
    ...genericCardStyle,
    borderRadius: [5, .7, 5],
    padding: [30, .7, 30],
    hover: {
        ...genericCardStyle.hover,
        cursor: pointer
    }
}

export const orderDetailInnerStyle = {
    marginBottom: [30, .7, 30]
}

export const orderDetailStyle = {
    size: 28
}

export const orderDetailWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(50)
}

export const orderCardProductsStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(20)
}

export const orderCardStyle = {
    border: `1px solid ${globals.colors.borderColor}`
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
export const deletePromptButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    alignSelf: flexStart,
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [40, .7, 40],
    paddingRight: [40, .7, 40],
    display: flex,
    alignItems: center,
    justifyContent: center,
    size: [28, .7, 28],
    color: black,
    textDecoration: none,
    transition: 'background-color 250ms ease, color 250ms ease',
    marginTop: [20, globals.style.layoutScalingValue, 20],
    borderRadius: 5,
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.lightGray,
        color: black,
    }
}

export const deletePromptConfirmButtonStyle = {
    borderColor: colorPalette.brightRed,
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.brightRed,
        color: white
    }
}

export const deletePromptCloseIconStyle = {
    size: [38, .7, 38],
    position: absolute,
    right: [20, .7, 20],
    top: [20, .7, 20],
    hover: {
        color: colorPalette.red,
        cursor: pointer
    }
}

export const deletePromptHeadingStyle = {
    size: [42, .7, 42],
    marginBottom: [20, .7, 20]
}

export const dangerZoneStyle = {
    ...defaultFormStyle,
    marginTop: [50, .7, 50],
    borderColor: colorPalette.brightRed,
    borderRadius: [5, .7, 5]
}

export const dangerZoneHeadingStyle = {
    size: [30, .7, 30],
    marginBottom: [20, .7, 20]
}

export const dangerZoneButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [5, .7, 5],
    color: colorPalette.brightRed,
    alignSelf: center,
    padding: `${sv(10)} ${sv(20)}`,
    letterSpacing: [1, .7, 1],
    hover: {
        color: white,
        backgroundColor: colorPalette.brightRed,
        cursor: pointer
    }
}

export const dangerZoneInnerWrapperStyle = {
    display: flex,
    width: '100%',
    justifyContent: spaceBetween,
    borderBottom: `1px solid ${globals.colors.borderColor}`
}

export const dangerZoneItemWrapperStyle = {
    display: flex,
    flexDirection: column,
    paddingBottom: [20, .7, 20],
    paddingTop: [20, .7, 20]
}

export const dangerZoneItemHeadingStyle = {
    weight: 800,
    size: [18, .7, 18],
    letterSpacing: [.3, .7, .3]
}

export const dangerZoneItemDescriptionStyle = {
    weight: 300
}