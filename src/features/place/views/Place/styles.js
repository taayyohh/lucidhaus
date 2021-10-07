import {colorPalette, globals}                                                from 'config/styles'
import {auto, borderBox, center, column, flex, flexStart, pointer, sv, white} from 'utils/themer'

export const placeDescriptionStyle = {
    boxSizing: borderBox,
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    size: [16, .7, 16],
    lineHeight: [32, .7, 32]
}
export const placeDescriptionWrapperStyle = {
    marginTop: [20, .7, 20],
    marginBottom: [60, .7, 50],
    paddingBottom: [20, .7, 20],
    width: `calc(100% - ${sv(120, globals.style.layoutScalingValue)})`,
    marginLeft: auto,
    marginRight: auto,
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    mobile: {
        width: '100%'
    }
}

export const LeaveAReviewButtonStyle = {
    alignSelf: flexStart,
    alignItems: center,
    marginTop: [15, .7, 15],
    backgroundColor: colorPalette.darkHoneyYellow,
    paddingLeft: [15, .7, 15],
    paddingRight: [15, .7, 15],
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    display: 'flex',
    flexDirection: 'column',
    borderRadius: [5, .7, 5],
    color: white,
    size: [15, .7, 15],
    weight: 600,
    border: `1px solid ${colorPalette.darkHoneyYellow}`,
    transition: 'background 200ms ease',
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.honeyYellow,
        border: `1px solid ${colorPalette.honeyYellow}`,

    }
}

export const scoreCircleStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    size: [16, .7, 16],
    height: [45, globals.style.layoutScalingValue, 45],
    width: [45, globals.style.layoutScalingValue, 45],
    minWidth: [45, globals.style.layoutScalingValue, 45],
    minHeight: [45, globals.style.layoutScalingValue, 45],
    borderRadius: [25, globals.style.layoutScalingValue, 25],
    marginLeft: [5, .7, 5],
    border: `1px solid ${globals.colors.borderColor}`,
    background: white
}

export const inclusiveScoreStyle = {
    backgroundColor: colorPalette.forestGreen,
    borderColor: colorPalette.forestGreen,
    color: white,
}

export const scoreWrapperStyle = {
    display: flex,
    alignItems: center,
    marginRight: [15, globals.style.layoutScalingValue, 15],
    weight: 600,
    size: [15, .7, 15]
}

export const scoreBarStyle = {
    display: 'flex',
    marginBottom: [30, .7, 30],
    mobile: {
        flexDirection: column
    }
}
