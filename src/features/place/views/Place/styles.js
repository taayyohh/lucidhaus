import {colorPalette, globals}                              from 'config/styles'
import {borderBox, center, flex, flexStart, pointer, white} from 'utils/themer'

export const placeDescriptionStyle = {
    boxSizing: borderBox,
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    size: [16, .7, 16]
}
export const placeDescriptionWrapperStyle = {
    marginTop: [50, .7, 20],
    marginBottom: [40, .7, 20],
}

export const LeaveAReviewButtonStyle = {
    alignSelf: flexStart,
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
    borderRadius: [25, globals.style.layoutScalingValue, 25],
    marginLeft: [5, .7, 5],
    border: `1px solid ${globals.colors.borderColor}`
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
