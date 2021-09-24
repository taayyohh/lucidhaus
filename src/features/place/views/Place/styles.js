import {colorPalette, globals}     from 'config/styles'
import {borderBox, pointer, white} from 'utils/themer'

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
