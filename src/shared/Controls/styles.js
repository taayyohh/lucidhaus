import {colorPalette, globals} from 'config/styles'
import {genericCardStyle}      from 'shared/Cards/styles'
import {defaultFormStyle}      from 'shared/Fields/styles'
import {
    absolute,
    black,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    grid,
    hidden,
    inlineFlex,
    none,
    pointer,
    relative,
    spaceBetween,
    sv,
    white
}                              from 'utils/themer'

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
    background: colorPalette.forestGreen,
    color: white,
    font: globals.fonts.sans,
    borderRadius: [5, .7, 5],
    alignSelf: flexEnd,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    paddingRight: [20, globals.style.layoutScalingValue, 20],
    letterSpacing: [1, globals.style.layoutScalingValue, 1],
    cursor: pointer,
    marginTop: 20,
    size: [16, .7, 16],
    transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
    mobile: {
        width: '100%',
        marginTop: 20
    },
    focus: {
        outline: none,
    },
    hover: {
        cursor: 'pointer',
        border: `1px solid #dadce0`,
        background: colorPalette.seaGreen,
        color: white,
    }
}
export const deletePromptButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    backgroundColor: globals.colors.borderColor,
    alignSelf: flexStart,
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [40, .7, 40],
    paddingRight: [40, .7, 40],
    display: flex,
    alignItems: center,
    justifyContent: center,
    size: [16, .7, 16],
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
    borderColor: colorPalette.darkHoneyYellow,
    backgroundColor: colorPalette.darkHoneyYellow,
    color: white,
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.honeyYellow,
        borderColor: colorPalette.honeyYellow,
        color: white
    }
}

export const deletePromptCloseIconWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: 50,
    width: 50,
    borderRadius: `${sv(10)} ${sv(10)} ${sv(10)} ${sv(10)}`,
    backgroundColor: colorPalette.paleGreen,
    border: `1px solid ${colorPalette.paleGreen}`,
    position: absolute,
    top: [5, .7, 5],
    right: [5, .7, 5],
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.forestGreen,
        borderColor: colorPalette.forestGreen
    }
}

export const deletePromptIconStyle = {
    size: [18, .7, 18],
    color: white
}

export const deletePromptHeadingStyle = {
    size: [24, .7, 24],
    marginBottom: [20, .7, 20],
    marginTop: [50, .7, 50],
    weight: 800
}

export const dangerZoneStyle = {
    ...defaultFormStyle,
    marginTop: [50, .7, 50],
    borderColor: colorPalette.brightRed,
    borderRadius: [5, .7, 5]
}

export const dangerZoneHeadingStyle = {
    size: [30, .7, 30],
    marginBottom: [20, .7, 5]
}

export const dangerZoneButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [5, .7, 5],
    color: colorPalette.brightRed,
    alignSelf: center,
    padding: `${sv(10)} ${sv(20)}`,
    letterSpacing: [1, .7, 1],
    mobile: {
        width: '100%',
        backgroundColor: colorPalette.brightRed,
        color: white,
        weight: 500,
        display: flex,
        alignItems: center,
        justifyContent: center,
    },
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
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    mobile: {
        flexDirection: column,
        borderBottom: 0
    }
}

export const dangerZoneItemWrapperStyle = {
    display: flex,
    flexDirection: column,
    paddingBottom: [20, .7, 20],
    paddingTop: [20, .7, 10]
}

export const dangerZoneItemHeadingStyle = {
    weight: 800,
    size: [18, .7, 18],
    letterSpacing: [.3, .7, .3]
}

export const dangerZoneItemDescriptionStyle = {
    weight: 300
}

export const toolTipIconStyles = {
    size: [22, .7, 22],
    color: colorPalette.paleGreen,
    marginLeft: [5, .7, 5],
    hover: {
        cursor: pointer
    }
}

export const toolTipStyles = {
    display: inlineFlex,
    alignSelf: flexStart,
    position: relative,
    width: [200, globals.style.layoutScalingValue, 200]
}

export const toolTipMessageStyles = {
    overflow: hidden,
    position: absolute,
    right: [-150, globals.style.layoutScalingValue, -150],
    top: [-40, .7, 40],
    borderRadius: [10, .7, 10],
    background: colorPalette.seaFoamGreen,
    size: [14, .7, 14]
}

export const toolTipMessageInnerStyles = {
    paddingLeft: [10, globals.style.layoutScalingValue, 10],
    paddingRight: [10, globals.style.layoutScalingValue, 10],
    paddingTop: [10, globals.style.layoutScalingValue, 10],
    paddingBottom: [10, globals.style.layoutScalingValue, 10]

}
